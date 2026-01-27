import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="bg-[#0B0F19] text-white">
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
