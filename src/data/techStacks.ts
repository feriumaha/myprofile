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

export const techStacks = [
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", icon: Atom },
      { name: "Next.js", icon: Globe },
      { name: "Angular", icon: Code2 },
      { name: "TypeScript", icon: Code2 },
      { name: "jQuery", icon: Code2 },
      { name: "EJS", icon: Code2 },
      { name: "Vite.js", icon: Code2 },
      { name: "Vue.js", icon: Code2 },
      { name: "Axios", icon: Code2 },
      { name: "Tailwind CSS", icon: CodeSquare },
      { name: "Bootstrap", icon: CodeSquare },
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