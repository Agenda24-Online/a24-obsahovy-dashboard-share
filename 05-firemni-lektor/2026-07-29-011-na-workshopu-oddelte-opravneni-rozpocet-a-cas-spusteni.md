---
title: "Na workshopu oddělte tři limity: oprávnění, rozpočet a čas spuštění"
date: 2026-07-29
project: "Firemní lektor"
project_url: "https://www.firemnilektor.cz/"
projects: ["Firemní lektor"]
topic_type: "praktický tip"
usage_type: "blog, sociální sítě, video, nástroj"
priority: "vysoká"
status: "k rozpracování"
blog_potential: "vysoký"
social_potential: "vysoký"
recommended_output: "publikovatelný článek, sociální sada, 10s video a praktický nástroj"
brand: "firemni-lektor"
tags: ["praktický tip", "Praktická AI školení pro firmy", "Drill Tři limity agenta"]
source_summary: "Google – Gemini API Managed Agents: 3.6 Flash, hooks and more (28. 7. 2026)"
value_feature_type: "workshopová metoda"
value_feature_name: "Drill Tři limity agenta"
value_feature_summary: "Facilitační sada vede tým k oddělenému návrhu oprávnění, rozpočtu a plánovaného spouštění."
value_feature_benefit: "Účastníci vytvoří srozumitelná pravidla a firma odhalí místa, kde jeden limit nesprávně nahrazuje jiný."
value_feature_mvp: "scénářové karty, karta oprávnění, rozpočtu a triggeru, role, odůvodnění, test porušení, auditní otázky, bodovací rubrika a export dohody"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „Drill Tři limity agenta“ pro projekt Firemní lektor. Funkce: scénářové karty, karta oprávnění, rozpočtu a triggeru, role, odůvodnění, test porušení, auditní otázky, bodovací rubrika a export dohody. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Účastníci vytvoří srozumitelná pravidla a firma odhalí místa, kde jeden limit nesprávně nahrazuje jiný. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace."
firemni_lektor_area: "Praktická AI školení pro firmy"
---

## Shrnutí

Hook, rozpočtový limit a plánovaný trigger řeší tři různé otázky: co agent smí udělat, kolik může spotřebovat a kdy se spustí. Praktické školení musí účastníky naučit tyto hranice nezaměňovat.

## Zdroje

- [Google – Gemini API Managed Agents: 3.6 Flash, hooks and more (28. 7. 2026)](https://blog.google/innovation-and-ai/technology/developers-tools/expanding-managed-agents-gemini-api-3-6-flash-hooks/)

## Proč je to důležité

Jedno obecné tlačítko bezpečný agent nestačí. Příliš nízký rozpočet nezabrání rychlé rizikové akci a správné oprávnění samo neurčí, zda má běh proběhnout bez přítomnosti odpovědné osoby.

## Doporučení

Dejte skupině jeden scénář a tři samostatné karty limitů. Účastníci musí každou hodnotu zdůvodnit, určit vlastníka a popsat důkaz, podle kterého se pravidlo ověří.

## SEO titulek

Na workshopu oddělte tři limity: oprávnění, rozpočet a čas spuštění | Firemní lektor

## Meta popis

Hook, rozpočtový limit a plánovaný trigger řeší tři různé otázky: co agent smí udělat, kolik může spotřebovat a kdy se spustí. Praktické školení musí účast

## Perex

Hook, rozpočtový limit a plánovaný trigger řeší tři různé otázky: co agent smí udělat, kolik může spotřebovat a kdy se spustí. Praktické školení musí účastníky naučit tyto hranice nezaměňovat. Dejte skupině jeden scénář a tři samostatné karty limitů. Účastníci musí každou hodnotu zdůvodnit, určit vlastníka a popsat důkaz, podle kterého se pravidlo ověří.

## Blogový titulek

Na workshopu oddělte tři limity: oprávnění, rozpočet a čas spuštění

## Osnova blogu

1. Co se změnilo a co z toho plyne
2. Proč nestačí obecné doporučení
3. Doporučený postup krok za krokem
4. Praktický příklad
5. Jak využít nástroj Drill Tři limity agenta
6. Jak poznat, že postup funguje
7. Závěr a další krok

## Blogový draft

# Na workshopu oddělte tři limity: oprávnění, rozpočet a čas spuštění

## Co se změnilo a co z toho plyne

Hook, rozpočtový limit a plánovaný trigger řeší tři různé otázky: co agent smí udělat, kolik může spotřebovat a kdy se spustí. Praktické školení musí účastníky naučit tyto hranice nezaměňovat. Téma není jen technická poznámka. Pro firemní týmy nasazující plánované AI automatizace jde o konkrétní rozhodnutí, které ovlivňuje bezpečnost, použitelnost a důvěru. Základní pravidlo zní: Dejte skupině jeden scénář a tři samostatné karty limitů. Účastníci musí každou hodnotu zdůvodnit, určit vlastníka a popsat důkaz, podle kterého se pravidlo ověří.

Oficiální zdroj potvrzuje tři podstatné body. Zaprvé: Hook rozhoduje o konkrétním volání nástroje. Zadruhé: Budget control omezuje spotřebu, nikoli automaticky oprávnění. Zatřetí: Scheduled trigger určuje okamžik spuštění a potřebuje provozní dohled. Tyto body je potřeba číst společně. Samotná nová možnost nebo doporučení nepřináší výsledek, dokud není převedeno do jasného postupu, odpovědnosti a ověřitelné kontroly.

## Proč nestačí obecné doporučení

Jedno obecné tlačítko bezpečný agent nestačí. Příliš nízký rozpočet nezabrání rychlé rizikové akci a správné oprávnění samo neurčí, zda má běh proběhnout bez přítomnosti odpovědné osoby. Obecná věta typu „dávejte pozor“ nepomůže ve chvíli, kdy je třeba jednat. Použitelný postup musí říci, co se kontroluje, kdo kontrolu provede, kdy se má zastavit a jak se pozná, že je výsledek v pořádku. Právě proto má smysl spojit obsah s praktickým nástrojem Drill Tři limity agenta.

Nejčastější problémy jsou konkrétní: všechna pravidla jsou sloučena do neurčitého skóre; časový trigger pokračuje po změně procesu; a nikdo nekontroluje, zda limit skutečně zafungoval. Každý z nich lze zachytit předem, pokud je kontrola krátká, srozumitelná a opakovatelná. Cílem není přidat další administrativu. Cílem je zabránit situaci, kdy se důležitá podmínka řeší až ve chvíli, kdy už vznikl problém.

## Doporučený postup krok za krokem

1. **Popsat jeden konkrétní běh agenta.**
2. **Nastavit tři limity odděleně.**
3. **Přiřadit vlastníka každému limitu.**
4. **Vyvolat porušení a přečíst audit.**
5. **Zapsat termín další kontroly pravidel.**

Jednotlivé kroky mají být provedeny v uvedeném pořadí. Pokud některý z nich nelze potvrdit, je lepší plán upravit než pokračovat s nejasným rizikem. Výsledek kontroly má zůstat dohledatelný v rozsahu, který je pro dané téma přiměřený; není nutné ukládat citlivé údaje, které k rozhodnutí nejsou potřeba.

## Praktický příklad

Skupina řeší automatický sběr týdenních dat. Oprávnění dovolí číst dvě složky, rozpočet omezí počet kroků a trigger běží jen v pracovní den. Při testu se agent pokusí číst třetí složku; hook jej zastaví, i když rozpočet ještě nebyl vyčerpán.

Příklad ukazuje, že dobré řešení nemusí být složité. Rozhodující je včas zachytit konkrétní nesoulad a nabídnout bezpečnou další volbu. Stejný princip lze opakovat u dalších situací: nejprve popsat očekávaný stav, potom ověřit realitu, zaznamenat rozdíl a určit jediný další krok s vlastníkem.

## Jak využít nástroj Drill Tři limity agenta

Facilitační sada vede tým k oddělenému návrhu oprávnění, rozpočtu a plánovaného spouštění. Minimální verze zahrnuje: scénářové karty, karta oprávnění, rozpočtu a triggeru, role, odůvodnění, test porušení, auditní otázky, bodovací rubrika a export dohody. Nástroj má uživatele vést, nikoli za něj skrývat rozhodnutí. U každého výsledku proto zobrazí zdroj, datum, stav kontroly a srozumitelné vysvětlení.

Při návrhu je důležitá bezpečnost a přístupnost. Rozhraní musí fungovat na telefonu, klávesnicí i s asistivními technologiemi. Data se mají ukládat jen v nezbytném rozsahu, s jasnou dobou uchování a možností exportu nebo výmazu. Automatická oprava nebo rozhodnutí se nesmí spustit tam, kde je potřeba lidské potvrzení.

## Jak poznat, že postup funguje

Úspěch se neměří počtem vyplněných polí, ale výsledkem: každý limit má vlastní odůvodnění, vlastníka, test porušení a datum další revize. První kontrola vytvoří výchozí stav. Druhá ověří, zda se podařilo odstranit riziko a zda nový postup lidé skutečně používají. Pokud měření nevede k rozhodnutí, je příliš obecné.

Praktické je sledovat tři úrovně: úplnost vstupů, počet zachycených problémů předem a skutečnou změnu chování. Díky tomu se z jednorázového článku stane použitelný proces. Téma se má znovu otevřít při změně podmínek, nástroje, trasy, produktu nebo odpovědné osoby.

## Závěr

Dejte skupině jeden scénář a tři samostatné karty limitů. Účastníci musí každou hodnotu zdůvodnit, určit vlastníka a popsat důkaz, podle kterého se pravidlo ověří. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tak vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Objednejte praktický B2B workshop přes firemnilektor.cz a přineste vlastní anonymizovaný scénář.

## Blog pro Enfold

<h1>Na workshopu oddělte tři limity: oprávnění, rozpočet a čas spuštění</h1>
<p class="perex">Hook, rozpočtový limit a plánovaný trigger řeší tři různé otázky: co agent smí udělat, kolik může spotřebovat a kdy se spustí. Praktické školení musí účastníky naučit tyto hranice nezaměňovat.</p>
<h2>Co se změnilo a co z toho plyne</h2>
<p>Hook, rozpočtový limit a plánovaný trigger řeší tři různé otázky: co agent smí udělat, kolik může spotřebovat a kdy se spustí. Praktické školení musí účastníky naučit tyto hranice nezaměňovat. Téma není jen technická poznámka. Pro firemní týmy nasazující plánované AI automatizace jde o konkrétní rozhodnutí, které ovlivňuje bezpečnost, použitelnost a důvěru. Základní pravidlo zní: Dejte skupině jeden scénář a tři samostatné karty limitů. Účastníci musí každou hodnotu zdůvodnit, určit vlastníka a popsat důkaz, podle kterého se pravidlo ověří.</p>
<p>Oficiální zdroj potvrzuje tři podstatné body. Zaprvé: Hook rozhoduje o konkrétním volání nástroje. Zadruhé: Budget control omezuje spotřebu, nikoli automaticky oprávnění. Zatřetí: Scheduled trigger určuje okamžik spuštění a potřebuje provozní dohled. Tyto body je potřeba číst společně. Samotná nová možnost nebo doporučení nepřináší výsledek, dokud není převedeno do jasného postupu, odpovědnosti a ověřitelné kontroly.</p>
<h2>Proč nestačí obecné doporučení</h2>
<p>Jedno obecné tlačítko bezpečný agent nestačí. Příliš nízký rozpočet nezabrání rychlé rizikové akci a správné oprávnění samo neurčí, zda má běh proběhnout bez přítomnosti odpovědné osoby. Obecná věta typu „dávejte pozor“ nepomůže ve chvíli, kdy je třeba jednat. Použitelný postup musí říci, co se kontroluje, kdo kontrolu provede, kdy se má zastavit a jak se pozná, že je výsledek v pořádku. Právě proto má smysl spojit obsah s praktickým nástrojem Drill Tři limity agenta.</p>
<p>Nejčastější problémy jsou konkrétní: všechna pravidla jsou sloučena do neurčitého skóre; časový trigger pokračuje po změně procesu; a nikdo nekontroluje, zda limit skutečně zafungoval. Každý z nich lze zachytit předem, pokud je kontrola krátká, srozumitelná a opakovatelná. Cílem není přidat další administrativu. Cílem je zabránit situaci, kdy se důležitá podmínka řeší až ve chvíli, kdy už vznikl problém.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol>
<li><strong>Popsat jeden konkrétní běh agenta.</strong></li>
<li><strong>Nastavit tři limity odděleně.</strong></li>
<li><strong>Přiřadit vlastníka každému limitu.</strong></li>
<li><strong>Vyvolat porušení a přečíst audit.</strong></li>
<li><strong>Zapsat termín další kontroly pravidel.</strong></li>
</ol>
<p>Jednotlivé kroky mají být provedeny v uvedeném pořadí. Pokud některý z nich nelze potvrdit, je lepší plán upravit než pokračovat s nejasným rizikem. Výsledek kontroly má zůstat dohledatelný v rozsahu, který je pro dané téma přiměřený; není nutné ukládat citlivé údaje, které k rozhodnutí nejsou potřeba.</p>
<h2>Praktický příklad</h2>
<p>Skupina řeší automatický sběr týdenních dat. Oprávnění dovolí číst dvě složky, rozpočet omezí počet kroků a trigger běží jen v pracovní den. Při testu se agent pokusí číst třetí složku; hook jej zastaví, i když rozpočet ještě nebyl vyčerpán.</p>
<p>Příklad ukazuje, že dobré řešení nemusí být složité. Rozhodující je včas zachytit konkrétní nesoulad a nabídnout bezpečnou další volbu. Stejný princip lze opakovat u dalších situací: nejprve popsat očekávaný stav, potom ověřit realitu, zaznamenat rozdíl a určit jediný další krok s vlastníkem.</p>
<h2>Jak využít nástroj Drill Tři limity agenta</h2>
<p>Facilitační sada vede tým k oddělenému návrhu oprávnění, rozpočtu a plánovaného spouštění. Minimální verze zahrnuje: scénářové karty, karta oprávnění, rozpočtu a triggeru, role, odůvodnění, test porušení, auditní otázky, bodovací rubrika a export dohody. Nástroj má uživatele vést, nikoli za něj skrývat rozhodnutí. U každého výsledku proto zobrazí zdroj, datum, stav kontroly a srozumitelné vysvětlení.</p>
<p>Při návrhu je důležitá bezpečnost a přístupnost. Rozhraní musí fungovat na telefonu, klávesnicí i s asistivními technologiemi. Data se mají ukládat jen v nezbytném rozsahu, s jasnou dobou uchování a možností exportu nebo výmazu. Automatická oprava nebo rozhodnutí se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<h2>Jak poznat, že postup funguje</h2>
<p>Úspěch se neměří počtem vyplněných polí, ale výsledkem: každý limit má vlastní odůvodnění, vlastníka, test porušení a datum další revize. První kontrola vytvoří výchozí stav. Druhá ověří, zda se podařilo odstranit riziko a zda nový postup lidé skutečně používají. Pokud měření nevede k rozhodnutí, je příliš obecné.</p>
<p>Praktické je sledovat tři úrovně: úplnost vstupů, počet zachycených problémů předem a skutečnou změnu chování. Díky tomu se z jednorázového článku stane použitelný proces. Téma se má znovu otevřít při změně podmínek, nástroje, trasy, produktu nebo odpovědné osoby.</p>
<h2>Závěr</h2>
<p>Dejte skupině jeden scénář a tři samostatné karty limitů. Účastníci musí každou hodnotu zdůvodnit, určit vlastníka a popsat důkaz, podle kterého se pravidlo ověří. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tak vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Objednejte praktický B2B workshop přes firemnilektor.cz a přineste vlastní anonymizovaný scénář.</p>


## Facebook text

Na workshopu oddělte tři limity: oprávnění, rozpočet a čas spuštění

Hook, rozpočtový limit a plánovaný trigger řeší tři různé otázky: co agent smí udělat, kolik může spotřebovat a kdy se spustí. Praktické školení musí účastníky naučit tyto hranice nezaměňovat.

Dejte skupině jeden scénář a tři samostatné karty limitů. Účastníci musí každou hodnotu zdůvodnit, určit vlastníka a popsat důkaz, podle kterého se pravidlo ověří.

Praktická pomůcka: Drill Tři limity agenta. Účastníci vytvoří srozumitelná pravidla a firma odhalí místa, kde jeden limit nesprávně nahrazuje jiný.

Zjistit více: https://www.firemnilektor.cz/

## LinkedIn text

Na workshopu oddělte tři limity: oprávnění, rozpočet a čas spuštění

Jedno obecné tlačítko bezpečný agent nestačí. Příliš nízký rozpočet nezabrání rychlé rizikové akci a správné oprávnění samo neurčí, zda má běh proběhnout bez přítomnosti odpovědné osoby.

Doporučený první krok: popsat jeden konkrétní běh agenta. Potom nastavit tři limity odděleně a výsledek zapsat tak, aby byl dohledatelný.

Drill Tři limity agenta: Facilitační sada vede tým k oddělenému návrhu oprávnění, rozpočtu a plánovaného spouštění.

Účastníci vytvoří srozumitelná pravidla a firma odhalí místa, kde jeden limit nesprávně nahrazuje jiný.

https://www.firemnilektor.cz/

## Instagram caption

Na workshopu oddělte tři limity: oprávnění, rozpočet a čas spuštění

Hook, rozpočtový limit a plánovaný trigger řeší tři různé otázky: co agent smí udělat, kolik může spotřebovat a kdy se spustí. Praktické školení musí účastníky naučit tyto hranice nezaměňovat.

✅ popsat jeden konkrétní běh agenta
✅ nastavit tři limity odděleně
✅ přiřadit vlastníka každému limitu

Dejte skupině jeden scénář a tři samostatné karty limitů. Účastníci musí každou hodnotu zdůvodnit, určit vlastníka a popsat důkaz, podle kterého se pravidlo ověří.

https://www.firemnilektor.cz/

#Firemnílektor #praktickytip #DrillTřilimityagenta

## Čistý publikační text pro Facebook

Na workshopu oddělte tři limity: oprávnění, rozpočet a čas spuštění

Hook, rozpočtový limit a plánovaný trigger řeší tři různé otázky: co agent smí udělat, kolik může spotřebovat a kdy se spustí. Praktické školení musí účastníky naučit tyto hranice nezaměňovat.

Dejte skupině jeden scénář a tři samostatné karty limitů. Účastníci musí každou hodnotu zdůvodnit, určit vlastníka a popsat důkaz, podle kterého se pravidlo ověří.

Praktická pomůcka: Drill Tři limity agenta. Účastníci vytvoří srozumitelná pravidla a firma odhalí místa, kde jeden limit nesprávně nahrazuje jiný.

Zjistit více: https://www.firemnilektor.cz/

## Čistý publikační text pro LinkedIn

Na workshopu oddělte tři limity: oprávnění, rozpočet a čas spuštění

Jedno obecné tlačítko bezpečný agent nestačí. Příliš nízký rozpočet nezabrání rychlé rizikové akci a správné oprávnění samo neurčí, zda má běh proběhnout bez přítomnosti odpovědné osoby.

Doporučený první krok: popsat jeden konkrétní běh agenta. Potom nastavit tři limity odděleně a výsledek zapsat tak, aby byl dohledatelný.

Drill Tři limity agenta: Facilitační sada vede tým k oddělenému návrhu oprávnění, rozpočtu a plánovaného spouštění.

Účastníci vytvoří srozumitelná pravidla a firma odhalí místa, kde jeden limit nesprávně nahrazuje jiný.

https://www.firemnilektor.cz/

## Čistý publikační text pro Instagram

Na workshopu oddělte tři limity: oprávnění, rozpočet a čas spuštění

Hook, rozpočtový limit a plánovaný trigger řeší tři různé otázky: co agent smí udělat, kolik může spotřebovat a kdy se spustí. Praktické školení musí účastníky naučit tyto hranice nezaměňovat.

✅ popsat jeden konkrétní běh agenta
✅ nastavit tři limity odděleně
✅ přiřadit vlastníka každému limitu

Dejte skupině jeden scénář a tři samostatné karty limitů. Účastníci musí každou hodnotu zdůvodnit, určit vlastníka a popsat důkaz, podle kterého se pravidlo ověří.

https://www.firemnilektor.cz/

#Firemnílektor #praktickytip #DrillTřilimityagenta

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** Na workshopu oddělte tři limity: oprávnění, rozpočet a čas spuštění

**Scénář po sekundách:** 0–2 s výrazný detail a hook; 2–7 s Hook, rozpočtový limit a plánovaný trigger řeší tři různé otázky: co agent smí udělat, kolik může spotřebovat a kdy se spustí. Praktické školení musí účastníky naučit tyto hranice nezaměňovat.; 7–10 s Drill Tři limity agenta a CTA.

**Mluvený text:** Povolit, potvrdit, nebo zastavit? Praktický trénink naučí tým rozhodnout u každé akce AI agenta.

**Text na obrazovku:** Na workshopu oddělte tři limity: oprávnění, rozpočet a čas spuštění / Drill Tři limity agenta / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte Drill Tři limity agenta.

**Hashtagy:** #Firemnílektor #praktickynavod #bezpecnypostup

**Cover:** Na workshopu oddělte tři limity: oprávnění, rozpočet a čas spuštění

**Prompt pro Gemini Flow / Omni:** Vytvoř jedno souvislé vertikální video 9:16 o délce přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Povolit, potvrdit, nebo zastavit? Praktický trénink naučí tým rozhodnout u každé akce AI agenta.“ 0–2 s hook, 2–7 s konkrétní situace, 7–10 s vizuální pointa a CTA. Žádné useknuté věty, žádný další dialog, žádné automaticky generované logo ani drobný nečitelný text.

## YouTube Shorts popisek

Hook, rozpočtový limit a plánovaný trigger řeší tři různé otázky: co agent smí udělat, kolik může spotřebovat a kdy se spustí. Praktické školení musí účastníky naučit tyto hranice nezaměňovat. Dejte skupině jeden scénář a tři samostatné karty limitů. Účastníci musí každou hodnotu zdůvodnit, určit vlastníka a popsat důkaz, podle kterého se pravidlo ověří. Více na https://www.firemnilektor.cz/

## Text do grafiky

Na workshopu oddělte tři limity: oprávnění, rozpočet a čas spuštění

Drill Tři limity agenta

## CTA

Objednejte praktický workshop na firemnilektor.cz.

## Alt text

Na workshopu oddělte tři limity: oprávnění, rozpočet a čas spuštění: názorné zobrazení konkrétního postupu a nástroje Drill Tři limity agenta.

## Prompt na obrázek

Moderní realistický B2B workshop k tématu Na workshopu oddělte tři limity: oprávnění, rozpočet a čas spuštění: firemní tým pracuje s kartami scénářů a rozhodovací mapou, neutrální profesionální styl, podpis firemnilektor.cz, bez značky Agenda24 a bez robotů.

## Reference k obrázku

Použij výhradně manifest značky firemni-lektor a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden český hlas. Scénář: 0–2 s hook; 2–7 s konkrétní důkaz; 7–10 s řešení Drill Tři limity agenta a CTA. Replika: „Povolit, potvrdit, nebo zastavit? Praktický trénink naučí tým rozhodnout u každé akce AI agenta.“ Věta musí skončit nejpozději v 8. sekundě. Bez useknutí, bez dalšího dialogu, bez generovaných log.

## Reference k videu

Vizuální pravidla čti pouze z manifestu firemni-lektor; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**Drill Tři limity agenta** — Facilitační sada vede tým k oddělenému návrhu oprávnění, rozpočtu a plánovaného spouštění.

Přínos: Účastníci vytvoří srozumitelná pravidla a firma odhalí místa, kde jeden limit nesprávně nahrazuje jiný.

## MVP verze

scénářové karty, karta oprávnění, rozpočtu a triggeru, role, odůvodnění, test porušení, auditní otázky, bodovací rubrika a export dohody

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „Drill Tři limity agenta“ pro projekt Firemní lektor. Funkce: scénářové karty, karta oprávnění, rozpočtu a triggeru, role, odůvodnění, test porušení, auditní otázky, bodovací rubrika a export dohody. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Účastníci vytvoří srozumitelná pravidla a firma odhalí místa, kde jeden limit nesprávně nahrazuje jiný. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace.
