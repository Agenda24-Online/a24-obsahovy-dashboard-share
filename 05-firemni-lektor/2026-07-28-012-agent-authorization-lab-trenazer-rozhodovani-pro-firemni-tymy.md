---
title: "Agent Authorization Lab: trenažér rozhodování pro firemní týmy"
date: 2026-07-28
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
tags: ["tip na aplikaci", "Školící aplikace a simulátory", "Agent Authorization Lab"]
source_summary: "Google Security Blog – Going Beyond Zero: a new paradigm for enterprise security (27. 7. 2026)"
value_feature_type: "B2B školící aplikace"
value_feature_name: "Agent Authorization Lab"
value_feature_summary: "Webový trenažér pro firemnilektor.cz řídí scénáře AI agenta, sbírá rozhodnutí a vytváří týmový akční plán."
value_feature_benefit: "OSVČ lektor nabídne firmám měřitelný praktický workshop s vlastním scénářem a exportovatelným výsledkem."
value_feature_mvp: "správa klientů a běhů, anonymizované scénáře, role, volby povolit/potvrdit/zastavit, odůvodnění, čas, výsledkový dashboard, pre/post test, PDF akční plán a retenční pravidla"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „Agent Authorization Lab“ pro projekt Firemní lektor. Funkce: správa klientů a běhů, anonymizované scénáře, role, volby povolit/potvrdit/zastavit, odůvodnění, čas, výsledkový dashboard, pre/post test, PDF akční plán a retenční pravidla. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: OSVČ lektor nabídne firmám měřitelný praktický workshop s vlastním scénářem a exportovatelným výsledkem. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace."
firemni_lektor_area: "Školící aplikace a simulátory"
---

## Shrnutí

Agent Authorization Lab simuluje kroky AI agenta a nechá účastníky rozhodovat mezi povolením, potvrzením a zastavením. Lektor vidí výsledky skupiny, rozpory a doporučené body k diskusi.

## Zdroje

- [Google Security Blog – Going Beyond Zero: a new paradigm for enterprise security (27. 7. 2026)](https://blog.google/security/going-beyond-zero-a-new-paradigm-for-enterprise-security/)

## Proč je to důležité

Opakovatelný simulátor umožní porovnat vstupní a výstupní úroveň, použít vlastní scénáře klienta a doložit konkrétní výsledek B2B školení.

## Doporučení

Aplikace nesmí pracovat s ostrými firemními daty. Scénáře anonymizujte a výsledek používejte jako podklad pro rozhodnutí odpovědných osob, ne jako automatickou bezpečnostní certifikaci.

## SEO titulek

Agent Authorization Lab: trenažér rozhodování pro firemní týmy | Firemní lektor

## Meta popis

Agent Authorization Lab simuluje kroky AI agenta a nechá účastníky rozhodovat mezi povolením, potvrzením a zastavením. Lektor vidí výsledky skupiny, rozpor

## Perex

Agent Authorization Lab simuluje kroky AI agenta a nechá účastníky rozhodovat mezi povolením, potvrzením a zastavením. Lektor vidí výsledky skupiny, rozpory a doporučené body k diskusi. Aplikace nesmí pracovat s ostrými firemními daty. Scénáře anonymizujte a výsledek používejte jako podklad pro rozhodnutí odpovědných osob, ne jako automatickou bezpečnostní certifikaci.

## Blogový titulek

Agent Authorization Lab: trenažér rozhodování pro firemní týmy

## Osnova blogu

1. Co se změnilo a co z toho plyne
2. Proč nestačí obecné doporučení
3. Doporučený postup krok za krokem
4. Praktický příklad
5. Jak využít nástroj Agent Authorization Lab
6. Jak poznat, že postup funguje
7. Závěr a další krok

## Blogový draft

# Agent Authorization Lab: trenažér rozhodování pro firemní týmy

## Co se změnilo a co z toho plyne

Agent Authorization Lab simuluje kroky AI agenta a nechá účastníky rozhodovat mezi povolením, potvrzením a zastavením. Lektor vidí výsledky skupiny, rozpory a doporučené body k diskusi. Téma není jen technická poznámka. Pro OSVČ firemní lektoři a B2B klienti firemnilektor.cz jde o konkrétní rozhodnutí, které ovlivňuje bezpečnost, použitelnost a důvěru. Základní pravidlo zní: Aplikace nesmí pracovat s ostrými firemními daty. Scénáře anonymizujte a výsledek používejte jako podklad pro rozhodnutí odpovědných osob, ne jako automatickou bezpečnostní certifikaci.

Oficiální zdroj potvrzuje tři podstatné body. Zaprvé: Autorizace jednotlivých akcí je vhodná pro scénářové učení. Zadruhé: Dynamický kontext lze procvičit změnou hodnoty, času, role nebo cílového zdroje. Zatřetí: Výzva a omezení rizikové akce jsou pozorovatelné výsledky, které lze měřit. Tyto body je potřeba číst společně. Samotná nová možnost nebo doporučení nepřináší výsledek, dokud není převedeno do jasného postupu, odpovědnosti a ověřitelné kontroly.

## Proč nestačí obecné doporučení

Opakovatelný simulátor umožní porovnat vstupní a výstupní úroveň, použít vlastní scénáře klienta a doložit konkrétní výsledek B2B školení. Obecná věta typu „dávejte pozor“ nepomůže ve chvíli, kdy je třeba jednat. Použitelný postup musí říci, co se kontroluje, kdo kontrolu provede, kdy se má zastavit a jak se pozná, že je výsledek v pořádku. Právě proto má smysl spojit obsah s praktickým nástrojem Agent Authorization Lab.

Nejčastější problémy jsou konkrétní: uložení citlivého popisu interního procesu; přílišná gamifikace závažného rozhodnutí; a výsledkové skóre bez vysvětlení rozdílů mezi rolemi. Každý z nich lze zachytit předem, pokud je kontrola krátká, srozumitelná a opakovatelná. Cílem není přidat další administrativu. Cílem je zabránit situaci, kdy se důležitá podmínka řeší až ve chvíli, kdy už vznikl problém.

## Doporučený postup krok za krokem

1. **Používat anonymizované šablony.**
2. **Umožnit klientovi schválit scénář před během.**
3. **Zobrazit rozdíly i odůvodnění.**
4. **Nastavit automatické mazání dat.**
5. **Vytvořit konkrétní 30denní akční plán.**

Jednotlivé kroky mají být provedeny v uvedeném pořadí. Pokud některý z nich nelze potvrdit, je lepší plán upravit než pokračovat s nejasným rizikem. Výsledek kontroly má zůstat dohledatelný v rozsahu, který je pro dané téma přiměřený; není nutné ukládat citlivé údaje, které k rozhodnutí nejsou potřeba.

## Praktický příklad

OSVČ lektor připraví pro výrobní firmu šest anonymizovaných situací. Účastníci rozhodují samostatně, potom porovnají výsledky podle rolí. Dashboard ukáže, že tým nemá shodu u exportu dat a externího odeslání. Tyto dva body se stanou prioritou akčního plánu.

Příklad ukazuje, že dobré řešení nemusí být složité. Rozhodující je včas zachytit konkrétní nesoulad a nabídnout bezpečnou další volbu. Stejný princip lze opakovat u dalších situací: nejprve popsat očekávaný stav, potom ověřit realitu, zaznamenat rozdíl a určit jediný další krok s vlastníkem.

## Jak využít nástroj Agent Authorization Lab

Webový trenažér pro firemnilektor.cz řídí scénáře AI agenta, sbírá rozhodnutí a vytváří týmový akční plán. Minimální verze zahrnuje: správa klientů a běhů, anonymizované scénáře, role, volby povolit/potvrdit/zastavit, odůvodnění, čas, výsledkový dashboard, pre/post test, PDF akční plán a retenční pravidla. Nástroj má uživatele vést, nikoli za něj skrývat rozhodnutí. U každého výsledku proto zobrazí zdroj, datum, stav kontroly a srozumitelné vysvětlení.

Při návrhu je důležitá bezpečnost a přístupnost. Rozhraní musí fungovat na telefonu, klávesnicí i s asistivními technologiemi. Data se mají ukládat jen v nezbytném rozsahu, s jasnou dobou uchování a možností exportu nebo výmazu. Automatická oprava nebo rozhodnutí se nesmí spustit tam, kde je potřeba lidské potvrzení.

## Jak poznat, že postup funguje

Úspěch se neměří počtem vyplněných polí, ale výsledkem: zlepšení pre/post testu, počet vyřešených rozporů, konkrétní vlastník opatření a zpětná kontrola do 30 dní. První kontrola vytvoří výchozí stav. Druhá ověří, zda se podařilo odstranit riziko a zda nový postup lidé skutečně používají. Pokud měření nevede k rozhodnutí, je příliš obecné.

Praktické je sledovat tři úrovně: úplnost vstupů, počet zachycených problémů předem a skutečnou změnu chování. Díky tomu se z jednorázového článku stane použitelný proces. Téma se má znovu otevřít při změně podmínek, nástroje, trasy, produktu nebo odpovědné osoby.

## Závěr

Aplikace nesmí pracovat s ostrými firemními daty. Scénáře anonymizujte a výsledek používejte jako podklad pro rozhodnutí odpovědných osob, ne jako automatickou bezpečnostní certifikaci. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tak vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Objednejte praktický B2B workshop přes firemnilektor.cz a přineste vlastní anonymizovaný scénář.

## Blog pro Enfold

<h1>Agent Authorization Lab: trenažér rozhodování pro firemní týmy</h1>
<p class="perex">Agent Authorization Lab simuluje kroky AI agenta a nechá účastníky rozhodovat mezi povolením, potvrzením a zastavením. Lektor vidí výsledky skupiny, rozpory a doporučené body k diskusi.</p>
<h2>Co se změnilo a co z toho plyne</h2>
<p>Agent Authorization Lab simuluje kroky AI agenta a nechá účastníky rozhodovat mezi povolením, potvrzením a zastavením. Lektor vidí výsledky skupiny, rozpory a doporučené body k diskusi. Téma není jen technická poznámka. Pro OSVČ firemní lektoři a B2B klienti firemnilektor.cz jde o konkrétní rozhodnutí, které ovlivňuje bezpečnost, použitelnost a důvěru. Základní pravidlo zní: Aplikace nesmí pracovat s ostrými firemními daty. Scénáře anonymizujte a výsledek používejte jako podklad pro rozhodnutí odpovědných osob, ne jako automatickou bezpečnostní certifikaci.</p>
<p>Oficiální zdroj potvrzuje tři podstatné body. Zaprvé: Autorizace jednotlivých akcí je vhodná pro scénářové učení. Zadruhé: Dynamický kontext lze procvičit změnou hodnoty, času, role nebo cílového zdroje. Zatřetí: Výzva a omezení rizikové akce jsou pozorovatelné výsledky, které lze měřit. Tyto body je potřeba číst společně. Samotná nová možnost nebo doporučení nepřináší výsledek, dokud není převedeno do jasného postupu, odpovědnosti a ověřitelné kontroly.</p>
<h2>Proč nestačí obecné doporučení</h2>
<p>Opakovatelný simulátor umožní porovnat vstupní a výstupní úroveň, použít vlastní scénáře klienta a doložit konkrétní výsledek B2B školení. Obecná věta typu „dávejte pozor“ nepomůže ve chvíli, kdy je třeba jednat. Použitelný postup musí říci, co se kontroluje, kdo kontrolu provede, kdy se má zastavit a jak se pozná, že je výsledek v pořádku. Právě proto má smysl spojit obsah s praktickým nástrojem Agent Authorization Lab.</p>
<p>Nejčastější problémy jsou konkrétní: uložení citlivého popisu interního procesu; přílišná gamifikace závažného rozhodnutí; a výsledkové skóre bez vysvětlení rozdílů mezi rolemi. Každý z nich lze zachytit předem, pokud je kontrola krátká, srozumitelná a opakovatelná. Cílem není přidat další administrativu. Cílem je zabránit situaci, kdy se důležitá podmínka řeší až ve chvíli, kdy už vznikl problém.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol>
<li><strong>Používat anonymizované šablony.</strong></li>
<li><strong>Umožnit klientovi schválit scénář před během.</strong></li>
<li><strong>Zobrazit rozdíly i odůvodnění.</strong></li>
<li><strong>Nastavit automatické mazání dat.</strong></li>
<li><strong>Vytvořit konkrétní 30denní akční plán.</strong></li>
</ol>
<p>Jednotlivé kroky mají být provedeny v uvedeném pořadí. Pokud některý z nich nelze potvrdit, je lepší plán upravit než pokračovat s nejasným rizikem. Výsledek kontroly má zůstat dohledatelný v rozsahu, který je pro dané téma přiměřený; není nutné ukládat citlivé údaje, které k rozhodnutí nejsou potřeba.</p>
<h2>Praktický příklad</h2>
<p>OSVČ lektor připraví pro výrobní firmu šest anonymizovaných situací. Účastníci rozhodují samostatně, potom porovnají výsledky podle rolí. Dashboard ukáže, že tým nemá shodu u exportu dat a externího odeslání. Tyto dva body se stanou prioritou akčního plánu.</p>
<p>Příklad ukazuje, že dobré řešení nemusí být složité. Rozhodující je včas zachytit konkrétní nesoulad a nabídnout bezpečnou další volbu. Stejný princip lze opakovat u dalších situací: nejprve popsat očekávaný stav, potom ověřit realitu, zaznamenat rozdíl a určit jediný další krok s vlastníkem.</p>
<h2>Jak využít nástroj Agent Authorization Lab</h2>
<p>Webový trenažér pro firemnilektor.cz řídí scénáře AI agenta, sbírá rozhodnutí a vytváří týmový akční plán. Minimální verze zahrnuje: správa klientů a běhů, anonymizované scénáře, role, volby povolit/potvrdit/zastavit, odůvodnění, čas, výsledkový dashboard, pre/post test, PDF akční plán a retenční pravidla. Nástroj má uživatele vést, nikoli za něj skrývat rozhodnutí. U každého výsledku proto zobrazí zdroj, datum, stav kontroly a srozumitelné vysvětlení.</p>
<p>Při návrhu je důležitá bezpečnost a přístupnost. Rozhraní musí fungovat na telefonu, klávesnicí i s asistivními technologiemi. Data se mají ukládat jen v nezbytném rozsahu, s jasnou dobou uchování a možností exportu nebo výmazu. Automatická oprava nebo rozhodnutí se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<h2>Jak poznat, že postup funguje</h2>
<p>Úspěch se neměří počtem vyplněných polí, ale výsledkem: zlepšení pre/post testu, počet vyřešených rozporů, konkrétní vlastník opatření a zpětná kontrola do 30 dní. První kontrola vytvoří výchozí stav. Druhá ověří, zda se podařilo odstranit riziko a zda nový postup lidé skutečně používají. Pokud měření nevede k rozhodnutí, je příliš obecné.</p>
<p>Praktické je sledovat tři úrovně: úplnost vstupů, počet zachycených problémů předem a skutečnou změnu chování. Díky tomu se z jednorázového článku stane použitelný proces. Téma se má znovu otevřít při změně podmínek, nástroje, trasy, produktu nebo odpovědné osoby.</p>
<h2>Závěr</h2>
<p>Aplikace nesmí pracovat s ostrými firemními daty. Scénáře anonymizujte a výsledek používejte jako podklad pro rozhodnutí odpovědných osob, ne jako automatickou bezpečnostní certifikaci. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tak vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Objednejte praktický B2B workshop přes firemnilektor.cz a přineste vlastní anonymizovaný scénář.</p>


## Facebook text

Agent Authorization Lab: trenažér rozhodování pro firemní týmy

Agent Authorization Lab simuluje kroky AI agenta a nechá účastníky rozhodovat mezi povolením, potvrzením a zastavením. Lektor vidí výsledky skupiny, rozpory a doporučené body k diskusi.

Aplikace nesmí pracovat s ostrými firemními daty. Scénáře anonymizujte a výsledek používejte jako podklad pro rozhodnutí odpovědných osob, ne jako automatickou bezpečnostní certifikaci.

Praktická pomůcka: Agent Authorization Lab. OSVČ lektor nabídne firmám měřitelný praktický workshop s vlastním scénářem a exportovatelným výsledkem.

Zjistit více: https://www.firemnilektor.cz/

## LinkedIn text

Agent Authorization Lab: trenažér rozhodování pro firemní týmy

Opakovatelný simulátor umožní porovnat vstupní a výstupní úroveň, použít vlastní scénáře klienta a doložit konkrétní výsledek B2B školení.

Doporučený první krok: používat anonymizované šablony. Potom umožnit klientovi schválit scénář před během a výsledek zapsat tak, aby byl dohledatelný.

Agent Authorization Lab: Webový trenažér pro firemnilektor.cz řídí scénáře AI agenta, sbírá rozhodnutí a vytváří týmový akční plán.

OSVČ lektor nabídne firmám měřitelný praktický workshop s vlastním scénářem a exportovatelným výsledkem.

https://www.firemnilektor.cz/

## Instagram caption

Agent Authorization Lab: trenažér rozhodování pro firemní týmy

Agent Authorization Lab simuluje kroky AI agenta a nechá účastníky rozhodovat mezi povolením, potvrzením a zastavením. Lektor vidí výsledky skupiny, rozpory a doporučené body k diskusi.

✅ používat anonymizované šablony
✅ umožnit klientovi schválit scénář před během
✅ zobrazit rozdíly i odůvodnění

Aplikace nesmí pracovat s ostrými firemními daty. Scénáře anonymizujte a výsledek používejte jako podklad pro rozhodnutí odpovědných osob, ne jako automatickou bezpečnostní certifikaci.

https://www.firemnilektor.cz/

#Firemnílektor #praktickytip #AgentAuthorizationLab

## Čistý publikační text pro Facebook

Agent Authorization Lab: trenažér rozhodování pro firemní týmy

Agent Authorization Lab simuluje kroky AI agenta a nechá účastníky rozhodovat mezi povolením, potvrzením a zastavením. Lektor vidí výsledky skupiny, rozpory a doporučené body k diskusi.

Aplikace nesmí pracovat s ostrými firemními daty. Scénáře anonymizujte a výsledek používejte jako podklad pro rozhodnutí odpovědných osob, ne jako automatickou bezpečnostní certifikaci.

Praktická pomůcka: Agent Authorization Lab. OSVČ lektor nabídne firmám měřitelný praktický workshop s vlastním scénářem a exportovatelným výsledkem.

Zjistit více: https://www.firemnilektor.cz/

## Čistý publikační text pro LinkedIn

Agent Authorization Lab: trenažér rozhodování pro firemní týmy

Opakovatelný simulátor umožní porovnat vstupní a výstupní úroveň, použít vlastní scénáře klienta a doložit konkrétní výsledek B2B školení.

Doporučený první krok: používat anonymizované šablony. Potom umožnit klientovi schválit scénář před během a výsledek zapsat tak, aby byl dohledatelný.

Agent Authorization Lab: Webový trenažér pro firemnilektor.cz řídí scénáře AI agenta, sbírá rozhodnutí a vytváří týmový akční plán.

OSVČ lektor nabídne firmám měřitelný praktický workshop s vlastním scénářem a exportovatelným výsledkem.

https://www.firemnilektor.cz/

## Čistý publikační text pro Instagram

Agent Authorization Lab: trenažér rozhodování pro firemní týmy

Agent Authorization Lab simuluje kroky AI agenta a nechá účastníky rozhodovat mezi povolením, potvrzením a zastavením. Lektor vidí výsledky skupiny, rozpory a doporučené body k diskusi.

✅ používat anonymizované šablony
✅ umožnit klientovi schválit scénář před během
✅ zobrazit rozdíly i odůvodnění

Aplikace nesmí pracovat s ostrými firemními daty. Scénáře anonymizujte a výsledek používejte jako podklad pro rozhodnutí odpovědných osob, ne jako automatickou bezpečnostní certifikaci.

https://www.firemnilektor.cz/

#Firemnílektor #praktickytip #AgentAuthorizationLab

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** Agent Authorization Lab: trenažér rozhodování pro firemní týmy

**Scénář po sekundách:** 0–2 s výrazný detail a hook; 2–7 s Agent Authorization Lab simuluje kroky AI agenta a nechá účastníky rozhodovat mezi povolením, potvrzením a zastavením. Lektor vidí výsledky skupiny, rozpory a doporučené body k diskusi.; 7–10 s Agent Authorization Lab a CTA.

**Mluvený text:** Povolit, potvrdit, nebo zastavit? Praktický trénink naučí tým rozhodnout u každé akce AI agenta.

**Text na obrazovku:** Agent Authorization Lab: trenažér rozhodování pro firemní týmy / Agent Authorization Lab / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte Agent Authorization Lab.

**Hashtagy:** #Firemnílektor #praktickynavod #bezpecnypostup

**Cover:** Agent Authorization Lab: trenažér rozhodování pro firemní týmy

**Prompt pro Gemini Flow / Omni:** Vytvoř jedno souvislé vertikální video 9:16 o délce přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Povolit, potvrdit, nebo zastavit? Praktický trénink naučí tým rozhodnout u každé akce AI agenta.“ 0–2 s hook, 2–7 s konkrétní situace, 7–10 s vizuální pointa a CTA. Žádné useknuté věty, žádný další dialog, žádné automaticky generované logo ani drobný nečitelný text.

## YouTube Shorts popisek

Agent Authorization Lab simuluje kroky AI agenta a nechá účastníky rozhodovat mezi povolením, potvrzením a zastavením. Lektor vidí výsledky skupiny, rozpory a doporučené body k diskusi. Aplikace nesmí pracovat s ostrými firemními daty. Scénáře anonymizujte a výsledek používejte jako podklad pro rozhodnutí odpovědných osob, ne jako automatickou bezpečnostní certifikaci. Více na https://www.firemnilektor.cz/

## Text do grafiky

Agent Authorization Lab: trenažér rozhodování pro firemní týmy

Agent Authorization Lab

## CTA

Objednejte praktický workshop na firemnilektor.cz.

## Alt text

Agent Authorization Lab: trenažér rozhodování pro firemní týmy: názorné zobrazení konkrétního postupu a nástroje Agent Authorization Lab.

## Prompt na obrázek

Moderní realistický B2B workshop k tématu Agent Authorization Lab: trenažér rozhodování pro firemní týmy: firemní tým pracuje s kartami scénářů a rozhodovací mapou, neutrální profesionální styl, podpis firemnilektor.cz, bez značky Agenda24 a bez robotů.

## Reference k obrázku

Použij výhradně manifest značky firemni-lektor a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden český hlas. Scénář: 0–2 s hook; 2–7 s konkrétní důkaz; 7–10 s řešení Agent Authorization Lab a CTA. Replika: „Povolit, potvrdit, nebo zastavit? Praktický trénink naučí tým rozhodnout u každé akce AI agenta.“ Věta musí skončit nejpozději v 8. sekundě. Bez useknutí, bez dalšího dialogu, bez generovaných log.

## Reference k videu

Vizuální pravidla čti pouze z manifestu firemni-lektor; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**Agent Authorization Lab** — Webový trenažér pro firemnilektor.cz řídí scénáře AI agenta, sbírá rozhodnutí a vytváří týmový akční plán.

Přínos: OSVČ lektor nabídne firmám měřitelný praktický workshop s vlastním scénářem a exportovatelným výsledkem.

## MVP verze

správa klientů a běhů, anonymizované scénáře, role, volby povolit/potvrdit/zastavit, odůvodnění, čas, výsledkový dashboard, pre/post test, PDF akční plán a retenční pravidla

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „Agent Authorization Lab“ pro projekt Firemní lektor. Funkce: správa klientů a běhů, anonymizované scénáře, role, volby povolit/potvrdit/zastavit, odůvodnění, čas, výsledkový dashboard, pre/post test, PDF akční plán a retenční pravidla. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: OSVČ lektor nabídne firmám měřitelný praktický workshop s vlastním scénářem a exportovatelným výsledkem. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace.
