"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const coreExpertise = [
  "Fullstack Web Application Development",
  "Enterprise System & Internal Tools",
  "RESTful API & System Integration",
  "Database Design & Optimization",
];

export default function CoreExpertise() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-8 flex flex-wrap justify-center gap-3"
    >
      {coreExpertise.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs md:text-sm backdrop-blur-sm hover:scale-105 transition"
        >
          <Sparkles size={14} />
          {item}
        </div>
      ))}
    </motion.div>
  );
}
