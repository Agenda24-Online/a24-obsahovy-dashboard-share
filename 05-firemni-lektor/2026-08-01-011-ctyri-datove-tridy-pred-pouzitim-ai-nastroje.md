---
title: "Cvičení čtyř datových tříd před použitím AI nástroje ve firmě"
date: 2026-08-01
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
tags: ["praktický tip", "Praktická školení bezpečné práce s daty", "Data Boundary 4"]
source_summary: "Official Microsoft Blog – Rethinking security for the age of AI (27. 7. 2026)"
value_feature_type: "B2B metodický checker"
value_feature_name: "Data Boundary 4"
value_feature_summary: "Checker provede tým klasifikací vstupu a ukáže povolený postup před použitím nástroje."
value_feature_benefit: "Firma získá jednoduché pravidlo použitelné v každodenní práci a OSVČ lektor může měřit skutečné rozhodování účastníků."
value_feature_mvp: "čtyři datové třídy, katalog anonymních scénářů, povolené nástroje, zakázané vstupy, anonymizace, schvalovatel, odůvodnění, skóre, vysvětlení, administrace lektora a export týmového pravidla"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „Data Boundary 4“ pro projekt Firemní lektor. Funkce: čtyři datové třídy, katalog anonymních scénářů, povolené nástroje, zakázané vstupy, anonymizace, schvalovatel, odůvodnění, skóre, vysvětlení, administrace lektora a export týmového pravidla. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Firma získá jednoduché pravidlo použitelné v každodenní práci a OSVČ lektor může měřit skutečné rozhodování účastníků. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace."
firemni_lektor_area: "Praktická školení bezpečné práce s daty"
---

## Shrnutí

Než zaměstnanec vloží obsah do nového nástroje, musí rozpoznat, zda jde o veřejná, interní, důvěrná nebo přísně omezená data. Každá třída má jiné povolené prostředí a schválení.

## Zdroje

- [Official Microsoft Blog – Rethinking security for the age of AI (27. 7. 2026)](https://blogs.microsoft.com/blog/2026/07/27/rethinking-security-for-the-age-of-ai/)

## Proč je to důležité

Obecné pravidlo „nevkládejte citlivá data“ je v praxi příliš vágní. Účastník potřebuje rozhodovat na konkrétních příkladech dokumentů, e-mailů, exportů a snímků obrazovky.

## Doporučení

Na školení použijte anonymizované karty a čtyři koše. U každého rozhodnutí účastník uvede datovou třídu, povolený nástroj, nutnou úpravu a schvalovatele.

## SEO titulek

Cvičení čtyř datových tříd před použitím AI nástroje ve firmě | Firemní lektor

## Meta popis

Než zaměstnanec vloží obsah do nového nástroje, musí rozpoznat, zda jde o veřejná, interní, důvěrná nebo přísně omezená data. Každá třída má jiné povolené 

## Perex

Než zaměstnanec vloží obsah do nového nástroje, musí rozpoznat, zda jde o veřejná, interní, důvěrná nebo přísně omezená data. Každá třída má jiné povolené prostředí a schválení. Na školení použijte anonymizované karty a čtyři koše. U každého rozhodnutí účastník uvede datovou třídu, povolený nástroj, nutnou úpravu a schvalovatele.

## Blogový titulek

Cvičení čtyř datových tříd před použitím AI nástroje ve firmě

## Osnova blogu

1. Co je nové a co z toho plyne
2. Proč nestačí obecná rada
3. Doporučený postup krok za krokem
4. Kde typicky vzniká chyba
5. Praktický příklad
6. Jak využít nástroj Data Boundary 4
7. Jak poznat, že řešení funguje
8. Jak postup zavést do běžné praxe
9. Závěr

## Blogový draft

# Cvičení čtyř datových tříd před použitím AI nástroje ve firmě

## Co je nové a co z toho skutečně plyne

Než zaměstnanec vloží obsah do nového nástroje, musí rozpoznat, zda jde o veřejná, interní, důvěrná nebo přísně omezená data. Každá třída má jiné povolené prostředí a schválení.

Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:

**1. Microsoft popisuje rychlejší a levnější útoky i potřebu průběžně vnímat riziko, vyhodnocovat kontext a jednat, přičemž člověk má zůstat v kontrole.**

**2. Project Perception koordinuje červené, modré a zelené specializované agenty pro hledání cest útoku, vyhodnocení rizika a nápravná opatření.**

**3. Veřejný preview Project Perception je oznámen na 3. srpna 2026; článek je produktové sdělení Microsoftu, nikoli nezávislé srovnání.**

Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Firemní lektor proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.

## Proč nestačí obecná rada

Obecné pravidlo „nevkládejte citlivá data“ je v praxi příliš vágní. Účastník potřebuje rozhodovat na konkrétních příkladech dokumentů, e-mailů, exportů a snímků obrazovky.

Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj Data Boundary 4, který převádí doporučení do opakovatelného rozhodnutí.

Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.

## Doporučený postup krok za krokem

1. **Přečíst účel a obsah pracovního vstupu.**
2. **Zařadit jej do jedné ze čtyř datových tříd.**
3. **Ověřit, zda je zvolený nástroj pro třídu povolen.**
4. **Provést anonymizaci nebo vyžádat schválení.**
5. **Zapsat rozhodnutí bez kopie citlivého obsahu.**

Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.

Na školení použijte anonymizované karty a čtyři koše. U každého rozhodnutí účastník uvede datovou třídu, povolený nástroj, nutnou úpravu a schvalovatele.

## Kde typicky vzniká chyba

Nejčastější rizika jsou konkrétní:

- účastník zamění interní dokument za veřejný
- výukový systém ukládá původní citlivý text
- klasifikace se používá bez aktuálního firemního pravidla

Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.

## Praktický příklad

Karta obsahuje export zákaznických požadavků. Účastník jej označí jako důvěrný, vybere schválené prostředí, odstraní identifikátory a před použitím vyžádá souhlas vlastníka procesu.

Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.

## Jak využít nástroj Data Boundary 4

Checker provede tým klasifikací vstupu a ukáže povolený postup před použitím nástroje. Minimální verze zahrnuje: čtyři datové třídy, katalog anonymních scénářů, povolené nástroje, zakázané vstupy, anonymizace, schvalovatel, odůvodnění, skóre, vysvětlení, administrace lektora a export týmového pravidla.

Firma získá jednoduché pravidlo použitelné v každodenní práci a OSVČ lektor může měřit skutečné rozhodování účastníků. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.

Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.

## Jak poznat, že řešení funguje

Hlavní metrika je: alespoň 90 procent scénářů je správně klasifikováno a žádný tréninkový záznam neobsahuje původní citlivý obsah. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.

Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.

## Jak postup zavést do běžné praxe

Ve firemním školení se postup zavede přes konkrétní pracovní úlohu účastníků, nikoli přes obecnou směrnici. Lektor před workshopem získá anonymizovaný scénář, během lekce změří výchozí rozhodnutí a na závěr nechá každého účastníka provést stejnou kontrolu samostatně. Firma si odnese jedno pravidlo, jednoho vlastníka a termín ověření do třiceti dnů. U OSVČ je vlastníkem přímo účastník; u týmu vedoucí procesu. Výsledky školení se ukládají jen v nezbytném rozsahu a nepřebírají ostrá klientská data. Následná kontrola ověří reálné použití, ne pouze účast na kurzu.

## Závěr

Na školení použijte anonymizované karty a čtyři koše. U každého rozhodnutí účastník uvede datovou třídu, povolený nástroj, nutnou úpravu a schvalovatele. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Objednejte praktický B2B workshop přes firemnilektor.cz.

## Blog pro Enfold

<h1>Cvičení čtyř datových tříd před použitím AI nástroje ve firmě</h1>
<p class="perex">Než zaměstnanec vloží obsah do nového nástroje, musí rozpoznat, zda jde o veřejná, interní, důvěrná nebo přísně omezená data. Každá třída má jiné povolené prostředí a schválení.</p>
<h2>Co je nové a co z toho skutečně plyne</h2>
<p>Než zaměstnanec vloží obsah do nového nástroje, musí rozpoznat, zda jde o veřejná, interní, důvěrná nebo přísně omezená data. Každá třída má jiné povolené prostředí a schválení.</p>
<p>Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:</p>
<p><strong>1. Microsoft popisuje rychlejší a levnější útoky i potřebu průběžně vnímat riziko, vyhodnocovat kontext a jednat, přičemž člověk má zůstat v kontrole.</strong></p>
<p><strong>2. Project Perception koordinuje červené, modré a zelené specializované agenty pro hledání cest útoku, vyhodnocení rizika a nápravná opatření.</strong></p>
<p><strong>3. Veřejný preview Project Perception je oznámen na 3. srpna 2026; článek je produktové sdělení Microsoftu, nikoli nezávislé srovnání.</strong></p>
<p>Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Firemní lektor proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.</p>
<h2>Proč nestačí obecná rada</h2>
<p>Obecné pravidlo „nevkládejte citlivá data“ je v praxi příliš vágní. Účastník potřebuje rozhodovat na konkrétních příkladech dokumentů, e-mailů, exportů a snímků obrazovky.</p>
<p>Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj Data Boundary 4, který převádí doporučení do opakovatelného rozhodnutí.</p>
<p>Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol><li>Přečíst účel a obsah pracovního vstupu.</li><li>Zařadit jej do jedné ze čtyř datových tříd.</li><li>Ověřit, zda je zvolený nástroj pro třídu povolen.</li><li>Provést anonymizaci nebo vyžádat schválení.</li><li>Zapsat rozhodnutí bez kopie citlivého obsahu.</li></ol>
<p>Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.</p>
<p>Na školení použijte anonymizované karty a čtyři koše. U každého rozhodnutí účastník uvede datovou třídu, povolený nástroj, nutnou úpravu a schvalovatele.</p>
<h2>Kde typicky vzniká chyba</h2>
<p>Nejčastější rizika jsou konkrétní:</p>
<ul><li>účastník zamění interní dokument za veřejný</li><li>výukový systém ukládá původní citlivý text</li><li>klasifikace se používá bez aktuálního firemního pravidla</li></ul>
<p>Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.</p>
<h2>Praktický příklad</h2>
<p>Karta obsahuje export zákaznických požadavků. Účastník jej označí jako důvěrný, vybere schválené prostředí, odstraní identifikátory a před použitím vyžádá souhlas vlastníka procesu.</p>
<p>Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.</p>
<h2>Jak využít nástroj Data Boundary 4</h2>
<p>Checker provede tým klasifikací vstupu a ukáže povolený postup před použitím nástroje. Minimální verze zahrnuje: čtyři datové třídy, katalog anonymních scénářů, povolené nástroje, zakázané vstupy, anonymizace, schvalovatel, odůvodnění, skóre, vysvětlení, administrace lektora a export týmového pravidla.</p>
<p>Firma získá jednoduché pravidlo použitelné v každodenní práci a OSVČ lektor může měřit skutečné rozhodování účastníků. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<p>Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.</p>
<h2>Jak poznat, že řešení funguje</h2>
<p>Hlavní metrika je: alespoň 90 procent scénářů je správně klasifikováno a žádný tréninkový záznam neobsahuje původní citlivý obsah. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.</p>
<p>Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.</p>
<h2>Jak postup zavést do běžné praxe</h2>
<p>Ve firemním školení se postup zavede přes konkrétní pracovní úlohu účastníků, nikoli přes obecnou směrnici. Lektor před workshopem získá anonymizovaný scénář, během lekce změří výchozí rozhodnutí a na závěr nechá každého účastníka provést stejnou kontrolu samostatně. Firma si odnese jedno pravidlo, jednoho vlastníka a termín ověření do třiceti dnů. U OSVČ je vlastníkem přímo účastník; u týmu vedoucí procesu. Výsledky školení se ukládají jen v nezbytném rozsahu a nepřebírají ostrá klientská data. Následná kontrola ověří reálné použití, ne pouze účast na kurzu.</p>
<h2>Závěr</h2>
<p>Na školení použijte anonymizované karty a čtyři koše. U každého rozhodnutí účastník uvede datovou třídu, povolený nástroj, nutnou úpravu a schvalovatele. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Objednejte praktický B2B workshop přes firemnilektor.cz.</p>

## Facebook text

Cvičení čtyř datových tříd před použitím AI nástroje ve firmě

Než zaměstnanec vloží obsah do nového nástroje, musí rozpoznat, zda jde o veřejná, interní, důvěrná nebo přísně omezená data. Každá třída má jiné povolené prostředí a schválení.

Na školení použijte anonymizované karty a čtyři koše. U každého rozhodnutí účastník uvede datovou třídu, povolený nástroj, nutnou úpravu a schvalovatele.

Praktická pomůcka: Data Boundary 4. Firma získá jednoduché pravidlo použitelné v každodenní práci a OSVČ lektor může měřit skutečné rozhodování účastníků.

Více: https://www.firemnilektor.cz/

## LinkedIn text

Cvičení čtyř datových tříd před použitím AI nástroje ve firmě

Obecné pravidlo „nevkládejte citlivá data“ je v praxi příliš vágní. Účastník potřebuje rozhodovat na konkrétních příkladech dokumentů, e-mailů, exportů a snímků obrazovky.

Doporučený první krok: Přečíst účel a obsah pracovního vstupu.

Data Boundary 4: Checker provede tým klasifikací vstupu a ukáže povolený postup před použitím nástroje.

Firma získá jednoduché pravidlo použitelné v každodenní práci a OSVČ lektor může měřit skutečné rozhodování účastníků.

https://www.firemnilektor.cz/

## Instagram caption

Cvičení čtyř datových tříd před použitím AI nástroje ve firmě

Než zaměstnanec vloží obsah do nového nástroje, musí rozpoznat, zda jde o veřejná, interní, důvěrná nebo přísně omezená data. Každá třída má jiné povolené prostředí a schválení.

✅ Přečíst účel a obsah pracovního vstupu.
✅ Zařadit jej do jedné ze čtyř datových tříd.
✅ Ověřit, zda je zvolený nástroj pro třídu povolen.

Na školení použijte anonymizované karty a čtyři koše. U každého rozhodnutí účastník uvede datovou třídu, povolený nástroj, nutnou úpravu a schvalovatele.

https://www.firemnilektor.cz/

#Firemnílektor #praktickytip #DataBoundary4

## Čistý publikační text pro Facebook

Cvičení čtyř datových tříd před použitím AI nástroje ve firmě

Než zaměstnanec vloží obsah do nového nástroje, musí rozpoznat, zda jde o veřejná, interní, důvěrná nebo přísně omezená data. Každá třída má jiné povolené prostředí a schválení.

Na školení použijte anonymizované karty a čtyři koše. U každého rozhodnutí účastník uvede datovou třídu, povolený nástroj, nutnou úpravu a schvalovatele.

Praktická pomůcka: Data Boundary 4. Firma získá jednoduché pravidlo použitelné v každodenní práci a OSVČ lektor může měřit skutečné rozhodování účastníků.

Více: https://www.firemnilektor.cz/

## Čistý publikační text pro LinkedIn

Cvičení čtyř datových tříd před použitím AI nástroje ve firmě

Obecné pravidlo „nevkládejte citlivá data“ je v praxi příliš vágní. Účastník potřebuje rozhodovat na konkrétních příkladech dokumentů, e-mailů, exportů a snímků obrazovky.

Doporučený první krok: Přečíst účel a obsah pracovního vstupu.

Data Boundary 4: Checker provede tým klasifikací vstupu a ukáže povolený postup před použitím nástroje.

Firma získá jednoduché pravidlo použitelné v každodenní práci a OSVČ lektor může měřit skutečné rozhodování účastníků.

https://www.firemnilektor.cz/

## Čistý publikační text pro Instagram

Cvičení čtyř datových tříd před použitím AI nástroje ve firmě

Než zaměstnanec vloží obsah do nového nástroje, musí rozpoznat, zda jde o veřejná, interní, důvěrná nebo přísně omezená data. Každá třída má jiné povolené prostředí a schválení.

✅ Přečíst účel a obsah pracovního vstupu.
✅ Zařadit jej do jedné ze čtyř datových tříd.
✅ Ověřit, zda je zvolený nástroj pro třídu povolen.

Na školení použijte anonymizované karty a čtyři koše. U každého rozhodnutí účastník uvede datovou třídu, povolený nástroj, nutnou úpravu a schvalovatele.

https://www.firemnilektor.cz/

#Firemnílektor #praktickytip #DataBoundary4

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** Cvičení čtyř datových tříd před použitím AI nástroje ve firmě

**Scénář po sekundách:** 0–2 s výrazný hook; 2–7 s konkrétní situace; 7–10 s Data Boundary 4 a CTA.

**Mluvený text:** Nejdřív datová třída, potom nástroj. Veřejná, interní, důvěrná, nebo přísně omezená.

**Text na obrazovku:** Cvičení čtyř datových tříd před použitím AI nástroje ve firmě / Data Boundary 4 / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte Data Boundary 4.

**Hashtagy:** #Firemnílektor #praktickynavod #bezpecnypostup

**Cover:** Cvičení čtyř datových tříd před použitím AI nástroje ve firmě

**Prompt pro Gemini Flow / Omni:** Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Nejdřív datová třída, potom nástroj. Veřejná, interní, důvěrná, nebo přísně omezená.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení Data Boundary 4 a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## YouTube Shorts popisek

Než zaměstnanec vloží obsah do nového nástroje, musí rozpoznat, zda jde o veřejná, interní, důvěrná nebo přísně omezená data. Každá třída má jiné povolené prostředí a schválení. Na školení použijte anonymizované karty a čtyři koše. U každého rozhodnutí účastník uvede datovou třídu, povolený nástroj, nutnou úpravu a schvalovatele. Více na https://www.firemnilektor.cz/

## Text do grafiky

Cvičení čtyř datových tříd před použitím AI nástroje ve firmě

Data Boundary 4

## CTA

Objednejte praktický B2B workshop na firemnilektor.cz.

## Alt text

Cvičení čtyř datových tříd před použitím AI nástroje ve firmě: názorné zobrazení konkrétního postupu a nástroje Data Boundary 4 v souladu se značkou Firemní lektor.

## Prompt na obrázek

Moderní realistický B2B workshop pro firemnilektor.cz k tématu „Cvičení čtyř datových tříd před použitím AI nástroje ve firmě“. Firemní tým pracuje s praktickým scénářem a kontrolním listem, barvy #375A6C, #F5F7FA a bílá, profesionální výuková atmosféra, bez značky Agenda24 a bez robotů.

## Reference k obrázku

Použij výhradně manifest značky firemni-lektor a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Nejdřív datová třída, potom nástroj. Veřejná, interní, důvěrná, nebo přísně omezená.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení Data Boundary 4 a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## Reference k videu

Vizuální pravidla čti pouze z manifestu firemni-lektor; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**Data Boundary 4** — Checker provede tým klasifikací vstupu a ukáže povolený postup před použitím nástroje.

Přínos: Firma získá jednoduché pravidlo použitelné v každodenní práci a OSVČ lektor může měřit skutečné rozhodování účastníků.

## MVP verze

čtyři datové třídy, katalog anonymních scénářů, povolené nástroje, zakázané vstupy, anonymizace, schvalovatel, odůvodnění, skóre, vysvětlení, administrace lektora a export týmového pravidla

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „Data Boundary 4“ pro projekt Firemní lektor. Funkce: čtyři datové třídy, katalog anonymních scénářů, povolené nástroje, zakázané vstupy, anonymizace, schvalovatel, odůvodnění, skóre, vysvětlení, administrace lektora a export týmového pravidla. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Firma získá jednoduché pravidlo použitelné v každodenní práci a OSVČ lektor může měřit skutečné rozhodování účastníků. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace.
