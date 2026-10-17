import { ArrowUpRight, Mail } from "lucide-react";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectOverview } from "@/components/ProjectOverview";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillsGrid } from "@/components/SkillsGrid";
import { contactLinks } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="about" className="border-y border-ink/10 bg-white py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="About"
              title="Building useful digital products from idea to implementation."
              description="Full-stack development experience supported by an interest in business analysis and product strategy."
            />
            <div className="grid gap-5 text-lg leading-8 text-ink/70">
              <p>
                Information Technology graduate from Brawijaya University with hands-on experience
                in full-stack development, technical project execution, and team coordination.
              </p>
              <p>
                Focused on turning user needs into clear requirements and practical digital
                solutions.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Full-Stack Development", "Business Analysis", "Product Strategy", "Product Research"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-ink/10 bg-paper px-3 py-1.5 text-sm font-medium text-ink/70"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-20">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Experience"
              title="Experience in development, projects, and continuous learning."
              description="Professional and project experience across technical work, product needs, and delivery."
            />
            <ExperienceTimeline />
          </div>
        </section>

        <section id="skills" className="border-y border-ink/10 bg-white py-20">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Skills"
              title="Skills in development, analysis, and product thinking."
              description="Tools and approaches used to understand problems and build digital solutions."
            />
            <SkillsGrid />
          </div>
        </section>

        <section id="project" className="py-20">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Selected Project"
              title="Kenangan Smart Pickup Time"
              description="A case study on making pickup-order timing clearer during busy hours."
            />
            <ProjectOverview />
          </div>
        </section>

        <section id="contact" className="border-t border-ink/10 bg-forest py-20 text-white">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow text-xs font-semibold text-citron">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
                Contact Information
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                Available for opportunities in full-stack development, business analysis, and
                product strategy.
              </p>
            </div>
            <div className="grid gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center justify-between gap-4 rounded-lg border border-white/20 bg-white/10 p-5 transition hover:bg-white/20"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span>
                    <span className="block text-sm font-medium text-white/60">{link.label}</span>
                    <span className="mt-1 flex items-center gap-2 text-lg font-semibold">
                      {link.label === "Email" ? <Mail aria-hidden className="h-4 w-4" /> : null}
                      {link.value}
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="h-5 w-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
