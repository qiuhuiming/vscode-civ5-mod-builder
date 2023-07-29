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
type ModContentTypeEnum =
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

interface ModAssociation {
  Type: "Mod" | "Dlc" | "Game";
  Name: string;
  Id: string;
  MinVersion: number;
  MaxVersion: number;
}

interface PropertyGroupItemType {
  Configuration: {
    "#text": string;
    "@_Condition": string;
  };
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
    Association: ModAssociation[] | ModAssociation;
  };
  ModDependencies: {
    Association: ModAssociation[] | ModAssociation;
  };
  ModBlockers: {
    Association: ModAssociation[] | ModAssociation;
  }[];
  ModActions: {
    Action: ModActionType[] | ModActionType;
  };
  ModContent: {
    Content: ModContentType[] | ModContentType;
  };
}

export interface InputSchema {
  "?xml": XMLMeta;
  Project: {
    PropertyGroup: PropertyGroupItemType[] | PropertyGroupItemType;
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

export interface OutputSchema {
  "?xml": XMLMeta;
  Mod: {
    "@_id": string;
    "@_version": string;
    Properties: {
      [key: string]: string | number;
    };
    Dependencies?: {
      Game?: ModAssociation[] | ModAssociation;
      Mod?: ModAssociation[] | ModAssociation;
      Dlc?: ModAssociation[] | ModAssociation;
    };
    References?: {
      Game?: ModAssociation[] | ModAssociation;
      Mod?: ModAssociation[] | ModAssociation;
      Dlc?: ModAssociation[] | ModAssociation;
    };
    Blocks?: {
      Game?: ModAssociation[] | ModAssociation;
      Mod?: ModAssociation[] | ModAssociation;
      Dlc?: ModAssociation[] | ModAssociation;
    };
    Files: {
      File: OutFileType[] | OutFileType;
    };
    Actions?: {
      OnGetDLLPath?: {
        SetDllPath: string;
      };
      OnModActivated?: {
        UpdateDatabase: string[] | string;
      };
    };
    EntryPoints: {
      EntryPoint: {
        Name: string;
        Description: string;
        "@_type": ModContentTypeEnum;
        "@_file": string;
      }[];
    };
  };
}
