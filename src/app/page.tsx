import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

const highlights = [
  { label: "Arquiteturas", value: "07+" },
  { label: "Apps Android", value: "03" },
  { label: "Tempo de entrega", value: "< 4w" },
];

const recentWork = [
  {
    title: "Observability platform",
    description: "Painel de arquitetura e métricas para operações críticas.",
  },
  {
    title: "Android commerce flow",
    description: "Onboarding e checkout com experiência lenta e deliberada.",
  },
  {
    title: "Design system refresh",
    description:
      "Componentes e linguagem visual consistentes em múltiplas telas.",
  },
];

function SocialIcon({ path }: { path: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="grid border-2 bg-vintage-cream lg:grid-cols-[1.1fr_0.9fr] dark:bg-[var(--color-hud-graphite)]">
        <ScrollReveal className="border-b-2 border-ui-border-light p-6 sm:p-8 lg:border-b-0 lg:border-r-2 lg:p-10 dark:border-[var(--color-ui-border-dark)]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-brand-orange)]">
              About me
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-[var(--color-hud-graphite)] sm:text-5xl dark:text-[var(--color-vintage-cream)]">
              Eu construo{" "}
              <span className="italic underline decoration-[var(--color-brand-orange)] decoration-2 underline-offset-4">
                sistemas e interfaces
              </span>{" "}
              com uma linguagem visual direta, técnica e elegante.
            </h1>
            <p className="max-w-xl text-base leading-8 text-[var(--color-hud-graphite)] dark:text-[var(--color-vintage-cream)]">
              Trabalho com arquitetura de backend, produtos Android e frontends
              limpos, sempre pensando em{" "}
              <span className="italic underline decoration-[var(--color-brand-orange)] decoration-2 underline-offset-4">
                performance
              </span>
              , clareza e uma experiência que pareça inevitável.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/android"
              className="bg-[var(--color-hud-graphite)] border-2 border-[var(--color-ui-border-light)]
              px-4 py-2 text-sm uppercase tracking-[0.2em]
                text-[var(--color-vintage-cream)] transition-all
                hover:bg-[var(--color-brand-orange)]"
            >
              Ver android
            </Link>
            <Link
              href="/backend"
              className="border-2
                border-[var(--color-ui-border-light)] bg-[var(--color-brand-orange)]
                px-4 py-2 text-sm uppercase tracking-[0.2em] 
                text-[var(--color-hud-graphite)]  
                transition-all hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)]"
            >
              Ver backend
            </Link>
            <Link
              href="/frontend"
              className="bg-[var(--color-hud-graphite)] border-2 border-[var(--color-ui-border-light)]
              px-4 py-2 text-sm uppercase tracking-[0.2em]
                text-[var(--color-vintage-cream)] transition-all
                hover:bg-[var(--color-brand-orange)]"
            >
              Ver frontend
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/Madu-SD-Oliveira"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border-2 border-[var(--color-ui-border-light)] px-3 py-2 text-sm transition-all hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)]"
            >
              <SocialIcon path="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9c0-1 .1-1.4-.5-2 2.2-.3 4.4-1.1 4.4-5A4 4 0 0 0 17.7 6.1a3.8 3.8 0 0 0-.1-2.8s-1.1-.3-3.6 1.3a12.5 12.5 0 0 0-6.5 0C5.3 3 4.2 3.3 4.2 3.3a3.8 3.8 0 0 0-.1 2.8A4 4 0 0 0 3.5 8.8c0 3.9 2.2 4.7 4.4 5-.6.6-.6 1.3-.5 2V21" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/devmaduoliveira"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border-2 border-[var(--color-ui-border-light)] px-3 py-2 text-sm transition-all hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)]"
            >
              <SocialIcon path="M7 7h.01M7 10v6M13 10v6M10 10v6M16 10v6M6 7h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" />
              LinkedIn
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal
          delay={120}
          className="flex items-center justify-center
           bg-[var(--color-hud-graphite)] p-6
           text-[var(--color-vintage-cream)] sm:p-8 lg:p-10"
        >
          <div className="w-full max-w-sm border-2 border-[var(--color-ui-border-dark)] p-3">
            <Image
              src="/portrait.svg"
              alt="Ilustração editorial do portfólio"
              width={640}
              height={900}
              priority
              className="h-auto w-full"
            />
          </div>
        </ScrollReveal>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {highlights.map((item, index) => (
          <ScrollReveal
            key={item.label}
            delay={120 * index}
            className="border-2 border-[var(--color-ui-border-light)] p-6 dark:border-[var(--color-ui-border-dark)]"
          >
            <p className="text-3xl font-semibold text-[var(--color-brand-orange)]">
              {item.value}
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[var(--color-hud-graphite)] dark:text-[var(--color-vintage-cream)]">
              {item.label}
            </p>
          </ScrollReveal>
        ))}
      </section>

      <section className="grid gap-0 border-2 border-[var(--color-ui-border-light)] lg:grid-cols-[0.9fr_1.1fr] dark:border-[var(--color-ui-border-dark)]">
        <div className="border-b-2 border-[var(--color-ui-border-light)] p-6 sm:p-8 lg:border-b-0 lg:border-r-2 lg:p-10 dark:border-[var(--color-ui-border-dark)]">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-brand-orange)]">
            Recent work
          </p>
          <div className="mt-6 space-y-4">
            {recentWork.map((item) => (
              <div
                key={item.title}
                className="border-2 border-[var(--color-ui-border-light)] p-4 dark:border-[var(--color-ui-border-dark)]"
              >
                <h2 className="text-lg font-semibold dark:text-[var(--color-vintage-cream)]">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-7 text-[var(--color-hud-graphite)] dark:text-[var(--color-vintage-cream)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 p-6 sm:p-8 lg:p-10">
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
                className="group block border-2 border-[var(--color-ui-border-light)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand-orange)] dark:border-[var(--color-ui-border-dark)]"
              >
                <div className="mb-4 h-16 border-2 border-[var(--color-ui-border-light)] bg-[linear-gradient(135deg,rgba(18,19,21,0.03),rgba(226,90,56,0.08))] dark:border-[var(--color-ui-border-dark)]" />
                <h2 className="text-lg font-semibold dark:text-[var(--color-vintage-cream)]">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-7 text-[var(--color-hud-graphite)] dark:text-[var(--color-vintage-cream)]">
                  {item.description}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
