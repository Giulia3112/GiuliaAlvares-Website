"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";
import Tag from "./Tag";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="bg-surface border border-surface/50 rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300 h-full flex flex-col">
          {project.images && project.images.length > 0 && (
            <div className="relative w-full h-48 md:h-64 overflow-hidden">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
          )}
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-text-muted uppercase">
                    {project.type}
                  </span>
                  <span className="text-text-muted">·</span>
                  <span className="text-xs text-text-muted">{project.year}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-text-secondary mb-1">
                  {project.subtitle}
                </p>
              </div>
            </div>
            <p className="text-text-secondary text-sm mb-4 flex-1">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <div className="flex items-center text-accent text-sm font-medium group-hover:gap-2 transition-all">
              Ver detalhes
              <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

