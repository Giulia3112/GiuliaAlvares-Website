"use client";

import { motion } from "framer-motion";
import { Highlight } from "@/data/highlights";
import { Award, Calendar, Presentation, BookOpen, Trophy } from "lucide-react";

interface HighlightCardProps {
  highlight: Highlight;
  index?: number;
}

const iconMap = {
  award: Award,
  program: Calendar,
  conference: Presentation,
  publication: BookOpen,
  accomplishment: Trophy,
};

export default function HighlightCard({
  highlight,
  index = 0,
}: HighlightCardProps) {
  const Icon = iconMap[highlight.type];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex gap-6 pb-8 border-b border-surface/50 last:border-0"
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-surface border border-surface/50 flex items-center justify-center">
          <Icon size={20} className="text-accent" />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-accent font-bold text-lg">{highlight.year}</span>
          {highlight.link && (
            <a
              href={highlight.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent text-sm transition-colors"
            >
              Ver →
            </a>
          )}
        </div>
        <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
        <p className="text-text-secondary">{highlight.description}</p>
      </div>
    </motion.div>
  );
}

