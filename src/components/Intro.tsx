import { IntroContent } from "@/data/siteContent";

import { Icon } from "./icons";
import { SectionHeading } from "./SectionHeading";

type IntroProps = {
  intro: IntroContent;
};

export function Intro({ intro }: IntroProps) {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Jak pracuji"
          title={intro.title}
          description={intro.description}
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {intro.cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[1.75rem] border border-[color:var(--border)] bg-cream p-6 shadow-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Icon name={card.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-secondary">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-muted">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
