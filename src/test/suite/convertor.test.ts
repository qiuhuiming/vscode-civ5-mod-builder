import * as assert from "assert";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from "vscode";
// import * as myExtension from '../../extension';
import { XMLBuilder, XMLParser } from "fast-xml-parser";
import { testInputJs, testOutputJs } from "./testObj";
import {
  MetaConvertor,
  ModAssociationConvertor,
} from "../../compiler/convertor";
import { InputSchema, OutputSchema } from "../../compiler/types";

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

  test("MetaConvertor Test", () => {
    const convertor = new ModAssociationConvertor();
    const input: InputSchema = testInputJs as any;
    const output = {} as OutputSchema;
    convertor.convert(input, output);
    const outputJSON = JSON.stringify(output);
    console.log(outputJSON);
  });
});
