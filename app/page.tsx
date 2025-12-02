"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Download, Mail, Linkedin, Github, Twitter } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import HighlightCard from "@/components/HighlightCard";
import JourneyStep from "@/components/JourneyStep";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { highlights } from "@/data/highlights";
import { journeySteps } from "@/data/journey";
import { skills } from "@/data/skills";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              {profile.headline}
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl">
              {profile.bio}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="px-8 py-4 bg-accent text-white rounded-lg font-medium hover:bg-accent-light transition-colors flex items-center gap-2"
              >
                Ver projetos
                <ArrowDown size={20} />
              </Link>
              <a
                href="/cv.pdf"
                download
                className="px-8 py-4 border border-surface rounded-lg font-medium hover:bg-surface transition-colors flex items-center gap-2"
              >
                <Download size={20} />
                Baixar CV
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={24} className="text-text-secondary" />
          </motion.div>
        </motion.div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-section">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="O que eu faço"
            subtitle="Uma jornada em três etapas: da ideia à execução"
            className="mb-16"
          />
          <div className="space-y-8">
            {journeySteps.map((step, index) => (
              <JourneyStep key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-section bg-surface/20">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Projetos em Destaque"
            subtitle="Alguns dos projetos que construí e nos quais trabalhei"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-medium"
            >
              Ver todos os projetos
              <ArrowDown size={20} className="rotate-[-90deg]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-section">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Skills & Stacks"
            subtitle="Tecnologias e habilidades que utilizo para construir produtos"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface/30 border border-surface/50 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-text-secondary text-sm flex items-center gap-2"
                    >
                      <span className="text-accent">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-section bg-surface/20">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Destaques & Reconhecimentos"
            subtitle="Prêmios, programas, conferências e conquistas"
            className="mb-16"
          />
          <div className="max-w-3xl">
            {highlights.map((highlight, index) => (
              <HighlightCard
                key={`${highlight.year}-${highlight.title}`}
                highlight={highlight}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              title="Vamos construir algo grande?"
              subtitle="Estou sempre aberta a conversar sobre projetos, parcerias e oportunidades."
              className="mb-12"
            />
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {profile.links.email && (
                <a
                  href={profile.links.email}
                  className="px-8 py-4 bg-accent text-white rounded-lg font-medium hover:bg-accent-light transition-colors flex items-center gap-2"
                >
                  <Mail size={20} />
                  Enviar email
                </a>
              )}
              {profile.links.linkedin && (
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-surface rounded-lg font-medium hover:bg-surface transition-colors flex items-center gap-2"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              )}
              {profile.links.github && (
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-surface rounded-lg font-medium hover:bg-surface transition-colors flex items-center gap-2"
                >
                  <Github size={20} />
                  GitHub
                </a>
              )}
              {profile.links.twitter && (
                <a
                  href={profile.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-surface rounded-lg font-medium hover:bg-surface transition-colors flex items-center gap-2"
                >
                  <Twitter size={20} />
                  Twitter
                </a>
              )}
            </div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-md mx-auto space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // Handle form submission
              }}
            >
              <input
                type="text"
                placeholder="Nome"
                required
                className="w-full px-4 py-3 bg-surface border border-surface/50 rounded-lg focus:outline-none focus:border-accent transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 bg-surface border border-surface/50 rounded-lg focus:outline-none focus:border-accent transition-colors"
              />
              <textarea
                placeholder="Mensagem"
                required
                rows={5}
                className="w-full px-4 py-3 bg-surface border border-surface/50 rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full px-8 py-4 bg-accent text-white rounded-lg font-medium hover:bg-accent-light transition-colors"
              >
                Enviar mensagem
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}

