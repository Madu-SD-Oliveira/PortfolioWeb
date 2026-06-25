export interface AndroidProject {
  id: string;
  title: string;
  tag: string;
  description: string;
  features: string[];
  // Array de imágenes para que cambien secuencialmente en el scroll sticky
  images: string[]; 
}

export const androidProjects: AndroidProject[] = [
  {
    id: "01",
    title: "Minimalist Onboarding App",
    tag: "UI / UX & Architecture",
    description: "Um app focado em onboarding, navegação minimalista e profundidade visual. A experiência é construída em camadas estruturadas: conteúdo principal, navegación técnica lateral e estados de feedback em tempo real de latência.",
    features: [
      "Fluxo de cadastro simplificado com validação assíncrona",
      "Visual limpo com sistema estrutural de grids e cartões HUD",
      "Performance otimizada e injeção de dependências limpa"
    ],
    images: [
      "/img_android01.png", // Asegúrate de guardarlas en tu carpeta public/ con estos nombres
      "/img_android02.png"
    ]
  },
  {
    id: "02",
    title: "Crypto Wallet Tracker",
    tag: "Jetpack Compose & WebSockets",
    description: "Interface reativa para monitoramento de ativos digitais em alta performance. Desenvolvido puramente em Compose seguindo a paleta industrial do ecossistema.",
    features: [
      "Atualização em tempo real via canais de WebSockets seguros",
      "Gráficos nativos renderizados via Canvas sem bibliotecas pesadas",
      "Armazenamento local criptografado usando Room Database"
    ],
    images: [
      "/img_android03.png",
      "/img_android04.png"
    ]
  }
];