---
title: "Pupeto Recall Match: bezpečné ověření výrobku a šarže bez diagnózy"
date: 2026-08-03
project: "Pupeto"
project_url: "https://pupeto.eu/"
projects: ["Pupeto"]
topic_type: "tip na aplikaci"
usage_type: "blog, sociální sítě, video, nástroj"
priority: "vysoká"
status: "k rozpracování"
blog_potential: "vysoký"
social_potential: "vysoký"
recommended_output: "publikovatelný článek, sociální sada, 10s video a praktický nástroj"
brand: "pupeto"
tags: ["tip na aplikaci", "Nástroje pro majitele mazlíčků", "Pupeto Recall Match"]
source_summary: "FDA – Recalls & Withdrawals pro krmiva a veterinární produkty (ověřeno 3. 8. 2026)"
value_feature_type: "pet checker a katalog"
value_feature_name: "Pupeto Recall Match"
value_feature_summary: "Aplikace porovná produkt, variantu, velikost, šarži, datum a zemi s verzovaným oficiálním záznamem."
value_feature_benefit: "Majitel rychle pozná, zda jde o přesnou shodu, neshodu nebo případ vyžadující ruční kontrolu zdroje."
value_feature_mvp: "kurátorované zdroje, výrobci, produkty, varianty, šarže, data, země, stav upozornění, OCR s potvrzením, tři výsledky shoda neshoda nejasné, historie revizí, odkaz na zdroj, bezpečný postup, veterinární kontakt, offline export a výmaz"
value_feature_codex_prompt: "Vytvoř produkční WordPress aplikaci „Pupeto Recall Match“ pro projekt Pupeto. Funkce: kurátorované zdroje, výrobci, produkty, varianty, šarže, data, země, stav upozornění, OCR s potvrzením, tři výsledky shoda neshoda nejasné, historie revizí, odkaz na zdroj, bezpečný postup, veterinární kontakt, offline export a výmaz. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Majitel rychle pozná, zda jde o přesnou shodu, neshodu nebo případ vyžadující ruční kontrolu zdroje. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace."
pupeto_category: "Nástroje pro majitele mazlíčků"
---

## Shrnutí

Pupeto Recall Match porovná údaje z obalu s ověřeným záznamem stažení a ukáže přesný rozsah shody. Neurčuje zdravotní stav, léčbu ani českou platnost zahraničního upozornění.

## Zdroje

- [FDA – Recalls & Withdrawals pro krmiva a veterinární produkty (ověřeno 3. 8. 2026)](https://www.fda.gov/animal-veterinary/safety-health/recalls-withdrawals)

## Proč je to důležité

Vyhledávání jen podle značky je nepřesné a obecné upozornění se snadno šíří bez země a šarže. Strukturované porovnání musí zachovat odkaz, datum kontroly a nejasný výsledek označit k ručnímu ověření.

## Doporučení

MVP postavte na ručně kurátorovaných oficiálních zdrojích a přesné shodě polí. OCR smí údaje pouze předvyplnit; majitel je vždy potvrdí proti obalu.

## SEO titulek

Pupeto Recall Match: bezpečné ověření výrobku a šarže bez diagnózy | Pupeto

## Meta popis

Pupeto Recall Match porovná údaje z obalu s ověřeným záznamem stažení a ukáže přesný rozsah shody. Neurčuje zdravotní stav, léčbu ani českou platnost zahra

## Perex

Pupeto Recall Match porovná údaje z obalu s ověřeným záznamem stažení a ukáže přesný rozsah shody. Neurčuje zdravotní stav, léčbu ani českou platnost zahraničního upozornění. MVP postavte na ručně kurátorovaných oficiálních zdrojích a přesné shodě polí. OCR smí údaje pouze předvyplnit; majitel je vždy potvrdí proti obalu.

## Blogový titulek

Pupeto Recall Match: bezpečné ověření výrobku a šarže bez diagnózy

## Osnova blogu

1. Co je nové a co z toho plyne
2. Proč nestačí obecná rada
3. Doporučený postup krok za krokem
4. Kde typicky vzniká chyba
5. Praktický příklad
6. Jak využít nástroj Pupeto Recall Match
7. Jak poznat, že řešení funguje
8. Jak postup zavést do běžné praxe
9. Závěr

## Blogový draft

# Pupeto Recall Match: bezpečné ověření výrobku a šarže bez diagnózy

## Co je nové a co z toho skutečně plyne

Pupeto Recall Match porovná údaje z obalu s ověřeným záznamem stažení a ukáže přesný rozsah shody. Neurčuje zdravotní stav, léčbu ani českou platnost zahraničního upozornění.

Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:

**1. FDA udržuje veřejný seznam stažení krmiv a veterinárních produktů s datem, značkou, popisem výrobku, důvodem a stavem ukončení.**

**2. Nejnovější položka z 2. července 2026 uvádí konkrétní mokré krmivo pro psy a možné cizí plastové částice.**

**3. Americký seznam není českým varováním; praktická hodnota spočívá v ověření přesného produktu, šarže a pokynů příslušné autority nebo výrobce.**

Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Pupeto proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.

## Proč nestačí obecná rada

Vyhledávání jen podle značky je nepřesné a obecné upozornění se snadno šíří bez země a šarže. Strukturované porovnání musí zachovat odkaz, datum kontroly a nejasný výsledek označit k ručnímu ověření.

Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj Pupeto Recall Match, který převádí doporučení do opakovatelného rozhodnutí.

Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.

## Doporučený postup krok za krokem

1. **Editor vloží oficiální záznam a přesný rozsah.**
2. **Majitel vyfotí nebo ručně opíše obal.**
3. **Potvrdí předvyplněné údaje.**
4. **Checker zobrazí shodu i rozdíly pole po poli.**
5. **U shody nebo nejasnosti nabídne zdroj a bezpečné kontakty.**

Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.

MVP postavte na ručně kurátorovaných oficiálních zdrojích a přesné shodě polí. OCR smí údaje pouze předvyplnit; majitel je vždy potvrdí proti obalu.

## Kde typicky vzniká chyba

Nejčastější rizika jsou konkrétní:

- OCR zamění šarži a vytvoří falešnou shodu
- neaktuální záznam zůstane označen jako platný
- aplikace slíbí zdravotní bezpečnost při neshodě

Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.

## Praktický příklad

Uživatel naskenuje sáček krmiva. OCR zamění nulu za písmeno O, proto aplikace výsledek označí jako nejasný a vyžádá ruční potvrzení místo automatického uklidnění.

Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.

## Jak využít nástroj Pupeto Recall Match

Aplikace porovná produkt, variantu, velikost, šarži, datum a zemi s verzovaným oficiálním záznamem. Minimální verze zahrnuje: kurátorované zdroje, výrobci, produkty, varianty, šarže, data, země, stav upozornění, OCR s potvrzením, tři výsledky shoda neshoda nejasné, historie revizí, odkaz na zdroj, bezpečný postup, veterinární kontakt, offline export a výmaz.

Majitel rychle pozná, zda jde o přesnou shodu, neshodu nebo případ vyžadující ruční kontrolu zdroje. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.

Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.

## Jak poznat, že řešení funguje

Hlavní metrika je: každý výsledek ukazuje zdroj a datum, OCR nikdy nerozhodne bez potvrzení a nejasnost se nezobrazuje jako bezpečno. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.

Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.

## Jak postup zavést do běžné praxe

Pravidlo musí být jednoduché i ve stresu. Majitel si proto připraví jednu krátkou kartu, kterou může otevřít v telefonu bez složitého hledání. Obsahuje jen potřeby konkrétního mazlíčka, bezpečnou další volbu a ověřený kontakt. Po návratu nebo po skončení situace se karta zkontroluje: co chybělo, co bylo zbytečné a co je potřeba změnit před příštím použitím. U zdravotních potíží aplikace nepředstírá diagnózu a vede majitele k veterináři. Sdílení s další osobou je dobrovolné, časově omezené a lze je kdykoli zrušit. Takový postup chrání zvíře a současně respektuje soukromí majitele.

## Závěr

MVP postavte na ručně kurátorovaných oficiálních zdrojích a přesné shodě polí. OCR smí údaje pouze předvyplnit; majitel je vždy potvrdí proti obalu. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.

**CTA:** Otevřete Pupeto a připravte bezpečný plán pro svého mazlíčka.

## Blog pro Enfold

<h1>Pupeto Recall Match: bezpečné ověření výrobku a šarže bez diagnózy</h1>
<p class="perex">Pupeto Recall Match porovná údaje z obalu s ověřeným záznamem stažení a ukáže přesný rozsah shody. Neurčuje zdravotní stav, léčbu ani českou platnost zahraničního upozornění.</p>
<h2>Co je nové a co z toho skutečně plyne</h2>
<p>Pupeto Recall Match porovná údaje z obalu s ověřeným záznamem stažení a ukáže přesný rozsah shody. Neurčuje zdravotní stav, léčbu ani českou platnost zahraničního upozornění.</p>
<p>Oficiální zdroj je důležitý tím, že popisuje konkrétní změnu nebo doporučený postup, nikoli jen obecný trend. Pro praktické rozhodnutí jsou podstatné tyto ověřené body:</p>
<p><strong>1. FDA udržuje veřejný seznam stažení krmiv a veterinárních produktů s datem, značkou, popisem výrobku, důvodem a stavem ukončení.</strong></p>
<p><strong>2. Nejnovější položka z 2. července 2026 uvádí konkrétní mokré krmivo pro psy a možné cizí plastové částice.</strong></p>
<p><strong>3. Americký seznam není českým varováním; praktická hodnota spočívá v ověření přesného produktu, šarže a pokynů příslušné autority nebo výrobce.</strong></p>
<p>Tyto body je potřeba číst společně. Samotná funkce, varování nebo doporučení nepřináší výsledek, dokud není převedeno do jasného kroku, odpovědnosti a kontroly. Pro Pupeto proto téma neslouží jako přepis tiskové zprávy, ale jako podklad pro použitelný postup.</p>
<h2>Proč nestačí obecná rada</h2>
<p>Vyhledávání jen podle značky je nepřesné a obecné upozornění se snadno šíří bez země a šarže. Strukturované porovnání musí zachovat odkaz, datum kontroly a nejasný výsledek označit k ručnímu ověření.</p>
<p>Nejhorší varianta je věta „dávejte pozor“ bez vysvětlení, kdy se má člověk zastavit a co má ověřit. Použitelný obsah musí popsat očekávaný stav, důkaz a bezpečnou další volbu. Právě proto je součástí karty i nástroj Pupeto Recall Match, který převádí doporučení do opakovatelného rozhodnutí.</p>
<p>Téma má zároveň jasnou hranici. Nástroj nemá nahrazovat odborníka, automaticky rozhodovat ve vysoce rizikové situaci ani sbírat data, která k výsledku nejsou potřeba. Má zpřehlednit informace, upozornit na nesoulad a ponechat odpovědnost u člověka.</p>
<h2>Doporučený postup krok za krokem</h2>
<ol><li>Editor vloží oficiální záznam a přesný rozsah.</li><li>Majitel vyfotí nebo ručně opíše obal.</li><li>Potvrdí předvyplněné údaje.</li><li>Checker zobrazí shodu i rozdíly pole po poli.</li><li>U shody nebo nejasnosti nabídne zdroj a bezpečné kontakty.</li></ol>
<p>Pořadí není samoúčelné. Nejprve se ověřuje vhodnost a vstupní podmínky, teprve potom se provádí změna nebo schválení. Pokud některý krok chybí, výsledek se označí jako neúplný. To je bezpečnější než zelená kontrolka založená na odhadu.</p>
<p>MVP postavte na ručně kurátorovaných oficiálních zdrojích a přesné shodě polí. OCR smí údaje pouze předvyplnit; majitel je vždy potvrdí proti obalu.</p>
<h2>Kde typicky vzniká chyba</h2>
<p>Nejčastější rizika jsou konkrétní:</p>
<ul><li>OCR zamění šarži a vytvoří falešnou shodu</li><li>neaktuální záznam zůstane označen jako platný</li><li>aplikace slíbí zdravotní bezpečnost při neshodě</li></ul>
<p>Každé riziko má mít vlastní kontrolní bod. Kontrola musí být krátká, srozumitelná a doložitelná. Uživatel nemá být nucen ukládat citlivé údaje; většinou stačí stav, datum, zdroj a jméno odpovědné role. Pokud je potřeba odborný zásah, nástroj musí nabídnout bezpečné předání, nikoli sebejistý automatický závěr.</p>
<h2>Praktický příklad</h2>
<p>Uživatel naskenuje sáček krmiva. OCR zamění nulu za písmeno O, proto aplikace výsledek označí jako nejasný a vyžádá ruční potvrzení místo automatického uklidnění.</p>
<p>Příklad ukazuje rozdíl mezi obecným doporučením a pracovním postupem. Nejprve se popíše očekávaný stav, potom se ověří realita a nakonec se zvolí konkrétní další krok. Takový proces lze zopakovat, předat kolegovi a zpětně vysvětlit.</p>
<h2>Jak využít nástroj Pupeto Recall Match</h2>
<p>Aplikace porovná produkt, variantu, velikost, šarži, datum a zemi s verzovaným oficiálním záznamem. Minimální verze zahrnuje: kurátorované zdroje, výrobci, produkty, varianty, šarže, data, země, stav upozornění, OCR s potvrzením, tři výsledky shoda neshoda nejasné, historie revizí, odkaz na zdroj, bezpečný postup, veterinární kontakt, offline export a výmaz.</p>
<p>Majitel rychle pozná, zda jde o přesnou shodu, neshodu nebo případ vyžadující ruční kontrolu zdroje. Rozhraní má fungovat na telefonu i počítači, klávesnicí a s asistivními technologiemi. Každý výsledek musí ukazovat zdroj, datum a stav kontroly. Automatická oprava nebo odeslání se nesmí spustit tam, kde je potřeba lidské potvrzení.</p>
<p>Administrace musí podporovat oprávnění, historii změn, bezpečný export a výmaz. U veřejných profilů se zveřejní jen údaje potřebné k porovnání; důkazy a citlivější provozní informace zůstanou přístupné oprávněným rolím.</p>
<h2>Jak poznat, že řešení funguje</h2>
<p>Hlavní metrika je: každý výsledek ukazuje zdroj a datum, OCR nikdy nerozhodne bez potvrzení a nejasnost se nezobrazuje jako bezpečno. Počet vyplněných polí sám o sobě úspěch neprokazuje. První použití vytvoří výchozí stav, další ověří změnu chování nebo odstranění rizika.</p>
<p>Dlouhodobě je vhodné sledovat úplnost vstupů, zachycené problémy předem a skutečně provedené kroky. Pokud výsledek nevede k rozhodnutí, je kontrola příliš obecná. Téma se má znovu otevřít při změně podmínek, nástroje, produktu, trasy nebo odpovědné osoby.</p>
<h2>Jak postup zavést do běžné praxe</h2>
<p>Pravidlo musí být jednoduché i ve stresu. Majitel si proto připraví jednu krátkou kartu, kterou může otevřít v telefonu bez složitého hledání. Obsahuje jen potřeby konkrétního mazlíčka, bezpečnou další volbu a ověřený kontakt. Po návratu nebo po skončení situace se karta zkontroluje: co chybělo, co bylo zbytečné a co je potřeba změnit před příštím použitím. U zdravotních potíží aplikace nepředstírá diagnózu a vede majitele k veterináři. Sdílení s další osobou je dobrovolné, časově omezené a lze je kdykoli zrušit. Takový postup chrání zvíře a současně respektuje soukromí majitele.</p>
<h2>Závěr</h2>
<p>MVP postavte na ručně kurátorovaných oficiálních zdrojích a přesné shodě polí. OCR smí údaje pouze předvyplnit; majitel je vždy potvrdí proti obalu. Začněte jedním konkrétním případem a ověřte jej od začátku do konce. Teprve potom postup rozšiřujte. Tím vznikne řešení, které je srozumitelné, měřitelné a použitelné v běžné praxi.</p>
<p><strong>CTA:</strong> Otevřete Pupeto a připravte bezpečný plán pro svého mazlíčka.</p>

## Facebook text

Pupeto Recall Match: bezpečné ověření výrobku a šarže bez diagnózy

Pupeto Recall Match porovná údaje z obalu s ověřeným záznamem stažení a ukáže přesný rozsah shody. Neurčuje zdravotní stav, léčbu ani českou platnost zahraničního upozornění.

MVP postavte na ručně kurátorovaných oficiálních zdrojích a přesné shodě polí. OCR smí údaje pouze předvyplnit; majitel je vždy potvrdí proti obalu.

Praktická pomůcka: Pupeto Recall Match. Majitel rychle pozná, zda jde o přesnou shodu, neshodu nebo případ vyžadující ruční kontrolu zdroje.

Více: https://pupeto.eu/

## LinkedIn text

Pupeto Recall Match: bezpečné ověření výrobku a šarže bez diagnózy

Vyhledávání jen podle značky je nepřesné a obecné upozornění se snadno šíří bez země a šarže. Strukturované porovnání musí zachovat odkaz, datum kontroly a nejasný výsledek označit k ručnímu ověření.

Doporučený první krok: Editor vloží oficiální záznam a přesný rozsah.

Pupeto Recall Match: Aplikace porovná produkt, variantu, velikost, šarži, datum a zemi s verzovaným oficiálním záznamem.

Majitel rychle pozná, zda jde o přesnou shodu, neshodu nebo případ vyžadující ruční kontrolu zdroje.

https://pupeto.eu/

## Instagram caption

Pupeto Recall Match: bezpečné ověření výrobku a šarže bez diagnózy

Pupeto Recall Match porovná údaje z obalu s ověřeným záznamem stažení a ukáže přesný rozsah shody. Neurčuje zdravotní stav, léčbu ani českou platnost zahraničního upozornění.

✅ Editor vloží oficiální záznam a přesný rozsah.
✅ Majitel vyfotí nebo ručně opíše obal.
✅ Potvrdí předvyplněné údaje.

MVP postavte na ručně kurátorovaných oficiálních zdrojích a přesné shodě polí. OCR smí údaje pouze předvyplnit; majitel je vždy potvrdí proti obalu.

https://pupeto.eu/

#Pupeto #praktickytip #PupetoRecallMatch

## Čistý publikační text pro Facebook

Pupeto Recall Match: bezpečné ověření výrobku a šarže bez diagnózy

Pupeto Recall Match porovná údaje z obalu s ověřeným záznamem stažení a ukáže přesný rozsah shody. Neurčuje zdravotní stav, léčbu ani českou platnost zahraničního upozornění.

MVP postavte na ručně kurátorovaných oficiálních zdrojích a přesné shodě polí. OCR smí údaje pouze předvyplnit; majitel je vždy potvrdí proti obalu.

Praktická pomůcka: Pupeto Recall Match. Majitel rychle pozná, zda jde o přesnou shodu, neshodu nebo případ vyžadující ruční kontrolu zdroje.

Více: https://pupeto.eu/

## Čistý publikační text pro LinkedIn

Pupeto Recall Match: bezpečné ověření výrobku a šarže bez diagnózy

Vyhledávání jen podle značky je nepřesné a obecné upozornění se snadno šíří bez země a šarže. Strukturované porovnání musí zachovat odkaz, datum kontroly a nejasný výsledek označit k ručnímu ověření.

Doporučený první krok: Editor vloží oficiální záznam a přesný rozsah.

Pupeto Recall Match: Aplikace porovná produkt, variantu, velikost, šarži, datum a zemi s verzovaným oficiálním záznamem.

Majitel rychle pozná, zda jde o přesnou shodu, neshodu nebo případ vyžadující ruční kontrolu zdroje.

https://pupeto.eu/

## Čistý publikační text pro Instagram

Pupeto Recall Match: bezpečné ověření výrobku a šarže bez diagnózy

Pupeto Recall Match porovná údaje z obalu s ověřeným záznamem stažení a ukáže přesný rozsah shody. Neurčuje zdravotní stav, léčbu ani českou platnost zahraničního upozornění.

✅ Editor vloží oficiální záznam a přesný rozsah.
✅ Majitel vyfotí nebo ručně opíše obal.
✅ Potvrdí předvyplněné údaje.

MVP postavte na ručně kurátorovaných oficiálních zdrojích a přesné shodě polí. OCR smí údaje pouze předvyplnit; majitel je vždy potvrdí proti obalu.

https://pupeto.eu/

#Pupeto #praktickytip #PupetoRecallMatch

## TikTok balíček

**Formát:** Gemini Flow / Omni, vertikální 9:16, přesně 10 sekund.

**Hook:** Víte co musí sedět?

**Scénář po sekundách:** 0–2 s výrazný hook; 2–7 s konkrétní situace; 7–10 s Pupeto Recall Match a CTA.

**Mluvený text:** Víte co musí sedět? Produkt, varianta, šarže, datum a země. Pupeto ukáže rozdíl pole po poli.

**Text na obrazovku:** Pupeto Recall Match: bezpečné ověření výrobku a šarže bez diagnózy / Pupeto Recall Match / Ověřte první krok.

**Storyboard:** 0–2 s problém; 2–5 s konkrétní důkaz; 5–7 s bezpečný postup; 7–10 s nástroj a odkaz.

**CTA:** Otevřete odkaz u videa a použijte Pupeto Recall Match.

**Hashtagy:** #Pupeto #praktickynavod #bezpecnypostup

**Cover:** Pupeto Recall Match: bezpečné ověření výrobku a šarže bez diagnózy

**Prompt pro Gemini Flow / Omni:** Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený ženský český hlas; video začne přesně otázkou „Víte proč…?“ nebo „Víte co…?“. Jack a Mňouk jsou ve scéně podle referencí Pupeto, ale nepřidávej další hlasy. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Víte co musí sedět? Produkt, varianta, šarže, datum a země. Pupeto ukáže rozdíl pole po poli.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení Pupeto Recall Match a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## YouTube Shorts popisek

Pupeto Recall Match porovná údaje z obalu s ověřeným záznamem stažení a ukáže přesný rozsah shody. Neurčuje zdravotní stav, léčbu ani českou platnost zahraničního upozornění. MVP postavte na ručně kurátorovaných oficiálních zdrojích a přesné shodě polí. OCR smí údaje pouze předvyplnit; majitel je vždy potvrdí proti obalu. Více na https://pupeto.eu/

## Text do grafiky

Pupeto Recall Match: bezpečné ověření výrobku a šarže bez diagnózy

Pupeto Recall Match

## CTA

Otevřete Pupeto a ověřte první konkrétní krok.

## Alt text

Pupeto Recall Match: bezpečné ověření výrobku a šarže bez diagnózy: názorné zobrazení konkrétního postupu a nástroje Pupeto Recall Match v souladu se značkou Pupeto.

## Prompt na obrázek

Světlý přátelský realistický pet vizuál pro Pupeto k tématu „Pupeto Recall Match: bezpečné ověření výrobku a šarže bez diagnózy“. Pes Jack a kočka Mňouk pouze podle referencí značky, barvy #017795, #0AA6BD, #EF5D86 a bílé pozadí. Důraz výhradně na bezpečí, péči a potřeby mazlíčků; žádné kancelářské prvky, logo 24 ani Martin.

## Reference k obrázku

Použij výhradně manifest značky pupeto a jeho povolené zdroje. Formáty připrav samostatně, bez mechanického ořezu.

## Prompt na video

Vytvoř v Gemini Flow / Omni jedno vertikální video 1080 × 1920, 9:16, přesně 10 sekund. Jeden přirozený ženský český hlas; video začne přesně otázkou „Víte proč…?“ nebo „Víte co…?“. Jack a Mňouk jsou ve scéně podle referencí Pupeto, ale nepřidávej další hlasy. Mluvený text musí celý skončit nejpozději v 8. sekundě: „Víte co musí sedět? Produkt, varianta, šarže, datum a země. Pupeto ukáže rozdíl pole po poli.“ Scénář: 0–2 s jasný hook; 2–7 s konkrétní situace; 7–10 s vizuální řešení Pupeto Recall Match a CTA. Žádné useknuté věty, žádný další dialog, žádné generované logo a žádný drobný nečitelný text.

## Reference k videu

Vizuální pravidla čti pouze z manifestu pupeto; použij stejné barvy, kompozici a zakázané prvky jako u obrazového promptu.

## Návrh funkce / aplikace / pluginu

**Pupeto Recall Match** — Aplikace porovná produkt, variantu, velikost, šarži, datum a zemi s verzovaným oficiálním záznamem.

Přínos: Majitel rychle pozná, zda jde o přesnou shodu, neshodu nebo případ vyžadující ruční kontrolu zdroje.

## MVP verze

kurátorované zdroje, výrobci, produkty, varianty, šarže, data, země, stav upozornění, OCR s potvrzením, tři výsledky shoda neshoda nejasné, historie revizí, odkaz na zdroj, bezpečný postup, veterinární kontakt, offline export a výmaz

## Prompt pro Codex k funkci

Vytvoř produkční WordPress aplikaci „Pupeto Recall Match“ pro projekt Pupeto. Funkce: kurátorované zdroje, výrobci, produkty, varianty, šarže, data, země, stav upozornění, OCR s potvrzením, tři výsledky shoda neshoda nejasné, historie revizí, odkaz na zdroj, bezpečný postup, veterinární kontakt, offline export a výmaz. Administrace kompletně česky: role, oprávnění, stavy, zdroje, editace, audit, exporty, retenční pravidla a bezpečná odinstalace. Datový model navrhni explicitně včetně entit, vztahů, indexů, migrací, verzování a mazání. Bezpečnost: capability checks, nonce a ochrana CSRF, sanitizace vstupů, escapování výstupů, prepared SQL, rate limiting, bezpečný upload, minimální sběr údajů, export a výmaz. Responzivita od 320 px, ovládání klávesnicí a WCAG 2.2 AA. Kompatibilita s aktuálním WordPressem, PHP 7.4+, blokovým i klasickým editorem, běžnou cache a multisite podle rozsahu. Testy: unit, integrační a E2E pro role, neplatné vstupy, migrace, export, odinstalaci, mobilní rozhraní a přístupnost. Akceptační kritéria: Majitel rychle pozná, zda jde o přesnou shodu, neshodu nebo případ vyžadující ruční kontrolu zdroje. Dodej instalační ZIP, českou uživatelskou dokumentaci, technickou dokumentaci, changelog a postup aktualizace.
