"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Code2,
  Database,
  Server,
  Globe,
  Cpu,
  Cloud,
  Boxes,
  CodeSquare,
} from "lucide-react";

const techStack = [
  {
    category: "Frontend Development",
    items: [
      { name: "React", icon: Atom },
      { name: "Next.js", icon: Globe },
      { name: "Angular", icon: Code2 },
      { name: "TypeScript", icon: Code2 },
      { name: "jQuery", icon: Code2 },
      { name: "EJS", icon: Code2 },
      { name: "Vite", icon: Code2 },
      { name: "Axios", icon: Code2 },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Server },
      { name: "Golang", icon: Code2 },
      { name: "PHP", icon: Code2 },
      { name: "Python", icon: Code2 },
      { name: "Java", icon: CodeSquare },
    ],
  },
  {
    category: "Mobile Development",
    items: [{ name: "Flutter", icon: CodeSquare }],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", icon: Database },
      { name: "MySQL", icon: Database },
    ],
  },
  {
    category: "DevOps & Infrastructure",
    items: [
      { name: "Docker", icon: Boxes },
      { name: "Podman", icon: Boxes },
      { name: "Cloud Deployment", icon: Cloud },
      { name: "Linux Server", icon: Cpu },
    ],
  },
  {
    category: "System Integration",
    items: [
      { name: "RESTful API Development", icon: Globe },
      { name: "Third-party API Integration", icon: Globe },
      { name: "Host-to-Host Integration", icon: Globe },
    ],
  },
];


export default function TechStack() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto" id="tech">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Technical Skills
      </motion.h2>

      <div className="space-y-14">
        {techStack.map((group, gIndex) => (
          <motion.div
            key={gIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: gIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-6 text-center md:text-left">
              {group.category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {group.items.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="group p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.25)] transition"
                  >
                    <Icon className="w-8 h-8 mx-auto text-cyan-400 group-hover:scale-110 transition" />
                    <p className="mt-3 text-xs text-center text-gray-300 group-hover:text-white">
                      {tech.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
