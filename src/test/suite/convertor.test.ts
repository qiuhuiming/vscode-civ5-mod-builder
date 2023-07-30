import * as assert from "assert";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from "vscode";
// import * as myExtension from '../../extension';
import { testInputJs } from "./testObj";
import {
  Convertor,
  MetaConvertor,
  ModActionConvertor,
  ModAssociationConvertor,
  ModContentConvertor,
  ModFileConvertor,
} from "../../compiler/convertor";
import { InputSchema, OutputSchema } from "../../compiler/types";
import path = require("path");
import { compile } from "../../compiler";

suite("Convertor Test Suite", () => {
  vscode.window.showInformationMessage("Start all tests.");

  test("MetaConvertor Test", () => {
    const convertor = new MetaConvertor();
    const input: InputSchema = testInputJs as any;
    const output = {} as OutputSchema;
    convertor.convert(input, output);
    const outputJSON = JSON.stringify(output);
    console.log(outputJSON);
  });

  test("AssociationConvertor Test", () => {
    const convertor = new ModAssociationConvertor();
    const input: InputSchema = testInputJs as any;
    const output = {} as OutputSchema;
    convertor.convert(input, output);
    const outputJSON = JSON.stringify(output);
    console.log(outputJSON);
  });

  test("ActionConvertor Test", () => {
    const convertor = new ModActionConvertor();
    const input: InputSchema = testInputJs as any;
    const output = {} as OutputSchema;
    convertor.convert(input, output);
    const outputJSON = JSON.stringify(output);
    console.log(outputJSON);
  });

  test("ModContentConvertor Test", () => {
    const convertor = new ModContentConvertor();
    const input: InputSchema = testInputJs as any;
    const output = {} as OutputSchema;
    convertor.convert(input, output);
    const outputJSON = JSON.stringify(output);
    console.log(outputJSON);
  });

  test("ModFileConvertor Test", () => {
    const convertor = new ModFileConvertor();
    const input: InputSchema = testInputJs as any;
    const output = {} as OutputSchema;
    convertor.convert(input, output);
    const outputJSON = JSON.stringify(output);
    console.log(outputJSON);
  });

  test("Compile Test", () => {
    const input: InputSchema = testInputJs as any;
    const output = {} as OutputSchema;

    const convertors: Convertor[] = [
      new MetaConvertor(),
      new ModAssociationConvertor(),
      new ModActionConvertor(),
      new ModContentConvertor(),
      new ModFileConvertor(),
    ];
    convertors.forEach((c) => c.convert(input, output));

    const outputJSON = JSON.stringify(output);
    console.log(outputJSON);
  });

  test("Compile Integration Test", async () => {
    const workspaceDir = path.resolve(__dirname, "../../..");
    // read string from ./data/input_example.xml
    const dataPath = path.resolve(workspaceDir, "./data/input_example.xml");
    const input = await vscode.workspace.fs.readFile(vscode.Uri.file(dataPath));
    const inputStr = input.toString();
    const outputResult = compile(inputStr);

    // write string to ./data/tmp/ut_output_example.xml
    const outputPath = path.resolve(workspaceDir, "./data/tmp/ut_output_example.xml");
    await vscode.workspace.fs.writeFile(vscode.Uri.file(outputPath), Buffer.from(outputResult.xmlStr));
  });
});
