/* eslint-disable @typescript-eslint/naming-convention */
import { InputSchema, OutputSchema, PropertyType } from "./types";

function wrap<T>(item: T | T[]): T[] {
  if (Array.isArray(item)) {
    return item;
  } else {
    return [item];
  }
}

function getDefaultProperty(inputObj: InputSchema): PropertyType {
  const property = wrap(inputObj.Project.PropertyGroup).find(
    (pg) => pg.Configuration["#text"] === "Default"
  );
  if (!property) {
    throw new Error("Default property not found");
  }
  return property;
}

class Convertor {
  constructor() {}

  convert(inputObj: InputSchema, outputObj: OutputSchema) {}
}

class MetaConvertor extends Convertor {
  convert(inputObj: InputSchema, outputObj: OutputSchema) {
    if (outputObj.Mod === undefined) {
      outputObj.Mod = {
        Properties: {},
      } as any;
    }

    outputObj["?xml"] = inputObj["?xml"];

    const property = getDefaultProperty(inputObj);
    Object.entries(property)
      .filter(([key, value]) => {
        if (typeof value === "object") {
          return false;
        }
        if (key === "ProjectGuid") {
          return false;
        }
        if (key === "Guid") {
          return false;
        }
        if (key === "ModVersion") {
          return false;
        }
        if (value === "") {
          return false;
        }
        return true;
      })
      .map(([key, value]) => {
        if (typeof value === "boolean") {
          return [key, value ? 1 : 0];
        }
        return [key, value];
      })
      .forEach(([key, value]) => {
        outputObj.Mod.Properties[key] = value;
      });

    outputObj.Mod["@_id"] = property.Guid;
    outputObj.Mod["@_version"] = property.ModVersion.toString();
  }
}

class ModAssociationConvertor extends Convertor {
  convert(inputObj: InputSchema, outputObj: OutputSchema) {
    // TODO
  }
}

class ModActionConvertor extends Convertor {
  convert(inputObj: InputSchema, outputObj: OutputSchema) {
    // TODO
  }
}

class ModContentConvertor extends Convertor {
  convert(inputObj: InputSchema, outputObj: OutputSchema) {
    // TODO
  }
}

class FileConvertor extends Convertor {
  convert(inputObj: InputSchema, outputObj: OutputSchema) {
    // TODO
  }
}

export {
  Convertor,
  MetaConvertor,
  ModAssociationConvertor,
  ModActionConvertor,
  ModContentConvertor,
  FileConvertor,
};
