"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Shield, Server, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Código limpo, bem estruturado e de fácil manutenção",
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Especialista em proteção e anti-engenharia reversa",
  },
  {
    icon: Server,
    title: "Backend",
    description: "APIs escaláveis e sistemas de alta performance",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Otimização e arquitetura focada em velocidade",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Sobre Mim
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold">
            Quem é <span className="text-gradient">Venom</span>?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou um desenvolvedor focado em sistemas backend, segurança e engenharia reversa.
              Comecei a programar através de jogos e rapidamente me apaixonei por construir
              sistemas complexos, mecanismos de proteção e backends escaláveis.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hoje desenvolvo ferramentas, APIs e sistemas de segurança principalmente para
              Roblox e plataformas web, sempre focando em performance, arquitetura sólida
              e proteção contra engenharia reversa.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 glass rounded-full text-sm font-medium">
                +1M execuções
              </span>
              <span className="px-4 py-2 glass rounded-full text-sm font-medium">
                +8K membros Discord
              </span>
              <span className="px-4 py-2 glass rounded-full text-sm font-medium">
                Open Source
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="group p-6 glass rounded-2xl hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
