// a command line interface for the library
// --from <proj_file_path> the path to the project file
// --to <mod_dir_path> the path to the mod directory like (C:\Users\...\Documents\My Games\Sid Meier's Civilization 5\MODS)
// --help show help

import { Builder } from "../builder";
import { FileSystemAPI } from "../builder/fs";

function printHelp() {
  console.log(
    "Usage: node your_script_name.js --from <proj_file_path> --to <mod_dir_path>"
  );
}

function parseArguments(args: string[]): { from: string; to: string } | null {
  const argMap: { [key: string]: string } = {};
  let currentKey: string | null = null;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith("--")) {
      currentKey = arg.slice(2);
      argMap[currentKey] = "";
    } else if (currentKey !== null) {
      argMap[currentKey] = arg;
      currentKey = null;
    }
  }

  if (!argMap.hasOwnProperty("from") || !argMap.hasOwnProperty("to")) {
    return null;
  }

  return {
    from: argMap["from"],
    to: argMap["to"],
  };
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes("--help")) {
    printHelp();
    return;
  }

  const parsedArgs = parseArguments(args);
  if (!parsedArgs) {
    console.error("Invalid arguments. Use --help for usage instructions.");
    return;
  }

  const { from, to } = parsedArgs;

  console.log(`from: ${from}`);
  console.log(`to: ${to}`);

  // Instantiate your FileSystemAPI and use it here with the provided from and to paths.
  const fileSystem = new FileSystemAPI();
  const builder = new Builder({ reader: fileSystem, writer: fileSystem });
  builder.build(from, to);
}

main();
