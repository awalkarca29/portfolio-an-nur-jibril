type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow text-xs font-semibold text-clay">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-normal text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-lg leading-8 text-ink/70">{description}</p> : null}
    </div>
  );
}
