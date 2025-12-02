export interface JourneyStep {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  details?: string;
}

export const journeySteps: JourneyStep[] = [
  {
    number: "01",
    title: "Ideação e Pesquisa",
    description: "Explorando problemas complexos e identificando oportunidades na interseção de diferentes domínios.",
    bullets: [
      "Pesquisa acadêmica e aplicada",
      "Análise de mercado e tendências",
      "Validação de hipóteses",
      "Mapeamento de stakeholders",
    ],
    details: "Nesta fase, mergulho profundamente em problemas complexos, combinando insights de diferentes áreas do conhecimento. Realizo pesquisas acadêmicas, analiso tendências de mercado, valido hipóteses através de experimentos e mapeio todos os stakeholders envolvidos. O objetivo é entender completamente o problema antes de propor soluções.",
  },
  {
    number: "02",
    title: "Design & Produto",
    description: "Transformando ideias em produtos tangíveis através de design centrado no usuário e prototipagem rápida.",
    bullets: [
      "Design thinking e UX research",
      "Prototipagem e testes de usabilidade",
      "Arquitetura de produto",
      "Definição de roadmap e métricas",
    ],
    details: "Aqui transformo ideias em produtos reais. Utilizo design thinking e pesquisa de UX para entender profundamente as necessidades dos usuários. Crio protótipos rápidos, testo com usuários reais e itero baseado em feedback. Defino a arquitetura do produto, o roadmap estratégico e as métricas de sucesso que guiarão o desenvolvimento.",
  },
  {
    number: "03",
    title: "Construção & Lançamento",
    description: "Construindo soluções escaláveis e lançando produtos que geram impacto real no mundo.",
    bullets: [
      "Desenvolvimento full-stack",
      "Arquitetura escalável",
      "Lançamento e growth",
      "Iteração baseada em dados",
    ],
    details: "Na fase final, coloco a mão na massa para construir soluções escaláveis. Trabalho com desenvolvimento full-stack, criando arquiteturas que podem crescer. Lanço produtos com estratégias de growth bem definidas e itero constantemente baseado em dados reais de uso. O foco é criar produtos que não apenas funcionam, mas que geram impacto real e sustentável.",
  },
];

