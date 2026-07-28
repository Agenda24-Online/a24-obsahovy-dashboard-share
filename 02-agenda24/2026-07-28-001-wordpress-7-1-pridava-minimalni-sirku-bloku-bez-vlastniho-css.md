---
title: "WordPress 7.1 přidává minimální šířku bloků bez vlastního CSS"
date: 2026-07-28
project: "Agenda24"
project_url: "https://agenda24.cz/"
projects: ["Agenda24"]
topic_type: "novinka"
usage_type: "blog, sociální sítě, video, nástroj"
priority: "vysoká"
status: "k rozpracování"
blog_potential: "vysoký"
social_potential: "vysoký"
recommended_output: "publikovatelný článek, sociální sada, 10s video a praktický nástroj"
brand: "agenda24"
tags: ["novinka", "Weby a e-shopy", "A24 Minimum Width Audit"]
source_summary: "WordPress Core – New block support in WordPress 7.1: minimum width (26. 7. 2026)"
value_feature_type: "WordPress kontrola rozměrů"
value_feature_name: "A24 Minimum Width Audit"
value_feature_summary: "Plugin vyhledá bloky a globální styly s minWidth, ukáže zdroj hodnoty a označí riziko přetečení na běžných šířkách."
value_feature_benefit: "Správce před nasazením uvidí, kde nová minimální šířka pomůže a kde rozbije mobilní rozvržení."
value_feature_mvp: "inventář minWidth v obsahu a theme.json, zdroj hodnoty, breakpointy 320/375/768/1440, náhled, detekce overflow, historie skenů, CSV/JSON export"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 Minimum Width Audit“ pro projekt Agenda24. Funkce: inventář minWidth v obsahu a theme.json, zdroj hodnoty, breakpointy 320/375/768/1440, náhled, detekce overflow, historie skenů, CSV/JSON export. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Správce před nasazením uvidí, kde nová minimální šířka pomůže a kde rozbije mobilní rozvržení. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci."
agenda24_area: "Weby a e-shopy"
---

## Shrnutí

WordPress 7.1 zavádí podporu supports.dimensions.minWidth. Tvůrci bloků a šablon mohou nabídnout minimální šířku přes block.json a theme.json, včetně přednastavených hodnot, bez ručně psaného CSS.

## Zdroje

- [WordPress Core – New block support in WordPress 7.1: minimum width (26. 7. 2026)](https://make.wordpress.org/core/2026/07/26/new-block-support-in-wordpress-7-1-minimum-width/)

## Proč je to důležité

Minimální šířka pomáhá držet použitelné ovládací prvky a karty, ale při necitlivém nastavení může způsobit horizontální posun na mobilu. Novinka proto patří do vývoje i regresního testu.

## Doporučení

Opt-in zapněte jen u bloků, kde umíte popsat očekávané chování. Otestujte vlastní hodnotu, preset, globální styl a přetečení na šířkách 320, 375, 768 a 1440 px.

## SEO titulek

WordPress 7.1 přidává minimální šířku bloků bez vlastního CSS | Agenda24

## Meta popis

WordPress 7.1 zavádí podporu supports.dimensions.minWidth. Tvůrci bloků a šablon mohou nabídnout minimální šířku přes block.json a theme.json, včetně předn

## Perex

WordPress 7.1 zavádí podporu supports.dimensions.minWidth. Tvůrci bloků a šablon mohou nabídnout minimální šířku přes block.json a theme.json, včetně přednastavených hodnot, bez ručně psaného CSS. Opt-in zapněte jen u bloků, kde umíte popsat očekávané chování. Otestujte vlastní hodnotu, preset, globální styl a přetečení na šířkách 320, 375, 768 a 1440 px.

## Blogový titulek

WordPress 7.1 přidává minimální šířku bloků bez vlastního CSS

## Osnova blogu

1. Co se změnilo a co z toho plyne
2. Proč nestačí obecné doporučení
3. Doporučený postup krok za krokem
4. Praktický příklad
5. Jak využít nástroj A24 Minimum Width Audit
6. Jak poznat, že postup funguje
7. Závěr a další krok

## Blogový draft

# WordPress 7.1 přidává minimální šířku bloků bez vlastního CSS

## Co se změnilo a co z toho plyne

WordPress 7.1 zavádí podporu supports.dimensions.minWidth. Tvůrci bloků a šablon mohou nabídnout minimální šířku přes block.json a theme.json, včetně přednastavených hodnot, bez ručně psaného CSS. Téma není jen technická poznámka. Pro správci WordPressu, vývojáři vlastních bloků a majitelé webů jde o konkrétní rozhodnutí, které ovlivňuje bezpečnost, použitelnost a důvěru. Základní pravidlo zní: Opt-in zapněte jen u bloků, kde umíte popsat očekávané chování. Otestujte vlastní hodnotu, preset, globální styl a přetečení na šířkách 320, 375, 768 a 1440 px.

Oficiální zdroj potvrzuje tři podstatné body. Zaprvé: Podpora je opt-in přes supports.dimensions.minWidth v block.json. Zadruhé: Hodnoty mohou používat rozměrové presety z theme.json. Zatřetí: Lokální hodnota bloku přepisuje výchozí hodnotu globálního stylu. Tyto body je potřeba číst společně. Samotná nová možnost nebo doporučení nepřináší výsledek, dokud není převedeno do jasného postupu, odpovědnosti a ověřitelné kontroly.

## Proč nestačí obecné doporučení

Minimální šířka pomáhá držet použitelné ovládací prvky a karty, ale při necitlivém nastavení může způsobit horizontální posun na mobilu. Novinka proto patří do vývoje i regresního testu. Obecná věta typu „dávejte pozor“ nepomůže ve chvíli, kdy je třeba jednat. Použitelný postup musí říci, co se kontroluje, kdo kontrolu provede, kdy se má zastavit a jak se pozná, že je výsledek v pořádku. Právě proto má smysl spojit obsah s praktickým nástrojem A24 Minimum Width Audit.

Nejčastější problémy jsou konkrétní: příliš široké tlačítko nebo karta na malém displeji; nejasný původ hodnoty mezi blokem a globálním stylem; a automatické zapnutí ovládání u bloků, které na něj nejsou připravené. Každý z nich lze zachytit předem, pokud je kontrola krátká, srozumitelná a opakovatelná. Cílem není přidat další administrativu. Cílem je zabránit situaci, kdy se důležitá podmínka řeší až ve chvíli, kdy už vznikl problém.

## Doporučený postup krok za krokem

1. **Zmapovat bloky, které minimální šířku opravdu potřebují.**
2. **Přidat podporu jen do vybraných block.json.**
3. **Nastavit srozumitelné presety v theme.json.**
4. **Otestovat přetečení klávesnicí i dotykem.**
5. **Zapsat výsledek do přednasazovacího protokolu.**

Jednotlivé kroky mají být provedeny v uvedeném pořadí. Pokud některý z nich nelze potvrdit, je lepší plán upravit než pokračovat s nejasným rizikem. Výsledek kontroly má zůstat dohledatelný v rozsahu, který je pro dané téma přiměřený; není nutné ukládat citlivé údaje, které k rozhodnutí nejsou potřeba.

## Praktický příklad

Tým upravuje blok s cenovou kartou. Na desktopu drží tři sloupce, ale na telefonu se mají karty skládat pod sebe. Audit odhalí, že preset 22rem vytváří horizontální posun na 320 px; tým proto použije menší výchozí hodnotu a větší minimum ponechá jen pro široké šablony.

Příklad ukazuje, že dobré řešení nemusí být složité. Rozhodující je včas zachytit konkrétní nesoulad a nabídnout bezpečnou další volbu. Stejný princip lze opakovat u dalších situací: nejprve popsat očekávaný stav, potom ověřit realitu, zaznamenat rozdíl a určit jediný další krok s vlastníkem.

## Jak využít nástroj A24 Minimum Width Audit

Plugin vyhledá bloky a globální styly s minWidth, ukáže zdroj hodnoty a označí riziko přetečení na běžných šířkách. Minimální verze zahrnuje: inventář minWidth v obsahu a theme.json, zdroj hodnoty, breakpointy 320/375/768/1440, náhled, detekce overflow, historie skenů, CSV/JSON export. Nástroj má uživatele vést, nikoli za něj skrývat rozhodnutí. U každého výsledku proto zobrazí zdroj, datum, stav kontroly a srozumitelné vysvětlení.

Při návrhu je důležitá bezpečnost a přístupnost. Rozhraní musí fungovat na telefonu, klávesnicí i s asistivními technologiemi. Data se mají ukládat jen v nezbytném rozsahu, s jasnou dobou uchování a možností exportu nebo výmazu. Automatická oprava nebo rozhodnutí se nesmí spustit tam, kde je potřeba lidské potvrzení.

## Jak poznat, že postup funguje

Úspěch se neměří počtem vyplněných polí, ale výsledkem: nulový horizontální posun na podporovaných šířkách, dohledatelný zdroj každé hodnoty a úspěšný test klávesnicové navigace. První kontrola vytvoří výchozí stav. Druhá ověří, zda se podařilo odstranit riziko a zda nový postup lidé skutečně používají. Pokud měření nevede k rozhodnutí, je příliš obecné.

Praktické je sledovat tři úrovně: úplnost vstupů, počet zachycených problémů předem a skutečnou změnu chování. Díky tomu se z jednorázového článku stane použitelný proces. Téma se má znovu otevřít při změně podmínek, nástroje, trasy, produktu nebo odpovědné osoby.

## Závěr

Opt-in zapněte jen u bloků, kde umíte popsat očekávané chování. Otestujte vlastní hodnotu, preset, globální styl a přetečení na šířkách 320, 375, 768 a 1440 px. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tak vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Nechte Agenda24 prověřit konkrétní web a připravit bezpečný přednasazovací postup.

## Blog pro Enfold

<h1>WordPress 7.1 přidává minimální šířku bloků bez vlastního CSS</h1>
<p class="perex">WordPress 7.1 zavádí podporu supports.dimensions.minWidth. Tvůrci bloků a šablon mohou nabídnout minimální šířku přes block.json a theme.json, včetně přednastavených hodnot, bez ručně psaného CSS.</p>
<h2>Co se změnilo a co z toho plyne</h2>
<p>WordPress 7.1 zavádí podporu supports.dimensions.minWidth. Tvůrci bloků a šablon mohou nabídnout minimální šířku přes block.json a theme.json, včetně přednastavených hodnot, bez ručně psaného CSS. Téma není jen technická poznámka. Pro správci WordPressu, vývojáři vlastních bloků a majitelé webů jde o konkrétní rozhodnutí, které ovlivňuje bezpečnost, použitelnost a důvěru. Základní pravidlo zní: Opt-in zapněte jen u bloků, kde umíte popsat očekávané chování. Otestujte vlastní hodnotu, preset, globální styl a přetečení na šířkách 320, 375, 768 a 1440 px.</p>
<p>Oficiální zdroj potvrzuje tři podstatné body. Zaprvé: Podpora je opt-in přes supports.dimensions.minWidth v block.json. Zadruhé: Hodnoty mohou používat rozměrové presety z theme.json. Zatřetí: Lokální hodnota bloku přepisuje výchozí hodnotu globálního stylu. Tyto body je potřeba číst společně. Samotná nová možnost nebo doporučení nepřináší výsledek, dokud není převedeno do jasného postupu, odpovědnosti a ověřitelné kontroly.</p>
<h2>Proč nestačí obecné doporučení</h2>
<p>Minimální šířka pomáhá držet použitelné ovládací prvky a karty, ale při necitlivém nastavení může způsobit horizontální posun na mobilu. Novinka proto patří do vývoje i regresního testu. Obecná věta typu „dávejte pozor“ nepomůže ve chvíli, kdy je třeba jednat. Použitelný postup musí říci, co se kontroluje, kdo kontrolu provede, kdy se má zastavit a jak se pozná, že je výsledek v pořádku. Právě proto má smysl spojit obsah s praktickým nástrojem A24 Minimum Width Audit.</p>
<p>Nejčastější problémy jsou konkrétní: příliš široké tlačítko nebo karta na malém displeji; nejasný původ hodnoty mezi blokem a globálním stylem; a automatické zapnutí ovládání u bloků, které na něj nejsou připravené. Každý z nich lze zachytit předem, pokud je kontrola krátká, srozumitelná a opakovatelná. Cílem není přidat další administrativu. Cílem je zabránit situaci, kdy se důležitá podmínka řeší až ve chvíli, kdy už vznikl problém.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol>
<li><strong>Zmapovat bloky, které minimální šířku opravdu potřebují.</strong></li>
<li><strong>Přidat podporu jen do vybraných block.json.</strong></li>
<li><strong>Nastavit srozumitelné presety v theme.json.</strong></li>
<li><strong>Otestovat přetečení klávesnicí i dotykem.</strong></li>
<li><strong>Zapsat výsledek do přednasazovacího protokolu.</strong></li>
</ol>
<p>Jednotlivé kroky mají být provedeny v uvedeném pořadí. Pokud některý z nich nelze potvrdit, je lepší plán upravit než pokračovat s nejasným rizikem. Výsledek kontroly má zůstat dohledatelný v rozsahu, který je pro dané téma přiměřený; není nutné ukládat citlivé údaje, které k rozhodnutí nejsou potřeba.</p>
<h2>Praktický příklad</h2>
<p>Tým upravuje blok s cenovou kartou. Na desktopu drží tři sloupce, ale na telefonu se mají karty skládat pod sebe. Audit odhalí, že preset 22rem vytváří horizontální posun na 320 px; tým proto použije menší výchozí hodnotu a větší minimum ponechá jen pro široké šablony.</p>
<p>Příklad ukazuje, že dobré řešení nemusí být složité. Rozhodující je včas zachytit konkrétní nesoulad a nabídnout bezpečnou další volbu. Stejný princip lze opakovat u dalších situací: nejprve popsat očekávaný stav, potom ověřit realitu, zaznamenat rozdíl a určit jediný další krok s vlastníkem.</p>
<h2>Jak využít nástroj A24 Minimum Width Audit</h2>
<p>Plugin vyhledá bloky a globální styly s minWidth, ukáže zdroj hodnoty a označí riziko přetečení na běžných šířkách. Minimální verze zahrnuje: inventář minWidth v obsahu a theme.json, zdroj hodnoty, breakpointy 320/375/768/1440, náhled, detekce overflow, historie skenů, CSV/JSON export. Nástroj má uživatele vést, nikoli za něj skrývat rozhodnutí. U každého výsledku proto zobrazí zdroj, datum, stav kontroly a srozumitelné vysvětlení.</p>
<p>Při návrhu je důležitá bezpečnost a přístupnost. Rozhraní musí fungovat na telefonu, klávesnicí i s asistivními technologiemi. Data se mají ukládat jen v nezbytném rozsahu, s jasnou dobou uchování a možností exportu nebo výmazu. Automatická oprava nebo rozhodnutí se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<h2>Jak poznat, že postup funguje</h2>
<p>Úspěch se neměří počtem vyplněných polí, ale výsledkem: nulový horizontální posun na podporovaných šířkách, dohledatelný zdroj každé hodnoty a úspěšný test klávesnicové navigace. První kontrola vytvoří výchozí stav. Druhá ověří, zda se podařilo odstranit riziko a zda nový postup lidé skutečně používají. Pokud měření nevede k rozhodnutí, je příliš obecné.</p>
<p>Praktické je sledovat tři úrovně: úplnost vstupů, počet zachycených problémů předem a skutečnou změnu chování. Díky tomu se z jednorázového článku stane použitelný proces. Téma se má znovu otevřít při změně podmínek, nástroje, trasy, produktu nebo odpovědné osoby.</p>
<h2>Závěr</h2>
<p>Opt-in zapněte jen u bloků, kde umíte popsat očekávané chování. Otestujte vlastní hodnotu, preset, globální styl a přetečení na šířkách 320, 375, 768 a 1440 px. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tak vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Nechte Agenda24 prověřit konkrétní web a připravit bezpečný přednasazovací postup.</p>


## Facebook text

WordPress 7.1 přidává minimální šířku bloků bez vlastního CSS

WordPress 7.1 zavádí podporu supports.dimensions.minWidth. Tvůrci bloků a šablon mohou nabídnout minimální šířku přes block.json a theme.json, včetně přednastavených hodnot, bez ručně psaného CSS.

Opt-in zapněte jen u bloků, kde umíte popsat očekávané chování. Otestujte vlastní hodnotu, preset, globální styl a přetečení na šířkách 320, 375, 768 a 1440 px.

Praktická pomůcka: A24 Minimum Width Audit. Správce před nasazením uvidí, kde nová minimální šířka pomůže a kde rozbije mobilní rozvržení.

Zjistit více: https://agenda24.cz/

## LinkedIn text

WordPress 7.1 přidává minimální šířku bloků bez vlastního CSS

Minimální šířka pomáhá držet použitelné ovládací prvky a karty, ale při necitlivém nastavení může způsobit horizontální posun na mobilu. Novinka proto patří do vývoje i regresního testu.

Doporučený první krok: zmapovat bloky, které minimální šířku opravdu potřebují. Potom přidat podporu jen do vybraných block.json a výsledek zapsat tak, aby byl dohledatelný.

A24 Minimum Width Audit: Plugin vyhledá bloky a globální styly s minWidth, ukáže zdroj hodnoty a označí riziko přetečení na běžných šířkách.

Správce před nasazením uvidí, kde nová minimální šířka pomůže a kde rozbije mobilní rozvržení.

https://agenda24.cz/

## Instagram caption

WordPress 7.1 přidává minimální šířku bloků bez vlastního CSS

WordPress 7.1 zavádí podporu supports.dimensions.minWidth. Tvůrci bloků a šablon mohou nabídnout minimální šířku přes block.json a theme.json, včetně přednastavených hodnot, bez ručně psaného CSS.

✅ zmapovat bloky, které minimální šířku opravdu potřebují
✅ přidat podporu jen do vybraných block.json
✅ nastavit srozumitelné presety v theme.json

Opt-in zapněte jen u bloků, kde umíte popsat očekávané chování. Otestujte vlastní hodnotu, preset, globální styl a přetečení na šířkách 320, 375, 768 a 1440 px.

https://agenda24.cz/

#Agenda24 #praktickytip #A24MinimumWidthAudit

## Čistý publikační text pro Facebook

WordPress 7.1 přidává minimální šířku bloků bez vlastního CSS

WordPress 7.1 zavádí podporu supports.dimensions.minWidth. Tvůrci bloků a šablon mohou nabídnout minimální šířku přes block.json a theme.json, včetně přednastavených hodnot, bez ručně psaného CSS.

Opt-in zapněte jen u bloků, kde umíte popsat očekávané chování. Otestujte vlastní hodnotu, preset, globální styl a přetečení na šířkách 320, 375, 768 a 1440 px.

Praktická pomůcka: A24 Minimum Width Audit. Správce před nasazením uvidí, kde nová minimální šířka pomůže a kde rozbije mobilní rozvržení.

Zjistit více: https://agenda24.cz/

## Čistý publikační text pro LinkedIn

WordPress 7.1 přidává minimální šířku bloků bez vlastního CSS

Minimální šířka pomáhá držet použitelné ovládací prvky a karty, ale při necitlivém nastavení může způsobit horizontální posun na mobilu. Novinka proto patří do vývoje i regresního testu.

Doporučený první krok: zmapovat bloky, které minimální šířku opravdu potřebují. Potom přidat podporu jen do vybraných block.json a výsledek zapsat tak, aby byl dohledatelný.

A24 Minimum Width Audit: Plugin vyhledá bloky a globální styly s minWidth, ukáže zdroj hodnoty a označí riziko přetečení na běžných šířkách.

Správce před nasazením uvidí, kde nová minimální šířka pomůže a kde rozbije mobilní rozvržení.

https://agenda24.cz/

## Čistý publikační text pro Instagram

WordPress 7.1 přidává minimální šířku bloků bez vlastního CSS

WordPress 7.1 zavádí podporu supports.dimensions.minWidth. Tvůrci bloků a šablon mohou nabídnout minimální šířku přes block.json a theme.json, včetně přednastavených hodnot, bez ručně psaného CSS.

✅ zmapovat bloky, které minimální šířku opravdu potřebují
✅ přidat podporu jen do vybraných block.json
✅ nastavit srozumitelné presety v theme.json

Opt-in zapněte jen u bloků, kde umíte popsat očekávané chování. Otestujte vlastní hodnotu, preset, globální styl a přetečení na šířkách 320, 375, 768 a 1440 px.

https://agenda24.cz/

#Agenda24 #praktickytip #A24MinimumWidthAudit

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** WordPress 7.1 přidává minimální šířku bloků bez vlastního CSS

**Scénář po sekundách:** 0–2 s výrazný detail a hook; 2–7 s WordPress 7.1 zavádí podporu supports.dimensions.minWidth. Tvůrci bloků a šablon mohou nabídnout minimální šířku přes block.json a theme.json, včetně přednastavených hodnot, bez ručně psaného CSS.; 7–10 s A24 Minimum Width Audit a CTA.

**Mluvený text:** Nový WordPress mění práci se styly. Zkontrolujte konkrétní blok, mobilní zobrazení a výsledek před nasazením.

**Text na obrazovku:** WordPress 7.1 přidává minimální šířku bloků bez vlastního CSS / A24 Minimum Width Audit / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte A24 Minimum Width Audit.

**Hashtagy:** #Agenda24 #praktickynavod #bezpecnypostup

**Cover:** WordPress 7.1 přidává minimální šířku bloků bez vlastního CSS

**Prompt pro Gemini Flow / Omni:** Vytvoř jedno souvislé vertikální video 9:16 o délce přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Nový WordPress mění práci se styly. Zkontrolujte konkrétní blok, mobilní zobrazení a výsledek před nasazením.“ 0–2 s hook, 2–7 s konkrétní situace, 7–10 s vizuální pointa a CTA. Žádné useknuté věty, žádný další dialog, žádné automaticky generované logo ani drobný nečitelný text.

## YouTube Shorts popisek

WordPress 7.1 zavádí podporu supports.dimensions.minWidth. Tvůrci bloků a šablon mohou nabídnout minimální šířku přes block.json a theme.json, včetně přednastavených hodnot, bez ručně psaného CSS. Opt-in zapněte jen u bloků, kde umíte popsat očekávané chování. Otestujte vlastní hodnotu, preset, globální styl a přetečení na šířkách 320, 375, 768 a 1440 px. Více na https://agenda24.cz/

## Text do grafiky

WordPress 7.1 přidává minimální šířku bloků bez vlastního CSS

A24 Minimum Width Audit

## CTA

Nechte Agenda24 prověřit konkrétní web.

## Alt text

WordPress 7.1 přidává minimální šířku bloků bez vlastního CSS: názorné zobrazení konkrétního postupu a nástroje A24 Minimum Width Audit.

## Prompt na obrázek

Realistická profesionální kompozice pro WordPress 7.1 přidává minimální šířku bloků bez vlastního CSS. Paleta #030712, #080B16 a #EC0044, tři vrstvy pozadí, přesný tematický motiv, dostatek místa pro českou typografii v postprodukci. Originální symbol 24 a fotografie Martina pouze jako samostatné vrstvy podle manifestu. Bez žluté, zlaté, oranžové, robotů, robotických rukou, kyborgů a levného cyberpunku.

## Reference k obrázku

Použij výhradně manifest značky agenda24 a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden český hlas. Scénář: 0–2 s hook; 2–7 s konkrétní důkaz; 7–10 s řešení A24 Minimum Width Audit a CTA. Replika: „Nový WordPress mění práci se styly. Zkontrolujte konkrétní blok, mobilní zobrazení a výsledek před nasazením.“ Věta musí skončit nejpozději v 8. sekundě. Bez useknutí, bez dalšího dialogu, bez generovaných log.

## Reference k videu

Vizuální pravidla čti pouze z manifestu agenda24; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**A24 Minimum Width Audit** — Plugin vyhledá bloky a globální styly s minWidth, ukáže zdroj hodnoty a označí riziko přetečení na běžných šířkách.

Přínos: Správce před nasazením uvidí, kde nová minimální šířka pomůže a kde rozbije mobilní rozvržení.

## MVP verze

inventář minWidth v obsahu a theme.json, zdroj hodnoty, breakpointy 320/375/768/1440, náhled, detekce overflow, historie skenů, CSV/JSON export

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 Minimum Width Audit“ pro projekt Agenda24. Funkce: inventář minWidth v obsahu a theme.json, zdroj hodnoty, breakpointy 320/375/768/1440, náhled, detekce overflow, historie skenů, CSV/JSON export. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Správce před nasazením uvidí, kde nová minimální šířka pomůže a kde rozbije mobilní rozvržení. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci.
