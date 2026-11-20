import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { frontendProjects } from "@/data/frontend-projects";

export default function FrontendPage() {
  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div className="border-2 border-[var(--color-ui-border-light)] p-6 sm:p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-brand-orange)]">
            /frontend
          </p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Cards interativos com microinterações e estética de produto.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--color-hud-graphite)]/70">
            Aqui, o foco está em mostrar interfaces limpas com detalhes de
            hover, contraste e movimento controlado, tudo em Tailwind e Next.js.
          </p>
        </div>
      </ScrollReveal>

      <section className="grid gap-6 xl:grid-cols-1">
        {frontendProjects.map((project, index) => (
          <ScrollReveal key={project.id} delay={120 * index}>
            <article className="group overflow-hidden border-2 border-[var(--color-ui-border-light)] bg-[var(--color-vintage-cream)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand-orange)] dark:border-[var(--color-ui-border-dark)] dark:bg-[var(--color-hud-graphite)]">
              <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                <div className="relative aspect-[4/3] border-b-2 border-[var(--color-ui-border-light)] lg:border-b-0 lg:border-r-2 dark:border-[var(--color-ui-border-dark)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>

                <div className="flex flex-col p-6 lg:min-h-full">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[var(--color-ui-border-light)] pb-4 dark:border-[var(--color-ui-border-dark)]">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-brand-orange)]">
                        {project.year}
                      </p>
                      <h2 className="mt-1 text-xl font-semibold">
                        {project.title}
                      </h2>
                    </div>
                    <span className="border-2 border-[var(--color-ui-border-light)] px-3 py-1 text-xs uppercase tracking-[0.25em]">
                      {project.role}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[var(--color-hud-graphite)]/70 dark:text-[var(--color-vintage-cream)]/75">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tool) => (
                      <span
                        key={tool}
                        className="border-2 border-[var(--color-ui-border-light)] px-3 py-1 text-xs uppercase tracking-[0.25em]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {project.details.map((detail) => (
                      <div
                        key={detail}
                        className="border-2 border-[var(--color-ui-border-light)] bg-[linear-gradient(135deg,rgba(18,19,21,0.03),rgba(226,90,56,0.08))] p-3 text-sm dark:border-[var(--color-ui-border-dark)]"
                      >
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </section>
    </div>
  );
}
