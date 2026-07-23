import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found content-shell">
      <span>404</span>
      <p className="eyebrow">Pogrešan smjer</p>
      <h1>Ova stranica nije u radionici.</h1>
      <p>Vratite se na početnu ili otvorite pregled usluga.</p>
      <div className="hero-actions">
        <Link className="button button-accent" href="/">Početna <span>↗</span></Link>
        <Link className="button button-outline" href="/usluge">Usluge</Link>
      </div>
    </main>
  );
}

