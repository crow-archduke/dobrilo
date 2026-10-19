**Verze 1.1 · 2. října 2026 · Zadání pro UX a UI designéra**

Tento dokument vymezuje první veřejnou verzi dobrilo.cz a zadává její navigaci, obsahové šablony, interakce a stavy pro desktop i mobil. Uživatel vstupuje na Ostrov Socci, objevuje jeho místa, poznává skutečné lidi i fiktivní postavy a zdarma přehrává dostupný obsah. Primárním samostatným návštěvníkem je dítě mladšího školního věku. Rodič má přímou cestu k obsahu a informacím o webu.

**Rozsah první verze je veřejný obsahový web.** Živé videolekce, poptávky výuky, zkušební lekce, placené balíčky, účty, rezervace, platby a pracovní rozhraní lektorů přijdou později. Pro jejich budoucí doplnění definujeme strukturální FUTURE HOOKS; v aktuálních wireframech nemají ovládací prvky, placeholdery ani vyhrazené prázdné plochy.

Dokument je specifikací chování, nikoli návrhem grafiky. Označení S01 až S22 identifikují šablony stránek, C01 až C07 sdílené komponenty, K01 až K72 interakce a F01 až F12 uživatelské cesty. Stejné ID platí v sitemapě, click mapě i seznamu obrazovek.

## Obsah dokumentu

[0 Rozhodnutí a způsob čtení](#rozhodnutí-a-způsob-čtení)

[1 Audit konceptu po upřesnění rozsahu](#audit-konceptu-po-upřesnění-rozsahu)

[2 Informační architektura a sitemap](#informační-architektura-a-sitemap)

[3 Mapa Ostrova Socci](#mapa-ostrova-socci)

[4 Click map](#click-map)

[5 Uživatelské cesty](#uživatelské-cesty)

[6 Screen inventory pro designéra](#screen-inventory-pro-designéra)

[7 Content matrix](#content-matrix)

[8 MVP a další fáze](#mvp-a-další-fáze)

[9 Předání a kontrola wireframů](#předání-a-kontrola-wireframů)

[10 Otevřené otázky před zahájením wireframů](#otevřené-otázky-před-zahájením-wireframů)

[CHANGELOG v1.0 → v1.1](#changelog-v1.0-v1.1)

# 0 Rozhodnutí a způsob čtení

**P znamená potvrzené zadání uživatele. N znamená konkrétní návrhové rozhodnutí této specifikace. L znamená budoucí fázi.** Všechna níže popsaná pravidla ovládání, URL, rozmístění a názvy ovládacích prvků jsou návrhem N, pokud nejsou výslovně uvedena jako P. Tím se odlišují produktová fakta od doporučeného řešení pro wireframy.

| **Stav** | **Rozhodnutí**                                                   | **Důsledek pro první verzi**                                                                                                |
|----------|------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| P        | Socci je celý ostrov a digitální svět                            | Domovskou obrazovkou je mapa Ostrova Socci.                                                                                 |
| P        | Dobrilo je průvodce i městečko                                   | Rozhraní rozlišuje Městečko Dobrilo a Průvodce Dobrilo.                                                                     |
| P        | ZŠ PRO DĚTI je škola v městečku                                  | Škola zůstává samostatně dostupným místem a rozcestníkem vzdělávacího obsahu.                                               |
| P        | Hlavní publikum jsou mladší školní děti                          | Krátké pokyny, čitelné názvy, velké cíle a zřetelné přehrávání; volba věku při vstupu se nevyžaduje.                        |
| P        | První verze obsahuje veřejný obsah a představení lidí            | Celá část videopropojení s lektorem je odložena.                                                                            |
| P        | Digitální obsah je zatím zdarma a volně přístupný                | Bez přihlášení, cen, paywallu, knihovny nákupů a předplatného. Fyzické produkty jsou nabídkou externího obchodu.            |
| P        | Webináře jsou balíčky videí podle předmětů                       | V uživatelském rozhraní navrhujeme označení Videolekce a Série videí. Nezobrazují se termíny živých akcí.                   |
| P        | Představení entit využívá krátká videa a popis podle dostupnosti | Úplný textový profil může být zveřejněn i bez videa. Medailonek ani profil nejsou povinnou podmínkou spuštění každé lokace. |
| P        | WORLD CONTINUITY                                                 | Mapa, lokalita a detail tvoří souvislý svět; funkční navigace zůstává přímo dostupná.                                       |
| P        | Každá zveřejněná lokalita má skutečný dokončený obsahový cíl     | Lokace bez obsahu není veřejně aktivní; formát cíle není předepsán medailonkem.                                             |
| P        | Návrh vzniká ve dvou fázích                                      | PHASE A ověří klíčový prototyp; kompletní PHASE B začne až po jeho schválení.                                               |
| L        | Výuka začne poptávkou a následnou domluvou                       | Budoucí cesta nemusí obsahovat samoobslužný kalendář.                                                                       |
| L        | Nejprve zkušební lekce zdarma a poté balíček                     | Zkušební lekce není placená položka. Počet lekcí a pravidla balíčků zatím nejsou rozhodnuta.                                |
| L        | Rodič je kupující a dítě účastník                                | Potvrzený základ budoucího vztahu; samostatné dětské přístupy ani rodinné profily nejsou nyní schválenou funkcí.            |

Obsahové názvy v hranatých závorkách jsou záměrné zástupné údaje. Konkrétní jména, předměty, videa, knižní tituly, fotografie a URL dodá provozovatel. Dokument netvrdí, že jsou tyto materiály již vyrobené.

## 0 1 WORLD CONTINUITY

**Vstup do lokace má působit jako vstup do konkrétního místa na Ostrově Socci.** Název, prostorová návaznost, místní obyvatelé a obsah musí vytvářet jeden čitelný celek. Nestačí po kliknutí na budovu zobrazit zaměnitelný katalog s jiným nadpisem.

Každá lokalita má rozpoznatelný vstupní kontext, stručné vysvětlení toho, co zde uživatel najde, a skutečný obsah dosažitelný bez dalšího scénického mezikroku. Layout propojí prostředí s výběrem obsahu; běžné karty, seznamy a filtry zůstávají čitelné a pojmenované. Není nutná průchozí 3D scéna, herní pohyb ani nová interakce. Konkrétní styl, barvy a výtvarné zpracování tento dokument neurčuje.

Na navazujícím předmětu, sérii či detailu zůstává patrný hlavní domov položky: pojmenované místo, drobečky a střídmě pokračující místní kontext. Přehrávač nebo text přitom dostává přednost před velkou scénickou plochou. Na mobilu se prostředí zjednoduší, ale neztratí jméno místa ani smysl vstupu.

**Jeden záznam má jeden detail a jeden hlavní domov.** Příchod z jiné lokace, rejstříku nebo hledání zachovává zdroj přes kontextové Zpět, nikoli vytvořením další tematické kopie detailu. Přímý vstup zvenku použije hlavní domov a pojmenovanou cestu do něj; uživatel nemusí nejprve absolvovat mapu. Mapa ostrova je stále dostupná přes C01. Konkrétní požadavky na pocit místa jsou součástí screen inventory.

# 1 Audit konceptu po upřesnění rozsahu

| **Riziko**                                              | **Přijaté návrhové řešení**                                                                                                                                                       |
|---------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Geografie vytváří dlouhou cestu k obsahu                | Městečko je volitelné zastavení. Do školy i dalších míst vedou přímé vstupy z mapy, menu a hledání.                                                                               |
| Dítě nerozumí názvu lokace                              | Každé místo má krátký funkční podtitulek. Název Labyrint sám o sobě nezastupuje informaci o podcastu.                                                                             |
| Po otevření budovy se ztratí svět                       | WORLD CONTINUITY pokračuje vstupem do prostředí lokace i na jejích detailech. Místní kontext, obsah a obyvatelé tvoří společný layout; není nutná herní ekonomika.                |
| Rodič potřebuje rychlou cestu                           | Trvale dostupné hledání, přehled obsahu, rozcestník školy a informace pro rodiče.                                                                                                 |
| Stejný člověk nebo obsah se opakuje                     | Jeden kanonický profil nebo detail a více kontextových odkazů. Medailonek zůstává součástí profilu.                                                                               |
| Skutečný lektor splývá s fiktivní postavou              | Samostatné přehledy Lidé a Postavy, odlišné popisky rolí a fotografie versus ilustrace.                                                                                           |
| Označení webinář slibuje živou účast                    | Ve škole se používají Videolekce a Série videí; obrazovky vysvětlují, že jde o nahraná videa.                                                                                     |
| Obsah Labyrintu může mířit na starší děti               | Každý obsah může mít redakčně dodané doporučení publika. Pokud je určen starším dětem, je to viditelné před spuštěním. Nevymýšlíme jednotné věkové hodnocení bez znalosti obsahu. |
| Na mobilu nejdou trefit budovy                          | Mapa má přiblížení, zřetelné cíle a stejně dostupný seznam všech zveřejněných míst. V městečku lze při oddálení sloučit blízké body.                                              |
| Návrat z detailu zahodí orientaci                       | Návrat do přehledu obnoví filtry, pozici seznamu a případně pohled mapy v rámci aktuální návštěvy.                                                                                |
| Chybějící materiály vedou do slepých uliček             | Každá zveřejněná lokalita má dokončený smysluplný obsahový cíl, bez povinného formátu. Nepřipravená lokalita není aktivním cílem veřejné mapy ani navigace.                       |
| Budoucí placená výuka komplikuje první verzi            | FUTURE HOOKS v S04, S05 a S14 určují místo pozdějšího rozšíření. Dnes se nekreslí nabídky, CTA ani prázdná rezerva.                                                               |
| Obsah je dosažitelný jen mapou nebo klientským klikáním | Každý publikovaný relevantní záznam má kanonickou URL a dohledatelné textové odkazy. Přímý příchod otevře obsah s kontextem Socci.                                                |
| Kompletní výroba před ověřením principu                 | PHASE A ověří mapu, prostředí lokalit a klíčové cesty. Po schválení následuje úplná sada PHASE B.                                                                                 |

# 2 Informační architektura a sitemap

## 2 1 Názvosloví v rozhraní

| **Pojem**        | **Význam a použití**                                                                                                 |
|------------------|----------------------------------------------------------------------------------------------------------------------|
| Ostrov Socci     | Celý svět. Domovský cíl se jmenuje Mapa ostrova.                                                                     |
| Městečko Dobrilo | Konkrétní lokalita. V navigaci vždy s označením Městečko, pokud by mohl vzniknout dvojí význam.                      |
| Průvodce Dobrilo | Fiktivní postava. Jeho profil je v rejstříku postav; vysvětlení ovládání je v Přístavu.                              |
| ZŠ PRO DĚTI      | Digitální škola v městečku. Podtitulek odpovídá dostupné nabídce, například Videolekce a naši lektoři.               |
| Sborovna         | Kontextový přehled pedagogů a lektorů školy. Je to filtrování rejstříku Lidé, nikoli nový objekt na ostrově.         |
| Lidé             | Skuteční pedagogové, lektoři a instruktoři.                                                                          |
| Postavy          | Fiktivní obyvatelé a entity světa. Hlavní nadpis rejstříku Kdo žije na Socci.                                        |
| Videolekce       | Nahraná vzdělávací videa ve škole.                                                                                   |
| Série videí      | Uspořádaný soubor nahraných videí k jednomu tématu. Interní označení webinář se nepromítá do termínů nebo rezervací. |
| Obchod           | Vstup k fyzickým produktům. Nákup probíhá v externím e-shopu.                                                        |

## 2 2 Trvalá navigace

**Desktop:** logo dobrilo.cz s doplňkem Ostrov Socci vede na S01. Vedle něj jsou Mapa ostrova, Videa a poslech, Lidé, Postavy, Hledat a nabídka Místa. Místa rozbalí zveřejněné lokality z celkových třinácti v pořadí podle tabulky v kapitole 3. Aktivní cíl je zřetelný také jinak než barvou.

**Mobil:** v pevné horní liště jsou logo s návratem na mapu, Hledat a Menu. Menu C02 obsahuje stejných pět hlavních cílů, všechna zveřejněná místa a Pro rodiče. Skupiny jsou oddělené nadpisy; další podmenu se neotevírá. Při dlouhém seznamu se posouvá obsah menu. Miniaturní audio přehrávač využívá spodní okraj obrazovky, proto se nezavádí další spodní navigační lišta.

**Patička:** Jak ostrov funguje vede do Přístavu; Pro rodiče a kontakt vede na S20; údaje o provozovateli a soukromí na varianty S21; Obchod na S17. Konkrétní texty provozovatele se doplní jako obsah. Tato specifikace neurčuje právní znění.

Mapa je výchozí obrazovka. Přímé odkazy na předmět, knihu, video nebo profil nikdy nepřesměrovávají přes Přístav. Obchod nemá tlačítko košíku v globální navigaci.

## 2 3 Hierarchie všech stránek

Odsazení ve sloupci Úroveň vyjadřuje obsahovou návaznost. Cesty v posledním sloupci jsou kanonické návrhy URL; mapa a městečko mohou na stejnou stránku odkazovat přímo. Fyzická poloha budovy neurčuje počet povinných kliknutí.

| **Úroveň**          | **Stránka nebo skupina**             | **Obrazovka a návrh URL**                           |
|---------------------|--------------------------------------|-----------------------------------------------------|
| 0                   | Mapa Ostrova Socci                   | S01 · /                                             |
| 1                   | Přístav a vysvětlení ovládání        | S02 · /pristav                                      |
| 1                   | Městečko Dobrilo                     | S03 · /mestecko-dobrilo                             |
| 2 v městečku        | ZŠ PRO DĚTI                          | S04 · /skola                                        |
| 3 ve škole          | Předmět                              | S05 · /skola/predmet/\[slug\]                       |
| 4 u předmětu        | Série videí                          | S06 · /serie/\[slug\]                               |
| 5 v sérii           | Jednotlivé video                     | S08 · /videa/\[slug\]                               |
| 3 ve škole          | Sborovna                             | S13 · /lide?oblast=skola                            |
| 4 ze Sborovny       | Profil pedagoga nebo lektora         | S14 · /lide/\[slug\]                                |
| 2 v městečku        | Audioknihovna                        | S09 · /audioknihovna                                |
| 3 v Audioknihovně   | Detail audioknihy a její kapitoly    | S10 · /audioknihy/\[slug\]                          |
| 2 v městečku        | Kulturní dům                         | S07 · /kulturni-dum                                 |
| 2 v městečku        | Obchod                               | S17 · /obchod → externí e-shop                      |
| 1                   | Plavání                              | S07 · /plavani                                      |
| 1                   | Lyžování                             | S07 · /lyzovani                                     |
| 1                   | Enviro                               | S07 · /enviro                                       |
| 1                   | V TÝMU                               | S07 · /v-tymu                                       |
| 1                   | Hmyzárium                            | S07 · /hmyzarium                                    |
| 1                   | Labyrint                             | S11 · /labyrint                                     |
| 2 v Labyrintu       | Detail audio epizody                 | S12 · /audio/\[slug\]                               |
| 1                   | Amfiteátr                            | S07 · /amfiteatr                                    |
| 1 funkční cesta     | Videa a poslech                      | S18 · /obsah                                        |
| 2 z přehledu        | Série, video, audiokniha nebo audio  | S06, S08, S10 nebo S12; stejné URL jako výše        |
| 1 funkční cesta     | Lidé na Socci                        | S13 · /lide                                         |
| 2 z přehledu lidí   | Profil skutečného člověka            | S14 · /lide/\[slug\]                                |
| 1 funkční cesta     | Kdo žije na Socci                    | S15 · /postavy                                      |
| 2 z přehledu postav | Profil postavy včetně Dobrila        | S16 · /postavy/\[slug\]; Dobrilo /postavy/dobrilo   |
| 1 funkční cesta     | Hledání                              | S19 · /hledat?q=\[dotaz\]                           |
| 1 servisní cesta    | Pro rodiče a kontakt                 | S20 · /pro-rodice                                   |
| 1 servisní cesta    | Informace o provozovateli a soukromí | S21 · /informace/provozovatel a /informace/soukromi |
| systémový stav      | Nenalezená nebo odstraněná stránka   | S22 · při neexistující URL                          |

Jednotlivá kapitola audioknihy je stav S10, ne samostatná nová stránka. Přímý odkaz může použít parametr kapitola=\[ID\]. Výběr se připraví, ale audio začne až po stisku Pustit. Seznam mapy používá /?zobrazeni=seznam, zvýraznění místa /?misto=\[ID\] a postavy /?postava=\[slug\]. Městečko, škola a předmět nejsou povinným průchodem k již známému videu.

## 2 4 Obsahové objekty a jejich vztahy

| **Objekt**       | **Povinné údaje pro publikaci**                                                   | **Vazby a pravidla**                                                                                  |
|------------------|-----------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| Místo            | ID, název, funkční podtitulek, krátký popis, pozice nebo oblast na mapě           | Jedna stránka místa; lidé, postavy a obsah jsou připojené odkazy.                                     |
| Skutečný člověk  | Jméno, role, fotografie nebo schválený zástupný portrét, krátké představení       | Více tematických oblastí; jedna profilová stránka. Odbornost se uvádí podle dodaných podkladů.        |
| Fiktivní postava | Jméno, ilustrace, krátký popis, hlavní místo výskytu                              | Jedna profilová stránka; další výskyty a související obsah mohou odkazovat z více míst.               |
| Medailonek       | Video přiřazené k člověku či postavě, náhled, název                               | Je součástí profilu. Nevytváří druhý samostatný výsledek v katalogu videí.                            |
| Samostatné video | Název, náhled, zdroj, krátký popis, hlavní místo                                  | Volitelně série, předmět, účinkující, délka a doporučené publikum. Zobrazuje se v S08.                |
| Série videí      | Název, popis, předmět nebo téma, nejméně jedno publikované video v určeném pořadí | Jeden záznam série; položky mají vlastní S08. Do série lze vstoupit kterýmkoliv videem.               |
| Audiokniha       | Název, obálka, popis, autor nebo uvedení původu, nejméně jedna audio stopa        | Jedna stránka S10; jedno souvislé audio nebo kapitoly.                                                |
| Audio epizoda    | Název, náhled, zdroj, popis, hlavní místo                                         | S12 pro podcast i případný hudební obsah; pořadí a vazba na další díl jen pokud jsou redakčně určeny. |
| Předmět          | Název, stručný popis, alespoň jedna publikovaná videosérie                        | Skupiny videí a relevantní pedagogové; předměty nevytvářejí další budovy na mapě.                     |

Povinné údaje z tabulky doplňují u indexovatelných stránek pole z části 2.5. Medailonek je volitelná součást profilu; jeho existence není podmínkou publikace člověka, postavy ani příslušné lokace.

Stejná položka může být doporučená v několika místech. Má však jeden hlavní domov pro drobečkovou navigaci. Rychlá navigace a mapa čtou stejná data. Samostatné medailonky skutečných lidí ani postav se nepočítají jako metodické videolekce.

## 2 5 SEO & DISCOVERABILITY REQUIREMENTS

**Mapa nikdy není jedinou cestou k indexovatelnému obsahu.** Stávající URL v sitemapě zůstávají. Publikovaný obsah se otevírá přímo na své adrese, bez přesměrování na domov, Přístav, přihlášení nebo povinnou volbu role. Indexovatelnost je technická způsobilost stránky; neznamená záruku zařazení či pozice ve vyhledávači.

| **Rodina stránek**                      | **Indexovatelný cíl**                                              | **Objevení bez mapy**                                                                                                   |
|-----------------------------------------|--------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| Místa S02, S03, S04, S07, S09, S11, S17 | Samostatné URL všech zveřejněných lokalit podle sitemapu           | Nabídka Místa, textový Seznam míst, související stránky; externí e-shop má vlastní adresu mimo Socci.                   |
| Předmět S05                             | /skola/predmet/\[slug\]                                            | Škola; příslušná série a video; relevantní pedagog.                                                                     |
| Série S06 a video S08                   | /serie/\[slug\] a /videa/\[slug\]                                  | Předmět či lokalita; Videa a poslech; série odkazuje na jednotlivé díly.                                                |
| Audiokniha S10 a audio S12              | /audioknihy/\[slug\] a /audio/\[slug\]                             | Audioknihovna, Labyrint či jiné hlavní místo; Videa a poslech. Kapitola je stav knihy, nikoli další indexovaná stránka. |
| Člověk S14 a postava S16                | /lide/\[slug\] a /postavy/\[slug\]                                 | Rejstříky Lidé a Postavy; související lokality a obsah. Medailonek nemá duplicitní samostatnou stránku.                 |
| Hlavní přehledy a servisní stránky      | /, /obsah, /lide, /postavy, /pro-rodice a publikované varianty S21 | Trvalá navigace a patička; pouze skutečně naplněné stránky.                                                             |

**Obsahový kontrakt každé indexovatelné stránky:** jedno unikátní a výstižné H1; skutečný textový popis odpovídající obsahu; samostatně vyplnitelný SEO title a meta description; náhled pro sdílení s titulkem, popisem, obrázkem a kanonickou URL; tematicky související interní odkazy. U média popis doplňuje přehrávač, u přehledu vysvětluje jeho obsah. Náhled může využít schválenou obálku, portrét či reprezentaci místa; nesmí slibovat jiný obsah. Tyto údaje jsou součástí obsahového modelu, nikoli nové administrační obrazovky v MVP.

**Odkazy a načítání:** všechny publikované cíle musí být dosažitelné řetězcem běžných odkazů s adresou a srozumitelným názvem. Nespoléhat na hotspot v obrázku, zadání dotazu do hledání ani jednorázové JS kliknutí. H1, popis, odkazy a metadata musí být dostupné také při samostatném načtení URL. Seznam míst a rejstříky jsou plnohodnotné cesty. K44 nadále vizuálně připojuje dalších 12 položek; implementace musí zajistit objevení i dalších položek prohledatelným stránkováním nebo rovnocennými běžnými odkazy. XML sitemap obsahuje pouze zveřejněné kanonické URL. Tato technická povinnost nepřidává novou obrazovku ani nový uživatelský krok.

**Kanonické adresy a stavy:** základní publikované stránky mají vlastní kanonickou URL. Zobrazení mapy, označení místa či postavy a volba kapitoly ukazují na kanonický základ příslušné stránky. Hledání S19 a kombinace filtrů přehledů včetně Sborovny nejsou samostatné SEO landing pages a mají noindex; záznamy musí zůstat dosažitelné také z nezávislých indexovatelných přehledů. Noindex nesmí být znečitelněn blokací stejné stránky v robots.txt. Nepublikované nebo odstraněné cíle nevystupují v navigaci, výsledcích ani sitemapě; jejich URL vrátí odpovídající nenalezený stav S22 se skutečným HTTP 404, nikoli obsahovou stránku s kódem 200. Dočasná chyba média je E02 na existujícím detailu. Parametrické varianty nevytvářejí nové obsahové záznamy.

**Video a strukturovaná data:** S08 zůstává stránkou věnovanou jednomu videu s dominantním přehrávačem. Náhled, popis a identita média se zpřístupní bez spuštění; přehrávání začne pouze vědomou akcí. Datový model uchová typ, stabilní ID, název, popis, URL, náhled, hlavní domov, související entity a skutečně dostupné údaje jako autor, délka či datum. Později lze nad těmito záznamy dodat vhodné schema metadata, například VideoObject nebo AudioObject, bez změny URL a hierarchie. Mapování se zvolí podle reálného obsahu; fiktivní místo či postava se nevydává za skutečnou organizaci nebo odborníka. Schema musí odpovídat viditelnému obsahu a není příslibem rozšířeného výsledku ve vyhledávání.

**Přímý příchod a wireframe:** první pohled vysvětlí, co je otevřeno a kam to patří na Socci. U detailu je dostupný jeho hlavní domov i Mapa ostrova; žádné fiktivní Zpět na stránku, kterou návštěvník nenavštívil. Designér označí H1, textový popis, kontext a interní odkazy přímo ve šabloně. SEO title, meta description, náhled a případná schema pole zapíše do anotace obsahového kontraktu, bez přidávání technických polí do veřejného rozhraní.

Technické podklady pro implementaci: Google Search Central — odkazy https://developers.google.com/search/docs/crawling-indexing/links-crawlable ; kanonické URL https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls ; noindex https://developers.google.com/search/docs/crawling-indexing/block-indexing ; video https://developers.google.com/search/docs/appearance/video . Definice médií: https://schema.org/VideoObject a https://schema.org/AudioObject .

# 3 Mapa Ostrova Socci

## 3 1 Obsazení mapy

Architektura mapy obsahuje následujících třináct míst. Ve veřejné mapě jsou aktivní jen lokality připravené podle části 9.3; stejný publikovaný výběr používají seznam, menu a hledání. Další budovy nepřidáváme. ZŠ PRO DĚTI uvnitř městečka je potvrzený vztah P. Ostatní níže uvedené zóny jsou návrhem N pro prostorovou orientaci. Při práci s existující ilustrací se přizpůsobí její dané geografii; nevydávají se za nové skutečnosti příběhového světa.

| **ID a místo**       | **Návrh polohy a důvod**                                                 | **Cíl kliknutí**        |
|----------------------|--------------------------------------------------------------------------|-------------------------|
| L01 Městečko Dobrilo | Sever ostrova; společenské a vzdělávací centrum                          | S03 · /mestecko-dobrilo |
| L02 ZŠ PRO DĚTI      | Uvnitř městečka; vzdělávací obsah                                        | S04 · /skola            |
| L03 Plavání          | U pobřeží nebo vodní plochy; tematická souvislost                        | S07 · /plavani          |
| L04 Lyžování         | Vyvýšená část ostrova; tematická souvislost                              | S07 · /lyzovani         |
| L05 Enviro           | Přírodní část ostrova; obsah o prostředí                                 | S07 · /enviro           |
| L06 V TÝMU           | Otevřené místo mezi městečkem a přírodou; setkávání                      | S07 · /v-tymu           |
| L07 Audioknihovna    | V městečku nebo při jeho okraji; čtení a poslech                         | S09 · /audioknihovna    |
| L08 Hmyzárium        | U přírodní části poblíž Envira; svět Hmyzáků                             | S07 · /hmyzarium        |
| L09 Labyrint         | Samostatně rozpoznatelná část ostrova; podcastová série                  | S11 · /labyrint         |
| L10 Amfiteátr        | Otevřená scéna mimo městečko; příběhy a audiovizuální obsah              | S07 · /amfiteatr        |
| L11 Kulturní dům     | V městečku; hudební a kulturní entity                                    | S07 · /kulturni-dum     |
| L12 Obchod           | V městečku; fyzické produkty Flashtones                                  | S17 · /obchod           |
| L13 Přístav          | Na pobřeží, ideálně při spodním okraji mapy; srozumitelný vstup do světa | S02 · /pristav          |

## 3 2 Chování mapy

- Jedno kliknutí na samostatně viditelnou budovu nebo její popisek otevře přímo odpovídající stránku. Budova i popisek sdílejí jeden interaktivní cíl. Nepřidává se mezikrok Vstoupit.

- Celkový pohled používá prioritně názvy míst. Blízké body v městečku se při nedostatku prostoru sloučí do cíle Městečko Dobrilo. Jeho otevření ukáže zveřejněné místní vstupy v S03. Seznam míst a nabídka Místa vždy obsahují každou zveřejněnou budovu jednotlivě.

- Přiblížení odkryje postavy a drobnější cíle. Dobrilo může být viditelný u Přístavu už v celkovém pohledu. Další vybrané postavy jsou umístěny podle redakčně přiděleného hlavního místa; mapa nemusí zobrazovat všechny záznamy rejstříku současně.

- Kliknutí na postavu vždy otevře její profil S16. Nepředvídatelné náhodné spuštění zvuku, videa či úkolu není součástí MVP. Obsah se spustí až uvnitř profilu vědomou akcí.

- Ovládání zahrnuje Přiblížit, Oddálit, Celý ostrov a přepnutí Mapa / Seznam míst. Stav Seznam míst používá stejné položky jako mapa a je použitelný i při nenačtené ilustraci.

- Na desktopu lze přiblížený pohled posunout tažením. Kolečko myši běžně posouvá stránku; změna měřítka má vlastní ovládání. Na mobilu je posun uvnitř vymezené mapy možný tažením, přiblížení gestem dvěma prsty i tlačítky. Vně mapy se posouvá stránka.

- Mapa nesmí zabrat mobil tak, aby nebyla dostupná horní lišta a přepínač seznamu. Na velmi malém displeji lze využít seznam bez jakéhokoliv gesta na mapě.

- Návrat Zpět obnoví předchozí přiblížení a posun během aktuální návštěvy. Celý ostrov obnoví výchozí pohled a zruší zvýraznění.

- Odkaz Ukázat na mapě vede na S01 s označeným místem nebo postavou. Mapa je sama přiblíží do viditelné oblasti; nic nepřehrává. Při selhání mapy zvýrazní odpovídající položku seznamu.

- Drobné zvýraznění či animace může potvrdit interakci. Nejsou podmínkou pochopení ani postupu. Dekorace bez cíle nemá stejné zvýraznění jako aktivní prvky.

## 3 3 První návštěva a Přístav

Po otevření domény se ihned zobrazí S01. Součástí stránky je stručné uvítání od Dobrila a nepovinný odkaz Jak ostrov funguje na S02. Nevzniká registrační obrazovka, povinná prohlídka ani dotaz na věk či roli návštěvníka. Uvítání není vyskakovací dialog a nezakrývá mapu.

Přístav v jedné krátké stránce vysvětlí tři věci: místa otevírají obsah, Lidé představují skutečné lektory a Postavy představují obyvatele příběhového světa. Dále ukáže cestu na mapu, do školy a k informacím pro rodiče. Dobrilo má odtud vlastní profil. Přístav se dá kdykoliv znovu otevřít z mapy nebo patičky.

# 4 Click map

Každý řádek používá pořadí **uživatel vidí → klikne nebo provede akci → reakce → cíl → dostupná činnost → návrat**. Opakované komponenty sdílejí jeden popis chování. Například K11 platí jednotlivě pro všechny cíle L01 až L13 z kapitoly 3; jejich přesné URL jsou uvedeny tam. Žádný další typ interaktivního prvku se do MVP nepřidává bez doplnění této mapy a příslušného stavu. Cíle L01 až L13 se veřejně aktivují podle části 9.3; nezveřejněné lokality nemají klikací vstup. Přechody zachovávají místní kontext podle WORLD CONTINUITY, bez nové mezistránky.

Otevření detailu samo o sobě nespouští média. Ovládací prvky uvnitř přehrávačů zachovávají stránku a její adresu. Odkaz Zpět obnovuje poslední interní kontext; při přímém příchodu na detail použije pojmenovaný nadřazený přehled. Tlačítko prohlížeče Zpět zachovává své standardní chování.

## 4 1 Globální navigace

| **ID a prvek**                  | **Úplný průchod interakcí**                                                                                                                                                                                   |
|---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| K01 Logo a Mapa ostrova         | Logo nebo Mapa ostrova → aktivuje odkaz → načte mapu → S01 → objevuje místa → přes historii zpět na původní stránku.                                                                                          |
| K02 Hlavní cíle                 | Videa a poslech, Lidé, Postavy nebo Hledat → zvolí cíl → otevře příslušný přehled → S18, S13, S15 nebo S19 → hledá a vybírá → logo na mapu nebo historie zpět.                                                |
| K03 Nabídka Místa               | Místa na desktopu → aktivuje tlačítko → rozbalí seznam zveřejněných cílů z L01 až L13 → zůstává na stránce → vybere místo → opětovný stisk, Escape nebo klik mimo nabídku ji zavře a vrátí fokus na spouštěč. |
| K04 Položka nabídky míst        | Název lokace v nabídce → aktivuje odkaz → nabídka se zavře → cíl L01 až L13 → prohlíží obsah místa → přes historii nebo Mapu ostrova.                                                                         |
| K05 Mobilní Menu                | Tlačítko Menu → klepne → otevře překryv C02 s fokusem uvnitř → menu nad původní stránkou → vybere cíl podle K02 nebo K04 → zavře pomocí K06.                                                                  |
| K06 Zavření menu                | Zavřít nebo okolí překryvu → aktivuje, případně stiskne Escape či systémové Zpět → zavře jen menu → původní stránka a posun → pokračuje → fokus se vrátí na Menu.                                             |
| K07 Patička                     | Pojmenovaný odkaz v patičce → aktivuje → otevře odpovídající stránku → S02, S20, S21 nebo S17 → čte či pokračuje odkazem → přes historii nebo mapu.                                                           |
| K08 Drobečky a tematické štítky | Pojmenovaný nadřazený přehled nebo téma → aktivuje odkaz → otevře danou kategorii → příslušná stránka místa, předmětu či série → vybírá další obsah → historie zpět na původní detail.                        |
| K09 Kontextové Zpět             | Zpět do \[název přehledu\] → aktivuje → obnoví zdrojový seznam, filtr a posun → předchozí interní kontext, jinak kanonický přehled → pokračuje ve výběru → další navigace je standardní.                      |
| K10 Přeskočit navigaci          | Odkaz zobrazený při ovládání klávesnicí → aktivuje → přesune fokus na hlavní obsah → stejná stránka → čte a ovládá obsah → navigace zůstává dosažitelná běžným pořadím fokusu.                                |

## 4 2 Mapa a vstup do světa

| **ID a prvek**             | **Úplný průchod interakcí**                                                                                                                                                    |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| K11 Budova nebo její název | Aktivní místo L01 až L13 → aktivuje budovu či společný popisek → otevře stránku bez mezidialogu → cíl z kapitoly 3 → prochází jeho obsah → K09 obnoví mapový pohled.           |
| K12 Sloučené městečko      | Městečko Dobrilo se souhrnem míst → aktivuje → otevře místní přehled → S03 → vybere školu, Audioknihovnu, Kulturní dům nebo Obchod → Zpět na mapu obnoví původní pohled.       |
| K13 Postava na mapě        | Viditelná interaktivní postava a jméno → aktivuje → otevře profil → S16 → přečte představení, případně pustí dostupný medailonek → K09 vrátí mapový pohled.                    |
| K14 Přiblížení             | Tlačítko Přiblížit → aktivuje → přiblíží mapu kolem aktuálního středu → S01 → rozliší menší cíle → K15 nebo K17; na maximálním měřítku je tlačítko neaktivní.                  |
| K15 Oddálení               | Tlačítko Oddálit → aktivuje → oddálí mapu do povoleného minima → stejná obrazovka → získá širší přehled → K14; na minimálním měřítku je tlačítko neaktivní.                    |
| K16 Posun mapy             | Přiblížená mapa → táhne, případně použije směrové klávesy při fokusu mapy → změní výřez bez aktivace cíle → stejná obrazovka → hledá okolní místa → opačný posun nebo K17.     |
| K17 Celý ostrov            | Tlačítko Celý ostrov → aktivuje → obnoví celkový pohled a zruší označení místa → S01 → volí další cíl → předchozí detail je dostupný v historii.                               |
| K18 Mapa a Seznam míst     | Přepínač zobrazení → zvolí druhou možnost → vymění mapu za přehled nebo opačně → stav S01 → otevře stejná místa jinou cestou → opačný přepínač zachová dřívější pohled mapy.   |
| K19 Místo v seznamu        | Řádek s názvem a popisem lokace → aktivuje → otevře stránku lokace → cíl L01 až L13 → prochází obsah → K09 obnoví seznam a posun.                                              |
| K20 Ukázat na mapě         | Odkaz u profilu či místa → aktivuje → otevře mapu a zvýrazní známou polohu → S01 s výběrem → otevře označené místo či postavu → historie zpět; K17 zruší zvýraznění.           |
| K21 Jak ostrov funguje     | Uvítání nebo odkaz na Přístav → aktivuje → otevře stručné vysvětlení → S02 → vybere mapu, školu, rodičovské informace nebo Dobrila → K01 nebo K09.                             |
| K22 Poznat Dobrila         | Jméno či karta průvodce v Přístavu → aktivuje → otevře profil hlavního průvodce → S16 /postavy/dobrilo → pozná postavu a případně pustí dostupný medailonek → K09 do Přístavu. |

## 4 3 Obsah a profily

| **ID a prvek**                      | **Úplný průchod interakcí**                                                                                                                                                         |
|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| K23 Předmět                         | Karta předmětu ve škole → aktivuje → otevře jeho nabídku → S05 → vybere sérii, první video nebo pedagoga → K09 do školy.                                                            |
| K24 Sborovna                        | Tlačítko Sborovna → aktivuje → otevře seznam se školním filtrem → S13 oblast=skola → najde pedagoga → K09 do školy; zrušení filtru ukáže všechny lidi.                              |
| K25 Série videí                     | Název nebo náhled série → aktivuje → otevře popis a pořadí videí → S06 → zvolí kterékoliv video → K09 do původního přehledu.                                                        |
| K26 Video v sérii                   | Řádek konkrétního videa → aktivuje → otevře detail se vztahem k sérii → S08 → spustí video a přejde na další → K09 zpět do série.                                                   |
| K27 První video série               | Otevřít první video na kartě série nebo v S06 → aktivuje → otevře první publikované video → S08 → pustí video → K09 do skutečného zdroje kliknutí.                                  |
| K28 Název předmětu či série u videa | Kontextový odkaz → aktivuje → otevře nadřazený obsah → S05 nebo S06 → vybere jiné video → historie zpět.                                                                            |
| K29 Karta člověka                   | Fotografie, jméno a role → aktivuje kartu → otevře jeden kanonický profil → S14 → pozná lektora a dostupný obsah → K09 do místa nebo přehledu.                                      |
| K30 Karta postavy                   | Ilustrace, jméno a krátký popis → aktivuje kartu → otevře profil → S16 → přečte představení, případně přehraje dostupný medailonek či otevře obsah → K09 do místa nebo rejstříku.   |
| K31 Místa na profilu                | Kde mě potkáš s konkrétním místem → aktivuje → otevře stránku místa → příslušná lokace → objevuje další obyvatele a obsah → historie zpět na profil.                                |
| K32 Poznat obyvatele místa          | Tlačítko u naplněné sekce obyvatel tematické lokace → aktivuje → posune na sekci Koho tu potkáš → stejná S07 → vybere skutečného člověka nebo postavu → zpět nahoru běžným posunem. |
| K33 Další lidé z místa              | Všichni lidé z této oblasti → aktivuje → otevře relevantní filtr → S13 oblast=\[místo\] → hledá člověka → K09 do místa.                                                             |
| K34 Další postavy z místa           | Všechny zdejší postavy → aktivuje → otevře filtr místa → S15 misto=\[ID\] → vybírá postavu → K09 do místa.                                                                          |
| K35 Další obsah z místa             | Všechen obsah z tohoto místa → aktivuje → nastaví filtr lokace → S18 misto=\[ID\] → vybírá video či poslech → K09 do místa.                                                         |
| K36 Samostatné video                | Karta s označením Video → aktivuje → otevře detail bez automatického přehrání → S08 → použije přehrávač → K09 do přehledu.                                                          |
| K37 Audiokniha                      | Karta s obálkou knihy → aktivuje → otevře knihu a kapitoly → S10 → vybere kapitolu a pustí audio → K09 do původního přehledu.                                                       |
| K38 Audio epizoda                   | Karta označená Podcast nebo Hudba → aktivuje → otevře detail → S12 → pustí audio → K09 do původního přehledu.                                                                       |

## 4 4 Vyhledávání a seznamy

| **ID a prvek**                    | **Úplný průchod interakcí**                                                                                                                                                          |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| K39 Filtr                         | Oblast, místo, předmět nebo formát podle typu seznamu → změní výběr → ihned se upraví seznam a počet výsledků → stejný přehled → vybírá z užší nabídky → K41 zruší filtry.           |
| K40 Mobilní filtry                | Tlačítko Filtry s počtem aktivních filtrů → aktivuje → rozbalí ovládání uvnitř stránky → stejný přehled → upraví filtry → opětovný stisk skryje ovládání a ponechá výsledky.         |
| K41 Zrušit filtry                 | Tlačítko Zrušit filtry → aktivuje → zruší výběry i místní hledání, ale ne globální dotaz S19 → stejný seznam v základním stavu → vybírá ze všech položek → nové filtrování je možné. |
| K42 Hledání v lidech či postavách | Pole Hledat jméno → zadá text → průběžně filtruje příslušný rejstřík → S13 nebo S15 → otevře profil → vymazání textu obnoví rejstřík.                                                |
| K43 Vymazat místní hledání        | Křížek s popisem Vymazat hledání → aktivuje → vyprázdní místní pole a zachová tematický filtr → stejný rejstřík → upraví výběr → může napsat nový dotaz.                             |
| K44 Načíst další                  | Tlačítko pod dlouhým seznamem → aktivuje → připojí dalších 12 položek bez změny filtru → stejný seznam → pokračuje ve výběru → návrat z detailu zachová už načtené položky a posun.  |
| K45 Pole globálního hledání       | Pole Hledat na Socci → zadá dotaz → dotaz čeká na odeslání → S19 → upraví jej nebo odešle → pole lze vymazat či odejít navigací.                                                     |
| K46 Odeslat hledání               | Hledat nebo Enter → aktivuje → načte výsledky a zapíše dotaz do adresy → S19 q=\[dotaz\] → filtruje typ nebo otevře výsledek → K09 z detailu zachová výsledky.                       |
| K47 Vymazat globální dotaz        | Vymazat u vyplněného dotazu → aktivuje → odstraní dotaz i jeho výsledky → výchozí S19 → zadá nový dotaz nebo použije rychlé cíle → historie zůstává dostupná.                        |
| K48 Typ výsledků                  | Vše, Videa a poslech, Lidé, Postavy, Místa a předměty → zvolí typ → změní výsledky při zachování dotazu → S19 → vybere záznam → Vše zruší omezení typu.                              |
| K49 Výsledek hledání              | Karta s názvem a označením typu → aktivuje → otevře kanonický cíl typu → S02 až S18 podle záznamu → pracuje s jeho obsahem → K09 na výsledky hledání.                                |
| K50 Hledání bez výsledků          | Změnit hledání nebo Zrušit omezení typu → aktivuje → zaostří pole, případně nastaví typ Vše → S19 → opraví dotaz a znovu hledá → mapa a navigace jsou stále dostupné.                |

## 4 5 Přehrávání a obnova

| **ID a prvek**                  | **Úplný průchod interakcí**                                                                                                                                                                                      |
|---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| K51 Pustit video                | Náhled a Pustit video nebo Pustit medailonek → aktivuje → načte a spustí vybrané video, pozastaví jiné médium → S08, S14 nebo S16 → sleduje video → Pauza nebo opuštění stránky.                                 |
| K52 Pauza videa                 | Pauza nebo Pokračovat → aktivuje → střídá přehrávání a pozastavení → stejný přehrávač → pokračuje od daného času → opuštění stránky ukončí video.                                                                |
| K53 Pozice videa                | Časová osa → klikne, táhne nebo použije klávesy → změní pozici při zachování stavu přehrávání → stejné video → sleduje zvolené místo → lze znovu posunout.                                                       |
| K54 Zvuk videa                  | Hlasitost nebo Ztlumit → aktivuje ovládání → upraví zvuk, na mobilu může použít systémovou hlasitost → stejný přehrávač → sleduje s novou hlasitostí → opakovaná změna obnoví zvuk.                              |
| K55 Celá obrazovka              | Celá obrazovka → aktivuje → zvětší video, pokud zařízení funkci podporuje → režim přehrávače → sleduje video → Ukončit celou obrazovku, Escape nebo systémové ovládání vrátí stránku.                            |
| K56 Titulky                     | Titulky, jsou-li dodané → aktivuje → zapne nebo vypne stopu titulků → stejné video → sleduje s titulky → opětovný stisk vypne; bez stopy se ovládání nezobrazuje.                                                |
| K57 Další nebo předchozí video  | Pojmenovaný sousední díl v sérii → aktivuje → otevře další dostupný detail bez autoplay → S08 → vědomě spustí nové video → opačný odkaz nebo historie.                                                           |
| K58 Přepis nebo celý popis      | Rozbalit přepis či celý text → aktivuje → rozvine text na stránce → stejný detail → čte → Sbalit obnoví krátké zobrazení; bez dodaného přepisu ovládání chybí.                                                   |
| K59 Pustit audio                | Pustit audioknihu nebo Pustit epizodu → aktivuje → spustí vybranou stopu od začátku či aktuální pozice → S10 nebo S12 → poslouchá a může procházet web → Pauza, případně zavření mini přehrávače.                |
| K60 Pauza audia                 | Pauza nebo Pokračovat → aktivuje → změní stav bez změny pozice → S10 nebo S12 → pokračuje v poslechu → další stisk změní stav zpět.                                                                              |
| K61 Pozice audia                | Časová osa audia → zvolí čas → přesune aktuální stopu a zachová stav play/pause → stejný detail → poslouchá vybraný úsek → může posunout zpět.                                                                   |
| K62 Kapitola audioknihy         | Řádek kapitoly → aktivuje → zvolí a spustí kapitolu od začátku → S10 stejné knihy → poslouchá, vidí aktuální kapitolu → může vybrat jinou kapitolu.                                                              |
| K63 Další audio díl             | Odkaz na předchozí nebo další redakčně navázanou epizodu → aktivuje → otevře detail nové epizody → S12 → spustí ji vědomě → opačný odkaz nebo historie.                                                          |
| K64 Hlasitost audia             | Hlasitost nebo Ztlumit → aktivuje → změní zvuk, případně systémovou hlasitost mobilu → stejný přehrávač → poslouchá → opakovanou akcí upraví zvuk zpět.                                                          |
| K65 Otevřít z mini přehrávače   | Název aktuální knihy či epizody → aktivuje → otevře její detail a zachová čas i play/pause → S10 nebo S12 → ovládá kompletní přehrávač → K09 vrátí předchozí stránku bez přerušení audia.                        |
| K66 Mini přehrávač play a pause | Pauza nebo Pokračovat v dolní liště → aktivuje → změní stav audia → aktuální stránka se nemění → prochází web a poslouchá → další stisk změní stav zpět.                                                         |
| K67 Zavřít mini přehrávač       | Zavřít přehrávač → aktivuje → zastaví audio a odstraní lištu i aktuální výběr → aktuální stránka → pokračuje bez audia → nové otevření knihy či epizody umožní nový poslech.                                     |
| K68 Spuštění jiného média       | Pustit u jiného videa, medailonku nebo audia → aktivuje → pozastaví předchozí médium a spustí nové → jeho přehrávač → poslouchá či sleduje jen jeden zdroj → předchozí se samo znovu nespustí.                   |
| K69 Zkusit znovu                | Chybový stav přehrávače nebo seznamu → aktivuje Zkusit znovu → zopakuje načtení dané komponenty a zachová kontext → stejná stránka → pokračuje po načtení → při opakované chybě může použít K09 nebo jiný obsah. |

## 4 6 Obchod a servisní cíle

| **ID a prvek**     | **Úplný průchod interakcí**                                                                                                                                                                                    |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| K70 Externí odkaz  | Otevřít e-shop nebo jiný konkrétně pojmenovaný externí odkaz s označením Nová karta → aktivuje → otevře dodanou URL → cizí web → pracuje s jeho obsahem či nakupuje v e-shopu → návrat do původní karty Socci. |
| K71 Kontakt        | Kontaktní e-mail v S20 → aktivuje → otevře e-mailovou aplikaci, pokud je dostupná → vlastní e-mailový klient → napíše provozovateli → návrat do prohlížeče; adresa je současně čitelná a kopírovatelná.        |
| K72 Návrat z chyby | Na mapu ostrova nebo Hledat v S22 či prázdném stavu → aktivuje → otevře zvolený funkční cíl → S01 nebo S19 → pokračuje jinou cestou → historie prohlížeče je dostupná.                                         |

# 5 Uživatelské cesty

## F01 První návštěva dítěte

Otevře dobrilo.cz → S01 s mapou a krátkým uvítáním → vybere zveřejněné místo → vstoupí do rozpoznatelného místního prostředí → zvolí dostupné video, postavu či skutečného člověka → otevře detail nebo profil a vědomě spustí dostupné médium → vrátí se do místa nebo pokračuje souvisejícím obsahem. Cesta funguje i v lokaci bez profilů. Přístav může kdykoliv vložit jako dobrovolné vysvětlení. Úspěch znamená srozumitelný vstup do světa a dostupný obsah bez pomoci s účtem.

## F02 První návštěva rodiče

Přijde na mapu nebo přímým odkazem → otevře Pro rodiče, školu nebo Hledat → zvolí předmět → u série otevře rovnou první video nebo seznam dílů → dítěti ukáže obsah. V MVP nic nekupuje ani nerezervuje. Pokud hledá fyzické produkty, použije F11.

## F03 Hledání konkrétního učitele

Zná jméno: Hledat → zadá jméno → výsledek typu Lidé → S14. Nezná jméno: škola → Sborovna → případně hledání jména nebo tematický filtr → profil. Alternativně předmět → připojení pedagogové → tentýž profil. Pokud lektor nemá zveřejněný vlastní obsah, zobrazí se jeho skutečné představení, dodaná odbornost a případný medailonek bez prázdné sekce a bez nabídky rezervace.

## F04 Nalezení a zakoupení živé lekce v budoucí fázi

**L — nyní se nekreslí.** Potvrzená budoucí posloupnost je nabídka živé výuky → poptávka → osobní domluva → zkušební lekce zdarma → nabídka placeného balíčku → nákup dohodnutým způsobem. Rodič je kupující, dítě účastník. Způsob nákupu, identifikace, potvrzení a čerpání balíčku není rozhodnutý. Nevytváříme z těchto neznámých vlastní checkout ani kalendář.

## F05 Vstup do zakoupené lekce v budoucí fázi

**L — nyní se nekreslí.** Po domluvě musí účastník obdržet srozumitelný termín a cestu k videopropojení. Zda ji dostane zprávou, přes účet nebo jiným nástrojem, zatím není určeno. Aktuální veřejný web žádný vstup do živé lekce neslibuje.

## F06 Sledování videa

Z mapy, školy, přehledu obsahu nebo hledání → S08 → Pustit video → přehrávání → při dokončení nabídka dalšího dostupného dílu nebo návratu. Další video nezačne samo. U medailonku je přehrávač přímo na S14 nebo S16. Při chybě zůstane viditelný název, popis, Zkusit znovu a cesta zpět.

## F07 Poslech audioknihy

Audioknihovna → výběr knihy → S10 → Pustit audioknihu, případně výběr kapitoly → poslech → přechod na jinou stránku zobrazí mini přehrávač → klepnutí na jeho název vrátí detail bez ztráty času. Zavření lišty poslech ukončí. Obnovení stránky či nová návštěva nemají garantované pokračování; dlouhodobá historie poslechu není MVP.

## F08 Nalezení postavy Socci

Objevování: přiblížení mapy → viditelná postava → S16. Přímá cesta: Postavy → název či filtr místa → stejný S16. Z profilu lze přehrát dostupný medailonek, přečíst představení či příběh a pomocí Ukázat na mapě zjistit místo výskytu. Poznávání postav nevyžaduje splnění úkolů.

## F09 Návrat návštěvníka a budoucí přihlášený uživatel

**MVP:** návrat v otevřené návštěvě zachová navigační kontext a aktivní audio. Nové otevření webu zobrazí veřejnou mapu nebo cíl uloženého odkazu; neslibuje osobní přehled ani rozkoukaná videa. **L:** cesta přihlášeného uživatele vznikne teprve po rozhodnutí o účtech. V současném screen inventory není Přihlášení ani Můj účet.

## F10 Rychlá cesta bez procházení mapy

Přímý odkaz zvenku → okamžitě cílová stránka. Nebo horní navigace → Hledat či Videa a poslech → výběr → detail. Uživatel může absolvovat celou návštěvu bez interakce s mapou. Hlavička, názvy míst a kontextové vazby stále udržují vazbu na Ostrov Socci. Detail přebírá pocit hlavního místa a nabízí pojmenovaný přechod do něj; příchod z Google či sdíleného odkazu nevyžaduje žádný vstupní mezikrok.

## F11 Přechod do obchodu

Mapa nebo menu → S17 Obchod → stručná informace o fyzických produktech a externím nákupu → Otevřít e-shop → nová karta e-shopu. Původní karta zůstane dostupná. Socci nevyžaduje účet ani nesimuluje dokončení cizí objednávky.

## F12 Mobil nebo nefunkční mapa

S01 → Seznam míst → zvolená lokace → obsah nebo profil. Tato cesta funguje při nevhodném měřítku, klávesnicovém ovládání i při nenačtené ilustraci. Zpět obnoví seznam. Jestliže neexistuje přímý odkaz, S22 nabídne hledání a mapu, nikoli slepý konec.

# 6 Screen inventory pro designéra

## 6 1 Rozsah výkresů a společná pravidla

**Celkový rozsah zůstává 22 šablon S01 až S22, výroba však probíhá ve dvou fázích.** Nejdříve vznikne a projde schválením PHASE A; až poté se dopracuje úplná PHASE B. S07 má sedm obsahových naplnění, S13 navíc Sborovnu a S21 dvě textové instance. Jde o varianty šablon, nikoli další systémy ovládání. Nový profil či titul je instancí existující šablony.

**PHASE A — CORE UX & WORLD PROTOTYPE:** navrhnout osm reprezentativních šablon S01, S03, S04, S05, S07 Plavání, S14, S16 a S08. Volíme předmět S05 a video S08; S06 i S10 se dokončí v PHASE B. Všech osm reprezentativních šablon má desktopovou i mobilní variantu; v S01 navíc seznam míst. Obsah prototypu musí umožnit skutečně projít vazby mezi místem, člověkem, postavou a médiem; označené ukázkové podklady v návrhu nepředstírají publikovaný obsah.

Propojit cesty: S01 → S03 → S04 → S05 → první video S08; S01 → S07 → S14 → přiřazené video S08; S01 → S16 → místo výskytu nebo navazující S08; ze všech detailů zpět do zdrojového místa a přes C01 na ostrov. Využít existující vztahy obsahu; neprohlašovat vymyšlenou postavu za potvrzeného obyvatele Plavání. Rychlou rodičovskou cestu ověřit přes menu přímo do S04 a dále k videu, bez průchodu mapou. Samostatně ověřit přímý vstup do S08 zvenku.

Z C01 až C07 použít pouze části potřebné pro tyto cesty: navigaci a mobilní menu, mapu/seznam, karty a video. Zahrnout návraty a stavy připraveného a spuštěného videa; úplná sada chyb, filtrů, audio komponent a všech stavů nyní není podmínkou. Použité interakce už nesou své existující K-ID. Výstupem je propojený prototyp a anotace pocitu místa, přímého vstupu a budoucí strukturální rozšiřitelnosti.

**Schvalovací bod po PHASE A:** zadavatel schválí princip světa, navigaci, orientaci dítěte, rychlou cestu rodiče a použitelnost mobilu podle části 9.2. Do úplné produkce se přejde až po tomto schválení; případné úpravy se nejprve ověří na klíčovém prototypu.

**PHASE B — COMPLETE UX:** po schválení dopracovat všech S01 až S22 v desktop/mobile variantách, sedm naplnění S07, Sborovnu, C01 až C07 a společné i specifické stavy. Doplnit všechny požadované MVP flows a úplné anotace K01 až K72. Budoucí živá výuka ani nové formáty se v této fázi současného zadání nezačínají kreslit.

**Společná pravidla pro obě fáze**

Navržené referenční šířky jsou 1440 px a 390 px. U mapy, navigace a přehrávačů navíc ověřit funkčnost při 360 px; tablet plynule přechází mezi dvěma variantami. Počet sloupců se řídí čitelností: obvykle 3 až 4 karty na desktopu, 1 až 2 na mobilu; dlouhé názvy a seznamy epizod používají jeden sloupec.

Každá stránka má C01, s výjimkou jeho rozložení v mobilním menu. Hlavní nadpis identifikuje místo nebo položku. Detail obsahuje drobečky a kontextové Zpět. Při přímém příchodu zvenku se Zpět jmenuje podle konkrétního kanonického přehledu, například Do Audioknihovny; nepředstírá předchozí interní návštěvu.

**Pravidlo naplnění lokality platné pro všechny místní šablony:** uvedené pořadí popisuje běžný stav s dostupným hlavním formátem. Pokud je před jeho dokončením připravený jiný tematicky relevantní cíl, použije se po místním úvodu odpovídající existující karta či profilový odkaz C04; hotový textový příběh lze číst přímo v existující stránce. CTA odpovídá skutečnému cíli, nevytváří se nové ovládání. Prázdné nabídky se vynechají. Tím lze splnit readiness i bez hlavního média, ale nikdy pouze obecným úvodem či příslibem budoucí tvorby. Rozsah typů MVP zůstává zachovaný.

V PHASE A nakreslit pouze výchozí a potřebné stavy vybraných šablon uvedené výše. V PHASE B má každá šablona výchozí stav a všechny níže uvedené výjimky jako samostatný stav či variantu komponenty. Načítání, chyba a prázdný seznam se řeší sdílenými vzory E01 až E06; požadavek na jejich úplnost platí pro předání PHASE B.

## 6 2 Společné stavy

| **ID**                       | **Co je vidět**                                                                    | **Chování a možnost pokračovat**                                                                                                                                                                 |
|------------------------------|------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| E01 Načítání                 | Pevně vyhrazená plocha mapy, seznamu nebo přehrávače, stručná informace o načítání | Hlavička a textové cesty zůstávají dostupné; neskáče výška načtených částí.                                                                                                                      |
| E02 Chyba načtení            | Krátké sdělení podle místa chyby, například Video se teď nedaří přehrát            | Zkusit znovu K69; návrat nebo jiný obsah zůstává dostupný. Technické chybové kódy nejsou hlavním textem pro dítě.                                                                                |
| E03 Nula výsledků filtru     | Nic tu neodpovídá výběru, viditelné aktivní filtry                                 | Zrušit filtry K41 nebo upravit dotaz K50; nikdy nenabízet registraci jako řešení.                                                                                                                |
| E04 Prázdná doplňková sekce  | Prázdná sekce i její CTA se vynechají; zůstává skutečný obsah stránky              | Lokalita musí mít alespoň jeden jiný dokončený smysluplný cíl. Bez něj není veřejně aktivní. Prázdné rejstříky nenabízejí neexistující profily; samotný hotový textový profil video nepotřebuje. |
| E05 Neexistující položka     | S22 s jasným názvem a cestou dál                                                   | Hledat a Na mapu ostrova K72. Odstraněný záznam se neobjevuje v nových seznamech.                                                                                                                |
| E06 Chybějící doplňkový údaj | Nezobrazuje se délka, přepis či volitelná sekce, pokud údaj chybí                  | Žádné prázdné ovládání, zástupné nuly ani nefunkční CTA. Název a základní obsah zůstávají čitelné.                                                                                               |

## S01 Mapa Ostrova Socci

**Účel:** vstup do celého světa a hlavní explorativní navigace.

**Obsah v pořadí:** globální lišta; nadpis Ostrov Socci a stručné uvítání Dobrila; přepínač Mapa / Seznam míst; mapa C03 se samostatným ovládáním; odkaz Jak ostrov funguje; patička. Mapa vychází z míst L01 až L13; interaktivní jsou zveřejněné lokality a vybrané publikované postavy. Neaktivní dekorace neslibuje dostupný obsah.

**Hlavní CTA:** aktivní místo nebo postava. **Sekundární CTA:** Seznam míst, Hledat a Jak ostrov funguje.

**Navigace a interakce:** C01; K11 až K21. Návrat z lokace obnoví původní pohled. Při přímém požadavku Ukázat na mapě je záznam zvýrazněný.

**Stavy:** celková mapa; přiblížená mapa s postavami; seznam míst; zvýrazněné místo či postava; E01 a E02 s dostupným seznamem.

**World continuity / pocit místa:** Celek ostrova ukazuje vztah městečka, ostatních lokalit a postav. Přechod do místa navazuje jeho názvem a místním kontextem. Seznam je funkční alternativou stejného světa, nikoli odchodem na jiný web.

**Desktop a mobil:** desktop vidí více samostatných cílů. Mobil může sloučit městečko, ale seznam stále ukazuje všechna zveřejněná místa samostatně. Mapa nevytlačí ovládání ani odkaz na seznam mimo dosažitelnou oblast.

## S02 Přístav

**Účel:** dobrovolné a opakovaně dostupné vysvětlení světa a navigace.

**Obsah v pořadí:** název Přístav, podtitulek Jak ostrov funguje, Dobrilo s krátkým uvítáním, tři krátká vysvětlení míst, skutečných lidí a postav; odkazy na mapu, školu, profil průvodce a informace pro rodiče.

**Hlavní CTA:** Prohlédnout ostrov. **Sekundární CTA:** Do školy, Poznat Dobrila a Pro rodiče.

**Navigace a interakce:** C01, K01, K04 pro školu, K07 pro rodiče, K22. Žádný krokovací průvodce nebo povinné potvrzení dokončení.

**Stavy:** běžný; E06 při chybějícím doplňkovém médiu. Textové vysvětlení funguje samo.

**World continuity / pocit místa:** Přístav je uvítací místo na pobřeží. Dobrilo, stručná orientace a odchody do světa tvoří jeden vstupní celek. Vysvětlení zůstává dobrovolné; vstup do obsahu se zde neodemyká.

**Desktop a mobil:** desktop může mít ilustraci vedle textu, mobil ji řadí před krátká vysvětlení. Obsah nemá vyžadovat horizontální posouvání.

## S03 Městečko Dobrilo

**Účel:** představit městečko jako konkrétní součást ostrova a rozcestník jeho míst.

**Obsah v pořadí:** název Městečko Dobrilo; krátký popis; lokální pohled nebo výřez ilustrace; zřetelné vstupy do zveřejněných míst ze skupiny ZŠ PRO DĚTI, Audioknihovna, Kulturní dům a Obchod; případně zdejší postavy. Umístění dalších budov v městečku je návrhové rozhodnutí podle kapitoly 3.

**Hlavní CTA:** ZŠ PRO DĚTI, pokud je zveřejněná, jinak první dostupné místní místo. **Sekundární CTA:** další zveřejněná místa a Zpět na mapu.

**Navigace a interakce:** K11 pro jednotlivé vstupy, K13 nebo K30 pro postavy, K09 pro návrat. Lokální výřez nepotřebuje druhou sadu mapových zoomů.

**Stavy:** běžný; E02 ilustrace s funkčním seznamem zveřejněných míst; E06 doplňkových postav.

**World continuity / pocit místa:** Uživatel vstupuje do městečka uvnitř ostrova. Lokální pohled, pojmenované vstupy a případní obyvatelé tvoří společný přehled; škola je zřetelně jeho součástí. Textové cíle navazují na prostorový pohled a fungují i bez něj. Návštěva městečka není povinný průchod do školy.

**Desktop a mobil:** desktop kombinuje ilustraci a přehled. Mobil vždy ukáže zveřejněné místní cíle pojmenované textem pod výřezem, i když jsou budovy v ilustraci malé.

## S04 ZŠ PRO DĚTI

**Účel:** hlavní rozcestník nahrané výuky a školních pedagogů.

**Obsah v pořadí:** název školy a podtitulek podle skutečné nabídky, například Videolekce a naši lektoři; krátké vysvětlení dostupného obsahu; karty publikovaných předmětů; vybrané publikované videosérie; naplněná Sborovna a případný výběr pedagogů. Nenaplněné moduly i jejich CTA se vynechají. Jsou-li připravené pouze profily, škola je představí bez příslibu dosud nedostupných videolekcí.

**Hlavní CTA:** vybrat dostupný předmět nebo Otevřít první video na kartě série; při obsahu tvořeném jen profily otevřít pedagoga či naplněnou Sborovnu. **Sekundární CTA:** Sborovna a Prohlédnout sérii, pokud mají zveřejněný cíl.

**Navigace a interakce:** K23 až K29. Škola je přímo dostupná z nabídky Místa. Hlavní karta série má samostatně název či náhled vedoucí na S06 a akci pro první video vedoucí na S08; nevkládají se interaktivní prvky do jiného celoplošného odkazu.

**Stavy:** běžný; E01 a E02 seznamu; E04 u doplňkových výběrů. Publikace školy se řídí částí 9.3: dostupný školní obsah či hotový profil pedagoga je skutečným cílem. Nejsou-li zatím videa, neukazuje se jejich prázdný modul a podtitulek neslibuje dostupné videolekce.

**World continuity / pocit místa:** Uživatel vstupuje do školy v městečku Dobrilo. Školní vstupní kontext propojí předměty a Sborovnu jako části jednoho místa. Není zde další povinná chodba ani klikání na nepojmenované dveře. Předměty a videa si nesou vazbu Do školy; scéna nesmí odsunout první skutečný cíl za dlouhý úvod.

**FUTURE HOOK — pouze anotace pro další fázi:** Budoucí samostatný modul živé výuky může navázat na školní úvod a předcházet stávajícímu bloku předmětů. Nabídne orientaci mezi individuální a skupinovou výukou a cestu k poptávce. Současné předměty, série a Sborovna zůstanou zachované. V aktuálním wireframu není tento modul, jeho CTA, placeholder ani prázdné rezervované místo. Flexibilita znamená možnost později vložit obsahový blok do toku stránky, nikoli kreslit budoucí službu nyní.

**Desktop a mobil:** předměty mají krátké názvy a vizuální rozlišení. Mobil řadí naplněné předměty před videosérie; Sborovna zůstává samostatně viditelným odkazem, pokud obsahuje zveřejněné pedagogy. Nezobrazují se nákup, kalendář, ceník ani živé učebny.

## S05 Předmět

**Účel:** vybrat téma nahrané výuky v jednom předmětu.

**Obsah v pořadí:** \[Název předmětu\], krátký popis; série videí s názvem, stručným obsahem a počtem dostupných dílů; relevantní skuteční pedagogové. Pouze pokud je nabídka dlouhá, použije Načíst další.

**Hlavní CTA:** Otevřít první video u zvolené série. **Sekundární CTA:** Prohlédnout sérii a profil pedagoga.

**Navigace a interakce:** K25, K27, K29, K44 a návrat Do školy. Přímé otevření videa šetří povinný průchod detailem série.

**Stavy:** seznam; jediná série; E01 až E04 podle situace. Nenaplněné předměty se nevypisují jako prázdné karty.

**World continuity / pocit místa:** Předmět je obsahovou částí školy, nikoli novou budovou. Identita školy a pojmenování předmětu rámují jeho série a pedagogy. Stejná návaznost pokračuje na sérii a videu; návrat Do školy je textově čitelný.

**FUTURE HOOK — pouze anotace pro další fázi:** Za úvodem předmětu lze později vložit samostatný modul živé výuky tohoto předmětu, před blok nahraných sérií. Může spojit relevantní lektory a individuální či skupinové nabídky s poptávkou; nahraný obsah zůstane dostupný stejnou cestou. V aktuálním wireframu není tento modul, jeho CTA, placeholder ani prázdné rezervované místo. Flexibilita znamená možnost později vložit obsahový blok do toku stránky, nikoli kreslit budoucí službu nyní.

**Desktop a mobil:** karty sérií na desktopu v mřížce, na mobilu v jednom sloupci, aby se dva různé cíle na kartě daly dobře rozlišit.

## S06 Série videí

**Účel:** vysvětlit téma série a nabídnout její díly v určeném pořadí.

**Obsah v pořadí:** název a náhled série; krátký popis; předmět, počet videí a případná souhrnná délka; Otevřít první video; číslovaný seznam publikovaných dílů; připojený pedagog nebo lektor.

**Hlavní CTA:** Otevřít první video. **Sekundární CTA:** libovolný díl a profil lektora.

**Navigace a interakce:** K26 až K29, K08 a K09. Žádné odemykání, povinné pořadí ani označení splněno.

**Stavy:** jedno či více videí; E01 a E02; E06 délky. Série bez jediného publikovaného videa se nezveřejňuje.

**World continuity / pocit místa:** Série pokračuje v prostředí svého hlavního místa a předmětu. Úvod a pořadí dílů tvoří jeden celek; další kapitola či díl nevyžaduje návrat na mapu. Není nutná další velká vstupní scéna.

**Desktop a mobil:** seznam dílů je čitelný jako posloupnost, nikoli malé ikony. Mobil řadí úvod, první akci a následně díly; pořadí zůstává stejné.

## S07 Tematická lokalita

**Účel:** představit dané téma prostřednictvím jeho lidí, postav a dostupného digitálního obsahu.

**Obsah v pořadí:** název, pravdivý funkční podtitulek a krátké představení v místním prostředí; první naplněný obsahový modul; další naplněné moduly; návrat na mapu. Je-li připravené samostatné médium, následuje nejprve Co si pustíš. Koho tu potkáš se zobrazí jen s hotovými profily a rozlišuje Lidi a Postavy. Jsou-li jediným obsahem profily, tato sekce je první. Žádná prázdná sekce, povinný medailonek ani podmínka dokončit profily před zveřejněním tematických videí.

**Hlavní CTA:** první skutečný obsahový cíl — video, série, audio nebo profil podle naplnění. **Sekundární CTA:** další dostupné cíle a kontextové přehledy. Poznat obyvatele K32 existuje jen u naplněné sekce obyvatel a delšího úvodu; není povinnou akcí každé varianty. Všichni lidé, Všechny postavy a Všechen obsah se zobrazí jen u naplněných skupin s dalšími položkami mimo místní výběr.

**Navigace a interakce:** K29 až K38, K20 a K09. Lokální výběr ukáže nejvýše šest položek každého typu a následně příslušný přehled. Prázdná skupina ani její odkaz se nezobrazuje.

**Stavy:** pouze digitální obsah bez profilů; pouze lidé; pouze postavy; smíšený obsah; E01, E02, E04 a E06. V PHASE A stačí reprezentativní Plavání s propojenými cíli. V PHASE B přidat anotované varianty, zejména Plavání se třemi videi bez medailonků. Zcela prázdná lokalita není veřejný stav.

**World continuity / pocit místa:** Vstupní kontext a první hotový obsahový modul musí být vnímány jako součást konkrétní lokace. Sdílená šablona sjednocuje ovládání, nikoli všechny lokality do zaměnitelného katalogu. Princip pro každou ze sedmi variant je v tabulce níže a pokračuje v označení hlavního domova na detailech.

**Desktop a mobil:** typy obyvatel mají samostatné nadpisy, nikoli nerozlišenou směs karet. Mobil je řadí pod sebe. Bez profilů zůstává plnohodnotné místní prostředí s dostupným digitálním obsahem; bez médií začíná naplněná skupina profilů.

| **Varianta S07** | **Podtitulek a obsah podle dostupnosti**                                                    | **World continuity / pocit místa**                                                                                                                                                     |
|------------------|---------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Plavání          | Svět plavání. Tematická videa, tipy, metodika; instruktoři a medailonky jen pokud existují. | Vstup do plaveckého prostředí. Úvodní orientace a konkrétní obsah tvoří jednu scénu; instruktoři mohou být její součástí. Video si zachovává označení Plavání a cestu do tohoto místa. |
| Lyžování         | Svět lyžování. Tematická videa a dostupné profily instruktorů.                              | Vstup do lyžařského prostředí, nikoli katalogu fyzických kurzů. Obsah je zasazen do místního kontextu; detail ponechá jméno a orientační vazbu na Lyžování.                            |
| Enviro           | Poznávej přírodu. Dostupný přírodovědný obsah, skuteční lidé a postavy.                     | Pocit přírodního prostředí: úvod propojí místo s tématy a případnými obyvateli. Obsah pokračuje ve stejném místním rámci, bez povinného průchodu dalšími zónami.                       |
| V TÝMU           | Spolupráce a vztahy. Dodaný tematický obsah a související lidé či postavy.                  | Místo setkávání kolem společné činnosti. Layout spojuje téma, ukázku obsahu a účastníky; neposkytuje dojem funkčního chatu nebo komunity. Detail zachová vazbu na V TÝMU.              |
| Hmyzárium        | Poznej svět Hmyzáků. Hotové profily, příběhové popisy a dostupná videa.                     | Vstup do prostředí Hmyzáků. Postavy a jejich příběhy jsou místními vstupy, ne izolovaný obecný seznam. Profil a navazující obsah připomínají domov v Hmyzáriu.                         |
| Amfiteátr        | Příběhy v obraze. Příběhová videa, dostupné entity a další přiřazený obsah.                 | Vstup na příběhovou scénu. Hlavní příběh a další dostupný program jsou součástí místa; detail připomíná Amfiteátr, ale nezmenšuje přehrávač na dekoraci scény.                         |
| Kulturní dům     | Hudba a kulturní svět Flashtones. Dostupná hudba, kulturní video či profily.                | Vstup do kulturního prostoru: program, tvorba a případní účinkující mají místní souvislost. Kulturní audio přebírá domov Kulturní dům, i když používá stejný přehrávač jako Labyrint.  |

## S08 Detail videa

**Účel:** přehrát jedno samostatné video nebo díl série.

**Obsah v pořadí:** název; náhled a přehrávač C05; stručný popis, téma a případné doporučené publikum; vazba na sérii s názvem aktuálního dílu a předchozím či dalším dílem; připojení lidé nebo postavy; přepis pouze pokud je dodaný.

**Hlavní CTA:** Pustit video. **Sekundární CTA:** další díl, celá série, profil účinkujícího a Zpět.

**Navigace a interakce:** K28 až K31, K51 až K58, K68 a K69. Další video nepřehrává automaticky. Po opuštění stránky se video ukončí a při novém otevření je připravené od začátku.

**Stavy:** náhled; načítání; hraje; pauza; dokončeno; chyba; první či poslední díl; samostatné video; E06 doplňkových údajů.

**World continuity / pocit místa:** Video zůstává zasazené do svého hlavního místa, například školy nebo Plavání; název místa a drobečky jsou blízko úvodu. Přehrávač má prioritu. Přímý příchod otevře rovnou video a nabídne pojmenovanou cestu do místa i Mapu ostrova, bez vstupního rituálu.

**Desktop a mobil:** video má prioritu a poměr podle zdroje, standardně vyhrazenou širokou plochu. Na mobilu jsou popis a další díl pod přehrávačem, bez postranního sloupce. Dlouhý název se zalomí.

## S09 Audioknihovna

**Účel:** vybrat audioknihu.

**Obsah v pořadí:** Audioknihovna a podtitulek Poslouchej knihy; stručné představení; obálky s názvem, autorem a dostupnou délkou; případný údaj pro koho je kniha vhodná. Karty se řadí podle redakčního pořadí.

**Hlavní CTA:** Otevřít knihu na kartě. **Sekundární CTA:** Videa a poslech a Mapa ostrova.

**Navigace a interakce:** K37 a podle počtu K44. V MVP se nepřidávají filtry, pro které chybí dostatečně různorodý obsah; konkrétní knihu lze najít globálním hledáním.

**Stavy:** jedna nebo více knih; E01, E02, E04 a E06. Readiness se řídí částí 9.3. Nabídka poslechu konkrétní knihy vždy vyžaduje skutečné přehratelné audio; bez hotového smysluplného cíle není knihovna aktivní.

**World continuity / pocit místa:** Uživatel vstupuje do knihovny. Úvod a výběr obálek působí jako jeden knihovní prostor se srozumitelnými tituly, nikoli jako obecný seznam audio souborů. Prohlížení nevyžaduje hledání neoznačených polic; kniha je otevřitelná přímo. Detail pokračuje vazbou na Audioknihovnu.

**Desktop a mobil:** velké rozpoznatelné obálky; mobil zpravidla dva sloupce, při dlouhých titulcích jeden. Název knihy není ukryt pouze v obrázku obálky.

## S10 Detail audioknihy

**Účel:** poslech celé knihy nebo jejích kapitol.

**Obsah v pořadí:** obálka, název, autor nebo původ, krátká anotace; přehrávač C06; seznam kapitol, pokud existují; doporučené publikum a související postavy nebo obsah, pokud jsou přiřazené. Každá kapitola má název, pořadí a dostupnou délku.

**Hlavní CTA:** Pustit audioknihu, v rozposlouchaném stavu Pokračovat. **Sekundární CTA:** konkrétní kapitola, Do Audioknihovny a související profil.

**Navigace a interakce:** K59 až K62, K64 až K69, případně K58 a K30. Po skončení kapitoly pokračuje další kapitola stejné knihy. Po konci knihy se přehrávání zastaví; jiný titul sám nezačne.

**Stavy:** jedna audio stopa; více kapitol; vybraná kapitola; přehrává; pauza; konec knihy; chyba; aktivní audio jiné položky. Při návratu z mini přehrávače se zachová aktuální stopa a čas.

**World continuity / pocit místa:** Detail působí jako otevření vybrané knihy z Audioknihovny. Obálka, anotace a kapitoly tvoří čitelný celek; jméno knihovny a návrat do ní zůstávají viditelné. Při pokračování audia jinou lokací nese C07 identitu knihy, okolní stránka si ponechá vlastní prostředí.

**Desktop a mobil:** desktop může mít obálku vedle hlavního obsahu. Mobil má přehrávač před seznamem kapitol; řádky kapitol mají dostatečnou plochu pro dotyk.

## S11 Labyrint

**Účel:** představit podcastovou či audio sérii Labyrint a její dostupné díly.

**Obsah v pořadí:** název a vysvětlující podtitulek Podcast Labyrint; krátké představení; redakčně dodané doporučení publika; seřazené publikované epizody; související lidé nebo entity a jejich případné medailonky podle dostupnosti.

**Hlavní CTA:** otevřít zvolený díl. **Sekundární CTA:** profil souvisejícího člověka nebo postavy, Všechen obsah z tohoto místa.

**Navigace a interakce:** K38, K29, K30 a K35; podle délky seznamu K44. Pořadí dílů vychází z podkladů; bez informace o seriálovém pořadí se nepředstírá nutnost absolvovat díly postupně.

**Stavy:** jedna či více epizod; E01, E02, E04 a E06. Obsah určený starším školákům musí mít tuto informaci před spuštěním audia.

**World continuity / pocit místa:** Labyrint je rozpoznatelné místo podcastového projektu. Vstupní prostředí dává rámec epizodám a jejich tématům, ale návštěvník nemusí řešit bludiště, aby se dostal k poslechu. Pojmenované epizody mají přímočaré pořadí a na detailu přetrvává vazba na Labyrint.

**Desktop a mobil:** jeden čitelný seznam epizod s názvem a popisem funguje na obou šířkách. Mobil nedělá z pořadí dílů vodorovný karusel.

## S12 Detail audio epizody

**Účel:** přehrát samostatný podcast či dostupnou hudební položku.

**Obsah v pořadí:** název, označení typu, náhled, popis a původní místo; přehrávač C06; související lidé či postavy; přepis a předchozí či další díl jen podle dodaných podkladů.

**Hlavní CTA:** Pustit epizodu, pro hudbu Pustit skladbu. **Sekundární CTA:** další díl, původní místo, připojené profily.

**Navigace a interakce:** K59 až K61, K63 až K69, případně K58. Po konci se audio zastaví. Přechod na jiný díl otevře jeho detail; spuštění nového audia vyžaduje akci.

**Stavy:** připraveno; přehrává; pauza; dokončeno; chyba; bez návazného dílu; E06 metadat a přepisu.

**World continuity / pocit místa:** Úvod připomíná skutečný hlavní domov epizody — Labyrint, Kulturní dům či jiné přiřazené místo. Stejný přehrávač nepřenáší identitu Labyrintu na veškeré audio. Textový návrat a vazby na související entity drží obsah ve světě.

**Desktop a mobil:** přehrávač je nad delším popisem. Mobil nepřekrývá ovládání audiem v mini přehrávači; pokud je na detailu právě aktivní položka, zobrazuje se jen plný přehrávač.

## S13 Lidé na Socci a Sborovna

**Účel:** najít všechny skutečné lidi nebo pedagogy konkrétní oblasti.

**Obsah v pořadí:** nadpis Lidé na Socci; vysvětlení, že jde o skutečné lektory a instruktory; pole Hledat jméno; filtr oblasti; při školním výběru případně filtr předmětu, pokud existují odpovídající vazby; počet a karty výsledků. Řazení podle zobrazovaného jména abecedně.

**Hlavní CTA:** otevřít profil člověka. **Sekundární CTA:** hledání jména, změna oblasti, Zrušit filtry.

**Navigace a interakce:** K29, K39 až K44. Vstup /lide?oblast=skola používá nadpis Sborovna a popis Pedagogové a lektoři ZŠ PRO DĚTI. Po zrušení školního filtru se obnoví nadpis Lidé na Socci. Globální navigace zůstává v kategorii Lidé.

**Stavy:** vše; Sborovna; jiná oblast; hledání jména; žádné výsledky; E01 až E04. Karta obsahuje fotografii, jméno a stručnou roli; cena nebo dostupnost termínů chybí.

**World continuity / pocit místa:** Globální přehled je funkčním rejstříkem skutečných lidí na ostrově. Sborovna přebírá školní kontext a cestu Do školy při zachování stejného ovládání i profilů. Rejstřík není nová budova a filtr místa nevytváří kopii člověka.

**Desktop a mobil:** desktop filtry nad mřížkou, mobil pole jména vždy viditelné a tematické filtry v rozbalovacím bloku K40. Úvodní výsledky obsahují maximálně 12 položek.

## S14 Profil skutečného člověka

**Účel:** poznat konkrétního pedagoga, lektora nebo instruktora.

**Obsah v pořadí:** fotografie, jméno, role a krátké představení; videomedailonek C05; dodaná odbornost a popis; Kde mě potkáš s vazbami na místa; Obsah tohoto člověka pouze pokud je skutečně přiřazen.

**Hlavní CTA:** Pustit medailonek. Pokud video není dodané, hlavní akce je otevření dostupného obsahu nebo relevantního místa. **Sekundární CTA:** připojený obsah a návrat do seznamu či místa.

**Navigace a interakce:** K31, K36 až K38 podle obsahu, K51 až K56, K58, K68 a K69. Stejný člověk má vždy stejnou stránku i při více odborných oblastech.

**Stavy:** kompletní profil; bez videa; bez připojeného obsahu; E02 přehrávače a E06. Textový profil zůstane použitelný, i když video selže.

**World continuity / pocit místa:** Člověk je představen jako skutečný obyvatel s odborností a vazbami na konkrétní místa. Stabilní profil používá svůj hlavní domov a sekci Kde mě potkáš; odkazy z dalších míst vedou na stejnou URL. Návrat uchová zdroj příchodu, zatímco fotografie a skutečné jméno zůstávají hlavním rozlišením od postav.

**FUTURE HOOK — pouze anotace pro další fázi:** Mezi představením a odborností člověka na jedné straně a návaznými místy či obsahem na druhé lze později přidat samostatný modul Uč se se mnou živě. U příslušného lektora může popsat individuální či skupinovou výuku a vést k poptávce, domluvě, zkušební lekci zdarma a následnému balíčku. V aktuálním wireframu není tento modul, jeho CTA, placeholder ani prázdné rezervované místo. Flexibilita znamená možnost později vložit obsahový blok do toku stránky, nikoli kreslit budoucí službu nyní.

**Desktop a mobil:** důvěryhodná fotografie a skutečné jméno před přehrávačem; mobil řadí vše do jednoho sloupce. Přímá zpráva, osobní kontaktní údaje a rezervace nejsou součástí šablony MVP.

## S15 Kdo žije na Socci

**Účel:** najít fiktivní postavy a entity světa bez nutnosti prohledávat ilustraci.

**Obsah v pořadí:** nadpis Kdo žije na Socci a vysvětlení Postavy ostrova; pole Hledat jméno; filtr místa; karty s ilustrací, jménem a krátkým představením. Dobrilo může mít první vyhrazenou kartu, zbývající pořadí je redakční. Odkaz na skutečné Lidi je doplňkový.

**Hlavní CTA:** otevřít postavu. **Sekundární CTA:** zvolit místo, vyhledat jméno nebo přejít mezi skutečné lidi.

**Navigace a interakce:** K30, K39 až K44 a K02 pro Lidi. Postavy jsou dostupné bez předchozího objevení na mapě.

**Stavy:** všechny postavy; konkrétní místo; jméno; nula výsledků; E01 až E04. Rejstřík nevykazuje procenta objevení ani zamčené siluety.

**World continuity / pocit místa:** Rejstřík je přímou cestou k postavám stejného ostrova. Karty uvádějí souvislost s místem, pokud je přiřazená; nevytváří se společná budova pro všechny postavy ani podmínka jejich předchozího nalezení.

**Desktop a mobil:** ilustrace mají čitelné samostatné názvy; na mobilu jeden až dva sloupce. Hledání zůstává viditelné a filtr může být sbalený.

## S16 Profil postavy

**Účel:** představit fiktivní postavu a propojit její příběh s ostrovem.

**Obsah v pořadí:** ilustrace, jméno a krátké představení; videomedailonek; dodaný popis nebo příběhový odstavec; Kde mě potkáš; Ukázat na mapě; související videa či audio pouze pokud existují. Profil Dobrila používá stejnou šablonu s odkazem na Přístav.

**Hlavní CTA:** Pustit medailonek, bez videa otevřít dostupný příběh nebo Ukázat na mapě. **Sekundární CTA:** místo výskytu, související obsah a návrat do rejstříku.

**Navigace a interakce:** K20, K21 u Dobrila, K31, K36 až K38, K51 až K58 podle dostupných prvků a K68 až K69.

**Stavy:** kompletní; bez videa; s více místy výskytu; bez samostatného příběhu; E02 a E06. Není přítomná odměna, test ani úkol bez skutečného zadání pro pozdější fázi.

**World continuity / pocit místa:** Profil je setkáním s postavou v jejím příběhovém prostředí. Jméno, příběh a hlavní místo tvoří jeden celek; Kde mě potkáš a Ukázat na mapě propojují příběh s ostrovem. Další výskyty nepřepisují hlavní domov a nevytvářejí nové profily.

**Desktop a mobil:** příběhová ilustrace může být výrazná, ale nesmí odsunout název a první akci za dlouhou plochu. Na mobilu je popis po krátkém úvodu volitelně rozbalitelný K58.

## S17 Obchod

**Účel:** srozumitelně předat zájemce o fyzické produkty do externího e-shopu.

**Obsah v pořadí:** název Obchod; stručné vysvětlení fyzických produktů Flashtones; ilustrační ukázky knih, her či oblečení podle reálné nabídky; jasné oznámení, že nákup pokračuje v e-shopu v nové kartě; jeden hlavní odkaz.

**Hlavní CTA:** Otevřít e-shop. **Sekundární CTA:** Pro rodiče a Zpět na mapu.

**Navigace a interakce:** K70, K07 pro rodiče a K01. Ukázky produktů jsou v MVP neinteraktivní; nevytváří se lokální detail produktu ani košík. Ceny a dostupnost se zbytečně nekopírují do dvou systémů.

**Stavy:** běžný. Před spuštěním musí být dodaná a ověřená skutečná cílová URL; nevzniká veřejné nefunkční tlačítko.

**World continuity / pocit místa:** Obchod je místo v městečku s nabídkou fyzických produktů. Místní vstupní kontext trvá do výslovně označeného odchodu do externího e-shopu. Web nesimuluje jeho prodejnu ani checkout; návrat do původní karty zachová Socci.

**Desktop a mobil:** CTA je dobře dostupné za krátkým vysvětlením. Nová karta a externí cíl jsou vyznačené textem i u mobilního tlačítka.

## S18 Videa a poslech

**Účel:** rychlý funkční přehled samostatného digitálního obsahu napříč ostrovem.

**Obsah v pořadí:** nadpis; filtry formátu a místa; počet výsledků; karty s typem, názvem, náhledem a dostupnou délkou; Načíst další. Formáty jsou Videa, Série videí, Audioknihy a Audio epizody. Označení Podcast či Hudba upřesní kartu audio epizody.

**Hlavní CTA:** otevřít vybraný obsah. **Sekundární CTA:** změnit filtr nebo použít globální Hledat.

**Navigace a interakce:** K25, K27, K36 až K41 a K44. U školního obsahu může být doplněn filtr předmětu podle skutečně dodaných vazeb. Medailonky se zde neopakují jako videopoložky; hledají se prostřednictvím profilů.

**Stavy:** vše; formát; místo; kombinace filtrů; nula výsledků; E01 až E04 a E06. Katalog řadí podle redakčně určeného pořadí, ne podle domnělé popularity.

**World continuity / pocit místa:** Jde o rychlý přehled celého ostrova. Karty zachovávají typ a pojmenovanou vazbu na hlavní místo; zvolený filtr není nová budova. Detail po otevření přebírá vlastní místní kontext a Zpět obnoví výběr.

**Desktop a mobil:** mřížka má konzistentní strukturu bez ohledu na poměr původního obrázku. Mobil skryje filtry pod K40, ale ukáže jejich aktivní počet a možnost zrušení.

## S19 Hledání

**Účel:** najít obsah, člověka, postavu, místo nebo školní předmět podle názvu a tématu.

**Obsah v pořadí:** pole Hledat na Socci, tlačítko Hledat a Vymazat; po odeslání počet výsledků a volba typu; karty s jednoznačným typem a krátkým kontextem. Bez dotazu se zobrazí výzva Zadej jméno nebo téma a rychlé odkazy Škola, Audioknihovna, Postavy.

**Hlavní CTA:** Hledat a následně otevřít výsledek. **Sekundární CTA:** změnit typ, upravit dotaz, vymazat nebo Načíst další.

**Navigace a interakce:** K45 až K50, K44 a odpovídající přímé odkazy. Dotaz nevyžaduje diakritiku ani správnou velikost písmen. Přesná shoda jména nebo názvu má přednost, poté částečná shoda a obsahové popisy. Systém nevymýšlí odpovědi ani nevede chat.

**Stavy:** prázdné pole; vyplněné neodeslané pole; načítání; výsledky; omezený typ; bez výsledků; chyba. Prázdný dotaz neodesílá hledání a ponechá fokus v poli.

**World continuity / pocit místa:** Výsledky ukazují typ cíle a jeho vazbu na místo na Socci. Otevření výsledku vstupuje přímo do dané lokace či detailu, ne do anonymní kopie stránky. Původní dotaz zůstává dostupný přes kontextový návrat.

**Desktop a mobil:** výsledky jsou čitelné s typem i na mobilu. Přepínače typů se zalomí do více řádků místo skrytého vodorovného posouvání. Mobilní klávesnice po odeslání nemusí zůstávat přes výsledky.

## S20 Pro rodiče a kontakt

**Účel:** rychle vysvětlit povahu veřejného webu a umožnit kontakt s provozovatelem.

**Obsah v pořadí:** co je Ostrov Socci a kdo za webem stojí; pro koho je obsah připravený; vysvětlení bezplatného přístupu a nahraných videolekcí; cesta do školy; vysvětlení externího obchodu; skutečný kontaktní e-mail provozovatele; odkazy na informace S21. Tvrzení o organizaci se doplní jen z potvrzených podkladů.

**Hlavní CTA:** Prohlédnout školu. **Sekundární CTA:** kontakt, Obchod a Mapa ostrova.

**Navigace a interakce:** K04 pro školu či obchod, K71, K07 pro informace a K01. Informace jsou v souvislých sekcích, nikoli v povinném formuláři.

**Stavy:** běžný; E06 doplňkových údajů. Kontaktní adresa musí být doplněná před publikací.

**Desktop a mobil:** klidná textová stránka s dobře čitelnou šířkou odstavců. Kontaktní adresa je zobrazená jako text, aby šla zkopírovat i bez nastaveného e-mailového klienta.

## S21 Informační stránka

**Účel:** zpřístupnit textové informace provozovatele.

**Obsah v pořadí:** konkrétní nadpis, skutečně dodaný text a případné datum aktualizace. Dvě instance: Informace o provozovateli a Soukromí. Tato specifikace jejich text ani konkrétní technické či právní závěry nevytváří.

**Hlavní CTA:** žádná obchodní akce; hlavním účelem je čtení. **Sekundární CTA:** Pro rodiče a Mapa ostrova.

**Navigace a interakce:** C01, K07, K01 a případný K71, pokud text obsahuje stejný kontakt. Další externí odkazy se doplní jen jako konkrétní obsah se zřetelným cílem.

**Stavy:** běžný; neexistující varianta vede na S22. Prázdný právní text se veřejně nezobrazuje jako hotová stránka.

**Desktop a mobil:** zúžený textový sloupec, správná hierarchie nadpisů, žádný dvousloupcový tok delšího textu na mobilu.

## S22 Stránka nenalezena

**Účel:** vrátit návštěvníka do funkčního webu po chybném nebo odstraněném odkazu.

**Obsah v pořadí:** sdělení Tuhle stránku se nepodařilo najít; stručná věta s cestou dál; dvě jasné akce. Volitelná ilustrace Dobrila je doprovod, ne nové povinné video.

**Hlavní CTA:** Hledat na Socci. **Sekundární CTA:** Na mapu ostrova.

**Navigace a interakce:** K72 a C01. Není zde automatické přesměrování, které by skrylo důvod chyby.

**Stavy:** běžný nenalezený cíl nebo odstraněný obsah. Výpadek konkrétního přehrávače používá E02 uvnitř původního detailu, nikoli tuto stránku.

**Desktop a mobil:** obě akce jsou viditelné bez dlouhého posouvání. Sdělení funguje i bez ilustrace.

## 6 3 Sdílené komponenty k nakreslení

Úplná tabulka je rozsahem PHASE B. V PHASE A se navrhnou jen části komponent potřebné pro vymezený prototyp; ID a chování zůstávají shodné.

| **ID**                   | **Obsah a ovládání**                                                                | **Povinné varianty**                                                                                                   |
|--------------------------|-------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| C01 Navigace a patička   | Globální cíle, nabídka Místa, drobečky, kontextové Zpět a patička                   | Desktop; mobil; aktivní cíl; rozbalená nabídka; viditelný fokus.                                                       |
| C02 Mobilní menu         | Hlavní cíle, všechna zveřejněná místa, Pro rodiče, Zavřít                           | Otevřené; posunutý dlouhý seznam; návrat fokusu po zavření. Při otevření je podklad neaktivní.                         |
| C03 Mapa                 | Interaktivní místa a postavy, přiblížení, posun, celkový pohled a seznam            | Celý ostrov; detail; sloučené městečko; označený cíl; seznam; selhání ilustrace.                                       |
| C04 Seznamy a karty      | Karty míst, lidí, postav a médií; hledání a filtry; Načíst další                    | Výchozí; aktivní filtr; nula výsledků; načítání; chyba; mobilní rozbalené filtry.                                      |
| C05 Video přehrávač      | Náhled, play/pause, čas, seek, zvuk, podporovaná celá obrazovka a dodané titulky    | Připraveno; načítání; hraje; pauza; dokončeno; chyba; bez titulků. Medailonek i běžné video používají stejné ovládání. |
| C06 Audio přehrávač      | Název a aktuální kapitola, play/pause, čas, seek a zvuk                             | Jedna stopa; kapitoly; hraje; pauza; dokončeno; chyba; přímý vstup s vybranou kapitolou bez autoplay.                  |
| C07 Mini audio přehrávač | Název aktivní položky, kapitola pokud existuje, play/pause, otevřít detail a zavřít | Desktop a mobil; hraje; pauza. Při zobrazení plného přehrávače stejné položky se skryje.                               |

Globálně hraje nejvýše jedno médium. Pokud video pozastaví běžící audio, mini přehrávač může zůstat v pauze pro vědomý návrat k poslechu. Audio se po skončení videa samo neobnoví. Nově spuštěné audio nahradí předchozí audio v mini přehrávači. Uživatel nikdy neslyší dva zdroje současně.

## 6 4 Přístupnost a přesné chování návratu

- Navržený minimální dotykový cíl je 44 × 44 px. Je to návrhové pravidlo tohoto projektu, nikoli tvrzení o splnění konkrétní certifikace. Cíle mají mezeru a nepřekrývají se.

- Klíčové ovládání má textový název. Ikony mají srozumitelný popis pro asistivní technologie. Fokus je viditelný; hover není jedinou cestou k informaci.

- Mapa má textovou alternativu, mediální obsah dodané titulky či přepis podle dostupnosti podkladů. Animace není nutná k ovládání a musí jít omezit systémovým nastavením uživatele.

- Při otevření mobilního menu se fokus drží uvnitř; po zavření se vrátí na tlačítko Menu. Prosté rozbalení filtrů nebo textu není modální dialog.

- Dotaz a aktivní filtry jsou součástí adresy přehledu. Změny filtrů a kapitoly upravují stav aktuální stránky; nezaplňují historii každým kliknutím. Otevření skutečné nové stránky vytvoří navigační krok.

- Návrat z detailu během návštěvy obnoví seznam, načtené položky a posun. Drobečky záměrně otevírají pojmenovaného předka; nemusí být totožné se zdrojem posledního příchodu.

- Přehrávání audia se zachovává při interní navigaci v jedné otevřené návštěvě. Obnovení stránky, zavření karty, přechod na jiné zařízení a dlouhodobá paměť postupu nejsou přislíbené funkce MVP.

- Rozhraní nevytváří profily dítěte z jeho prohlížení. Veřejně viditelný obsah a ovládání jsou shodné pro prvního i vracejícího se návštěvníka.

# 7 Content matrix

Tabulka určuje domov obsahu a jeho zobrazování. Neprohlašuje žádný materiál za již hotový. Naplnění tematických domů vychází ze skutečně dokončeného relevantního obsahu. Video či jiný dostupný obsah může předcházet vzniku profilů a medailonků; ty zůstávají volitelnými moduly. Samostatné video, audio nebo série se zveřejní jen s dodaným zdrojem a skutečnými metadaty.

| **Místo**        | **Primární obsah a formát**                                                                              | **Hranice a vazby**                                                                                |
|------------------|----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| Městečko Dobrilo | Krátké představení a rozcestník městských míst                                                           | Nekopíruje videa ze školy ani obsah knihovny; odkazuje na ně.                                      |
| ZŠ PRO DĚTI      | Předměty, série nahraných videí, profily pedagogů a Sborovna                                             | Školní výukové série mají hlavní domov zde. Živá výuka je pozdější fáze.                           |
| Plavání          | Tematická videa, tipy a metodika; dostupné profily instruktorů a medailonky                              | Metodika, tipy a digitální ukázky patří tématu plavání. Žádný povinný přechod na fyzický kurz.     |
| Lyžování         | Tematická videa; dostupné profily instruktorů, popisy a medailonky                                       | Stejný člověk může působit i jinde, profil se neduplikuje.                                         |
| Enviro           | Související skuteční lidé i fiktivní entity; medailonky, popisy a přírodovědný obsah                     | Postava Hmyzáka může být doporučená také zde, ale její hlavní profil a místo zůstává v Hmyzáriu.   |
| V TÝMU           | Související lidé a entity, medailonky a popisy; obsah ke spolupráci a vztahům podle dodání               | Nepřidáváme chat, veřejné skupiny ani komunitní funkce jen kvůli názvu.                            |
| Audioknihovna    | Audioknihy, anotace, obálky, celé audio nebo kapitoly                                                    | Domovem celé audioknihy je knihovna. Amfiteátr na ni může odkazovat z příběhového kontextu.        |
| Hmyzárium        | Fiktivní svět Hmyzáků, profily postav, krátká videa a popisy                                             | Není obecným katalogem veškerého enviro obsahu. Vazby na další místa odkazují na stejné profily.   |
| Labyrint         | Epizody konkrétního podcastového nebo audio projektu a související entity                                | Není univerzálním skladištěm všech audio souborů. Kulturní pořad má hlavní domov v Kulturním domě. |
| Amfiteátr        | Příběhové entity, medailonky, samostatná příběhová a audiovizuální tvorba                                | Celá audiokniha je v Audioknihovně; metodické video z plavání v Plavání.                           |
| Kulturní dům     | Hudební a kulturní entity Flashtones, jejich medailonky a popisy; dodaná hudba či kulturní audio a video | Kulturní audio může používat stejnou šablonu S12 jako Labyrint, ale má jiné tematické zařazení.    |
| Obchod           | Představení fyzických produktů a odkaz na externí e-shop                                                 | Žádné digitální lekce, místní produktové detaily ani vlastní košík v MVP.                          |
| Přístav          | Vysvětlení ovládání, stručné představení světa a průvodce                                                | Není povinnou vstupní bránou ani přihlašovací obrazovkou.                                          |

## 7 1 Pravidla umístění obsahu

1.  U každé položky se nejprve určí hlavní téma nebo příběhový svět. Teprve poté formát. Samotný audio formát neznamená automatické zařazení do Labyrintu.

2.  Medailonek má domov na profilu člověka či postavy. Karty na několika místech odkazují na tentýž profil.

3.  Samostatné příběhové video má jeden detail S08. Pokud jej doporučuje i Hmyzárium, nevzniká druhá kopie videa.

4.  Přehled Videa a poslech agreguje publikovaný obsah napříč místy. Globální hledání navíc zahrnuje lidi, postavy, lokace a předměty.

5.  Série videí a její jednotlivé díly mohou být nalezitelné současně, ale musí mít rozdílné označení typu. Uživatel rozpozná celek od jednotlivého videa.

6.  Při chybějících údajích se doplňkový štítek či sekce vynechá. Do veřejného webu se nepřenášejí hranaté závorky, smyšlené počty nebo údajně hotové materiály.

# 8 MVP a další fáze

## 8 1 Co patří do první veřejné verze

| **Oblast**       | **MVP**                                                                                                       | **Pozdější fáze nebo dosud nerozhodnuté rozšíření**                                    |
|------------------|---------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| Přístup          | Veřejný web se vším dostupným digitálním obsahem zdarma                                                       | Budoucí model monetizace dosud není rozhodnutý.                                        |
| Svět a navigace  | Architektura třinácti míst, aktivní jen připravené lokality; mapa, seznam, rychlá navigace, hledání a Přístav | Změna rozsahu ostrova není součástí této revize.                                       |
| Škola            | Předměty, nahrané videosérie, jednotlivá videa, Sborovna                                                      | Poptávka živé výuky, individuální či skupinová videolekce.                             |
| Lidé a postavy   | Kontextové výskyty, společné rejstříky každého typu a kanonické profily                                       | Nové formáty podle backlogu FUTURE CONTENT TYPES, bez změny hlavních domovů a profilů. |
| Přehrávání       | Video, audio, kapitoly podle zdroje, mini audio během návštěvy                                                | Dlouhodobá historie, osobní oblíbené a synchronizace mezi zařízeními nejsou schválené. |
| Živá výuka       | Není dostupná a web ji nenabízí jako aktuální službu                                                          | Poptávka, domluva, zkušební lekce zdarma, následně placený balíček.                    |
| Účty a rezervace | Žádné účty, přihlášení ani kalendáře                                                                          | Potřeba účtů a způsob rezervace se vyjasní pro živou výuku.                            |
| Obchod           | Přechod do externího e-shopu                                                                                  | Vlastní e-shop uvnitř aplikace není současný požadavek.                                |
| Správa a lektoři | Návrh veřejného webu                                                                                          | Nové pracovní rozhraní správce nebo lektora se nyní nezadává.                          |

## 8 2 Rozvoj živých lekcí

Budoucí živé lekce se připojí ke škole, předmětům a existujícím profilům lidí. Změna nevyžaduje přejmenovat ostrov, školu ani přesouvat knihovnu. Profil lektora může v další fázi získat nabídku výuky, zatímco současný veřejný profil zůstane zachovaný.

Před návrhem této budoucí fáze bude potřeba určit způsob odeslání poptávky a odpovědi, identifikaci rodiče a dítěte, platební cestu, obsah a platnost balíčku, čerpání lekcí, změny domluvených termínů a způsob vstupu do videopropojení. To jsou budoucí produktová rozhodnutí, nikoli chybějící podmínky pro aktuální wireframy. Nezakreslovat je nyní jako hotovou samoobslužnou službu.

## 8 3 FUTURE HOOKS pro živou výuku

FUTURE HOOK je anotované místo strukturálního rozšíření, nikoli současný ovládací prvek. S04 umožní nabídku výuky v rámci školy, S05 v kontextu předmětu a S14 v kontextu konkrétního skutečného člověka. Přesné umístění modulu je popsáno u těchto tří šablon. Současný tok obsahu nemá pevnou vazbu na počet sekcí a snese vložení dalšího samostatného bloku.

Možná budoucí nabídka rozliší individuální a skupinovou výuku a respektuje potvrzenou cestu poptávka → domluva → zkušební lekce zdarma → následný balíček. Neznamená to, že všechny její kroky budou tlačítky na každé stránce. Konkrétní podobu a dostupnost určí až návrh živé služby. V MVP ani v PHASE A/B této specifikace se nekreslí rezervace, nákup, kalendář, cena, účty, videohovor, skrytá karta nabídky či prázdná plocha pro budoucí CTA.

## 8 4 FUTURE CONTENT TYPES

Následující backlog je mimo současné MVP. Nezakládá nové lokality, obrazovky, ovládací prvky ani položky filtrů v nynějších wireframech. Výběr formátu, jeho ovládání a stavy budou samostatným zadáním až při rozhodnutí o realizaci.

| **Budoucí formát**                  | **Možná vazba při pozdějším zadání**                                 |
|-------------------------------------|----------------------------------------------------------------------|
| Hry                                 | Příslušná lokace, téma či postava; bez nynějšího herního systému.    |
| Kvízy                               | Předmět, tematický obsah nebo postava; bez aktuálních testů a skóre. |
| Interaktivní úkoly                  | Člověk, postava či téma podle skutečného zadání úkolu.               |
| Webové komiksy                      | Příběhový svět, postava nebo relevantní místo.                       |
| Ukázky knih                         | Konkrétní titul, související postava a odpovídající lokace.          |
| Jednoduché vzdělávací interaktivity | Předmět nebo tematická lokace podle vzdělávacího účelu.              |

**Datová logika:** společný obsahový záznam má stabilní ID, typ, stav publikace, název, popis, hlavní domov, URL a vazby na lokality, témata, lidi či postavy. Typ nese vlastní doplňující pole. Jeden záznam může být doporučen na více místech, ale má jeden kanonický detail. Vztahy místa nebo profilu odkazují obecně na obsahové ID; nejsou omezeny pevným seznamem video/audio polí. Metadata pro objevitelnost se přebírají z části 2.5.

**UX logika:** budoucí formát se připojí do existujícího kontextu místa či profilu s jasným označením typu a skutečnou akcí. Až poté vznikne jeho potřebná šablona, stavy a případné rozšíření funkčního přehledu. Dnešní S18 nadále nabízí pouze Videa, Série videí, Audioknihy a Audio epizody. Nový typ v budoucnu nevyžaduje přejmenovat ostrov, přesunout lokality nebo duplikovat profily. Příběhový odstavec v hotovém S16 či text místa je již současný obsah; samostatný komiks, hra nebo nový čtecí formát se tím do MVP nepřidává.

# 9 Předání a kontrola wireframů

## 9 1 Co má designér dodat

**Předání PHASE A:** osm propojených šablon S01, S03, S04, S05, S07 Plavání, S14, S16 a S08 v reprezentativní desktopové a mobilní podobě podle části 6.1. Dodat mapu i seznam, potřebnou navigaci a K-ID použitých interakcí. Prototyp umožní prozkoumat místo, poznat člověka či postavu, otevřít obsah a vrátit se do světa; také rychlou cestu rodiče a přímý příchod na detail. Součástí jsou anotace WORLD CONTINUITY a neviditelných FUTURE HOOKS. Nepožaduje se již kompletní sada dalších obrazovek a okrajových stavů.

**Schválení PHASE A:** zadavatel vyhodnotí kritéria fáze A z části 9.2. Výsledek a případné změny se zapíší do anotací prototypu. Dokud není základní UX a princip návaznosti světa schválený, nezačíná kompletní produkce PHASE B.

**Předání PHASE B po schválení:**

- Kompletní desktopové a mobilní wireframy S01 až S22 se společnými komponentami.

- U S07 anotované naplnění všech sedmi lokalit a varianty pouze obsah bez profilů, pouze lidé, pouze postavy a smíšený obsah; jako kontrolní příklad Plavání se třemi videi bez medailonků.

- S13 v podobě Lidí a Sborovny, S01 v mapě a seznamu, S19 před hledáním, s výsledky a bez výsledků.

- C01 až C07 včetně požadovaných loading/error/empty a specifických stavů z kapitoly 6.

- Klikací prototyp F01, F02, F03, F06, F07, F08, aktuální části F09, F10, F11 a F12. F04, F05 a přihlášená část F09 zůstávají mimo aktuální produkci.

- Kompletní anotace K01 až K72, správné cíle L01 až L13 a podmínky jejich publikace; u opakovaných prvků stačí odkaz na stejnou komponentu.

- U indexovatelných šablon anotovaný obsahový kontrakt SEO, přímý vstup a kontext hlavního místa. Žádné současné obrazovky pro živou výuku nebo FUTURE CONTENT TYPES.

## 9 2 Kontrola použitelnosti návrhu

**PHASE A ověřuje na vybraných šablonách** orientaci v názvech, rozpoznání lokality po vstupu, návaznost detailu, přímý vstup, rychlou cestu rodiče, návraty a mobil. Tyto výsledky tvoří schvalovací bod. **PHASE B ověřuje celou tabulku napříč úplnou sadou**, včetně audia, hledání a chyb, které nejsou kompletní dodávkou PHASE A.

| **Ověřovaný scénář** | **Podmínka přijetí**                                                                                                                                                              |
|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Orientace v názvech  | Nikde není Dobrilo označen jako celý ostrov. Škola má vztah k městečku, ale je přímo dostupná.                                                                                    |
| WORLD CONTINUITY     | Po otevření místa lze určit, kde na Socci uživatel je a co tam může udělat. Detail připomíná hlavní domov; svět se neztrácí za anonymním katalogem.                               |
| Přímý příchod        | Otevření samostatné URL vede rovnou k obsahu s H1, popisem, kontextem a cestou do světa; nevyžaduje mapu ani Přístav.                                                             |
| Readiness            | Lokalita bez profilů může fungovat s hotovým médiem. Místo bez jediného dokončeného cíle nemá aktivní veřejný vstup.                                                              |
| FUTURE HOOKS         | S04, S05 a S14 mají rozšíření popsané v anotaci; současný layout neobsahuje budoucí CTA ani prázdnou rezervu.                                                                     |
| Rychlá návštěva      | Předmět, konkrétní člověk i audiokniha jsou dosažitelné bez procházení mapy.                                                                                                      |
| Přehrání ze školy    | Uživatel může otevřít první video série přímo z její karty; detail série není povinný krok.                                                                                       |
| Postavy              | Mapa a rejstřík vedou na stejný profil. Profil vysvětluje, koho uživatel potkal a kde postava patří.                                                                              |
| Lidé                 | Instruktor ve dvou oblastech má jeden profil. Sborovna používá stejný rejstřík jako Lidé.                                                                                         |
| Živá výuka           | V MVP není tlačítko Rezervovat, Koupit lekci, Přihlásit se ani vstup do videohovoru.                                                                                              |
| Návraty              | Návrat z detailu zachová rozpracované hledání, filtry a orientaci ve výchozím přehledu.                                                                                           |
| Audio                | Interní přechod nepřeruší poslech; zavření mini přehrávače jej skutečně zastaví. Současně nehraje video a audio.                                                                  |
| Mobil                | Všechna zveřejněná místa jsou dostupná přes seznam, cíle se nepřekrývají, menu a přehrávač nezakrývají navzájem ovládání.                                                         |
| Chyby                | Nenačtená mapa, nula výsledků, chyba videa a odstraněná stránka mají konkrétní cestu dál.                                                                                         |
| Duplicitní obsah     | Z více míst vzniká více odkazů, nikoli několik konkurenčních detailů stejné položky.                                                                                              |
| SEO a obsahové vazby | Relevantní publikované záznamy mají indexovatelnou kanonickou URL, textová a sdílecí metadata a odkazy také mimo mapu. Filtry a hledání nevytvářejí konkurenční obsahové stránky. |
| Úplnost click mapy   | Každé tlačítko, odkaz, filtr a ovládání v návrhu má chování v K01 až K72 nebo je označeno jako neinteraktivní dekorace.                                                           |

## 9 3 Podklady pro naplnění a zveřejnění

Tyto podklady se mohou doplňovat během návrhu. Jejich skutečné hodnoty jsou nutné před publikací, nikoli pro zahájení wireframů: existující ilustrace ostrova a podklady k postavám; seznam skutečných lidí a schválené fotografie; stručné popisy a dostupné medailonky; seznam předmětů a videosérií s pořadím; knihy, audio epizody a případné kapitoly; přiřazení obsahu k místům; doporučené publikum; náhledy, délky a dostupné titulky či přepisy; skutečná URL e-shopu; kontakt a textové informace provozovatele.

**READINESS RULE:** každá zveřejněná lokalita musí mít alespoň jeden skutečný, dokončený a smysluplný obsahový cíl. Může jít o video, sérii, hotový profil člověka či postavy, audioknihu, audio epizodu, příběh nebo jiný relevantní dokončený obsah v rámci schválených typů. Profil s poctivým textovým představením nepotřebuje medailonek. Plavání může být zveřejněné se třemi kvalitními plaveckými videi bez profilů instruktorů. Samotný název, dekorace, slib budoucího obsahu nebo odkaz zpět na mapu tuto podmínku nesplňuje.

Cíl musí odpovídat deklarovanému účelu místa a popisky musí odpovídat skutečné nabídce. U rozcestníkového městečka je cílem zveřejněné místní místo s hotovým obsahem; Přístav poskytuje dokončené vysvětlení a funkční cestu dál; Obchod představení fyzických produktů a ověřený externí e-shop. Nejde o povinnost vložit do každé lokace nový mediální formát. Pokud není dostupné audio knihy, nesmí CTA slibovat její přehrání. Příběh se v MVP může zobrazit v existujícím profilu či textu stránky; nové samostatné formáty z části 8.4 zůstávají pozdější fází.

**Publikace a dostupnost:** všech třináct lokalit zůstává v architektuře a kompletním návrhovém rozsahu PHASE B. Lokalita bez hotového cíle však není veřejně aktivní: nevystupuje jako odkaz v mapě, seznamu, menu, místních rozcestnících ani hledání a není v XML sitemapě. Případné zachování jejího obrysu v existující ilustraci je pouze neinteraktivní dekorace, bez aktivního popisku nebo příslibu Brzy otevřeme. Přímá nepublikovaná URL používá S22 podle části 2.5. Připravené místo se aktivuje současně ve všech cestách.

Pokud se odebere poslední obsahový cíl, lokalita se před veřejnou aktualizací zneaktivní stejným způsobem, případně se předem doplní jiný hotový cíl. Pro profil či obsah zůstává veřejný hlavní domov platnou cestou; nesmí odkazovat do nepublikované lokality. Dočasný výpadek jinak zveřejněného média řeší E02, není automatickým zrušením místa. Podklady ve wireframu lze označit jako k dodání; veřejná verze nepřebírá zástupná tlačítka ani smyšlené materiály.

Před zveřejněním se pro indexovatelné stránky doplní také skutečné popisy, H1, SEO title, meta description, náhledy pro sdílení a související odkazy podle části 2.5. Dostupnost podkladů nezdržuje zahájení PHASE A, ale určuje, které konkrétní lokality a položky mohou být publikovány.

# 10 Otevřené otázky před zahájením wireframů

Pro takto vymezenou první veřejnou verzi nezůstává žádná zásadní architektonická otázka, která by bránila zahájení PHASE A. Přechod do PHASE B vyžaduje schválení klíčového prototypu podle kapitoly 9. Budoucí živá výuka a případné účty jsou oddělené v kapitole 8. Konkrétní obsahové podklady se doplní podle kapitoly 9.

# CHANGELOG v1.0 → v1.1

| **Změněná část**    | **Revize**                                                                                                                                                                 |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Úvod a kapitoly 0–1 | WORLD CONTINUITY jako základní princip; aktualizovaný audit rizik, readiness a dvoufázové výroby.                                                                          |
| Kapitola 2          | Nová část SEO & DISCOVERABILITY REQUIREMENTS; obsahová metadata, indexovatelné URL, přímý vstup, interní odkazy a připravenost pro schema. Současné URL zůstávají.         |
| Kapitoly 3–5        | Zveřejněné cíle jsou konzistentní v mapě i funkčních cestách. Click map a flows respektují obsah bez medailonků a pokračující kontext místa; všechna původní ID zůstávají. |
| Kapitola 6          | WORLD CONTINUITY u relevantních šablon a každé varianty S07; FUTURE HOOK u S04, S05 a S14; flexibilní obsah S07; opravený E04; rozlišení výroby PHASE A a B.               |
| Kapitoly 7–8        | Content matrix již nevyžaduje profil s videem jako první naplnění. Přidány FUTURE HOOKS a backlog FUTURE CONTENT TYPES včetně obecného modelu vazeb; bez rozšíření MVP.    |
| Kapitoly 9–10       | Dvě předávací fáze a schvalovací bod; nové podmínky přijetí, publikace a SEO podkladů. Pro zahájení PHASE A nevznikly nové otevřené architektonické otázky.                |

**Nahrazené pravidlo:** povinný hotový profil s videomedailonkem v každém tematickém domě nahrazuje alespoň jeden skutečný, dokončený, smysluplný a tematicky relevantní obsahový cíl v každé zveřejněné lokalitě. Nepřipravené lokality nejsou veřejně aktivní. Povinnost okamžitě nakreslit kompletní sadu nahrazuje schválení klíčového prototypu před kompletní produkcí.

**Záměrně beze změny:** Socci je celý ostrov; Dobrilo průvodce a městečko; škola je v městečku. Zachována architektura třinácti míst, S01–S22, C01–C07, K01–K72 a F01–F12, kanonické URL, Sborovna a oddělení Lidí a Postav. Trvá kombinace mapy a rychlé navigace, dobrovolný Přístav, textový seznam, přístupnost, externí e-shop a bezplatný veřejný přístup bez účtů. Přehrávače se chovají stejně: žádné spuštění média pouhým vstupem na stránku; po vědomém spuštění knihy pokračují její kapitoly, jiný titul nezačne sám. Živá výuka a nové obsahové formáty zůstávají mimo MVP.
