# Portfólio Pessoal - Giulia Alvares

Website de portfólio pessoal moderno, tecnológico e minimalista, inspirado no design do The Pioneer VC. Construído com Next.js 14, TypeScript, Tailwind CSS e Framer Motion.

## 🚀 Características

- **Design Moderno**: Inspirado no site The Pioneer VC, com tipografia grande, seções numeradas (01/02/03), layout limpo e bastante espaço em branco
- **Animações Suaves**: Microanimações e transições usando Framer Motion
- **Totalmente Responsivo**: Funciona perfeitamente em mobile, tablet e desktop
- **Fácil de Atualizar**: Todo o conteúdo é gerenciado através de arquivos TypeScript em `data/`
- **Performance**: Otimizado com Next.js 14 App Router

## 📁 Estrutura do Projeto

```
├── app/                    # Páginas e rotas (Next.js App Router)
│   ├── page.tsx           # Página inicial
│   ├── projects/          # Páginas de projetos
│   └── layout.tsx         # Layout principal
├── components/            # Componentes reutilizáveis
│   ├── Layout.tsx
│   ├── SectionHeader.tsx
│   ├── ProjectCard.tsx
│   └── ...
├── data/                  # Dados do portfólio (FÁCIL DE EDITAR!)
│   ├── profile.ts         # Seu perfil pessoal
│   ├── projects.ts        # Seus projetos
│   ├── highlights.ts      # Prêmios e reconhecimentos
│   ├── journey.ts         # Seções "O que eu faço"
│   └── skills.ts          # Skills e tecnologias
└── styles/                # Estilos globais
```

## 🛠️ Instalação

1. **Clone o repositório** (ou use este diretório)

2. **Instale as dependências**:
   ```bash
   npm install
   # ou
   pnpm install
   # ou
   yarn install
   ```

3. **Execute o servidor de desenvolvimento**:
   ```bash
   npm run dev
   # ou
   pnpm dev
   # ou
   yarn dev
   ```

4. **Abra [http://localhost:3000](http://localhost:3000)** no seu navegador

## ✏️ Como Editar o Conteúdo

Todo o conteúdo do portfólio pode ser editado facilmente através dos arquivos em `data/`:

### 1. Perfil Pessoal (`data/profile.ts`)

Edite seu nome, headline, bio e links sociais:

```typescript
export const profile: Profile = {
  name: "Seu Nome",
  headline: "Sua headline aqui",
  bio: "Sua biografia...",
  links: {
    linkedin: "https://linkedin.com/in/seu-perfil",
    github: "https://github.com/seu-usuario",
    // ...
  },
};
```

### 2. Projetos (`data/projects.ts`)

Adicione, edite ou remova projetos no array `projects`:

```typescript
export const projects: Project[] = [
  {
    slug: "meu-projeto",
    title: "Título do Projeto",
    subtitle: "Subtítulo",
    type: "startup", // ou "app", "pesquisa", "case", "open-source"
    year: 2024,
    tags: ["AI", "SaaS"],
    shortDescription: "Descrição curta...",
    longDescription: "Descrição longa com markdown...",
    role: "Sua função no projeto",
    techStack: ["React", "TypeScript"],
    links: {
      site: "https://exemplo.com",
      repo: "https://github.com/exemplo",
    },
    images: ["url-da-imagem"],
  },
  // Adicione mais projetos aqui...
];
```

### 3. Destaques (`data/highlights.ts`)

Adicione prêmios, programas, conferências:

```typescript
export const highlights: Highlight[] = [
  {
    year: 2024,
    title: "Título do Destaque",
    description: "Descrição...",
    type: "award", // ou "program", "conference", "publication", "accomplishment"
    link: "https://exemplo.com", // opcional
  },
];
```

### 4. Jornada (`data/journey.ts`)

Edite as três seções "O que eu faço":

```typescript
export const journeySteps: JourneyStep[] = [
  {
    number: "01",
    title: "Título da Etapa",
    description: "Descrição...",
    bullets: ["Item 1", "Item 2"],
    details: "Detalhes expandidos...",
  },
];
```

### 5. Skills (`data/skills.ts`)

Organize suas habilidades por categoria:

```typescript
export const skills: SkillCategory[] = [
  {
    category: "Produto",
    skills: ["Skill 1", "Skill 2"],
  },
];
```

## 🎨 Personalização

### Cores

Edite as cores no arquivo `tailwind.config.js`:

```javascript
colors: {
  background: '#0a0a0a',      // Cor de fundo
  surface: '#141414',          // Cor de superfície
  accent: '#3b82f6',          // Cor de destaque (azul)
  'text-primary': '#ffffff',   // Texto principal
  'text-secondary': '#a3a3a3', // Texto secundário
}
```

### Fontes

A fonte atual é Inter (Google Fonts). Para mudar, edite `app/globals.css` e `tailwind.config.js`.

## 📦 Build para Produção

```bash
npm run build
npm start
```

## 🚢 Deploy

Este projeto pode ser facilmente deployado em:

- **Vercel** (recomendado para Next.js): Conecte seu repositório GitHub
- **Netlify**: Conecte seu repositório
- **Outros**: Qualquer plataforma que suporte Next.js

## 📝 Notas

- As imagens dos projetos estão usando URLs do Unsplash como placeholder. Substitua pelas suas próprias imagens.
- O link "Baixar CV" aponta para `/cv.pdf` - adicione seu CV na pasta `public/`.
- O formulário de contato na seção de contato precisa de um backend para funcionar. Por enquanto, é apenas visual.

## 🎯 Próximos Passos

1. Edite os arquivos em `data/` com suas informações
2. Adicione suas próprias imagens
3. Personalize as cores se desejar
4. Adicione seu CV em `public/cv.pdf`
5. Configure o formulário de contato (se necessário)

## 📄 Licença

Este projeto é de uso pessoal. Sinta-se livre para usar como base para seu próprio portfólio!

---

**Desenvolvido com ❤️ usando Next.js, TypeScript e Tailwind CSS**

