/* eslint-disable @typescript-eslint/naming-convention */
import { XMLBuilder, XMLParser } from "fast-xml-parser";
import { InputSchema, OutputSchema } from "./types";
import {
  Convertor,
  ModFileConvertor,
  MetaConvertor,
  ModActionConvertor,
  ModAssociationConvertor,
  ModContentConvertor,
} from "./convertor";
import { wrap } from "./convertor";

export function compile(input: string): {
  xmlStr: string;
  fileList: string[];
  outputObj: OutputSchema;
} {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
  });
  const inputObj: InputSchema = parser.parse(input);

  let outputObj = {} as OutputSchema;

  const convertors: Convertor[] = [
    new MetaConvertor(),
    new ModAssociationConvertor(),
    new ModActionConvertor(),
    new ModContentConvertor(),
    new ModFileConvertor(),
  ];

  convertors.forEach((c) => c.convert(inputObj, outputObj));

  const builder = new XMLBuilder({ ignoreAttributes: false, format: true });
  const output = builder.build(outputObj);
  return {
    xmlStr: '<?xml version="1.0" encoding="utf-8"?>\n' + output,
    fileList: wrap(outputObj.Mod.Files.File).map((f) => f["#text"]),
    outputObj,
  };
}
