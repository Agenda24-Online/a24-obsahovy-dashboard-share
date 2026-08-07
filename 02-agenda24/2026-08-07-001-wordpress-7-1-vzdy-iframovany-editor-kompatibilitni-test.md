---
title: "WordPress 7.1 zavádí vždy iframovaný editor: vlastní bloky potřebují nový kompatibilitní test"
date: 2026-08-07
project: "Agenda24"
project_url: "https://agenda24.cz/"
projects: ["Agenda24"]
topic_type: "novinka"
usage_type: "blog, sociální sítě, video, nástroj"
priority: "vysoká"
status: "k rozpracování"
blog_potential: "vysoký"
social_potential: "vysoký"
recommended_output: "publikovatelný článek, sociální sada, 10s video a praktický nástroj"
brand: "agenda24"
tags: ["novinka", "Aplikace, pluginy a automatizace", "A24 Iframe Editor Readiness Audit"]
source_summary: "WordPress 7.1 Field Guide – Make WordPress Core (5. 8. 2026)"
value_feature_type: "WordPress kompatibilitní audit"
value_feature_name: "A24 Iframe Editor Readiness Audit"
value_feature_summary: "Audit spojí statickou kontrolu rizikových přístupů k DOM s praktickými scénáři uvnitř iframovaného editoru."
value_feature_benefit: "Agenda24 odhalí regresi vlastního bloku před aktualizací klientského webu a opraví jen skutečně dotčené místo."
value_feature_mvp: "verze WordPressu, PHP, šablony a pluginu, bloky a metabox rozšíření, hledání document window querySelector a listenerů, ownerDocument, defaultView, styly plátna, scénáře vložit upravit uložit znovu otevřít, důkaz, závažnost, oprava, retest a rollback"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 Iframe Editor Readiness Audit“ pro projekt Agenda24. Funkce: verze WordPressu, PHP, šablony a pluginu, bloky a metabox rozšíření, hledání document window querySelector a listenerů, ownerDocument, defaultView, styly plátna, scénáře vložit upravit uložit znovu otevřít, důkaz, závažnost, oprava, retest a rollback. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Agenda24 odhalí regresi vlastního bloku před aktualizací klientského webu a opraví jen skutečně dotčené místo. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci."
agenda24_area: "Aplikace, pluginy a automatizace"
---

## Shrnutí

WordPress 7.1 Field Guide potvrzuje, že editor příspěvků bude vždy vykreslen v iframe. Vlastní bloky a rozšíření, která sahají na globální document, window, styly nebo události editoru, proto vyžadují cílený test.

## Zdroje

- [WordPress 7.1 Field Guide – Make WordPress Core (5. 8. 2026)](https://make.wordpress.org/core/2026/08/05/wordpress-7-1-field-guide/)

## Proč je to důležité

Plugin může fungovat na webu i v administraci, ale selhat přímo v plátně editoru. Typické jsou chybějící styly, nefunkční výběr prvku, duplicitní listener nebo skript připojený k nesprávnému dokumentu.

## Doporučení

Na stagingu otestujte každý vlastní blok v novém i starém obsahu, použijte ownerDocument a defaultView a ověřte připojení i úklid event listenerů.

## SEO titulek

WordPress 7.1 zavádí vždy iframovaný editor: vlastní bloky potřebují nový kompatibilitní test | Agenda24

## Meta popis

WordPress 7.1 Field Guide potvrzuje, že editor příspěvků bude vždy vykreslen v iframe. Vlastní bloky a rozšíření, která sahají na globální document, window

## Perex

WordPress 7.1 Field Guide potvrzuje, že editor příspěvků bude vždy vykreslen v iframe. Vlastní bloky a rozšíření, která sahají na globální document, window, styly nebo události editoru, proto vyžadují cílený test. Na stagingu otestujte každý vlastní blok v novém i starém obsahu, použijte ownerDocument a defaultView a ověřte připojení i úklid event listenerů.

## Blogový titulek

WordPress 7.1 zavádí vždy iframovaný editor: vlastní bloky potřebují nový kompatibilitní test

## Osnova blogu

1. Co je nové a co z toho plyne
2. Proč nestačí obecná rada
3. Doporučený postup krok za krokem
4. Kde typicky vzniká chyba
5. Praktický příklad
6. Jak využít nástroj A24 Iframe Editor Readiness Audit
7. Jak poznat, že řešení funguje
8. Jak postup zavést do běžné praxe
9. Závěr

## Blogový draft

# WordPress 7.1 zavádí vždy iframovaný editor: vlastní bloky potřebují nový kompatibilitní test

## Co je nové a co z toho skutečně plyne

WordPress 7.1 Field Guide potvrzuje, že editor příspěvků bude vždy vykreslen v iframe. Vlastní bloky a rozšíření, která sahají na globální document, window, styly nebo události editoru, proto vyžadují cílený test.

Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:

**1. WordPress 7.1 Field Guide shrnuje změny důležité pro vývojáře pluginů, bloků a šablon před vydáním 19. srpna 2026.**

**2. Editor příspěvků je ve WordPressu 7.1 vždy vykreslen v iframe bez ohledu na typ šablony, verzi Block API nebo obsah příspěvku.**

**3. Kód pracující s plátnem editoru má používat ownerDocument a defaultView místo globálního document a window a správně uklízet event listenery.**

Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.

## Proč nestačí obecná rada

Plugin může fungovat na webu i v administraci, ale selhat přímo v plátně editoru. Typické jsou chybějící styly, nefunkční výběr prvku, duplicitní listener nebo skript připojený k nesprávnému dokumentu.

Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Iframe Editor Readiness Audit, který převádí doporučení do opakovatelného rozhodnutí.

Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.

## Doporučený postup krok za krokem

1. **Vytvořit aktuální staging s reálnou skladbou bloků bez osobních dat.**
2. **Sepsat všechny vlastní bloky a skripty rozšiřující editor.**
3. **Najít přímé přístupy ke globálnímu document a window.**
4. **Otestovat vložení, úpravu, uložení a opětovné otevření obsahu.**
5. **Selhání opravit cíleně a zopakovat celý dotčený tok.**

Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.

Na stagingu otestujte každý vlastní blok v novém i starém obsahu, použijte ownerDocument a defaultView a ověřte připojení i úklid event listenerů.

## Kde typicky vzniká chyba

Nejčastější rizika jsou konkrétní:

- test proběhne jen v Site Editoru místo editoru příspěvků
- listener zůstane aktivní po odpojení bloku
- styl je načten v administraci, ale ne uvnitř iframe

Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.

## Praktický příklad

Vlastní galerijní blok po kliknutí neotevře dialog, protože skript hledá prvek v globálním dokumentu. Oprava použije ownerDocument prvku a test ověří připojení i odpojení listeneru.

Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.

## Jak využít nástroj A24 Iframe Editor Readiness Audit

Audit spojí statickou kontrolu rizikových přístupů k DOM s praktickými scénáři uvnitř iframovaného editoru. Minimální verze zahrnuje: verze WordPressu, PHP, šablony a pluginu, bloky a metabox rozšíření, hledání document window querySelector a listenerů, ownerDocument, defaultView, styly plátna, scénáře vložit upravit uložit znovu otevřít, důkaz, závažnost, oprava, retest a rollback.

Agenda24 odhalí regresi vlastního bloku před aktualizací klientského webu a opraví jen skutečně dotčené místo. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.

Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.

## Jak poznat, že řešení funguje

Hlavní metrika je: všechny vlastní bloky projdou čtyřmi scénáři, konzole nemá chybu a počet listenerů se po opakovaném otevření nezvyšuje. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.

Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.

## Jak postup zavést do běžné praxe

Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.

## Závěr

Na stagingu otestujte každý vlastní blok v novém i starém obsahu, použijte ownerDocument a defaultView a ověřte připojení i úklid event listenerů. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.

## Blog pro Enfold

<h1>WordPress 7.1 zavádí vždy iframovaný editor: vlastní bloky potřebují nový kompatibilitní test</h1>
<p class="perex">WordPress 7.1 Field Guide potvrzuje, že editor příspěvků bude vždy vykreslen v iframe. Vlastní bloky a rozšíření, která sahají na globální document, window, styly nebo události editoru, proto vyžadují cílený test.</p>
<h2>Co je nové a co z toho skutečně plyne</h2>
<p>WordPress 7.1 Field Guide potvrzuje, že editor příspěvků bude vždy vykreslen v iframe. Vlastní bloky a rozšíření, která sahají na globální document, window, styly nebo události editoru, proto vyžadují cílený test.</p>
<p>Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:</p>
<p><strong>1. WordPress 7.1 Field Guide shrnuje změny důležité pro vývojáře pluginů, bloků a šablon před vydáním 19. srpna 2026.</strong></p>
<p><strong>2. Editor příspěvků je ve WordPressu 7.1 vždy vykreslen v iframe bez ohledu na typ šablony, verzi Block API nebo obsah příspěvku.</strong></p>
<p><strong>3. Kód pracující s plátnem editoru má používat ownerDocument a defaultView místo globálního document a window a správně uklízet event listenery.</strong></p>
<p>Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.</p>
<h2>Proč nestačí obecná rada</h2>
<p>Plugin může fungovat na webu i v administraci, ale selhat přímo v plátně editoru. Typické jsou chybějící styly, nefunkční výběr prvku, duplicitní listener nebo skript připojený k nesprávnému dokumentu.</p>
<p>Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Iframe Editor Readiness Audit, který převádí doporučení do opakovatelného rozhodnutí.</p>
<p>Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol><li>Vytvořit aktuální staging s reálnou skladbou bloků bez osobních dat.</li><li>Sepsat všechny vlastní bloky a skripty rozšiřující editor.</li><li>Najít přímé přístupy ke globálnímu document a window.</li><li>Otestovat vložení, úpravu, uložení a opětovné otevření obsahu.</li><li>Selhání opravit cíleně a zopakovat celý dotčený tok.</li></ol>
<p>Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.</p>
<p>Na stagingu otestujte každý vlastní blok v novém i starém obsahu, použijte ownerDocument a defaultView a ověřte připojení i úklid event listenerů.</p>
<h2>Kde typicky vzniká chyba</h2>
<p>Nejčastější rizika jsou konkrétní:</p>
<ul><li>test proběhne jen v Site Editoru místo editoru příspěvků</li><li>listener zůstane aktivní po odpojení bloku</li><li>styl je načten v administraci, ale ne uvnitř iframe</li></ul>
<p>Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.</p>
<h2>Praktický příklad</h2>
<p>Vlastní galerijní blok po kliknutí neotevře dialog, protože skript hledá prvek v globálním dokumentu. Oprava použije ownerDocument prvku a test ověří připojení i odpojení listeneru.</p>
<p>Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.</p>
<h2>Jak využít nástroj A24 Iframe Editor Readiness Audit</h2>
<p>Audit spojí statickou kontrolu rizikových přístupů k DOM s praktickými scénáři uvnitř iframovaného editoru. Minimální verze zahrnuje: verze WordPressu, PHP, šablony a pluginu, bloky a metabox rozšíření, hledání document window querySelector a listenerů, ownerDocument, defaultView, styly plátna, scénáře vložit upravit uložit znovu otevřít, důkaz, závažnost, oprava, retest a rollback.</p>
<p>Agenda24 odhalí regresi vlastního bloku před aktualizací klientského webu a opraví jen skutečně dotčené místo. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<p>Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.</p>
<h2>Jak poznat, že řešení funguje</h2>
<p>Hlavní metrika je: všechny vlastní bloky projdou čtyřmi scénáři, konzole nemá chybu a počet listenerů se po opakovaném otevření nezvyšuje. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.</p>
<p>Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.</p>
<h2>Jak postup zavést do běžné praxe</h2>
<p>Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.</p>
<h2>Závěr</h2>
<p>Na stagingu otestujte každý vlastní blok v novém i starém obsahu, použijte ownerDocument a defaultView a ověřte připojení i úklid event listenerů. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.</p>

## Facebook text

WordPress 7.1 zavádí vždy iframovaný editor: vlastní bloky potřebují nový kompatibilitní test

WordPress 7.1 Field Guide potvrzuje, že editor příspěvků bude vždy vykreslen v iframe. Vlastní bloky a rozšíření, která sahají na globální document, window, styly nebo události editoru, proto vyžadují cílený test.

Na stagingu otestujte každý vlastní blok v novém i starém obsahu, použijte ownerDocument a defaultView a ověřte připojení i úklid event listenerů.

Praktická pomůcka: A24 Iframe Editor Readiness Audit. Agenda24 odhalí regresi vlastního bloku před aktualizací klientského webu a opraví jen skutečně dotčené místo.

Více: https://agenda24.cz/

## LinkedIn text

WordPress 7.1 zavádí vždy iframovaný editor: vlastní bloky potřebují nový kompatibilitní test

Plugin může fungovat na webu i v administraci, ale selhat přímo v plátně editoru. Typické jsou chybějící styly, nefunkční výběr prvku, duplicitní listener nebo skript připojený k nesprávnému dokumentu.

Doporučený první krok: Vytvořit aktuální staging s reálnou skladbou bloků bez osobních dat.

A24 Iframe Editor Readiness Audit: Audit spojí statickou kontrolu rizikových přístupů k DOM s praktickými scénáři uvnitř iframovaného editoru.

Agenda24 odhalí regresi vlastního bloku před aktualizací klientského webu a opraví jen skutečně dotčené místo.

https://agenda24.cz/

## Instagram caption

WordPress 7.1 zavádí vždy iframovaný editor: vlastní bloky potřebují nový kompatibilitní test

WordPress 7.1 Field Guide potvrzuje, že editor příspěvků bude vždy vykreslen v iframe. Vlastní bloky a rozšíření, která sahají na globální document, window, styly nebo události editoru, proto vyžadují cílený test.

✅ Vytvořit aktuální staging s reálnou skladbou bloků bez osobních dat.
✅ Sepsat všechny vlastní bloky a skripty rozšiřující editor.
✅ Najít přímé přístupy ke globálnímu document a window.

Na stagingu otestujte každý vlastní blok v novém i starém obsahu, použijte ownerDocument a defaultView a ověřte připojení i úklid event listenerů.

https://agenda24.cz/

#Agenda24 #praktickytip #A24IframeEditorReadinessAudit

## Čistý publikační text pro Facebook

WordPress 7.1 zavádí vždy iframovaný editor: vlastní bloky potřebují nový kompatibilitní test

WordPress 7.1 Field Guide potvrzuje, že editor příspěvků bude vždy vykreslen v iframe. Vlastní bloky a rozšíření, která sahají na globální document, window, styly nebo události editoru, proto vyžadují cílený test.

Na stagingu otestujte každý vlastní blok v novém i starém obsahu, použijte ownerDocument a defaultView a ověřte připojení i úklid event listenerů.

Praktická pomůcka: A24 Iframe Editor Readiness Audit. Agenda24 odhalí regresi vlastního bloku před aktualizací klientského webu a opraví jen skutečně dotčené místo.

Více: https://agenda24.cz/

## Čistý publikační text pro LinkedIn

WordPress 7.1 zavádí vždy iframovaný editor: vlastní bloky potřebují nový kompatibilitní test

Plugin může fungovat na webu i v administraci, ale selhat přímo v plátně editoru. Typické jsou chybějící styly, nefunkční výběr prvku, duplicitní listener nebo skript připojený k nesprávnému dokumentu.

Doporučený první krok: Vytvořit aktuální staging s reálnou skladbou bloků bez osobních dat.

A24 Iframe Editor Readiness Audit: Audit spojí statickou kontrolu rizikových přístupů k DOM s praktickými scénáři uvnitř iframovaného editoru.

Agenda24 odhalí regresi vlastního bloku před aktualizací klientského webu a opraví jen skutečně dotčené místo.

https://agenda24.cz/

## Čistý publikační text pro Instagram

WordPress 7.1 zavádí vždy iframovaný editor: vlastní bloky potřebují nový kompatibilitní test

WordPress 7.1 Field Guide potvrzuje, že editor příspěvků bude vždy vykreslen v iframe. Vlastní bloky a rozšíření, která sahají na globální document, window, styly nebo události editoru, proto vyžadují cílený test.

✅ Vytvořit aktuální staging s reálnou skladbou bloků bez osobních dat.
✅ Sepsat všechny vlastní bloky a skripty rozšiřující editor.
✅ Najít přímé přístupy ke globálnímu document a window.

Na stagingu otestujte každý vlastní blok v novém i starém obsahu, použijte ownerDocument a defaultView a ověřte připojení i úklid event listenerů.

https://agenda24.cz/

#Agenda24 #praktickytip #A24IframeEditorReadinessAudit

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** WordPress 7.1 zavádí vždy iframovaný editor: vlastní bloky potřebují nový kompatibilitní test

**Scénář po sekundách:** 0–2 s výrazný hook; 2–7 s konkrétní situace; 7–10 s A24 Iframe Editor Readiness Audit a CTA.

**Mluvený text:** WordPress sedm jedna mění editor na iframe. Ověřte DOM, styly a listenery dřív než produkci.

**Text na obrazovku:** WordPress 7.1 zavádí vždy iframovaný editor: vlastní bloky potřebují nový kompatibilitní test / A24 Iframe Editor Readiness Audit / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte A24 Iframe Editor Readiness Audit.

**Hashtagy:** #Agenda24 #praktickynavod #bezpecnypostup

**Cover:** WordPress 7.1 zavádí vždy iframovaný editor: vlastní bloky potřebují nový kompatibilitní test

**Prompt pro Gemini Flow / Omni:** Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „WordPress sedm jedna mění editor na iframe. Ověřte DOM, styly a listenery dřív než produkci.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Iframe Editor Readiness Audit a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## YouTube Shorts popisek

WordPress 7.1 Field Guide potvrzuje, že editor příspěvků bude vždy vykreslen v iframe. Vlastní bloky a rozšíření, která sahají na globální document, window, styly nebo události editoru, proto vyžadují cílený test. Na stagingu otestujte každý vlastní blok v novém i starém obsahu, použijte ownerDocument a defaultView a ověřte připojení i úklid event listenerů. Více na https://agenda24.cz/

## Text do grafiky

WordPress 7.1 zavádí vždy iframovaný editor: vlastní bloky potřebují nový kompatibilitní test

A24 Iframe Editor Readiness Audit

## CTA

Otevřete Agenda24 a ověřte první konkrétní krok.

## Alt text

WordPress 7.1 zavádí vždy iframovaný editor: vlastní bloky potřebují nový kompatibilitní test: názorné zobrazení konkrétního postupu a nástroje A24 Iframe Editor Readiness Audit v souladu se značkou Agenda24.

## Prompt na obrázek

Prémiový realistický vizuál pro Agenda24 k tématu „WordPress 7.1 zavádí vždy iframovaný editor: vlastní bloky potřebují nový kompatibilitní test“. Tmavé pozadí #030712 a #080B16, akcent #EC0044, bílá typografie, originální symbol 24 a Martin pouze podle uložených referencí. Čistá technická kompozice, žádná žlutá, zlatá ani oranžová, žádní roboti, žádný levný cyberpunk, žádné cizí logo.

## Reference k obrázku

Použij výhradně manifest značky agenda24 a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „WordPress sedm jedna mění editor na iframe. Ověřte DOM, styly a listenery dřív než produkci.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Iframe Editor Readiness Audit a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## Reference k videu

Vizuální pravidla čti pouze z manifestu agenda24; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**A24 Iframe Editor Readiness Audit** — Audit spojí statickou kontrolu rizikových přístupů k DOM s praktickými scénáři uvnitř iframovaného editoru.

Přínos: Agenda24 odhalí regresi vlastního bloku před aktualizací klientského webu a opraví jen skutečně dotčené místo.

## MVP verze

verze WordPressu, PHP, šablony a pluginu, bloky a metabox rozšíření, hledání document window querySelector a listenerů, ownerDocument, defaultView, styly plátna, scénáře vložit upravit uložit znovu otevřít, důkaz, závažnost, oprava, retest a rollback

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 Iframe Editor Readiness Audit“ pro projekt Agenda24. Funkce: verze WordPressu, PHP, šablony a pluginu, bloky a metabox rozšíření, hledání document window querySelector a listenerů, ownerDocument, defaultView, styly plátna, scénáře vložit upravit uložit znovu otevřít, důkaz, závažnost, oprava, retest a rollback. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Agenda24 odhalí regresi vlastního bloku před aktualizací klientského webu a opraví jen skutečně dotčené místo. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci.

