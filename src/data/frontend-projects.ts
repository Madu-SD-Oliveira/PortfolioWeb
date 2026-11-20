export interface FrontendProject {
  id: string;
  title: string;
  year: string;
  role: string;
  description: string;
  stack: string[];
  details: string[];
  image: string;
}

export const frontendProjects: FrontendProject[] = [
  {
    id: "01",
    title: "Observability console",
    year: "2025",
    role: "Product UI Engineer",
    description:
      "Painel de operações com leitura técnica, métricas visuais e foco em tomada de decisão rápida.",
    stack: ["Next.js", "Tailwind", "TypeScript"],
    details: [
      "Design system",
      "Monitoramento em tempo real",
      "Estados de carga e erro",
    ],
    image: "/portrait.svg",
  },
  {
    id: "02",
    title: "Finance platform experience",
    year: "2024",
    role: "Frontend Lead",
    description:
      "Fluxos de investimento e gestão com navegação direta, cards densos e linguagem visual consistente.",
    stack: ["React", "Framer Motion", "Radix"],
    details: ["Arquitetura de telas", "Microinterações", "A11y e performance"],
    image: "/portrait.svg",
  },
];
