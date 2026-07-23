import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uvjeti rezervacije",
  robots: { index: false, follow: true },
};

export default function BookingTermsPage() {
  return (
    <main className="legal-page content-shell">
      <p className="eyebrow">Pravna napomena · nacrt</p>
      <h1>Uvjeti rezervacije</h1>
      <p className="legal-warning">Ovo je radni predložak. Vlasnik mora potvrditi pravila otkazivanja, kašnjenja, pologa, preuzimanja i odgovornosti prije objave.</p>

      <h2>1. Zahtjev i potvrda termina</h2>
      <p>Slanje obrasca predstavlja zahtjev za termin, a ne automatsku konačnu potvrdu. Termin vrijedi nakon potvrde studija telefonom ili e-mailom.</p>

      <h2>2. Procjena usluge</h2>
      <p>Trajanje i konačna cijena mogu ovisiti o veličini vozila, stanju površina, dubini oštećenja, odabranom sustavu zaštite i dodatnim zahtjevima. Veće razlike u odnosu na opis dogovaraju se prije nastavka rada.</p>

      <h2>3. Dolazak i osobne stvari</h2>
      <p>Klijent treba doći u dogovoreno vrijeme, ukloniti vrijedne i osobne stvari te upozoriti na posebnosti vozila, ranije popravke, osjetljive površine ili tehničke poteškoće.</p>

      <h2>4. Otkazivanje i promjena termina</h2>
      <p>[POTVRDITI ROK ZA BESPLATNO OTKAZIVANJE, PRAVILA PROMJENE, KAŠNJENJA I NEDOLASKA.]</p>

      <h2>5. Polog i plaćanje</h2>
      <p>[POTVRDITI POSTOJI LI POLOG, ZA KOJE USLUGE, KADA SE VRAĆA I KOJI SU NAČINI PLAĆANJA.]</p>

      <h2>6. Rezultat i ograničenja</h2>
      <p>Potpuno uklanjanje svake mrlje, mirisa ili ogrebotine nije uvijek moguće bez rizika za materijal. Očekivani rezultat i poznata ograničenja komuniciraju se nakon pregleda.</p>

      <h2>7. Preuzimanje i održavanje</h2>
      <p>Klijent se obvezuje slijediti upute o sušenju, prvom pranju, održavanju premaza i kontrolnim pregledima kada su dio odabranog sustava.</p>

      <h2>8. Kontakt</h2>
      <p>Za promjenu termina nazovite +385 95 889 1039 ili upotrijebite [POTVRDITI SLUŽBENI E-MAIL].</p>
    </main>
  );
}

