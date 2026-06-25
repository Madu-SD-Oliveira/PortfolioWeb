import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/", label: "About" },
  { href: "/backend", label: "Backend" },
  { href: "/android", label: "Android" },
  { href: "/frontend", label: "Frontend" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--color-vintage-cream)] text-[var(--color-hud-graphite)] transition-colors duration-300">
      <header className="sticky top-0 z-30 border-b border-[var(--color-ui-border-light)] bg-[var(--color-vintage-cream)]/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-hud-graphite)]"
          >
            Madu Oliveira
          </Link>
          <nav className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--color-hud-graphite)]/70 sm:gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-[var(--color-brand-orange)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        {children}
      </main>

      <footer className="border-t border-[var(--color-ui-border-light)] px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-[var(--color-hud-graphite)]/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Disponível para projetos de sistemas, interfaces e experiências
            digitais.
          </p>
          <a
            href="mailto:madu@example.com"
            className="transition-colors hover:text-[var(--color-brand-orange)]"
          >
            madu@example.com
          </a>
        </div>
      </footer>
    </div>
  );
}
