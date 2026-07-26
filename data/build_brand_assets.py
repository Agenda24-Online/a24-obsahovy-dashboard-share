from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BRAND_ROOT = ROOT / "brand" / "agenda24"
OUTPUT = ROOT / "dashboard" / "brand-assets.json"
PREFIXES = {
    "backgrounds": "BACKGROUND",
    "examples": "EXAMPLE",
    "logos": "LOGO",
    "martin": "MARTIN",
}
IGNORED_NAMES = {".gitkeep", "thumbs.db", ".ds_store"}
IGNORED_SUFFIXES = {".zip", ".md", ".txt", ".json"}

assets: list[dict[str, str]] = []
if BRAND_ROOT.exists():
    for file in sorted(BRAND_ROOT.rglob("*"), key=lambda item: str(item).lower()):
        if not file.is_file():
            continue
        if file.name.lower() in IGNORED_NAMES or file.suffix.lower() in IGNORED_SUFFIXES:
            continue
        relative_to_brand = file.relative_to(BRAND_ROOT)
        first_folder = relative_to_brand.parts[0].lower() if len(relative_to_brand.parts) > 1 else "examples"
        prefix = PREFIXES.get(first_folder, "EXAMPLE")
        relative = file.relative_to(ROOT).as_posix()
        assets.append({
            "group": first_folder,
            "prefix": prefix,
            "url": f"../{relative}",
            "name": file.name,
        })

OUTPUT.write_text(json.dumps(assets, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"A24 brand assets: {len(assets)}")
