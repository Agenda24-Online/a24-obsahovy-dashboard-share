---
title: "A24 Media Upload Compatibility Lab pro bezpečný test WordPressu"
date: 2026-08-01
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
tags: ["tip na aplikaci", "Aplikace, pluginy a automatizace", "A24 Media Upload Compatibility Lab"]
source_summary: "WordPress News – WordPress 7.1 Beta 3 (22. 7. 2026)"
value_feature_type: "A24 WordPress plugin"
value_feature_name: "A24 Media Upload Compatibility Lab"
value_feature_summary: "Plugin provede kontrolované nahrání referenčních médií, porovná výsledek a vytvoří klientský protokol připravenosti."
value_feature_benefit: "Agenda24 bezpečně porovná mediální kompatibilitu spravovaných webů bez zásahu do produkčního obsahu."
value_feature_mvp: "česká administrace, read-only inventura prostředí, bezpečný referenční balíček, GIF EXIF JPEG HEIC, limity uploadu, počet příloh a mezisouborů, náhledy, responzivní kontrola, úklid testovacích dat, důkazy, role, audit, export a centrální licence Agenda24"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 Media Upload Compatibility Lab“ pro projekt Agenda24. Funkce: česká administrace, read-only inventura prostředí, bezpečný referenční balíček, GIF EXIF JPEG HEIC, limity uploadu, počet příloh a mezisouborů, náhledy, responzivní kontrola, úklid testovacích dat, důkazy, role, audit, export a centrální licence Agenda24. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Agenda24 bezpečně porovná mediální kompatibilitu spravovaných webů bez zásahu do produkčního obsahu. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci."
agenda24_area: "Aplikace, pluginy a automatizace"
---

## Shrnutí

A24 Media Upload Compatibility Lab je read-only testovací plugin a protokol pro staging. Připraví bezpečné scénáře, změří výsledek a po testu odstraní testovací přílohy; produkční média neupravuje.

## Zdroje

- [WordPress News – WordPress 7.1 Beta 3 (22. 7. 2026)](https://wordpress.org/news/2026/07/wordpress-7-1-beta-3/)

## Proč je to důležité

Při správě více webů se liší PHP knihovny, limity uploadu, pluginy optimalizace i redakční zařízení. Jednotná laboratoř umožní odhalit rozdíl bez plošných zásahů.

## Doporučení

MVP omezte na ručně spuštěný staging test s kontrolním balíčkem. Žádnou automatickou opravu médií ani hromadné mazání nezařazujte.

## SEO titulek

A24 Media Upload Compatibility Lab pro bezpečný test WordPressu | Agenda24

## Meta popis

A24 Media Upload Compatibility Lab je read-only testovací plugin a protokol pro staging. Připraví bezpečné scénáře, změří výsledek a po testu odstraní test

## Perex

A24 Media Upload Compatibility Lab je read-only testovací plugin a protokol pro staging. Připraví bezpečné scénáře, změří výsledek a po testu odstraní testovací přílohy; produkční média neupravuje. MVP omezte na ručně spuštěný staging test s kontrolním balíčkem. Žádnou automatickou opravu médií ani hromadné mazání nezařazujte.

## Blogový titulek

A24 Media Upload Compatibility Lab pro bezpečný test WordPressu

## Osnova blogu

1. Co je nové a co z toho plyne
2. Proč nestačí obecná rada
3. Doporučený postup krok za krokem
4. Kde typicky vzniká chyba
5. Praktický příklad
6. Jak využít nástroj A24 Media Upload Compatibility Lab
7. Jak poznat, že řešení funguje
8. Jak postup zavést do běžné praxe
9. Závěr

## Blogový draft

# A24 Media Upload Compatibility Lab pro bezpečný test WordPressu

## Co je nové a co z toho skutečně plyne

A24 Media Upload Compatibility Lab je read-only testovací plugin a protokol pro staging. Připraví bezpečné scénáře, změří výsledek a po testu odstraní testovací přílohy; produkční média neupravuje.

Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:

**1. WordPress 7.1 Beta 3 je určena výhradně k testování, nikoli pro produkční weby; finální vydání je plánované na 19. srpna 2026.**

**2. Beta 3 opravuje mimo jiné nahrávání dlouhých animovaných GIFů, otočení podle EXIF a duplicitní soubory při nahrávání HEIC.**

**3. Od Beta 1 bylo vyřešeno více než 71 problémů, proto je nutné testovat konkrétní mediální workflow na odděleném prostředí.**

Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.

## Proč nestačí obecná rada

Při správě více webů se liší PHP knihovny, limity uploadu, pluginy optimalizace i redakční zařízení. Jednotná laboratoř umožní odhalit rozdíl bez plošných zásahů.

Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Media Upload Compatibility Lab, který převádí doporučení do opakovatelného rozhodnutí.

Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.

## Doporučený postup krok za krokem

1. **Ověřit, že plugin běží na stagingu.**
2. **Načíst pouze technické parametry mediálního prostředí.**
3. **Spustit jednotlivé testy s potvrzením správce.**
4. **Porovnat výsledek a uložit protokol bez binárních souborů.**
5. **Bezpečně odstranit testovací přílohy a označit blokátory.**

Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.

MVP omezte na ručně spuštěný staging test s kontrolním balíčkem. Žádnou automatickou opravu médií ani hromadné mazání nezařazujte.

## Kde typicky vzniká chyba

Nejčastější rizika jsou konkrétní:

- plugin se spustí na produkci bez varování
- úklid zasáhne jinou než vlastní testovací přílohu
- neplatná licence zablokuje administraci nebo web

Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.

## Praktický příklad

Technik spustí laboratoř na stagingu tří klientských webů. Jeden web vytvoří druhou HEIC přílohu; zůstane blokovaný s technickým logem, zatímco ostatní získají schválený protokol.

Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.

## Jak využít nástroj A24 Media Upload Compatibility Lab

Plugin provede kontrolované nahrání referenčních médií, porovná výsledek a vytvoří klientský protokol připravenosti. Minimální verze zahrnuje: česká administrace, read-only inventura prostředí, bezpečný referenční balíček, GIF EXIF JPEG HEIC, limity uploadu, počet příloh a mezisouborů, náhledy, responzivní kontrola, úklid testovacích dat, důkazy, role, audit, export a centrální licence Agenda24.

Agenda24 bezpečně porovná mediální kompatibilitu spravovaných webů bez zásahu do produkčního obsahu. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.

Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.

## Jak poznat, že řešení funguje

Hlavní metrika je: každý testovací soubor je jednoznačně označen a odstraněn, žádné produkční médium se nezmění a licenční stav neovlivní dostupnost webu. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.

Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.

## Jak postup zavést do běžné praxe

Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.

## Závěr

MVP omezte na ručně spuštěný staging test s kontrolním balíčkem. Žádnou automatickou opravu médií ani hromadné mazání nezařazujte. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.

## Blog pro Enfold

<h1>A24 Media Upload Compatibility Lab pro bezpečný test WordPressu</h1>
<p class="perex">A24 Media Upload Compatibility Lab je read-only testovací plugin a protokol pro staging. Připraví bezpečné scénáře, změří výsledek a po testu odstraní testovací přílohy; produkční média neupravuje.</p>
<h2>Co je nové a co z toho skutečně plyne</h2>
<p>A24 Media Upload Compatibility Lab je read-only testovací plugin a protokol pro staging. Připraví bezpečné scénáře, změří výsledek a po testu odstraní testovací přílohy; produkční média neupravuje.</p>
<p>Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:</p>
<p><strong>1. WordPress 7.1 Beta 3 je určena výhradně k testování, nikoli pro produkční weby; finální vydání je plánované na 19. srpna 2026.</strong></p>
<p><strong>2. Beta 3 opravuje mimo jiné nahrávání dlouhých animovaných GIFů, otočení podle EXIF a duplicitní soubory při nahrávání HEIC.</strong></p>
<p><strong>3. Od Beta 1 bylo vyřešeno více než 71 problémů, proto je nutné testovat konkrétní mediální workflow na odděleném prostředí.</strong></p>
<p>Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.</p>
<h2>Proč nestačí obecná rada</h2>
<p>Při správě více webů se liší PHP knihovny, limity uploadu, pluginy optimalizace i redakční zařízení. Jednotná laboratoř umožní odhalit rozdíl bez plošných zásahů.</p>
<p>Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Media Upload Compatibility Lab, který převádí doporučení do opakovatelného rozhodnutí.</p>
<p>Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol><li>Ověřit, že plugin běží na stagingu.</li><li>Načíst pouze technické parametry mediálního prostředí.</li><li>Spustit jednotlivé testy s potvrzením správce.</li><li>Porovnat výsledek a uložit protokol bez binárních souborů.</li><li>Bezpečně odstranit testovací přílohy a označit blokátory.</li></ol>
<p>Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.</p>
<p>MVP omezte na ručně spuštěný staging test s kontrolním balíčkem. Žádnou automatickou opravu médií ani hromadné mazání nezařazujte.</p>
<h2>Kde typicky vzniká chyba</h2>
<p>Nejčastější rizika jsou konkrétní:</p>
<ul><li>plugin se spustí na produkci bez varování</li><li>úklid zasáhne jinou než vlastní testovací přílohu</li><li>neplatná licence zablokuje administraci nebo web</li></ul>
<p>Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.</p>
<h2>Praktický příklad</h2>
<p>Technik spustí laboratoř na stagingu tří klientských webů. Jeden web vytvoří druhou HEIC přílohu; zůstane blokovaný s technickým logem, zatímco ostatní získají schválený protokol.</p>
<p>Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.</p>
<h2>Jak využít nástroj A24 Media Upload Compatibility Lab</h2>
<p>Plugin provede kontrolované nahrání referenčních médií, porovná výsledek a vytvoří klientský protokol připravenosti. Minimální verze zahrnuje: česká administrace, read-only inventura prostředí, bezpečný referenční balíček, GIF EXIF JPEG HEIC, limity uploadu, počet příloh a mezisouborů, náhledy, responzivní kontrola, úklid testovacích dat, důkazy, role, audit, export a centrální licence Agenda24.</p>
<p>Agenda24 bezpečně porovná mediální kompatibilitu spravovaných webů bez zásahu do produkčního obsahu. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<p>Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.</p>
<h2>Jak poznat, že řešení funguje</h2>
<p>Hlavní metrika je: každý testovací soubor je jednoznačně označen a odstraněn, žádné produkční médium se nezmění a licenční stav neovlivní dostupnost webu. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.</p>
<p>Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.</p>
<h2>Jak postup zavést do běžné praxe</h2>
<p>Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.</p>
<h2>Závěr</h2>
<p>MVP omezte na ručně spuštěný staging test s kontrolním balíčkem. Žádnou automatickou opravu médií ani hromadné mazání nezařazujte. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.</p>

## Facebook text

A24 Media Upload Compatibility Lab pro bezpečný test WordPressu

A24 Media Upload Compatibility Lab je read-only testovací plugin a protokol pro staging. Připraví bezpečné scénáře, změří výsledek a po testu odstraní testovací přílohy; produkční média neupravuje.

MVP omezte na ručně spuštěný staging test s kontrolním balíčkem. Žádnou automatickou opravu médií ani hromadné mazání nezařazujte.

Praktická pomůcka: A24 Media Upload Compatibility Lab. Agenda24 bezpečně porovná mediální kompatibilitu spravovaných webů bez zásahu do produkčního obsahu.

Více: https://agenda24.cz/

## LinkedIn text

A24 Media Upload Compatibility Lab pro bezpečný test WordPressu

Při správě více webů se liší PHP knihovny, limity uploadu, pluginy optimalizace i redakční zařízení. Jednotná laboratoř umožní odhalit rozdíl bez plošných zásahů.

Doporučený první krok: Ověřit, že plugin běží na stagingu.

A24 Media Upload Compatibility Lab: Plugin provede kontrolované nahrání referenčních médií, porovná výsledek a vytvoří klientský protokol připravenosti.

Agenda24 bezpečně porovná mediální kompatibilitu spravovaných webů bez zásahu do produkčního obsahu.

https://agenda24.cz/

## Instagram caption

A24 Media Upload Compatibility Lab pro bezpečný test WordPressu

A24 Media Upload Compatibility Lab je read-only testovací plugin a protokol pro staging. Připraví bezpečné scénáře, změří výsledek a po testu odstraní testovací přílohy; produkční média neupravuje.

✅ Ověřit, že plugin běží na stagingu.
✅ Načíst pouze technické parametry mediálního prostředí.
✅ Spustit jednotlivé testy s potvrzením správce.

MVP omezte na ručně spuštěný staging test s kontrolním balíčkem. Žádnou automatickou opravu médií ani hromadné mazání nezařazujte.

https://agenda24.cz/

#Agenda24 #praktickytip #A24MediaUploadCompatibilityLab

## Čistý publikační text pro Facebook

A24 Media Upload Compatibility Lab pro bezpečný test WordPressu

A24 Media Upload Compatibility Lab je read-only testovací plugin a protokol pro staging. Připraví bezpečné scénáře, změří výsledek a po testu odstraní testovací přílohy; produkční média neupravuje.

MVP omezte na ručně spuštěný staging test s kontrolním balíčkem. Žádnou automatickou opravu médií ani hromadné mazání nezařazujte.

Praktická pomůcka: A24 Media Upload Compatibility Lab. Agenda24 bezpečně porovná mediální kompatibilitu spravovaných webů bez zásahu do produkčního obsahu.

Více: https://agenda24.cz/

## Čistý publikační text pro LinkedIn

A24 Media Upload Compatibility Lab pro bezpečný test WordPressu

Při správě více webů se liší PHP knihovny, limity uploadu, pluginy optimalizace i redakční zařízení. Jednotná laboratoř umožní odhalit rozdíl bez plošných zásahů.

Doporučený první krok: Ověřit, že plugin běží na stagingu.

A24 Media Upload Compatibility Lab: Plugin provede kontrolované nahrání referenčních médií, porovná výsledek a vytvoří klientský protokol připravenosti.

Agenda24 bezpečně porovná mediální kompatibilitu spravovaných webů bez zásahu do produkčního obsahu.

https://agenda24.cz/

## Čistý publikační text pro Instagram

A24 Media Upload Compatibility Lab pro bezpečný test WordPressu

A24 Media Upload Compatibility Lab je read-only testovací plugin a protokol pro staging. Připraví bezpečné scénáře, změří výsledek a po testu odstraní testovací přílohy; produkční média neupravuje.

✅ Ověřit, že plugin běží na stagingu.
✅ Načíst pouze technické parametry mediálního prostředí.
✅ Spustit jednotlivé testy s potvrzením správce.

MVP omezte na ručně spuštěný staging test s kontrolním balíčkem. Žádnou automatickou opravu médií ani hromadné mazání nezařazujte.

https://agenda24.cz/

#Agenda24 #praktickytip #A24MediaUploadCompatibilityLab

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** A24 Media Upload Compatibility Lab pro bezpečný test WordPressu

**Scénář po sekundách:** 0–2 s výrazný hook; 2–7 s konkrétní situace; 7–10 s A24 Media Upload Compatibility Lab a CTA.

**Mluvený text:** Bezpečná laboratoř odhalí mediální chybu dřív, než ji objeví redakce na produkci.

**Text na obrazovku:** A24 Media Upload Compatibility Lab pro bezpečný test WordPressu / A24 Media Upload Compatibility Lab / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte A24 Media Upload Compatibility Lab.

**Hashtagy:** #Agenda24 #praktickynavod #bezpecnypostup

**Cover:** A24 Media Upload Compatibility Lab pro bezpečný test WordPressu

**Prompt pro Gemini Flow / Omni:** Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Bezpečná laboratoř odhalí mediální chybu dřív, než ji objeví redakce na produkci.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Media Upload Compatibility Lab a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## YouTube Shorts popisek

A24 Media Upload Compatibility Lab je read-only testovací plugin a protokol pro staging. Připraví bezpečné scénáře, změří výsledek a po testu odstraní testovací přílohy; produkční média neupravuje. MVP omezte na ručně spuštěný staging test s kontrolním balíčkem. Žádnou automatickou opravu médií ani hromadné mazání nezařazujte. Více na https://agenda24.cz/

## Text do grafiky

A24 Media Upload Compatibility Lab pro bezpečný test WordPressu

A24 Media Upload Compatibility Lab

## CTA

Otevřete Agenda24 a ověřte první konkrétní krok.

## Alt text

A24 Media Upload Compatibility Lab pro bezpečný test WordPressu: názorné zobrazení konkrétního postupu a nástroje A24 Media Upload Compatibility Lab v souladu se značkou Agenda24.

## Prompt na obrázek

Prémiový realistický vizuál pro Agenda24 k tématu „A24 Media Upload Compatibility Lab pro bezpečný test WordPressu“. Tmavé pozadí #030712 a #080B16, akcent #EC0044, bílá typografie, originální symbol 24 a Martin pouze podle uložených referencí. Čistá technická kompozice, žádná žlutá, zlatá ani oranžová, žádní roboti, žádný levný cyberpunk, žádné cizí logo.

## Reference k obrázku

Použij výhradně manifest značky agenda24 a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Bezpečná laboratoř odhalí mediální chybu dřív, než ji objeví redakce na produkci.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Media Upload Compatibility Lab a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## Reference k videu

Vizuální pravidla čti pouze z manifestu agenda24; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**A24 Media Upload Compatibility Lab** — Plugin provede kontrolované nahrání referenčních médií, porovná výsledek a vytvoří klientský protokol připravenosti.

Přínos: Agenda24 bezpečně porovná mediální kompatibilitu spravovaných webů bez zásahu do produkčního obsahu.

## MVP verze

česká administrace, read-only inventura prostředí, bezpečný referenční balíček, GIF EXIF JPEG HEIC, limity uploadu, počet příloh a mezisouborů, náhledy, responzivní kontrola, úklid testovacích dat, důkazy, role, audit, export a centrální licence Agenda24

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 Media Upload Compatibility Lab“ pro projekt Agenda24. Funkce: česká administrace, read-only inventura prostředí, bezpečný referenční balíček, GIF EXIF JPEG HEIC, limity uploadu, počet příloh a mezisouborů, náhledy, responzivní kontrola, úklid testovacích dat, důkazy, role, audit, export a centrální licence Agenda24. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Agenda24 bezpečně porovná mediální kompatibilitu spravovaných webů bez zásahu do produkčního obsahu. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci.
