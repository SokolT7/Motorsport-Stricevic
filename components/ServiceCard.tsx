import Link from "next/link";
import type { Service } from "@/lib/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card">
      <div className="service-card-top">
        <span>{service.index}</span>
        <span>{service.eyebrow}</span>
      </div>
      <h3>{service.shortName}</h3>
      <p>{service.promise}</p>
      <Link href={`/usluge/${service.slug}`} aria-label={`Saznajte više: ${service.name}`}>
        Detalji usluge <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}

