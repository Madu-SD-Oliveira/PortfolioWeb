"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "About" },
  { href: "/backend", label: "Backend" },
  { href: "/android", label: "Android" },
  { href: "/frontend", label: "Frontend" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const initialDark =
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(initialDark);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    root.classList.toggle("dark", darkMode);
    root.style.colorScheme = darkMode ? "dark" : "light";
    window.localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode, mounted]);

  return (
    <div className="min-h-screen bg-[var(--color-vintage-cream)] text-[var(--color-hud-graphite)] transition-colors duration-300 dark:bg-[var(--color-hud-graphite)] dark:text-[var(--color-vintage-cream)]">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-[var(--color-ui-border-light)] bg-[var(--color-vintage-cream)]/90 backdrop-blur transition-colors dark:border-[var(--color-ui-border-dark)] dark:bg-[var(--color-hud-graphite)]/90">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.35em]"
          >
            Madu Oliveira
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <nav className="flex items-center gap-5 text-xs uppercase tracking-[0.3em] text-[var(--color-hud-graphite)]/70 dark:text-[var(--color-vintage-cream)]/70">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`border-b-2 border-transparent px-1 py-1 transition-colors hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)] ${pathname === item.href ? "border-[var(--color-brand-orange)] text-[var(--color-brand-orange)]" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="border-2 border-[var(--color-ui-border-light)] px-3 py-2 text-xs font-mono uppercase tracking-[0.25em] transition-all hover:border-[var(--color-brand-orange)] dark:border-[var(--color-ui-border-dark)]"
              aria-label="Toggle Theme"
            >
              {mounted ? (darkMode ? "☉ Light" : "☾ Dark") : "☾ Dark"}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="border-2 border-[var(--color-ui-border-light)] p-2 text-xs font-mono dark:border-[var(--color-ui-border-dark)]"
            >
              {mounted ? (darkMode ? "☉" : "☾") : "☾"}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="border-2 border-[var(--color-ui-border-light)] px-3 py-2 text-xs font-mono uppercase tracking-[0.25em] dark:border-[var(--color-ui-border-dark)]"
            >
              {mobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <nav className="border-t-2 border-[var(--color-ui-border-light)] bg-[var(--color-vintage-cream)] p-4 space-y-3 md:hidden dark:border-[var(--color-ui-border-dark)] dark:bg-[var(--color-hud-graphite)]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block border-b-2 border-[var(--color-ui-border-light)]/60 py-2 text-xs uppercase tracking-[0.25em] dark:border-[var(--color-ui-border-dark)]/40"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="border-t-2 border-[var(--color-ui-border-light)] px-4 py-6 sm:px-6 lg:px-8 dark:border-[var(--color-ui-border-dark)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[var(--color-hud-graphite)]/70 sm:flex-row sm:items-center sm:justify-between dark:text-[var(--color-vintage-cream)]/70">
          <div className="space-y-2">
            <p>
              Disponível para projetos de sistemas, interfaces e experiências
              digitais.
            </p>
            <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em]">
              <span className="border border-[var(--color-ui-border-light)] px-2 py-1 dark:border-[var(--color-ui-border-dark)]">
                &lt;/&gt;
              </span>
              <span className="opacity-70">11111101010</span>
              <span className="opacity-70">KOTLIN</span>
              <span className="opacity-70">JAVA</span>
              <span className="opacity-70">JS</span>
              <span className="opacity-70">PYTHON</span>
              <span className="opacity-70">HTML</span>
              <span className="opacity-70">XML</span>
              <span className="opacity-70">CSS</span>
            </div>
          </div>
          <a
            href="mailto:sdomadu@gmail.com"
            className="transition-colors hover:text-[var(--color-brand-orange)]"
          >
            Send a email to me!
          </a>
        </div>
      </footer>
    </div>
  );
}
