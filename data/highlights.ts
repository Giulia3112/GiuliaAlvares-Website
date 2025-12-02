export interface Highlight {
  year: number;
  title: string;
  description: string;
  type: "award" | "program" | "conference" | "publication" | "accomplishment";
  link?: string;
}

export const highlights: Highlight[] = [
  {
    year: 2024,
    title: "TechCrunch Disrupt - Featured Startup",
    description: "Startup selecionada para apresentar no palco principal do TechCrunch Disrupt",
    type: "conference",
    link: "https://example.com",
  },
  {
    year: 2024,
    title: "Forbes 30 Under 30 - Technology",
    description: "Reconhecida na lista de jovens mais promissores em tecnologia",
    type: "award",
    link: "https://example.com",
  },
  {
    year: 2023,
    title: "Y Combinator S23 Batch",
    description: "Acelerada pelo Y Combinator, uma das principais aceleradoras do mundo",
    type: "program",
    link: "https://example.com",
  },
  {
    year: 2023,
    title: "Paper publicado em ICML",
    description: "Publicação sobre algoritmos quânticos para otimização na International Conference on Machine Learning",
    type: "publication",
    link: "https://example.com",
  },
  {
    year: 2023,
    title: "TEDx Talk - The Future of Learning",
    description: "Palestra sobre o futuro da educação e tecnologia na TEDx",
    type: "conference",
    link: "https://example.com",
  },
  {
    year: 2022,
    title: "Prêmio Inovação em EdTech",
    description: "Reconhecimento por inovação em tecnologia educacional",
    type: "award",
  },
  {
    year: 2022,
    title: "Google Developer Expert",
    description: "Nomeada Google Developer Expert em Machine Learning",
    type: "accomplishment",
    link: "https://example.com",
  },
];

