"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { Github, ExternalLink, Lock } from "lucide-react";

const categoryStyles: Record<string, string> = {
  "Enterprise System":
    "bg-red-500/10 text-red-300 border border-red-400/20",
  "Freelance Project":
    "bg-yellow-500/10 text-yellow-300 border border-yellow-400/20",
  "Internal System":
    "bg-blue-500/10 text-blue-300 border border-blue-400/20",
  "Personal Project":
    "bg-green-500/10 text-green-300 border border-green-400/20",
  "Startup Product":
    "bg-pink-500/10 text-pink-300 border border-pink-400/20",
};


export default function Projects() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const isSekarBumi = project.clients.some(client =>
            client.toLowerCase().includes("sekar bumi")
          );

          const showLinks = !isSekarBumi && (project.github || project.live);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,255,255,0.25)] transition flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.categories.map((cat, i) => (
                    <span
                      key={i}
                      className={`text-[10px] px-2 py-1 rounded-md ${categoryStyles[cat]}`}
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.clients.map((client, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-400/20"
                    >
                      {client}
                    </span>
                  ))}
                </div>

                <p className="mt-3 text-sm text-gray-400">
                  {project.description}
                </p>

                {project.impact && (
                  <ul className="mt-4 space-y-1 text-xs text-gray-300">
                    {project.impact.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* LINK / STATUS AREA */}
              {showLinks ? (
                <div className="flex gap-4 mt-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 transition"
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-2 mt-6 text-sm text-gray-500 italic">
                  <Lock size={16} /> Under NDA — repository & live demo unavailable
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
