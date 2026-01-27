"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Get In Touch
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-black/40 border border-cyan-500/20 rounded-xl p-8 font-mono text-sm text-gray-300 shadow-[0_0_30px_rgba(0,255,255,0.15)]"
      >
        <p className="text-green-400">$ initiate_connection.sh</p>
        <p className="mt-2">Connecting to Feri Andriyanto Sandika...</p>
        <p className="mt-2 text-cyan-400">Connection established ✔</p>

        <div className="mt-6 space-y-3">
          <a
            href="mailto:andikaferi10@gmail.com"
            className="flex items-center gap-3 hover:text-white transition"
          >
            <Mail size={16} /> andikaferi10@gmail.com
          </a>

          <a
            href="https://github.com/feriumaha"
            target="_blank"
            className="flex items-center gap-3 hover:text-white transition"
          >
            <Github size={16} /> github.com/feriumaha
          </a>

          <a
            href="https://www.linkedin.com/in/feri-andriyanto-sandika-7a8b43104/"
            target="_blank"
            className="flex items-center gap-3 hover:text-white transition"
          >
            <Linkedin size={16} /> linkedin.com/in/feri-andriyanto-sandika-7a8b43104/
          </a>
        </div>
      </motion.div>
    </section>
  );
}
