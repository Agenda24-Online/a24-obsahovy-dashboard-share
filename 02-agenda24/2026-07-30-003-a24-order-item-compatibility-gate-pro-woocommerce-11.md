---
title: "A24 Order Item Compatibility Gate pro bezpečný přechod na WooCommerce 11.0"
date: 2026-07-30
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
tags: ["tip na aplikaci", "Aplikace, pluginy a automatizace", "A24 Order Item Compatibility Gate"]
source_summary: "WooCommerce Developer Blog – Updates to removed order items actions in WooCommerce 11.0 (29. 7. 2026)"
value_feature_type: "A24 WordPress/WooCommerce plugin"
value_feature_name: "A24 Order Item Compatibility Gate"
value_feature_summary: "Plugin eviduje verzi WooCommerce, dotčené hooky, staging scénáře, výsledky a blokátory nasazení pro každý spravovaný web."
value_feature_benefit: "Agenda24 získá jednotnou auditní stopu a nepustí hlavní aktualizaci na web s neověřenou závislostí."
value_feature_mvp: "read-only sken hooků, seznam rozšíření, verze WooCommerce, staging URL, scénáře remove/save, důkazy, blokátory, schvalovací role, historie, export, centrální licence Agenda24"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 Order Item Compatibility Gate“ pro projekt Agenda24. Funkce: read-only sken hooků, seznam rozšíření, verze WooCommerce, staging URL, scénáře remove/save, důkazy, blokátory, schvalovací role, historie, export, centrální licence Agenda24. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Agenda24 získá jednotnou auditní stopu a nepustí hlavní aktualizaci na web s neověřenou závislostí. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci."
agenda24_area: "Aplikace, pluginy a automatizace"
---

## Shrnutí

Navrhovaný plugin spojí inventuru hooků, staging test, důkazy a schválení do jedné brány. Neprovádí automatickou opravu kódu ani nezasahuje do objednávek.

## Zdroje

- [WooCommerce Developer Blog – Updates to removed order items actions in WooCommerce 11.0 (29. 7. 2026)](https://developer.woocommerce.com/2026/07/29/removed-order-items-actions/)

## Proč je to důležité

Agentura spravující více e-shopů potřebuje stejný rozhodovací proces pro každý web. Ruční poznámky se snadno ztratí a neukážou, který plugin byl testován proti které verzi.

## Doporučení

Postavte MVP jako read-only inventuru a schvalovací protokol. Aktivní zásahy do objednávek přidejte až po samostatném bezpečnostním návrhu a testech.

## SEO titulek

A24 Order Item Compatibility Gate pro bezpečný přechod na WooCommerce 11.0 | Agenda24

## Meta popis

Navrhovaný plugin spojí inventuru hooků, staging test, důkazy a schválení do jedné brány. Neprovádí automatickou opravu kódu ani nezasahuje do objednávek.

## Perex

Navrhovaný plugin spojí inventuru hooků, staging test, důkazy a schválení do jedné brány. Neprovádí automatickou opravu kódu ani nezasahuje do objednávek. Postavte MVP jako read-only inventuru a schvalovací protokol. Aktivní zásahy do objednávek přidejte až po samostatném bezpečnostním návrhu a testech.

## Blogový titulek

A24 Order Item Compatibility Gate pro bezpečný přechod na WooCommerce 11.0

## Osnova blogu

1. Co je nové a co z toho plyne
2. Proč nestačí obecná rada
3. Doporučený postup krok za krokem
4. Kde typicky vzniká chyba
5. Praktický příklad
6. Jak využít nástroj A24 Order Item Compatibility Gate
7. Jak poznat, že řešení funguje
8. Jak postup zavést do běžné praxe
9. Závěr

## Blogový draft

# A24 Order Item Compatibility Gate pro bezpečný přechod na WooCommerce 11.0

## Co je nové a co z toho skutečně plyne

Navrhovaný plugin spojí inventuru hooků, staging test, důkazy a schválení do jedné brány. Neprovádí automatickou opravu kódu ani nezasahuje do objednávek.

Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:

**1. Ve WooCommerce 11.0 se akce woocommerce_removed_order_items spouští až při následujícím save(), po dokončení databázového smazání.**

**2. Pre-hook woocommerce_remove_order_items zůstává synchronní na začátku remove_order_items().**

**3. Změna chrání objednávku při přerušeném resume flow, ale může ovlivnit rozšíření spoléhající na původní pořadí callbacků.**

Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.

## Proč nestačí obecná rada

Agentura spravující více e-shopů potřebuje stejný rozhodovací proces pro každý web. Ruční poznámky se snadno ztratí a neukážou, který plugin byl testován proti které verzi.

Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Order Item Compatibility Gate, který převádí doporučení do opakovatelného rozhodnutí.

Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.

## Doporučený postup krok za krokem

1. **Načíst pouze technická metadata webu a aktivních rozšíření.**
2. **Označit callbacky na dotčené hooky.**
3. **Přiřadit povinné staging scénáře.**
4. **Uložit důkaz a rozhodnutí opravit/schválit/blokovat.**
5. **Vygenerovat protokol pro klienta a plán nasazení.**

Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.

Postavte MVP jako read-only inventuru a schvalovací protokol. Aktivní zásahy do objednávek přidejte až po samostatném bezpečnostním návrhu a testech.

## Kde typicky vzniká chyba

Nejčastější rizika jsou konkrétní:

- automatický sken vyhodnotí dynamicky registrovaný hook jako bezpečný
- plugin získá zbytečně široká oprávnění
- neplatná licence zablokuje administraci nebo web

Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.

## Praktický příklad

Správce otevře seznam dvanácti klientských webů. U tří se objeví vlastní callback; dva projdou staging testem, třetí zůstane blokovaný s konkrétním vlastníkem opravy a termínem.

Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.

## Jak využít nástroj A24 Order Item Compatibility Gate

Plugin eviduje verzi WooCommerce, dotčené hooky, staging scénáře, výsledky a blokátory nasazení pro každý spravovaný web. Minimální verze zahrnuje: read-only sken hooků, seznam rozšíření, verze WooCommerce, staging URL, scénáře remove/save, důkazy, blokátory, schvalovací role, historie, export, centrální licence Agenda24.

Agenda24 získá jednotnou auditní stopu a nepustí hlavní aktualizaci na web s neověřenou závislostí. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.

Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.

## Jak poznat, že řešení funguje

Hlavní metrika je: 100 % spravovaných webů má stav, každý blokátor má vlastníka a žádná neplatná licence neomezuje provoz webu. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.

Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.

## Jak postup zavést do běžné praxe

Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.

## Závěr

Postavte MVP jako read-only inventuru a schvalovací protokol. Aktivní zásahy do objednávek přidejte až po samostatném bezpečnostním návrhu a testech. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.

## Blog pro Enfold

<h1>A24 Order Item Compatibility Gate pro bezpečný přechod na WooCommerce 11.0</h1>
<p class="perex">Navrhovaný plugin spojí inventuru hooků, staging test, důkazy a schválení do jedné brány. Neprovádí automatickou opravu kódu ani nezasahuje do objednávek.</p>
<h2>Co je nové a co z toho skutečně plyne</h2>
<p>Navrhovaný plugin spojí inventuru hooků, staging test, důkazy a schválení do jedné brány. Neprovádí automatickou opravu kódu ani nezasahuje do objednávek.</p>
<p>Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:</p>
<p><strong>1. Ve WooCommerce 11.0 se akce woocommerce_removed_order_items spouští až při následujícím save(), po dokončení databázového smazání.</strong></p>
<p><strong>2. Pre-hook woocommerce_remove_order_items zůstává synchronní na začátku remove_order_items().</strong></p>
<p><strong>3. Změna chrání objednávku při přerušeném resume flow, ale může ovlivnit rozšíření spoléhající na původní pořadí callbacků.</strong></p>
<p>Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Agenda24 proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.</p>
<h2>Proč nestačí obecná rada</h2>
<p>Agentura spravující více e-shopů potřebuje stejný rozhodovací proces pro každý web. Ruční poznámky se snadno ztratí a neukážou, který plugin byl testován proti které verzi.</p>
<p>Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj A24 Order Item Compatibility Gate, který převádí doporučení do opakovatelného rozhodnutí.</p>
<p>Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol><li>Načíst pouze technická metadata webu a aktivních rozšíření.</li><li>Označit callbacky na dotčené hooky.</li><li>Přiřadit povinné staging scénáře.</li><li>Uložit důkaz a rozhodnutí opravit/schválit/blokovat.</li><li>Vygenerovat protokol pro klienta a plán nasazení.</li></ol>
<p>Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.</p>
<p>Postavte MVP jako read-only inventuru a schvalovací protokol. Aktivní zásahy do objednávek přidejte až po samostatném bezpečnostním návrhu a testech.</p>
<h2>Kde typicky vzniká chyba</h2>
<p>Nejčastější rizika jsou konkrétní:</p>
<ul><li>automatický sken vyhodnotí dynamicky registrovaný hook jako bezpečný</li><li>plugin získá zbytečně široká oprávnění</li><li>neplatná licence zablokuje administraci nebo web</li></ul>
<p>Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.</p>
<h2>Praktický příklad</h2>
<p>Správce otevře seznam dvanácti klientských webů. U tří se objeví vlastní callback; dva projdou staging testem, třetí zůstane blokovaný s konkrétním vlastníkem opravy a termínem.</p>
<p>Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.</p>
<h2>Jak využít nástroj A24 Order Item Compatibility Gate</h2>
<p>Plugin eviduje verzi WooCommerce, dotčené hooky, staging scénáře, výsledky a blokátory nasazení pro každý spravovaný web. Minimální verze zahrnuje: read-only sken hooků, seznam rozšíření, verze WooCommerce, staging URL, scénáře remove/save, důkazy, blokátory, schvalovací role, historie, export, centrální licence Agenda24.</p>
<p>Agenda24 získá jednotnou auditní stopu a nepustí hlavní aktualizaci na web s neověřenou závislostí. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<p>Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.</p>
<h2>Jak poznat, že řešení funguje</h2>
<p>Hlavní metrika je: 100 % spravovaných webů má stav, každý blokátor má vlastníka a žádná neplatná licence neomezuje provoz webu. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.</p>
<p>Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.</p>
<h2>Jak postup zavést do běžné praxe</h2>
<p>Do běžné správy se kontrola zavede jako povinná položka před hlavní aktualizací, změnou integrace nebo nasazením vlastního pluginu. Každý klientský web má vlastní stav, odpovědnou osobu, datum testu a odkaz na důkaz. Výsledek se nepřenáší automaticky mezi weby, protože se liší verze, rozšíření i konfigurace. Blokátor musí být konkrétní: název komponenty, selhávající scénář, vlastník opravy a podmínka nového testu. Po nasazení následuje krátká produkční kontrola bez osobních údajů zákazníků. Teprve její výsledek uzavírá změnu a umožňuje protokol bezpečně předat klientovi.</p>
<h2>Závěr</h2>
<p>Postavte MVP jako read-only inventuru a schvalovací protokol. Aktivní zásahy do objednávek přidejte až po samostatném bezpečnostním návrhu a testech. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Nechte Agenda24 ověřit první konkrétní krok na vašem webu nebo e-shopu.</p>

## Facebook text

A24 Order Item Compatibility Gate pro bezpečný přechod na WooCommerce 11.0

Navrhovaný plugin spojí inventuru hooků, staging test, důkazy a schválení do jedné brány. Neprovádí automatickou opravu kódu ani nezasahuje do objednávek.

Postavte MVP jako read-only inventuru a schvalovací protokol. Aktivní zásahy do objednávek přidejte až po samostatném bezpečnostním návrhu a testech.

Praktická pomůcka: A24 Order Item Compatibility Gate. Agenda24 získá jednotnou auditní stopu a nepustí hlavní aktualizaci na web s neověřenou závislostí.

Více: https://agenda24.cz/

## LinkedIn text

A24 Order Item Compatibility Gate pro bezpečný přechod na WooCommerce 11.0

Agentura spravující více e-shopů potřebuje stejný rozhodovací proces pro každý web. Ruční poznámky se snadno ztratí a neukážou, který plugin byl testován proti které verzi.

Doporučený první krok: Načíst pouze technická metadata webu a aktivních rozšíření.

A24 Order Item Compatibility Gate: Plugin eviduje verzi WooCommerce, dotčené hooky, staging scénáře, výsledky a blokátory nasazení pro každý spravovaný web.

Agenda24 získá jednotnou auditní stopu a nepustí hlavní aktualizaci na web s neověřenou závislostí.

https://agenda24.cz/

## Instagram caption

A24 Order Item Compatibility Gate pro bezpečný přechod na WooCommerce 11.0

Navrhovaný plugin spojí inventuru hooků, staging test, důkazy a schválení do jedné brány. Neprovádí automatickou opravu kódu ani nezasahuje do objednávek.

✅ Načíst pouze technická metadata webu a aktivních rozšíření.
✅ Označit callbacky na dotčené hooky.
✅ Přiřadit povinné staging scénáře.

Postavte MVP jako read-only inventuru a schvalovací protokol. Aktivní zásahy do objednávek přidejte až po samostatném bezpečnostním návrhu a testech.

https://agenda24.cz/

#Agenda24 #praktickytip #A24OrderItemCompatibilityGate

## Čistý publikační text pro Facebook

A24 Order Item Compatibility Gate pro bezpečný přechod na WooCommerce 11.0

Navrhovaný plugin spojí inventuru hooků, staging test, důkazy a schválení do jedné brány. Neprovádí automatickou opravu kódu ani nezasahuje do objednávek.

Postavte MVP jako read-only inventuru a schvalovací protokol. Aktivní zásahy do objednávek přidejte až po samostatném bezpečnostním návrhu a testech.

Praktická pomůcka: A24 Order Item Compatibility Gate. Agenda24 získá jednotnou auditní stopu a nepustí hlavní aktualizaci na web s neověřenou závislostí.

Více: https://agenda24.cz/

## Čistý publikační text pro LinkedIn

A24 Order Item Compatibility Gate pro bezpečný přechod na WooCommerce 11.0

Agentura spravující více e-shopů potřebuje stejný rozhodovací proces pro každý web. Ruční poznámky se snadno ztratí a neukážou, který plugin byl testován proti které verzi.

Doporučený první krok: Načíst pouze technická metadata webu a aktivních rozšíření.

A24 Order Item Compatibility Gate: Plugin eviduje verzi WooCommerce, dotčené hooky, staging scénáře, výsledky a blokátory nasazení pro každý spravovaný web.

Agenda24 získá jednotnou auditní stopu a nepustí hlavní aktualizaci na web s neověřenou závislostí.

https://agenda24.cz/

## Čistý publikační text pro Instagram

A24 Order Item Compatibility Gate pro bezpečný přechod na WooCommerce 11.0

Navrhovaný plugin spojí inventuru hooků, staging test, důkazy a schválení do jedné brány. Neprovádí automatickou opravu kódu ani nezasahuje do objednávek.

✅ Načíst pouze technická metadata webu a aktivních rozšíření.
✅ Označit callbacky na dotčené hooky.
✅ Přiřadit povinné staging scénáře.

Postavte MVP jako read-only inventuru a schvalovací protokol. Aktivní zásahy do objednávek přidejte až po samostatném bezpečnostním návrhu a testech.

https://agenda24.cz/

#Agenda24 #praktickytip #A24OrderItemCompatibilityGate

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** A24 Order Item Compatibility Gate pro bezpečný přechod na WooCommerce 11.0

**Scénář po sekundách:** 0–2 s výrazný hook; 2–7 s konkrétní situace; 7–10 s A24 Order Item Compatibility Gate a CTA.

**Mluvený text:** Jedna brána, každý web, jasný důkaz. Aktualizace projde až po staging testu.

**Text na obrazovku:** A24 Order Item Compatibility Gate pro bezpečný přechod na WooCommerce 11.0 / A24 Order Item Compatibility Gate / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte A24 Order Item Compatibility Gate.

**Hashtagy:** #Agenda24 #praktickynavod #bezpecnypostup

**Cover:** A24 Order Item Compatibility Gate pro bezpečný přechod na WooCommerce 11.0

**Prompt pro Gemini Flow / Omni:** Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Jedna brána, každý web, jasný důkaz. Aktualizace projde až po staging testu.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Order Item Compatibility Gate a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## YouTube Shorts popisek

Navrhovaný plugin spojí inventuru hooků, staging test, důkazy a schválení do jedné brány. Neprovádí automatickou opravu kódu ani nezasahuje do objednávek. Postavte MVP jako read-only inventuru a schvalovací protokol. Aktivní zásahy do objednávek přidejte až po samostatném bezpečnostním návrhu a testech. Více na https://agenda24.cz/

## Text do grafiky

A24 Order Item Compatibility Gate pro bezpečný přechod na WooCommerce 11.0

A24 Order Item Compatibility Gate

## CTA

Otevřete Agenda24 a ověřte první konkrétní krok.

## Alt text

A24 Order Item Compatibility Gate pro bezpečný přechod na WooCommerce 11.0: názorné zobrazení konkrétního postupu a nástroje A24 Order Item Compatibility Gate v souladu se značkou Agenda24.

## Prompt na obrázek

Prémiový realistický vizuál pro Agenda24 k tématu „A24 Order Item Compatibility Gate pro bezpečný přechod na WooCommerce 11.0“. Tmavé pozadí #030712 a #080B16, akcent #EC0044, bílá typografie, originální symbol 24 a Martin pouze podle uložených referencí. Čistá technická kompozice, žádná žlutá, zlatá ani oranžová, žádní roboti, žádný levný cyberpunk, žádné cizí logo.

## Reference k obrázku

Použij výhradně manifest značky agenda24 a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Jedna brána, každý web, jasný důkaz. Aktualizace projde až po staging testu.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení A24 Order Item Compatibility Gate a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## Reference k videu

Vizuální pravidla čti pouze z manifestu agenda24; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**A24 Order Item Compatibility Gate** — Plugin eviduje verzi WooCommerce, dotčené hooky, staging scénáře, výsledky a blokátory nasazení pro každý spravovaný web.

Přínos: Agenda24 získá jednotnou auditní stopu a nepustí hlavní aktualizaci na web s neověřenou závislostí.

## MVP verze

read-only sken hooků, seznam rozšíření, verze WooCommerce, staging URL, scénáře remove/save, důkazy, blokátory, schvalovací role, historie, export, centrální licence Agenda24

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 Order Item Compatibility Gate“ pro projekt Agenda24. Funkce: read-only sken hooků, seznam rozšíření, verze WooCommerce, staging URL, scénáře remove/save, důkazy, blokátory, schvalovací role, historie, export, centrální licence Agenda24. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Agenda24 získá jednotnou auditní stopu a nepustí hlavní aktualizaci na web s neověřenou závislostí. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci.
