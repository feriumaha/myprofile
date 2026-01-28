"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

function useTypewriter(text: string, start: boolean, speed = 25) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!start) return;

    let i = 0;
    setDisplayed("");
    setDone(false);

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, start]);

  return { displayed, done };
}


export default function Contact() {
  const [startLine2, setStartLine2] = useState(false);
  const [startLine3, setStartLine3] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const line1 = useTypewriter("$ initiate_connection.sh", true, 30);
  const line2 = useTypewriter(
    "Connecting to Feri Andriyanto Sandika...",
    startLine2,
    25
  );
  const line3 = useTypewriter("Connection established ✔", startLine3, 25);

  useEffect(() => {
    if (line1.done) setTimeout(() => setStartLine2(true), 400);
  }, [line1.done]);

  useEffect(() => {
    if (line2.done) setTimeout(() => setStartLine3(true), 400);
  }, [line2.done]);

  useEffect(() => {
    if (line3.done) setTimeout(() => setShowLinks(true), 500);
  }, [line3.done]);


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
        <p className="text-green-400">
          {line1.displayed}
          <span className="animate-pulse">|</span>
        </p>

        {startLine2 && <p className="mt-2">{line2.displayed}</p>}
        {startLine3 && <p className="mt-2 text-cyan-400">{line3.displayed}</p>}


        {showLinks && (
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

            <a
              href="https://www.instagram.com/feriinformatika/"
              target="_blank"
              className="flex items-center gap-3 hover:text-white transition"
            >
              <Instagram size={16} /> instagram.com/feriinformatika
            </a>
          </div>
        )}
      </motion.div>
    </section>
  );
}
