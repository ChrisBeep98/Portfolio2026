"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  lightBg: string;
  darkBg: string;
  accent: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Nexus Platform",
    category: "Web Application",
    description: "A comprehensive SaaS platform for team collaboration with real-time features, analytics dashboard, and AI-powered insights.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    lightBg: "#F3E8FF", 
    darkBg: "#2E1065",  
    accent: "#a855f7",
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
    lightBg: "#CFFAFE", 
    darkBg: "#083344",  
    accent: "#06b6d4",
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
    lightBg: "#FCE7F3", 
    darkBg: "#500724",  
    accent: "#ec4899",
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
    lightBg: "#FFEDD5", 
    darkBg: "#431407",  
    accent: "#f97316",
    tags: ["Next.js", "Stripe", "Prisma", "Tailwind"],
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const desktopLeftRefs = useRef<(HTMLDivElement | null)[]>([]);
  const desktopRightRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => setIsDark(document.documentElement.classList.contains("dark"));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const mm = gsap.matchMedia();

    // --- DESKTOP LOGIC: Split Scroll ---
    mm.add("(min-width: 768px)", () => {
      const leftPanels = desktopLeftRefs.current.filter(Boolean);
      const rightPanels = desktopRightRefs.current.filter(Boolean);

      // Initial setup
      gsap.set([leftPanels.slice(1), rightPanels.slice(1)], { y: "100vh" });
      gsap.set([leftPanels[0], rightPanels[0]], { y: 0, zIndex: 10 });

      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

      projects.forEach((_, i) => {
        if (i === projects.length - 1) return;
        
        const cL = leftPanels[i], cR = rightPanels[i];
        const nL = leftPanels[i+1], nR = rightPanels[i+1];

        masterTl
          .to(nR, { y: 0, duration: 1, ease: "none", onStart: () => { gsap.set(nR, { zIndex: 30 }); } })
          .to(cL, { 
            y: "-100vh", duration: 1, ease: "none", 
            onUpdate: function() { 
              if (this.progress() > 0.5) { 
                gsap.set([nL, nR], { zIndex: 20 }); 
                gsap.set([cL, cR], { zIndex: 5 }); 
              } 
            } 
          }, ">-0.4")
          .to(nL, { y: 0, duration: 1, ease: "none" }, "<")
          .to(cR, { y: "-100vh", duration: 1, ease: "none" }, ">-0.5");
      });
    });

    // --- MOBILE LOGIC: Stacked Cards (Refined Depth) ---
    mm.add("(max-width: 767px)", () => {
      const cards = gsap.utils.toArray(".mobile-project-card") as HTMLElement[];
      
      cards.forEach((card, i) => {
        const inner = card.querySelector(".mobile-card-inner") as HTMLElement;
        const dimmer = card.querySelector(".mobile-card-dimmer") as HTMLElement;
        
        // 1. Entrance: Clean radius transition
        if (i > 0) {
          gsap.to(inner, {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            force3D: true,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 20%",
              end: "top 0%",
              scrub: true,
            }
          });
        } else {
          gsap.set(inner, { borderTopLeftRadius: 0, borderTopRightRadius: 0 });
        }

        // 2. Exit/Stacking: Subtle Scale & Dimming
        if (i < cards.length - 1) {
          const nextCard = cards[i + 1];
          
          const exitTl = gsap.timeline({
            scrollTrigger: {
              trigger: nextCard,
              start: "top bottom",
              end: "top top",
              scrub: true,
            }
          });

          exitTl.to(inner, { 
            scale: 0.96, // Moderate scale for elegant depth
            force3D: true,
            ease: "none",
          }).to(dimmer, {
            opacity: isDark ? 0.6 : 0.4,
            ease: "none",
          }, 0);
        }
      });
    });

    return () => { 
      mm.revert(); 
      observer.disconnect(); 
    };
  }, []);

  return (
    <section ref={containerRef} id="projects" className="relative bg-background">
      {/* DESKTOP LAYOUT */}
      <div className="hidden md:block" style={{ height: `${projects.length * 200}vh` }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={`desktop-wrapper-${project.id}`} className="absolute inset-0 w-full h-full flex">
                <div 
                  ref={(el) => { desktopLeftRefs.current[index] = el; }} 
                  className="w-1/2 h-full absolute top-0 left-0 overflow-hidden bg-background"
                >
                  {isEven ? <DesktopContent project={project} index={index} isDark={isDark} /> : <DesktopImage project={project} />}
                </div>
                <div 
                  ref={(el) => { desktopRightRefs.current[index] = el; }} 
                  className="w-1/2 h-full absolute top-0 right-0 overflow-hidden bg-background border-l border-foreground/5"
                >
                  {!isEven ? <DesktopContent project={project} index={index} isDark={isDark} /> : <DesktopImage project={project} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MOBILE LAYOUT */}
      <div className="md:hidden flex flex-col">
        {projects.map((project, index) => (
          <div 
            key={`mobile-wrapper-${project.id}`} 
            className="mobile-project-card sticky top-0 h-screen w-full bg-transparent overflow-hidden"
            style={{ zIndex: index + 1 }}
          >
            <div className="mobile-card-dimmer absolute inset-0 bg-black pointer-events-none z-[100] opacity-0" />
            <div className="mobile-card-inner w-full h-full bg-background flex flex-col rounded-t-[36px] overflow-hidden border-t border-transparent dark:border-white/20 will-change-[transform,border-radius] [transform:translateZ(0)]">
              {/* Subtle Glow Shadow: Dark depth paired with a faint light rim for separation */}
              <div className="absolute inset-0 -top-[1px] -z-10 shadow-[0_-15px_40px_rgba(0,0,0,0.6),0_-2px_10px_rgba(255,255,255,0.05)] pointer-events-none" />
              
              <div className="flex-1 px-6 pt-24 pb-8 flex flex-col justify-center relative">
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-foreground/30 mb-4 block">
                  Project {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="text-4xl font-black tracking-tighter uppercase leading-[1.15] mb-6">
                  <span 
                    className="px-2 py-0.5 decoration-clone"
                    style={{ backgroundColor: isDark ? project.darkBg : project.lightBg }}
                  >
                    {project.title}
                  </span>
                </h2>
                <p className="text-sm text-foreground/60 leading-relaxed mb-8 font-medium">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-3 py-1 text-[9px] font-mono border border-foreground/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] w-fit border-b border-foreground/20 pb-1">
                  Explore <ArrowUpRight size={14} />
                </a>
              </div>
              <div className="h-[40vh] w-full">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DesktopContent({ project, index, isDark }: { project: Project; index: number; isDark: boolean }) {
  return (
    <div className="w-full h-full flex flex-col justify-center px-12 lg:px-24">
      <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-foreground/30 mb-8 block">
        Project {String(index + 1).padStart(2, '0')}
      </span>
      <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[1.15] mb-10">
        <span 
          className="px-4 py-1 decoration-clone"
          style={{ backgroundColor: isDark ? project.darkBg : project.lightBg }}
        >
          {project.title}
        </span>
      </h2>
      <p className="text-lg text-foreground/60 leading-relaxed mb-12 max-w-md font-medium">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-14">
        {project.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-[9px] font-mono border border-foreground/10 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <a href={project.link} className="flex items-center gap-6 w-fit group">
        <div className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
          <ArrowUpRight size={20} />
        </div>
        <span className="text-xs font-bold uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity">Case_Study</span>
      </a>
    </div>
  );
}

function DesktopImage({ project }: { project: Project }) {
  return (
    <div className="w-full h-full p-12 lg:p-24 bg-background">
      <div className="w-full h-full relative overflow-hidden rounded-sm">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/10" />
      </div>
    </div>
  );
}