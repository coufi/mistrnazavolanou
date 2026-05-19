import { HeroContent, SiteInfo } from "@/data/siteContent";

import { BeforeAfterImage } from "./BeforeAfterImage";

type HeroProps = {
  hero: HeroContent;
  siteInfo: SiteInfo;
};

export function Hero({ hero, siteInfo }: HeroProps) {
  return (
    <section className="px-4 pb-16 pt-10 sm:px-6 sm:pt-16 lg:px-8 lg:pb-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full border border-primary/30 bg-primary/15 px-4 py-1 text-sm font-semibold text-secondary">
            {hero.badge}
          </p>
          <h1 className="text-balance mt-6 text-4xl font-semibold tracking-tight text-secondary sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {hero.actions.map((action) => {
              const classes =
                action.variant === "primary"
                  ? "bg-secondary text-white hover:-translate-y-0.5 hover:bg-black"
                  : action.variant === "secondary"
                    ? "border border-[color:var(--border)] bg-white text-secondary hover:-translate-y-0.5 hover:border-secondary/20 hover:bg-cream"
                    : "text-secondary hover:text-[color:var(--accent)]";

              return (
                <a
                  key={action.label}
                  href={action.href}
                  className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm ${classes}`}
                >
                  {action.label}
                </a>
              );
            })}
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {hero.bullets.map((bullet) => (
              <li
                key={bullet}
                className="rounded-2xl border border-[color:var(--border)] bg-white/80 px-4 py-4 text-sm font-medium text-secondary shadow-sm"
              >
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-[2rem] border border-[color:var(--border)] bg-secondary px-6 py-5 text-white shadow-xl shadow-secondary/12">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">
              Přímý kontakt
            </p>
            <div className="mt-3 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a href={siteInfo.phoneHref} className="font-semibold hover:text-primary">
                {siteInfo.phoneDisplay}
              </a>
              <span className="hidden h-1 w-1 rounded-full bg-white/50 sm:block" />
              <a href={siteInfo.emailHref} className="hover:text-primary">
                {siteInfo.email}
              </a>
              <span className="hidden h-1 w-1 rounded-full bg-white/50 sm:block" />
              <span>{siteInfo.area}</span>
            </div>
          </div>
        </div>

        <div className="lg:pl-6">
          <BeforeAfterImage
            beforeSrc={hero.image.beforeSrc}
            afterSrc={hero.image.afterSrc}
            beforeLabel={hero.image.beforeLabel}
            afterLabel={hero.image.afterLabel}
            priority
          />
        </div>
      </div>
    </section>
  );
}
