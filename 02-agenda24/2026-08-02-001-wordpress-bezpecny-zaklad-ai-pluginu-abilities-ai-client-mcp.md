---
title: "WordPress ukazuje bezpečný základ AI pluginu přes Abilities, AI Client a MCP"
date: 2026-08-02
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
tags: ["novinka", "Aplikace, pluginy a automatizace", "A24 Ability Contract Audit"]
source_summary: "WordPress Developer Blog – Build your first AI-Powered WordPress plugin (30. 7. 2026)"
value_feature_type: "WordPress bezpečnostní checker"
value_feature_name: "A24 Ability Contract Audit"
value_feature_summary: "Checker prověří registraci Abilities, schémata, oprávnění, REST viditelnost, chybové návraty a zápisové dopady."
value_feature_benefit: "Vývojář před zveřejněním ví, která schopnost je bezpečně popsaná a kde hrozí příliš široké oprávnění nebo nekontrolovaný zápis."
value_feature_mvp: "plugin a verze, seznam Abilities, účel, input a output schema, permission callback, execute callback, REST viditelnost, read/write dopad, WP_Error, timeout, provider fallback, auditní důkaz, blokátor, vlastník, historie a export"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 Ability Contract Audit“ pro projekt Agenda24. Funkce: plugin a verze, seznam Abilities, účel, input a output schema, permission callback, execute callback, REST viditelnost, read/write dopad, WP_Error, timeout, provider fallback, auditní důkaz, blokátor, vlastník, historie a export. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Vývojář před zveřejněním ví, která schopnost je bezpečně popsaná a kde hrozí příliš široké oprávnění nebo nekontrolovaný zápis. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci."
agenda24_area: "Aplikace, pluginy a automatizace"
---

## Shrnutí

Oficiální WordPress Developer Blog 30. července ukázal, jak spojit Abilities API, provider-agnostic AI Client a MCP Adapter. Pro ostrý plugin je důležitá hlavně přesná smlouva vstupů, oprávnění, chybových stavů a kontrolovaného výsledku.

## Zdroje

- [WordPress Developer Blog – Build your first AI-Powered WordPress plugin (30. 7. 2026)](https://developer.wordpress.org/news/2026/07/build-your-first-ai-powered-wordpress-plugin/)

## Proč je to důležité

Schopnost dostupná přes REST nebo agentní rozhraní může rozšířit dosah funkce mimo původní administrační obrazovku. Pokud chybí capability check, schéma a bezpečná chyba, vzniká riziko neoprávněného spuštění nebo nečekaného zápisu.

## Doporučení

Každou Ability popište jako samostatnou jednotku: účel, vstupní a výstupní schéma, minimální oprávnění, read/write dopad, limity, chybový návrat a audit. Složenou akci testujte i při selhání dílčího kroku.

## SEO titulek

WordPress ukazuje bezpečný základ AI pluginu přes Abilities, AI Client a MCP | Agenda24

## Meta popis

Oficiální WordPress Developer Blog 30. července ukázal, jak spojit Abilities API, provider-agnostic AI Client a MCP Adapter. Pro ostrý plugin je důležitá h

## Perex

Oficiální WordPress Developer Blog 30. července ukázal, jak spojit Abilities API, provider-agnostic AI Client a MCP Adapter. Pro ostrý plugin je důležitá hlavně přesná smlouva vstupů, oprávnění, chybových stavů a kontrolovaného výsledku. Každou Ability popište jako samostatnou jednotku: účel, vstupní a výstupní schéma, minimální oprávnění, read/write dopad, limity, chybový návrat a audit. Složenou akci testujte i při selhání dílčího kroku.

## Blogový titulek

WordPress ukazuje bezpečný základ AI pluginu přes Abilities, AI Client a MCP

## Osnova blogu

1. Co je nové a co z toho plyne
2. Proč nestačí obecná rada
3. Doporučený postup krok za krokem
4. Kde typicky vzniká chyba
5. Praktický příklad
6. Jak využít nástroj A24 Ability Contract Audit
7. Jak poznat, že řešení funguje
8. Jak postup zavést do běžné praxe
9. Závěr

## Blogový draft

# WordPress ukazuje bezpečný základ AI pluginu přes Abilities, AI Client a MCP

## Co je nové a co z toho skutečně plyne

Oficiální WordPress Developer Blog 30. července ukázal, jak spojit Abilities API, provider-agnostic AI Client a MCP Adapter. Pro ostrý plugin je důležitá hlavně přesná smlouva vstupů, oprávnění, chybových stavů a kontrolovaného výsledku.

Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:

**1. Oficiální návod propojuje Abilities API, provider-agnostic WordPress AI Client a MCP Adapter do jednoho pluginového workflow.**

**2. Každá Ability má popsané vstupy a výstupy, permission callback a execute callback; zveřejnění přes REST je určeno autentizovaným uživatelům.**

**3. Návod výslovně počítá s WP_Error, rozdíly mezi poskytovateli a obranným parsováním nedeterministického JSON výstupu.**

Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.

## Proč nestačí obecná rada

Schopnost dostupná přes REST nebo agentní rozhraní může rozšířit dosah funkce mimo původní administrační obrazovku. Pokud chybí capability check, schéma a bezpečná chyba, vzniká riziko neoprávněného spuštění nebo nečekaného zápisu.

Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Ability Contract Audit, který převádí doporučení do opakovatelného rozhodnutí.

Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.

## Doporučený postup krok za krokem

1. **Sepsat všechny registrované Abilities a jejich složení.**
2. **Ověřit povinná vstupní a výstupní pole.**
3. **Prověřit minimální capability pro čtení i zápis.**
4. **Simulovat WP_Error, timeout a neplatný JSON.**
5. **Doložit, že složená akce nezanechá neúplný zápis.**

Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.

Každou Ability popište jako samostatnou jednotku: účel, vstupní a výstupní schéma, minimální oprávnění, read/write dopad, limity, chybový návrat a audit. Složenou akci testujte i při selhání dílčího kroku.

## Kde typicky vzniká chyba

Nejčastější rizika jsou konkrétní:

- Ability je přes REST dostupná širší roli, než vývojář očekává
- nedeterministický výstup projde bez ověření struktury
- složená akce po selhání ponechá rozpracovaný obsah

Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.

## Praktický příklad

Plugin popisuje obrázek, vytvoří text a uloží koncept. Test záměrně přeruší druhý krok; audit musí potvrdit, že nevznikl veřejný článek, chyba je srozumitelná a opakování nevytvoří duplicitu.

Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.

## Jak využít nástroj A24 Ability Contract Audit

Checker prověří registraci Abilities, schémata, oprávnění, REST viditelnost, chybové návraty a zápisové dopady. Minimální verze zahrnuje: plugin a verze, seznam Abilities, účel, input a output schema, permission callback, execute callback, REST viditelnost, read/write dopad, WP_Error, timeout, provider fallback, auditní důkaz, blokátor, vlastník, historie a export.

Vývojář před zveřejněním ví, která schopnost je bezpečně popsaná a kde hrozí příliš široké oprávnění nebo nekontrolovaný zápis. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.

Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.

## Jak poznat, že řešení funguje

Hlavní metrika je: 100 procent Abilities má schéma a permission callback, každý zápisový krok má negativní test a nevznikne neúplný veřejný obsah. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.

Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.

## Jak postup zavést do běžné praxe

Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.

## Závěr

Každou Ability popište jako samostatnou jednotku: účel, vstupní a výstupní schéma, minimální oprávnění, read/write dopad, limity, chybový návrat a audit. Složenou akci testujte i při selhání dílčího kroku. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.

## Blog pro Enfold

<h1>WordPress ukazuje bezpečný základ AI pluginu přes Abilities, AI Client a MCP</h1>
<p class="perex">Oficiální WordPress Developer Blog 30. července ukázal, jak spojit Abilities API, provider-agnostic AI Client a MCP Adapter. Pro ostrý plugin je důležitá hlavně přesná smlouva vstupů, oprávnění, chybových stavů a kontrolovaného výsledku.</p>
<h2>Co je nové a co z toho skutečně plyne</h2>
<p>Oficiální WordPress Developer Blog 30. července ukázal, jak spojit Abilities API, provider-agnostic AI Client a MCP Adapter. Pro ostrý plugin je důležitá hlavně přesná smlouva vstupů, oprávnění, chybových stavů a kontrolovaného výsledku.</p>
<p>Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:</p>
<p><strong>1. Oficiální návod propojuje Abilities API, provider-agnostic WordPress AI Client a MCP Adapter do jednoho pluginového workflow.</strong></p>
<p><strong>2. Každá Ability má popsané vstupy a výstupy, permission callback a execute callback; zveřejnění přes REST je určeno autentizovaným uživatelům.</strong></p>
<p><strong>3. Návod výslovně počítá s WP_Error, rozdíly mezi poskytovateli a obranným parsováním nedeterministického JSON výstupu.</strong></p>
<p>Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.</p>
<h2>Proč nestačí obecná rada</h2>
<p>Schopnost dostupná přes REST nebo agentní rozhraní může rozšířit dosah funkce mimo původní administrační obrazovku. Pokud chybí capability check, schéma a bezpečná chyba, vzniká riziko neoprávněného spuštění nebo nečekaného zápisu.</p>
<p>Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Ability Contract Audit, který převádí doporučení do opakovatelného rozhodnutí.</p>
<p>Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol><li>Sepsat všechny registrované Abilities a jejich složení.</li><li>Ověřit povinná vstupní a výstupní pole.</li><li>Prověřit minimální capability pro čtení i zápis.</li><li>Simulovat WP_Error, timeout a neplatný JSON.</li><li>Doložit, že složená akce nezanechá neúplný zápis.</li></ol>
<p>Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.</p>
<p>Každou Ability popište jako samostatnou jednotku: účel, vstupní a výstupní schéma, minimální oprávnění, read/write dopad, limity, chybový návrat a audit. Složenou akci testujte i při selhání dílčího kroku.</p>
<h2>Kde typicky vzniká chyba</h2>
<p>Nejčastější rizika jsou konkrétní:</p>
<ul><li>Ability je přes REST dostupná širší roli, než vývojář očekává</li><li>nedeterministický výstup projde bez ověření struktury</li><li>složená akce po selhání ponechá rozpracovaný obsah</li></ul>
<p>Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.</p>
<h2>Praktický příklad</h2>
<p>Plugin popisuje obrázek, vytvoří text a uloží koncept. Test záměrně přeruší druhý krok; audit musí potvrdit, že nevznikl veřejný článek, chyba je srozumitelná a opakování nevytvoří duplicitu.</p>
<p>Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.</p>
<h2>Jak využít nástroj A24 Ability Contract Audit</h2>
<p>Checker prověří registraci Abilities, schémata, oprávnění, REST viditelnost, chybové návraty a zápisové dopady. Minimální verze zahrnuje: plugin a verze, seznam Abilities, účel, input a output schema, permission callback, execute callback, REST viditelnost, read/write dopad, WP_Error, timeout, provider fallback, auditní důkaz, blokátor, vlastník, historie a export.</p>
<p>Vývojář před zveřejněním ví, která schopnost je bezpečně popsaná a kde hrozí příliš široké oprávnění nebo nekontrolovaný zápis. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<p>Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.</p>
<h2>Jak poznat, že řešení funguje</h2>
<p>Hlavní metrika je: 100 procent Abilities má schéma a permission callback, každý zápisový krok má negativní test a nevznikne neúplný veřejný obsah. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.</p>
<p>Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.</p>
<h2>Jak postup zavést do běžné praxe</h2>
<p>Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.</p>
<h2>Závěr</h2>
<p>Každou Ability popište jako samostatnou jednotku: účel, vstupní a výstupní schéma, minimální oprávnění, read/write dopad, limity, chybový návrat a audit. Složenou akci testujte i při selhání dílčího kroku. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.</p>

## Facebook text

WordPress ukazuje bezpečný základ AI pluginu přes Abilities, AI Client a MCP

Oficiální WordPress Developer Blog 30. července ukázal, jak spojit Abilities API, provider-agnostic AI Client a MCP Adapter. Pro ostrý plugin je důležitá hlavně přesná smlouva vstupů, oprávnění, chybových stavů a kontrolovaného výsledku.

Každou Ability popište jako samostatnou jednotku: účel, vstupní a výstupní schéma, minimální oprávnění, read/write dopad, limity, chybový návrat a audit. Složenou akci testujte i při selhání dílčího kroku.

Praktická pomůcka: A24 Ability Contract Audit. Vývojář před zveřejněním ví, která schopnost je bezpečně popsaná a kde hrozí příliš široké oprávnění nebo nekontrolovaný zápis.

Více: https://agenda24.cz/

## LinkedIn text

WordPress ukazuje bezpečný základ AI pluginu přes Abilities, AI Client a MCP

Schopnost dostupná přes REST nebo agentní rozhraní může rozšířit dosah funkce mimo původní administrační obrazovku. Pokud chybí capability check, schéma a bezpečná chyba, vzniká riziko neoprávněného spuštění nebo nečekaného zápisu.

Doporučený první krok: Sepsat všechny registrované Abilities a jejich složení.

A24 Ability Contract Audit: Checker prověří registraci Abilities, schémata, oprávnění, REST viditelnost, chybové návraty a zápisové dopady.

Vývojář před zveřejněním ví, která schopnost je bezpečně popsaná a kde hrozí příliš široké oprávnění nebo nekontrolovaný zápis.

https://agenda24.cz/

## Instagram caption

WordPress ukazuje bezpečný základ AI pluginu přes Abilities, AI Client a MCP

Oficiální WordPress Developer Blog 30. července ukázal, jak spojit Abilities API, provider-agnostic AI Client a MCP Adapter. Pro ostrý plugin je důležitá hlavně přesná smlouva vstupů, oprávnění, chybových stavů a kontrolovaného výsledku.

✅ Sepsat všechny registrované Abilities a jejich složení.
✅ Ověřit povinná vstupní a výstupní pole.
✅ Prověřit minimální capability pro čtení i zápis.

Každou Ability popište jako samostatnou jednotku: účel, vstupní a výstupní schéma, minimální oprávnění, read/write dopad, limity, chybový návrat a audit. Složenou akci testujte i při selhání dílčího kroku.

https://agenda24.cz/

#Agenda24 #praktickytip #A24AbilityContractAudit

## Čistý publikační text pro Facebook

WordPress ukazuje bezpečný základ AI pluginu přes Abilities, AI Client a MCP

Oficiální WordPress Developer Blog 30. července ukázal, jak spojit Abilities API, provider-agnostic AI Client a MCP Adapter. Pro ostrý plugin je důležitá hlavně přesná smlouva vstupů, oprávnění, chybových stavů a kontrolovaného výsledku.

Každou Ability popište jako samostatnou jednotku: účel, vstupní a výstupní schéma, minimální oprávnění, read/write dopad, limity, chybový návrat a audit. Složenou akci testujte i při selhání dílčího kroku.

Praktická pomůcka: A24 Ability Contract Audit. Vývojář před zveřejněním ví, která schopnost je bezpečně popsaná a kde hrozí příliš široké oprávnění nebo nekontrolovaný zápis.

Více: https://agenda24.cz/

## Čistý publikační text pro LinkedIn

WordPress ukazuje bezpečný základ AI pluginu přes Abilities, AI Client a MCP

Schopnost dostupná přes REST nebo agentní rozhraní může rozšířit dosah funkce mimo původní administrační obrazovku. Pokud chybí capability check, schéma a bezpečná chyba, vzniká riziko neoprávněného spuštění nebo nečekaného zápisu.

Doporučený první krok: Sepsat všechny registrované Abilities a jejich složení.

A24 Ability Contract Audit: Checker prověří registraci Abilities, schémata, oprávnění, REST viditelnost, chybové návraty a zápisové dopady.

Vývojář před zveřejněním ví, která schopnost je bezpečně popsaná a kde hrozí příliš široké oprávnění nebo nekontrolovaný zápis.

https://agenda24.cz/

## Čistý publikační text pro Instagram

WordPress ukazuje bezpečný základ AI pluginu přes Abilities, AI Client a MCP

Oficiální WordPress Developer Blog 30. července ukázal, jak spojit Abilities API, provider-agnostic AI Client a MCP Adapter. Pro ostrý plugin je důležitá hlavně přesná smlouva vstupů, oprávnění, chybových stavů a kontrolovaného výsledku.

✅ Sepsat všechny registrované Abilities a jejich složení.
✅ Ověřit povinná vstupní a výstupní pole.
✅ Prověřit minimální capability pro čtení i zápis.

Každou Ability popište jako samostatnou jednotku: účel, vstupní a výstupní schéma, minimální oprávnění, read/write dopad, limity, chybový návrat a audit. Složenou akci testujte i při selhání dílčího kroku.

https://agenda24.cz/

#Agenda24 #praktickytip #A24AbilityContractAudit

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** WordPress ukazuje bezpečný základ AI pluginu přes Abilities, AI Client a MCP

**Scénář po sekundách:** 0–2 s výrazný hook; 2–7 s konkrétní situace; 7–10 s A24 Ability Contract Audit a CTA.

**Mluvený text:** AI plugin není jen prompt. Potřebuje schéma, oprávnění, chybu, audit a bezpečný návrat.

**Text na obrazovku:** WordPress ukazuje bezpečný základ AI pluginu přes Abilities, AI Client a MCP / A24 Ability Contract Audit / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte A24 Ability Contract Audit.

**Hashtagy:** #Agenda24 #praktickynavod #bezpecnypostup

**Cover:** WordPress ukazuje bezpečný základ AI pluginu přes Abilities, AI Client a MCP

**Prompt pro Gemini Flow / Omni:** Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „AI plugin není jen prompt. Potřebuje schéma, oprávnění, chybu, audit a bezpečný návrat.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Ability Contract Audit a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## YouTube Shorts popisek

Oficiální WordPress Developer Blog 30. července ukázal, jak spojit Abilities API, provider-agnostic AI Client a MCP Adapter. Pro ostrý plugin je důležitá hlavně přesná smlouva vstupů, oprávnění, chybových stavů a kontrolovaného výsledku. Každou Ability popište jako samostatnou jednotku: účel, vstupní a výstupní schéma, minimální oprávnění, read/write dopad, limity, chybový návrat a audit. Složenou akci testujte i při selhání dílčího kroku. Více na https://agenda24.cz/

## Text do grafiky

WordPress ukazuje bezpečný základ AI pluginu přes Abilities, AI Client a MCP

A24 Ability Contract Audit

## CTA

Otevřete Agenda24 a ověřte první konkrétní krok.

## Alt text

WordPress ukazuje bezpečný základ AI pluginu přes Abilities, AI Client a MCP: názorné zobrazení konkrétního postupu a nástroje A24 Ability Contract Audit v souladu se značkou Agenda24.

## Prompt na obrázek

Prémiový realistický vizuál pro Agenda24 k tématu „WordPress ukazuje bezpečný základ AI pluginu přes Abilities, AI Client a MCP“. Tmavé pozadí #030712 a #080B16, akcent #EC0044, bílá typografie, originální symbol 24 a Martin pouze podle uložených referencí. Čistá technická kompozice, žádná žlutá, zlatá ani oranžová, žádní roboti, žádný levný cyberpunk, žádné cizí logo.

## Reference k obrázku

Použij výhradně manifest značky agenda24 a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „AI plugin není jen prompt. Potřebuje schéma, oprávnění, chybu, audit a bezpečný návrat.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Ability Contract Audit a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## Reference k videu

Vizuální pravidla čti pouze z manifestu agenda24; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**A24 Ability Contract Audit** — Checker prověří registraci Abilities, schémata, oprávnění, REST viditelnost, chybové návraty a zápisové dopady.

Přínos: Vývojář před zveřejněním ví, která schopnost je bezpečně popsaná a kde hrozí příliš široké oprávnění nebo nekontrolovaný zápis.

## MVP verze

plugin a verze, seznam Abilities, účel, input a output schema, permission callback, execute callback, REST viditelnost, read/write dopad, WP_Error, timeout, provider fallback, auditní důkaz, blokátor, vlastník, historie a export

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 Ability Contract Audit“ pro projekt Agenda24. Funkce: plugin a verze, seznam Abilities, účel, input a output schema, permission callback, execute callback, REST viditelnost, read/write dopad, WP_Error, timeout, provider fallback, auditní důkaz, blokátor, vlastník, historie a export. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Vývojář před zveřejněním ví, která schopnost je bezpečně popsaná a kde hrozí příliš široké oprávnění nebo nekontrolovaný zápis. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci.
