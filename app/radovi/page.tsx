import type { Metadata } from "next";
import Link from "next/link";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Radovi i detailing projekti",
  description: "Pogledajte odabrane projekte dubinskog čišćenja, poliranja i zaštite vozila u studiju Motorsport Stričević u Splitu.",
  alternates: { canonical: "/radovi" },
};

const extraProjects = [
  { vehicle: "Maserati", category: "Zaštita eksterijera", treatment: "Priprema površine · zaštita detalja", placeholder: "Maserati straga u radionici; simetričan kadar i čiste refleksije." },
  { vehicle: "BMW X5 M", category: "Kompletan tretman", treatment: "Interijer · eksterijer · završna kontrola", placeholder: "BMW X5 M sprijeda u radionici; široki kadar, LED linije i mokri pod." },
  { vehicle: "Plovilo", category: "Nautički program", treatment: "Čišćenje · poliranje · zaštita", placeholder: "Bijelo plovilo uz more; detalj sjaja trupa i obrađenih površina." },
];

export default function WorkPage() {
  const allProjects = [...projects, ...extraProjects];
  return (
    <main>
      <section className="work-hero content-shell">
        <p className="eyebrow">Radovi</p>
        <h1>Stvarno stanje.<br /><em>Stvaran proces.</em><br />Stvaran rezultat.</h1>
        <p className="page-lead">Galerija će biti ispunjena stvarnim projektima iz radionice — svaki s problemom, postupkom i ishodom, ne samo završnim sjajem.</p>
      </section>
      <section className="work-grid content-shell section-pad">
        {allProjects.map((project, index) => (
          <article className={`work-item work-item-${(index % 3) + 1}`} key={`${project.vehicle}-${index}`}>
            <MediaPlaceholder index={String(index + 1).padStart(2, "0")} label={project.placeholder} tall={index % 3 === 0} />
            <div>
              <span>{project.category}</span>
              <h2>{project.vehicle}</h2>
              <p>{project.treatment}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="service-final-cta content-shell section-pad">
        <p className="eyebrow">Vaše vozilo može biti sljedeći projekt</p>
        <h2>Pošaljite stanje i recite što želite postići.</h2>
        <Link className="button button-accent" href="/rezervacija">Zatraži procjenu <span>↗</span></Link>
      </section>
    </main>
  );
}

