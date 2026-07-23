import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { getService, services } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} u Splitu`,
    description: `${service.promise} Saznajte što uključuje profesionalna usluga u studiju Motorsport Stričević u Splitu.`,
    alternates: { canonical: `/usluge/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    provider: { "@type": "AutoWash", name: "Motorsport Stričević" },
    areaServed: { "@type": "City", name: "Split" },
    url: `${process.env.SITE_URL ?? "http://localhost:3000"}/usluge/${service.slug}`,
  };

  return (
    <main>
      <section className="service-hero content-shell">
        <div className="service-hero-copy">
          <p className="eyebrow">{service.eyebrow} · Split</p>
          <span className="service-number">{service.index}</span>
          <h1>{service.name}</h1>
          <p className="page-lead">{service.promise}</p>
          <div className="hero-actions">
            <Link className="button button-accent" href={`/rezervacija?usluga=${service.slug}`}>Zatraži termin <span>↗</span></Link>
            <a className="text-link" href="#detalji">Što uključuje <span>↓</span></a>
          </div>
        </div>
        <MediaPlaceholder tall label={service.placeholder} />
      </section>

      <section className="service-intro content-shell section-pad" id="detalji">
        <div>
          <p className="eyebrow">Kada je pravi izbor</p>
          <h2>{service.audience}</h2>
        </div>
        <div>
          <p>{service.description}</p>
          <dl className="service-meta">
            <div><dt>Trajanje</dt><dd>{service.duration}</dd></div>
            <div><dt>Cijena</dt><dd>{service.price}</dd></div>
          </dl>
        </div>
      </section>

      <section className="included-section section-pad">
        <div className="content-shell included-grid">
          <div>
            <p className="eyebrow">Uključeno</p>
            <h2>Svaki korak ima svoju svrhu.</h2>
          </div>
          <ol>
            {service.inclusions.map((item, index) => (
              <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="content-shell section-pad">
        <div className="section-heading compact">
          <div><p className="eyebrow">Proces</p><h2>Od pregleda do predaje.</h2></div>
        </div>
        <ol className="process-grid">
          {service.process.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="outcome-section content-shell section-pad">
        <MediaPlaceholder label={`Prije i poslije: ${service.shortName}; identičan kadar i osvjetljenje.`} />
        <div>
          <p className="eyebrow">Očekivani rezultat</p>
          <h2>Jasan cilj, bez nerealnih obećanja.</h2>
          <ul className="check-list">
            {service.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
          </ul>
          <p className="fine-print">Konačan rezultat ovisi o početnom stanju, materijalu i ranijim zahvatima. Sve važne granice objašnjavamo prije početka rada.</p>
        </div>
      </section>

      <section className="faq-section content-shell section-pad">
        <div><p className="eyebrow">Česta pitanja</p><h2>Prije nego rezervirate.</h2></div>
        <div className="faq-list">
          {service.faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}<span aria-hidden="true">+</span></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="service-final-cta content-shell section-pad">
        <p className="eyebrow">Spremni za procjenu?</p>
        <h2>Pošaljite podatke o vozilu i željeni termin.</h2>
        <Link className="button button-accent" href={`/rezervacija?usluga=${service.slug}`}>Započni rezervaciju <span>↗</span></Link>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    </main>
  );
}

