"use client";

import { motion } from "framer-motion";
import { Github, MessageCircle, ChevronDown } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />
        <Image
          src="https://github.com/Venom-DevX.png"
          alt="Venom Avatar"
          width={160}
          height={160}
          className="relative rounded-full border-2 border-border/50 glow-primary"
          priority
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 text-5xl md:text-7xl lg:text-8xl font-bold text-gradient text-center"
      >
        Venom
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 text-lg md:text-xl text-muted-foreground text-center max-w-2xl leading-relaxed text-balance"
      >
        Developer apaixonado por programação, segurança e engenharia reversa.
        Construindo ferramentas poderosas, sistemas de proteção e backends escaláveis.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="https://github.com/Venom-DevX"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-6 py-3 glass rounded-xl font-medium hover:bg-primary/20 transition-all duration-300 hover:-translate-y-0.5"
        >
          <Github size={20} />
          GitHub
        </a>
        <a
          href="https://discord.com/users/1126266231322837113"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-6 py-3 glass rounded-xl font-medium hover:bg-secondary/20 transition-all duration-300 hover:-translate-y-0.5"
        >
          <MessageCircle size={20} />
          Discord
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 w-full max-w-4xl"
      >
        <div className="relative overflow-hidden rounded-2xl border border-border/50 glow-primary">
          <Image
            src="https://cdn.discordapp.com/attachments/1460509276538802328/1482953581387579502/a51845e3f58f0753ae695fbe47dfda72.jpg?ex=69b8d3a5&is=69b78225&hm=6967504ebc643faf1c48d77f6da62e6ae5c8dd92a22bee41b2d9942cd7f78309&"
            alt="Banner"
            width={1100}
            height={320}
            className="w-full h-48 md:h-72 lg:h-80 object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-8 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} className="text-muted-foreground" />
      </motion.a>
    </section>
  );
}
