import type { Metadata } from "next";
import Link from "next/link";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt i lokacija",
  description: `Kontaktirajte Motorsport Stričević i pronađite detailing studio na adresi ${siteConfig.address}.`,
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <main>
      <section className="contact-hero content-shell">
        <div>
          <p className="eyebrow">Kontakt · Split</p>
          <h1>Vaše vozilo.<br /><em>Naš puni fokus.</em></h1>
          <p className="page-lead">Za procjenu i termin pošaljite osnovne podatke kroz rezervaciju ili nas nazovite.</p>
          <Link className="button button-accent" href="/rezervacija">Zatraži termin <span>↗</span></Link>
        </div>
        <div className="contact-list">
          <div><span>Telefon</span><a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a></div>
          <div><span>Adresa</span><a href={siteConfig.mapsHref} target="_blank" rel="noreferrer">{siteConfig.address} ↗</a></div>
          <div><span>Dolazak</span><p>Po dogovorenom terminu</p></div>
          <div><span>Društvene mreže</span><p><a href={siteConfig.instagramHref} target="_blank" rel="noreferrer">Instagram ↗</a> · <a href={siteConfig.facebookHref} target="_blank" rel="noreferrer">Facebook ↗</a></p></div>
        </div>
      </section>
      <section className="contact-map content-shell section-pad">
        <MediaPlaceholder
          tall
          src="/Images/HeroPhoto.png"
          objectPosition="center 30%"
          label="Ulaz u radionicu Motorsport Stričević u Splitu."
        />
        <div>
          <p className="eyebrow">Prije dolaska</p>
          <h2>Jednostavna primopredaja, bez čekanja.</h2>
          <ul className="check-list">
            <li>Dogovorite termin prije dolaska</li>
            <li>Uklonite osobne stvari iz vozila</li>
            <li>Pripremite ključ i važne napomene</li>
            <li>Za posebna vozila dogovorite upute za rukovanje</li>
          </ul>
          <p className="fine-print">Točne upute za parkiranje, radno vrijeme i preuzimanje bit će dodane nakon potvrde vlasnika.</p>
        </div>
      </section>
    </main>
  );
}
