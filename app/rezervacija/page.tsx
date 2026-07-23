import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { services, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rezervacija termina",
  description: "Pošaljite zahtjev za termin auto detailinga u studiju Motorsport Stričević u Splitu.",
  alternates: { canonical: "/rezervacija" },
};

type Props = { searchParams: Promise<{ usluga?: string }> };

export default async function BookingPage({ searchParams }: Props) {
  const { usluga } = await searchParams;
  const defaultService = services.some((service) => service.slug === usluga) ? usluga : undefined;

  return (
    <main>
      <section className="booking-hero content-shell">
        <div>
          <p className="eyebrow">Rezervacija · Split</p>
          <h1>Vrijeme za vozilo.<br /><em>Bez nagađanja.</em></h1>
        </div>
        <div>
          <p className="page-lead">Odaberite uslugu i željeni termin. Nakon kratke provjere potvrđujemo točno vrijeme, opseg i cijenu.</p>
          <p className="booking-direct">Radije biste razgovarali? <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a></p>
        </div>
      </section>
      <section className="booking-wrap content-shell section-pad">
        <BookingForm defaultService={defaultService} />
        <aside className="booking-aside">
          <div>
            <span className="aside-number">01</span>
            <h2>Zašto potvrđujemo termin?</h2>
            <p>Stanje i veličina vozila mijenjaju trajanje tretmana. Kratka provjera čuva dovoljno vremena za kvalitetan rezultat.</p>
          </div>
          <div>
            <span className="aside-number">02</span>
            <h2>Što pripremiti?</h2>
            <p>Marku i model, kratak opis problema te fotografije ako ih šaljete naknadno putem dogovorenog kanala.</p>
          </div>
          <div className="calendar-note">
            <small>Google Calendar integracija</small>
            <p>Obrazac je tehnički pripremljen za provjeru zauzetosti i dodavanje privatnog događaja u poslovni kalendar. Aktivira se nakon unosa vlasničkih pristupnih podataka.</p>
          </div>
        </aside>
      </section>
    </main>
  );
}

