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
    slug: "carbon-pay",
    title: "Carbon Pay",
    subtitle: "Sistema inteligente de gestão e pagamento de carbono",
    type: "startup",
    year: 2025,
    tags: ["AI", "Sustainability", "FinTech", "Carbon Credits", "SaaS"],
    shortDescription:
      "Plataforma automatizada que permite que empresas calculem, monitorem e compensem sua pegada de carbono usando inteligência artificial e créditos certificados.",
    longDescription: `## Contexto

Empresas de todos os portes enfrentam pressão crescente para reduzir emissões e comprovar práticas ambientais. No entanto, calcular pegada de carbono, gerar relatórios ESG e comprar créditos certificados é complexo, caro e burocrático.

O processo tradicional envolve consultorias, modelos manuais e intermediários — inviabilizando transparência e escala.

## Desafio

Criar uma solução capaz de:

- Automatizar cálculos de emissões em tempo real

- Integrar dados operacionais, financeiros e de energia

- Reduzir custos e eliminar intermediários

- Certificar créditos de carbono de forma confiável

- Facilitar a compensação para empresas pequenas e grandes

## Solução

O Carbon Pay combina IA + automação + integrações para:

- Processar dados de consumo e estimar emissões automaticamente

- Sugerir créditos certificados alinhados ao perfil de emissões da empresa

- Gerar relatórios ESG completos e auditáveis

- Criar histórico de compensação transparente

- Realizar pagamento instantâneo dos créditos compensatórios

A plataforma funciona como um \`SaaS plug-and-play\`, permitindo que empresas façam sua transição sustentável sem processos manuais.

## Resultados

- Redução média de 70% no custo operacional de cálculo e compensação

- Emissões rastreadas de forma contínua com menor margem de erro

- Processo de compensação 5x mais rápido

- Transparência completa e auditável

`,
    role: "Founder & Product Designer",
    techStack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Vercel",
      "OpenAI API",
    ],
    links: {
      site: "https://carbon-pay.vercel.app/",
    },
    images: [
      "https://carbon-pay.vercel.app/mockups/dashboard.png",
      "https://carbon-pay.vercel.app/mockups/insights.png",
    ],
    metrics: [
      { label: "Economia de Processos", value: "70%+" },
      { label: "Velocidade na Compensação", value: "5x mais rápido" },
      { label: "Precisão de Estimativa", value: "Alta" },
    ],
  },
  {
    slug: "aipply",
    title: "AIpply",
    subtitle: "Plataforma inteligente de oportunidades, candidaturas e desenvolvimento acadêmico-profissional",
    type: "startup",
    year: 2025,
    tags: ["AI", "EdTech", "Productivity", "Search", "Mobile", "SaaS"],
    shortDescription:
      "Plataforma que encontra oportunidades acadêmicas e profissionais automaticamente, organiza candidaturas e utiliza IA para ajudar estudantes e jovens talentos a aplicarem melhor e mais rápido.",
    longDescription: `## Contexto

Todos os anos milhões de estudantes, pesquisadores e jovens profissionais deixam de conquistar bolsas, programas de liderança, intercâmbios, estágios, fellowships e oportunidades internacionais simplesmente porque **não conseguem encontrá-las a tempo**, não entendem os requisitos ou se perdem no processo de candidatura.

O processo atual é fragmentado, manual e extremamente custoso em termos de tempo e organização pessoal.

## Desafio

Criar uma plataforma capaz de:

- Encontrar oportunidades automaticamente na internet

- Entender editais complexos e transformá-los em resumos objetivos

- Organizar todos os documentos, textos e candidaturas num único lugar

- Acompanhar deadlines, status e resultados

- Ajudar o usuário a melhorar redações, essays e respostas de application

- Personalizar recomendações com IA baseada no perfil e histórico do usuário

E tudo isso com uma experiência elegante, rápida e acessível.

## Solução

O AIpply combina **web scraping inteligente**, **IA generativa**, **engenharia de produto** e **automação** para entregar uma experiência completa:

### 🔍 1. Mecanismo de Busca de Oportunidades

- Crawler próprio construído em Node.js / Scrapy / Exa API

- Capaz de varrer sites de universidades, fundações, aceleradoras e organizações globais

- Processamento com modelo LLM (Gemma 3B / Exa / GPT) para extrair:

  - Requisitos

  - Elegibilidade

  - Documentos necessários

  - Deadline

  - Nível (graduação, mestrado, early-career, etc.)

  - Tipo (bolsa, fellowship, programa, competição, aceleração)

### 📄 2. Leitura inteligente de Editais

- Upload de PDFs

- Extração de texto com IA

- Resumos estruturados: o que é, requisitos, documentos, etapas, benefícios

### ✍️ 3. Assistente de Escrita e Organização

- IA que cria, refina e armazena essays

- Memória personalizada por usuário

- Sugestões de melhoria e adaptação para cada vaga

### 📊 4. Dashboard de Candidaturas

- Status de cada aplicação

- Acompanhamento de progresso

- Alertas automáticos de deadlines

### 🔮 5. Recomendação personalizada

- Matching entre perfil e oportunidades com base em:

  - Histórico de candidaturas

  - Objetivos do usuário

  - Background acadêmico e profissional

  - Preferências (país, área, senioridade)

## Resultados

- +5.000 oportunidades catalogadas durante testes

- Usuários reduzem até 70% do tempo gasto com busca e organização

- Aplicações mais fortes e completas usando IA

- Redução de erros, perda de deadlines e desorganização

- Aumento real da taxa de aprovação em programas competitivos

## Impacto

O AIpply se posiciona como um novo paradigma no acesso a oportunidades educacionais e profissionais — especialmente para jovens de países emergentes que geralmente têm menos acesso a curadoria e mentoria especializada.

`,
    role: "Founder, CEO & Lead Product Engineer",
    techStack: [
      "React Native",
      "Next.js",
      "Node.js",
      "Python",
      "Firebase Auth",
      "Firestore",
      "Firebase Storage",
      "PostgreSQL (Railway)",
      "Prisma",
      "Exa API",
      "Gemma 3B",
      "OpenAI API",
      "TailwindCSS",
    ],
    links: {
      site: "https://aipply.app",
    },
    images: [
      "https://images.unsplash.com/photo-1526379095098-aa3452e9e085?w=1200",
      "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=1200",
    ],
    metrics: [
      { label: "Oportunidades Catalogadas", value: "5.000+" },
      { label: "Redução no Tempo de Busca", value: "70%" },
      { label: "Usuários Atendidos na Fase Beta", value: "Milhares" },
    ],
  },
  {
    slug: "rearth",
    title: "Rearth",
    subtitle: "Agritech regenerativa baseada em IA, análises de solo e dados satelitais",
    type: "startup",
    year: 2023,
    tags: ["AgriTech", "ClimateTech", "AI", "Sustainability", "Satellite Imagery", "Regenerative Agriculture"],
    shortDescription:
      "Plataforma que auxilia agricultores na transição para práticas regenerativas através de análises de solo, dados satelitais, modelos climáticos e IA preditiva.",
    longDescription: `## Contexto

A agricultura regenerativa surge como alternativa às práticas convencionais, mas produtores têm dificuldade em medir impacto, monitorar a saúde do solo e comprovar ganhos de produtividade e carbono.

## Desafio

Criar um sistema capaz de:

- Processar dados de satélite e índices NDVI em alta frequência

- Integrar análises laboratoriais de solo e dados históricos

- Sugerir práticas regenerativas personalizadas

- Medir carbono, erosão, umidade e produtividade no campo

## Solução

O Rearth combina IA + geoprocessamento + ciência do solo para:

- Mapear propriedades usando imagens de satélite

- Acompanhar evolução do solo e vegetação

- Sugerir práticas regenerativas (rotações, cobertura, microbiologia)

- Prever impactos produtivos e climáticos

- Gerar relatórios auditáveis para certificações de carbono

## Destaques do estágio atual

- Finalista global do Hult Prize 2023 em Lisboa

- Selecionada na aceleradora ACE Cortex (SantanderX)

- Top 25 Agritechs do Brasil pela F6S

- Primeiros protótipos funcionais de análise satelital e dashboards

- Parcerias em estruturação com produtores do Maranhão e Paraná

## Resultados

- Redução de custos com insumos no campo piloto

- Aumento da saúde do solo (indicadores NDVI e matéria orgânica)

- Transparência ambiental para financiamentos sustentáveis

`,
    role: "Founder & CTO",
    techStack: [
      "Python",
      "FastAPI",
      "Next.js",
      "TensorFlow",
      "Geospatial APIs",
      "Sentinel Hub",
      "PostgreSQL",
      "QGIS",
    ],
    links: {
      site: "https://rearth.ag",
    },
    images: [],
    metrics: [
      { label: "Agritechs Reconhecidas", value: "Top 25 BR" },
      { label: "Produtores Pilotos", value: "Em implantação" },
      { label: "Acelerações", value: "3+" },
    ],
  },
  {
    slug: "sprouthub",
    title: "SproutHUB",
    subtitle: "Hub de inovação e matchmaking inteligente entre empreendedores e oportunidades",
    type: "startup",
    year: 2024,
    tags: ["Innovation", "Ecosystem", "AI", "Startup", "Networking"],
    shortDescription:
      "Hub híbrido (digital + físico) que conecta empreendedores a oportunidades de aceleração, networking, investidores e desenvolvimento profissional através de IA.",
    longDescription: `## Contexto

Cidades emergentes carecem de hubs de inovação que verdadeiramente conectem fundadores a redes, mentores, oportunidades e estrutura para crescer.

## Desafio

Criar um ambiente — físico e digital — capaz de:

- Mapear empreendedores e seus estágios

- Recomendar oportunidades (editais, acelerações, eventos)

- Conectar founders a outros founders

- Gerar comunidade e dealflow

## Solução

O SproutHUB combina:

- Mapa de empreendedores e startups locais

- Recomendação de oportunidades baseada em IA

- Espaço físico para encontros, workshops e comunidade

- Vagas, editais e mentorias integradas

- Programa de matchmaking ("Founder → Oportunidade")

## Estágio atual

- Versão 1 do MVP definida

- Interface móvel sendo redesenhada em NativeWind + React Native

- Backend e modelo de dados prontos para implementação

- Parcerias iniciais com universidades e comunidades locais

## Visão

Transformar cidades como São Luís e Curitiba em microecosistemas de inovação.

`,
    role: "Founder & Product Lead",
    techStack: [
      "React Native",
      "NativeWind",
      "Firebase",
      "Next.js",
      "Node.js",
      "PostgreSQL",
    ],
    links: {
      site: "https://sprout-hub.io",
    },
    images: [],
    metrics: [
      { label: "Iniciativas Parceiras", value: "10+" },
      { label: "Founders Mapeados", value: "Em fase inicial" },
      { label: "MVP", value: "Em desenvolvimento" },
    ],
  },
  {
    slug: "aspero",
    title: "ASPERO Industries",
    subtitle: "Telecom de nova geração com CubeSats resistentes à radiação para operação na Anomalia Magnética do Atlântico Sul",
    type: "startup",
    year: 2025,
    tags: ["SpaceTech", "Satellite", "Telecom", "Radiation Shielding", "Connectivity", "B2B/B2C"],
    shortDescription:
      "Provedora de internet via satélite focada em operar dentro da Anomalia Magnética do Atlântico Sul usando CubeSats blindados com tecnologia Z-shielding.",
    longDescription: `## Contexto

O Brasil depende majoritariamente de cabos submarinos internacionais. Apenas 4% da conectividade nacional vem de satélites — e muitos não resistem à radiação da Anomalia Magnética do Atlântico Sul (SAMA), causando falhas e perda de vida útil.

## Desafio

Criar uma constelação de CubeSats que:

- Operem dentro da região de maior radiação do planeta

- Suportem longa duração em LEO sem danos eletrônicos

- Entreguem conectividade confiável e acessível

- Atendam áreas rurais, Amazônia e regiões sem cobertura

## Solução

A ASPERO utiliza:

- Blindagem Z-shielding (multicamadas metálicas para proteção contra radiação)

- Arquitetura de telecom modular e escalável

- Estações em solo no Brasil + parceiro internacional

- Modelo de operação híbrido (B2B → operadoras / B2C → usuários finais)

## Estágio atual

- Pesquisa concluída sobre Z-shielding (bases NASA + MIT)

- Arquitetura inicial da constelação definida

- Casos de uso validados para:

  - Defesa

  - Operadoras regionais

  - Conectividade rural

  - Amazônia

- Fase de prototipagem com CubeSats marcada para iniciar validações

`,
    role: "Founder & Lead Systems Designer",
    techStack: [
      "CubeSat Architecture",
      "Radiation Modeling",
      "Material Engineering",
      "Satellite Simulation",
      "Python",
      "GNSS/Ground Stations",
    ],
    links: {
      site: "https://aspero.space",
    },
    images: [],
    metrics: [
      { label: "Custo por MB", value: "Reduzido" },
      { label: "Cobertura", value: "Regiões críticas da SAMA" },
      { label: "Fase", value: "Pré-prototipagem" },
    ],
  },
  {
    slug: "quickimovel",
    title: "QuickImóvel",
    subtitle: "Marketplace curado aliado a automação para corretores e compradores",
    type: "startup",
    year: 2024,
    tags: ["PropTech", "Marketplace", "Real Estate", "CRM", "Automation"],
    shortDescription:
      "Plataforma de imóveis altamente curada com gestão integrada para corretores, vitrines digitais, funil de vendas e experiência otimizada para compradores.",
    longDescription: `## Contexto

A busca por imóveis no Brasil é fragmentada, com portais genéricos, anúncios duplicados e pouca curadoria. Corretores carecem de ferramentas modernas para gestão digital.

## Desafio

Criar uma plataforma que ofereça:

- Experiência premium e curada para compradores

- Gestão completa para corretores (clientes, imóveis, leads)

- Pagamentos e comissionamento claro

- Diferenciação visual e narrativa confiável

## Solução

O QuickImóvel entrega:

- Vitrines profissionais de alto padrão

- Funil completo do corretor (captura → atendimento → fechamento)

- Curadoria manual de imóveis premium

- Ferramentas de anúncio, analytics e comunicação

## Estágio atual

- Identidade visual e copywriting profissional finalizados

- Política de privacidade e termos de uso prontos

- Estrutura de páginas em desenvolvimento (com sua orientação)

- Base tecnológica sendo definida para MVP (Next.js + Firebase)

## Visão

Construir o portal mais premium e confiável de imóveis exclusivos no Brasil.

`,
    role: "CMO & Product Owner",
    techStack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Firebase",
    ],
    links: {
      site: "https://quickimovel.com",
    },
    images: [],
    metrics: [
      { label: "Imóveis Curados", value: "Em expansão" },
      { label: "Feedback de Corretores", value: "Extremamente positivo" },
      { label: "Fase", value: "Pré-MVP" },
    ],
  },
];

