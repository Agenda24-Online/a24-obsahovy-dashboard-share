---
title: "Dvanáct kontrol WordPress webu během RC fáze verze 7.1"
date: 2026-08-06
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
tags: ["praktický tip", "Správa webu a e-shopu", "A24 RC 12 Test Card"]
source_summary: "WordPress 7.1 Release Schedule – RC 1 milestone 5. 8. 2026"
value_feature_type: "kontrolní protokol"
value_feature_name: "A24 RC 12 Test Card"
value_feature_summary: "Interaktivní karta provede správce dvanácti opakovatelnými kontrolami a vytvoří souhrn pro klienta."
value_feature_benefit: "Správce odhalí regresi dříve, než zasáhne návštěvníka, objednávku nebo správu obsahu."
value_feature_mvp: "dvanáct scénářů, očekávaný výsledek, skutečný výsledek, screenshot nebo log, zařízení a prohlížeč, verze, závažnost, vlastník, retest, schválení a PDF export"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 RC 12 Test Card“ pro projekt Agenda24. Funkce: dvanáct scénářů, očekávaný výsledek, skutečný výsledek, screenshot nebo log, zařízení a prohlížeč, verze, závažnost, vlastník, retest, schválení a PDF export. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Správce odhalí regresi dříve, než zasáhne návštěvníka, objednávku nebo správu obsahu. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci."
agenda24_area: "Správa webu a e-shopu"
---

## Shrnutí

Praktický RC test má pokrýt přihlášení, role, editaci, média, formuláře, vyhledávání, navigaci, cache, cron, e-mail, mobilní zobrazení a podle typu webu také objednávku nebo členskou část.

## Zdroje

- [WordPress 7.1 Release Schedule – RC 1 milestone 5. 8. 2026](https://make.wordpress.org/core/7-1/)

## Proč je to důležité

Náhodné proklikání webu neodhalí chyby oprávnění, odesílání, plánovaných úloh ani mobilního rozhraní. Pevná sada scénářů umožní porovnat výsledek před a po aktualizaci.

## Doporučení

Každou kontrolu popište vstupem, očekávaným výsledkem a důkazem. Neúplný scénář nesmí získat stav prošel.

## SEO titulek

Dvanáct kontrol WordPress webu během RC fáze verze 7.1 | Agenda24

## Meta popis

Praktický RC test má pokrýt přihlášení, role, editaci, média, formuláře, vyhledávání, navigaci, cache, cron, e-mail, mobilní zobrazení a podle typu webu ta

## Perex

Praktický RC test má pokrýt přihlášení, role, editaci, média, formuláře, vyhledávání, navigaci, cache, cron, e-mail, mobilní zobrazení a podle typu webu také objednávku nebo členskou část. Každou kontrolu popište vstupem, očekávaným výsledkem a důkazem. Neúplný scénář nesmí získat stav prošel.

## Blogový titulek

Dvanáct kontrol WordPress webu během RC fáze verze 7.1

## Osnova blogu

1. Co je nové a co z toho plyne
2. Proč nestačí obecná rada
3. Doporučený postup krok za krokem
4. Kde typicky vzniká chyba
5. Praktický příklad
6. Jak využít nástroj A24 RC 12 Test Card
7. Jak poznat, že řešení funguje
8. Jak postup zavést do běžné praxe
9. Závěr

## Blogový draft

# Dvanáct kontrol WordPress webu během RC fáze verze 7.1

## Co je nové a co z toho skutečně plyne

Praktický RC test má pokrýt přihlášení, role, editaci, média, formuláře, vyhledávání, navigaci, cache, cron, e-mail, mobilní zobrazení a podle typu webu také objednávku nebo členskou část.

Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:

**1. Oficiální harmonogram WordPress 7.1 stanovil první release candidate na 5. srpna 2026 a finální vydání na 19. srpna 2026.**

**2. S RC 1 začíná hard string freeze a zveřejňuje se Field Guide pro vývojáře a správce webů.**

**3. Před finálním vydáním následuje RC 2 dne 12. srpna a závěrečný dry run 18. srpna.**

Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.

## Proč nestačí obecná rada

Náhodné proklikání webu neodhalí chyby oprávnění, odesílání, plánovaných úloh ani mobilního rozhraní. Pevná sada scénářů umožní porovnat výsledek před a po aktualizaci.

Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 RC 12 Test Card, který převádí doporučení do opakovatelného rozhodnutí.

Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.

## Doporučený postup krok za krokem

1. **Vybrat nejdůležitější cestu návštěvníka a správce.**
2. **Připravit anonymní testovací účty a data.**
3. **Spustit všech dvanáct kontrol ve stejné verzi prostředí.**
4. **Selhání seřadit podle dopadu a opravit bez plošných zásahů.**
5. **Po opravě zopakovat celý dotčený tok, ne jen poslední kliknutí.**

Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.

Každou kontrolu popište vstupem, očekávaným výsledkem a důkazem. Neúplný scénář nesmí získat stav prošel.

## Kde typicky vzniká chyba

Nejčastější rizika jsou konkrétní:

- test používá reálné osobní údaje
- cache skryje chybu nebo starý výsledek
- oprava jednoho kroku poškodí navazující tok

Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.

## Praktický příklad

Po aktualizaci editor uloží stránku, ale uživatel s rolí editor neotevře knihovnu médií. Samostatný test rolí chybu zachytí, přiřadí ji pluginu oprávnění a vynutí retest.

Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.

## Jak využít nástroj A24 RC 12 Test Card

Interaktivní karta provede správce dvanácti opakovatelnými kontrolami a vytvoří souhrn pro klienta. Minimální verze zahrnuje: dvanáct scénářů, očekávaný výsledek, skutečný výsledek, screenshot nebo log, zařízení a prohlížeč, verze, závažnost, vlastník, retest, schválení a PDF export.

Správce odhalí regresi dříve, než zasáhne návštěvníka, objednávku nebo správu obsahu. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.

Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.

## Jak poznat, že řešení funguje

Hlavní metrika je: 12 z 12 kontrol je dokončeno, kritická selhání jsou nulová a důkazy neobsahují osobní údaje. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.

Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.

## Jak postup zavést do běžné praxe

Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.

## Závěr

Každou kontrolu popište vstupem, očekávaným výsledkem a důkazem. Neúplný scénář nesmí získat stav prošel. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.

## Blog pro Enfold

<h1>Dvanáct kontrol WordPress webu během RC fáze verze 7.1</h1>
<p class="perex">Praktický RC test má pokrýt přihlášení, role, editaci, média, formuláře, vyhledávání, navigaci, cache, cron, e-mail, mobilní zobrazení a podle typu webu také objednávku nebo členskou část.</p>
<h2>Co je nové a co z toho skutečně plyne</h2>
<p>Praktický RC test má pokrýt přihlášení, role, editaci, média, formuláře, vyhledávání, navigaci, cache, cron, e-mail, mobilní zobrazení a podle typu webu také objednávku nebo členskou část.</p>
<p>Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:</p>
<p><strong>1. Oficiální harmonogram WordPress 7.1 stanovil první release candidate na 5. srpna 2026 a finální vydání na 19. srpna 2026.</strong></p>
<p><strong>2. S RC 1 začíná hard string freeze a zveřejňuje se Field Guide pro vývojáře a správce webů.</strong></p>
<p><strong>3. Před finálním vydáním následuje RC 2 dne 12. srpna a závěrečný dry run 18. srpna.</strong></p>
<p>Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.</p>
<h2>Proč nestačí obecná rada</h2>
<p>Náhodné proklikání webu neodhalí chyby oprávnění, odesílání, plánovaných úloh ani mobilního rozhraní. Pevná sada scénářů umožní porovnat výsledek před a po aktualizaci.</p>
<p>Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 RC 12 Test Card, který převádí doporučení do opakovatelného rozhodnutí.</p>
<p>Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol><li>Vybrat nejdůležitější cestu návštěvníka a správce.</li><li>Připravit anonymní testovací účty a data.</li><li>Spustit všech dvanáct kontrol ve stejné verzi prostředí.</li><li>Selhání seřadit podle dopadu a opravit bez plošných zásahů.</li><li>Po opravě zopakovat celý dotčený tok, ne jen poslední kliknutí.</li></ol>
<p>Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.</p>
<p>Každou kontrolu popište vstupem, očekávaným výsledkem a důkazem. Neúplný scénář nesmí získat stav prošel.</p>
<h2>Kde typicky vzniká chyba</h2>
<p>Nejčastější rizika jsou konkrétní:</p>
<ul><li>test používá reálné osobní údaje</li><li>cache skryje chybu nebo starý výsledek</li><li>oprava jednoho kroku poškodí navazující tok</li></ul>
<p>Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.</p>
<h2>Praktický příklad</h2>
<p>Po aktualizaci editor uloží stránku, ale uživatel s rolí editor neotevře knihovnu médií. Samostatný test rolí chybu zachytí, přiřadí ji pluginu oprávnění a vynutí retest.</p>
<p>Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.</p>
<h2>Jak využít nástroj A24 RC 12 Test Card</h2>
<p>Interaktivní karta provede správce dvanácti opakovatelnými kontrolami a vytvoří souhrn pro klienta. Minimální verze zahrnuje: dvanáct scénářů, očekávaný výsledek, skutečný výsledek, screenshot nebo log, zařízení a prohlížeč, verze, závažnost, vlastník, retest, schválení a PDF export.</p>
<p>Správce odhalí regresi dříve, než zasáhne návštěvníka, objednávku nebo správu obsahu. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<p>Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.</p>
<h2>Jak poznat, že řešení funguje</h2>
<p>Hlavní metrika je: 12 z 12 kontrol je dokončeno, kritická selhání jsou nulová a důkazy neobsahují osobní údaje. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.</p>
<p>Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.</p>
<h2>Jak postup zavést do běžné praxe</h2>
<p>Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.</p>
<h2>Závěr</h2>
<p>Každou kontrolu popište vstupem, očekávaným výsledkem a důkazem. Neúplný scénář nesmí získat stav prošel. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.</p>

## Facebook text

Dvanáct kontrol WordPress webu během RC fáze verze 7.1

Praktický RC test má pokrýt přihlášení, role, editaci, média, formuláře, vyhledávání, navigaci, cache, cron, e-mail, mobilní zobrazení a podle typu webu také objednávku nebo členskou část.

Každou kontrolu popište vstupem, očekávaným výsledkem a důkazem. Neúplný scénář nesmí získat stav prošel.

Praktická pomůcka: A24 RC 12 Test Card. Správce odhalí regresi dříve, než zasáhne návštěvníka, objednávku nebo správu obsahu.

Více: https://agenda24.cz/

## LinkedIn text

Dvanáct kontrol WordPress webu během RC fáze verze 7.1

Náhodné proklikání webu neodhalí chyby oprávnění, odesílání, plánovaných úloh ani mobilního rozhraní. Pevná sada scénářů umožní porovnat výsledek před a po aktualizaci.

Doporučený první krok: Vybrat nejdůležitější cestu návštěvníka a správce.

A24 RC 12 Test Card: Interaktivní karta provede správce dvanácti opakovatelnými kontrolami a vytvoří souhrn pro klienta.

Správce odhalí regresi dříve, než zasáhne návštěvníka, objednávku nebo správu obsahu.

https://agenda24.cz/

## Instagram caption

Dvanáct kontrol WordPress webu během RC fáze verze 7.1

Praktický RC test má pokrýt přihlášení, role, editaci, média, formuláře, vyhledávání, navigaci, cache, cron, e-mail, mobilní zobrazení a podle typu webu také objednávku nebo členskou část.

✅ Vybrat nejdůležitější cestu návštěvníka a správce.
✅ Připravit anonymní testovací účty a data.
✅ Spustit všech dvanáct kontrol ve stejné verzi prostředí.

Každou kontrolu popište vstupem, očekávaným výsledkem a důkazem. Neúplný scénář nesmí získat stav prošel.

https://agenda24.cz/

#Agenda24 #praktickytip #A24RC12TestCard

## Čistý publikační text pro Facebook

Dvanáct kontrol WordPress webu během RC fáze verze 7.1

Praktický RC test má pokrýt přihlášení, role, editaci, média, formuláře, vyhledávání, navigaci, cache, cron, e-mail, mobilní zobrazení a podle typu webu také objednávku nebo členskou část.

Každou kontrolu popište vstupem, očekávaným výsledkem a důkazem. Neúplný scénář nesmí získat stav prošel.

Praktická pomůcka: A24 RC 12 Test Card. Správce odhalí regresi dříve, než zasáhne návštěvníka, objednávku nebo správu obsahu.

Více: https://agenda24.cz/

## Čistý publikační text pro LinkedIn

Dvanáct kontrol WordPress webu během RC fáze verze 7.1

Náhodné proklikání webu neodhalí chyby oprávnění, odesílání, plánovaných úloh ani mobilního rozhraní. Pevná sada scénářů umožní porovnat výsledek před a po aktualizaci.

Doporučený první krok: Vybrat nejdůležitější cestu návštěvníka a správce.

A24 RC 12 Test Card: Interaktivní karta provede správce dvanácti opakovatelnými kontrolami a vytvoří souhrn pro klienta.

Správce odhalí regresi dříve, než zasáhne návštěvníka, objednávku nebo správu obsahu.

https://agenda24.cz/

## Čistý publikační text pro Instagram

Dvanáct kontrol WordPress webu během RC fáze verze 7.1

Praktický RC test má pokrýt přihlášení, role, editaci, média, formuláře, vyhledávání, navigaci, cache, cron, e-mail, mobilní zobrazení a podle typu webu také objednávku nebo členskou část.

✅ Vybrat nejdůležitější cestu návštěvníka a správce.
✅ Připravit anonymní testovací účty a data.
✅ Spustit všech dvanáct kontrol ve stejné verzi prostředí.

Každou kontrolu popište vstupem, očekávaným výsledkem a důkazem. Neúplný scénář nesmí získat stav prošel.

https://agenda24.cz/

#Agenda24 #praktickytip #A24RC12TestCard

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** Dvanáct kontrol WordPress webu během RC fáze verze 7.1

**Scénář po sekundách:** 0–2 s výrazný hook; 2–7 s konkrétní situace; 7–10 s A24 RC 12 Test Card a CTA.

**Mluvený text:** Dvanáct kontrol od přihlášení po mobil. RC test musí mít očekávání, důkaz a vlastníka.

**Text na obrazovku:** Dvanáct kontrol WordPress webu během RC fáze verze 7.1 / A24 RC 12 Test Card / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte A24 RC 12 Test Card.

**Hashtagy:** #Agenda24 #praktickynavod #bezpecnypostup

**Cover:** Dvanáct kontrol WordPress webu během RC fáze verze 7.1

**Prompt pro Gemini Flow / Omni:** Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Dvanáct kontrol od přihlášení po mobil. RC test musí mít očekávání, důkaz a vlastníka.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 RC 12 Test Card a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## YouTube Shorts popisek

Praktický RC test má pokrýt přihlášení, role, editaci, média, formuláře, vyhledávání, navigaci, cache, cron, e-mail, mobilní zobrazení a podle typu webu také objednávku nebo členskou část. Každou kontrolu popište vstupem, očekávaným výsledkem a důkazem. Neúplný scénář nesmí získat stav prošel. Více na https://agenda24.cz/

## Text do grafiky

Dvanáct kontrol WordPress webu během RC fáze verze 7.1

A24 RC 12 Test Card

## CTA

Otevřete Agenda24 a ověřte první konkrétní krok.

## Alt text

Dvanáct kontrol WordPress webu během RC fáze verze 7.1: názorné zobrazení konkrétního postupu a nástroje A24 RC 12 Test Card v souladu se značkou Agenda24.

## Prompt na obrázek

Prémiový realistický vizuál pro Agenda24 k tématu „Dvanáct kontrol WordPress webu během RC fáze verze 7.1“. Tmavé pozadí #030712 a #080B16, akcent #EC0044, bílá typografie, originální symbol 24 a Martin pouze podle uložených referencí. Čistá technická kompozice, žádná žlutá, zlatá ani oranžová, žádní roboti, žádný levný cyberpunk, žádné cizí logo.

## Reference k obrázku

Použij výhradně manifest značky agenda24 a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Dvanáct kontrol od přihlášení po mobil. RC test musí mít očekávání, důkaz a vlastníka.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 RC 12 Test Card a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## Reference k videu

Vizuální pravidla čti pouze z manifestu agenda24; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**A24 RC 12 Test Card** — Interaktivní karta provede správce dvanácti opakovatelnými kontrolami a vytvoří souhrn pro klienta.

Přínos: Správce odhalí regresi dříve, než zasáhne návštěvníka, objednávku nebo správu obsahu.

## MVP verze

dvanáct scénářů, očekávaný výsledek, skutečný výsledek, screenshot nebo log, zařízení a prohlížeč, verze, závažnost, vlastník, retest, schválení a PDF export

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 RC 12 Test Card“ pro projekt Agenda24. Funkce: dvanáct scénářů, očekávaný výsledek, skutečný výsledek, screenshot nebo log, zařízení a prohlížeč, verze, závažnost, vlastník, retest, schválení a PDF export. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Správce odhalí regresi dříve, než zasáhne návštěvníka, objednávku nebo správu obsahu. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci.

