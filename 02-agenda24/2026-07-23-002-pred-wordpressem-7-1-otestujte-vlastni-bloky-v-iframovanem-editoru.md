---
title: "Před WordPressem 7.1 otestujte vlastní bloky v iframovaném editoru"
date: 2026-07-23
project: "Agenda24"
project_url: "https://agenda24.cz/"
projects: ["Agenda24"]
topic_type: "praktický tip"
usage_type: "obsahová a publikační karta"
priority: "vysoká"
status: "k rozpracování"
blog_potential: "vysoký"
social_potential: "vysoký"
recommended_output: "článek, sociální série a praktický nástroj"
brand: "agenda24"
tags: ["praktický tip", "Weby a e-shopy", "A24 Block API v3 Checklist"]
source_summary: "WordPress 7.1 Beta 1 upozorňuje na iframovaný editor a doporučuje autorům bloků Block API v3. Zdroj: WordPress 7.1 Beta 1, 2. 7. 2026."
value_feature_type: "kompatibilitní checker"
value_feature_name: "A24 Block API v3 Checklist"
value_feature_summary: "WordPress 7.1 posouvá editor k plně iframovanému režimu a Block API v3. Vlastní bloky, styly a skripty je vhodné otestovat na stagingu před produkční aktualizací."
value_feature_benefit: "Vývojář dostane konkrétní seznam míst, kde může blok selhat, a dohledatelný test."
value_feature_mvp: "Katalog bloků, apiVersion, registrace assetů, test editor/front-end, konzolové chyby, mobilní náhled, priorita opravy a export."
value_feature_codex_prompt: "Vytvoř produkční WordPress/WooCommerce plugin „A24 Block API v3 Checklist“ pro Agenda24. Funkce: Katalog bloků, apiVersion, registrace assetů, test editor/front-end, konzolové chyby, mobilní náhled, priorita opravy a export. Administrace kompletně česky: role, záznamy, stavy, zdroje, upozornění, exporty a retence. Datový model: entity, vztahy, indexy, migrace, verzování a bezpečná odinstalace; WordPress API, CPT, metadata a Options API, vlastní tabulky jen s odůvodněním. Bezpečnost: capability checks, nonce/CSRF, sanitizace, escapování, prepared SQL, rate limiting, bezpečný upload, žádné klíče v klientu, auditní log bez citlivých dat, GDPR minimalizace, export a výmaz. Rozhraní od 320 px, klávesnice, viditelný focus, labely, srozumitelná validace, WCAG 2.2 AA. Kompatibilita: aktuální WordPress, PHP 7.4+, blokový i klasický editor, běžné cache pluginy, lokalizace a izolované CSS/JS. Testy: unit, integrační a E2E pro desktop i mobil, oprávnění, CSRF, neplatné vstupy, migrace, export, odinstalace a regrese. Akceptace: Vývojář dostane konkrétní seznam míst, kde může blok selhat, a dohledatelný test. Data se neztratí při validaci, export souhlasí se zobrazením a řešení nemění cizí nastavení. Dodej čistý instalační ZIP, českou uživatelskou a technickou dokumentaci, seznam hooků/API a postup instalace, aktualizace, zálohy a odinstalace. Používej bezpečné API a minimální cílené zásahy. Při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek serveru nesmí shodit web, poškodit data nebo zablokovat administraci."
agenda24_area: "Weby a e-shopy"
---

## Shrnutí

WordPress 7.1 posouvá editor k plně iframovanému režimu a Block API v3. Vlastní bloky, styly a skripty je vhodné otestovat na stagingu před produkční aktualizací.

## Zdroje

- [WordPress 7.1 Beta 1](https://wordpress.org/news/2026/07/wordpress-7-1-beta-1/) — 2. 7. 2026. WordPress 7.1 Beta 1 upozorňuje na iframovaný editor a doporučuje autorům bloků Block API v3.
- Zdroj zkontrolován 23. 7. 2026; před použitím znovu ověřte aktuální znění.

## Proč je to důležité

Blok může být na veřejné stránce správný a současně rozbitý v editoru.

## Doporučení

1. Vytvořte staging s kopií šablony.
2. Zkontrolujte apiVersion a assety.
3. Otestujte vložení, úpravu a odstranění bloku.
4. Porovnejte editor s webem na mobilu.
5. Zapište regresní test.

## SEO titulek

Před WordPressem 7.1 otestujte vlastní bloky v iframovaném editoru | Agenda24

## Meta popis

WordPress 7.1 posouvá editor k plně iframovanému režimu a Block API v3. Vlastní bloky, styly a skripty je vhodné otestovat na stagingu před produkční aktua

## Perex

WordPress 7.1 posouvá editor k plně iframovanému režimu a Block API v3. Vlastní bloky, styly a skripty je vhodné otestovat na stagingu před produkční aktualizací. Následuje konkrétní postup a praktická pomůcka.

## Blogový titulek

Před WordPressem 7.1 otestujte vlastní bloky v iframovaném editoru

## Osnova blogu

1. Ověřený zdroj
2. Praktický dopad
3. Nejčastější chyba
4. Postup krok za krokem
5. Nástroj A24 Block API v3 Checklist
6. Ověření výsledku

## Kompletní Blogový draft

Před WordPressem 7.1 otestujte vlastní bloky v iframovaném editoru

WordPress 7.1 posouvá editor k plně iframovanému režimu a Block API v3. Vlastní bloky, styly a skripty je vhodné otestovat na stagingu před produkční aktualizací.

Co je ověřeno

WordPress 7.1 Beta 1 upozorňuje na iframovaný editor a doporučuje autorům bloků Block API v3.

Praktický dopad je potřeba ověřit na bezpečném vzorku, určit odpovědnost a uložit výsledek kontroly.

Proč na tom záleží

Blok může být na veřejné stránce správný a současně rozbitý v editoru.

Dostupnost funkce ještě není hotový proces. Bez vlastníka, testu, návratu a záznamu může novinka přidat zmatek.

Postup krok za krokem

Vytvořte staging s kopií šablony. Zkontrolujte apiVersion a assety. Otestujte vložení, úpravu a odstranění bloku. Porovnejte editor s webem na mobilu. Zapište regresní test.

Praktický nástroj

A24 Block API v3 Checklist převádí doporučení do jednoho přehledu. Katalog bloků, apiVersion, registrace assetů, test editor/front-end, konzolové chyby, mobilní náhled, priorita opravy a export.

Vývojář dostane konkrétní seznam míst, kde může blok selhat, a dohledatelný test.

Jak ověřit výsledek

Uživatel musí zvládnout postup bez obcházení pravidel, dohledat důvod rozhodnutí a při chybě se bezpečně vrátit. Z nalezených chyb vytvořte regresní test.

CTA: Vyzkoušejte první krok a výsledek zaznamenejte.

## Čistý Blog pro Enfold

<h1>Před WordPressem 7.1 otestujte vlastní bloky v iframovaném editoru</h1>
<p class="perex">WordPress 7.1 posouvá editor k plně iframovanému režimu a Block API v3. Vlastní bloky, styly a skripty je vhodné otestovat na stagingu před produkční aktualizací.</p>
<h2>Co je ověřeno</h2>
<p>WordPress 7.1 Beta 1 upozorňuje na iframovaný editor a doporučuje autorům bloků Block API v3.</p>
<p>Praktický dopad je potřeba ověřit na bezpečném vzorku, určit odpovědnost a uložit výsledek kontroly.</p>
<h2>Proč na tom záleží</h2>
<p>Blok může být na veřejné stránce správný a současně rozbitý v editoru.</p>
<p>Dostupnost funkce ještě není hotový proces. Bez vlastníka, testu, návratu a záznamu může novinka přidat zmatek.</p>
<h2>Postup krok za krokem</h2>
<p>Vytvořte staging s kopií šablony. Zkontrolujte apiVersion a assety. Otestujte vložení, úpravu a odstranění bloku. Porovnejte editor s webem na mobilu. Zapište regresní test.</p>
<h2>Praktický nástroj</h2>
<p><strong>A24 Block API v3 Checklist</strong> převádí doporučení do jednoho přehledu. Katalog bloků, apiVersion, registrace assetů, test editor/front-end, konzolové chyby, mobilní náhled, priorita opravy a export.</p>
<p>Vývojář dostane konkrétní seznam míst, kde může blok selhat, a dohledatelný test.</p>
<h2>Jak ověřit výsledek</h2>
<p>Uživatel musí zvládnout postup bez obcházení pravidel, dohledat důvod rozhodnutí a při chybě se bezpečně vrátit. Z nalezených chyb vytvořte regresní test.</p>
<p><strong>CTA:</strong> Vyzkoušejte první krok a výsledek zaznamenejte.</p>

## Facebook text

Před WordPressem 7.1 otestujte vlastní bloky v iframovaném editoru

WordPress 7.1 posouvá editor k plně iframovanému režimu a Block API v3. Vlastní bloky, styly a skripty je vhodné otestovat na stagingu před produkční aktualizací.

Začněte jedním ověřitelným krokem a výsledek si zaznamenejte.

#Agenda24 #WordPress #SprávaWebu

## LinkedIn text

Před WordPressem 7.1 otestujte vlastní bloky v iframovaném editoru

WordPress 7.1 posouvá editor k plně iframovanému režimu a Block API v3. Vlastní bloky, styly a skripty je vhodné otestovat na stagingu před produkční aktualizací.

Začněte jedním ověřitelným krokem a výsledek si zaznamenejte.

Praktická hodnota: Vývojář dostane konkrétní seznam míst, kde může blok selhat, a dohledatelný test.

#Agenda24 #WordPress #SprávaWebu

## Instagram caption

Před WordPressem 7.1 otestujte vlastní bloky v iframovaném editoru

WordPress 7.1 posouvá editor k plně iframovanému režimu a Block API v3. Vlastní bloky, styly a skripty je vhodné otestovat na stagingu před produkční aktualizací.

Začněte jedním ověřitelným krokem a výsledek si zaznamenejte.

✅ Vytvořte staging s kopií šablony.
✅ Zkontrolujte apiVersion a assety.
✅ Otestujte vložení, úpravu a odstranění bloku.

#Agenda24 #WordPress #SprávaWebu

## Čistý publikační text pro Facebook

Před WordPressem 7.1 otestujte vlastní bloky v iframovaném editoru

WordPress 7.1 posouvá editor k plně iframovanému režimu a Block API v3. Vlastní bloky, styly a skripty je vhodné otestovat na stagingu před produkční aktualizací.

Začněte jedním ověřitelným krokem a výsledek si zaznamenejte.

#Agenda24 #WordPress #SprávaWebu

## Čistý publikační text pro LinkedIn

Před WordPressem 7.1 otestujte vlastní bloky v iframovaném editoru

WordPress 7.1 posouvá editor k plně iframovanému režimu a Block API v3. Vlastní bloky, styly a skripty je vhodné otestovat na stagingu před produkční aktualizací.

Začněte jedním ověřitelným krokem a výsledek si zaznamenejte.

Nástroj: A24 Block API v3 Checklist. Vývojář dostane konkrétní seznam míst, kde může blok selhat, a dohledatelný test.

#Agenda24 #WordPress #SprávaWebu

## Čistý publikační text pro Instagram

Před WordPressem 7.1 otestujte vlastní bloky v iframovaném editoru

WordPress 7.1 posouvá editor k plně iframovanému režimu a Block API v3. Vlastní bloky, styly a skripty je vhodné otestovat na stagingu před produkční aktualizací.

Začněte jedním ověřitelným krokem a výsledek si zaznamenejte.

1️⃣ Vytvořte staging s kopií šablony.
2️⃣ Zkontrolujte apiVersion a assety.
3️⃣ Otestujte vložení, úpravu a odstranění bloku.

#Agenda24 #WordPress #SprávaWebu

## TikTok balíček

**Hook:** Před WordPressem 7.1 otestujte vlastní bloky v iframovaném editoru

**Scénář po sekundách:** 0–2 s hook; 2–7 s jedna česká věta; 7–10 s tichá pointa a CTA.

**Mluvený text:** WordPress 7.

**Text na obrazovku:** A24 Block API v3 Checklist

**Storyboard:** Detail problému → jeden krok → potvrzený stav.

**CTA:** Otevřete celý postup.

**Hashtagy:** #Agenda24 #WordPress #SprávaWebu

**Cover:** Před WordPressem 7.1 otestujte vlastní bloky v iframovaném editoru

**Video prompt:** Gemini Flow / Omni, přesně 10 sekund, 9:16. 0–2 s obraz problému a text „A24 Block API v3 Checklist“. 2–7 s český hlas: „WordPress 7.“ 7–10 s tichý stav před/po a CTA „Zjistit postup“. Žádná useknutá věta.

**Volitelný delší scénář:** Volitelný scénář 3×10 s pro Gemini Flow / Omni. Blok 1: hook a problém, řeč končí do 7 s, poslední 3 s tichý detail. Blok 2: „Vytvořte staging s kopií šablony. Zkontrolujte apiVersion a assety.“, řeč do 7 s, poslední 3 s potvrzení. Blok 3: nástroj A24 Block API v3 Checklist, krátká věta „Vývojář dostane konkrétní seznam míst, kde může blok selhat, a dohledatelný test.“, řeč do 7 s, poslední 3 s CTA. Každý blok funguje samostatně.

## YouTube Shorts popisek

WordPress 7.1 posouvá editor k plně iframovanému režimu a Block API v3. Vlastní bloky, styly a skripty je vhodné otestovat na stagingu před produkční aktualizací. Podívejte se na celý postup. #Agenda24 #WordPress #SprávaWebu

## Text do grafiky

Před WordPressem 7.1 otestujte vlastní bloky v iframovaném editoru

A24 Block API v3 Checklist

## CTA

Vyzkoušejte první krok.

## Alt text

Přehled A24 Block API v3 Checklist s kroky, stavem a výsledkem.

## Prompt na obrázek

Prémiový vizuál Agenda24, #030712, #080B16 a #EC0044, originální symbol 24, čistá kompozice, bez žluté, zlaté, oranžové, robotů a levného cyberpunku.

## Reference k obrázku

Použít aktuální manifest značky agenda24; nemíchat prvky jiných projektů.

## Prompt na video

Gemini Flow / Omni, přesně 10 sekund, 9:16. 0–2 s obraz problému a text „A24 Block API v3 Checklist“. 2–7 s český hlas: „WordPress 7.“ 7–10 s tichý stav před/po a CTA „Zjistit postup“. Žádná useknutá věta.

## Reference k videu

Gemini Flow / Omni. Hlavní výstup přesně 10 sekund; česká řeč končí nejpozději v 7. sekundě, poslední tři sekundy jsou tiché.

## Návrh funkce / aplikace / pluginu

**A24 Block API v3 Checklist** — kompatibilitní checker. Vývojář dostane konkrétní seznam míst, kde může blok selhat, a dohledatelný test.

## MVP verze

Katalog bloků, apiVersion, registrace assetů, test editor/front-end, konzolové chyby, mobilní náhled, priorita opravy a export.

## Detailní Prompt pro Codex k funkci

Vytvoř produkční WordPress/WooCommerce plugin „A24 Block API v3 Checklist“ pro Agenda24. Funkce: Katalog bloků, apiVersion, registrace assetů, test editor/front-end, konzolové chyby, mobilní náhled, priorita opravy a export. Administrace kompletně česky: role, záznamy, stavy, zdroje, upozornění, exporty a retence. Datový model: entity, vztahy, indexy, migrace, verzování a bezpečná odinstalace; WordPress API, CPT, metadata a Options API, vlastní tabulky jen s odůvodněním. Bezpečnost: capability checks, nonce/CSRF, sanitizace, escapování, prepared SQL, rate limiting, bezpečný upload, žádné klíče v klientu, auditní log bez citlivých dat, GDPR minimalizace, export a výmaz. Rozhraní od 320 px, klávesnice, viditelný focus, labely, srozumitelná validace, WCAG 2.2 AA. Kompatibilita: aktuální WordPress, PHP 7.4+, blokový i klasický editor, běžné cache pluginy, lokalizace a izolované CSS/JS. Testy: unit, integrační a E2E pro desktop i mobil, oprávnění, CSRF, neplatné vstupy, migrace, export, odinstalace a regrese. Akceptace: Vývojář dostane konkrétní seznam míst, kde může blok selhat, a dohledatelný test. Data se neztratí při validaci, export souhlasí se zobrazením a řešení nemění cizí nastavení. Dodej čistý instalační ZIP, českou uživatelskou a technickou dokumentaci, seznam hooků/API a postup instalace, aktualizace, zálohy a odinstalace. Používej bezpečné API a minimální cílené zásahy. Při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek serveru nesmí shodit web, poškodit data nebo zablokovat administraci.
