"use client";

import { useEffect, useRef, useState } from "react";
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

    // --- DESKTOP LOGIC ---
    mm.add("(min-width: 768px)", () => {
      const leftPanels = desktopLeftRefs.current.filter(Boolean);
      const rightPanels = desktopRightRefs.current.filter(Boolean);

      projects.forEach((_, i) => {
        const items = [...(leftPanels[i]?.querySelectorAll(".reveal-item") || []), ...(rightPanels[i]?.querySelectorAll(".reveal-item") || [])];
        gsap.set(items, { y: 60, opacity: 0 });
      });

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

      // Primer revelado más rápido
      const firstItems = [...(leftPanels[0]?.querySelectorAll(".reveal-item") || []), ...(rightPanels[0]?.querySelectorAll(".reveal-item") || [])];
      masterTl.to(firstItems, { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: "power2.out" }, 0);

      projects.forEach((_, i) => {
        if (i === projects.length - 1) return;
        const cL = leftPanels[i], cR = rightPanels[i], nL = leftPanels[i+1], nR = rightPanels[i+1];
        const nextItems = [...(nL?.querySelectorAll(".reveal-item") || []), ...(nR?.querySelectorAll(".reveal-item") || [])];
        const currentItems = [...(cL?.querySelectorAll(".reveal-item") || []), ...(cR?.querySelectorAll(".reveal-item") || [])];

        masterTl
          .to(nR, { y: 0, duration: 1, ease: "none", onStart: () => gsap.set(nR, { zIndex: 30 }) })
          .to(cL, { 
            y: "-100vh", duration: 1, ease: "none", 
            onUpdate: function() { if (this.progress() > 0.5) { gsap.set([nL, nR], { zIndex: 20 }); gsap.set([cL, cR], { zIndex: 5 }); } } 
          }, ">-0.4")
          .to(nL, { y: 0, duration: 1, ease: "none" }, "<")
          .to(nextItems, { y: 0, opacity: 1, stagger: 0.08, duration: 0.7, ease: "power2.out" }, ">-1")
          .to(currentItems, { y: -30, opacity: 0, duration: 0.4 }, "<")
          .to(cR, { y: "-100vh", duration: 1, ease: "none" }, ">-0.5");
      });
    });

    mm.add("(max-width: 767px)", () => {
      const cards = gsap.utils.toArray(".mobile-project-card") as HTMLElement[];
      cards.forEach((card, i) => {
        gsap.fromTo(card.querySelectorAll(".reveal-item"), 
          { y: 30, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            stagger: 0.1, 
            duration: 0.8, 
            ease: "power3.out",
            scrollTrigger: { 
              trigger: card, 
              start: "top 65%", 
              toggleActions: "play none none reverse" 
            } 
          }
        );
        if (i === cards.length - 1) return;
        const nextCard = cards[i + 1];
        gsap.to(card, { scale: 0.92, opacity: 0.4, ease: "none",
          scrollTrigger: { trigger: nextCard, start: "top bottom", end: "top top", scrub: true }
        });
      });
    });

    return () => { mm.revert(); observer.disconnect(); };
  }, []);

  return (
    <section ref={containerRef} className="relative bg-background transition-colors duration-700">
      {/* DESKTOP VIEW - REDUCED SCROLL DISTANCE */}
      <div className="hidden md:block" style={{ height: `${projects.length * 200}vh` }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={`desktop-${project.id}`} className="absolute inset-0 w-full h-full flex">
                <div ref={(el) => { desktopLeftRefs.current[index] = el; }} className="w-1/2 h-full absolute top-0 left-0 overflow-hidden bg-background">
                  {isEven ? <DesktopContent project={project} index={index} isDark={isDark} /> : <DesktopImage project={project} />}
                </div>
                <div ref={(el) => { desktopRightRefs.current[index] = el; }} className="w-1/2 h-full absolute top-0 right-0 overflow-hidden bg-background border-l border-foreground/5">
                  {!isEven ? <DesktopContent project={project} index={index} isDark={isDark} /> : <DesktopImage project={project} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden flex flex-col">
        {projects.map((project, index) => (
          <div 
            key={`mobile-${project.id}`} 
            className="mobile-project-card sticky top-0 h-screen w-full bg-background flex flex-col overflow-hidden shadow-[0_-20px_50px_-10px_rgba(0,0,0,0.15)] dark:shadow-[0_-20px_50px_-10px_rgba(0,0,0,0.25)]"
            style={{ zIndex: index + 1 }}
          >
            <div className="flex-1 px-6 pt-24 pb-8 flex flex-col justify-center">
              <span className="reveal-item text-[10px] font-mono uppercase tracking-[0.4em] text-foreground/30 mb-4 block">
                Project {String(index + 1).padStart(2, '0')}
              </span>
              <h2 className="reveal-item text-4xl font-black tracking-tighter uppercase leading-[1.15] text-black dark:text-white mb-6">
                <span 
                  className="px-2 py-0.5 decoration-clone transition-all duration-500 shadow-[0_4px_15px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                  style={{ backgroundColor: isDark ? project.darkBg : project.lightBg }}
                >
                  {project.title}
                </span>
              </h2>
              <p className="reveal-item text-sm text-foreground/60 leading-relaxed mb-8 font-medium line-clamp-4">
                {project.description}
              </p>
              <div className="reveal-item flex flex-wrap gap-2 mb-8">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-3 py-1 text-[9px] font-mono uppercase tracking-widest border border-foreground/10 rounded-full opacity-70">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.link} className="reveal-item flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] w-fit border-b border-foreground/20 pb-1">
                Explore <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="h-[45vh] w-full relative">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.6)] pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.5)_120%)] mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DesktopContent({ project, index, isDark }: { project: Project; index: number; isDark: boolean }) {
  return (
    <div className="w-full h-full flex flex-col justify-center px-[2em] lg:px-[8em]">
      <div className="max-w-xl">
        <span className="reveal-item text-[10px] font-mono uppercase tracking-[0.5em] text-foreground/30 mb-8 block">
          Project {String(index + 1).padStart(2, '0')}
        </span>
        <h2 className="reveal-item text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.15] text-black dark:text-white mb-10">
          <span 
            className="px-4 py-1 decoration-clone transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
            style={{ backgroundColor: isDark ? project.darkBg : project.lightBg }}
          >
            {project.title}
          </span>
        </h2>
        <div className="reveal-item w-20 h-[1px] bg-foreground/20 mb-10" />
        <p className="reveal-item text-base md:text-lg text-foreground/60 leading-relaxed mb-12 max-w-sm font-medium">
          {project.description}
        </p>
        <div className="reveal-item flex flex-wrap gap-2 mb-14">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-[9px] font-mono uppercase tracking-widest border border-foreground/10 rounded-full opacity-60">
              {tag}
            </span>
          ))}
        </div>
        <a href={project.link} className="reveal-item group flex items-center gap-6 w-fit">
          <div className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-700">
            <ArrowUpRight size={20} />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity">Case_Study</span>
        </a>
      </div>
    </div>
  );
}

function DesktopImage({ project }: { project: Project }) {
  return (
    <div className="w-full h-full p-8 lg:p-24 bg-background">
      <div className="w-full h-full relative overflow-hidden rounded-sm transition-all duration-1000 group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
        />
        <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.7)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_30%,rgba(0,0,0,0.6)_130%)] mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/5 mix-blend-overlay" />
        <div className="absolute top-8 right-8 font-mono text-[9px] uppercase tracking-[0.5em] text-black/20 dark:text-white/20 mix-blend-difference">
          ID_{project.id.toString().padStart(3, '0')}
        </div>
      </div>
    </div>
  );
}
