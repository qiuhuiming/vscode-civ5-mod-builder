/* eslint-disable @typescript-eslint/naming-convention */
interface XMLMeta {
  "@_version": string;
  "@_encoding": string;
}

const metaDataGroupCondition = "'$(Configuration)' == ''";

type ModActionSetEnum =
  | "OnModActivated"
  | "OnGetDLLPath"
  | "OnCreateModUserData";
type ModActionTypeEnum = "OnModActivated";
export type ModContentTypeEnum =
  | "Custom"
  | "Map"
  | "MapScript"
  | "CityViewUIAddin"
  | "DiplomacyUIAddin"
  | "InGameUIAddin";

interface ModContentType {
  Type: ModContentTypeEnum;
  Name: string;
  Description: string;
  FileName: string;
}

interface ModActionType {
  Set: ModActionSetEnum;
  Type: ModActionTypeEnum;
  FileName: string;
}

interface ModAssociationType {
  Type: "Mod" | "Dlc" | "Game";
  Name: string;
  Id: string;
  MinVersion: number;
  MaxVersion: number;
}

export interface PropertyType {
  Configuration:
    | {
        "#text": string;
        "@_Condition": string;
      }
    | string;
  ProjectGuid: string;
  Name: string;
  Guid: string;
  ModVersion: number;
  Stability: string;
  Teaser: string;
  Description: string;
  Authors: string;
  SpecialThanks: string;
  AffectsSavedGames: boolean;
  MinCompatibleSaveVersion: number;
  SupportsSinglePlayer: boolean;
  SupportsMultiplayer: boolean;
  SupportsHotSeat: boolean;
  SupportsMac: boolean;
  AssemblyName: string;
  RootNamespace: string;
  ReloadAudioSystem: boolean;
  ModReferences: {
    Association: ModAssociationType[] | ModAssociationType;
  };
  ModDependencies?: {
    Association: ModAssociationType[] | ModAssociationType;
  };
  ModBlockers?: {
    Association: ModAssociationType[] | ModAssociationType;
  };
  ModActions?: {
    Action: ModActionType[] | ModActionType;
  };
  ModContent?: {
    Content: ModContentType[] | ModContentType;
  };
}

export interface InputSchema {
  "?xml": XMLMeta;
  Project: {
    PropertyGroup: PropertyType[] | PropertyType;
    ItemGroup: {
      Folder?: {
        "@_Include": string;
      }[];
      Content?: {
        SubType: "Lua";
        ImportIntoVFS: "True" | "False";
        "@_Include": string;
      }[];
    }[];
  };
}

export interface OutFileType {
  "#text": string;
  "@_md5": string;
  "@_import": "0" | "1";
}

export interface OutputModAssociationType {
  "@_id": string;
  "@_minversion": string;
  "@_maxversion": string;
  "@_title": string;
}

export interface EntryPointType {
  Name?: string;
  Description?: string;
  "@_type"?: ModContentTypeEnum;
  "@_file"?: string;
}
export interface OutputSchema {
  "?xml": XMLMeta;
  Mod: {
    "@_id": string;
    "@_version": string;
    Properties: {
      [key: string]: string | number;
    };
    Dependencies?: {
      Game?: OutputModAssociationType[] | OutputModAssociationType;
      Mod?: OutputModAssociationType[] | OutputModAssociationType;
      Dlc?: OutputModAssociationType[] | OutputModAssociationType;
    };
    References?: {
      Game?: OutputModAssociationType[] | OutputModAssociationType;
      Mod?: OutputModAssociationType[] | OutputModAssociationType;
      Dlc?: OutputModAssociationType[] | OutputModAssociationType;
    };
    Blocks?: {
      Game?: OutputModAssociationType[] | OutputModAssociationType;
      Mod?: OutputModAssociationType[] | OutputModAssociationType;
      Dlc?: OutputModAssociationType[] | OutputModAssociationType;
    };
    Files: {
      File: OutFileType[] | OutFileType;
    };
    Actions?: {
      OnGetDLLPath?: {
        SetDllPath: string | string[];
      };
      OnModActivated?: {
        UpdateDatabase: string[] | string;
      };
      OnCreateModUserData?: {
        // TODO: add this
      };
    };
    EntryPoints: {
      EntryPoint: EntryPointType[] | EntryPointType;
    };
  };
}
