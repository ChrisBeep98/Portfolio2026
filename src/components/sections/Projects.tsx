"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Github } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  color: string;
  tags: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Nexus Platform",
    category: "Web Application",
    description: "A comprehensive SaaS platform for team collaboration with real-time features, analytics dashboard, and AI-powered insights.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    color: "#a855f7",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "AI"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Aura Design System",
    category: "Design System",
    description: "A comprehensive design system with 50+ components, tokens, and documentation for enterprise applications.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop",
    color: "#06b6d4",
    tags: ["React", "Storybook", "Figma", "Design Tokens"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Pulse Analytics",
    category: "Data Visualization",
    description: "Real-time data visualization dashboard for monitoring business metrics with interactive charts and reports.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    color: "#ec4899",
    tags: ["D3.js", "Vue", "Node.js", "WebSocket"],
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = panelsRef.current.filter(Boolean);
      
      panels.forEach((panel, i) => {
        if (i === 0) return; // El primero ya está visible

        gsap.fromTo(panel, 
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "top top",
              scrub: true,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-background">
      {projects.map((project, index) => (
        <div 
          key={project.id}
          ref={(el) => { panelsRef.current[index] = el; }}
          className="sticky top-0 h-screen w-full overflow-hidden bg-background"
        >
          <ProjectPanel project={project} index={index} />
        </div>
      ))}
    </section>
  );
}

function ProjectPanel({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <div className="h-full w-full flex flex-col md:flex-row bg-background">
      {/* Lado del Contenido */}
      <div className={`flex-1 flex flex-col justify-center px-[2em] lg:px-[7em] py-20 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <div className="max-w-xl">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-foreground/40 mb-4 block">
            Project {String(index + 1).padStart(2, '0')}
          </span>
          
          <span 
            className="inline-block text-[10px] font-mono uppercase tracking-[0.4em] mb-6 px-3 py-1 border border-current rounded-full"
            style={{ color: project.color }}
          >
            {project.category}
          </span>
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 leading-[0.9]">
            {project.title}
          </h2>
          
          <p className="text-lg text-foreground/60 leading-relaxed mb-10 max-w-md">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-3 mb-12">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-4 py-1.5 text-[9px] font-mono uppercase tracking-widest bg-foreground/5 rounded-full border border-foreground/10"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-8">
            <a href={project.link} className="group flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest border-b border-foreground/20 pb-1 group-hover:border-foreground transition-colors">View Project</span>
              <div className="w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                <ArrowUpRight size={14} />
              </div>
            </a>
            <a href={project.github} className="text-foreground/40 hover:text-foreground transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Lado de la Imagen */}
      <div className={`flex-1 relative overflow-hidden ${isEven ? 'md:order-2' : 'md:order-1'}`}>
        <div className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-1000 group">
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/20" />
        </div>
      </div>
    </div>
  );
}