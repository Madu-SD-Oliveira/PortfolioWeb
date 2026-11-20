export interface BackendProject {
  id: string;
  title: string;
  summary: string;
  stack: string[];
  metrics: Array<{ label: string; value: string }>;
  workflow: string[];
}

export const backendProjects: BackendProject[] = [
  {
    id: "01",
    title: "Event-driven commerce core",
    summary:
      "Sistema de orquestração para pedidos, estoque e eventos assíncronos com observabilidade em tempo real.",
    stack: ["Node.js", "Postgres", "Redis", "Kafka"],
    metrics: [
      { label: "P95", value: "42ms" },
      { label: "Uptime", value: "99.98%" },
      { label: "Throughput", value: "2.4k req/s" },
    ],
    workflow: ["Gateway", "Auth", "Orders", "Worker", "Storage"],
  },
  {
    id: "02",
    title: "Billing & reconciliation",
    summary:
      "Pipeline de cobrança, retry e reconciliation para fluxos com múltiplas integrações externas.",
    stack: ["Go", "RabbitMQ", "ClickHouse", "S3"],
    metrics: [
      { label: "Retry", value: "< 1.2%" },
      { label: "Latency", value: "88ms" },
      { label: "Recovery", value: "4m" },
    ],
    workflow: ["Webhook", "Collector", "Ledger", "Audit", "Report"],
  },
];
