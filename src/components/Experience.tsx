"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/experiences";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Work Experience
      </motion.h2>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-white/5 border border-white/10"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-400/20">
                <Briefcase className="text-cyan-300" size={22} />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">
                  {exp.role}
                </h3>
                <p className="text-sm text-gray-400">
                  {exp.company} • {exp.type}
                </p>
                <p className="text-xs text-gray-500 mt-1">{exp.period}</p>

                <ul className="mt-4 space-y-2 text-sm text-gray-300 list-disc list-inside">
                  {exp.points.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
