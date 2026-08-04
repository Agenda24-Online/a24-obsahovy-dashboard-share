---
title: "WordPress 7.1 mění výchozí načítání knihovny médií: otestujte výkon i přístupnost"
date: 2026-08-04
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
tags: ["novinka", "Správa webu a e-shopu", "A24 Media Scroll Audit"]
source_summary: "Make WordPress Core – Media Library infinite scrolling ve WordPressu 7.1 (23. 7. 2026, diskuse aktualizována 30. 7. 2026)"
value_feature_type: "WordPress diagnostický checklist"
value_feature_name: "A24 Media Scroll Audit"
value_feature_summary: "Audit změří načítání, počet požadavků, návrat pozice a přístupnost knihovny médií před nasazením WordPressu 7.1."
value_feature_benefit: "Agenda24 doloží, zda je výchozí chování vhodné pro konkrétní web, a nastaví pouze minimální cílenou úpravu."
value_feature_mvp: "staging URL, verze WordPressu PHP šablony a pluginů, počet příloh, mřížka a Media Modal, tři role, uživatelská volba, filtr, klávesnice, čtečka obrazovky, síťové požadavky, paměť, návrat pozice, důkaz, rozhodnutí a rollback"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 Media Scroll Audit“ pro projekt Agenda24. Funkce: staging URL, verze WordPressu PHP šablony a pluginů, počet příloh, mřížka a Media Modal, tři role, uživatelská volba, filtr, klávesnice, čtečka obrazovky, síťové požadavky, paměť, návrat pozice, důkaz, rozhodnutí a rollback. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Agenda24 doloží, zda je výchozí chování vhodné pro konkrétní web, a nastaví pouze minimální cílenou úpravu. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci."
agenda24_area: "Správa webu a e-shopu"
---

## Shrnutí

Ve WordPressu 7.1 se média v mřížce a výběrovém okně načítají při posouvání automaticky. Uživatel může funkci vypnout v profilu a správce ji může řídit filtrem, ale změna si zaslouží test na skutečně velké knihovně.

## Zdroje

- [Make WordPress Core – Media Library infinite scrolling ve WordPressu 7.1 (23. 7. 2026, diskuse aktualizována 30. 7. 2026)](https://make.wordpress.org/core/2026/07/23/media-library-infinite-scrolling-is-now-enabled-by-default-with-a-per-user-opt-out/)

## Proč je to důležité

Na malém webu může být změna neviditelná, zatímco u tisíců příloh ovlivní paměť, síťové požadavky, práci s klávesnicí i návrat na předchozí pozici. Bez cíleného testu správce nepozná, komu nové chování pomáhá a koho brzdí.

## Doporučení

Na stagingu otestujte mřížku i Media Modal se třemi uživatelskými rolemi, klávesnicí, čtečkou obrazovky a omezenou sítí. Změnu nevynucujte plošně bez naměřeného důvodu a zdokumentujte možnost uživatelského vypnutí.

## SEO titulek

WordPress 7.1 mění výchozí načítání knihovny médií: otestujte výkon i přístupnost | Agenda24

## Meta popis

Ve WordPressu 7.1 se média v mřížce a výběrovém okně načítají při posouvání automaticky. Uživatel může funkci vypnout v profilu a správce ji může řídit fil

## Perex

Ve WordPressu 7.1 se média v mřížce a výběrovém okně načítají při posouvání automaticky. Uživatel může funkci vypnout v profilu a správce ji může řídit filtrem, ale změna si zaslouží test na skutečně velké knihovně. Na stagingu otestujte mřížku i Media Modal se třemi uživatelskými rolemi, klávesnicí, čtečkou obrazovky a omezenou sítí. Změnu nevynucujte plošně bez naměřeného důvodu a zdokumentujte možnost uživatelského vypnutí.

## Blogový titulek

WordPress 7.1 mění výchozí načítání knihovny médií: otestujte výkon i přístupnost

## Osnova blogu

1. Co je nové a co z toho plyne
2. Proč nestačí obecná rada
3. Doporučený postup krok za krokem
4. Kde typicky vzniká chyba
5. Praktický příklad
6. Jak využít nástroj A24 Media Scroll Audit
7. Jak poznat, že řešení funguje
8. Jak postup zavést do běžné praxe
9. Závěr

## Blogový draft

# WordPress 7.1 mění výchozí načítání knihovny médií: otestujte výkon i přístupnost

## Co je nové a co z toho skutečně plyne

Ve WordPressu 7.1 se média v mřížce a výběrovém okně načítají při posouvání automaticky. Uživatel může funkci vypnout v profilu a správce ji může řídit filtrem, ale změna si zaslouží test na skutečně velké knihovně.

Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:

**1. WordPress 7.1 zapíná nekonečné načítání v mřížce knihovny médií a v Media Modalu jako výchozí chování.**

**2. Uživatel s oprávněním upload_files může načítání vypnout ve svém profilu; globální filtr má přednost před uživatelskou volbou.**

**3. Oficiální diskuse upozorňuje na výkon, přístupnost a použitelnost u rozsáhlých knihoven, proto je nutné změnu testovat na reálném objemu médií.**

Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.

## Proč nestačí obecná rada

Na malém webu může být změna neviditelná, zatímco u tisíců příloh ovlivní paměť, síťové požadavky, práci s klávesnicí i návrat na předchozí pozici. Bez cíleného testu správce nepozná, komu nové chování pomáhá a koho brzdí.

Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Media Scroll Audit, který převádí doporučení do opakovatelného rozhodnutí.

Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.

## Doporučený postup krok za krokem

1. **Zaznamenat výchozí počet médií a verze.**
2. **Otevřít mřížku i Media Modal na desktopu a mobilu.**
3. **Projít klávesnici, čtečku a uživatelské vypnutí.**
4. **Změřit požadavky, paměť a návrat na pozici.**
5. **Schválit výchozí stav nebo minimální filtr s rollbackem.**

Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.

Na stagingu otestujte mřížku i Media Modal se třemi uživatelskými rolemi, klávesnicí, čtečkou obrazovky a omezenou sítí. Změnu nevynucujte plošně bez naměřeného důvodu a zdokumentujte možnost uživatelského vypnutí.

## Kde typicky vzniká chyba

Nejčastější rizika jsou konkrétní:

- globální filtr zruší uživatelskou volbu bez vysvětlení
- test s deseti obrázky skryje problém velké knihovny
- měření proběhne jen s administrátorem

Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.

## Praktický příklad

Web s dvanácti tisíci přílohami projde testem autora, editora a administrátora. Editor se čtečkou obrazovky zvolí vypnutí, zatímco ostatní ponechají automatické načítání; správce nic nevynucuje globálně.

Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.

## Jak využít nástroj A24 Media Scroll Audit

Audit změří načítání, počet požadavků, návrat pozice a přístupnost knihovny médií před nasazením WordPressu 7.1. Minimální verze zahrnuje: staging URL, verze WordPressu PHP šablony a pluginů, počet příloh, mřížka a Media Modal, tři role, uživatelská volba, filtr, klávesnice, čtečka obrazovky, síťové požadavky, paměť, návrat pozice, důkaz, rozhodnutí a rollback.

Agenda24 doloží, zda je výchozí chování vhodné pro konkrétní web, a nastaví pouze minimální cílenou úpravu. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.

Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.

## Jak poznat, že řešení funguje

Hlavní metrika je: každá role má doložený výsledek, žádný kritický problém s klávesnicí nezůstane otevřený a rozhodnutí obsahuje návratový postup. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.

Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.

## Jak postup zavést do běžné praxe

Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.

## Závěr

Na stagingu otestujte mřížku i Media Modal se třemi uživatelskými rolemi, klávesnicí, čtečkou obrazovky a omezenou sítí. Změnu nevynucujte plošně bez naměřeného důvodu a zdokumentujte možnost uživatelského vypnutí. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.

## Blog pro Enfold

<h1>WordPress 7.1 mění výchozí načítání knihovny médií: otestujte výkon i přístupnost</h1>
<p class="perex">Ve WordPressu 7.1 se média v mřížce a výběrovém okně načítají při posouvání automaticky. Uživatel může funkci vypnout v profilu a správce ji může řídit filtrem, ale změna si zaslouží test na skutečně velké knihovně.</p>
<h2>Co je nové a co z toho skutečně plyne</h2>
<p>Ve WordPressu 7.1 se média v mřížce a výběrovém okně načítají při posouvání automaticky. Uživatel může funkci vypnout v profilu a správce ji může řídit filtrem, ale změna si zaslouží test na skutečně velké knihovně.</p>
<p>Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:</p>
<p><strong>1. WordPress 7.1 zapíná nekonečné načítání v mřížce knihovny médií a v Media Modalu jako výchozí chování.</strong></p>
<p><strong>2. Uživatel s oprávněním upload_files může načítání vypnout ve svém profilu; globální filtr má přednost před uživatelskou volbou.</strong></p>
<p><strong>3. Oficiální diskuse upozorňuje na výkon, přístupnost a použitelnost u rozsáhlých knihoven, proto je nutné změnu testovat na reálném objemu médií.</strong></p>
<p>Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.</p>
<h2>Proč nestačí obecná rada</h2>
<p>Na malém webu může být změna neviditelná, zatímco u tisíců příloh ovlivní paměť, síťové požadavky, práci s klávesnicí i návrat na předchozí pozici. Bez cíleného testu správce nepozná, komu nové chování pomáhá a koho brzdí.</p>
<p>Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Media Scroll Audit, který převádí doporučení do opakovatelného rozhodnutí.</p>
<p>Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol><li>Zaznamenat výchozí počet médií a verze.</li><li>Otevřít mřížku i Media Modal na desktopu a mobilu.</li><li>Projít klávesnici, čtečku a uživatelské vypnutí.</li><li>Změřit požadavky, paměť a návrat na pozici.</li><li>Schválit výchozí stav nebo minimální filtr s rollbackem.</li></ol>
<p>Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.</p>
<p>Na stagingu otestujte mřížku i Media Modal se třemi uživatelskými rolemi, klávesnicí, čtečkou obrazovky a omezenou sítí. Změnu nevynucujte plošně bez naměřeného důvodu a zdokumentujte možnost uživatelského vypnutí.</p>
<h2>Kde typicky vzniká chyba</h2>
<p>Nejčastější rizika jsou konkrétní:</p>
<ul><li>globální filtr zruší uživatelskou volbu bez vysvětlení</li><li>test s deseti obrázky skryje problém velké knihovny</li><li>měření proběhne jen s administrátorem</li></ul>
<p>Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.</p>
<h2>Praktický příklad</h2>
<p>Web s dvanácti tisíci přílohami projde testem autora, editora a administrátora. Editor se čtečkou obrazovky zvolí vypnutí, zatímco ostatní ponechají automatické načítání; správce nic nevynucuje globálně.</p>
<p>Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.</p>
<h2>Jak využít nástroj A24 Media Scroll Audit</h2>
<p>Audit změří načítání, počet požadavků, návrat pozice a přístupnost knihovny médií před nasazením WordPressu 7.1. Minimální verze zahrnuje: staging URL, verze WordPressu PHP šablony a pluginů, počet příloh, mřížka a Media Modal, tři role, uživatelská volba, filtr, klávesnice, čtečka obrazovky, síťové požadavky, paměť, návrat pozice, důkaz, rozhodnutí a rollback.</p>
<p>Agenda24 doloží, zda je výchozí chování vhodné pro konkrétní web, a nastaví pouze minimální cílenou úpravu. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<p>Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.</p>
<h2>Jak poznat, že řešení funguje</h2>
<p>Hlavní metrika je: každá role má doložený výsledek, žádný kritický problém s klávesnicí nezůstane otevřený a rozhodnutí obsahuje návratový postup. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.</p>
<p>Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.</p>
<h2>Jak postup zavést do běžné praxe</h2>
<p>Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.</p>
<h2>Závěr</h2>
<p>Na stagingu otestujte mřížku i Media Modal se třemi uživatelskými rolemi, klávesnicí, čtečkou obrazovky a omezenou sítí. Změnu nevynucujte plošně bez naměřeného důvodu a zdokumentujte možnost uživatelského vypnutí. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.</p>

## Facebook text

WordPress 7.1 mění výchozí načítání knihovny médií: otestujte výkon i přístupnost

Ve WordPressu 7.1 se média v mřížce a výběrovém okně načítají při posouvání automaticky. Uživatel může funkci vypnout v profilu a správce ji může řídit filtrem, ale změna si zaslouží test na skutečně velké knihovně.

Na stagingu otestujte mřížku i Media Modal se třemi uživatelskými rolemi, klávesnicí, čtečkou obrazovky a omezenou sítí. Změnu nevynucujte plošně bez naměřeného důvodu a zdokumentujte možnost uživatelského vypnutí.

Praktická pomůcka: A24 Media Scroll Audit. Agenda24 doloží, zda je výchozí chování vhodné pro konkrétní web, a nastaví pouze minimální cílenou úpravu.

Více: https://agenda24.cz/

## LinkedIn text

WordPress 7.1 mění výchozí načítání knihovny médií: otestujte výkon i přístupnost

Na malém webu může být změna neviditelná, zatímco u tisíců příloh ovlivní paměť, síťové požadavky, práci s klávesnicí i návrat na předchozí pozici. Bez cíleného testu správce nepozná, komu nové chování pomáhá a koho brzdí.

Doporučený první krok: Zaznamenat výchozí počet médií a verze.

A24 Media Scroll Audit: Audit změří načítání, počet požadavků, návrat pozice a přístupnost knihovny médií před nasazením WordPressu 7.1.

Agenda24 doloží, zda je výchozí chování vhodné pro konkrétní web, a nastaví pouze minimální cílenou úpravu.

https://agenda24.cz/

## Instagram caption

WordPress 7.1 mění výchozí načítání knihovny médií: otestujte výkon i přístupnost

Ve WordPressu 7.1 se média v mřížce a výběrovém okně načítají při posouvání automaticky. Uživatel může funkci vypnout v profilu a správce ji může řídit filtrem, ale změna si zaslouží test na skutečně velké knihovně.

✅ Zaznamenat výchozí počet médií a verze.
✅ Otevřít mřížku i Media Modal na desktopu a mobilu.
✅ Projít klávesnici, čtečku a uživatelské vypnutí.

Na stagingu otestujte mřížku i Media Modal se třemi uživatelskými rolemi, klávesnicí, čtečkou obrazovky a omezenou sítí. Změnu nevynucujte plošně bez naměřeného důvodu a zdokumentujte možnost uživatelského vypnutí.

https://agenda24.cz/

#Agenda24 #praktickytip #A24MediaScrollAudit

## Čistý publikační text pro Facebook

WordPress 7.1 mění výchozí načítání knihovny médií: otestujte výkon i přístupnost

Ve WordPressu 7.1 se média v mřížce a výběrovém okně načítají při posouvání automaticky. Uživatel může funkci vypnout v profilu a správce ji může řídit filtrem, ale změna si zaslouží test na skutečně velké knihovně.

Na stagingu otestujte mřížku i Media Modal se třemi uživatelskými rolemi, klávesnicí, čtečkou obrazovky a omezenou sítí. Změnu nevynucujte plošně bez naměřeného důvodu a zdokumentujte možnost uživatelského vypnutí.

Praktická pomůcka: A24 Media Scroll Audit. Agenda24 doloží, zda je výchozí chování vhodné pro konkrétní web, a nastaví pouze minimální cílenou úpravu.

Více: https://agenda24.cz/

## Čistý publikační text pro LinkedIn

WordPress 7.1 mění výchozí načítání knihovny médií: otestujte výkon i přístupnost

Na malém webu může být změna neviditelná, zatímco u tisíců příloh ovlivní paměť, síťové požadavky, práci s klávesnicí i návrat na předchozí pozici. Bez cíleného testu správce nepozná, komu nové chování pomáhá a koho brzdí.

Doporučený první krok: Zaznamenat výchozí počet médií a verze.

A24 Media Scroll Audit: Audit změří načítání, počet požadavků, návrat pozice a přístupnost knihovny médií před nasazením WordPressu 7.1.

Agenda24 doloží, zda je výchozí chování vhodné pro konkrétní web, a nastaví pouze minimální cílenou úpravu.

https://agenda24.cz/

## Čistý publikační text pro Instagram

WordPress 7.1 mění výchozí načítání knihovny médií: otestujte výkon i přístupnost

Ve WordPressu 7.1 se média v mřížce a výběrovém okně načítají při posouvání automaticky. Uživatel může funkci vypnout v profilu a správce ji může řídit filtrem, ale změna si zaslouží test na skutečně velké knihovně.

✅ Zaznamenat výchozí počet médií a verze.
✅ Otevřít mřížku i Media Modal na desktopu a mobilu.
✅ Projít klávesnici, čtečku a uživatelské vypnutí.

Na stagingu otestujte mřížku i Media Modal se třemi uživatelskými rolemi, klávesnicí, čtečkou obrazovky a omezenou sítí. Změnu nevynucujte plošně bez naměřeného důvodu a zdokumentujte možnost uživatelského vypnutí.

https://agenda24.cz/

#Agenda24 #praktickytip #A24MediaScrollAudit

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** WordPress 7.1 mění výchozí načítání knihovny médií: otestujte výkon i přístupnost

**Scénář po sekundách:** 0–2 s výrazný hook; 2–7 s konkrétní situace; 7–10 s A24 Media Scroll Audit a CTA.

**Mluvený text:** WordPress sedm jedna mění média. Změřte výkon, klávesnici, uživatelskou volbu a návrat na pozici.

**Text na obrazovku:** WordPress 7.1 mění výchozí načítání knihovny médií: otestujte výkon i přístupnost / A24 Media Scroll Audit / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte A24 Media Scroll Audit.

**Hashtagy:** #Agenda24 #praktickynavod #bezpecnypostup

**Cover:** WordPress 7.1 mění výchozí načítání knihovny médií: otestujte výkon i přístupnost

**Prompt pro Gemini Flow / Omni:** Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „WordPress sedm jedna mění média. Změřte výkon, klávesnici, uživatelskou volbu a návrat na pozici.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Media Scroll Audit a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## YouTube Shorts popisek

Ve WordPressu 7.1 se média v mřížce a výběrovém okně načítají při posouvání automaticky. Uživatel může funkci vypnout v profilu a správce ji může řídit filtrem, ale změna si zaslouží test na skutečně velké knihovně. Na stagingu otestujte mřížku i Media Modal se třemi uživatelskými rolemi, klávesnicí, čtečkou obrazovky a omezenou sítí. Změnu nevynucujte plošně bez naměřeného důvodu a zdokumentujte možnost uživatelského vypnutí. Více na https://agenda24.cz/

## Text do grafiky

WordPress 7.1 mění výchozí načítání knihovny médií: otestujte výkon i přístupnost

A24 Media Scroll Audit

## CTA

Otevřete Agenda24 a ověřte první konkrétní krok.

## Alt text

WordPress 7.1 mění výchozí načítání knihovny médií: otestujte výkon i přístupnost: názorné zobrazení konkrétního postupu a nástroje A24 Media Scroll Audit v souladu se značkou Agenda24.

## Prompt na obrázek

Prémiový realistický vizuál pro Agenda24 k tématu „WordPress 7.1 mění výchozí načítání knihovny médií: otestujte výkon i přístupnost“. Tmavé pozadí #030712 a #080B16, akcent #EC0044, bílá typografie, originální symbol 24 a Martin pouze podle uložených referencí. Čistá technická kompozice, žádná žlutá, zlatá ani oranžová, žádní roboti, žádný levný cyberpunk, žádné cizí logo.

## Reference k obrázku

Použij výhradně manifest značky agenda24 a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „WordPress sedm jedna mění média. Změřte výkon, klávesnici, uživatelskou volbu a návrat na pozici.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Media Scroll Audit a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## Reference k videu

Vizuální pravidla čti pouze z manifestu agenda24; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**A24 Media Scroll Audit** — Audit změří načítání, počet požadavků, návrat pozice a přístupnost knihovny médií před nasazením WordPressu 7.1.

Přínos: Agenda24 doloží, zda je výchozí chování vhodné pro konkrétní web, a nastaví pouze minimální cílenou úpravu.

## MVP verze

staging URL, verze WordPressu PHP šablony a pluginů, počet příloh, mřížka a Media Modal, tři role, uživatelská volba, filtr, klávesnice, čtečka obrazovky, síťové požadavky, paměť, návrat pozice, důkaz, rozhodnutí a rollback

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 Media Scroll Audit“ pro projekt Agenda24. Funkce: staging URL, verze WordPressu PHP šablony a pluginů, počet příloh, mřížka a Media Modal, tři role, uživatelská volba, filtr, klávesnice, čtečka obrazovky, síťové požadavky, paměť, návrat pozice, důkaz, rozhodnutí a rollback. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Agenda24 doloží, zda je výchozí chování vhodné pro konkrétní web, a nastaví pouze minimální cílenou úpravu. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci.
