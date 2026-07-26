"""Import denních obsahových karet do A24 Obsahového radaru.

Podporuje balíčky s kartami za sekcí „Denní obsahové karty“ i starší
formát s nadpisy „## KARTA N“. Radar je interní workflow, nikoli projekt.
"""

from __future__ import annotations

import json
import re
import shutil
import sys
import unicodedata
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PROJECTS = {
    "agenda24": ("Agenda24", "02-agenda24", "agenda24", "https://agenda24.cz/", "#f033a5"),
    "pupeto": ("Pupeto", "03-pupeto", "pupeto", "https://pupeto.eu/", "#8c65ff"),
    "spolek ai": ("Spolek AI", "04-spolek-ai", "spolek-ai", "https://spolek.ai/", "#39c8e8"),
    "spolek.ai": ("Spolek AI", "04-spolek-ai", "spolek-ai", "https://spolek.ai/", "#39c8e8"),
    "firemní lektor": ("Firemní lektor", "05-firemni-lektor", "firemni-lektor", "https://www.firemnilektor.cz/", "#ff9f43"),
    "firemni lektor": ("Firemní lektor", "05-firemni-lektor", "firemni-lektor", "https://www.firemnilektor.cz/", "#ff9f43"),
    "firemnilektor.cz": ("Firemní lektor", "05-firemni-lektor", "firemni-lektor", "https://www.firemnilektor.cz/", "#ff9f43"),
}

VALUE_FEATURE_FIELDS = (
    "value_feature_type",
    "value_feature_name",
    "value_feature_summary",
    "value_feature_benefit",
    "value_feature_mvp",
    "value_feature_codex_prompt",
)

AGENDA24_SOCIALS = {
    "agenda24_instagram": "https://www.instagram.com/agenda24marketing/",
    "agenda24_facebook": "https://www.facebook.com/agenda24.online",
    "agenda24_linkedin": "https://www.linkedin.com/in/agenda24/",
    "agenda24_youtube": "https://www.youtube.com/@Agenda24.online",
    "agenda24_tiktok": "https://www.tiktok.com/@agenda24online",
}

ASSET_CONFIG = {
    "Agenda24": {
        "prefix": "agenda24", "folder": "zdroje grafika", "manifest": "brand/agenda24/manifest.json",
        "preferred": {
            "logo_primary": "", "logo_symbol": "logo-agenda24-favicon-1000-x-1000.png",
            "person_reference_1": "Martin Agenda 24 .webp", "person_reference_2": "Agenda 24 -jajaja.webp",
            "design_reference_1": "fb.png", "design_reference_2": "in.png",
        },
    },
    "Firemní lektor": {
        "prefix": "firemni_lektor", "folder": "zdroje grafika Firemni lektor", "manifest": "brand/firemni-lektor/manifest.json",
        "preferred": {
            "logo_primary": "", "logo_symbol": "", "person_reference_1": "ja.png", "person_reference_2": "lektor.png",
            "design_reference_1": "Firemní lektor.webp", "design_reference_2": "HOME ICONS10.webp",
        },
    },
    "Pupeto": {
        "prefix": "pupeto", "folder": "zdroje grafika pupeto", "manifest": "brand/pupeto/manifest.json",
        "preferred": {
            "logo_primary": "logo-pupeto-velke.png", "logo_symbol": "", "person_reference_1": "jack a mnouk.png", "person_reference_2": "Jack & Mnouk.mp4",
            "design_reference_1": "ikony hero-01.svg", "design_reference_2": "pieta.svg",
        },
    },
    "Spolek AI": {
        "prefix": "spolek_ai", "folder": "Zdroje grafika SpolekAI", "manifest": "brand/spolek-ai/manifest.json",
        "preferred": {
            "logo_primary": "logo-spolek-bila.png", "logo_symbol": "", "person_reference_1": "", "person_reference_2": "",
            "design_reference_1": "novy navrh oranz.png", "design_reference_2": "video stack.mp4",
        },
    },
}


def build_asset_maps(root: Path) -> dict:
    maps = {}
    for project, config in ASSET_CONFIG.items():
        folder = root / config["folder"]
        existing = {path.name.casefold(): path for path in folder.rglob("*") if path.is_file()} if folder.exists() else {}
        prefix = config["prefix"]
        asset_map = {f"{prefix}_graphics_folder": config["folder"] if folder.exists() else ""}
        for role, preferred_name in config["preferred"].items():
            path = existing.get(preferred_name.casefold()) if preferred_name else None
            asset_map[f"{prefix}_{role}"] = path.relative_to(root).as_posix() if path else ""
        manifest = root / config["manifest"]
        asset_map[f"{prefix}_brand_manifest_file"] = config["manifest"] if manifest.exists() else ""
        found_files = sorted(path.relative_to(root).as_posix() for path in existing.values())
        missing = [field for field, value in asset_map.items() if not value]
        maps[project] = {"project": project, "assets": asset_map, "found_files": found_files, "missing_fields": missing}
    map_path = root / "data" / "project-assets.json"
    map_path.write_text(json.dumps(maps, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return maps


def normalize_project(value: str):
    key = value.strip().strip('"').lower()
    if "radar" in key:
        return PROJECTS["agenda24"]
    if key not in PROJECTS:
        raise ValueError(f"Nepovolený projekt: {value}")
    return PROJECTS[key]


def slugify(value: str) -> str:
    value = unicodedata.normalize("NFKD", value)
    value = "".join(char for char in value if not unicodedata.combining(char))
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")[:90]


def infer_agenda24_area(text: str) -> str:
    value = text.casefold()
    if any(word in value for word in ("automat", "plugin", "agent", "aplikac")):
        return "Aplikace, pluginy a automatizace"
    if any(word in value for word in ("seo", "marketing", "viditelnost", "obsah")):
        return "Online marketing"
    if any(word in value for word in ("wordpress", "woocommerce", "web", "e-shop", "objednáv")):
        return "Weby a e-shopy"
    return "Správa webu a e-shopu"


def parse_value(value: str):
    value = value.strip()
    try:
        return json.loads(value)
    except Exception:
        return value.strip('"')


def parse_yaml(block: str) -> dict:
    data = {}
    for raw in block.splitlines():
        match = re.match(r"^([A-Za-z_][\w-]*):\s*(.*)$", raw)
        if match:
            data[match.group(1)] = parse_value(match.group(2))
    return data


def split_cards(text: str):
    daily = re.search(r"(?mi)^#\s+(?:9\.\s+Denní obsahové karty|Codex karty)\s*$", text)
    if daily:
        text = text[daily.end():]
        return [(index, match.group(1), match.group(2).strip()) for index, match in enumerate(re.finditer(r"(?ms)^---\s*\n(.*?)\n---\s*\n(.*?)(?=^---\s*\n|\Z)", text), 1)]
    parts = re.split(r"(?m)^## KARTA\s+(\d+)\s*$", text)
    result = []
    for offset in range(1, len(parts), 2):
        match = re.match(r"(?s)^\s*---\s*\n(.*?)\n---\s*\n(.*)$", parts[offset + 1])
        if match:
            result.append((int(parts[offset]), match.group(1), re.sub(r"(?s)\n---\s*$", "", match.group(2)).strip()))
    return result


def section(body: str, heading: str) -> str:
    match = re.search(rf"(?ms)^##\s+{re.escape(heading)}\s*\n(.+?)(?=^##\s+|\Z)", body)
    return " ".join(match.group(1).strip().split()) if match else ""


def yaml_dump(metadata: dict) -> str:
    lines = []
    for key, value in metadata.items():
        if isinstance(value, list):
            lines.append(f"{key}: {json.dumps(value, ensure_ascii=False)}")
        else:
            lines.append(f'{key}: {json.dumps(value, ensure_ascii=False) if isinstance(value, str) else value}')
    return "\n".join(lines)


def main(source: Path):
    text = source.read_text(encoding="utf-8-sig")
    chunks = split_cards(text)
    if not chunks:
        raise ValueError("V souboru nebyly nalezeny žádné obsahové karty")

    index_path = ROOT / "data" / "content-index.json"
    cards = json.loads(index_path.read_text(encoding="utf-8")) if index_path.exists() else []
    existing = {(card["title"].casefold(), card["date"], card["project"]): card for card in cards}
    used_ids = {card["id"] for card in cards}
    imported = []
    asset_maps = build_asset_maps(ROOT)

    for number, yaml_block, body in chunks:
        metadata = parse_yaml(yaml_block)
        title = str(metadata.get("title") or section(body, "Blogový titulek") or f"Karta {number}")
        date = str(metadata.get("date") or metadata.get("datum") or "")
        project, folder, brand, project_url, accent = normalize_project(str(metadata.get("project") or metadata.get("projekt") or ""))
        key = (title.casefold(), date, project)
        card_id = existing.get(key, {}).get("id")
        if not card_id:
            next_number = number
            card_id = f"{date}-{next_number:03d}"
            while card_id in used_ids:
                next_number += 1
                card_id = f"{date}-{next_number:03d}"
        used_ids.add(card_id)
        filename = f"{card_id}-{slugify(title)}.md"
        metadata.update({"id": card_id, "project": project, "project_url": project_url, "brand": brand})
        metadata.update(asset_maps[project]["assets"])
        metadata.setdefault("projects", [project])
        metadata.setdefault("topic_type", "")
        metadata.setdefault("usage_type", "")
        metadata.setdefault("priority", "střední")
        metadata.setdefault("status", "koncept")
        metadata.setdefault("blog_potential", "ano")
        metadata.setdefault("social_potential", "ano")
        metadata.setdefault("recommended_output", "")
        metadata.setdefault("tags", [])
        metadata.setdefault("source_summary", section(body, "Shrnutí") or title)
        if project == "Agenda24":
            metadata.update(AGENDA24_SOCIALS)
            metadata.setdefault("agenda24_area", infer_agenda24_area(f"{title} {body}"))
        elif project == "Firemní lektor":
            metadata.setdefault("firemni_lektor_area", "Školení umělé inteligence / AI v praxi")
        elif project == "Pupeto":
            metadata.setdefault("pupeto_category", "Pojištění" if "pojištěn" in f"{title} {body}".casefold() else "Ostatní")
        elif project == "Spolek AI":
            metadata.setdefault("spolek_ai_area", "AI služby")
        for field in VALUE_FEATURE_FIELDS:
            metadata.setdefault(field, "")
        metadata["value_feature_codex_prompt"] = metadata["value_feature_codex_prompt"] or section(body, "Prompt pro Codex k funkci")
        output = ROOT / folder / filename
        output.parent.mkdir(parents=True, exist_ok=True)
        output.write_text(f"---\n{yaml_dump(metadata)}\n---\n\n{body.rstrip()}\n", encoding="utf-8")

        usage = metadata.get("usage_type", "")
        types = [item.strip() for item in usage.split(";") if item.strip()] if isinstance(usage, str) else list(usage)
        entry = {
            "id": card_id, "title": title, "project": project, "project_url": project_url, "brand": brand,
            "status": metadata.get("status", "koncept"), "types": types, "tags": metadata.get("tags", []),
            "summary": section(body, "Shrnutí") or str(metadata.get("source_summary", title)),
            "priority": metadata.get("priority", "střední"), "date": date, "accent": accent,
            "steps": existing.get(key, {}).get("steps", {"text": False, "blog": False, "graphic": False, "facebook": False, "linkedin": False, "instagram": False}),
            "file": f"../{folder}/{filename}"
        }
        entry.update({field: metadata.get(field, "") for field in VALUE_FEATURE_FIELDS})
        for field in ("agenda24_area", "firemni_lektor_area", "pupeto_category", "spolek_ai_area", *AGENDA24_SOCIALS):
            entry[field] = metadata.get(field, "")
        entry.update(asset_maps[project]["assets"])
        if key in existing:
            cards[cards.index(existing[key])] = entry
        else:
            cards.append(entry)
        existing[key] = entry
        imported.append({"title": title, "project": project, "folder": folder, "file": filename})

    cards.sort(key=lambda item: (item["date"], item["id"]), reverse=True)
    index_path.write_text(json.dumps(cards, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    inbox = ROOT / "00-inbox" / source.name
    if source.resolve() != inbox.resolve():
        shutil.copyfile(source, inbox)
    archive = ROOT / "10-archiv" / "importy"
    if archive.exists() and source.resolve() != inbox.resolve():
        shutil.copyfile(source, archive / source.name)
    print(json.dumps({"count": len(imported), "cards": imported}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise SystemExit("Použití: python data/import_cards.py cesta-k-balíčku.md")
    main(Path(sys.argv[1]))
