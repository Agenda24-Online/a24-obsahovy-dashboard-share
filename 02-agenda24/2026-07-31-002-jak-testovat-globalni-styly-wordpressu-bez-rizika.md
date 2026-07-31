---
title: "Jak testovat globální styly WordPressu bez rizika pro ostrý web"
date: 2026-07-31
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
tags: ["praktický tip", "Weby a e-shopy", "A24 Style Change Proof"]
source_summary: "WordPress Developer Resources – WordPress Playground for Everyone (aktualizováno 16. 7. 2026)"
value_feature_type: "vizuální testovací protokol"
value_feature_name: "A24 Style Change Proof"
value_feature_summary: "Protokol spojí referenční snímky, testovací URL, viewport, přístupnostní kontrolu a rozhodnutí nasadit či vrátit."
value_feature_benefit: "Změna stylu má doložený rozsah a klient ji může schválit před zásahem do ostrého webu."
value_feature_mvp: "testovací instance, seznam šablon, před/po snímky, viewporty, klávesnice, kontrast, formuláře, odchylka, schvalovatel, rollback a export protokolu"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 Style Change Proof“ pro projekt Agenda24. Funkce: testovací instance, seznam šablon, před/po snímky, viewporty, klávesnice, kontrast, formuláře, odchylka, schvalovatel, rollback a export protokolu. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Změna stylu má doložený rozsah a klient ji může schválit před zásahem do ostrého webu. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci."
agenda24_area: "Weby a e-shopy"
---

## Shrnutí

Bezpečný test odděluje pokus, důkaz a nasazení. WordPress Playground umožní připravit zkušební kopii, ověřit konkrétní změnu a výsledek uložit bez zásahu do produkce.

## Zdroje

- [WordPress Developer Resources – WordPress Playground for Everyone (aktualizováno 16. 7. 2026)](https://developer.wordpress.org/playground/handbook/guides/playground-for-everyone/)

## Proč je to důležité

Globální styl může změnit desítky stránek najednou. Kontrola jedné obrazovky nestačí, protože rozdíly se projeví v archivech, formulářích, mobilním menu nebo kombinaci vlastních bloků.

## Doporučení

Vyberte pět reprezentativních šablon, před změnou uložte referenční snímky a po změně porovnejte desktop, telefon, klávesnici a kontrast.

## SEO titulek

Jak testovat globální styly WordPressu bez rizika pro ostrý web | Agenda24

## Meta popis

Bezpečný test odděluje pokus, důkaz a nasazení. WordPress Playground umožní připravit zkušební kopii, ověřit konkrétní změnu a výsledek uložit bez zásahu d

## Perex

Bezpečný test odděluje pokus, důkaz a nasazení. WordPress Playground umožní připravit zkušební kopii, ověřit konkrétní změnu a výsledek uložit bez zásahu do produkce. Vyberte pět reprezentativních šablon, před změnou uložte referenční snímky a po změně porovnejte desktop, telefon, klávesnici a kontrast.

## Blogový titulek

Jak testovat globální styly WordPressu bez rizika pro ostrý web

## Osnova blogu

1. Co je nové a co z toho plyne
2. Proč nestačí obecná rada
3. Doporučený postup krok za krokem
4. Kde typicky vzniká chyba
5. Praktický příklad
6. Jak využít nástroj A24 Style Change Proof
7. Jak poznat, že řešení funguje
8. Jak postup zavést do běžné praxe
9. Závěr

## Blogový draft

# Jak testovat globální styly WordPressu bez rizika pro ostrý web

## Co je nové a co z toho skutečně plyne

Bezpečný test odděluje pokus, důkaz a nasazení. WordPress Playground umožní připravit zkušební kopii, ověřit konkrétní změnu a výsledek uložit bez zásahu do produkce.

Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:

**1. WordPress Playground umožňuje bezpečně zkoušet změny mimo produkční web.**

**2. Stav testovacího webu lze uložit v prohlížeči a vrátit se k němu přes jedinečný odkaz.**

**3. Celou instanci včetně pluginů, šablony a obsahu lze exportovat jako ZIP pro další testování.**

Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.

## Proč nestačí obecná rada

Globální styl může změnit desítky stránek najednou. Kontrola jedné obrazovky nestačí, protože rozdíly se projeví v archivech, formulářích, mobilním menu nebo kombinaci vlastních bloků.

Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Style Change Proof, který převádí doporučení do opakovatelného rozhodnutí.

Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.

## Doporučený postup krok za krokem

1. **Vybrat reprezentativní stránky a stavy komponent.**
2. **Uložit výchozí snímky a hodnoty stylů.**
3. **Provést jednu přesně vymezenou změnu.**
4. **Porovnat desktop, telefon, klávesnici a kontrast.**
5. **Schválit změnu nebo obnovit výchozí stav.**

Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.

Vyberte pět reprezentativních šablon, před změnou uložte referenční snímky a po změně porovnejte desktop, telefon, klávesnici a kontrast.

## Kde typicky vzniká chyba

Nejčastější rizika jsou konkrétní:

- testovací obsah neodpovídá reálné délce textů
- změna se hodnotí jen na široké obrazovce
- export testovacího webu obsahuje citlivá data

Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.

## Praktický příklad

Změna velikosti nadpisu se ověří na článku, archivu, produktu, formuláři a chybové stránce. Protokol zachytí přetečení dlouhého českého titulku na telefonu ještě před nasazením.

Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.

## Jak využít nástroj A24 Style Change Proof

Protokol spojí referenční snímky, testovací URL, viewport, přístupnostní kontrolu a rozhodnutí nasadit či vrátit. Minimální verze zahrnuje: testovací instance, seznam šablon, před/po snímky, viewporty, klávesnice, kontrast, formuláře, odchylka, schvalovatel, rollback a export protokolu.

Změna stylu má doložený rozsah a klient ji může schválit před zásahem do ostrého webu. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.

Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.

## Jak poznat, že řešení funguje

Hlavní metrika je: pět reprezentativních šablon projde na dvou viewportových šířkách, klávesnicí i kontrolou kontrastu a schválení má dohledatelný důkaz. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.

Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.

## Jak postup zavést do běžné praxe

Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.

## Závěr

Vyberte pět reprezentativních šablon, před změnou uložte referenční snímky a po změně porovnejte desktop, telefon, klávesnici a kontrast. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.

## Blog pro Enfold

<h1>Jak testovat globální styly WordPressu bez rizika pro ostrý web</h1>
<p class="perex">Bezpečný test odděluje pokus, důkaz a nasazení. WordPress Playground umožní připravit zkušební kopii, ověřit konkrétní změnu a výsledek uložit bez zásahu do produkce.</p>
<h2>Co je nové a co z toho skutečně plyne</h2>
<p>Bezpečný test odděluje pokus, důkaz a nasazení. WordPress Playground umožní připravit zkušební kopii, ověřit konkrétní změnu a výsledek uložit bez zásahu do produkce.</p>
<p>Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:</p>
<p><strong>1. WordPress Playground umožňuje bezpečně zkoušet změny mimo produkční web.</strong></p>
<p><strong>2. Stav testovacího webu lze uložit v prohlížeči a vrátit se k němu přes jedinečný odkaz.</strong></p>
<p><strong>3. Celou instanci včetně pluginů, šablony a obsahu lze exportovat jako ZIP pro další testování.</strong></p>
<p>Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.</p>
<h2>Proč nestačí obecná rada</h2>
<p>Globální styl může změnit desítky stránek najednou. Kontrola jedné obrazovky nestačí, protože rozdíly se projeví v archivech, formulářích, mobilním menu nebo kombinaci vlastních bloků.</p>
<p>Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Style Change Proof, který převádí doporučení do opakovatelného rozhodnutí.</p>
<p>Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol><li>Vybrat reprezentativní stránky a stavy komponent.</li><li>Uložit výchozí snímky a hodnoty stylů.</li><li>Provést jednu přesně vymezenou změnu.</li><li>Porovnat desktop, telefon, klávesnici a kontrast.</li><li>Schválit změnu nebo obnovit výchozí stav.</li></ol>
<p>Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.</p>
<p>Vyberte pět reprezentativních šablon, před změnou uložte referenční snímky a po změně porovnejte desktop, telefon, klávesnici a kontrast.</p>
<h2>Kde typicky vzniká chyba</h2>
<p>Nejčastější rizika jsou konkrétní:</p>
<ul><li>testovací obsah neodpovídá reálné délce textů</li><li>změna se hodnotí jen na široké obrazovce</li><li>export testovacího webu obsahuje citlivá data</li></ul>
<p>Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.</p>
<h2>Praktický příklad</h2>
<p>Změna velikosti nadpisu se ověří na článku, archivu, produktu, formuláři a chybové stránce. Protokol zachytí přetečení dlouhého českého titulku na telefonu ještě před nasazením.</p>
<p>Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.</p>
<h2>Jak využít nástroj A24 Style Change Proof</h2>
<p>Protokol spojí referenční snímky, testovací URL, viewport, přístupnostní kontrolu a rozhodnutí nasadit či vrátit. Minimální verze zahrnuje: testovací instance, seznam šablon, před/po snímky, viewporty, klávesnice, kontrast, formuláře, odchylka, schvalovatel, rollback a export protokolu.</p>
<p>Změna stylu má doložený rozsah a klient ji může schválit před zásahem do ostrého webu. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<p>Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.</p>
<h2>Jak poznat, že řešení funguje</h2>
<p>Hlavní metrika je: pět reprezentativních šablon projde na dvou viewportových šířkách, klávesnicí i kontrolou kontrastu a schválení má dohledatelný důkaz. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.</p>
<p>Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.</p>
<h2>Jak postup zavést do běžné praxe</h2>
<p>Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.</p>
<h2>Závěr</h2>
<p>Vyberte pět reprezentativních šablon, před změnou uložte referenční snímky a po změně porovnejte desktop, telefon, klávesnici a kontrast. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.</p>

## Facebook text

Jak testovat globální styly WordPressu bez rizika pro ostrý web

Bezpečný test odděluje pokus, důkaz a nasazení. WordPress Playground umožní připravit zkušební kopii, ověřit konkrétní změnu a výsledek uložit bez zásahu do produkce.

Vyberte pět reprezentativních šablon, před změnou uložte referenční snímky a po změně porovnejte desktop, telefon, klávesnici a kontrast.

Praktická pomůcka: A24 Style Change Proof. Změna stylu má doložený rozsah a klient ji může schválit před zásahem do ostrého webu.

Více: https://agenda24.cz/

## LinkedIn text

Jak testovat globální styly WordPressu bez rizika pro ostrý web

Globální styl může změnit desítky stránek najednou. Kontrola jedné obrazovky nestačí, protože rozdíly se projeví v archivech, formulářích, mobilním menu nebo kombinaci vlastních bloků.

Doporučený první krok: Vybrat reprezentativní stránky a stavy komponent.

A24 Style Change Proof: Protokol spojí referenční snímky, testovací URL, viewport, přístupnostní kontrolu a rozhodnutí nasadit či vrátit.

Změna stylu má doložený rozsah a klient ji může schválit před zásahem do ostrého webu.

https://agenda24.cz/

## Instagram caption

Jak testovat globální styly WordPressu bez rizika pro ostrý web

Bezpečný test odděluje pokus, důkaz a nasazení. WordPress Playground umožní připravit zkušební kopii, ověřit konkrétní změnu a výsledek uložit bez zásahu do produkce.

✅ Vybrat reprezentativní stránky a stavy komponent.
✅ Uložit výchozí snímky a hodnoty stylů.
✅ Provést jednu přesně vymezenou změnu.

Vyberte pět reprezentativních šablon, před změnou uložte referenční snímky a po změně porovnejte desktop, telefon, klávesnici a kontrast.

https://agenda24.cz/

#Agenda24 #praktickytip #A24StyleChangeProof

## Čistý publikační text pro Facebook

Jak testovat globální styly WordPressu bez rizika pro ostrý web

Bezpečný test odděluje pokus, důkaz a nasazení. WordPress Playground umožní připravit zkušební kopii, ověřit konkrétní změnu a výsledek uložit bez zásahu do produkce.

Vyberte pět reprezentativních šablon, před změnou uložte referenční snímky a po změně porovnejte desktop, telefon, klávesnici a kontrast.

Praktická pomůcka: A24 Style Change Proof. Změna stylu má doložený rozsah a klient ji může schválit před zásahem do ostrého webu.

Více: https://agenda24.cz/

## Čistý publikační text pro LinkedIn

Jak testovat globální styly WordPressu bez rizika pro ostrý web

Globální styl může změnit desítky stránek najednou. Kontrola jedné obrazovky nestačí, protože rozdíly se projeví v archivech, formulářích, mobilním menu nebo kombinaci vlastních bloků.

Doporučený první krok: Vybrat reprezentativní stránky a stavy komponent.

A24 Style Change Proof: Protokol spojí referenční snímky, testovací URL, viewport, přístupnostní kontrolu a rozhodnutí nasadit či vrátit.

Změna stylu má doložený rozsah a klient ji může schválit před zásahem do ostrého webu.

https://agenda24.cz/

## Čistý publikační text pro Instagram

Jak testovat globální styly WordPressu bez rizika pro ostrý web

Bezpečný test odděluje pokus, důkaz a nasazení. WordPress Playground umožní připravit zkušební kopii, ověřit konkrétní změnu a výsledek uložit bez zásahu do produkce.

✅ Vybrat reprezentativní stránky a stavy komponent.
✅ Uložit výchozí snímky a hodnoty stylů.
✅ Provést jednu přesně vymezenou změnu.

Vyberte pět reprezentativních šablon, před změnou uložte referenční snímky a po změně porovnejte desktop, telefon, klávesnici a kontrast.

https://agenda24.cz/

#Agenda24 #praktickytip #A24StyleChangeProof

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** Jak testovat globální styly WordPressu bez rizika pro ostrý web

**Scénář po sekundách:** 0–2 s výrazný hook; 2–7 s konkrétní situace; 7–10 s A24 Style Change Proof a CTA.

**Mluvený text:** Globální styl neměňte naslepo. Porovnejte pět šablon na počítači i telefonu.

**Text na obrazovku:** Jak testovat globální styly WordPressu bez rizika pro ostrý web / A24 Style Change Proof / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte A24 Style Change Proof.

**Hashtagy:** #Agenda24 #praktickynavod #bezpecnypostup

**Cover:** Jak testovat globální styly WordPressu bez rizika pro ostrý web

**Prompt pro Gemini Flow / Omni:** Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Globální styl neměňte naslepo. Porovnejte pět šablon na počítači i telefonu.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Style Change Proof a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## YouTube Shorts popisek

Bezpečný test odděluje pokus, důkaz a nasazení. WordPress Playground umožní připravit zkušební kopii, ověřit konkrétní změnu a výsledek uložit bez zásahu do produkce. Vyberte pět reprezentativních šablon, před změnou uložte referenční snímky a po změně porovnejte desktop, telefon, klávesnici a kontrast. Více na https://agenda24.cz/

## Text do grafiky

Jak testovat globální styly WordPressu bez rizika pro ostrý web

A24 Style Change Proof

## CTA

Otevřete Agenda24 a ověřte první konkrétní krok.

## Alt text

Jak testovat globální styly WordPressu bez rizika pro ostrý web: názorné zobrazení konkrétního postupu a nástroje A24 Style Change Proof v souladu se značkou Agenda24.

## Prompt na obrázek

Prémiový realistický vizuál pro Agenda24 k tématu „Jak testovat globální styly WordPressu bez rizika pro ostrý web“. Tmavé pozadí #030712 a #080B16, akcent #EC0044, bílá typografie, originální symbol 24 a Martin pouze podle uložených referencí. Čistá technická kompozice, žádná žlutá, zlatá ani oranžová, žádní roboti, žádný levný cyberpunk, žádné cizí logo.

## Reference k obrázku

Použij výhradně manifest značky agenda24 a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Globální styl neměňte naslepo. Porovnejte pět šablon na počítači i telefonu.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Style Change Proof a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## Reference k videu

Vizuální pravidla čti pouze z manifestu agenda24; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**A24 Style Change Proof** — Protokol spojí referenční snímky, testovací URL, viewport, přístupnostní kontrolu a rozhodnutí nasadit či vrátit.

Přínos: Změna stylu má doložený rozsah a klient ji může schválit před zásahem do ostrého webu.

## MVP verze

testovací instance, seznam šablon, před/po snímky, viewporty, klávesnice, kontrast, formuláře, odchylka, schvalovatel, rollback a export protokolu

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 Style Change Proof“ pro projekt Agenda24. Funkce: testovací instance, seznam šablon, před/po snímky, viewporty, klávesnice, kontrast, formuláře, odchylka, schvalovatel, rollback a export protokolu. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Změna stylu má doložený rozsah a klient ji může schválit před zásahem do ostrého webu. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci.
