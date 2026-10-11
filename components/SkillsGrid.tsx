import { skillGroups } from "@/lib/data";

export function SkillsGrid() {
  return (
    <div className="mt-12 grid gap-4 md:grid-cols-2">
      {skillGroups.map((group) => {
        const Icon = group.icon;
        return (
          <article key={group.title} className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-citron/25 text-ink">
                <Icon aria-hidden className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold text-ink">{group.title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-ink/10 bg-paper px-3 py-1.5 text-sm text-ink/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}
