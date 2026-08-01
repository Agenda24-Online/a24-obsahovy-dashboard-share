---
title: "Testovací matice médií před aktualizací WordPressu"
date: 2026-08-01
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
tags: ["praktický tip", "Weby a e-shopy", "A24 Media Proof Sheet"]
source_summary: "WordPress News – WordPress 7.1 Beta 3 (22. 7. 2026)"
value_feature_type: "testovací protokol"
value_feature_name: "A24 Media Proof Sheet"
value_feature_summary: "Protokol porovná očekávaný a skutečný výsledek pro každý formát, viewport a opakovaný upload."
value_feature_benefit: "Agentura získá krátký a opakovatelný důkaz, že aktualizace nezhoršila redakční práci ani veřejné zobrazení."
value_feature_mvp: "formát a původ souboru, bezpečná testovací data, očekávané rozměry a orientace, počet příloh, mezisoubory, animace, alt text, desktop a telefon, opakovaný upload, výsledek, důkaz, vlastník a export"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 Media Proof Sheet“ pro projekt Agenda24. Funkce: formát a původ souboru, bezpečná testovací data, očekávané rozměry a orientace, počet příloh, mezisoubory, animace, alt text, desktop a telefon, opakovaný upload, výsledek, důkaz, vlastník a export. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Agentura získá krátký a opakovatelný důkaz, že aktualizace nezhoršila redakční práci ani veřejné zobrazení. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci."
agenda24_area: "Weby a e-shopy"
---

## Shrnutí

Jedna zkušební fotografie neověří mediální knihovnu. Praktická matice kombinuje formát, velikost, metadata, opakovaný upload, editor a výsledné zobrazení.

## Zdroje

- [WordPress News – WordPress 7.1 Beta 3 (22. 7. 2026)](https://wordpress.org/news/2026/07/wordpress-7-1-beta-3/)

## Proč je to důležité

Web může soubor přijmout, ale chybně jej otočit, vytvořit duplicity, ztratit animaci nebo vygenerovat nefunkční variantu pro mobil. Bez předem daného očekávání je taková chyba snadno přehlédnutelná.

## Doporučení

Pro každý používaný formát stanovte očekávaný počet příloh, orientaci, animaci, rozměry a místo zobrazení. Test opakujte po aktualizaci WordPressu i knihovny pro práci s obrázky.

## SEO titulek

Testovací matice médií před aktualizací WordPressu | Agenda24

## Meta popis

Jedna zkušební fotografie neověří mediální knihovnu. Praktická matice kombinuje formát, velikost, metadata, opakovaný upload, editor a výsledné zobrazení.

## Perex

Jedna zkušební fotografie neověří mediální knihovnu. Praktická matice kombinuje formát, velikost, metadata, opakovaný upload, editor a výsledné zobrazení. Pro každý používaný formát stanovte očekávaný počet příloh, orientaci, animaci, rozměry a místo zobrazení. Test opakujte po aktualizaci WordPressu i knihovny pro práci s obrázky.

## Blogový titulek

Testovací matice médií před aktualizací WordPressu

## Osnova blogu

1. Co je nové a co z toho plyne
2. Proč nestačí obecná rada
3. Doporučený postup krok za krokem
4. Kde typicky vzniká chyba
5. Praktický příklad
6. Jak využít nástroj A24 Media Proof Sheet
7. Jak poznat, že řešení funguje
8. Jak postup zavést do běžné praxe
9. Závěr

## Blogový draft

# Testovací matice médií před aktualizací WordPressu

## Co je nové a co z toho skutečně plyne

Jedna zkušební fotografie neověří mediální knihovnu. Praktická matice kombinuje formát, velikost, metadata, opakovaný upload, editor a výsledné zobrazení.

Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:

**1. WordPress 7.1 Beta 3 je určena výhradně k testování, nikoli pro produkční weby; finální vydání je plánované na 19. srpna 2026.**

**2. Beta 3 opravuje mimo jiné nahrávání dlouhých animovaných GIFů, otočení podle EXIF a duplicitní soubory při nahrávání HEIC.**

**3. Od Beta 1 bylo vyřešeno více než 71 problémů, proto je nutné testovat konkrétní mediální workflow na odděleném prostředí.**

Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.

## Proč nestačí obecná rada

Web může soubor přijmout, ale chybně jej otočit, vytvořit duplicity, ztratit animaci nebo vygenerovat nefunkční variantu pro mobil. Bez předem daného očekávání je taková chyba snadno přehlédnutelná.

Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Media Proof Sheet, který převádí doporučení do opakovatelného rozhodnutí.

Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.

## Doporučený postup krok za krokem

1. **Sepsat formáty, které redakce skutečně používá.**
2. **Ke každému připravit bezpečný referenční soubor.**
3. **Stanovit očekávané chování před spuštěním testu.**
4. **Ověřit editor, knihovnu médií a veřejný web na dvou viewpor­tech.**
5. **Výsledek uložit k přesné verzi WordPressu a serveru.**

Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.

Pro každý používaný formát stanovte očekávaný počet příloh, orientaci, animaci, rozměry a místo zobrazení. Test opakujte po aktualizaci WordPressu i knihovny pro práci s obrázky.

## Kde typicky vzniká chyba

Nejčastější rizika jsou konkrétní:

- referenční sada nepokrývá soubory z používaných zařízení
- test ukládá původní EXIF s citlivou polohou
- výsledek se neváže ke konkrétní verzi serverové knihovny

Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.

## Praktický příklad

Matice má tři řádky: animovaný GIF, otočený JPEG s bezpečným EXIF a HEIC. U každého se kontroluje jedna příloha, správný náhled, alt text a stejné zobrazení na počítači a telefonu.

Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.

## Jak využít nástroj A24 Media Proof Sheet

Protokol porovná očekávaný a skutečný výsledek pro každý formát, viewport a opakovaný upload. Minimální verze zahrnuje: formát a původ souboru, bezpečná testovací data, očekávané rozměry a orientace, počet příloh, mezisoubory, animace, alt text, desktop a telefon, opakovaný upload, výsledek, důkaz, vlastník a export.

Agentura získá krátký a opakovatelný důkaz, že aktualizace nezhoršila redakční práci ani veřejné zobrazení. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.

Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.

## Jak poznat, že řešení funguje

Hlavní metrika je: 100 % používaných formátů má referenční soubor, očekávání a doložený výsledek na dvou viewpor­tech. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.

Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.

## Jak postup zavést do běžné praxe

Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.

## Závěr

Pro každý používaný formát stanovte očekávaný počet příloh, orientaci, animaci, rozměry a místo zobrazení. Test opakujte po aktualizaci WordPressu i knihovny pro práci s obrázky. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.

## Blog pro Enfold

<h1>Testovací matice médií před aktualizací WordPressu</h1>
<p class="perex">Jedna zkušební fotografie neověří mediální knihovnu. Praktická matice kombinuje formát, velikost, metadata, opakovaný upload, editor a výsledné zobrazení.</p>
<h2>Co je nové a co z toho skutečně plyne</h2>
<p>Jedna zkušební fotografie neověří mediální knihovnu. Praktická matice kombinuje formát, velikost, metadata, opakovaný upload, editor a výsledné zobrazení.</p>
<p>Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:</p>
<p><strong>1. WordPress 7.1 Beta 3 je určena výhradně k testování, nikoli pro produkční weby; finální vydání je plánované na 19. srpna 2026.</strong></p>
<p><strong>2. Beta 3 opravuje mimo jiné nahrávání dlouhých animovaných GIFů, otočení podle EXIF a duplicitní soubory při nahrávání HEIC.</strong></p>
<p><strong>3. Od Beta 1 bylo vyřešeno více než 71 problémů, proto je nutné testovat konkrétní mediální workflow na odděleném prostředí.</strong></p>
<p>Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.</p>
<h2>Proč nestačí obecná rada</h2>
<p>Web může soubor přijmout, ale chybně jej otočit, vytvořit duplicity, ztratit animaci nebo vygenerovat nefunkční variantu pro mobil. Bez předem daného očekávání je taková chyba snadno přehlédnutelná.</p>
<p>Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Media Proof Sheet, který převádí doporučení do opakovatelného rozhodnutí.</p>
<p>Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol><li>Sepsat formáty, které redakce skutečně používá.</li><li>Ke každému připravit bezpečný referenční soubor.</li><li>Stanovit očekávané chování před spuštěním testu.</li><li>Ověřit editor, knihovnu médií a veřejný web na dvou viewpor­tech.</li><li>Výsledek uložit k přesné verzi WordPressu a serveru.</li></ol>
<p>Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.</p>
<p>Pro každý používaný formát stanovte očekávaný počet příloh, orientaci, animaci, rozměry a místo zobrazení. Test opakujte po aktualizaci WordPressu i knihovny pro práci s obrázky.</p>
<h2>Kde typicky vzniká chyba</h2>
<p>Nejčastější rizika jsou konkrétní:</p>
<ul><li>referenční sada nepokrývá soubory z používaných zařízení</li><li>test ukládá původní EXIF s citlivou polohou</li><li>výsledek se neváže ke konkrétní verzi serverové knihovny</li></ul>
<p>Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.</p>
<h2>Praktický příklad</h2>
<p>Matice má tři řádky: animovaný GIF, otočený JPEG s bezpečným EXIF a HEIC. U každého se kontroluje jedna příloha, správný náhled, alt text a stejné zobrazení na počítači a telefonu.</p>
<p>Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.</p>
<h2>Jak využít nástroj A24 Media Proof Sheet</h2>
<p>Protokol porovná očekávaný a skutečný výsledek pro každý formát, viewport a opakovaný upload. Minimální verze zahrnuje: formát a původ souboru, bezpečná testovací data, očekávané rozměry a orientace, počet příloh, mezisoubory, animace, alt text, desktop a telefon, opakovaný upload, výsledek, důkaz, vlastník a export.</p>
<p>Agentura získá krátký a opakovatelný důkaz, že aktualizace nezhoršila redakční práci ani veřejné zobrazení. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<p>Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.</p>
<h2>Jak poznat, že řešení funguje</h2>
<p>Hlavní metrika je: 100 % používaných formátů má referenční soubor, očekávání a doložený výsledek na dvou viewpor­tech. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.</p>
<p>Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.</p>
<h2>Jak postup zavést do běžné praxe</h2>
<p>Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.</p>
<h2>Závěr</h2>
<p>Pro každý používaný formát stanovte očekávaný počet příloh, orientaci, animaci, rozměry a místo zobrazení. Test opakujte po aktualizaci WordPressu i knihovny pro práci s obrázky. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.</p>

## Facebook text

Testovací matice médií před aktualizací WordPressu

Jedna zkušební fotografie neověří mediální knihovnu. Praktická matice kombinuje formát, velikost, metadata, opakovaný upload, editor a výsledné zobrazení.

Pro každý používaný formát stanovte očekávaný počet příloh, orientaci, animaci, rozměry a místo zobrazení. Test opakujte po aktualizaci WordPressu i knihovny pro práci s obrázky.

Praktická pomůcka: A24 Media Proof Sheet. Agentura získá krátký a opakovatelný důkaz, že aktualizace nezhoršila redakční práci ani veřejné zobrazení.

Více: https://agenda24.cz/

## LinkedIn text

Testovací matice médií před aktualizací WordPressu

Web může soubor přijmout, ale chybně jej otočit, vytvořit duplicity, ztratit animaci nebo vygenerovat nefunkční variantu pro mobil. Bez předem daného očekávání je taková chyba snadno přehlédnutelná.

Doporučený první krok: Sepsat formáty, které redakce skutečně používá.

A24 Media Proof Sheet: Protokol porovná očekávaný a skutečný výsledek pro každý formát, viewport a opakovaný upload.

Agentura získá krátký a opakovatelný důkaz, že aktualizace nezhoršila redakční práci ani veřejné zobrazení.

https://agenda24.cz/

## Instagram caption

Testovací matice médií před aktualizací WordPressu

Jedna zkušební fotografie neověří mediální knihovnu. Praktická matice kombinuje formát, velikost, metadata, opakovaný upload, editor a výsledné zobrazení.

✅ Sepsat formáty, které redakce skutečně používá.
✅ Ke každému připravit bezpečný referenční soubor.
✅ Stanovit očekávané chování před spuštěním testu.

Pro každý používaný formát stanovte očekávaný počet příloh, orientaci, animaci, rozměry a místo zobrazení. Test opakujte po aktualizaci WordPressu i knihovny pro práci s obrázky.

https://agenda24.cz/

#Agenda24 #praktickytip #A24MediaProofSheet

## Čistý publikační text pro Facebook

Testovací matice médií před aktualizací WordPressu

Jedna zkušební fotografie neověří mediální knihovnu. Praktická matice kombinuje formát, velikost, metadata, opakovaný upload, editor a výsledné zobrazení.

Pro každý používaný formát stanovte očekávaný počet příloh, orientaci, animaci, rozměry a místo zobrazení. Test opakujte po aktualizaci WordPressu i knihovny pro práci s obrázky.

Praktická pomůcka: A24 Media Proof Sheet. Agentura získá krátký a opakovatelný důkaz, že aktualizace nezhoršila redakční práci ani veřejné zobrazení.

Více: https://agenda24.cz/

## Čistý publikační text pro LinkedIn

Testovací matice médií před aktualizací WordPressu

Web může soubor přijmout, ale chybně jej otočit, vytvořit duplicity, ztratit animaci nebo vygenerovat nefunkční variantu pro mobil. Bez předem daného očekávání je taková chyba snadno přehlédnutelná.

Doporučený první krok: Sepsat formáty, které redakce skutečně používá.

A24 Media Proof Sheet: Protokol porovná očekávaný a skutečný výsledek pro každý formát, viewport a opakovaný upload.

Agentura získá krátký a opakovatelný důkaz, že aktualizace nezhoršila redakční práci ani veřejné zobrazení.

https://agenda24.cz/

## Čistý publikační text pro Instagram

Testovací matice médií před aktualizací WordPressu

Jedna zkušební fotografie neověří mediální knihovnu. Praktická matice kombinuje formát, velikost, metadata, opakovaný upload, editor a výsledné zobrazení.

✅ Sepsat formáty, které redakce skutečně používá.
✅ Ke každému připravit bezpečný referenční soubor.
✅ Stanovit očekávané chování před spuštěním testu.

Pro každý používaný formát stanovte očekávaný počet příloh, orientaci, animaci, rozměry a místo zobrazení. Test opakujte po aktualizaci WordPressu i knihovny pro práci s obrázky.

https://agenda24.cz/

#Agenda24 #praktickytip #A24MediaProofSheet

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** Testovací matice médií před aktualizací WordPressu

**Scénář po sekundách:** 0–2 s výrazný hook; 2–7 s konkrétní situace; 7–10 s A24 Media Proof Sheet a CTA.

**Mluvený text:** Jeden obrázek nestačí. Ověřte formát, metadata, duplicitu, editor i mobilní výsledek.

**Text na obrazovku:** Testovací matice médií před aktualizací WordPressu / A24 Media Proof Sheet / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte A24 Media Proof Sheet.

**Hashtagy:** #Agenda24 #praktickynavod #bezpecnypostup

**Cover:** Testovací matice médií před aktualizací WordPressu

**Prompt pro Gemini Flow / Omni:** Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Jeden obrázek nestačí. Ověřte formát, metadata, duplicitu, editor i mobilní výsledek.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Media Proof Sheet a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## YouTube Shorts popisek

Jedna zkušební fotografie neověří mediální knihovnu. Praktická matice kombinuje formát, velikost, metadata, opakovaný upload, editor a výsledné zobrazení. Pro každý používaný formát stanovte očekávaný počet příloh, orientaci, animaci, rozměry a místo zobrazení. Test opakujte po aktualizaci WordPressu i knihovny pro práci s obrázky. Více na https://agenda24.cz/

## Text do grafiky

Testovací matice médií před aktualizací WordPressu

A24 Media Proof Sheet

## CTA

Otevřete Agenda24 a ověřte první konkrétní krok.

## Alt text

Testovací matice médií před aktualizací WordPressu: názorné zobrazení konkrétního postupu a nástroje A24 Media Proof Sheet v souladu se značkou Agenda24.

## Prompt na obrázek

Prémiový realistický vizuál pro Agenda24 k tématu „Testovací matice médií před aktualizací WordPressu“. Tmavé pozadí #030712 a #080B16, akcent #EC0044, bílá typografie, originální symbol 24 a Martin pouze podle uložených referencí. Čistá technická kompozice, žádná žlutá, zlatá ani oranžová, žádní roboti, žádný levný cyberpunk, žádné cizí logo.

## Reference k obrázku

Použij výhradně manifest značky agenda24 a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Jeden obrázek nestačí. Ověřte formát, metadata, duplicitu, editor i mobilní výsledek.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Media Proof Sheet a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## Reference k videu

Vizuální pravidla čti pouze z manifestu agenda24; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**A24 Media Proof Sheet** — Protokol porovná očekávaný a skutečný výsledek pro každý formát, viewport a opakovaný upload.

Přínos: Agentura získá krátký a opakovatelný důkaz, že aktualizace nezhoršila redakční práci ani veřejné zobrazení.

## MVP verze

formát a původ souboru, bezpečná testovací data, očekávané rozměry a orientace, počet příloh, mezisoubory, animace, alt text, desktop a telefon, opakovaný upload, výsledek, důkaz, vlastník a export

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 Media Proof Sheet“ pro projekt Agenda24. Funkce: formát a původ souboru, bezpečná testovací data, očekávané rozměry a orientace, počet příloh, mezisoubory, animace, alt text, desktop a telefon, opakovaný upload, výsledek, důkaz, vlastník a export. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Agentura získá krátký a opakovatelný důkaz, že aktualizace nezhoršila redakční práci ani veřejné zobrazení. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci.
