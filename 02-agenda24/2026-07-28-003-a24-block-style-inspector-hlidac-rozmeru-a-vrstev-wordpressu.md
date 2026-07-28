---
title: "A24 Block Style Inspector: hlídač rozměrů a vrstev WordPressu"
date: 2026-07-28
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
tags: ["tip na aplikaci", "Aplikace, pluginy a automatizace", "A24 Block Style Inspector"]
source_summary: "WordPress Core – New block support in WordPress 7.1: minimum width (26. 7. 2026); WordPress Core – New block support in WordPress 7.1: background gradient (26. 7. 2026)"
value_feature_type: "A24 WordPress plugin"
value_feature_name: "A24 Block Style Inspector"
value_feature_summary: "Plugin skenuje minWidth a kombinované vrstvy pozadí, simuluje běžné viewporty a vytváří prioritizovaný report bez změny obsahu."
value_feature_benefit: "Agenda24 získá bezpečný opakovatelný přehled rizik blokových stylů před aktualizací WordPressu."
value_feature_mvp: "read-only sken bloků, theme.json a výsledného CSS, minWidth inventář, background vrstvy, overflow test, kontrast, výjimky, historie, export a plánovaný běh"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 Block Style Inspector“ pro projekt Agenda24. Funkce: read-only sken bloků, theme.json a výsledného CSS, minWidth inventář, background vrstvy, overflow test, kontrast, výjimky, historie, export a plánovaný běh. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Agenda24 získá bezpečný opakovatelný přehled rizik blokových stylů před aktualizací WordPressu. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci."
agenda24_area: "Aplikace, pluginy a automatizace"
---

## Shrnutí

A24 Block Style Inspector spojí inventář minWidth, vrstvy gradientu a obrázku, mobilní přetečení a kontrast do jednoho přednasazovacího reportu pro WordPress 7.1.

## Zdroje

- [WordPress Core – New block support in WordPress 7.1: minimum width (26. 7. 2026)](https://make.wordpress.org/core/2026/07/26/new-block-support-in-wordpress-7-1-minimum-width/)
- [WordPress Core – New block support in WordPress 7.1: background gradient (26. 7. 2026)](https://make.wordpress.org/core/2026/07/26/new-block-support-in-wordpress-7-1-background-gradient-background-gradient/)

## Proč je to důležité

Jednotlivé změny jsou malé, jejich kombinace ale ovlivní bloky, theme.json, vlastní CSS i frontend. Opakovatelný sken je rychlejší a spolehlivější než ruční kontrola náhodných stránek.

## Doporučení

Začněte pouze čtením a reportem. Automatické opravy nepovolujte, dokud tým neověří pravidla na stagingu a nevytvoří zálohu.

## SEO titulek

A24 Block Style Inspector: hlídač rozměrů a vrstev WordPressu | Agenda24

## Meta popis

A24 Block Style Inspector spojí inventář minWidth, vrstvy gradientu a obrázku, mobilní přetečení a kontrast do jednoho přednasazovacího reportu pro WordPre

## Perex

A24 Block Style Inspector spojí inventář minWidth, vrstvy gradientu a obrázku, mobilní přetečení a kontrast do jednoho přednasazovacího reportu pro WordPress 7.1. Začněte pouze čtením a reportem. Automatické opravy nepovolujte, dokud tým neověří pravidla na stagingu a nevytvoří zálohu.

## Blogový titulek

A24 Block Style Inspector: hlídač rozměrů a vrstev WordPressu

## Osnova blogu

1. Co se změnilo a co z toho plyne
2. Proč nestačí obecné doporučení
3. Doporučený postup krok za krokem
4. Praktický příklad
5. Jak využít nástroj A24 Block Style Inspector
6. Jak poznat, že postup funguje
7. Závěr a další krok

## Blogový draft

# A24 Block Style Inspector: hlídač rozměrů a vrstev WordPressu

## Co se změnilo a co z toho plyne

A24 Block Style Inspector spojí inventář minWidth, vrstvy gradientu a obrázku, mobilní přetečení a kontrast do jednoho přednasazovacího reportu pro WordPress 7.1. Téma není jen technická poznámka. Pro servisní tým Agenda24 a správci klientských WordPress webů jde o konkrétní rozhodnutí, které ovlivňuje bezpečnost, použitelnost a důvěru. Základní pravidlo zní: Začněte pouze čtením a reportem. Automatické opravy nepovolujte, dokud tým neověří pravidla na stagingu a nevytvoří zálohu.

Oficiální zdroj potvrzuje tři podstatné body. Zaprvé: WordPress 7.1 rozšiřuje Dimensions API o minWidth. Zadruhé: Background gradient lze spojit s obrázkem bez resetu vrstvy. Zatřetí: Obě podpory jsou opt-in a zpětně kompatibilní, ale vlastní CSS může výsledek změnit. Tyto body je potřeba číst společně. Samotná nová možnost nebo doporučení nepřináší výsledek, dokud není převedeno do jasného postupu, odpovědnosti a ověřitelné kontroly.

## Proč nestačí obecné doporučení

Jednotlivé změny jsou malé, jejich kombinace ale ovlivní bloky, theme.json, vlastní CSS i frontend. Opakovatelný sken je rychlejší a spolehlivější než ruční kontrola náhodných stránek. Obecná věta typu „dávejte pozor“ nepomůže ve chvíli, kdy je třeba jednat. Použitelný postup musí říci, co se kontroluje, kdo kontrolu provede, kdy se má zastavit a jak se pozná, že je výsledek v pořádku. Právě proto má smysl spojit obsah s praktickým nástrojem A24 Block Style Inspector.

Nejčastější problémy jsou konkrétní: automatický zásah do obsahu bez schválení; falešně pozitivní nález u dynamického bloku; a pomalý sken na velkém webu. Každý z nich lze zachytit předem, pokud je kontrola krátká, srozumitelná a opakovatelná. Cílem není přidat další administrativu. Cílem je zabránit situaci, kdy se důležitá podmínka řeší až ve chvíli, kdy už vznikl problém.

## Doporučený postup krok za krokem

1. **Postavit read-only inventář.**
2. **Přidat frontu skenů s limity.**
3. **Zavést výjimky s odůvodněním.**
4. **Vytvořit report před a po aktualizaci.**
5. **Povolit opravu jen jako samostatně schválený krok.**

Jednotlivé kroky mají být provedeny v uvedeném pořadí. Pokud některý z nich nelze potvrdit, je lepší plán upravit než pokračovat s nejasným rizikem. Výsledek kontroly má zůstat dohledatelný v rozsahu, který je pro dané téma přiměřený; není nutné ukládat citlivé údaje, které k rozhodnutí nejsou potřeba.

## Praktický příklad

Servisní tým spustí sken na stagingu e-shopu. Nástroj najde šest bloků s pevnou minimální šířkou a dvě hero sekce s konfliktním background CSS. Správce otevře konkrétní stránku, opraví jen potvrzené problémy a po druhém skenu přiloží čistý report k servisnímu protokolu.

Příklad ukazuje, že dobré řešení nemusí být složité. Rozhodující je včas zachytit konkrétní nesoulad a nabídnout bezpečnou další volbu. Stejný princip lze opakovat u dalších situací: nejprve popsat očekávaný stav, potom ověřit realitu, zaznamenat rozdíl a určit jediný další krok s vlastníkem.

## Jak využít nástroj A24 Block Style Inspector

Plugin skenuje minWidth a kombinované vrstvy pozadí, simuluje běžné viewporty a vytváří prioritizovaný report bez změny obsahu. Minimální verze zahrnuje: read-only sken bloků, theme.json a výsledného CSS, minWidth inventář, background vrstvy, overflow test, kontrast, výjimky, historie, export a plánovaný běh. Nástroj má uživatele vést, nikoli za něj skrývat rozhodnutí. U každého výsledku proto zobrazí zdroj, datum, stav kontroly a srozumitelné vysvětlení.

Při návrhu je důležitá bezpečnost a přístupnost. Rozhraní musí fungovat na telefonu, klávesnicí i s asistivními technologiemi. Data se mají ukládat jen v nezbytném rozsahu, s jasnou dobou uchování a možností exportu nebo výmazu. Automatická oprava nebo rozhodnutí se nesmí spustit tam, kde je potřeba lidské potvrzení.

## Jak poznat, že postup funguje

Úspěch se neměří počtem vyplněných polí, ale výsledkem: 100 % skenovaných šablon, žádná automatická změna bez schválení, reprodukovatelný report a nulové kritické overflow nálezy před nasazením. První kontrola vytvoří výchozí stav. Druhá ověří, zda se podařilo odstranit riziko a zda nový postup lidé skutečně používají. Pokud měření nevede k rozhodnutí, je příliš obecné.

Praktické je sledovat tři úrovně: úplnost vstupů, počet zachycených problémů předem a skutečnou změnu chování. Díky tomu se z jednorázového článku stane použitelný proces. Téma se má znovu otevřít při změně podmínek, nástroje, trasy, produktu nebo odpovědné osoby.

## Závěr

Začněte pouze čtením a reportem. Automatické opravy nepovolujte, dokud tým neověří pravidla na stagingu a nevytvoří zálohu. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tak vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Nechte Agenda24 prověřit konkrétní web a připravit bezpečný přednasazovací postup.

## Blog pro Enfold

<h1>A24 Block Style Inspector: hlídač rozměrů a vrstev WordPressu</h1>
<p class="perex">A24 Block Style Inspector spojí inventář minWidth, vrstvy gradientu a obrázku, mobilní přetečení a kontrast do jednoho přednasazovacího reportu pro WordPress 7.1.</p>
<h2>Co se změnilo a co z toho plyne</h2>
<p>A24 Block Style Inspector spojí inventář minWidth, vrstvy gradientu a obrázku, mobilní přetečení a kontrast do jednoho přednasazovacího reportu pro WordPress 7.1. Téma není jen technická poznámka. Pro servisní tým Agenda24 a správci klientských WordPress webů jde o konkrétní rozhodnutí, které ovlivňuje bezpečnost, použitelnost a důvěru. Základní pravidlo zní: Začněte pouze čtením a reportem. Automatické opravy nepovolujte, dokud tým neověří pravidla na stagingu a nevytvoří zálohu.</p>
<p>Oficiální zdroj potvrzuje tři podstatné body. Zaprvé: WordPress 7.1 rozšiřuje Dimensions API o minWidth. Zadruhé: Background gradient lze spojit s obrázkem bez resetu vrstvy. Zatřetí: Obě podpory jsou opt-in a zpětně kompatibilní, ale vlastní CSS může výsledek změnit. Tyto body je potřeba číst společně. Samotná nová možnost nebo doporučení nepřináší výsledek, dokud není převedeno do jasného postupu, odpovědnosti a ověřitelné kontroly.</p>
<h2>Proč nestačí obecné doporučení</h2>
<p>Jednotlivé změny jsou malé, jejich kombinace ale ovlivní bloky, theme.json, vlastní CSS i frontend. Opakovatelný sken je rychlejší a spolehlivější než ruční kontrola náhodných stránek. Obecná věta typu „dávejte pozor“ nepomůže ve chvíli, kdy je třeba jednat. Použitelný postup musí říci, co se kontroluje, kdo kontrolu provede, kdy se má zastavit a jak se pozná, že je výsledek v pořádku. Právě proto má smysl spojit obsah s praktickým nástrojem A24 Block Style Inspector.</p>
<p>Nejčastější problémy jsou konkrétní: automatický zásah do obsahu bez schválení; falešně pozitivní nález u dynamického bloku; a pomalý sken na velkém webu. Každý z nich lze zachytit předem, pokud je kontrola krátká, srozumitelná a opakovatelná. Cílem není přidat další administrativu. Cílem je zabránit situaci, kdy se důležitá podmínka řeší až ve chvíli, kdy už vznikl problém.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol>
<li><strong>Postavit read-only inventář.</strong></li>
<li><strong>Přidat frontu skenů s limity.</strong></li>
<li><strong>Zavést výjimky s odůvodněním.</strong></li>
<li><strong>Vytvořit report před a po aktualizaci.</strong></li>
<li><strong>Povolit opravu jen jako samostatně schválený krok.</strong></li>
</ol>
<p>Jednotlivé kroky mají být provedeny v uvedeném pořadí. Pokud některý z nich nelze potvrdit, je lepší plán upravit než pokračovat s nejasným rizikem. Výsledek kontroly má zůstat dohledatelný v rozsahu, který je pro dané téma přiměřený; není nutné ukládat citlivé údaje, které k rozhodnutí nejsou potřeba.</p>
<h2>Praktický příklad</h2>
<p>Servisní tým spustí sken na stagingu e-shopu. Nástroj najde šest bloků s pevnou minimální šířkou a dvě hero sekce s konfliktním background CSS. Správce otevře konkrétní stránku, opraví jen potvrzené problémy a po druhém skenu přiloží čistý report k servisnímu protokolu.</p>
<p>Příklad ukazuje, že dobré řešení nemusí být složité. Rozhodující je včas zachytit konkrétní nesoulad a nabídnout bezpečnou další volbu. Stejný princip lze opakovat u dalších situací: nejprve popsat očekávaný stav, potom ověřit realitu, zaznamenat rozdíl a určit jediný další krok s vlastníkem.</p>
<h2>Jak využít nástroj A24 Block Style Inspector</h2>
<p>Plugin skenuje minWidth a kombinované vrstvy pozadí, simuluje běžné viewporty a vytváří prioritizovaný report bez změny obsahu. Minimální verze zahrnuje: read-only sken bloků, theme.json a výsledného CSS, minWidth inventář, background vrstvy, overflow test, kontrast, výjimky, historie, export a plánovaný běh. Nástroj má uživatele vést, nikoli za něj skrývat rozhodnutí. U každého výsledku proto zobrazí zdroj, datum, stav kontroly a srozumitelné vysvětlení.</p>
<p>Při návrhu je důležitá bezpečnost a přístupnost. Rozhraní musí fungovat na telefonu, klávesnicí i s asistivními technologiemi. Data se mají ukládat jen v nezbytném rozsahu, s jasnou dobou uchování a možností exportu nebo výmazu. Automatická oprava nebo rozhodnutí se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<h2>Jak poznat, že postup funguje</h2>
<p>Úspěch se neměří počtem vyplněných polí, ale výsledkem: 100 % skenovaných šablon, žádná automatická změna bez schválení, reprodukovatelný report a nulové kritické overflow nálezy před nasazením. První kontrola vytvoří výchozí stav. Druhá ověří, zda se podařilo odstranit riziko a zda nový postup lidé skutečně používají. Pokud měření nevede k rozhodnutí, je příliš obecné.</p>
<p>Praktické je sledovat tři úrovně: úplnost vstupů, počet zachycených problémů předem a skutečnou změnu chování. Díky tomu se z jednorázového článku stane použitelný proces. Téma se má znovu otevřít při změně podmínek, nástroje, trasy, produktu nebo odpovědné osoby.</p>
<h2>Závěr</h2>
<p>Začněte pouze čtením a reportem. Automatické opravy nepovolujte, dokud tým neověří pravidla na stagingu a nevytvoří zálohu. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tak vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Nechte Agenda24 prověřit konkrétní web a připravit bezpečný přednasazovací postup.</p>


## Facebook text

A24 Block Style Inspector: hlídač rozměrů a vrstev WordPressu

A24 Block Style Inspector spojí inventář minWidth, vrstvy gradientu a obrázku, mobilní přetečení a kontrast do jednoho přednasazovacího reportu pro WordPress 7.1.

Začněte pouze čtením a reportem. Automatické opravy nepovolujte, dokud tým neověří pravidla na stagingu a nevytvoří zálohu.

Praktická pomůcka: A24 Block Style Inspector. Agenda24 získá bezpečný opakovatelný přehled rizik blokových stylů před aktualizací WordPressu.

Zjistit více: https://agenda24.cz/

## LinkedIn text

A24 Block Style Inspector: hlídač rozměrů a vrstev WordPressu

Jednotlivé změny jsou malé, jejich kombinace ale ovlivní bloky, theme.json, vlastní CSS i frontend. Opakovatelný sken je rychlejší a spolehlivější než ruční kontrola náhodných stránek.

Doporučený první krok: postavit read-only inventář. Potom přidat frontu skenů s limity a výsledek zapsat tak, aby byl dohledatelný.

A24 Block Style Inspector: Plugin skenuje minWidth a kombinované vrstvy pozadí, simuluje běžné viewporty a vytváří prioritizovaný report bez změny obsahu.

Agenda24 získá bezpečný opakovatelný přehled rizik blokových stylů před aktualizací WordPressu.

https://agenda24.cz/

## Instagram caption

A24 Block Style Inspector: hlídač rozměrů a vrstev WordPressu

A24 Block Style Inspector spojí inventář minWidth, vrstvy gradientu a obrázku, mobilní přetečení a kontrast do jednoho přednasazovacího reportu pro WordPress 7.1.

✅ postavit read-only inventář
✅ přidat frontu skenů s limity
✅ zavést výjimky s odůvodněním

Začněte pouze čtením a reportem. Automatické opravy nepovolujte, dokud tým neověří pravidla na stagingu a nevytvoří zálohu.

https://agenda24.cz/

#Agenda24 #praktickytip #A24BlockStyleInspector

## Čistý publikační text pro Facebook

A24 Block Style Inspector: hlídač rozměrů a vrstev WordPressu

A24 Block Style Inspector spojí inventář minWidth, vrstvy gradientu a obrázku, mobilní přetečení a kontrast do jednoho přednasazovacího reportu pro WordPress 7.1.

Začněte pouze čtením a reportem. Automatické opravy nepovolujte, dokud tým neověří pravidla na stagingu a nevytvoří zálohu.

Praktická pomůcka: A24 Block Style Inspector. Agenda24 získá bezpečný opakovatelný přehled rizik blokových stylů před aktualizací WordPressu.

Zjistit více: https://agenda24.cz/

## Čistý publikační text pro LinkedIn

A24 Block Style Inspector: hlídač rozměrů a vrstev WordPressu

Jednotlivé změny jsou malé, jejich kombinace ale ovlivní bloky, theme.json, vlastní CSS i frontend. Opakovatelný sken je rychlejší a spolehlivější než ruční kontrola náhodných stránek.

Doporučený první krok: postavit read-only inventář. Potom přidat frontu skenů s limity a výsledek zapsat tak, aby byl dohledatelný.

A24 Block Style Inspector: Plugin skenuje minWidth a kombinované vrstvy pozadí, simuluje běžné viewporty a vytváří prioritizovaný report bez změny obsahu.

Agenda24 získá bezpečný opakovatelný přehled rizik blokových stylů před aktualizací WordPressu.

https://agenda24.cz/

## Čistý publikační text pro Instagram

A24 Block Style Inspector: hlídač rozměrů a vrstev WordPressu

A24 Block Style Inspector spojí inventář minWidth, vrstvy gradientu a obrázku, mobilní přetečení a kontrast do jednoho přednasazovacího reportu pro WordPress 7.1.

✅ postavit read-only inventář
✅ přidat frontu skenů s limity
✅ zavést výjimky s odůvodněním

Začněte pouze čtením a reportem. Automatické opravy nepovolujte, dokud tým neověří pravidla na stagingu a nevytvoří zálohu.

https://agenda24.cz/

#Agenda24 #praktickytip #A24BlockStyleInspector

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** A24 Block Style Inspector: hlídač rozměrů a vrstev WordPressu

**Scénář po sekundách:** 0–2 s výrazný detail a hook; 2–7 s A24 Block Style Inspector spojí inventář minWidth, vrstvy gradientu a obrázku, mobilní přetečení a kontrast do jednoho přednasazovacího reportu pro WordPress 7.1.; 7–10 s A24 Block Style Inspector a CTA.

**Mluvený text:** Nový WordPress mění práci se styly. Zkontrolujte konkrétní blok, mobilní zobrazení a výsledek před nasazením.

**Text na obrazovku:** A24 Block Style Inspector: hlídač rozměrů a vrstev WordPressu / A24 Block Style Inspector / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte A24 Block Style Inspector.

**Hashtagy:** #Agenda24 #praktickynavod #bezpecnypostup

**Cover:** A24 Block Style Inspector: hlídač rozměrů a vrstev WordPressu

**Prompt pro Gemini Flow / Omni:** Vytvoř jedno souvislé vertikální video 9:16 o délce přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Nový WordPress mění práci se styly. Zkontrolujte konkrétní blok, mobilní zobrazení a výsledek před nasazením.“ 0–2 s hook, 2–7 s konkrétní situace, 7–10 s vizuální pointa a CTA. Žádné useknuté věty, žádný další dialog, žádné automaticky generované logo ani drobný nečitelný text.

## YouTube Shorts popisek

A24 Block Style Inspector spojí inventář minWidth, vrstvy gradientu a obrázku, mobilní přetečení a kontrast do jednoho přednasazovacího reportu pro WordPress 7.1. Začněte pouze čtením a reportem. Automatické opravy nepovolujte, dokud tým neověří pravidla na stagingu a nevytvoří zálohu. Více na https://agenda24.cz/

## Text do grafiky

A24 Block Style Inspector: hlídač rozměrů a vrstev WordPressu

A24 Block Style Inspector

## CTA

Nechte Agenda24 prověřit konkrétní web.

## Alt text

A24 Block Style Inspector: hlídač rozměrů a vrstev WordPressu: názorné zobrazení konkrétního postupu a nástroje A24 Block Style Inspector.

## Prompt na obrázek

Realistická profesionální kompozice pro A24 Block Style Inspector: hlídač rozměrů a vrstev WordPressu. Paleta #030712, #080B16 a #EC0044, tři vrstvy pozadí, přesný tematický motiv, dostatek místa pro českou typografii v postprodukci. Originální symbol 24 a fotografie Martina pouze jako samostatné vrstvy podle manifestu. Bez žluté, zlaté, oranžové, robotů, robotických rukou, kyborgů a levného cyberpunku.

## Reference k obrázku

Použij výhradně manifest značky agenda24 a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden český hlas. Scénář: 0–2 s hook; 2–7 s konkrétní důkaz; 7–10 s řešení A24 Block Style Inspector a CTA. Replika: „Nový WordPress mění práci se styly. Zkontrolujte konkrétní blok, mobilní zobrazení a výsledek před nasazením.“ Věta musí skončit nejpozději v 8. sekundě. Bez useknutí, bez dalšího dialogu, bez generovaných log.

## Reference k videu

Vizuální pravidla čti pouze z manifestu agenda24; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**A24 Block Style Inspector** — Plugin skenuje minWidth a kombinované vrstvy pozadí, simuluje běžné viewporty a vytváří prioritizovaný report bez změny obsahu.

Přínos: Agenda24 získá bezpečný opakovatelný přehled rizik blokových stylů před aktualizací WordPressu.

## MVP verze

read-only sken bloků, theme.json a výsledného CSS, minWidth inventář, background vrstvy, overflow test, kontrast, výjimky, historie, export a plánovaný běh

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 Block Style Inspector“ pro projekt Agenda24. Funkce: read-only sken bloků, theme.json a výsledného CSS, minWidth inventář, background vrstvy, overflow test, kontrast, výjimky, historie, export a plánovaný běh. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Agenda24 získá bezpečný opakovatelný přehled rizik blokových stylů před aktualizací WordPressu. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci.
