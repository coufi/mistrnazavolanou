type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="mb-3 inline-flex rounded-full border border-[color:var(--border)] bg-white/70 px-4 py-1 text-sm font-semibold text-secondary shadow-sm">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-secondary sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-muted">{description}</p>
    </div>
  );
}
