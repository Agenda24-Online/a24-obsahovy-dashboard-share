---
title: "Sedm kontrol administračního rozhraní pluginu před WordPressem 7.1"
date: 2026-08-05
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
tags: ["praktický tip", "Správa webu a e-shopu", "A24 Admin Seven"]
source_summary: "Make WordPress Core – Editor components updates in WordPress 7.1 (23. 7. 2026)"
value_feature_type: "správcovský checklist"
value_feature_name: "A24 Admin Seven"
value_feature_summary: "Interaktivní protokol vede správce sedmi kontrolami a vytváří předávací report s prioritami."
value_feature_benefit: "Správce webu dostane reprodukovatelný postup místo neurčitého pokynu zkontrolovat administraci."
value_feature_mvp: "sedm kontrol, role administrátor editor správce obchodu, obrazovky, očekávání, skutečnost, screenshot, konzole, klávesnice, zoom, mobilní šířka, Blocks a klasické rozhraní dle rozsahu, závažnost, vlastník, termín a export"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 Admin Seven“ pro projekt Agenda24. Funkce: sedm kontrol, role administrátor editor správce obchodu, obrazovky, očekávání, skutečnost, screenshot, konzole, klávesnice, zoom, mobilní šířka, Blocks a klasické rozhraní dle rozsahu, závažnost, vlastník, termín a export. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Správce webu dostane reprodukovatelný postup místo neurčitého pokynu zkontrolovat administraci. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci."
agenda24_area: "Správa webu a e-shopu"
---

## Shrnutí

Sedm kontrol pokryje odstraněné komponenty, ignorované parametry, vlastní výšky polí, rozpad gridu, pořadí tabulátoru, čitelnost při zoomu a chování na úzké obrazovce.

## Zdroje

- [Make WordPress Core – Editor components updates in WordPress 7.1 (23. 7. 2026)](https://make.wordpress.org/core/2026/07/23/editor-components-updates-in-wordpress-7-1/)

## Proč je to důležité

Kompatibilita není jen absence PHP chyby. Uživatel může po aktualizaci ztratit tlačítko pod přehybem, přeskakovat nesmyslným pořadím fokusu nebo neuložit formulář na telefonu.

## Doporučení

Každou kontrolu spojte s konkrétní rolí, obrazovkou, očekáváním a důkazem. U WooCommerce testujte podle rozsahu jak blokové pracovní toky, tak klasické obrazovky, pokud je plugin podporuje.

## SEO titulek

Sedm kontrol administračního rozhraní pluginu před WordPressem 7.1 | Agenda24

## Meta popis

Sedm kontrol pokryje odstraněné komponenty, ignorované parametry, vlastní výšky polí, rozpad gridu, pořadí tabulátoru, čitelnost při zoomu a chování na úzk

## Perex

Sedm kontrol pokryje odstraněné komponenty, ignorované parametry, vlastní výšky polí, rozpad gridu, pořadí tabulátoru, čitelnost při zoomu a chování na úzké obrazovce. Každou kontrolu spojte s konkrétní rolí, obrazovkou, očekáváním a důkazem. U WooCommerce testujte podle rozsahu jak blokové pracovní toky, tak klasické obrazovky, pokud je plugin podporuje.

## Blogový titulek

Sedm kontrol administračního rozhraní pluginu před WordPressem 7.1

## Osnova blogu

1. Co je nové a co z toho plyne
2. Proč nestačí obecná rada
3. Doporučený postup krok za krokem
4. Kde typicky vzniká chyba
5. Praktický příklad
6. Jak využít nástroj A24 Admin Seven
7. Jak poznat, že řešení funguje
8. Jak postup zavést do běžné praxe
9. Závěr

## Blogový draft

# Sedm kontrol administračního rozhraní pluginu před WordPressem 7.1

## Co je nové a co z toho skutečně plyne

Sedm kontrol pokryje odstraněné komponenty, ignorované parametry, vlastní výšky polí, rozpad gridu, pořadí tabulátoru, čitelnost při zoomu a chování na úzké obrazovce.

Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:

**1. WordPress 7.1 nastavuje u formulářových komponent @wordpress/components výchozí výšku 40 px a parametr __next40pxDefaultSize už nemá runtime účinek.**

**2. Zastaralá komponenta Navigation je ve WordPressu 7.1 odstraněna a doporučenou náhradou je Navigator.**

**3. Odstraněna je také experimentální utilita __experimentalApplyValueToSides; Button do plošné změny výšky zahrnut není.**

Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.

## Proč nestačí obecná rada

Kompatibilita není jen absence PHP chyby. Uživatel může po aktualizaci ztratit tlačítko pod přehybem, přeskakovat nesmyslným pořadím fokusu nebo neuložit formulář na telefonu.

Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Admin Seven, který převádí doporučení do opakovatelného rozhodnutí.

Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.

## Doporučený postup krok za krokem

1. **Vybrat tři nejdůležitější administrační cesty.**
2. **Projít odstraněná API a výšku polí.**
3. **Ověřit layout při 320 px a zoomu 200 procent.**
4. **Projít pořadí tabulátoru a viditelný fokus.**
5. **Zapsat regresi, vlastníka a podmínku dokončení.**

Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.

Každou kontrolu spojte s konkrétní rolí, obrazovkou, očekáváním a důkazem. U WooCommerce testujte podle rozsahu jak blokové pracovní toky, tak klasické obrazovky, pokud je plugin podporuje.

## Kde typicky vzniká chyba

Nejčastější rizika jsou konkrétní:

- checklist se odškrtne bez důkazu
- WooCommerce se testuje jen v jednom typu rozhraní
- oprava přepíše globální styly WordPressu

Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.

## Praktický příklad

Správce obchodu upraví nastavení dopravy na notebooku i telefonu. Protokol zachytí přetečení dvou 40px polí a tým opraví pouze lokální grid pluginu.

Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.

## Jak využít nástroj A24 Admin Seven

Interaktivní protokol vede správce sedmi kontrolami a vytváří předávací report s prioritami. Minimální verze zahrnuje: sedm kontrol, role administrátor editor správce obchodu, obrazovky, očekávání, skutečnost, screenshot, konzole, klávesnice, zoom, mobilní šířka, Blocks a klasické rozhraní dle rozsahu, závažnost, vlastník, termín a export.

Správce webu dostane reprodukovatelný postup místo neurčitého pokynu zkontrolovat administraci. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.

Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.

## Jak poznat, že řešení funguje

Hlavní metrika je: sedm kontrol má výsledek a důkaz a kritická cesta je ověřena alespoň jednou bez myši. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.

Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.

## Jak postup zavést do běžné praxe

Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.

## Závěr

Každou kontrolu spojte s konkrétní rolí, obrazovkou, očekáváním a důkazem. U WooCommerce testujte podle rozsahu jak blokové pracovní toky, tak klasické obrazovky, pokud je plugin podporuje. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.

## Blog pro Enfold

<h1>Sedm kontrol administračního rozhraní pluginu před WordPressem 7.1</h1>
<p class="perex">Sedm kontrol pokryje odstraněné komponenty, ignorované parametry, vlastní výšky polí, rozpad gridu, pořadí tabulátoru, čitelnost při zoomu a chování na úzké obrazovce.</p>
<h2>Co je nové a co z toho skutečně plyne</h2>
<p>Sedm kontrol pokryje odstraněné komponenty, ignorované parametry, vlastní výšky polí, rozpad gridu, pořadí tabulátoru, čitelnost při zoomu a chování na úzké obrazovce.</p>
<p>Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:</p>
<p><strong>1. WordPress 7.1 nastavuje u formulářových komponent @wordpress/components výchozí výšku 40 px a parametr __next40pxDefaultSize už nemá runtime účinek.</strong></p>
<p><strong>2. Zastaralá komponenta Navigation je ve WordPressu 7.1 odstraněna a doporučenou náhradou je Navigator.</strong></p>
<p><strong>3. Odstraněna je také experimentální utilita __experimentalApplyValueToSides; Button do plošné změny výšky zahrnut není.</strong></p>
<p>Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.</p>
<h2>Proč nestačí obecná rada</h2>
<p>Kompatibilita není jen absence PHP chyby. Uživatel může po aktualizaci ztratit tlačítko pod přehybem, přeskakovat nesmyslným pořadím fokusu nebo neuložit formulář na telefonu.</p>
<p>Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Admin Seven, který převádí doporučení do opakovatelného rozhodnutí.</p>
<p>Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol><li>Vybrat tři nejdůležitější administrační cesty.</li><li>Projít odstraněná API a výšku polí.</li><li>Ověřit layout při 320 px a zoomu 200 procent.</li><li>Projít pořadí tabulátoru a viditelný fokus.</li><li>Zapsat regresi, vlastníka a podmínku dokončení.</li></ol>
<p>Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.</p>
<p>Každou kontrolu spojte s konkrétní rolí, obrazovkou, očekáváním a důkazem. U WooCommerce testujte podle rozsahu jak blokové pracovní toky, tak klasické obrazovky, pokud je plugin podporuje.</p>
<h2>Kde typicky vzniká chyba</h2>
<p>Nejčastější rizika jsou konkrétní:</p>
<ul><li>checklist se odškrtne bez důkazu</li><li>WooCommerce se testuje jen v jednom typu rozhraní</li><li>oprava přepíše globální styly WordPressu</li></ul>
<p>Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.</p>
<h2>Praktický příklad</h2>
<p>Správce obchodu upraví nastavení dopravy na notebooku i telefonu. Protokol zachytí přetečení dvou 40px polí a tým opraví pouze lokální grid pluginu.</p>
<p>Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.</p>
<h2>Jak využít nástroj A24 Admin Seven</h2>
<p>Interaktivní protokol vede správce sedmi kontrolami a vytváří předávací report s prioritami. Minimální verze zahrnuje: sedm kontrol, role administrátor editor správce obchodu, obrazovky, očekávání, skutečnost, screenshot, konzole, klávesnice, zoom, mobilní šířka, Blocks a klasické rozhraní dle rozsahu, závažnost, vlastník, termín a export.</p>
<p>Správce webu dostane reprodukovatelný postup místo neurčitého pokynu zkontrolovat administraci. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<p>Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.</p>
<h2>Jak poznat, že řešení funguje</h2>
<p>Hlavní metrika je: sedm kontrol má výsledek a důkaz a kritická cesta je ověřena alespoň jednou bez myši. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.</p>
<p>Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.</p>
<h2>Jak postup zavést do běžné praxe</h2>
<p>Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.</p>
<h2>Závěr</h2>
<p>Každou kontrolu spojte s konkrétní rolí, obrazovkou, očekáváním a důkazem. U WooCommerce testujte podle rozsahu jak blokové pracovní toky, tak klasické obrazovky, pokud je plugin podporuje. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.</p>

## Facebook text

Sedm kontrol administračního rozhraní pluginu před WordPressem 7.1

Sedm kontrol pokryje odstraněné komponenty, ignorované parametry, vlastní výšky polí, rozpad gridu, pořadí tabulátoru, čitelnost při zoomu a chování na úzké obrazovce.

Každou kontrolu spojte s konkrétní rolí, obrazovkou, očekáváním a důkazem. U WooCommerce testujte podle rozsahu jak blokové pracovní toky, tak klasické obrazovky, pokud je plugin podporuje.

Praktická pomůcka: A24 Admin Seven. Správce webu dostane reprodukovatelný postup místo neurčitého pokynu zkontrolovat administraci.

Více: https://agenda24.cz/

## LinkedIn text

Sedm kontrol administračního rozhraní pluginu před WordPressem 7.1

Kompatibilita není jen absence PHP chyby. Uživatel může po aktualizaci ztratit tlačítko pod přehybem, přeskakovat nesmyslným pořadím fokusu nebo neuložit formulář na telefonu.

Doporučený první krok: Vybrat tři nejdůležitější administrační cesty.

A24 Admin Seven: Interaktivní protokol vede správce sedmi kontrolami a vytváří předávací report s prioritami.

Správce webu dostane reprodukovatelný postup místo neurčitého pokynu zkontrolovat administraci.

https://agenda24.cz/

## Instagram caption

Sedm kontrol administračního rozhraní pluginu před WordPressem 7.1

Sedm kontrol pokryje odstraněné komponenty, ignorované parametry, vlastní výšky polí, rozpad gridu, pořadí tabulátoru, čitelnost při zoomu a chování na úzké obrazovce.

✅ Vybrat tři nejdůležitější administrační cesty.
✅ Projít odstraněná API a výšku polí.
✅ Ověřit layout při 320 px a zoomu 200 procent.

Každou kontrolu spojte s konkrétní rolí, obrazovkou, očekáváním a důkazem. U WooCommerce testujte podle rozsahu jak blokové pracovní toky, tak klasické obrazovky, pokud je plugin podporuje.

https://agenda24.cz/

#Agenda24 #praktickytip #A24AdminSeven

## Čistý publikační text pro Facebook

Sedm kontrol administračního rozhraní pluginu před WordPressem 7.1

Sedm kontrol pokryje odstraněné komponenty, ignorované parametry, vlastní výšky polí, rozpad gridu, pořadí tabulátoru, čitelnost při zoomu a chování na úzké obrazovce.

Každou kontrolu spojte s konkrétní rolí, obrazovkou, očekáváním a důkazem. U WooCommerce testujte podle rozsahu jak blokové pracovní toky, tak klasické obrazovky, pokud je plugin podporuje.

Praktická pomůcka: A24 Admin Seven. Správce webu dostane reprodukovatelný postup místo neurčitého pokynu zkontrolovat administraci.

Více: https://agenda24.cz/

## Čistý publikační text pro LinkedIn

Sedm kontrol administračního rozhraní pluginu před WordPressem 7.1

Kompatibilita není jen absence PHP chyby. Uživatel může po aktualizaci ztratit tlačítko pod přehybem, přeskakovat nesmyslným pořadím fokusu nebo neuložit formulář na telefonu.

Doporučený první krok: Vybrat tři nejdůležitější administrační cesty.

A24 Admin Seven: Interaktivní protokol vede správce sedmi kontrolami a vytváří předávací report s prioritami.

Správce webu dostane reprodukovatelný postup místo neurčitého pokynu zkontrolovat administraci.

https://agenda24.cz/

## Čistý publikační text pro Instagram

Sedm kontrol administračního rozhraní pluginu před WordPressem 7.1

Sedm kontrol pokryje odstraněné komponenty, ignorované parametry, vlastní výšky polí, rozpad gridu, pořadí tabulátoru, čitelnost při zoomu a chování na úzké obrazovce.

✅ Vybrat tři nejdůležitější administrační cesty.
✅ Projít odstraněná API a výšku polí.
✅ Ověřit layout při 320 px a zoomu 200 procent.

Každou kontrolu spojte s konkrétní rolí, obrazovkou, očekáváním a důkazem. U WooCommerce testujte podle rozsahu jak blokové pracovní toky, tak klasické obrazovky, pokud je plugin podporuje.

https://agenda24.cz/

#Agenda24 #praktickytip #A24AdminSeven

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** Sedm kontrol administračního rozhraní pluginu před WordPressem 7.1

**Scénář po sekundách:** 0–2 s výrazný hook; 2–7 s konkrétní situace; 7–10 s A24 Admin Seven a CTA.

**Mluvený text:** Sedm kontrol odhalí odstraněné API, rozpad rozložení, chybný fokus i problém na mobilu.

**Text na obrazovku:** Sedm kontrol administračního rozhraní pluginu před WordPressem 7.1 / A24 Admin Seven / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte A24 Admin Seven.

**Hashtagy:** #Agenda24 #praktickynavod #bezpecnypostup

**Cover:** Sedm kontrol administračního rozhraní pluginu před WordPressem 7.1

**Prompt pro Gemini Flow / Omni:** Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Sedm kontrol odhalí odstraněné API, rozpad rozložení, chybný fokus i problém na mobilu.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Admin Seven a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## YouTube Shorts popisek

Sedm kontrol pokryje odstraněné komponenty, ignorované parametry, vlastní výšky polí, rozpad gridu, pořadí tabulátoru, čitelnost při zoomu a chování na úzké obrazovce. Každou kontrolu spojte s konkrétní rolí, obrazovkou, očekáváním a důkazem. U WooCommerce testujte podle rozsahu jak blokové pracovní toky, tak klasické obrazovky, pokud je plugin podporuje. Více na https://agenda24.cz/

## Text do grafiky

Sedm kontrol administračního rozhraní pluginu před WordPressem 7.1

A24 Admin Seven

## CTA

Otevřete Agenda24 a ověřte první konkrétní krok.

## Alt text

Sedm kontrol administračního rozhraní pluginu před WordPressem 7.1: názorné zobrazení konkrétního postupu a nástroje A24 Admin Seven v souladu se značkou Agenda24.

## Prompt na obrázek

Prémiový realistický vizuál pro Agenda24 k tématu „Sedm kontrol administračního rozhraní pluginu před WordPressem 7.1“. Tmavé pozadí #030712 a #080B16, akcent #EC0044, bílá typografie, originální symbol 24 a Martin pouze podle uložených referencí. Čistá technická kompozice, žádná žlutá, zlatá ani oranžová, žádní roboti, žádný levný cyberpunk, žádné cizí logo.

## Reference k obrázku

Použij výhradně manifest značky agenda24 a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Sedm kontrol odhalí odstraněné API, rozpad rozložení, chybný fokus i problém na mobilu.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Admin Seven a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## Reference k videu

Vizuální pravidla čti pouze z manifestu agenda24; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**A24 Admin Seven** — Interaktivní protokol vede správce sedmi kontrolami a vytváří předávací report s prioritami.

Přínos: Správce webu dostane reprodukovatelný postup místo neurčitého pokynu zkontrolovat administraci.

## MVP verze

sedm kontrol, role administrátor editor správce obchodu, obrazovky, očekávání, skutečnost, screenshot, konzole, klávesnice, zoom, mobilní šířka, Blocks a klasické rozhraní dle rozsahu, závažnost, vlastník, termín a export

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 Admin Seven“ pro projekt Agenda24. Funkce: sedm kontrol, role administrátor editor správce obchodu, obrazovky, očekávání, skutečnost, screenshot, konzole, klávesnice, zoom, mobilní šířka, Blocks a klasické rozhraní dle rozsahu, závažnost, vlastník, termín a export. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Správce webu dostane reprodukovatelný postup místo neurčitého pokynu zkontrolovat administraci. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci.
