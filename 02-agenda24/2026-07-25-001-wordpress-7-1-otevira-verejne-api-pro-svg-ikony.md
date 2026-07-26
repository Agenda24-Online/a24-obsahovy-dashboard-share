---
title: "WordPress 7.1 otevírá veřejné API pro SVG ikony"
date: "2026-07-25"
project: "Agenda24"
project_url: "https://agenda24.cz/"
projects: ["Agenda24"]
topic_type: "novinka"
usage_type: ["blog", "Facebook", "LinkedIn", "Instagram", "TikTok", "YouTube Shorts", "nástroj"]
priority: "vysoká"
status: "k rozpracování"
blog_potential: "vysoký"
social_potential: "vysoký"
recommended_output: "publikovatelný článek, sociální sada, 10s Gemini Flow / Omni video a návrh nástroje"
brand: "agenda24"
tags: ["novinka", "Aplikace, pluginy a automatizace", "A24 Icon API Audit"]
source_summary: "WordPress 7.1 zpřístupní veřejné API pro registraci a vykreslování SVG ikon. Vývojáři mohou přidat vlastní kolekce, použít editorový výběr, PHP funkci wp_get_icon() i REST API. Zdroj ověřen: 24. 7. 2026."
value_feature_type: "audit ikon"
value_feature_name: "A24 Icon API Audit"
value_feature_summary: "WordPress 7.1 zpřístupní veřejné API pro registraci a vykreslování SVG ikon. Vývojáři mohou přidat vlastní kolekce, použít editorový výběr, PHP funkci wp_get_icon() i REST API."
value_feature_benefit: "Správce uvidí zdroj, kolekci, použití a dostupnost každé ikony a odhalí konflikty před nasazením"
value_feature_mvp: "sken registrací ikon, názvy kolekcí, nalezená použití, kontrola konfliktů, REST test, wp_get_icon test, report a export"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 Icon API Audit“ pro Agenda24. Funkce: sken registrací ikon, názvy kolekcí, nalezená použití, kontrola konfliktů, REST test, wp_get_icon test, report a export. Administrace kompletně česky: role, záznamy, stavy, zdroje, upozornění, exporty, retenční pravidla a audit změn. Datový model: entity, vztahy, indexy, migrace, verzování a bezpečná odinstalace; používej WordPress API, CPT, metadata a Options API, vlastní tabulky jen s odůvodněním. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace, escapování, prepared SQL, rate limiting, bezpečný upload, žádné klíče v klientu, auditní log bez citlivých dat, GDPR minimalizace, export a výmaz. Responzivita od 320 px; ovládání klávesnicí, viditelný focus, správné labely, srozumitelná validace a WCAG 2.2 AA. Kompatibilita: aktuální WordPress, PHP 7.4+, blokový i klasický editor, běžné cache pluginy, lokalizace a izolované CSS/JS. Testy: unit, integrační a E2E na desktopu i mobilu, oprávnění, CSRF, neplatné vstupy, migrace, export, odinstalace a regrese. Akceptační kritéria: Správce uvidí zdroj, kolekci, použití a dostupnost každé ikony a odhalí konflikty před nasazením; data se neztratí při validaci, export odpovídá zobrazení, log neobsahuje citlivé hodnoty a aplikace nemění cizí nastavení. Dodej čistý instalační ZIP, českou uživatelskou i technickou dokumentaci, seznam hooků/API a postup instalace, aktualizace, zálohy a odinstalace. Používej bezpečné API a minimální cílené zásahy. Při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data nebo zablokovat administraci."
agenda24_area: "Aplikace, pluginy a automatizace"
---

## Shrnutí

WordPress 7.1 zpřístupní veřejné API pro registraci a vykreslování SVG ikon. Vývojáři mohou přidat vlastní kolekce, použít editorový výběr, PHP funkci wp_get_icon() i REST API.

## Zdroje

- [Primární zdroj (24. 7. 2026)](https://make.wordpress.org/core/2026/07/24/registering-and-rendering-svg-icons-in-wordpress-7-1/)

## Proč je to důležité

Před nasazením je vhodné sepsat všechna místa, kde plugin ikony používá, zkontrolovat sanitizaci SVG a ověřit chování při chybějící ikoně. Dekorativní ikony nemají dostat falešný textový popis, ovládací prvky naopak potřebují srozumitelný přístupný název. Agenda24 může novinku využít k vytvoření společného registru ikon napříč vlastními pluginy. Výsledkem bude konzistentnější administrace a snazší údržba po aktualizacích WordPressu.

## Doporučení

Bezpečné zavedení začíná na testovacím webu. Zkontroluje se registrace, výpis v editoru, serverové vykreslení, REST odpověď, konflikty názvů a kompatibilita s cache.

## SEO titulek

WordPress 7.1 otevírá veřejné API pro SVG ikony | Agenda24

## Meta popis

WordPress 7.1 zpřístupní veřejné API pro registraci a vykreslování SVG ikon. Vývojáři mohou přidat vlastní kolekce, použít editorový výběr, PHP funkci wp_g

## Perex

WordPress 7.1 zpřístupní veřejné API pro registraci a vykreslování SVG ikon. Vývojáři mohou přidat vlastní kolekce, použít editorový výběr, PHP funkci wp_get_icon() i REST API.

## Blogový titulek

WordPress 7.1 otevírá veřejné API pro SVG ikony

## Osnova blogu

1. Co se změnilo
2. Co z toho plyne
3. Praktický postup
4. Jak výsledek ověřit

## Blogový draft

# WordPress 7.1 otevírá veřejné API pro SVG ikony

## Co se změnilo

WordPress 7.1 mění práci s ikonami z interní možnosti na veřejné rozhraní. Nové API umožní registrovat celé kolekce i jednotlivé SVG ikony a používat je jednotně v editoru, PHP i přes REST.



Pro vývojáře pluginů to znamená méně vlastních implementací a menší riziko rozdílného vzhledu. Názvy kolekcí však musí být jedinečné, jinak se mohou potkat s ikonami jiného rozšíření.

## Co z toho plyne

Před nasazením je vhodné sepsat všechna místa, kde plugin ikony používá, zkontrolovat sanitizaci SVG a ověřit chování při chybějící ikoně. Dekorativní ikony nemají dostat falešný textový popis, ovládací prvky naopak potřebují srozumitelný přístupný název.



Agenda24 může novinku využít k vytvoření společného registru ikon napříč vlastními pluginy. Výsledkem bude konzistentnější administrace a snazší údržba po aktualizacích WordPressu.

## Praktický postup

Bezpečné zavedení začíná na testovacím webu. Zkontroluje se registrace, výpis v editoru, serverové vykreslení, REST odpověď, konflikty názvů a kompatibilita s cache.

## Jak výsledek ověřit

Nejde jen o vzhled. Jednotné API zmenšuje počet vlastních skriptů, zpřehledňuje odpovědnost a dovoluje automaticky hlídat regresní chyby.

**CTA:** Ověřte první krok a vyzkoušejte navržený nástroj.

## Blog pro Enfold

<h1>WordPress 7.1 otevírá veřejné API pro SVG ikony</h1>
<p class="perex">WordPress 7.1 zpřístupní veřejné API pro registraci a vykreslování SVG ikon. Vývojáři mohou přidat vlastní kolekce, použít editorový výběr, PHP funkci wp_get_icon() i REST API.</p>
<h2>Co se změnilo</h2>
<p>WordPress 7.1 mění práci s ikonami z interní možnosti na veřejné rozhraní. Nové API umožní registrovat celé kolekce i jednotlivé SVG ikony a používat je jednotně v editoru, PHP i přes REST.</p>
<p>Pro vývojáře pluginů to znamená méně vlastních implementací a menší riziko rozdílného vzhledu. Názvy kolekcí však musí být jedinečné, jinak se mohou potkat s ikonami jiného rozšíření.</p>
<h2>Co z toho plyne</h2>
<p>Před nasazením je vhodné sepsat všechna místa, kde plugin ikony používá, zkontrolovat sanitizaci SVG a ověřit chování při chybějící ikoně. Dekorativní ikony nemají dostat falešný textový popis, ovládací prvky naopak potřebují srozumitelný přístupný název.</p>
<p>Agenda24 může novinku využít k vytvoření společného registru ikon napříč vlastními pluginy. Výsledkem bude konzistentnější administrace a snazší údržba po aktualizacích WordPressu.</p>
<h2>Praktický postup</h2>
<p>Bezpečné zavedení začíná na testovacím webu. Zkontroluje se registrace, výpis v editoru, serverové vykreslení, REST odpověď, konflikty názvů a kompatibilita s cache.</p>
<h2>Jak výsledek ověřit</h2>
<p>Nejde jen o vzhled. Jednotné API zmenšuje počet vlastních skriptů, zpřehledňuje odpovědnost a dovoluje automaticky hlídat regresní chyby.</p>
<p><strong>CTA:</strong> Prohlédněte si nástroj a ověřte první krok.</p>

## Facebook text

WordPress 7.1 otevírá veřejné API pro SVG ikony

WordPress 7.1 zpřístupní veřejné API pro registraci a vykreslování SVG ikon. Vývojáři mohou přidat vlastní kolekce, použít editorový výběr, PHP funkci wp_get_icon() i REST API.

Praktický výstup: A24 Icon API Audit. Podívejte se, jak převést novinku do konkrétního kroku.

## LinkedIn text

WordPress 7.1 otevírá veřejné API pro SVG ikony

WordPress 7.1 zpřístupní veřejné API pro registraci a vykreslování SVG ikon. Vývojáři mohou přidat vlastní kolekce, použít editorový výběr, PHP funkci wp_get_icon() i REST API.

Nejdůležitější není samotná novinka, ale opakovatelný postup: sken registrací ikon, názvy kolekcí, nalezená použití, kontrola konfliktů, REST test, wp_get_icon test, report a export.

## Instagram caption

WordPress 7.1 otevírá veřejné API pro SVG ikony

WordPress 7.1 zpřístupní veřejné API pro registraci a vykreslování SVG ikon. Vývojáři mohou přidat vlastní kolekce, použít editorový výběr, PHP funkci wp_get_icon() i REST API.

Nástroj: A24 Icon API Audit

#agenda24 #digitalnidovednosti #praktickytip

## Čistý publikační text pro Facebook

WordPress 7.1 otevírá veřejné API pro SVG ikony

WordPress 7.1 zpřístupní veřejné API pro registraci a vykreslování SVG ikon. Vývojáři mohou přidat vlastní kolekce, použít editorový výběr, PHP funkci wp_get_icon() i REST API.

Praktický výstup: A24 Icon API Audit. Podívejte se, jak převést novinku do konkrétního kroku.

## Čistý publikační text pro LinkedIn

WordPress 7.1 otevírá veřejné API pro SVG ikony

WordPress 7.1 zpřístupní veřejné API pro registraci a vykreslování SVG ikon. Vývojáři mohou přidat vlastní kolekce, použít editorový výběr, PHP funkci wp_get_icon() i REST API.

Nejdůležitější není samotná novinka, ale opakovatelný postup: sken registrací ikon, názvy kolekcí, nalezená použití, kontrola konfliktů, REST test, wp_get_icon test, report a export.

## Čistý publikační text pro Instagram

WordPress 7.1 otevírá veřejné API pro SVG ikony

WordPress 7.1 zpřístupní veřejné API pro registraci a vykreslování SVG ikon. Vývojáři mohou přidat vlastní kolekce, použít editorový výběr, PHP funkci wp_get_icon() i REST API.

Nástroj: A24 Icon API Audit

#agenda24 #digitalnidovednosti #praktickytip

## TikTok balíček

**Hook:** Jedna změna. Jeden jasný test. Žádné dohady.

**Délka:** přesně 10 sekund.

**Scénář po sekundách:** 0–2 s titulek; 2–7 s mluvená věta; 7–10 s obrazová pointa a CTA bez řeči.

**Mluvený text:** „Jedna změna. Jeden jasný test. Žádné dohady.“

**Text na obrazovku:** „WordPress 7.1 otevírá veřejné API pro SVG ikony“ / „A24 Icon API Audit“

**Storyboard:** detail problému → krátké vysvětlení → výsledek a CTA.

**CTA:** Otevřete detail a ověřte první krok.

**Hashtagy:** #agenda24 #DigitalniNastroje

**Cover:** WordPress 7.1 otevírá veřejné API pro SVG ikony

## YouTube Shorts popisek

WordPress 7.1 zpřístupní veřejné API pro registraci a vykreslování SVG ikon. Vývojáři mohou přidat vlastní kolekce, použít editorový výběr, PHP funkci wp_get_icon() i REST API. 

## Text do grafiky

WordPress 7.1 otevírá veřejné API pro SVG ikony

## CTA

Vyzkoušejte konkrétní kontrolu.

## Alt text

Přehled nástroje A24 Icon API Audit ukazuje konkrétní kontrolní kroky k tématu WordPress 7.1 otevírá veřejné API pro SVG ikony.

## Prompt na obrázek

Prémiový tmavý vizuál Agenda24, #030712, #080B16, #EC0044, originální symbol 24 a Martin podle uložených referencí; bez žluté, zlaté, oranžové, robotů a levného cyberpunku. Hlavní motiv: WordPress 7.1 otevírá veřejné API pro SVG ikony. Textová plocha pouze pro krátký nadpis, vysoká čitelnost, formát 4:5.

## Reference k obrázku

Použít výhradně brand manifest projektu Agenda24 a v něm uvedené referenční soubory.

## Prompt na video

Gemini Flow / Omni, přesně 10 sekund, čeština. 0–2 s: výrazný detail a text „WordPress 7.1 otevírá veřejné API pro SVG ikony“. 2–7 s: Martin klidně říká „Jedna změna. Jeden jasný test. Žádné dohady.“ 7–10 s: beze slov, obraz A24 Icon API Audit a CTA. Žádná řeč po 7. sekundě, žádné useknutí.

## Reference k videu

Gemini Flow / Omni; hlavní výstup přesně 10 s. Výsledné video 30 sekund složené ze tří navazujících klipů Gemini Flow / Omni po 10 sekundách. Část 1: problém a hook, řeč jen 0–7 s. Část 2: konkrétní postup sken registrací ikon, názvy kolekcí, nalezená použití, kontrola konfliktů, REST test, wp_get_icon test, report a export, řeč jen 0–7 s. Část 3: výsledek Správce uvidí zdroj, kolekci, použití a dostupnost každé ikony a odhalí konflikty před nasazením a CTA, řeč jen 0–7 s. Zachovat stejné postavy, prostředí, barvy a směr světla; poslední tři sekundy každé části bez řeči.

## Návrh funkce / aplikace / pluginu

**A24 Icon API Audit** — WordPress 7.1 zpřístupní veřejné API pro registraci a vykreslování SVG ikon. Vývojáři mohou přidat vlastní kolekce, použít editorový výběr, PHP funkci wp_get_icon() i REST API. Přínos: Správce uvidí zdroj, kolekci, použití a dostupnost každé ikony a odhalí konflikty před nasazením.

## MVP verze

sken registrací ikon, názvy kolekcí, nalezená použití, kontrola konfliktů, REST test, wp_get_icon test, report a export.

## Detailní Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 Icon API Audit“ pro Agenda24. Funkce: sken registrací ikon, názvy kolekcí, nalezená použití, kontrola konfliktů, REST test, wp_get_icon test, report a export. Administrace kompletně česky: role, záznamy, stavy, zdroje, upozornění, exporty, retenční pravidla a audit změn. Datový model: entity, vztahy, indexy, migrace, verzování a bezpečná odinstalace; používej WordPress API, CPT, metadata a Options API, vlastní tabulky jen s odůvodněním. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace, escapování, prepared SQL, rate limiting, bezpečný upload, žádné klíče v klientu, auditní log bez citlivých dat, GDPR minimalizace, export a výmaz. Responzivita od 320 px; ovládání klávesnicí, viditelný focus, správné labely, srozumitelná validace a WCAG 2.2 AA. Kompatibilita: aktuální WordPress, PHP 7.4+, blokový i klasický editor, běžné cache pluginy, lokalizace a izolované CSS/JS. Testy: unit, integrační a E2E na desktopu i mobilu, oprávnění, CSRF, neplatné vstupy, migrace, export, odinstalace a regrese. Akceptační kritéria: Správce uvidí zdroj, kolekci, použití a dostupnost každé ikony a odhalí konflikty před nasazením; data se neztratí při validaci, export odpovídá zobrazení, log neobsahuje citlivé hodnoty a aplikace nemění cizí nastavení. Dodej čistý instalační ZIP, českou uživatelskou i technickou dokumentaci, seznam hooků/API a postup instalace, aktualizace, zálohy a odinstalace. Používej bezpečné API a minimální cílené zásahy. Při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data nebo zablokovat administraci.
