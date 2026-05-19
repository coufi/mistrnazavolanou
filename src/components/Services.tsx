import { ServicesContent } from "@/data/siteContent";

import { Icon } from "./icons";
import { SectionHeading } from "./SectionHeading";

type ServicesProps = {
  services: ServicesContent;
};

export function Services({ services }: ServicesProps) {
  return (
    <section id={services.id} className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.items.map((service) => (
            <article
              key={service.title}
              className="group rounded-[1.75rem] border border-[color:var(--border)] bg-background p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Icon name={service.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-secondary">
                {service.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 rounded-[1.5rem] border border-dashed border-[color:var(--border)] bg-cream px-5 py-4 text-sm leading-7 text-muted">
          {services.note}
        </p>
      </div>
    </section>
  );
}
