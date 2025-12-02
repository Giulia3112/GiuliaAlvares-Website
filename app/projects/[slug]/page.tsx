import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import Tag from "@/components/Tag";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24 pb-section">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Voltar para projetos
        </Link>

        {/* Hero */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm text-text-muted uppercase">{project.type}</span>
            <span className="text-text-muted">·</span>
            <span className="text-sm text-text-muted">{project.year}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-text-secondary mb-6">{project.subtitle}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          {(project.links.site || project.links.repo || project.links.article) && (
            <div className="flex flex-wrap gap-4">
              {project.links.site && (
                <a
                  href={project.links.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-light transition-colors"
                >
                  <ExternalLink size={18} />
                  Ver site
                </a>
              )}
              {project.links.repo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-surface rounded-lg hover:bg-surface transition-colors"
                >
                  <Github size={18} />
                  Repositório
                </a>
              )}
              {project.links.article && (
                <a
                  href={project.links.article}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-surface rounded-lg hover:bg-surface transition-colors"
                >
                  <ExternalLink size={18} />
                  Artigo
                </a>
              )}
            </div>
          )}
        </div>

        {/* Images */}
        {project.images && project.images.length > 0 && (
          <div className="mb-12 space-y-4">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`${project.title} - Imagem ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
        )}

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {project.metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-surface border border-surface/50 rounded-lg p-6 text-center"
              >
                <div className="text-3xl font-bold text-accent mb-2">
                  {metric.value}
                </div>
                <div className="text-text-secondary text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Description */}
        <div className="prose prose-invert max-w-none mb-12">
          <div className="text-text-secondary whitespace-pre-line leading-relaxed">
            {project.longDescription.split("\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={index}
                    className="text-2xl font-bold mt-8 mb-4 text-text-primary"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.trim() === "") {
                return <br key={index} />;
              }
              return (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Minha Função</h3>
            <p className="text-text-secondary">{project.role}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

