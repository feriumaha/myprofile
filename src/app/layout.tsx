import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feri Andriyanto Sandika - Software Engineer",
  description: "Personal Website of Feri Andriyanto Sandika",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrains.className} bg-[#0B0F19] text-white`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
