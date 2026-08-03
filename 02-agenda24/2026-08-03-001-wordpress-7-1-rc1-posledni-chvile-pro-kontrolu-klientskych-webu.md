---
title: "WordPress 7.1 míří 5. srpna do RC1: poslední chvíle pro kontrolu klientských webů"
date: 2026-08-03
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
tags: ["novinka", "Správa webu a e-shopu", "A24 RC Readiness 7.1"]
source_summary: "Make WordPress Core – WordPress 7.1 release schedule (ověřeno 3. 8. 2026)"
value_feature_type: "WordPress release checker"
value_feature_name: "A24 RC Readiness 7.1"
value_feature_summary: "Checker spojí inventuru verzí, kritické cesty, důkazy a rozhodnutí připraveno/blokováno před WordPressem 7.1."
value_feature_benefit: "Agenda24 získá pro každý spravovaný web dohledatelný stav a konkrétní blokátor ještě před finálním vydáním."
value_feature_mvp: "web a staging URL, verze PHP WordPressu šablony a pluginů, kritické cesty, blokový a klasický editor, Enfold prvky, formuláře, média, cron, REST, WooCommerce Blocks a klasická pokladna podle rozsahu, log, důkaz, blokátor, vlastník, rollback a export"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 RC Readiness 7.1“ pro projekt Agenda24. Funkce: web a staging URL, verze PHP WordPressu šablony a pluginů, kritické cesty, blokový a klasický editor, Enfold prvky, formuláře, média, cron, REST, WooCommerce Blocks a klasická pokladna podle rozsahu, log, důkaz, blokátor, vlastník, rollback a export. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Agenda24 získá pro každý spravovaný web dohledatelný stav a konkrétní blokátor ještě před finálním vydáním. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci."
agenda24_area: "Správa webu a e-shopu"
---

## Shrnutí

Oficiální harmonogram WordPressu uvádí RC1 na 5. srpna a finální vydání na 19. srpna 2026. Pro správce webů je 3. srpen poslední rozumný okamžik sestavit testovací matici pluginů, šablony, editoru, médií a klíčových formulářů.

## Zdroje

- [Make WordPress Core – WordPress 7.1 release schedule (ověřeno 3. 8. 2026)](https://make.wordpress.org/core/7-1/)

## Proč je to důležité

Po RC1 se release dostává do závěrečné stabilizační fáze. Problém objevený až při ostré aktualizaci může zastavit objednávku, formulář, překlad nebo administraci a bez připraveného důkazu se obtížně hledá příčina.

## Doporučení

Vytvořte staging z aktuální produkce, anonymizujte citlivá data a proveďte krátký smoke test před aktualizací i po ní. Beta ani RC neinstalujte na produkční web.

## SEO titulek

WordPress 7.1 míří 5. srpna do RC1: poslední chvíle pro kontrolu klientských webů | Agenda24

## Meta popis

Oficiální harmonogram WordPressu uvádí RC1 na 5. srpna a finální vydání na 19. srpna 2026. Pro správce webů je 3. srpen poslední rozumný okamžik sestavit t

## Perex

Oficiální harmonogram WordPressu uvádí RC1 na 5. srpna a finální vydání na 19. srpna 2026. Pro správce webů je 3. srpen poslední rozumný okamžik sestavit testovací matici pluginů, šablony, editoru, médií a klíčových formulářů. Vytvořte staging z aktuální produkce, anonymizujte citlivá data a proveďte krátký smoke test před aktualizací i po ní. Beta ani RC neinstalujte na produkční web.

## Blogový titulek

WordPress 7.1 míří 5. srpna do RC1: poslední chvíle pro kontrolu klientských webů

## Osnova blogu

1. Co je nové a co z toho plyne
2. Proč nestačí obecná rada
3. Doporučený postup krok za krokem
4. Kde typicky vzniká chyba
5. Praktický příklad
6. Jak využít nástroj A24 RC Readiness 7.1
7. Jak poznat, že řešení funguje
8. Jak postup zavést do běžné praxe
9. Závěr

## Blogový draft

# WordPress 7.1 míří 5. srpna do RC1: poslední chvíle pro kontrolu klientských webů

## Co je nové a co z toho skutečně plyne

Oficiální harmonogram WordPressu uvádí RC1 na 5. srpna a finální vydání na 19. srpna 2026. Pro správce webů je 3. srpen poslední rozumný okamžik sestavit testovací matici pluginů, šablony, editoru, médií a klíčových formulářů.

Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:

**1. Oficiální harmonogram uvádí WordPress 7.1 RC1 na 5. srpna 2026 a finální vydání na 19. srpna 2026.**

**2. RC1 znamená hard string freeze, zveřejnění Field Guide a přechod do závěrečné fáze testování kompatibility.**

**3. Beta ani RC nepatří na produkční web; ověření se má dělat na odděleném stagingu nebo ve WordPress Playground.**

Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.

## Proč nestačí obecná rada

Po RC1 se release dostává do závěrečné stabilizační fáze. Problém objevený až při ostré aktualizaci může zastavit objednávku, formulář, překlad nebo administraci a bez připraveného důkazu se obtížně hledá příčina.

Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 RC Readiness 7.1, který převádí doporučení do opakovatelného rozhodnutí.

Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.

## Doporučený postup krok za krokem

1. **Zaznamenat výchozí verze a vytvořit zálohu.**
2. **Obnovit anonymizovaný staging bez produkčního odesílání.**
3. **Projít přihlášení, editor, formuláře, média a objednávku podle webu.**
4. **Porovnat chyby PHP, konzoli, REST a vzhled na mobilu.**
5. **Přiřadit blokátoru vlastníka nebo schválit plán aktualizace.**

Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.

Vytvořte staging z aktuální produkce, anonymizujte citlivá data a proveďte krátký smoke test před aktualizací i po ní. Beta ani RC neinstalujte na produkční web.

## Kde typicky vzniká chyba

Nejčastější rizika jsou konkrétní:

- RC se omylem instaluje na produkci
- staging odešle skutečný e-mail nebo objednávku
- test ověří pouze homepage a mine kritickou cestu

Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.

## Praktický příklad

E-shop projde testem produktu, košíku, pokladny Blocks i klasické pokladny, e-mailu a administrace objednávky. Rozbitý doplněk dopravy zůstane blokátorem s logem a návratem na původní verzi.

Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.

## Jak využít nástroj A24 RC Readiness 7.1

Checker spojí inventuru verzí, kritické cesty, důkazy a rozhodnutí připraveno/blokováno před WordPressem 7.1. Minimální verze zahrnuje: web a staging URL, verze PHP WordPressu šablony a pluginů, kritické cesty, blokový a klasický editor, Enfold prvky, formuláře, média, cron, REST, WooCommerce Blocks a klasická pokladna podle rozsahu, log, důkaz, blokátor, vlastník, rollback a export.

Agenda24 získá pro každý spravovaný web dohledatelný stav a konkrétní blokátor ještě před finálním vydáním. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.

Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.

## Jak poznat, že řešení funguje

Hlavní metrika je: každý web má stav, všechny kritické cesty mají důkaz a žádný blokátor nezůstane bez vlastníka. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.

Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.

## Jak postup zavést do běžné praxe

Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.

## Závěr

Vytvořte staging z aktuální produkce, anonymizujte citlivá data a proveďte krátký smoke test před aktualizací i po ní. Beta ani RC neinstalujte na produkční web. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.

## Blog pro Enfold

<h1>WordPress 7.1 míří 5. srpna do RC1: poslední chvíle pro kontrolu klientských webů</h1>
<p class="perex">Oficiální harmonogram WordPressu uvádí RC1 na 5. srpna a finální vydání na 19. srpna 2026. Pro správce webů je 3. srpen poslední rozumný okamžik sestavit testovací matici pluginů, šablony, editoru, médií a klíčových formulářů.</p>
<h2>Co je nové a co z toho skutečně plyne</h2>
<p>Oficiální harmonogram WordPressu uvádí RC1 na 5. srpna a finální vydání na 19. srpna 2026. Pro správce webů je 3. srpen poslední rozumný okamžik sestavit testovací matici pluginů, šablony, editoru, médií a klíčových formulářů.</p>
<p>Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:</p>
<p><strong>1. Oficiální harmonogram uvádí WordPress 7.1 RC1 na 5. srpna 2026 a finální vydání na 19. srpna 2026.</strong></p>
<p><strong>2. RC1 znamená hard string freeze, zveřejnění Field Guide a přechod do závěrečné fáze testování kompatibility.</strong></p>
<p><strong>3. Beta ani RC nepatří na produkční web; ověření se má dělat na odděleném stagingu nebo ve WordPress Playground.</strong></p>
<p>Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.</p>
<h2>Proč nestačí obecná rada</h2>
<p>Po RC1 se release dostává do závěrečné stabilizační fáze. Problém objevený až při ostré aktualizaci může zastavit objednávku, formulář, překlad nebo administraci a bez připraveného důkazu se obtížně hledá příčina.</p>
<p>Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 RC Readiness 7.1, který převádí doporučení do opakovatelného rozhodnutí.</p>
<p>Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol><li>Zaznamenat výchozí verze a vytvořit zálohu.</li><li>Obnovit anonymizovaný staging bez produkčního odesílání.</li><li>Projít přihlášení, editor, formuláře, média a objednávku podle webu.</li><li>Porovnat chyby PHP, konzoli, REST a vzhled na mobilu.</li><li>Přiřadit blokátoru vlastníka nebo schválit plán aktualizace.</li></ol>
<p>Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.</p>
<p>Vytvořte staging z aktuální produkce, anonymizujte citlivá data a proveďte krátký smoke test před aktualizací i po ní. Beta ani RC neinstalujte na produkční web.</p>
<h2>Kde typicky vzniká chyba</h2>
<p>Nejčastější rizika jsou konkrétní:</p>
<ul><li>RC se omylem instaluje na produkci</li><li>staging odešle skutečný e-mail nebo objednávku</li><li>test ověří pouze homepage a mine kritickou cestu</li></ul>
<p>Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.</p>
<h2>Praktický příklad</h2>
<p>E-shop projde testem produktu, košíku, pokladny Blocks i klasické pokladny, e-mailu a administrace objednávky. Rozbitý doplněk dopravy zůstane blokátorem s logem a návratem na původní verzi.</p>
<p>Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.</p>
<h2>Jak využít nástroj A24 RC Readiness 7.1</h2>
<p>Checker spojí inventuru verzí, kritické cesty, důkazy a rozhodnutí připraveno/blokováno před WordPressem 7.1. Minimální verze zahrnuje: web a staging URL, verze PHP WordPressu šablony a pluginů, kritické cesty, blokový a klasický editor, Enfold prvky, formuláře, média, cron, REST, WooCommerce Blocks a klasická pokladna podle rozsahu, log, důkaz, blokátor, vlastník, rollback a export.</p>
<p>Agenda24 získá pro každý spravovaný web dohledatelný stav a konkrétní blokátor ještě před finálním vydáním. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<p>Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.</p>
<h2>Jak poznat, že řešení funguje</h2>
<p>Hlavní metrika je: každý web má stav, všechny kritické cesty mají důkaz a žádný blokátor nezůstane bez vlastníka. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.</p>
<p>Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.</p>
<h2>Jak postup zavést do běžné praxe</h2>
<p>Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.</p>
<h2>Závěr</h2>
<p>Vytvořte staging z aktuální produkce, anonymizujte citlivá data a proveďte krátký smoke test před aktualizací i po ní. Beta ani RC neinstalujte na produkční web. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.</p>

## Facebook text

WordPress 7.1 míří 5. srpna do RC1: poslední chvíle pro kontrolu klientských webů

Oficiální harmonogram WordPressu uvádí RC1 na 5. srpna a finální vydání na 19. srpna 2026. Pro správce webů je 3. srpen poslední rozumný okamžik sestavit testovací matici pluginů, šablony, editoru, médií a klíčových formulářů.

Vytvořte staging z aktuální produkce, anonymizujte citlivá data a proveďte krátký smoke test před aktualizací i po ní. Beta ani RC neinstalujte na produkční web.

Praktická pomůcka: A24 RC Readiness 7.1. Agenda24 získá pro každý spravovaný web dohledatelný stav a konkrétní blokátor ještě před finálním vydáním.

Více: https://agenda24.cz/

## LinkedIn text

WordPress 7.1 míří 5. srpna do RC1: poslední chvíle pro kontrolu klientských webů

Po RC1 se release dostává do závěrečné stabilizační fáze. Problém objevený až při ostré aktualizaci může zastavit objednávku, formulář, překlad nebo administraci a bez připraveného důkazu se obtížně hledá příčina.

Doporučený první krok: Zaznamenat výchozí verze a vytvořit zálohu.

A24 RC Readiness 7.1: Checker spojí inventuru verzí, kritické cesty, důkazy a rozhodnutí připraveno/blokováno před WordPressem 7.1.

Agenda24 získá pro každý spravovaný web dohledatelný stav a konkrétní blokátor ještě před finálním vydáním.

https://agenda24.cz/

## Instagram caption

WordPress 7.1 míří 5. srpna do RC1: poslední chvíle pro kontrolu klientských webů

Oficiální harmonogram WordPressu uvádí RC1 na 5. srpna a finální vydání na 19. srpna 2026. Pro správce webů je 3. srpen poslední rozumný okamžik sestavit testovací matici pluginů, šablony, editoru, médií a klíčových formulářů.

✅ Zaznamenat výchozí verze a vytvořit zálohu.
✅ Obnovit anonymizovaný staging bez produkčního odesílání.
✅ Projít přihlášení, editor, formuláře, média a objednávku podle webu.

Vytvořte staging z aktuální produkce, anonymizujte citlivá data a proveďte krátký smoke test před aktualizací i po ní. Beta ani RC neinstalujte na produkční web.

https://agenda24.cz/

#Agenda24 #praktickytip #A24RCReadiness7.1

## Čistý publikační text pro Facebook

WordPress 7.1 míří 5. srpna do RC1: poslední chvíle pro kontrolu klientských webů

Oficiální harmonogram WordPressu uvádí RC1 na 5. srpna a finální vydání na 19. srpna 2026. Pro správce webů je 3. srpen poslední rozumný okamžik sestavit testovací matici pluginů, šablony, editoru, médií a klíčových formulářů.

Vytvořte staging z aktuální produkce, anonymizujte citlivá data a proveďte krátký smoke test před aktualizací i po ní. Beta ani RC neinstalujte na produkční web.

Praktická pomůcka: A24 RC Readiness 7.1. Agenda24 získá pro každý spravovaný web dohledatelný stav a konkrétní blokátor ještě před finálním vydáním.

Více: https://agenda24.cz/

## Čistý publikační text pro LinkedIn

WordPress 7.1 míří 5. srpna do RC1: poslední chvíle pro kontrolu klientských webů

Po RC1 se release dostává do závěrečné stabilizační fáze. Problém objevený až při ostré aktualizaci může zastavit objednávku, formulář, překlad nebo administraci a bez připraveného důkazu se obtížně hledá příčina.

Doporučený první krok: Zaznamenat výchozí verze a vytvořit zálohu.

A24 RC Readiness 7.1: Checker spojí inventuru verzí, kritické cesty, důkazy a rozhodnutí připraveno/blokováno před WordPressem 7.1.

Agenda24 získá pro každý spravovaný web dohledatelný stav a konkrétní blokátor ještě před finálním vydáním.

https://agenda24.cz/

## Čistý publikační text pro Instagram

WordPress 7.1 míří 5. srpna do RC1: poslední chvíle pro kontrolu klientských webů

Oficiální harmonogram WordPressu uvádí RC1 na 5. srpna a finální vydání na 19. srpna 2026. Pro správce webů je 3. srpen poslední rozumný okamžik sestavit testovací matici pluginů, šablony, editoru, médií a klíčových formulářů.

✅ Zaznamenat výchozí verze a vytvořit zálohu.
✅ Obnovit anonymizovaný staging bez produkčního odesílání.
✅ Projít přihlášení, editor, formuláře, média a objednávku podle webu.

Vytvořte staging z aktuální produkce, anonymizujte citlivá data a proveďte krátký smoke test před aktualizací i po ní. Beta ani RC neinstalujte na produkční web.

https://agenda24.cz/

#Agenda24 #praktickytip #A24RCReadiness7.1

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** WordPress 7.1 míří 5. srpna do RC1: poslední chvíle pro kontrolu klientských webů

**Scénář po sekundách:** 0–2 s výrazný hook; 2–7 s konkrétní situace; 7–10 s A24 RC Readiness 7.1 a CTA.

**Mluvený text:** WordPress sedm jedna jde do RC. Otestujte staging, kritické cesty, logy a návrat dřív než produkci.

**Text na obrazovku:** WordPress 7.1 míří 5. srpna do RC1: poslední chvíle pro kontrolu klientských webů / A24 RC Readiness 7.1 / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte A24 RC Readiness 7.1.

**Hashtagy:** #Agenda24 #praktickynavod #bezpecnypostup

**Cover:** WordPress 7.1 míří 5. srpna do RC1: poslední chvíle pro kontrolu klientských webů

**Prompt pro Gemini Flow / Omni:** Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „WordPress sedm jedna jde do RC. Otestujte staging, kritické cesty, logy a návrat dřív než produkci.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 RC Readiness 7.1 a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## YouTube Shorts popisek

Oficiální harmonogram WordPressu uvádí RC1 na 5. srpna a finální vydání na 19. srpna 2026. Pro správce webů je 3. srpen poslední rozumný okamžik sestavit testovací matici pluginů, šablony, editoru, médií a klíčových formulářů. Vytvořte staging z aktuální produkce, anonymizujte citlivá data a proveďte krátký smoke test před aktualizací i po ní. Beta ani RC neinstalujte na produkční web. Více na https://agenda24.cz/

## Text do grafiky

WordPress 7.1 míří 5. srpna do RC1: poslední chvíle pro kontrolu klientských webů

A24 RC Readiness 7.1

## CTA

Otevřete Agenda24 a ověřte první konkrétní krok.

## Alt text

WordPress 7.1 míří 5. srpna do RC1: poslední chvíle pro kontrolu klientských webů: názorné zobrazení konkrétního postupu a nástroje A24 RC Readiness 7.1 v souladu se značkou Agenda24.

## Prompt na obrázek

Prémiový realistický vizuál pro Agenda24 k tématu „WordPress 7.1 míří 5. srpna do RC1: poslední chvíle pro kontrolu klientských webů“. Tmavé pozadí #030712 a #080B16, akcent #EC0044, bílá typografie, originální symbol 24 a Martin pouze podle uložených referencí. Čistá technická kompozice, žádná žlutá, zlatá ani oranžová, žádní roboti, žádný levný cyberpunk, žádné cizí logo.

## Reference k obrázku

Použij výhradně manifest značky agenda24 a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „WordPress sedm jedna jde do RC. Otestujte staging, kritické cesty, logy a návrat dřív než produkci.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 RC Readiness 7.1 a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## Reference k videu

Vizuální pravidla čti pouze z manifestu agenda24; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**A24 RC Readiness 7.1** — Checker spojí inventuru verzí, kritické cesty, důkazy a rozhodnutí připraveno/blokováno před WordPressem 7.1.

Přínos: Agenda24 získá pro každý spravovaný web dohledatelný stav a konkrétní blokátor ještě před finálním vydáním.

## MVP verze

web a staging URL, verze PHP WordPressu šablony a pluginů, kritické cesty, blokový a klasický editor, Enfold prvky, formuláře, média, cron, REST, WooCommerce Blocks a klasická pokladna podle rozsahu, log, důkaz, blokátor, vlastník, rollback a export

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 RC Readiness 7.1“ pro projekt Agenda24. Funkce: web a staging URL, verze PHP WordPressu šablony a pluginů, kritické cesty, blokový a klasický editor, Enfold prvky, formuláře, média, cron, REST, WooCommerce Blocks a klasická pokladna podle rozsahu, log, důkaz, blokátor, vlastník, rollback a export. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Agenda24 získá pro každý spravovaný web dohledatelný stav a konkrétní blokátor ještě před finálním vydáním. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci.
