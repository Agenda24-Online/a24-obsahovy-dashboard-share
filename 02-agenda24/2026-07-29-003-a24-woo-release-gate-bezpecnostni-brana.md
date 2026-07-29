---
title: "A24 Woo Release Gate: bezpečnostní brána pro hlavní aktualizace"
date: 2026-07-29
project: "Agenda24"
project_url: "https://agenda24.cz/"
projects: ["Agenda24"]
topic_type: "tip na aplikaci"
usage_type: "blog, sociální sítě, video, nástroj"
priority: "vysoká"
status: "k rozpracování"
blog_potential: "vysoký"
social_potential: "vysoký"
recommended_output: "publikovatelný článek, sociální sada, 10s video a praktický nástroj"
brand: "agenda24"
tags: ["tip na aplikaci", "Aplikace, pluginy a automatizace", "A24 Woo Release Gate"]
source_summary: "WooCommerce Developer Blog – WooCommerce 11.0 release is delayed (28. 7. 2026)"
value_feature_type: "A24 WooCommerce plugin"
value_feature_name: "A24 Woo Release Gate"
value_feature_summary: "Plugin vyhodnocuje připravenost hlavní verze WooCommerce a vytváří auditovatelný protokol bez automatického zásahu do objednávek."
value_feature_benefit: "Agenda24 získá jednotný bezpečný proces aktualizací napříč klientskými e-shopy a správce jasně vidí blokátory."
value_feature_mvp: "oficiální release stav, seznam webů a rozšíření, staging URL, záloha a obnova, pozitivní i negativní testy, blokátory, schvalovací role, údržbové okno, historie a PDF/JSON export"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 Woo Release Gate“ pro projekt Agenda24. Funkce: oficiální release stav, seznam webů a rozšíření, staging URL, záloha a obnova, pozitivní i negativní testy, blokátory, schvalovací role, údržbové okno, historie a PDF/JSON export. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Agenda24 získá jednotný bezpečný proces aktualizací napříč klientskými e-shopy a správce jasně vidí blokátory. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci."
agenda24_area: "Aplikace, pluginy a automatizace"
---

## Shrnutí

A24 Woo Release Gate spojí oficiální stav vydání, kompatibilitu rozšíření, staging testy, zálohu a schválení do jedné bezpečnostní brány před aktualizací WooCommerce.

## Zdroje

- [WooCommerce Developer Blog – WooCommerce 11.0 release is delayed (28. 7. 2026)](https://developer.woocommerce.com/2026/07/28/woocommerce-11-0-delay/)

## Proč je to důležité

Hlavní verze nesmí přejít na produkci jen proto, že je dostupná v administraci. Brána vyžádá konkrétní důkazy a zablokuje automatické doporučení, pokud je vydání odložené nebo kritický test selhal.

## Doporučení

První verzi navrhněte jako read-only kontrolu a schvalovací protokol. Samotné spuštění aktualizace ponechte správci a nikdy neobcházejte zálohu, staging ani údržbové okno.

## SEO titulek

A24 Woo Release Gate: bezpečnostní brána pro hlavní aktualizace | Agenda24

## Meta popis

A24 Woo Release Gate spojí oficiální stav vydání, kompatibilitu rozšíření, staging testy, zálohu a schválení do jedné bezpečnostní brány před aktualizací W

## Perex

A24 Woo Release Gate spojí oficiální stav vydání, kompatibilitu rozšíření, staging testy, zálohu a schválení do jedné bezpečnostní brány před aktualizací WooCommerce. První verzi navrhněte jako read-only kontrolu a schvalovací protokol. Samotné spuštění aktualizace ponechte správci a nikdy neobcházejte zálohu, staging ani údržbové okno.

## Blogový titulek

A24 Woo Release Gate: bezpečnostní brána pro hlavní aktualizace

## Osnova blogu

1. Co se změnilo a co z toho plyne
2. Proč nestačí obecné doporučení
3. Doporučený postup krok za krokem
4. Praktický příklad
5. Jak využít nástroj A24 Woo Release Gate
6. Jak poznat, že postup funguje
7. Závěr a další krok

## Blogový draft

# A24 Woo Release Gate: bezpečnostní brána pro hlavní aktualizace

## Co se změnilo a co z toho plyne

A24 Woo Release Gate spojí oficiální stav vydání, kompatibilitu rozšíření, staging testy, zálohu a schválení do jedné bezpečnostní brány před aktualizací WooCommerce. Téma není jen technická poznámka. Pro servisní tým Agenda24 a správci klientských WooCommerce instalací jde o konkrétní rozhodnutí, které ovlivňuje bezpečnost, použitelnost a důvěru. Základní pravidlo zní: První verzi navrhněte jako read-only kontrolu a schvalovací protokol. Samotné spuštění aktualizace ponechte správci a nikdy neobcházejte zálohu, staging ani údržbové okno.

Oficiální zdroj potvrzuje tři podstatné body. Zaprvé: WooCommerce může změnit plán vydání po nálezu kritické chyby. Zadruhé: RC2 a další validace mají předcházet stabilní verzi. Zatřetí: Bezpečný proces musí oddělit dostupnost balíčku od schválení pro konkrétní web. Tyto body je potřeba číst společně. Samotná nová možnost nebo doporučení nepřináší výsledek, dokud není převedeno do jasného postupu, odpovědnosti a ověřitelné kontroly.

## Proč nestačí obecné doporučení

Hlavní verze nesmí přejít na produkci jen proto, že je dostupná v administraci. Brána vyžádá konkrétní důkazy a zablokuje automatické doporučení, pokud je vydání odložené nebo kritický test selhal. Obecná věta typu „dávejte pozor“ nepomůže ve chvíli, kdy je třeba jednat. Použitelný postup musí říci, co se kontroluje, kdo kontrolu provede, kdy se má zastavit a jak se pozná, že je výsledek v pořádku. Právě proto má smysl spojit obsah s praktickým nástrojem A24 Woo Release Gate.

Nejčastější problémy jsou konkrétní: falešný pocit bezpečí z jednoho globálního skóre; automatická aktualizace bez lidského schválení; a licenční výpadek zasáhne běžný provoz e-shopu. Každý z nich lze zachytit předem, pokud je kontrola krátká, srozumitelná a opakovatelná. Cílem není přidat další administrativu. Cílem je zabránit situaci, kdy se důležitá podmínka řeší až ve chvíli, kdy už vznikl problém.

## Doporučený postup krok za krokem

1. **Načíst stav výhradně z oficiálního zdroje.**
2. **Vést důkazy po jednotlivých webech.**
3. **Oddělit blokátory od informativních varování.**
4. **Vyžadovat explicitní schválení správce.**
5. **Zajistit bezpečný provoz při neaktivní licenci i výpadku serveru.**

Jednotlivé kroky mají být provedeny v uvedeném pořadí. Pokud některý z nich nelze potvrdit, je lepší plán upravit než pokračovat s nejasným rizikem. Výsledek kontroly má zůstat dohledatelný v rozsahu, který je pro dané téma přiměřený; není nutné ukládat citlivé údaje, které k rozhodnutí nejsou potřeba.

## Praktický příklad

Brána u klientského e-shopu ukáže, že stabilní verze ještě nebyla vydána, jedna platební brána nemá potvrzenou kompatibilitu a obnova zálohy nebyla letos testována. Stav zůstane červený. Po vydání stabilní verze a doplnění důkazů správce podepíše protokol a naplánuje údržbové okno.

Příklad ukazuje, že dobré řešení nemusí být složité. Rozhodující je včas zachytit konkrétní nesoulad a nabídnout bezpečnou další volbu. Stejný princip lze opakovat u dalších situací: nejprve popsat očekávaný stav, potom ověřit realitu, zaznamenat rozdíl a určit jediný další krok s vlastníkem.

## Jak využít nástroj A24 Woo Release Gate

Plugin vyhodnocuje připravenost hlavní verze WooCommerce a vytváří auditovatelný protokol bez automatického zásahu do objednávek. Minimální verze zahrnuje: oficiální release stav, seznam webů a rozšíření, staging URL, záloha a obnova, pozitivní i negativní testy, blokátory, schvalovací role, údržbové okno, historie a PDF/JSON export. Nástroj má uživatele vést, nikoli za něj skrývat rozhodnutí. U každého výsledku proto zobrazí zdroj, datum, stav kontroly a srozumitelné vysvětlení.

Při návrhu je důležitá bezpečnost a přístupnost. Rozhraní musí fungovat na telefonu, klávesnicí i s asistivními technologiemi. Data se mají ukládat jen v nezbytném rozsahu, s jasnou dobou uchování a možností exportu nebo výmazu. Automatická oprava nebo rozhodnutí se nesmí spustit tam, kde je potřeba lidské potvrzení.

## Jak poznat, že postup funguje

Úspěch se neměří počtem vyplněných polí, ale výsledkem: každé nasazení má stabilní zdrojovou verzi, čisté kritické testy, ověřenou obnovu a jmenovité schválení správce. První kontrola vytvoří výchozí stav. Druhá ověří, zda se podařilo odstranit riziko a zda nový postup lidé skutečně používají. Pokud měření nevede k rozhodnutí, je příliš obecné.

Praktické je sledovat tři úrovně: úplnost vstupů, počet zachycených problémů předem a skutečnou změnu chování. Díky tomu se z jednorázového článku stane použitelný proces. Téma se má znovu otevřít při změně podmínek, nástroje, trasy, produktu nebo odpovědné osoby.

## Závěr

První verzi navrhněte jako read-only kontrolu a schvalovací protokol. Samotné spuštění aktualizace ponechte správci a nikdy neobcházejte zálohu, staging ani údržbové okno. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tak vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Nechte Agenda24 prověřit konkrétní web a připravit bezpečný přednasazovací postup.

## Blog pro Enfold

<h1>A24 Woo Release Gate: bezpečnostní brána pro hlavní aktualizace</h1>
<p class="perex">A24 Woo Release Gate spojí oficiální stav vydání, kompatibilitu rozšíření, staging testy, zálohu a schválení do jedné bezpečnostní brány před aktualizací WooCommerce.</p>
<h2>Co se změnilo a co z toho plyne</h2>
<p>A24 Woo Release Gate spojí oficiální stav vydání, kompatibilitu rozšíření, staging testy, zálohu a schválení do jedné bezpečnostní brány před aktualizací WooCommerce. Téma není jen technická poznámka. Pro servisní tým Agenda24 a správci klientských WooCommerce instalací jde o konkrétní rozhodnutí, které ovlivňuje bezpečnost, použitelnost a důvěru. Základní pravidlo zní: První verzi navrhněte jako read-only kontrolu a schvalovací protokol. Samotné spuštění aktualizace ponechte správci a nikdy neobcházejte zálohu, staging ani údržbové okno.</p>
<p>Oficiální zdroj potvrzuje tři podstatné body. Zaprvé: WooCommerce může změnit plán vydání po nálezu kritické chyby. Zadruhé: RC2 a další validace mají předcházet stabilní verzi. Zatřetí: Bezpečný proces musí oddělit dostupnost balíčku od schválení pro konkrétní web. Tyto body je potřeba číst společně. Samotná nová možnost nebo doporučení nepřináší výsledek, dokud není převedeno do jasného postupu, odpovědnosti a ověřitelné kontroly.</p>
<h2>Proč nestačí obecné doporučení</h2>
<p>Hlavní verze nesmí přejít na produkci jen proto, že je dostupná v administraci. Brána vyžádá konkrétní důkazy a zablokuje automatické doporučení, pokud je vydání odložené nebo kritický test selhal. Obecná věta typu „dávejte pozor“ nepomůže ve chvíli, kdy je třeba jednat. Použitelný postup musí říci, co se kontroluje, kdo kontrolu provede, kdy se má zastavit a jak se pozná, že je výsledek v pořádku. Právě proto má smysl spojit obsah s praktickým nástrojem A24 Woo Release Gate.</p>
<p>Nejčastější problémy jsou konkrétní: falešný pocit bezpečí z jednoho globálního skóre; automatická aktualizace bez lidského schválení; a licenční výpadek zasáhne běžný provoz e-shopu. Každý z nich lze zachytit předem, pokud je kontrola krátká, srozumitelná a opakovatelná. Cílem není přidat další administrativu. Cílem je zabránit situaci, kdy se důležitá podmínka řeší až ve chvíli, kdy už vznikl problém.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol>
<li><strong>Načíst stav výhradně z oficiálního zdroje.</strong></li>
<li><strong>Vést důkazy po jednotlivých webech.</strong></li>
<li><strong>Oddělit blokátory od informativních varování.</strong></li>
<li><strong>Vyžadovat explicitní schválení správce.</strong></li>
<li><strong>Zajistit bezpečný provoz při neaktivní licenci i výpadku serveru.</strong></li>
</ol>
<p>Jednotlivé kroky mají být provedeny v uvedeném pořadí. Pokud některý z nich nelze potvrdit, je lepší plán upravit než pokračovat s nejasným rizikem. Výsledek kontroly má zůstat dohledatelný v rozsahu, který je pro dané téma přiměřený; není nutné ukládat citlivé údaje, které k rozhodnutí nejsou potřeba.</p>
<h2>Praktický příklad</h2>
<p>Brána u klientského e-shopu ukáže, že stabilní verze ještě nebyla vydána, jedna platební brána nemá potvrzenou kompatibilitu a obnova zálohy nebyla letos testována. Stav zůstane červený. Po vydání stabilní verze a doplnění důkazů správce podepíše protokol a naplánuje údržbové okno.</p>
<p>Příklad ukazuje, že dobré řešení nemusí být složité. Rozhodující je včas zachytit konkrétní nesoulad a nabídnout bezpečnou další volbu. Stejný princip lze opakovat u dalších situací: nejprve popsat očekávaný stav, potom ověřit realitu, zaznamenat rozdíl a určit jediný další krok s vlastníkem.</p>
<h2>Jak využít nástroj A24 Woo Release Gate</h2>
<p>Plugin vyhodnocuje připravenost hlavní verze WooCommerce a vytváří auditovatelný protokol bez automatického zásahu do objednávek. Minimální verze zahrnuje: oficiální release stav, seznam webů a rozšíření, staging URL, záloha a obnova, pozitivní i negativní testy, blokátory, schvalovací role, údržbové okno, historie a PDF/JSON export. Nástroj má uživatele vést, nikoli za něj skrývat rozhodnutí. U každého výsledku proto zobrazí zdroj, datum, stav kontroly a srozumitelné vysvětlení.</p>
<p>Při návrhu je důležitá bezpečnost a přístupnost. Rozhraní musí fungovat na telefonu, klávesnicí i s asistivními technologiemi. Data se mají ukládat jen v nezbytném rozsahu, s jasnou dobou uchování a možností exportu nebo výmazu. Automatická oprava nebo rozhodnutí se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<h2>Jak poznat, že postup funguje</h2>
<p>Úspěch se neměří počtem vyplněných polí, ale výsledkem: každé nasazení má stabilní zdrojovou verzi, čisté kritické testy, ověřenou obnovu a jmenovité schválení správce. První kontrola vytvoří výchozí stav. Druhá ověří, zda se podařilo odstranit riziko a zda nový postup lidé skutečně používají. Pokud měření nevede k rozhodnutí, je příliš obecné.</p>
<p>Praktické je sledovat tři úrovně: úplnost vstupů, počet zachycených problémů předem a skutečnou změnu chování. Díky tomu se z jednorázového článku stane použitelný proces. Téma se má znovu otevřít při změně podmínek, nástroje, trasy, produktu nebo odpovědné osoby.</p>
<h2>Závěr</h2>
<p>První verzi navrhněte jako read-only kontrolu a schvalovací protokol. Samotné spuštění aktualizace ponechte správci a nikdy neobcházejte zálohu, staging ani údržbové okno. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tak vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Nechte Agenda24 prověřit konkrétní web a připravit bezpečný přednasazovací postup.</p>


## Facebook text

A24 Woo Release Gate: bezpečnostní brána pro hlavní aktualizace

A24 Woo Release Gate spojí oficiální stav vydání, kompatibilitu rozšíření, staging testy, zálohu a schválení do jedné bezpečnostní brány před aktualizací WooCommerce.

První verzi navrhněte jako read-only kontrolu a schvalovací protokol. Samotné spuštění aktualizace ponechte správci a nikdy neobcházejte zálohu, staging ani údržbové okno.

Praktická pomůcka: A24 Woo Release Gate. Agenda24 získá jednotný bezpečný proces aktualizací napříč klientskými e-shopy a správce jasně vidí blokátory.

Zjistit více: https://agenda24.cz/

## LinkedIn text

A24 Woo Release Gate: bezpečnostní brána pro hlavní aktualizace

Hlavní verze nesmí přejít na produkci jen proto, že je dostupná v administraci. Brána vyžádá konkrétní důkazy a zablokuje automatické doporučení, pokud je vydání odložené nebo kritický test selhal.

Doporučený první krok: načíst stav výhradně z oficiálního zdroje. Potom vést důkazy po jednotlivých webech a výsledek zapsat tak, aby byl dohledatelný.

A24 Woo Release Gate: Plugin vyhodnocuje připravenost hlavní verze WooCommerce a vytváří auditovatelný protokol bez automatického zásahu do objednávek.

Agenda24 získá jednotný bezpečný proces aktualizací napříč klientskými e-shopy a správce jasně vidí blokátory.

https://agenda24.cz/

## Instagram caption

A24 Woo Release Gate: bezpečnostní brána pro hlavní aktualizace

A24 Woo Release Gate spojí oficiální stav vydání, kompatibilitu rozšíření, staging testy, zálohu a schválení do jedné bezpečnostní brány před aktualizací WooCommerce.

✅ načíst stav výhradně z oficiálního zdroje
✅ vést důkazy po jednotlivých webech
✅ oddělit blokátory od informativních varování

První verzi navrhněte jako read-only kontrolu a schvalovací protokol. Samotné spuštění aktualizace ponechte správci a nikdy neobcházejte zálohu, staging ani údržbové okno.

https://agenda24.cz/

#Agenda24 #praktickytip #A24WooReleaseGate

## Čistý publikační text pro Facebook

A24 Woo Release Gate: bezpečnostní brána pro hlavní aktualizace

A24 Woo Release Gate spojí oficiální stav vydání, kompatibilitu rozšíření, staging testy, zálohu a schválení do jedné bezpečnostní brány před aktualizací WooCommerce.

První verzi navrhněte jako read-only kontrolu a schvalovací protokol. Samotné spuštění aktualizace ponechte správci a nikdy neobcházejte zálohu, staging ani údržbové okno.

Praktická pomůcka: A24 Woo Release Gate. Agenda24 získá jednotný bezpečný proces aktualizací napříč klientskými e-shopy a správce jasně vidí blokátory.

Zjistit více: https://agenda24.cz/

## Čistý publikační text pro LinkedIn

A24 Woo Release Gate: bezpečnostní brána pro hlavní aktualizace

Hlavní verze nesmí přejít na produkci jen proto, že je dostupná v administraci. Brána vyžádá konkrétní důkazy a zablokuje automatické doporučení, pokud je vydání odložené nebo kritický test selhal.

Doporučený první krok: načíst stav výhradně z oficiálního zdroje. Potom vést důkazy po jednotlivých webech a výsledek zapsat tak, aby byl dohledatelný.

A24 Woo Release Gate: Plugin vyhodnocuje připravenost hlavní verze WooCommerce a vytváří auditovatelný protokol bez automatického zásahu do objednávek.

Agenda24 získá jednotný bezpečný proces aktualizací napříč klientskými e-shopy a správce jasně vidí blokátory.

https://agenda24.cz/

## Čistý publikační text pro Instagram

A24 Woo Release Gate: bezpečnostní brána pro hlavní aktualizace

A24 Woo Release Gate spojí oficiální stav vydání, kompatibilitu rozšíření, staging testy, zálohu a schválení do jedné bezpečnostní brány před aktualizací WooCommerce.

✅ načíst stav výhradně z oficiálního zdroje
✅ vést důkazy po jednotlivých webech
✅ oddělit blokátory od informativních varování

První verzi navrhněte jako read-only kontrolu a schvalovací protokol. Samotné spuštění aktualizace ponechte správci a nikdy neobcházejte zálohu, staging ani údržbové okno.

https://agenda24.cz/

#Agenda24 #praktickytip #A24WooReleaseGate

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** A24 Woo Release Gate: bezpečnostní brána pro hlavní aktualizace

**Scénář po sekundách:** 0–2 s výrazný detail a hook; 2–7 s A24 Woo Release Gate spojí oficiální stav vydání, kompatibilitu rozšíření, staging testy, zálohu a schválení do jedné bezpečnostní brány před aktualizací WooCommerce.; 7–10 s A24 Woo Release Gate a CTA.

**Mluvený text:** Nový WordPress mění práci se styly. Zkontrolujte konkrétní blok, mobilní zobrazení a výsledek před nasazením.

**Text na obrazovku:** A24 Woo Release Gate: bezpečnostní brána pro hlavní aktualizace / A24 Woo Release Gate / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte A24 Woo Release Gate.

**Hashtagy:** #Agenda24 #praktickynavod #bezpecnypostup

**Cover:** A24 Woo Release Gate: bezpečnostní brána pro hlavní aktualizace

**Prompt pro Gemini Flow / Omni:** Vytvoř jedno souvislé vertikální video 9:16 o délce přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Nový WordPress mění práci se styly. Zkontrolujte konkrétní blok, mobilní zobrazení a výsledek před nasazením.“ 0–2 s hook, 2–7 s konkrétní situace, 7–10 s vizuální pointa a CTA. Žádné useknuté věty, žádný další dialog, žádné automaticky generované logo ani drobný nečitelný text.

## YouTube Shorts popisek

A24 Woo Release Gate spojí oficiální stav vydání, kompatibilitu rozšíření, staging testy, zálohu a schválení do jedné bezpečnostní brány před aktualizací WooCommerce. První verzi navrhněte jako read-only kontrolu a schvalovací protokol. Samotné spuštění aktualizace ponechte správci a nikdy neobcházejte zálohu, staging ani údržbové okno. Více na https://agenda24.cz/

## Text do grafiky

A24 Woo Release Gate: bezpečnostní brána pro hlavní aktualizace

A24 Woo Release Gate

## CTA

Nechte Agenda24 prověřit konkrétní web.

## Alt text

A24 Woo Release Gate: bezpečnostní brána pro hlavní aktualizace: názorné zobrazení konkrétního postupu a nástroje A24 Woo Release Gate.

## Prompt na obrázek

Realistická profesionální kompozice pro A24 Woo Release Gate: bezpečnostní brána pro hlavní aktualizace. Paleta #030712, #080B16 a #EC0044, tři vrstvy pozadí, přesný tematický motiv, dostatek místa pro českou typografii v postprodukci. Originální symbol 24 a fotografie Martina pouze jako samostatné vrstvy podle manifestu. Bez žluté, zlaté, oranžové, robotů, robotických rukou, kyborgů a levného cyberpunku.

## Reference k obrázku

Použij výhradně manifest značky agenda24 a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden český hlas. Scénář: 0–2 s hook; 2–7 s konkrétní důkaz; 7–10 s řešení A24 Woo Release Gate a CTA. Replika: „Nový WordPress mění práci se styly. Zkontrolujte konkrétní blok, mobilní zobrazení a výsledek před nasazením.“ Věta musí skončit nejpozději v 8. sekundě. Bez useknutí, bez dalšího dialogu, bez generovaných log.

## Reference k videu

Vizuální pravidla čti pouze z manifestu agenda24; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**A24 Woo Release Gate** — Plugin vyhodnocuje připravenost hlavní verze WooCommerce a vytváří auditovatelný protokol bez automatického zásahu do objednávek.

Přínos: Agenda24 získá jednotný bezpečný proces aktualizací napříč klientskými e-shopy a správce jasně vidí blokátory.

## MVP verze

oficiální release stav, seznam webů a rozšíření, staging URL, záloha a obnova, pozitivní i negativní testy, blokátory, schvalovací role, údržbové okno, historie a PDF/JSON export

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 Woo Release Gate“ pro projekt Agenda24. Funkce: oficiální release stav, seznam webů a rozšíření, staging URL, záloha a obnova, pozitivní i negativní testy, blokátory, schvalovací role, údržbové okno, historie a PDF/JSON export. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Agenda24 získá jednotný bezpečný proces aktualizací napříč klientskými e-shopy a správce jasně vidí blokátory. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci.
