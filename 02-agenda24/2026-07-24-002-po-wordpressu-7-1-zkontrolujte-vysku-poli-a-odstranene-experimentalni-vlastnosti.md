---
title: "Po WordPressu 7.1 zkontrolujte výšku polí a odstraněné experimentální vlastnosti"
date: 2026-07-24
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
tags: ["praktický tip", "Aplikace, pluginy a automatizace", "A24 WP Component Regression Checklist"]
source_summary: "Dev note uvádí 40px výšku formulářových prvků, neúčinnost __next40pxDefaultSize a odstranění či změny některých komponent a stylovacích cest. Zdroj: Editor components updates in WordPress 7.1, 23. 7. 2026."
value_feature_type: "regresní checker administrace"
value_feature_name: "A24 WP Component Regression Checklist"
value_feature_summary: "Formulářové komponenty WordPressu 7.1 mají výchozí výšku 40 px a některé dřívější vlastnosti již nemají účinek. Vlastní administrační rozhraní je potřeba otestovat vizuálně i funkčně."
value_feature_benefit: "Vývojář odhalí rozbité zarovnání nebo neúčinné vlastnosti dříve, než se dostanou do klientské administrace."
value_feature_mvp: "Seznam komponent, použité props, screenshot před/po, ovládání klávesnicí, focus, přetečení textu, mobilní zobrazení, priorita a export."
value_feature_codex_prompt: "Vytvoř produkční WordPress/WooCommerce plugin „A24 WP Component Regression Checklist“ pro Agenda24. Funkce: Seznam komponent, použité props, screenshot před/po, ovládání klávesnicí, focus, přetečení textu, mobilní zobrazení, priorita a export. Administrace kompletně česky: role, záznamy, stavy, zdroje, upozornění, exporty a retenční pravidla. Datový model: entity, vztahy, indexy, migrace, verzování a bezpečná odinstalace; WordPress API, CPT, metadata a Options API, vlastní tabulky jen s odůvodněním. Bezpečnost: capability checks, nonce/CSRF, sanitizace, escapování, prepared SQL, rate limiting, bezpečný upload, žádné klíče v klientu, auditní log bez citlivých dat, GDPR minimalizace, export a výmaz. Rozhraní od 320 px, klávesnice, viditelný focus, správné labely, srozumitelná validace, WCAG 2.2 AA. Kompatibilita: aktuální WordPress, PHP 7.4+, blokový i klasický editor, běžné cache pluginy, lokalizace a izolované CSS/JS. Testy: unit, integrační a E2E pro desktop i mobil, oprávnění, CSRF, neplatné vstupy, migrace, export, odinstalace a regrese. Akceptační kritéria: Vývojář odhalí rozbité zarovnání nebo neúčinné vlastnosti dříve, než se dostanou do klientské administrace. Data se neztratí při validaci, export odpovídá zobrazení, log neobsahuje citlivé hodnoty a řešení nemění cizí nastavení. Dodej čistý instalační ZIP, českou uživatelskou a technickou dokumentaci, seznam hooků/API a postup instalace, aktualizace, zálohy a odinstalace. Používej bezpečné API a minimální cílené zásahy. Při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data nebo zablokovat administraci."
agenda24_area: "Aplikace, pluginy a automatizace"
---

## Shrnutí

Formulářové komponenty WordPressu 7.1 mají výchozí výšku 40 px a některé dřívější vlastnosti již nemají účinek. Vlastní administrační rozhraní je potřeba otestovat vizuálně i funkčně.

## Zdroje

- [Editor components updates in WordPress 7.1](https://make.wordpress.org/core/2026/07/23/editor-components-updates-in-wordpress-7-1/) — 23. 7. 2026. Dev note uvádí 40px výšku formulářových prvků, neúčinnost __next40pxDefaultSize a odstranění či změny některých komponent a stylovacích cest.
- Zdroj zkontrolován 24. 7. 2026; před použitím ověřte aktuální znění.

## Proč je to důležité

Kosmetická změna výšky může rozbít husté panely, vlastní řádky nastavení i rozložení na malém displeji.

## Doporučení

1. Najděte vlastní použití @wordpress/components.
2. Odstraňte neúčinné experimentální props.
3. Pořiďte srovnávací snímky.
4. Otestujte klávesnici, focus a mobil.
5. Z nalezené chyby vytvořte regresní test.

## SEO titulek

Po WordPressu 7.1 zkontrolujte výšku polí a odstraněné experimentální vlastnosti | Agenda24

## Meta popis

Formulářové komponenty WordPressu 7.1 mají výchozí výšku 40 px a některé dřívější vlastnosti již nemají účinek. Vlastní administrační rozhraní je potřeba o

## Perex

Formulářové komponenty WordPressu 7.1 mají výchozí výšku 40 px a některé dřívější vlastnosti již nemají účinek. Vlastní administrační rozhraní je potřeba otestovat vizuálně i funkčně. Následuje konkrétní postup a praktický nástroj.

## Blogový titulek

Po WordPressu 7.1 zkontrolujte výšku polí a odstraněné experimentální vlastnosti

## Osnova blogu

1. Ověřená změna a zdroj
2. Praktický dopad
3. Nejčastější chyba
4. Postup krok za krokem
5. Nástroj A24 WP Component Regression Checklist
6. Ověření výsledku

## Kompletní Blogový draft

Po WordPressu 7.1 zkontrolujte výšku polí a odstraněné experimentální vlastnosti

Formulářové komponenty WordPressu 7.1 mají výchozí výšku 40 px a některé dřívější vlastnosti již nemají účinek. Vlastní administrační rozhraní je potřeba otestovat vizuálně i funkčně.

Co se změnilo a co je ověřeno

Dev note uvádí 40px výšku formulářových prvků, neúčinnost __next40pxDefaultSize a odstranění či změny některých komponent a stylovacích cest.

Ověřenou informaci je potřeba převést do konkrétního dopadu na současný postup. Teprve pak lze rozhodnout, zda stačí kontrola, úprava nebo nový nástroj.

Proč je téma důležité

Kosmetická změna výšky může rozbít husté panely, vlastní řádky nastavení i rozložení na malém displeji.

Nejčastější chybou je zavést novinku bez vlastníka, testu a podmínky dokončení. Takový krok se později obtížně kontroluje a chyba se opakuje.

Doporučený postup

Najděte vlastní použití @wordpress/components. Odstraňte neúčinné experimentální props. Pořiďte srovnávací snímky. Otestujte klávesnici, focus a mobil. Z nalezené chyby vytvořte regresní test.

Každý krok musí mít odpovědnou roli, datum a pozorovatelný výsledek. U nevratných akcí je nutné výslovné schválení člověkem.

Praktický nástroj

A24 WP Component Regression Checklist — regresní checker administrace. Seznam komponent, použité props, screenshot před/po, ovládání klávesnicí, focus, přetečení textu, mobilní zobrazení, priorita a export.

Vývojář odhalí rozbité zarovnání nebo neúčinné vlastnosti dříve, než se dostanou do klientské administrace.

Jak poznat, že řešení funguje

Uživatel dohledá zdroj rozhodnutí, provede postup bez obcházení pravidel a při chybě se bezpečně vrátí. Nalezená chyba se promění v nový regresní test.

Co udělat dnes

Vyberte jeden bezpečný vzorek, proveďte první test a zapište skutečný výsledek i další odpovědnost.

CTA: Otevřete pracovní checklist a proveďte první kontrolu.

## Čistý Blog pro Enfold

<h1>Po WordPressu 7.1 zkontrolujte výšku polí a odstraněné experimentální vlastnosti</h1>
<p class="perex">Formulářové komponenty WordPressu 7.1 mají výchozí výšku 40 px a některé dřívější vlastnosti již nemají účinek. Vlastní administrační rozhraní je potřeba otestovat vizuálně i funkčně.</p>
<h2>Co se změnilo a co je ověřeno</h2>
<p>Dev note uvádí 40px výšku formulářových prvků, neúčinnost __next40pxDefaultSize a odstranění či změny některých komponent a stylovacích cest.</p>
<p>Ověřenou informaci je potřeba převést do konkrétního dopadu na současný postup. Teprve pak lze rozhodnout, zda stačí kontrola, úprava nebo nový nástroj.</p>
<h2>Proč je téma důležité</h2>
<p>Kosmetická změna výšky může rozbít husté panely, vlastní řádky nastavení i rozložení na malém displeji.</p>
<p>Nejčastější chybou je zavést novinku bez vlastníka, testu a podmínky dokončení. Takový krok se později obtížně kontroluje a chyba se opakuje.</p>
<h2>Doporučený postup</h2>
<p>Najděte vlastní použití @wordpress/components. Odstraňte neúčinné experimentální props. Pořiďte srovnávací snímky. Otestujte klávesnici, focus a mobil. Z nalezené chyby vytvořte regresní test.</p>
<p>Každý krok musí mít odpovědnou roli, datum a pozorovatelný výsledek. U nevratných akcí je nutné výslovné schválení člověkem.</p>
<h2>Praktický nástroj</h2>
<p><strong>A24 WP Component Regression Checklist</strong> — regresní checker administrace. Seznam komponent, použité props, screenshot před/po, ovládání klávesnicí, focus, přetečení textu, mobilní zobrazení, priorita a export.</p>
<p>Vývojář odhalí rozbité zarovnání nebo neúčinné vlastnosti dříve, než se dostanou do klientské administrace.</p>
<h2>Jak poznat, že řešení funguje</h2>
<p>Uživatel dohledá zdroj rozhodnutí, provede postup bez obcházení pravidel a při chybě se bezpečně vrátí. Nalezená chyba se promění v nový regresní test.</p>
<h2>Co udělat dnes</h2>
<p>Vyberte jeden bezpečný vzorek, proveďte první test a zapište skutečný výsledek i další odpovědnost.</p>
<p><strong>CTA:</strong> Otevřete pracovní checklist a proveďte první kontrolu.</p>

## Facebook text

Po WordPressu 7.1 zkontrolujte výšku polí a odstraněné experimentální vlastnosti

Formulářové komponenty WordPressu 7.1 mají výchozí výšku 40 px a některé dřívější vlastnosti již nemají účinek. Vlastní administrační rozhraní je potřeba otestovat vizuálně i funkčně.

Začněte jedním ověřitelným krokem a výsledek zaznamenejte.

#Agenda24 #WordPress #SprávaWebu

## LinkedIn text

Po WordPressu 7.1 zkontrolujte výšku polí a odstraněné experimentální vlastnosti

Formulářové komponenty WordPressu 7.1 mají výchozí výšku 40 px a některé dřívější vlastnosti již nemají účinek. Vlastní administrační rozhraní je potřeba otestovat vizuálně i funkčně.

Začněte jedním ověřitelným krokem a výsledek zaznamenejte.

Praktická hodnota: Vývojář odhalí rozbité zarovnání nebo neúčinné vlastnosti dříve, než se dostanou do klientské administrace.

#Agenda24 #WordPress #SprávaWebu

## Instagram caption

Po WordPressu 7.1 zkontrolujte výšku polí a odstraněné experimentální vlastnosti

Formulářové komponenty WordPressu 7.1 mají výchozí výšku 40 px a některé dřívější vlastnosti již nemají účinek. Vlastní administrační rozhraní je potřeba otestovat vizuálně i funkčně.

Začněte jedním ověřitelným krokem a výsledek zaznamenejte.

✅ Najděte vlastní použití @wordpress/components.
✅ Odstraňte neúčinné experimentální props.
✅ Pořiďte srovnávací snímky.

#Agenda24 #WordPress #SprávaWebu

## Čistý publikační text pro Facebook

Po WordPressu 7.1 zkontrolujte výšku polí a odstraněné experimentální vlastnosti

Formulářové komponenty WordPressu 7.1 mají výchozí výšku 40 px a některé dřívější vlastnosti již nemají účinek. Vlastní administrační rozhraní je potřeba otestovat vizuálně i funkčně.

Začněte jedním ověřitelným krokem a výsledek zaznamenejte.

#Agenda24 #WordPress #SprávaWebu

## Čistý publikační text pro LinkedIn

Po WordPressu 7.1 zkontrolujte výšku polí a odstraněné experimentální vlastnosti

Formulářové komponenty WordPressu 7.1 mají výchozí výšku 40 px a některé dřívější vlastnosti již nemají účinek. Vlastní administrační rozhraní je potřeba otestovat vizuálně i funkčně.

Začněte jedním ověřitelným krokem a výsledek zaznamenejte.

Nástroj: A24 WP Component Regression Checklist. Vývojář odhalí rozbité zarovnání nebo neúčinné vlastnosti dříve, než se dostanou do klientské administrace.

#Agenda24 #WordPress #SprávaWebu

## Čistý publikační text pro Instagram

Po WordPressu 7.1 zkontrolujte výšku polí a odstraněné experimentální vlastnosti

Formulářové komponenty WordPressu 7.1 mají výchozí výšku 40 px a některé dřívější vlastnosti již nemají účinek. Vlastní administrační rozhraní je potřeba otestovat vizuálně i funkčně.

Začněte jedním ověřitelným krokem a výsledek zaznamenejte.

1️⃣ Najděte vlastní použití @wordpress/components.
2️⃣ Odstraňte neúčinné experimentální props.
3️⃣ Pořiďte srovnávací snímky.

#Agenda24 #WordPress #SprávaWebu

## TikTok balíček

**Hook:** Po WordPressu 7.1 zkontrolujte výšku polí a odstraněné experimentální vlastnosti

**Scénář po sekundách:** 0–2 s hook; 2–7 s krátká česká věta; 7–10 s tichá obrazová pointa a CTA.

**Mluvený text:** Formulářové komponenty WordPressu 7.

**Text na obrazovku:** A24 WP Component Regression Checklist

**Storyboard:** Detail problému → jeden ověřený krok → potvrzený stav.

**CTA:** Otevřete celý postup.

**Hashtagy:** #Agenda24 #WordPress #SprávaWebu

**Cover:** Po WordPressu 7.1 zkontrolujte výšku polí a odstraněné experimentální vlastnosti

**Video prompt:** Gemini Flow / Omni, přesně 10 sekund, vertikální 9:16. 0–2 s výrazný vizuální hook s textem „A24 WP Component Regression Checklist“. 2–7 s jeden český hlas řekne: „Formulářové komponenty WordPressu 7.“ 7–10 s bez řeči: jasný stav před/po a CTA „Zjistit postup“. Žádná useknutá věta.

**Volitelný delší scénář:** Volitelný rozvinutý scénář pro Gemini Flow / Omni, jedno výsledné video složené ze 3 navazujících bloků po 10 sekundách. Blok 1: otázka a problém, řeč končí do 7 s. Blok 2: „Najděte vlastní použití @wordpress/components. Odstraňte neúčinné experimentální props.“, řeč končí do 7 s. Blok 3: nástroj A24 WP Component Regression Checklist, krátká věta „Vývojář odhalí rozbité zarovnání nebo neúčinné vlastnosti dříve, než se dostanou do klientské admini“, řeč končí do 7 s. Poslední 3 sekundy každého bloku jsou tiché a nesou obrazovou pointu.

## YouTube Shorts popisek

Formulářové komponenty WordPressu 7.1 mají výchozí výšku 40 px a některé dřívější vlastnosti již nemají účinek. Vlastní administrační rozhraní je potřeba otestovat vizuálně i funkčně. Podívejte se na celý postup. #Agenda24 #WordPress #SprávaWebu

## Text do grafiky

Po WordPressu 7.1 zkontrolujte výšku polí a odstraněné experimentální vlastnosti

A24 WP Component Regression Checklist

## CTA

Vyzkoušejte první krok.

## Alt text

Přehled A24 WP Component Regression Checklist s kroky, stavem a výsledkem.

## Prompt na obrázek

Prémiový vizuál Agenda24, pozadí #030712 a #080B16, akcent #EC0044, originální symbol 24, Martin podle schválených referencí, čistá kompozice, bez žluté, zlaté, oranžové, robotů a levného cyberpunku.

## Reference k obrázku

Použít aktuální manifest značky agenda24; nemíchat prvky jiných projektů.

## Prompt na video

Gemini Flow / Omni, přesně 10 sekund, vertikální 9:16. 0–2 s výrazný vizuální hook s textem „A24 WP Component Regression Checklist“. 2–7 s jeden český hlas řekne: „Formulářové komponenty WordPressu 7.“ 7–10 s bez řeči: jasný stav před/po a CTA „Zjistit postup“. Žádná useknutá věta.

### Rozvinutý scénář

Volitelný rozvinutý scénář pro Gemini Flow / Omni, jedno výsledné video složené ze 3 navazujících bloků po 10 sekundách. Blok 1: otázka a problém, řeč končí do 7 s. Blok 2: „Najděte vlastní použití @wordpress/components. Odstraňte neúčinné experimentální props.“, řeč končí do 7 s. Blok 3: nástroj A24 WP Component Regression Checklist, krátká věta „Vývojář odhalí rozbité zarovnání nebo neúčinné vlastnosti dříve, než se dostanou do klientské admini“, řeč končí do 7 s. Poslední 3 sekundy každého bloku jsou tiché a nesou obrazovou pointu.

## Reference k videu

Gemini Flow / Omni. Hlavní výstup má přesně 10 sekund; česká řeč končí nejpozději v 7. sekundě a poslední tři sekundy jsou tiché.

## Návrh funkce / aplikace / pluginu

**A24 WP Component Regression Checklist** — regresní checker administrace. Vývojář odhalí rozbité zarovnání nebo neúčinné vlastnosti dříve, než se dostanou do klientské administrace.

Funkce: Seznam komponent, použité props, screenshot před/po, ovládání klávesnicí, focus, přetečení textu, mobilní zobrazení, priorita a export.

## MVP verze

Seznam komponent, použité props, screenshot před/po, ovládání klávesnicí, focus, přetečení textu, mobilní zobrazení, priorita a export.

## Detailní Prompt pro Codex k funkci

Vytvoř produkční WordPress/WooCommerce plugin „A24 WP Component Regression Checklist“ pro Agenda24. Funkce: Seznam komponent, použité props, screenshot před/po, ovládání klávesnicí, focus, přetečení textu, mobilní zobrazení, priorita a export. Administrace kompletně česky: role, záznamy, stavy, zdroje, upozornění, exporty a retenční pravidla. Datový model: entity, vztahy, indexy, migrace, verzování a bezpečná odinstalace; WordPress API, CPT, metadata a Options API, vlastní tabulky jen s odůvodněním. Bezpečnost: capability checks, nonce/CSRF, sanitizace, escapování, prepared SQL, rate limiting, bezpečný upload, žádné klíče v klientu, auditní log bez citlivých dat, GDPR minimalizace, export a výmaz. Rozhraní od 320 px, klávesnice, viditelný focus, správné labely, srozumitelná validace, WCAG 2.2 AA. Kompatibilita: aktuální WordPress, PHP 7.4+, blokový i klasický editor, běžné cache pluginy, lokalizace a izolované CSS/JS. Testy: unit, integrační a E2E pro desktop i mobil, oprávnění, CSRF, neplatné vstupy, migrace, export, odinstalace a regrese. Akceptační kritéria: Vývojář odhalí rozbité zarovnání nebo neúčinné vlastnosti dříve, než se dostanou do klientské administrace. Data se neztratí při validaci, export odpovídá zobrazení, log neobsahuje citlivé hodnoty a řešení nemění cizí nastavení. Dodej čistý instalační ZIP, českou uživatelskou a technickou dokumentaci, seznam hooků/API a postup instalace, aktualizace, zálohy a odinstalace. Používej bezpečné API a minimální cílené zásahy. Při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data nebo zablokovat administraci.
