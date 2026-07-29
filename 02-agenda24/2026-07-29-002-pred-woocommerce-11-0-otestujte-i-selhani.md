---
title: "Před WooCommerce 11.0 otestujte i selhání, ne pouze úspěšnou objednávku"
date: 2026-07-29
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
tags: ["praktický tip", "Weby a e-shopy", "A24 Woo Failure Drill"]
source_summary: "WooCommerce Developer Blog – WooCommerce 11.0 release is delayed (28. 7. 2026); WooCommerce Developer Blog – WooCommerce 11.0 pre-release (13. 7. 2026)"
value_feature_type: "negativní testovací checklist"
value_feature_name: "A24 Woo Failure Drill"
value_feature_summary: "Checklist řídí negativní scénáře WooCommerce a porovnává očekávaný stav objednávky, skladu, platby, logu a administrace."
value_feature_benefit: "Správce předem zjistí, zda e-shop při chybě bezpečně zastaví operaci a zachová data i možnost nápravy."
value_feature_mvp: "katalog scénářů, očekávaný HTTP a Woo stav, test platby, webhooku, API a e-mailu, stav skladu, log, snímek, vlastník, blokátor nasazení a export protokolu"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „A24 Woo Failure Drill“ pro projekt Agenda24. Funkce: katalog scénářů, očekávaný HTTP a Woo stav, test platby, webhooku, API a e-mailu, stav skladu, log, snímek, vlastník, blokátor nasazení a export protokolu. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Správce předem zjistí, zda e-shop při chybě bezpečně zastaví operaci a zachová data i možnost nápravy. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci."
agenda24_area: "Weby a e-shopy"
---

## Shrnutí

Čistý průchod objednávkou nestačí. Před hlavní verzí WooCommerce ověřte neplatnou platbu, přerušenou pokladnu, nedostupné API, opakovaný webhook, návrat ze zálohy a dostupnost administrace.

## Zdroje

- [WooCommerce Developer Blog – WooCommerce 11.0 release is delayed (28. 7. 2026)](https://developer.woocommerce.com/2026/07/28/woocommerce-11-0-delay/)
- [WooCommerce Developer Blog – WooCommerce 11.0 pre-release (13. 7. 2026)](https://developer.woocommerce.com/2026/07/13/woocommerce-11-0-pre-release/)

## Proč je to důležité

Fatální chyba nalezená v RC1 připomíná, že riziko často vznikne až v okrajové kombinaci. Test má proto zahrnout řízené selhání a doložit, že web chybu bezpečně zachytí, nepoškodí objednávku a umožní správci zasáhnout.

## Doporučení

Na stagingu proveďte nejméně šest negativních scénářů. Každý musí mít očekávaný výsledek, vlastníka kontroly, záznam v logu a jasnou podmínku pro zastavení nasazení.

## SEO titulek

Před WooCommerce 11.0 otestujte i selhání, ne pouze úspěšnou objednávku | Agenda24

## Meta popis

Čistý průchod objednávkou nestačí. Před hlavní verzí WooCommerce ověřte neplatnou platbu, přerušenou pokladnu, nedostupné API, opakovaný webhook, návrat ze

## Perex

Čistý průchod objednávkou nestačí. Před hlavní verzí WooCommerce ověřte neplatnou platbu, přerušenou pokladnu, nedostupné API, opakovaný webhook, návrat ze zálohy a dostupnost administrace. Na stagingu proveďte nejméně šest negativních scénářů. Každý musí mít očekávaný výsledek, vlastníka kontroly, záznam v logu a jasnou podmínku pro zastavení nasazení.

## Blogový titulek

Před WooCommerce 11.0 otestujte i selhání, ne pouze úspěšnou objednávku

## Osnova blogu

1. Co se změnilo a co z toho plyne
2. Proč nestačí obecné doporučení
3. Doporučený postup krok za krokem
4. Praktický příklad
5. Jak využít nástroj A24 Woo Failure Drill
6. Jak poznat, že postup funguje
7. Závěr a další krok

## Blogový draft

# Před WooCommerce 11.0 otestujte i selhání, ne pouze úspěšnou objednávku

## Co se změnilo a co z toho plyne

Čistý průchod objednávkou nestačí. Před hlavní verzí WooCommerce ověřte neplatnou platbu, přerušenou pokladnu, nedostupné API, opakovaný webhook, návrat ze zálohy a dostupnost administrace. Téma není jen technická poznámka. Pro vývojáři, správci a majitelé WooCommerce e-shopů jde o konkrétní rozhodnutí, které ovlivňuje bezpečnost, použitelnost a důvěru. Základní pravidlo zní: Na stagingu proveďte nejméně šest negativních scénářů. Každý musí mít očekávaný výsledek, vlastníka kontroly, záznam v logu a jasnou podmínku pro zastavení nasazení.

Oficiální zdroj potvrzuje tři podstatné body. Zaprvé: WooCommerce odložilo hlavní vydání právě kvůli fatální chybě v určité kombinaci podmínek. Zadruhé: Další validační kolo má proběhnout nad RC2 před stabilním vydáním. Zatřetí: Pre-release verze je určena k testování, nikoli k nasazení na ostrý obchod. Tyto body je potřeba číst společně. Samotná nová možnost nebo doporučení nepřináší výsledek, dokud není převedeno do jasného postupu, odpovědnosti a ověřitelné kontroly.

## Proč nestačí obecné doporučení

Fatální chyba nalezená v RC1 připomíná, že riziko často vznikne až v okrajové kombinaci. Test má proto zahrnout řízené selhání a doložit, že web chybu bezpečně zachytí, nepoškodí objednávku a umožní správci zasáhnout. Obecná věta typu „dávejte pozor“ nepomůže ve chvíli, kdy je třeba jednat. Použitelný postup musí říci, co se kontroluje, kdo kontrolu provede, kdy se má zastavit a jak se pozná, že je výsledek v pořádku. Právě proto má smysl spojit obsah s praktickým nástrojem A24 Woo Failure Drill.

Nejčastější problémy jsou konkrétní: test pouze ideálního nákupu bez chybové větve; duplicitní nebo nedokončený stav objednávky po opakovaném webhooku; a nečitelný log bez vazby na konkrétní test. Každý z nich lze zachytit předem, pokud je kontrola krátká, srozumitelná a opakovatelná. Cílem není přidat další administrativu. Cílem je zabránit situaci, kdy se důležitá podmínka řeší až ve chvíli, kdy už vznikl problém.

## Doporučený postup krok za krokem

1. **Definovat očekávaný stav každého negativního scénáře.**
2. **Použít testovací platební prostředí a anonymizovaná data.**
3. **Simulovat výpadek API a opakovaný webhook.**
4. **Ověřit sklad, e-mail, log a dostupnost administrace.**
5. **Zastavit nasazení při každém nevysvětleném rozdílu.**

Jednotlivé kroky mají být provedeny v uvedeném pořadí. Pokud některý z nich nelze potvrdit, je lepší plán upravit než pokračovat s nejasným rizikem. Výsledek kontroly má zůstat dohledatelný v rozsahu, který je pro dané téma přiměřený; není nutné ukládat citlivé údaje, které k rozhodnutí nejsou potřeba.

## Praktický příklad

Tým odešle testovací platbu, přeruší návrat z brány a potom zopakuje webhook. Ověří, že vznikne jediná objednávka, sklad se odečte právě jednou a administrace zůstane dostupná. Pokud výsledek nesedí, aktualizace se neplánuje.

Příklad ukazuje, že dobré řešení nemusí být složité. Rozhodující je včas zachytit konkrétní nesoulad a nabídnout bezpečnou další volbu. Stejný princip lze opakovat u dalších situací: nejprve popsat očekávaný stav, potom ověřit realitu, zaznamenat rozdíl a určit jediný další krok s vlastníkem.

## Jak využít nástroj A24 Woo Failure Drill

Checklist řídí negativní scénáře WooCommerce a porovnává očekávaný stav objednávky, skladu, platby, logu a administrace. Minimální verze zahrnuje: katalog scénářů, očekávaný HTTP a Woo stav, test platby, webhooku, API a e-mailu, stav skladu, log, snímek, vlastník, blokátor nasazení a export protokolu. Nástroj má uživatele vést, nikoli za něj skrývat rozhodnutí. U každého výsledku proto zobrazí zdroj, datum, stav kontroly a srozumitelné vysvětlení.

Při návrhu je důležitá bezpečnost a přístupnost. Rozhraní musí fungovat na telefonu, klávesnicí i s asistivními technologiemi. Data se mají ukládat jen v nezbytném rozsahu, s jasnou dobou uchování a možností exportu nebo výmazu. Automatická oprava nebo rozhodnutí se nesmí spustit tam, kde je potřeba lidské potvrzení.

## Jak poznat, že postup funguje

Úspěch se neměří počtem vyplněných polí, ale výsledkem: všech šest negativních scénářů má očekávaný výsledek, jednoznačný log a nulové nevysvětlené změny objednávek nebo skladu. První kontrola vytvoří výchozí stav. Druhá ověří, zda se podařilo odstranit riziko a zda nový postup lidé skutečně používají. Pokud měření nevede k rozhodnutí, je příliš obecné.

Praktické je sledovat tři úrovně: úplnost vstupů, počet zachycených problémů předem a skutečnou změnu chování. Díky tomu se z jednorázového článku stane použitelný proces. Téma se má znovu otevřít při změně podmínek, nástroje, trasy, produktu nebo odpovědné osoby.

## Závěr

Na stagingu proveďte nejméně šest negativních scénářů. Každý musí mít očekávaný výsledek, vlastníka kontroly, záznam v logu a jasnou podmínku pro zastavení nasazení. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tak vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Nechte Agenda24 prověřit konkrétní web a připravit bezpečný přednasazovací postup.

## Blog pro Enfold

<h1>Před WooCommerce 11.0 otestujte i selhání, ne pouze úspěšnou objednávku</h1>
<p class="perex">Čistý průchod objednávkou nestačí. Před hlavní verzí WooCommerce ověřte neplatnou platbu, přerušenou pokladnu, nedostupné API, opakovaný webhook, návrat ze zálohy a dostupnost administrace.</p>
<h2>Co se změnilo a co z toho plyne</h2>
<p>Čistý průchod objednávkou nestačí. Před hlavní verzí WooCommerce ověřte neplatnou platbu, přerušenou pokladnu, nedostupné API, opakovaný webhook, návrat ze zálohy a dostupnost administrace. Téma není jen technická poznámka. Pro vývojáři, správci a majitelé WooCommerce e-shopů jde o konkrétní rozhodnutí, které ovlivňuje bezpečnost, použitelnost a důvěru. Základní pravidlo zní: Na stagingu proveďte nejméně šest negativních scénářů. Každý musí mít očekávaný výsledek, vlastníka kontroly, záznam v logu a jasnou podmínku pro zastavení nasazení.</p>
<p>Oficiální zdroj potvrzuje tři podstatné body. Zaprvé: WooCommerce odložilo hlavní vydání právě kvůli fatální chybě v určité kombinaci podmínek. Zadruhé: Další validační kolo má proběhnout nad RC2 před stabilním vydáním. Zatřetí: Pre-release verze je určena k testování, nikoli k nasazení na ostrý obchod. Tyto body je potřeba číst společně. Samotná nová možnost nebo doporučení nepřináší výsledek, dokud není převedeno do jasného postupu, odpovědnosti a ověřitelné kontroly.</p>
<h2>Proč nestačí obecné doporučení</h2>
<p>Fatální chyba nalezená v RC1 připomíná, že riziko často vznikne až v okrajové kombinaci. Test má proto zahrnout řízené selhání a doložit, že web chybu bezpečně zachytí, nepoškodí objednávku a umožní správci zasáhnout. Obecná věta typu „dávejte pozor“ nepomůže ve chvíli, kdy je třeba jednat. Použitelný postup musí říci, co se kontroluje, kdo kontrolu provede, kdy se má zastavit a jak se pozná, že je výsledek v pořádku. Právě proto má smysl spojit obsah s praktickým nástrojem A24 Woo Failure Drill.</p>
<p>Nejčastější problémy jsou konkrétní: test pouze ideálního nákupu bez chybové větve; duplicitní nebo nedokončený stav objednávky po opakovaném webhooku; a nečitelný log bez vazby na konkrétní test. Každý z nich lze zachytit předem, pokud je kontrola krátká, srozumitelná a opakovatelná. Cílem není přidat další administrativu. Cílem je zabránit situaci, kdy se důležitá podmínka řeší až ve chvíli, kdy už vznikl problém.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol>
<li><strong>Definovat očekávaný stav každého negativního scénáře.</strong></li>
<li><strong>Použít testovací platební prostředí a anonymizovaná data.</strong></li>
<li><strong>Simulovat výpadek API a opakovaný webhook.</strong></li>
<li><strong>Ověřit sklad, e-mail, log a dostupnost administrace.</strong></li>
<li><strong>Zastavit nasazení při každém nevysvětleném rozdílu.</strong></li>
</ol>
<p>Jednotlivé kroky mají být provedeny v uvedeném pořadí. Pokud některý z nich nelze potvrdit, je lepší plán upravit než pokračovat s nejasným rizikem. Výsledek kontroly má zůstat dohledatelný v rozsahu, který je pro dané téma přiměřený; není nutné ukládat citlivé údaje, které k rozhodnutí nejsou potřeba.</p>
<h2>Praktický příklad</h2>
<p>Tým odešle testovací platbu, přeruší návrat z brány a potom zopakuje webhook. Ověří, že vznikne jediná objednávka, sklad se odečte právě jednou a administrace zůstane dostupná. Pokud výsledek nesedí, aktualizace se neplánuje.</p>
<p>Příklad ukazuje, že dobré řešení nemusí být složité. Rozhodující je včas zachytit konkrétní nesoulad a nabídnout bezpečnou další volbu. Stejný princip lze opakovat u dalších situací: nejprve popsat očekávaný stav, potom ověřit realitu, zaznamenat rozdíl a určit jediný další krok s vlastníkem.</p>
<h2>Jak využít nástroj A24 Woo Failure Drill</h2>
<p>Checklist řídí negativní scénáře WooCommerce a porovnává očekávaný stav objednávky, skladu, platby, logu a administrace. Minimální verze zahrnuje: katalog scénářů, očekávaný HTTP a Woo stav, test platby, webhooku, API a e-mailu, stav skladu, log, snímek, vlastník, blokátor nasazení a export protokolu. Nástroj má uživatele vést, nikoli za něj skrývat rozhodnutí. U každého výsledku proto zobrazí zdroj, datum, stav kontroly a srozumitelné vysvětlení.</p>
<p>Při návrhu je důležitá bezpečnost a přístupnost. Rozhraní musí fungovat na telefonu, klávesnicí i s asistivními technologiemi. Data se mají ukládat jen v nezbytném rozsahu, s jasnou dobou uchování a možností exportu nebo výmazu. Automatická oprava nebo rozhodnutí se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<h2>Jak poznat, že postup funguje</h2>
<p>Úspěch se neměří počtem vyplněných polí, ale výsledkem: všech šest negativních scénářů má očekávaný výsledek, jednoznačný log a nulové nevysvětlené změny objednávek nebo skladu. První kontrola vytvoří výchozí stav. Druhá ověří, zda se podařilo odstranit riziko a zda nový postup lidé skutečně používají. Pokud měření nevede k rozhodnutí, je příliš obecné.</p>
<p>Praktické je sledovat tři úrovně: úplnost vstupů, počet zachycených problémů předem a skutečnou změnu chování. Díky tomu se z jednorázového článku stane použitelný proces. Téma se má znovu otevřít při změně podmínek, nástroje, trasy, produktu nebo odpovědné osoby.</p>
<h2>Závěr</h2>
<p>Na stagingu proveďte nejméně šest negativních scénářů. Každý musí mít očekávaný výsledek, vlastníka kontroly, záznam v logu a jasnou podmínku pro zastavení nasazení. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tak vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Nechte Agenda24 prověřit konkrétní web a připravit bezpečný přednasazovací postup.</p>


## Facebook text

Před WooCommerce 11.0 otestujte i selhání, ne pouze úspěšnou objednávku

Čistý průchod objednávkou nestačí. Před hlavní verzí WooCommerce ověřte neplatnou platbu, přerušenou pokladnu, nedostupné API, opakovaný webhook, návrat ze zálohy a dostupnost administrace.

Na stagingu proveďte nejméně šest negativních scénářů. Každý musí mít očekávaný výsledek, vlastníka kontroly, záznam v logu a jasnou podmínku pro zastavení nasazení.

Praktická pomůcka: A24 Woo Failure Drill. Správce předem zjistí, zda e-shop při chybě bezpečně zastaví operaci a zachová data i možnost nápravy.

Zjistit více: https://agenda24.cz/

## LinkedIn text

Před WooCommerce 11.0 otestujte i selhání, ne pouze úspěšnou objednávku

Fatální chyba nalezená v RC1 připomíná, že riziko často vznikne až v okrajové kombinaci. Test má proto zahrnout řízené selhání a doložit, že web chybu bezpečně zachytí, nepoškodí objednávku a umožní správci zasáhnout.

Doporučený první krok: definovat očekávaný stav každého negativního scénáře. Potom použít testovací platební prostředí a anonymizovaná data a výsledek zapsat tak, aby byl dohledatelný.

A24 Woo Failure Drill: Checklist řídí negativní scénáře WooCommerce a porovnává očekávaný stav objednávky, skladu, platby, logu a administrace.

Správce předem zjistí, zda e-shop při chybě bezpečně zastaví operaci a zachová data i možnost nápravy.

https://agenda24.cz/

## Instagram caption

Před WooCommerce 11.0 otestujte i selhání, ne pouze úspěšnou objednávku

Čistý průchod objednávkou nestačí. Před hlavní verzí WooCommerce ověřte neplatnou platbu, přerušenou pokladnu, nedostupné API, opakovaný webhook, návrat ze zálohy a dostupnost administrace.

✅ definovat očekávaný stav každého negativního scénáře
✅ použít testovací platební prostředí a anonymizovaná data
✅ simulovat výpadek API a opakovaný webhook

Na stagingu proveďte nejméně šest negativních scénářů. Každý musí mít očekávaný výsledek, vlastníka kontroly, záznam v logu a jasnou podmínku pro zastavení nasazení.

https://agenda24.cz/

#Agenda24 #praktickytip #A24WooFailureDrill

## Čistý publikační text pro Facebook

Před WooCommerce 11.0 otestujte i selhání, ne pouze úspěšnou objednávku

Čistý průchod objednávkou nestačí. Před hlavní verzí WooCommerce ověřte neplatnou platbu, přerušenou pokladnu, nedostupné API, opakovaný webhook, návrat ze zálohy a dostupnost administrace.

Na stagingu proveďte nejméně šest negativních scénářů. Každý musí mít očekávaný výsledek, vlastníka kontroly, záznam v logu a jasnou podmínku pro zastavení nasazení.

Praktická pomůcka: A24 Woo Failure Drill. Správce předem zjistí, zda e-shop při chybě bezpečně zastaví operaci a zachová data i možnost nápravy.

Zjistit více: https://agenda24.cz/

## Čistý publikační text pro LinkedIn

Před WooCommerce 11.0 otestujte i selhání, ne pouze úspěšnou objednávku

Fatální chyba nalezená v RC1 připomíná, že riziko často vznikne až v okrajové kombinaci. Test má proto zahrnout řízené selhání a doložit, že web chybu bezpečně zachytí, nepoškodí objednávku a umožní správci zasáhnout.

Doporučený první krok: definovat očekávaný stav každého negativního scénáře. Potom použít testovací platební prostředí a anonymizovaná data a výsledek zapsat tak, aby byl dohledatelný.

A24 Woo Failure Drill: Checklist řídí negativní scénáře WooCommerce a porovnává očekávaný stav objednávky, skladu, platby, logu a administrace.

Správce předem zjistí, zda e-shop při chybě bezpečně zastaví operaci a zachová data i možnost nápravy.

https://agenda24.cz/

## Čistý publikační text pro Instagram

Před WooCommerce 11.0 otestujte i selhání, ne pouze úspěšnou objednávku

Čistý průchod objednávkou nestačí. Před hlavní verzí WooCommerce ověřte neplatnou platbu, přerušenou pokladnu, nedostupné API, opakovaný webhook, návrat ze zálohy a dostupnost administrace.

✅ definovat očekávaný stav každého negativního scénáře
✅ použít testovací platební prostředí a anonymizovaná data
✅ simulovat výpadek API a opakovaný webhook

Na stagingu proveďte nejméně šest negativních scénářů. Každý musí mít očekávaný výsledek, vlastníka kontroly, záznam v logu a jasnou podmínku pro zastavení nasazení.

https://agenda24.cz/

#Agenda24 #praktickytip #A24WooFailureDrill

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** Před WooCommerce 11.0 otestujte i selhání, ne pouze úspěšnou objednávku

**Scénář po sekundách:** 0–2 s výrazný detail a hook; 2–7 s Čistý průchod objednávkou nestačí. Před hlavní verzí WooCommerce ověřte neplatnou platbu, přerušenou pokladnu, nedostupné API, opakovaný webhook, návrat ze zálohy a dostupnost administrace.; 7–10 s A24 Woo Failure Drill a CTA.

**Mluvený text:** Nový WordPress mění práci se styly. Zkontrolujte konkrétní blok, mobilní zobrazení a výsledek před nasazením.

**Text na obrazovku:** Před WooCommerce 11.0 otestujte i selhání, ne pouze úspěšnou objednávku / A24 Woo Failure Drill / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte A24 Woo Failure Drill.

**Hashtagy:** #Agenda24 #praktickynavod #bezpecnypostup

**Cover:** Před WooCommerce 11.0 otestujte i selhání, ne pouze úspěšnou objednávku

**Prompt pro Gemini Flow / Omni:** Vytvoř jedno souvislé vertikální video 9:16 o délce přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Nový WordPress mění práci se styly. Zkontrolujte konkrétní blok, mobilní zobrazení a výsledek před nasazením.“ 0–2 s hook, 2–7 s konkrétní situace, 7–10 s vizuální pointa a CTA. Žádné useknuté věty, žádný další dialog, žádné automaticky generované logo ani drobný nečitelný text.

## YouTube Shorts popisek

Čistý průchod objednávkou nestačí. Před hlavní verzí WooCommerce ověřte neplatnou platbu, přerušenou pokladnu, nedostupné API, opakovaný webhook, návrat ze zálohy a dostupnost administrace. Na stagingu proveďte nejméně šest negativních scénářů. Každý musí mít očekávaný výsledek, vlastníka kontroly, záznam v logu a jasnou podmínku pro zastavení nasazení. Více na https://agenda24.cz/

## Text do grafiky

Před WooCommerce 11.0 otestujte i selhání, ne pouze úspěšnou objednávku

A24 Woo Failure Drill

## CTA

Nechte Agenda24 prověřit konkrétní web.

## Alt text

Před WooCommerce 11.0 otestujte i selhání, ne pouze úspěšnou objednávku: názorné zobrazení konkrétního postupu a nástroje A24 Woo Failure Drill.

## Prompt na obrázek

Realistická profesionální kompozice pro Před WooCommerce 11.0 otestujte i selhání, ne pouze úspěšnou objednávku. Paleta #030712, #080B16 a #EC0044, tři vrstvy pozadí, přesný tematický motiv, dostatek místa pro českou typografii v postprodukci. Originální symbol 24 a fotografie Martina pouze jako samostatné vrstvy podle manifestu. Bez žluté, zlaté, oranžové, robotů, robotických rukou, kyborgů a levného cyberpunku.

## Reference k obrázku

Použij výhradně manifest značky agenda24 a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden český hlas. Scénář: 0–2 s hook; 2–7 s konkrétní důkaz; 7–10 s řešení A24 Woo Failure Drill a CTA. Replika: „Nový WordPress mění práci se styly. Zkontrolujte konkrétní blok, mobilní zobrazení a výsledek před nasazením.“ Věta musí skončit nejpozději v 8. sekundě. Bez useknutí, bez dalšího dialogu, bez generovaných log.

## Reference k videu

Vizuální pravidla čti pouze z manifestu agenda24; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**A24 Woo Failure Drill** — Checklist řídí negativní scénáře WooCommerce a porovnává očekávaný stav objednávky, skladu, platby, logu a administrace.

Přínos: Správce předem zjistí, zda e-shop při chybě bezpečně zastaví operaci a zachová data i možnost nápravy.

## MVP verze

katalog scénářů, očekávaný HTTP a Woo stav, test platby, webhooku, API a e-mailu, stav skladu, log, snímek, vlastník, blokátor nasazení a export protokolu

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „A24 Woo Failure Drill“ pro projekt Agenda24. Funkce: katalog scénářů, očekávaný HTTP a Woo stav, test platby, webhooku, API a e-mailu, stav skladu, log, snímek, vlastník, blokátor nasazení a export protokolu. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Správce předem zjistí, zda e-shop při chybě bezpečně zastaví operaci a zachová data i možnost nápravy. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace. Používej bezpečné API a minimální cílené zásahy; při zásahu do WooCommerce podporuj Blocks i klasickou pokladnu podle rozsahu. Integruj centrální licenci Agenda24 se stavy přesně „Licence aktivní“ a „Licence neaktivní“; neplatná licence ani výpadek licenčního serveru nesmí shodit web, poškodit data ani zablokovat administraci.
