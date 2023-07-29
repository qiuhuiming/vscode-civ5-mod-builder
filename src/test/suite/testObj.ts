/* eslint-disable @typescript-eslint/naming-convention */
export const testInputJs = {
  "?xml": {
    "@_version": "1.0",
    "@_encoding": "utf-8",
  },
  Project: {
    PropertyGroup: [
      {
        Configuration: {
          "#text": "Default",
          "@_Condition": "'$(Configuration)' == ''",
        },
        ProjectGuid: "{0d66d522-b624-4bc5-acfe-15a0c5b729f4}",
        Name: "(1) Community Patch",
        Guid: "d1b6328c-ff44-4b0d-aad7-c657f83610cd",
        ModVersion: 117,
        Stability: "Stable",
        Teaser:
          "(3.6.2) Bugfixes, AI Improvements, Game Optimizations and API Extensions for Civ V",
        Description:
          "Contains core AI improvements and bugfixes for the Civ 5 BNW DLL. Also contains support for the Vox Populi unofficial expansion and its associated mods.",
        Authors: "CivFanatics Community Patch Project Team",
        SpecialThanks: "",
        Categories: "$Categories$",
        AffectsSavedGames: true,
        MinCompatibleSaveVersion: 117,
        SupportsSinglePlayer: true,
        SupportsMultiplayer: true,
        SupportsHotSeat: true,
        SupportsMac: true,
        ReloadUnitSystem: true,
        ReloadLandmarkSystem: true,
        ReloadStrategicViewSystem: true,
        HideSetupGame: false,
        Homepage:
          "https://forums.civfanatics.com/forums/community-patch-project.497/",
        AssemblyName: "Mod Template",
        RootNamespace: "Mod Template",
        ModDependencies: {
          Association: [
            {
              Type: "Game",
              Name: "",
              Id: "",
              MinVersion: "1.0.3.124",
              MaxVersion: "1.0.3.999",
            },
            {
              Type: "Dlc",
              Name: "Expansion 2 - Brave New World",
              Id: "6DA07636-4123-4018-B643-6575B4EC336B",
              MinVersion: 0,
              MaxVersion: 999,
            },
          ],
        },
        ModReferences: "",
        ModBlockers: {
          Association: [
            {
              Type: "Mod",
              Name: "Artificial Unintelligence",
              Id: "a4a8d2bb-cffd-4d8e-8893-d773f25b6fe1",
              MinVersion: 0,
              MaxVersion: 999,
            },
            {
              Type: "Mod",
              Name: "Civilization IV Diplomatic Features - Standalone",
              Id: "275db698-0c69-401e-89a8-7eab501b6bcf",
              MinVersion: 0,
              MaxVersion: 999,
            },
            {
              Type: "Mod",
              Name: "(1a) Civ IV Diplomatic Features - CP",
              Id: "781d81cf-49e1-4acb-ae5f-b9e3713f98d3",
              MinVersion: 0,
              MaxVersion: 999,
            },
          ],
        },
        ModActions: {
          Action: [
            {
              Set: "OnGetDLLPath",
              Type: "SetDllPath",
              FileName: "CvGameCore_Expansion2.dll",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/CommunityPatchTables.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Tables/CoreTableEntries.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Tables/CoreTableAdditions.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Tables/DifficultyTables.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Tables/DifficultyTables.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Tables/CustomModOptions.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Changes/CommunityPatchDLLChanges.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Values/CoreDefines.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Changes/CoreChanges.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Values/CoreValues.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Changes/CoreChanges.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Changes/NewText.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Values/ExtraSpyTable.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/API/Achievements.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/API/Espionage.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/API/Extensions.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/API/PlotBasedDamage.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/API/PlotYields.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/API/Religion.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/BUGFIX/FeatureRemoval.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/BUGFIX/GoodyHutMessages.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/BUGFIX/SpyNames.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/BUGFIX/UnitclassNotUnit.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/BUGFIX/UnitclassNotUnit.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/EVENTS/CanMoveInto.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/EVENTS/CityBombard.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/EVENTS/DiploModifiers.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/EVENTS/BattleRoles.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/GLOBAL/AlpinePasses.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/GLOBAL/CannotEmbark.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/GLOBAL/CityWorking.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/GLOBAL/AutomatonWorkers.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/GLOBAL/ExcludeFromGifts.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/GLOBAL/GreatworkYieldtypes.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/GLOBAL/MoveAfterUpgrade.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/GLOBAL/PassableForts.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/GLOBAL/PromotionClasses.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName:
                "Core Files/PNM Mods DB/GLOBAL/SeparateGreatAdmiral.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/GLOBAL/StackingRules.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/GLOBAL/Relocation.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/PROMOTIONS/CrossIce.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/PROMOTIONS/CrossMountains.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/PROMOTIONS/CrossOceans.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName:
                "Core Files/PNM Mods DB/PROMOTIONS/DeepWaterEmbarkation.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/PROMOTIONS/HalfMove.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName:
                "Core Files/PNM Mods DB/PROMOTIONS/ImprovementBonus.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/PROMOTIONS/UnitNaming.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/PROMOTIONS/VariableRecon.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/PROMOTIONS/VariableRecon.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName:
                "Core Files/PNM Mods DB/RELIGION/ConversionModifiers.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/RELIGION/LocalReligions.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/RELIGION/PlotYields.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName:
                "Core Files/PNM Mods DB/RELIGION/PolicyBranchFaithGp.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/TRADE/RouteScaling.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/TRAITS/AnyBelief.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/TRAITS/CrossesIce.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/TRAITS/TradeRouteBonuses.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/TRAITS/OtherPrereqs.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/UI/CityExpansion.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Changes/EraSpecificArtists.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Changes/EraSpecificMusicians.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Changes/EraSpecificWriters.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Changes/NewArtists.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Changes/NewWriters.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Changes/TextChanges.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Changes/TerrainFixes.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Values/Automates.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Changes/WorldChanges.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Changes/SaneTerrain.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Values/MinorCivQuestRewards.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Values/DummyTrigger.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Text/CoreText_en_US.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Text/CoreText_en_US.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/PNM Mods DB/PROMOTIONS/DeepWater.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Changes/UnitFixes.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Tables/GameEventsTable.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Modules/Events/Text/en_US/City_en_US.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Modules/Events/Text/en_US/EventCore_en_US.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Modules/Events/Text/en_US/Player_en_US.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Values/New_CIV5AICityStrategies.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName:
                "Core Files/Core Values/New_CIV5AIMilitaryStrategies.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName:
                "Core Files/Core Values/New_CIV5MultiUnitFormations.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Modules/Events/CoreEvents.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Tables/JFDContracts.xml",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Values/CargoShipMod.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Changes/DiploAIOptions.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Values/DiploApproachWeights.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Values/DiploOpinionWeights.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Core Files/Core Values/FasterAircraft.sql",
            },
            {
              Set: "OnModActivated",
              Type: "UpdateDatabase",
              FileName: "Modules/MoreGP/ExtraGPs.sql",
            },
          ],
        },
        ModContent: {
          Content: [
            {
              Type: "InGameUIAddin",
              Name: "EventChoice",
              Description: "EventChoice",
              FileName: "Core Files/CoreLua/EventChoicePopup.lua",
            },
            {
              Type: "InGameUIAddin",
              Name: "Event",
              Description: "Event",
              FileName: "Core Files/CoreLua/EventPopup.lua",
            },
            {
              Type: "InGameUIAddin",
              Name: "CityEvent",
              Description: "CityEvent",
              FileName: "Core Files/CoreLua/EventChoicePopupCity.lua",
            },
            {
              Type: "InGameUIAddin",
              Name: "CityEventPopup",
              Description: "CityEventPopup",
              FileName: "Core Files/CoreLua/CityEventPopup.lua",
            },
            {
              Type: "InGameUIAddin",
              Name: "EventOverview.lua",
              Description: "EventOverview.lua",
              FileName: "Core Files/CoreLua/EventOverview.xml",
            },
            {
              Type: "InGameUIAddin",
              Name: "EspionageChoice",
              Description: "EspionageChoice",
              FileName: "Core Files/CoreLua/EspionageChoicePopup.lua",
            },
          ],
        },
        ReloadAudioSystem: true,
      },
      {
        OutputPath: ".",
        "@_Condition": "'$(Configuration)' == 'Default'",
      },
      {
        PackageMod: true,
        DeployMod: false,
        "@_Condition": "'$(Configuration)' == 'Package Only'",
      },
      {
        PackageMod: false,
        DeployMod: true,
        "@_Condition": "'$(Configuration)' == 'Deploy Only'",
      },
    ],
    ItemGroup: [
      {
        Folder: [
          {
            "@_Include": "Core Files\\",
          },
          {
            "@_Include": "Core Files\\Core Changes\\",
          },
          {
            "@_Include": "Core Files\\Core Changes\\GreatArt",
          },
          {
            "@_Include": "Core Files\\Core Changes\\CompressedArt",
          },
          {
            "@_Include": "Core Files\\Core Tables\\",
          },
          {
            "@_Include": "Core Files\\Core Values\\",
          },
          {
            "@_Include": "Core Files\\CoreLua",
          },
          {
            "@_Include": "Core Files\\CoreLua\\EventArt",
          },
          {
            "@_Include": "Core Files\\Text",
          },
          {
            "@_Include": "Core Files\\PNM Mods DB",
          },
          {
            "@_Include": "Core Files\\PNM Mods DB\\API\\",
          },
          {
            "@_Include": "Core Files\\PNM Mods DB\\ART\\",
          },
          {
            "@_Include": "Core Files\\PNM Mods DB\\BUGFIX\\",
          },
          {
            "@_Include": "Core Files\\PNM Mods DB\\EVENTS\\",
          },
          {
            "@_Include": "Core Files\\PNM Mods DB\\GLOBAL\\",
          },
          {
            "@_Include": "Core Files\\PNM Mods DB\\PROMOTIONS\\",
          },
          {
            "@_Include": "Core Files\\PNM Mods DB\\RELIGION\\",
          },
          {
            "@_Include": "Core Files\\PNM Mods DB\\TRADE\\",
          },
          {
            "@_Include": "Core Files\\PNM Mods DB\\TRAITS\\",
          },
          {
            "@_Include": "Core Files\\PNM Mods DB\\UI\\",
          },
          {
            "@_Include": "LUA",
          },
          {
            "@_Include": "Modules",
          },
          {
            "@_Include": "Modules\\Events",
          },
          {
            "@_Include": "Modules\\Events\\Text",
          },
          {
            "@_Include": "Modules\\Events\\Text\\en_US",
          },
          {
            "@_Include": "Modules\\MoreGP",
          },
          {
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items",
          },
          {
            "@_Include": "Mapscript Fixes",
          },
        ],
      },
      {
        Content: [
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\CommunityPatchTables.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\alexander.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\alrashid.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\Core Changes\\CompressedArt\\askia.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\augustus.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\Core Changes\\CompressedArt\\aztec.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\Core Changes\\CompressedArt\\bismark.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\Core Changes\\CompressedArt\\casimir.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\catherine.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\corp80_base.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\corp80_hl.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\CultureLocal.ggxml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\CultureLocal.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\Core Changes\\CompressedArt\\darius.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\DC45_Corporations.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\dom_catherine.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\dom_nebuchadnezzar.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\elizabeth.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\espionagenotification80.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\espionagenotificationglow80.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\EventFrame.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\Core Changes\\CompressedArt\\ghandi.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\hiawatha.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\instantyieldnotification80.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\instantyieldnotificationglow80.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\montezuma.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\napoleon.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\nebuchadnezzar.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\notificationcityeventglow.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\notificationcityeventorange.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\notificationeventglow.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\notificationeventorange.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\notificationMPdiplo128.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\notificationMPdiploglow128.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\Core Changes\\CompressedArt\\oda.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\pacal_the_great.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\ramesses.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\ramkhamaeng.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\sulieman.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\Core Changes\\CompressedArt\\TradeMP.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\washington.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\wonderconceptbroadway.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\wonderconceptgreatwall.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\CompressedArt\\wonderconceptnotredame.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\Core Changes\\CompressedArt\\wu.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Changes\\CoreChanges.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include":
              "Core Files\\Core Changes\\CommunityPatchDLLChanges.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Changes\\DiploAIOptions.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Changes\\EraSpecificWriters.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Changes\\EraSpecificArtists.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Changes\\EraSpecificMusicians.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Changes\\CoreChanges.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\Core Changes\\GreatArt\\artifact.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\GreatArt\\esp_thief_framedicon45.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\Core Changes\\GreatArt\\Sarcophagus.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Changes\\UnitFixes.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\GreatArt\\esp_spy_rigginelectioncooldown22.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Changes\\SaneTerrain.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Changes\\WorldChanges.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Changes\\TerrainFixes.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\Core Changes\\GreatArt\\ancientchina.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\Core Changes\\GreatArt\\ancientjapan.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\GreatArt\\ancientpersia.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\GreatArt\\ashurbanipalstatue.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\GreatArt\\augustusstatue.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\Core Changes\\GreatArt\\aztec.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\GreatArt\\bayeuxtapestry.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\GreatArt\\classicalgreece.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\GreatArt\\egyptianmefertem.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\Core Changes\\GreatArt\\justinian.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\Core Changes\\GreatArt\\kalamkari.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\Core Changes\\GreatArt\\kells.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\Core Changes\\GreatArt\\lascaux.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\Core Changes\\GreatArt\\medieval.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\Core Changes\\GreatArt\\resource_furs.gr2",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\Core Changes\\GreatArt\\suttonhoo.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Changes\\NewWriters.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Changes\\NewArtists.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Changes\\NewText.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Changes\\TextChanges.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Tables\\CoreTableAdditions.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Tables\\CoreTableEntries.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Tables\\CustomModOptions.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Tables\\DifficultyTables.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Tables\\DifficultyTables.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Tables\\JFDContracts.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Tables\\SampleEvents.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Tables\\GameEventsTable.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Values\\CargoShipMod.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Values\\CoreDefines.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Values\\ExtraSpyTable.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Values\\CoreValues.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Values\\DiploApproachWeights.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Values\\DiploOpinionWeights.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Values\\Automates.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Values\\DummyTrigger.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Values\\FasterAircraft.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Core Values\\MinorCivQuestRewards.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include":
              "Core Files\\Core Values\\New_CIV5AICityStrategies.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include":
              "Core Files\\Core Values\\New_CIV5AIMilitaryStrategies.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include":
              "Core Files\\Core Values\\New_CIV5MultiUnitFormations.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\Core Values\\TechAwardPopup.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\Core Values\\TechAwardPopup.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\Core Values\\TechHelpInclude.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\badeventdefaultbackground.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\Bombardment.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\cityeventdefaultbackground.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\CoreLua\\CityEventPopup.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\CoreLua\\CityEventPopup.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\CityEventsInfo.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\CityEventsInfo.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\CityRecentEventsInfo.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\CityRecentEventsInfo.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\EnemyUnitPanel.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\EventArt\\AirBalloon.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\EventArt\\CounterSpy.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\EventArt\\FireWorks.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\EventArt\\Focus.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\EventArt\\GoldStandard.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\EventArt\\HarborTrade.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\EventArt\\StockMarketCrash.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\EventArt\\SunHeat.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\CoreLua\\EventOverview.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\EventChoice.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\CoreLua\\EventChoicePopup.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\CoreLua\\EventChoicePopup.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\CoreLua\\EventChoicePopupCity.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\CoreLua\\EventChoicePopupCity.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\CoreLua\\EventPopup.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\CoreLua\\EventPopup.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\CoreLua\\EventOverview.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\CoreLua\\EspionageChoicePopup.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\InGame.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\CoreLua\\EspionageChoicePopup.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\MPList.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\NewEraPopup.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\PathHelpManager.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\RecentEventsInfo.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\RecentEventsInfo.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\CoreLua\\playereventdefaultbackground.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\PlayerEventsInfo.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\PlayerEventsInfo.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\ReplayViewer.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\ReplayViewer.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\SaveMenu.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\SaveMenu.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\StagingRoom.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Core Files\\CoreLua\\WorldView.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\API\\Achievements.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\API\\Espionage.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\API\\Extensions.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\API\\PlotBasedDamage.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\API\\PlotYields.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\API\\Religion.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\PNM Mods DB\\ART\\yieldatlas_128_admiral.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\PNM Mods DB\\ART\\yieldatlas_128_culturelocal.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\PNM Mods DB\\ART\\yieldatlas_128_general.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\PNM Mods DB\\ART\\YieldAtlas_128_GoldenAge.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include":
              "Core Files\\PNM Mods DB\\ART\\YieldAtlas_128_Tourism.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\BUGFIX\\FeatureRemoval.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include":
              "Core Files\\PNM Mods DB\\BUGFIX\\GoodyHutMessages.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\BUGFIX\\SpyNames.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include":
              "Core Files\\PNM Mods DB\\BUGFIX\\UnitclassNotUnit.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include":
              "Core Files\\PNM Mods DB\\BUGFIX\\UnitclassNotUnit.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\EVENTS\\BattleRoles.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\EVENTS\\CanMoveInto.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\EVENTS\\CityBombard.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\EVENTS\\DiploModifiers.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\GLOBAL\\AlpinePasses.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\GLOBAL\\CannotEmbark.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\GLOBAL\\CityWorking.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include":
              "Core Files\\PNM Mods DB\\GLOBAL\\AutomatonWorkers.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include":
              "Core Files\\PNM Mods DB\\GLOBAL\\ExcludeFromGifts.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include":
              "Core Files\\PNM Mods DB\\GLOBAL\\GreatworkYieldtypes.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include":
              "Core Files\\PNM Mods DB\\GLOBAL\\MoveAfterUpgrade.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\GLOBAL\\PassableForts.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include":
              "Core Files\\PNM Mods DB\\GLOBAL\\PromotionClasses.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\GLOBAL\\Relocation.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include":
              "Core Files\\PNM Mods DB\\GLOBAL\\SeparateGreatAdmiral.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\GLOBAL\\StackingRules.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\PROMOTIONS\\CrossIce.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include":
              "Core Files\\PNM Mods DB\\PROMOTIONS\\CrossMountains.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\PROMOTIONS\\CrossOceans.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include":
              "Core Files\\PNM Mods DB\\PROMOTIONS\\DeepWaterEmbarkation.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\PROMOTIONS\\DeepWater.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\PROMOTIONS\\HalfMove.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include":
              "Core Files\\PNM Mods DB\\PROMOTIONS\\ImprovementBonus.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\PROMOTIONS\\UnitNaming.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include":
              "Core Files\\PNM Mods DB\\PROMOTIONS\\VariableRecon.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include":
              "Core Files\\PNM Mods DB\\PROMOTIONS\\VariableRecon.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include":
              "Core Files\\PNM Mods DB\\RELIGION\\ConversionModifiers.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include":
              "Core Files\\PNM Mods DB\\RELIGION\\LocalReligions.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\RELIGION\\PlotYields.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include":
              "Core Files\\PNM Mods DB\\RELIGION\\PolicyBranchFaithGp.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\TRADE\\RouteScaling.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\TRAITS\\AnyBelief.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\TRAITS\\CrossesIce.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\TRAITS\\OtherPrereqs.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include":
              "Core Files\\PNM Mods DB\\TRAITS\\TradeRouteBonuses.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\PNM Mods DB\\UI\\CityExpansion.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Text\\CoreText_en_US.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Core Files\\Text\\CoreText_en_US.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "CvGameCore_Expansion2.dll",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\ActionInfoPanel.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\AssignStartingPlots.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\CityBannerManager.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\CityBannerManager.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\CityStateDiploPopup.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\CityStateStatusHelper.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\CityView.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\CultureOverview.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\CultureOverview.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\DeclareWarPopup.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\DeclareWarPopup.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\Demographics.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\DiploCurrentDeals.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\DiploGlobalRelationships.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\DiploList.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\DiploTrade.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\DiscussionDialog.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\DiscussionDialog.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\EconomicGeneralInfo.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\EspionageOverview.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\EspionageOverview.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\GPList.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\InfoTooltipInclude.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\LeaderHeadRoot.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\LeaderHeadRoot.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\LeagueOverview.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\LeagueOverview.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\NaturalWonderPopup.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\WonderPopup.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\NotificationPanel.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\NotificationPanel.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\ProductionPopup.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\PuppetCityPopup.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\ReligionOverview.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\SimpleDiploTrade.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\TopPanel.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\TradeLogic.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\TradeRouteHelpers.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\YieldIconManager.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "LUA\\YieldIconManager.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Modules\\Events\\CoreEvents.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Modules\\Events\\Text\\en_US\\City_en_US.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Modules\\Events\\Text\\en_US\\EventCore_en_US.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Modules\\Events\\Text\\en_US\\Player_en_US.xml",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "False",
            "@_Include": "Modules\\MoreGP\\ExtraGPs.sql",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__010.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__020.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__030.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__040.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__050.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__060.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__070.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__080.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__090.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__100.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__110.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__120.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__130.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__140.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__150.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__160.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__170.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__180.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__190.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__200.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__210.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__220.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__230.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__240.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__250.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__260.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__270.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__280.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__290.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__300.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__310.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__320.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__330.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__340.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__350.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__360.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__370.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__380.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__390.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__400.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__410.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__420.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__430.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__440.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__450.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__460.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__470.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__480.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__490.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__500.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__510.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__520.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__530.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__540.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__550.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__560.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__570.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__580.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__590.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__600.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__610.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__620.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__630.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__640.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__650.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__660.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__670.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__680.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__690.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__700.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__710.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__720.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__730.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__740.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__750.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__760.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__770.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__780.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__790.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__800.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__810.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__820.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__830.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__840.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__850.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__860.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__870.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__880.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__890.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\A__900.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_acd_01.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_asi_01.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_asi_02.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_chn_01.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_cls_01.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_cls_02.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_cls_03.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_cls_04.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_cls_05.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_cls_07.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_cls_10.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_dig_01.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_fms_01.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_ftv_01.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_grc_01.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_gtr_01.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_ind_01.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_ind_02.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_jaz_01.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_jaz_02.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_lat_01.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_lat_02.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_med_01.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_mic_03.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_mic_04.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_mic_05.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_opr_01.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_opr_02.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_ori_03.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_ori_07.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_ori_08.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_ori_09.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_rap_01.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_rcp_08.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_scd_02.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_scd_03.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_scd_05.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_scd_08.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_scn_01.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_scn_03.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_scn_07.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_scn_08.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_scn_09.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_spl_01.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_sum_01.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\BG_tha_01.dds",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__010.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__020.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__030.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__040.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__050.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__060.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__070.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__080.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__090.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__100.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__110.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__120.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__130.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__140.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__150.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__160.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__170.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__180.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__190.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__200.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__210.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__220.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__230.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__240.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__250.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__260.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__270.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__280.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__290.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__300.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__310.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__320.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__330.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__340.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__350.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__360.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__370.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__380.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__390.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__400.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__410.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__420.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__430.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__440.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__450.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__460.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__470.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__480.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__490.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__500.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__510.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__520.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__530.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__540.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__550.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__560.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__570.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__580.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__590.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__600.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__610.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__620.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__630.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__640.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__650.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__660.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__670.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__680.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__690.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__700.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__710.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__720.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__730.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__740.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__750.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__760.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__770.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__780.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__790.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__800.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__810.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__820.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__830.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__840.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__850.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__860.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__870.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__880.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__890.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\M__900.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__010.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__020.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__030.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__040.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__050.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__060.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__070.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__080.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__090.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__100.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__110.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__120.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__130.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__140.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__150.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__160.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__170.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__180.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__190.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__200.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__210.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__220.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__230.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__240.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__250.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__260.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__270.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__280.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__290.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__300.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__310.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__320.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__330.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__340.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__350.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__360.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__370.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__380.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__390.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__400.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__410.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__420.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__430.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__440.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__450.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__460.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__470.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__480.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__490.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__500.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__510.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__520.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__530.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Modules\\MoreGP\\Extra_GPs_items\\W__540.mp3",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Mapscript Fixes\\Boreal.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Mapscript Fixes\\Highlands.lua",
          },
          {
            SubType: "Lua",
            ImportIntoVFS: "True",
            "@_Include": "Mapscript Fixes\\Terra.lua",
          },
        ],
      },
    ],
    Import: {
      "@_Project":
        "$(MSBuildExtensionsPath)\\Firaxis\\ModBuddy\\Civ5Mod.targets",
    },
    "@_DefaultTargets": "Deploy",
    "@_ToolsVersion": "4.0",
    "@_xmlns": "http://schemas.microsoft.com/developer/msbuild/2003",
  },
};

export const testOutputJs = {
  "?xml": {
    "@_version": "1.0",
    "@_encoding": "utf-8",
  },
  Mod: {
    Properties: {
      Name: "(1) Community Patch",
      Teaser:
        "(3.6.2) Bugfixes, AI Improvements, Game Optimizations and API Extensions for Civ V",
      Description:
        "Contains core AI improvements and bugfixes for the Civ 5 BNW DLL. Also contains support for the Vox Populi unofficial expansion and its associated mods.",
      Authors: "CivFanatics Community Patch Project Team",
      HideSetupGame: 0,
      Homepage:
        "https://forums.civfanatics.com/forums/community-patch-project.497/",
      AffectsSavedGames: 1,
      MinCompatibleSaveVersion: 117,
      SupportsSinglePlayer: 1,
      SupportsMultiplayer: 1,
      SupportsHotSeat: 1,
      SupportsMac: 1,
      ReloadAudioSystem: 1,
      ReloadLandmarkSystem: 1,
      ReloadStrategicViewSystem: 1,
      ReloadUnitSystem: 1,
    },
    Dependencies: {
      Game: {
        "@_minversion": "1.0.3.124",
        "@_maxversion": "1.0.3.999",
      },
      Dlc: {
        "@_id": "6DA07636-4123-4018-B643-6575B4EC336B",
        "@_minversion": "0",
        "@_maxversion": "999",
      },
    },
    References: "",
    Blocks: {
      Mod: [
        {
          "@_id": "a4a8d2bb-cffd-4d8e-8893-d773f25b6fe1",
          "@_minversion": "0",
          "@_maxversion": "999",
          "@_title": "Artificial Unintelligence",
        },
        {
          "@_id": "275db698-0c69-401e-89a8-7eab501b6bcf",
          "@_minversion": "0",
          "@_maxversion": "999",
          "@_title": "Civilization IV Diplomatic Features - Standalone",
        },
        {
          "@_id": "781d81cf-49e1-4acb-ae5f-b9e3713f98d3",
          "@_minversion": "0",
          "@_maxversion": "999",
          "@_title": "(1a) Civ IV Diplomatic Features - CP",
        },
      ],
    },
    Files: {
      File: [
        {
          "#text": "Core Files/CommunityPatchTables.xml",
          "@_md5": "FCB8B2A57F0BF70CEB4B8D7740E3133E",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/alexander.dds",
          "@_md5": "DD5FECD9838E35779A74DD66B065C1D4",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/alrashid.dds",
          "@_md5": "C04545B48484256F56047700756591B5",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/askia.dds",
          "@_md5": "D66A3598398764263F19A7F67BFA2499",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/augustus.dds",
          "@_md5": "CC32C01B8BB8F4590C7C1147C24DA0C8",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/aztec.dds",
          "@_md5": "DB3C7566EB344574770FFBD8D6492FD7",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/bismark.dds",
          "@_md5": "F1F0257DB36B844D1397928AF8A0ED35",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/casimir.dds",
          "@_md5": "C308336C6A4C05801434384A69C6F1B7",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/catherine.dds",
          "@_md5": "BBD12A78E48CFBCF7DEA8CCC656D8C6B",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/corp80_base.dds",
          "@_md5": "B3C1FBD5E66301B400B63040C7B42503",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/corp80_hl.dds",
          "@_md5": "D49B7AA0DAFF3621D9F72A36D22FB43B",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/CultureLocal.ggxml",
          "@_md5": "E5A3AC248DA87F90ABB27D674891A674",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/CultureLocal.dds",
          "@_md5": "B2F2B17088C278C2C9CBC948B23AA095",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/darius.dds",
          "@_md5": "AA023F85EEEB1F7DA0444C80DAF22A75",
          "@_import": "1",
        },
        {
          "#text":
            "Core Files/Core Changes/CompressedArt/DC45_Corporations.dds",
          "@_md5": "1D94F6DC259A5A1FE149BC83BC7C80E4",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/dom_catherine.dds",
          "@_md5": "FD9F7C980781B0D6951E5575A8C52A1C",
          "@_import": "1",
        },
        {
          "#text":
            "Core Files/Core Changes/CompressedArt/dom_nebuchadnezzar.dds",
          "@_md5": "F521F2A6CB37AF3742C748B021760551",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/elizabeth.dds",
          "@_md5": "5A65FF1BC6EFC5404BC021D0FD2B9173",
          "@_import": "1",
        },
        {
          "#text":
            "Core Files/Core Changes/CompressedArt/espionagenotification80.dds",
          "@_md5": "B4428B60FE059E188E471B8CBBA76229",
          "@_import": "1",
        },
        {
          "#text":
            "Core Files/Core Changes/CompressedArt/espionagenotificationglow80.dds",
          "@_md5": "A8A6CFCF2754CC9D3992963E7DB9E6DA",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/EventFrame.dds",
          "@_md5": "2C21094334F1CB3A9EE1A5D35242B8C4",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/ghandi.dds",
          "@_md5": "8176FC2087EE89324E8BA19A1F9EFC55",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/hiawatha.dds",
          "@_md5": "B4C607332EC4BE50CB71C0419BAB7D09",
          "@_import": "1",
        },
        {
          "#text":
            "Core Files/Core Changes/CompressedArt/instantyieldnotification80.dds",
          "@_md5": "499D258A7F485F8BA82863D9215E6B8D",
          "@_import": "1",
        },
        {
          "#text":
            "Core Files/Core Changes/CompressedArt/instantyieldnotificationglow80.dds",
          "@_md5": "5C925FD4541A092E3DB3A906FC089EDD",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/montezuma.dds",
          "@_md5": "595F17B488894D170EF4CB9DD733E3C6",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/napoleon.dds",
          "@_md5": "BA19066C26BB8347FE573788D4903D19",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/nebuchadnezzar.dds",
          "@_md5": "2975B5B885E1DAF6350CB298ACEED19C",
          "@_import": "1",
        },
        {
          "#text":
            "Core Files/Core Changes/CompressedArt/notificationcityeventglow.dds",
          "@_md5": "DE48FBA4B06265C41F73C1E0F30D6990",
          "@_import": "1",
        },
        {
          "#text":
            "Core Files/Core Changes/CompressedArt/notificationcityeventorange.dds",
          "@_md5": "4FEA391E88CC5EEF3C49EA84122B8D61",
          "@_import": "1",
        },
        {
          "#text":
            "Core Files/Core Changes/CompressedArt/notificationeventglow.dds",
          "@_md5": "95D498B7DD244272391492AF9BA4F4A1",
          "@_import": "1",
        },
        {
          "#text":
            "Core Files/Core Changes/CompressedArt/notificationeventorange.dds",
          "@_md5": "879CF550A56D42755709363D22253E11",
          "@_import": "1",
        },
        {
          "#text":
            "Core Files/Core Changes/CompressedArt/notificationMPdiplo128.dds",
          "@_md5": "FAEB1412BD31B1205C31F4C8BD873E34",
          "@_import": "1",
        },
        {
          "#text":
            "Core Files/Core Changes/CompressedArt/notificationMPdiploglow128.dds",
          "@_md5": "2F04CABEA9E85C5BBEBE5829A777E0F8",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/oda.dds",
          "@_md5": "6E2C17A7E9BE2B2B73FAA46840801F87",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/pacal_the_great.dds",
          "@_md5": "DEED057539D754BD6C5F58F6DDFFD22D",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/ramesses.dds",
          "@_md5": "12F02BD8BA4061E00F4F5761D8720757",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/ramkhamaeng.dds",
          "@_md5": "C63669324016754011918B8526E88B37",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/sulieman.dds",
          "@_md5": "ABD37B929005231A5FA48C331CA3D8CD",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/TradeMP.dds",
          "@_md5": "CB05E0CC0973C888102B8128DED99EE4",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/washington.dds",
          "@_md5": "341D9AF3FA7E166C621F7B4866D60B90",
          "@_import": "1",
        },
        {
          "#text":
            "Core Files/Core Changes/CompressedArt/wonderconceptbroadway.dds",
          "@_md5": "ACA338F2B02A8184C76AADB60D0D4319",
          "@_import": "1",
        },
        {
          "#text":
            "Core Files/Core Changes/CompressedArt/wonderconceptgreatwall.dds",
          "@_md5": "12D7AE7B46F4A1CFC9C04068B91EC4EA",
          "@_import": "1",
        },
        {
          "#text":
            "Core Files/Core Changes/CompressedArt/wonderconceptnotredame.dds",
          "@_md5": "B0F68066FF301B6B10E15EC0E85CFDE6",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CompressedArt/wu.dds",
          "@_md5": "0429CDBB6DB69F18C354FA6B36B459E8",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/CoreChanges.sql",
          "@_md5": "A0A9667CB76696355590235F4E887F33",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Changes/CommunityPatchDLLChanges.xml",
          "@_md5": "39DA1B7C4E75242EC0FC2E5382716A94",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Changes/DiploAIOptions.sql",
          "@_md5": "7DEE5BE81677CF9DBBCE68E95999C09C",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Changes/EraSpecificWriters.sql",
          "@_md5": "C2070A14115CDA6745C2F02C6C6C9C9B",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Changes/EraSpecificArtists.sql",
          "@_md5": "054A6A9E14333EA341EC48437593B7D7",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Changes/EraSpecificMusicians.sql",
          "@_md5": "33FFE3155B63B94D2523F31DC964BD3A",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Changes/CoreChanges.xml",
          "@_md5": "1C121491EF697B14FD7C41FEB02C4865",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Changes/GreatArt/artifact.dds",
          "@_md5": "541F264334839B2A7DE0523BCAF5EB80",
          "@_import": "1",
        },
        {
          "#text":
            "Core Files/Core Changes/GreatArt/esp_thief_framedicon45.dds",
          "@_md5": "F772E5C5B3C34261AE26BAD47E06B448",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/GreatArt/Sarcophagus.dds",
          "@_md5": "64D659DFF3F9F5EA96680AB57F279FA9",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/UnitFixes.sql",
          "@_md5": "5C22D61C78351504F7FA15D7A1565CF0",
          "@_import": "0",
        },
        {
          "#text":
            "Core Files/Core Changes/GreatArt/esp_spy_rigginelectioncooldown22.dds",
          "@_md5": "E2B19CBFFF8F783398DF4BD00E5633D1",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/SaneTerrain.sql",
          "@_md5": "B5951BFB8C5655834700B8218EE03B4E",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Changes/WorldChanges.sql",
          "@_md5": "78CE113418D7FD0BCE6240A7E58BE60F",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Changes/TerrainFixes.xml",
          "@_md5": "5D3F7DB8143B4D1AF76146432B7D468E",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Changes/GreatArt/ancientchina.dds",
          "@_md5": "D6A84377DC0A60D68C78E911777E9E88",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/GreatArt/ancientjapan.dds",
          "@_md5": "1154AB813A0500E7664C5894CEAFCB15",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/GreatArt/ancientpersia.dds",
          "@_md5": "D437F09F6BF878F68FE10C0AB39725E5",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/GreatArt/ashurbanipalstatue.dds",
          "@_md5": "7EA9FD3BE2AC37E87A74B7A34744F2F0",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/GreatArt/augustusstatue.dds",
          "@_md5": "A522A972DF19C35452E41E3965742A45",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/GreatArt/aztec.dds",
          "@_md5": "DB3C7566EB344574770FFBD8D6492FD7",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/GreatArt/bayeuxtapestry.dds",
          "@_md5": "09DB2818395D0217A9469CD12036547C",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/GreatArt/classicalgreece.dds",
          "@_md5": "054B81EB234FF28FF12991A4CFEBB414",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/GreatArt/egyptianmefertem.dds",
          "@_md5": "8054B3C12D2733890EFA5B30D93CE8D6",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/GreatArt/justinian.dds",
          "@_md5": "E0B240F720F8C48DDB34DD694B17BF2C",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/GreatArt/kalamkari.dds",
          "@_md5": "F7F260E5C23B39860D5DA040DC085B57",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/GreatArt/kells.dds",
          "@_md5": "95893FDF3FB148A645A344766BA0C766",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/GreatArt/lascaux.dds",
          "@_md5": "DF03A0D8C1CD30315757A768B40D198A",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/GreatArt/medieval.dds",
          "@_md5": "D0E3C2B347BE4F8AF7425039B2601FAA",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/GreatArt/resource_furs.gr2",
          "@_md5": "6DE5AC31317313EEF46A7EC98D020D3C",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/GreatArt/suttonhoo.dds",
          "@_md5": "ECB4EDA86872DE6DFDF20105C2CB95A8",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Changes/NewWriters.xml",
          "@_md5": "893B339A2044E714FAD61E981B8B4A35",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Changes/NewArtists.xml",
          "@_md5": "12A0F1F3F4AC7D09CBD28E06B17F8BF3",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Changes/NewText.xml",
          "@_md5": "4E508F5AA1D796DB0A5E1A4CDACBBD4F",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Changes/TextChanges.sql",
          "@_md5": "B2F0CFF1DF2DD8539265D9873D6A61FD",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Tables/CoreTableAdditions.xml",
          "@_md5": "4FF1A900882C4A92CE7955CC921897BD",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Tables/CoreTableEntries.sql",
          "@_md5": "29BA4A3F96E03CB0F0159CB6C228E206",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Tables/CustomModOptions.xml",
          "@_md5": "E5BF3BCC8B133425A3F39BA2A1C9511B",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Tables/DifficultyTables.sql",
          "@_md5": "6D12686F235DB5B3C668E3738BC141E7",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Tables/DifficultyTables.xml",
          "@_md5": "696EC398AA893BB83885D4FB900DA52A",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Tables/JFDContracts.xml",
          "@_md5": "B30D8A1A7F42B7F9711F05EA64771F59",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Tables/SampleEvents.xml",
          "@_md5": "429BD12E6BC5CFFFE5CCAD5B994E2948",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Tables/GameEventsTable.xml",
          "@_md5": "0E40315D1278F83F6202E5F7EF1CB6EC",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Values/CargoShipMod.sql",
          "@_md5": "4FC51835F4E1FACE48D5D92A36189955",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Values/CoreDefines.sql",
          "@_md5": "BD85B2763CA1B35F46241DB6B6C1DBA7",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Values/ExtraSpyTable.xml",
          "@_md5": "260E49F1463125721E6A1B96B69D47A1",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Values/CoreValues.xml",
          "@_md5": "D7B41E44097D8C93D5B53C024B43E326",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Values/DiploApproachWeights.sql",
          "@_md5": "A7F0ECA52F3E1F9CD7B1BBDE78CBAB7F",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Values/DiploOpinionWeights.sql",
          "@_md5": "B4BD0F3D8B884E7B94A6F4D548EB9607",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Values/Automates.xml",
          "@_md5": "4294BB607CA8995F0DC562AA8B1F8C20",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Values/DummyTrigger.sql",
          "@_md5": "6472E73AF0AA0E2FF97AFDE18690F35F",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Values/FasterAircraft.sql",
          "@_md5": "709ECD2A7C0807C8ED2E945DA5B4718E",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Values/MinorCivQuestRewards.xml",
          "@_md5": "44E52B48910669CA0F96867FEAFB24C1",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Values/New_CIV5AICityStrategies.xml",
          "@_md5": "55680AD4774BC1DC4991E321F40A183E",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Values/New_CIV5AIMilitaryStrategies.xml",
          "@_md5": "22C823A2A9A00B2B73B7983130602DDB",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Values/New_CIV5MultiUnitFormations.xml",
          "@_md5": "75EEAD91038B5C127112C8A9F428C19A",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Core Values/TechAwardPopup.lua",
          "@_md5": "51CBE465E42FA27457401A9EB2A0E0B5",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Values/TechAwardPopup.xml",
          "@_md5": "3AEA3154A06B8B69762F22A642C8ED1D",
          "@_import": "1",
        },
        {
          "#text": "Core Files/Core Values/TechHelpInclude.lua",
          "@_md5": "8BA43B91ED551AB78FD91B3D07BBC9E3",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/badeventdefaultbackground.dds",
          "@_md5": "99B415476E11B1F8F55897D5E407805E",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/Bombardment.lua",
          "@_md5": "39C6A39E21DF6E10B666FA57FA502643",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/cityeventdefaultbackground.dds",
          "@_md5": "24FBC9EFC39D58899C510986127E523F",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/CityEventPopup.lua",
          "@_md5": "29FC5A961FBDB9E4E38744DBAE80DB3F",
          "@_import": "0",
        },
        {
          "#text": "Core Files/CoreLua/CityEventPopup.xml",
          "@_md5": "DB148EB48CB0FC537C7B3ED852F8ED14",
          "@_import": "0",
        },
        {
          "#text": "Core Files/CoreLua/CityEventsInfo.lua",
          "@_md5": "464FF5291A70846BA602CF2367E84695",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/CityEventsInfo.xml",
          "@_md5": "716E665A7374FEC615837C8A85AF18F8",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/CityRecentEventsInfo.lua",
          "@_md5": "AFC9BD9DA3C2699D77FDCEB759EDD1AF",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/CityRecentEventsInfo.xml",
          "@_md5": "F101066874ED5BEDE778EE71E4BB4D4A",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/EnemyUnitPanel.lua",
          "@_md5": "12C76E26746C9860279EE08C0CBB8CC3",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/EventArt/AirBalloon.dds",
          "@_md5": "D3B55C6D6224C3204FB57D3FE19C80D9",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/EventArt/CounterSpy.dds",
          "@_md5": "9E7761E30571871032525344A0968D9B",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/EventArt/FireWorks.dds",
          "@_md5": "99618C8CE11438AAE41475DE0929CD11",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/EventArt/Focus.dds",
          "@_md5": "762A92D627139E6E0C800CC4ED47763B",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/EventArt/GoldStandard.dds",
          "@_md5": "6D4E1CBFFB054D592434F6A05BE56098",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/EventArt/HarborTrade.dds",
          "@_md5": "5AF75615C7B841B050ED6F6BC1AF626F",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/EventArt/StockMarketCrash.dds",
          "@_md5": "AEE60C482823978F3CCFD48FE23F6867",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/EventArt/SunHeat.dds",
          "@_md5": "4C0FA5BDC561A08771875B67938B484E",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/EventOverview.xml",
          "@_md5": "7CC44079C17A550A92E808DF9D781B61",
          "@_import": "0",
        },
        {
          "#text": "Core Files/CoreLua/EventChoice.mp3",
          "@_md5": "F96BAF543AB02586B4CD913507F7420E",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/EventChoicePopup.lua",
          "@_md5": "72D4B7847940DFC5F85FB76C4248BDA2",
          "@_import": "0",
        },
        {
          "#text": "Core Files/CoreLua/EventChoicePopup.xml",
          "@_md5": "213DD9B4CD1DB151EC26DBD1F996E4A7",
          "@_import": "0",
        },
        {
          "#text": "Core Files/CoreLua/EventChoicePopupCity.lua",
          "@_md5": "C52150B6258A39219B526BA1601E9153",
          "@_import": "0",
        },
        {
          "#text": "Core Files/CoreLua/EventChoicePopupCity.xml",
          "@_md5": "2FBF778B6AF3317CA4105412226E02DE",
          "@_import": "0",
        },
        {
          "#text": "Core Files/CoreLua/EventPopup.lua",
          "@_md5": "120F241EE2607B93C29BA839663EFF38",
          "@_import": "0",
        },
        {
          "#text": "Core Files/CoreLua/EventPopup.xml",
          "@_md5": "695FACA1BA4A5C15D3595EF99B6B658C",
          "@_import": "0",
        },
        {
          "#text": "Core Files/CoreLua/EventOverview.lua",
          "@_md5": "D34DBE771326E8740FF4354E860675FD",
          "@_import": "0",
        },
        {
          "#text": "Core Files/CoreLua/EspionageChoicePopup.xml",
          "@_md5": "AE2515A56CC80041728985BA2BF89F09",
          "@_import": "0",
        },
        {
          "#text": "Core Files/CoreLua/InGame.lua",
          "@_md5": "3A270875B1B031066905D01017F1644E",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/EspionageChoicePopup.lua",
          "@_md5": "56E67473CBCDEA9E3AAE1D815B738FB1",
          "@_import": "0",
        },
        {
          "#text": "Core Files/CoreLua/MPList.lua",
          "@_md5": "BF44E18E8DB303517A633F14D43BAC69",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/NewEraPopup.lua",
          "@_md5": "91DEEC22E933A63497BBDA0E5066D8D3",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/PathHelpManager.lua",
          "@_md5": "FAE13602CE1A44D64D734538BE4C1AAD",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/RecentEventsInfo.xml",
          "@_md5": "B9265F59D7CFB7857DD3D8C308F5D7D0",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/RecentEventsInfo.lua",
          "@_md5": "5CE8AADCD96BC892206D0738E4879395",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/playereventdefaultbackground.dds",
          "@_md5": "D189054DBC0B89454E00137394C4CB1A",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/PlayerEventsInfo.xml",
          "@_md5": "47D9492129F0335754825A2AFCDE425F",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/PlayerEventsInfo.lua",
          "@_md5": "A5F8A30B9629E6251072B6A406124856",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/ReplayViewer.lua",
          "@_md5": "C16A95DB183F4BD7D3236CFDA63855AD",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/ReplayViewer.xml",
          "@_md5": "56E38F28084CA596462B0C6390936D80",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/SaveMenu.lua",
          "@_md5": "2EDB54EB7721D8240EAF44B71BCE74D6",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/SaveMenu.xml",
          "@_md5": "FB5ADB053B50EFAC805CCB9EE0425137",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/StagingRoom.lua",
          "@_md5": "F4BD8D98536B2532C02E1CA4EC1732CF",
          "@_import": "1",
        },
        {
          "#text": "Core Files/CoreLua/WorldView.lua",
          "@_md5": "8F5DDB96458A46DB71C92CCB4026905E",
          "@_import": "1",
        },
        {
          "#text": "Core Files/PNM Mods DB/API/Achievements.xml",
          "@_md5": "8335771F2F933D06C126C246A481A978",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/API/Espionage.xml",
          "@_md5": "2F0CA9C27CCDF3A00B38107099EC5742",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/API/Extensions.sql",
          "@_md5": "232B281E961C2031E95F462EA7375099",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/API/PlotBasedDamage.sql",
          "@_md5": "F91E23C5D094E0FDEA1DFA9F2026DAC6",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/API/PlotYields.xml",
          "@_md5": "A076B80D38056B450518A6E3C18C0261",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/API/Religion.xml",
          "@_md5": "CCB8DDC05E14AC61764628009FD63075",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/ART/yieldatlas_128_admiral.dds",
          "@_md5": "9D4C79414FFC68BA541ADF2FA594F54F",
          "@_import": "1",
        },
        {
          "#text": "Core Files/PNM Mods DB/ART/yieldatlas_128_culturelocal.dds",
          "@_md5": "CC425DC496A0BCA377254C03947E97FA",
          "@_import": "1",
        },
        {
          "#text": "Core Files/PNM Mods DB/ART/yieldatlas_128_general.dds",
          "@_md5": "004BEA672244A2AD3705B61431A4E3DB",
          "@_import": "1",
        },
        {
          "#text": "Core Files/PNM Mods DB/ART/YieldAtlas_128_GoldenAge.dds",
          "@_md5": "8DBF300FFEC8BB9D400845CA40DD933D",
          "@_import": "1",
        },
        {
          "#text": "Core Files/PNM Mods DB/ART/YieldAtlas_128_Tourism.dds",
          "@_md5": "ABD5FA5416A63C4E062E3F9113215550",
          "@_import": "1",
        },
        {
          "#text": "Core Files/PNM Mods DB/BUGFIX/FeatureRemoval.sql",
          "@_md5": "5A5C367FAC1919557D7709D2FBB4A369",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/BUGFIX/GoodyHutMessages.xml",
          "@_md5": "E8750DF83A985489BF5005EF9860625F",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/BUGFIX/SpyNames.xml",
          "@_md5": "F05356D5D0E61F6D8D34D00F4BA9AA35",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/BUGFIX/UnitclassNotUnit.sql",
          "@_md5": "FA3BCC26D8997291AEBFFD57DCED931B",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/BUGFIX/UnitclassNotUnit.xml",
          "@_md5": "EC46E85CA29BC011585D0F50E27B7287",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/EVENTS/BattleRoles.xml",
          "@_md5": "AF6286F99584CA76E095A460820246BF",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/EVENTS/CanMoveInto.sql",
          "@_md5": "D0D6D053B57D552F04659AC2427D7B6D",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/EVENTS/CityBombard.sql",
          "@_md5": "B7036E7A6D8F7F5CCFFDC3C3D9A171F4",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/EVENTS/DiploModifiers.xml",
          "@_md5": "B9719225BCB71D12B8A7C2E218949E1F",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/GLOBAL/AlpinePasses.sql",
          "@_md5": "B2EC173C6EE473335C806278D0C90701",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/GLOBAL/CannotEmbark.sql",
          "@_md5": "9E7C090BEE0EA0C00CFC72DA2E26E07B",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/GLOBAL/CityWorking.sql",
          "@_md5": "9AE580627CFD6F5BC6800B56E146BBCA",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/GLOBAL/AutomatonWorkers.sql",
          "@_md5": "8CC325CAAE32E1089B92EC276538EF24",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/GLOBAL/ExcludeFromGifts.sql",
          "@_md5": "988A4E2A03A8A65D2BA34454314AE7D4",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/GLOBAL/GreatworkYieldtypes.sql",
          "@_md5": "472D7C4DA95FC83DF11F2016759B3645",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/GLOBAL/MoveAfterUpgrade.sql",
          "@_md5": "90694D4709EA89AF77088DF73D90DCA2",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/GLOBAL/PassableForts.sql",
          "@_md5": "B8F6FD6D3E36392564DE3656EBDA9215",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/GLOBAL/PromotionClasses.sql",
          "@_md5": "51373E2AA9261D7F86C5DDE69FF50B3F",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/GLOBAL/Relocation.sql",
          "@_md5": "DE47CDA0C3005F12E066E22368CA2C71",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/GLOBAL/SeparateGreatAdmiral.sql",
          "@_md5": "7535E4E51C56BDAFAB2CAB031F6EEE62",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/GLOBAL/StackingRules.sql",
          "@_md5": "2B8176BE774DEA75B17EB3605201BA56",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/PROMOTIONS/CrossIce.sql",
          "@_md5": "9639CEC999B47F444742BF4FF0616D4B",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/PROMOTIONS/CrossMountains.sql",
          "@_md5": "B3C07FB04A6A210BD9D4D55B0B2875ED",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/PROMOTIONS/CrossOceans.sql",
          "@_md5": "9BEB60B675E932FCD4C5FE642BC412C6",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/PROMOTIONS/DeepWaterEmbarkation.sql",
          "@_md5": "7E661A0B3E710151939AA35D0A941502",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/PROMOTIONS/DeepWater.xml",
          "@_md5": "15CA1250F3878B47D8E432AC69198A15",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/PROMOTIONS/HalfMove.sql",
          "@_md5": "0511BC00CD405F3D7888671ED5E91C7D",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/PROMOTIONS/ImprovementBonus.sql",
          "@_md5": "702973513B4141D021A6A449EE204A78",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/PROMOTIONS/UnitNaming.xml",
          "@_md5": "148949D0AC55C112E9696F9D61E889FB",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/PROMOTIONS/VariableRecon.sql",
          "@_md5": "7A7DB57E445F452D9039898A5D03D7E8",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/PROMOTIONS/VariableRecon.xml",
          "@_md5": "F8F301C8C64FAD0E2A0C9C804EB26222",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/RELIGION/ConversionModifiers.sql",
          "@_md5": "1E15551DE1014ED349492B3DFB746E08",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/RELIGION/LocalReligions.sql",
          "@_md5": "9CBE98CF52584514D0EDE1F00CC89605",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/RELIGION/PlotYields.xml",
          "@_md5": "F038EB14A81A17030FDF6F3D113FC819",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/RELIGION/PolicyBranchFaithGp.xml",
          "@_md5": "CB71D7982DC1E08534E0122DACD3CF8D",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/TRADE/RouteScaling.sql",
          "@_md5": "B7D15ADC9EF993A68DCF0276EB77FE88",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/TRAITS/AnyBelief.sql",
          "@_md5": "BC01B6EEFC9B32E48AEFA59795EB2084",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/TRAITS/CrossesIce.sql",
          "@_md5": "7CA1F2B70AA145AF9A0950A31E519A17",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/TRAITS/OtherPrereqs.sql",
          "@_md5": "D60500F862DCB87C573F5B6A1388EB76",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/TRAITS/TradeRouteBonuses.sql",
          "@_md5": "B3CCB02EC2837C3E5F0ABBE81E8D8CEB",
          "@_import": "0",
        },
        {
          "#text": "Core Files/PNM Mods DB/UI/CityExpansion.sql",
          "@_md5": "F07A00D6875A33DF7C81C895030416CE",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Text/CoreText_en_US.xml",
          "@_md5": "41CC204A9283C4B83530DBFCC9CD89D0",
          "@_import": "0",
        },
        {
          "#text": "Core Files/Text/CoreText_en_US.sql",
          "@_md5": "06679AD64E254F58B0486A8BBA08ECEF",
          "@_import": "0",
        },
        {
          "#text": "CvGameCore_Expansion2.dll",
          "@_md5": "ADB029DA174D44697811EEBF2518E217",
          "@_import": "1",
        },
        {
          "#text": "LUA/ActionInfoPanel.lua",
          "@_md5": "3F4B08D58AE727DF10D8A34BEC5F398E",
          "@_import": "1",
        },
        {
          "#text": "LUA/AssignStartingPlots.lua",
          "@_md5": "7D9DF983CA1906B74BAB5DE78618A03C",
          "@_import": "1",
        },
        {
          "#text": "LUA/CityBannerManager.lua",
          "@_md5": "51BF13A2719619942142DF2A947507AA",
          "@_import": "1",
        },
        {
          "#text": "LUA/CityBannerManager.xml",
          "@_md5": "3377B347687C3915177BFE3C72B72F99",
          "@_import": "1",
        },
        {
          "#text": "LUA/CityStateDiploPopup.lua",
          "@_md5": "ED8CCC7A358D1EDDCFE7444E11D45CAF",
          "@_import": "1",
        },
        {
          "#text": "LUA/CityStateStatusHelper.lua",
          "@_md5": "325500D4679F2EECB349A5FF5E60D1F5",
          "@_import": "1",
        },
        {
          "#text": "LUA/CityView.lua",
          "@_md5": "CADBDCD66FF2272D4B074D54BEFDD92A",
          "@_import": "1",
        },
        {
          "#text": "LUA/CultureOverview.lua",
          "@_md5": "0A5F81CD98BFD26E06897E5B19683469",
          "@_import": "1",
        },
        {
          "#text": "LUA/CultureOverview.xml",
          "@_md5": "BF85D174CA9D4F2EC2AD7E3FBB6C0D6D",
          "@_import": "1",
        },
        {
          "#text": "LUA/DeclareWarPopup.lua",
          "@_md5": "B02EA79C1F74248456A842BD53106153",
          "@_import": "1",
        },
        {
          "#text": "LUA/DeclareWarPopup.xml",
          "@_md5": "5D74B47C8B98B0F3D4FBC7242DA26ACD",
          "@_import": "1",
        },
        {
          "#text": "LUA/Demographics.lua",
          "@_md5": "4679C1FEE9E5A6BBD7297CB35E69A63B",
          "@_import": "1",
        },
        {
          "#text": "LUA/DiploCurrentDeals.xml",
          "@_md5": "3F3D6AFB82FAD2DD998953AC3A6DCC6F",
          "@_import": "1",
        },
        {
          "#text": "LUA/DiploGlobalRelationships.lua",
          "@_md5": "7CFCE3F0603744E8C1CB52619E8BA3AC",
          "@_import": "1",
        },
        {
          "#text": "LUA/DiploList.lua",
          "@_md5": "7E63CCE9CF67C5D04DF73CE209CC90BA",
          "@_import": "1",
        },
        {
          "#text": "LUA/DiploTrade.xml",
          "@_md5": "67A70F62D22D5E142F7129E9A733242D",
          "@_import": "1",
        },
        {
          "#text": "LUA/DiscussionDialog.lua",
          "@_md5": "D8A02BC1615CF068E05679C8D3FEB044",
          "@_import": "1",
        },
        {
          "#text": "LUA/DiscussionDialog.xml",
          "@_md5": "AE30ACE9EC879335B1313A30C96E9FE2",
          "@_import": "1",
        },
        {
          "#text": "LUA/EconomicGeneralInfo.lua",
          "@_md5": "7EE75C69C82710F34BB0925EC51FD667",
          "@_import": "1",
        },
        {
          "#text": "LUA/EspionageOverview.lua",
          "@_md5": "5CDCA5654ED4228FBF0793314E1E564D",
          "@_import": "1",
        },
        {
          "#text": "LUA/EspionageOverview.xml",
          "@_md5": "F5AFCB468D395D7CE2A0B8711B4104EE",
          "@_import": "1",
        },
        {
          "#text": "LUA/GPList.lua",
          "@_md5": "63853D883DD64E748DC516729E562B56",
          "@_import": "1",
        },
        {
          "#text": "LUA/InfoTooltipInclude.lua",
          "@_md5": "66DBAC543FF7C7A2958AF547048D62D6",
          "@_import": "1",
        },
        {
          "#text": "LUA/LeaderHeadRoot.lua",
          "@_md5": "F59E91D23B97355D0E2A612DB82D0334",
          "@_import": "1",
        },
        {
          "#text": "LUA/LeaderHeadRoot.xml",
          "@_md5": "F54B1EA651FC8C87A6BBB648F9D4CB0F",
          "@_import": "1",
        },
        {
          "#text": "LUA/LeagueOverview.lua",
          "@_md5": "7DF4AF6E9D5F16CD06D0CD576615869F",
          "@_import": "1",
        },
        {
          "#text": "LUA/LeagueOverview.xml",
          "@_md5": "D1B2B6362725A779E49BAD0C8366DE6A",
          "@_import": "1",
        },
        {
          "#text": "LUA/NaturalWonderPopup.lua",
          "@_md5": "A9FEDE41B8D28348DDD9FD51E905C096",
          "@_import": "1",
        },
        {
          "#text": "LUA/WonderPopup.xml",
          "@_md5": "A149623233865A30C77EE55F8C4CEEF9",
          "@_import": "1",
        },
        {
          "#text": "LUA/NotificationPanel.lua",
          "@_md5": "372493C23E5E290ED50D148809915718",
          "@_import": "1",
        },
        {
          "#text": "LUA/NotificationPanel.xml",
          "@_md5": "F19F8CBF1D8F8A6825ECDE6773DF63E3",
          "@_import": "1",
        },
        {
          "#text": "LUA/ProductionPopup.lua",
          "@_md5": "C38367BBCCB57DA25034B0E9C1124763",
          "@_import": "1",
        },
        {
          "#text": "LUA/PuppetCityPopup.lua",
          "@_md5": "57F2BF1A7564BFE0F332599B9DBF4B79",
          "@_import": "1",
        },
        {
          "#text": "LUA/ReligionOverview.lua",
          "@_md5": "7D73FAAE45A92670C2C6C52BCA912E58",
          "@_import": "1",
        },
        {
          "#text": "LUA/SimpleDiploTrade.xml",
          "@_md5": "710424C27FAC6C807302F68A7C729370",
          "@_import": "1",
        },
        {
          "#text": "LUA/TopPanel.lua",
          "@_md5": "32E0A8436F69C27FB13E8357226EE897",
          "@_import": "1",
        },
        {
          "#text": "LUA/TradeLogic.lua",
          "@_md5": "0EDBA51C8A5CF76685AD936AA81E8835",
          "@_import": "1",
        },
        {
          "#text": "LUA/TradeRouteHelpers.lua",
          "@_md5": "1D6FBE79C3778843EA7DDCE693BDD499",
          "@_import": "1",
        },
        {
          "#text": "LUA/YieldIconManager.lua",
          "@_md5": "5A87219957975A85A1D3CEDA1D98A835",
          "@_import": "1",
        },
        {
          "#text": "LUA/YieldIconManager.xml",
          "@_md5": "8FD4EF5AAB5BD6E16DB8EBE95963FC33",
          "@_import": "1",
        },
        {
          "#text": "Modules/Events/CoreEvents.sql",
          "@_md5": "C5BF6F015FBCE7EE9AEB4F844425A75E",
          "@_import": "0",
        },
        {
          "#text": "Modules/Events/Text/en_US/City_en_US.xml",
          "@_md5": "FA968EB5791BBCC528EABF9409939F56",
          "@_import": "0",
        },
        {
          "#text": "Modules/Events/Text/en_US/EventCore_en_US.xml",
          "@_md5": "CC702153CB36B1507757DE4EC31FC4C5",
          "@_import": "0",
        },
        {
          "#text": "Modules/Events/Text/en_US/Player_en_US.xml",
          "@_md5": "78A1F4E286D44157AE0DA6DD917F90B8",
          "@_import": "0",
        },
        {
          "#text": "Modules/MoreGP/ExtraGPs.sql",
          "@_md5": "E25EB368711D0D7F9C41B9519C6C038F",
          "@_import": "0",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__010.dds",
          "@_md5": "107907C11CF75C7CD8E6A25D625178B7",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__020.dds",
          "@_md5": "2656B1ABE575B89A2BB7633157D0BDC1",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__030.dds",
          "@_md5": "D53DBF656D964C3BD845970D5DBE1C4F",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__040.dds",
          "@_md5": "231E2AFF84544B7D25C58462A442462B",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__050.dds",
          "@_md5": "B6EAB565F25456EC27BBBEBA624D639E",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__060.dds",
          "@_md5": "983FD36CC0F08313EA34EB71F5033002",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__070.dds",
          "@_md5": "54DA7A99F8DEB12C3F5D758FCD4BBEA8",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__080.dds",
          "@_md5": "BFFC6D929CA1EAF3484E4A4FC2A451C2",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__090.dds",
          "@_md5": "20A6315260E994C55B3198F09774A17C",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__100.dds",
          "@_md5": "25F04A59A0D6E5A62DAB32D5B8F5CA6E",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__110.dds",
          "@_md5": "F2C51D0D21152DEF6A685882165F6F7A",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__120.dds",
          "@_md5": "F7AF0056A0239BE34B3EBA55A4E4DBB5",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__130.dds",
          "@_md5": "A39C9E629707D86CFD1C0DF1E33FFC8A",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__140.dds",
          "@_md5": "91684DFB86C936235F47A5946749EC13",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__150.dds",
          "@_md5": "0C13CD761CFD01B55C807CEAC085CCC1",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__160.dds",
          "@_md5": "05ED7D43C01542355E8F88D6C7B1030B",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__170.dds",
          "@_md5": "405EE977736C8C836860CF4E9162B151",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__180.dds",
          "@_md5": "1603BFF142AC612229C2E377EF573F29",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__190.dds",
          "@_md5": "FC520535573C67D5A89C89C0367C0006",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__200.dds",
          "@_md5": "D4D4888305B45F116D10EEC2C23EE731",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__210.dds",
          "@_md5": "EC0F799C648025F67B18991149BB2B1F",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__220.dds",
          "@_md5": "6E82D4F5699BE452DE622004EB12F6EE",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__230.dds",
          "@_md5": "AD530950E32EA1D1A9C83541DBB0DF96",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__240.dds",
          "@_md5": "26BABDC738DEFE40F25EF5FAA67146BE",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__250.dds",
          "@_md5": "8432C7569BF7C073AEA3B7A3F6587D0D",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__260.dds",
          "@_md5": "6DD03A3A1A3843F80082D2C586BB9EA2",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__270.dds",
          "@_md5": "84DC0FB019FA0C79BDD5F84A79B62E5A",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__280.dds",
          "@_md5": "7B294FB71B3B96BC60E7BFB9548C1686",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__290.dds",
          "@_md5": "02D957A4C5A664C00180B36F034E17C9",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__300.dds",
          "@_md5": "F18472A3A305AD689A051FCA1BF0FA94",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__310.dds",
          "@_md5": "1FBE4293E5712A84D28ED44092DABFAD",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__320.dds",
          "@_md5": "E64C9F9DC84C3E90A02CA37147DFA90F",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__330.dds",
          "@_md5": "7CA43CC8DF7C92267AFEC4696CF290F0",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__340.dds",
          "@_md5": "D38B7DDCB036EB764F4E3E3D68801388",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__350.dds",
          "@_md5": "14B2E6259A282D0021196AAF83463207",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__360.dds",
          "@_md5": "4DC6F82AE2244950927370C81ED73911",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__370.dds",
          "@_md5": "32820419E48EFF17877D490791DF0D65",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__380.dds",
          "@_md5": "790239FBE0CD105A02D8D9EFC3BABD0A",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__390.dds",
          "@_md5": "9B4F1FC436141E689DB792BCA578F463",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__400.dds",
          "@_md5": "86827696BB4F80CA9F260350D1B286DA",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__410.dds",
          "@_md5": "D69FBE06C7CFA2625034FD2A28F1A7B0",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__420.dds",
          "@_md5": "9CDDC2702E5856B261A4A3209E13F348",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__430.dds",
          "@_md5": "0FA97D5DB26406BECDCC9DA881524800",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__440.dds",
          "@_md5": "BF852AAEFCF23A1DE6D1B8A190629051",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__450.dds",
          "@_md5": "3F9011027C5B4077495BD2B8AADEA0CC",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__460.dds",
          "@_md5": "0511FA3B042EEDD1E5F953E660B05E65",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__470.dds",
          "@_md5": "93B1CF4C48DBA9592C53A72CAA1B4E3C",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__480.dds",
          "@_md5": "168AA973F0CA0A483F98E55BB95360D8",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__490.dds",
          "@_md5": "363EB935F4DB70A3BBC5BA309C15331D",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__500.dds",
          "@_md5": "6E9EC15AC7511ED279F462B907A5D95B",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__510.dds",
          "@_md5": "ACA93833D3AF20805A9EC796D176EF9F",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__520.dds",
          "@_md5": "09CB7AE651FDC2113980D0FB580CBCC6",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__530.dds",
          "@_md5": "CEAE5D38CEE1A2C3C8F84369E9CF8CCF",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__540.dds",
          "@_md5": "7156280A8A395F6904688D34697EB46A",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__550.dds",
          "@_md5": "3B4C9218D996C263C3D30CD397C544A1",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__560.dds",
          "@_md5": "7B287583FF0F64558E579C71EB17DB1A",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__570.dds",
          "@_md5": "6D1D89CF8955072D336B2B188EBCA20E",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__580.dds",
          "@_md5": "EBD15E220CE7E37C3977EE67648BC5B7",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__590.dds",
          "@_md5": "AF85246D8072344B19EDE986900B38A0",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__600.dds",
          "@_md5": "3EF3D738199EB1D91399359F9D0DB0AF",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__610.dds",
          "@_md5": "1C0211732E0DB402119E3BEB2D9DCFEA",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__620.dds",
          "@_md5": "C1CC4CD24FC150F7D863E1FC0C1DEA7D",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__630.dds",
          "@_md5": "9318D9853962F0176FFC847A319922CC",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__640.dds",
          "@_md5": "93A707EEE84C85872254894A6661B187",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__650.dds",
          "@_md5": "0DF7A87ECBCCF7FED0AA625522E193B8",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__660.dds",
          "@_md5": "9790467B7D85CE73370E78C22700DBD0",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__670.dds",
          "@_md5": "5A51602B6D2E000348FA504BE464CE2C",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__680.dds",
          "@_md5": "20C10B6478B6F990E3D2C46BF9CBE43C",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__690.dds",
          "@_md5": "0B81180BC91E393D5AB732B1255067AF",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__700.dds",
          "@_md5": "7670528506611F27E2309DFE1CB8E2D2",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__710.dds",
          "@_md5": "FB5AAD8F8B0DD81BDE28D9F15AB31E18",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__720.dds",
          "@_md5": "2C3BB03AABE105F5AF56E00F36CFA10E",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__730.dds",
          "@_md5": "D5AA9CC36208EA0812DFA4375C06D27F",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__740.dds",
          "@_md5": "3F9DD0208E23D21116005CF43C394CD1",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__750.dds",
          "@_md5": "DD2E4F81EDC5F1A26EBC414335B296A8",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__760.dds",
          "@_md5": "07079EB4E093679F99AF19E530B190C2",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__770.dds",
          "@_md5": "F52139A5D6474C8172D13CCCBFACD9B8",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__780.dds",
          "@_md5": "9E1E8DD9138CCF56965AB58BCB44BB01",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__790.dds",
          "@_md5": "21D5D35ACFA1DF561C4AF3CC13C177B1",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__800.dds",
          "@_md5": "2F24C29495B86611A915426F294A2CCE",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__810.dds",
          "@_md5": "51C05CC8D3804F3D04B43FD2969139DB",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__820.dds",
          "@_md5": "8ADF07A07B5B7D6B9675FC76F510382A",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__830.dds",
          "@_md5": "3C1C0F1B81BF4CC44D7B4CFDF6F65D70",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__840.dds",
          "@_md5": "E6927E3B1E93D315E745A3822E82CC41",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__850.dds",
          "@_md5": "C5B6F014F90B257E76055285976DE6AC",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__860.dds",
          "@_md5": "BA83E79470FEFD530CF479B447D0B813",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__870.dds",
          "@_md5": "B9B0FE69146AF441B6F9AF0D98DC533E",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__880.dds",
          "@_md5": "7666500F183251C9D2DF85149B074539",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__890.dds",
          "@_md5": "80B49C944C49959224B667FE9508BF77",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/A__900.dds",
          "@_md5": "6C35CABFA1B06A078EDE82600A5CA514",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_acd_01.dds",
          "@_md5": "C3DB9E38560FB6ECF4C2DA57EDD5B01C",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_asi_01.dds",
          "@_md5": "8B4E067D6E7AB8FC4F9C6602FDBC050C",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_asi_02.dds",
          "@_md5": "49060FBB898F160CBB6AEAC288515FB4",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_chn_01.dds",
          "@_md5": "4FA5FEB15306630A5890B72CD5E9205F",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_cls_01.dds",
          "@_md5": "88772C366451534AFA8D3C1D64EEC921",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_cls_02.dds",
          "@_md5": "7A5ADDB07EF2EA63923168B6A59569F4",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_cls_03.dds",
          "@_md5": "68F4CB122A3DE30A5BF91DC877BDBA2A",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_cls_04.dds",
          "@_md5": "6A3CDFDA386610129BF9E232DA0C1F51",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_cls_05.dds",
          "@_md5": "667422872888033FD78F53E0C037E221",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_cls_07.dds",
          "@_md5": "4530CD2983B59799DB48CAFC0E31DDC1",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_cls_10.dds",
          "@_md5": "F5BFEB82941486DC3006796C0D0E6222",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_dig_01.dds",
          "@_md5": "045AF805A3789B50E11DF70DF7E80EBC",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_fms_01.dds",
          "@_md5": "44038B5E6BF0291AEF2C382BAA980A62",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_ftv_01.dds",
          "@_md5": "69553CD3E33693335BAFF8D28AAA6FF0",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_grc_01.dds",
          "@_md5": "58D26A822B23393334C43231D149FBF3",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_gtr_01.dds",
          "@_md5": "71D7F76C0AFB5BEF96DA35C7BC6E6AB8",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_ind_01.dds",
          "@_md5": "B8C294BCFDA7AB13C3EB011358EAFFA8",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_ind_02.dds",
          "@_md5": "7BCFE58021A22B96A796EA996CCBDF7F",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_jaz_01.dds",
          "@_md5": "19D70492B9D864B68ABE52D798E06E98",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_jaz_02.dds",
          "@_md5": "CDF8D42FD0572BC7AC9E7B5FAAE01898",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_lat_01.dds",
          "@_md5": "09716B4D9C87EFFE19592C8E02A31C4F",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_lat_02.dds",
          "@_md5": "312CC190696518733AFFE096948381F2",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_med_01.dds",
          "@_md5": "0C026F34716DEFC06672CBFF925DE308",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_mic_03.dds",
          "@_md5": "2F154327BA65A7C9727DB55A8E57ACCF",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_mic_04.dds",
          "@_md5": "F2C94DA85F61403B088C893F0BB11F9E",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_mic_05.dds",
          "@_md5": "53016E326A8E436E5114E8279B44947F",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_opr_01.dds",
          "@_md5": "8E33E7EE73C942BAA4DCE4BF7D666A71",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_opr_02.dds",
          "@_md5": "82172628B3017DE546FCF8E66B4707BA",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_ori_03.dds",
          "@_md5": "3A40D9EB0BC8C070CC34F54C71657ADA",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_ori_07.dds",
          "@_md5": "ED9787067F1ACFE2AF8A6D3E4133BD01",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_ori_08.dds",
          "@_md5": "97D1334E60BAFEF1B4AA48E9BD63EF6B",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_ori_09.dds",
          "@_md5": "6CF7873A8236CF881E8895C227B5527B",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_rap_01.dds",
          "@_md5": "0D2BC6202B0E9BEFCF38664061EB17F1",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_rcp_08.dds",
          "@_md5": "47EDDE9E904FD8DBE4F1F8A43319BB30",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_scd_02.dds",
          "@_md5": "EE40D92914CE24870FBC8E0C6E7CDADD",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_scd_03.dds",
          "@_md5": "7AA14661CD72767F23A15C00DB7E4EF0",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_scd_05.dds",
          "@_md5": "BE93EAD23509CB547C59473ECF62487E",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_scd_08.dds",
          "@_md5": "7B03333CBF664575C6ED72514B3E5609",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_scn_01.dds",
          "@_md5": "6E5BD5F7A9C9EFF998AA9B38AFFBF0A7",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_scn_03.dds",
          "@_md5": "739223B2AD5B2539E67261520EB38598",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_scn_07.dds",
          "@_md5": "63F8F10A362111E17612398CC414849A",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_scn_08.dds",
          "@_md5": "33F08F1ECCBF362475680D279867CE9B",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_scn_09.dds",
          "@_md5": "BA960C5E20EC08E5682E806E0264B6B2",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_spl_01.dds",
          "@_md5": "708EB02A0963D55B0D4855EA54F2AE83",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_sum_01.dds",
          "@_md5": "C028BE8AAA109636C9124AD62F41F48C",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/BG_tha_01.dds",
          "@_md5": "9C9D8B8895C2294E5DAFD1A1F1ABEC55",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__010.mp3",
          "@_md5": "9D0BF0BD033C9ADAEC11A020635170F0",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__020.mp3",
          "@_md5": "676CBFB6F323D28A50EEB2BE535BD849",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__030.mp3",
          "@_md5": "4A7211F13EFEFA7CBA9A3B2587CBF8C7",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__040.mp3",
          "@_md5": "FF92BE6432AB957D6479617E2ADEACBA",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__050.mp3",
          "@_md5": "F3D34928797E363155651AC19CBA7B91",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__060.mp3",
          "@_md5": "D001DFC5CB74C96787BCD4F793FC01D1",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__070.mp3",
          "@_md5": "46BF85A075546A651A167A9D50712D35",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__080.mp3",
          "@_md5": "5AC94C4BB8FF0B7C414C786ECD505160",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__090.mp3",
          "@_md5": "799F59B568CB15438EE5D70BAB14F9AB",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__100.mp3",
          "@_md5": "3F6D16B2316B4242E78F9FA54B31B714",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__110.mp3",
          "@_md5": "C4E87794558B27FA1589965679C14C6B",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__120.mp3",
          "@_md5": "BD009E203F2E6BFB62831BBFAEBCBC0F",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__130.mp3",
          "@_md5": "247A887284BA16D68AE584FDB1E658A8",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__140.mp3",
          "@_md5": "4AE3BB630742850AB67C99E88DDF1765",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__150.mp3",
          "@_md5": "B2A644740DDE41538E5094260C6AC4AD",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__160.mp3",
          "@_md5": "6E22DA319BACCE5C4913E8FC345D735C",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__170.mp3",
          "@_md5": "25F912837913D3A6A167447C1D1EF1BA",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__180.mp3",
          "@_md5": "C672FD7477A2AD1E217A50B4AC3C0FE2",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__190.mp3",
          "@_md5": "F4AF6F586ABC30FAC2BDD6025BAAD35F",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__200.mp3",
          "@_md5": "6492C5EDE340DCF0610273B4A96F7F58",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__210.mp3",
          "@_md5": "962C34F43BC612792CEE2DE3EB89698C",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__220.mp3",
          "@_md5": "F2E8068ECC188D880E6F4FE5C2B445AF",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__230.mp3",
          "@_md5": "C79175A8524D9D406C8448F5AEF57ABC",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__240.mp3",
          "@_md5": "3AC2A32B49EFF1D8AEE81E90BC6B79C2",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__250.mp3",
          "@_md5": "EFDAF420878C0ADC94E6969AC4E87780",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__260.mp3",
          "@_md5": "52EA6DA27D315DC9C7CEDC93361EC806",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__270.mp3",
          "@_md5": "922A38824FFA1865AF1FE2837548A4FB",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__280.mp3",
          "@_md5": "236A05BD151FCBC2E8CF39162E2230AA",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__290.mp3",
          "@_md5": "6702DC7A35D44CCEA6900A2CC01F7B47",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__300.mp3",
          "@_md5": "59D5DBBB8441A7E061488903513692C4",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__310.mp3",
          "@_md5": "67B46B7A3A0FB5FE594C12B37C3BB3DE",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__320.mp3",
          "@_md5": "C6AB050834157A8EE1A5576BEE8B0AA5",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__330.mp3",
          "@_md5": "1D97E76B1A07358F2F3747E05F46A30A",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__340.mp3",
          "@_md5": "5AE6262DE4B1810C17429000F71D4ABC",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__350.mp3",
          "@_md5": "E6597DD9BB4F52F633EBBAB2C46E201C",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__360.mp3",
          "@_md5": "F2EEA0A65088A99585A4AF1D87832F1F",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__370.mp3",
          "@_md5": "21A14CC701380CC06ED59B48CB6ECBDC",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__380.mp3",
          "@_md5": "863ECD50C9925DC869D825EA51F6502A",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__390.mp3",
          "@_md5": "EFAFDD3B8F5DB465105EF02A3DACFF9F",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__400.mp3",
          "@_md5": "6D3A652F365E374866B8856660BD4705",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__410.mp3",
          "@_md5": "2766104130B2EFC781EDEEC1AE0E73A6",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__420.mp3",
          "@_md5": "85FAC8325491BBCEF45F4373FB330E76",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__430.mp3",
          "@_md5": "42BBDA1F6E8B086851231B8AEBA6F9BA",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__440.mp3",
          "@_md5": "CD1B8D812E413DA5FF45F68877529C79",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__450.mp3",
          "@_md5": "CE8661F507959DD06A7F131C802152FB",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__460.mp3",
          "@_md5": "063E75014AE902A1B2D06467A2D636F0",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__470.mp3",
          "@_md5": "395476E61209EA7523A27BB77E3164D0",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__480.mp3",
          "@_md5": "0CE008294BD467668FA51C69481D3B3A",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__490.mp3",
          "@_md5": "833E2C01AACA96AB7993B71CC5BFBA1C",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__500.mp3",
          "@_md5": "2CA09FA600313419E33B432D43969836",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__510.mp3",
          "@_md5": "7FF5ACBE8A57E7CFAB4CD0E724F276EE",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__520.mp3",
          "@_md5": "4DF818F80FB58C0612A2FBCF1BC6E412",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__530.mp3",
          "@_md5": "2EA65E2BB483FD26444B15183497E30B",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__540.mp3",
          "@_md5": "7486C88F1A30C503EDA1EF5E47DF34FB",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__550.mp3",
          "@_md5": "A999004D6545B87092D0CFA612DA5800",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__560.mp3",
          "@_md5": "15F28B63297C76BF3802403E0ED0ECD5",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__570.mp3",
          "@_md5": "20CBF9B11EA101FD5A535E89A7023702",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__580.mp3",
          "@_md5": "EC0E94D9B33B17D0BCBB801920837442",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__590.mp3",
          "@_md5": "28C54837A2FF8FE8D890DBBF99273282",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__600.mp3",
          "@_md5": "D9E16505F77D6D01CFAF8FF2AF609DBA",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__610.mp3",
          "@_md5": "592064FAAA4CD52154CD790908E036FB",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__620.mp3",
          "@_md5": "848C4C2230547960D1E568CF0784953E",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__630.mp3",
          "@_md5": "7EC1874299A4CBF647F9305913ED41AA",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__640.mp3",
          "@_md5": "BF5550B9347F904E24ACC7D1C31BCA26",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__650.mp3",
          "@_md5": "93C5FEF9635793D1B73C362B81BA7893",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__660.mp3",
          "@_md5": "074FF539D86397464FC2F0F6087428B7",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__670.mp3",
          "@_md5": "F27E9D0F7266AFFFA8A2376B4B9C3F69",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__680.mp3",
          "@_md5": "B74D945CCCB0D096F3026AF6A9B7E385",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__690.mp3",
          "@_md5": "C7EF7C163C77ECCD3E043B100BF91B94",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__700.mp3",
          "@_md5": "82E939FB7FC22DCB56C9C8E381FBCF15",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__710.mp3",
          "@_md5": "283BCB005DDC2F05CABE5954AFB38F87",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__720.mp3",
          "@_md5": "086D3FCF6E8B7C6E7E2C4A73C1A29DBE",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__730.mp3",
          "@_md5": "858A78920FA56F02708831581826B1A3",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__740.mp3",
          "@_md5": "E8E3C6B18DBFF94B40827FDBEC1A60F6",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__750.mp3",
          "@_md5": "9DF32549A5919E7EE0BD6AB968D4C01E",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__760.mp3",
          "@_md5": "519F7F313A9EFC1695C7DE77089964A4",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__770.mp3",
          "@_md5": "F29CA4ED261EE060436D9DEAB1DD65F5",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__780.mp3",
          "@_md5": "9BDB12FCD5FA7BE757B719380E32F5DD",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__790.mp3",
          "@_md5": "BE0C50489FD885689B276080DAB6FD9C",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__800.mp3",
          "@_md5": "F7431E85D4B5653E7118234BC2E64852",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__810.mp3",
          "@_md5": "DA4A2F0830B0E1EE03AC7E272B57ECCC",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__820.mp3",
          "@_md5": "D882B0A9159CA547D0E3AB30133DC89E",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__830.mp3",
          "@_md5": "9342F5E70623216D10F4497BF6E08216",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__840.mp3",
          "@_md5": "F7F67B58060649679E04EAFA3A7CA5D2",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__850.mp3",
          "@_md5": "50B61AAF2557EF61515DD4A5C3E34269",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__860.mp3",
          "@_md5": "EAD1CAAF1C01CA0BD01FB24980A1CA11",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__870.mp3",
          "@_md5": "E8A777D4884AF7451714CAD9CAEBF837",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__880.mp3",
          "@_md5": "FC17B9FEA40374CEEC1A9DEAD3C61005",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__890.mp3",
          "@_md5": "BEAAE927C6193A64CB7D5CD996EB1953",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/M__900.mp3",
          "@_md5": "B3E7649A6C8B82CA1D42AE40FF83AC62",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__010.mp3",
          "@_md5": "4D563C427EA9D1AD4E4352C1BA40DF6D",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__020.mp3",
          "@_md5": "C9CA25833928AD177FBE1B65E47A4000",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__030.mp3",
          "@_md5": "8667F7ED636EA828C6E4C33432F1AB33",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__040.mp3",
          "@_md5": "15979B2EA9F5BFE2416A5FB2E030B612",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__050.mp3",
          "@_md5": "CA0D4C3BBA7E3CF450ACC71667C422B7",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__060.mp3",
          "@_md5": "C37A3A54370705638F4273F3444DD02E",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__070.mp3",
          "@_md5": "603B9583275F8892FB66B35DFD024E66",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__080.mp3",
          "@_md5": "9D4FFFB2F8522353F3653F66757FFDE0",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__090.mp3",
          "@_md5": "5B84ABD3A9598723AA62147DBDE8F963",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__100.mp3",
          "@_md5": "1D5B225A6DEEEC8BE9E3DA89F242168D",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__110.mp3",
          "@_md5": "27037603AC1A9E115FED018016A7E287",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__120.mp3",
          "@_md5": "CE3A3DB6259A0F33A7311A935C60B770",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__130.mp3",
          "@_md5": "2D51621B9FA27F4A266F9C373BD2A261",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__140.mp3",
          "@_md5": "FC7F09B3DED45F4E048F211F76D95D94",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__150.mp3",
          "@_md5": "0B0335B268CA4148034683D404BA84FC",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__160.mp3",
          "@_md5": "D36C604AE268AC6C4D12A1CC4C754C44",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__170.mp3",
          "@_md5": "9E181D9BF85618D67D078106C2D5BE55",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__180.mp3",
          "@_md5": "0A920B00E2DC9E3773C8A7D372614D06",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__190.mp3",
          "@_md5": "7C2AB60D4E8BE7786E9F1A25D56BE02F",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__200.mp3",
          "@_md5": "96B9AFC9BA53DE568195D36124B8AE87",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__210.mp3",
          "@_md5": "C01FD484C071120E08E4655B3ED19295",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__220.mp3",
          "@_md5": "FDDA2014A5D58105AF2C847B5DEBC856",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__230.mp3",
          "@_md5": "C824DAC52DCF0102B56547D140C1B250",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__240.mp3",
          "@_md5": "CD3A9BCCF2290581AA3E74C6491ACA3D",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__250.mp3",
          "@_md5": "A2B426A913068D5D6348E5CABBF630D4",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__260.mp3",
          "@_md5": "A6070759D487AB850B217E9893ED9F66",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__270.mp3",
          "@_md5": "A63BF0BF9913E59796D11F1BBED340BC",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__280.mp3",
          "@_md5": "3A8A99C68E71E4B1CD6933B895332338",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__290.mp3",
          "@_md5": "9EE4A46F0C8B056F653030C4B96A5B49",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__300.mp3",
          "@_md5": "04512365AFAFC3CC678B50D326F9DE56",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__310.mp3",
          "@_md5": "182BDD9DCFE9170961BE900B60E4ECFF",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__320.mp3",
          "@_md5": "404ABF4DDA5B446A91E430CF801D5B89",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__330.mp3",
          "@_md5": "B4C3E1E4CAA7417FBC1EB90EA187EE1C",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__340.mp3",
          "@_md5": "3F8C69EA81D85B10AA81F19B7DEAF156",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__350.mp3",
          "@_md5": "12BE7BB0E1F8473ADBC87397565FFECA",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__360.mp3",
          "@_md5": "39331439ACCA25014D7B2ACC20B80467",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__370.mp3",
          "@_md5": "677362D565BE76CEC3177DFCCDF66595",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__380.mp3",
          "@_md5": "93208D18F7BB84D0CDC28207CF309DAA",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__390.mp3",
          "@_md5": "D5736B26C3B1B8A544DE4F25A5EDA1A4",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__400.mp3",
          "@_md5": "8A2BA3289268BFA034DD754BFC317FF1",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__410.mp3",
          "@_md5": "D5FD0FF677B0ACB22C69A0BC332913A8",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__420.mp3",
          "@_md5": "3D96DE13DB35F49B21795EC56C4515F8",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__430.mp3",
          "@_md5": "FFF4388F114C6DDCE07FA787C4A029B3",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__440.mp3",
          "@_md5": "0431B4BC4E5185A8C3B29C7992EB0461",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__450.mp3",
          "@_md5": "5447B4B2721A773F73F47DD192F9680A",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__460.mp3",
          "@_md5": "47CC860E86E012955C8CB1F6042490C0",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__470.mp3",
          "@_md5": "A36CE3B483A0450DF27B092CE7CE9CB9",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__480.mp3",
          "@_md5": "D0296AEAF65B53390EA873B6F8E9E19A",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__490.mp3",
          "@_md5": "0F3FF9944A622C83F11C5F574613B886",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__500.mp3",
          "@_md5": "99EAB5727B0CD1EB8B98CDA234280C92",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__510.mp3",
          "@_md5": "04163D3BF97242C7ED108620E00E04A3",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__520.mp3",
          "@_md5": "8C655D5AA5DC15985A4516FF7AD99E85",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__530.mp3",
          "@_md5": "79AE38135D1A85D9D94F69FEE74004D4",
          "@_import": "1",
        },
        {
          "#text": "Modules/MoreGP/Extra_GPs_items/W__540.mp3",
          "@_md5": "07A1C91652EB120BB593D6D2C61F2874",
          "@_import": "1",
        },
        {
          "#text": "Mapscript Fixes/Boreal.lua",
          "@_md5": "3EEC34EC93897595AABD4367C8B4B1A9",
          "@_import": "1",
        },
        {
          "#text": "Mapscript Fixes/Highlands.lua",
          "@_md5": "C94DD0DDF8E82E5B09B728BD7FCD951A",
          "@_import": "1",
        },
        {
          "#text": "Mapscript Fixes/Terra.lua",
          "@_md5": "F10C5FF7AE8A7276B99B01F1A1066C65",
          "@_import": "1",
        },
      ],
    },
    Actions: {
      OnGetDLLPath: {
        SetDllPath: "CvGameCore_Expansion2.dll",
      },
      OnModActivated: {
        UpdateDatabase: [
          "Core Files/CommunityPatchTables.xml",
          "Core Files/Core Tables/CoreTableEntries.sql",
          "Core Files/Core Tables/CoreTableAdditions.xml",
          "Core Files/Core Tables/DifficultyTables.sql",
          "Core Files/Core Tables/DifficultyTables.xml",
          "Core Files/Core Tables/CustomModOptions.xml",
          "Core Files/Core Changes/CommunityPatchDLLChanges.xml",
          "Core Files/Core Values/CoreDefines.sql",
          "Core Files/Core Changes/CoreChanges.sql",
          "Core Files/Core Values/CoreValues.xml",
          "Core Files/Core Changes/CoreChanges.xml",
          "Core Files/Core Changes/NewText.xml",
          "Core Files/Core Values/ExtraSpyTable.xml",
          "Core Files/PNM Mods DB/API/Achievements.xml",
          "Core Files/PNM Mods DB/API/Espionage.xml",
          "Core Files/PNM Mods DB/API/Extensions.sql",
          "Core Files/PNM Mods DB/API/PlotBasedDamage.sql",
          "Core Files/PNM Mods DB/API/PlotYields.xml",
          "Core Files/PNM Mods DB/API/Religion.xml",
          "Core Files/PNM Mods DB/BUGFIX/FeatureRemoval.sql",
          "Core Files/PNM Mods DB/BUGFIX/GoodyHutMessages.xml",
          "Core Files/PNM Mods DB/BUGFIX/SpyNames.xml",
          "Core Files/PNM Mods DB/BUGFIX/UnitclassNotUnit.xml",
          "Core Files/PNM Mods DB/BUGFIX/UnitclassNotUnit.sql",
          "Core Files/PNM Mods DB/EVENTS/CanMoveInto.sql",
          "Core Files/PNM Mods DB/EVENTS/CityBombard.sql",
          "Core Files/PNM Mods DB/EVENTS/DiploModifiers.xml",
          "Core Files/PNM Mods DB/EVENTS/BattleRoles.xml",
          "Core Files/PNM Mods DB/GLOBAL/AlpinePasses.sql",
          "Core Files/PNM Mods DB/GLOBAL/CannotEmbark.sql",
          "Core Files/PNM Mods DB/GLOBAL/CityWorking.sql",
          "Core Files/PNM Mods DB/GLOBAL/AutomatonWorkers.sql",
          "Core Files/PNM Mods DB/GLOBAL/ExcludeFromGifts.sql",
          "Core Files/PNM Mods DB/GLOBAL/GreatworkYieldtypes.sql",
          "Core Files/PNM Mods DB/GLOBAL/MoveAfterUpgrade.sql",
          "Core Files/PNM Mods DB/GLOBAL/PassableForts.sql",
          "Core Files/PNM Mods DB/GLOBAL/PromotionClasses.sql",
          "Core Files/PNM Mods DB/GLOBAL/SeparateGreatAdmiral.sql",
          "Core Files/PNM Mods DB/GLOBAL/StackingRules.sql",
          "Core Files/PNM Mods DB/GLOBAL/Relocation.sql",
          "Core Files/PNM Mods DB/PROMOTIONS/CrossIce.sql",
          "Core Files/PNM Mods DB/PROMOTIONS/CrossMountains.sql",
          "Core Files/PNM Mods DB/PROMOTIONS/CrossOceans.sql",
          "Core Files/PNM Mods DB/PROMOTIONS/DeepWaterEmbarkation.sql",
          "Core Files/PNM Mods DB/PROMOTIONS/HalfMove.sql",
          "Core Files/PNM Mods DB/PROMOTIONS/ImprovementBonus.sql",
          "Core Files/PNM Mods DB/PROMOTIONS/UnitNaming.xml",
          "Core Files/PNM Mods DB/PROMOTIONS/VariableRecon.xml",
          "Core Files/PNM Mods DB/PROMOTIONS/VariableRecon.sql",
          "Core Files/PNM Mods DB/RELIGION/ConversionModifiers.sql",
          "Core Files/PNM Mods DB/RELIGION/LocalReligions.sql",
          "Core Files/PNM Mods DB/RELIGION/PlotYields.xml",
          "Core Files/PNM Mods DB/RELIGION/PolicyBranchFaithGp.xml",
          "Core Files/PNM Mods DB/TRADE/RouteScaling.sql",
          "Core Files/PNM Mods DB/TRAITS/AnyBelief.sql",
          "Core Files/PNM Mods DB/TRAITS/CrossesIce.sql",
          "Core Files/PNM Mods DB/TRAITS/TradeRouteBonuses.sql",
          "Core Files/PNM Mods DB/TRAITS/OtherPrereqs.sql",
          "Core Files/PNM Mods DB/UI/CityExpansion.sql",
          "Core Files/Core Changes/EraSpecificArtists.sql",
          "Core Files/Core Changes/EraSpecificMusicians.sql",
          "Core Files/Core Changes/EraSpecificWriters.sql",
          "Core Files/Core Changes/NewArtists.xml",
          "Core Files/Core Changes/NewWriters.xml",
          "Core Files/Core Changes/TextChanges.sql",
          "Core Files/Core Changes/TerrainFixes.xml",
          "Core Files/Core Values/Automates.xml",
          "Core Files/Core Changes/WorldChanges.sql",
          "Core Files/Core Changes/SaneTerrain.sql",
          "Core Files/Core Values/MinorCivQuestRewards.xml",
          "Core Files/Core Values/DummyTrigger.sql",
          "Core Files/Text/CoreText_en_US.sql",
          "Core Files/Text/CoreText_en_US.xml",
          "Core Files/PNM Mods DB/PROMOTIONS/DeepWater.xml",
          "Core Files/Core Changes/UnitFixes.sql",
          "Core Files/Core Tables/GameEventsTable.xml",
          "Modules/Events/Text/en_US/City_en_US.xml",
          "Modules/Events/Text/en_US/EventCore_en_US.xml",
          "Modules/Events/Text/en_US/Player_en_US.xml",
          "Core Files/Core Values/New_CIV5AICityStrategies.xml",
          "Core Files/Core Values/New_CIV5AIMilitaryStrategies.xml",
          "Core Files/Core Values/New_CIV5MultiUnitFormations.xml",
          "Modules/Events/CoreEvents.sql",
          "Core Files/Core Tables/JFDContracts.xml",
          "Core Files/Core Values/CargoShipMod.sql",
          "Core Files/Core Changes/DiploAIOptions.sql",
          "Core Files/Core Values/DiploApproachWeights.sql",
          "Core Files/Core Values/DiploOpinionWeights.sql",
          "Core Files/Core Values/FasterAircraft.sql",
          "Modules/MoreGP/ExtraGPs.sql",
        ],
      },
    },
    EntryPoints: {
      EntryPoint: [
        {
          Name: "EventChoice",
          Description: "EventChoice",
          "@_type": "InGameUIAddin",
          "@_file": "Core Files/CoreLua/EventChoicePopup.lua",
        },
        {
          Name: "Event",
          Description: "Event",
          "@_type": "InGameUIAddin",
          "@_file": "Core Files/CoreLua/EventPopup.lua",
        },
        {
          Name: "CityEvent",
          Description: "CityEvent",
          "@_type": "InGameUIAddin",
          "@_file": "Core Files/CoreLua/EventChoicePopupCity.lua",
        },
        {
          Name: "CityEventPopup",
          Description: "CityEventPopup",
          "@_type": "InGameUIAddin",
          "@_file": "Core Files/CoreLua/CityEventPopup.lua",
        },
        {
          Name: "EventOverview.lua",
          Description: "EventOverview.lua",
          "@_type": "InGameUIAddin",
          "@_file": "Core Files/CoreLua/EventOverview.xml",
        },
        {
          Name: "EspionageChoice",
          Description: "EspionageChoice",
          "@_type": "InGameUIAddin",
          "@_file": "Core Files/CoreLua/EspionageChoicePopup.lua",
        },
      ],
    },
    "@_id": "d1b6328c-ff44-4b0d-aad7-c657f83610cd",
    "@_version": "117",
  },
};
