export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  type: "startup" | "app" | "pesquisa" | "case" | "open-source";
  year: number;
  tags: string[];
  shortDescription: string;
  longDescription: string;
  role: string;
  techStack: string[];
  links: {
    site?: string;
    repo?: string;
    article?: string;
  };
  images: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: "ai-learning-platform",
    title: "AI Learning Platform",
    subtitle: "Plataforma de aprendizado adaptativo com IA",
    type: "startup",
    year: 2024,
    tags: ["AI", "EdTech", "SaaS", "Machine Learning"],
    shortDescription: "Plataforma que personaliza o aprendizado usando inteligência artificial para adaptar conteúdo e ritmo às necessidades individuais de cada estudante.",
    longDescription: `## Contexto

A educação tradicional muitas vezes falha em atender às necessidades individuais dos estudantes. Cada pessoa aprende em ritmos diferentes e tem estilos de aprendizado únicos.

## Desafio

Criar uma solução que pudesse:
- Adaptar conteúdo em tempo real
- Identificar gaps de conhecimento
- Personalizar exercícios e explicações
- Escalar para milhares de usuários

## Solução

Desenvolvemos uma plataforma que utiliza modelos de machine learning para:
- Analisar o desempenho do estudante
- Recomendar conteúdo personalizado
- Gerar exercícios adaptativos
- Fornecer feedback imediato e construtivo

## Resultados

- 10.000+ estudantes ativos
- 85% de melhoria na retenção de conhecimento
- 40% de aumento na taxa de conclusão de cursos`,
    role: "Founder & Product Lead",
    techStack: ["Next.js", "TypeScript", "Python", "TensorFlow", "PostgreSQL", "AWS"],
    links: {
      site: "https://example.com",
      repo: "https://github.com/example",
    },
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200",
    ],
    metrics: [
      { label: "Usuários Ativos", value: "10.000+" },
      { label: "Taxa de Retenção", value: "85%" },
      { label: "Taxa de Conclusão", value: "40%" },
    ],
  },
  {
    slug: "space-analytics-dashboard",
    title: "Space Analytics Dashboard",
    subtitle: "Visualização de dados espaciais em tempo real",
    type: "app",
    year: 2023,
    tags: ["SpaceTech", "Data Visualization", "Web App"],
    shortDescription: "Dashboard interativo para visualização e análise de dados de missões espaciais, satélites e fenômenos astronômicos.",
    longDescription: `## Contexto

A necessidade de visualizar e entender dados espaciais complexos de forma intuitiva e em tempo real.

## Desafio

- Processar grandes volumes de dados
- Visualizar informações em múltiplas dimensões
- Manter performance com atualizações em tempo real
- Criar uma interface intuitiva para não-especialistas

## Solução

Dashboard construído com:
- Visualizações 3D interativas
- Filtros e queries em tempo real
- Integração com APIs de agências espaciais
- Design responsivo e acessível

## Resultados

- Adotado por 3 organizações de pesquisa
- Processamento de 1M+ pontos de dados
- Interface acessível para usuários não-técnicos`,
    role: "Product Designer & Frontend Lead",
    techStack: ["React", "Three.js", "D3.js", "Node.js", "MongoDB"],
    links: {
      site: "https://example.com",
      repo: "https://github.com/example",
    },
    images: [
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200",
    ],
    metrics: [
      { label: "Organizações", value: "3" },
      { label: "Pontos de Dados", value: "1M+" },
    ],
  },
  {
    slug: "quantum-computing-research",
    title: "Quantum Computing Research",
    subtitle: "Pesquisa em algoritmos quânticos para otimização",
    type: "pesquisa",
    year: 2023,
    tags: ["Quantum Computing", "Research", "Algorithms"],
    shortDescription: "Pesquisa acadêmica sobre aplicação de algoritmos quânticos para problemas de otimização em logística e supply chain.",
    longDescription: `## Contexto

A computação quântica promete resolver problemas de otimização exponencialmente mais rápido que computadores clássicos.

## Desafio

- Desenvolver algoritmos quânticos eficientes
- Aplicar a problemas reais de logística
- Validar resultados em simuladores quânticos
- Publicar resultados em conferências de alto impacto

## Solução

Desenvolvemos e testamos algoritmos quânticos para:
- Roteamento de veículos
- Otimização de inventário
- Planejamento de produção

## Resultados

- Artigo aceito em conferência internacional
- 30% de melhoria em benchmarks de otimização
- Código open-source disponível`,
    role: "Research Lead",
    techStack: ["Python", "Qiskit", "Cirq", "Jupyter"],
    links: {
      article: "https://example.com",
      repo: "https://github.com/example",
    },
    images: [
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200",
    ],
  },
  {
    slug: "sustainable-tech-accelerator",
    title: "Sustainable Tech Accelerator",
    subtitle: "Programa de aceleração para startups de impacto",
    type: "case",
    year: 2024,
    tags: ["Impact", "Acceleration", "Sustainability"],
    shortDescription: "Case de design e implementação de programa de aceleração focado em startups de tecnologia sustentável.",
    longDescription: `## Contexto

A necessidade de acelerar startups que trabalham com soluções sustentáveis e de impacto ambiental positivo.

## Desafio

- Estruturar programa de 6 meses
- Conectar startups com mentores e investidores
- Criar métricas de impacto mensuráveis
- Garantir sustentabilidade do programa

## Solução

Programa completo incluindo:
- Mentoria técnica e de negócios
- Conexão com investidores de impacto
- Workshops e eventos
- Acompanhamento de métricas de impacto

## Resultados

- 12 startups aceleradas
- R$ 5M em captação total
- 50+ toneladas de CO2 reduzidas
- 3 startups em série A`,
    role: "Program Director",
    techStack: ["Notion", "Airtable", "Webflow"],
    links: {
      site: "https://example.com",
    },
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
    ],
    metrics: [
      { label: "Startups", value: "12" },
      { label: "Captação", value: "R$ 5M" },
      { label: "CO2 Reduzido", value: "50+ ton" },
    ],
  },
  {
    slug: "design-system-library",
    title: "Design System Library",
    subtitle: "Biblioteca open-source de componentes React",
    type: "open-source",
    year: 2023,
    tags: ["Open Source", "Design System", "React", "TypeScript"],
    shortDescription: "Biblioteca de componentes React acessíveis e customizáveis, construída com TypeScript e Tailwind CSS.",
    longDescription: `## Contexto

A necessidade de uma biblioteca de componentes React moderna, acessível e fácil de usar.

## Desafio

- Criar componentes totalmente acessíveis
- Manter API simples e intuitiva
- Suportar customização completa
- Documentação clara e exemplos

## Solução

Biblioteca com:
- 30+ componentes
- TypeScript completo
- Acessibilidade WCAG 2.1 AA
- Documentação interativa
- Temas customizáveis

## Resultados

- 2.5k+ stars no GitHub
- Usado em 50+ projetos
- Contribuições da comunidade`,
    role: "Maintainer & Core Developer",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
    links: {
      repo: "https://github.com/example",
      site: "https://example.com",
    },
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    ],
    metrics: [
      { label: "GitHub Stars", value: "2.5k+" },
      { label: "Projetos", value: "50+" },
    ],
  },
  {
    slug: "health-monitoring-app",
    title: "Health Monitoring App",
    subtitle: "App mobile para monitoramento de saúde pessoal",
    type: "app",
    year: 2024,
    tags: ["Mobile", "HealthTech", "iOS", "Android"],
    shortDescription: "Aplicativo mobile que permite monitorar métricas de saúde, conectar com wearables e receber insights personalizados.",
    longDescription: `## Contexto

A crescente necessidade de ferramentas para monitoramento proativo de saúde pessoal.

## Desafio

- Integrar com múltiplos wearables
- Processar dados de saúde com privacidade
- Criar interface intuitiva
- Garantir conformidade com regulamentações

## Solução

App desenvolvido com:
- Integração com Apple Health, Google Fit, Fitbit
- Análise de padrões com IA
- Interface minimalista e focada
- Privacidade end-to-end

## Resultados

- 5.000+ downloads
- 4.5 estrelas na App Store
- Parceria com 3 fabricantes de wearables`,
    role: "Product Lead & Co-founder",
    techStack: ["React Native", "TypeScript", "Firebase", "TensorFlow Lite"],
    links: {
      site: "https://example.com",
    },
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200",
    ],
    metrics: [
      { label: "Downloads", value: "5.000+" },
      { label: "Rating", value: "4.5 ⭐" },
    ],
  },
];

