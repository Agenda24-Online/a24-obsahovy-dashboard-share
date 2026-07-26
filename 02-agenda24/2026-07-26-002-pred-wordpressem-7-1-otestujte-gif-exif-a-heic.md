---
title: "Před WordPressem 7.1 otestujte GIF, EXIF a HEIC na skutečných zařízeních"
date: "2026-07-26"
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
tags: ["praktický tip", "Správa webu a e-shopu", "A24 Media Upload Matrix"]
source_summary: "Beta 3 opravuje několik konkrétních chyb médií. Regresní test má prověřit dlouhý GIF, otočenou fotografii s EXIF a jeden HEIC upload v Safari na kopii webu, včetně náhledů a metadat. Zdroj ověřen 22. 7. 2026."
value_feature_type: "testovací checklist médií"
value_feature_name: "A24 Media Upload Matrix"
value_feature_summary: "Beta 3 opravuje několik konkrétních chyb médií. Regresní test má prověřit dlouhý GIF, otočenou fotografii s EXIF a jeden HEIC upload v Safari na kopii webu, včetně náhledů a metadat."
value_feature_benefit: "Správce ověří, že upload nevytváří duplicity, nezasekne zpracování a zachová správnou orientaci i odvozené velikosti"
value_feature_mvp: "testovací soubory GIF/HEIC/JPEG, prohlížeč a zařízení, čas uploadu, počet příloh, orientace, náhledy, metadata, log, stav testu a export"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 Media Upload Matrix“ pro Agenda24. Funkce: testovací soubory GIF/HEIC/JPEG, prohlížeč a zařízení, čas uploadu, počet příloh, orientace, náhledy, metadata, log, stav testu a export. Administrace kompletně česky: role, záznamy, stavy, zdroje, upozornění, exporty, retenční pravidla a audit změn. Datový model: entity, vztahy, indexy, migrace, verzování a bezpečná odinstalace; WordPress API, CPT, metadata a Options API, vlastní tabulky jen s odůvodněním. Bezpečnost: capability checks, nonce/CSRF, sanitizace, escapování, prepared SQL, rate limiting, bezpečný upload, žádné klíče v klientu, auditní log bez citlivých dat, GDPR minimalizace, export a výmaz. Responzivita od 320 px; klávesnice, viditelný focus, správné labely, srozumitelná validace a WCAG 2.2 AA. Kompatibilita: aktuální WordPress, PHP 7.4+, blokový i klasický editor, běžné cache pluginy, lokalizace a izolované CSS/JS. Testy: unit, integrační a E2E na desktopu i mobilu, oprávnění, CSRF, neplatné vstupy, migrace, export, odinstalace a regrese. Akceptační kritéria: Správce ověří, že upload nevytváří duplicity, nezasekne zpracování a zachová správnou orientaci i odvozené velikosti; data se neztratí při validaci, export odpovídá zobrazení a log neobsahuje citlivé hodnoty. Dodej čistý instalační ZIP, českou uživatelskou i technickou dokumentaci, seznam hooků/API a postup instalace, aktualizace, zálohy a odinstalace. Používej bezpečné API a minimální cílené zásahy. Při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data nebo zablokovat administraci."
agenda24_area: "Správa webu a e-shopu"
---

## Shrnutí

Beta 3 opravuje několik konkrétních chyb médií. Regresní test má prověřit dlouhý GIF, otočenou fotografii s EXIF a jeden HEIC upload v Safari na kopii webu, včetně náhledů a metadat.

## Zdroje

- [Primární a oficiální zdroj (22. 7. 2026)](https://wordpress.org/news/2026/07/wordpress-7-1-beta-3/)

## Proč je to důležité

U GIFu se měří doba zpracování, vznik náhledů a dostupnost administrace během uploadu. U fotografie se kontroluje orientace originálu i odvozených velikostí. U HEIC se ověřuje, že vznikne právě jedna příloha. Test musí proběhnout na kopii webu s reálnou kombinací pluginů, šablony, cache a PHP. Výsledek z čisté instalace sice pomůže najít konflikt, ale nenahradí kontrolu konkrétního webu.

## Doporučení

Každý neúspěch má obsahovat soubor, zařízení, prohlížeč, kroky a screenshot. Bez těchto údajů se chyba špatně reprodukuje a snadno se zamění s omezením hostingu. Po úspěchu je vhodné uložit matici jako součást provozní dokumentace. Při další změně WordPressu, PHP nebo knihovny médií se použijí stejné vzorky.

## SEO titulek

Před WordPressem 7.1 otestujte GIF, EXIF a HEIC na skutečných zařízeních | Agenda24

## Meta popis

Beta 3 opravuje několik konkrétních chyb médií. Regresní test má prověřit dlouhý GIF, otočenou fotografii s EXIF a jeden HEIC upload v Safari na kopii webu

## Perex

Beta 3 opravuje několik konkrétních chyb médií. Regresní test má prověřit dlouhý GIF, otočenou fotografii s EXIF a jeden HEIC upload v Safari na kopii webu, včetně náhledů a metadat.

## Blogový titulek

Před WordPressem 7.1 otestujte GIF, EXIF a HEIC na skutečných zařízeních

## Osnova blogu

1. Co se změnilo
2. Co z toho plyne
3. Praktický postup
4. Jak výsledek ověřit

## Blogový draft

# Před WordPressem 7.1 otestujte GIF, EXIF a HEIC na skutečných zařízeních

## Co se změnilo

Oznámení WordPressu 7.1 Beta 3 jmenuje tři opravy, které se vyplatí převést do vlastního regresního testu: dlouhý animovaný GIF, fotografie otočená podle EXIF a HEIC upload v Safari.



Nestačí nahrát jeden běžný JPEG. Testovací sada má obsahovat známé soubory s očekávaným výsledkem, aby bylo možné porovnat chování před aktualizací a po ní.

## Co z toho plyne

U GIFu se měří doba zpracování, vznik náhledů a dostupnost administrace během uploadu. U fotografie se kontroluje orientace originálu i odvozených velikostí. U HEIC se ověřuje, že vznikne právě jedna příloha.



Test musí proběhnout na kopii webu s reálnou kombinací pluginů, šablony, cache a PHP. Výsledek z čisté instalace sice pomůže najít konflikt, ale nenahradí kontrolu konkrétního webu.

## Praktický postup

Každý neúspěch má obsahovat soubor, zařízení, prohlížeč, kroky a screenshot. Bez těchto údajů se chyba špatně reprodukuje a snadno se zamění s omezením hostingu.



Po úspěchu je vhodné uložit matici jako součást provozní dokumentace. Při další změně WordPressu, PHP nebo knihovny médií se použijí stejné vzorky.

## Jak výsledek ověřit

Praktický checklist zkrátí hledání příčiny a zabrání tomu, aby se chyba objevila až při nahrávání zákaznických fotografií na ostrém webu.

**CTA:** Ověřte první krok a vyzkoušejte navržený nástroj.

## Blog pro Enfold

<h1>Před WordPressem 7.1 otestujte GIF, EXIF a HEIC na skutečných zařízeních</h1>
<p class="perex">Beta 3 opravuje několik konkrétních chyb médií. Regresní test má prověřit dlouhý GIF, otočenou fotografii s EXIF a jeden HEIC upload v Safari na kopii webu, včetně náhledů a metadat.</p>
<h2>Co se změnilo</h2>
<p>Oznámení WordPressu 7.1 Beta 3 jmenuje tři opravy, které se vyplatí převést do vlastního regresního testu: dlouhý animovaný GIF, fotografie otočená podle EXIF a HEIC upload v Safari.</p><p>Nestačí nahrát jeden běžný JPEG. Testovací sada má obsahovat známé soubory s očekávaným výsledkem, aby bylo možné porovnat chování před aktualizací a po ní.</p>
<h2>Co z toho plyne</h2>
<p>U GIFu se měří doba zpracování, vznik náhledů a dostupnost administrace během uploadu. U fotografie se kontroluje orientace originálu i odvozených velikostí. U HEIC se ověřuje, že vznikne právě jedna příloha.</p><p>Test musí proběhnout na kopii webu s reálnou kombinací pluginů, šablony, cache a PHP. Výsledek z čisté instalace sice pomůže najít konflikt, ale nenahradí kontrolu konkrétního webu.</p>
<h2>Praktický postup</h2>
<p>Každý neúspěch má obsahovat soubor, zařízení, prohlížeč, kroky a screenshot. Bez těchto údajů se chyba špatně reprodukuje a snadno se zamění s omezením hostingu.</p><p>Po úspěchu je vhodné uložit matici jako součást provozní dokumentace. Při další změně WordPressu, PHP nebo knihovny médií se použijí stejné vzorky.</p>
<h2>Jak výsledek ověřit</h2>
<p>Praktický checklist zkrátí hledání příčiny a zabrání tomu, aby se chyba objevila až při nahrávání zákaznických fotografií na ostrém webu.</p>
<p><strong>CTA:</strong> Ověřte první krok a porovnejte nástroje.</p>

## Facebook text

Před WordPressem 7.1 otestujte GIF, EXIF a HEIC na skutečných zařízeních

Beta 3 opravuje několik konkrétních chyb médií. Regresní test má prověřit dlouhý GIF, otočenou fotografii s EXIF a jeden HEIC upload v Safari na kopii webu, včetně náhledů a metadat.

Praktický výstup: A24 Media Upload Matrix. 

## LinkedIn text

Před WordPressem 7.1 otestujte GIF, EXIF a HEIC na skutečných zařízeních

Beta 3 opravuje několik konkrétních chyb médií. Regresní test má prověřit dlouhý GIF, otočenou fotografii s EXIF a jeden HEIC upload v Safari na kopii webu, včetně náhledů a metadat.

Doporučený postup: testovací soubory GIF/HEIC/JPEG, prohlížeč a zařízení, čas uploadu, počet příloh, orientace, náhledy, metadata, log, stav testu a export.

## Instagram caption

Před WordPressem 7.1 otestujte GIF, EXIF a HEIC na skutečných zařízeních

Beta 3 opravuje několik konkrétních chyb médií. Regresní test má prověřit dlouhý GIF, otočenou fotografii s EXIF a jeden HEIC upload v Safari na kopii webu, včetně náhledů a metadat.

Nástroj: A24 Media Upload Matrix

#agenda24 #AI #digitalnidovednosti

## Čistý publikační text pro Facebook

Před WordPressem 7.1 otestujte GIF, EXIF a HEIC na skutečných zařízeních

Beta 3 opravuje několik konkrétních chyb médií. Regresní test má prověřit dlouhý GIF, otočenou fotografii s EXIF a jeden HEIC upload v Safari na kopii webu, včetně náhledů a metadat.

Praktický výstup: A24 Media Upload Matrix. 

## Čistý publikační text pro LinkedIn

Před WordPressem 7.1 otestujte GIF, EXIF a HEIC na skutečných zařízeních

Beta 3 opravuje několik konkrétních chyb médií. Regresní test má prověřit dlouhý GIF, otočenou fotografii s EXIF a jeden HEIC upload v Safari na kopii webu, včetně náhledů a metadat.

Doporučený postup: testovací soubory GIF/HEIC/JPEG, prohlížeč a zařízení, čas uploadu, počet příloh, orientace, náhledy, metadata, log, stav testu a export.

## Čistý publikační text pro Instagram

Před WordPressem 7.1 otestujte GIF, EXIF a HEIC na skutečných zařízeních

Beta 3 opravuje několik konkrétních chyb médií. Regresní test má prověřit dlouhý GIF, otočenou fotografii s EXIF a jeden HEIC upload v Safari na kopii webu, včetně náhledů a metadat.

Nástroj: A24 Media Upload Matrix

#agenda24 #AI #digitalnidovednosti

## TikTok balíček

**Hook:** Nezaměňujte štítek za důkaz původu.

**Délka:** přesně 10 sekund.

**Scénář po sekundách:** 0–2 s problém a titulek; 2–7 s mluvená věta; 7–10 s obrazová pointa a CTA beze slov.

**Mluvený text:** „Nezaměňujte štítek za důkaz původu.“

**Text na obrazovku:** „Před WordPressem 7.1 otestujte GIF, EXIF a HEIC na skutečných zařízeních“ / „A24 Media Upload Matrix“

**Storyboard:** detail problému → konkrétní kontrola → výsledek a CTA.

**CTA:** Otevřete detail a ověřte první krok.

**Hashtagy:** #SpolekAI #AI #Transparentnost

**Cover:** Před WordPressem 7.1 otestujte GIF, EXIF a HEIC na skutečných zařízeních

## YouTube Shorts popisek

Beta 3 opravuje několik konkrétních chyb médií. Regresní test má prověřit dlouhý GIF, otočenou fotografii s EXIF a jeden HEIC upload v Safari na kopii webu, včetně náhledů a metadat. 

## Text do grafiky

Před WordPressem 7.1 otestujte GIF, EXIF a HEIC na skutečných zařízeních

## CTA

Porovnejte transparentnost nástrojů.

## Alt text

Přehled nástroje A24 Media Upload Matrix ukazuje konkrétní kroky k tématu Před WordPressem 7.1 otestujte GIF, EXIF a HEIC na skutečných zařízeních.

## Prompt na obrázek

Prémiový tmavý vizuál Agenda24, #030712, #080B16 a #EC0044, originální symbol 24 a Martin podle uložených referencí; bez žluté, zlaté, oranžové, robotů a levného cyberpunku. Hlavní motiv: Před WordPressem 7.1 otestujte GIF, EXIF a HEIC na skutečných zařízeních. Krátký čitelný nadpis, formát 4:5.

## Reference k obrázku

Použít výhradně brand manifest projektu Agenda24 a v něm uvedené referenční soubory.

## Prompt na video

Gemini Flow / Omni, přesně 10 sekund, čeština. 0–2 s: výrazný detail a titulek „Před WordPressem 7.1 otestujte GIF, EXIF a HEIC na skutečných zařízeních“. 2–7 s: Martin klidně říká „Nezaměňujte štítek za důkaz původu.“ 7–10 s: žádná řeč, obraz A24 Media Upload Matrix a CTA. Žádná věta se nesmí useknout.

## Reference k videu

Gemini Flow / Omni; hlavní výstup přesně 10 s. Volitelný rozvinutý výstup je jedno finální video ze tří navazujících částí po 10 s: 1) otázka a zaujetí, 2) vysvětlení, 3) pointa a CTA. V každé části řeč končí do 7. sekundy a poslední 3 sekundy jsou beze slov; zachovat stejné postavy, prostředí a světlo.

## Návrh funkce / aplikace / pluginu

**A24 Media Upload Matrix** — Beta 3 opravuje několik konkrétních chyb médií. Regresní test má prověřit dlouhý GIF, otočenou fotografii s EXIF a jeden HEIC upload v Safari na kopii webu, včetně náhledů a metadat. Přínos: Správce ověří, že upload nevytváří duplicity, nezasekne zpracování a zachová správnou orientaci i odvozené velikosti.

## MVP verze

testovací soubory GIF/HEIC/JPEG, prohlížeč a zařízení, čas uploadu, počet příloh, orientace, náhledy, metadata, log, stav testu a export.

## Detailní Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 Media Upload Matrix“ pro Agenda24. Funkce: testovací soubory GIF/HEIC/JPEG, prohlížeč a zařízení, čas uploadu, počet příloh, orientace, náhledy, metadata, log, stav testu a export. Administrace kompletně česky: role, záznamy, stavy, zdroje, upozornění, exporty, retenční pravidla a audit změn. Datový model: entity, vztahy, indexy, migrace, verzování a bezpečná odinstalace; WordPress API, CPT, metadata a Options API, vlastní tabulky jen s odůvodněním. Bezpečnost: capability checks, nonce/CSRF, sanitizace, escapování, prepared SQL, rate limiting, bezpečný upload, žádné klíče v klientu, auditní log bez citlivých dat, GDPR minimalizace, export a výmaz. Responzivita od 320 px; klávesnice, viditelný focus, správné labely, srozumitelná validace a WCAG 2.2 AA. Kompatibilita: aktuální WordPress, PHP 7.4+, blokový i klasický editor, běžné cache pluginy, lokalizace a izolované CSS/JS. Testy: unit, integrační a E2E na desktopu i mobilu, oprávnění, CSRF, neplatné vstupy, migrace, export, odinstalace a regrese. Akceptační kritéria: Správce ověří, že upload nevytváří duplicity, nezasekne zpracování a zachová správnou orientaci i odvozené velikosti; data se neztratí při validaci, export odpovídá zobrazení a log neobsahuje citlivé hodnoty. Dodej čistý instalační ZIP, českou uživatelskou i technickou dokumentaci, seznam hooků/API a postup instalace, aktualizace, zálohy a odinstalace. Používej bezpečné API a minimální cílené zásahy. Při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data nebo zablokovat administraci.
