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
  },
  {
    id: 4,
    title: "Vertex Commerce",
    category: "E-commerce",
    description: "Headless e-commerce solution with seamless checkout, inventory management, and multi-currency support.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
    color: "#f97316",
    tags: ["Next.js", "Stripe", "Prisma", "Tailwind"],
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const leftPanelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const rightPanelsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = wrapperRef.current;
      const leftPanels = leftPanelsRef.current.filter(Boolean);
      const rightPanels = rightPanelsRef.current.filter(Boolean);

      if (!wrapper || leftPanels.length < 2) return;

      // Estado inicial
      gsap.set([leftPanels.slice(1), rightPanels.slice(1)], { y: "100vh" });
      gsap.set([leftPanels[0], rightPanels[0]], { y: 0, zIndex: 10 });

      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
          invalidateOnRefresh: true,
        }
      });

      projects.forEach((_, i) => {
        if (i === projects.length - 1) return;

        const cL = leftPanels[i];
        const cR = rightPanels[i];
        const nL = leftPanels[i + 1];
        const nR = rightPanels[i + 1];

        // FASE 1: Entra el siguiente panel derecho
        masterTl.to(nR, { 
          y: 0, 
          duration: 1.5, 
          ease: "none",
          onStart: () => gsap.set(nR, { zIndex: 30 })
        });

        // FASE 2: El SWAP (Entra el siguiente izquierdo, sale el actual izquierdo)
        // Eliminamos el gap: El swap empieza justo cuando la Fase 1 termina
        masterTl.to(cL, { 
          y: "-100vh", 
          duration: 1.5, 
          ease: "none",
          onUpdate: function() {
            if (this.progress() > 0.5) {
              gsap.set(nL, { zIndex: 20 });
              gsap.set(cL, { zIndex: 5 });
            }
          }
        })
        .to(nL, { 
          y: 0, 
          duration: 1.5, 
          ease: "none" 
        }, "<");

        // FASE 3: Sale el panel derecho anterior
        // Solapamos un poco la salida con el final del swap para eliminar aire
        masterTl.to(cR, { 
          y: "-100vh", 
          duration: 1.5, 
          ease: "none" 
        }, ">-0.3");
      });

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={wrapperRef} 
      className="relative bg-[#F2F2F0] dark:bg-[#050505] transition-colors duration-700"
      style={{ height: `${projects.length * 400}vh` }} // Reducido de 500vh a 400vh para más densidad
    >
      <div 
        ref={viewportRef}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={project.id} className="absolute inset-0 w-full h-full flex">
              {/* COLUMNA IZQUIERDA */}
              <div 
                ref={(el) => { leftPanelsRef.current[index] = el; }}
                className="w-1/2 h-full absolute top-0 left-0 overflow-hidden bg-background"
              >
                {isEven ? <ContentPanel project={project} index={index} /> : <ImagePanel project={project} />}
              </div>

              {/* COLUMNA DERECHA */}
              <div 
                ref={(el) => { rightPanelsRef.current[index] = el; }}
                className="w-1/2 h-full absolute top-0 right-0 overflow-hidden bg-background border-l border-foreground/5"
              >
                {!isEven ? <ContentPanel project={project} index={index} /> : <ImagePanel project={project} />}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ContentPanel({ project, index }: { project: Project; index: number }) {
  return (
    <div className="w-full h-full flex flex-col justify-center px-[2em] lg:px-[8em]">
      <div className="max-w-xl">
        <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-foreground/30 mb-8 block">
          Project {String(index + 1).padStart(2, '0')}
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-10 leading-[0.85] text-black dark:text-white">
          {project.title}
        </h2>
        <div className="w-20 h-[1px] bg-foreground/20 mb-10" />
        <p className="text-base md:text-lg text-foreground/60 leading-relaxed mb-12 max-w-sm font-medium">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-14">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-[9px] font-mono uppercase tracking-widest border border-foreground/10 rounded-full opacity-60">
              {tag}
            </span>
          ))}
        </div>
        <a href={project.link} className="group flex items-center gap-6">
          <div className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-700">
            <ArrowUpRight size={20} />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity">Case_Study</span>
        </a>
      </div>
    </div>
  );
}

function ImagePanel({ project }: { project: Project }) {
  return (
    <div className="w-full h-full p-8 lg:p-24 bg-background">
      <div className="w-full h-full relative overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-black/5 mix-blend-overlay" />
        <div className="absolute top-8 right-8 font-mono text-[9px] uppercase tracking-[0.5em] text-black/20 dark:text-white/20 mix-blend-difference">
          ID_{project.id.toString().padStart(3, '0')}
        </div>
      </div>
    </div>
  );
}