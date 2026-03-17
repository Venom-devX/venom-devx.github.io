"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Linguagens",
    skills: [
      { name: "Lua / Luau", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express / Fastify", level: 85 },
      { name: "WebSocket", level: 85 },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "Git / GitHub", level: 88 },
      { name: "Docker", level: 75 },
    ],
  },
  {
    title: "Segurança",
    skills: [
      { name: "Reverse Engineering", level: 92 },
      { name: "Obfuscation", level: 95 },
      { name: "Anti-Tamper", level: 90 },
    ],
  },
];

const techStack = [
  "Lua",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express",
  "WebSocket",
  "PostgreSQL",
  "JWT",
  "Security",
  "Reverse Engineering",
  "Roblox",
  "Git",
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Stack Tecnológica
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold">
            Skills & <span className="text-gradient">Tecnologias</span>
          </h2>
        </motion.div>

        {/* Tech Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {techStack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              className="px-4 py-2 glass rounded-xl text-sm font-medium hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.1 }}
              className="glass p-6 rounded-2xl"
            >
              <h3 className="text-lg font-semibold mb-6 text-gradient">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
