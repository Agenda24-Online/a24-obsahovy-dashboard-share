---
title: "WordPress 7.1 zapne nekonečné načítání médií a přidá osobní vypnutí"
date: 2026-07-24
project: "Agenda24"
project_url: "https://agenda24.cz/"
projects: ["Agenda24"]
topic_type: "novinka"
usage_type: "obsahová a publikační karta"
priority: "vysoká"
status: "k rozpracování"
blog_potential: "vysoký"
social_potential: "vysoký"
recommended_output: "článek, sociální série a praktický nástroj"
brand: "agenda24"
tags: ["novinka", "Správa webu a e-shopu", "A24 Media Scroll Audit"]
source_summary: "Oficiální dev note uvádí pořadí filtru, osobní volby a výchozí hodnoty; filtr má nejvyšší prioritu. Zdroj: Media Library infinite scrolling is now enabled by default, 23. 7. 2026."
value_feature_type: "audit nastavení knihovny médií"
value_feature_name: "A24 Media Scroll Audit"
value_feature_summary: "Ve WordPressu 7.1 bude nekonečné načítání v mřížce médií i mediálním okně zapnuté ve výchozím stavu. Každý uživatel s oprávněním nahrávat soubory je bude moci vypnout ve svém profilu."
value_feature_benefit: "Správce zjistí, zda web používá výchozí stav, osobní volbu nebo globální filtr a může změnu bezpečně otestovat."
value_feature_mvp: "Seznam uživatelů, oprávnění upload_files, osobní preference, aktivní filtr, efektivní stav, počet médií, výkonový test a export."
value_feature_codex_prompt: "Vytvoř produkční WordPress/WooCommerce plugin „A24 Media Scroll Audit“ pro Agenda24. Funkce: Seznam uživatelů, oprávnění upload_files, osobní preference, aktivní filtr, efektivní stav, počet médií, výkonový test a export. Administrace kompletně česky: role, záznamy, stavy, zdroje, upozornění, exporty a retenční pravidla. Datový model: entity, vztahy, indexy, migrace, verzování a bezpečná odinstalace; WordPress API, CPT, metadata a Options API, vlastní tabulky jen s odůvodněním. Bezpečnost: capability checks, nonce/CSRF, sanitizace, escapování, prepared SQL, rate limiting, bezpečný upload, žádné klíče v klientu, auditní log bez citlivých dat, GDPR minimalizace, export a výmaz. Rozhraní od 320 px, klávesnice, viditelný focus, správné labely, srozumitelná validace, WCAG 2.2 AA. Kompatibilita: aktuální WordPress, PHP 7.4+, blokový i klasický editor, běžné cache pluginy, lokalizace a izolované CSS/JS. Testy: unit, integrační a E2E pro desktop i mobil, oprávnění, CSRF, neplatné vstupy, migrace, export, odinstalace a regrese. Akceptační kritéria: Správce zjistí, zda web používá výchozí stav, osobní volbu nebo globální filtr a může změnu bezpečně otestovat. Data se neztratí při validaci, export odpovídá zobrazení, log neobsahuje citlivé hodnoty a řešení nemění cizí nastavení. Dodej čistý instalační ZIP, českou uživatelskou a technickou dokumentaci, seznam hooků/API a postup instalace, aktualizace, zálohy a odinstalace. Používej bezpečné API a minimální cílené zásahy. Při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data nebo zablokovat administraci."
agenda24_area: "Správa webu a e-shopu"
---

## Shrnutí

Ve WordPressu 7.1 bude nekonečné načítání v mřížce médií i mediálním okně zapnuté ve výchozím stavu. Každý uživatel s oprávněním nahrávat soubory je bude moci vypnout ve svém profilu.

## Zdroje

- [Media Library infinite scrolling is now enabled by default](https://make.wordpress.org/core/2026/07/23/media-library-infinite-scrolling-is-now-enabled-by-default-with-a-per-user-opt-out/) — 23. 7. 2026. Oficiální dev note uvádí pořadí filtru, osobní volby a výchozí hodnoty; filtr má nejvyšší prioritu.
- Zdroj zkontrolován 24. 7. 2026; před použitím ověřte aktuální znění.

## Proč je to důležité

Změna chování se týká velkých knihoven, přístupnosti, výkonu i zvyklostí redaktorů.

## Doporučení

1. Otestujte velkou knihovnu na stagingu.
2. Změřte načítání a práci s klávesnicí.
3. Ověřte osobní volbu v profilu.
4. Zkontrolujte případný filtr v pluginu či šabloně.
5. Sepište krátký návod pro redaktory.

## SEO titulek

WordPress 7.1 zapne nekonečné načítání médií a přidá osobní vypnutí | Agenda24

## Meta popis

Ve WordPressu 7.1 bude nekonečné načítání v mřížce médií i mediálním okně zapnuté ve výchozím stavu. Každý uživatel s oprávněním nahrávat soubory je bude m

## Perex

Ve WordPressu 7.1 bude nekonečné načítání v mřížce médií i mediálním okně zapnuté ve výchozím stavu. Každý uživatel s oprávněním nahrávat soubory je bude moci vypnout ve svém profilu. Následuje konkrétní postup a praktický nástroj.

## Blogový titulek

WordPress 7.1 zapne nekonečné načítání médií a přidá osobní vypnutí

## Osnova blogu

1. Ověřená změna a zdroj
2. Praktický dopad
3. Nejčastější chyba
4. Postup krok za krokem
5. Nástroj A24 Media Scroll Audit
6. Ověření výsledku

## Kompletní Blogový draft

WordPress 7.1 zapne nekonečné načítání médií a přidá osobní vypnutí

Ve WordPressu 7.1 bude nekonečné načítání v mřížce médií i mediálním okně zapnuté ve výchozím stavu. Každý uživatel s oprávněním nahrávat soubory je bude moci vypnout ve svém profilu.

Co se změnilo a co je ověřeno

Oficiální dev note uvádí pořadí filtru, osobní volby a výchozí hodnoty; filtr má nejvyšší prioritu.

Ověřenou informaci je potřeba převést do konkrétního dopadu na současný postup. Teprve pak lze rozhodnout, zda stačí kontrola, úprava nebo nový nástroj.

Proč je téma důležité

Změna chování se týká velkých knihoven, přístupnosti, výkonu i zvyklostí redaktorů.

Nejčastější chybou je zavést novinku bez vlastníka, testu a podmínky dokončení. Takový krok se později obtížně kontroluje a chyba se opakuje.

Doporučený postup

Otestujte velkou knihovnu na stagingu. Změřte načítání a práci s klávesnicí. Ověřte osobní volbu v profilu. Zkontrolujte případný filtr v pluginu či šabloně. Sepište krátký návod pro redaktory.

Každý krok musí mít odpovědnou roli, datum a pozorovatelný výsledek. U nevratných akcí je nutné výslovné schválení člověkem.

Praktický nástroj

A24 Media Scroll Audit — audit nastavení knihovny médií. Seznam uživatelů, oprávnění upload_files, osobní preference, aktivní filtr, efektivní stav, počet médií, výkonový test a export.

Správce zjistí, zda web používá výchozí stav, osobní volbu nebo globální filtr a může změnu bezpečně otestovat.

Jak poznat, že řešení funguje

Uživatel dohledá zdroj rozhodnutí, provede postup bez obcházení pravidel a při chybě se bezpečně vrátí. Nalezená chyba se promění v nový regresní test.

Co udělat dnes

Vyberte jeden bezpečný vzorek, proveďte první test a zapište skutečný výsledek i další odpovědnost.

CTA: Otevřete pracovní checklist a proveďte první kontrolu.

## Čistý Blog pro Enfold

<h1>WordPress 7.1 zapne nekonečné načítání médií a přidá osobní vypnutí</h1>
<p class="perex">Ve WordPressu 7.1 bude nekonečné načítání v mřížce médií i mediálním okně zapnuté ve výchozím stavu. Každý uživatel s oprávněním nahrávat soubory je bude moci vypnout ve svém profilu.</p>
<h2>Co se změnilo a co je ověřeno</h2>
<p>Oficiální dev note uvádí pořadí filtru, osobní volby a výchozí hodnoty; filtr má nejvyšší prioritu.</p>
<p>Ověřenou informaci je potřeba převést do konkrétního dopadu na současný postup. Teprve pak lze rozhodnout, zda stačí kontrola, úprava nebo nový nástroj.</p>
<h2>Proč je téma důležité</h2>
<p>Změna chování se týká velkých knihoven, přístupnosti, výkonu i zvyklostí redaktorů.</p>
<p>Nejčastější chybou je zavést novinku bez vlastníka, testu a podmínky dokončení. Takový krok se později obtížně kontroluje a chyba se opakuje.</p>
<h2>Doporučený postup</h2>
<p>Otestujte velkou knihovnu na stagingu. Změřte načítání a práci s klávesnicí. Ověřte osobní volbu v profilu. Zkontrolujte případný filtr v pluginu či šabloně. Sepište krátký návod pro redaktory.</p>
<p>Každý krok musí mít odpovědnou roli, datum a pozorovatelný výsledek. U nevratných akcí je nutné výslovné schválení člověkem.</p>
<h2>Praktický nástroj</h2>
<p><strong>A24 Media Scroll Audit</strong> — audit nastavení knihovny médií. Seznam uživatelů, oprávnění upload_files, osobní preference, aktivní filtr, efektivní stav, počet médií, výkonový test a export.</p>
<p>Správce zjistí, zda web používá výchozí stav, osobní volbu nebo globální filtr a může změnu bezpečně otestovat.</p>
<h2>Jak poznat, že řešení funguje</h2>
<p>Uživatel dohledá zdroj rozhodnutí, provede postup bez obcházení pravidel a při chybě se bezpečně vrátí. Nalezená chyba se promění v nový regresní test.</p>
<h2>Co udělat dnes</h2>
<p>Vyberte jeden bezpečný vzorek, proveďte první test a zapište skutečný výsledek i další odpovědnost.</p>
<p><strong>CTA:</strong> Otevřete pracovní checklist a proveďte první kontrolu.</p>

## Facebook text

WordPress 7.1 zapne nekonečné načítání médií a přidá osobní vypnutí

Ve WordPressu 7.1 bude nekonečné načítání v mřížce médií i mediálním okně zapnuté ve výchozím stavu. Každý uživatel s oprávněním nahrávat soubory je bude moci vypnout ve svém profilu.

Začněte jedním ověřitelným krokem a výsledek zaznamenejte.

#Agenda24 #WordPress #SprávaWebu

## LinkedIn text

WordPress 7.1 zapne nekonečné načítání médií a přidá osobní vypnutí

Ve WordPressu 7.1 bude nekonečné načítání v mřížce médií i mediálním okně zapnuté ve výchozím stavu. Každý uživatel s oprávněním nahrávat soubory je bude moci vypnout ve svém profilu.

Začněte jedním ověřitelným krokem a výsledek zaznamenejte.

Praktická hodnota: Správce zjistí, zda web používá výchozí stav, osobní volbu nebo globální filtr a může změnu bezpečně otestovat.

#Agenda24 #WordPress #SprávaWebu

## Instagram caption

WordPress 7.1 zapne nekonečné načítání médií a přidá osobní vypnutí

Ve WordPressu 7.1 bude nekonečné načítání v mřížce médií i mediálním okně zapnuté ve výchozím stavu. Každý uživatel s oprávněním nahrávat soubory je bude moci vypnout ve svém profilu.

Začněte jedním ověřitelným krokem a výsledek zaznamenejte.

✅ Otestujte velkou knihovnu na stagingu.
✅ Změřte načítání a práci s klávesnicí.
✅ Ověřte osobní volbu v profilu.

#Agenda24 #WordPress #SprávaWebu

## Čistý publikační text pro Facebook

WordPress 7.1 zapne nekonečné načítání médií a přidá osobní vypnutí

Ve WordPressu 7.1 bude nekonečné načítání v mřížce médií i mediálním okně zapnuté ve výchozím stavu. Každý uživatel s oprávněním nahrávat soubory je bude moci vypnout ve svém profilu.

Začněte jedním ověřitelným krokem a výsledek zaznamenejte.

#Agenda24 #WordPress #SprávaWebu

## Čistý publikační text pro LinkedIn

WordPress 7.1 zapne nekonečné načítání médií a přidá osobní vypnutí

Ve WordPressu 7.1 bude nekonečné načítání v mřížce médií i mediálním okně zapnuté ve výchozím stavu. Každý uživatel s oprávněním nahrávat soubory je bude moci vypnout ve svém profilu.

Začněte jedním ověřitelným krokem a výsledek zaznamenejte.

Nástroj: A24 Media Scroll Audit. Správce zjistí, zda web používá výchozí stav, osobní volbu nebo globální filtr a může změnu bezpečně otestovat.

#Agenda24 #WordPress #SprávaWebu

## Čistý publikační text pro Instagram

WordPress 7.1 zapne nekonečné načítání médií a přidá osobní vypnutí

Ve WordPressu 7.1 bude nekonečné načítání v mřížce médií i mediálním okně zapnuté ve výchozím stavu. Každý uživatel s oprávněním nahrávat soubory je bude moci vypnout ve svém profilu.

Začněte jedním ověřitelným krokem a výsledek zaznamenejte.

1️⃣ Otestujte velkou knihovnu na stagingu.
2️⃣ Změřte načítání a práci s klávesnicí.
3️⃣ Ověřte osobní volbu v profilu.

#Agenda24 #WordPress #SprávaWebu

## TikTok balíček

**Hook:** WordPress 7.1 zapne nekonečné načítání médií a přidá osobní vypnutí

**Scénář po sekundách:** 0–2 s hook; 2–7 s krátká česká věta; 7–10 s tichá obrazová pointa a CTA.

**Mluvený text:** Ve WordPressu 7.

**Text na obrazovku:** A24 Media Scroll Audit

**Storyboard:** Detail problému → jeden ověřený krok → potvrzený stav.

**CTA:** Otevřete celý postup.

**Hashtagy:** #Agenda24 #WordPress #SprávaWebu

**Cover:** WordPress 7.1 zapne nekonečné načítání médií a přidá osobní vypnutí

**Video prompt:** Gemini Flow / Omni, přesně 10 sekund, vertikální 9:16. 0–2 s výrazný vizuální hook s textem „A24 Media Scroll Audit“. 2–7 s jeden český hlas řekne: „Ve WordPressu 7.“ 7–10 s bez řeči: jasný stav před/po a CTA „Zjistit postup“. Žádná useknutá věta.

**Volitelný delší scénář:** Volitelný rozvinutý scénář pro Gemini Flow / Omni, jedno výsledné video složené ze 3 navazujících bloků po 10 sekundách. Blok 1: otázka a problém, řeč končí do 7 s. Blok 2: „Otestujte velkou knihovnu na stagingu. Změřte načítání a práci s klávesnicí.“, řeč končí do 7 s. Blok 3: nástroj A24 Media Scroll Audit, krátká věta „Správce zjistí, zda web používá výchozí stav, osobní volbu nebo globální filtr a může změnu bezpečně“, řeč končí do 7 s. Poslední 3 sekundy každého bloku jsou tiché a nesou obrazovou pointu.

## YouTube Shorts popisek

Ve WordPressu 7.1 bude nekonečné načítání v mřížce médií i mediálním okně zapnuté ve výchozím stavu. Každý uživatel s oprávněním nahrávat soubory je bude moci vypnout ve svém profilu. Podívejte se na celý postup. #Agenda24 #WordPress #SprávaWebu

## Text do grafiky

WordPress 7.1 zapne nekonečné načítání médií a přidá osobní vypnutí

A24 Media Scroll Audit

## CTA

Vyzkoušejte první krok.

## Alt text

Přehled A24 Media Scroll Audit s kroky, stavem a výsledkem.

## Prompt na obrázek

Prémiový vizuál Agenda24, pozadí #030712 a #080B16, akcent #EC0044, originální symbol 24, Martin podle schválených referencí, čistá kompozice, bez žluté, zlaté, oranžové, robotů a levného cyberpunku.

## Reference k obrázku

Použít aktuální manifest značky agenda24; nemíchat prvky jiných projektů.

## Prompt na video

Gemini Flow / Omni, přesně 10 sekund, vertikální 9:16. 0–2 s výrazný vizuální hook s textem „A24 Media Scroll Audit“. 2–7 s jeden český hlas řekne: „Ve WordPressu 7.“ 7–10 s bez řeči: jasný stav před/po a CTA „Zjistit postup“. Žádná useknutá věta.

### Rozvinutý scénář

Volitelný rozvinutý scénář pro Gemini Flow / Omni, jedno výsledné video složené ze 3 navazujících bloků po 10 sekundách. Blok 1: otázka a problém, řeč končí do 7 s. Blok 2: „Otestujte velkou knihovnu na stagingu. Změřte načítání a práci s klávesnicí.“, řeč končí do 7 s. Blok 3: nástroj A24 Media Scroll Audit, krátká věta „Správce zjistí, zda web používá výchozí stav, osobní volbu nebo globální filtr a může změnu bezpečně“, řeč končí do 7 s. Poslední 3 sekundy každého bloku jsou tiché a nesou obrazovou pointu.

## Reference k videu

Gemini Flow / Omni. Hlavní výstup má přesně 10 sekund; česká řeč končí nejpozději v 7. sekundě a poslední tři sekundy jsou tiché.

## Návrh funkce / aplikace / pluginu

**A24 Media Scroll Audit** — audit nastavení knihovny médií. Správce zjistí, zda web používá výchozí stav, osobní volbu nebo globální filtr a může změnu bezpečně otestovat.

Funkce: Seznam uživatelů, oprávnění upload_files, osobní preference, aktivní filtr, efektivní stav, počet médií, výkonový test a export.

## MVP verze

Seznam uživatelů, oprávnění upload_files, osobní preference, aktivní filtr, efektivní stav, počet médií, výkonový test a export.

## Detailní Prompt pro Codex k funkci

Vytvoř produkční WordPress/WooCommerce plugin „A24 Media Scroll Audit“ pro Agenda24. Funkce: Seznam uživatelů, oprávnění upload_files, osobní preference, aktivní filtr, efektivní stav, počet médií, výkonový test a export. Administrace kompletně česky: role, záznamy, stavy, zdroje, upozornění, exporty a retenční pravidla. Datový model: entity, vztahy, indexy, migrace, verzování a bezpečná odinstalace; WordPress API, CPT, metadata a Options API, vlastní tabulky jen s odůvodněním. Bezpečnost: capability checks, nonce/CSRF, sanitizace, escapování, prepared SQL, rate limiting, bezpečný upload, žádné klíče v klientu, auditní log bez citlivých dat, GDPR minimalizace, export a výmaz. Rozhraní od 320 px, klávesnice, viditelný focus, správné labely, srozumitelná validace, WCAG 2.2 AA. Kompatibilita: aktuální WordPress, PHP 7.4+, blokový i klasický editor, běžné cache pluginy, lokalizace a izolované CSS/JS. Testy: unit, integrační a E2E pro desktop i mobil, oprávnění, CSRF, neplatné vstupy, migrace, export, odinstalace a regrese. Akceptační kritéria: Správce zjistí, zda web používá výchozí stav, osobní volbu nebo globální filtr a může změnu bezpečně otestovat. Data se neztratí při validaci, export odpovídá zobrazení, log neobsahuje citlivé hodnoty a řešení nemění cizí nastavení. Dodej čistý instalační ZIP, českou uživatelskou a technickou dokumentaci, seznam hooků/API a postup instalace, aktualizace, zálohy a odinstalace. Používej bezpečné API a minimální cílené zásahy. Při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data nebo zablokovat administraci.
