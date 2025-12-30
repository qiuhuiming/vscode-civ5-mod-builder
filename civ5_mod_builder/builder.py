from __future__ import annotations

import shutil
from dataclasses import dataclass
from pathlib import Path, PurePosixPath

from .compiler import compile_civ5proj


@dataclass(frozen=True)
class BuildResult:
    mod_dir: Path
    modinfo_path: Path


class Builder:
    def build(self, input_proj_file_path: str, output_mods_dir_path: str) -> BuildResult:
        input_proj_path = Path(input_proj_file_path)
        output_mods_dir = Path(output_mods_dir_path)

        input_xml = input_proj_path.read_bytes()
        compiled = compile_civ5proj(input_xml, project_dir=input_proj_path.parent)

        mod_name = compiled.mod_name
        version = compiled.mod_version
        mod_name_with_version = f"{mod_name} (v {version})"

        mod_dir = output_mods_dir / mod_name_with_version
        modinfo_path = mod_dir / f"{mod_name_with_version}.modinfo"

        output_mods_dir.mkdir(parents=True, exist_ok=True)

        if mod_dir.exists() and not mod_dir.is_dir():
            mod_dir.unlink()
        mod_dir.mkdir(parents=True, exist_ok=True)

        print("writing modinfo...")
        modinfo_path.write_text(compiled.xml_str, encoding="utf-8")

        project_dir = input_proj_path.parent
        for rel_posix in compiled.file_list:
            src = project_dir / Path(*PurePosixPath(rel_posix).parts)
            dest = mod_dir / Path(*PurePosixPath(rel_posix).parts)
            dest.parent.mkdir(parents=True, exist_ok=True)
            will_copy = not dest.exists()
            if not will_copy:
                will_copy = src.stat().st_mtime_ns != dest.stat().st_mtime_ns

            if will_copy:
                print(f"copying {src} to {dest}")
                shutil.copy2(src, dest)

        return BuildResult(mod_dir=mod_dir, modinfo_path=modinfo_path)
