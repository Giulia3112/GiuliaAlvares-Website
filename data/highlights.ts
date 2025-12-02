export interface Highlight {
  year: number;
  title: string;
  description: string;
  type: "award" | "program" | "conference" | "publication" | "accomplishment" | "leadership" | "education" | "challenge" | "competition";
  link?: string;
}

export const highlights: Highlight[] = [
  {
    year: 2021,
    title: "PUCRS – Liderança, Capacidade de Aprender e Resiliência",
    description: "Formação em liderança com participação de Malala Yousafzai e Flávio Augusto.",
    type: "leadership",
    link: "https://www.pucrs.br",
  },
  {
    year: 2022,
    title: "Harvard Publishing Education – Negociação",
    description: "Curso de negociação baseado nos frameworks de Harvard Business Publishing.",
    type: "education",
    link: "https://www.harvard.edu",
  },
  {
    year: 2023,
    title: "MIT SOLVE Youth Innovation Challenge – Autora de proposta",
    description: "Proposta enviada ao MIT SOLVE para desafios globais de inovação.",
    type: "challenge",
    link: "https://solve.mit.edu",
  },
  {
    year: 2023,
    title: "Global Peace Summit Dubai – Delegada da Paz",
    description: "Selecionada como delegada internacional em conferência global sobre paz e diplomacia.",
    type: "conference",
    link: "https://globalpeacechain.org",
  },
  {
    year: 2023,
    title: "Hult Prize – Semifinalista",
    description: "Reconhecida como semifinalista do Hult Prize, conhecido como o 'Prêmio Nobel Universitário'.",
    type: "competition",
    link: "https://www.hultprize.org",
  },
  {
    year: 2024,
    title: "University of Cambridge – Liderança e Gestão",
    description: "Aprovada e laureada com vaga em programa de liderança e management da University of Cambridge.",
    type: "education",
    link: "https://www.cam.ac.uk",
  },
  {
    year: 2024,
    title: "CEON – Ideia Mais Inovadora",
    description: "Premiada como autora da ideia mais inovadora no Ceuma Experience On (CEON).",
    type: "award",
    link: "https://www.ceuma.br",
  },
  {
    year: 2024,
    title: "MIT – Transformação Digital",
    description: "Programa do MIT sobre Transformação Digital e tecnologias emergentes.",
    type: "education",
    link: "https://mit.edu",
  },
  {
    year: 2024,
    title: "Global Business Symposium Harvard 2025 – Laureada com vaga",
    description: "Selecionada para participar do Global Business Symposium realizado por Harvard.",
    type: "conference",
    link: "https://www.harvard.edu",
  },
  {
    year: 2025,
    title: "Sebrae – Modelagem Financeira de Startups",
    description: "Certificação em modelagem financeira aplicada a startups.",
    type: "education",
    link: "https://www.sebrae.com.br",
  },
  {
    year: 2025,
    title: "L'Oréal Brandstorm Competition",
    description: "Participação em competição global de inovação da L'Oréal.",
    type: "competition",
    link: "https://brandstorm.loreal.com",
  },
  {
    year: 2025,
    title: "Distrito & SantanderX – Da Ideia ao MVP com Inteligência Artificial",
    description: "Imersão em criação de produtos digitais e protótipos usando IA.",
    type: "education",
    link: "https://www.santanderx.com",
  },
  {
    year: 2025,
    title: "Na Prática – Liderança com Jorge Paulo Lemann",
    description: "Formação de liderança estratégica com Jorge Paulo Lemann.",
    type: "leadership",
    link: "https://www.napratica.org.br",
  },
  {
    year: 2025,
    title: "Na Prática – Carreiras de Excelência",
    description: "Programa seletivo voltado para desenvolvimento de carreiras de alto impacto.",
    type: "education",
    link: "https://www.napratica.org.br",
  },
  {
    year: 2025,
    title: "Competidora no Hackathon da OpenAI – Devs de Impacto",
    description: "Competidora em hackathon da OpenAI focado em soluções sociais e tecnológica de alta complexidade.",
    type: "competition",
    link: "https://openai.com",
  },
  {
    year: 2025,
    title: "Citizen Entrepreneurship – Melhor Ideia da América Latina",
    description: "Vencedora regional no Citizen Entrepreneurship Competition.",
    type: "award",
    link: "https://www.entrepreneurship-campus.org",
  },
  {
    year: 2025,
    title: "Brazil at Silicon Valley – Convidada pela Fundação Estudar",
    description: "Convidada para conferência internacional sobre tecnologia e inovação no Vale do Silício.",
    type: "conference",
    link: "https://www.brazilatsiliconvalley.com",
  },
];

