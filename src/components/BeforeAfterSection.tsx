import { BeforeAfterContent } from "@/data/siteContent";

import { BeforeAfterImage } from "./BeforeAfterImage";
import { Icon } from "./icons";
import { SectionHeading } from "./SectionHeading";

type BeforeAfterSectionProps = {
  beforeAfter: BeforeAfterContent;
};

export function BeforeAfterSection({
  beforeAfter,
}: BeforeAfterSectionProps) {
  return (
    <section id={beforeAfter.id} className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={beforeAfter.eyebrow}
          title={beforeAfter.title}
          description={beforeAfter.description}
          align="center"
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <BeforeAfterImage
            beforeSrc={beforeAfter.image.beforeSrc}
            afterSrc={beforeAfter.image.afterSrc}
            beforeLabel={beforeAfter.image.beforeLabel}
            afterLabel={beforeAfter.image.afterLabel}
          />

          <aside className="rounded-[2rem] border border-[color:var(--border)] bg-white p-8 shadow-sm">
            <p className="inline-flex rounded-full bg-primary/15 px-4 py-1 text-sm font-semibold text-secondary">
              {beforeAfter.badge}
            </p>
            <h3 className="mt-6 text-2xl font-semibold text-secondary">
              {beforeAfter.checklistTitle}
            </h3>
            <ul className="mt-6 space-y-4">
              {beforeAfter.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-base leading-7 text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
