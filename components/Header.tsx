import Link from "next/link";
import { siteConfig } from "@/lib/site";

const nav = [
  { href: "/usluge", label: "Usluge" },
  { href: "/radovi", label: "Radovi" },
  { href: "/o-nama", label: "O nama" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="header-shell">
        <Link className="brand" href="/" aria-label={`${siteConfig.name} — početna`}>
          <span className="brand-mark" aria-hidden="true">MS</span>
          <span className="brand-copy">
            <strong>Motorsport</strong>
            <span>Stričević · Split</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Glavna navigacija">
          {nav.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={siteConfig.phoneHref}>095 889 1039</a>
          <Link className="button button-small button-accent" href="/rezervacija">
            Rezerviraj <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <details className="mobile-nav">
          <summary aria-label="Otvori izbornik"><span></span><span></span></summary>
          <nav aria-label="Mobilna navigacija">
            {nav.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
            <Link href="/rezervacija">Rezerviraj termin</Link>
            <a href={siteConfig.phoneHref}>Nazovi · 095 889 1039</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

