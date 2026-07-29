---
title: "Agent Ops Lab: simulátor hooků, rozpočtů a plánovaných běhů"
date: 2026-07-29
project: "Firemní lektor"
project_url: "https://www.firemnilektor.cz/"
projects: ["Firemní lektor"]
topic_type: "tip na aplikaci"
usage_type: "blog, sociální sítě, video, nástroj"
priority: "vysoká"
status: "k rozpracování"
blog_potential: "vysoký"
social_potential: "vysoký"
recommended_output: "publikovatelný článek, sociální sada, 10s video a praktický nástroj"
brand: "firemni-lektor"
tags: ["tip na aplikaci", "Školící aplikace a simulátory", "Agent Ops Lab"]
source_summary: "Google – Gemini API Managed Agents: 3.6 Flash, hooks and more (28. 7. 2026)"
value_feature_type: "B2B školící aplikace"
value_feature_name: "Agent Ops Lab"
value_feature_summary: "Webový simulátor pro firemnilektor.cz řídí scénáře agentního provozu a vytváří měřitelný týmový akční plán."
value_feature_benefit: "OSVČ lektor nabídne firmám praktický produkt s pre/post testem, vlastním scénářem a doložitelným výsledkem."
value_feature_mvp: "správa B2B klientů a běhů, anonymizované scénáře, nástroje, hooky, rozpočet, trigger, simulace porušení, auditní log, role, pre/post test, PDF akční plán a retence"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „Agent Ops Lab“ pro projekt Firemní lektor. Funkce: správa B2B klientů a běhů, anonymizované scénáře, nástroje, hooky, rozpočet, trigger, simulace porušení, auditní log, role, pre/post test, PDF akční plán a retence. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: OSVČ lektor nabídne firmám praktický produkt s pre/post testem, vlastním scénářem a doložitelným výsledkem. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace."
firemni_lektor_area: "Školící aplikace a simulátory"
---

## Shrnutí

Agent Ops Lab nechá účastníky nastavit tři provozní limity, spustit anonymizovaný scénář a sledovat, zda agent dokončí úlohu, překročí rozpočet nebo narazí na blokující hook.

## Zdroje

- [Google – Gemini API Managed Agents: 3.6 Flash, hooks and more (28. 7. 2026)](https://blog.google/innovation-and-ai/technology/developers-tools/expanding-managed-agents-gemini-api-3-6-flash-hooks/)

## Proč je to důležité

Simulátor umožní měřit výsledek praktického B2B školení, opakovat scénáře a ukázat rozdíl mezi špatně nastaveným a bezpečně řízeným během bez práce s ostrými daty.

## Doporučení

Aplikaci používejte jako trenažér, nikoli jako certifikaci produkčního systému. Výstup musí obsahovat odůvodnění, vlastníka nápravy a kontrolu reálné konfigurace po školení.

## SEO titulek

Agent Ops Lab: simulátor hooků, rozpočtů a plánovaných běhů | Firemní lektor

## Meta popis

Agent Ops Lab nechá účastníky nastavit tři provozní limity, spustit anonymizovaný scénář a sledovat, zda agent dokončí úlohu, překročí rozpočet nebo narazí

## Perex

Agent Ops Lab nechá účastníky nastavit tři provozní limity, spustit anonymizovaný scénář a sledovat, zda agent dokončí úlohu, překročí rozpočet nebo narazí na blokující hook. Aplikaci používejte jako trenažér, nikoli jako certifikaci produkčního systému. Výstup musí obsahovat odůvodnění, vlastníka nápravy a kontrolu reálné konfigurace po školení.

## Blogový titulek

Agent Ops Lab: simulátor hooků, rozpočtů a plánovaných běhů

## Osnova blogu

1. Co se změnilo a co z toho plyne
2. Proč nestačí obecné doporučení
3. Doporučený postup krok za krokem
4. Praktický příklad
5. Jak využít nástroj Agent Ops Lab
6. Jak poznat, že postup funguje
7. Závěr a další krok

## Blogový draft

# Agent Ops Lab: simulátor hooků, rozpočtů a plánovaných běhů

## Co se změnilo a co z toho plyne

Agent Ops Lab nechá účastníky nastavit tři provozní limity, spustit anonymizovaný scénář a sledovat, zda agent dokončí úlohu, překročí rozpočet nebo narazí na blokující hook. Téma není jen technická poznámka. Pro OSVČ firemní lektoři a B2B klienti firemnilektor.cz jde o konkrétní rozhodnutí, které ovlivňuje bezpečnost, použitelnost a důvěru. Základní pravidlo zní: Aplikaci používejte jako trenažér, nikoli jako certifikaci produkčního systému. Výstup musí obsahovat odůvodnění, vlastníka nápravy a kontrolu reálné konfigurace po školení.

Oficiální zdroj potvrzuje tři podstatné body. Zaprvé: Nové Managed Agents poskytují pozorovatelné kontrolní body vhodné pro scénářové učení. Zadruhé: Hook, rozpočet a trigger lze testovat odděleně i v kombinaci. Zatřetí: Zablokovaný běh je cenný výukový výsledek, pokud účastník umí vysvětlit jeho příčinu. Tyto body je potřeba číst společně. Samotná nová možnost nebo doporučení nepřináší výsledek, dokud není převedeno do jasného postupu, odpovědnosti a ověřitelné kontroly.

## Proč nestačí obecné doporučení

Simulátor umožní měřit výsledek praktického B2B školení, opakovat scénáře a ukázat rozdíl mezi špatně nastaveným a bezpečně řízeným během bez práce s ostrými daty. Obecná věta typu „dávejte pozor“ nepomůže ve chvíli, kdy je třeba jednat. Použitelný postup musí říci, co se kontroluje, kdo kontrolu provede, kdy se má zastavit a jak se pozná, že je výsledek v pořádku. Právě proto má smysl spojit obsah s praktickým nástrojem Agent Ops Lab.

Nejčastější problémy jsou konkrétní: uložení citlivého popisu klientského procesu; výsledek simulace bude vydáván za audit produkce; a skóre potlačí důležité odůvodnění účastníků. Každý z nich lze zachytit předem, pokud je kontrola krátká, srozumitelná a opakovatelná. Cílem není přidat další administrativu. Cílem je zabránit situaci, kdy se důležitá podmínka řeší až ve chvíli, kdy už vznikl problém.

## Doporučený postup krok za krokem

1. **Anonymizovat klientský scénář před importem.**
2. **Oddělit simulaci od produkční konfigurace.**
3. **Ukládat rozhodnutí i slovní odůvodnění.**
4. **Nastavit automatický výmaz běhu.**
5. **Přenést jen schválená opatření do 30denního plánu.**

Jednotlivé kroky mají být provedeny v uvedeném pořadí. Pokud některý z nich nelze potvrdit, je lepší plán upravit než pokračovat s nejasným rizikem. Výsledek kontroly má zůstat dohledatelný v rozsahu, který je pro dané téma přiměřený; není nutné ukládat citlivé údaje, které k rozhodnutí nejsou potřeba.

## Praktický příklad

OSVČ lektor připraví pro administrativní tým scénář pravidelného reportu. Účastníci nastaví trigger a rozpočet, ale zapomenou na omezení exportu. Simulace ukáže riziko, skupina doplní hook a v opakovaném běhu správně zachytí nepovolený cíl.

Příklad ukazuje, že dobré řešení nemusí být složité. Rozhodující je včas zachytit konkrétní nesoulad a nabídnout bezpečnou další volbu. Stejný princip lze opakovat u dalších situací: nejprve popsat očekávaný stav, potom ověřit realitu, zaznamenat rozdíl a určit jediný další krok s vlastníkem.

## Jak využít nástroj Agent Ops Lab

Webový simulátor pro firemnilektor.cz řídí scénáře agentního provozu a vytváří měřitelný týmový akční plán. Minimální verze zahrnuje: správa B2B klientů a běhů, anonymizované scénáře, nástroje, hooky, rozpočet, trigger, simulace porušení, auditní log, role, pre/post test, PDF akční plán a retence. Nástroj má uživatele vést, nikoli za něj skrývat rozhodnutí. U každého výsledku proto zobrazí zdroj, datum, stav kontroly a srozumitelné vysvětlení.

Při návrhu je důležitá bezpečnost a přístupnost. Rozhraní musí fungovat na telefonu, klávesnicí i s asistivními technologiemi. Data se mají ukládat jen v nezbytném rozsahu, s jasnou dobou uchování a možností exportu nebo výmazu. Automatická oprava nebo rozhodnutí se nesmí spustit tam, kde je potřeba lidské potvrzení.

## Jak poznat, že postup funguje

Úspěch se neměří počtem vyplněných polí, ale výsledkem: zlepšení pre/post testu, správně vysvětlené blokace, konkrétní vlastník opatření a ověření změny do 30 dní. První kontrola vytvoří výchozí stav. Druhá ověří, zda se podařilo odstranit riziko a zda nový postup lidé skutečně používají. Pokud měření nevede k rozhodnutí, je příliš obecné.

Praktické je sledovat tři úrovně: úplnost vstupů, počet zachycených problémů předem a skutečnou změnu chování. Díky tomu se z jednorázového článku stane použitelný proces. Téma se má znovu otevřít při změně podmínek, nástroje, trasy, produktu nebo odpovědné osoby.

## Závěr

Aplikaci používejte jako trenažér, nikoli jako certifikaci produkčního systému. Výstup musí obsahovat odůvodnění, vlastníka nápravy a kontrolu reálné konfigurace po školení. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tak vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Objednejte praktický B2B workshop přes firemnilektor.cz a přineste vlastní anonymizovaný scénář.

## Blog pro Enfold

<h1>Agent Ops Lab: simulátor hooků, rozpočtů a plánovaných běhů</h1>
<p class="perex">Agent Ops Lab nechá účastníky nastavit tři provozní limity, spustit anonymizovaný scénář a sledovat, zda agent dokončí úlohu, překročí rozpočet nebo narazí na blokující hook.</p>
<h2>Co se změnilo a co z toho plyne</h2>
<p>Agent Ops Lab nechá účastníky nastavit tři provozní limity, spustit anonymizovaný scénář a sledovat, zda agent dokončí úlohu, překročí rozpočet nebo narazí na blokující hook. Téma není jen technická poznámka. Pro OSVČ firemní lektoři a B2B klienti firemnilektor.cz jde o konkrétní rozhodnutí, které ovlivňuje bezpečnost, použitelnost a důvěru. Základní pravidlo zní: Aplikaci používejte jako trenažér, nikoli jako certifikaci produkčního systému. Výstup musí obsahovat odůvodnění, vlastníka nápravy a kontrolu reálné konfigurace po školení.</p>
<p>Oficiální zdroj potvrzuje tři podstatné body. Zaprvé: Nové Managed Agents poskytují pozorovatelné kontrolní body vhodné pro scénářové učení. Zadruhé: Hook, rozpočet a trigger lze testovat odděleně i v kombinaci. Zatřetí: Zablokovaný běh je cenný výukový výsledek, pokud účastník umí vysvětlit jeho příčinu. Tyto body je potřeba číst společně. Samotná nová možnost nebo doporučení nepřináší výsledek, dokud není převedeno do jasného postupu, odpovědnosti a ověřitelné kontroly.</p>
<h2>Proč nestačí obecné doporučení</h2>
<p>Simulátor umožní měřit výsledek praktického B2B školení, opakovat scénáře a ukázat rozdíl mezi špatně nastaveným a bezpečně řízeným během bez práce s ostrými daty. Obecná věta typu „dávejte pozor“ nepomůže ve chvíli, kdy je třeba jednat. Použitelný postup musí říci, co se kontroluje, kdo kontrolu provede, kdy se má zastavit a jak se pozná, že je výsledek v pořádku. Právě proto má smysl spojit obsah s praktickým nástrojem Agent Ops Lab.</p>
<p>Nejčastější problémy jsou konkrétní: uložení citlivého popisu klientského procesu; výsledek simulace bude vydáván za audit produkce; a skóre potlačí důležité odůvodnění účastníků. Každý z nich lze zachytit předem, pokud je kontrola krátká, srozumitelná a opakovatelná. Cílem není přidat další administrativu. Cílem je zabránit situaci, kdy se důležitá podmínka řeší až ve chvíli, kdy už vznikl problém.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol>
<li><strong>Anonymizovat klientský scénář před importem.</strong></li>
<li><strong>Oddělit simulaci od produkční konfigurace.</strong></li>
<li><strong>Ukládat rozhodnutí i slovní odůvodnění.</strong></li>
<li><strong>Nastavit automatický výmaz běhu.</strong></li>
<li><strong>Přenést jen schválená opatření do 30denního plánu.</strong></li>
</ol>
<p>Jednotlivé kroky mají být provedeny v uvedeném pořadí. Pokud některý z nich nelze potvrdit, je lepší plán upravit než pokračovat s nejasným rizikem. Výsledek kontroly má zůstat dohledatelný v rozsahu, který je pro dané téma přiměřený; není nutné ukládat citlivé údaje, které k rozhodnutí nejsou potřeba.</p>
<h2>Praktický příklad</h2>
<p>OSVČ lektor připraví pro administrativní tým scénář pravidelného reportu. Účastníci nastaví trigger a rozpočet, ale zapomenou na omezení exportu. Simulace ukáže riziko, skupina doplní hook a v opakovaném běhu správně zachytí nepovolený cíl.</p>
<p>Příklad ukazuje, že dobré řešení nemusí být složité. Rozhodující je včas zachytit konkrétní nesoulad a nabídnout bezpečnou další volbu. Stejný princip lze opakovat u dalších situací: nejprve popsat očekávaný stav, potom ověřit realitu, zaznamenat rozdíl a určit jediný další krok s vlastníkem.</p>
<h2>Jak využít nástroj Agent Ops Lab</h2>
<p>Webový simulátor pro firemnilektor.cz řídí scénáře agentního provozu a vytváří měřitelný týmový akční plán. Minimální verze zahrnuje: správa B2B klientů a běhů, anonymizované scénáře, nástroje, hooky, rozpočet, trigger, simulace porušení, auditní log, role, pre/post test, PDF akční plán a retence. Nástroj má uživatele vést, nikoli za něj skrývat rozhodnutí. U každého výsledku proto zobrazí zdroj, datum, stav kontroly a srozumitelné vysvětlení.</p>
<p>Při návrhu je důležitá bezpečnost a přístupnost. Rozhraní musí fungovat na telefonu, klávesnicí i s asistivními technologiemi. Data se mají ukládat jen v nezbytném rozsahu, s jasnou dobou uchování a možností exportu nebo výmazu. Automatická oprava nebo rozhodnutí se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<h2>Jak poznat, že postup funguje</h2>
<p>Úspěch se neměří počtem vyplněných polí, ale výsledkem: zlepšení pre/post testu, správně vysvětlené blokace, konkrétní vlastník opatření a ověření změny do 30 dní. První kontrola vytvoří výchozí stav. Druhá ověří, zda se podařilo odstranit riziko a zda nový postup lidé skutečně používají. Pokud měření nevede k rozhodnutí, je příliš obecné.</p>
<p>Praktické je sledovat tři úrovně: úplnost vstupů, počet zachycených problémů předem a skutečnou změnu chování. Díky tomu se z jednorázového článku stane použitelný proces. Téma se má znovu otevřít při změně podmínek, nástroje, trasy, produktu nebo odpovědné osoby.</p>
<h2>Závěr</h2>
<p>Aplikaci používejte jako trenažér, nikoli jako certifikaci produkčního systému. Výstup musí obsahovat odůvodnění, vlastníka nápravy a kontrolu reálné konfigurace po školení. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tak vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Objednejte praktický B2B workshop přes firemnilektor.cz a přineste vlastní anonymizovaný scénář.</p>


## Facebook text

Agent Ops Lab: simulátor hooků, rozpočtů a plánovaných běhů

Agent Ops Lab nechá účastníky nastavit tři provozní limity, spustit anonymizovaný scénář a sledovat, zda agent dokončí úlohu, překročí rozpočet nebo narazí na blokující hook.

Aplikaci používejte jako trenažér, nikoli jako certifikaci produkčního systému. Výstup musí obsahovat odůvodnění, vlastníka nápravy a kontrolu reálné konfigurace po školení.

Praktická pomůcka: Agent Ops Lab. OSVČ lektor nabídne firmám praktický produkt s pre/post testem, vlastním scénářem a doložitelným výsledkem.

Zjistit více: https://www.firemnilektor.cz/

## LinkedIn text

Agent Ops Lab: simulátor hooků, rozpočtů a plánovaných běhů

Simulátor umožní měřit výsledek praktického B2B školení, opakovat scénáře a ukázat rozdíl mezi špatně nastaveným a bezpečně řízeným během bez práce s ostrými daty.

Doporučený první krok: anonymizovat klientský scénář před importem. Potom oddělit simulaci od produkční konfigurace a výsledek zapsat tak, aby byl dohledatelný.

Agent Ops Lab: Webový simulátor pro firemnilektor.cz řídí scénáře agentního provozu a vytváří měřitelný týmový akční plán.

OSVČ lektor nabídne firmám praktický produkt s pre/post testem, vlastním scénářem a doložitelným výsledkem.

https://www.firemnilektor.cz/

## Instagram caption

Agent Ops Lab: simulátor hooků, rozpočtů a plánovaných běhů

Agent Ops Lab nechá účastníky nastavit tři provozní limity, spustit anonymizovaný scénář a sledovat, zda agent dokončí úlohu, překročí rozpočet nebo narazí na blokující hook.

✅ anonymizovat klientský scénář před importem
✅ oddělit simulaci od produkční konfigurace
✅ ukládat rozhodnutí i slovní odůvodnění

Aplikaci používejte jako trenažér, nikoli jako certifikaci produkčního systému. Výstup musí obsahovat odůvodnění, vlastníka nápravy a kontrolu reálné konfigurace po školení.

https://www.firemnilektor.cz/

#Firemnílektor #praktickytip #AgentOpsLab

## Čistý publikační text pro Facebook

Agent Ops Lab: simulátor hooků, rozpočtů a plánovaných běhů

Agent Ops Lab nechá účastníky nastavit tři provozní limity, spustit anonymizovaný scénář a sledovat, zda agent dokončí úlohu, překročí rozpočet nebo narazí na blokující hook.

Aplikaci používejte jako trenažér, nikoli jako certifikaci produkčního systému. Výstup musí obsahovat odůvodnění, vlastníka nápravy a kontrolu reálné konfigurace po školení.

Praktická pomůcka: Agent Ops Lab. OSVČ lektor nabídne firmám praktický produkt s pre/post testem, vlastním scénářem a doložitelným výsledkem.

Zjistit více: https://www.firemnilektor.cz/

## Čistý publikační text pro LinkedIn

Agent Ops Lab: simulátor hooků, rozpočtů a plánovaných běhů

Simulátor umožní měřit výsledek praktického B2B školení, opakovat scénáře a ukázat rozdíl mezi špatně nastaveným a bezpečně řízeným během bez práce s ostrými daty.

Doporučený první krok: anonymizovat klientský scénář před importem. Potom oddělit simulaci od produkční konfigurace a výsledek zapsat tak, aby byl dohledatelný.

Agent Ops Lab: Webový simulátor pro firemnilektor.cz řídí scénáře agentního provozu a vytváří měřitelný týmový akční plán.

OSVČ lektor nabídne firmám praktický produkt s pre/post testem, vlastním scénářem a doložitelným výsledkem.

https://www.firemnilektor.cz/

## Čistý publikační text pro Instagram

Agent Ops Lab: simulátor hooků, rozpočtů a plánovaných běhů

Agent Ops Lab nechá účastníky nastavit tři provozní limity, spustit anonymizovaný scénář a sledovat, zda agent dokončí úlohu, překročí rozpočet nebo narazí na blokující hook.

✅ anonymizovat klientský scénář před importem
✅ oddělit simulaci od produkční konfigurace
✅ ukládat rozhodnutí i slovní odůvodnění

Aplikaci používejte jako trenažér, nikoli jako certifikaci produkčního systému. Výstup musí obsahovat odůvodnění, vlastníka nápravy a kontrolu reálné konfigurace po školení.

https://www.firemnilektor.cz/

#Firemnílektor #praktickytip #AgentOpsLab

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** Agent Ops Lab: simulátor hooků, rozpočtů a plánovaných běhů

**Scénář po sekundách:** 0–2 s výrazný detail a hook; 2–7 s Agent Ops Lab nechá účastníky nastavit tři provozní limity, spustit anonymizovaný scénář a sledovat, zda agent dokončí úlohu, překročí rozpočet nebo narazí na blokující hook.; 7–10 s Agent Ops Lab a CTA.

**Mluvený text:** Povolit, potvrdit, nebo zastavit? Praktický trénink naučí tým rozhodnout u každé akce AI agenta.

**Text na obrazovku:** Agent Ops Lab: simulátor hooků, rozpočtů a plánovaných běhů / Agent Ops Lab / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte Agent Ops Lab.

**Hashtagy:** #Firemnílektor #praktickynavod #bezpecnypostup

**Cover:** Agent Ops Lab: simulátor hooků, rozpočtů a plánovaných běhů

**Prompt pro Gemini Flow / Omni:** Vytvoř jedno souvislé vertikální video 9:16 o délce přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Povolit, potvrdit, nebo zastavit? Praktický trénink naučí tým rozhodnout u každé akce AI agenta.“ 0–2 s hook, 2–7 s konkrétní situace, 7–10 s vizuální pointa a CTA. Žádné useknuté věty, žádný další dialog, žádné automaticky generované logo ani drobný nečitelný text.

## YouTube Shorts popisek

Agent Ops Lab nechá účastníky nastavit tři provozní limity, spustit anonymizovaný scénář a sledovat, zda agent dokončí úlohu, překročí rozpočet nebo narazí na blokující hook. Aplikaci používejte jako trenažér, nikoli jako certifikaci produkčního systému. Výstup musí obsahovat odůvodnění, vlastníka nápravy a kontrolu reálné konfigurace po školení. Více na https://www.firemnilektor.cz/

## Text do grafiky

Agent Ops Lab: simulátor hooků, rozpočtů a plánovaných běhů

Agent Ops Lab

## CTA

Objednejte praktický workshop na firemnilektor.cz.

## Alt text

Agent Ops Lab: simulátor hooků, rozpočtů a plánovaných běhů: názorné zobrazení konkrétního postupu a nástroje Agent Ops Lab.

## Prompt na obrázek

Moderní realistický B2B workshop k tématu Agent Ops Lab: simulátor hooků, rozpočtů a plánovaných běhů: firemní tým pracuje s kartami scénářů a rozhodovací mapou, neutrální profesionální styl, podpis firemnilektor.cz, bez značky Agenda24 a bez robotů.

## Reference k obrázku

Použij výhradně manifest značky firemni-lektor a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden český hlas. Scénář: 0–2 s hook; 2–7 s konkrétní důkaz; 7–10 s řešení Agent Ops Lab a CTA. Replika: „Povolit, potvrdit, nebo zastavit? Praktický trénink naučí tým rozhodnout u každé akce AI agenta.“ Věta musí skončit nejpozději v 8. sekundě. Bez useknutí, bez dalšího dialogu, bez generovaných log.

## Reference k videu

Vizuální pravidla čti pouze z manifestu firemni-lektor; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**Agent Ops Lab** — Webový simulátor pro firemnilektor.cz řídí scénáře agentního provozu a vytváří měřitelný týmový akční plán.

Přínos: OSVČ lektor nabídne firmám praktický produkt s pre/post testem, vlastním scénářem a doložitelným výsledkem.

## MVP verze

správa B2B klientů a běhů, anonymizované scénáře, nástroje, hooky, rozpočet, trigger, simulace porušení, auditní log, role, pre/post test, PDF akční plán a retence

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „Agent Ops Lab“ pro projekt Firemní lektor. Funkce: správa B2B klientů a běhů, anonymizované scénáře, nástroje, hooky, rozpočet, trigger, simulace porušení, auditní log, role, pre/post test, PDF akční plán a retence. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: OSVČ lektor nabídne firmám praktický produkt s pre/post testem, vlastním scénářem a doložitelným výsledkem. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace.
