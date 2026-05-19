import { TestimonialsContent } from "@/data/siteContent";

import { Icon } from "./icons";
import { SectionHeading } from "./SectionHeading";

type TestimonialsProps = {
  testimonials: TestimonialsContent;
};

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section id={testimonials.id} className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          description={testimonials.description}
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.items.map((item) => (
            <article
              key={item.name}
              className="rounded-[1.75rem] border border-[color:var(--border)] bg-background p-6 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                  {item.tag}
                </span>
                <div className="flex items-center gap-1 text-primary" aria-label="5 z 5 hvězdiček">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Icon key={index} name="star" className="h-4 w-4" />
                  ))}
                </div>
              </div>

              <p className="mt-5 text-base leading-8 text-muted">&ldquo;{item.quote}&rdquo;</p>

              <div className="mt-6 border-t border-[color:var(--border)] pt-4">
                <p className="font-semibold text-secondary">{item.name}</p>
                <p className="text-sm text-muted">{item.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
