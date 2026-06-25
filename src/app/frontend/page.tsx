import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

const cards = [
  {
    title: "Dashboard",
    description: "Painel com métricas e visão técnica do produto.",
    image: "/portrait.svg",
  },
  {
    title: "Experience",
    description: "Estrutura de navegação com feedback visual claro.",
    image: "/portrait.svg",
  },
  {
    title: "Motion",
    description: "Transições suaves e hover com sensação premium.",
    image: "/portrait.svg",
  },
];

export default function FrontendPage() {
  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div className="rounded-[2rem] border border-[var(--color-ui-border-light)] p-6 sm:p-8 lg:p-10">
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

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card, index) => (
          <ScrollReveal key={card.title} delay={120 * index}>
            <article className="group overflow-hidden rounded-[1.75rem] border border-[var(--color-ui-border-light)] bg-[var(--color-vintage-cream)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand-orange)]">
              <div className="relative aspect-video overflow-hidden border-b border-[var(--color-ui-border-light)]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold">{card.title}</h2>
                <p className="mt-2 text-sm leading-7 text-[var(--color-hud-graphite)]/70">
                  {card.description}
                </p>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </section>
    </div>
  );
}
