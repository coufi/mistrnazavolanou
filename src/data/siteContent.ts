export type NavigationItem = {
  label: string;
  href: string;
};

export type NavigationContent = {
  items: NavigationItem[];
  cta: {
    label: string;
    href: string;
  };
};

export type SiteInfo = {
  name: string;
  claim: string;
  description: string;
  area: string;
  availability: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  whatsappHref: string;
  billingName: string;
  billingPerson: string;
  ico: string;
  legalNote: string;
};

export type ActionLink = {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "ghost";
};

export type HeroContent = {
  badge: string;
  title: string;
  description: string;
  actions: ActionLink[];
  bullets: string[];
  image: {
    beforeSrc: string;
    afterSrc: string;
    beforeLabel: string;
    afterLabel: string;
  };
};

export type IntroContent = {
  title: string;
  description: string;
  cards: {
    title: string;
    description: string;
    icon: IconName;
  }[];
};

export type BenefitsContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: {
    title: string;
    icon: IconName;
  }[];
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: IconName;
};

export type ServicesContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: ServiceItem[];
  note: string;
};

export type BeforeAfterContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  badge: string;
  checklistTitle: string;
  checklist: string[];
  image: {
    beforeSrc: string;
    afterSrc: string;
    beforeLabel: string;
    afterLabel: string;
  };
};

export type TestimonialsContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: {
    quote: string;
    name: string;
    location: string;
    tag: string;
  }[];
};

export type PricingContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  note: string;
  items: {
    title: string;
    price: string;
    details: string[];
  }[];
};

export type ConditionsContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
};

export type ContactContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  actions: {
    label: string;
    href: string;
    description: string;
    icon: IconName;
  }[];
};

export type FooterContent = {
  note: string;
  copyright: string;
};

export type IconName =
  | "chat"
  | "check"
  | "clock"
  | "drill"
  | "electric"
  | "furniture"
  | "hammer"
  | "mail"
  | "paint"
  | "phone"
  | "renovation"
  | "shield"
  | "star"
  | "van"
  | "water"
  | "wood";

export const siteContent = {
  siteInfo: {
    name: "Mistr na zavolání",
    claim: "Šikovné ruce pro váš domov.",
    description:
      "Demo prezentační web pro zkušeného řemeslníka a hodinového manžela.",
    area: "Praha a okolí",
    availability: "Po–Pá 8:00–18:00, víkendy dle domluvy",
    phoneDisplay: "+420 777 123 456",
    phoneHref: "tel:+420777123456",
    email: "info@mistrnazavolani.cz",
    emailHref: "mailto:info@mistrnazavolani.cz",
    whatsappHref: "https://wa.me/420777123456",
    billingName: "Mistr na zavolání",
    billingPerson: "Jan Novák",
    ico: "12345678",
    legalNote:
      "Veškeré kontakty, ceny a fakturační údaje na webu jsou ilustrační demo data.",
  } satisfies SiteInfo,
  navigation: {
    items: [
      { label: "Služby", href: "#sluzby" },
      { label: "Reference", href: "#reference" },
      { label: "Ceník", href: "#cenik" },
      { label: "Podmínky", href: "#podminky" },
      { label: "Kontakt", href: "#kontakt" },
    ],
    cta: {
      label: "Zavolat / Napsat",
      href: "#kontakt",
    },
  } satisfies NavigationContent,
  hero: {
    badge: "Demo verze s ilustračními daty",
    title: "Hodinový manžel pro opravy, montáže a rekonstrukce",
    description:
      "Přijedu, opravím, smontuju, zapojím nebo pomůžu s větší úpravou bytu. Férově, čistě a srozumitelně.",
    actions: [
      { label: "Zavolat", href: "tel:+420777123456", variant: "primary" },
      {
        label: "Napsat e-mail",
        href: "mailto:info@mistrnazavolani.cz",
        variant: "secondary",
      },
      { label: "Zobrazit ceník", href: "#cenik", variant: "ghost" },
    ],
    bullets: [
      "Drobné opravy i větší práce",
      "Dřevo, voda, elektro, montáže",
      "Domluva předem, férová cena",
    ],
    image: {
      beforeSrc: "/images/kitchen-before.svg",
      afterSrc: "/images/kitchen-after.svg",
      beforeLabel: "Před",
      afterLabel: "Po",
    },
  } satisfies HeroContent,
  intro: {
    title: "Drobné opravy i větší rekonstrukce",
    description:
      "Potřebujete přivrtat poličku, smontovat skříň, opravit kapající baterii nebo připravit byt po nájemnících? Pomůžu s malými úkoly i většími úpravami. Domluvíme se předem, co je potřeba udělat, kolik to přibližně zabere času a jaké budou náklady.",
    cards: [
      {
        title: "Přijedu v domluvený čas",
        description: "Bez zbytečného čekání a překvapení.",
        icon: "clock",
      },
      {
        title: "Pracuji čistě",
        description: "Po práci po sobě uklidím a nechám po sobě pořádek.",
        icon: "shield",
      },
      {
        title: "Řeknu cenu dopředu",
        description:
          "U větších prací připravím orientační odhad ještě před zahájením.",
        icon: "check",
      },
    ],
  } satisfies IntroContent,
  benefits: {
    id: "proc-me",
    eyebrow: "Proč si mě vybrat",
    title: "Přímá domluva, poctivá práce a lokální dostupnost",
    description:
      "Nejsem anonymní firma ani katalog řemeslníků. Domlouváte se přímo s člověkem, který práci udělá. Umím si poradit s běžnými opravami v bytě, montáží nábytku, dřevěnými prvky i přípravou prostoru na pronájem nebo prodej.",
    items: [
      { title: "Zkušenosti s rekonstrukcemi bytů", icon: "renovation" },
      { title: "Práce se dřevem a montáže na míru", icon: "wood" },
      { title: "Základní instalatérské práce", icon: "water" },
      { title: "Drobné elektro práce po domluvě", icon: "electric" },
      { title: "Vlastní nářadí a vybavení", icon: "hammer" },
      { title: "Nákup a dovoz materiálu", icon: "van" },
      { title: "Férové jednání bez mlžení", icon: "check" },
      { title: "Praha a blízké okolí", icon: "chat" },
    ],
  } satisfies BenefitsContent,
  services: {
    id: "sluzby",
    eyebrow: "Služby",
    title: "S čím vám pomůžu doma, v bytě nebo před pronájmem",
    description:
      "Web je připravený jako demo verze, takže rozsah služeb i formulace lze později snadno upravit podle reálné specializace a oprávnění.",
    items: [
      {
        title: "Montáž nábytku",
        description:
          "Skříně, police, postele, kuchyňské prvky, drobný i větší nábytek.",
        icon: "furniture",
      },
      {
        title: "Drobné opravy v domácnosti",
        description:
          "Kliky, panty, lišty, garnýže, silikon, drobné úpravy a dokončovací práce.",
        icon: "hammer",
      },
      {
        title: "Vrtání a kotvení",
        description:
          "Police, zrcadla, obrazy, držáky, skříňky a další prvky na zeď.",
        icon: "drill",
      },
      {
        title: "Instalatérské práce",
        description:
          "Výměna baterie, sifonu, sprchové hlavice a drobné opravy úniků vody.",
        icon: "water",
      },
      {
        title: "Drobné elektro práce",
        description:
          "Výměna světel, zásuvek, vypínačů a základní úpravy po předchozí domluvě.",
        icon: "electric",
      },
      {
        title: "Práce se dřevem",
        description:
          "Drobné dřevěné úpravy, opravy, police a jednoduché prvky na míru.",
        icon: "wood",
      },
      {
        title: "Příprava bytu k pronájmu",
        description:
          "Opravy po nájemnících, dotažení detailů, montáže a drobná renovace.",
        icon: "paint",
      },
      {
        title: "Menší rekonstrukce",
        description:
          "Koupelny, kuchyně, obklady, podlahy a dokončovací práce podle rozsahu.",
        icon: "renovation",
      },
    ],
    note:
      "Poznámka: U elektro prací jde v této demo verzi jen o opatrně formulovanou ukázku. Finální text se upraví podle skutečné kvalifikace a rozsahu živnosti.",
  } satisfies ServicesContent,
  beforeAfter: {
    id: "pred-a-po",
    eyebrow: "Před a po",
    title: "Malá změna, velký rozdíl",
    description:
      "I drobná oprava nebo dokončení detailů dokáže změnit celý dojem z bytu. Tady bude později ukázka reálných prací. Pro demo používáme ilustrační obrázky.",
    badge: "Demo ukázka",
    checklistTitle: "Co se změnilo",
    checklist: [
      "Výměna pracovní desky",
      "Oprava lišt a dotažení detailů kolem kuchyně",
      "Nové osvětlení a čistší pracovní zóna",
      "Lepší zakončení spojů a silikonů",
      "Úklid a připravený prostor k používání",
    ],
    image: {
      beforeSrc: "/images/kitchen-before.svg",
      afterSrc: "/images/kitchen-after.svg",
      beforeLabel: "Před",
      afterLabel: "Po",
    },
  } satisfies BeforeAfterContent,
  testimonials: {
    id: "reference",
    eyebrow: "Reference",
    title: "Ukázkové ohlasy zákazníků",
    description:
      "Reference jsou zatím ilustrační a slouží pro první návrh webu. Později je lze snadno nahradit reálnými texty se souhlasem zákazníků.",
    items: [
      {
        quote:
          "Potřebovala jsem opravit několik drobností po stěhování. Všechno bylo hotové během jedné návštěvy a byt zůstal čistý.",
        name: "Jana K.",
        location: "Praha",
        tag: "Drobné opravy",
      },
      {
        quote:
          "Pomohl s montáží skříní a polic. Oceňuji domluvu, přesnost a to, že si poradil i s nerovnou zdí.",
        name: "Petr M.",
        location: "Praha-západ",
        tag: "Montáž",
      },
      {
        quote:
          "Původně jsme chtěli jen drobnou opravu v koupelně, nakonec jsme domluvili i další úpravy. Vše proběhlo férově a bez stresu.",
        name: "Lenka a Tomáš",
        location: "Beroun",
        tag: "Rekonstrukce",
      },
    ],
  } satisfies TestimonialsContent,
  pricing: {
    id: "cenik",
    eyebrow: "Ceník",
    title: "Kolik to bude stát?",
    description:
      "Cenu vám vždy potvrdím předem podle rozsahu práce, místa a potřebného materiálu. Níže je orientační demo ceník pro první návrh webu.",
    note:
      "Uvedené ceny jsou pouze ilustrační pro demo verzi webu. Finální ceník bude doplněn po schválení klientem.",
    items: [
      {
        title: "Běžná hodinová sazba",
        price: "650 Kč / hod.",
        details: [
          "Všední dny 8:00–18:00",
          "Minimální objednávka 2 hodiny",
        ],
      },
      {
        title: "Večer a víkend",
        price: "850 Kč / hod.",
        details: [
          "Večery, víkendy a svátky",
          "Jen podle předchozí domluvy",
        ],
      },
      {
        title: "Doprava",
        price: "od 250 Kč / výjezd",
        details: [
          "Podle lokality a parkování",
          "Materiál se účtuje zvlášť",
        ],
      },
      {
        title: "Větší práce a rekonstrukce",
        price: "individuální kalkulace",
        details: [
          "Obhlídka podle domluvy",
          "Cenový odhad před zahájením práce",
        ],
      },
    ],
  } satisfies PricingContent,
  conditions: {
    id: "podminky",
    eyebrow: "Podmínky spolupráce",
    title: "Stručně a bez drobného písma",
    description:
      "Základní pravidla jsou uvedená přehledně. Ve finální verzi se doplní přesné provozní a právní podmínky podle skutečného nastavení služby.",
    items: [
      "Cena práce se počítá podle skutečně odpracovaného času, pokud není předem domluvena pevná cena.",
      "Minimální objednávka je 2 hodiny práce.",
      "Materiál a náhradní díly nejsou zahrnuty v hodinové sazbě.",
      "Doprava a parkování se účtují zvlášť.",
      "U větších prací je vhodná předchozí obhlídka.",
      "Termín je závazný po potvrzení telefonem nebo e-mailem.",
      "Elektro a instalatérské práce budou prováděny pouze v rozsahu odpovídajícím kvalifikaci a platným předpisům.",
    ],
  } satisfies ConditionsContent,
  contact: {
    id: "kontakt",
    eyebrow: "Kontakt",
    title: "Zavolejte nebo napište",
    description:
      "Stručně popište, s čím potřebujete pomoct, ideálně přidejte fotku místa nebo problému a domluvíme další postup. Bez formuláře, jednoduše a napřímo.",
    actions: [
      {
        label: "+420 777 123 456",
        href: "tel:+420777123456",
        description: "Telefon pro rychlou domluvu",
        icon: "phone",
      },
      {
        label: "info@mistrnazavolani.cz",
        href: "mailto:info@mistrnazavolani.cz",
        description: "E-mail pro detailnější popis zakázky",
        icon: "mail",
      },
      {
        label: "WhatsApp",
        href: "https://wa.me/420777123456",
        description: "Rychlá zpráva nebo poslání fotky problému",
        icon: "chat",
      },
    ],
  } satisfies ContactContent,
  footer: {
    note:
      "Pracovní název, logo, reference, ceník i kontaktní údaje jsou v této verzi placeholdery připravené k nahrazení po schválení klientem.",
    copyright: `© ${new Date().getFullYear()} Mistr na zavolání`,
  } satisfies FooterContent,
};
