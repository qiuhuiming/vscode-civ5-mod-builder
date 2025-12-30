from __future__ import annotations

import argparse
import sys

from .builder import Builder


def build_arg_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        prog="civ5-mod-builder",
        description="Build a Civilization V .civ5proj into a MODS folder.",
    )
    parser.add_argument(
        "--from",
        dest="from_path",
        required=True,
        help="Path to the .civ5proj project file.",
    )
    parser.add_argument(
        "--to",
        dest="to_path",
        required=True,
        help=(
            "Path to the Civilization V MODS directory "
            '(e.g. "C:\\\\Users\\\\...\\\\Documents\\\\My Games\\\\Sid Meier\'s Civilization 5\\\\MODS").'
        ),
    )
    return parser


def main(argv: list[str] | None = None) -> None:
    parser = build_arg_parser()
    args = parser.parse_args(argv)

    print(f"from: {args.from_path}")
    print(f"to: {args.to_path}")

    try:
        Builder().build(args.from_path, args.to_path)
    except Exception as exc:
        print(str(exc), file=sys.stderr)
        raise SystemExit(1) from exc

