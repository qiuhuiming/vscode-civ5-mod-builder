from __future__ import annotations

import sys
from pathlib import Path
from xml.etree import ElementTree as ET

repo_root = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(repo_root))

from civ5_mod_builder.compiler import compile_civ5proj  # noqa: E402


def _normalize(elem: ET.Element) -> None:
    if elem.tag == "File":
        elem.attrib.pop("md5", None)
    for child in list(elem):
        _normalize(child)


def _elements_equal(a: ET.Element, b: ET.Element) -> bool:
    if a.tag != b.tag:
        return False
    if (a.text or "").strip() != (b.text or "").strip():
        return False
    if (a.tail or "").strip() != (b.tail or "").strip():
        return False
    if a.attrib != b.attrib:
        return False
    a_children = list(a)
    b_children = list(b)
    if len(a_children) != len(b_children):
        return False
    return all(_elements_equal(x, y) for x, y in zip(a_children, b_children))


def main() -> None:
    input_xml = (repo_root / "data/input_example.xml").read_text(encoding="utf-8")
    expected_xml = (repo_root / "data/output_example.xml").read_text(encoding="utf-8")

    compiled = compile_civ5proj(input_xml)

    got_root = ET.fromstring(compiled.xml_str)
    expected_root = ET.fromstring(expected_xml)

    _normalize(got_root)
    _normalize(expected_root)

    if not _elements_equal(got_root, expected_root):
        raise SystemExit("Mismatch against data/output_example.xml (ignoring File@md5).")

    print("OK")


if __name__ == "__main__":
    main()
