"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  number?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({
  number,
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {number && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-accent text-6xl md:text-8xl font-bold mb-4 opacity-20"
        >
          {number}
        </motion.div>
      )}
      <h2 className="text-4xl md:text-6xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-xl md:text-2xl text-text-secondary max-w-3xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

