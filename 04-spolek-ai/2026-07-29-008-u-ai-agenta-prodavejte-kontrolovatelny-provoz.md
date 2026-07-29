---
title: "U AI agenta prodávejte kontrolovatelný provoz, ne pouze působivé demo"
date: 2026-07-29
project: "Spolek AI"
project_url: "https://spolek.ai/"
projects: ["Spolek AI"]
topic_type: "praktický tip"
usage_type: "blog, sociální sítě, video, nástroj"
priority: "vysoká"
status: "k rozpracování"
blog_potential: "vysoký"
social_potential: "vysoký"
recommended_output: "publikovatelný článek, sociální sada, 10s video a praktický nástroj"
brand: "spolek-ai"
tags: ["praktický tip", "Go-to-market AI produktů", "Agent Operations Proof Pack"]
source_summary: "Google – Gemini API Managed Agents: 3.6 Flash, hooks and more (28. 7. 2026)"
value_feature_type: "obchodní důkazní sada"
value_feature_name: "Agent Operations Proof Pack"
value_feature_summary: "Sada převádí hooky, triggery, rozpočet a auditní log do srozumitelných prodejních důkazů."
value_feature_benefit: "Dodavatel zvýší důvěryhodnost nabídky a přitáhne kupující, kteří hledají skutečně nasaditelné řešení."
value_feature_mvp: "šablona use case, úspěšný běh, zablokovaný běh, rozpočet, trigger, nástroje, anonymizovaný log, verze, datum, CTA na pilot a měření konverze"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „Agent Operations Proof Pack“ pro projekt Spolek AI. Funkce: šablona use case, úspěšný běh, zablokovaný běh, rozpočet, trigger, nástroje, anonymizovaný log, verze, datum, CTA na pilot a měření konverze. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Dodavatel zvýší důvěryhodnost nabídky a přitáhne kupující, kteří hledají skutečně nasaditelné řešení. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace."
spolek_ai_area: "Go-to-market AI produktů"
---

## Shrnutí

Produktová stránka má vedle výsledku ukázat také rozpočet běhu, časový trigger, kontrolní hook, auditní záznam a příklad zablokované akce. Právě to odlišuje demo od provozně připraveného produktu.

## Zdroje

- [Google – Gemini API Managed Agents: 3.6 Flash, hooks and more (28. 7. 2026)](https://blog.google/innovation-and-ai/technology/developers-tools/expanding-managed-agents-gemini-api-3-6-flash-hooks/)

## Proč je to důležité

Kupující se nerozhoduje jen podle toho, co agent zvládne. Potřebuje vědět, kdy se spustí, kolik může spotřebovat, kam smí zapisovat, kdo řeší chybu a zda lze akci zastavit dříve, než způsobí škodu.

## Doporučení

Připravte jeden živý provozní scénář se třemi důkazy: úspěšný běh, bezpečně zablokovaný běh a report nákladů. Každý důkaz opatřete verzí a datem.

## SEO titulek

U AI agenta prodávejte kontrolovatelný provoz, ne pouze působivé demo | Spolek AI

## Meta popis

Produktová stránka má vedle výsledku ukázat také rozpočet běhu, časový trigger, kontrolní hook, auditní záznam a příklad zablokované akce. Právě to odlišuj

## Perex

Produktová stránka má vedle výsledku ukázat také rozpočet běhu, časový trigger, kontrolní hook, auditní záznam a příklad zablokované akce. Právě to odlišuje demo od provozně připraveného produktu. Připravte jeden živý provozní scénář se třemi důkazy: úspěšný běh, bezpečně zablokovaný běh a report nákladů. Každý důkaz opatřete verzí a datem.

## Blogový titulek

U AI agenta prodávejte kontrolovatelný provoz, ne pouze působivé demo

## Osnova blogu

1. Co se změnilo a co z toho plyne
2. Proč nestačí obecné doporučení
3. Doporučený postup krok za krokem
4. Praktický příklad
5. Jak využít nástroj Agent Operations Proof Pack
6. Jak poznat, že postup funguje
7. Závěr a další krok

## Blogový draft

# U AI agenta prodávejte kontrolovatelný provoz, ne pouze působivé demo

## Co se změnilo a co z toho plyne

Produktová stránka má vedle výsledku ukázat také rozpočet běhu, časový trigger, kontrolní hook, auditní záznam a příklad zablokované akce. Právě to odlišuje demo od provozně připraveného produktu. Téma není jen technická poznámka. Pro zakladatelé AI produktů, obchodní týmy a partneři Spolek AI jde o konkrétní rozhodnutí, které ovlivňuje bezpečnost, použitelnost a důvěru. Základní pravidlo zní: Připravte jeden živý provozní scénář se třemi důkazy: úspěšný běh, bezpečně zablokovaný běh a report nákladů. Každý důkaz opatřete verzí a datem.

Oficiální zdroj potvrzuje tři podstatné body. Zaprvé: Hook může kontrolovat nebo blokovat volání nástroje ještě uvnitř sandboxu. Zadruhé: Rozpočtová kontrola dává kupujícímu konkrétní nákladový rámec. Zatřetí: Plánované spouštění mění agenta na opakovaný provozní proces. Tyto body je potřeba číst společně. Samotná nová možnost nebo doporučení nepřináší výsledek, dokud není převedeno do jasného postupu, odpovědnosti a ověřitelné kontroly.

## Proč nestačí obecné doporučení

Kupující se nerozhoduje jen podle toho, co agent zvládne. Potřebuje vědět, kdy se spustí, kolik může spotřebovat, kam smí zapisovat, kdo řeší chybu a zda lze akci zastavit dříve, než způsobí škodu. Obecná věta typu „dávejte pozor“ nepomůže ve chvíli, kdy je třeba jednat. Použitelný postup musí říci, co se kontroluje, kdo kontrolu provede, kdy se má zastavit a jak se pozná, že je výsledek v pořádku. Právě proto má smysl spojit obsah s praktickým nástrojem Agent Operations Proof Pack.

Nejčastější problémy jsou konkrétní: demo používá jiné podmínky než reálné nasazení; veřejný log odhalí citlivé údaje; a nákladový limit je prezentován jako úplná bezpečnost. Každý z nich lze zachytit předem, pokud je kontrola krátká, srozumitelná a opakovatelná. Cílem není přidat další administrativu. Cílem je zabránit situaci, kdy se důležitá podmínka řeší až ve chvíli, kdy už vznikl problém.

## Doporučený postup krok za krokem

1. **Vybrat jeden komerčně nejsilnější use case.**
2. **Anonymizovat vstupy a auditní záznam.**
3. **Ukázat úspěšný i zablokovaný scénář.**
4. **Oddělit cenu od bezpečnostních limitů.**
5. **Připojit jasnou nabídku placeného pilotu.**

Jednotlivé kroky mají být provedeny v uvedeném pořadí. Pokud některý z nich nelze potvrdit, je lepší plán upravit než pokračovat s nejasným rizikem. Výsledek kontroly má zůstat dohledatelný v rozsahu, který je pro dané téma přiměřený; není nutné ukládat citlivé údaje, které k rozhodnutí nejsou potřeba.

## Praktický příklad

Agent pro kontrolu podkladů zpracuje schválenou složku, vytvoří report a zůstane v rozpočtu. Druhý test se pokusí načíst nepovolený soubor a hook jej zastaví. Oba výsledky jsou součástí produktového profilu a vedou na poptávku pilotu.

Příklad ukazuje, že dobré řešení nemusí být složité. Rozhodující je včas zachytit konkrétní nesoulad a nabídnout bezpečnou další volbu. Stejný princip lze opakovat u dalších situací: nejprve popsat očekávaný stav, potom ověřit realitu, zaznamenat rozdíl a určit jediný další krok s vlastníkem.

## Jak využít nástroj Agent Operations Proof Pack

Sada převádí hooky, triggery, rozpočet a auditní log do srozumitelných prodejních důkazů. Minimální verze zahrnuje: šablona use case, úspěšný běh, zablokovaný běh, rozpočet, trigger, nástroje, anonymizovaný log, verze, datum, CTA na pilot a měření konverze. Nástroj má uživatele vést, nikoli za něj skrývat rozhodnutí. U každého výsledku proto zobrazí zdroj, datum, stav kontroly a srozumitelné vysvětlení.

Při návrhu je důležitá bezpečnost a přístupnost. Rozhraní musí fungovat na telefonu, klávesnicí i s asistivními technologiemi. Data se mají ukládat jen v nezbytném rozsahu, s jasnou dobou uchování a možností exportu nebo výmazu. Automatická oprava nebo rozhodnutí se nesmí spustit tam, kde je potřeba lidské potvrzení.

## Jak poznat, že postup funguje

Úspěch se neměří počtem vyplněných polí, ale výsledkem: vyšší konverze profilu do kvalifikované poptávky, doložené bezpečnostní scénáře a předvídatelný náklad pilotu. První kontrola vytvoří výchozí stav. Druhá ověří, zda se podařilo odstranit riziko a zda nový postup lidé skutečně používají. Pokud měření nevede k rozhodnutí, je příliš obecné.

Praktické je sledovat tři úrovně: úplnost vstupů, počet zachycených problémů předem a skutečnou změnu chování. Díky tomu se z jednorázového článku stane použitelný proces. Téma se má znovu otevřít při změně podmínek, nástroje, trasy, produktu nebo odpovědné osoby.

## Závěr

Připravte jeden živý provozní scénář se třemi důkazy: úspěšný běh, bezpečně zablokovaný běh a report nákladů. Každý důkaz opatřete verzí a datem. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tak vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Vytvořte ověřitelný profil řešení a nabídněte jej v marketplace Spolek AI.

## Blog pro Enfold

<h1>U AI agenta prodávejte kontrolovatelný provoz, ne pouze působivé demo</h1>
<p class="perex">Produktová stránka má vedle výsledku ukázat také rozpočet běhu, časový trigger, kontrolní hook, auditní záznam a příklad zablokované akce. Právě to odlišuje demo od provozně připraveného produktu.</p>
<h2>Co se změnilo a co z toho plyne</h2>
<p>Produktová stránka má vedle výsledku ukázat také rozpočet běhu, časový trigger, kontrolní hook, auditní záznam a příklad zablokované akce. Právě to odlišuje demo od provozně připraveného produktu. Téma není jen technická poznámka. Pro zakladatelé AI produktů, obchodní týmy a partneři Spolek AI jde o konkrétní rozhodnutí, které ovlivňuje bezpečnost, použitelnost a důvěru. Základní pravidlo zní: Připravte jeden živý provozní scénář se třemi důkazy: úspěšný běh, bezpečně zablokovaný běh a report nákladů. Každý důkaz opatřete verzí a datem.</p>
<p>Oficiální zdroj potvrzuje tři podstatné body. Zaprvé: Hook může kontrolovat nebo blokovat volání nástroje ještě uvnitř sandboxu. Zadruhé: Rozpočtová kontrola dává kupujícímu konkrétní nákladový rámec. Zatřetí: Plánované spouštění mění agenta na opakovaný provozní proces. Tyto body je potřeba číst společně. Samotná nová možnost nebo doporučení nepřináší výsledek, dokud není převedeno do jasného postupu, odpovědnosti a ověřitelné kontroly.</p>
<h2>Proč nestačí obecné doporučení</h2>
<p>Kupující se nerozhoduje jen podle toho, co agent zvládne. Potřebuje vědět, kdy se spustí, kolik může spotřebovat, kam smí zapisovat, kdo řeší chybu a zda lze akci zastavit dříve, než způsobí škodu. Obecná věta typu „dávejte pozor“ nepomůže ve chvíli, kdy je třeba jednat. Použitelný postup musí říci, co se kontroluje, kdo kontrolu provede, kdy se má zastavit a jak se pozná, že je výsledek v pořádku. Právě proto má smysl spojit obsah s praktickým nástrojem Agent Operations Proof Pack.</p>
<p>Nejčastější problémy jsou konkrétní: demo používá jiné podmínky než reálné nasazení; veřejný log odhalí citlivé údaje; a nákladový limit je prezentován jako úplná bezpečnost. Každý z nich lze zachytit předem, pokud je kontrola krátká, srozumitelná a opakovatelná. Cílem není přidat další administrativu. Cílem je zabránit situaci, kdy se důležitá podmínka řeší až ve chvíli, kdy už vznikl problém.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol>
<li><strong>Vybrat jeden komerčně nejsilnější use case.</strong></li>
<li><strong>Anonymizovat vstupy a auditní záznam.</strong></li>
<li><strong>Ukázat úspěšný i zablokovaný scénář.</strong></li>
<li><strong>Oddělit cenu od bezpečnostních limitů.</strong></li>
<li><strong>Připojit jasnou nabídku placeného pilotu.</strong></li>
</ol>
<p>Jednotlivé kroky mají být provedeny v uvedeném pořadí. Pokud některý z nich nelze potvrdit, je lepší plán upravit než pokračovat s nejasným rizikem. Výsledek kontroly má zůstat dohledatelný v rozsahu, který je pro dané téma přiměřený; není nutné ukládat citlivé údaje, které k rozhodnutí nejsou potřeba.</p>
<h2>Praktický příklad</h2>
<p>Agent pro kontrolu podkladů zpracuje schválenou složku, vytvoří report a zůstane v rozpočtu. Druhý test se pokusí načíst nepovolený soubor a hook jej zastaví. Oba výsledky jsou součástí produktového profilu a vedou na poptávku pilotu.</p>
<p>Příklad ukazuje, že dobré řešení nemusí být složité. Rozhodující je včas zachytit konkrétní nesoulad a nabídnout bezpečnou další volbu. Stejný princip lze opakovat u dalších situací: nejprve popsat očekávaný stav, potom ověřit realitu, zaznamenat rozdíl a určit jediný další krok s vlastníkem.</p>
<h2>Jak využít nástroj Agent Operations Proof Pack</h2>
<p>Sada převádí hooky, triggery, rozpočet a auditní log do srozumitelných prodejních důkazů. Minimální verze zahrnuje: šablona use case, úspěšný běh, zablokovaný běh, rozpočet, trigger, nástroje, anonymizovaný log, verze, datum, CTA na pilot a měření konverze. Nástroj má uživatele vést, nikoli za něj skrývat rozhodnutí. U každého výsledku proto zobrazí zdroj, datum, stav kontroly a srozumitelné vysvětlení.</p>
<p>Při návrhu je důležitá bezpečnost a přístupnost. Rozhraní musí fungovat na telefonu, klávesnicí i s asistivními technologiemi. Data se mají ukládat jen v nezbytném rozsahu, s jasnou dobou uchování a možností exportu nebo výmazu. Automatická oprava nebo rozhodnutí se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<h2>Jak poznat, že postup funguje</h2>
<p>Úspěch se neměří počtem vyplněných polí, ale výsledkem: vyšší konverze profilu do kvalifikované poptávky, doložené bezpečnostní scénáře a předvídatelný náklad pilotu. První kontrola vytvoří výchozí stav. Druhá ověří, zda se podařilo odstranit riziko a zda nový postup lidé skutečně používají. Pokud měření nevede k rozhodnutí, je příliš obecné.</p>
<p>Praktické je sledovat tři úrovně: úplnost vstupů, počet zachycených problémů předem a skutečnou změnu chování. Díky tomu se z jednorázového článku stane použitelný proces. Téma se má znovu otevřít při změně podmínek, nástroje, trasy, produktu nebo odpovědné osoby.</p>
<h2>Závěr</h2>
<p>Připravte jeden živý provozní scénář se třemi důkazy: úspěšný běh, bezpečně zablokovaný běh a report nákladů. Každý důkaz opatřete verzí a datem. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tak vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Vytvořte ověřitelný profil řešení a nabídněte jej v marketplace Spolek AI.</p>


## Facebook text

U AI agenta prodávejte kontrolovatelný provoz, ne pouze působivé demo

Produktová stránka má vedle výsledku ukázat také rozpočet běhu, časový trigger, kontrolní hook, auditní záznam a příklad zablokované akce. Právě to odlišuje demo od provozně připraveného produktu.

Připravte jeden živý provozní scénář se třemi důkazy: úspěšný běh, bezpečně zablokovaný běh a report nákladů. Každý důkaz opatřete verzí a datem.

Praktická pomůcka: Agent Operations Proof Pack. Dodavatel zvýší důvěryhodnost nabídky a přitáhne kupující, kteří hledají skutečně nasaditelné řešení.

Zjistit více: https://spolek.ai/

## LinkedIn text

U AI agenta prodávejte kontrolovatelný provoz, ne pouze působivé demo

Kupující se nerozhoduje jen podle toho, co agent zvládne. Potřebuje vědět, kdy se spustí, kolik může spotřebovat, kam smí zapisovat, kdo řeší chybu a zda lze akci zastavit dříve, než způsobí škodu.

Doporučený první krok: vybrat jeden komerčně nejsilnější use case. Potom anonymizovat vstupy a auditní záznam a výsledek zapsat tak, aby byl dohledatelný.

Agent Operations Proof Pack: Sada převádí hooky, triggery, rozpočet a auditní log do srozumitelných prodejních důkazů.

Dodavatel zvýší důvěryhodnost nabídky a přitáhne kupující, kteří hledají skutečně nasaditelné řešení.

https://spolek.ai/

## Instagram caption

U AI agenta prodávejte kontrolovatelný provoz, ne pouze působivé demo

Produktová stránka má vedle výsledku ukázat také rozpočet běhu, časový trigger, kontrolní hook, auditní záznam a příklad zablokované akce. Právě to odlišuje demo od provozně připraveného produktu.

✅ vybrat jeden komerčně nejsilnější use case
✅ anonymizovat vstupy a auditní záznam
✅ ukázat úspěšný i zablokovaný scénář

Připravte jeden živý provozní scénář se třemi důkazy: úspěšný běh, bezpečně zablokovaný běh a report nákladů. Každý důkaz opatřete verzí a datem.

https://spolek.ai/

#SpolekAI #praktickytip #AgentOperationsProofPack

## Čistý publikační text pro Facebook

U AI agenta prodávejte kontrolovatelný provoz, ne pouze působivé demo

Produktová stránka má vedle výsledku ukázat také rozpočet běhu, časový trigger, kontrolní hook, auditní záznam a příklad zablokované akce. Právě to odlišuje demo od provozně připraveného produktu.

Připravte jeden živý provozní scénář se třemi důkazy: úspěšný běh, bezpečně zablokovaný běh a report nákladů. Každý důkaz opatřete verzí a datem.

Praktická pomůcka: Agent Operations Proof Pack. Dodavatel zvýší důvěryhodnost nabídky a přitáhne kupující, kteří hledají skutečně nasaditelné řešení.

Zjistit více: https://spolek.ai/

## Čistý publikační text pro LinkedIn

U AI agenta prodávejte kontrolovatelný provoz, ne pouze působivé demo

Kupující se nerozhoduje jen podle toho, co agent zvládne. Potřebuje vědět, kdy se spustí, kolik může spotřebovat, kam smí zapisovat, kdo řeší chybu a zda lze akci zastavit dříve, než způsobí škodu.

Doporučený první krok: vybrat jeden komerčně nejsilnější use case. Potom anonymizovat vstupy a auditní záznam a výsledek zapsat tak, aby byl dohledatelný.

Agent Operations Proof Pack: Sada převádí hooky, triggery, rozpočet a auditní log do srozumitelných prodejních důkazů.

Dodavatel zvýší důvěryhodnost nabídky a přitáhne kupující, kteří hledají skutečně nasaditelné řešení.

https://spolek.ai/

## Čistý publikační text pro Instagram

U AI agenta prodávejte kontrolovatelný provoz, ne pouze působivé demo

Produktová stránka má vedle výsledku ukázat také rozpočet běhu, časový trigger, kontrolní hook, auditní záznam a příklad zablokované akce. Právě to odlišuje demo od provozně připraveného produktu.

✅ vybrat jeden komerčně nejsilnější use case
✅ anonymizovat vstupy a auditní záznam
✅ ukázat úspěšný i zablokovaný scénář

Připravte jeden živý provozní scénář se třemi důkazy: úspěšný běh, bezpečně zablokovaný běh a report nákladů. Každý důkaz opatřete verzí a datem.

https://spolek.ai/

#SpolekAI #praktickytip #AgentOperationsProofPack

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** U AI agenta prodávejte kontrolovatelný provoz, ne pouze působivé demo

**Scénář po sekundách:** 0–2 s výrazný detail a hook; 2–7 s Produktová stránka má vedle výsledku ukázat také rozpočet běhu, časový trigger, kontrolní hook, auditní záznam a příklad zablokované akce. Právě to odlišuje demo od provozně připraveného produktu.; 7–10 s Agent Operations Proof Pack a CTA.

**Mluvený text:** Bezpečný AI agent nemá přístup ke všemu. Ukažte konkrétní zdroj, akci, schválení a auditní stopu.

**Text na obrazovku:** U AI agenta prodávejte kontrolovatelný provoz, ne pouze působivé demo / Agent Operations Proof Pack / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte Agent Operations Proof Pack.

**Hashtagy:** #SpolekAI #praktickynavod #bezpecnypostup

**Cover:** U AI agenta prodávejte kontrolovatelný provoz, ne pouze působivé demo

**Prompt pro Gemini Flow / Omni:** Vytvoř jedno souvislé vertikální video 9:16 o délce přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Bezpečný AI agent nemá přístup ke všemu. Ukažte konkrétní zdroj, akci, schválení a auditní stopu.“ 0–2 s hook, 2–7 s konkrétní situace, 7–10 s vizuální pointa a CTA. Žádné useknuté věty, žádný další dialog, žádné automaticky generované logo ani drobný nečitelný text.

## YouTube Shorts popisek

Produktová stránka má vedle výsledku ukázat také rozpočet běhu, časový trigger, kontrolní hook, auditní záznam a příklad zablokované akce. Právě to odlišuje demo od provozně připraveného produktu. Připravte jeden živý provozní scénář se třemi důkazy: úspěšný běh, bezpečně zablokovaný běh a report nákladů. Každý důkaz opatřete verzí a datem. Více na https://spolek.ai/

## Text do grafiky

U AI agenta prodávejte kontrolovatelný provoz, ne pouze působivé demo

Agent Operations Proof Pack

## CTA

Vytvořte ověřitelný profil svého AI řešení.

## Alt text

U AI agenta prodávejte kontrolovatelný provoz, ne pouze působivé demo: názorné zobrazení konkrétního postupu a nástroje Agent Operations Proof Pack.

## Prompt na obrázek

Neutrální moderní B2B komunitní vizuál k tématu U AI agenta prodávejte kontrolovatelný provoz, ne pouze působivé demo: tým, procesní mapa a auditovatelná rozhodnutí, čistý světlý layout, bez loga Agenda24, bez Martina, bez robotů a falešných značek.

## Reference k obrázku

Použij výhradně manifest značky spolek-ai a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden český hlas. Scénář: 0–2 s hook; 2–7 s konkrétní důkaz; 7–10 s řešení Agent Operations Proof Pack a CTA. Replika: „Bezpečný AI agent nemá přístup ke všemu. Ukažte konkrétní zdroj, akci, schválení a auditní stopu.“ Věta musí skončit nejpozději v 8. sekundě. Bez useknutí, bez dalšího dialogu, bez generovaných log.

## Reference k videu

Vizuální pravidla čti pouze z manifestu spolek-ai; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**Agent Operations Proof Pack** — Sada převádí hooky, triggery, rozpočet a auditní log do srozumitelných prodejních důkazů.

Přínos: Dodavatel zvýší důvěryhodnost nabídky a přitáhne kupující, kteří hledají skutečně nasaditelné řešení.

## MVP verze

šablona use case, úspěšný běh, zablokovaný běh, rozpočet, trigger, nástroje, anonymizovaný log, verze, datum, CTA na pilot a měření konverze

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „Agent Operations Proof Pack“ pro projekt Spolek AI. Funkce: šablona use case, úspěšný běh, zablokovaný běh, rozpočet, trigger, nástroje, anonymizovaný log, verze, datum, CTA na pilot a měření konverze. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Dodavatel zvýší důvěryhodnost nabídky a přitáhne kupující, kteří hledají skutečně nasaditelné řešení. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace.
