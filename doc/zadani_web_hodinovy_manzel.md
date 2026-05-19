# Zadání a dokumentace: web pro hodinového manžela

## 1. Cíl projektu

Vytvořit moderní statický prezentační web pro zkušeného řemeslníka, který se chce živit jako hodinový manžel. Web má působit důvěryhodně, přátelsky, lokálně a profesionálně. Má představit služby, orientační ceník, reference, kontakty a základní obchodní/podmínkové informace.

Projekt bude sloužit jako první demo verze. Texty, název, logo, fotografie, reference, ceny a kontaktní údaje budou zatím ilustrační. Po schválení klientem se doplní reálná data.

Web bude implementován v Next.js, stylovaný pomocí Tailwind CSS, verzovaný v Gitu, dockerizovaný pro lokální vývoj a nasazený na Vercel.

---

## 2. Inspirace a styl

Jako hlavní inspirační web použít:

- https://tozvladneme.cz/

Nejde o kopii, ale o podobný typ prezentace a nálady:

- přátelský a lidský tón komunikace,
- výrazná úvodní sekce s jasnou nabídkou služby,
- navigace na sekce stránky,
- kombinace výrazné barvy, světlého pozadí a tmavého textu,
- bloky typu „co umíme“, „proč si nás vybrat“, „kolik to stojí“, „kontakt“,
- větší zaoblené karty,
- výrazná CTA tlačítka,
- osobní, neformální a důvěryhodná atmosféra.

Barevné schéma má být podobně teplé a optimistické, ale ne identické. Doporučený směr:

- primární barva: teplá žlutá / medová / okrová,
- sekundární barva: tmavě modrá nebo antracitová,
- doplňková barva: světle béžová / krémová,
- akcent: zelená nebo oranžová pro drobné zvýraznění.

Příklad pracovních barev:

- `#F4B63F` – medová žlutá,
- `#1F2937` – tmavý antracit,
- `#FFF7E6` – světlý krémový podklad,
- `#3A7D44` – klidná zelená pro drobné akcenty,
- `#FFFFFF` – bílé karty.

---

## 3. Pracovní název, logo a identita

Pro demo použít ilustrační název:

## **Mistr na zavolání**

Alternativní krátký claim:

> Šikovné ruce pro váš domov.

Logo zatím vytvořit pouze typograficky, bez složité grafiky. Například:

- jednoduchý text „Mistr na zavolání“,
- malá ikonka nářadí, domu, kladiva nebo šroubováku,
- logo řešit jako komponentu, aby šlo později snadno nahradit SVG nebo obrázkem.

Nepoužívat finální firemní identitu. Vše označit jako demo / placeholder data.

---

## 4. Rozsah první verze

Web bude statický, bez backendu a bez dynamických funkcí.

### Součástí webu bude

- úvodní hero sekce,
- stručné představení služby,
- sekce „Proč si mě vybrat“,
- sekce nabízených služeb,
- ukázková sekce „před a po“,
- orientační ceník,
- ukázkové reference,
- kontaktní sekce,
- základní podmínky spolupráce,
- patička s fakturačními údaji a odkazy.

### Nebude součástí první verze

- kontaktní formulář,
- napojení na CMS,
- databáze,
- administrace,
- online rezervace,
- platby,
- newsletter,
- analytics, pokud nebude výslovně doplněno,
- cookie lišta, pokud nebude použito měření nebo marketingové skripty.

Kontakt bude zatím řešen přes telefon, e-mail a případně WhatsApp odkaz.

---

## 5. Doporučená struktura stránky

Web může být jednostránkový landing page web s kotvami v navigaci. Později lze rozšířit na více samostatných stránek.

Doporučené sekce v pořadí:

1. Header / navigace
2. Hero sekce
3. Krátký blok „Drobné opravy i větší rekonstrukce“
4. Proč si mě vybrat
5. Služby
6. Před a po
7. Reference
8. Ceník
9. Podmínky spolupráce
10. Kontakt
11. Footer

---

## 6. Navigace

Navigace bude jednoduchá a bude odkazovat na sekce stránky:

- Služby
- Reference
- Ceník
- Podmínky
- Kontakt

Vpravo v desktopové navigaci zobrazit výrazné CTA tlačítko:

> Zavolat / Napsat

Na mobilu použít jednoduché hamburger menu nebo responzivní skládanou navigaci.

---

## 7. Hero sekce

Hero má být výrazná, přehledná a vizuálně zajímavá.

### Obsah

Nadpis:

> Hodinový manžel pro opravy, montáže a rekonstrukce

Podnadpis:

> Přijedu, opravím, smontuju, zapojím nebo pomůžu s větší úpravou bytu. Férově, čistě a srozumitelně.

CTA tlačítka:

- „Zavolat“
- „Napsat e-mail“
- případně menší odkaz „Zobrazit ceník“

Doplňkové body pod CTA:

- Drobné opravy i větší práce
- Dřevo, voda, elektro, montáže
- Domluva předem, férová cena

### Vizuál v hero sekci

Místo obrázku psa použít ilustraci nebo placeholder fotku rekonstrukce, ideálně kuchyně, koupelny nebo obývacího prostoru.

Požadovaný efekt:

- obrázek „před a po“,
- při přejetí kurzorem se obraz plynule mění z varianty „před“ na variantu „po“,
- na mobilu může být efekt řešen dotykem, animací nebo jednoduchým statickým zobrazením vedle sebe.

Doporučená implementace:

- komponenta `BeforeAfterImage`,
- dva překryté obrázky,
- horní obrázek se ořezává přes `clip-path`, `width` nebo CSS masku,
- při hoveru se plynule změní podíl zobrazení,
- přidat popisky „před“ a „po“.

Pro demo použít placeholder obrázky, například lokální soubory:

- `/images/kitchen-before.jpg`
- `/images/kitchen-after.jpg`

Pokud skutečné obrázky zatím nejsou, vytvořit barevné placeholder bloky nebo použít dočasné ilustrační obrázky ve složce `public/images`.

---

## 8. Sekce „Drobné opravy i větší rekonstrukce“

Krátká textová sekce pod hero blokem.

Ukázkový text:

> Potřebujete přivrtat poličku, smontovat skříň, opravit kapající baterii nebo připravit byt po nájemnících? Pomůžu s malými úkoly i většími úpravami. Domluvíme se předem, co je potřeba udělat, kolik to přibližně zabere času a jaké budou náklady.

Doplnit tři krátké karty:

1. **Přijedu v domluvený čas**  
   Bez zbytečného čekání a překvapení.

2. **Pracuji čistě**  
   Po práci po sobě uklidím a nechám po sobě pořádek.

3. **Řeknu cenu dopředu**  
   U větších prací připravím orientační odhad předem.

---

## 9. Sekce „Proč si mě vybrat“

Cílem je vyvolat důvěru.

Ukázkové body:

- zkušenosti s rekonstrukcemi bytů,
- práce se dřevem a montáže na míru,
- základní instalatérské práce,
- drobné elektro práce,
- vlastní nářadí,
- schopnost nakoupit a dovézt materiál,
- férové jednání,
- lokální dostupnost.

Ukázkový text:

> Nejsem anonymní firma ani katalog řemeslníků. Domlouváte se přímo s člověkem, který práci udělá. Umím si poradit s běžnými opravami v bytě, montáží nábytku, dřevěnými prvky i přípravou prostoru na pronájem nebo prodej.

---

## 10. Sekce služeb

Služby zobrazit jako grid karet. Každá karta bude mít ikonu, nadpis a krátký popis.

Doporučené služby:

### 1. Montáž nábytku

> Skříně, police, postele, kuchyňské prvky, drobný i větší nábytek.

### 2. Drobné opravy v domácnosti

> Kliky, panty, lišty, garnýže, silikon, drobné úpravy a dokončovací práce.

### 3. Vrtání a kotvení

> Police, zrcadla, obrazy, držáky, skříňky a další prvky na zeď.

### 4. Instalatérské práce

> Výměna baterie, sifonu, sprchové hlavice, drobné opravy úniků vody.

### 5. Drobné elektro práce

> Výměna světel, zásuvek, vypínačů a základní úpravy po domluvě.

Poznámka: U elektro prací nepůsobit tak, že web nabízí práce mimo oprávnění. Text formulovat opatrně a později upravit podle skutečné kvalifikace a rozsahu živnosti.

### 6. Práce se dřevem

> Drobné dřevěné úpravy, opravy, police, jednoduché prvky na míru.

### 7. Příprava bytu k pronájmu nebo prodeji

> Opravy po nájemnících, dotažení detailů, montáže a drobná renovace.

### 8. Menší rekonstrukce

> Koupelny, kuchyně, obklady, podlahy a dokončovací práce podle rozsahu.

---

## 11. Sekce „Před a po“

Tato sekce má být vizuálně nejzajímavější část webu.

Nadpis:

> Malá změna, velký rozdíl

Text:

> I drobná oprava nebo dokončení detailů dokáže změnit celý dojem z bytu. Tady bude později ukázka reálných prací. Pro demo používáme ilustrační obrázky.

Prvky:

- jeden velký interaktivní před/po obrázek,
- vedle něj seznam, co se změnilo,
- štítek „demo ukázka“.

Ukázkový seznam:

- výměna pracovní desky,
- oprava lišt,
- dotažení detailů kolem kuchyně,
- nové osvětlení,
- čisté zakončení a úklid.

---

## 12. Reference

Reference zatím ukázkové. Nepoužívat reálná jména bez souhlasu.

Ukázkové reference:

### Jana K., Praha

> Potřebovala jsem opravit několik drobností po stěhování. Všechno bylo hotové během jedné návštěvy a byt zůstal čistý.

### Petr M., Praha-západ

> Pomohl s montáží skříní a polic. Oceňuji domluvu, přesnost a to, že si poradil i s nerovnou zdí.

### Lenka a Tomáš, Beroun

> Původně jsme chtěli jen drobnou opravu v koupelně, nakonec jsme domluvili i další úpravy. Vše proběhlo férově a bez stresu.

Design:

- karty s hvězdičkami,
- krátký citát,
- jméno a lokalita,
- případně malý štítek typu „montáž“, „oprava“, „rekonstrukce“.

---

## 13. Ceník

Ceník bude orientační a výrazně označený jako ukázkový.

Nadpis:

> Kolik to bude stát?

Úvodní text:

> Cenu vám vždy potvrdím předem podle rozsahu práce, místa a potřebného materiálu. Níže je orientační demo ceník pro první návrh webu.

Doporučené ceníkové karty:

### Běžná hodinová sazba

- **650 Kč / hod.**
- všední dny 8:00–18:00
- minimální objednávka 2 hodiny

### Večer a víkend

- **850 Kč / hod.**
- večery, víkendy a svátky
- podle předchozí domluvy

### Doprava

- **od 250 Kč / výjezd**
- podle lokality a parkování
- materiál se účtuje zvlášť

### Větší práce a rekonstrukce

- **individuální kalkulace**
- obhlídka podle domluvy
- cenový odhad před zahájením práce

Doplňující poznámka:

> Uvedené ceny jsou pouze ilustrační pro demo verzi webu. Finální ceník bude doplněn po schválení klientem.

---

## 14. Podmínky spolupráce

Sekce má být stručná a srozumitelná.

Ukázkové body:

- Cena práce se počítá podle skutečně odpracovaného času, pokud není předem domluvena pevná cena.
- Minimální objednávka je 2 hodiny práce.
- Materiál a náhradní díly nejsou zahrnuty v hodinové sazbě.
- Doprava a parkování se účtují zvlášť.
- U větších prací je vhodná předchozí obhlídka.
- Termín je závazný po potvrzení telefonem nebo e-mailem.
- Elektro a instalatérské práce budou prováděny pouze v rozsahu odpovídajícím kvalifikaci a platným předpisům.

---

## 15. Kontakt

Kontaktní sekce nebude obsahovat formulář.

Ukázkové údaje:

- Telefon: `+420 777 123 456`
- E-mail: `info@mistrnazavolani.cz`
- Lokalita: `Praha a okolí`
- Dostupnost: `Po–Pá 8:00–18:00, víkendy dle domluvy`

CTA text:

> Zavolejte nebo napište. Stručně popište, s čím potřebujete pomoct, ideálně přidejte fotku místa nebo problému a domluvíme další postup.

Tlačítka:

- Zavolat
- Napsat e-mail
- WhatsApp

Odkazy:

- `tel:+420777123456`
- `mailto:info@mistrnazavolani.cz`
- `https://wa.me/420777123456`

---

## 16. Footer

Footer bude obsahovat:

- logo / název,
- krátkou větu o službě,
- odkazy na sekce,
- kontaktní údaje,
- ilustrační fakturační údaje,
- copyright.

Ukázkové fakturační údaje:

> Mistr na zavolání  
> Jan Novák  
> IČ: 12345678  
> Praha a okolí

Poznámka: Jméno, IČ a další údaje jsou placeholdery. Nepoužívat ve finální verzi bez potvrzení klientem.

---

## 17. Technické požadavky

### Technologie

- Next.js
- React
- TypeScript
- Tailwind CSS
- Git
- Docker pro lokální vývoj
- Vercel pro hosting

### Doporučené založení projektu

Použít aktuální stabilní Next.js s App Routerem.

Doporučené volby při inicializaci:

- TypeScript: ano
- ESLint: ano
- Tailwind CSS: ano
- `src` directory: ano
- App Router: ano
- import alias: ano, například `@/*`

### Doporučená struktura

```txt
.
├── doc/
│   └── zadani.md
├── public/
│   └── images/
│       ├── kitchen-before.jpg
│       ├── kitchen-after.jpg
│       └── placeholder-work.jpg
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── BeforeAfterImage.tsx
│   │   ├── Services.tsx
│   │   ├── Pricing.tsx
│   │   ├── References.tsx
│   │   ├── Conditions.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── siteContent.ts
│   └── lib/
│       └── utils.ts
├── Dockerfile
├── docker-compose.yml
├── package.json
├── tailwind.config.ts
└── README.md
```

---

## 18. Obsah jako data

Texty, služby, ceny a reference oddělit od komponent do souboru:

```txt
src/data/siteContent.ts
```

Cíl:

- snadná pozdější výměna placeholder textů,
- menší množství hardcoded textů v komponentách,
- jednodušší práce pro klientské úpravy.

Doporučená data:

- `siteInfo`,
- `navigation`,
- `hero`,
- `benefits`,
- `services`,
- `beforeAfter`,
- `testimonials`,
- `pricing`,
- `conditions`,
- `contact`.

---

## 19. Responsivita

Web musí dobře fungovat na:

- mobilu,
- tabletu,
- desktopu.

Požadavky:

- mobile-first přístup,
- na mobilu přehledné bloky pod sebou,
- na desktopu využít dvousloupcové layouty,
- karty služeb jako 1 sloupec na mobilu, 2 na tabletu, 3–4 na desktopu,
- CTA tlačítka snadno kliknutelná,
- dostatečné mezery mezi sekcemi.

---

## 20. Přístupnost a SEO

### Přístupnost

- Používat sémantické HTML: `header`, `main`, `section`, `footer`.
- Každá sekce má mít logickou hierarchii nadpisů.
- Obrázky mají mít smysluplné `alt` texty.
- Tlačítka a odkazy musí být čitelné a dostupné z klávesnice.
- Zachovat dostatečný kontrast textu a pozadí.

### SEO

Doplnit metadata:

- title,
- description,
- Open Graph title,
- Open Graph description,
- český jazyk stránky.

Ukázka title:

> Mistr na zavolání – hodinový manžel pro Prahu a okolí

Ukázka description:

> Hodinový manžel pro opravy, montáže, drobné instalatérské práce, práci se dřevem a menší rekonstrukce v Praze a okolí.

---

## 21. Docker

Projekt má být spustitelný lokálně i přes Docker.

Doporučený `docker-compose.yml`:

- služba `web`,
- port `3000:3000`,
- bind mount projektu do kontejneru,
- volume pro `node_modules`, aby se nepřepisovaly lokálním systémem,
- příkaz `npm run dev`.

Docker nemusí být použit pro produkční build na Vercelu, ale má usnadnit lokální vývoj.

---

## 22. Git a dokumentace

Projekt verzovat v Gitu.

Doporučené větve:

- `main` – stabilní stav,
- `develop` – průběžný vývoj, pokud bude potřeba,
- feature větve podle úprav.

Do projektu přidat:

- `README.md` s instrukcemi pro spuštění,
- `doc/zadani.md` s tímto zadáním,
- `.gitignore`,
- základní popis deploymentu na Vercel.

README má obsahovat minimálně:

- požadavky,
- lokální spuštění bez Dockeru,
- lokální spuštění přes Docker,
- build,
- lint,
- deployment na Vercel.

---

## 23. Vercel deployment

Projekt má být připravený pro nasazení na Vercel.

Požadavky:

- bez nutnosti vlastního serveru,
- žádný backend,
- žádné environment variables v první verzi,
- statický / běžný Next.js deployment,
- funkční build příkaz `npm run build`.

---

## 24. Vizuální požadavky

Web má působit:

- moderně,
- přehledně,
- řemeslně a poctivě,
- přátelsky,
- ne korporátně,
- důvěryhodně.

Doporučené prvky:

- velké nadpisy,
- zaoblené karty,
- jemné stíny,
- teplé barvy,
- decentní ikony,
- výrazná CTA tlačítka,
- střídání světlých a barevných sekcí,
- drobné badge štítky typu „férová domluva“, „vlastní nářadí“, „ukázkové ceny“.

Nepřehánět animace. Stačí:

- hover efekty na kartách,
- plynulý efekt před/po obrázku,
- jemné přechody u tlačítek.

---

## 25. Akceptační kritéria

První demo bude považováno za hotové, pokud:

- web lze spustit lokálně pomocí `npm run dev`,
- web lze spustit přes Docker,
- projekt lze buildnout pomocí `npm run build`,
- web je responzivní,
- obsahuje všechny požadované sekce,
- neobsahuje kontaktní formulář,
- obsahuje ukázková placeholder data,
- obsahuje interaktivní před/po obrázek,
- navigace odkazuje na sekce stránky,
- obsah je oddělený do datového souboru,
- README popisuje spuštění a deployment,
- zadání je uloženo v `doc/zadani.md`.

---

## 26. Doporučený prompt pro GitHub Copilot

Použij následující zadání jako hlavní prompt pro implementaci:

```txt
Vytvoř prezentační web pro hodinového manžela podle dokumentu doc/zadani.md.

Použij Next.js s App Routerem, TypeScript a Tailwind CSS. Web bude statický, bez backendu, bez databáze a bez kontaktního formuláře.

Vytvoř moderní responzivní landing page v češtině pro demo značku „Mistr na zavolání“. Obsah rozděl do komponent a textová/ukázková data dej do src/data/siteContent.ts, aby šla později snadno upravit.

Implementuj sekce:
- header s navigací,
- hero s CTA,
- úvodní vysvětlení služby,
- benefity,
- služby,
- interaktivní před/po obrázek,
- reference,
- ceník,
- podmínky spolupráce,
- kontakt bez formuláře,
- footer.

Vizuálně se inspiruj webem tozvladneme.cz, ale nekopíruj ho. Použij teplé žluté/medové barevné schéma, světlé podklady, tmavý text, zaoblené karty, výrazná CTA tlačítka a přátelský řemeslný styl.

Implementuj komponentu BeforeAfterImage, kde se při hoveru plynule mění obrázek z „před“ na „po“. Na mobilu zajisti použitelný fallback.

Přidej Dockerfile a docker-compose.yml pro lokální vývoj. Přidej README.md s instrukcemi pro spuštění přes npm i Docker, build, lint a nasazení na Vercel.

Dbej na přístupnost, sémantické HTML, metadata pro SEO a responzivitu.
```

---

## 27. Poznámky pro pozdější doplnění reálných dat

Před finálním spuštěním bude potřeba doplnit:

- skutečný název služby,
- logo,
- telefon,
- e-mail,
- oblast působnosti,
- fakturační údaje,
- skutečný rozsah oprávnění a služeb,
- finální ceník,
- reálné reference se souhlasem zákazníků,
- vlastní fotografie prací,
- právní texty podle skutečného provozu,
- případné GDPR/cookies řešení podle použitých nástrojů.

