---
title: "Osm kontrol vlastního bloku ve vždy iframovaném editoru WordPressu"
date: 2026-08-07
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
tags: ["praktický tip", "Správa webu a e-shopu", "A24 Iframe Eight"]
source_summary: "WordPress 7.1 Field Guide – Make WordPress Core (5. 8. 2026)"
value_feature_type: "testovací protokol"
value_feature_name: "A24 Iframe Eight"
value_feature_summary: "Interaktivní protokol vede správce osmi kontrolami bloku a vytváří porovnatelný report před a po opravě."
value_feature_benefit: "Správce dostane reprodukovatelný test místo neurčitého pokynu zkontrolovat editor."
value_feature_mvp: "osm scénářů, blok a verze, role administrátor a editor, očekávání, skutečnost, iframe kontext, klávesnice, focus, konzole, screenshot, závažnost, vlastník, retest a PDF JSON export"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 Iframe Eight“ pro projekt Agenda24. Funkce: osm scénářů, blok a verze, role administrátor a editor, očekávání, skutečnost, iframe kontext, klávesnice, focus, konzole, screenshot, závažnost, vlastník, retest a PDF JSON export. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Správce dostane reprodukovatelný test místo neurčitého pokynu zkontrolovat editor. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci."
agenda24_area: "Správa webu a e-shopu"
---

## Shrnutí

Osm kontrol pokryje vložení bloku, editaci, výběr, klávesnici, styly plátna, média, uložení a opětovné otevření. Každá kontrola má očekávaný výsledek a důkaz.

## Zdroje

- [WordPress 7.1 Field Guide – Make WordPress Core (5. 8. 2026)](https://make.wordpress.org/core/2026/08/05/wordpress-7-1-field-guide/)

## Proč je to důležité

Pouhé načtení editoru neprokáže kompatibilitu. Chyba se často objeví až při změně výběru, přepnutí náhledu, opakované montáži komponenty nebo práci uživatele s jinou rolí.

## Doporučení

Scénáře spouštějte v čistém profilu prohlížeče a ve dvou rolích. Výsledek prošel povolte jen s ověřeným chováním uvnitř plátna i postranního panelu.

## SEO titulek

Osm kontrol vlastního bloku ve vždy iframovaném editoru WordPressu | Agenda24

## Meta popis

Osm kontrol pokryje vložení bloku, editaci, výběr, klávesnici, styly plátna, média, uložení a opětovné otevření. Každá kontrola má očekávaný výsledek a důk

## Perex

Osm kontrol pokryje vložení bloku, editaci, výběr, klávesnici, styly plátna, média, uložení a opětovné otevření. Každá kontrola má očekávaný výsledek a důkaz. Scénáře spouštějte v čistém profilu prohlížeče a ve dvou rolích. Výsledek prošel povolte jen s ověřeným chováním uvnitř plátna i postranního panelu.

## Blogový titulek

Osm kontrol vlastního bloku ve vždy iframovaném editoru WordPressu

## Osnova blogu

1. Co je nové a co z toho plyne
2. Proč nestačí obecná rada
3. Doporučený postup krok za krokem
4. Kde typicky vzniká chyba
5. Praktický příklad
6. Jak využít nástroj A24 Iframe Eight
7. Jak poznat, že řešení funguje
8. Jak postup zavést do běžné praxe
9. Závěr

## Blogový draft

# Osm kontrol vlastního bloku ve vždy iframovaném editoru WordPressu

## Co je nové a co z toho skutečně plyne

Osm kontrol pokryje vložení bloku, editaci, výběr, klávesnici, styly plátna, média, uložení a opětovné otevření. Každá kontrola má očekávaný výsledek a důkaz.

Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:

**1. WordPress 7.1 Field Guide shrnuje změny důležité pro vývojáře pluginů, bloků a šablon před vydáním 19. srpna 2026.**

**2. Editor příspěvků je ve WordPressu 7.1 vždy vykreslen v iframe bez ohledu na typ šablony, verzi Block API nebo obsah příspěvku.**

**3. Kód pracující s plátnem editoru má používat ownerDocument a defaultView místo globálního document a window a správně uklízet event listenery.**

Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.

## Proč nestačí obecná rada

Pouhé načtení editoru neprokáže kompatibilitu. Chyba se často objeví až při změně výběru, přepnutí náhledu, opakované montáži komponenty nebo práci uživatele s jinou rolí.

Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Iframe Eight, který převádí doporučení do opakovatelného rozhodnutí.

Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.

## Doporučený postup krok za krokem

1. **Vybrat nejpoužívanější vlastní bloky a reálný anonymní obsah.**
2. **Zapsat očekávaný výsledek každého z osmi scénářů.**
3. **Spustit test jako administrátor i editor.**
4. **Uložit chybu konzole a vizuální důkaz bez citlivých údajů.**
5. **Po opravě zopakovat všechny navazující scénáře.**

Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.

Scénáře spouštějte v čistém profilu prohlížeče a ve dvou rolích. Výsledek prošel povolte jen s ověřeným chováním uvnitř plátna i postranního panelu.

## Kde typicky vzniká chyba

Nejčastější rizika jsou konkrétní:

- cache skryje starý skript
- test vynechá ovládání klávesnicí
- oprava plátna rozbije postranní panel

Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.

## Praktický příklad

Blok jde vložit myší, ale klávesnice ztratí fokus při otevření nastavení. Protokol zachytí přesný krok, roli, prohlížeč a výsledek po opravě.

Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.

## Jak využít nástroj A24 Iframe Eight

Interaktivní protokol vede správce osmi kontrolami bloku a vytváří porovnatelný report před a po opravě. Minimální verze zahrnuje: osm scénářů, blok a verze, role administrátor a editor, očekávání, skutečnost, iframe kontext, klávesnice, focus, konzole, screenshot, závažnost, vlastník, retest a PDF JSON export.

Správce dostane reprodukovatelný test místo neurčitého pokynu zkontrolovat editor. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.

Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.

## Jak poznat, že řešení funguje

Hlavní metrika je: osm z osmi scénářů má důkaz, kritická selhání jsou nulová a blok je ovladatelný klávesnicí. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.

Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.

## Jak postup zavést do běžné praxe

Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.

## Závěr

Scénáře spouštějte v čistém profilu prohlížeče a ve dvou rolích. Výsledek prošel povolte jen s ověřeným chováním uvnitř plátna i postranního panelu. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.

## Blog pro Enfold

<h1>Osm kontrol vlastního bloku ve vždy iframovaném editoru WordPressu</h1>
<p class="perex">Osm kontrol pokryje vložení bloku, editaci, výběr, klávesnici, styly plátna, média, uložení a opětovné otevření. Každá kontrola má očekávaný výsledek a důkaz.</p>
<h2>Co je nové a co z toho skutečně plyne</h2>
<p>Osm kontrol pokryje vložení bloku, editaci, výběr, klávesnici, styly plátna, média, uložení a opětovné otevření. Každá kontrola má očekávaný výsledek a důkaz.</p>
<p>Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:</p>
<p><strong>1. WordPress 7.1 Field Guide shrnuje změny důležité pro vývojáře pluginů, bloků a šablon před vydáním 19. srpna 2026.</strong></p>
<p><strong>2. Editor příspěvků je ve WordPressu 7.1 vždy vykreslen v iframe bez ohledu na typ šablony, verzi Block API nebo obsah příspěvku.</strong></p>
<p><strong>3. Kód pracující s plátnem editoru má používat ownerDocument a defaultView místo globálního document a window a správně uklízet event listenery.</strong></p>
<p>Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.</p>
<h2>Proč nestačí obecná rada</h2>
<p>Pouhé načtení editoru neprokáže kompatibilitu. Chyba se často objeví až při změně výběru, přepnutí náhledu, opakované montáži komponenty nebo práci uživatele s jinou rolí.</p>
<p>Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Iframe Eight, který převádí doporučení do opakovatelného rozhodnutí.</p>
<p>Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol><li>Vybrat nejpoužívanější vlastní bloky a reálný anonymní obsah.</li><li>Zapsat očekávaný výsledek každého z osmi scénářů.</li><li>Spustit test jako administrátor i editor.</li><li>Uložit chybu konzole a vizuální důkaz bez citlivých údajů.</li><li>Po opravě zopakovat všechny navazující scénáře.</li></ol>
<p>Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.</p>
<p>Scénáře spouštějte v čistém profilu prohlížeče a ve dvou rolích. Výsledek prošel povolte jen s ověřeným chováním uvnitř plátna i postranního panelu.</p>
<h2>Kde typicky vzniká chyba</h2>
<p>Nejčastější rizika jsou konkrétní:</p>
<ul><li>cache skryje starý skript</li><li>test vynechá ovládání klávesnicí</li><li>oprava plátna rozbije postranní panel</li></ul>
<p>Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.</p>
<h2>Praktický příklad</h2>
<p>Blok jde vložit myší, ale klávesnice ztratí fokus při otevření nastavení. Protokol zachytí přesný krok, roli, prohlížeč a výsledek po opravě.</p>
<p>Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.</p>
<h2>Jak využít nástroj A24 Iframe Eight</h2>
<p>Interaktivní protokol vede správce osmi kontrolami bloku a vytváří porovnatelný report před a po opravě. Minimální verze zahrnuje: osm scénářů, blok a verze, role administrátor a editor, očekávání, skutečnost, iframe kontext, klávesnice, focus, konzole, screenshot, závažnost, vlastník, retest a PDF JSON export.</p>
<p>Správce dostane reprodukovatelný test místo neurčitého pokynu zkontrolovat editor. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<p>Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.</p>
<h2>Jak poznat, že řešení funguje</h2>
<p>Hlavní metrika je: osm z osmi scénářů má důkaz, kritická selhání jsou nulová a blok je ovladatelný klávesnicí. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.</p>
<p>Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.</p>
<h2>Jak postup zavést do běžné praxe</h2>
<p>Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.</p>
<h2>Závěr</h2>
<p>Scénáře spouštějte v čistém profilu prohlížeče a ve dvou rolích. Výsledek prošel povolte jen s ověřeným chováním uvnitř plátna i postranního panelu. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.</p>

## Facebook text

Osm kontrol vlastního bloku ve vždy iframovaném editoru WordPressu

Osm kontrol pokryje vložení bloku, editaci, výběr, klávesnici, styly plátna, média, uložení a opětovné otevření. Každá kontrola má očekávaný výsledek a důkaz.

Scénáře spouštějte v čistém profilu prohlížeče a ve dvou rolích. Výsledek prošel povolte jen s ověřeným chováním uvnitř plátna i postranního panelu.

Praktická pomůcka: A24 Iframe Eight. Správce dostane reprodukovatelný test místo neurčitého pokynu zkontrolovat editor.

Více: https://agenda24.cz/

## LinkedIn text

Osm kontrol vlastního bloku ve vždy iframovaném editoru WordPressu

Pouhé načtení editoru neprokáže kompatibilitu. Chyba se často objeví až při změně výběru, přepnutí náhledu, opakované montáži komponenty nebo práci uživatele s jinou rolí.

Doporučený první krok: Vybrat nejpoužívanější vlastní bloky a reálný anonymní obsah.

A24 Iframe Eight: Interaktivní protokol vede správce osmi kontrolami bloku a vytváří porovnatelný report před a po opravě.

Správce dostane reprodukovatelný test místo neurčitého pokynu zkontrolovat editor.

https://agenda24.cz/

## Instagram caption

Osm kontrol vlastního bloku ve vždy iframovaném editoru WordPressu

Osm kontrol pokryje vložení bloku, editaci, výběr, klávesnici, styly plátna, média, uložení a opětovné otevření. Každá kontrola má očekávaný výsledek a důkaz.

✅ Vybrat nejpoužívanější vlastní bloky a reálný anonymní obsah.
✅ Zapsat očekávaný výsledek každého z osmi scénářů.
✅ Spustit test jako administrátor i editor.

Scénáře spouštějte v čistém profilu prohlížeče a ve dvou rolích. Výsledek prošel povolte jen s ověřeným chováním uvnitř plátna i postranního panelu.

https://agenda24.cz/

#Agenda24 #praktickytip #A24IframeEight

## Čistý publikační text pro Facebook

Osm kontrol vlastního bloku ve vždy iframovaném editoru WordPressu

Osm kontrol pokryje vložení bloku, editaci, výběr, klávesnici, styly plátna, média, uložení a opětovné otevření. Každá kontrola má očekávaný výsledek a důkaz.

Scénáře spouštějte v čistém profilu prohlížeče a ve dvou rolích. Výsledek prošel povolte jen s ověřeným chováním uvnitř plátna i postranního panelu.

Praktická pomůcka: A24 Iframe Eight. Správce dostane reprodukovatelný test místo neurčitého pokynu zkontrolovat editor.

Více: https://agenda24.cz/

## Čistý publikační text pro LinkedIn

Osm kontrol vlastního bloku ve vždy iframovaném editoru WordPressu

Pouhé načtení editoru neprokáže kompatibilitu. Chyba se často objeví až při změně výběru, přepnutí náhledu, opakované montáži komponenty nebo práci uživatele s jinou rolí.

Doporučený první krok: Vybrat nejpoužívanější vlastní bloky a reálný anonymní obsah.

A24 Iframe Eight: Interaktivní protokol vede správce osmi kontrolami bloku a vytváří porovnatelný report před a po opravě.

Správce dostane reprodukovatelný test místo neurčitého pokynu zkontrolovat editor.

https://agenda24.cz/

## Čistý publikační text pro Instagram

Osm kontrol vlastního bloku ve vždy iframovaném editoru WordPressu

Osm kontrol pokryje vložení bloku, editaci, výběr, klávesnici, styly plátna, média, uložení a opětovné otevření. Každá kontrola má očekávaný výsledek a důkaz.

✅ Vybrat nejpoužívanější vlastní bloky a reálný anonymní obsah.
✅ Zapsat očekávaný výsledek každého z osmi scénářů.
✅ Spustit test jako administrátor i editor.

Scénáře spouštějte v čistém profilu prohlížeče a ve dvou rolích. Výsledek prošel povolte jen s ověřeným chováním uvnitř plátna i postranního panelu.

https://agenda24.cz/

#Agenda24 #praktickytip #A24IframeEight

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** Osm kontrol vlastního bloku ve vždy iframovaném editoru WordPressu

**Scénář po sekundách:** 0–2 s výrazný hook; 2–7 s konkrétní situace; 7–10 s A24 Iframe Eight a CTA.

**Mluvený text:** Osm kontrol bloku: vložit, upravit, vybrat, ovládat, uložit a znovu otevřít.

**Text na obrazovku:** Osm kontrol vlastního bloku ve vždy iframovaném editoru WordPressu / A24 Iframe Eight / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte A24 Iframe Eight.

**Hashtagy:** #Agenda24 #praktickynavod #bezpecnypostup

**Cover:** Osm kontrol vlastního bloku ve vždy iframovaném editoru WordPressu

**Prompt pro Gemini Flow / Omni:** Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Osm kontrol bloku: vložit, upravit, vybrat, ovládat, uložit a znovu otevřít.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Iframe Eight a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## YouTube Shorts popisek

Osm kontrol pokryje vložení bloku, editaci, výběr, klávesnici, styly plátna, média, uložení a opětovné otevření. Každá kontrola má očekávaný výsledek a důkaz. Scénáře spouštějte v čistém profilu prohlížeče a ve dvou rolích. Výsledek prošel povolte jen s ověřeným chováním uvnitř plátna i postranního panelu. Více na https://agenda24.cz/

## Text do grafiky

Osm kontrol vlastního bloku ve vždy iframovaném editoru WordPressu

A24 Iframe Eight

## CTA

Otevřete Agenda24 a ověřte první konkrétní krok.

## Alt text

Osm kontrol vlastního bloku ve vždy iframovaném editoru WordPressu: názorné zobrazení konkrétního postupu a nástroje A24 Iframe Eight v souladu se značkou Agenda24.

## Prompt na obrázek

Prémiový realistický vizuál pro Agenda24 k tématu „Osm kontrol vlastního bloku ve vždy iframovaném editoru WordPressu“. Tmavé pozadí #030712 a #080B16, akcent #EC0044, bílá typografie, originální symbol 24 a Martin pouze podle uložených referencí. Čistá technická kompozice, žádná žlutá, zlatá ani oranžová, žádní roboti, žádný levný cyberpunk, žádné cizí logo.

## Reference k obrázku

Použij výhradně manifest značky agenda24 a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Osm kontrol bloku: vložit, upravit, vybrat, ovládat, uložit a znovu otevřít.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Iframe Eight a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## Reference k videu

Vizuální pravidla čti pouze z manifestu agenda24; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**A24 Iframe Eight** — Interaktivní protokol vede správce osmi kontrolami bloku a vytváří porovnatelný report před a po opravě.

Přínos: Správce dostane reprodukovatelný test místo neurčitého pokynu zkontrolovat editor.

## MVP verze

osm scénářů, blok a verze, role administrátor a editor, očekávání, skutečnost, iframe kontext, klávesnice, focus, konzole, screenshot, závažnost, vlastník, retest a PDF JSON export

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 Iframe Eight“ pro projekt Agenda24. Funkce: osm scénářů, blok a verze, role administrátor a editor, očekávání, skutečnost, iframe kontext, klávesnice, focus, konzole, screenshot, závažnost, vlastník, retest a PDF JSON export. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Správce dostane reprodukovatelný test místo neurčitého pokynu zkontrolovat editor. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci.

