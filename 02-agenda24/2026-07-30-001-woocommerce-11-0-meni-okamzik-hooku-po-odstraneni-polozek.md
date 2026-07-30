---
title: "WooCommerce 11.0 mění okamžik spuštění hooku po odstranění položek objednávky"
date: 2026-07-30
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
tags: ["novinka", "Správa webu a e-shopu", "A24 Order Hook Timing Audit"]
source_summary: "WooCommerce Developer Blog – Updates to removed order items actions in WooCommerce 11.0 (29. 7. 2026)"
value_feature_type: "WooCommerce auditní checker"
value_feature_name: "A24 Order Hook Timing Audit"
value_feature_summary: "Checker projde kód a testovací protokol, označí callbacky závislé na synchronním pořadí a vytvoří seznam oprav."
value_feature_benefit: "Správce před nasazením WooCommerce 11.0 ví, která rozšíření vyžadují úpravu a má doložený výsledek staging testu."
value_feature_mvp: "sken hooků, cesta k souboru a řádek, typ pre/post, očekávané pořadí, staging scénář, stav save(), opakovaný běh, vlastník, důkaz, export a historie"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 Order Hook Timing Audit“ pro projekt Agenda24. Funkce: sken hooků, cesta k souboru a řádek, typ pre/post, očekávané pořadí, staging scénář, stav save(), opakovaný běh, vlastník, důkaz, export a historie. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Správce před nasazením WooCommerce 11.0 ví, která rozšíření vyžadují úpravu a má doložený výsledek staging testu. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci."
agenda24_area: "Správa webu a e-shopu"
---

## Shrnutí

WooCommerce 11.0 přesouvá post-hook po odstranění položek objednávky do save(). Pro správce e-shopů je to signál prověřit vlastní pluginy, integrace a automatizace, které očekávají původní synchronní pořadí.

## Zdroje

- [WooCommerce Developer Blog – Updates to removed order items actions in WooCommerce 11.0 (29. 7. 2026)](https://developer.woocommerce.com/2026/07/29/removed-order-items-actions/)

## Proč je to důležité

Změna opravuje riziko ztráty položek při přerušeném obnovení pokladny, zároveň ale mění časování rozšíření. Neověřený callback může pracovat se starým stavem, spustit duplicitu nebo vytvořit neúplný audit.

## Doporučení

Vyhledejte oba hooky v aktivních vlastních pluginech, zaznamenejte předpokládané pořadí a na stagingu otestujte odstranění, save(), přerušený resume flow i opakované uložení.

## SEO titulek

WooCommerce 11.0 mění okamžik spuštění hooku po odstranění položek objednávky | Agenda24

## Meta popis

WooCommerce 11.0 přesouvá post-hook po odstranění položek objednávky do save(). Pro správce e-shopů je to signál prověřit vlastní pluginy, integrace a auto

## Perex

WooCommerce 11.0 přesouvá post-hook po odstranění položek objednávky do save(). Pro správce e-shopů je to signál prověřit vlastní pluginy, integrace a automatizace, které očekávají původní synchronní pořadí. Vyhledejte oba hooky v aktivních vlastních pluginech, zaznamenejte předpokládané pořadí a na stagingu otestujte odstranění, save(), přerušený resume flow i opakované uložení.

## Blogový titulek

WooCommerce 11.0 mění okamžik spuštění hooku po odstranění položek objednávky

## Osnova blogu

1. Co je nové a co z toho plyne
2. Proč nestačí obecná rada
3. Doporučený postup krok za krokem
4. Kde typicky vzniká chyba
5. Praktický příklad
6. Jak využít nástroj A24 Order Hook Timing Audit
7. Jak poznat, že řešení funguje
8. Jak postup zavést do běžné praxe
9. Závěr

## Blogový draft

# WooCommerce 11.0 mění okamžik spuštění hooku po odstranění položek objednávky

## Co je nové a co z toho skutečně plyne

WooCommerce 11.0 přesouvá post-hook po odstranění položek objednávky do save(). Pro správce e-shopů je to signál prověřit vlastní pluginy, integrace a automatizace, které očekávají původní synchronní pořadí.

Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:

**1. Ve WooCommerce 11.0 se akce woocommerce_removed_order_items spouští až při následujícím save(), po dokončení databázového smazání.**

**2. Pre-hook woocommerce_remove_order_items zůstává synchronní na začátku remove_order_items().**

**3. Změna chrání objednávku při přerušeném resume flow, ale může ovlivnit rozšíření spoléhající na původní pořadí callbacků.**

Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.

## Proč nestačí obecná rada

Změna opravuje riziko ztráty položek při přerušeném obnovení pokladny, zároveň ale mění časování rozšíření. Neověřený callback může pracovat se starým stavem, spustit duplicitu nebo vytvořit neúplný audit.

Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Order Hook Timing Audit, který převádí doporučení do opakovatelného rozhodnutí.

Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.

## Doporučený postup krok za krokem

1. **Zálohovat produkci a vytvořit aktuální staging.**
2. **Vyhledat použití obou order-item hooků ve vlastním i dodavatelském kódu.**
3. **U každého callbacku popsat, jaký stav databáze a pořadí očekává.**
4. **Otestovat běžné odstranění, přerušený resume flow a opakované save().**
5. **Schválit opravu nebo dočasně zablokovat aktualizaci konkrétního webu.**

Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.

Vyhledejte oba hooky v aktivních vlastních pluginech, zaznamenejte předpokládané pořadí a na stagingu otestujte odstranění, save(), přerušený resume flow i opakované uložení.

## Kde typicky vzniká chyba

Nejčastější rizika jsou konkrétní:

- callback očekává, že post-hook proběhne ještě uvnitř remove_order_items()
- integrace spustí navazující akci dvakrát při opakovaném save()
- test ověří jen uživatelské rozhraní, ale ne databázový a logovací stav

Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.

## Praktický příklad

Klientský plugin při post-hooku zapisuje položky do externího skladu. Na WooCommerce 10.9 běžel callback ve stejném volání; na 11.0 proběhne až při save(). Staging test proto porovná sklad, objednávku a auditní log po prvním i druhém uložení.

Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.

## Jak využít nástroj A24 Order Hook Timing Audit

Checker projde kód a testovací protokol, označí callbacky závislé na synchronním pořadí a vytvoří seznam oprav. Minimální verze zahrnuje: sken hooků, cesta k souboru a řádek, typ pre/post, očekávané pořadí, staging scénář, stav save(), opakovaný běh, vlastník, důkaz, export a historie.

Správce před nasazením WooCommerce 11.0 ví, která rozšíření vyžadují úpravu a má doložený výsledek staging testu. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.

Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.

## Jak poznat, že řešení funguje

Hlavní metrika je: počet nalezených callbacků, počet potvrzených kompatibilních rozšíření a nulový výskyt duplicitní navazující akce. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.

Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.

## Jak postup zavést do běžné praxe

Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.

## Závěr

Vyhledejte oba hooky v aktivních vlastních pluginech, zaznamenejte předpokládané pořadí a na stagingu otestujte odstranění, save(), přerušený resume flow i opakované uložení. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.

## Blog pro Enfold

<h1>WooCommerce 11.0 mění okamžik spuštění hooku po odstranění položek objednávky</h1>
<p class="perex">WooCommerce 11.0 přesouvá post-hook po odstranění položek objednávky do save(). Pro správce e-shopů je to signál prověřit vlastní pluginy, integrace a automatizace, které očekávají původní synchronní pořadí.</p>
<h2>Co je nové a co z toho skutečně plyne</h2>
<p>WooCommerce 11.0 přesouvá post-hook po odstranění položek objednávky do save(). Pro správce e-shopů je to signál prověřit vlastní pluginy, integrace a automatizace, které očekávají původní synchronní pořadí.</p>
<p>Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:</p>
<p><strong>1. Ve WooCommerce 11.0 se akce woocommerce_removed_order_items spouští až při následujícím save(), po dokončení databázového smazání.</strong></p>
<p><strong>2. Pre-hook woocommerce_remove_order_items zůstává synchronní na začátku remove_order_items().</strong></p>
<p><strong>3. Změna chrání objednávku při přerušeném resume flow, ale může ovlivnit rozšíření spoléhající na původní pořadí callbacků.</strong></p>
<p>Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.</p>
<h2>Proč nestačí obecná rada</h2>
<p>Změna opravuje riziko ztráty položek při přerušeném obnovení pokladny, zároveň ale mění časování rozšíření. Neověřený callback může pracovat se starým stavem, spustit duplicitu nebo vytvořit neúplný audit.</p>
<p>Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Order Hook Timing Audit, který převádí doporučení do opakovatelného rozhodnutí.</p>
<p>Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol><li>Zálohovat produkci a vytvořit aktuální staging.</li><li>Vyhledat použití obou order-item hooků ve vlastním i dodavatelském kódu.</li><li>U každého callbacku popsat, jaký stav databáze a pořadí očekává.</li><li>Otestovat běžné odstranění, přerušený resume flow a opakované save().</li><li>Schválit opravu nebo dočasně zablokovat aktualizaci konkrétního webu.</li></ol>
<p>Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.</p>
<p>Vyhledejte oba hooky v aktivních vlastních pluginech, zaznamenejte předpokládané pořadí a na stagingu otestujte odstranění, save(), přerušený resume flow i opakované uložení.</p>
<h2>Kde typicky vzniká chyba</h2>
<p>Nejčastější rizika jsou konkrétní:</p>
<ul><li>callback očekává, že post-hook proběhne ještě uvnitř remove_order_items()</li><li>integrace spustí navazující akci dvakrát při opakovaném save()</li><li>test ověří jen uživatelské rozhraní, ale ne databázový a logovací stav</li></ul>
<p>Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.</p>
<h2>Praktický příklad</h2>
<p>Klientský plugin při post-hooku zapisuje položky do externího skladu. Na WooCommerce 10.9 běžel callback ve stejném volání; na 11.0 proběhne až při save(). Staging test proto porovná sklad, objednávku a auditní log po prvním i druhém uložení.</p>
<p>Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.</p>
<h2>Jak využít nástroj A24 Order Hook Timing Audit</h2>
<p>Checker projde kód a testovací protokol, označí callbacky závislé na synchronním pořadí a vytvoří seznam oprav. Minimální verze zahrnuje: sken hooků, cesta k souboru a řádek, typ pre/post, očekávané pořadí, staging scénář, stav save(), opakovaný běh, vlastník, důkaz, export a historie.</p>
<p>Správce před nasazením WooCommerce 11.0 ví, která rozšíření vyžadují úpravu a má doložený výsledek staging testu. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<p>Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.</p>
<h2>Jak poznat, že řešení funguje</h2>
<p>Hlavní metrika je: počet nalezených callbacků, počet potvrzených kompatibilních rozšíření a nulový výskyt duplicitní navazující akce. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.</p>
<p>Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.</p>
<h2>Jak postup zavést do běžné praxe</h2>
<p>Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.</p>
<h2>Závěr</h2>
<p>Vyhledejte oba hooky v aktivních vlastních pluginech, zaznamenejte předpokládané pořadí a na stagingu otestujte odstranění, save(), přerušený resume flow i opakované uložení. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.</p>

## Facebook text

WooCommerce 11.0 mění okamžik spuštění hooku po odstranění položek objednávky

WooCommerce 11.0 přesouvá post-hook po odstranění položek objednávky do save(). Pro správce e-shopů je to signál prověřit vlastní pluginy, integrace a automatizace, které očekávají původní synchronní pořadí.

Vyhledejte oba hooky v aktivních vlastních pluginech, zaznamenejte předpokládané pořadí a na stagingu otestujte odstranění, save(), přerušený resume flow i opakované uložení.

Praktická pomůcka: A24 Order Hook Timing Audit. Správce před nasazením WooCommerce 11.0 ví, která rozšíření vyžadují úpravu a má doložený výsledek staging testu.

Více: https://agenda24.cz/

## LinkedIn text

WooCommerce 11.0 mění okamžik spuštění hooku po odstranění položek objednávky

Změna opravuje riziko ztráty položek při přerušeném obnovení pokladny, zároveň ale mění časování rozšíření. Neověřený callback může pracovat se starým stavem, spustit duplicitu nebo vytvořit neúplný audit.

Doporučený první krok: Zálohovat produkci a vytvořit aktuální staging.

A24 Order Hook Timing Audit: Checker projde kód a testovací protokol, označí callbacky závislé na synchronním pořadí a vytvoří seznam oprav.

Správce před nasazením WooCommerce 11.0 ví, která rozšíření vyžadují úpravu a má doložený výsledek staging testu.

https://agenda24.cz/

## Instagram caption

WooCommerce 11.0 mění okamžik spuštění hooku po odstranění položek objednávky

WooCommerce 11.0 přesouvá post-hook po odstranění položek objednávky do save(). Pro správce e-shopů je to signál prověřit vlastní pluginy, integrace a automatizace, které očekávají původní synchronní pořadí.

✅ Zálohovat produkci a vytvořit aktuální staging.
✅ Vyhledat použití obou order-item hooků ve vlastním i dodavatelském kódu.
✅ U každého callbacku popsat, jaký stav databáze a pořadí očekává.

Vyhledejte oba hooky v aktivních vlastních pluginech, zaznamenejte předpokládané pořadí a na stagingu otestujte odstranění, save(), přerušený resume flow i opakované uložení.

https://agenda24.cz/

#Agenda24 #praktickytip #A24OrderHookTimingAudit

## Čistý publikační text pro Facebook

WooCommerce 11.0 mění okamžik spuštění hooku po odstranění položek objednávky

WooCommerce 11.0 přesouvá post-hook po odstranění položek objednávky do save(). Pro správce e-shopů je to signál prověřit vlastní pluginy, integrace a automatizace, které očekávají původní synchronní pořadí.

Vyhledejte oba hooky v aktivních vlastních pluginech, zaznamenejte předpokládané pořadí a na stagingu otestujte odstranění, save(), přerušený resume flow i opakované uložení.

Praktická pomůcka: A24 Order Hook Timing Audit. Správce před nasazením WooCommerce 11.0 ví, která rozšíření vyžadují úpravu a má doložený výsledek staging testu.

Více: https://agenda24.cz/

## Čistý publikační text pro LinkedIn

WooCommerce 11.0 mění okamžik spuštění hooku po odstranění položek objednávky

Změna opravuje riziko ztráty položek při přerušeném obnovení pokladny, zároveň ale mění časování rozšíření. Neověřený callback může pracovat se starým stavem, spustit duplicitu nebo vytvořit neúplný audit.

Doporučený první krok: Zálohovat produkci a vytvořit aktuální staging.

A24 Order Hook Timing Audit: Checker projde kód a testovací protokol, označí callbacky závislé na synchronním pořadí a vytvoří seznam oprav.

Správce před nasazením WooCommerce 11.0 ví, která rozšíření vyžadují úpravu a má doložený výsledek staging testu.

https://agenda24.cz/

## Čistý publikační text pro Instagram

WooCommerce 11.0 mění okamžik spuštění hooku po odstranění položek objednávky

WooCommerce 11.0 přesouvá post-hook po odstranění položek objednávky do save(). Pro správce e-shopů je to signál prověřit vlastní pluginy, integrace a automatizace, které očekávají původní synchronní pořadí.

✅ Zálohovat produkci a vytvořit aktuální staging.
✅ Vyhledat použití obou order-item hooků ve vlastním i dodavatelském kódu.
✅ U každého callbacku popsat, jaký stav databáze a pořadí očekává.

Vyhledejte oba hooky v aktivních vlastních pluginech, zaznamenejte předpokládané pořadí a na stagingu otestujte odstranění, save(), přerušený resume flow i opakované uložení.

https://agenda24.cz/

#Agenda24 #praktickytip #A24OrderHookTimingAudit

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** WooCommerce 11.0 mění okamžik spuštění hooku po odstranění položek objednávky

**Scénář po sekundách:** 0–2 s výrazný hook; 2–7 s konkrétní situace; 7–10 s A24 Order Hook Timing Audit a CTA.

**Mluvený text:** WooCommerce mění časování hooku. Před verzí jedenáct prověřte vlastní pluginy na stagingu.

**Text na obrazovku:** WooCommerce 11.0 mění okamžik spuštění hooku po odstranění položek objednávky / A24 Order Hook Timing Audit / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte A24 Order Hook Timing Audit.

**Hashtagy:** #Agenda24 #praktickynavod #bezpecnypostup

**Cover:** WooCommerce 11.0 mění okamžik spuštění hooku po odstranění položek objednávky

**Prompt pro Gemini Flow / Omni:** Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „WooCommerce mění časování hooku. Před verzí jedenáct prověřte vlastní pluginy na stagingu.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Order Hook Timing Audit a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## YouTube Shorts popisek

WooCommerce 11.0 přesouvá post-hook po odstranění položek objednávky do save(). Pro správce e-shopů je to signál prověřit vlastní pluginy, integrace a automatizace, které očekávají původní synchronní pořadí. Vyhledejte oba hooky v aktivních vlastních pluginech, zaznamenejte předpokládané pořadí a na stagingu otestujte odstranění, save(), přerušený resume flow i opakované uložení. Více na https://agenda24.cz/

## Text do grafiky

WooCommerce 11.0 mění okamžik spuštění hooku po odstranění položek objednávky

A24 Order Hook Timing Audit

## CTA

Otevřete Agenda24 a ověřte první konkrétní krok.

## Alt text

WooCommerce 11.0 mění okamžik spuštění hooku po odstranění položek objednávky: názorné zobrazení konkrétního postupu a nástroje A24 Order Hook Timing Audit v souladu se značkou Agenda24.

## Prompt na obrázek

Prémiový realistický vizuál pro Agenda24 k tématu „WooCommerce 11.0 mění okamžik spuštění hooku po odstranění položek objednávky“. Tmavé pozadí #030712 a #080B16, akcent #EC0044, bílá typografie, originální symbol 24 a Martin pouze podle uložených referencí. Čistá technická kompozice, žádná žlutá, zlatá ani oranžová, žádní roboti, žádný levný cyberpunk, žádné cizí logo.

## Reference k obrázku

Použij výhradně manifest značky agenda24 a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „WooCommerce mění časování hooku. Před verzí jedenáct prověřte vlastní pluginy na stagingu.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Order Hook Timing Audit a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## Reference k videu

Vizuální pravidla čti pouze z manifestu agenda24; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**A24 Order Hook Timing Audit** — Checker projde kód a testovací protokol, označí callbacky závislé na synchronním pořadí a vytvoří seznam oprav.

Přínos: Správce před nasazením WooCommerce 11.0 ví, která rozšíření vyžadují úpravu a má doložený výsledek staging testu.

## MVP verze

sken hooků, cesta k souboru a řádek, typ pre/post, očekávané pořadí, staging scénář, stav save(), opakovaný běh, vlastník, důkaz, export a historie

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 Order Hook Timing Audit“ pro projekt Agenda24. Funkce: sken hooků, cesta k souboru a řádek, typ pre/post, očekávané pořadí, staging scénář, stav save(), opakovaný běh, vlastník, důkaz, export a historie. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Správce před nasazením WooCommerce 11.0 ví, která rozšíření vyžadují úpravu a má doložený výsledek staging testu. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci.
