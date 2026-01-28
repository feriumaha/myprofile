"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import CVDocument from "./cv/CVDocument";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then(mod => mod.PDFDownloadLink),
  { ssr: false }
);

export default function DownloadCVButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-sm animate-pulse">
        Preparing CV...
      </button>
    );
  }

  return (
    <PDFDownloadLink
      document={
        <CVDocument />
      }
      fileName="Feri-Andriyanto-Sandika-CV.pdf"
      className="px-5 py-2.5 rounded-lg bg-cyan-500/20 border border-cyan-400 text-cyan-300 hover:bg-cyan-500/30 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] active:scale-95 transition-all text-sm font-medium"
    >
      {({ loading }) =>
        loading ? "Generating PDF..." : "Download CV (PDF)"
      }
    </PDFDownloadLink>
  );
}
