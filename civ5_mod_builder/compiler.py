from __future__ import annotations

import hashlib
from collections import OrderedDict
from dataclasses import dataclass
from pathlib import Path, PurePosixPath
from typing import Iterable
from xml.etree import ElementTree as ET


@dataclass(frozen=True)
class CompiledProject:
    xml_str: str
    file_list: list[str]
    mod_name: str
    mod_version: str


def _to_posix_path(value: str) -> str:
    return value.replace("\\", "/")


def _strip_or_empty(value: str | None) -> str:
    return (value or "").strip()


def _normalize_property_value(value: str) -> str:
    lowered = value.lower()
    if lowered == "true":
        return "1"
    if lowered == "false":
        return "0"
    return value


def _indent(elem: ET.Element, level: int = 0, space: str = "  ") -> None:
    # Compatible with Python 3.8+; mirrors `xml.etree.ElementTree.indent`.
    i = "\n" + level * space
    if len(elem):
        if not elem.text or not elem.text.strip():
            elem.text = i + space
        for child in elem:
            _indent(child, level + 1, space)
            if not child.tail or not child.tail.strip():
                child.tail = i + space
        if not elem[-1].tail or not elem[-1].tail.strip():
            elem[-1].tail = i
    else:
        if level and (not elem.tail or not elem.tail.strip()):
            elem.tail = i


def _ns(root: ET.Element) -> str:
    if root.tag.startswith("{"):
        return root.tag.split("}", 1)[0][1:]
    return ""


def _q(ns_uri: str, tag: str) -> str:
    return f"{{{ns_uri}}}{tag}" if ns_uri else tag


def _find_default_property_group(root: ET.Element, ns_uri: str) -> ET.Element:
    for pg in root.findall(_q(ns_uri, "PropertyGroup")):
        cfg = pg.find(_q(ns_uri, "Configuration"))
        if _strip_or_empty(cfg.text if cfg is not None else None) == "Default":
            return pg
    first_pg = root.find(_q(ns_uri, "PropertyGroup"))
    if first_pg is None:
        raise ValueError("No <PropertyGroup> found in project XML.")
    return first_pg


def _parse_associations(
    property_group: ET.Element, ns_uri: str, group_tag: str
) -> list[dict[str, str]]:
    associations: list[dict[str, str]] = []
    group_el = property_group.find(_q(ns_uri, group_tag))
    if group_el is None:
        return associations

    for assoc_el in group_el.findall(_q(ns_uri, "Association")):
        assoc: dict[str, str] = {}
        for child in assoc_el:
            assoc[child.tag.split("}", 1)[-1]] = _strip_or_empty(child.text)
        associations.append(assoc)
    return associations


def _parse_actions(property_group: ET.Element, ns_uri: str) -> list[dict[str, str]]:
    actions: list[dict[str, str]] = []
    group_el = property_group.find(_q(ns_uri, "ModActions"))
    if group_el is None:
        return actions

    for action_el in group_el.findall(_q(ns_uri, "Action")):
        action: dict[str, str] = {}
        for child in action_el:
            action[child.tag.split("}", 1)[-1]] = _strip_or_empty(child.text)
        if action:
            actions.append(action)
    return actions


def _parse_entry_points(property_group: ET.Element, ns_uri: str) -> list[dict[str, str]]:
    content_items: list[dict[str, str]] = []
    group_el = property_group.find(_q(ns_uri, "ModContent"))
    if group_el is None:
        return content_items

    for content_el in group_el.findall(_q(ns_uri, "Content")):
        item: dict[str, str] = {}
        for child in content_el:
            item[child.tag.split("}", 1)[-1]] = _strip_or_empty(child.text)
        if item:
            content_items.append(item)
    return content_items


def _iter_file_items(project_root: ET.Element, ns_uri: str) -> Iterable[ET.Element]:
    for item_group in project_root.findall(_q(ns_uri, "ItemGroup")):
        for content in item_group.findall(_q(ns_uri, "Content")):
            yield content


def _compute_md5(path: Path) -> str:
    digest = hashlib.md5()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest().upper()


def compile_civ5proj(
    input_xml: str | bytes, project_dir: Path | None = None
) -> CompiledProject:
    project_root = ET.fromstring(input_xml)
    ns_uri = _ns(project_root)

    property_group = _find_default_property_group(project_root, ns_uri)

    mod_name = _strip_or_empty(property_group.findtext(_q(ns_uri, "Name")))
    mod_id = _strip_or_empty(property_group.findtext(_q(ns_uri, "Guid")))
    mod_version = _strip_or_empty(property_group.findtext(_q(ns_uri, "ModVersion")))
    if not mod_name or not mod_id or not mod_version:
        raise ValueError("Missing required properties: Name/Guid/ModVersion.")

    properties_order = [
        "Name",
        "Teaser",
        "Description",
        "Authors",
        "SpecialThanks",
        "HideSetupGame",
        "Homepage",
        "AffectsSavedGames",
        "MinCompatibleSaveVersion",
        "SupportsSinglePlayer",
        "SupportsMultiplayer",
        "SupportsHotSeat",
        "SupportsMac",
        "ReloadAudioSystem",
        "ReloadLandmarkSystem",
        "ReloadStrategicViewSystem",
        "ReloadUnitSystem",
    ]

    mod_el = ET.Element("Mod", {"id": mod_id, "version": mod_version})

    props_el = ET.SubElement(mod_el, "Properties")
    for key in properties_order:
        raw = property_group.findtext(_q(ns_uri, key))
        value = _strip_or_empty(raw)
        if not value:
            continue
        ET.SubElement(props_el, key).text = _normalize_property_value(value)

    deps_el = ET.SubElement(mod_el, "Dependencies")
    for assoc in _parse_associations(property_group, ns_uri, "ModDependencies"):
        assoc_type = assoc.get("Type", "")
        if not assoc_type:
            continue
        attrib: "OrderedDict[str, str]" = OrderedDict()
        assoc_id = assoc.get("Id", "")
        assoc_name = assoc.get("Name", "")
        if assoc_id:
            attrib["id"] = assoc_id
        if assoc.get("MinVersion", ""):
            attrib["minversion"] = assoc["MinVersion"]
        if assoc.get("MaxVersion", ""):
            attrib["maxversion"] = assoc["MaxVersion"]
        if assoc_type == "Mod" and assoc_name:
            attrib["title"] = assoc_name
        ET.SubElement(deps_el, assoc_type, attrib)

    refs_el = ET.SubElement(mod_el, "References")
    for assoc in _parse_associations(property_group, ns_uri, "ModReferences"):
        assoc_type = assoc.get("Type", "")
        if not assoc_type:
            continue
        attrib: "OrderedDict[str, str]" = OrderedDict()
        assoc_id = assoc.get("Id", "")
        assoc_name = assoc.get("Name", "")
        if assoc_id:
            attrib["id"] = assoc_id
        if assoc.get("MinVersion", ""):
            attrib["minversion"] = assoc["MinVersion"]
        if assoc.get("MaxVersion", ""):
            attrib["maxversion"] = assoc["MaxVersion"]
        if assoc_type == "Mod" and assoc_name:
            attrib["title"] = assoc_name
        ET.SubElement(refs_el, assoc_type, attrib)

    blocks_el = ET.SubElement(mod_el, "Blocks")
    for assoc in _parse_associations(property_group, ns_uri, "ModBlockers"):
        assoc_type = assoc.get("Type", "")
        if not assoc_type:
            continue
        attrib: "OrderedDict[str, str]" = OrderedDict()
        assoc_id = assoc.get("Id", "")
        assoc_name = assoc.get("Name", "")
        if assoc_id:
            attrib["id"] = assoc_id
        if assoc.get("MinVersion", ""):
            attrib["minversion"] = assoc["MinVersion"]
        if assoc.get("MaxVersion", ""):
            attrib["maxversion"] = assoc["MaxVersion"]
        if assoc_type == "Mod" and assoc_name:
            attrib["title"] = assoc_name
        ET.SubElement(blocks_el, assoc_type, attrib)

    files_el = ET.SubElement(mod_el, "Files")
    file_list: list[str] = []
    for content_el in _iter_file_items(project_root, ns_uri):
        include = _strip_or_empty(content_el.attrib.get("Include"))
        if not include:
            continue
        include_posix = _to_posix_path(include)
        file_list.append(include_posix)

        import_into_vfs = _strip_or_empty(
            content_el.findtext(_q(ns_uri, "ImportIntoVFS"))
        )
        import_flag = "1" if import_into_vfs == "True" else "0"

        if project_dir is not None:
            disk_path = project_dir / Path(*PurePosixPath(include_posix).parts)
            md5 = _compute_md5(disk_path)
        else:
            md5 = hashlib.md5(include_posix.encode("utf-8")).hexdigest().upper()

        file_el = ET.SubElement(files_el, "File", {"md5": md5, "import": import_flag})
        file_el.text = include_posix

    actions_el = ET.SubElement(mod_el, "Actions")
    actions_by_set: "OrderedDict[str, OrderedDict[str, list[str]]]" = OrderedDict()
    for action in _parse_actions(property_group, ns_uri):
        set_name = action.get("Set", "")
        type_name = action.get("Type", "")
        file_name = _to_posix_path(action.get("FileName", ""))
        if not set_name or not type_name or not file_name:
            continue
        actions_by_set.setdefault(set_name, OrderedDict()).setdefault(type_name, []).append(
            file_name
        )
    for set_name, type_map in actions_by_set.items():
        set_el = ET.SubElement(actions_el, set_name)
        for type_name, file_names in type_map.items():
            for file_name in file_names:
                ET.SubElement(set_el, type_name).text = file_name

    entry_points_el = ET.SubElement(mod_el, "EntryPoints")
    for content in _parse_entry_points(property_group, ns_uri):
        entry_type = content.get("Type", "")
        file_name = _to_posix_path(content.get("FileName", ""))
        name = content.get("Name", "")
        desc = content.get("Description", "")

        if not entry_type or not file_name:
            continue

        attrib: "OrderedDict[str, str]" = OrderedDict()
        attrib["type"] = entry_type
        attrib["file"] = file_name
        entry_el = ET.SubElement(entry_points_el, "EntryPoint", attrib)
        if name:
            ET.SubElement(entry_el, "Name").text = name
        if desc:
            ET.SubElement(entry_el, "Description").text = desc

    _indent(mod_el, level=0)
    xml_body = ET.tostring(mod_el, encoding="unicode", short_empty_elements=True)
    xml_str = '<?xml version="1.0" encoding="utf-8"?>\n' + xml_body

    return CompiledProject(
        xml_str=xml_str,
        file_list=file_list,
        mod_name=mod_name,
        mod_version=mod_version,
    )
