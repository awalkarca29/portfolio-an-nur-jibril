import { experiences } from "@/lib/data";

export function ExperienceTimeline() {
  return (
    <div className="mt-12 space-y-6">
      {experiences.map((item) => (
        <article
          key={`${item.period}-${item.role}`}
          className="grid gap-6 border-t border-ink/10 pt-6 md:grid-cols-[220px_1fr]"
        >
          <div>
            <p className="text-sm font-semibold text-forest">{item.period}</p>
            <p className="mt-2 text-sm text-ink/60">{item.type}</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-ink">{item.role}</h3>
            <p className="mt-1 font-medium text-clay">{item.company}</p>
            <p className="mt-4 max-w-3xl leading-7 text-ink/70">{item.summary}</p>
            <ul className="mt-5 grid gap-3">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 leading-7 text-ink/70">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-citron" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
