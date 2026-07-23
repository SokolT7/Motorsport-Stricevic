export const siteConfig = {
  name: "Motorsport Stričević",
  shortName: "MS Detailing",
  description:
    "Profesionalni auto detailing u Splitu — dubinsko čišćenje, poliranje i keramička zaštita vozila.",
  phoneDisplay: "+385 95 889 1039",
  phoneHref: "tel:+385958891039",
  address: "Antuna Mihanovića 38, 21000 Split",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Antuna+Mihanovi%C4%87a+38+Split",
  instagramHref: "https://www.instagram.com/detailing_motorsport_stricevic/",
  facebookHref: "https://www.facebook.com/MS.AutoDetailing.Studio/",
};

export type Service = {
  slug: string;
  index: string;
  name: string;
  shortName: string;
  eyebrow: string;
  promise: string;
  description: string;
  audience: string;
  duration: string;
  price: string;
  bookingMode: "instant" | "request";
  inclusions: string[];
  outcomes: string[];
  process: { title: string; text: string }[];
  faq: { question: string; answer: string }[];
  placeholder: string;
};

export const services: Service[] = [
  {
    slug: "dubinsko-ciscenje-automobila-split",
    index: "01",
    name: "Dubinsko čišćenje automobila",
    shortName: "Dubinsko čišćenje",
    eyebrow: "Interijer",
    promise: "Čist, svjež i ugodan interijer — obrađen površinu po površinu.",
    description:
      "Temeljita njega tkanine, kože, plastike i teško dostupnih mjesta. Tretman prilagođavamo materijalima i stvarnom stanju vozila, bez površnog prikrivanja problema.",
    audience:
      "Za svakodnevna vozila, obiteljske automobile, vozila s mrljama i mirisima te interijere kojima treba potpuni reset.",
    duration: "Trajanje nakon procjene stanja",
    price: "Cijena nakon pregleda vozila",
    bookingMode: "request",
    inclusions: [
      "Detaljan pregled materijala i stanja interijera",
      "Temeljito usisavanje i obrada teško dostupnih zona",
      "Dubinsko čišćenje tekstilnih površina",
      "Sigurno čišćenje i njega kože, plastike i obloga",
      "Završna kontrola i upute za sušenje/održavanje",
    ],
    outcomes: [
      "Vidljivo čišće površine i ujednačen izgled",
      "Uklanjanje velikog dijela nakupljene prljavštine",
      "Svježiji i ugodniji prostor za svakodnevnu vožnju",
    ],
    process: [
      { title: "Pregled", text: "Provjeravamo materijale, mrlje, mirise i osjetljive zone." },
      { title: "Priprema", text: "Interijer detaljno usisavamo i pripremamo za ciljanu obradu." },
      { title: "Dubinsko čišćenje", text: "Svaku površinu tretiramo odgovarajućim postupkom i sredstvom." },
      { title: "Kontrola", text: "Pregledavamo rezultat i dajemo jasne upute za preuzimanje i sušenje." },
    ],
    faq: [
      {
        question: "Može li se ukloniti svaka mrlja?",
        answer:
          "Rezultat ovisi o vrsti mrlje, materijalu i vremenu koje je prošlo. Prije rada objasnit ćemo što je realno moguće postići bez oštećenja površine.",
      },
      {
        question: "Koliko dugo se interijer suši?",
        answer:
          "Vrijeme sušenja ovisi o materijalima, opsegu tretmana i vremenskim uvjetima. Točnu procjenu dobit ćete nakon pregleda vozila.",
      },
      {
        question: "Radite li kožna sjedala?",
        answer:
          "Da. Koža se čisti i njeguje postupkom prilagođenim njezinu stanju. Restauracija ili bojanje kože navodi se zasebno ako je potrebno.",
      },
    ],
    placeholder:
      "Fotografija: dubinsko čišćenje interijera, široki kadar, vidljiva ekstrakcija i stvarni tim na radu.",
  },
  {
    slug: "poliranje-automobila-split",
    index: "02",
    name: "Poliranje automobila i korekcija laka",
    shortName: "Poliranje laka",
    eyebrow: "Eksterijer",
    promise: "Vraćamo jasnoću, dubinu i sjaj laka — kontrolirano i bez prečaca.",
    description:
      "Od osvježavanja sjaja do višefazne korekcije laka. Opseg rada određujemo nakon pregleda oštećenja, debljine i prethodnih zahvata na vozilu.",
    audience:
      "Za lak s finim ogrebotinama, hologramima, oksidacijom, gubitkom sjaja ili tragovima nepravilnog pranja.",
    duration: "Ovisno o stanju i stupnju korekcije",
    price: "Ponuda nakon pregleda laka",
    bookingMode: "request",
    inclusions: [
      "Pregled laka i dogovor očekivanog rezultata",
      "Sigurno pranje i kemijska/mehanička dekontaminacija",
      "Maskiranje osjetljivih površina",
      "Odabrani stupanj strojnog poliranja",
      "Završna zaštita i kontrola pod inspekcijskim svjetlom",
    ],
    outcomes: [
      "Veća jasnoća i dubina boje",
      "Smanjena vidljivost finih ogrebotina i holograma",
      "Ujednačeniji završni izgled laka",
    ],
    process: [
      { title: "Dijagnostika", text: "Pregledavamo lak i dogovaramo siguran, realan cilj korekcije." },
      { title: "Dekontaminacija", text: "Uklanjamo vezane nečistoće prije bilo kakve strojne obrade." },
      { title: "Korekcija", text: "Kombinaciju paste, spužve i koraka prilagođavamo svakom panelu." },
      { title: "Zaštita", text: "Rezultat zaključujemo odabranom zaštitom i završnim pregledom." },
    ],
    faq: [
      {
        question: "Uklanja li poliranje sve ogrebotine?",
        answer:
          "Ne. Preduboke ogrebotine nije sigurno potpuno uklanjati. Cilj je postići najbolji mogući rezultat uz očuvanje laka.",
      },
      {
        question: "Koja je razlika između jednoslojnog i višeslojnog poliranja?",
        answer:
          "Jednoslojno poliranje prvenstveno osvježava sjaj i ublažava lakše nepravilnosti. Višefazna korekcija namijenjena je zahtjevnijim oštećenjima i traži više vremena.",
      },
      {
        question: "Treba li nakon poliranja zaštititi lak?",
        answer:
          "Da. Odgovarajuća zaštita pomaže očuvati dovršenu površinu. Preporuku dajemo prema načinu korištenja i održavanja vozila.",
      },
    ],
    placeholder:
      "Fotografija: korekcija laka pod linearnim inspekcijskim svjetlom, krupni kadar refleksije prije/poslije.",
  },
  {
    slug: "keramicka-zastita-automobila-split",
    index: "03",
    name: "Keramička zaštita automobila",
    shortName: "Keramička zaštita",
    eyebrow: "Dugotrajna njega",
    promise: "Dublji sjaj, lakše održavanje i zaštita prilagođena načinu vožnje.",
    description:
      "Keramički premaz nanosimo tek nakon pravilne pripreme površine. Objašnjavamo što premaz može, koliko traje uz pravilno održavanje i što nije zamjena za zaštitnu foliju.",
    audience:
      "Za nova i rabljena vozila čiji vlasnici žele kvalitetno pripremljen lak, hidrofobnost i jednostavnije redovito održavanje.",
    duration: "Nakon pregleda i odabira premaza",
    price: "Ponuda prema pripremi i sustavu zaštite",
    bookingMode: "request",
    inclusions: [
      "Pregled vozila i odabir prikladnog sustava",
      "Temeljito pranje i dekontaminacija",
      "Priprema ili korekcija laka prema potrebi",
      "Nanošenje premaza u kontroliranim uvjetima",
      "Upute za prvo pranje i dugoročno održavanje",
    ],
    outcomes: [
      "Izraženiji sjaj i hidrofobno ponašanje",
      "Lakše uklanjanje redovite prljavštine",
      "Pomoć u zaštiti od UV-a i okolišnih onečišćenja",
    ],
    process: [
      { title: "Odabir", text: "Usklađujemo trajnost i način održavanja s vašim korištenjem vozila." },
      { title: "Priprema", text: "Lak temeljito čistimo, dekontaminiramo i po potrebi korigiramo." },
      { title: "Nanošenje", text: "Premaz nanosimo panel po panel u kontroliranim uvjetima." },
      { title: "Predaja", text: "Provjeravamo završni rezultat i objašnjavamo pravila održavanja." },
    ],
    faq: [
      {
        question: "Štiti li keramika od kamenčića i dubokih ogrebotina?",
        answer:
          "Ne. Keramički premaz nije fizička folija i ne može zaustaviti udarce kamenčića ili duboka mehanička oštećenja.",
      },
      {
        question: "Mora li se novo vozilo polirati prije keramike?",
        answer:
          "Ne uvijek, ali novo vozilo također može imati tragove transporta ili nepravilnog pranja. Odluku donosimo nakon pregleda laka.",
      },
      {
        question: "Kako se održava keramička zaštita?",
        answer:
          "Pravilnim ručnim pranjem, odgovarajućom kemijom i periodičnim pregledom. Točne upute ovise o odabranom sustavu premaza.",
      },
    ],
    placeholder:
      "Fotografija: nanošenje keramičkog premaza na crni lak, vidljive rukavice i kontrolirana rasvjeta radionice.",
  },
  {
    slug: "premium-pranje-automobila",
    index: "04",
    name: "Premium ručno pranje i održavanje",
    shortName: "Premium pranje",
    eyebrow: "Redovita njega",
    promise: "Sigurno održavanje za vozilo koje treba ostati uredno i pravilno zaštićeno.",
    description:
      "Pažljivo vanjsko i unutarnje održavanje za redovne klijente i vozila sa zaštitom. Bez agresivnih četki i brzih postupaka koji ostavljaju tragove.",
    audience:
      "Za vlasnike koji žele dosljednu njegu između većih tretmana, posebno nakon poliranja ili keramičke zaštite.",
    duration: "Termin prema paketu i veličini vozila",
    price: "Paket i cijena za potvrdu",
    bookingMode: "request",
    inclusions: [
      "Sigurno predpranje i ručno pranje",
      "Pažljiva obrada felgi i vanjskih detalja",
      "Pravilno sušenje bez nepotrebnog kontakta",
      "Osnovno uređenje interijera prema odabranom paketu",
      "Vizualna kontrola postojeće zaštite",
    ],
    outcomes: [
      "Čisto vozilo bez agresivnog postupka",
      "Manji rizik od tragova nepravilnog pranja",
      "Redovita kontrola stanja zaštite",
    ],
    process: [
      { title: "Procjena", text: "Provjeravamo stanje, zaštitu i razinu onečišćenja." },
      { title: "Predpranje", text: "Omekšavamo i uklanjamo što više nečistoće prije kontakta." },
      { title: "Ručno pranje", text: "Vozilo peremo sigurnom metodom i čistim priborom." },
      { title: "Završetak", text: "Sušimo, uređujemo detalje i provjeravamo stanje zaštite." },
    ],
    faq: [
      {
        question: "Je li usluga dostupna za vozila bez keramičke zaštite?",
        answer:
          "Da. Preporučit ćemo paket prema stanju vozila i postojećoj zaštiti.",
      },
      {
        question: "Koliko često treba održavati keramički zaštićeno vozilo?",
        answer:
          "Učestalost ovisi o kilometraži, parkiranju i uvjetima vožnje. Nakon pregleda dobit ćete preporučeni ritam održavanja.",
      },
      {
        question: "Koristite li automatske četke?",
        answer:
          "Ne. Proces je usmjeren na sigurno ručno održavanje i smanjenje nepotrebnog kontakta s lakom.",
      },
    ],
    placeholder:
      "Fotografija: pjena i ručno pranje premium vozila u radionici, široki kadar s vidljivim LED linijama.",
  },
];

export const projects = [
  {
    vehicle: "Porsche 911",
    category: "Korekcija laka",
    treatment: "Višefazna korekcija · završna zaštita",
    placeholder: "Prije/poslije fotografije stražnjeg boka pod jednakim inspekcijskim svjetlom.",
  },
  {
    vehicle: "Ferrari",
    category: "Premium održavanje",
    treatment: "Sigurno pranje · detalji eksterijera",
    placeholder: "Krupni kadar crvenog laka, oznake vozila i vodene perle nakon tretmana.",
  },
  {
    vehicle: "Obiteljski SUV",
    category: "Dubinsko čišćenje",
    treatment: "Potpuna obrada interijera",
    placeholder: "Stvarni daily-driver prije/poslije; sjedala i tepisi fotografirani iz istog kuta.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

