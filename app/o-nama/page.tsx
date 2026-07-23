import type { Metadata } from "next";
import Link from "next/link";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export const metadata: Metadata = {
  title: "O detailing studiju",
  description: "Upoznajte pristup, radionicu i standard rada Motorsport Stričević detailing studija u Splitu.",
  alternates: { canonical: "/o-nama" },
};

export default function AboutPage() {
  return (
    <main>
      <section className="about-hero content-shell">
        <div>
          <p className="eyebrow">O nama</p>
          <h1>Automobili su strast.<br /><em>Pristup je zanat.</em></h1>
          <p className="page-lead">Motorsport Stričević nastao je iz dugogodišnjeg rada s vozilima i uvjerenja da vrhunski rezultat počinje pažljivim pregledom, a završava povjerenjem klijenta.</p>
        </div>
        <MediaPlaceholder tall label="Portret vlasnika ili tima u radionici, prirodan kadar uz automobil i stvarnu opremu." />
      </section>
      <section className="about-story content-shell section-pad">
        <p className="eyebrow">Naša priča</p>
        <div>
          <h2>Od motorsporta do precizne njege svakog vozila.</h2>
          <p>Ovdje dolazi potvrđena priča vlasnika: početak, godine iskustva, edukacije, najvažniji trenutci i razlog zbog kojeg je studio dobio ime Motorsport Stričević.</p>
          <p>Javno dostupni materijali pokazuju rad na svakodnevnim, sportskim i egzotičnim automobilima, motociklima i plovilima. Konačan tekst objavljujemo tek nakon potvrde svih činjenica.</p>
        </div>
      </section>
      <section className="values-section section-pad">
        <div className="content-shell">
          <div className="section-heading compact"><div><p className="eyebrow">Standard rada</p><h2>Četiri stvari oko kojih nema kompromisa.</h2></div></div>
          <div className="values-grid">
            <article><span>01</span><h3>Procjena prije postupka</h3><p>Ne preporučujemo tretman dok ne razumijemo površinu, stanje i očekivanje.</p></article>
            <article><span>02</span><h3>Sigurnost materijala</h3><p>Rezultat nema vrijednost ako dolazi uz nepotreban rizik za lak ili interijer.</p></article>
            <article><span>03</span><h3>Jasan dogovor</h3><p>Opseg, trajanje, cijena i granice rezultata trebaju biti poznati prije početka.</p></article>
            <article><span>04</span><h3>Dosljedna završna kontrola</h3><p>Vozilo predajemo tek nakon pregleda detalja i preporuke za održavanje.</p></article>
          </div>
        </div>
      </section>
      <section className="about-gallery content-shell section-pad">
        <MediaPlaceholder label="Široka fotografija radionice bez vozila; čiste zone rada i inspekcijska rasvjeta." />
        <MediaPlaceholder label="Krupni kadar profesionalne opreme i odobrenih proizvoda; logotipi samo uz dopuštenje." />
      </section>
      <section className="service-final-cta content-shell section-pad">
        <p className="eyebrow">Upoznajte nas kroz rad</p>
        <h2>Donesite vozilo na procjenu u radionicu.</h2>
        <Link className="button button-accent" href="/rezervacija">Dogovori termin <span>↗</span></Link>
      </section>
    </main>
  );
}

