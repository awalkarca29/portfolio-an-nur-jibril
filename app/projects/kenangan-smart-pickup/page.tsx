import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Bell, CheckCircle2, Clock3, MapPin } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { caseStudySections, mvpRequirements, projectMetrics } from "@/lib/data";

const experimentSteps = [
  "Compared the displayed 15-minute pickup estimate with peak-hour actual ready time.",
  "Identified a 27.78-minute peak-hour ready-time condition and a 12.78-minute expectation gap.",
  "Validated the core problem and solution direction with 2 informants.",
  "Translated the findings into MVP requirements for status, estimate, and notification flows.",
];

const learnings = [
  "A product problem can be hidden inside an operational timing gap.",
  "Users do not only need speed. They also need confidence and clear expectations.",
  "A strong MVP should focus on the smallest set of signals that improves decision-making.",
  "Business analysis work becomes stronger when research findings are translated into concrete product requirements.",
];

export default function KenanganSmartPickupPage() {
  return (
    <>
      <main>
        <section className="bg-ink py-8 text-white">
          <div className="section-shell">
            <Link
              href="/"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/20 px-4 text-sm font-semibold transition hover:bg-white hover:text-ink"
            >
              <ArrowLeft aria-hidden className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </div>
        </section>

        <section className="bg-ink pb-20 pt-8 text-white">
          <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="eyebrow text-xs font-semibold text-citron">
                Project Detail
              </p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-normal sm:text-6xl">
                Kenangan Smart Pickup Time
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-9 text-white/75">
                A product strategy case study that explores how Kopi Kenangan
                pickup orders could communicate more realistic ready-time
                expectations during busy hours.
              </p>
              <div className="mt-9 grid grid-cols-2 gap-4">
                {projectMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="border-t border-white/20 pt-4"
                  >
                    <p className="text-2xl font-semibold">{metric.value}</p>
                    <p className="mt-1 text-sm leading-5 text-white/60">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="project-visual-grid rounded-[2rem] bg-paper p-6">
              <Image
                src="/assets/kenangan-smart-pickup.png"
                alt="Kenangan Smart Pickup Time interface placeholder"
                width={900}
                height={620}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Overview to Detail"
              title="From pickup uncertainty to a clearer product requirement set."
              description="The case study is organized in the same hierarchy recommended by the mentor: concise overview, problem, findings, solution, experimentation, MVP requirements, and key learnings."
            />
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {caseStudySections.map((section) => {
                const Icon = section.icon;
                return (
                  <article
                    key={section.label}
                    className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-citron/25 text-ink">
                        <Icon aria-hidden className="h-5 w-5" />
                      </span>
                      <p className="text-sm font-semibold text-clay">
                        {section.label}
                      </p>
                    </div>
                    <h2 className="mt-5 text-2xl font-semibold text-ink">
                      {section.title}
                    </h2>
                    <p className="mt-4 leading-7 text-ink/70">{section.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-ink/10 bg-white py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Experimentation"
              title="The validation focused on the gap between promise, reality, and user expectation."
              description="The main signal was the difference between the visible estimate and the actual pickup condition during peak hours."
            />
            <div className="grid gap-4">
              {experimentSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-lg border border-ink/10 bg-paper p-5"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="leading-7 text-ink/70">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionHeading
                eyebrow="MVP and Requirements"
                title="A focused MVP around estimate accuracy, order status, and notifications."
              />
              <div className="mt-10 grid gap-4">
                {mvpRequirements.map((requirement) => (
                  <div
                    key={requirement}
                    className="flex gap-4 rounded-lg border border-ink/10 bg-white p-5"
                  >
                    <CheckCircle2
                      aria-hidden
                      className="mt-1 h-5 w-5 shrink-0 text-forest"
                    />
                    <p className="leading-7 text-ink/70">{requirement}</p>
                  </div>
                ))}
              </div>
            </div>
            <aside className="rounded-lg border border-ink/10 bg-ink p-6 text-white">
              <h2 className="text-2xl font-semibold">Proposed user flow</h2>
              <div className="mt-6 grid gap-4">
                {[
                  {
                    icon: MapPin,
                    label: "Choose outlet and place pickup order",
                  },
                  { icon: Clock3, label: "View dynamic pickup estimate" },
                  { icon: Bell, label: "Receive update when timing changes" },
                  { icon: CheckCircle2, label: "Arrive when order is ready" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 border-t border-white/10 pt-4"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-citron text-ink">
                        <Icon aria-hidden className="h-5 w-5" />
                      </span>
                      <p className="leading-6 text-white/75">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t border-ink/10 bg-forest py-20 text-white">
          <div className="section-shell">
            <p className="eyebrow text-xs font-semibold text-citron">
              Key Learnings
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-normal sm:text-4xl">
              What this case study shows about product and business analysis
              work.
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {learnings.map((learning) => (
                <div
                  key={learning}
                  className="rounded-lg border border-white/20 bg-white/10 p-5"
                >
                  <p className="leading-7 text-white/75">{learning}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
