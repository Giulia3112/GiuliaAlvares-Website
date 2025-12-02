"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import Tag from "@/components/Tag";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const types = Array.from(new Set(projects.map((p) => p.type)));
  const tags = Array.from(new Set(projects.flatMap((p) => p.tags)));

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (selectedType && project.type !== selectedType) return false;
      if (selectedTag && !project.tags.includes(selectedTag)) return false;
      return true;
    });
  }, [selectedType, selectedTag]);

  return (
    <div className="pt-24 pb-section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Todos os Projetos</h1>
          <p className="text-xl text-text-secondary max-w-3xl">
            Uma coleção dos projetos que construí, dos produtos que lancei e das
            pesquisas que conduzi.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 space-y-6"
        >
          <div>
            <h3 className="text-sm font-medium text-text-secondary mb-3">
              Filtrar por tipo
            </h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedType(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedType === null
                    ? "bg-accent text-white"
                    : "bg-surface border border-surface/50 hover:bg-surface/50"
                }`}
              >
                Todos
              </button>
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                    selectedType === type
                      ? "bg-accent text-white"
                      : "bg-surface border border-surface/50 hover:bg-surface/50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-text-secondary mb-3">
              Filtrar por tag
            </h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedTag === null
                    ? "bg-accent text-white"
                    : "bg-surface border border-surface/50 hover:bg-surface/50"
                }`}
              >
                Todas
              </button>
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedTag === tag
                      ? "bg-accent text-white"
                      : "bg-surface border border-surface/50 hover:bg-surface/50"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-text-secondary text-lg">
              Nenhum projeto encontrado com os filtros selecionados.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

