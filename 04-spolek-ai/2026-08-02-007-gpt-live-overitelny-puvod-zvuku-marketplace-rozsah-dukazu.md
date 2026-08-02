---
title: "GPT-Live přidává ověřitelný původ zvuku: marketplace musí ukázat rozsah důkazu"
date: 2026-08-02
project: "Spolek AI"
project_url: "https://spolek.ai/"
projects: ["Spolek AI"]
topic_type: "novinka"
usage_type: "blog, sociální sítě, video, nástroj"
priority: "vysoká"
status: "k rozpracování"
blog_potential: "vysoký"
social_potential: "vysoký"
recommended_output: "publikovatelný článek, sociální sada, 10s video a praktický nástroj"
brand: "spolek-ai"
tags: ["novinka", "Marketplace a důvěryhodnost", "Audio Provenance Evidence Card"]
source_summary: "OpenAI – Introducing GPT-Live, aktualizace 31. 7. 2026"
value_feature_type: "marketplace důkazní profil"
value_feature_name: "Audio Provenance Evidence Card"
value_feature_summary: "Karta spojí hlasovou službu s ověřovacím postupem, výsledkem, verzí a omezeními detekce."
value_feature_benefit: "Kupující pozná, co je skutečně ověřeno, a dodavatel může doložit transparentní produkční workflow místo obecného slibu."
value_feature_mvp: "dodavatel a produkt, model a verze, způsob vzniku zvuku, formát, délka, postprodukce, ověřovací nástroj a verze, API nebo veřejný test, datum, výsledek, omezení, důkazní hash, editor, historie a poptávka"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „Audio Provenance Evidence Card“ pro projekt Spolek AI. Funkce: dodavatel a produkt, model a verze, způsob vzniku zvuku, formát, délka, postprodukce, ověřovací nástroj a verze, API nebo veřejný test, datum, výsledek, omezení, důkazní hash, editor, historie a poptávka. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Kupující pozná, co je skutečně ověřeno, a dodavatel může doložit transparentní produkční workflow místo obecného slibu. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace."
spolek_ai_area: "Marketplace a důvěryhodnost"
---

## Shrnutí

OpenAI 31. července oznámilo SynthID watermarking u podporovaného zvuku GPT-Live a veřejné i API ověření provenance signálů. Marketplace má nově možnost uvádět strojově ověřitelný původ, ale musí přesně popsat jeho hranice.

## Zdroje

- [OpenAI – Introducing GPT-Live, aktualizace 31. 7. 2026](https://openai.com/index/introducing-gpt-live/)

## Proč je to důležité

Značka „ověřeno“ může být zavádějící, pokud není zřejmé, jaký formát, model a úpravy nástroj podporuje. Nedetekovaný signál také automaticky neznamená, že nahrávku vytvořil člověk.

## Doporučení

U každé hlasové nabídky zveřejněte model a verzi, podporované formáty, způsob ověření, datum testu, výsledek, úpravy po generování a přesné omezení tvrzení.

## SEO titulek

GPT-Live přidává ověřitelný původ zvuku: marketplace musí ukázat rozsah důkazu | Spolek AI

## Meta popis

OpenAI 31. července oznámilo SynthID watermarking u podporovaného zvuku GPT-Live a veřejné i API ověření provenance signálů. Marketplace má nově možnost uv

## Perex

OpenAI 31. července oznámilo SynthID watermarking u podporovaného zvuku GPT-Live a veřejné i API ověření provenance signálů. Marketplace má nově možnost uvádět strojově ověřitelný původ, ale musí přesně popsat jeho hranice. U každé hlasové nabídky zveřejněte model a verzi, podporované formáty, způsob ověření, datum testu, výsledek, úpravy po generování a přesné omezení tvrzení.

## Blogový titulek

GPT-Live přidává ověřitelný původ zvuku: marketplace musí ukázat rozsah důkazu

## Osnova blogu

1. Co je nové a co z toho plyne
2. Proč nestačí obecná rada
3. Doporučený postup krok za krokem
4. Kde typicky vzniká chyba
5. Praktický příklad
6. Jak využít nástroj Audio Provenance Evidence Card
7. Jak poznat, že řešení funguje
8. Jak postup zavést do běžné praxe
9. Závěr

## Blogový draft

# GPT-Live přidává ověřitelný původ zvuku: marketplace musí ukázat rozsah důkazu

## Co je nové a co z toho skutečně plyne

OpenAI 31. července oznámilo SynthID watermarking u podporovaného zvuku GPT-Live a veřejné i API ověření provenance signálů. Marketplace má nově možnost uvádět strojově ověřitelný původ, ale musí přesně popsat jeho hranice.

Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:

**1. OpenAI 31. července doplnilo, že podporovaný zvuk vytvořený GPT-Live v ChatGPT Voice a API obsahuje watermark SynthID.**

**2. Veřejný ověřovací nástroj může u podporovaného zvuku detekovat signály původu a pro organizace je dostupné také ověření přes API.**

**3. Ověření je nutné popsat přesně podle podporovaných formátů a signálů; nepřítomnost detekce sama o sobě nedokazuje lidský původ nahrávky.**

Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Spolek AI proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.

## Proč nestačí obecná rada

Značka „ověřeno“ může být zavádějící, pokud není zřejmé, jaký formát, model a úpravy nástroj podporuje. Nedetekovaný signál také automaticky neznamená, že nahrávku vytvořil člověk.

Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj Audio Provenance Evidence Card, který převádí doporučení do opakovatelného rozhodnutí.

Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.

## Doporučený postup krok za krokem

1. **Popsat přesný nástroj a verzi generování.**
2. **Uvést formát a všechny následné úpravy zvuku.**
3. **Spustit podporovaný ověřovací postup.**
4. **Uložit výsledek, datum a důkaz bez veřejného citlivého audia.**
5. **Zveřejnit omezení a zakázat absolutní tvrzení.**

Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.

U každé hlasové nabídky zveřejněte model a verzi, podporované formáty, způsob ověření, datum testu, výsledek, úpravy po generování a přesné omezení tvrzení.

## Kde typicky vzniká chyba

Nejčastější rizika jsou konkrétní:

- nedetekovaný watermark je vydáván za důkaz lidského původu
- postprodukce změní možnost ověření bez nové kontroly
- veřejný důkaz zpřístupní neveřejnou nahrávku

Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.

## Praktický příklad

Dodavatel hlasové reklamy uvede GPT-Live, WAV export, následnou úpravu hlasitosti a výsledek verifikace po finálním exportu. Profil výslovně říká, co detekce potvrzuje a co nikoli.

Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.

## Jak využít nástroj Audio Provenance Evidence Card

Karta spojí hlasovou službu s ověřovacím postupem, výsledkem, verzí a omezeními detekce. Minimální verze zahrnuje: dodavatel a produkt, model a verze, způsob vzniku zvuku, formát, délka, postprodukce, ověřovací nástroj a verze, API nebo veřejný test, datum, výsledek, omezení, důkazní hash, editor, historie a poptávka.

Kupující pozná, co je skutečně ověřeno, a dodavatel může doložit transparentní produkční workflow místo obecného slibu. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.

Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.

## Jak poznat, že řešení funguje

Hlavní metrika je: každý ověřený profil má model, formát, postprodukci, datum, výsledek a omezení; žádný negativní výsledek není označen jako důkaz lidského původu. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.

Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.

## Jak postup zavést do běžné praxe

V marketplace se kontrola stane součástí publikačního procesu. Dodavatel nejprve vyplní strukturované údaje, editor ověří úplnost a veřejný profil jasně odliší tvrzení dodavatele od doloženého důkazu. Každá změna modelu, oprávnění, triggeru nebo ceny vytvoří novou verzi a vyžádá revizi dotčených polí. Kupující může filtrovat jen podle údajů, které jsou skutečně vyplněné a aktuální; prázdné pole se nesmí tvářit jako splněná podmínka. Poptávkový formulář předá pouze nezbytné kontaktní údaje a zaznamená souhlas. Tím se důvěryhodnost nestaví na jednorázovém odznaku, ale na průběžně udržovaném provozním profilu.

## Závěr

U každé hlasové nabídky zveřejněte model a verzi, podporované formáty, způsob ověření, datum testu, výsledek, úpravy po generování a přesné omezení tvrzení. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Porovnejte nabídky a dodavatele na Spolek AI podle doložených provozních údajů.

## Blog pro Enfold

<h1>GPT-Live přidává ověřitelný původ zvuku: marketplace musí ukázat rozsah důkazu</h1>
<p class="perex">OpenAI 31. července oznámilo SynthID watermarking u podporovaného zvuku GPT-Live a veřejné i API ověření provenance signálů. Marketplace má nově možnost uvádět strojově ověřitelný původ, ale musí přesně popsat jeho hranice.</p>
<h2>Co je nové a co z toho skutečně plyne</h2>
<p>OpenAI 31. července oznámilo SynthID watermarking u podporovaného zvuku GPT-Live a veřejné i API ověření provenance signálů. Marketplace má nově možnost uvádět strojově ověřitelný původ, ale musí přesně popsat jeho hranice.</p>
<p>Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:</p>
<p><strong>1. OpenAI 31. července doplnilo, že podporovaný zvuk vytvořený GPT-Live v ChatGPT Voice a API obsahuje watermark SynthID.</strong></p>
<p><strong>2. Veřejný ověřovací nástroj může u podporovaného zvuku detekovat signály původu a pro organizace je dostupné také ověření přes API.</strong></p>
<p><strong>3. Ověření je nutné popsat přesně podle podporovaných formátů a signálů; nepřítomnost detekce sama o sobě nedokazuje lidský původ nahrávky.</strong></p>
<p>Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Spolek AI proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.</p>
<h2>Proč nestačí obecná rada</h2>
<p>Značka „ověřeno“ může být zavádějící, pokud není zřejmé, jaký formát, model a úpravy nástroj podporuje. Nedetekovaný signál také automaticky neznamená, že nahrávku vytvořil člověk.</p>
<p>Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj Audio Provenance Evidence Card, který převádí doporučení do opakovatelného rozhodnutí.</p>
<p>Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol><li>Popsat přesný nástroj a verzi generování.</li><li>Uvést formát a všechny následné úpravy zvuku.</li><li>Spustit podporovaný ověřovací postup.</li><li>Uložit výsledek, datum a důkaz bez veřejného citlivého audia.</li><li>Zveřejnit omezení a zakázat absolutní tvrzení.</li></ol>
<p>Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.</p>
<p>U každé hlasové nabídky zveřejněte model a verzi, podporované formáty, způsob ověření, datum testu, výsledek, úpravy po generování a přesné omezení tvrzení.</p>
<h2>Kde typicky vzniká chyba</h2>
<p>Nejčastější rizika jsou konkrétní:</p>
<ul><li>nedetekovaný watermark je vydáván za důkaz lidského původu</li><li>postprodukce změní možnost ověření bez nové kontroly</li><li>veřejný důkaz zpřístupní neveřejnou nahrávku</li></ul>
<p>Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.</p>
<h2>Praktický příklad</h2>
<p>Dodavatel hlasové reklamy uvede GPT-Live, WAV export, následnou úpravu hlasitosti a výsledek verifikace po finálním exportu. Profil výslovně říká, co detekce potvrzuje a co nikoli.</p>
<p>Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.</p>
<h2>Jak využít nástroj Audio Provenance Evidence Card</h2>
<p>Karta spojí hlasovou službu s ověřovacím postupem, výsledkem, verzí a omezeními detekce. Minimální verze zahrnuje: dodavatel a produkt, model a verze, způsob vzniku zvuku, formát, délka, postprodukce, ověřovací nástroj a verze, API nebo veřejný test, datum, výsledek, omezení, důkazní hash, editor, historie a poptávka.</p>
<p>Kupující pozná, co je skutečně ověřeno, a dodavatel může doložit transparentní produkční workflow místo obecného slibu. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<p>Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.</p>
<h2>Jak poznat, že řešení funguje</h2>
<p>Hlavní metrika je: každý ověřený profil má model, formát, postprodukci, datum, výsledek a omezení; žádný negativní výsledek není označen jako důkaz lidského původu. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.</p>
<p>Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.</p>
<h2>Jak postup zavést do běžné praxe</h2>
<p>V marketplace se kontrola stane součástí publikačního procesu. Dodavatel nejprve vyplní strukturované údaje, editor ověří úplnost a veřejný profil jasně odliší tvrzení dodavatele od doloženého důkazu. Každá změna modelu, oprávnění, triggeru nebo ceny vytvoří novou verzi a vyžádá revizi dotčených polí. Kupující může filtrovat jen podle údajů, které jsou skutečně vyplněné a aktuální; prázdné pole se nesmí tvářit jako splněná podmínka. Poptávkový formulář předá pouze nezbytné kontaktní údaje a zaznamená souhlas. Tím se důvěryhodnost nestaví na jednorázovém odznaku, ale na průběžně udržovaném provozním profilu.</p>
<h2>Závěr</h2>
<p>U každé hlasové nabídky zveřejněte model a verzi, podporované formáty, způsob ověření, datum testu, výsledek, úpravy po generování a přesné omezení tvrzení. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Porovnejte nabídky a dodavatele na Spolek AI podle doložených provozních údajů.</p>

## Facebook text

GPT-Live přidává ověřitelný původ zvuku: marketplace musí ukázat rozsah důkazu

OpenAI 31. července oznámilo SynthID watermarking u podporovaného zvuku GPT-Live a veřejné i API ověření provenance signálů. Marketplace má nově možnost uvádět strojově ověřitelný původ, ale musí přesně popsat jeho hranice.

U každé hlasové nabídky zveřejněte model a verzi, podporované formáty, způsob ověření, datum testu, výsledek, úpravy po generování a přesné omezení tvrzení.

Praktická pomůcka: Audio Provenance Evidence Card. Kupující pozná, co je skutečně ověřeno, a dodavatel může doložit transparentní produkční workflow místo obecného slibu.

Více: https://spolek.ai/

## LinkedIn text

GPT-Live přidává ověřitelný původ zvuku: marketplace musí ukázat rozsah důkazu

Značka „ověřeno“ může být zavádějící, pokud není zřejmé, jaký formát, model a úpravy nástroj podporuje. Nedetekovaný signál také automaticky neznamená, že nahrávku vytvořil člověk.

Doporučený první krok: Popsat přesný nástroj a verzi generování.

Audio Provenance Evidence Card: Karta spojí hlasovou službu s ověřovacím postupem, výsledkem, verzí a omezeními detekce.

Kupující pozná, co je skutečně ověřeno, a dodavatel může doložit transparentní produkční workflow místo obecného slibu.

https://spolek.ai/

## Instagram caption

GPT-Live přidává ověřitelný původ zvuku: marketplace musí ukázat rozsah důkazu

OpenAI 31. července oznámilo SynthID watermarking u podporovaného zvuku GPT-Live a veřejné i API ověření provenance signálů. Marketplace má nově možnost uvádět strojově ověřitelný původ, ale musí přesně popsat jeho hranice.

✅ Popsat přesný nástroj a verzi generování.
✅ Uvést formát a všechny následné úpravy zvuku.
✅ Spustit podporovaný ověřovací postup.

U každé hlasové nabídky zveřejněte model a verzi, podporované formáty, způsob ověření, datum testu, výsledek, úpravy po generování a přesné omezení tvrzení.

https://spolek.ai/

#SpolekAI #praktickytip #AudioProvenanceEvidenceCard

## Čistý publikační text pro Facebook

GPT-Live přidává ověřitelný původ zvuku: marketplace musí ukázat rozsah důkazu

OpenAI 31. července oznámilo SynthID watermarking u podporovaného zvuku GPT-Live a veřejné i API ověření provenance signálů. Marketplace má nově možnost uvádět strojově ověřitelný původ, ale musí přesně popsat jeho hranice.

U každé hlasové nabídky zveřejněte model a verzi, podporované formáty, způsob ověření, datum testu, výsledek, úpravy po generování a přesné omezení tvrzení.

Praktická pomůcka: Audio Provenance Evidence Card. Kupující pozná, co je skutečně ověřeno, a dodavatel může doložit transparentní produkční workflow místo obecného slibu.

Více: https://spolek.ai/

## Čistý publikační text pro LinkedIn

GPT-Live přidává ověřitelný původ zvuku: marketplace musí ukázat rozsah důkazu

Značka „ověřeno“ může být zavádějící, pokud není zřejmé, jaký formát, model a úpravy nástroj podporuje. Nedetekovaný signál také automaticky neznamená, že nahrávku vytvořil člověk.

Doporučený první krok: Popsat přesný nástroj a verzi generování.

Audio Provenance Evidence Card: Karta spojí hlasovou službu s ověřovacím postupem, výsledkem, verzí a omezeními detekce.

Kupující pozná, co je skutečně ověřeno, a dodavatel může doložit transparentní produkční workflow místo obecného slibu.

https://spolek.ai/

## Čistý publikační text pro Instagram

GPT-Live přidává ověřitelný původ zvuku: marketplace musí ukázat rozsah důkazu

OpenAI 31. července oznámilo SynthID watermarking u podporovaného zvuku GPT-Live a veřejné i API ověření provenance signálů. Marketplace má nově možnost uvádět strojově ověřitelný původ, ale musí přesně popsat jeho hranice.

✅ Popsat přesný nástroj a verzi generování.
✅ Uvést formát a všechny následné úpravy zvuku.
✅ Spustit podporovaný ověřovací postup.

U každé hlasové nabídky zveřejněte model a verzi, podporované formáty, způsob ověření, datum testu, výsledek, úpravy po generování a přesné omezení tvrzení.

https://spolek.ai/

#SpolekAI #praktickytip #AudioProvenanceEvidenceCard

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** GPT-Live přidává ověřitelný původ zvuku: marketplace musí ukázat rozsah důkazu

**Scénář po sekundách:** 0–2 s výrazný hook; 2–7 s konkrétní situace; 7–10 s Audio Provenance Evidence Card a CTA.

**Mluvený text:** Ověřený původ potřebuje rozsah. Model, formát, úpravy, datum, výsledek a jasné omezení.

**Text na obrazovku:** GPT-Live přidává ověřitelný původ zvuku: marketplace musí ukázat rozsah důkazu / Audio Provenance Evidence Card / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte Audio Provenance Evidence Card.

**Hashtagy:** #SpolekAI #praktickynavod #bezpecnypostup

**Cover:** GPT-Live přidává ověřitelný původ zvuku: marketplace musí ukázat rozsah důkazu

**Prompt pro Gemini Flow / Omni:** Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Ověřený původ potřebuje rozsah. Model, formát, úpravy, datum, výsledek a jasné omezení.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení Audio Provenance Evidence Card a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## YouTube Shorts popisek

OpenAI 31. července oznámilo SynthID watermarking u podporovaného zvuku GPT-Live a veřejné i API ověření provenance signálů. Marketplace má nově možnost uvádět strojově ověřitelný původ, ale musí přesně popsat jeho hranice. U každé hlasové nabídky zveřejněte model a verzi, podporované formáty, způsob ověření, datum testu, výsledek, úpravy po generování a přesné omezení tvrzení. Více na https://spolek.ai/

## Text do grafiky

GPT-Live přidává ověřitelný původ zvuku: marketplace musí ukázat rozsah důkazu

Audio Provenance Evidence Card

## CTA

Otevřete Spolek AI a ověřte první konkrétní krok.

## Alt text

GPT-Live přidává ověřitelný původ zvuku: marketplace musí ukázat rozsah důkazu: názorné zobrazení konkrétního postupu a nástroje Audio Provenance Evidence Card v souladu se značkou Spolek AI.

## Prompt na obrázek

Moderní obchodní a komunitní vizuál pro Spolek AI k tématu „GPT-Live přidává ověřitelný původ zvuku: marketplace musí ukázat rozsah důkazu“. Primární oranžová #F15A00, ink #15171D a bílá #FFFFFF; použij pouze oficiální logo nebo symbol z aktuálního design systému Spolek.ai. Výrazná odborná kompozice s konkrétním důkazem, produktem a obchodním výsledkem, bez značky Agenda24, bez robotů a bez laciného futurismu.

## Reference k obrázku

Použij výhradně manifest značky spolek-ai a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený český hlas. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Ověřený původ potřebuje rozsah. Model, formát, úpravy, datum, výsledek a jasné omezení.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení Audio Provenance Evidence Card a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## Reference k videu

Vizuální pravidla čti pouze z manifestu spolek-ai; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**Audio Provenance Evidence Card** — Karta spojí hlasovou službu s ověřovacím postupem, výsledkem, verzí a omezeními detekce.

Přínos: Kupující pozná, co je skutečně ověřeno, a dodavatel může doložit transparentní produkční workflow místo obecného slibu.

## MVP verze

dodavatel a produkt, model a verze, způsob vzniku zvuku, formát, délka, postprodukce, ověřovací nástroj a verze, API nebo veřejný test, datum, výsledek, omezení, důkazní hash, editor, historie a poptávka

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „Audio Provenance Evidence Card“ pro projekt Spolek AI. Funkce: dodavatel a produkt, model a verze, způsob vzniku zvuku, formát, délka, postprodukce, ověřovací nástroj a verze, API nebo veřejný test, datum, výsledek, omezení, důkazní hash, editor, historie a poptávka. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Kupující pozná, co je skutečně ověřeno, a dodavatel může doložit transparentní produkční workflow místo obecného slibu. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace.
