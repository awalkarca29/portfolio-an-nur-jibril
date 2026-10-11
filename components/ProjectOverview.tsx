import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projectMetrics } from "@/lib/data";

export function ProjectOverview() {
  return (
    <article className="mt-12 overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-ink p-8 text-white sm:p-10">
          <p className="eyebrow text-xs font-semibold text-citron">
            Selected Project
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-normal">
            Kenangan Smart Pickup Time
          </h3>
          <p className="mt-4 leading-7 text-white/70">
            A product strategy case study focused on improving pickup-order
            confidence by addressing the gap between estimated and actual ready
            time during peak hours.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {projectMetrics.map((metric) => (
              <div key={metric.label} className="border-t border-white/20 pt-4">
                <p className="text-2xl font-semibold">{metric.value}</p>
                <p className="mt-1 text-xs leading-5 text-white/60">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/projects/kenangan-smart-pickup"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-ink transition hover:bg-citron"
          >
            Open Project Detail
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>
        <div className="project-visual-grid bg-paper p-6 sm:p-10">
          <Image
            src="/assets/kenangan-smart-pickup.png"
            alt="Kenangan Smart Pickup Time placeholder interface mockup"
            width={900}
            height={620}
            className="h-auto w-full"
          />
        </div>
      </div>
    </article>
  );
}
