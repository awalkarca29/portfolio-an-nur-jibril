import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Layers3 } from "lucide-react";
import { heroStats } from "@/lib/data";

export function Hero() {
  return (
    <section className="section-shell grid min-h-[calc(100vh-65px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
      <div>
        <p className="eyebrow text-xs font-semibold text-forest">
          Portfolio
        </p>
        <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-normal text-ink sm:text-6xl lg:text-7xl">
          An-Nur Jibril Awwalul Muharram Al-Prasad
        </h1>
        <p className="mt-5 max-w-2xl text-2xl font-medium leading-9 text-ink">
          Full-Stack Developer with a growing focus on Business Analysis and
          Product Strategy.
        </p>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
          Combining technical execution with product thinking: understanding
          problems, translating user needs into structured requirements, and
          building practical digital solutions.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="#project"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-white transition hover:bg-forest"
          >
            View Projects
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
          <Link
            href="/projects/kenangan-smart-pickup"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-ink/20 px-5 text-sm font-semibold text-ink transition hover:border-forest hover:text-forest"
          >
            Case Study
            <Layers3 aria-hidden className="h-4 w-4" />
          </Link>
          <a
            href="#contact"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-ink/20 px-5 text-sm font-semibold text-ink transition hover:border-clay hover:text-clay"
          >
            Contact
            <Download aria-hidden className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {heroStats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-citron pl-4">
              <p className="text-xl font-semibold text-ink">{stat.value}</p>
              <p className="mt-1 text-sm leading-6 text-ink/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="project-visual-grid overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-soft">
          <div className="grid gap-0 md:grid-cols-[0.8fr_1.2fr]">
            <div className="border-b border-ink/10 bg-forest p-8 text-white md:border-b-0 md:border-r">
              <Image
                src="/assets/profile.jpg"
                alt="Portrait of An-Nur Jibril Awwalul Muharram Al-Prasad"
                width={360}
                height={360}
                priority
                className="mx-auto h-auto w-full max-w-[260px]"
              />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-sm font-semibold text-clay">
                Selected case study
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-ink">
                Kenangan Smart Pickup Time
              </h2>
              <p className="mt-3 text-sm leading-6 text-ink/70">
                A product strategy case study about reducing pickup uncertainty
                through dynamic estimation, order status, and user
                notifications.
              </p>
              <Image
                src="/assets/kenangan-smart-pickup.png"
                alt="Concept interface for Kenangan Smart Pickup Time"
                width={620}
                height={420}
                className="mt-8 h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
