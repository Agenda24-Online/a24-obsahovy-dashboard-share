---
title: "Sedm testů velké knihovny médií před aktualizací WordPressu 7.1"
date: 2026-08-04
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
tags: ["praktický tip", "Weby a e-shopy", "A24 Media Seven"]
source_summary: "Make WordPress Core – Media Library infinite scrolling ve WordPressu 7.1 (23. 7. 2026, diskuse aktualizována 30. 7. 2026)"
value_feature_type: "správcovský testovací protokol"
value_feature_name: "A24 Media Seven"
value_feature_summary: "Interaktivní protokol vede správce sedmi scénáři a odděluje splněno, blokováno a nevztahuje se."
value_feature_benefit: "Správce odhalí regresi v reálném pracovním toku dřív, než aktualizaci dostanou editoři a zákaznický web."
value_feature_mvp: "sedm scénářů, role a zařízení, počet příloh, mřížka, modal, filtr typu a data, dlouhé posouvání, detail, návrat, fokus, klávesnice, uživatelská volba, WooCommerce Blocks a klasický tok podle rozsahu, důkaz, blokátor a export"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 Media Seven“ pro projekt Agenda24. Funkce: sedm scénářů, role a zařízení, počet příloh, mřížka, modal, filtr typu a data, dlouhé posouvání, detail, návrat, fokus, klávesnice, uživatelská volba, WooCommerce Blocks a klasický tok podle rozsahu, důkaz, blokátor a export. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Správce odhalí regresi v reálném pracovním toku dřív, než aktualizaci dostanou editoři a zákaznický web. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci."
agenda24_area: "Weby a e-shopy"
---

## Shrnutí

Sedm testů pokryje otevření mřížky, výběr přílohy, filtrování, dlouhé posouvání, návrat po zavření detailu, ovládání klávesnicí a uživatelské vypnutí nekonečného načítání.

## Zdroje

- [Make WordPress Core – Media Library infinite scrolling ve WordPressu 7.1 (23. 7. 2026, diskuse aktualizována 30. 7. 2026)](https://make.wordpress.org/core/2026/07/23/media-library-infinite-scrolling-is-now-enabled-by-default-with-a-per-user-opt-out/)

## Proč je to důležité

Pouhé potvrzení, že se obrázky zobrazí, neodhalí ztracený fokus, opakované požadavky, špatný návrat pozice ani problém v modálním okně editoru či produktu.

## Doporučení

Každý test spojte s počtem příloh, rolí, zařízením, očekáváním a důkazem. U e-shopu přidejte výběr produktového obrázku v blokovém i klasickém pracovním toku podle skutečného nastavení.

## SEO titulek

Sedm testů velké knihovny médií před aktualizací WordPressu 7.1 | Agenda24

## Meta popis

Sedm testů pokryje otevření mřížky, výběr přílohy, filtrování, dlouhé posouvání, návrat po zavření detailu, ovládání klávesnicí a uživatelské vypnutí nekon

## Perex

Sedm testů pokryje otevření mřížky, výběr přílohy, filtrování, dlouhé posouvání, návrat po zavření detailu, ovládání klávesnicí a uživatelské vypnutí nekonečného načítání. Každý test spojte s počtem příloh, rolí, zařízením, očekáváním a důkazem. U e-shopu přidejte výběr produktového obrázku v blokovém i klasickém pracovním toku podle skutečného nastavení.

## Blogový titulek

Sedm testů velké knihovny médií před aktualizací WordPressu 7.1

## Osnova blogu

1. Co je nové a co z toho plyne
2. Proč nestačí obecná rada
3. Doporučený postup krok za krokem
4. Kde typicky vzniká chyba
5. Praktický příklad
6. Jak využít nástroj A24 Media Seven
7. Jak poznat, že řešení funguje
8. Jak postup zavést do běžné praxe
9. Závěr

## Blogový draft

# Sedm testů velké knihovny médií před aktualizací WordPressu 7.1

## Co je nové a co z toho skutečně plyne

Sedm testů pokryje otevření mřížky, výběr přílohy, filtrování, dlouhé posouvání, návrat po zavření detailu, ovládání klávesnicí a uživatelské vypnutí nekonečného načítání.

Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:

**1. WordPress 7.1 zapíná nekonečné načítání v mřížce knihovny médií a v Media Modalu jako výchozí chování.**

**2. Uživatel s oprávněním upload_files může načítání vypnout ve svém profilu; globální filtr má přednost před uživatelskou volbou.**

**3. Oficiální diskuse upozorňuje na výkon, přístupnost a použitelnost u rozsáhlých knihoven, proto je nutné změnu testovat na reálném objemu médií.**

Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.

## Proč nestačí obecná rada

Pouhé potvrzení, že se obrázky zobrazí, neodhalí ztracený fokus, opakované požadavky, špatný návrat pozice ani problém v modálním okně editoru či produktu.

Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Media Seven, který převádí doporučení do opakovatelného rozhodnutí.

Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.

## Doporučený postup krok za krokem

1. **Připravit staging s reprezentativní kopií médií.**
2. **Provést sedm scénářů pro dvě až tři role.**
3. **Zapsat síť, paměť, fokus a skutečný výsledek.**
4. **Označit nevztahuje se pouze se zdůvodněním.**
5. **Přiřadit blokátor a ověřit opravu opakováním testu.**

Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.

Každý test spojte s počtem příloh, rolí, zařízením, očekáváním a důkazem. U e-shopu přidejte výběr produktového obrázku v blokovém i klasickém pracovním toku podle skutečného nastavení.

## Kde typicky vzniká chyba

Nejčastější rizika jsou konkrétní:

- staging nemá reprezentativní objem příloh
- test ignoruje Media Modal v editoru
- stav splněno nemá přiložený důkaz

Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.

## Praktický příklad

Redaktor najde fotografii přes filtr data, otevře detail, zavře ho a vrátí se na stejné místo. Potom stejný tok provede pouze klávesnicí a ověří volbu ve vlastním profilu.

Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.

## Jak využít nástroj A24 Media Seven

Interaktivní protokol vede správce sedmi scénáři a odděluje splněno, blokováno a nevztahuje se. Minimální verze zahrnuje: sedm scénářů, role a zařízení, počet příloh, mřížka, modal, filtr typu a data, dlouhé posouvání, detail, návrat, fokus, klávesnice, uživatelská volba, WooCommerce Blocks a klasický tok podle rozsahu, důkaz, blokátor a export.

Správce odhalí regresi v reálném pracovním toku dřív, než aktualizaci dostanou editoři a zákaznický web. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.

Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.

## Jak poznat, že řešení funguje

Hlavní metrika je: všech sedm scénářů má očekávání, skutečnost a důkaz a každý blokátor má vlastníka a termín. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.

Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.

## Jak postup zavést do běžné praxe

Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.

## Závěr

Každý test spojte s počtem příloh, rolí, zařízením, očekáváním a důkazem. U e-shopu přidejte výběr produktového obrázku v blokovém i klasickém pracovním toku podle skutečného nastavení. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.

## Blog pro Enfold

<h1>Sedm testů velké knihovny médií před aktualizací WordPressu 7.1</h1>
<p class="perex">Sedm testů pokryje otevření mřížky, výběr přílohy, filtrování, dlouhé posouvání, návrat po zavření detailu, ovládání klávesnicí a uživatelské vypnutí nekonečného načítání.</p>
<h2>Co je nové a co z toho skutečně plyne</h2>
<p>Sedm testů pokryje otevření mřížky, výběr přílohy, filtrování, dlouhé posouvání, návrat po zavření detailu, ovládání klávesnicí a uživatelské vypnutí nekonečného načítání.</p>
<p>Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:</p>
<p><strong>1. WordPress 7.1 zapíná nekonečné načítání v mřížce knihovny médií a v Media Modalu jako výchozí chování.</strong></p>
<p><strong>2. Uživatel s oprávněním upload_files může načítání vypnout ve svém profilu; globální filtr má přednost před uživatelskou volbou.</strong></p>
<p><strong>3. Oficiální diskuse upozorňuje na výkon, přístupnost a použitelnost u rozsáhlých knihoven, proto je nutné změnu testovat na reálném objemu médií.</strong></p>
<p>Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.</p>
<h2>Proč nestačí obecná rada</h2>
<p>Pouhé potvrzení, že se obrázky zobrazí, neodhalí ztracený fokus, opakované požadavky, špatný návrat pozice ani problém v modálním okně editoru či produktu.</p>
<p>Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Media Seven, který převádí doporučení do opakovatelného rozhodnutí.</p>
<p>Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol><li>Připravit staging s reprezentativní kopií médií.</li><li>Provést sedm scénářů pro dvě až tři role.</li><li>Zapsat síť, paměť, fokus a skutečný výsledek.</li><li>Označit nevztahuje se pouze se zdůvodněním.</li><li>Přiřadit blokátor a ověřit opravu opakováním testu.</li></ol>
<p>Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.</p>
<p>Každý test spojte s počtem příloh, rolí, zařízením, očekáváním a důkazem. U e-shopu přidejte výběr produktového obrázku v blokovém i klasickém pracovním toku podle skutečného nastavení.</p>
<h2>Kde typicky vzniká chyba</h2>
<p>Nejčastější rizika jsou konkrétní:</p>
<ul><li>staging nemá reprezentativní objem příloh</li><li>test ignoruje Media Modal v editoru</li><li>stav splněno nemá přiložený důkaz</li></ul>
<p>Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.</p>
<h2>Praktický příklad</h2>
<p>Redaktor najde fotografii přes filtr data, otevře detail, zavře ho a vrátí se na stejné místo. Potom stejný tok provede pouze klávesnicí a ověří volbu ve vlastním profilu.</p>
<p>Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.</p>
<h2>Jak využít nástroj A24 Media Seven</h2>
<p>Interaktivní protokol vede správce sedmi scénáři a odděluje splněno, blokováno a nevztahuje se. Minimální verze zahrnuje: sedm scénářů, role a zařízení, počet příloh, mřížka, modal, filtr typu a data, dlouhé posouvání, detail, návrat, fokus, klávesnice, uživatelská volba, WooCommerce Blocks a klasický tok podle rozsahu, důkaz, blokátor a export.</p>
<p>Správce odhalí regresi v reálném pracovním toku dřív, než aktualizaci dostanou editoři a zákaznický web. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<p>Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.</p>
<h2>Jak poznat, že řešení funguje</h2>
<p>Hlavní metrika je: všech sedm scénářů má očekávání, skutečnost a důkaz a každý blokátor má vlastníka a termín. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.</p>
<p>Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.</p>
<h2>Jak postup zavést do běžné praxe</h2>
<p>Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.</p>
<h2>Závěr</h2>
<p>Každý test spojte s počtem příloh, rolí, zařízením, očekáváním a důkazem. U e-shopu přidejte výběr produktového obrázku v blokovém i klasickém pracovním toku podle skutečného nastavení. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.</p>

## Facebook text

Sedm testů velké knihovny médií před aktualizací WordPressu 7.1

Sedm testů pokryje otevření mřížky, výběr přílohy, filtrování, dlouhé posouvání, návrat po zavření detailu, ovládání klávesnicí a uživatelské vypnutí nekonečného načítání.

Každý test spojte s počtem příloh, rolí, zařízením, očekáváním a důkazem. U e-shopu přidejte výběr produktového obrázku v blokovém i klasickém pracovním toku podle skutečného nastavení.

Praktická pomůcka: A24 Media Seven. Správce odhalí regresi v reálném pracovním toku dřív, než aktualizaci dostanou editoři a zákaznický web.

Více: https://agenda24.cz/

## LinkedIn text

Sedm testů velké knihovny médií před aktualizací WordPressu 7.1

Pouhé potvrzení, že se obrázky zobrazí, neodhalí ztracený fokus, opakované požadavky, špatný návrat pozice ani problém v modálním okně editoru či produktu.

Doporučený první krok: Připravit staging s reprezentativní kopií médií.

A24 Media Seven: Interaktivní protokol vede správce sedmi scénáři a odděluje splněno, blokováno a nevztahuje se.

Správce odhalí regresi v reálném pracovním toku dřív, než aktualizaci dostanou editoři a zákaznický web.

https://agenda24.cz/

## Instagram caption

Sedm testů velké knihovny médií před aktualizací WordPressu 7.1

Sedm testů pokryje otevření mřížky, výběr přílohy, filtrování, dlouhé posouvání, návrat po zavření detailu, ovládání klávesnicí a uživatelské vypnutí nekonečného načítání.

✅ Připravit staging s reprezentativní kopií médií.
✅ Provést sedm scénářů pro dvě až tři role.
✅ Zapsat síť, paměť, fokus a skutečný výsledek.

Každý test spojte s počtem příloh, rolí, zařízením, očekáváním a důkazem. U e-shopu přidejte výběr produktového obrázku v blokovém i klasickém pracovním toku podle skutečného nastavení.

https://agenda24.cz/

#Agenda24 #praktickytip #A24MediaSeven

## Čistý publikační text pro Facebook

Sedm testů velké knihovny médií před aktualizací WordPressu 7.1

Sedm testů pokryje otevření mřížky, výběr přílohy, filtrování, dlouhé posouvání, návrat po zavření detailu, ovládání klávesnicí a uživatelské vypnutí nekonečného načítání.

Každý test spojte s počtem příloh, rolí, zařízením, očekáváním a důkazem. U e-shopu přidejte výběr produktového obrázku v blokovém i klasickém pracovním toku podle skutečného nastavení.

Praktická pomůcka: A24 Media Seven. Správce odhalí regresi v reálném pracovním toku dřív, než aktualizaci dostanou editoři a zákaznický web.

Více: https://agenda24.cz/

## Čistý publikační text pro LinkedIn

Sedm testů velké knihovny médií před aktualizací WordPressu 7.1

Pouhé potvrzení, že se obrázky zobrazí, neodhalí ztracený fokus, opakované požadavky, špatný návrat pozice ani problém v modálním okně editoru či produktu.

Doporučený první krok: Připravit staging s reprezentativní kopií médií.

A24 Media Seven: Interaktivní protokol vede správce sedmi scénáři a odděluje splněno, blokováno a nevztahuje se.

Správce odhalí regresi v reálném pracovním toku dřív, než aktualizaci dostanou editoři a zákaznický web.

https://agenda24.cz/

## Čistý publikační text pro Instagram

Sedm testů velké knihovny médií před aktualizací WordPressu 7.1

Sedm testů pokryje otevření mřížky, výběr přílohy, filtrování, dlouhé posouvání, návrat po zavření detailu, ovládání klávesnicí a uživatelské vypnutí nekonečného načítání.

✅ Připravit staging s reprezentativní kopií médií.
✅ Provést sedm scénářů pro dvě až tři role.
✅ Zapsat síť, paměť, fokus a skutečný výsledek.

Každý test spojte s počtem příloh, rolí, zařízením, očekáváním a důkazem. U e-shopu přidejte výběr produktového obrázku v blokovém i klasickém pracovním toku podle skutečného nastavení.

https://agenda24.cz/

#Agenda24 #praktickytip #A24MediaSeven

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** Sedm testů velké knihovny médií před aktualizací WordPressu 7.1

**Scénář po sekundách:** 0–2 s výrazný hook; 2–7 s konkrétní situace; 7–10 s A24 Media Seven a CTA.

**Mluvený text:** Sedm kroků prověří mřížku, modal, filtr, posouvání, návrat, klávesnici a uživatelskou volbu.

**Text na obrazovku:** Sedm testů velké knihovny médií před aktualizací WordPressu 7.1 / A24 Media Seven / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte A24 Media Seven.

**Hashtagy:** #Agenda24 #praktickynavod #bezpecnypostup

**Cover:** Sedm testů velké knihovny médií před aktualizací WordPressu 7.1

**Prompt pro Gemini Flow / Omni:** Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Sedm kroků prověří mřížku, modal, filtr, posouvání, návrat, klávesnici a uživatelskou volbu.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Media Seven a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## YouTube Shorts popisek

Sedm testů pokryje otevření mřížky, výběr přílohy, filtrování, dlouhé posouvání, návrat po zavření detailu, ovládání klávesnicí a uživatelské vypnutí nekonečného načítání. Každý test spojte s počtem příloh, rolí, zařízením, očekáváním a důkazem. U e-shopu přidejte výběr produktového obrázku v blokovém i klasickém pracovním toku podle skutečného nastavení. Více na https://agenda24.cz/

## Text do grafiky

Sedm testů velké knihovny médií před aktualizací WordPressu 7.1

A24 Media Seven

## CTA

Otevřete Agenda24 a ověřte první konkrétní krok.

## Alt text

Sedm testů velké knihovny médií před aktualizací WordPressu 7.1: názorné zobrazení konkrétního postupu a nástroje A24 Media Seven v souladu se značkou Agenda24.

## Prompt na obrázek

Prémiový realistický vizuál pro Agenda24 k tématu „Sedm testů velké knihovny médií před aktualizací WordPressu 7.1“. Tmavé pozadí #030712 a #080B16, akcent #EC0044, bílá typografie, originální symbol 24 a Martin pouze podle uložených referencí. Čistá technická kompozice, žádná žlutá, zlatá ani oranžová, žádní roboti, žádný levný cyberpunk, žádné cizí logo.

## Reference k obrázku

Použij výhradně manifest značky agenda24 a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Sedm kroků prověří mřížku, modal, filtr, posouvání, návrat, klávesnici a uživatelskou volbu.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Media Seven a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## Reference k videu

Vizuální pravidla čti pouze z manifestu agenda24; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**A24 Media Seven** — Interaktivní protokol vede správce sedmi scénáři a odděluje splněno, blokováno a nevztahuje se.

Přínos: Správce odhalí regresi v reálném pracovním toku dřív, než aktualizaci dostanou editoři a zákaznický web.

## MVP verze

sedm scénářů, role a zařízení, počet příloh, mřížka, modal, filtr typu a data, dlouhé posouvání, detail, návrat, fokus, klávesnice, uživatelská volba, WooCommerce Blocks a klasický tok podle rozsahu, důkaz, blokátor a export

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 Media Seven“ pro projekt Agenda24. Funkce: sedm scénářů, role a zařízení, počet příloh, mřížka, modal, filtr typu a data, dlouhé posouvání, detail, návrat, fokus, klávesnice, uživatelská volba, WooCommerce Blocks a klasický tok podle rozsahu, důkaz, blokátor a export. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Správce odhalí regresi v reálném pracovním toku dřív, než aktualizaci dostanou editoři a zákaznický web. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci.
