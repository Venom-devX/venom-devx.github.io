"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock, Tag } from "lucide-react";

const blogPosts = [
  {
    title: "Técnicas Avançadas de Ofuscação em Lua",
    excerpt:
      "Explorando métodos modernos de proteção de código Lua contra engenharia reversa, incluindo control flow flattening e string encryption.",
    date: "15 Mar 2026",
    readTime: "8 min",
    tags: ["Security", "Lua"],
    slug: "#",
    featured: true,
  },
  {
    title: "Construindo APIs Escaláveis com Node.js",
    excerpt:
      "Boas práticas para criar backends que aguentam milhões de requisições, desde arquitetura até otimização de queries.",
    date: "28 Fev 2026",
    readTime: "12 min",
    tags: ["Node.js", "Backend"],
    slug: "#",
  },
  {
    title: "WebSocket: Comunicação em Tempo Real",
    excerpt:
      "Guia completo sobre implementação de sistemas real-time com WebSocket, incluindo autenticação e handling de reconexão.",
    date: "10 Fev 2026",
    readTime: "10 min",
    tags: ["WebSocket", "Real-time"],
    slug: "#",
  },
  {
    title: "Segurança em Aplicações Roblox",
    excerpt:
      "Como proteger seus scripts e sistemas contra exploits comuns no ecossistema Roblox.",
    date: "25 Jan 2026",
    readTime: "6 min",
    tags: ["Roblox", "Security"],
    slug: "#",
  },
];

export function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-24 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Blog
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold">
            Últimos <span className="text-gradient">Artigos</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Compartilhando conhecimento sobre desenvolvimento, segurança e as
            tecnologias que uso no dia a dia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`group glass rounded-2xl overflow-hidden hover:bg-primary/5 transition-all duration-300 ${
                post.featured ? "md:col-span-2" : ""
              }`}
            >
              <a href={post.slug} className="block p-6">
                <div className="flex flex-col h-full">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-semibold mb-3 group-hover:text-gradient transition-all ${
                      post.featured ? "text-2xl" : "text-xl"
                    }`}
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <Tag size={14} className="text-muted-foreground" />
                      <div className="flex gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Ler mais
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
