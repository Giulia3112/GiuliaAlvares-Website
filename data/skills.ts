export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Produto",
    skills: [
      "Product Strategy",
      "Roadmap Planning",
      "User Research",
      "A/B Testing",
      "Analytics",
      "Growth Hacking",
    ],
  },
  {
    category: "Design",
    skills: [
      "UI/UX Design",
      "Design Systems",
      "Prototyping",
      "User Testing",
      "Figma",
      "Design Thinking",
    ],
  },
  {
    category: "Engenharia",
    skills: [
      "Full-Stack Development",
      "React/Next.js",
      "TypeScript",
      "Python",
      "Machine Learning",
      "Cloud Architecture",
    ],
  },
  {
    category: "Negócios",
    skills: [
      "Startup Strategy",
      "Fundraising",
      "Business Development",
      "Partnerships",
      "Go-to-Market",
      "Operations",
    ],
  },
];

