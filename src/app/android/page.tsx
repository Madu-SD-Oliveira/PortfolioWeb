import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function AndroidPage() {
  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div className="rounded-[2rem] border border-[var(--color-ui-border-light)] p-6 sm:p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-brand-orange)]">
            /android
          </p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Mockups de dispositivos integrados ao storytelling visual do site.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--color-hud-graphite)]/70">
            Os dispositivos aparecem como parte da composição, com telas limpas,
            detalhes de interface e movimentos suaves de transição.
          </p>
        </div>
      </ScrollReveal>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <ScrollReveal
          delay={120}
          className="rounded-[1.75rem] border border-[var(--color-ui-border-light)] p-6"
        >
          <h2 className="text-lg font-semibold">Projeto destaque</h2>
          <p className="mt-4 text-sm leading-7 text-[var(--color-hud-graphite)]/70">
            Um app focado em onboarding, navegação minimalista e profundidade
            visual. A experiência é construída em camadas: conteúdo principal,
            navegação lateral e estados de feedback claros.
          </p>
          <div className="mt-6 space-y-3 text-sm text-[var(--color-hud-graphite)]/70">
            <div className="rounded-[1rem] border border-[var(--color-ui-border-light)] p-4">
              • Fluxo de cadastro com poucos passos
            </div>
            <div className="rounded-[1rem] border border-[var(--color-ui-border-light)] p-4">
              • Visual limpo com sistema de cards e modais
            </div>
            <div className="rounded-[1rem] border border-[var(--color-ui-border-light)] p-4">
              • Performance orientada por arquitetura leve
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal
          delay={180}
          className="rounded-[1.75rem] border border-[var(--color-ui-border-light)] p-6"
        >
          <div className="sticky top-24 rounded-[1.5rem] border border-[var(--color-ui-border-light)] bg-[linear-gradient(135deg,rgba(18,19,21,0.03),rgba(226,90,56,0.08))] p-6">
            <div className="mx-auto w-full max-w-sm rounded-[2rem] border border-[var(--color-ui-border-light)] bg-[var(--color-vintage-cream)] p-3">
              <Image
                src="/portrait.svg"
                alt="Mockup de aplicativo Android"
                width={640}
                height={900}
                className="h-auto w-full rounded-[1.4rem]"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
