import { ConditionsContent } from "@/data/siteContent";

import { Icon } from "./icons";
import { SectionHeading } from "./SectionHeading";

type ConditionsProps = {
  conditions: ConditionsContent;
};

export function Conditions({ conditions }: ConditionsProps) {
  return (
    <section id={conditions.id} className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={conditions.eyebrow}
          title={conditions.title}
          description={conditions.description}
        />

        <div className="mt-10 rounded-[2rem] border border-[color:var(--border)] bg-background p-6 shadow-sm sm:p-8">
          <ul className="grid gap-4 md:grid-cols-2">
            {conditions.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-[1.25rem] bg-white px-4 py-4"
              >
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-secondary">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <span className="text-sm leading-7 text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
