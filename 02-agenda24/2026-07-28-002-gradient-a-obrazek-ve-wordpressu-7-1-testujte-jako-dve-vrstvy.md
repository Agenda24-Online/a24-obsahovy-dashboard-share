---
title: "Gradient a obrázek ve WordPressu 7.1 testujte jako dvě samostatné vrstvy"
date: 2026-07-28
project: "Agenda24"
project_url: "https://agenda24.cz/"
projects: ["Agenda24"]
topic_type: "praktický tip"
usage_type: "blog, sociální sítě, video, nástroj"
priority: "vysoká"
status: "k rozpracování"
blog_potential: "vysoký"
social_potential: "vysoký"
recommended_output: "publikovatelný článek, sociální sada, 10s video a praktický nástroj"
brand: "agenda24"
tags: ["praktický tip", "Správa webu a e-shopu", "A24 Background Layer Check"]
source_summary: "WordPress Core – New block support in WordPress 7.1: background gradient (26. 7. 2026)"
value_feature_type: "vizuální regresní checklist"
value_feature_name: "A24 Background Layer Check"
value_feature_summary: "Kontrolní nástroj porovná gradient, obrázek, výsledné CSS a kontrast textu v editoru i na frontendu."
value_feature_benefit: "Redakce zachytí zakrytý motiv, slabý kontrast nebo rozdíl mezi editorem a webem ještě před publikací."
value_feature_mvp: "výběr stránky a bloku, snímek editor/frontend, čtení background-image, kontrola pořadí vrstev, kontrast WCAG, mobilní náhled, stav kontroly a PDF report"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 Background Layer Check“ pro projekt Agenda24. Funkce: výběr stránky a bloku, snímek editor/frontend, čtení background-image, kontrola pořadí vrstev, kontrast WCAG, mobilní náhled, stav kontroly a PDF report. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Redakce zachytí zakrytý motiv, slabý kontrast nebo rozdíl mezi editorem a webem ještě před publikací. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci."
agenda24_area: "Správa webu a e-shopu"
---

## Shrnutí

WordPress 7.1 umí kombinovat gradient a obrázek pozadí bez přepsání jedné vrstvy druhou. Praktický test má ověřit kontrast, pořadí vrstev, ořez obrázku a chování v editoru i na webu.

## Zdroje

- [WordPress Core – New block support in WordPress 7.1: background gradient (26. 7. 2026)](https://make.wordpress.org/core/2026/07/26/new-block-support-in-wordpress-7-1-background-gradient-background-gradient/)

## Proč je to důležité

Nová podpora odstraňuje část vlastního CSS, ale gradient se skládá před obrázek a WordPress zatím nenabízí ovládání pořadí. Špatná kombinace může zakrýt motiv nebo snížit čitelnost textu.

## Doporučení

Před publikací porovnejte editor a frontend, světlou i tmavou variantu, mobilní ořez a kontrast textu. Nepoužívejte zkratku background, která může ostatní vrstvy resetovat.

## SEO titulek

Gradient a obrázek ve WordPressu 7.1 testujte jako dvě samostatné vrstvy | Agenda24

## Meta popis

WordPress 7.1 umí kombinovat gradient a obrázek pozadí bez přepsání jedné vrstvy druhou. Praktický test má ověřit kontrast, pořadí vrstev, ořez obrázku a c

## Perex

WordPress 7.1 umí kombinovat gradient a obrázek pozadí bez přepsání jedné vrstvy druhou. Praktický test má ověřit kontrast, pořadí vrstev, ořez obrázku a chování v editoru i na webu. Před publikací porovnejte editor a frontend, světlou i tmavou variantu, mobilní ořez a kontrast textu. Nepoužívejte zkratku background, která může ostatní vrstvy resetovat.

## Blogový titulek

Gradient a obrázek ve WordPressu 7.1 testujte jako dvě samostatné vrstvy

## Osnova blogu

1. Co se změnilo a co z toho plyne
2. Proč nestačí obecné doporučení
3. Doporučený postup krok za krokem
4. Praktický příklad
5. Jak využít nástroj A24 Background Layer Check
6. Jak poznat, že postup funguje
7. Závěr a další krok

## Blogový draft

# Gradient a obrázek ve WordPressu 7.1 testujte jako dvě samostatné vrstvy

## Co se změnilo a co z toho plyne

WordPress 7.1 umí kombinovat gradient a obrázek pozadí bez přepsání jedné vrstvy druhou. Praktický test má ověřit kontrast, pořadí vrstev, ořez obrázku a chování v editoru i na webu. Téma není jen technická poznámka. Pro redakce, správci webů a tvůrci blokových šablon jde o konkrétní rozhodnutí, které ovlivňuje bezpečnost, použitelnost a důvěru. Základní pravidlo zní: Před publikací porovnejte editor a frontend, světlou i tmavou variantu, mobilní ořez a kontrast textu. Nepoužívejte zkratku background, která může ostatní vrstvy resetovat.

Oficiální zdroj potvrzuje tři podstatné body. Zaprvé: WordPress skládá gradient a URL obrázku do jedné hodnoty background-image oddělené čárkou. Zadruhé: Gradient je v aktuální implementaci uveden před obrázkem. Zatřetí: Podpora je aditivní a blok ji musí výslovně povolit. Tyto body je potřeba číst společně. Samotná nová možnost nebo doporučení nepřináší výsledek, dokud není převedeno do jasného postupu, odpovědnosti a ověřitelné kontroly.

## Proč nestačí obecné doporučení

Nová podpora odstraňuje část vlastního CSS, ale gradient se skládá před obrázek a WordPress zatím nenabízí ovládání pořadí. Špatná kombinace může zakrýt motiv nebo snížit čitelnost textu. Obecná věta typu „dávejte pozor“ nepomůže ve chvíli, kdy je třeba jednat. Použitelný postup musí říci, co se kontroluje, kdo kontrolu provede, kdy se má zastavit a jak se pozná, že je výsledek v pořádku. Právě proto má smysl spojit obsah s praktickým nástrojem A24 Background Layer Check.

Nejčastější problémy jsou konkrétní: gradient překryje důležitou část fotografie; text splní kontrast v editoru, ale ne na frontendu; a vlastní CSS se zkratkou background nechtěně zahodí jednu vrstvu. Každý z nich lze zachytit předem, pokud je kontrola krátká, srozumitelná a opakovatelná. Cílem není přidat další administrativu. Cílem je zabránit situaci, kdy se důležitá podmínka řeší až ve chvíli, kdy už vznikl problém.

## Doporučený postup krok za krokem

1. **Vybrat tři reprezentativní bloky s pozadím.**
2. **Zapsat očekávané pořadí vrstev.**
3. **Otestovat kontrast textu a CTA.**
4. **Porovnat mobilní a desktopový ořez.**
5. **Uložit snímek a výsledek do protokolu.**

Jednotlivé kroky mají být provedeny v uvedeném pořadí. Pokud některý z nich nelze potvrdit, je lepší plán upravit než pokračovat s nejasným rizikem. Výsledek kontroly má zůstat dohledatelný v rozsahu, který je pro dané téma přiměřený; není nutné ukládat citlivé údaje, které k rozhodnutí nejsou potřeba.

## Praktický příklad

Hero sekce používá tmavý gradient přes fotografii. Po přechodu na nativní podporu tým zjistí, že původní vlastní CSS stále zapisuje background a na jedné šabloně maže obrázek. Odstraní konflikt, nastaví gradient v block.json a ověří kontrast titulku i tlačítka.

Příklad ukazuje, že dobré řešení nemusí být složité. Rozhodující je včas zachytit konkrétní nesoulad a nabídnout bezpečnou další volbu. Stejný princip lze opakovat u dalších situací: nejprve popsat očekávaný stav, potom ověřit realitu, zaznamenat rozdíl a určit jediný další krok s vlastníkem.

## Jak využít nástroj A24 Background Layer Check

Kontrolní nástroj porovná gradient, obrázek, výsledné CSS a kontrast textu v editoru i na frontendu. Minimální verze zahrnuje: výběr stránky a bloku, snímek editor/frontend, čtení background-image, kontrola pořadí vrstev, kontrast WCAG, mobilní náhled, stav kontroly a PDF report. Nástroj má uživatele vést, nikoli za něj skrývat rozhodnutí. U každého výsledku proto zobrazí zdroj, datum, stav kontroly a srozumitelné vysvětlení.

Při návrhu je důležitá bezpečnost a přístupnost. Rozhraní musí fungovat na telefonu, klávesnicí i s asistivními technologiemi. Data se mají ukládat jen v nezbytném rozsahu, s jasnou dobou uchování a možností exportu nebo výmazu. Automatická oprava nebo rozhodnutí se nesmí spustit tam, kde je potřeba lidské potvrzení.

## Jak poznat, že postup funguje

Úspěch se neměří počtem vyplněných polí, ale výsledkem: shodný vzhled editoru a frontendu, kontrast nejméně WCAG AA a žádná ztracená vrstva v podporovaných šablonách. První kontrola vytvoří výchozí stav. Druhá ověří, zda se podařilo odstranit riziko a zda nový postup lidé skutečně používají. Pokud měření nevede k rozhodnutí, je příliš obecné.

Praktické je sledovat tři úrovně: úplnost vstupů, počet zachycených problémů předem a skutečnou změnu chování. Díky tomu se z jednorázového článku stane použitelný proces. Téma se má znovu otevřít při změně podmínek, nástroje, trasy, produktu nebo odpovědné osoby.

## Závěr

Před publikací porovnejte editor a frontend, světlou i tmavou variantu, mobilní ořez a kontrast textu. Nepoužívejte zkratku background, která může ostatní vrstvy resetovat. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tak vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Nechte Agenda24 prověřit konkrétní web a připravit bezpečný přednasazovací postup.

## Blog pro Enfold

<h1>Gradient a obrázek ve WordPressu 7.1 testujte jako dvě samostatné vrstvy</h1>
<p class="perex">WordPress 7.1 umí kombinovat gradient a obrázek pozadí bez přepsání jedné vrstvy druhou. Praktický test má ověřit kontrast, pořadí vrstev, ořez obrázku a chování v editoru i na webu.</p>
<h2>Co se změnilo a co z toho plyne</h2>
<p>WordPress 7.1 umí kombinovat gradient a obrázek pozadí bez přepsání jedné vrstvy druhou. Praktický test má ověřit kontrast, pořadí vrstev, ořez obrázku a chování v editoru i na webu. Téma není jen technická poznámka. Pro redakce, správci webů a tvůrci blokových šablon jde o konkrétní rozhodnutí, které ovlivňuje bezpečnost, použitelnost a důvěru. Základní pravidlo zní: Před publikací porovnejte editor a frontend, světlou i tmavou variantu, mobilní ořez a kontrast textu. Nepoužívejte zkratku background, která může ostatní vrstvy resetovat.</p>
<p>Oficiální zdroj potvrzuje tři podstatné body. Zaprvé: WordPress skládá gradient a URL obrázku do jedné hodnoty background-image oddělené čárkou. Zadruhé: Gradient je v aktuální implementaci uveden před obrázkem. Zatřetí: Podpora je aditivní a blok ji musí výslovně povolit. Tyto body je potřeba číst společně. Samotná nová možnost nebo doporučení nepřináší výsledek, dokud není převedeno do jasného postupu, odpovědnosti a ověřitelné kontroly.</p>
<h2>Proč nestačí obecné doporučení</h2>
<p>Nová podpora odstraňuje část vlastního CSS, ale gradient se skládá před obrázek a WordPress zatím nenabízí ovládání pořadí. Špatná kombinace může zakrýt motiv nebo snížit čitelnost textu. Obecná věta typu „dávejte pozor“ nepomůže ve chvíli, kdy je třeba jednat. Použitelný postup musí říci, co se kontroluje, kdo kontrolu provede, kdy se má zastavit a jak se pozná, že je výsledek v pořádku. Právě proto má smysl spojit obsah s praktickým nástrojem A24 Background Layer Check.</p>
<p>Nejčastější problémy jsou konkrétní: gradient překryje důležitou část fotografie; text splní kontrast v editoru, ale ne na frontendu; a vlastní CSS se zkratkou background nechtěně zahodí jednu vrstvu. Každý z nich lze zachytit předem, pokud je kontrola krátká, srozumitelná a opakovatelná. Cílem není přidat další administrativu. Cílem je zabránit situaci, kdy se důležitá podmínka řeší až ve chvíli, kdy už vznikl problém.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol>
<li><strong>Vybrat tři reprezentativní bloky s pozadím.</strong></li>
<li><strong>Zapsat očekávané pořadí vrstev.</strong></li>
<li><strong>Otestovat kontrast textu a CTA.</strong></li>
<li><strong>Porovnat mobilní a desktopový ořez.</strong></li>
<li><strong>Uložit snímek a výsledek do protokolu.</strong></li>
</ol>
<p>Jednotlivé kroky mají být provedeny v uvedeném pořadí. Pokud některý z nich nelze potvrdit, je lepší plán upravit než pokračovat s nejasným rizikem. Výsledek kontroly má zůstat dohledatelný v rozsahu, který je pro dané téma přiměřený; není nutné ukládat citlivé údaje, které k rozhodnutí nejsou potřeba.</p>
<h2>Praktický příklad</h2>
<p>Hero sekce používá tmavý gradient přes fotografii. Po přechodu na nativní podporu tým zjistí, že původní vlastní CSS stále zapisuje background a na jedné šabloně maže obrázek. Odstraní konflikt, nastaví gradient v block.json a ověří kontrast titulku i tlačítka.</p>
<p>Příklad ukazuje, že dobré řešení nemusí být složité. Rozhodující je včas zachytit konkrétní nesoulad a nabídnout bezpečnou další volbu. Stejný princip lze opakovat u dalších situací: nejprve popsat očekávaný stav, potom ověřit realitu, zaznamenat rozdíl a určit jediný další krok s vlastníkem.</p>
<h2>Jak využít nástroj A24 Background Layer Check</h2>
<p>Kontrolní nástroj porovná gradient, obrázek, výsledné CSS a kontrast textu v editoru i na frontendu. Minimální verze zahrnuje: výběr stránky a bloku, snímek editor/frontend, čtení background-image, kontrola pořadí vrstev, kontrast WCAG, mobilní náhled, stav kontroly a PDF report. Nástroj má uživatele vést, nikoli za něj skrývat rozhodnutí. U každého výsledku proto zobrazí zdroj, datum, stav kontroly a srozumitelné vysvětlení.</p>
<p>Při návrhu je důležitá bezpečnost a přístupnost. Rozhraní musí fungovat na telefonu, klávesnicí i s asistivními technologiemi. Data se mají ukládat jen v nezbytném rozsahu, s jasnou dobou uchování a možností exportu nebo výmazu. Automatická oprava nebo rozhodnutí se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<h2>Jak poznat, že postup funguje</h2>
<p>Úspěch se neměří počtem vyplněných polí, ale výsledkem: shodný vzhled editoru a frontendu, kontrast nejméně WCAG AA a žádná ztracená vrstva v podporovaných šablonách. První kontrola vytvoří výchozí stav. Druhá ověří, zda se podařilo odstranit riziko a zda nový postup lidé skutečně používají. Pokud měření nevede k rozhodnutí, je příliš obecné.</p>
<p>Praktické je sledovat tři úrovně: úplnost vstupů, počet zachycených problémů předem a skutečnou změnu chování. Díky tomu se z jednorázového článku stane použitelný proces. Téma se má znovu otevřít při změně podmínek, nástroje, trasy, produktu nebo odpovědné osoby.</p>
<h2>Závěr</h2>
<p>Před publikací porovnejte editor a frontend, světlou i tmavou variantu, mobilní ořez a kontrast textu. Nepoužívejte zkratku background, která může ostatní vrstvy resetovat. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tak vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Nechte Agenda24 prověřit konkrétní web a připravit bezpečný přednasazovací postup.</p>


## Facebook text

Gradient a obrázek ve WordPressu 7.1 testujte jako dvě samostatné vrstvy

WordPress 7.1 umí kombinovat gradient a obrázek pozadí bez přepsání jedné vrstvy druhou. Praktický test má ověřit kontrast, pořadí vrstev, ořez obrázku a chování v editoru i na webu.

Před publikací porovnejte editor a frontend, světlou i tmavou variantu, mobilní ořez a kontrast textu. Nepoužívejte zkratku background, která může ostatní vrstvy resetovat.

Praktická pomůcka: A24 Background Layer Check. Redakce zachytí zakrytý motiv, slabý kontrast nebo rozdíl mezi editorem a webem ještě před publikací.

Zjistit více: https://agenda24.cz/

## LinkedIn text

Gradient a obrázek ve WordPressu 7.1 testujte jako dvě samostatné vrstvy

Nová podpora odstraňuje část vlastního CSS, ale gradient se skládá před obrázek a WordPress zatím nenabízí ovládání pořadí. Špatná kombinace může zakrýt motiv nebo snížit čitelnost textu.

Doporučený první krok: vybrat tři reprezentativní bloky s pozadím. Potom zapsat očekávané pořadí vrstev a výsledek zapsat tak, aby byl dohledatelný.

A24 Background Layer Check: Kontrolní nástroj porovná gradient, obrázek, výsledné CSS a kontrast textu v editoru i na frontendu.

Redakce zachytí zakrytý motiv, slabý kontrast nebo rozdíl mezi editorem a webem ještě před publikací.

https://agenda24.cz/

## Instagram caption

Gradient a obrázek ve WordPressu 7.1 testujte jako dvě samostatné vrstvy

WordPress 7.1 umí kombinovat gradient a obrázek pozadí bez přepsání jedné vrstvy druhou. Praktický test má ověřit kontrast, pořadí vrstev, ořez obrázku a chování v editoru i na webu.

✅ vybrat tři reprezentativní bloky s pozadím
✅ zapsat očekávané pořadí vrstev
✅ otestovat kontrast textu a CTA

Před publikací porovnejte editor a frontend, světlou i tmavou variantu, mobilní ořez a kontrast textu. Nepoužívejte zkratku background, která může ostatní vrstvy resetovat.

https://agenda24.cz/

#Agenda24 #praktickytip #A24BackgroundLayerCheck

## Čistý publikační text pro Facebook

Gradient a obrázek ve WordPressu 7.1 testujte jako dvě samostatné vrstvy

WordPress 7.1 umí kombinovat gradient a obrázek pozadí bez přepsání jedné vrstvy druhou. Praktický test má ověřit kontrast, pořadí vrstev, ořez obrázku a chování v editoru i na webu.

Před publikací porovnejte editor a frontend, světlou i tmavou variantu, mobilní ořez a kontrast textu. Nepoužívejte zkratku background, která může ostatní vrstvy resetovat.

Praktická pomůcka: A24 Background Layer Check. Redakce zachytí zakrytý motiv, slabý kontrast nebo rozdíl mezi editorem a webem ještě před publikací.

Zjistit více: https://agenda24.cz/

## Čistý publikační text pro LinkedIn

Gradient a obrázek ve WordPressu 7.1 testujte jako dvě samostatné vrstvy

Nová podpora odstraňuje část vlastního CSS, ale gradient se skládá před obrázek a WordPress zatím nenabízí ovládání pořadí. Špatná kombinace může zakrýt motiv nebo snížit čitelnost textu.

Doporučený první krok: vybrat tři reprezentativní bloky s pozadím. Potom zapsat očekávané pořadí vrstev a výsledek zapsat tak, aby byl dohledatelný.

A24 Background Layer Check: Kontrolní nástroj porovná gradient, obrázek, výsledné CSS a kontrast textu v editoru i na frontendu.

Redakce zachytí zakrytý motiv, slabý kontrast nebo rozdíl mezi editorem a webem ještě před publikací.

https://agenda24.cz/

## Čistý publikační text pro Instagram

Gradient a obrázek ve WordPressu 7.1 testujte jako dvě samostatné vrstvy

WordPress 7.1 umí kombinovat gradient a obrázek pozadí bez přepsání jedné vrstvy druhou. Praktický test má ověřit kontrast, pořadí vrstev, ořez obrázku a chování v editoru i na webu.

✅ vybrat tři reprezentativní bloky s pozadím
✅ zapsat očekávané pořadí vrstev
✅ otestovat kontrast textu a CTA

Před publikací porovnejte editor a frontend, světlou i tmavou variantu, mobilní ořez a kontrast textu. Nepoužívejte zkratku background, která může ostatní vrstvy resetovat.

https://agenda24.cz/

#Agenda24 #praktickytip #A24BackgroundLayerCheck

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** Gradient a obrázek ve WordPressu 7.1 testujte jako dvě samostatné vrstvy

**Scénář po sekundách:** 0–2 s výrazný detail a hook; 2–7 s WordPress 7.1 umí kombinovat gradient a obrázek pozadí bez přepsání jedné vrstvy druhou. Praktický test má ověřit kontrast, pořadí vrstev, ořez obrázku a chování v editoru i na webu.; 7–10 s A24 Background Layer Check a CTA.

**Mluvený text:** Nový WordPress mění práci se styly. Zkontrolujte konkrétní blok, mobilní zobrazení a výsledek před nasazením.

**Text na obrazovku:** Gradient a obrázek ve WordPressu 7.1 testujte jako dvě samostatné vrstvy / A24 Background Layer Check / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte A24 Background Layer Check.

**Hashtagy:** #Agenda24 #praktickynavod #bezpecnypostup

**Cover:** Gradient a obrázek ve WordPressu 7.1 testujte jako dvě samostatné vrstvy

**Prompt pro Gemini Flow / Omni:** Vytvoř jedno souvislé vertikální video 9:16 o délce přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Nový WordPress mění práci se styly. Zkontrolujte konkrétní blok, mobilní zobrazení a výsledek před nasazením.“ 0–2 s hook, 2–7 s konkrétní situace, 7–10 s vizuální pointa a CTA. Žádné useknuté věty, žádný další dialog, žádné automaticky generované logo ani drobný nečitelný text.

## YouTube Shorts popisek

WordPress 7.1 umí kombinovat gradient a obrázek pozadí bez přepsání jedné vrstvy druhou. Praktický test má ověřit kontrast, pořadí vrstev, ořez obrázku a chování v editoru i na webu. Před publikací porovnejte editor a frontend, světlou i tmavou variantu, mobilní ořez a kontrast textu. Nepoužívejte zkratku background, která může ostatní vrstvy resetovat. Více na https://agenda24.cz/

## Text do grafiky

Gradient a obrázek ve WordPressu 7.1 testujte jako dvě samostatné vrstvy

A24 Background Layer Check

## CTA

Nechte Agenda24 prověřit konkrétní web.

## Alt text

Gradient a obrázek ve WordPressu 7.1 testujte jako dvě samostatné vrstvy: názorné zobrazení konkrétního postupu a nástroje A24 Background Layer Check.

## Prompt na obrázek

Realistická profesionální kompozice pro Gradient a obrázek ve WordPressu 7.1 testujte jako dvě samostatné vrstvy. Paleta #030712, #080B16 a #EC0044, tři vrstvy pozadí, přesný tematický motiv, dostatek místa pro českou typografii v postprodukci. Originální symbol 24 a fotografie Martina pouze jako samostatné vrstvy podle manifestu. Bez žluté, zlaté, oranžové, robotů, robotických rukou, kyborgů a levného cyberpunku.

## Reference k obrázku

Použij výhradně manifest značky agenda24 a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden český hlas. Scénář: 0–2 s hook; 2–7 s konkrétní důkaz; 7–10 s řešení A24 Background Layer Check a CTA. Replika: „Nový WordPress mění práci se styly. Zkontrolujte konkrétní blok, mobilní zobrazení a výsledek před nasazením.“ Věta musí skončit nejpozději v 8. sekundě. Bez useknutí, bez dalšího dialogu, bez generovaných log.

## Reference k videu

Vizuální pravidla čti pouze z manifestu agenda24; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**A24 Background Layer Check** — Kontrolní nástroj porovná gradient, obrázek, výsledné CSS a kontrast textu v editoru i na frontendu.

Přínos: Redakce zachytí zakrytý motiv, slabý kontrast nebo rozdíl mezi editorem a webem ještě před publikací.

## MVP verze

výběr stránky a bloku, snímek editor/frontend, čtení background-image, kontrola pořadí vrstev, kontrast WCAG, mobilní náhled, stav kontroly a PDF report

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 Background Layer Check“ pro projekt Agenda24. Funkce: výběr stránky a bloku, snímek editor/frontend, čtení background-image, kontrola pořadí vrstev, kontrast WCAG, mobilní náhled, stav kontroly a PDF report. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Redakce zachytí zakrytý motiv, slabý kontrast nebo rozdíl mezi editorem a webem ještě před publikací. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci.
