import Link from "next/link";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { ServiceCard } from "@/components/ServiceCard";
import { projects, services, siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-media" aria-hidden="true"></div>
        <div className="hero-shade"></div>
        <div className="hero-content content-shell">
          <div className="hero-kicker">
            <span>Split · Hrvatska</span>
            <span>Njega automobila, motocikala i plovila</span>
          </div>
          <h1>
            Detalj nije sitnica.<br />
            <em>Detalj je standard.</em>
          </h1>
          <p>
            Profesionalno dubinsko čišćenje, korekcija laka i keramička zaštita —
            s jednakom pažnjom za svakodnevni automobil i poseban projekt.
          </p>
          <div className="hero-actions">
            <Link className="button button-accent" href="/rezervacija">
              Zatraži termin <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" href="/radovi">
              Pogledaj radove <span aria-hidden="true">↓</span>
            </Link>
          </div>
          <div className="hero-proof" aria-label="Istaknute vrijednosti">
            <div><strong>Preciznost</strong><span>Pristup panel po panel</span></div>
            <div><strong>Iskustvo</strong><span>Izgrađeno kroz godine rada</span></div>
            <div><strong>Povjerenje</strong><span>Od dailyja do superautomobila</span></div>
          </div>
        </div>
      </section>

      <section className="intro-section content-shell section-pad">
        <p className="eyebrow">Motorsport Stričević</p>
        <div className="intro-grid">
          <h2>Ne prodajemo brz sjaj. Gradimo rezultat koji razumijete.</h2>
          <div>
            <p>
              Svako vozilo prvo promatramo kao zaseban projekt. Materijal, stanje i način korištenja
              određuju postupak — ne unaprijed zadani paket.
            </p>
            <p>
              Zato ćete prije rada znati što preporučujemo, što je uključeno i koji je realan rezultat.
            </p>
            <Link className="text-link" href="/o-nama">Upoznajte naš pristup <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="services-section section-pad">
        <div className="content-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Usluge</p>
              <h2>Njega koja počinje stvarnim stanjem vozila.</h2>
            </div>
            <p>Od higijene interijera do dugoročne zaštite laka. Svaka usluga ima jasan cilj, proces i završnu kontrolu.</p>
          </div>
          <div className="services-grid">
            {services.map((service) => <ServiceCard service={service} key={service.slug} />)}
          </div>
        </div>
      </section>

      <section className="feature-project content-shell section-pad">
        <div className="feature-project-copy">
          <p className="eyebrow">Rad u fokusu · 01</p>
          <h2>Rezultat nije samo završna fotografija.</h2>
          <p>
            Najbolji dokaz kvalitete je transparentan put od početnog stanja do predaje vozila.
            Pokazujemo problem, odabrani postupak i stvarni ishod.
          </p>
          <dl className="project-facts">
            <div><dt>Vozilo</dt><dd>Porsche 911 · primjer projekta</dd></div>
            <div><dt>Fokus</dt><dd>Korekcija laka i zaštita</dd></div>
            <div><dt>Dokumentacija</dt><dd>Prije · proces · poslije</dd></div>
          </dl>
          <Link className="button button-outline" href="/radovi">Svi radovi <span>↗</span></Link>
        </div>
        <MediaPlaceholder
          tall
          index="01"
          src="/Images/911Carrera_GTS.jpg"
          objectPosition="center 42%"
          label="Hero projekt: automobil u radionici, 4:5 kadar, duboki crni tonovi i jasne LED refleksije."
        />
      </section>

      <section className="process-section section-pad">
        <div className="content-shell">
          <div className="section-heading compact">
            <div>
              <p className="eyebrow">Proces</p>
              <h2>Prvo razumijemo. Onda radimo.</h2>
            </div>
          </div>
          <ol className="process-grid">
            <li><span>01</span><h3>Procjena</h3><p>Šaljete osnovne podatke ili dolazite na pregled vozila.</p></li>
            <li><span>02</span><h3>Preporuka</h3><p>Dogovaramo realan opseg, trajanje i cijenu tretmana.</p></li>
            <li><span>03</span><h3>Izvedba</h3><p>Radimo metodično, uz odgovarajuću pripremu i kontrolu.</p></li>
            <li><span>04</span><h3>Predaja</h3><p>Pregledavamo rezultat zajedno i objašnjavamo održavanje.</p></li>
          </ol>
        </div>
      </section>

      <section className="projects-preview section-pad">
        <div className="content-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Odabrani radovi</p>
              <h2>Različita vozila. Isti standard.</h2>
            </div>
            <Link className="text-link" href="/radovi">Otvori galeriju <span>↗</span></Link>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.vehicle}>
                <MediaPlaceholder index={`0${index + 1}`} label={project.placeholder} src={project.image} />
                <div>
                  <span>{project.category}</span>
                  <h3>{project.vehicle}</h3>
                  <p>{project.treatment}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial-section section-pad">
        <div className="content-shell testimonial-grid">
          <div>
            <p className="eyebrow">Povjerenje</p>
            <h2>Najvrjedniji rezultat je klijent koji se vraća.</h2>
          </div>
          <figure>
            <blockquote>
              “Auto je nakon obrade izgledao kao nov. Profesionalno, sve po dogovoru i prije roka.”
            </blockquote>
            <figcaption>
              <strong>Sažetak javno dostupnih dojmova klijenata</strong>
              <span>Stvarne Google recenzije i poveznica bit će dodane nakon potvrde profila.</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="location-strip content-shell section-pad">
        <div>
          <p className="eyebrow">Radionica</p>
          <h2>U srcu Splita.<br />Po dogovorenom terminu.</h2>
        </div>
        <div className="location-details">
          <p>{siteConfig.address}</p>
          <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
          <a href={siteConfig.mapsHref} target="_blank" rel="noreferrer">Otvori upute za dolazak ↗</a>
        </div>
        <MediaPlaceholder
          src="/Images/HeroPhoto.png"
          objectPosition="center 22%"
          label="Pročelje radionice Motorsport Stričević u Splitu."
        />
      </section>
    </main>
  );
}
