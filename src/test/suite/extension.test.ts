import * as assert from "assert";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from "vscode";
// import * as myExtension from '../../extension';
import { XMLBuilder, XMLParser } from "fast-xml-parser";
import { testInputJs, testOutputJs } from "./testObj";

suite("Extension Test Suite", () => {
  vscode.window.showInformationMessage("Start all tests.");

  test("Basic Parser Test", () => {
    const input = `<root a="nice" checked>
			<a>wow</a>
			<b>bow<c>carl</c></b>
		</root>`;
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
    });
    const obj = parser.parse(input);
    console.log(obj);
  });

  test("Input File Read Test", async () => {
    // get the current work path
    const path = "D:/code/civ5-mod-builder/data/input_example.xml";
    const input = await vscode.workspace.fs
      .readFile(vscode.Uri.file(path))
      .then((data) => {
        return data.toString();
      });
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
    });
    const obj = parser.parse(input);
    console.log(obj);
    console.log(JSON.stringify(obj));
  });

  test("Output File Read Test", async () => {
    // get the current work path
    const path = "D:/code/civ5-mod-builder/data/output_example.xml";
    const input = await vscode.workspace.fs
      .readFile(vscode.Uri.file(path))
      .then((data) => {
        return data.toString();
      });
    const parser = new XMLParser({
      ignoreAttributes: false,
      // attributeNamePrefix: "@_",
    });
    const obj = parser.parse(input);
    console.log(obj);
    console.log(JSON.stringify(obj));
  });

  test("Output File Write Test", async () => {
    const inputObj = testOutputJs;
    const builder = new XMLBuilder({ ignoreAttributes: false, format: true });
    const output = builder.build(inputObj);
    console.log(output);

    // write to tmp/output.xml
    const path = "D:/code/civ5-mod-builder/data/tmp/output.xml";
    vscode.workspace.fs.writeFile(
      vscode.Uri.file(path),
      Buffer.from(output)
    );
  });
});
