---
title: "Gemini Managed Agents přidávají hooky, rozpočty a plánované spouštění"
date: 2026-07-29
project: "Spolek AI"
project_url: "https://spolek.ai/"
projects: ["Spolek AI"]
topic_type: "novinka"
usage_type: "blog, sociální sítě, video, nástroj"
priority: "vysoká"
status: "k rozpracování"
blog_potential: "vysoký"
social_potential: "vysoký"
recommended_output: "publikovatelný článek, sociální sada, 10s video a praktický nástroj"
brand: "spolek-ai"
tags: ["novinka", "AI agenti a automatizace", "Managed Agent Operations Profile"]
source_summary: "Google – Gemini API Managed Agents: 3.6 Flash, hooks and more (28. 7. 2026)"
value_feature_type: "marketplace provozní profil"
value_feature_name: "Managed Agent Operations Profile"
value_feature_summary: "Profil standardizuje hooky, rozpočty, triggery, nástroje, logování a odpovědnost dodavatele AI agenta."
value_feature_benefit: "Kupující porovná nejen schopnosti agenta, ale také náklady, kontrolní body a provozní bezpečnost."
value_feature_mvp: "model a verze, nástroje, pre/post hooky, blokace a audit, rozpočet běhu, plánované triggery, limity, log, SLA, důkazy, verze profilu a poptávkový formulář"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „Managed Agent Operations Profile“ pro projekt Spolek AI. Funkce: model a verze, nástroje, pre/post hooky, blokace a audit, rozpočet běhu, plánované triggery, limity, log, SLA, důkazy, verze profilu a poptávkový formulář. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Kupující porovná nejen schopnosti agenta, ale také náklady, kontrolní body a provozní bezpečnost. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace."
spolek_ai_area: "AI agenti a automatizace"
---

## Shrnutí

Google 28. července rozšířil Managed Agents v Gemini API. Nové environment hooky mohou blokovat, kontrolovat nebo auditovat volání nástrojů; přibyly rozpočtové limity, plánované triggery, volba modelu a bezplatná úroveň.

## Zdroje

- [Google – Gemini API Managed Agents: 3.6 Flash, hooks and more (28. 7. 2026)](https://blog.google/innovation-and-ai/technology/developers-tools/expanding-managed-agents-gemini-api-3-6-flash-hooks/)

## Proč je to důležité

Agent se tím posouvá od jednorázového prototypu k řízenému provozu. Dodavatel musí ukázat, které hooky používá, jaký má běh rozpočet, kdo plánuje spouštění a co se stane při zablokování akce.

## Doporučení

V marketplace vyžadujte provozní profil: povolené nástroje, pre/post hooky, rozpočtový limit, plánované triggery, auditní stopu, incidentní kontakt a měřitelný výsledek.

## SEO titulek

Gemini Managed Agents přidávají hooky, rozpočty a plánované spouštění | Spolek AI

## Meta popis

Google 28. července rozšířil Managed Agents v Gemini API. Nové environment hooky mohou blokovat, kontrolovat nebo auditovat volání nástrojů; přibyly rozpoč

## Perex

Google 28. července rozšířil Managed Agents v Gemini API. Nové environment hooky mohou blokovat, kontrolovat nebo auditovat volání nástrojů; přibyly rozpočtové limity, plánované triggery, volba modelu a bezplatná úroveň. V marketplace vyžadujte provozní profil: povolené nástroje, pre/post hooky, rozpočtový limit, plánované triggery, auditní stopu, incidentní kontakt a měřitelný výsledek.

## Blogový titulek

Gemini Managed Agents přidávají hooky, rozpočty a plánované spouštění

## Osnova blogu

1. Co se změnilo a co z toho plyne
2. Proč nestačí obecné doporučení
3. Doporučený postup krok za krokem
4. Praktický příklad
5. Jak využít nástroj Managed Agent Operations Profile
6. Jak poznat, že postup funguje
7. Závěr a další krok

## Blogový draft

# Gemini Managed Agents přidávají hooky, rozpočty a plánované spouštění

## Co se změnilo a co z toho plyne

Google 28. července rozšířil Managed Agents v Gemini API. Nové environment hooky mohou blokovat, kontrolovat nebo auditovat volání nástrojů; přibyly rozpočtové limity, plánované triggery, volba modelu a bezplatná úroveň. Téma není jen technická poznámka. Pro dodavatelé AI agentů, firemní kupující a správci marketplace Spolek AI jde o konkrétní rozhodnutí, které ovlivňuje bezpečnost, použitelnost a důvěru. Základní pravidlo zní: V marketplace vyžadujte provozní profil: povolené nástroje, pre/post hooky, rozpočtový limit, plánované triggery, auditní stopu, incidentní kontakt a měřitelný výsledek.

Oficiální zdroj potvrzuje tři podstatné body. Zaprvé: Managed Agents nyní standardně používají Gemini 3.6 Flash. Zadruhé: Environment hooky mohou volání nástrojů blokovat, lintovat nebo auditovat uvnitř sandboxu. Zatřetí: Novinka zahrnuje rozpočtové kontroly, plánované triggery a bezplatnou úroveň. Tyto body je potřeba číst společně. Samotná nová možnost nebo doporučení nepřináší výsledek, dokud není převedeno do jasného postupu, odpovědnosti a ověřitelné kontroly.

## Proč nestačí obecné doporučení

Agent se tím posouvá od jednorázového prototypu k řízenému provozu. Dodavatel musí ukázat, které hooky používá, jaký má běh rozpočet, kdo plánuje spouštění a co se stane při zablokování akce. Obecná věta typu „dávejte pozor“ nepomůže ve chvíli, kdy je třeba jednat. Použitelný postup musí říci, co se kontroluje, kdo kontrolu provede, kdy se má zastavit a jak se pozná, že je výsledek v pořádku. Právě proto má smysl spojit obsah s praktickým nástrojem Managed Agent Operations Profile.

Nejčastější problémy jsou konkrétní: agent spouštěný podle plánu jedná bez dostatečného kontextu; rozpočet omezuje cenu, ale ne počet rizikových akcí; a dodavatel tvrdí existenci hooku bez doloženého testu. Každý z nich lze zachytit předem, pokud je kontrola krátká, srozumitelná a opakovatelná. Cílem není přidat další administrativu. Cílem je zabránit situaci, kdy se důležitá podmínka řeší až ve chvíli, kdy už vznikl problém.

## Doporučený postup krok za krokem

1. **Definovat povinný provozní profil produktu.**
2. **Vyžádat ukázku zablokovaného volání nástroje.**
3. **Oddělit nákladový a bezpečnostní limit.**
4. **Uvést vlastníka každého plánovaného triggeru.**
5. **Propojit ověřený profil s obchodní poptávkou.**

Jednotlivé kroky mají být provedeny v uvedeném pořadí. Pokud některý z nich nelze potvrdit, je lepší plán upravit než pokračovat s nejasným rizikem. Výsledek kontroly má zůstat dohledatelný v rozsahu, který je pro dané téma přiměřený; není nutné ukládat citlivé údaje, které k rozhodnutí nejsou potřeba.

## Praktický příklad

Dodavatel agenta pro pravidelný reporting ukáže plánovaný trigger v 6:00, rozpočet jednoho běhu a hook, který blokuje odeslání mimo schválenou doménu. Marketplace označí doložené funkce a kupující pošle poptávku už s vybraným režimem provozu.

Příklad ukazuje, že dobré řešení nemusí být složité. Rozhodující je včas zachytit konkrétní nesoulad a nabídnout bezpečnou další volbu. Stejný princip lze opakovat u dalších situací: nejprve popsat očekávaný stav, potom ověřit realitu, zaznamenat rozdíl a určit jediný další krok s vlastníkem.

## Jak využít nástroj Managed Agent Operations Profile

Profil standardizuje hooky, rozpočty, triggery, nástroje, logování a odpovědnost dodavatele AI agenta. Minimální verze zahrnuje: model a verze, nástroje, pre/post hooky, blokace a audit, rozpočet běhu, plánované triggery, limity, log, SLA, důkazy, verze profilu a poptávkový formulář. Nástroj má uživatele vést, nikoli za něj skrývat rozhodnutí. U každého výsledku proto zobrazí zdroj, datum, stav kontroly a srozumitelné vysvětlení.

Při návrhu je důležitá bezpečnost a přístupnost. Rozhraní musí fungovat na telefonu, klávesnicí i s asistivními technologiemi. Data se mají ukládat jen v nezbytném rozsahu, s jasnou dobou uchování a možností exportu nebo výmazu. Automatická oprava nebo rozhodnutí se nesmí spustit tam, kde je potřeba lidské potvrzení.

## Jak poznat, že postup funguje

Úspěch se neměří počtem vyplněných polí, ale výsledkem: podíl produktů s doloženými hooky a rozpočty, počet úplných poptávek a zkrácení bezpečnostní části obchodního cyklu. První kontrola vytvoří výchozí stav. Druhá ověří, zda se podařilo odstranit riziko a zda nový postup lidé skutečně používají. Pokud měření nevede k rozhodnutí, je příliš obecné.

Praktické je sledovat tři úrovně: úplnost vstupů, počet zachycených problémů předem a skutečnou změnu chování. Díky tomu se z jednorázového článku stane použitelný proces. Téma se má znovu otevřít při změně podmínek, nástroje, trasy, produktu nebo odpovědné osoby.

## Závěr

V marketplace vyžadujte provozní profil: povolené nástroje, pre/post hooky, rozpočtový limit, plánované triggery, auditní stopu, incidentní kontakt a měřitelný výsledek. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tak vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Vytvořte ověřitelný profil řešení a nabídněte jej v marketplace Spolek AI.

## Blog pro Enfold

<h1>Gemini Managed Agents přidávají hooky, rozpočty a plánované spouštění</h1>
<p class="perex">Google 28. července rozšířil Managed Agents v Gemini API. Nové environment hooky mohou blokovat, kontrolovat nebo auditovat volání nástrojů; přibyly rozpočtové limity, plánované triggery, volba modelu a bezplatná úroveň.</p>
<h2>Co se změnilo a co z toho plyne</h2>
<p>Google 28. července rozšířil Managed Agents v Gemini API. Nové environment hooky mohou blokovat, kontrolovat nebo auditovat volání nástrojů; přibyly rozpočtové limity, plánované triggery, volba modelu a bezplatná úroveň. Téma není jen technická poznámka. Pro dodavatelé AI agentů, firemní kupující a správci marketplace Spolek AI jde o konkrétní rozhodnutí, které ovlivňuje bezpečnost, použitelnost a důvěru. Základní pravidlo zní: V marketplace vyžadujte provozní profil: povolené nástroje, pre/post hooky, rozpočtový limit, plánované triggery, auditní stopu, incidentní kontakt a měřitelný výsledek.</p>
<p>Oficiální zdroj potvrzuje tři podstatné body. Zaprvé: Managed Agents nyní standardně používají Gemini 3.6 Flash. Zadruhé: Environment hooky mohou volání nástrojů blokovat, lintovat nebo auditovat uvnitř sandboxu. Zatřetí: Novinka zahrnuje rozpočtové kontroly, plánované triggery a bezplatnou úroveň. Tyto body je potřeba číst společně. Samotná nová možnost nebo doporučení nepřináší výsledek, dokud není převedeno do jasného postupu, odpovědnosti a ověřitelné kontroly.</p>
<h2>Proč nestačí obecné doporučení</h2>
<p>Agent se tím posouvá od jednorázového prototypu k řízenému provozu. Dodavatel musí ukázat, které hooky používá, jaký má běh rozpočet, kdo plánuje spouštění a co se stane při zablokování akce. Obecná věta typu „dávejte pozor“ nepomůže ve chvíli, kdy je třeba jednat. Použitelný postup musí říci, co se kontroluje, kdo kontrolu provede, kdy se má zastavit a jak se pozná, že je výsledek v pořádku. Právě proto má smysl spojit obsah s praktickým nástrojem Managed Agent Operations Profile.</p>
<p>Nejčastější problémy jsou konkrétní: agent spouštěný podle plánu jedná bez dostatečného kontextu; rozpočet omezuje cenu, ale ne počet rizikových akcí; a dodavatel tvrdí existenci hooku bez doloženého testu. Každý z nich lze zachytit předem, pokud je kontrola krátká, srozumitelná a opakovatelná. Cílem není přidat další administrativu. Cílem je zabránit situaci, kdy se důležitá podmínka řeší až ve chvíli, kdy už vznikl problém.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol>
<li><strong>Definovat povinný provozní profil produktu.</strong></li>
<li><strong>Vyžádat ukázku zablokovaného volání nástroje.</strong></li>
<li><strong>Oddělit nákladový a bezpečnostní limit.</strong></li>
<li><strong>Uvést vlastníka každého plánovaného triggeru.</strong></li>
<li><strong>Propojit ověřený profil s obchodní poptávkou.</strong></li>
</ol>
<p>Jednotlivé kroky mají být provedeny v uvedeném pořadí. Pokud některý z nich nelze potvrdit, je lepší plán upravit než pokračovat s nejasným rizikem. Výsledek kontroly má zůstat dohledatelný v rozsahu, který je pro dané téma přiměřený; není nutné ukládat citlivé údaje, které k rozhodnutí nejsou potřeba.</p>
<h2>Praktický příklad</h2>
<p>Dodavatel agenta pro pravidelný reporting ukáže plánovaný trigger v 6:00, rozpočet jednoho běhu a hook, který blokuje odeslání mimo schválenou doménu. Marketplace označí doložené funkce a kupující pošle poptávku už s vybraným režimem provozu.</p>
<p>Příklad ukazuje, že dobré řešení nemusí být složité. Rozhodující je včas zachytit konkrétní nesoulad a nabídnout bezpečnou další volbu. Stejný princip lze opakovat u dalších situací: nejprve popsat očekávaný stav, potom ověřit realitu, zaznamenat rozdíl a určit jediný další krok s vlastníkem.</p>
<h2>Jak využít nástroj Managed Agent Operations Profile</h2>
<p>Profil standardizuje hooky, rozpočty, triggery, nástroje, logování a odpovědnost dodavatele AI agenta. Minimální verze zahrnuje: model a verze, nástroje, pre/post hooky, blokace a audit, rozpočet běhu, plánované triggery, limity, log, SLA, důkazy, verze profilu a poptávkový formulář. Nástroj má uživatele vést, nikoli za něj skrývat rozhodnutí. U každého výsledku proto zobrazí zdroj, datum, stav kontroly a srozumitelné vysvětlení.</p>
<p>Při návrhu je důležitá bezpečnost a přístupnost. Rozhraní musí fungovat na telefonu, klávesnicí i s asistivními technologiemi. Data se mají ukládat jen v nezbytném rozsahu, s jasnou dobou uchování a možností exportu nebo výmazu. Automatická oprava nebo rozhodnutí se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<h2>Jak poznat, že postup funguje</h2>
<p>Úspěch se neměří počtem vyplněných polí, ale výsledkem: podíl produktů s doloženými hooky a rozpočty, počet úplných poptávek a zkrácení bezpečnostní části obchodního cyklu. První kontrola vytvoří výchozí stav. Druhá ověří, zda se podařilo odstranit riziko a zda nový postup lidé skutečně používají. Pokud měření nevede k rozhodnutí, je příliš obecné.</p>
<p>Praktické je sledovat tři úrovně: úplnost vstupů, počet zachycených problémů předem a skutečnou změnu chování. Díky tomu se z jednorázového článku stane použitelný proces. Téma se má znovu otevřít při změně podmínek, nástroje, trasy, produktu nebo odpovědné osoby.</p>
<h2>Závěr</h2>
<p>V marketplace vyžadujte provozní profil: povolené nástroje, pre/post hooky, rozpočtový limit, plánované triggery, auditní stopu, incidentní kontakt a měřitelný výsledek. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tak vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Vytvořte ověřitelný profil řešení a nabídněte jej v marketplace Spolek AI.</p>


## Facebook text

Gemini Managed Agents přidávají hooky, rozpočty a plánované spouštění

Google 28. července rozšířil Managed Agents v Gemini API. Nové environment hooky mohou blokovat, kontrolovat nebo auditovat volání nástrojů; přibyly rozpočtové limity, plánované triggery, volba modelu a bezplatná úroveň.

V marketplace vyžadujte provozní profil: povolené nástroje, pre/post hooky, rozpočtový limit, plánované triggery, auditní stopu, incidentní kontakt a měřitelný výsledek.

Praktická pomůcka: Managed Agent Operations Profile. Kupující porovná nejen schopnosti agenta, ale také náklady, kontrolní body a provozní bezpečnost.

Zjistit více: https://spolek.ai/

## LinkedIn text

Gemini Managed Agents přidávají hooky, rozpočty a plánované spouštění

Agent se tím posouvá od jednorázového prototypu k řízenému provozu. Dodavatel musí ukázat, které hooky používá, jaký má běh rozpočet, kdo plánuje spouštění a co se stane při zablokování akce.

Doporučený první krok: definovat povinný provozní profil produktu. Potom vyžádat ukázku zablokovaného volání nástroje a výsledek zapsat tak, aby byl dohledatelný.

Managed Agent Operations Profile: Profil standardizuje hooky, rozpočty, triggery, nástroje, logování a odpovědnost dodavatele AI agenta.

Kupující porovná nejen schopnosti agenta, ale také náklady, kontrolní body a provozní bezpečnost.

https://spolek.ai/

## Instagram caption

Gemini Managed Agents přidávají hooky, rozpočty a plánované spouštění

Google 28. července rozšířil Managed Agents v Gemini API. Nové environment hooky mohou blokovat, kontrolovat nebo auditovat volání nástrojů; přibyly rozpočtové limity, plánované triggery, volba modelu a bezplatná úroveň.

✅ definovat povinný provozní profil produktu
✅ vyžádat ukázku zablokovaného volání nástroje
✅ oddělit nákladový a bezpečnostní limit

V marketplace vyžadujte provozní profil: povolené nástroje, pre/post hooky, rozpočtový limit, plánované triggery, auditní stopu, incidentní kontakt a měřitelný výsledek.

https://spolek.ai/

#SpolekAI #praktickytip #ManagedAgentOperationsProfile

## Čistý publikační text pro Facebook

Gemini Managed Agents přidávají hooky, rozpočty a plánované spouštění

Google 28. července rozšířil Managed Agents v Gemini API. Nové environment hooky mohou blokovat, kontrolovat nebo auditovat volání nástrojů; přibyly rozpočtové limity, plánované triggery, volba modelu a bezplatná úroveň.

V marketplace vyžadujte provozní profil: povolené nástroje, pre/post hooky, rozpočtový limit, plánované triggery, auditní stopu, incidentní kontakt a měřitelný výsledek.

Praktická pomůcka: Managed Agent Operations Profile. Kupující porovná nejen schopnosti agenta, ale také náklady, kontrolní body a provozní bezpečnost.

Zjistit více: https://spolek.ai/

## Čistý publikační text pro LinkedIn

Gemini Managed Agents přidávají hooky, rozpočty a plánované spouštění

Agent se tím posouvá od jednorázového prototypu k řízenému provozu. Dodavatel musí ukázat, které hooky používá, jaký má běh rozpočet, kdo plánuje spouštění a co se stane při zablokování akce.

Doporučený první krok: definovat povinný provozní profil produktu. Potom vyžádat ukázku zablokovaného volání nástroje a výsledek zapsat tak, aby byl dohledatelný.

Managed Agent Operations Profile: Profil standardizuje hooky, rozpočty, triggery, nástroje, logování a odpovědnost dodavatele AI agenta.

Kupující porovná nejen schopnosti agenta, ale také náklady, kontrolní body a provozní bezpečnost.

https://spolek.ai/

## Čistý publikační text pro Instagram

Gemini Managed Agents přidávají hooky, rozpočty a plánované spouštění

Google 28. července rozšířil Managed Agents v Gemini API. Nové environment hooky mohou blokovat, kontrolovat nebo auditovat volání nástrojů; přibyly rozpočtové limity, plánované triggery, volba modelu a bezplatná úroveň.

✅ definovat povinný provozní profil produktu
✅ vyžádat ukázku zablokovaného volání nástroje
✅ oddělit nákladový a bezpečnostní limit

V marketplace vyžadujte provozní profil: povolené nástroje, pre/post hooky, rozpočtový limit, plánované triggery, auditní stopu, incidentní kontakt a měřitelný výsledek.

https://spolek.ai/

#SpolekAI #praktickytip #ManagedAgentOperationsProfile

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** Gemini Managed Agents přidávají hooky, rozpočty a plánované spouštění

**Scénář po sekundách:** 0–2 s výrazný detail a hook; 2–7 s Google 28. července rozšířil Managed Agents v Gemini API. Nové environment hooky mohou blokovat, kontrolovat nebo auditovat volání nástrojů; přibyly rozpočtové limity, plánované triggery, volba modelu a bezplatná úroveň.; 7–10 s Managed Agent Operations Profile a CTA.

**Mluvený text:** Bezpečný AI agent nemá přístup ke všemu. Ukažte konkrétní zdroj, akci, schválení a auditní stopu.

**Text na obrazovku:** Gemini Managed Agents přidávají hooky, rozpočty a plánované spouštění / Managed Agent Operations Profile / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte Managed Agent Operations Profile.

**Hashtagy:** #SpolekAI #praktickynavod #bezpecnypostup

**Cover:** Gemini Managed Agents přidávají hooky, rozpočty a plánované spouštění

**Prompt pro Gemini Flow / Omni:** Vytvoř jedno souvislé vertikální video 9:16 o délce přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Bezpečný AI agent nemá přístup ke všemu. Ukažte konkrétní zdroj, akci, schválení a auditní stopu.“ 0–2 s hook, 2–7 s konkrétní situace, 7–10 s vizuální pointa a CTA. Žádné useknuté věty, žádný další dialog, žádné automaticky generované logo ani drobný nečitelný text.

## YouTube Shorts popisek

Google 28. července rozšířil Managed Agents v Gemini API. Nové environment hooky mohou blokovat, kontrolovat nebo auditovat volání nástrojů; přibyly rozpočtové limity, plánované triggery, volba modelu a bezplatná úroveň. V marketplace vyžadujte provozní profil: povolené nástroje, pre/post hooky, rozpočtový limit, plánované triggery, auditní stopu, incidentní kontakt a měřitelný výsledek. Více na https://spolek.ai/

## Text do grafiky

Gemini Managed Agents přidávají hooky, rozpočty a plánované spouštění

Managed Agent Operations Profile

## CTA

Vytvořte ověřitelný profil svého AI řešení.

## Alt text

Gemini Managed Agents přidávají hooky, rozpočty a plánované spouštění: názorné zobrazení konkrétního postupu a nástroje Managed Agent Operations Profile.

## Prompt na obrázek

Neutrální moderní B2B komunitní vizuál k tématu Gemini Managed Agents přidávají hooky, rozpočty a plánované spouštění: tým, procesní mapa a auditovatelná rozhodnutí, čistý světlý layout, bez loga Agenda24, bez Martina, bez robotů a falešných značek.

## Reference k obrázku

Použij výhradně manifest značky spolek-ai a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden český hlas. Scénář: 0–2 s hook; 2–7 s konkrétní důkaz; 7–10 s řešení Managed Agent Operations Profile a CTA. Replika: „Bezpečný AI agent nemá přístup ke všemu. Ukažte konkrétní zdroj, akci, schválení a auditní stopu.“ Věta musí skončit nejpozději v 8. sekundě. Bez useknutí, bez dalšího dialogu, bez generovaných log.

## Reference k videu

Vizuální pravidla čti pouze z manifestu spolek-ai; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**Managed Agent Operations Profile** — Profil standardizuje hooky, rozpočty, triggery, nástroje, logování a odpovědnost dodavatele AI agenta.

Přínos: Kupující porovná nejen schopnosti agenta, ale také náklady, kontrolní body a provozní bezpečnost.

## MVP verze

model a verze, nástroje, pre/post hooky, blokace a audit, rozpočet běhu, plánované triggery, limity, log, SLA, důkazy, verze profilu a poptávkový formulář

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „Managed Agent Operations Profile“ pro projekt Spolek AI. Funkce: model a verze, nástroje, pre/post hooky, blokace a audit, rozpočet běhu, plánované triggery, limity, log, SLA, důkazy, verze profilu a poptávkový formulář. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Kupující porovná nejen schopnosti agenta, ale také náklady, kontrolní body a provozní bezpečnost. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace.
