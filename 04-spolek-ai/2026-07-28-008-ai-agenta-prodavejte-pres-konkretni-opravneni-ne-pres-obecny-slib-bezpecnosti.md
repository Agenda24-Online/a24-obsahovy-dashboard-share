---
title: "AI agenta prodávejte přes konkrétní oprávnění, ne přes obecný slib bezpečnosti"
date: 2026-07-28
project: "Spolek AI"
project_url: "https://spolek.ai/"
projects: ["Spolek AI"]
topic_type: "praktický tip"
usage_type: "blog, sociální sítě, video, nástroj"
priority: "vysoká"
status: "k rozpracování"
blog_potential: "vysoký"
social_potential: "vysoký"
recommended_output: "publikovatelný článek, sociální sada, 10s video a praktický nástroj"
brand: "spolek-ai"
tags: ["praktický tip", "Go-to-market AI služeb", "Agent Permission Sales Card"]
source_summary: "Google Security Blog – Going Beyond Zero: a new paradigm for enterprise security (27. 7. 2026)"
value_feature_type: "obchodní bezpečnostní karta"
value_feature_name: "Agent Permission Sales Card"
value_feature_summary: "Interaktivní karta převádí technická oprávnění agenta do srozumitelného obchodního důkazu pro kupující."
value_feature_benefit: "Dodavatel odpoví na nejčastější bezpečnostní otázky dříve a zvýší kvalitu poptávek."
value_feature_mvp: "výběr use case, zdroje, akce, role, schvalovací bod, zakázané operace, ukázka logu, verze produktu, kontaktní formulář a export pro nákupčí"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „Agent Permission Sales Card“ pro projekt Spolek AI. Funkce: výběr use case, zdroje, akce, role, schvalovací bod, zakázané operace, ukázka logu, verze produktu, kontaktní formulář a export pro nákupčí. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Dodavatel odpoví na nejčastější bezpečnostní otázky dříve a zvýší kvalitu poptávek. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace."
spolek_ai_area: "Go-to-market AI služeb"
---

## Shrnutí

Obchodní prezentace AI agenta má ukázat, ke kterým zdrojům přistupuje, jaké akce smí provést, kdy žádá o schválení a jak se dohledá rozhodnutí. To je srozumitelnější než neurčité tvrzení „enterprise secure“.

## Zdroje

- [Google Security Blog – Going Beyond Zero: a new paradigm for enterprise security (27. 7. 2026)](https://blog.google/security/going-beyond-zero-a-new-paradigm-for-enterprise-security/)

## Proč je to důležité

Kupující potřebuje rozhodnout o riziku a odpovědnosti. Přesná mapa oprávnění zkracuje bezpečnostní dotazník, odhalí nevhodný rozsah a dává prodejci důvěryhodný důkaz.

## Doporučení

Na produktové stránce zveřejněte jednu reprezentativní cestu agenta: vstup, přečtený zdroj, povolená akce, kontrola kontextu, případné schválení a auditní záznam.

## SEO titulek

AI agenta prodávejte přes konkrétní oprávnění, ne přes obecný slib bezpečnosti | Spolek AI

## Meta popis

Obchodní prezentace AI agenta má ukázat, ke kterým zdrojům přistupuje, jaké akce smí provést, kdy žádá o schválení a jak se dohledá rozhodnutí. To je srozu

## Perex

Obchodní prezentace AI agenta má ukázat, ke kterým zdrojům přistupuje, jaké akce smí provést, kdy žádá o schválení a jak se dohledá rozhodnutí. To je srozumitelnější než neurčité tvrzení „enterprise secure“. Na produktové stránce zveřejněte jednu reprezentativní cestu agenta: vstup, přečtený zdroj, povolená akce, kontrola kontextu, případné schválení a auditní záznam.

## Blogový titulek

AI agenta prodávejte přes konkrétní oprávnění, ne přes obecný slib bezpečnosti

## Osnova blogu

1. Co se změnilo a co z toho plyne
2. Proč nestačí obecné doporučení
3. Doporučený postup krok za krokem
4. Praktický příklad
5. Jak využít nástroj Agent Permission Sales Card
6. Jak poznat, že postup funguje
7. Závěr a další krok

## Blogový draft

# AI agenta prodávejte přes konkrétní oprávnění, ne přes obecný slib bezpečnosti

## Co se změnilo a co z toho plyne

Obchodní prezentace AI agenta má ukázat, ke kterým zdrojům přistupuje, jaké akce smí provést, kdy žádá o schválení a jak se dohledá rozhodnutí. To je srozumitelnější než neurčité tvrzení „enterprise secure“. Téma není jen technická poznámka. Pro tvůrci AI produktů, obchodní týmy a nákupčí jde o konkrétní rozhodnutí, které ovlivňuje bezpečnost, použitelnost a důvěru. Základní pravidlo zní: Na produktové stránce zveřejněte jednu reprezentativní cestu agenta: vstup, přečtený zdroj, povolená akce, kontrola kontextu, případné schválení a auditní záznam.

Oficiální zdroj potvrzuje tři podstatné body. Zaprvé: Autorizace na úrovni akce je pro kupujícího konkrétnější než přístup k celé aplikaci. Zadruhé: Dynamický kontext vysvětluje, proč stejná akce může být jednou povolena a jindy zadržena. Zatřetí: Auditní stopa spojuje bezpečnost s provozní odpovědností. Tyto body je potřeba číst společně. Samotná nová možnost nebo doporučení nepřináší výsledek, dokud není převedeno do jasného postupu, odpovědnosti a ověřitelné kontroly.

## Proč nestačí obecné doporučení

Kupující potřebuje rozhodnout o riziku a odpovědnosti. Přesná mapa oprávnění zkracuje bezpečnostní dotazník, odhalí nevhodný rozsah a dává prodejci důvěryhodný důkaz. Obecná věta typu „dávejte pozor“ nepomůže ve chvíli, kdy je třeba jednat. Použitelný postup musí říci, co se kontroluje, kdo kontrolu provede, kdy se má zastavit a jak se pozná, že je výsledek v pořádku. Právě proto má smysl spojit obsah s praktickým nástrojem Agent Permission Sales Card.

Nejčastější problémy jsou konkrétní: technická karta bude příliš složitá pro rozhodovatele; prodejní text zamlčí zakázané nebo podmíněné akce; a profil nebude aktualizován po změně produktu. Každý z nich lze zachytit předem, pokud je kontrola krátká, srozumitelná a opakovatelná. Cílem není přidat další administrativu. Cílem je zabránit situaci, kdy se důležitá podmínka řeší až ve chvíli, kdy už vznikl problém.

## Doporučený postup krok za krokem

1. **Vybrat jeden nejprodávanější scénář.**
2. **Přepsat oprávnění do jazyka výsledku a rizika.**
3. **Ukázat i zakázané akce.**
4. **Připojit verzi a datum kontroly.**
5. **Měřit vliv karty na kvalifikaci poptávky.**

Jednotlivé kroky mají být provedeny v uvedeném pořadí. Pokud některý z nich nelze potvrdit, je lepší plán upravit než pokračovat s nejasným rizikem. Výsledek kontroly má zůstat dohledatelný v rozsahu, který je pro dané téma přiměřený; není nutné ukládat citlivé údaje, které k rozhodnutí nejsou potřeba.

## Praktický příklad

Produkt pro přípravu nabídek ukáže, že agent čte jen schválenou složku, vytvoří návrh a nesmí jej odeslat bez potvrzení obchodníka. Na jednom obrázku je vidět i auditní záznam. Nákupčí tak nemusí domýšlet, zda agent automaticky komunikuje se zákazníkem.

Příklad ukazuje, že dobré řešení nemusí být složité. Rozhodující je včas zachytit konkrétní nesoulad a nabídnout bezpečnou další volbu. Stejný princip lze opakovat u dalších situací: nejprve popsat očekávaný stav, potom ověřit realitu, zaznamenat rozdíl a určit jediný další krok s vlastníkem.

## Jak využít nástroj Agent Permission Sales Card

Interaktivní karta převádí technická oprávnění agenta do srozumitelného obchodního důkazu pro kupující. Minimální verze zahrnuje: výběr use case, zdroje, akce, role, schvalovací bod, zakázané operace, ukázka logu, verze produktu, kontaktní formulář a export pro nákupčí. Nástroj má uživatele vést, nikoli za něj skrývat rozhodnutí. U každého výsledku proto zobrazí zdroj, datum, stav kontroly a srozumitelné vysvětlení.

Při návrhu je důležitá bezpečnost a přístupnost. Rozhraní musí fungovat na telefonu, klávesnicí i s asistivními technologiemi. Data se mají ukládat jen v nezbytném rozsahu, s jasnou dobou uchování a možností exportu nebo výmazu. Automatická oprava nebo rozhodnutí se nesmí spustit tam, kde je potřeba lidské potvrzení.

## Jak poznat, že postup funguje

Úspěch se neměří počtem vyplněných polí, ale výsledkem: kratší bezpečnostní část obchodního cyklu, vyšší podíl úplných poptávek a méně nejasností před pilotem. První kontrola vytvoří výchozí stav. Druhá ověří, zda se podařilo odstranit riziko a zda nový postup lidé skutečně používají. Pokud měření nevede k rozhodnutí, je příliš obecné.

Praktické je sledovat tři úrovně: úplnost vstupů, počet zachycených problémů předem a skutečnou změnu chování. Díky tomu se z jednorázového článku stane použitelný proces. Téma se má znovu otevřít při změně podmínek, nástroje, trasy, produktu nebo odpovědné osoby.

## Závěr

Na produktové stránce zveřejněte jednu reprezentativní cestu agenta: vstup, přečtený zdroj, povolená akce, kontrola kontextu, případné schválení a auditní záznam. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tak vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Vytvořte ověřitelný profil řešení a nabídněte jej v marketplace Spolek AI.

## Blog pro Enfold

<h1>AI agenta prodávejte přes konkrétní oprávnění, ne přes obecný slib bezpečnosti</h1>
<p class="perex">Obchodní prezentace AI agenta má ukázat, ke kterým zdrojům přistupuje, jaké akce smí provést, kdy žádá o schválení a jak se dohledá rozhodnutí. To je srozumitelnější než neurčité tvrzení „enterprise secure“.</p>
<h2>Co se změnilo a co z toho plyne</h2>
<p>Obchodní prezentace AI agenta má ukázat, ke kterým zdrojům přistupuje, jaké akce smí provést, kdy žádá o schválení a jak se dohledá rozhodnutí. To je srozumitelnější než neurčité tvrzení „enterprise secure“. Téma není jen technická poznámka. Pro tvůrci AI produktů, obchodní týmy a nákupčí jde o konkrétní rozhodnutí, které ovlivňuje bezpečnost, použitelnost a důvěru. Základní pravidlo zní: Na produktové stránce zveřejněte jednu reprezentativní cestu agenta: vstup, přečtený zdroj, povolená akce, kontrola kontextu, případné schválení a auditní záznam.</p>
<p>Oficiální zdroj potvrzuje tři podstatné body. Zaprvé: Autorizace na úrovni akce je pro kupujícího konkrétnější než přístup k celé aplikaci. Zadruhé: Dynamický kontext vysvětluje, proč stejná akce může být jednou povolena a jindy zadržena. Zatřetí: Auditní stopa spojuje bezpečnost s provozní odpovědností. Tyto body je potřeba číst společně. Samotná nová možnost nebo doporučení nepřináší výsledek, dokud není převedeno do jasného postupu, odpovědnosti a ověřitelné kontroly.</p>
<h2>Proč nestačí obecné doporučení</h2>
<p>Kupující potřebuje rozhodnout o riziku a odpovědnosti. Přesná mapa oprávnění zkracuje bezpečnostní dotazník, odhalí nevhodný rozsah a dává prodejci důvěryhodný důkaz. Obecná věta typu „dávejte pozor“ nepomůže ve chvíli, kdy je třeba jednat. Použitelný postup musí říci, co se kontroluje, kdo kontrolu provede, kdy se má zastavit a jak se pozná, že je výsledek v pořádku. Právě proto má smysl spojit obsah s praktickým nástrojem Agent Permission Sales Card.</p>
<p>Nejčastější problémy jsou konkrétní: technická karta bude příliš složitá pro rozhodovatele; prodejní text zamlčí zakázané nebo podmíněné akce; a profil nebude aktualizován po změně produktu. Každý z nich lze zachytit předem, pokud je kontrola krátká, srozumitelná a opakovatelná. Cílem není přidat další administrativu. Cílem je zabránit situaci, kdy se důležitá podmínka řeší až ve chvíli, kdy už vznikl problém.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol>
<li><strong>Vybrat jeden nejprodávanější scénář.</strong></li>
<li><strong>Přepsat oprávnění do jazyka výsledku a rizika.</strong></li>
<li><strong>Ukázat i zakázané akce.</strong></li>
<li><strong>Připojit verzi a datum kontroly.</strong></li>
<li><strong>Měřit vliv karty na kvalifikaci poptávky.</strong></li>
</ol>
<p>Jednotlivé kroky mají být provedeny v uvedeném pořadí. Pokud některý z nich nelze potvrdit, je lepší plán upravit než pokračovat s nejasným rizikem. Výsledek kontroly má zůstat dohledatelný v rozsahu, který je pro dané téma přiměřený; není nutné ukládat citlivé údaje, které k rozhodnutí nejsou potřeba.</p>
<h2>Praktický příklad</h2>
<p>Produkt pro přípravu nabídek ukáže, že agent čte jen schválenou složku, vytvoří návrh a nesmí jej odeslat bez potvrzení obchodníka. Na jednom obrázku je vidět i auditní záznam. Nákupčí tak nemusí domýšlet, zda agent automaticky komunikuje se zákazníkem.</p>
<p>Příklad ukazuje, že dobré řešení nemusí být složité. Rozhodující je včas zachytit konkrétní nesoulad a nabídnout bezpečnou další volbu. Stejný princip lze opakovat u dalších situací: nejprve popsat očekávaný stav, potom ověřit realitu, zaznamenat rozdíl a určit jediný další krok s vlastníkem.</p>
<h2>Jak využít nástroj Agent Permission Sales Card</h2>
<p>Interaktivní karta převádí technická oprávnění agenta do srozumitelného obchodního důkazu pro kupující. Minimální verze zahrnuje: výběr use case, zdroje, akce, role, schvalovací bod, zakázané operace, ukázka logu, verze produktu, kontaktní formulář a export pro nákupčí. Nástroj má uživatele vést, nikoli za něj skrývat rozhodnutí. U každého výsledku proto zobrazí zdroj, datum, stav kontroly a srozumitelné vysvětlení.</p>
<p>Při návrhu je důležitá bezpečnost a přístupnost. Rozhraní musí fungovat na telefonu, klávesnicí i s asistivními technologiemi. Data se mají ukládat jen v nezbytném rozsahu, s jasnou dobou uchování a možností exportu nebo výmazu. Automatická oprava nebo rozhodnutí se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<h2>Jak poznat, že postup funguje</h2>
<p>Úspěch se neměří počtem vyplněných polí, ale výsledkem: kratší bezpečnostní část obchodního cyklu, vyšší podíl úplných poptávek a méně nejasností před pilotem. První kontrola vytvoří výchozí stav. Druhá ověří, zda se podařilo odstranit riziko a zda nový postup lidé skutečně používají. Pokud měření nevede k rozhodnutí, je příliš obecné.</p>
<p>Praktické je sledovat tři úrovně: úplnost vstupů, počet zachycených problémů předem a skutečnou změnu chování. Díky tomu se z jednorázového článku stane použitelný proces. Téma se má znovu otevřít při změně podmínek, nástroje, trasy, produktu nebo odpovědné osoby.</p>
<h2>Závěr</h2>
<p>Na produktové stránce zveřejněte jednu reprezentativní cestu agenta: vstup, přečtený zdroj, povolená akce, kontrola kontextu, případné schválení a auditní záznam. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tak vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Vytvořte ověřitelný profil řešení a nabídněte jej v marketplace Spolek AI.</p>


## Facebook text

AI agenta prodávejte přes konkrétní oprávnění, ne přes obecný slib bezpečnosti

Obchodní prezentace AI agenta má ukázat, ke kterým zdrojům přistupuje, jaké akce smí provést, kdy žádá o schválení a jak se dohledá rozhodnutí. To je srozumitelnější než neurčité tvrzení „enterprise secure“.

Na produktové stránce zveřejněte jednu reprezentativní cestu agenta: vstup, přečtený zdroj, povolená akce, kontrola kontextu, případné schválení a auditní záznam.

Praktická pomůcka: Agent Permission Sales Card. Dodavatel odpoví na nejčastější bezpečnostní otázky dříve a zvýší kvalitu poptávek.

Zjistit více: https://spolek.ai/

## LinkedIn text

AI agenta prodávejte přes konkrétní oprávnění, ne přes obecný slib bezpečnosti

Kupující potřebuje rozhodnout o riziku a odpovědnosti. Přesná mapa oprávnění zkracuje bezpečnostní dotazník, odhalí nevhodný rozsah a dává prodejci důvěryhodný důkaz.

Doporučený první krok: vybrat jeden nejprodávanější scénář. Potom přepsat oprávnění do jazyka výsledku a rizika a výsledek zapsat tak, aby byl dohledatelný.

Agent Permission Sales Card: Interaktivní karta převádí technická oprávnění agenta do srozumitelného obchodního důkazu pro kupující.

Dodavatel odpoví na nejčastější bezpečnostní otázky dříve a zvýší kvalitu poptávek.

https://spolek.ai/

## Instagram caption

AI agenta prodávejte přes konkrétní oprávnění, ne přes obecný slib bezpečnosti

Obchodní prezentace AI agenta má ukázat, ke kterým zdrojům přistupuje, jaké akce smí provést, kdy žádá o schválení a jak se dohledá rozhodnutí. To je srozumitelnější než neurčité tvrzení „enterprise secure“.

✅ vybrat jeden nejprodávanější scénář
✅ přepsat oprávnění do jazyka výsledku a rizika
✅ ukázat i zakázané akce

Na produktové stránce zveřejněte jednu reprezentativní cestu agenta: vstup, přečtený zdroj, povolená akce, kontrola kontextu, případné schválení a auditní záznam.

https://spolek.ai/

#SpolekAI #praktickytip #AgentPermissionSalesCard

## Čistý publikační text pro Facebook

AI agenta prodávejte přes konkrétní oprávnění, ne přes obecný slib bezpečnosti

Obchodní prezentace AI agenta má ukázat, ke kterým zdrojům přistupuje, jaké akce smí provést, kdy žádá o schválení a jak se dohledá rozhodnutí. To je srozumitelnější než neurčité tvrzení „enterprise secure“.

Na produktové stránce zveřejněte jednu reprezentativní cestu agenta: vstup, přečtený zdroj, povolená akce, kontrola kontextu, případné schválení a auditní záznam.

Praktická pomůcka: Agent Permission Sales Card. Dodavatel odpoví na nejčastější bezpečnostní otázky dříve a zvýší kvalitu poptávek.

Zjistit více: https://spolek.ai/

## Čistý publikační text pro LinkedIn

AI agenta prodávejte přes konkrétní oprávnění, ne přes obecný slib bezpečnosti

Kupující potřebuje rozhodnout o riziku a odpovědnosti. Přesná mapa oprávnění zkracuje bezpečnostní dotazník, odhalí nevhodný rozsah a dává prodejci důvěryhodný důkaz.

Doporučený první krok: vybrat jeden nejprodávanější scénář. Potom přepsat oprávnění do jazyka výsledku a rizika a výsledek zapsat tak, aby byl dohledatelný.

Agent Permission Sales Card: Interaktivní karta převádí technická oprávnění agenta do srozumitelného obchodního důkazu pro kupující.

Dodavatel odpoví na nejčastější bezpečnostní otázky dříve a zvýší kvalitu poptávek.

https://spolek.ai/

## Čistý publikační text pro Instagram

AI agenta prodávejte přes konkrétní oprávnění, ne přes obecný slib bezpečnosti

Obchodní prezentace AI agenta má ukázat, ke kterým zdrojům přistupuje, jaké akce smí provést, kdy žádá o schválení a jak se dohledá rozhodnutí. To je srozumitelnější než neurčité tvrzení „enterprise secure“.

✅ vybrat jeden nejprodávanější scénář
✅ přepsat oprávnění do jazyka výsledku a rizika
✅ ukázat i zakázané akce

Na produktové stránce zveřejněte jednu reprezentativní cestu agenta: vstup, přečtený zdroj, povolená akce, kontrola kontextu, případné schválení a auditní záznam.

https://spolek.ai/

#SpolekAI #praktickytip #AgentPermissionSalesCard

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** AI agenta prodávejte přes konkrétní oprávnění, ne přes obecný slib bezpečnosti

**Scénář po sekundách:** 0–2 s výrazný detail a hook; 2–7 s Obchodní prezentace AI agenta má ukázat, ke kterým zdrojům přistupuje, jaké akce smí provést, kdy žádá o schválení a jak se dohledá rozhodnutí. To je srozumitelnější než neurčité tvrzení „enterprise secure“.; 7–10 s Agent Permission Sales Card a CTA.

**Mluvený text:** Bezpečný AI agent nemá přístup ke všemu. Ukažte konkrétní zdroj, akci, schválení a auditní stopu.

**Text na obrazovku:** AI agenta prodávejte přes konkrétní oprávnění, ne přes obecný slib bezpečnosti / Agent Permission Sales Card / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte Agent Permission Sales Card.

**Hashtagy:** #SpolekAI #praktickynavod #bezpecnypostup

**Cover:** AI agenta prodávejte přes konkrétní oprávnění, ne přes obecný slib bezpečnosti

**Prompt pro Gemini Flow / Omni:** Vytvoř jedno souvislé vertikální video 9:16 o délce přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Bezpečný AI agent nemá přístup ke všemu. Ukažte konkrétní zdroj, akci, schválení a auditní stopu.“ 0–2 s hook, 2–7 s konkrétní situace, 7–10 s vizuální pointa a CTA. Žádné useknuté věty, žádný další dialog, žádné automaticky generované logo ani drobný nečitelný text.

## YouTube Shorts popisek

Obchodní prezentace AI agenta má ukázat, ke kterým zdrojům přistupuje, jaké akce smí provést, kdy žádá o schválení a jak se dohledá rozhodnutí. To je srozumitelnější než neurčité tvrzení „enterprise secure“. Na produktové stránce zveřejněte jednu reprezentativní cestu agenta: vstup, přečtený zdroj, povolená akce, kontrola kontextu, případné schválení a auditní záznam. Více na https://spolek.ai/

## Text do grafiky

AI agenta prodávejte přes konkrétní oprávnění, ne přes obecný slib bezpečnosti

Agent Permission Sales Card

## CTA

Vytvořte ověřitelný profil svého AI řešení.

## Alt text

AI agenta prodávejte přes konkrétní oprávnění, ne přes obecný slib bezpečnosti: názorné zobrazení konkrétního postupu a nástroje Agent Permission Sales Card.

## Prompt na obrázek

Neutrální moderní B2B komunitní vizuál k tématu AI agenta prodávejte přes konkrétní oprávnění, ne přes obecný slib bezpečnosti: tým, procesní mapa a auditovatelná rozhodnutí, čistý světlý layout, bez loga Agenda24, bez Martina, bez robotů a falešných značek.

## Reference k obrázku

Použij výhradně manifest značky spolek-ai a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden český hlas. Scénář: 0–2 s hook; 2–7 s konkrétní důkaz; 7–10 s řešení Agent Permission Sales Card a CTA. Replika: „Bezpečný AI agent nemá přístup ke všemu. Ukažte konkrétní zdroj, akci, schválení a auditní stopu.“ Věta musí skončit nejpozději v 8. sekundě. Bez useknutí, bez dalšího dialogu, bez generovaných log.

## Reference k videu

Vizuální pravidla čti pouze z manifestu spolek-ai; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**Agent Permission Sales Card** — Interaktivní karta převádí technická oprávnění agenta do srozumitelného obchodního důkazu pro kupující.

Přínos: Dodavatel odpoví na nejčastější bezpečnostní otázky dříve a zvýší kvalitu poptávek.

## MVP verze

výběr use case, zdroje, akce, role, schvalovací bod, zakázané operace, ukázka logu, verze produktu, kontaktní formulář a export pro nákupčí

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „Agent Permission Sales Card“ pro projekt Spolek AI. Funkce: výběr use case, zdroje, akce, role, schvalovací bod, zakázané operace, ukázka logu, verze produktu, kontaktní formulář a export pro nákupčí. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Dodavatel odpoví na nejčastější bezpečnostní otázky dříve a zvýší kvalitu poptávek. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace.
