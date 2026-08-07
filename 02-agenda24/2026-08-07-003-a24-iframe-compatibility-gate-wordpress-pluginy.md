---
title: "A24 Iframe Compatibility Gate pro bezpečné testování WordPress pluginů"
date: 2026-08-07
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
tags: ["tip na aplikaci", "Aplikace, pluginy a automatizace", "A24 Iframe Compatibility Gate"]
source_summary: "WordPress 7.1 Field Guide – Make WordPress Core (5. 8. 2026)"
value_feature_type: "A24 WordPress/WooCommerce plugin"
value_feature_name: "A24 Iframe Compatibility Gate"
value_feature_summary: "Plugin eviduje rizikové přístupy k editoru, testy v iframe, blokátory, retesty a klientský protokol."
value_feature_benefit: "Agenda24 standardizuje kontrolu kompatibility a nepustí aktualizaci bez doloženého výsledku."
value_feature_mvp: "česká administrace, read-only skener aktivních pluginů a tématu, pravidla document window ownerDocument defaultView a event listener, scénáře bloků, Blocks i klasické rozhraní dle rozsahu, důkazy, role, blokátory, audit, export, bezpečná odinstalace a centrální licence Agenda24"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 Iframe Compatibility Gate“ pro projekt Agenda24. Funkce: česká administrace, read-only skener aktivních pluginů a tématu, pravidla document window ownerDocument defaultView a event listener, scénáře bloků, Blocks i klasické rozhraní dle rozsahu, důkazy, role, blokátory, audit, export, bezpečná odinstalace a centrální licence Agenda24. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Agenda24 standardizuje kontrolu kompatibility a nepustí aktualizaci bez doloženého výsledku. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci."
agenda24_area: "Aplikace, pluginy a automatizace"
---

## Shrnutí

A24 Iframe Compatibility Gate je návrh read-only WordPress pluginu, který vyhledá rizikové editorové integrace, nabídne testovací scénáře a uchová důkazy bez automatického přepisování kódu.

## Zdroje

- [WordPress 7.1 Field Guide – Make WordPress Core (5. 8. 2026)](https://make.wordpress.org/core/2026/08/05/wordpress-7-1-field-guide/)

## Proč je to důležité

Při správě více webů je potřeba stejná brána pro různé pluginy, šablony a role. Automatická oprava DOM kódu by byla příliš riziková, ale inventář a schvalovací proces lze bezpečně sjednotit.

## Doporučení

První verzi omezte na audit, důkazy a schválení. Produkční zásahy, automatické opravy a aktualizace WordPressu ponechte mimo MVP.

## SEO titulek

A24 Iframe Compatibility Gate pro bezpečné testování WordPress pluginů | Agenda24

## Meta popis

A24 Iframe Compatibility Gate je návrh read-only WordPress pluginu, který vyhledá rizikové editorové integrace, nabídne testovací scénáře a uchová důkazy b

## Perex

A24 Iframe Compatibility Gate je návrh read-only WordPress pluginu, který vyhledá rizikové editorové integrace, nabídne testovací scénáře a uchová důkazy bez automatického přepisování kódu. První verzi omezte na audit, důkazy a schválení. Produkční zásahy, automatické opravy a aktualizace WordPressu ponechte mimo MVP.

## Blogový titulek

A24 Iframe Compatibility Gate pro bezpečné testování WordPress pluginů

## Osnova blogu

1. Co je nové a co z toho plyne
2. Proč nestačí obecná rada
3. Doporučený postup krok za krokem
4. Kde typicky vzniká chyba
5. Praktický příklad
6. Jak využít nástroj A24 Iframe Compatibility Gate
7. Jak poznat, že řešení funguje
8. Jak postup zavést do běžné praxe
9. Závěr

## Blogový draft

# A24 Iframe Compatibility Gate pro bezpečné testování WordPress pluginů

## Co je nové a co z toho skutečně plyne

A24 Iframe Compatibility Gate je návrh read-only WordPress pluginu, který vyhledá rizikové editorové integrace, nabídne testovací scénáře a uchová důkazy bez automatického přepisování kódu.

Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:

**1. WordPress 7.1 Field Guide shrnuje změny důležité pro vývojáře pluginů, bloků a šablon před vydáním 19. srpna 2026.**

**2. Editor příspěvků je ve WordPressu 7.1 vždy vykreslen v iframe bez ohledu na typ šablony, verzi Block API nebo obsah příspěvku.**

**3. Kód pracující s plátnem editoru má používat ownerDocument a defaultView místo globálního document a window a správně uklízet event listenery.**

Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.

## Proč nestačí obecná rada

Při správě více webů je potřeba stejná brána pro různé pluginy, šablony a role. Automatická oprava DOM kódu by byla příliš riziková, ale inventář a schvalovací proces lze bezpečně sjednotit.

Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Iframe Compatibility Gate, který převádí doporučení do opakovatelného rozhodnutí.

Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.

## Doporučený postup krok za krokem

1. **Načíst jen technická metadata a zdrojové soubory povolené správcem.**
2. **Označit nálezy podle rizika, nikoli automaticky měnit kód.**
3. **Přiřadit scénáře podle typu editorové integrace.**
4. **Uložit důkaz, vlastníka a podmínku retestu.**
5. **Vygenerovat protokol a rozhodnutí schválit nebo blokovat.**

Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.

První verzi omezte na audit, důkazy a schválení. Produkční zásahy, automatické opravy a aktualizace WordPressu ponechte mimo MVP.

## Kde typicky vzniká chyba

Nejčastější rizika jsou konkrétní:

- skener označí bezpečný kód bez kontextu
- důkaz zachytí osobní údaje
- neplatná licence omezí administraci nebo web

Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.

## Praktický příklad

Plugin najde pět použití globálního document. Tři jsou mimo editor, dvě vyžadují scénář. Jedno projde, druhé zůstane blokátorem s konkrétní opravou.

Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.

## Jak využít nástroj A24 Iframe Compatibility Gate

Plugin eviduje rizikové přístupy k editoru, testy v iframe, blokátory, retesty a klientský protokol. Minimální verze zahrnuje: česká administrace, read-only skener aktivních pluginů a tématu, pravidla document window ownerDocument defaultView a event listener, scénáře bloků, Blocks i klasické rozhraní dle rozsahu, důkazy, role, blokátory, audit, export, bezpečná odinstalace a centrální licence Agenda24.

Agenda24 standardizuje kontrolu kompatibility a nepustí aktualizaci bez doloženého výsledku. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.

Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.

## Jak poznat, že řešení funguje

Hlavní metrika je: každý nález má kontext a stav, blokátor nelze obejít a neplatná licence nikdy neshodí web. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.

Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.

## Jak postup zavést do běžné praxe

Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.

## Závěr

První verzi omezte na audit, důkazy a schválení. Produkční zásahy, automatické opravy a aktualizace WordPressu ponechte mimo MVP. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.

## Blog pro Enfold

<h1>A24 Iframe Compatibility Gate pro bezpečné testování WordPress pluginů</h1>
<p class="perex">A24 Iframe Compatibility Gate je návrh read-only WordPress pluginu, který vyhledá rizikové editorové integrace, nabídne testovací scénáře a uchová důkazy bez automatického přepisování kódu.</p>
<h2>Co je nové a co z toho skutečně plyne</h2>
<p>A24 Iframe Compatibility Gate je návrh read-only WordPress pluginu, který vyhledá rizikové editorové integrace, nabídne testovací scénáře a uchová důkazy bez automatického přepisování kódu.</p>
<p>Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:</p>
<p><strong>1. WordPress 7.1 Field Guide shrnuje změny důležité pro vývojáře pluginů, bloků a šablon před vydáním 19. srpna 2026.</strong></p>
<p><strong>2. Editor příspěvků je ve WordPressu 7.1 vždy vykreslen v iframe bez ohledu na typ šablony, verzi Block API nebo obsah příspěvku.</strong></p>
<p><strong>3. Kód pracující s plátnem editoru má používat ownerDocument a defaultView místo globálního document a window a správně uklízet event listenery.</strong></p>
<p>Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.</p>
<h2>Proč nestačí obecná rada</h2>
<p>Při správě více webů je potřeba stejná brána pro různé pluginy, šablony a role. Automatická oprava DOM kódu by byla příliš riziková, ale inventář a schvalovací proces lze bezpečně sjednotit.</p>
<p>Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Iframe Compatibility Gate, který převádí doporučení do opakovatelného rozhodnutí.</p>
<p>Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol><li>Načíst jen technická metadata a zdrojové soubory povolené správcem.</li><li>Označit nálezy podle rizika, nikoli automaticky měnit kód.</li><li>Přiřadit scénáře podle typu editorové integrace.</li><li>Uložit důkaz, vlastníka a podmínku retestu.</li><li>Vygenerovat protokol a rozhodnutí schválit nebo blokovat.</li></ol>
<p>Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.</p>
<p>První verzi omezte na audit, důkazy a schválení. Produkční zásahy, automatické opravy a aktualizace WordPressu ponechte mimo MVP.</p>
<h2>Kde typicky vzniká chyba</h2>
<p>Nejčastější rizika jsou konkrétní:</p>
<ul><li>skener označí bezpečný kód bez kontextu</li><li>důkaz zachytí osobní údaje</li><li>neplatná licence omezí administraci nebo web</li></ul>
<p>Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.</p>
<h2>Praktický příklad</h2>
<p>Plugin najde pět použití globálního document. Tři jsou mimo editor, dvě vyžadují scénář. Jedno projde, druhé zůstane blokátorem s konkrétní opravou.</p>
<p>Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.</p>
<h2>Jak využít nástroj A24 Iframe Compatibility Gate</h2>
<p>Plugin eviduje rizikové přístupy k editoru, testy v iframe, blokátory, retesty a klientský protokol. Minimální verze zahrnuje: česká administrace, read-only skener aktivních pluginů a tématu, pravidla document window ownerDocument defaultView a event listener, scénáře bloků, Blocks i klasické rozhraní dle rozsahu, důkazy, role, blokátory, audit, export, bezpečná odinstalace a centrální licence Agenda24.</p>
<p>Agenda24 standardizuje kontrolu kompatibility a nepustí aktualizaci bez doloženého výsledku. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<p>Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.</p>
<h2>Jak poznat, že řešení funguje</h2>
<p>Hlavní metrika je: každý nález má kontext a stav, blokátor nelze obejít a neplatná licence nikdy neshodí web. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.</p>
<p>Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.</p>
<h2>Jak postup zavést do běžné praxe</h2>
<p>Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.</p>
<h2>Závěr</h2>
<p>První verzi omezte na audit, důkazy a schválení. Produkční zásahy, automatické opravy a aktualizace WordPressu ponechte mimo MVP. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.</p>

## Facebook text

A24 Iframe Compatibility Gate pro bezpečné testování WordPress pluginů

A24 Iframe Compatibility Gate je návrh read-only WordPress pluginu, který vyhledá rizikové editorové integrace, nabídne testovací scénáře a uchová důkazy bez automatického přepisování kódu.

První verzi omezte na audit, důkazy a schválení. Produkční zásahy, automatické opravy a aktualizace WordPressu ponechte mimo MVP.

Praktická pomůcka: A24 Iframe Compatibility Gate. Agenda24 standardizuje kontrolu kompatibility a nepustí aktualizaci bez doloženého výsledku.

Více: https://agenda24.cz/

## LinkedIn text

A24 Iframe Compatibility Gate pro bezpečné testování WordPress pluginů

Při správě více webů je potřeba stejná brána pro různé pluginy, šablony a role. Automatická oprava DOM kódu by byla příliš riziková, ale inventář a schvalovací proces lze bezpečně sjednotit.

Doporučený první krok: Načíst jen technická metadata a zdrojové soubory povolené správcem.

A24 Iframe Compatibility Gate: Plugin eviduje rizikové přístupy k editoru, testy v iframe, blokátory, retesty a klientský protokol.

Agenda24 standardizuje kontrolu kompatibility a nepustí aktualizaci bez doloženého výsledku.

https://agenda24.cz/

## Instagram caption

A24 Iframe Compatibility Gate pro bezpečné testování WordPress pluginů

A24 Iframe Compatibility Gate je návrh read-only WordPress pluginu, který vyhledá rizikové editorové integrace, nabídne testovací scénáře a uchová důkazy bez automatického přepisování kódu.

✅ Načíst jen technická metadata a zdrojové soubory povolené správcem.
✅ Označit nálezy podle rizika, nikoli automaticky měnit kód.
✅ Přiřadit scénáře podle typu editorové integrace.

První verzi omezte na audit, důkazy a schválení. Produkční zásahy, automatické opravy a aktualizace WordPressu ponechte mimo MVP.

https://agenda24.cz/

#Agenda24 #praktickytip #A24IframeCompatibilityGate

## Čistý publikační text pro Facebook

A24 Iframe Compatibility Gate pro bezpečné testování WordPress pluginů

A24 Iframe Compatibility Gate je návrh read-only WordPress pluginu, který vyhledá rizikové editorové integrace, nabídne testovací scénáře a uchová důkazy bez automatického přepisování kódu.

První verzi omezte na audit, důkazy a schválení. Produkční zásahy, automatické opravy a aktualizace WordPressu ponechte mimo MVP.

Praktická pomůcka: A24 Iframe Compatibility Gate. Agenda24 standardizuje kontrolu kompatibility a nepustí aktualizaci bez doloženého výsledku.

Více: https://agenda24.cz/

## Čistý publikační text pro LinkedIn

A24 Iframe Compatibility Gate pro bezpečné testování WordPress pluginů

Při správě více webů je potřeba stejná brána pro různé pluginy, šablony a role. Automatická oprava DOM kódu by byla příliš riziková, ale inventář a schvalovací proces lze bezpečně sjednotit.

Doporučený první krok: Načíst jen technická metadata a zdrojové soubory povolené správcem.

A24 Iframe Compatibility Gate: Plugin eviduje rizikové přístupy k editoru, testy v iframe, blokátory, retesty a klientský protokol.

Agenda24 standardizuje kontrolu kompatibility a nepustí aktualizaci bez doloženého výsledku.

https://agenda24.cz/

## Čistý publikační text pro Instagram

A24 Iframe Compatibility Gate pro bezpečné testování WordPress pluginů

A24 Iframe Compatibility Gate je návrh read-only WordPress pluginu, který vyhledá rizikové editorové integrace, nabídne testovací scénáře a uchová důkazy bez automatického přepisování kódu.

✅ Načíst jen technická metadata a zdrojové soubory povolené správcem.
✅ Označit nálezy podle rizika, nikoli automaticky měnit kód.
✅ Přiřadit scénáře podle typu editorové integrace.

První verzi omezte na audit, důkazy a schválení. Produkční zásahy, automatické opravy a aktualizace WordPressu ponechte mimo MVP.

https://agenda24.cz/

#Agenda24 #praktickytip #A24IframeCompatibilityGate

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** A24 Iframe Compatibility Gate pro bezpečné testování WordPress pluginů

**Scénář po sekundách:** 0–2 s výrazný hook; 2–7 s konkrétní situace; 7–10 s A24 Iframe Compatibility Gate a CTA.

**Mluvený text:** Iframe Gate najde rizikový kód, spustí test a uloží důkaz. Nic automaticky nepřepisuje.

**Text na obrazovku:** A24 Iframe Compatibility Gate pro bezpečné testování WordPress pluginů / A24 Iframe Compatibility Gate / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte A24 Iframe Compatibility Gate.

**Hashtagy:** #Agenda24 #praktickynavod #bezpecnypostup

**Cover:** A24 Iframe Compatibility Gate pro bezpečné testování WordPress pluginů

**Prompt pro Gemini Flow / Omni:** Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Iframe Gate najde rizikový kód, spustí test a uloží důkaz. Nic automaticky nepřepisuje.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Iframe Compatibility Gate a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## YouTube Shorts popisek

A24 Iframe Compatibility Gate je návrh read-only WordPress pluginu, který vyhledá rizikové editorové integrace, nabídne testovací scénáře a uchová důkazy bez automatického přepisování kódu. První verzi omezte na audit, důkazy a schválení. Produkční zásahy, automatické opravy a aktualizace WordPressu ponechte mimo MVP. Více na https://agenda24.cz/

## Text do grafiky

A24 Iframe Compatibility Gate pro bezpečné testování WordPress pluginů

A24 Iframe Compatibility Gate

## CTA

Otevřete Agenda24 a ověřte první konkrétní krok.

## Alt text

A24 Iframe Compatibility Gate pro bezpečné testování WordPress pluginů: názorné zobrazení konkrétního postupu a nástroje A24 Iframe Compatibility Gate v souladu se značkou Agenda24.

## Prompt na obrázek

Prémiový realistický vizuál pro Agenda24 k tématu „A24 Iframe Compatibility Gate pro bezpečné testování WordPress pluginů“. Tmavé pozadí #030712 a #080B16, akcent #EC0044, bílá typografie, originální symbol 24 a Martin pouze podle uložených referencí. Čistá technická kompozice, žádná žlutá, zlatá ani oranžová, žádní roboti, žádný levný cyberpunk, žádné cizí logo.

## Reference k obrázku

Použij výhradně manifest značky agenda24 a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Iframe Gate najde rizikový kód, spustí test a uloží důkaz. Nic automaticky nepřepisuje.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Iframe Compatibility Gate a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## Reference k videu

Vizuální pravidla čti pouze z manifestu agenda24; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**A24 Iframe Compatibility Gate** — Plugin eviduje rizikové přístupy k editoru, testy v iframe, blokátory, retesty a klientský protokol.

Přínos: Agenda24 standardizuje kontrolu kompatibility a nepustí aktualizaci bez doloženého výsledku.

## MVP verze

česká administrace, read-only skener aktivních pluginů a tématu, pravidla document window ownerDocument defaultView a event listener, scénáře bloků, Blocks i klasické rozhraní dle rozsahu, důkazy, role, blokátory, audit, export, bezpečná odinstalace a centrální licence Agenda24

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 Iframe Compatibility Gate“ pro projekt Agenda24. Funkce: česká administrace, read-only skener aktivních pluginů a tématu, pravidla document window ownerDocument defaultView a event listener, scénáře bloků, Blocks i klasické rozhraní dle rozsahu, důkazy, role, blokátory, audit, export, bezpečná odinstalace a centrální licence Agenda24. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Agenda24 standardizuje kontrolu kompatibility a nepustí aktualizaci bez doloženého výsledku. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci.

