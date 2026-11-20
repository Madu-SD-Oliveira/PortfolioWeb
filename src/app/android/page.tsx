import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { androidProjects } from "@/data/android-projects";

export default function AndroidPage() {
  return (
    <div className="space-y-8">
    {/* HERO SECTION DE LA PÁGINA */}
      <ScrollReveal>
        <div className="border-2 p-6 sm:p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-brand-orange)]">
            /android
          </p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Mockups de dispositivos integrados ao storytelling visual do site.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--color-hud-graphite)var(--color-hud-graphite)]/70">
            Os dispositivos aparecem como parte da composição, com telas limpas,
            detalhes de interface e movimentos suaves de transição.
          </p>
        </div>
      </ScrollReveal>
    {/* RENDER DINÁMICO DE PROYECTOS */}
      <div className="space-y-24">
        {androidProjects.map((project, index) => (
          <section 
            key={project.id} 
            className="grid gap-8 lg:grid-cols-[1fr_1fr] items-start border-t border-[var(--color-ui-border-light)] pt-12 dark:border-[var(--color-ui-border-dark)]"
          >
            {/* COLUMNA IZQUIERDA: Detalles técnicos del proyecto */}
            <ScrollReveal delay={100} className="space-y-6">
              <div>
                <span className="font-mono text-xs text-[var(--color-brand-orange)] block mb-1">
                  PROJECT {project.id}
                </span>
                <h2 className="text-2xl font-semibold tracking-tight">{project.title}</h2>
              </div>
              
              <p className="text-sm leading-7 text-[var(--color-hud-graphite)]/80 dark:text-[var(--color-vintage-cream)]/80">
                {project.description}
              </p>

              <div className="space-y-3 text-sm">
                {project.features.map((feature, fIndex) => (
                  <div 
                    key={fIndex} 
                    className="border border-[var(--color-ui-border-light)] p-4 bg-[var(--color-hud-graphite)]/[0.01] font-mono text-xs dark:border-[var(--color-ui-border-dark)] dark:bg-white/[0.02]"
                  >
                    <span className="text-[var(--color-brand-orange)] mr-2">■</span> {feature}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* COLUMNA DERECHA: Galería de pantallas Fija (Sticky) */}
            {/* lg:sticky y top-28*/}
            <div className="lg:sticky lg:top-28 space-y-6">
              <ScrollReveal delay={200} className="w-full">
                <div className="border border-[var(--color-ui-border-light)] bg-[linear-gradient(135deg,rgba(18,19,21,0.02),rgba(226,90,56,0.05))] p-4 sm:p-8 dark:border-[var(--color-ui-border-dark)]">
                  
                  {/* Contenedor Grid Interno para mostrar las imágenes limpias del App */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
                    {project.images.map((imgSrc, imgIndex) => (
                      <div 
                        key={imgIndex} 
                        className="w-full max-w-[240px] rounded-[1.5rem] border border-[var(--color-ui-border-light)] bg-[var(--color-vintage-cream)] p-2 shadow-xs transition-transform duration-300 hover:scale-[1.02] dark:border-[var(--color-ui-border-dark)] dark:bg-[var(--color-hud-graphite)]"
                      >
                        <div className="overflow-hidden rounded-[1.1rem] relative aspect-[9/19]">
                          <Image
                            src={imgSrc}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 30vw"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </ScrollReveal>
            </div>

          </section>
        ))}
      </div>
    </div>
  );
}