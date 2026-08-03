---
title: "Osm kontrol WordPress webu před přechodem z RC na finální verzi"
date: 2026-08-03
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
tags: ["praktický tip", "Weby a e-shopy", "A24 Eight-Path Smoke Test"]
source_summary: "Make WordPress Core – WordPress 7.1 release schedule (ověřeno 3. 8. 2026)"
value_feature_type: "správcovský checklist"
value_feature_name: "A24 Eight-Path Smoke Test"
value_feature_summary: "Interaktivní protokol vede správce osmi cestami a hlídá, aby výsledek odpovídal konkrétní verzi a zařízení."
value_feature_benefit: "Klient dostane stručný protokol a správce zachytí regresi před ostrým nasazením."
value_feature_mvp: "osm cest, výchozí a cílová verze, desktop mobil, očekávání, skutečnost, snímek nebo log, stav splněno blokováno nevztahuje se, vlastník, termín, rollback a PDF/JSON export"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 Eight-Path Smoke Test“ pro projekt Agenda24. Funkce: osm cest, výchozí a cílová verze, desktop mobil, očekávání, skutečnost, snímek nebo log, stav splněno blokováno nevztahuje se, vlastník, termín, rollback a PDF/JSON export. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Klient dostane stručný protokol a správce zachytí regresi před ostrým nasazením. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci."
agenda24_area: "Weby a e-shopy"
---

## Shrnutí

Osm kontrol pokryje zálohu, přihlášení, editor, veřejný vzhled, formuláře, média, naplánované úlohy a obchodní tok. Výsledek musí obsahovat důkaz, ne pouze poznámku že web funguje.

## Zdroje

- [Make WordPress Core – WordPress 7.1 release schedule (ověřeno 3. 8. 2026)](https://make.wordpress.org/core/7-1/)

## Proč je to důležité

Regrese se často objeví mimo hlavní stránku: v modálním okně editoru, při nahrání obrázku, v cache, v cron úloze nebo při návratu zákazníka z platební brány.

## Doporučení

Ke každé kontrole určete očekávaný výsledek, přesný testovací krok a důkaz. Pokud web danou funkci nepoužívá, označte ji jako nevztahuje se místo automatického splnění.

## SEO titulek

Osm kontrol WordPress webu před přechodem z RC na finální verzi | Agenda24

## Meta popis

Osm kontrol pokryje zálohu, přihlášení, editor, veřejný vzhled, formuláře, média, naplánované úlohy a obchodní tok. Výsledek musí obsahovat důkaz, ne pouze

## Perex

Osm kontrol pokryje zálohu, přihlášení, editor, veřejný vzhled, formuláře, média, naplánované úlohy a obchodní tok. Výsledek musí obsahovat důkaz, ne pouze poznámku že web funguje. Ke každé kontrole určete očekávaný výsledek, přesný testovací krok a důkaz. Pokud web danou funkci nepoužívá, označte ji jako nevztahuje se místo automatického splnění.

## Blogový titulek

Osm kontrol WordPress webu před přechodem z RC na finální verzi

## Osnova blogu

1. Co je nové a co z toho plyne
2. Proč nestačí obecná rada
3. Doporučený postup krok za krokem
4. Kde typicky vzniká chyba
5. Praktický příklad
6. Jak využít nástroj A24 Eight-Path Smoke Test
7. Jak poznat, že řešení funguje
8. Jak postup zavést do běžné praxe
9. Závěr

## Blogový draft

# Osm kontrol WordPress webu před přechodem z RC na finální verzi

## Co je nové a co z toho skutečně plyne

Osm kontrol pokryje zálohu, přihlášení, editor, veřejný vzhled, formuláře, média, naplánované úlohy a obchodní tok. Výsledek musí obsahovat důkaz, ne pouze poznámku že web funguje.

Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:

**1. Oficiální harmonogram uvádí WordPress 7.1 RC1 na 5. srpna 2026 a finální vydání na 19. srpna 2026.**

**2. RC1 znamená hard string freeze, zveřejnění Field Guide a přechod do závěrečné fáze testování kompatibility.**

**3. Beta ani RC nepatří na produkční web; ověření se má dělat na odděleném stagingu nebo ve WordPress Playground.**

Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.

## Proč nestačí obecná rada

Regrese se často objeví mimo hlavní stránku: v modálním okně editoru, při nahrání obrázku, v cache, v cron úloze nebo při návratu zákazníka z platební brány.

Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Eight-Path Smoke Test, který převádí doporučení do opakovatelného rozhodnutí.

Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.

## Doporučený postup krok za krokem

1. **Ověřit obnovitelnost zálohy.**
2. **Přihlásit se a upravit testovací koncept.**
3. **Zkontrolovat veřejné šablony a responzivitu.**
4. **Odeslat bezpečný test formuláře a média.**
5. **Prověřit cron, cache a obchodní tok podle rozsahu.**

Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.

Ke každé kontrole určete očekávaný výsledek, přesný testovací krok a důkaz. Pokud web danou funkci nepoužívá, označte ji jako nevztahuje se místo automatického splnění.

## Kde typicky vzniká chyba

Nejčastější rizika jsou konkrétní:

- screenshot neobsahuje verzi ani URL
- testovací formulář odešle osobní údaje
- stav nevztahuje se je použit bez zdůvodnění

Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.

## Praktický příklad

Firemní web bez e-shopu označí pokladnu jako nevztahuje se, ale doloží editor Enfold, kontaktní formulář, upload WebP, cache a mobilní menu na přesné verzi RC.

Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.

## Jak využít nástroj A24 Eight-Path Smoke Test

Interaktivní protokol vede správce osmi cestami a hlídá, aby výsledek odpovídal konkrétní verzi a zařízení. Minimální verze zahrnuje: osm cest, výchozí a cílová verze, desktop mobil, očekávání, skutečnost, snímek nebo log, stav splněno blokováno nevztahuje se, vlastník, termín, rollback a PDF/JSON export.

Klient dostane stručný protokol a správce zachytí regresi před ostrým nasazením. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.

Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.

## Jak poznat, že řešení funguje

Hlavní metrika je: osm cest má jednoznačný stav a každý nesplněný krok má důkaz, vlastníka a návratový plán. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.

Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.

## Jak postup zavést do běžné praxe

Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.

## Závěr

Ke každé kontrole určete očekávaný výsledek, přesný testovací krok a důkaz. Pokud web danou funkci nepoužívá, označte ji jako nevztahuje se místo automatického splnění. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.

## Blog pro Enfold

<h1>Osm kontrol WordPress webu před přechodem z RC na finální verzi</h1>
<p class="perex">Osm kontrol pokryje zálohu, přihlášení, editor, veřejný vzhled, formuláře, média, naplánované úlohy a obchodní tok. Výsledek musí obsahovat důkaz, ne pouze poznámku že web funguje.</p>
<h2>Co je nové a co z toho skutečně plyne</h2>
<p>Osm kontrol pokryje zálohu, přihlášení, editor, veřejný vzhled, formuláře, média, naplánované úlohy a obchodní tok. Výsledek musí obsahovat důkaz, ne pouze poznámku že web funguje.</p>
<p>Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:</p>
<p><strong>1. Oficiální harmonogram uvádí WordPress 7.1 RC1 na 5. srpna 2026 a finální vydání na 19. srpna 2026.</strong></p>
<p><strong>2. RC1 znamená hard string freeze, zveřejnění Field Guide a přechod do závěrečné fáze testování kompatibility.</strong></p>
<p><strong>3. Beta ani RC nepatří na produkční web; ověření se má dělat na odděleném stagingu nebo ve WordPress Playground.</strong></p>
<p>Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.</p>
<h2>Proč nestačí obecná rada</h2>
<p>Regrese se často objeví mimo hlavní stránku: v modálním okně editoru, při nahrání obrázku, v cache, v cron úloze nebo při návratu zákazníka z platební brány.</p>
<p>Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Eight-Path Smoke Test, který převádí doporučení do opakovatelného rozhodnutí.</p>
<p>Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol><li>Ověřit obnovitelnost zálohy.</li><li>Přihlásit se a upravit testovací koncept.</li><li>Zkontrolovat veřejné šablony a responzivitu.</li><li>Odeslat bezpečný test formuláře a média.</li><li>Prověřit cron, cache a obchodní tok podle rozsahu.</li></ol>
<p>Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.</p>
<p>Ke každé kontrole určete očekávaný výsledek, přesný testovací krok a důkaz. Pokud web danou funkci nepoužívá, označte ji jako nevztahuje se místo automatického splnění.</p>
<h2>Kde typicky vzniká chyba</h2>
<p>Nejčastější rizika jsou konkrétní:</p>
<ul><li>screenshot neobsahuje verzi ani URL</li><li>testovací formulář odešle osobní údaje</li><li>stav nevztahuje se je použit bez zdůvodnění</li></ul>
<p>Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.</p>
<h2>Praktický příklad</h2>
<p>Firemní web bez e-shopu označí pokladnu jako nevztahuje se, ale doloží editor Enfold, kontaktní formulář, upload WebP, cache a mobilní menu na přesné verzi RC.</p>
<p>Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.</p>
<h2>Jak využít nástroj A24 Eight-Path Smoke Test</h2>
<p>Interaktivní protokol vede správce osmi cestami a hlídá, aby výsledek odpovídal konkrétní verzi a zařízení. Minimální verze zahrnuje: osm cest, výchozí a cílová verze, desktop mobil, očekávání, skutečnost, snímek nebo log, stav splněno blokováno nevztahuje se, vlastník, termín, rollback a PDF/JSON export.</p>
<p>Klient dostane stručný protokol a správce zachytí regresi před ostrým nasazením. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<p>Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.</p>
<h2>Jak poznat, že řešení funguje</h2>
<p>Hlavní metrika je: osm cest má jednoznačný stav a každý nesplněný krok má důkaz, vlastníka a návratový plán. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.</p>
<p>Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.</p>
<h2>Jak postup zavést do běžné praxe</h2>
<p>Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.</p>
<h2>Závěr</h2>
<p>Ke každé kontrole určete očekávaný výsledek, přesný testovací krok a důkaz. Pokud web danou funkci nepoužívá, označte ji jako nevztahuje se místo automatického splnění. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.</p>

## Facebook text

Osm kontrol WordPress webu před přechodem z RC na finální verzi

Osm kontrol pokryje zálohu, přihlášení, editor, veřejný vzhled, formuláře, média, naplánované úlohy a obchodní tok. Výsledek musí obsahovat důkaz, ne pouze poznámku že web funguje.

Ke každé kontrole určete očekávaný výsledek, přesný testovací krok a důkaz. Pokud web danou funkci nepoužívá, označte ji jako nevztahuje se místo automatického splnění.

Praktická pomůcka: A24 Eight-Path Smoke Test. Klient dostane stručný protokol a správce zachytí regresi před ostrým nasazením.

Více: https://agenda24.cz/

## LinkedIn text

Osm kontrol WordPress webu před přechodem z RC na finální verzi

Regrese se často objeví mimo hlavní stránku: v modálním okně editoru, při nahrání obrázku, v cache, v cron úloze nebo při návratu zákazníka z platební brány.

Doporučený první krok: Ověřit obnovitelnost zálohy.

A24 Eight-Path Smoke Test: Interaktivní protokol vede správce osmi cestami a hlídá, aby výsledek odpovídal konkrétní verzi a zařízení.

Klient dostane stručný protokol a správce zachytí regresi před ostrým nasazením.

https://agenda24.cz/

## Instagram caption

Osm kontrol WordPress webu před přechodem z RC na finální verzi

Osm kontrol pokryje zálohu, přihlášení, editor, veřejný vzhled, formuláře, média, naplánované úlohy a obchodní tok. Výsledek musí obsahovat důkaz, ne pouze poznámku že web funguje.

✅ Ověřit obnovitelnost zálohy.
✅ Přihlásit se a upravit testovací koncept.
✅ Zkontrolovat veřejné šablony a responzivitu.

Ke každé kontrole určete očekávaný výsledek, přesný testovací krok a důkaz. Pokud web danou funkci nepoužívá, označte ji jako nevztahuje se místo automatického splnění.

https://agenda24.cz/

#Agenda24 #praktickytip #A24Eight-PathSmokeTest

## Čistý publikační text pro Facebook

Osm kontrol WordPress webu před přechodem z RC na finální verzi

Osm kontrol pokryje zálohu, přihlášení, editor, veřejný vzhled, formuláře, média, naplánované úlohy a obchodní tok. Výsledek musí obsahovat důkaz, ne pouze poznámku že web funguje.

Ke každé kontrole určete očekávaný výsledek, přesný testovací krok a důkaz. Pokud web danou funkci nepoužívá, označte ji jako nevztahuje se místo automatického splnění.

Praktická pomůcka: A24 Eight-Path Smoke Test. Klient dostane stručný protokol a správce zachytí regresi před ostrým nasazením.

Více: https://agenda24.cz/

## Čistý publikační text pro LinkedIn

Osm kontrol WordPress webu před přechodem z RC na finální verzi

Regrese se často objeví mimo hlavní stránku: v modálním okně editoru, při nahrání obrázku, v cache, v cron úloze nebo při návratu zákazníka z platební brány.

Doporučený první krok: Ověřit obnovitelnost zálohy.

A24 Eight-Path Smoke Test: Interaktivní protokol vede správce osmi cestami a hlídá, aby výsledek odpovídal konkrétní verzi a zařízení.

Klient dostane stručný protokol a správce zachytí regresi před ostrým nasazením.

https://agenda24.cz/

## Čistý publikační text pro Instagram

Osm kontrol WordPress webu před přechodem z RC na finální verzi

Osm kontrol pokryje zálohu, přihlášení, editor, veřejný vzhled, formuláře, média, naplánované úlohy a obchodní tok. Výsledek musí obsahovat důkaz, ne pouze poznámku že web funguje.

✅ Ověřit obnovitelnost zálohy.
✅ Přihlásit se a upravit testovací koncept.
✅ Zkontrolovat veřejné šablony a responzivitu.

Ke každé kontrole určete očekávaný výsledek, přesný testovací krok a důkaz. Pokud web danou funkci nepoužívá, označte ji jako nevztahuje se místo automatického splnění.

https://agenda24.cz/

#Agenda24 #praktickytip #A24Eight-PathSmokeTest

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** Osm kontrol WordPress webu před přechodem z RC na finální verzi

**Scénář po sekundách:** 0–2 s výrazný hook; 2–7 s konkrétní situace; 7–10 s A24 Eight-Path Smoke Test a CTA.

**Mluvený text:** Nestačí otevřít homepage. Ověřte zálohu, editor, vzhled, formulář, média, cron, cache a obchodní tok.

**Text na obrazovku:** Osm kontrol WordPress webu před přechodem z RC na finální verzi / A24 Eight-Path Smoke Test / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte A24 Eight-Path Smoke Test.

**Hashtagy:** #Agenda24 #praktickynavod #bezpecnypostup

**Cover:** Osm kontrol WordPress webu před přechodem z RC na finální verzi

**Prompt pro Gemini Flow / Omni:** Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Nestačí otevřít homepage. Ověřte zálohu, editor, vzhled, formulář, média, cron, cache a obchodní tok.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Eight-Path Smoke Test a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## YouTube Shorts popisek

Osm kontrol pokryje zálohu, přihlášení, editor, veřejný vzhled, formuláře, média, naplánované úlohy a obchodní tok. Výsledek musí obsahovat důkaz, ne pouze poznámku že web funguje. Ke každé kontrole určete očekávaný výsledek, přesný testovací krok a důkaz. Pokud web danou funkci nepoužívá, označte ji jako nevztahuje se místo automatického splnění. Více na https://agenda24.cz/

## Text do grafiky

Osm kontrol WordPress webu před přechodem z RC na finální verzi

A24 Eight-Path Smoke Test

## CTA

Otevřete Agenda24 a ověřte první konkrétní krok.

## Alt text

Osm kontrol WordPress webu před přechodem z RC na finální verzi: názorné zobrazení konkrétního postupu a nástroje A24 Eight-Path Smoke Test v souladu se značkou Agenda24.

## Prompt na obrázek

Prémiový realistický vizuál pro Agenda24 k tématu „Osm kontrol WordPress webu před přechodem z RC na finální verzi“. Tmavé pozadí #030712 a #080B16, akcent #EC0044, bílá typografie, originální symbol 24 a Martin pouze podle uložených referencí. Čistá technická kompozice, žádná žlutá, zlatá ani oranžová, žádní roboti, žádný levný cyberpunk, žádné cizí logo.

## Reference k obrázku

Použij výhradně manifest značky agenda24 a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Nestačí otevřít homepage. Ověřte zálohu, editor, vzhled, formulář, média, cron, cache a obchodní tok.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Eight-Path Smoke Test a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## Reference k videu

Vizuální pravidla čti pouze z manifestu agenda24; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**A24 Eight-Path Smoke Test** — Interaktivní protokol vede správce osmi cestami a hlídá, aby výsledek odpovídal konkrétní verzi a zařízení.

Přínos: Klient dostane stručný protokol a správce zachytí regresi před ostrým nasazením.

## MVP verze

osm cest, výchozí a cílová verze, desktop mobil, očekávání, skutečnost, snímek nebo log, stav splněno blokováno nevztahuje se, vlastník, termín, rollback a PDF/JSON export

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 Eight-Path Smoke Test“ pro projekt Agenda24. Funkce: osm cest, výchozí a cílová verze, desktop mobil, očekávání, skutečnost, snímek nebo log, stav splněno blokováno nevztahuje se, vlastník, termín, rollback a PDF/JSON export. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Klient dostane stručný protokol a správce zachytí regresi před ostrým nasazením. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci.
