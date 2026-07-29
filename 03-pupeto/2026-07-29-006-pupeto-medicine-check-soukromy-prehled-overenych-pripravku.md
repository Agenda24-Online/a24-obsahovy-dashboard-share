---
title: "Pupeto Medicine Check: soukromý přehled ověřených přípravků"
date: 2026-07-29
project: "Pupeto"
project_url: "https://pupeto.eu/"
projects: ["Pupeto"]
topic_type: "tip na aplikaci"
usage_type: "blog, sociální sítě, video, nástroj"
priority: "vysoká"
status: "k rozpracování"
blog_potential: "vysoký"
social_potential: "vysoký"
recommended_output: "publikovatelný článek, sociální sada, 10s video a praktický nástroj"
brand: "pupeto"
tags: ["tip na aplikaci", "Nástroje pro majitele mazlíčků", "Pupeto Medicine Check"]
source_summary: "Veterinary Medicines Directorate – Seizure Notices, updated 28. 7. 2026; GOV.UK – Check if an animal medicine is licensed"
value_feature_type: "pet kontrolní aplikace"
value_feature_name: "Pupeto Medicine Check"
value_feature_summary: "Soukromý přehled propojí obal, oficiální záznam, prodejce, mazlíčka, datum ověření a otázky pro veterináře."
value_feature_benefit: "Majitel má důležité údaje na jednom místě a jasně pozná, co je ověřené a co se zatím nemá použít."
value_feature_mvp: "profily mazlíčků, fotografie obalu, přípravek a výrobce, cílový druh, oficiální URL, prodejce, stav ověření, datum, veterinární kontakt, připomínka nové kontroly, export a výmaz"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „Pupeto Medicine Check“ pro projekt Pupeto. Funkce: profily mazlíčků, fotografie obalu, přípravek a výrobce, cílový druh, oficiální URL, prodejce, stav ověření, datum, veterinární kontakt, připomínka nové kontroly, export a výmaz. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Majitel má důležité údaje na jednom místě a jasně pozná, co je ověřené a co se zatím nemá použít. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace."
pupeto_category: "Nástroje pro majitele mazlíčků"
---

## Shrnutí

Pupeto Medicine Check umožní majiteli uložit přípravek, oficiální záznam, prodejce, cílový druh, datum kontroly a otázky pro veterináře. Nehodnotí léčbu a nenahrazuje odborné rozhodnutí.

## Zdroje

- [Veterinary Medicines Directorate – Seizure Notices, updated 28. 7. 2026](https://www.gov.uk/government/publications/illegal-animal-medicines-seizures-improvement-notices-and-prosecutions/seizure-notices)
- [GOV.UK – Check if an animal medicine is licensed](https://www.gov.uk/check-animal-medicine-licensed)

## Proč je to důležité

Údaje z různých obalů, e-shopů a zpráv se snadno pomíchají. Jeden soukromý přehled pomůže dohledat, co bylo ověřeno, kdy se údaj kontroloval a proč se přípravek nemá použít bez další konzultace.

## Doporučení

Aplikace má zobrazovat zdroj a datum každého údaje. Nesmí doporučovat dávkování ani diagnózu; při nejasnosti nabídne kontakt na veterináře a stav pozastaveno.

## SEO titulek

Pupeto Medicine Check: soukromý přehled ověřených přípravků | Pupeto

## Meta popis

Pupeto Medicine Check umožní majiteli uložit přípravek, oficiální záznam, prodejce, cílový druh, datum kontroly a otázky pro veterináře. Nehodnotí léčbu a 

## Perex

Pupeto Medicine Check umožní majiteli uložit přípravek, oficiální záznam, prodejce, cílový druh, datum kontroly a otázky pro veterináře. Nehodnotí léčbu a nenahrazuje odborné rozhodnutí. Aplikace má zobrazovat zdroj a datum každého údaje. Nesmí doporučovat dávkování ani diagnózu; při nejasnosti nabídne kontakt na veterináře a stav pozastaveno.

## Blogový titulek

Pupeto Medicine Check: soukromý přehled ověřených přípravků

## Osnova blogu

1. Co se změnilo a co z toho plyne
2. Proč nestačí obecné doporučení
3. Doporučený postup krok za krokem
4. Praktický příklad
5. Jak využít nástroj Pupeto Medicine Check
6. Jak poznat, že postup funguje
7. Závěr a další krok

## Blogový draft

# Pupeto Medicine Check: soukromý přehled ověřených přípravků

## Co se změnilo a co z toho plyne

Pupeto Medicine Check umožní majiteli uložit přípravek, oficiální záznam, prodejce, cílový druh, datum kontroly a otázky pro veterináře. Nehodnotí léčbu a nenahrazuje odborné rozhodnutí. Téma není jen technická poznámka. Pro majitelé domácích mazlíčků, kteří chtějí mít přehled o ověřených přípravcích jde o konkrétní rozhodnutí, které ovlivňuje bezpečnost, použitelnost a důvěru. Základní pravidlo zní: Aplikace má zobrazovat zdroj a datum každého údaje. Nesmí doporučovat dávkování ani diagnózu; při nejasnosti nabídne kontakt na veterináře a stav pozastaveno.

Oficiální zdroj potvrzuje tři podstatné body. Zaprvé: Autorizační stav přípravku lze ověřit v oficiální databázi. Zadruhé: Zásahové přehledy ukazují, že nelegální veterinární přípravky se na trhu skutečně objevují. Zatřetí: Bezpečný záznam musí rozlišit veřejný údaj, poznámku majitele a doporučení veterináře. Tyto body je potřeba číst společně. Samotná nová možnost nebo doporučení nepřináší výsledek, dokud není převedeno do jasného postupu, odpovědnosti a ověřitelné kontroly.

## Proč nestačí obecné doporučení

Údaje z různých obalů, e-shopů a zpráv se snadno pomíchají. Jeden soukromý přehled pomůže dohledat, co bylo ověřeno, kdy se údaj kontroloval a proč se přípravek nemá použít bez další konzultace. Obecná věta typu „dávejte pozor“ nepomůže ve chvíli, kdy je třeba jednat. Použitelný postup musí říci, co se kontroluje, kdo kontrolu provede, kdy se má zastavit a jak se pozná, že je výsledek v pořádku. Právě proto má smysl spojit obsah s praktickým nástrojem Pupeto Medicine Check.

Nejčastější problémy jsou konkrétní: aplikace bude působit jako léčebné doporučení; starý záznam bude považován za stále platný; a zbytečné ukládání citlivých zdravotních údajů. Každý z nich lze zachytit předem, pokud je kontrola krátká, srozumitelná a opakovatelná. Cílem není přidat další administrativu. Cílem je zabránit situaci, kdy se důležitá podmínka řeší až ve chvíli, kdy už vznikl problém.

## Doporučený postup krok za krokem

1. **Omezit aplikaci na evidenci a ověření zdroje.**
2. **Zobrazit datum a expiraci kontroly.**
3. **Oddělit veřejný záznam od soukromé poznámky.**
4. **Minimalizovat údaje a nabídnout úplný výmaz.**
5. **Při nejasnosti vždy odkázat na veterináře.**

Jednotlivé kroky mají být provedeny v uvedeném pořadí. Pokud některý z nich nelze potvrdit, je lepší plán upravit než pokračovat s nejasným rizikem. Výsledek kontroly má zůstat dohledatelný v rozsahu, který je pro dané téma přiměřený; není nutné ukládat citlivé údaje, které k rozhodnutí nejsou potřeba.

## Praktický příklad

Uživatel přidá fotografii obalu a odkaz na záznam. Aplikace označí, že kontrola je starší než šest měsíců, a nepředstírá aktuální platnost. Majitel záznam znovu otevře v oficiálním zdroji a otázku k použití probere s veterinářem.

Příklad ukazuje, že dobré řešení nemusí být složité. Rozhodující je včas zachytit konkrétní nesoulad a nabídnout bezpečnou další volbu. Stejný princip lze opakovat u dalších situací: nejprve popsat očekávaný stav, potom ověřit realitu, zaznamenat rozdíl a určit jediný další krok s vlastníkem.

## Jak využít nástroj Pupeto Medicine Check

Soukromý přehled propojí obal, oficiální záznam, prodejce, mazlíčka, datum ověření a otázky pro veterináře. Minimální verze zahrnuje: profily mazlíčků, fotografie obalu, přípravek a výrobce, cílový druh, oficiální URL, prodejce, stav ověření, datum, veterinární kontakt, připomínka nové kontroly, export a výmaz. Nástroj má uživatele vést, nikoli za něj skrývat rozhodnutí. U každého výsledku proto zobrazí zdroj, datum, stav kontroly a srozumitelné vysvětlení.

Při návrhu je důležitá bezpečnost a přístupnost. Rozhraní musí fungovat na telefonu, klávesnicí i s asistivními technologiemi. Data se mají ukládat jen v nezbytném rozsahu, s jasnou dobou uchování a možností exportu nebo výmazu. Automatická oprava nebo rozhodnutí se nesmí spustit tam, kde je potřeba lidské potvrzení.

## Jak poznat, že postup funguje

Úspěch se neměří počtem vyplněných polí, ale výsledkem: každý záznam má oficiální zdroj, datum, správný cílový druh a jednoznačný stav ověřeno nebo pozastaveno. První kontrola vytvoří výchozí stav. Druhá ověří, zda se podařilo odstranit riziko a zda nový postup lidé skutečně používají. Pokud měření nevede k rozhodnutí, je příliš obecné.

Praktické je sledovat tři úrovně: úplnost vstupů, počet zachycených problémů předem a skutečnou změnu chování. Díky tomu se z jednorázového článku stane použitelný proces. Téma se má znovu otevřít při změně podmínek, nástroje, trasy, produktu nebo odpovědné osoby.

## Závěr

Aplikace má zobrazovat zdroj a datum každého údaje. Nesmí doporučovat dávkování ani diagnózu; při nejasnosti nabídne kontakt na veterináře a stav pozastaveno. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tak vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Uložte si kontrolu v Pupeto a připravte bezpečný plán pro svého mazlíčka.

## Blog pro Enfold

<h1>Pupeto Medicine Check: soukromý přehled ověřených přípravků</h1>
<p class="perex">Pupeto Medicine Check umožní majiteli uložit přípravek, oficiální záznam, prodejce, cílový druh, datum kontroly a otázky pro veterináře. Nehodnotí léčbu a nenahrazuje odborné rozhodnutí.</p>
<h2>Co se změnilo a co z toho plyne</h2>
<p>Pupeto Medicine Check umožní majiteli uložit přípravek, oficiální záznam, prodejce, cílový druh, datum kontroly a otázky pro veterináře. Nehodnotí léčbu a nenahrazuje odborné rozhodnutí. Téma není jen technická poznámka. Pro majitelé domácích mazlíčků, kteří chtějí mít přehled o ověřených přípravcích jde o konkrétní rozhodnutí, které ovlivňuje bezpečnost, použitelnost a důvěru. Základní pravidlo zní: Aplikace má zobrazovat zdroj a datum každého údaje. Nesmí doporučovat dávkování ani diagnózu; při nejasnosti nabídne kontakt na veterináře a stav pozastaveno.</p>
<p>Oficiální zdroj potvrzuje tři podstatné body. Zaprvé: Autorizační stav přípravku lze ověřit v oficiální databázi. Zadruhé: Zásahové přehledy ukazují, že nelegální veterinární přípravky se na trhu skutečně objevují. Zatřetí: Bezpečný záznam musí rozlišit veřejný údaj, poznámku majitele a doporučení veterináře. Tyto body je potřeba číst společně. Samotná nová možnost nebo doporučení nepřináší výsledek, dokud není převedeno do jasného postupu, odpovědnosti a ověřitelné kontroly.</p>
<h2>Proč nestačí obecné doporučení</h2>
<p>Údaje z různých obalů, e-shopů a zpráv se snadno pomíchají. Jeden soukromý přehled pomůže dohledat, co bylo ověřeno, kdy se údaj kontroloval a proč se přípravek nemá použít bez další konzultace. Obecná věta typu „dávejte pozor“ nepomůže ve chvíli, kdy je třeba jednat. Použitelný postup musí říci, co se kontroluje, kdo kontrolu provede, kdy se má zastavit a jak se pozná, že je výsledek v pořádku. Právě proto má smysl spojit obsah s praktickým nástrojem Pupeto Medicine Check.</p>
<p>Nejčastější problémy jsou konkrétní: aplikace bude působit jako léčebné doporučení; starý záznam bude považován za stále platný; a zbytečné ukládání citlivých zdravotních údajů. Každý z nich lze zachytit předem, pokud je kontrola krátká, srozumitelná a opakovatelná. Cílem není přidat další administrativu. Cílem je zabránit situaci, kdy se důležitá podmínka řeší až ve chvíli, kdy už vznikl problém.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol>
<li><strong>Omezit aplikaci na evidenci a ověření zdroje.</strong></li>
<li><strong>Zobrazit datum a expiraci kontroly.</strong></li>
<li><strong>Oddělit veřejný záznam od soukromé poznámky.</strong></li>
<li><strong>Minimalizovat údaje a nabídnout úplný výmaz.</strong></li>
<li><strong>Při nejasnosti vždy odkázat na veterináře.</strong></li>
</ol>
<p>Jednotlivé kroky mají být provedeny v uvedeném pořadí. Pokud některý z nich nelze potvrdit, je lepší plán upravit než pokračovat s nejasným rizikem. Výsledek kontroly má zůstat dohledatelný v rozsahu, který je pro dané téma přiměřený; není nutné ukládat citlivé údaje, které k rozhodnutí nejsou potřeba.</p>
<h2>Praktický příklad</h2>
<p>Uživatel přidá fotografii obalu a odkaz na záznam. Aplikace označí, že kontrola je starší než šest měsíců, a nepředstírá aktuální platnost. Majitel záznam znovu otevře v oficiálním zdroji a otázku k použití probere s veterinářem.</p>
<p>Příklad ukazuje, že dobré řešení nemusí být složité. Rozhodující je včas zachytit konkrétní nesoulad a nabídnout bezpečnou další volbu. Stejný princip lze opakovat u dalších situací: nejprve popsat očekávaný stav, potom ověřit realitu, zaznamenat rozdíl a určit jediný další krok s vlastníkem.</p>
<h2>Jak využít nástroj Pupeto Medicine Check</h2>
<p>Soukromý přehled propojí obal, oficiální záznam, prodejce, mazlíčka, datum ověření a otázky pro veterináře. Minimální verze zahrnuje: profily mazlíčků, fotografie obalu, přípravek a výrobce, cílový druh, oficiální URL, prodejce, stav ověření, datum, veterinární kontakt, připomínka nové kontroly, export a výmaz. Nástroj má uživatele vést, nikoli za něj skrývat rozhodnutí. U každého výsledku proto zobrazí zdroj, datum, stav kontroly a srozumitelné vysvětlení.</p>
<p>Při návrhu je důležitá bezpečnost a přístupnost. Rozhraní musí fungovat na telefonu, klávesnicí i s asistivními technologiemi. Data se mají ukládat jen v nezbytném rozsahu, s jasnou dobou uchování a možností exportu nebo výmazu. Automatická oprava nebo rozhodnutí se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<h2>Jak poznat, že postup funguje</h2>
<p>Úspěch se neměří počtem vyplněných polí, ale výsledkem: každý záznam má oficiální zdroj, datum, správný cílový druh a jednoznačný stav ověřeno nebo pozastaveno. První kontrola vytvoří výchozí stav. Druhá ověří, zda se podařilo odstranit riziko a zda nový postup lidé skutečně používají. Pokud měření nevede k rozhodnutí, je příliš obecné.</p>
<p>Praktické je sledovat tři úrovně: úplnost vstupů, počet zachycených problémů předem a skutečnou změnu chování. Díky tomu se z jednorázového článku stane použitelný proces. Téma se má znovu otevřít při změně podmínek, nástroje, trasy, produktu nebo odpovědné osoby.</p>
<h2>Závěr</h2>
<p>Aplikace má zobrazovat zdroj a datum každého údaje. Nesmí doporučovat dávkování ani diagnózu; při nejasnosti nabídne kontakt na veterináře a stav pozastaveno. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tak vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Uložte si kontrolu v Pupeto a připravte bezpečný plán pro svého mazlíčka.</p>


## Facebook text

Pupeto Medicine Check: soukromý přehled ověřených přípravků

Pupeto Medicine Check umožní majiteli uložit přípravek, oficiální záznam, prodejce, cílový druh, datum kontroly a otázky pro veterináře. Nehodnotí léčbu a nenahrazuje odborné rozhodnutí.

Aplikace má zobrazovat zdroj a datum každého údaje. Nesmí doporučovat dávkování ani diagnózu; při nejasnosti nabídne kontakt na veterináře a stav pozastaveno.

Praktická pomůcka: Pupeto Medicine Check. Majitel má důležité údaje na jednom místě a jasně pozná, co je ověřené a co se zatím nemá použít.

Zjistit více: https://pupeto.eu/

## LinkedIn text

Pupeto Medicine Check: soukromý přehled ověřených přípravků

Údaje z různých obalů, e-shopů a zpráv se snadno pomíchají. Jeden soukromý přehled pomůže dohledat, co bylo ověřeno, kdy se údaj kontroloval a proč se přípravek nemá použít bez další konzultace.

Doporučený první krok: omezit aplikaci na evidenci a ověření zdroje. Potom zobrazit datum a expiraci kontroly a výsledek zapsat tak, aby byl dohledatelný.

Pupeto Medicine Check: Soukromý přehled propojí obal, oficiální záznam, prodejce, mazlíčka, datum ověření a otázky pro veterináře.

Majitel má důležité údaje na jednom místě a jasně pozná, co je ověřené a co se zatím nemá použít.

https://pupeto.eu/

## Instagram caption

Pupeto Medicine Check: soukromý přehled ověřených přípravků

Pupeto Medicine Check umožní majiteli uložit přípravek, oficiální záznam, prodejce, cílový druh, datum kontroly a otázky pro veterináře. Nehodnotí léčbu a nenahrazuje odborné rozhodnutí.

✅ omezit aplikaci na evidenci a ověření zdroje
✅ zobrazit datum a expiraci kontroly
✅ oddělit veřejný záznam od soukromé poznámky

Aplikace má zobrazovat zdroj a datum každého údaje. Nesmí doporučovat dávkování ani diagnózu; při nejasnosti nabídne kontakt na veterináře a stav pozastaveno.

https://pupeto.eu/

#Pupeto #praktickytip #PupetoMedicineCheck

## Čistý publikační text pro Facebook

Pupeto Medicine Check: soukromý přehled ověřených přípravků

Pupeto Medicine Check umožní majiteli uložit přípravek, oficiální záznam, prodejce, cílový druh, datum kontroly a otázky pro veterináře. Nehodnotí léčbu a nenahrazuje odborné rozhodnutí.

Aplikace má zobrazovat zdroj a datum každého údaje. Nesmí doporučovat dávkování ani diagnózu; při nejasnosti nabídne kontakt na veterináře a stav pozastaveno.

Praktická pomůcka: Pupeto Medicine Check. Majitel má důležité údaje na jednom místě a jasně pozná, co je ověřené a co se zatím nemá použít.

Zjistit více: https://pupeto.eu/

## Čistý publikační text pro LinkedIn

Pupeto Medicine Check: soukromý přehled ověřených přípravků

Údaje z různých obalů, e-shopů a zpráv se snadno pomíchají. Jeden soukromý přehled pomůže dohledat, co bylo ověřeno, kdy se údaj kontroloval a proč se přípravek nemá použít bez další konzultace.

Doporučený první krok: omezit aplikaci na evidenci a ověření zdroje. Potom zobrazit datum a expiraci kontroly a výsledek zapsat tak, aby byl dohledatelný.

Pupeto Medicine Check: Soukromý přehled propojí obal, oficiální záznam, prodejce, mazlíčka, datum ověření a otázky pro veterináře.

Majitel má důležité údaje na jednom místě a jasně pozná, co je ověřené a co se zatím nemá použít.

https://pupeto.eu/

## Čistý publikační text pro Instagram

Pupeto Medicine Check: soukromý přehled ověřených přípravků

Pupeto Medicine Check umožní majiteli uložit přípravek, oficiální záznam, prodejce, cílový druh, datum kontroly a otázky pro veterináře. Nehodnotí léčbu a nenahrazuje odborné rozhodnutí.

✅ omezit aplikaci na evidenci a ověření zdroje
✅ zobrazit datum a expiraci kontroly
✅ oddělit veřejný záznam od soukromé poznámky

Aplikace má zobrazovat zdroj a datum každého údaje. Nesmí doporučovat dávkování ani diagnózu; při nejasnosti nabídne kontakt na veterináře a stav pozastaveno.

https://pupeto.eu/

#Pupeto #praktickytip #PupetoMedicineCheck

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** Víte proč plánovat zastávky předem?

**Scénář po sekundách:** 0–2 s výrazný detail a hook; 2–7 s Pupeto Medicine Check umožní majiteli uložit přípravek, oficiální záznam, prodejce, cílový druh, datum kontroly a otázky pro veterináře. Nehodnotí léčbu a nenahrazuje odborné rozhodnutí.; 7–10 s Pupeto Medicine Check a CTA.

**Mluvený text:** Víte proč plánovat zastávky předem? Pupeto připraví vodu, stín i bezpečný plán cesty.

**Text na obrazovku:** Pupeto Medicine Check: soukromý přehled ověřených přípravků / Pupeto Medicine Check / Bezpečný plán pro mazlíčka.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte Pupeto Medicine Check.

**Hashtagy:** #Pupeto #praktickynavod #bezpecnypostup

**Cover:** Pupeto Medicine Check: soukromý přehled ověřených přípravků

**Prompt pro Gemini Flow / Omni:** Vytvoř jedno souvislé vertikální video 9:16 o délce přesně 10 sekund. Jeden ženský český hlas, žádná mluvící zvířata. První věta musí začít „Víte proč…?“ nebo „Víte co…?“. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Víte proč plánovat zastávky předem? Pupeto připraví vodu, stín i bezpečný plán cesty.“ 0–2 s hook, 2–7 s konkrétní situace, 7–10 s vizuální pointa a CTA. Žádné useknuté věty, žádný další dialog, žádné automaticky generované logo ani drobný nečitelný text.

## YouTube Shorts popisek

Pupeto Medicine Check umožní majiteli uložit přípravek, oficiální záznam, prodejce, cílový druh, datum kontroly a otázky pro veterináře. Nehodnotí léčbu a nenahrazuje odborné rozhodnutí. Aplikace má zobrazovat zdroj a datum každého údaje. Nesmí doporučovat dávkování ani diagnózu; při nejasnosti nabídne kontakt na veterináře a stav pozastaveno. Více na https://pupeto.eu/

## Text do grafiky

Pupeto Medicine Check: soukromý přehled ověřených přípravků

Pupeto Medicine Check

## CTA

Připravte bezpečný plán pro svého mazlíčka.

## Alt text

Pupeto Medicine Check: soukromý přehled ověřených přípravků: názorné zobrazení konkrétního postupu a nástroje Pupeto Medicine Check.

## Prompt na obrázek

Přátelská realistická pet fotografie k tématu Pupeto Medicine Check: soukromý přehled ověřených přípravků, bezpečná a klidná situace, tyrkysová #017795, růžová #EF5D86, světlé pozadí, skutečný mazlíček a pečující člověk, žádný tmavý technologický styl, žádné logo 24, žádný Martin, bez generovaného textu.

## Reference k obrázku

Použij výhradně manifest značky pupeto a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden ženský český hlas, žádná mluvící zvířata; začátek otázkou „Víte proč…?“ nebo „Víte co…?“. Scénář: 0–2 s hook; 2–7 s konkrétní důkaz; 7–10 s řešení Pupeto Medicine Check a CTA. Replika: „Víte proč plánovat zastávky předem? Pupeto připraví vodu, stín i bezpečný plán cesty.“ Věta musí skončit nejpozději v 8. sekundě. Bez useknutí, bez dalšího dialogu, bez generovaných log.

## Reference k videu

Vizuální pravidla čti pouze z manifestu pupeto; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**Pupeto Medicine Check** — Soukromý přehled propojí obal, oficiální záznam, prodejce, mazlíčka, datum ověření a otázky pro veterináře.

Přínos: Majitel má důležité údaje na jednom místě a jasně pozná, co je ověřené a co se zatím nemá použít.

## MVP verze

profily mazlíčků, fotografie obalu, přípravek a výrobce, cílový druh, oficiální URL, prodejce, stav ověření, datum, veterinární kontakt, připomínka nové kontroly, export a výmaz

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „Pupeto Medicine Check“ pro projekt Pupeto. Funkce: profily mazlíčků, fotografie obalu, přípravek a výrobce, cílový druh, oficiální URL, prodejce, stav ověření, datum, veterinární kontakt, připomínka nové kontroly, export a výmaz. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Majitel má důležité údaje na jednom místě a jasně pozná, co je ověřené a co se zatím nemá použít. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace.
