import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navItems } from "@/lib/data";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <nav className="section-shell flex min-h-16 items-center justify-between gap-4 py-3">
        <Link href="/" className="max-w-[220px] text-sm font-semibold leading-tight tracking-normal sm:max-w-none sm:text-base">
          An-Nur Jibril Awwalul Muharram Al-Prasad
        </Link>
        <div className="hidden items-center gap-6 text-sm text-ink/70 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-ink">
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="inline-flex h-10 items-center gap-2 rounded-full bg-ink px-4 text-sm font-medium text-white transition hover:bg-forest"
        >
          Contact
          <ArrowUpRight aria-hidden className="h-4 w-4" />
        </a>
      </nav>
    </header>
  );
}
