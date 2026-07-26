---
title: "A24 Compatibility Sentinel: hlídač změn komponent před aktualizací WordPressu"
date: 2026-07-24
project: "Agenda24"
project_url: "https://agenda24.cz/"
projects: ["Agenda24"]
topic_type: "tip na aplikaci"
usage_type: "obsahová a publikační karta"
priority: "vysoká"
status: "k rozpracování"
blog_potential: "vysoký"
social_potential: "vysoký"
recommended_output: "článek, sociální série a praktický nástroj"
brand: "agenda24"
tags: ["tip na aplikaci", "Aplikace, pluginy a automatizace", "A24 Compatibility Sentinel"]
source_summary: "WordPress 24. července oznámil, že React 19 nebude součástí 7.1 a zůstane experimentem v Gutenbergu; kompatibilita se proto musí řídit skutečnou cílovou verzí. Zdroj: React 19: punted beyond WordPress 7.1, experiment in Gutenberg, 24. 7. 2026."
value_feature_type: "WordPress plugin pro kompatibilitu"
value_feature_name: "A24 Compatibility Sentinel"
value_feature_summary: "Plugin načte seznam používaných komponent ve vlastních A24 prvcích, porovná je s pravidly cílové verze a před aktualizací připraví konkrétní testovací plán."
value_feature_benefit: "Agenda24 získá opakovatelnou kontrolu vlastních Enfold a WordPress prvků místo ručního hledání v každém pluginu."
value_feature_mvp: "Sken vlastních pluginů, katalog komponent a props, pravidla verzí, nález soubor/řádek, závažnost, výjimky, testovací plán, historie a PDF report."
value_feature_codex_prompt: "Vytvoř produkční WordPress/WooCommerce plugin „A24 Compatibility Sentinel“ pro Agenda24. Funkce: Sken vlastních pluginů, katalog komponent a props, pravidla verzí, nález soubor/řádek, závažnost, výjimky, testovací plán, historie a PDF report. Administrace kompletně česky: role, záznamy, stavy, zdroje, upozornění, exporty a retenční pravidla. Datový model: entity, vztahy, indexy, migrace, verzování a bezpečná odinstalace; WordPress API, CPT, metadata a Options API, vlastní tabulky jen s odůvodněním. Bezpečnost: capability checks, nonce/CSRF, sanitizace, escapování, prepared SQL, rate limiting, bezpečný upload, žádné klíče v klientu, auditní log bez citlivých dat, GDPR minimalizace, export a výmaz. Rozhraní od 320 px, klávesnice, viditelný focus, správné labely, srozumitelná validace, WCAG 2.2 AA. Kompatibilita: aktuální WordPress, PHP 7.4+, blokový i klasický editor, běžné cache pluginy, lokalizace a izolované CSS/JS. Testy: unit, integrační a E2E pro desktop i mobil, oprávnění, CSRF, neplatné vstupy, migrace, export, odinstalace a regrese. Akceptační kritéria: Agenda24 získá opakovatelnou kontrolu vlastních Enfold a WordPress prvků místo ručního hledání v každém pluginu. Data se neztratí při validaci, export odpovídá zobrazení, log neobsahuje citlivé hodnoty a řešení nemění cizí nastavení. Dodej čistý instalační ZIP, českou uživatelskou a technickou dokumentaci, seznam hooků/API a postup instalace, aktualizace, zálohy a odinstalace. Používej bezpečné API a minimální cílené zásahy. Při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data nebo zablokovat administraci."
agenda24_area: "Aplikace, pluginy a automatizace"
---

## Shrnutí

Plugin načte seznam používaných komponent ve vlastních A24 prvcích, porovná je s pravidly cílové verze a před aktualizací připraví konkrétní testovací plán.

## Zdroje

- [React 19: punted beyond WordPress 7.1, experiment in Gutenberg](https://make.wordpress.org/core/2026/07/24/react-19-punted-beyond-wordpress-7-1-experiment-in-gutenberg/) — 24. 7. 2026. WordPress 24. července oznámil, že React 19 nebude součástí 7.1 a zůstane experimentem v Gutenbergu; kompatibilita se proto musí řídit skutečnou cílovou verzí.
- Zdroj zkontrolován 24. 7. 2026; před použitím ověřte aktuální znění.

## Proč je to důležité

Plugin nemá předčasně předpokládat knihovnu, která v cílovém WordPressu nakonec nebude.

## Doporučení

1. Zvolte cílovou verzi WordPressu.
2. Naskenujte vlastní pluginy bez změny souborů.
3. Rozdělte nálezy podle závažnosti.
4. Vytvořte staging testy.
5. Schválené výjimky uložte s odůvodněním.

## SEO titulek

A24 Compatibility Sentinel: hlídač změn komponent před aktualizací WordPressu | Agenda24

## Meta popis

Plugin načte seznam používaných komponent ve vlastních A24 prvcích, porovná je s pravidly cílové verze a před aktualizací připraví konkrétní testovací plán

## Perex

Plugin načte seznam používaných komponent ve vlastních A24 prvcích, porovná je s pravidly cílové verze a před aktualizací připraví konkrétní testovací plán. Následuje konkrétní postup a praktický nástroj.

## Blogový titulek

A24 Compatibility Sentinel: hlídač změn komponent před aktualizací WordPressu

## Osnova blogu

1. Ověřená změna a zdroj
2. Praktický dopad
3. Nejčastější chyba
4. Postup krok za krokem
5. Nástroj A24 Compatibility Sentinel
6. Ověření výsledku

## Kompletní Blogový draft

A24 Compatibility Sentinel: hlídač změn komponent před aktualizací WordPressu

Plugin načte seznam používaných komponent ve vlastních A24 prvcích, porovná je s pravidly cílové verze a před aktualizací připraví konkrétní testovací plán.

Co se změnilo a co je ověřeno

WordPress 24. července oznámil, že React 19 nebude součástí 7.1 a zůstane experimentem v Gutenbergu; kompatibilita se proto musí řídit skutečnou cílovou verzí.

Ověřenou informaci je potřeba převést do konkrétního dopadu na současný postup. Teprve pak lze rozhodnout, zda stačí kontrola, úprava nebo nový nástroj.

Proč je téma důležité

Plugin nemá předčasně předpokládat knihovnu, která v cílovém WordPressu nakonec nebude.

Nejčastější chybou je zavést novinku bez vlastníka, testu a podmínky dokončení. Takový krok se později obtížně kontroluje a chyba se opakuje.

Doporučený postup

Zvolte cílovou verzi WordPressu. Naskenujte vlastní pluginy bez změny souborů. Rozdělte nálezy podle závažnosti. Vytvořte staging testy. Schválené výjimky uložte s odůvodněním.

Každý krok musí mít odpovědnou roli, datum a pozorovatelný výsledek. U nevratných akcí je nutné výslovné schválení člověkem.

Praktický nástroj

A24 Compatibility Sentinel — WordPress plugin pro kompatibilitu. Sken vlastních pluginů, katalog komponent a props, pravidla verzí, nález soubor/řádek, závažnost, výjimky, testovací plán, historie a PDF report.

Agenda24 získá opakovatelnou kontrolu vlastních Enfold a WordPress prvků místo ručního hledání v každém pluginu.

Jak poznat, že řešení funguje

Uživatel dohledá zdroj rozhodnutí, provede postup bez obcházení pravidel a při chybě se bezpečně vrátí. Nalezená chyba se promění v nový regresní test.

Co udělat dnes

Vyberte jeden bezpečný vzorek, proveďte první test a zapište skutečný výsledek i další odpovědnost.

CTA: Otevřete pracovní checklist a proveďte první kontrolu.

## Čistý Blog pro Enfold

<h1>A24 Compatibility Sentinel: hlídač změn komponent před aktualizací WordPressu</h1>
<p class="perex">Plugin načte seznam používaných komponent ve vlastních A24 prvcích, porovná je s pravidly cílové verze a před aktualizací připraví konkrétní testovací plán.</p>
<h2>Co se změnilo a co je ověřeno</h2>
<p>WordPress 24. července oznámil, že React 19 nebude součástí 7.1 a zůstane experimentem v Gutenbergu; kompatibilita se proto musí řídit skutečnou cílovou verzí.</p>
<p>Ověřenou informaci je potřeba převést do konkrétního dopadu na současný postup. Teprve pak lze rozhodnout, zda stačí kontrola, úprava nebo nový nástroj.</p>
<h2>Proč je téma důležité</h2>
<p>Plugin nemá předčasně předpokládat knihovnu, která v cílovém WordPressu nakonec nebude.</p>
<p>Nejčastější chybou je zavést novinku bez vlastníka, testu a podmínky dokončení. Takový krok se později obtížně kontroluje a chyba se opakuje.</p>
<h2>Doporučený postup</h2>
<p>Zvolte cílovou verzi WordPressu. Naskenujte vlastní pluginy bez změny souborů. Rozdělte nálezy podle závažnosti. Vytvořte staging testy. Schválené výjimky uložte s odůvodněním.</p>
<p>Každý krok musí mít odpovědnou roli, datum a pozorovatelný výsledek. U nevratných akcí je nutné výslovné schválení člověkem.</p>
<h2>Praktický nástroj</h2>
<p><strong>A24 Compatibility Sentinel</strong> — WordPress plugin pro kompatibilitu. Sken vlastních pluginů, katalog komponent a props, pravidla verzí, nález soubor/řádek, závažnost, výjimky, testovací plán, historie a PDF report.</p>
<p>Agenda24 získá opakovatelnou kontrolu vlastních Enfold a WordPress prvků místo ručního hledání v každém pluginu.</p>
<h2>Jak poznat, že řešení funguje</h2>
<p>Uživatel dohledá zdroj rozhodnutí, provede postup bez obcházení pravidel a při chybě se bezpečně vrátí. Nalezená chyba se promění v nový regresní test.</p>
<h2>Co udělat dnes</h2>
<p>Vyberte jeden bezpečný vzorek, proveďte první test a zapište skutečný výsledek i další odpovědnost.</p>
<p><strong>CTA:</strong> Otevřete pracovní checklist a proveďte první kontrolu.</p>

## Facebook text

A24 Compatibility Sentinel: hlídač změn komponent před aktualizací WordPressu

Plugin načte seznam používaných komponent ve vlastních A24 prvcích, porovná je s pravidly cílové verze a před aktualizací připraví konkrétní testovací plán.

Začněte jedním ověřitelným krokem a výsledek zaznamenejte.

#Agenda24 #WordPress #SprávaWebu

## LinkedIn text

A24 Compatibility Sentinel: hlídač změn komponent před aktualizací WordPressu

Plugin načte seznam používaných komponent ve vlastních A24 prvcích, porovná je s pravidly cílové verze a před aktualizací připraví konkrétní testovací plán.

Začněte jedním ověřitelným krokem a výsledek zaznamenejte.

Praktická hodnota: Agenda24 získá opakovatelnou kontrolu vlastních Enfold a WordPress prvků místo ručního hledání v každém pluginu.

#Agenda24 #WordPress #SprávaWebu

## Instagram caption

A24 Compatibility Sentinel: hlídač změn komponent před aktualizací WordPressu

Plugin načte seznam používaných komponent ve vlastních A24 prvcích, porovná je s pravidly cílové verze a před aktualizací připraví konkrétní testovací plán.

Začněte jedním ověřitelným krokem a výsledek zaznamenejte.

✅ Zvolte cílovou verzi WordPressu.
✅ Naskenujte vlastní pluginy bez změny souborů.
✅ Rozdělte nálezy podle závažnosti.

#Agenda24 #WordPress #SprávaWebu

## Čistý publikační text pro Facebook

A24 Compatibility Sentinel: hlídač změn komponent před aktualizací WordPressu

Plugin načte seznam používaných komponent ve vlastních A24 prvcích, porovná je s pravidly cílové verze a před aktualizací připraví konkrétní testovací plán.

Začněte jedním ověřitelným krokem a výsledek zaznamenejte.

#Agenda24 #WordPress #SprávaWebu

## Čistý publikační text pro LinkedIn

A24 Compatibility Sentinel: hlídač změn komponent před aktualizací WordPressu

Plugin načte seznam používaných komponent ve vlastních A24 prvcích, porovná je s pravidly cílové verze a před aktualizací připraví konkrétní testovací plán.

Začněte jedním ověřitelným krokem a výsledek zaznamenejte.

Nástroj: A24 Compatibility Sentinel. Agenda24 získá opakovatelnou kontrolu vlastních Enfold a WordPress prvků místo ručního hledání v každém pluginu.

#Agenda24 #WordPress #SprávaWebu

## Čistý publikační text pro Instagram

A24 Compatibility Sentinel: hlídač změn komponent před aktualizací WordPressu

Plugin načte seznam používaných komponent ve vlastních A24 prvcích, porovná je s pravidly cílové verze a před aktualizací připraví konkrétní testovací plán.

Začněte jedním ověřitelným krokem a výsledek zaznamenejte.

1️⃣ Zvolte cílovou verzi WordPressu.
2️⃣ Naskenujte vlastní pluginy bez změny souborů.
3️⃣ Rozdělte nálezy podle závažnosti.

#Agenda24 #WordPress #SprávaWebu

## TikTok balíček

**Hook:** A24 Compatibility Sentinel: hlídač změn komponent před aktualizací WordPressu

**Scénář po sekundách:** 0–2 s hook; 2–7 s krátká česká věta; 7–10 s tichá obrazová pointa a CTA.

**Mluvený text:** Plugin načte seznam používaných komponent ve vlastních A24 prvcích, porovná je s pravidly cílové verze a před aktualizac.

**Text na obrazovku:** A24 Compatibility Sentinel

**Storyboard:** Detail problému → jeden ověřený krok → potvrzený stav.

**CTA:** Otevřete celý postup.

**Hashtagy:** #Agenda24 #WordPress #SprávaWebu

**Cover:** A24 Compatibility Sentinel: hlídač změn komponent před aktualizací WordPressu

**Video prompt:** Gemini Flow / Omni, přesně 10 sekund, vertikální 9:16. 0–2 s výrazný vizuální hook s textem „A24 Compatibility Sentinel“. 2–7 s jeden český hlas řekne: „Plugin načte seznam používaných komponent ve vlastních A24 prvcích, porovná je s pravidly cílové verze a před .“ 7–10 s bez řeči: jasný stav před/po a CTA „Zjistit postup“. Žádná useknutá věta.

**Volitelný delší scénář:** Volitelný rozvinutý scénář pro Gemini Flow / Omni, jedno výsledné video složené ze 3 navazujících bloků po 10 sekundách. Blok 1: otázka a problém, řeč končí do 7 s. Blok 2: „Zvolte cílovou verzi WordPressu. Naskenujte vlastní pluginy bez změny souborů.“, řeč končí do 7 s. Blok 3: nástroj A24 Compatibility Sentinel, krátká věta „Agenda24 získá opakovatelnou kontrolu vlastních Enfold a WordPress prvků místo ručního hledání v kaž“, řeč končí do 7 s. Poslední 3 sekundy každého bloku jsou tiché a nesou obrazovou pointu.

## YouTube Shorts popisek

Plugin načte seznam používaných komponent ve vlastních A24 prvcích, porovná je s pravidly cílové verze a před aktualizací připraví konkrétní testovací plán. Podívejte se na celý postup. #Agenda24 #WordPress #SprávaWebu

## Text do grafiky

A24 Compatibility Sentinel: hlídač změn komponent před aktualizací WordPressu

A24 Compatibility Sentinel

## CTA

Vyzkoušejte první krok.

## Alt text

Přehled A24 Compatibility Sentinel s kroky, stavem a výsledkem.

## Prompt na obrázek

Prémiový vizuál Agenda24, pozadí #030712 a #080B16, akcent #EC0044, originální symbol 24, Martin podle schválených referencí, čistá kompozice, bez žluté, zlaté, oranžové, robotů a levného cyberpunku.

## Reference k obrázku

Použít aktuální manifest značky agenda24; nemíchat prvky jiných projektů.

## Prompt na video

Gemini Flow / Omni, přesně 10 sekund, vertikální 9:16. 0–2 s výrazný vizuální hook s textem „A24 Compatibility Sentinel“. 2–7 s jeden český hlas řekne: „Plugin načte seznam používaných komponent ve vlastních A24 prvcích, porovná je s pravidly cílové verze a před .“ 7–10 s bez řeči: jasný stav před/po a CTA „Zjistit postup“. Žádná useknutá věta.

### Rozvinutý scénář

Volitelný rozvinutý scénář pro Gemini Flow / Omni, jedno výsledné video složené ze 3 navazujících bloků po 10 sekundách. Blok 1: otázka a problém, řeč končí do 7 s. Blok 2: „Zvolte cílovou verzi WordPressu. Naskenujte vlastní pluginy bez změny souborů.“, řeč končí do 7 s. Blok 3: nástroj A24 Compatibility Sentinel, krátká věta „Agenda24 získá opakovatelnou kontrolu vlastních Enfold a WordPress prvků místo ručního hledání v kaž“, řeč končí do 7 s. Poslední 3 sekundy každého bloku jsou tiché a nesou obrazovou pointu.

## Reference k videu

Gemini Flow / Omni. Hlavní výstup má přesně 10 sekund; česká řeč končí nejpozději v 7. sekundě a poslední tři sekundy jsou tiché.

## Návrh funkce / aplikace / pluginu

**A24 Compatibility Sentinel** — WordPress plugin pro kompatibilitu. Agenda24 získá opakovatelnou kontrolu vlastních Enfold a WordPress prvků místo ručního hledání v každém pluginu.

Funkce: Sken vlastních pluginů, katalog komponent a props, pravidla verzí, nález soubor/řádek, závažnost, výjimky, testovací plán, historie a PDF report.

## MVP verze

Sken vlastních pluginů, katalog komponent a props, pravidla verzí, nález soubor/řádek, závažnost, výjimky, testovací plán, historie a PDF report.

## Detailní Prompt pro Codex k funkci

Vytvoř produkční WordPress/WooCommerce plugin „A24 Compatibility Sentinel“ pro Agenda24. Funkce: Sken vlastních pluginů, katalog komponent a props, pravidla verzí, nález soubor/řádek, závažnost, výjimky, testovací plán, historie a PDF report. Administrace kompletně česky: role, záznamy, stavy, zdroje, upozornění, exporty a retenční pravidla. Datový model: entity, vztahy, indexy, migrace, verzování a bezpečná odinstalace; WordPress API, CPT, metadata a Options API, vlastní tabulky jen s odůvodněním. Bezpečnost: capability checks, nonce/CSRF, sanitizace, escapování, prepared SQL, rate limiting, bezpečný upload, žádné klíče v klientu, auditní log bez citlivých dat, GDPR minimalizace, export a výmaz. Rozhraní od 320 px, klávesnice, viditelný focus, správné labely, srozumitelná validace, WCAG 2.2 AA. Kompatibilita: aktuální WordPress, PHP 7.4+, blokový i klasický editor, běžné cache pluginy, lokalizace a izolované CSS/JS. Testy: unit, integrační a E2E pro desktop i mobil, oprávnění, CSRF, neplatné vstupy, migrace, export, odinstalace a regrese. Akceptační kritéria: Agenda24 získá opakovatelnou kontrolu vlastních Enfold a WordPress prvků místo ručního hledání v každém pluginu. Data se neztratí při validaci, export odpovídá zobrazení, log neobsahuje citlivé hodnoty a řešení nemění cizí nastavení. Dodej čistý instalační ZIP, českou uživatelskou a technickou dokumentaci, seznam hooků/API a postup instalace, aktualizace, zálohy a odinstalace. Používej bezpečné API a minimální cílené zásahy. Při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data nebo zablokovat administraci.
