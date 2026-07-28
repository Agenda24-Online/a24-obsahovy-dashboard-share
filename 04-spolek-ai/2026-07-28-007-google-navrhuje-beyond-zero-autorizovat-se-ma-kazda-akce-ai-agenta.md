---
title: "Google navrhuje Beyond Zero: autorizovat se má každá akce člověka i AI agenta"
date: 2026-07-28
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
tags: ["novinka", "Bezpečnost AI produktů", "Beyond Zero Product Profile"]
source_summary: "Google Security Blog – Going Beyond Zero: a new paradigm for enterprise security (27. 7. 2026)"
value_feature_type: "marketplace bezpečnostní profil"
value_feature_name: "Beyond Zero Product Profile"
value_feature_summary: "Profil standardizuje oprávnění produktu na úrovni akcí a zdrojů a převádí je do srozumitelného podkladu pro nákup."
value_feature_benefit: "Kupující rychle porovná, zda AI produkt omezuje agenta na nezbytné akce a umí doložit auditní stopu."
value_feature_mvp: "matice zdrojů a akcí, role, statická a dynamická pravidla, kontext rozhodnutí, challenge/containment, auditní log, incidentní kontakt, export profilu"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „Beyond Zero Product Profile“ pro projekt Spolek AI. Funkce: matice zdrojů a akcí, role, statická a dynamická pravidla, kontext rozhodnutí, challenge/containment, auditní log, incidentní kontakt, export profilu. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Kupující rychle porovná, zda AI produkt omezuje agenta na nezbytné akce a umí doložit auditní stopu. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace."
spolek_ai_area: "Bezpečnost AI produktů"
---

## Shrnutí

Google 27. července představil koncept Beyond Zero. Bezpečnost se má rozhodovat na úrovni konkrétního zdroje a akce, s průběžným kontextem, automatickým vyšetřením a možností rizikovou akci omezit.

## Zdroje

- [Google Security Blog – Going Beyond Zero: a new paradigm for enterprise security (27. 7. 2026)](https://blog.google/security/going-beyond-zero-a-new-paradigm-for-enterprise-security/)

## Proč je to důležité

AI agent může v krátkém čase provést mnoho kroků přes rozhraní, API i MCP. Jednorázové přihlášení proto nestačí; poskytovatel musí umět vysvětlit, co agent smí udělat a proč.

## Doporučení

Marketplace by měl od dodavatele požadovat matici zdroj–akce–role, popis dynamického kontextu, auditní stopu a příklad bezpečného zadržení rizikové operace.

## SEO titulek

Google navrhuje Beyond Zero: autorizovat se má každá akce člověka i AI agenta | Spolek AI

## Meta popis

Google 27. července představil koncept Beyond Zero. Bezpečnost se má rozhodovat na úrovni konkrétního zdroje a akce, s průběžným kontextem, automatickým vy

## Perex

Google 27. července představil koncept Beyond Zero. Bezpečnost se má rozhodovat na úrovni konkrétního zdroje a akce, s průběžným kontextem, automatickým vyšetřením a možností rizikovou akci omezit. Marketplace by měl od dodavatele požadovat matici zdroj–akce–role, popis dynamického kontextu, auditní stopu a příklad bezpečného zadržení rizikové operace.

## Blogový titulek

Google navrhuje Beyond Zero: autorizovat se má každá akce člověka i AI agenta

## Osnova blogu

1. Co se změnilo a co z toho plyne
2. Proč nestačí obecné doporučení
3. Doporučený postup krok za krokem
4. Praktický příklad
5. Jak využít nástroj Beyond Zero Product Profile
6. Jak poznat, že postup funguje
7. Závěr a další krok

## Blogový draft

# Google navrhuje Beyond Zero: autorizovat se má každá akce člověka i AI agenta

## Co se změnilo a co z toho plyne

Google 27. července představil koncept Beyond Zero. Bezpečnost se má rozhodovat na úrovni konkrétního zdroje a akce, s průběžným kontextem, automatickým vyšetřením a možností rizikovou akci omezit. Téma není jen technická poznámka. Pro dodavatelé AI řešení, firemní nákupčí a správci marketplace jde o konkrétní rozhodnutí, které ovlivňuje bezpečnost, použitelnost a důvěru. Základní pravidlo zní: Marketplace by měl od dodavatele požadovat matici zdroj–akce–role, popis dynamického kontextu, auditní stopu a příklad bezpečného zadržení rizikové operace.

Oficiální zdroj potvrzuje tři podstatné body. Zaprvé: Beyond Zero staví na autorizaci konkrétního zdroje a konkrétní akce. Zadruhé: Kombinuje statická pravidla s dynamickým vyhodnocením rizika. Zatřetí: Počítá s automatickým vyšetřením a s výzvou nebo omezením podezřelé akce. Tyto body je potřeba číst společně. Samotná nová možnost nebo doporučení nepřináší výsledek, dokud není převedeno do jasného postupu, odpovědnosti a ověřitelné kontroly.

## Proč nestačí obecné doporučení

AI agent může v krátkém čase provést mnoho kroků přes rozhraní, API i MCP. Jednorázové přihlášení proto nestačí; poskytovatel musí umět vysvětlit, co agent smí udělat a proč. Obecná věta typu „dávejte pozor“ nepomůže ve chvíli, kdy je třeba jednat. Použitelný postup musí říci, co se kontroluje, kdo kontrolu provede, kdy se má zastavit a jak se pozná, že je výsledek v pořádku. Právě proto má smysl spojit obsah s praktickým nástrojem Beyond Zero Product Profile.

Nejčastější problémy jsou konkrétní: bezpečnostní profil zůstane jen marketingovým tvrzením bez důkazů; dodavatelé budou používat neporovnatelné názvy oprávnění; a dynamické rozhodování nebude vysvětlitelné zákazníkovi. Každý z nich lze zachytit předem, pokud je kontrola krátká, srozumitelná a opakovatelná. Cílem není přidat další administrativu. Cílem je zabránit situaci, kdy se důležitá podmínka řeší až ve chvíli, kdy už vznikl problém.

## Doporučený postup krok za krokem

1. **Definovat povinná pole profilu.**
2. **Vyžádat ukázku auditního záznamu.**
3. **Přidat datum a verzi ověření.**
4. **Zavést stav tvrzení versus doložený důkaz.**
5. **Napojit profil na poptávku a obchodní kvalifikaci.**

Jednotlivé kroky mají být provedeny v uvedeném pořadí. Pokud některý z nich nelze potvrdit, je lepší plán upravit než pokračovat s nejasným rizikem. Výsledek kontroly má zůstat dohledatelný v rozsahu, který je pro dané téma přiměřený; není nutné ukládat citlivé údaje, které k rozhodnutí nejsou potřeba.

## Praktický příklad

Dodavatel agenta pro zákaznickou podporu uvede, že produkt čte vybrané tikety, navrhuje odpověď a odeslání vyžaduje schválení. Profil zároveň ukáže, že agent nemá přístup k celé schránce ani k fakturačním údajům. Kupující tak dostane konkrétní podklad místo obecného slibu o bezpečnosti.

Příklad ukazuje, že dobré řešení nemusí být složité. Rozhodující je včas zachytit konkrétní nesoulad a nabídnout bezpečnou další volbu. Stejný princip lze opakovat u dalších situací: nejprve popsat očekávaný stav, potom ověřit realitu, zaznamenat rozdíl a určit jediný další krok s vlastníkem.

## Jak využít nástroj Beyond Zero Product Profile

Profil standardizuje oprávnění produktu na úrovni akcí a zdrojů a převádí je do srozumitelného podkladu pro nákup. Minimální verze zahrnuje: matice zdrojů a akcí, role, statická a dynamická pravidla, kontext rozhodnutí, challenge/containment, auditní log, incidentní kontakt, export profilu. Nástroj má uživatele vést, nikoli za něj skrývat rozhodnutí. U každého výsledku proto zobrazí zdroj, datum, stav kontroly a srozumitelné vysvětlení.

Při návrhu je důležitá bezpečnost a přístupnost. Rozhraní musí fungovat na telefonu, klávesnicí i s asistivními technologiemi. Data se mají ukládat jen v nezbytném rozsahu, s jasnou dobou uchování a možností exportu nebo výmazu. Automatická oprava nebo rozhodnutí se nesmí spustit tam, kde je potřeba lidské potvrzení.

## Jak poznat, že postup funguje

Úspěch se neměří počtem vyplněných polí, ale výsledkem: podíl produktů s doloženou maticí oprávnění, počet ověřených důkazů a konverze profilů do kvalifikovaných poptávek. První kontrola vytvoří výchozí stav. Druhá ověří, zda se podařilo odstranit riziko a zda nový postup lidé skutečně používají. Pokud měření nevede k rozhodnutí, je příliš obecné.

Praktické je sledovat tři úrovně: úplnost vstupů, počet zachycených problémů předem a skutečnou změnu chování. Díky tomu se z jednorázového článku stane použitelný proces. Téma se má znovu otevřít při změně podmínek, nástroje, trasy, produktu nebo odpovědné osoby.

## Závěr

Marketplace by měl od dodavatele požadovat matici zdroj–akce–role, popis dynamického kontextu, auditní stopu a příklad bezpečného zadržení rizikové operace. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tak vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Vytvořte ověřitelný profil řešení a nabídněte jej v marketplace Spolek AI.

## Blog pro Enfold

<h1>Google navrhuje Beyond Zero: autorizovat se má každá akce člověka i AI agenta</h1>
<p class="perex">Google 27. července představil koncept Beyond Zero. Bezpečnost se má rozhodovat na úrovni konkrétního zdroje a akce, s průběžným kontextem, automatickým vyšetřením a možností rizikovou akci omezit.</p>
<h2>Co se změnilo a co z toho plyne</h2>
<p>Google 27. července představil koncept Beyond Zero. Bezpečnost se má rozhodovat na úrovni konkrétního zdroje a akce, s průběžným kontextem, automatickým vyšetřením a možností rizikovou akci omezit. Téma není jen technická poznámka. Pro dodavatelé AI řešení, firemní nákupčí a správci marketplace jde o konkrétní rozhodnutí, které ovlivňuje bezpečnost, použitelnost a důvěru. Základní pravidlo zní: Marketplace by měl od dodavatele požadovat matici zdroj–akce–role, popis dynamického kontextu, auditní stopu a příklad bezpečného zadržení rizikové operace.</p>
<p>Oficiální zdroj potvrzuje tři podstatné body. Zaprvé: Beyond Zero staví na autorizaci konkrétního zdroje a konkrétní akce. Zadruhé: Kombinuje statická pravidla s dynamickým vyhodnocením rizika. Zatřetí: Počítá s automatickým vyšetřením a s výzvou nebo omezením podezřelé akce. Tyto body je potřeba číst společně. Samotná nová možnost nebo doporučení nepřináší výsledek, dokud není převedeno do jasného postupu, odpovědnosti a ověřitelné kontroly.</p>
<h2>Proč nestačí obecné doporučení</h2>
<p>AI agent může v krátkém čase provést mnoho kroků přes rozhraní, API i MCP. Jednorázové přihlášení proto nestačí; poskytovatel musí umět vysvětlit, co agent smí udělat a proč. Obecná věta typu „dávejte pozor“ nepomůže ve chvíli, kdy je třeba jednat. Použitelný postup musí říci, co se kontroluje, kdo kontrolu provede, kdy se má zastavit a jak se pozná, že je výsledek v pořádku. Právě proto má smysl spojit obsah s praktickým nástrojem Beyond Zero Product Profile.</p>
<p>Nejčastější problémy jsou konkrétní: bezpečnostní profil zůstane jen marketingovým tvrzením bez důkazů; dodavatelé budou používat neporovnatelné názvy oprávnění; a dynamické rozhodování nebude vysvětlitelné zákazníkovi. Každý z nich lze zachytit předem, pokud je kontrola krátká, srozumitelná a opakovatelná. Cílem není přidat další administrativu. Cílem je zabránit situaci, kdy se důležitá podmínka řeší až ve chvíli, kdy už vznikl problém.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol>
<li><strong>Definovat povinná pole profilu.</strong></li>
<li><strong>Vyžádat ukázku auditního záznamu.</strong></li>
<li><strong>Přidat datum a verzi ověření.</strong></li>
<li><strong>Zavést stav tvrzení versus doložený důkaz.</strong></li>
<li><strong>Napojit profil na poptávku a obchodní kvalifikaci.</strong></li>
</ol>
<p>Jednotlivé kroky mají být provedeny v uvedeném pořadí. Pokud některý z nich nelze potvrdit, je lepší plán upravit než pokračovat s nejasným rizikem. Výsledek kontroly má zůstat dohledatelný v rozsahu, který je pro dané téma přiměřený; není nutné ukládat citlivé údaje, které k rozhodnutí nejsou potřeba.</p>
<h2>Praktický příklad</h2>
<p>Dodavatel agenta pro zákaznickou podporu uvede, že produkt čte vybrané tikety, navrhuje odpověď a odeslání vyžaduje schválení. Profil zároveň ukáže, že agent nemá přístup k celé schránce ani k fakturačním údajům. Kupující tak dostane konkrétní podklad místo obecného slibu o bezpečnosti.</p>
<p>Příklad ukazuje, že dobré řešení nemusí být složité. Rozhodující je včas zachytit konkrétní nesoulad a nabídnout bezpečnou další volbu. Stejný princip lze opakovat u dalších situací: nejprve popsat očekávaný stav, potom ověřit realitu, zaznamenat rozdíl a určit jediný další krok s vlastníkem.</p>
<h2>Jak využít nástroj Beyond Zero Product Profile</h2>
<p>Profil standardizuje oprávnění produktu na úrovni akcí a zdrojů a převádí je do srozumitelného podkladu pro nákup. Minimální verze zahrnuje: matice zdrojů a akcí, role, statická a dynamická pravidla, kontext rozhodnutí, challenge/containment, auditní log, incidentní kontakt, export profilu. Nástroj má uživatele vést, nikoli za něj skrývat rozhodnutí. U každého výsledku proto zobrazí zdroj, datum, stav kontroly a srozumitelné vysvětlení.</p>
<p>Při návrhu je důležitá bezpečnost a přístupnost. Rozhraní musí fungovat na telefonu, klávesnicí i s asistivními technologiemi. Data se mají ukládat jen v nezbytném rozsahu, s jasnou dobou uchování a možností exportu nebo výmazu. Automatická oprava nebo rozhodnutí se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<h2>Jak poznat, že postup funguje</h2>
<p>Úspěch se neměří počtem vyplněných polí, ale výsledkem: podíl produktů s doloženou maticí oprávnění, počet ověřených důkazů a konverze profilů do kvalifikovaných poptávek. První kontrola vytvoří výchozí stav. Druhá ověří, zda se podařilo odstranit riziko a zda nový postup lidé skutečně používají. Pokud měření nevede k rozhodnutí, je příliš obecné.</p>
<p>Praktické je sledovat tři úrovně: úplnost vstupů, počet zachycených problémů předem a skutečnou změnu chování. Díky tomu se z jednorázového článku stane použitelný proces. Téma se má znovu otevřít při změně podmínek, nástroje, trasy, produktu nebo odpovědné osoby.</p>
<h2>Závěr</h2>
<p>Marketplace by měl od dodavatele požadovat matici zdroj–akce–role, popis dynamického kontextu, auditní stopu a příklad bezpečného zadržení rizikové operace. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tak vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Vytvořte ověřitelný profil řešení a nabídněte jej v marketplace Spolek AI.</p>


## Facebook text

Google navrhuje Beyond Zero: autorizovat se má každá akce člověka i AI agenta

Google 27. července představil koncept Beyond Zero. Bezpečnost se má rozhodovat na úrovni konkrétního zdroje a akce, s průběžným kontextem, automatickým vyšetřením a možností rizikovou akci omezit.

Marketplace by měl od dodavatele požadovat matici zdroj–akce–role, popis dynamického kontextu, auditní stopu a příklad bezpečného zadržení rizikové operace.

Praktická pomůcka: Beyond Zero Product Profile. Kupující rychle porovná, zda AI produkt omezuje agenta na nezbytné akce a umí doložit auditní stopu.

Zjistit více: https://spolek.ai/

## LinkedIn text

Google navrhuje Beyond Zero: autorizovat se má každá akce člověka i AI agenta

AI agent může v krátkém čase provést mnoho kroků přes rozhraní, API i MCP. Jednorázové přihlášení proto nestačí; poskytovatel musí umět vysvětlit, co agent smí udělat a proč.

Doporučený první krok: definovat povinná pole profilu. Potom vyžádat ukázku auditního záznamu a výsledek zapsat tak, aby byl dohledatelný.

Beyond Zero Product Profile: Profil standardizuje oprávnění produktu na úrovni akcí a zdrojů a převádí je do srozumitelného podkladu pro nákup.

Kupující rychle porovná, zda AI produkt omezuje agenta na nezbytné akce a umí doložit auditní stopu.

https://spolek.ai/

## Instagram caption

Google navrhuje Beyond Zero: autorizovat se má každá akce člověka i AI agenta

Google 27. července představil koncept Beyond Zero. Bezpečnost se má rozhodovat na úrovni konkrétního zdroje a akce, s průběžným kontextem, automatickým vyšetřením a možností rizikovou akci omezit.

✅ definovat povinná pole profilu
✅ vyžádat ukázku auditního záznamu
✅ přidat datum a verzi ověření

Marketplace by měl od dodavatele požadovat matici zdroj–akce–role, popis dynamického kontextu, auditní stopu a příklad bezpečného zadržení rizikové operace.

https://spolek.ai/

#SpolekAI #praktickytip #BeyondZeroProductProfile

## Čistý publikační text pro Facebook

Google navrhuje Beyond Zero: autorizovat se má každá akce člověka i AI agenta

Google 27. července představil koncept Beyond Zero. Bezpečnost se má rozhodovat na úrovni konkrétního zdroje a akce, s průběžným kontextem, automatickým vyšetřením a možností rizikovou akci omezit.

Marketplace by měl od dodavatele požadovat matici zdroj–akce–role, popis dynamického kontextu, auditní stopu a příklad bezpečného zadržení rizikové operace.

Praktická pomůcka: Beyond Zero Product Profile. Kupující rychle porovná, zda AI produkt omezuje agenta na nezbytné akce a umí doložit auditní stopu.

Zjistit více: https://spolek.ai/

## Čistý publikační text pro LinkedIn

Google navrhuje Beyond Zero: autorizovat se má každá akce člověka i AI agenta

AI agent může v krátkém čase provést mnoho kroků přes rozhraní, API i MCP. Jednorázové přihlášení proto nestačí; poskytovatel musí umět vysvětlit, co agent smí udělat a proč.

Doporučený první krok: definovat povinná pole profilu. Potom vyžádat ukázku auditního záznamu a výsledek zapsat tak, aby byl dohledatelný.

Beyond Zero Product Profile: Profil standardizuje oprávnění produktu na úrovni akcí a zdrojů a převádí je do srozumitelného podkladu pro nákup.

Kupující rychle porovná, zda AI produkt omezuje agenta na nezbytné akce a umí doložit auditní stopu.

https://spolek.ai/

## Čistý publikační text pro Instagram

Google navrhuje Beyond Zero: autorizovat se má každá akce člověka i AI agenta

Google 27. července představil koncept Beyond Zero. Bezpečnost se má rozhodovat na úrovni konkrétního zdroje a akce, s průběžným kontextem, automatickým vyšetřením a možností rizikovou akci omezit.

✅ definovat povinná pole profilu
✅ vyžádat ukázku auditního záznamu
✅ přidat datum a verzi ověření

Marketplace by měl od dodavatele požadovat matici zdroj–akce–role, popis dynamického kontextu, auditní stopu a příklad bezpečného zadržení rizikové operace.

https://spolek.ai/

#SpolekAI #praktickytip #BeyondZeroProductProfile

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** Google navrhuje Beyond Zero: autorizovat se má každá akce člověka i AI agenta

**Scénář po sekundách:** 0–2 s výrazný detail a hook; 2–7 s Google 27. července představil koncept Beyond Zero. Bezpečnost se má rozhodovat na úrovni konkrétního zdroje a akce, s průběžným kontextem, automatickým vyšetřením a možností rizikovou akci omezit.; 7–10 s Beyond Zero Product Profile a CTA.

**Mluvený text:** Bezpečný AI agent nemá přístup ke všemu. Ukažte konkrétní zdroj, akci, schválení a auditní stopu.

**Text na obrazovku:** Google navrhuje Beyond Zero: autorizovat se má každá akce člověka i AI agenta / Beyond Zero Product Profile / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte Beyond Zero Product Profile.

**Hashtagy:** #SpolekAI #praktickynavod #bezpecnypostup

**Cover:** Google navrhuje Beyond Zero: autorizovat se má každá akce člověka i AI agenta

**Prompt pro Gemini Flow / Omni:** Vytvoř jedno souvislé vertikální video 9:16 o délce přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Bezpečný AI agent nemá přístup ke všemu. Ukažte konkrétní zdroj, akci, schválení a auditní stopu.“ 0–2 s hook, 2–7 s konkrétní situace, 7–10 s vizuální pointa a CTA. Žádné useknuté věty, žádný další dialog, žádné automaticky generované logo ani drobný nečitelný text.

## YouTube Shorts popisek

Google 27. července představil koncept Beyond Zero. Bezpečnost se má rozhodovat na úrovni konkrétního zdroje a akce, s průběžným kontextem, automatickým vyšetřením a možností rizikovou akci omezit. Marketplace by měl od dodavatele požadovat matici zdroj–akce–role, popis dynamického kontextu, auditní stopu a příklad bezpečného zadržení rizikové operace. Více na https://spolek.ai/

## Text do grafiky

Google navrhuje Beyond Zero: autorizovat se má každá akce člověka i AI agenta

Beyond Zero Product Profile

## CTA

Vytvořte ověřitelný profil svého AI řešení.

## Alt text

Google navrhuje Beyond Zero: autorizovat se má každá akce člověka i AI agenta: názorné zobrazení konkrétního postupu a nástroje Beyond Zero Product Profile.

## Prompt na obrázek

Neutrální moderní B2B komunitní vizuál k tématu Google navrhuje Beyond Zero: autorizovat se má každá akce člověka i AI agenta: tým, procesní mapa a auditovatelná rozhodnutí, čistý světlý layout, bez loga Agenda24, bez Martina, bez robotů a falešných značek.

## Reference k obrázku

Použij výhradně manifest značky spolek-ai a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden český hlas. Scénář: 0–2 s hook; 2–7 s konkrétní důkaz; 7–10 s řešení Beyond Zero Product Profile a CTA. Replika: „Bezpečný AI agent nemá přístup ke všemu. Ukažte konkrétní zdroj, akci, schválení a auditní stopu.“ Věta musí skončit nejpozději v 8. sekundě. Bez useknutí, bez dalšího dialogu, bez generovaných log.

## Reference k videu

Vizuální pravidla čti pouze z manifestu spolek-ai; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**Beyond Zero Product Profile** — Profil standardizuje oprávnění produktu na úrovni akcí a zdrojů a převádí je do srozumitelného podkladu pro nákup.

Přínos: Kupující rychle porovná, zda AI produkt omezuje agenta na nezbytné akce a umí doložit auditní stopu.

## MVP verze

matice zdrojů a akcí, role, statická a dynamická pravidla, kontext rozhodnutí, challenge/containment, auditní log, incidentní kontakt, export profilu

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „Beyond Zero Product Profile“ pro projekt Spolek AI. Funkce: matice zdrojů a akcí, role, statická a dynamická pravidla, kontext rozhodnutí, challenge/containment, auditní log, incidentní kontakt, export profilu. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Kupující rychle porovná, zda AI produkt omezuje agenta na nezbytné akce a umí doložit auditní stopu. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace.
