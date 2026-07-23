import { MediaPlaceholder } from "./MediaPlaceholder";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  placeholder: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, intro, placeholder, children }: PageHeroProps) {
  return (
    <section className="page-hero content-shell">
      <div className="page-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-lead">{intro}</p>
        {children}
      </div>
      <MediaPlaceholder label={placeholder} tall />
    </section>
  );
}

