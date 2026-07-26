---
title: "A24 Brand Icon Registry: správce kolekcí ikon"
date: "2026-07-25"
project: "Agenda24"
project_url: "https://agenda24.cz/"
projects: ["Agenda24"]
topic_type: "tip na aplikaci"
usage_type: ["blog", "Facebook", "LinkedIn", "Instagram", "TikTok", "YouTube Shorts", "nástroj"]
priority: "vysoká"
status: "k rozpracování"
blog_potential: "vysoký"
social_potential: "vysoký"
recommended_output: "publikovatelný článek, sociální sada, 10s Gemini Flow / Omni video a návrh nástroje"
brand: "agenda24"
tags: ["tip na aplikaci", "Aplikace, pluginy a automatizace", "A24 Brand Icon Registry"]
source_summary: "A24 Brand Icon Registry sjednotí schválené ikony pro vlastní WordPress pluginy, ohlídá názvy kolekcí, přístupnost a bezpečné serverové vykreslení přes nové API WordPressu 7.1. Zdroj ověřen: 24. 7. 2026."
value_feature_type: "WordPress plugin"
value_feature_name: "A24 Brand Icon Registry"
value_feature_summary: "A24 Brand Icon Registry sjednotí schválené ikony pro vlastní WordPress pluginy, ohlídá názvy kolekcí, přístupnost a bezpečné serverové vykreslení přes nové API WordPressu 7.1."
value_feature_benefit: "Agenda24 bude mít jednu schválenou a verzovanou knihovnu ikon pro všechny vlastní pluginy bez kopírování SVG do každého projektu"
value_feature_mvp: "správa kolekcí a ikon, validace SVG, náhled, přístupný název, verze, REST a PHP ukázka, audit použití, import/export a historie"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 Brand Icon Registry“ pro Agenda24. Funkce: správa kolekcí a ikon, validace SVG, náhled, přístupný název, verze, REST a PHP ukázka, audit použití, import/export a historie. Administrace kompletně česky: role, záznamy, stavy, zdroje, upozornění, exporty, retenční pravidla a audit změn. Datový model: entity, vztahy, indexy, migrace, verzování a bezpečná odinstalace; používej WordPress API, CPT, metadata a Options API, vlastní tabulky jen s odůvodněním. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace, escapování, prepared SQL, rate limiting, bezpečný upload, žádné klíče v klientu, auditní log bez citlivých dat, GDPR minimalizace, export a výmaz. Responzivita od 320 px; ovládání klávesnicí, viditelný focus, správné labely, srozumitelná validace a WCAG 2.2 AA. Kompatibilita: aktuální WordPress, PHP 7.4+, blokový i klasický editor, běžné cache pluginy, lokalizace a izolované CSS/JS. Testy: unit, integrační a E2E na desktopu i mobilu, oprávnění, CSRF, neplatné vstupy, migrace, export, odinstalace a regrese. Akceptační kritéria: Agenda24 bude mít jednu schválenou a verzovanou knihovnu ikon pro všechny vlastní pluginy bez kopírování SVG do každého projektu; data se neztratí při validaci, export odpovídá zobrazení, log neobsahuje citlivé hodnoty a aplikace nemění cizí nastavení. Dodej čistý instalační ZIP, českou uživatelskou i technickou dokumentaci, seznam hooků/API a postup instalace, aktualizace, zálohy a odinstalace. Používej bezpečné API a minimální cílené zásahy. Při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data nebo zablokovat administraci."
agenda24_area: "Aplikace, pluginy a automatizace"
---

## Shrnutí

A24 Brand Icon Registry sjednotí schválené ikony pro vlastní WordPress pluginy, ohlídá názvy kolekcí, přístupnost a bezpečné serverové vykreslení přes nové API WordPressu 7.1.

## Zdroje

- [Primární zdroj (24. 7. 2026)](https://make.wordpress.org/core/2026/07/24/registering-and-rendering-svg-icons-in-wordpress-7-1/)

## Proč je to důležité

Editor získá náhled i příklad použití. Vývojář dostane ukázku pro PHP, editorový JavaScript a REST. Validace odmítne nebezpečný nebo nepovolený obsah SVG. Plugin nebude automaticky přepisovat cizí rozšíření. Nabídne pouze cílené API a kontrolní report, takže zásahy zůstanou minimální a vratné.

## Doporučení

Licenční integrace Agenda24 oddělí dostupnost rozšířených funkcí od bezpečného běhu webu. Neplatná licence nikdy nesmí poškodit již uložené ikony ani správu webu.

## SEO titulek

A24 Brand Icon Registry: správce kolekcí ikon | Agenda24

## Meta popis

A24 Brand Icon Registry sjednotí schválené ikony pro vlastní WordPress pluginy, ohlídá názvy kolekcí, přístupnost a bezpečné serverové vykreslení přes nové

## Perex

A24 Brand Icon Registry sjednotí schválené ikony pro vlastní WordPress pluginy, ohlídá názvy kolekcí, přístupnost a bezpečné serverové vykreslení přes nové API WordPressu 7.1.

## Blogový titulek

A24 Brand Icon Registry: správce kolekcí ikon

## Osnova blogu

1. Co se změnilo
2. Co z toho plyne
3. Praktický postup
4. Jak výsledek ověřit

## Blogový draft

# A24 Brand Icon Registry: správce kolekcí ikon

## Co se změnilo

Vlastní pluginy často obsahují stejné SVG soubory v několika kopiích. Při změně barvy, názvu nebo přístupnosti pak vznikají rozdíly, které se těžko dohledávají.



A24 Brand Icon Registry vytvoří centrální katalog schválených symbolů. Každá ikona bude mít jednoznačný název, kolekci, verzi, účel a pravidla přístupnosti.

## Co z toho plyne

Editor získá náhled i příklad použití. Vývojář dostane ukázku pro PHP, editorový JavaScript a REST. Validace odmítne nebezpečný nebo nepovolený obsah SVG.



Plugin nebude automaticky přepisovat cizí rozšíření. Nabídne pouze cílené API a kontrolní report, takže zásahy zůstanou minimální a vratné.

## Praktický postup

Licenční integrace Agenda24 oddělí dostupnost rozšířených funkcí od bezpečného běhu webu. Neplatná licence nikdy nesmí poškodit již uložené ikony ani správu webu.

## Jak výsledek ověřit

Výsledkem je opakovatelný základ pro budoucí pluginy, méně duplicit a rychlejší kontrola před vydáním nové verze.

**CTA:** Ověřte první krok a vyzkoušejte navržený nástroj.

## Blog pro Enfold

<h1>A24 Brand Icon Registry: správce kolekcí ikon</h1>
<p class="perex">A24 Brand Icon Registry sjednotí schválené ikony pro vlastní WordPress pluginy, ohlídá názvy kolekcí, přístupnost a bezpečné serverové vykreslení přes nové API WordPressu 7.1.</p>
<h2>Co se změnilo</h2>
<p>Vlastní pluginy často obsahují stejné SVG soubory v několika kopiích. Při změně barvy, názvu nebo přístupnosti pak vznikají rozdíly, které se těžko dohledávají.</p>
<p>A24 Brand Icon Registry vytvoří centrální katalog schválených symbolů. Každá ikona bude mít jednoznačný název, kolekci, verzi, účel a pravidla přístupnosti.</p>
<h2>Co z toho plyne</h2>
<p>Editor získá náhled i příklad použití. Vývojář dostane ukázku pro PHP, editorový JavaScript a REST. Validace odmítne nebezpečný nebo nepovolený obsah SVG.</p>
<p>Plugin nebude automaticky přepisovat cizí rozšíření. Nabídne pouze cílené API a kontrolní report, takže zásahy zůstanou minimální a vratné.</p>
<h2>Praktický postup</h2>
<p>Licenční integrace Agenda24 oddělí dostupnost rozšířených funkcí od bezpečného běhu webu. Neplatná licence nikdy nesmí poškodit již uložené ikony ani správu webu.</p>
<h2>Jak výsledek ověřit</h2>
<p>Výsledkem je opakovatelný základ pro budoucí pluginy, méně duplicit a rychlejší kontrola před vydáním nové verze.</p>
<p><strong>CTA:</strong> Prohlédněte si nástroj a ověřte první krok.</p>

## Facebook text

A24 Brand Icon Registry: správce kolekcí ikon

A24 Brand Icon Registry sjednotí schválené ikony pro vlastní WordPress pluginy, ohlídá názvy kolekcí, přístupnost a bezpečné serverové vykreslení přes nové API WordPressu 7.1.

Praktický výstup: A24 Brand Icon Registry. Podívejte se, jak převést novinku do konkrétního kroku.

## LinkedIn text

A24 Brand Icon Registry: správce kolekcí ikon

A24 Brand Icon Registry sjednotí schválené ikony pro vlastní WordPress pluginy, ohlídá názvy kolekcí, přístupnost a bezpečné serverové vykreslení přes nové API WordPressu 7.1.

Nejdůležitější není samotná novinka, ale opakovatelný postup: správa kolekcí a ikon, validace SVG, náhled, přístupný název, verze, REST a PHP ukázka, audit použití, import/export a historie.

## Instagram caption

A24 Brand Icon Registry: správce kolekcí ikon

A24 Brand Icon Registry sjednotí schválené ikony pro vlastní WordPress pluginy, ohlídá názvy kolekcí, přístupnost a bezpečné serverové vykreslení přes nové API WordPressu 7.1.

Nástroj: A24 Brand Icon Registry

#agenda24 #digitalnidovednosti #praktickytip

## Čistý publikační text pro Facebook

A24 Brand Icon Registry: správce kolekcí ikon

A24 Brand Icon Registry sjednotí schválené ikony pro vlastní WordPress pluginy, ohlídá názvy kolekcí, přístupnost a bezpečné serverové vykreslení přes nové API WordPressu 7.1.

Praktický výstup: A24 Brand Icon Registry. Podívejte se, jak převést novinku do konkrétního kroku.

## Čistý publikační text pro LinkedIn

A24 Brand Icon Registry: správce kolekcí ikon

A24 Brand Icon Registry sjednotí schválené ikony pro vlastní WordPress pluginy, ohlídá názvy kolekcí, přístupnost a bezpečné serverové vykreslení přes nové API WordPressu 7.1.

Nejdůležitější není samotná novinka, ale opakovatelný postup: správa kolekcí a ikon, validace SVG, náhled, přístupný název, verze, REST a PHP ukázka, audit použití, import/export a historie.

## Čistý publikační text pro Instagram

A24 Brand Icon Registry: správce kolekcí ikon

A24 Brand Icon Registry sjednotí schválené ikony pro vlastní WordPress pluginy, ohlídá názvy kolekcí, přístupnost a bezpečné serverové vykreslení přes nové API WordPressu 7.1.

Nástroj: A24 Brand Icon Registry

#agenda24 #digitalnidovednosti #praktickytip

## TikTok balíček

**Hook:** Jedna změna. Jeden jasný test. Žádné dohady.

**Délka:** přesně 10 sekund.

**Scénář po sekundách:** 0–2 s titulek; 2–7 s mluvená věta; 7–10 s obrazová pointa a CTA bez řeči.

**Mluvený text:** „Jedna změna. Jeden jasný test. Žádné dohady.“

**Text na obrazovku:** „A24 Brand Icon Registry: správce kolekcí ikon“ / „A24 Brand Icon Registry“

**Storyboard:** detail problému → krátké vysvětlení → výsledek a CTA.

**CTA:** Otevřete detail a ověřte první krok.

**Hashtagy:** #agenda24 #DigitalniNastroje

**Cover:** A24 Brand Icon Registry: správce kolekcí ikon

## YouTube Shorts popisek

A24 Brand Icon Registry sjednotí schválené ikony pro vlastní WordPress pluginy, ohlídá názvy kolekcí, přístupnost a bezpečné serverové vykreslení přes nové API WordPressu 7.1. 

## Text do grafiky

A24 Brand Icon Registry: správce kolekcí ikon

## CTA

Vyzkoušejte konkrétní kontrolu.

## Alt text

Přehled nástroje A24 Brand Icon Registry ukazuje konkrétní kontrolní kroky k tématu A24 Brand Icon Registry: správce kolekcí ikon.

## Prompt na obrázek

Prémiový tmavý vizuál Agenda24, #030712, #080B16, #EC0044, originální symbol 24 a Martin podle uložených referencí; bez žluté, zlaté, oranžové, robotů a levného cyberpunku. Hlavní motiv: A24 Brand Icon Registry: správce kolekcí ikon. Textová plocha pouze pro krátký nadpis, vysoká čitelnost, formát 4:5.

## Reference k obrázku

Použít výhradně brand manifest projektu Agenda24 a v něm uvedené referenční soubory.

## Prompt na video

Gemini Flow / Omni, přesně 10 sekund, čeština. 0–2 s: výrazný detail a text „A24 Brand Icon Registry: správce kolekcí ikon“. 2–7 s: Martin klidně říká „Jedna změna. Jeden jasný test. Žádné dohady.“ 7–10 s: beze slov, obraz A24 Brand Icon Registry a CTA. Žádná řeč po 7. sekundě, žádné useknutí.

## Reference k videu

Gemini Flow / Omni; hlavní výstup přesně 10 s. Výsledné video 30 sekund složené ze tří navazujících klipů Gemini Flow / Omni po 10 sekundách. Část 1: problém a hook, řeč jen 0–7 s. Část 2: konkrétní postup správa kolekcí a ikon, validace SVG, náhled, přístupný název, verze, REST a PHP ukázka, audit použití, import/export a historie, řeč jen 0–7 s. Část 3: výsledek Agenda24 bude mít jednu schválenou a verzovanou knihovnu ikon pro všechny vlastní pluginy bez kopírování SVG do každého projektu a CTA, řeč jen 0–7 s. Zachovat stejné postavy, prostředí, barvy a směr světla; poslední tři sekundy každé části bez řeči.

## Návrh funkce / aplikace / pluginu

**A24 Brand Icon Registry** — A24 Brand Icon Registry sjednotí schválené ikony pro vlastní WordPress pluginy, ohlídá názvy kolekcí, přístupnost a bezpečné serverové vykreslení přes nové API WordPressu 7.1. Přínos: Agenda24 bude mít jednu schválenou a verzovanou knihovnu ikon pro všechny vlastní pluginy bez kopírování SVG do každého projektu.

## MVP verze

správa kolekcí a ikon, validace SVG, náhled, přístupný název, verze, REST a PHP ukázka, audit použití, import/export a historie.

## Detailní Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 Brand Icon Registry“ pro Agenda24. Funkce: správa kolekcí a ikon, validace SVG, náhled, přístupný název, verze, REST a PHP ukázka, audit použití, import/export a historie. Administrace kompletně česky: role, záznamy, stavy, zdroje, upozornění, exporty, retenční pravidla a audit změn. Datový model: entity, vztahy, indexy, migrace, verzování a bezpečná odinstalace; používej WordPress API, CPT, metadata a Options API, vlastní tabulky jen s odůvodněním. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace, escapování, prepared SQL, rate limiting, bezpečný upload, žádné klíče v klientu, auditní log bez citlivých dat, GDPR minimalizace, export a výmaz. Responzivita od 320 px; ovládání klávesnicí, viditelný focus, správné labely, srozumitelná validace a WCAG 2.2 AA. Kompatibilita: aktuální WordPress, PHP 7.4+, blokový i klasický editor, běžné cache pluginy, lokalizace a izolované CSS/JS. Testy: unit, integrační a E2E na desktopu i mobilu, oprávnění, CSRF, neplatné vstupy, migrace, export, odinstalace a regrese. Akceptační kritéria: Agenda24 bude mít jednu schválenou a verzovanou knihovnu ikon pro všechny vlastní pluginy bez kopírování SVG do každého projektu; data se neztratí při validaci, export odpovídá zobrazení, log neobsahuje citlivé hodnoty a aplikace nemění cizí nastavení. Dodej čistý instalační ZIP, českou uživatelskou i technickou dokumentaci, seznam hooků/API a postup instalace, aktualizace, zálohy a odinstalace. Používej bezpečné API a minimální cílené zásahy. Při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data nebo zablokovat administraci.
