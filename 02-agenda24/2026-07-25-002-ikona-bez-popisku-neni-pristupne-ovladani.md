---
title: "Ikona bez popisku není přístupné ovládání"
date: "2026-07-25"
project: "Agenda24"
project_url: "https://agenda24.cz/"
projects: ["Agenda24"]
topic_type: "praktický tip"
usage_type: ["blog", "Facebook", "LinkedIn", "Instagram", "TikTok", "YouTube Shorts", "nástroj"]
priority: "vysoká"
status: "k rozpracování"
blog_potential: "vysoký"
social_potential: "vysoký"
recommended_output: "publikovatelný článek, sociální sada, 10s Gemini Flow / Omni video a návrh nástroje"
brand: "agenda24"
tags: ["praktický tip", "Weby a e-shopy", "A24 Icon Accessibility Checklist"]
source_summary: "Při přechodu na nové Icon API je potřeba rozlišit dekorativní a funkční ikony. Tlačítko tvořené pouze ikonou musí mít srozumitelný přístupný název, focus a dostatečnou aktivní plochu. Zdroj ověřen: 24. 7. 2026."
value_feature_type: "checker přístupnosti"
value_feature_name: "A24 Icon Accessibility Checklist"
value_feature_summary: "Při přechodu na nové Icon API je potřeba rozlišit dekorativní a funkční ikony. Tlačítko tvořené pouze ikonou musí mít srozumitelný přístupný název, focus a dostatečnou aktivní plochu."
value_feature_benefit: "Editor i vývojář dostanou konkrétní seznam ikon, které postrádají název, focus nebo bezpečný kontrast"
value_feature_mvp: "evidence ikon, účel dekorativní/funkční, accessible name, aria-hidden, focus, kontrast, aktivní plocha, screenshot, priorita a export"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 Icon Accessibility Checklist“ pro Agenda24. Funkce: evidence ikon, účel dekorativní/funkční, accessible name, aria-hidden, focus, kontrast, aktivní plocha, screenshot, priorita a export. Administrace kompletně česky: role, záznamy, stavy, zdroje, upozornění, exporty, retenční pravidla a audit změn. Datový model: entity, vztahy, indexy, migrace, verzování a bezpečná odinstalace; používej WordPress API, CPT, metadata a Options API, vlastní tabulky jen s odůvodněním. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace, escapování, prepared SQL, rate limiting, bezpečný upload, žádné klíče v klientu, auditní log bez citlivých dat, GDPR minimalizace, export a výmaz. Responzivita od 320 px; ovládání klávesnicí, viditelný focus, správné labely, srozumitelná validace a WCAG 2.2 AA. Kompatibilita: aktuální WordPress, PHP 7.4+, blokový i klasický editor, běžné cache pluginy, lokalizace a izolované CSS/JS. Testy: unit, integrační a E2E na desktopu i mobilu, oprávnění, CSRF, neplatné vstupy, migrace, export, odinstalace a regrese. Akceptační kritéria: Editor i vývojář dostanou konkrétní seznam ikon, které postrádají název, focus nebo bezpečný kontrast; data se neztratí při validaci, export odpovídá zobrazení, log neobsahuje citlivé hodnoty a aplikace nemění cizí nastavení. Dodej čistý instalační ZIP, českou uživatelskou i technickou dokumentaci, seznam hooků/API a postup instalace, aktualizace, zálohy a odinstalace. Používej bezpečné API a minimální cílené zásahy. Při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data nebo zablokovat administraci."
agenda24_area: "Weby a e-shopy"
---

## Shrnutí

Při přechodu na nové Icon API je potřeba rozlišit dekorativní a funkční ikony. Tlačítko tvořené pouze ikonou musí mít srozumitelný přístupný název, focus a dostatečnou aktivní plochu.

## Zdroje

- [Primární zdroj (24. 7. 2026)](https://make.wordpress.org/core/2026/07/24/registering-and-rendering-svg-icons-in-wordpress-7-1/)

## Proč je to důležité

Druhé pravidlo se týká klávesnice. Ovládací prvek musí jít vybrat tabulátorem, mít viditelný focus a fungovat přes Enter nebo mezerník. Samotné SVG bez správného tlačítka nestačí. Třetí kontrolou je velikost a kontrast. Na mobilu je důležitá dostatečná aktivní plocha a stav po stisku. Barva nesmí být jediným nositelem informace.

## Doporučení

Praktický audit projde všechny šablony a vlastní pluginy, přiřadí ikonám účel a u každého problému uloží místo, závažnost a návrh opravy.

## SEO titulek

Ikona bez popisku není přístupné ovládání | Agenda24

## Meta popis

Při přechodu na nové Icon API je potřeba rozlišit dekorativní a funkční ikony. Tlačítko tvořené pouze ikonou musí mít srozumitelný přístupný název, focus a

## Perex

Při přechodu na nové Icon API je potřeba rozlišit dekorativní a funkční ikony. Tlačítko tvořené pouze ikonou musí mít srozumitelný přístupný název, focus a dostatečnou aktivní plochu.

## Blogový titulek

Ikona bez popisku není přístupné ovládání

## Osnova blogu

1. Co se změnilo
2. Co z toho plyne
3. Praktický postup
4. Jak výsledek ověřit

## Blogový draft

# Ikona bez popisku není přístupné ovládání

## Co se změnilo

Ikona šetří místo, ale sama o sobě nemusí sdělit význam. Symbol koše, tužky nebo šipky může být srozumitelný zkušenému uživateli, nikoli však každému návštěvníkovi ani čtečce obrazovky.



První pravidlo je rozlišit dekoraci od ovládání. Dekorativní ikona má být skrytá před asistivní technologií. Funkční ikona musí být součástí tlačítka s jasným názvem, například „Odstranit položku“.

## Co z toho plyne

Druhé pravidlo se týká klávesnice. Ovládací prvek musí jít vybrat tabulátorem, mít viditelný focus a fungovat přes Enter nebo mezerník. Samotné SVG bez správného tlačítka nestačí.



Třetí kontrolou je velikost a kontrast. Na mobilu je důležitá dostatečná aktivní plocha a stav po stisku. Barva nesmí být jediným nositelem informace.

## Praktický postup

Praktický audit projde všechny šablony a vlastní pluginy, přiřadí ikonám účel a u každého problému uloží místo, závažnost a návrh opravy.

## Jak výsledek ověřit

Taková kontrola snižuje riziko reklamací i zbytečných regresí a současně vede k čistšímu kódu, který se lépe udržuje.

**CTA:** Ověřte první krok a vyzkoušejte navržený nástroj.

## Blog pro Enfold

<h1>Ikona bez popisku není přístupné ovládání</h1>
<p class="perex">Při přechodu na nové Icon API je potřeba rozlišit dekorativní a funkční ikony. Tlačítko tvořené pouze ikonou musí mít srozumitelný přístupný název, focus a dostatečnou aktivní plochu.</p>
<h2>Co se změnilo</h2>
<p>Ikona šetří místo, ale sama o sobě nemusí sdělit význam. Symbol koše, tužky nebo šipky může být srozumitelný zkušenému uživateli, nikoli však každému návštěvníkovi ani čtečce obrazovky.</p>
<p>První pravidlo je rozlišit dekoraci od ovládání. Dekorativní ikona má být skrytá před asistivní technologií. Funkční ikona musí být součástí tlačítka s jasným názvem, například „Odstranit položku“.</p>
<h2>Co z toho plyne</h2>
<p>Druhé pravidlo se týká klávesnice. Ovládací prvek musí jít vybrat tabulátorem, mít viditelný focus a fungovat přes Enter nebo mezerník. Samotné SVG bez správného tlačítka nestačí.</p>
<p>Třetí kontrolou je velikost a kontrast. Na mobilu je důležitá dostatečná aktivní plocha a stav po stisku. Barva nesmí být jediným nositelem informace.</p>
<h2>Praktický postup</h2>
<p>Praktický audit projde všechny šablony a vlastní pluginy, přiřadí ikonám účel a u každého problému uloží místo, závažnost a návrh opravy.</p>
<h2>Jak výsledek ověřit</h2>
<p>Taková kontrola snižuje riziko reklamací i zbytečných regresí a současně vede k čistšímu kódu, který se lépe udržuje.</p>
<p><strong>CTA:</strong> Prohlédněte si nástroj a ověřte první krok.</p>

## Facebook text

Ikona bez popisku není přístupné ovládání

Při přechodu na nové Icon API je potřeba rozlišit dekorativní a funkční ikony. Tlačítko tvořené pouze ikonou musí mít srozumitelný přístupný název, focus a dostatečnou aktivní plochu.

Praktický výstup: A24 Icon Accessibility Checklist. Podívejte se, jak převést novinku do konkrétního kroku.

## LinkedIn text

Ikona bez popisku není přístupné ovládání

Při přechodu na nové Icon API je potřeba rozlišit dekorativní a funkční ikony. Tlačítko tvořené pouze ikonou musí mít srozumitelný přístupný název, focus a dostatečnou aktivní plochu.

Nejdůležitější není samotná novinka, ale opakovatelný postup: evidence ikon, účel dekorativní/funkční, accessible name, aria-hidden, focus, kontrast, aktivní plocha, screenshot, priorita a export.

## Instagram caption

Ikona bez popisku není přístupné ovládání

Při přechodu na nové Icon API je potřeba rozlišit dekorativní a funkční ikony. Tlačítko tvořené pouze ikonou musí mít srozumitelný přístupný název, focus a dostatečnou aktivní plochu.

Nástroj: A24 Icon Accessibility Checklist

#agenda24 #digitalnidovednosti #praktickytip

## Čistý publikační text pro Facebook

Ikona bez popisku není přístupné ovládání

Při přechodu na nové Icon API je potřeba rozlišit dekorativní a funkční ikony. Tlačítko tvořené pouze ikonou musí mít srozumitelný přístupný název, focus a dostatečnou aktivní plochu.

Praktický výstup: A24 Icon Accessibility Checklist. Podívejte se, jak převést novinku do konkrétního kroku.

## Čistý publikační text pro LinkedIn

Ikona bez popisku není přístupné ovládání

Při přechodu na nové Icon API je potřeba rozlišit dekorativní a funkční ikony. Tlačítko tvořené pouze ikonou musí mít srozumitelný přístupný název, focus a dostatečnou aktivní plochu.

Nejdůležitější není samotná novinka, ale opakovatelný postup: evidence ikon, účel dekorativní/funkční, accessible name, aria-hidden, focus, kontrast, aktivní plocha, screenshot, priorita a export.

## Čistý publikační text pro Instagram

Ikona bez popisku není přístupné ovládání

Při přechodu na nové Icon API je potřeba rozlišit dekorativní a funkční ikony. Tlačítko tvořené pouze ikonou musí mít srozumitelný přístupný název, focus a dostatečnou aktivní plochu.

Nástroj: A24 Icon Accessibility Checklist

#agenda24 #digitalnidovednosti #praktickytip

## TikTok balíček

**Hook:** Jedna změna. Jeden jasný test. Žádné dohady.

**Délka:** přesně 10 sekund.

**Scénář po sekundách:** 0–2 s titulek; 2–7 s mluvená věta; 7–10 s obrazová pointa a CTA bez řeči.

**Mluvený text:** „Jedna změna. Jeden jasný test. Žádné dohady.“

**Text na obrazovku:** „Ikona bez popisku není přístupné ovládání“ / „A24 Icon Accessibility Checklist“

**Storyboard:** detail problému → krátké vysvětlení → výsledek a CTA.

**CTA:** Otevřete detail a ověřte první krok.

**Hashtagy:** #agenda24 #DigitalniNastroje

**Cover:** Ikona bez popisku není přístupné ovládání

## YouTube Shorts popisek

Při přechodu na nové Icon API je potřeba rozlišit dekorativní a funkční ikony. Tlačítko tvořené pouze ikonou musí mít srozumitelný přístupný název, focus a dostatečnou aktivní plochu. 

## Text do grafiky

Ikona bez popisku není přístupné ovládání

## CTA

Vyzkoušejte konkrétní kontrolu.

## Alt text

Přehled nástroje A24 Icon Accessibility Checklist ukazuje konkrétní kontrolní kroky k tématu Ikona bez popisku není přístupné ovládání.

## Prompt na obrázek

Prémiový tmavý vizuál Agenda24, #030712, #080B16, #EC0044, originální symbol 24 a Martin podle uložených referencí; bez žluté, zlaté, oranžové, robotů a levného cyberpunku. Hlavní motiv: Ikona bez popisku není přístupné ovládání. Textová plocha pouze pro krátký nadpis, vysoká čitelnost, formát 4:5.

## Reference k obrázku

Použít výhradně brand manifest projektu Agenda24 a v něm uvedené referenční soubory.

## Prompt na video

Gemini Flow / Omni, přesně 10 sekund, čeština. 0–2 s: výrazný detail a text „Ikona bez popisku není přístupné ovládání“. 2–7 s: Martin klidně říká „Jedna změna. Jeden jasný test. Žádné dohady.“ 7–10 s: beze slov, obraz A24 Icon Accessibility Checklist a CTA. Žádná řeč po 7. sekundě, žádné useknutí.

## Reference k videu

Gemini Flow / Omni; hlavní výstup přesně 10 s. Výsledné video 30 sekund složené ze tří navazujících klipů Gemini Flow / Omni po 10 sekundách. Část 1: problém a hook, řeč jen 0–7 s. Část 2: konkrétní postup evidence ikon, účel dekorativní/funkční, accessible name, aria-hidden, focus, kontrast, aktivní plocha, screenshot, priorita a export, řeč jen 0–7 s. Část 3: výsledek Editor i vývojář dostanou konkrétní seznam ikon, které postrádají název, focus nebo bezpečný kontrast a CTA, řeč jen 0–7 s. Zachovat stejné postavy, prostředí, barvy a směr světla; poslední tři sekundy každé části bez řeči.

## Návrh funkce / aplikace / pluginu

**A24 Icon Accessibility Checklist** — Při přechodu na nové Icon API je potřeba rozlišit dekorativní a funkční ikony. Tlačítko tvořené pouze ikonou musí mít srozumitelný přístupný název, focus a dostatečnou aktivní plochu. Přínos: Editor i vývojář dostanou konkrétní seznam ikon, které postrádají název, focus nebo bezpečný kontrast.

## MVP verze

evidence ikon, účel dekorativní/funkční, accessible name, aria-hidden, focus, kontrast, aktivní plocha, screenshot, priorita a export.

## Detailní Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 Icon Accessibility Checklist“ pro Agenda24. Funkce: evidence ikon, účel dekorativní/funkční, accessible name, aria-hidden, focus, kontrast, aktivní plocha, screenshot, priorita a export. Administrace kompletně česky: role, záznamy, stavy, zdroje, upozornění, exporty, retenční pravidla a audit změn. Datový model: entity, vztahy, indexy, migrace, verzování a bezpečná odinstalace; používej WordPress API, CPT, metadata a Options API, vlastní tabulky jen s odůvodněním. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace, escapování, prepared SQL, rate limiting, bezpečný upload, žádné klíče v klientu, auditní log bez citlivých dat, GDPR minimalizace, export a výmaz. Responzivita od 320 px; ovládání klávesnicí, viditelný focus, správné labely, srozumitelná validace a WCAG 2.2 AA. Kompatibilita: aktuální WordPress, PHP 7.4+, blokový i klasický editor, běžné cache pluginy, lokalizace a izolované CSS/JS. Testy: unit, integrační a E2E na desktopu i mobilu, oprávnění, CSRF, neplatné vstupy, migrace, export, odinstalace a regrese. Akceptační kritéria: Editor i vývojář dostanou konkrétní seznam ikon, které postrádají název, focus nebo bezpečný kontrast; data se neztratí při validaci, export odpovídá zobrazení, log neobsahuje citlivé hodnoty a aplikace nemění cizí nastavení. Dodej čistý instalační ZIP, českou uživatelskou i technickou dokumentaci, seznam hooků/API a postup instalace, aktualizace, zálohy a odinstalace. Používej bezpečné API a minimální cílené zásahy. Při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data nebo zablokovat administraci.
