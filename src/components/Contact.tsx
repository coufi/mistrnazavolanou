import { ContactContent, SiteInfo } from "@/data/siteContent";

import { Icon } from "./icons";
import { SectionHeading } from "./SectionHeading";

type ContactProps = {
  contact: ContactContent;
  siteInfo: SiteInfo;
};

export function Contact({ contact, siteInfo }: ContactProps) {
  return (
    <section id={contact.id} className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow={contact.eyebrow}
            title={contact.title}
            description={contact.description}
          />

          <div className="mt-8 rounded-[2rem] border border-[color:var(--border)] bg-secondary p-6 text-white shadow-xl shadow-secondary/12">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">
              Dostupnost
            </p>
            <p className="mt-3 text-lg font-semibold">{siteInfo.availability}</p>
            <p className="mt-2 text-sm text-white/75">{siteInfo.area}</p>
          </div>
        </div>

        <div className="grid gap-4">
          {contact.actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              className="rounded-[1.75rem] border border-[color:var(--border)] bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-secondary">
                  <Icon name={action.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">
                    {action.label}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    {action.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
