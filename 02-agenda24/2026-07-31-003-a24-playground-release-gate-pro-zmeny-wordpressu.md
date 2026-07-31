---
title: "A24 Playground Release Gate: schvalovací brána pro změny WordPressu"
date: 2026-07-31
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
tags: ["tip na aplikaci", "Aplikace, pluginy a automatizace", "A24 Playground Release Gate"]
source_summary: "WordPress Developer Resources – WordPress Playground for Everyone (aktualizováno 16. 7. 2026)"
value_feature_type: "A24 WordPress plugin"
value_feature_name: "A24 Playground Release Gate"
value_feature_summary: "Plugin spravuje testovací instance, scénáře, důkazy, blokátory a klientské schválení před vydáním změny."
value_feature_benefit: "Agenda24 získá jednotný proces a nepřenese neověřenou změnu z Playgroundu do produkce."
value_feature_mvp: "projekty a weby, verze, odkaz na Playground, scénáře, důkazy, blokátory, role technik a schvalovatel, historie, export, rollback plán a centrální licence Agenda24"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 Playground Release Gate“ pro projekt Agenda24. Funkce: projekty a weby, verze, odkaz na Playground, scénáře, důkazy, blokátory, role technik a schvalovatel, historie, export, rollback plán a centrální licence Agenda24. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Agenda24 získá jednotný proces a nepřenese neověřenou změnu z Playgroundu do produkce. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci."
agenda24_area: "Aplikace, pluginy a automatizace"
---

## Shrnutí

A24 Playground Release Gate propojí bezpečnou testovací instanci, povinné scénáře, důkazy a schválení. Do produkce nic nezapisuje a změnu nepovolí bez úplného protokolu.

## Zdroje

- [WordPress Developer Resources – WordPress Playground for Everyone (aktualizováno 16. 7. 2026)](https://developer.wordpress.org/playground/handbook/guides/playground-for-everyone/)

## Proč je to důležité

Při správě více webů se výsledky zkušebních změn rozpadnou mezi odkazy, snímky a poznámky. Jednotná brána ukáže, co se testovalo, proti jaké verzi a kdo nasazení schválil.

## Doporučení

MVP postavte jako read-only evidenci a workflow schválení. Samotné automatické nasazení ponechte mimo první verzi.

## SEO titulek

A24 Playground Release Gate: schvalovací brána pro změny WordPressu | Agenda24

## Meta popis

A24 Playground Release Gate propojí bezpečnou testovací instanci, povinné scénáře, důkazy a schválení. Do produkce nic nezapisuje a změnu nepovolí bez úpln

## Perex

A24 Playground Release Gate propojí bezpečnou testovací instanci, povinné scénáře, důkazy a schválení. Do produkce nic nezapisuje a změnu nepovolí bez úplného protokolu. MVP postavte jako read-only evidenci a workflow schválení. Samotné automatické nasazení ponechte mimo první verzi.

## Blogový titulek

A24 Playground Release Gate: schvalovací brána pro změny WordPressu

## Osnova blogu

1. Co je nové a co z toho plyne
2. Proč nestačí obecná rada
3. Doporučený postup krok za krokem
4. Kde typicky vzniká chyba
5. Praktický příklad
6. Jak využít nástroj A24 Playground Release Gate
7. Jak poznat, že řešení funguje
8. Jak postup zavést do běžné praxe
9. Závěr

## Blogový draft

# A24 Playground Release Gate: schvalovací brána pro změny WordPressu

## Co je nové a co z toho skutečně plyne

A24 Playground Release Gate propojí bezpečnou testovací instanci, povinné scénáře, důkazy a schválení. Do produkce nic nezapisuje a změnu nepovolí bez úplného protokolu.

Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:

**1. WordPress Playground umožňuje bezpečně zkoušet změny mimo produkční web.**

**2. Stav testovacího webu lze uložit v prohlížeči a vrátit se k němu přes jedinečný odkaz.**

**3. Celou instanci včetně pluginů, šablony a obsahu lze exportovat jako ZIP pro další testování.**

Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.

## Proč nestačí obecná rada

Při správě více webů se výsledky zkušebních změn rozpadnou mezi odkazy, snímky a poznámky. Jednotná brána ukáže, co se testovalo, proti jaké verzi a kdo nasazení schválil.

Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Playground Release Gate, který převádí doporučení do opakovatelného rozhodnutí.

Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.

## Doporučený postup krok za krokem

1. **Založit záznam webu a cílové změny.**
2. **Připojit bezpečnou testovací instanci bez tajných údajů.**
3. **Přiřadit povinné funkční a vizuální scénáře.**
4. **Uložit důkazy a vyřešit blokátory.**
5. **Vygenerovat schvalovací protokol a plán ručního nasazení.**

Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.

MVP postavte jako read-only evidenci a workflow schválení. Samotné automatické nasazení ponechte mimo první verzi.

## Kde typicky vzniká chyba

Nejčastější rizika jsou konkrétní:

- sdílený Playground odkaz zpřístupní nevhodný obsah
- schválení obejde nevyřešený blokátor
- neplatná licence omezí provoz webu

Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.

## Praktický příklad

Technik připraví test aktualizace šablony, klient schválí mobilní vzhled a formulář, ale brána ponechá nasazení blokované, dokud není doložen návratový scénář.

Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.

## Jak využít nástroj A24 Playground Release Gate

Plugin spravuje testovací instance, scénáře, důkazy, blokátory a klientské schválení před vydáním změny. Minimální verze zahrnuje: projekty a weby, verze, odkaz na Playground, scénáře, důkazy, blokátory, role technik a schvalovatel, historie, export, rollback plán a centrální licence Agenda24.

Agenda24 získá jednotný proces a nepřenese neověřenou změnu z Playgroundu do produkce. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.

Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.

## Jak poznat, že řešení funguje

Hlavní metrika je: žádná změna nemá stav schváleno bez povinných důkazů, blokátory nelze skrýt a licenční stav neovlivňuje dostupnost webu. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.

Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.

## Jak postup zavést do běžné praxe

Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.

## Závěr

MVP postavte jako read-only evidenci a workflow schválení. Samotné automatické nasazení ponechte mimo první verzi. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.

## Blog pro Enfold

<h1>A24 Playground Release Gate: schvalovací brána pro změny WordPressu</h1>
<p class="perex">A24 Playground Release Gate propojí bezpečnou testovací instanci, povinné scénáře, důkazy a schválení. Do produkce nic nezapisuje a změnu nepovolí bez úplného protokolu.</p>
<h2>Co je nové a co z toho skutečně plyne</h2>
<p>A24 Playground Release Gate propojí bezpečnou testovací instanci, povinné scénáře, důkazy a schválení. Do produkce nic nezapisuje a změnu nepovolí bez úplného protokolu.</p>
<p>Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:</p>
<p><strong>1. WordPress Playground umožňuje bezpečně zkoušet změny mimo produkční web.</strong></p>
<p><strong>2. Stav testovacího webu lze uložit v prohlížeči a vrátit se k němu přes jedinečný odkaz.</strong></p>
<p><strong>3. Celou instanci včetně pluginů, šablony a obsahu lze exportovat jako ZIP pro další testování.</strong></p>
<p>Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.</p>
<h2>Proč nestačí obecná rada</h2>
<p>Při správě více webů se výsledky zkušebních změn rozpadnou mezi odkazy, snímky a poznámky. Jednotná brána ukáže, co se testovalo, proti jaké verzi a kdo nasazení schválil.</p>
<p>Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Playground Release Gate, který převádí doporučení do opakovatelného rozhodnutí.</p>
<p>Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol><li>Založit záznam webu a cílové změny.</li><li>Připojit bezpečnou testovací instanci bez tajných údajů.</li><li>Přiřadit povinné funkční a vizuální scénáře.</li><li>Uložit důkazy a vyřešit blokátory.</li><li>Vygenerovat schvalovací protokol a plán ručního nasazení.</li></ol>
<p>Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.</p>
<p>MVP postavte jako read-only evidenci a workflow schválení. Samotné automatické nasazení ponechte mimo první verzi.</p>
<h2>Kde typicky vzniká chyba</h2>
<p>Nejčastější rizika jsou konkrétní:</p>
<ul><li>sdílený Playground odkaz zpřístupní nevhodný obsah</li><li>schválení obejde nevyřešený blokátor</li><li>neplatná licence omezí provoz webu</li></ul>
<p>Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.</p>
<h2>Praktický příklad</h2>
<p>Technik připraví test aktualizace šablony, klient schválí mobilní vzhled a formulář, ale brána ponechá nasazení blokované, dokud není doložen návratový scénář.</p>
<p>Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.</p>
<h2>Jak využít nástroj A24 Playground Release Gate</h2>
<p>Plugin spravuje testovací instance, scénáře, důkazy, blokátory a klientské schválení před vydáním změny. Minimální verze zahrnuje: projekty a weby, verze, odkaz na Playground, scénáře, důkazy, blokátory, role technik a schvalovatel, historie, export, rollback plán a centrální licence Agenda24.</p>
<p>Agenda24 získá jednotný proces a nepřenese neověřenou změnu z Playgroundu do produkce. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<p>Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.</p>
<h2>Jak poznat, že řešení funguje</h2>
<p>Hlavní metrika je: žádná změna nemá stav schváleno bez povinných důkazů, blokátory nelze skrýt a licenční stav neovlivňuje dostupnost webu. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.</p>
<p>Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.</p>
<h2>Jak postup zavést do běžné praxe</h2>
<p>Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.</p>
<h2>Závěr</h2>
<p>MVP postavte jako read-only evidenci a workflow schválení. Samotné automatické nasazení ponechte mimo první verzi. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.</p>

## Facebook text

A24 Playground Release Gate: schvalovací brána pro změny WordPressu

A24 Playground Release Gate propojí bezpečnou testovací instanci, povinné scénáře, důkazy a schválení. Do produkce nic nezapisuje a změnu nepovolí bez úplného protokolu.

MVP postavte jako read-only evidenci a workflow schválení. Samotné automatické nasazení ponechte mimo první verzi.

Praktická pomůcka: A24 Playground Release Gate. Agenda24 získá jednotný proces a nepřenese neověřenou změnu z Playgroundu do produkce.

Více: https://agenda24.cz/

## LinkedIn text

A24 Playground Release Gate: schvalovací brána pro změny WordPressu

Při správě více webů se výsledky zkušebních změn rozpadnou mezi odkazy, snímky a poznámky. Jednotná brána ukáže, co se testovalo, proti jaké verzi a kdo nasazení schválil.

Doporučený první krok: Založit záznam webu a cílové změny.

A24 Playground Release Gate: Plugin spravuje testovací instance, scénáře, důkazy, blokátory a klientské schválení před vydáním změny.

Agenda24 získá jednotný proces a nepřenese neověřenou změnu z Playgroundu do produkce.

https://agenda24.cz/

## Instagram caption

A24 Playground Release Gate: schvalovací brána pro změny WordPressu

A24 Playground Release Gate propojí bezpečnou testovací instanci, povinné scénáře, důkazy a schválení. Do produkce nic nezapisuje a změnu nepovolí bez úplného protokolu.

✅ Založit záznam webu a cílové změny.
✅ Připojit bezpečnou testovací instanci bez tajných údajů.
✅ Přiřadit povinné funkční a vizuální scénáře.

MVP postavte jako read-only evidenci a workflow schválení. Samotné automatické nasazení ponechte mimo první verzi.

https://agenda24.cz/

#Agenda24 #praktickytip #A24PlaygroundReleaseGate

## Čistý publikační text pro Facebook

A24 Playground Release Gate: schvalovací brána pro změny WordPressu

A24 Playground Release Gate propojí bezpečnou testovací instanci, povinné scénáře, důkazy a schválení. Do produkce nic nezapisuje a změnu nepovolí bez úplného protokolu.

MVP postavte jako read-only evidenci a workflow schválení. Samotné automatické nasazení ponechte mimo první verzi.

Praktická pomůcka: A24 Playground Release Gate. Agenda24 získá jednotný proces a nepřenese neověřenou změnu z Playgroundu do produkce.

Více: https://agenda24.cz/

## Čistý publikační text pro LinkedIn

A24 Playground Release Gate: schvalovací brána pro změny WordPressu

Při správě více webů se výsledky zkušebních změn rozpadnou mezi odkazy, snímky a poznámky. Jednotná brána ukáže, co se testovalo, proti jaké verzi a kdo nasazení schválil.

Doporučený první krok: Založit záznam webu a cílové změny.

A24 Playground Release Gate: Plugin spravuje testovací instance, scénáře, důkazy, blokátory a klientské schválení před vydáním změny.

Agenda24 získá jednotný proces a nepřenese neověřenou změnu z Playgroundu do produkce.

https://agenda24.cz/

## Čistý publikační text pro Instagram

A24 Playground Release Gate: schvalovací brána pro změny WordPressu

A24 Playground Release Gate propojí bezpečnou testovací instanci, povinné scénáře, důkazy a schválení. Do produkce nic nezapisuje a změnu nepovolí bez úplného protokolu.

✅ Založit záznam webu a cílové změny.
✅ Připojit bezpečnou testovací instanci bez tajných údajů.
✅ Přiřadit povinné funkční a vizuální scénáře.

MVP postavte jako read-only evidenci a workflow schválení. Samotné automatické nasazení ponechte mimo první verzi.

https://agenda24.cz/

#Agenda24 #praktickytip #A24PlaygroundReleaseGate

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** A24 Playground Release Gate: schvalovací brána pro změny WordPressu

**Scénář po sekundách:** 0–2 s výrazný hook; 2–7 s konkrétní situace; 7–10 s A24 Playground Release Gate a CTA.

**Mluvený text:** Playground je test. Release Gate z něj udělá doložené rozhodnutí před nasazením.

**Text na obrazovku:** A24 Playground Release Gate: schvalovací brána pro změny WordPressu / A24 Playground Release Gate / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte A24 Playground Release Gate.

**Hashtagy:** #Agenda24 #praktickynavod #bezpecnypostup

**Cover:** A24 Playground Release Gate: schvalovací brána pro změny WordPressu

**Prompt pro Gemini Flow / Omni:** Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Playground je test. Release Gate z něj udělá doložené rozhodnutí před nasazením.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Playground Release Gate a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## YouTube Shorts popisek

A24 Playground Release Gate propojí bezpečnou testovací instanci, povinné scénáře, důkazy a schválení. Do produkce nic nezapisuje a změnu nepovolí bez úplného protokolu. MVP postavte jako read-only evidenci a workflow schválení. Samotné automatické nasazení ponechte mimo první verzi. Více na https://agenda24.cz/

## Text do grafiky

A24 Playground Release Gate: schvalovací brána pro změny WordPressu

A24 Playground Release Gate

## CTA

Otevřete Agenda24 a ověřte první konkrétní krok.

## Alt text

A24 Playground Release Gate: schvalovací brána pro změny WordPressu: názorné zobrazení konkrétního postupu a nástroje A24 Playground Release Gate v souladu se značkou Agenda24.

## Prompt na obrázek

Prémiový realistický vizuál pro Agenda24 k tématu „A24 Playground Release Gate: schvalovací brána pro změny WordPressu“. Tmavé pozadí #030712 a #080B16, akcent #EC0044, bílá typografie, originální symbol 24 a Martin pouze podle uložených referencí. Čistá technická kompozice, žádná žlutá, zlatá ani oranžová, žádní roboti, žádný levný cyberpunk, žádné cizí logo.

## Reference k obrázku

Použij výhradně manifest značky agenda24 a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Playground je test. Release Gate z něj udělá doložené rozhodnutí před nasazením.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Playground Release Gate a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## Reference k videu

Vizuální pravidla čti pouze z manifestu agenda24; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**A24 Playground Release Gate** — Plugin spravuje testovací instance, scénáře, důkazy, blokátory a klientské schválení před vydáním změny.

Přínos: Agenda24 získá jednotný proces a nepřenese neověřenou změnu z Playgroundu do produkce.

## MVP verze

projekty a weby, verze, odkaz na Playground, scénáře, důkazy, blokátory, role technik a schvalovatel, historie, export, rollback plán a centrální licence Agenda24

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 Playground Release Gate“ pro projekt Agenda24. Funkce: projekty a weby, verze, odkaz na Playground, scénáře, důkazy, blokátory, role technik a schvalovatel, historie, export, rollback plán a centrální licence Agenda24. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Agenda24 získá jednotný proces a nepřenese neověřenou změnu z Playgroundu do produkce. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci.
