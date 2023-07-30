# civ5-mod-builder

civ5-mod-builder is an extension that serves as an alternative to Modbuddy for Civilization 5 modders. It offers a significant improvement in building speed and seamless integration with Visual Studio Code.

## Features

- Faster building speed compared to Modbuddy.
- Easy integration with Visual Studio Code as an extension.
- Command Line Interface for convenient usage.

## Command Line Interface

Before using the command line interface, ensure that you have Node.js installed on your system.

To get started, follow these steps:

1. Install the dependencies by running the following command inside the civ5-mod-builder directory:
```bash
cd civ5-mod-builder
npm install
```

2. Compile and run the mod builder using the following commands:
```bash
npm run compile # compile
node out/cli/index.js --to "C:\Users\your_username\Documents\My Games\Sid Meier's Civilization 5\MODS" --from "your_civ5_mod_proj.civ5proj" # run
```

Make sure to replace "your_username" with your actual Windows username and "your_civ5_mod_proj.civ5proj" with the name of your Civilization 5 mod project file.

**Enjoy modding your Civilization 5 game with increased efficiency and productivity using civ5-mod-builder!**