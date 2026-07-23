import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Usluge auto detailinga u Splitu",
  description: "Dubinsko čišćenje, poliranje, korekcija laka, keramička zaštita i premium održavanje vozila u Splitu.",
  alternates: { canonical: "/usluge" },
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Usluge · Split"
        title="Pravi tretman počinje dobrom procjenom."
        intro="Ne biramo postupak prema navici, nego prema materijalu, stanju i cilju. Istražite usluge, a mi ćemo vam pomoći odabrati razuman opseg rada."
        placeholder="Fotografija cijele radionice s više zona rada; automobil u prvom planu, oprema i LED rasvjeta u dubini."
      >
        <Link className="button button-accent" href="/rezervacija">Zatraži procjenu <span>↗</span></Link>
      </PageHero>
      <section className="content-shell section-pad">
        <div className="services-grid services-grid-page">
          {services.map((service) => <ServiceCard service={service} key={service.slug} />)}
        </div>
      </section>
      <section className="decision-section content-shell section-pad">
        <div>
          <p className="eyebrow">Niste sigurni?</p>
          <h2>Pošaljite fotografije i kratko opišite cilj.</h2>
        </div>
        <p>Za zahtjevnije interijere, korekciju laka i keramičku zaštitu termin potvrđujemo nakon pregleda ili dovoljno jasnih fotografija.</p>
        <Link className="button button-outline" href="/rezervacija">Pokreni upit <span>↗</span></Link>
      </section>
    </main>
  );
}

