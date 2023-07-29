/* eslint-disable @typescript-eslint/naming-convention */
import {
  InputSchema,
  OutputModAssociationType,
  OutputSchema,
  PropertyType,
} from "./types";

function wrap<T>(item: T | T[]): T[] {
  if (Array.isArray(item)) {
    return item;
  } else {
    return [item];
  }
}

function unwrap<T>(item: T[]): T[] | T {
  if (item.length === 1) {
    return item[0];
  } else {
    return item;
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

type OutputModAssociationKey = "Dependencies" | "Blocks" | "References";

class ModAssociationConvertor extends Convertor {
  outputAssociationKeyMap = {
    ModDependencies: "Dependencies",
    ModBlockers: "Blocks",
    ModReferences: "References",
  };

  convertInner(
    associationName: "ModDependencies" | "ModBlockers" | "ModReferences",
    inputObj: InputSchema,
    outputObj: OutputSchema
  ) {
    const property = getDefaultProperty(inputObj);
    const outputAssociationKey = this.outputAssociationKeyMap[associationName];

    if (!outputObj.Mod?.[outputAssociationKey as OutputModAssociationKey]) {
      if (!outputObj.Mod) {
        outputObj.Mod = {} as any;
      }
      outputObj.Mod[outputAssociationKey as OutputModAssociationKey] =
        {} as any;
    }
    const dependenies = wrap(property[associationName]?.Association)?.reduce(
      (acc, cur) => {
        cur?.Type &&
          acc[cur.Type]?.push({
            "@_id": cur.Id || (undefined as any),
            "@_minversion": cur.MinVersion.toString() || (undefined as any),
            "@_maxversion": cur.MaxVersion.toString() || (undefined as any),
            "@_title": cur.Name || (undefined as any),
          });
        return acc;
      },
      {
        Mod: [] as OutputModAssociationType[],
        Dlc: [] as OutputModAssociationType[],
        Game: [] as OutputModAssociationType[],
      }
    );

    const empty =
      dependenies.Game.length === 0 &&
      dependenies.Mod.length === 0 &&
      dependenies.Dlc.length === 0;
    outputObj.Mod[outputAssociationKey as OutputModAssociationKey] = !empty
      ? {
          Game:
            dependenies?.Game.length > 0 ? unwrap(dependenies.Game) : undefined,
          Mod:
            dependenies?.Mod.length > 0 ? unwrap(dependenies.Mod) : undefined,
          Dlc:
            dependenies?.Dlc.length > 0 ? unwrap(dependenies.Dlc) : undefined,
        }
      : undefined;
  }

  convert(inputObj: InputSchema, outputObj: OutputSchema) {
    this.convertInner("ModDependencies", inputObj, outputObj);
    this.convertInner("ModBlockers", inputObj, outputObj);
    this.convertInner("ModReferences", inputObj, outputObj);
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
