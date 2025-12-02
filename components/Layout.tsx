"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#about", label: "Sobre" },
    { href: "/#journey", label: "Jornada" },
    { href: "/#projects", label: "Projetos" },
    { href: "/#highlights", label: "Destaques" },
    { href: "/#contact", label: "Contato" },
  ];

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-surface"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            {profile.name.split(" ")[0]}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/projects"
              className="text-sm hover:text-accent transition-colors"
            >
              Todos os Projetos
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-surface border-t border-surface/50"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/projects"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm hover:text-accent transition-colors"
              >
                Todos os Projetos
              </Link>
            </div>
          </motion.div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-surface mt-section py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-text-secondary text-sm">
              © {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              {profile.links.linkedin && (
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              )}
              {profile.links.github && (
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors"
                >
                  GitHub
                </a>
              )}
              {profile.links.twitter && (
                <a
                  href={profile.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors"
                >
                  Twitter
                </a>
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

