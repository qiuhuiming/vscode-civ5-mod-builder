# civ5-mod-builder

civ5-mod-builder is an extension that serves as an alternative to Modbuddy for Civilization 5 modders. It offers a significant improvement in building speed and seamless integration with Visual Studio Code.

## Features

- Faster building speed compared to Modbuddy.
- Easy integration with Visual Studio Code as an extension.
- Command Line Interface for convenient usage.

## Command Line Interface

Before using the command line interface, ensure that you have Python 3.8+ installed on your system.

### Run with `uv` (no clone)

```bash
uvx --from git+https://github.com/qiuhuiming/vscode-civ5-mod-builder.git civ5-mod-builder --to "C:\Users\your_username\Documents\My Games\Sid Meier's Civilization 5\MODS" --from "your_mod_proj.civ5proj"
```

### Run without `uv` (no clone)

```bash
pipx run --spec git+https://github.com/qiuhuiming/vscode-civ5-mod-builder.git civ5-mod-builder --to "C:\Users\your_username\Documents\My Games\Sid Meier's Civilization 5\MODS" --from "your_mod_proj.civ5proj"
```

If you don't have `pipx`, you can also do a one-liner install+run:

```bash
python -m pip install --user --upgrade git+https://github.com/qiuhuiming/vscode-civ5-mod-builder.git && python -m civ5_mod_builder --to "/path/to/MODS" --from "/path/to/project.civ5proj"
```

Make sure to replace `your_username` and `your_mod_proj.civ5proj` with your actual values.

### Development (with `uv`)

```bash
uv sync
uv run civ5-mod-builder --to /path/to/MODS --from /path/to/project.civ5proj
```

### Data fixtures check

```bash
python3 data/test.py
```

**Enjoy modding your Civilization 5 game with increased efficiency and productivity using civ5-mod-builder!**
