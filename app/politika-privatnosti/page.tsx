import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politika privatnosti",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="legal-page content-shell">
      <p className="eyebrow">Pravna napomena · nacrt</p>
      <h1>Politika privatnosti</h1>
      <p className="legal-warning">Ovaj tekst je implementacijski predložak. Prije objave treba unijeti potvrđene podatke obrta, rokove čuvanja i sve stvarne izvršitelje obrade te zatražiti pravni pregled.</p>

      <h2>1. Voditelj obrade</h2>
      <p>Motorsport Stričević · [POTVRDITI PUNI PRAVNI NAZIV, OIB I E-MAIL] · Antuna Mihanovića 38, 21000 Split · +385 95 889 1039.</p>

      <h2>2. Podaci koje prikupljamo</h2>
      <p>Kroz obrazac za rezervaciju možemo prikupiti ime i prezime, telefon, e-mail, podatke o vozilu, opis stanja vozila, odabranu uslugu te željeni datum i vrijeme.</p>

      <h2>3. Svrha i pravna osnova</h2>
      <p>Podatke koristimo za obradu upita, procjenu tražene usluge, dogovor i izvršenje termina te nužnu komunikaciju povezanu s uslugom. Pravnu osnovu treba potvrditi prema konačnom poslovnom procesu.</p>

      <h2>4. Google Calendar</h2>
      <p>Nakon aktivacije integracije, podaci potrebni za termin mogu biti uneseni u privatni poslovni Google Calendar. Kalendar ne smije biti javno dostupan. Konačna politika mora opisati stvarnu konfiguraciju i ulogu pružatelja usluge.</p>

      <h2>5. Čuvanje i primatelji</h2>
      <p>[POTVRDITI ROKOVE ČUVANJA, PRUŽATELJA HOSTINGA, E-MAIL/SMS/WHATSAPP ALATE I DRUGE PRIMATELJE PODATAKA.] Podatke ne treba čuvati dulje nego što je potrebno za navedene svrhe i zakonske obveze.</p>

      <h2>6. Vaša prava</h2>
      <p>Ovisno o primjenjivim uvjetima, možete zatražiti pristup, ispravak, brisanje, ograničenje obrade, prijenos podataka ili uložiti prigovor. Zahtjev se šalje na [POTVRDITI KONTAKT ZA PRIVATNOST].</p>

      <h2>7. Kolačići i analitika</h2>
      <p>Neobavezna analitika i drugi ne-nužni alati ne smiju se učitati prije valjanog odabira korisnika kada je privola potrebna. Ovaj odjeljak treba uskladiti s alatima koji će stvarno biti uključeni pri lansiranju.</p>

      <h2>8. Izmjene</h2>
      <p>Politiku ćemo ažurirati kada se promijene obrasci obrade ili pružatelji usluga. Datum zadnje izmjene: [POTVRDITI].</p>
    </main>
  );
}

