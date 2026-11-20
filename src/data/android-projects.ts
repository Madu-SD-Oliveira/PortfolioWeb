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
    title: "SciFinances App",
    tag: "UI / UX & Architecture",
    description:
      "Um app focado em simulação de investimentos, navegação minimalista e profundidade visual. A experiência é construída em camadas estruturadas: conteúdo principal, navegación técnica lateral e estados de feedback em tempo real de latência.",
    features: [
      "Fluxo de cadastro simplificado com validação assíncrona",
      "Visual limpo com sistema estrutural de grids e cartões HUD",
      "Performance otimizada e injeção de dependências limpa",
    ],
    images: [
      "/img-android-011.png",
      "/img-android-012.png",
      "/img-android-013.png",
    ],
  },
  {
    id: "02",
    title: "CharacterWiki App",
    tag: "Jetpack Compose & Retrofit",
    description:
      "Interface reativa para monitoramento de ativos digitais em alta performance. Desenvolvido puramente em Compose seguindo a paleta industrial do ecossistema.",
    features: [
      "Atualização em tempo real via canais de WebSockets seguros",
      "Gráficos nativos renderizados via Canvas sem bibliotecas pesadas",
      "Armazenamento local criptografado usando Room Database",
    ],
    images: ["/img_android03.png", "/img_android04.png"],
  },
  /**
   * Ejemplo
   * 
   * {
  id: "03",
  title: "Mi Nuevo Proyecto Sorprendente",
  tag: "Kotlin Multiplatform",
  description: "Explicación detallada...",
  features: [
    "Característica técnica uno",
    "Característica técnica dos"
  ],
  images: ["/img_android05.png", "/img_android06.png"]
} */
];
