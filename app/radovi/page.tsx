import type { Metadata } from "next";
import Link from "next/link";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export const metadata: Metadata = {
  title: "Radovi i detailing projekti",
  description: "Pogledajte odabrane projekte dubinskog čišćenja, poliranja i zaštite vozila u studiju Motorsport Stričević u Splitu.",
  alternates: { canonical: "/radovi" },
};

const extraProjects = [
  { vehicle: "Maserati", category: "Zaštita eksterijera", treatment: "Priprema površine · zaštita detalja", placeholder: "Maserati straga u radionici; simetričan kadar i čiste refleksije." },
  { vehicle: "BMW X5 M", category: "Kompletan tretman", treatment: "Interijer · eksterijer · završna kontrola", placeholder: "BMW X5 M sprijeda u radionici; široki kadar, LED linije i mokri pod." },
  { vehicle: "Plovilo", category: "Nautički program", treatment: "Čišćenje · poliranje · zaštita", placeholder: "Bijelo plovilo uz more; detalj sjaja trupa i obrađenih površina." },
  { vehicle: "Ferrari 296 GTB", category: "Njega interijera", treatment: "Koža · detalji · završna kontrola", placeholder: "Ferrari 296 GTB interijer." },
  { vehicle: "Ferrari 296 GTB", category: "Premium interijer", treatment: "Čišćenje · njega kože", placeholder: "Ferrari 296 GTB kokpit." },
  { vehicle: "BMW X5 M", category: "Njega interijera", treatment: "Svijetla koža · detaljna obrada", placeholder: "BMW X5 M interijer." },
  { vehicle: "Porsche Cayenne", category: "Korekcija laka", treatment: "Priprema · poliranje · zaštita", placeholder: "Crveni Porsche Cayenne u radionici." },
  { vehicle: "Porsche Cayenne", category: "Dubinsko čišćenje", treatment: "Koža · tepisi · detalji", placeholder: "Porsche Cayenne interijer." },
  { vehicle: "Porsche Cayenne Turbo", category: "Zaštita eksterijera", treatment: "Dekontaminacija · završna zaštita", placeholder: "Porsche Cayenne Turbo sprijeda." },
  { vehicle: "Rolls-Royce", category: "Dubinsko čišćenje", treatment: "Koža · kokpit · završna njega", placeholder: "Rolls-Royce interijer." },
  { vehicle: "Ferrari 296 GTB", category: "Korekcija i zaštita", treatment: "Lak · detalji · završna kontrola", placeholder: "Ferrari 296 GTB u radionici." },
  { vehicle: "BMW M Competition", category: "Njega interijera", treatment: "Tepisi · sjedala · detalji", placeholder: "Detalj čistog BMW interijera." },
  { vehicle: "Jahta", category: "Nautički program", treatment: "Interijer · paluba · održavanje", placeholder: "Uređena jahta u marini." },
  { vehicle: "Ferrari", category: "Keramička zaštita", treatment: "Priprema laka · keramički premaz", placeholder: "Ferrari nakon keramičke zaštite." },
  { vehicle: "Maserati", category: "Završna zaštita", treatment: "Lak · refleksije · detalji", placeholder: "Maserati straga u radionici." },
  { vehicle: "Maserati", category: "Poliranje laka", treatment: "Korekcija · dubina sjaja", placeholder: "Bočni profil Maseratija." },
  { vehicle: "Porsche", category: "Poliranje laka", treatment: "Inspekcija · korekcija · finiš", placeholder: "Porsche tijekom poliranja." },
  { vehicle: "BMW X5 M", category: "Detaljna obrada", treatment: "Motorni prostor · završna kontrola", placeholder: "BMW X5 M motorni prostor." },
  { vehicle: "BMW X5 M", category: "Zaštita eksterijera", treatment: "Lak · detalji · sjaj", placeholder: "Plavi BMW X5 M sprijeda." },
  { vehicle: "BMW X5 M Competition", category: "Keramička zaštita", treatment: "Premaz · završna kontrola", placeholder: "Detalj plavog BMW laka." },
  { vehicle: "Porsche 911 Carrera GTS", category: "Korekcija laka", treatment: "Poliranje · završna zaštita", placeholder: "Porsche 911 Carrera GTS u radionici." },
];

const workImages = [
  "/Images/Maserati.jpg", "/Images/BMW_X5_M_interior2.jpg", "/Images/brodic.jpg",
  "/Images/296GTB_interior.jpg", "/Images/296GTB_interior2.jpg", "/Images/BMW_X5_M_interior.jpg",
  "/Images/Cayenne_ext_enhanced.png", "/Images/cayenne_interior2.PNG", "/Images/Cayenne_turbo_ext.jpg",
  "/Images/dubinsko_ciscenje_RR.jpg", "/Images/Ferrari296GTB_exterior_radovi.jpg", "/Images/IMG_4604.jpg",
  "/Images/jahta.jpg", "/Images/Keramicka_zastita.jpg", "/Images/maserati_2_enhanced.png",
  "/Images/Maserati_3.jpg", "/Images/poliranje_laka.jpg", "/Images/X5_M.jpg",
  "/Images/X5_M_exterior.jpg", "/Images/X5_M_exterior2.jpg", "/Images/911Carrera_GTS.jpg",
];

const projectGroups = [
  {
    title: "Eksterijer, korekcija i zaštita",
    description: "Poliranje, keramički premazi i završna obrada laka pod kontroliranim svjetlom.",
    indexes: [0, 6, 8, 10, 13, 14, 15, 16, 17, 18, 19, 20],
  },
  {
    title: "Interijeri",
    description: "Dubinsko čišćenje, njega kože i precizna obrada svakog detalja kabine.",
    indexes: [1, 3, 4, 5, 7, 9, 11],
  },
  {
    title: "Plovila",
    description: "Čišćenje, poliranje i zaštita interijera, palube i vanjskih površina.",
    indexes: [2, 12],
  },
];

export default function WorkPage() {
  const allProjects = extraProjects;
  return (
    <main>
      <section className="work-hero content-shell">
        <p className="eyebrow">Radovi</p>
        <h1>Stvarno stanje.<br /><em>Stvaran proces.</em><br />Stvaran rezultat.</h1>
        <p className="page-lead">Galerija će biti ispunjena stvarnim projektima iz radionice — svaki s problemom, postupkom i ishodom, ne samo završnim sjajem.</p>
      </section>
      <section className="work-library content-shell section-pad">
        {projectGroups.map((group) => (
          <section className="work-group" key={group.title}>
            <div className="work-group-heading">
              <p className="eyebrow">Odabrani radovi</p>
              <h2>{group.title}</h2>
              <p>{group.description}</p>
            </div>
            <div className="work-grid">
              {group.indexes.map((index) => {
                const project = allProjects[index];
                return (
                  <article className="work-item" key={`${project.vehicle}-${index}`}>
                    <MediaPlaceholder
                      index={String(index + 1).padStart(2, "0")}
                      label={project.placeholder}
                      src={workImages[index]}
                      objectPosition={index === 2 || index === 12 ? "center 35%" : "center"}
                    />
                    <div>
                      <span>{project.category}</span>
                      <h2>{project.vehicle}</h2>
                      <p>{project.treatment}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
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
