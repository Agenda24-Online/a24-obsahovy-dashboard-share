---
title: "Sedm kontrol před zveřejněním WordPress Ability přes REST nebo MCP"
date: 2026-08-02
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
tags: ["praktický tip", "Správa webu a e-shopu", "A24 Ability Seven"]
source_summary: "WordPress Developer Blog – Build your first AI-Powered WordPress plugin (30. 7. 2026)"
value_feature_type: "bezpečnostní protokol"
value_feature_name: "A24 Ability Seven"
value_feature_summary: "Protokol vede vývojáře sedmi kontrolami a vytvoří jednoznačné rozhodnutí povolit, omezit nebo blokovat schopnost."
value_feature_benefit: "Agenda24 získá opakovatelný standard pro vlastní pluginy i kontrolu dodavatelských integrací."
value_feature_mvp: "sedm kontrol, účel, input a output schema, role a capabilities, osobní a externí data, read/write dopad, chyba a timeout, idempotence, důkaz, schvalovatel, blokátor, datum a export"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 Ability Seven“ pro projekt Agenda24. Funkce: sedm kontrol, účel, input a output schema, role a capabilities, osobní a externí data, read/write dopad, chyba a timeout, idempotence, důkaz, schvalovatel, blokátor, datum a export. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Agenda24 získá opakovatelný standard pro vlastní pluginy i kontrolu dodavatelských integrací. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci."
agenda24_area: "Správa webu a e-shopu"
---

## Shrnutí

Před zveřejněním schopnosti nestačí ověřit úspěšnou ukázku. Kontrola musí pokrýt účel, schéma, oprávnění, rozsah dat, zápis, chybu a opakované spuštění.

## Zdroje

- [WordPress Developer Blog – Build your first AI-Powered WordPress plugin (30. 7. 2026)](https://developer.wordpress.org/news/2026/07/build-your-first-ai-powered-wordpress-plugin/)

## Proč je to důležité

Stejnou Ability může použít administrace, REST klient i agent. Nejasný popis nebo široké oprávnění se proto násobí ve všech napojených cestách.

## Doporučení

Použijte sedmibodový protokol a ke každému bodu uložte konkrétní důkaz. Pokud není zřejmé, co se po chybě uloží, schopnost nezveřejňujte přes REST ani MCP.

## SEO titulek

Sedm kontrol před zveřejněním WordPress Ability přes REST nebo MCP | Agenda24

## Meta popis

Před zveřejněním schopnosti nestačí ověřit úspěšnou ukázku. Kontrola musí pokrýt účel, schéma, oprávnění, rozsah dat, zápis, chybu a opakované spuštění.

## Perex

Před zveřejněním schopnosti nestačí ověřit úspěšnou ukázku. Kontrola musí pokrýt účel, schéma, oprávnění, rozsah dat, zápis, chybu a opakované spuštění. Použijte sedmibodový protokol a ke každému bodu uložte konkrétní důkaz. Pokud není zřejmé, co se po chybě uloží, schopnost nezveřejňujte přes REST ani MCP.

## Blogový titulek

Sedm kontrol před zveřejněním WordPress Ability přes REST nebo MCP

## Osnova blogu

1. Co je nové a co z toho plyne
2. Proč nestačí obecná rada
3. Doporučený postup krok za krokem
4. Kde typicky vzniká chyba
5. Praktický příklad
6. Jak využít nástroj A24 Ability Seven
7. Jak poznat, že řešení funguje
8. Jak postup zavést do běžné praxe
9. Závěr

## Blogový draft

# Sedm kontrol před zveřejněním WordPress Ability přes REST nebo MCP

## Co je nové a co z toho skutečně plyne

Před zveřejněním schopnosti nestačí ověřit úspěšnou ukázku. Kontrola musí pokrýt účel, schéma, oprávnění, rozsah dat, zápis, chybu a opakované spuštění.

Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:

**1. Oficiální návod propojuje Abilities API, provider-agnostic WordPress AI Client a MCP Adapter do jednoho pluginového workflow.**

**2. Každá Ability má popsané vstupy a výstupy, permission callback a execute callback; zveřejnění přes REST je určeno autentizovaným uživatelům.**

**3. Návod výslovně počítá s WP_Error, rozdíly mezi poskytovateli a obranným parsováním nedeterministického JSON výstupu.**

Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.

## Proč nestačí obecná rada

Stejnou Ability může použít administrace, REST klient i agent. Nejasný popis nebo široké oprávnění se proto násobí ve všech napojených cestách.

Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Ability Seven, který převádí doporučení do opakovatelného rozhodnutí.

Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.

## Doporučený postup krok za krokem

1. **Popsat jednu větu účelu bez marketingového slibu.**
2. **Ověřit schéma na platném i neplatném vstupu.**
3. **Testovat nejnižší povolenou a první zakázanou roli.**
4. **Zmapovat data a každý zápis mimo plugin.**
5. **Ověřit chybu, timeout, opakování a návrat do čistého stavu.**

Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.

Použijte sedmibodový protokol a ke každému bodu uložte konkrétní důkaz. Pokud není zřejmé, co se po chybě uloží, schopnost nezveřejňujte přes REST ani MCP.

## Kde typicky vzniká chyba

Nejčastější rizika jsou konkrétní:

- test proběhne pouze pod administrátorem
- log nebo chybová zpráva obsahuje tajný klíč
- opakovaný požadavek vytvoří dvě stejné položky

Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.

## Praktický příklad

Ability vytváří koncept z podkladu. Redaktor ji smí spustit, návštěvník ne; neplatný výstup se neuloží a druhé stejné volání vrátí existující bezpečný stav místo duplicity.

Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.

## Jak využít nástroj A24 Ability Seven

Protokol vede vývojáře sedmi kontrolami a vytvoří jednoznačné rozhodnutí povolit, omezit nebo blokovat schopnost. Minimální verze zahrnuje: sedm kontrol, účel, input a output schema, role a capabilities, osobní a externí data, read/write dopad, chyba a timeout, idempotence, důkaz, schvalovatel, blokátor, datum a export.

Agenda24 získá opakovatelný standard pro vlastní pluginy i kontrolu dodavatelských integrací. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.

Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.

## Jak poznat, že řešení funguje

Hlavní metrika je: sedm kontrol má důkaz, zakázaná role je odmítnuta a opakovaný běh nevytvoří duplicitní zápis. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.

Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.

## Jak postup zavést do běžné praxe

Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.

## Závěr

Použijte sedmibodový protokol a ke každému bodu uložte konkrétní důkaz. Pokud není zřejmé, co se po chybě uloží, schopnost nezveřejňujte přes REST ani MCP. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.

## Blog pro Enfold

<h1>Sedm kontrol před zveřejněním WordPress Ability přes REST nebo MCP</h1>
<p class="perex">Před zveřejněním schopnosti nestačí ověřit úspěšnou ukázku. Kontrola musí pokrýt účel, schéma, oprávnění, rozsah dat, zápis, chybu a opakované spuštění.</p>
<h2>Co je nové a co z toho skutečně plyne</h2>
<p>Před zveřejněním schopnosti nestačí ověřit úspěšnou ukázku. Kontrola musí pokrýt účel, schéma, oprávnění, rozsah dat, zápis, chybu a opakované spuštění.</p>
<p>Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:</p>
<p><strong>1. Oficiální návod propojuje Abilities API, provider-agnostic WordPress AI Client a MCP Adapter do jednoho pluginového workflow.</strong></p>
<p><strong>2. Každá Ability má popsané vstupy a výstupy, permission callback a execute callback; zveřejnění přes REST je určeno autentizovaným uživatelům.</strong></p>
<p><strong>3. Návod výslovně počítá s WP_Error, rozdíly mezi poskytovateli a obranným parsováním nedeterministického JSON výstupu.</strong></p>
<p>Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.</p>
<h2>Proč nestačí obecná rada</h2>
<p>Stejnou Ability může použít administrace, REST klient i agent. Nejasný popis nebo široké oprávnění se proto násobí ve všech napojených cestách.</p>
<p>Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Ability Seven, který převádí doporučení do opakovatelného rozhodnutí.</p>
<p>Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol><li>Popsat jednu větu účelu bez marketingového slibu.</li><li>Ověřit schéma na platném i neplatném vstupu.</li><li>Testovat nejnižší povolenou a první zakázanou roli.</li><li>Zmapovat data a každý zápis mimo plugin.</li><li>Ověřit chybu, timeout, opakování a návrat do čistého stavu.</li></ol>
<p>Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.</p>
<p>Použijte sedmibodový protokol a ke každému bodu uložte konkrétní důkaz. Pokud není zřejmé, co se po chybě uloží, schopnost nezveřejňujte přes REST ani MCP.</p>
<h2>Kde typicky vzniká chyba</h2>
<p>Nejčastější rizika jsou konkrétní:</p>
<ul><li>test proběhne pouze pod administrátorem</li><li>log nebo chybová zpráva obsahuje tajný klíč</li><li>opakovaný požadavek vytvoří dvě stejné položky</li></ul>
<p>Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.</p>
<h2>Praktický příklad</h2>
<p>Ability vytváří koncept z podkladu. Redaktor ji smí spustit, návštěvník ne; neplatný výstup se neuloží a druhé stejné volání vrátí existující bezpečný stav místo duplicity.</p>
<p>Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.</p>
<h2>Jak využít nástroj A24 Ability Seven</h2>
<p>Protokol vede vývojáře sedmi kontrolami a vytvoří jednoznačné rozhodnutí povolit, omezit nebo blokovat schopnost. Minimální verze zahrnuje: sedm kontrol, účel, input a output schema, role a capabilities, osobní a externí data, read/write dopad, chyba a timeout, idempotence, důkaz, schvalovatel, blokátor, datum a export.</p>
<p>Agenda24 získá opakovatelný standard pro vlastní pluginy i kontrolu dodavatelských integrací. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<p>Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.</p>
<h2>Jak poznat, že řešení funguje</h2>
<p>Hlavní metrika je: sedm kontrol má důkaz, zakázaná role je odmítnuta a opakovaný běh nevytvoří duplicitní zápis. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.</p>
<p>Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.</p>
<h2>Jak postup zavést do běžné praxe</h2>
<p>Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.</p>
<h2>Závěr</h2>
<p>Použijte sedmibodový protokol a ke každému bodu uložte konkrétní důkaz. Pokud není zřejmé, co se po chybě uloží, schopnost nezveřejňujte přes REST ani MCP. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.</p>

## Facebook text

Sedm kontrol před zveřejněním WordPress Ability přes REST nebo MCP

Před zveřejněním schopnosti nestačí ověřit úspěšnou ukázku. Kontrola musí pokrýt účel, schéma, oprávnění, rozsah dat, zápis, chybu a opakované spuštění.

Použijte sedmibodový protokol a ke každému bodu uložte konkrétní důkaz. Pokud není zřejmé, co se po chybě uloží, schopnost nezveřejňujte přes REST ani MCP.

Praktická pomůcka: A24 Ability Seven. Agenda24 získá opakovatelný standard pro vlastní pluginy i kontrolu dodavatelských integrací.

Více: https://agenda24.cz/

## LinkedIn text

Sedm kontrol před zveřejněním WordPress Ability přes REST nebo MCP

Stejnou Ability může použít administrace, REST klient i agent. Nejasný popis nebo široké oprávnění se proto násobí ve všech napojených cestách.

Doporučený první krok: Popsat jednu větu účelu bez marketingového slibu.

A24 Ability Seven: Protokol vede vývojáře sedmi kontrolami a vytvoří jednoznačné rozhodnutí povolit, omezit nebo blokovat schopnost.

Agenda24 získá opakovatelný standard pro vlastní pluginy i kontrolu dodavatelských integrací.

https://agenda24.cz/

## Instagram caption

Sedm kontrol před zveřejněním WordPress Ability přes REST nebo MCP

Před zveřejněním schopnosti nestačí ověřit úspěšnou ukázku. Kontrola musí pokrýt účel, schéma, oprávnění, rozsah dat, zápis, chybu a opakované spuštění.

✅ Popsat jednu větu účelu bez marketingového slibu.
✅ Ověřit schéma na platném i neplatném vstupu.
✅ Testovat nejnižší povolenou a první zakázanou roli.

Použijte sedmibodový protokol a ke každému bodu uložte konkrétní důkaz. Pokud není zřejmé, co se po chybě uloží, schopnost nezveřejňujte přes REST ani MCP.

https://agenda24.cz/

#Agenda24 #praktickytip #A24AbilitySeven

## Čistý publikační text pro Facebook

Sedm kontrol před zveřejněním WordPress Ability přes REST nebo MCP

Před zveřejněním schopnosti nestačí ověřit úspěšnou ukázku. Kontrola musí pokrýt účel, schéma, oprávnění, rozsah dat, zápis, chybu a opakované spuštění.

Použijte sedmibodový protokol a ke každému bodu uložte konkrétní důkaz. Pokud není zřejmé, co se po chybě uloží, schopnost nezveřejňujte přes REST ani MCP.

Praktická pomůcka: A24 Ability Seven. Agenda24 získá opakovatelný standard pro vlastní pluginy i kontrolu dodavatelských integrací.

Více: https://agenda24.cz/

## Čistý publikační text pro LinkedIn

Sedm kontrol před zveřejněním WordPress Ability přes REST nebo MCP

Stejnou Ability může použít administrace, REST klient i agent. Nejasný popis nebo široké oprávnění se proto násobí ve všech napojených cestách.

Doporučený první krok: Popsat jednu větu účelu bez marketingového slibu.

A24 Ability Seven: Protokol vede vývojáře sedmi kontrolami a vytvoří jednoznačné rozhodnutí povolit, omezit nebo blokovat schopnost.

Agenda24 získá opakovatelný standard pro vlastní pluginy i kontrolu dodavatelských integrací.

https://agenda24.cz/

## Čistý publikační text pro Instagram

Sedm kontrol před zveřejněním WordPress Ability přes REST nebo MCP

Před zveřejněním schopnosti nestačí ověřit úspěšnou ukázku. Kontrola musí pokrýt účel, schéma, oprávnění, rozsah dat, zápis, chybu a opakované spuštění.

✅ Popsat jednu větu účelu bez marketingového slibu.
✅ Ověřit schéma na platném i neplatném vstupu.
✅ Testovat nejnižší povolenou a první zakázanou roli.

Použijte sedmibodový protokol a ke každému bodu uložte konkrétní důkaz. Pokud není zřejmé, co se po chybě uloží, schopnost nezveřejňujte přes REST ani MCP.

https://agenda24.cz/

#Agenda24 #praktickytip #A24AbilitySeven

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** Sedm kontrol před zveřejněním WordPress Ability přes REST nebo MCP

**Scénář po sekundách:** 0–2 s výrazný hook; 2–7 s konkrétní situace; 7–10 s A24 Ability Seven a CTA.

**Mluvený text:** Před REST nebo MCP ověřte účel, schéma, roli, data, zápis, chybu a opakování.

**Text na obrazovku:** Sedm kontrol před zveřejněním WordPress Ability přes REST nebo MCP / A24 Ability Seven / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte A24 Ability Seven.

**Hashtagy:** #Agenda24 #praktickynavod #bezpecnypostup

**Cover:** Sedm kontrol před zveřejněním WordPress Ability přes REST nebo MCP

**Prompt pro Gemini Flow / Omni:** Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Před REST nebo MCP ověřte účel, schéma, roli, data, zápis, chybu a opakování.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Ability Seven a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## YouTube Shorts popisek

Před zveřejněním schopnosti nestačí ověřit úspěšnou ukázku. Kontrola musí pokrýt účel, schéma, oprávnění, rozsah dat, zápis, chybu a opakované spuštění. Použijte sedmibodový protokol a ke každému bodu uložte konkrétní důkaz. Pokud není zřejmé, co se po chybě uloží, schopnost nezveřejňujte přes REST ani MCP. Více na https://agenda24.cz/

## Text do grafiky

Sedm kontrol před zveřejněním WordPress Ability přes REST nebo MCP

A24 Ability Seven

## CTA

Otevřete Agenda24 a ověřte první konkrétní krok.

## Alt text

Sedm kontrol před zveřejněním WordPress Ability přes REST nebo MCP: názorné zobrazení konkrétního postupu a nástroje A24 Ability Seven v souladu se značkou Agenda24.

## Prompt na obrázek

Prémiový realistický vizuál pro Agenda24 k tématu „Sedm kontrol před zveřejněním WordPress Ability přes REST nebo MCP“. Tmavé pozadí #030712 a #080B16, akcent #EC0044, bílá typografie, originální symbol 24 a Martin pouze podle uložených referencí. Čistá technická kompozice, žádná žlutá, zlatá ani oranžová, žádní roboti, žádný levný cyberpunk, žádné cizí logo.

## Reference k obrázku

Použij výhradně manifest značky agenda24 a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Před REST nebo MCP ověřte účel, schéma, roli, data, zápis, chybu a opakování.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Ability Seven a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## Reference k videu

Vizuální pravidla čti pouze z manifestu agenda24; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**A24 Ability Seven** — Protokol vede vývojáře sedmi kontrolami a vytvoří jednoznačné rozhodnutí povolit, omezit nebo blokovat schopnost.

Přínos: Agenda24 získá opakovatelný standard pro vlastní pluginy i kontrolu dodavatelských integrací.

## MVP verze

sedm kontrol, účel, input a output schema, role a capabilities, osobní a externí data, read/write dopad, chyba a timeout, idempotence, důkaz, schvalovatel, blokátor, datum a export

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 Ability Seven“ pro projekt Agenda24. Funkce: sedm kontrol, účel, input a output schema, role a capabilities, osobní a externí data, read/write dopad, chyba a timeout, idempotence, důkaz, schvalovatel, blokátor, datum a export. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Agenda24 získá opakovatelný standard pro vlastní pluginy i kontrolu dodavatelských integrací. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci.
