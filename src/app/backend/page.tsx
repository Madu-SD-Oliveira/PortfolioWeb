import { ScrollReveal } from "@/components/scroll-reveal";

const metrics = [
  { label: "Latency", value: "42ms" },
  { label: "Uptime", value: "99.9%" },
  { label: "Throughput", value: "1.8k req/s" },
];

export default function BackendPage() {
  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div className="rounded-[2rem] border border-[var(--color-ui-border-light)] p-6 sm:p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-brand-orange)]">
            /backend
          </p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Arquiteturas e métricas apresentadas como um painel técnico.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--color-hud-graphite)]/70">
            A ideia aqui é transformar fluxos de dados e serviços em uma leitura
            visual limpa, quase como um console de observabilidade premium.
          </p>
        </div>
      </ScrollReveal>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <ScrollReveal
          delay={120}
          className="rounded-[1.75rem] border border-[var(--color-ui-border-light)] p-6"
        >
          <h2 className="text-lg font-semibold">Fluxo principal</h2>
          <div className="mt-6 space-y-4">
            {[
              "Cliente → Gateway → Auth Service",
              "Eventos → Queue → Worker",
              "Cache + DB → API Resposta",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1rem] border border-[var(--color-ui-border-light)] p-4 font-mono text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal
          delay={180}
          className="rounded-[1.75rem] border border-[var(--color-ui-border-light)] p-6"
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[1rem] border border-[var(--color-ui-border-light)] bg-[linear-gradient(135deg,rgba(18,19,21,0.03),rgba(226,90,56,0.08))] p-4"
              >
                <p className="font-mono text-2xl font-semibold text-[var(--color-brand-orange)]">
                  {metric.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[var(--color-hud-graphite)]/70">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.25rem] border border-[var(--color-ui-border-light)] p-6">
            <div className="flex items-center justify-between text-sm uppercase tracking-[0.25em] text-[var(--color-hud-graphite)]/70">
              <span>Service graph</span>
              <span>Realtime</span>
            </div>
            <div className="mt-6 grid gap-3">
              {[
                ["API", "Auth", "DB"],
                ["Queue", "Worker", "Cache"],
              ].map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-wrap gap-3">
                  {row.map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-[var(--color-ui-border-light)] px-4 py-2 text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
