/* eslint-disable @typescript-eslint/naming-convention */
import { XMLBuilder, XMLParser } from "fast-xml-parser";
import { InputSchema } from "./types";

export function compile(input: string): string {
  const parser = new XMLParser();
  const inputObj: InputSchema = parser.parse(input);

  let outputObj = {};

  const builder = new XMLBuilder({ignoreAttributes: false, format: true});
  const output = builder.build(outputObj);
  return output;
}
