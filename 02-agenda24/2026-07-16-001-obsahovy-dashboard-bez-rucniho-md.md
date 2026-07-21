---
id: "2026-07-16-001"
title: "Obsahový dashboard bez ručního přenášení MD"
date: "2026-07-16"
project: "Agenda24"
project_url: "https://agenda24.cz/"
projects: ["Agenda24"]
topic_type: "praktická aktualizace"
usage_type: "blog; Facebook; LinkedIn; Instagram; TikTok; video; nástroj"
priority: "vysoká"
status: "připraveno"
blog_potential: "ano"
social_potential: "ano"
recommended_output: "blog + sociální sítě + praktický nástroj"
brand: "agenda24"
tags: ["automatizace", "dashboard", "praktický nástroj"]
source_summary: "Agenda24 dnes převedla denní obsahový Radar na přímý tok ChatGPT Work → soukromý GitHub → lokální dashboard. Odpadá stahování a opětovné nahrávání Markdown souborů."
value_feature_type: "interní automatizace"
value_feature_name: "A24 Dashboard Sync Guard"
value_feature_summary: "Kontroluje denní zápis karet do GitHubu, validitu indexu a dostupnost dnešního data."
value_feature_benefit: "Méně ruční práce, méně chyb a okamžitě dostupné podklady pro obsah i vývoj."
value_feature_mvp: "Kontrola posledního data, chybějících souborů, JSON indexu a výsledku posledního commitu."
value_feature_codex_prompt: "Vytvoř A24 WordPress administrativní plugin Dashboard Sync Guard napojený na centrální licenční server Agenda24. Česká administrace, stav Licence aktivní / Licence neaktivní, neplatná licence nesmí shodit web. Plugin načte stav soukromého obsahového API přes bezpečný serverový endpoint, ukáže poslední úspěšnou aktualizaci, počet karet podle projektů a chyby indexu. Použij WP HTTP API, nonce, capability checks, sanitizaci, escapování, timeout a cache. Přidej testy, instalační ZIP a zákaznickou dokumentaci."
agenda24_area: "Aplikace, pluginy a automatizace"
agenda24_instagram: "https://www.instagram.com/agenda24marketing/"
agenda24_facebook: "https://www.facebook.com/agenda24.online"
agenda24_linkedin: "https://www.linkedin.com/in/agenda24/"
agenda24_youtube: "https://www.youtube.com/@Agenda24.online"
agenda24_tiktok: "https://www.tiktok.com/@agenda24online"
---

## Shrnutí
Agenda24 dnes odstranila zbytečný mezikrok, při kterém se ranní přehled stahoval jako Markdown a znovu ručně vkládal do pracovního nástroje. Nový tok zapisuje obsah přímo do soukromého GitHub repozitáře a lokální dashboard si při spuštění stáhne poslední verzi.

## Zdroje
- Interní implementace Agenda24 ze dne 16. 7. 2026.
- Soukromý repozitář A24 Obsahového dashboardu.

## Proč je to důležité
Ruční přenos byl nespolehlivý, vytvářel duplicity a znemožňoval pozdější stažení. Přímý zápis vytváří dohledatelnou historii, umožňuje návrat k předchozí verzi a propojuje rešerši, blogy, sociální texty i vývojové prompty v jednom místě.

## Doporučení
Používat GitHub jako jediný zdroj pravdy. Každý den ověřit datum, existenci všech odkazovaných karet a validitu content-index.json. Lokální dashboard spouštět pouze z naklonované GitHub složky.

## SEO titulek
Jak automatizovat obsahový dashboard bez ručního přenášení souborů

## Meta popis
Praktický postup Agenda24 propojuje ChatGPT Work, soukromý GitHub a lokální dashboard bez ručního stahování Markdown souborů.

## Perex
Denní obsahový systém nemá člověka nutit kopírovat soubory mezi dvěma nástroji. Ukazuji, jak jsem tento mezikrok odstranil a vytvořil jeden řízený pracovní tok.

## Blogový titulek
Od ranního reportu k živému dashboardu: bez ručního MD

## Osnova blogu
1. Kde vznikal problém. 2. Proč samotná automatizace nestačila. 3. GitHub jako zdroj pravdy. 4. Aktualizace lokálního dashboardu. 5. Kontrola chyb.

## Blogový draft
Denní report je užitečný jen tehdy, když se promění v práci. Původní řešení vytvořilo Markdown soubor, který bylo nutné stáhnout a znovu vložit do Codexu. Technicky to fungovalo, provozně však šlo o slepou uličku. Soubor mohl být později nedostupný, uživatel musel hlídat správnou verzi a dashboard zůstával oddělený od procesu, který obsah vytvářel.

Řešením je jeden zdroj pravdy. V mém případě je jím soukromý GitHub repozitář. ChatGPT Work do něj každý den zapisuje nové projektové karty a současně aktualizuje JSON index. Dashboard pouze čte tuto strukturu. Každá změna má historii, datum a konkrétní soubory, takže lze zjistit, co se změnilo a případně obnovit předchozí verzi.

Lokální aplikace na adrese 127.0.0.1 zůstává soukromá. Při spuštění nejprve provede bezpečné git pull a teprve potom otevře dashboard. Výsledek spojuje výhody cloudu s lokálním provozem: automatizace pracuje i bez ručního přenosu, ale samotná pracovní nástěnka není veřejně vystavená.

Důležitá je kontrola integrity. Nestačí vytvořit kartu. Index musí odkazovat na existující Markdown soubor, JSON musí být platný a nové datum musí být viditelné ve filtru. Právě tyto kontroly odlišují skutečnou automatizaci od systému, který pouze přesunul ruční chybu na jiné místo.

Pro firmy je tento princip přenositelný. Stejně lze propojit monitoring změn, obchodní leady, dokumentaci nebo interní znalostní bázi. Automatizace má smysl tehdy, když vytvoří rovnou použitelný výsledek ve správném systému.

## Blog pro Enfold
<h1>Od ranního reportu k živému dashboardu bez ručního MD</h1>
<p class="perex">Denní obsahový systém nemá člověka nutit kopírovat soubory mezi dvěma nástroji.</p>
<h2>Problém ručního přenosu</h2><p>Markdown bylo nutné stáhnout a znovu vložit, což vytvářelo chyby a duplicity.</p>
<h2>Jeden zdroj pravdy</h2><p>Soukromý GitHub uchovává karty, index i historii změn. Lokální dashboard si při spuštění stáhne poslední verzi.</p>
<h2>Kontrola výsledku</h2><ul><li>platný JSON index</li><li>existující soubory karet</li><li>viditelné dnešní datum</li></ul>
<p><strong>CTA:</strong> Chcete podobný interní pracovní tok? Agenda24 navrhne a vytvoří řešení na míru.</p>

## Facebook text
Denní report už nemusí končit jako soubor ke stažení. Propojil jsem ChatGPT Work, soukromý GitHub a lokální dashboard tak, aby se nové podklady propsaly rovnou do pracovního systému.

## LinkedIn text
Automatizace není hotová ve chvíli, kdy vytvoří soubor. Je hotová až tehdy, když výsledek bezpečně zapíše do systému, ve kterém se s ním dá pracovat. Agenda24 dnes odstranila ruční přenos mezi ranním monitoringem a obsahovým dashboardem.

## Instagram caption
Méně stahování. Méně kopírování. Jeden živý obsahový dashboard a dohledatelná historie změn. #automatizace #wordpress #Agenda24

## Facebook pro publikaci
Zrušil jsem ruční stahování ranního MD a jeho opětovné vkládání. Nové karty se zapisují přímo do soukromého GitHubu a lokální dashboard si je při spuštění načte. Automatizace má šetřit kroky, ne vytvářet nové. #automatizace #Agenda24

## LinkedIn pro publikaci
Původní proces měl dva kroky: vytvořit report a ručně ho předat dashboardu. To není automatizace, ale přesunutá administrativa. Nově ChatGPT Work zapisuje přímo do soukromého repozitáře, aktualizuje index a lokální dashboard si stáhne poslední verzi. Kde ve vašem procesu stále člověk jen přenáší data mezi nástroji? #automatizace #workflow #GitHub

## Instagram pro publikaci
Report → GitHub → živý dashboard. Bez ručního MD. Bez duplicit. S historií změn. #Agenda24 #automatizace #dashboard

## TikTok balíček
Formát: ukázka před/po, 15 sekund. Hook: „Stahujete report a hned ho nahráváte jinam?“ Scénář: 0–3 s dva zbytečné kroky; 3–9 s přímý tok Work–GitHub–dashboard; 9–15 s živé datum a CTA. Mluvený text: „Tohle není automatizace. Automatizace zapíše výsledek rovnou tam, kde s ním pracujete.“ CTA: „Najděte ve firmě jeden zbytečný přenos dat.“ Hashtagy: #automatizace #workflow #dashboard.

## YouTube Shorts popisek
Jak odstranit ruční přenos souborů mezi AI reportem a pracovním dashboardem.

## Text do grafiky
REPORT BEZ RUČNÍHO PŘENOSU

## CTA
Nechte si navrhnout interní automatizaci Agenda24.

## Alt text
Schéma přímého toku ChatGPT Work přes soukromý GitHub do obsahového dashboardu.

## Prompt na obrázek
Tmavé navy pozadí #030712 a #080B16, magentová #EC0044, čisté rozhraní pracovního toku se třemi vrstvami: report, GitHub, dashboard. Bez robotů, oranžové a levného cyberpunku. Nechat bezpečné místo pro originální logo 24 a český titulek vložené v postprodukci.

## Reference k obrázku
Originální symbol 24 a Martinovy fotografie používat pouze ze schválených Agenda24 referencí v manifestu.

## Prompt na video
Vertikální 9:16, 15 sekund. Zpočátku ruční přesouvání MD mezi dvěma okny, poté plynulá změna na přímou linku Work–GitHub–dashboard. Navy a magenta, žádné generované logo ani text.

## Reference k videu
Brand manifest Agenda24 a originální symbol 24.

## Návrh funkce / aplikace / pluginu
A24 Dashboard Sync Guard – kontrola posledního data, validity indexu, chybějících karet a posledního commitu.

## MVP verze
Přehled stavu, ruční kontrola, upozornění na starší datum a export technického reportu.

## Prompt pro Codex k funkci
Vytvoř A24 WordPress administrativní plugin Dashboard Sync Guard napojený na centrální licenční server Agenda24. Česká administrace, stav Licence aktivní / Licence neaktivní, neplatná licence nesmí shodit web. Plugin načte stav soukromého obsahového API přes bezpečný serverový endpoint, ukáže poslední úspěšnou aktualizaci, počet karet podle projektů a chyby indexu. Použij WP HTTP API, nonce, capability checks, sanitizaci, escapování, timeout a cache. Přidej testy, instalační ZIP a zákaznickou dokumentaci.
