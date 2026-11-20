import { ScrollReveal } from "@/components/scroll-reveal";
import { backendProjects } from "@/data/backend-projects";

export default function BackendPage() {
  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div className="border-2 border-[var(--color-ui-border-light)] p-6 sm:p-8 lg:p-10 dark:border-[var(--color-ui-border-dark)]">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-brand-orange)]">
            /backend
          </p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl dark:text-[var(--color-vintage-cream)]">
            Arquiteturas e métricas apresentadas como um painel técnico.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--color-hud-graphite)] dark:text-[var(--color-vintage-cream)]">
            A ideia aqui é transformar fluxos de dados e serviços em uma leitura
            visual limpa, quase como um console de observabilidade premium.
          </p>
        </div>
      </ScrollReveal>

      <section className="grid gap-0 border-2 border-[var(--color-ui-border-light)] lg:grid-cols-[0.95fr_1.05fr]">
        <ScrollReveal
          delay={120}
          className="border-b-2 border-[var(--color-ui-border-light)] p-6 lg:border-b-0 lg:border-r-2"
        >
          <h2 className="text-lg font-semibold dark:text-[var(--color-vintage-cream)]">
            Fluxo principal
          </h2>
          <div className="mt-6 space-y-3">
            {backendProjects
              .flatMap((project) => project.workflow)
              .map((item) => (
                <div
                  key={item}
                  className="border-2 border-[var(--color-ui-border-light)] p-4 font-mono text-sm dark:border-[var(--color-ui-border-dark)] dark:text-[var(--color-vintage-cream)]"
                >
                  {item}
                </div>
              ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={180} className="p-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {backendProjects
              .flatMap((project) => project.metrics)
              .map((metric) => (
                <div
                  key={`${metric.label}-${metric.value}`}
                  className="border-2 border-[var(--color-ui-border-light)] bg-[linear-gradient(135deg,rgba(18,19,21,0.03),rgba(226,90,56,0.08))] p-4 dark:border-[var(--color-ui-border-dark)]"
                >
                  <p className="font-mono text-2xl font-semibold text-[var(--color-brand-orange)]">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[var(--color-hud-graphite)] dark:text-[var(--color-vintage-cream)]">
                    {metric.label}
                  </p>
                </div>
              ))}
          </div>

          <div className="mt-6 grid gap-4">
            {backendProjects.map((project) => (
              <div
                key={project.id}
                className="border-2 border-[var(--color-ui-border-light)] bg-[var(--color-vintage-cream)] p-5 dark:border-[var(--color-ui-border-dark)] dark:bg-[var(--color-hud-graphite)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[var(--color-ui-border-light)] pb-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-brand-orange)]">
                      {project.id}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold dark:text-[var(--color-vintage-cream)]">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="border-2 border-[var(--color-ui-border-light)] px-3 py-1 text-xs uppercase tracking-[0.25em]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--color-hud-graphite)] dark:text-[var(--color-vintage-cream)]">
                  {project.summary}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
