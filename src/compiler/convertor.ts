import { EntryPointType, ModContentTypeEnum } from "./types";
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
    const associations = wrap(property[associationName]?.Association)?.reduce(
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
      associations.Game.length === 0 &&
      associations.Mod.length === 0 &&
      associations.Dlc.length === 0;
    outputObj.Mod[outputAssociationKey as OutputModAssociationKey] = !empty
      ? {
          Game:
            associations?.Game.length > 0
              ? unwrap(associations.Game)
              : undefined,
          Mod:
            associations?.Mod.length > 0 ? unwrap(associations.Mod) : undefined,
          Dlc:
            associations?.Dlc.length > 0 ? unwrap(associations.Dlc) : undefined,
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
    if (!outputObj.Mod?.Actions) {
      if (!outputObj.Mod) {
        outputObj.Mod = {} as any;
      }
      outputObj.Mod.Actions = {} as any;
    }

    const actions = wrap(getDefaultProperty(inputObj).ModActions?.Action);
    if (!actions) {
      return;
    }

    actions.forEach((action) => {
      // outputObj.Mod.Actions[action.Set][action.Type] = [action.FileName...]
      if (!action) {
        return;
      }

      if (!outputObj!.Mod!.Actions![action.Set]) {
        outputObj!.Mod!.Actions![action.Set] = {} as any;
      }

      const set = outputObj!.Mod!.Actions![action.Set]! as {
        [key: string]: string | string[];
      };
      if (!set[action.Type]) {
        set[action.Type] = action.FileName;
      } else if (typeof set[action.Type] === "string") {
        set[action.Type] = [set[action.Type] as string, action.FileName];
      } else if (Array.isArray(set[action.Type])) {
        (set[action.Type] as string[]).push(action.FileName);
      }
    });
  }
}

class ModContentConvertor extends Convertor {
  convert(inputObj: InputSchema, outputObj: OutputSchema) {
    const contentList = wrap(getDefaultProperty(inputObj).ModContent?.Content);
    if (!contentList) {
      return;
    }

    if (!outputObj.Mod?.Actions) {
      if (!outputObj.Mod) {
        outputObj.Mod = {} as any;
      }
      outputObj.Mod.EntryPoints = {
        EntryPoint: [],
      } as any;
    }

    const entryPoints: EntryPointType[] = contentList.map((content) => {
      return {
        Name: content?.Name,
        Description: content?.Description,
        "@_file": content?.FileName,
        "@_type": content?.Type,
      };
    });

    outputObj!.Mod!.EntryPoints!.EntryPoint = unwrap(entryPoints);
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
