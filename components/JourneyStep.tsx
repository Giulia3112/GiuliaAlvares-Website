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
          {step.number}
        </div>
        <div className="flex-1">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{step.title}</h3>
          <p className="text-lg text-text-secondary mb-6">{step.description}</p>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {step.bullets.map((bullet, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
            className="flex items-start gap-3 text-text-secondary"
          >
            <span className="text-accent mt-2">•</span>
            <span>{bullet}</span>
          </motion.li>
        ))}
      </ul>

      {step.details && (
        <div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors"
          >
            <span className="font-medium">+ Detalhes</span>
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
                <p className="mt-4 text-text-secondary leading-relaxed">
                  {step.details}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
}

