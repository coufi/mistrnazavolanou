import { PricingContent } from "@/data/siteContent";

import { SectionHeading } from "./SectionHeading";

type PricingProps = {
  pricing: PricingContent;
};

export function Pricing({ pricing }: PricingProps) {
  return (
    <section id={pricing.id} className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          description={pricing.description}
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pricing.items.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-[color:var(--border)] bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                {item.title}
              </p>
              <p className="mt-4 text-3xl font-semibold tracking-tight text-secondary">
                {item.price}
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-8 rounded-[1.5rem] border border-dashed border-[color:var(--border)] bg-cream px-5 py-4 text-sm leading-7 text-muted">
          {pricing.note}
        </p>
      </div>
    </section>
  );
}
