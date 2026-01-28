"use client";

import { techStacks } from "@/data/techStacks";
import { motion } from "framer-motion";

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
        {techStacks.map((group, gIndex) => (
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
