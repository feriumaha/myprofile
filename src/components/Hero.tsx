"use client";

import CoreExpertise from "@/data/coreExpertise";
import { motion } from "framer-motion";

const coreExpertise = [
  "Scalable Web Application Architecture",
  "Internal & Enterprise System Development",
  "API Integration (H2H, Third-Party, Microservices)",
  "Relational Database Design (PostgreSQL/MySQL)",
];


export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-125 h-125 bg-cyan-500/20 blur-[120px] rounded-full -top-25 -left-25" />
      <div className="absolute w-100 h-100 bg-purple-600/20 blur-[120px] rounded-full -bottom-30 -right-20" />

      {/* Content */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text"
      >
        Feri Andriyanto Sandika
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-6 text-lg md:text-xl text-gray-400 max-w-xl"
      >
        Software Engineer who loves building fast, scalable, and
        beautifully crafted web applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-10 flex gap-4"
      >
       <CoreExpertise />
      </motion.div>
    </section>
  );
}
