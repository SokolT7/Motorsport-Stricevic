import Link from "next/link";
import { services, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta content-shell">
        <p className="eyebrow">Sljedeći korak</p>
        <div>
          <h2>Recite nam što vaše vozilo treba.</h2>
          <Link className="circle-link" href="/rezervacija" aria-label="Zatraži termin">
            <span>Termin</span><b aria-hidden="true">↗</b>
          </Link>
        </div>
      </div>

      <div className="footer-grid content-shell">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">MS</span>
          <p>Precizna njega vozila u Splitu, od svakodnevnih automobila do posebnih projekata.</p>
        </div>
        <div>
          <h3>Usluge</h3>
          {services.map((service) => (
            <Link href={`/usluge/${service.slug}`} key={service.slug}>{service.shortName}</Link>
          ))}
        </div>
        <div>
          <h3>Studio</h3>
          <Link href="/radovi">Radovi</Link>
          <Link href="/o-nama">O nama</Link>
          <Link href="/kontakt">Kontakt i lokacija</Link>
          <Link href="/rezervacija">Rezervacija</Link>
        </div>
        <div>
          <h3>Kontakt</h3>
          <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
          <a href={siteConfig.mapsHref} target="_blank" rel="noreferrer">{siteConfig.address}</a>
          <a href={siteConfig.instagramHref} target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href={siteConfig.facebookHref} target="_blank" rel="noreferrer">Facebook ↗</a>
        </div>
      </div>

      <div className="footer-bottom content-shell">
        <span>© {new Date().getFullYear()} Motorsport Stričević</span>
        <div>
          <Link href="/politika-privatnosti">Privatnost</Link>
          <Link href="/uvjeti-rezervacije">Uvjeti rezervacije</Link>
        </div>
      </div>
    </footer>
  );
}

