"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ExternalLink,
  Github,
  Copy,
  Check,
  Play,
  Users,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Chaos Hub Brookhaven",
    description:
      "Sistema client de larga escala desenvolvido para um jogo Roblox de alto tráfego, com +1M de execuções, focando em performance, arquitetura modular e otimização runtime.",
    tags: ["Lua", "Roblox", "High Performance"],
    stats: [
      { label: "Execuções", value: "1M+" },
      { label: "Discord", value: "8K+" },
    ],
    links: {
      showcase: "https://youtu.be/lGgzmvKEGbI",
    },
    loadstring:
      'loadstring(game:HttpGet("https://raw.githubusercontent.com/Venom-devX/ChaosHub/main/loader.lua"))();',
    featured: true,
  },
  {
    title: "Lua Guardian",
    description:
      "Sistema avançado de ofuscação e proteção anti-hooking em runtime para scripts Lua.",
    tags: ["Node.js", "Express", "JWT", "PostgreSQL", "Security", "Luau"],
    links: {
      website: "https://lua-guardian.shardweb.app/",
    },
    featured: true,
  },
  {
    title: "Chat System",
    description:
      "Backend WebSocket customizado com handling de requisições modular e arquitetura escalável.",
    tags: ["Node.js", "TypeScript", "WebSocket"],
    links: {
      github: "https://github.com/Venom-DevX/ChatSystem",
    },
    openSource: true,
  },
  {
    title: "Luau Protection Solutions",
    description:
      "Técnicas e soluções para proteger scripts Lua contra engenharia reversa e análise.",
    tags: ["Luau", "Security", "Research"],
  },
  {
    title: "EduPanel",
    description:
      "API de gerenciamento escolar segura com autenticação, controle de acesso RBAC e logging de auditoria.",
    tags: ["Node.js", "PostgreSQL", "JWT", "RBAC"],
    links: {
      website: "https://frontend-school-system-1l9d.vercel.app/",
    },
  },
];

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (project.loadstring) {
      await navigator.clipboard.writeText(project.loadstring);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className={cn(
        "group relative glass rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]",
        project.featured && "md:col-span-2 lg:col-span-1"
      )}
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />

      <div className="relative p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-semibold group-hover:text-gradient transition-all">
              {project.title}
            </h3>
            {project.openSource && (
              <span className="px-2 py-1 text-xs font-medium rounded-md bg-green-500/20 text-green-400">
                Open Source
              </span>
            )}
          </div>
          {project.featured && (
            <Sparkles size={20} className="text-primary shrink-0" />
          )}
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        {/* Stats */}
        {project.stats && (
          <div className="flex gap-3 mb-4">
            {project.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10"
              >
                <Users size={14} className="text-primary" />
                <span className="text-xs font-medium text-primary">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-lg bg-card text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mb-4">
          {project.links?.showcase && (
            <a
              href={project.links.showcase}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Play size={16} />
              Showcase
            </a>
          )}
          {project.links?.website && (
            <a
              href={project.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
            >
              <ExternalLink size={16} />
              Ver Site
            </a>
          )}
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
          )}
        </div>

        {/* Loadstring */}
        {project.loadstring && (
          <div className="mt-auto p-3 rounded-xl bg-background/50 border border-border/50">
            <div className="flex items-center justify-between gap-2">
              <code className="text-xs text-primary font-mono truncate flex-1">
                {project.loadstring}
              </code>
              <button
                onClick={handleCopy}
                className="shrink-0 p-2 rounded-lg bg-primary/20 hover:bg-primary/30 transition-colors"
                aria-label="Copy loadstring"
              >
                {copied ? (
                  <Check size={14} className="text-green-400" />
                ) : (
                  <Copy size={14} className="text-primary" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold">
            Projetos em <span className="text-gradient">Destaque</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
