export interface Profile {
  name: string;
  headline: string;
  bio: string;
  links: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    email?: string;
    website?: string;
  };
}

export const profile: Profile = {
  name: "Giulia Alvares",
  headline: "Acompanhe a jornada de uma polímata em formação.",
  bio: "Founder, builder e product/tech person. Construindo produtos que impactam, explorando novas fronteiras e conectando ideias entre diferentes domínios do conhecimento.",
  links: {
    linkedin: "https://linkedin.com/in/giulia-alvares",
    github: "https://github.com/Giulia3112",
    twitter: "https://x.com/GAlvares76552",
    email: "mailto:eu@giuliaalvares.com.br",
    website: "https://giuliaalvares.com.br",
  },
};

