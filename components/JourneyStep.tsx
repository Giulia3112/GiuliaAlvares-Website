"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { JourneyStep as JourneyStepType } from "@/data/journey";

interface JourneyStepProps {
  step: JourneyStepType;
  index: number;
}

export default function JourneyStep({ step, index }: JourneyStepProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="border border-surface/50 rounded-lg p-8 bg-surface/30 hover:bg-surface/50 transition-all duration-300"
    >
      <div className="flex items-start gap-6 mb-6">
        <div className="text-accent text-6xl md:text-8xl font-bold leading-none">
          {step.id}
        </div>
        <div className="flex-1">
          <h3 className="text-3xl md:text-4xl font-bold mb-3">{step.title}</h3>
          <p className="text-xl text-accent/80 mb-4 font-medium">{step.subtitle}</p>
          <p className="text-lg text-text-secondary mb-6 leading-relaxed">{step.shortDescription}</p>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {step.highlights.map((highlight, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
            className="flex items-start gap-3 text-text-secondary"
          >
            <span className="text-accent mt-2">•</span>
            <span>{highlight}</span>
          </motion.li>
        ))}
      </ul>

      {step.longDescription && (
        <div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors"
          >
            <span className="font-medium">+ Ler mais</span>
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 text-text-secondary leading-relaxed whitespace-pre-line prose prose-invert max-w-none">
                  {step.longDescription.split("\n").map((paragraph, i) => {
                    if (paragraph.trim() === "") {
                      return <br key={i} />;
                    }
                    if (paragraph.startsWith("### ")) {
                      return (
                        <h3 key={i} className="text-xl font-bold mt-6 mb-3 text-text-primary">
                          {paragraph.replace("### ", "")}
                        </h3>
                      );
                    }
                    // Processar texto com **bold**
                    const processedParagraph = paragraph.split(/(\*\*.*?\*\*)/g).map((part, j) => {
                      if (part.startsWith("**") && part.endsWith("**")) {
                        return (
                          <strong key={j} className="text-text-primary font-semibold">
                            {part.replace(/\*\*/g, "")}
                          </strong>
                        );
                      }
                      return part;
                    });
                    return (
                      <p key={i} className="mb-3">
                        {processedParagraph}
                      </p>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
}

