import { BenefitsContent } from "@/data/siteContent";

import { Icon } from "./icons";
import { SectionHeading } from "./SectionHeading";

type BenefitsProps = {
  benefits: BenefitsContent;
};

export function Benefits({ benefits }: BenefitsProps) {
  return (
    <section id={benefits.id} className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionHeading
          eyebrow={benefits.eyebrow}
          title={benefits.title}
          description={benefits.description}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.items.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-[color:var(--border)] bg-white px-5 py-5 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-secondary">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold leading-7 text-secondary">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
