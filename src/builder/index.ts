import path = require("path");
import { compile } from "../compiler";

export interface FileStatus {
  isDirectory: boolean;
  createdAt: Date;
  modifiedAt: Date;
  size: number;
}

export interface FileReader {
  read(path: string): Promise<string>;
  exists(path: string): Promise<boolean>;
  stat(path: string): Promise<FileStatus>;
  list(path: string): Promise<string[]>;
}

export interface FileWriter {
  write(data: string, path: string): Promise<boolean>;
  mkdir(path: string): Promise<boolean>;
  copy(src: string, dest: string): Promise<boolean>;
  remove(path: string): Promise<boolean>;
}

interface BuilderOptions {
  reader: FileReader;
  writer: FileWriter;
}

export class Builder {
  private reader: FileReader;
  private writer: FileWriter;

  public constructor({ reader, writer }: BuilderOptions) {
    this.reader = reader;
    this.writer = writer;
  }

  public async build(inputProjFilePath: string, outputModDirPath: string) {
    const inputProjFileContent = await this.reader.read(inputProjFilePath);
    const { xmlStr, fileList, outputObj } = compile(inputProjFileContent);

    const modNameWithVersion = `${outputObj.Mod.Properties["Name"]} (v ${outputObj.Mod["@_version"]})`;
    const thisModDirPath = path.resolve(outputModDirPath, modNameWithVersion);
    const outputModInfoPath = path.resolve(
      outputModDirPath,
      modNameWithVersion,
      `${modNameWithVersion}.modinfo`
    );

    // make sure the mod dir exists
    if (!(await this.reader.exists(thisModDirPath))) {
      if (!this.writer.mkdir(thisModDirPath)) {
        throw new Error(`Failed to mkdir ${thisModDirPath}`);
      }
    } else {
      const status = await this.reader.stat(thisModDirPath);
      if (!status.isDirectory) {
        // remove file
        if (!this.writer.remove(thisModDirPath)) {
          throw new Error(`Failed to remove ${thisModDirPath}`);
        }
      }
    }

    // rewrite modinfo
    if (await this.reader.exists(outputModInfoPath)) {
      if (!this.writer.remove(outputModInfoPath)) {
        throw new Error(`Failed to remove ${outputModInfoPath}`);
      }
    }
    console.log(`writing modinfo...`);
    if (!(await this.writer.write(xmlStr, outputModInfoPath))) {
      throw new Error(`Failed to write ${outputModInfoPath}`);
    }

    // copy files to mod dir (inputProjDirPath -> thisModDirPath) if the file is not exist or modified
    const inputProjDirPath = path.dirname(inputProjFilePath);
    fileList.forEach(async (file) => {
      const fromPath = path.resolve(inputProjDirPath, file);
      const fromStatus = await this.reader.stat(fromPath);
      const toPath = path.resolve(thisModDirPath, file);

      let willCopy = false;
      if (!(await this.reader.exists(toPath))) {
        willCopy = true;
      }
      if (!willCopy) {
        const toStatus = await this.reader.stat(toPath);
        willCopy = fromStatus.modifiedAt.getTime() !== toStatus.modifiedAt.getTime();
      }

      if (willCopy) {
        console.log(`copying ${fromPath} to ${toPath}`);
        this.writer.copy(fromPath, toPath).then((result) => {
          if (!result) {
            throw new Error(`Failed to copy ${fromPath} to ${toPath}`);
          }
        });
      }
    });
  }
}
