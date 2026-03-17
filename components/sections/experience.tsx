"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    year: "2024 — Presente",
    title: "Lead Developer",
    company: "Lua Guardian",
    location: "Remoto",
    description:
      "Liderando o desenvolvimento de um sistema avançado de proteção e ofuscação para scripts Lua. Arquitetura de APIs, implementação de JWT, e criação de mecanismos anti-tamper.",
    tags: ["Node.js", "PostgreSQL", "Security", "Lua"],
    current: true,
  },
  {
    year: "2023 — 2024",
    title: "Developer & Maintainer",
    company: "Chaos Hub",
    location: "Remoto",
    description:
      "Desenvolvimento e manutenção de um dos maiores sistemas client para Roblox Brookhaven. Atingiu +1M de execuções e uma comunidade de +8K membros no Discord.",
    tags: ["Lua", "Roblox", "Community", "Performance"],
  },
  {
    year: "2023",
    title: "Backend Developer",
    company: "EduPanel",
    location: "Remoto",
    description:
      "Criação de uma API completa para gerenciamento escolar com autenticação segura, RBAC e sistema de auditoria. Foco em segurança e escalabilidade.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
  },
  {
    year: "2022 — 2023",
    title: "Security Researcher",
    company: "Freelance",
    location: "Remoto",
    description:
      "Pesquisa e desenvolvimento de técnicas de proteção contra engenharia reversa para scripts Lua/Luau. Análise de vulnerabilidades e criação de soluções de ofuscação.",
    tags: ["Security", "Reverse Engineering", "Lua"],
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 relative" ref={ref}>
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Trajetória
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold">
            Minha <span className="text-gradient">Experiência</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 -translate-x-1/2 mt-2 z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 pl-8 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl hover:bg-primary/5 transition-colors group">
                    {/* Year Badge */}
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 ${
                        index % 2 === 0 ? "md:ml-auto" : ""
                      }`}
                    >
                      <Calendar size={14} />
                      {exp.year}
                    </div>

                    {/* Title & Company */}
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-gradient transition-all">
                      {exp.title}
                    </h3>
                    <div
                      className={`flex items-center gap-4 text-muted-foreground text-sm mb-4 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Tags */}
                    <div
                      className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-lg bg-card text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
