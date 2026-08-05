---
title: "WordPress 7.1 sjednocuje formulářové prvky na 40 px a odstraňuje zastaralé komponenty"
date: 2026-08-05
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
tags: ["novinka", "Aplikace, pluginy a automatizace", "A24 Admin UI 7.1 Audit"]
source_summary: "Make WordPress Core – Editor components updates in WordPress 7.1 (23. 7. 2026)"
value_feature_type: "WordPress kompatibilitní audit"
value_feature_name: "A24 Admin UI 7.1 Audit"
value_feature_summary: "Audit spojí statickou kontrolu zdrojů s vizuálním a přístupnostním testem administračních obrazovek."
value_feature_benefit: "Agenda24 odhalí regresi dřív než klient a opraví pouze komponenty skutečně zasažené WordPressem 7.1."
value_feature_mvp: "verze WordPressu PHP Node a balíčků, seznam pluginů, vyhledání __next40pxDefaultSize Navigation Navigator __experimentalApplyValueToSides a size, screenshoty, šířky 320 768 1440, klávesnice, fokus, zoom 200 procent, důkaz, závažnost, oprava a rollback"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 Admin UI 7.1 Audit“ pro projekt Agenda24. Funkce: verze WordPressu PHP Node a balíčků, seznam pluginů, vyhledání __next40pxDefaultSize Navigation Navigator __experimentalApplyValueToSides a size, screenshoty, šířky 320 768 1440, klávesnice, fokus, zoom 200 procent, důkaz, závažnost, oprava a rollback. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Agenda24 odhalí regresi dřív než klient a opraví pouze komponenty skutečně zasažené WordPressem 7.1. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci."
agenda24_area: "Aplikace, pluginy a automatizace"
---

## Shrnutí

WordPress 7.1 mění výchozí výšku řady administračních ovládacích prvků na 40 px, odstraňuje komponentu Navigation a ruší experimentální utilitu pro BoxControl. Vlastní pluginy proto potřebují kontrolu zdrojového kódu i skutečného rozhraní.

## Zdroje

- [Make WordPress Core – Editor components updates in WordPress 7.1 (23. 7. 2026)](https://make.wordpress.org/core/2026/07/23/editor-components-updates-in-wordpress-7-1/)

## Proč je to důležité

Plugin může po aktualizaci dál fungovat datově, ale rozbít rozložení administrace, fokus nebo navigaci. Pouhé odstranění varování v konzoli nestačí; změna může zasáhnout vlastní CSS, testy i komponenty postavené na starém API.

## Doporučení

Vyhledejte staré props a komponenty, nahraďte Navigation za Navigator a otestujte formuláře při 320 px, s klávesnicí a se zvětšením textu. Zásah držte minimální a změnu nejprve ověřte na stagingu.

## SEO titulek

WordPress 7.1 sjednocuje formulářové prvky na 40 px a odstraňuje zastaralé komponenty | Agenda24

## Meta popis

WordPress 7.1 mění výchozí výšku řady administračních ovládacích prvků na 40 px, odstraňuje komponentu Navigation a ruší experimentální utilitu pro BoxCont

## Perex

WordPress 7.1 mění výchozí výšku řady administračních ovládacích prvků na 40 px, odstraňuje komponentu Navigation a ruší experimentální utilitu pro BoxControl. Vlastní pluginy proto potřebují kontrolu zdrojového kódu i skutečného rozhraní. Vyhledejte staré props a komponenty, nahraďte Navigation za Navigator a otestujte formuláře při 320 px, s klávesnicí a se zvětšením textu. Zásah držte minimální a změnu nejprve ověřte na stagingu.

## Blogový titulek

WordPress 7.1 sjednocuje formulářové prvky na 40 px a odstraňuje zastaralé komponenty

## Osnova blogu

1. Co je nové a co z toho plyne
2. Proč nestačí obecná rada
3. Doporučený postup krok za krokem
4. Kde typicky vzniká chyba
5. Praktický příklad
6. Jak využít nástroj A24 Admin UI 7.1 Audit
7. Jak poznat, že řešení funguje
8. Jak postup zavést do běžné praxe
9. Závěr

## Blogový draft

# WordPress 7.1 sjednocuje formulářové prvky na 40 px a odstraňuje zastaralé komponenty

## Co je nové a co z toho skutečně plyne

WordPress 7.1 mění výchozí výšku řady administračních ovládacích prvků na 40 px, odstraňuje komponentu Navigation a ruší experimentální utilitu pro BoxControl. Vlastní pluginy proto potřebují kontrolu zdrojového kódu i skutečného rozhraní.

Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:

**1. WordPress 7.1 nastavuje u formulářových komponent @wordpress/components výchozí výšku 40 px a parametr __next40pxDefaultSize už nemá runtime účinek.**

**2. Zastaralá komponenta Navigation je ve WordPressu 7.1 odstraněna a doporučenou náhradou je Navigator.**

**3. Odstraněna je také experimentální utilita __experimentalApplyValueToSides; Button do plošné změny výšky zahrnut není.**

Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.

## Proč nestačí obecná rada

Plugin může po aktualizaci dál fungovat datově, ale rozbít rozložení administrace, fokus nebo navigaci. Pouhé odstranění varování v konzoli nestačí; změna může zasáhnout vlastní CSS, testy i komponenty postavené na starém API.

Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Admin UI 7.1 Audit, který převádí doporučení do opakovatelného rozhodnutí.

Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.

## Doporučený postup krok za krokem

1. **Zapsat verze a dotčené administrační obrazovky.**
2. **Vyhledat odstraněné komponenty a ignorované parametry.**
3. **Porovnat rozhraní před a po aktualizaci.**
4. **Projít klávesnici, fokus, zoom a mobilní šířku.**
5. **Schválit minimální opravu s testem a rollbackem.**

Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.

Vyhledejte staré props a komponenty, nahraďte Navigation za Navigator a otestujte formuláře při 320 px, s klávesnicí a se zvětšením textu. Zásah držte minimální a změnu nejprve ověřte na stagingu.

## Kde typicky vzniká chyba

Nejčastější rizika jsou konkrétní:

- automatická náhrada změní chování navigace
- vlastní CSS vrátí ovládací prvky na 36 px
- test proběhne jen na širokém monitoru

Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.

## Praktický příklad

Plugin používá Navigation v české administraci a vlastní výšku polí. Audit označí zdroj, připraví přechod na Navigator a ověří, že formulář zůstává čitelný na mobilu i s klávesnicí.

Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.

## Jak využít nástroj A24 Admin UI 7.1 Audit

Audit spojí statickou kontrolu zdrojů s vizuálním a přístupnostním testem administračních obrazovek. Minimální verze zahrnuje: verze WordPressu PHP Node a balíčků, seznam pluginů, vyhledání __next40pxDefaultSize Navigation Navigator __experimentalApplyValueToSides a size, screenshoty, šířky 320 768 1440, klávesnice, fokus, zoom 200 procent, důkaz, závažnost, oprava a rollback.

Agenda24 odhalí regresi dřív než klient a opraví pouze komponenty skutečně zasažené WordPressem 7.1. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.

Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.

## Jak poznat, že řešení funguje

Hlavní metrika je: každý odstraněný symbol má náhradu nebo stav nevztahuje se a žádná kritická administrační cesta nemá otevřenou regresi. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.

Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.

## Jak postup zavést do běžné praxe

Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.

## Závěr

Vyhledejte staré props a komponenty, nahraďte Navigation za Navigator a otestujte formuláře při 320 px, s klávesnicí a se zvětšením textu. Zásah držte minimální a změnu nejprve ověřte na stagingu. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.

## Blog pro Enfold

<h1>WordPress 7.1 sjednocuje formulářové prvky na 40 px a odstraňuje zastaralé komponenty</h1>
<p class="perex">WordPress 7.1 mění výchozí výšku řady administračních ovládacích prvků na 40 px, odstraňuje komponentu Navigation a ruší experimentální utilitu pro BoxControl. Vlastní pluginy proto potřebují kontrolu zdrojového kódu i skutečného rozhraní.</p>
<h2>Co je nové a co z toho skutečně plyne</h2>
<p>WordPress 7.1 mění výchozí výšku řady administračních ovládacích prvků na 40 px, odstraňuje komponentu Navigation a ruší experimentální utilitu pro BoxControl. Vlastní pluginy proto potřebují kontrolu zdrojového kódu i skutečného rozhraní.</p>
<p>Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:</p>
<p><strong>1. WordPress 7.1 nastavuje u formulářových komponent @wordpress/components výchozí výšku 40 px a parametr __next40pxDefaultSize už nemá runtime účinek.</strong></p>
<p><strong>2. Zastaralá komponenta Navigation je ve WordPressu 7.1 odstraněna a doporučenou náhradou je Navigator.</strong></p>
<p><strong>3. Odstraněna je také experimentální utilita __experimentalApplyValueToSides; Button do plošné změny výšky zahrnut není.</strong></p>
<p>Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.</p>
<h2>Proč nestačí obecná rada</h2>
<p>Plugin může po aktualizaci dál fungovat datově, ale rozbít rozložení administrace, fokus nebo navigaci. Pouhé odstranění varování v konzoli nestačí; změna může zasáhnout vlastní CSS, testy i komponenty postavené na starém API.</p>
<p>Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Admin UI 7.1 Audit, který převádí doporučení do opakovatelného rozhodnutí.</p>
<p>Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol><li>Zapsat verze a dotčené administrační obrazovky.</li><li>Vyhledat odstraněné komponenty a ignorované parametry.</li><li>Porovnat rozhraní před a po aktualizaci.</li><li>Projít klávesnici, fokus, zoom a mobilní šířku.</li><li>Schválit minimální opravu s testem a rollbackem.</li></ol>
<p>Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.</p>
<p>Vyhledejte staré props a komponenty, nahraďte Navigation za Navigator a otestujte formuláře při 320 px, s klávesnicí a se zvětšením textu. Zásah držte minimální a změnu nejprve ověřte na stagingu.</p>
<h2>Kde typicky vzniká chyba</h2>
<p>Nejčastější rizika jsou konkrétní:</p>
<ul><li>automatická náhrada změní chování navigace</li><li>vlastní CSS vrátí ovládací prvky na 36 px</li><li>test proběhne jen na širokém monitoru</li></ul>
<p>Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.</p>
<h2>Praktický příklad</h2>
<p>Plugin používá Navigation v české administraci a vlastní výšku polí. Audit označí zdroj, připraví přechod na Navigator a ověří, že formulář zůstává čitelný na mobilu i s klávesnicí.</p>
<p>Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.</p>
<h2>Jak využít nástroj A24 Admin UI 7.1 Audit</h2>
<p>Audit spojí statickou kontrolu zdrojů s vizuálním a přístupnostním testem administračních obrazovek. Minimální verze zahrnuje: verze WordPressu PHP Node a balíčků, seznam pluginů, vyhledání __next40pxDefaultSize Navigation Navigator __experimentalApplyValueToSides a size, screenshoty, šířky 320 768 1440, klávesnice, fokus, zoom 200 procent, důkaz, závažnost, oprava a rollback.</p>
<p>Agenda24 odhalí regresi dřív než klient a opraví pouze komponenty skutečně zasažené WordPressem 7.1. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<p>Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.</p>
<h2>Jak poznat, že řešení funguje</h2>
<p>Hlavní metrika je: každý odstraněný symbol má náhradu nebo stav nevztahuje se a žádná kritická administrační cesta nemá otevřenou regresi. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.</p>
<p>Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.</p>
<h2>Jak postup zavést do běžné praxe</h2>
<p>Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.</p>
<h2>Závěr</h2>
<p>Vyhledejte staré props a komponenty, nahraďte Navigation za Navigator a otestujte formuláře při 320 px, s klávesnicí a se zvětšením textu. Zásah držte minimální a změnu nejprve ověřte na stagingu. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.</p>

## Facebook text

WordPress 7.1 sjednocuje formulářové prvky na 40 px a odstraňuje zastaralé komponenty

WordPress 7.1 mění výchozí výšku řady administračních ovládacích prvků na 40 px, odstraňuje komponentu Navigation a ruší experimentální utilitu pro BoxControl. Vlastní pluginy proto potřebují kontrolu zdrojového kódu i skutečného rozhraní.

Vyhledejte staré props a komponenty, nahraďte Navigation za Navigator a otestujte formuláře při 320 px, s klávesnicí a se zvětšením textu. Zásah držte minimální a změnu nejprve ověřte na stagingu.

Praktická pomůcka: A24 Admin UI 7.1 Audit. Agenda24 odhalí regresi dřív než klient a opraví pouze komponenty skutečně zasažené WordPressem 7.1.

Více: https://agenda24.cz/

## LinkedIn text

WordPress 7.1 sjednocuje formulářové prvky na 40 px a odstraňuje zastaralé komponenty

Plugin může po aktualizaci dál fungovat datově, ale rozbít rozložení administrace, fokus nebo navigaci. Pouhé odstranění varování v konzoli nestačí; změna může zasáhnout vlastní CSS, testy i komponenty postavené na starém API.

Doporučený první krok: Zapsat verze a dotčené administrační obrazovky.

A24 Admin UI 7.1 Audit: Audit spojí statickou kontrolu zdrojů s vizuálním a přístupnostním testem administračních obrazovek.

Agenda24 odhalí regresi dřív než klient a opraví pouze komponenty skutečně zasažené WordPressem 7.1.

https://agenda24.cz/

## Instagram caption

WordPress 7.1 sjednocuje formulářové prvky na 40 px a odstraňuje zastaralé komponenty

WordPress 7.1 mění výchozí výšku řady administračních ovládacích prvků na 40 px, odstraňuje komponentu Navigation a ruší experimentální utilitu pro BoxControl. Vlastní pluginy proto potřebují kontrolu zdrojového kódu i skutečného rozhraní.

✅ Zapsat verze a dotčené administrační obrazovky.
✅ Vyhledat odstraněné komponenty a ignorované parametry.
✅ Porovnat rozhraní před a po aktualizaci.

Vyhledejte staré props a komponenty, nahraďte Navigation za Navigator a otestujte formuláře při 320 px, s klávesnicí a se zvětšením textu. Zásah držte minimální a změnu nejprve ověřte na stagingu.

https://agenda24.cz/

#Agenda24 #praktickytip #A24AdminUI7.1Audit

## Čistý publikační text pro Facebook

WordPress 7.1 sjednocuje formulářové prvky na 40 px a odstraňuje zastaralé komponenty

WordPress 7.1 mění výchozí výšku řady administračních ovládacích prvků na 40 px, odstraňuje komponentu Navigation a ruší experimentální utilitu pro BoxControl. Vlastní pluginy proto potřebují kontrolu zdrojového kódu i skutečného rozhraní.

Vyhledejte staré props a komponenty, nahraďte Navigation za Navigator a otestujte formuláře při 320 px, s klávesnicí a se zvětšením textu. Zásah držte minimální a změnu nejprve ověřte na stagingu.

Praktická pomůcka: A24 Admin UI 7.1 Audit. Agenda24 odhalí regresi dřív než klient a opraví pouze komponenty skutečně zasažené WordPressem 7.1.

Více: https://agenda24.cz/

## Čistý publikační text pro LinkedIn

WordPress 7.1 sjednocuje formulářové prvky na 40 px a odstraňuje zastaralé komponenty

Plugin může po aktualizaci dál fungovat datově, ale rozbít rozložení administrace, fokus nebo navigaci. Pouhé odstranění varování v konzoli nestačí; změna může zasáhnout vlastní CSS, testy i komponenty postavené na starém API.

Doporučený první krok: Zapsat verze a dotčené administrační obrazovky.

A24 Admin UI 7.1 Audit: Audit spojí statickou kontrolu zdrojů s vizuálním a přístupnostním testem administračních obrazovek.

Agenda24 odhalí regresi dřív než klient a opraví pouze komponenty skutečně zasažené WordPressem 7.1.

https://agenda24.cz/

## Čistý publikační text pro Instagram

WordPress 7.1 sjednocuje formulářové prvky na 40 px a odstraňuje zastaralé komponenty

WordPress 7.1 mění výchozí výšku řady administračních ovládacích prvků na 40 px, odstraňuje komponentu Navigation a ruší experimentální utilitu pro BoxControl. Vlastní pluginy proto potřebují kontrolu zdrojového kódu i skutečného rozhraní.

✅ Zapsat verze a dotčené administrační obrazovky.
✅ Vyhledat odstraněné komponenty a ignorované parametry.
✅ Porovnat rozhraní před a po aktualizaci.

Vyhledejte staré props a komponenty, nahraďte Navigation za Navigator a otestujte formuláře při 320 px, s klávesnicí a se zvětšením textu. Zásah držte minimální a změnu nejprve ověřte na stagingu.

https://agenda24.cz/

#Agenda24 #praktickytip #A24AdminUI7.1Audit

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** WordPress 7.1 sjednocuje formulářové prvky na 40 px a odstraňuje zastaralé komponenty

**Scénář po sekundách:** 0–2 s výrazný hook; 2–7 s konkrétní situace; 7–10 s A24 Admin UI 7.1 Audit a CTA.

**Mluvený text:** WordPress sedm jedna mění komponenty. Zkontrolujte čtyřicet pixelů, navigaci, fokus a mobilní administraci.

**Text na obrazovku:** WordPress 7.1 sjednocuje formulářové prvky na 40 px a odstraňuje zastaralé komponenty / A24 Admin UI 7.1 Audit / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte A24 Admin UI 7.1 Audit.

**Hashtagy:** #Agenda24 #praktickynavod #bezpecnypostup

**Cover:** WordPress 7.1 sjednocuje formulářové prvky na 40 px a odstraňuje zastaralé komponenty

**Prompt pro Gemini Flow / Omni:** Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „WordPress sedm jedna mění komponenty. Zkontrolujte čtyřicet pixelů, navigaci, fokus a mobilní administraci.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Admin UI 7.1 Audit a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## YouTube Shorts popisek

WordPress 7.1 mění výchozí výšku řady administračních ovládacích prvků na 40 px, odstraňuje komponentu Navigation a ruší experimentální utilitu pro BoxControl. Vlastní pluginy proto potřebují kontrolu zdrojového kódu i skutečného rozhraní. Vyhledejte staré props a komponenty, nahraďte Navigation za Navigator a otestujte formuláře při 320 px, s klávesnicí a se zvětšením textu. Zásah držte minimální a změnu nejprve ověřte na stagingu. Více na https://agenda24.cz/

## Text do grafiky

WordPress 7.1 sjednocuje formulářové prvky na 40 px a odstraňuje zastaralé komponenty

A24 Admin UI 7.1 Audit

## CTA

Otevřete Agenda24 a ověřte první konkrétní krok.

## Alt text

WordPress 7.1 sjednocuje formulářové prvky na 40 px a odstraňuje zastaralé komponenty: názorné zobrazení konkrétního postupu a nástroje A24 Admin UI 7.1 Audit v souladu se značkou Agenda24.

## Prompt na obrázek

Prémiový realistický vizuál pro Agenda24 k tématu „WordPress 7.1 sjednocuje formulářové prvky na 40 px a odstraňuje zastaralé komponenty“. Tmavé pozadí #030712 a #080B16, akcent #EC0044, bílá typografie, originální symbol 24 a Martin pouze podle uložených referencí. Čistá technická kompozice, žádná žlutá, zlatá ani oranžová, žádní roboti, žádný levný cyberpunk, žádné cizí logo.

## Reference k obrázku

Použij výhradně manifest značky agenda24 a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „WordPress sedm jedna mění komponenty. Zkontrolujte čtyřicet pixelů, navigaci, fokus a mobilní administraci.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Admin UI 7.1 Audit a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## Reference k videu

Vizuální pravidla čti pouze z manifestu agenda24; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**A24 Admin UI 7.1 Audit** — Audit spojí statickou kontrolu zdrojů s vizuálním a přístupnostním testem administračních obrazovek.

Přínos: Agenda24 odhalí regresi dřív než klient a opraví pouze komponenty skutečně zasažené WordPressem 7.1.

## MVP verze

verze WordPressu PHP Node a balíčků, seznam pluginů, vyhledání __next40pxDefaultSize Navigation Navigator __experimentalApplyValueToSides a size, screenshoty, šířky 320 768 1440, klávesnice, fokus, zoom 200 procent, důkaz, závažnost, oprava a rollback

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 Admin UI 7.1 Audit“ pro projekt Agenda24. Funkce: verze WordPressu PHP Node a balíčků, seznam pluginů, vyhledání __next40pxDefaultSize Navigation Navigator __experimentalApplyValueToSides a size, screenshoty, šířky 320 768 1440, klávesnice, fokus, zoom 200 procent, důkaz, závažnost, oprava a rollback. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Agenda24 odhalí regresi dřív než klient a opraví pouze komponenty skutečně zasažené WordPressem 7.1. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci.
