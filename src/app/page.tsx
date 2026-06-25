import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

const highlights = [
  { label: "Arquiteturas", value: "07+" },
  { label: "Apps Android", value: "03" },
  { label: "Tempo de entrega", value: "< 4w" },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 rounded-[2rem] border border-[var(--color-ui-border-light)] bg-[var(--color-vintage-cream)] p-6 shadow-[0_20px_80px_rgba(18,19,21,0.04)] sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
        <ScrollReveal className="flex flex-col justify-between gap-8">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-brand-orange)]">
              About me
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
              Eu construo sistemas e interfaces com uma linguagem visual direta,
              técnica e elegante.
            </h1>
            <p className="max-w-xl text-base leading-8 text-[var(--color-hud-graphite)]/70">
              Trabalho com arquitetura de backend, produtos Android e frontends
              limpos, sempre pensando em performance, clareza e uma experiência
              que pareça inevitável.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/backend"
              className="rounded-full border border-[var(--color-ui-border-light)] px-4 py-2 text-sm transition-all hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)]"
            >
              Ver backend
            </Link>
            <Link
              href="/frontend"
              className="rounded-full bg-[var(--color-hud-graphite)] px-4 py-2 text-sm text-[var(--color-vintage-cream)] transition-all hover:bg-[var(--color-brand-orange)]"
            >
              Ver frontend
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120} className="flex items-center justify-center">
          <div className="w-full max-w-sm rounded-[2rem] border border-[var(--color-ui-border-light)] p-3">
            <Image
              src="/portrait.svg"
              alt="Ilustração editorial do portfólio"
              width={640}
              height={900}
              priority
              className="h-auto w-full rounded-[1.4rem]"
            />
          </div>
        </ScrollReveal>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {highlights.map((item, index) => (
          <ScrollReveal
            key={item.label}
            delay={120 * index}
            className="rounded-[1.5rem] border border-[var(--color-ui-border-light)] p-6"
          >
            <p className="text-3xl font-semibold text-[var(--color-brand-orange)]">
              {item.value}
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[var(--color-hud-graphite)]/70">
              {item.label}
            </p>
          </ScrollReveal>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {[
          {
            title: "Backend",
            description:
              "Arquiteturas, métricas e fluxos complexos traduzidos em ambientes claros.",
            href: "/backend",
          },
          {
            title: "Android",
            description:
              "Mockups modernos que se integram ao site como parte da narrativa visual.",
            href: "/android",
          },
          {
            title: "Frontend",
            description:
              "Interfaces com microinterações, cards e sensação premium em cada detalhe.",
            href: "/frontend",
          },
        ].map((item, index) => (
          <ScrollReveal key={item.title} delay={120 * index}>
            <Link
              href={item.href}
              className="group block rounded-[1.5rem] border border-[var(--color-ui-border-light)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand-orange)]"
            >
              <div className="mb-6 h-24 rounded-[1rem] border border-[var(--color-ui-border-light)] bg-[linear-gradient(135deg,rgba(18,19,21,0.03),rgba(226,90,56,0.08))]" />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-7 text-[var(--color-hud-graphite)]/70">
                {item.description}
              </p>
            </Link>
          </ScrollReveal>
        ))}
      </section>
    </div>
  );
}
