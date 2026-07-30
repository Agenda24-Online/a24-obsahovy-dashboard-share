---
title: "Jak otestovat WooCommerce callback, který se nově spustí až při save()"
date: 2026-07-30
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
tags: ["praktický tip", "Aplikace, pluginy a automatizace", "A24 Save Boundary Test"]
source_summary: "WooCommerce Developer Blog – Updates to removed order items actions in WooCommerce 11.0 (29. 7. 2026)"
value_feature_type: "testovací protokol"
value_feature_name: "A24 Save Boundary Test"
value_feature_summary: "Interaktivní protokol vede správce čtyřmi kontrolními body a porovná očekávaný a skutečný stav objednávky."
value_feature_benefit: "Tým zachytí časovací chybu dříve, než ovlivní sklad, fakturaci, e-mail nebo externí systém."
value_feature_mvp: "testovací objednávka, časová osa hooků, stav položek v paměti a DB, počet save(), log callbacků, externí akce, snímek důkazu, výsledek, vlastník a PDF/JSON export"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 Save Boundary Test“ pro projekt Agenda24. Funkce: testovací objednávka, časová osa hooků, stav položek v paměti a DB, počet save(), log callbacků, externí akce, snímek důkazu, výsledek, vlastník a PDF/JSON export. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Tým zachytí časovací chybu dříve, než ovlivní sklad, fakturaci, e-mail nebo externí systém. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci."
agenda24_area: "Aplikace, pluginy a automatizace"
---

## Shrnutí

Praktický test musí oddělit stav v paměti, stav v databázi a navazující automatizaci. Nestačí kliknout na objednávku a zkontrolovat, že se stránka nezhroutila.

## Zdroje

- [WooCommerce Developer Blog – Updates to removed order items actions in WooCommerce 11.0 (29. 7. 2026)](https://developer.woocommerce.com/2026/07/29/removed-order-items-actions/)

## Proč je to důležité

Časovací chyby se často projeví jen při přerušení toku, opakovaném save() nebo souběžné integraci. Bez negativních scénářů může správce schválit zdánlivě funkční, ale provozně nebezpečnou aktualizaci.

## Doporučení

Připravte tabulku očekávaných stavů před remove_order_items(), po něm, po prvním save() a po opakovaném save(). Ke každému kroku uložte databázový důkaz a log callbacku.

## SEO titulek

Jak otestovat WooCommerce callback, který se nově spustí až při save() | Agenda24

## Meta popis

Praktický test musí oddělit stav v paměti, stav v databázi a navazující automatizaci. Nestačí kliknout na objednávku a zkontrolovat, že se stránka nezhrout

## Perex

Praktický test musí oddělit stav v paměti, stav v databázi a navazující automatizaci. Nestačí kliknout na objednávku a zkontrolovat, že se stránka nezhroutila. Připravte tabulku očekávaných stavů před remove_order_items(), po něm, po prvním save() a po opakovaném save(). Ke každému kroku uložte databázový důkaz a log callbacku.

## Blogový titulek

Jak otestovat WooCommerce callback, který se nově spustí až při save()

## Osnova blogu

1. Co je nové a co z toho plyne
2. Proč nestačí obecná rada
3. Doporučený postup krok za krokem
4. Kde typicky vzniká chyba
5. Praktický příklad
6. Jak využít nástroj A24 Save Boundary Test
7. Jak poznat, že řešení funguje
8. Jak postup zavést do běžné praxe
9. Závěr

## Blogový draft

# Jak otestovat WooCommerce callback, který se nově spustí až při save()

## Co je nové a co z toho skutečně plyne

Praktický test musí oddělit stav v paměti, stav v databázi a navazující automatizaci. Nestačí kliknout na objednávku a zkontrolovat, že se stránka nezhroutila.

Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:

**1. Ve WooCommerce 11.0 se akce woocommerce_removed_order_items spouští až při následujícím save(), po dokončení databázového smazání.**

**2. Pre-hook woocommerce_remove_order_items zůstává synchronní na začátku remove_order_items().**

**3. Změna chrání objednávku při přerušeném resume flow, ale může ovlivnit rozšíření spoléhající na původní pořadí callbacků.**

Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.

## Proč nestačí obecná rada

Časovací chyby se často projeví jen při přerušení toku, opakovaném save() nebo souběžné integraci. Bez negativních scénářů může správce schválit zdánlivě funkční, ale provozně nebezpečnou aktualizaci.

Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Save Boundary Test, který převádí doporučení do opakovatelného rozhodnutí.

Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.

## Doporučený postup krok za krokem

1. **Vytvořit anonymní testovací objednávku se dvěma položkami.**
2. **Zapnout bezpečné logování obou hooků a save().**
3. **Provedení rozdělit na remove, první save a opakovaný save.**
4. **Porovnat databázi, sklad, e-mail a externí integraci.**
5. **Test zopakovat s vyvolanou výjimkou před save().**

Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.

Připravte tabulku očekávaných stavů před remove_order_items(), po něm, po prvním save() a po opakovaném save(). Ke každému kroku uložte databázový důkaz a log callbacku.

## Kde typicky vzniká chyba

Nejčastější rizika jsou konkrétní:

- produkční test zasáhne reálný sklad nebo zákazníka
- log obsahuje osobní údaje objednávky
- výsledek se posoudí bez opakovaného save()

Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.

## Praktický příklad

Na stagingu je vytvořena objednávka s testovacím SKU. Po odstranění položek se zkontroluje stav objektu, po save() databáze a sklad. Druhé save() nesmí vytvořit další skladový pohyb ani nový e-mail.

Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.

## Jak využít nástroj A24 Save Boundary Test

Interaktivní protokol vede správce čtyřmi kontrolními body a porovná očekávaný a skutečný stav objednávky. Minimální verze zahrnuje: testovací objednávka, časová osa hooků, stav položek v paměti a DB, počet save(), log callbacků, externí akce, snímek důkazu, výsledek, vlastník a PDF/JSON export.

Tým zachytí časovací chybu dříve, než ovlivní sklad, fakturaci, e-mail nebo externí systém. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.

Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.

## Jak poznat, že řešení funguje

Hlavní metrika je: všechny čtyři kontrolní body mají důkaz, počet navazujících akcí odpovídá očekávání a nejsou uloženy osobní údaje. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.

Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.

## Jak postup zavést do běžné praxe

Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.

## Závěr

Připravte tabulku očekávaných stavů před remove_order_items(), po něm, po prvním save() a po opakovaném save(). Ke každému kroku uložte databázový důkaz a log callbacku. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.

## Blog pro Enfold

<h1>Jak otestovat WooCommerce callback, který se nově spustí až při save()</h1>
<p class="perex">Praktický test musí oddělit stav v paměti, stav v databázi a navazující automatizaci. Nestačí kliknout na objednávku a zkontrolovat, že se stránka nezhroutila.</p>
<h2>Co je nové a co z toho skutečně plyne</h2>
<p>Praktický test musí oddělit stav v paměti, stav v databázi a navazující automatizaci. Nestačí kliknout na objednávku a zkontrolovat, že se stránka nezhroutila.</p>
<p>Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:</p>
<p><strong>1. Ve WooCommerce 11.0 se akce woocommerce_removed_order_items spouští až při následujícím save(), po dokončení databázového smazání.</strong></p>
<p><strong>2. Pre-hook woocommerce_remove_order_items zůstává synchronní na začátku remove_order_items().</strong></p>
<p><strong>3. Změna chrání objednávku při přerušeném resume flow, ale může ovlivnit rozšíření spoléhající na původní pořadí callbacků.</strong></p>
<p>Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.</p>
<h2>Proč nestačí obecná rada</h2>
<p>Časovací chyby se často projeví jen při přerušení toku, opakovaném save() nebo souběžné integraci. Bez negativních scénářů může správce schválit zdánlivě funkční, ale provozně nebezpečnou aktualizaci.</p>
<p>Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Save Boundary Test, který převádí doporučení do opakovatelného rozhodnutí.</p>
<p>Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol><li>Vytvořit anonymní testovací objednávku se dvěma položkami.</li><li>Zapnout bezpečné logování obou hooků a save().</li><li>Provedení rozdělit na remove, první save a opakovaný save.</li><li>Porovnat databázi, sklad, e-mail a externí integraci.</li><li>Test zopakovat s vyvolanou výjimkou před save().</li></ol>
<p>Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.</p>
<p>Připravte tabulku očekávaných stavů před remove_order_items(), po něm, po prvním save() a po opakovaném save(). Ke každému kroku uložte databázový důkaz a log callbacku.</p>
<h2>Kde typicky vzniká chyba</h2>
<p>Nejčastější rizika jsou konkrétní:</p>
<ul><li>produkční test zasáhne reálný sklad nebo zákazníka</li><li>log obsahuje osobní údaje objednávky</li><li>výsledek se posoudí bez opakovaného save()</li></ul>
<p>Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.</p>
<h2>Praktický příklad</h2>
<p>Na stagingu je vytvořena objednávka s testovacím SKU. Po odstranění položek se zkontroluje stav objektu, po save() databáze a sklad. Druhé save() nesmí vytvořit další skladový pohyb ani nový e-mail.</p>
<p>Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.</p>
<h2>Jak využít nástroj A24 Save Boundary Test</h2>
<p>Interaktivní protokol vede správce čtyřmi kontrolními body a porovná očekávaný a skutečný stav objednávky. Minimální verze zahrnuje: testovací objednávka, časová osa hooků, stav položek v paměti a DB, počet save(), log callbacků, externí akce, snímek důkazu, výsledek, vlastník a PDF/JSON export.</p>
<p>Tým zachytí časovací chybu dříve, než ovlivní sklad, fakturaci, e-mail nebo externí systém. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<p>Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.</p>
<h2>Jak poznat, že řešení funguje</h2>
<p>Hlavní metrika je: všechny čtyři kontrolní body mají důkaz, počet navazujících akcí odpovídá očekávání a nejsou uloženy osobní údaje. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.</p>
<p>Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.</p>
<h2>Jak postup zavést do běžné praxe</h2>
<p>Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.</p>
<h2>Závěr</h2>
<p>Připravte tabulku očekávaných stavů před remove_order_items(), po něm, po prvním save() a po opakovaném save(). Ke každému kroku uložte databázový důkaz a log callbacku. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.</p>

## Facebook text

Jak otestovat WooCommerce callback, který se nově spustí až při save()

Praktický test musí oddělit stav v paměti, stav v databázi a navazující automatizaci. Nestačí kliknout na objednávku a zkontrolovat, že se stránka nezhroutila.

Připravte tabulku očekávaných stavů před remove_order_items(), po něm, po prvním save() a po opakovaném save(). Ke každému kroku uložte databázový důkaz a log callbacku.

Praktická pomůcka: A24 Save Boundary Test. Tým zachytí časovací chybu dříve, než ovlivní sklad, fakturaci, e-mail nebo externí systém.

Více: https://agenda24.cz/

## LinkedIn text

Jak otestovat WooCommerce callback, který se nově spustí až při save()

Časovací chyby se často projeví jen při přerušení toku, opakovaném save() nebo souběžné integraci. Bez negativních scénářů může správce schválit zdánlivě funkční, ale provozně nebezpečnou aktualizaci.

Doporučený první krok: Vytvořit anonymní testovací objednávku se dvěma položkami.

A24 Save Boundary Test: Interaktivní protokol vede správce čtyřmi kontrolními body a porovná očekávaný a skutečný stav objednávky.

Tým zachytí časovací chybu dříve, než ovlivní sklad, fakturaci, e-mail nebo externí systém.

https://agenda24.cz/

## Instagram caption

Jak otestovat WooCommerce callback, který se nově spustí až při save()

Praktický test musí oddělit stav v paměti, stav v databázi a navazující automatizaci. Nestačí kliknout na objednávku a zkontrolovat, že se stránka nezhroutila.

✅ Vytvořit anonymní testovací objednávku se dvěma položkami.
✅ Zapnout bezpečné logování obou hooků a save().
✅ Provedení rozdělit na remove, první save a opakovaný save.

Připravte tabulku očekávaných stavů před remove_order_items(), po něm, po prvním save() a po opakovaném save(). Ke každému kroku uložte databázový důkaz a log callbacku.

https://agenda24.cz/

#Agenda24 #praktickytip #A24SaveBoundaryTest

## Čistý publikační text pro Facebook

Jak otestovat WooCommerce callback, který se nově spustí až při save()

Praktický test musí oddělit stav v paměti, stav v databázi a navazující automatizaci. Nestačí kliknout na objednávku a zkontrolovat, že se stránka nezhroutila.

Připravte tabulku očekávaných stavů před remove_order_items(), po něm, po prvním save() a po opakovaném save(). Ke každému kroku uložte databázový důkaz a log callbacku.

Praktická pomůcka: A24 Save Boundary Test. Tým zachytí časovací chybu dříve, než ovlivní sklad, fakturaci, e-mail nebo externí systém.

Více: https://agenda24.cz/

## Čistý publikační text pro LinkedIn

Jak otestovat WooCommerce callback, který se nově spustí až při save()

Časovací chyby se často projeví jen při přerušení toku, opakovaném save() nebo souběžné integraci. Bez negativních scénářů může správce schválit zdánlivě funkční, ale provozně nebezpečnou aktualizaci.

Doporučený první krok: Vytvořit anonymní testovací objednávku se dvěma položkami.

A24 Save Boundary Test: Interaktivní protokol vede správce čtyřmi kontrolními body a porovná očekávaný a skutečný stav objednávky.

Tým zachytí časovací chybu dříve, než ovlivní sklad, fakturaci, e-mail nebo externí systém.

https://agenda24.cz/

## Čistý publikační text pro Instagram

Jak otestovat WooCommerce callback, který se nově spustí až při save()

Praktický test musí oddělit stav v paměti, stav v databázi a navazující automatizaci. Nestačí kliknout na objednávku a zkontrolovat, že se stránka nezhroutila.

✅ Vytvořit anonymní testovací objednávku se dvěma položkami.
✅ Zapnout bezpečné logování obou hooků a save().
✅ Provedení rozdělit na remove, první save a opakovaný save.

Připravte tabulku očekávaných stavů před remove_order_items(), po něm, po prvním save() a po opakovaném save(). Ke každému kroku uložte databázový důkaz a log callbacku.

https://agenda24.cz/

#Agenda24 #praktickytip #A24SaveBoundaryTest

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** Jak otestovat WooCommerce callback, který se nově spustí až při save()

**Scénář po sekundách:** 0–2 s výrazný hook; 2–7 s konkrétní situace; 7–10 s A24 Save Boundary Test a CTA.

**Mluvený text:** Nekontrolujte jen obrazovku. Ověřte stav před save, po save a při druhém uložení.

**Text na obrazovku:** Jak otestovat WooCommerce callback, který se nově spustí až při save() / A24 Save Boundary Test / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte A24 Save Boundary Test.

**Hashtagy:** #Agenda24 #praktickynavod #bezpecnypostup

**Cover:** Jak otestovat WooCommerce callback, který se nově spustí až při save()

**Prompt pro Gemini Flow / Omni:** Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Nekontrolujte jen obrazovku. Ověřte stav před save, po save a při druhém uložení.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Save Boundary Test a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## YouTube Shorts popisek

Praktický test musí oddělit stav v paměti, stav v databázi a navazující automatizaci. Nestačí kliknout na objednávku a zkontrolovat, že se stránka nezhroutila. Připravte tabulku očekávaných stavů před remove_order_items(), po něm, po prvním save() a po opakovaném save(). Ke každému kroku uložte databázový důkaz a log callbacku. Více na https://agenda24.cz/

## Text do grafiky

Jak otestovat WooCommerce callback, který se nově spustí až při save()

A24 Save Boundary Test

## CTA

Otevřete Agenda24 a ověřte první konkrétní krok.

## Alt text

Jak otestovat WooCommerce callback, který se nově spustí až při save(): názorné zobrazení konkrétního postupu a nástroje A24 Save Boundary Test v souladu se značkou Agenda24.

## Prompt na obrázek

Prémiový realistický vizuál pro Agenda24 k tématu „Jak otestovat WooCommerce callback, který se nově spustí až při save()“. Tmavé pozadí #030712 a #080B16, akcent #EC0044, bílá typografie, originální symbol 24 a Martin pouze podle uložených referencí. Čistá technická kompozice, žádná žlutá, zlatá ani oranžová, žádní roboti, žádný levný cyberpunk, žádné cizí logo.

## Reference k obrázku

Použij výhradně manifest značky agenda24 a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Nekontrolujte jen obrazovku. Ověřte stav před save, po save a při druhém uložení.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Save Boundary Test a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## Reference k videu

Vizuální pravidla čti pouze z manifestu agenda24; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**A24 Save Boundary Test** — Interaktivní protokol vede správce čtyřmi kontrolními body a porovná očekávaný a skutečný stav objednávky.

Přínos: Tým zachytí časovací chybu dříve, než ovlivní sklad, fakturaci, e-mail nebo externí systém.

## MVP verze

testovací objednávka, časová osa hooků, stav položek v paměti a DB, počet save(), log callbacků, externí akce, snímek důkazu, výsledek, vlastník a PDF/JSON export

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 Save Boundary Test“ pro projekt Agenda24. Funkce: testovací objednávka, časová osa hooků, stav položek v paměti a DB, počet save(), log callbacků, externí akce, snímek důkazu, výsledek, vlastník a PDF/JSON export. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Tým zachytí časovací chybu dříve, než ovlivní sklad, fakturaci, e-mail nebo externí systém. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci.
