"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
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
  video?: string;
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
    title: "VANK",
    category: "Fintech Platform",
    description: "Una plataforma fintech integral diseñada para democratizar el acceso a herramientas financieras complejas y criptomonedas.",
    image: "https://cdn.prod.website-files.com/684d06174bbd508a8dcbc859/68acd98ffcf18c76db9ce92b_MacBook%20Air%20M4%20-%20Sky%20Blue-2.jpg",
    video: "https://res.cloudinary.com/dnx0dmhq3/video/upload/v1770498001/684d06174bbd508a8dcbc859_68a02c4efff9efe6193d79dd_showcase_09-transcode_kezu6n.mp4",
    lightBg: "#FEF08A", 
    darkBg: "#713F12",  
    accent: "#facc15",
    tags: ["UX Strategy", "UI Design", "Fintech"],
    link: "/projects/vank",
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

    mm.add("(min-width: 768px)", () => {
      const leftPanels = desktopLeftRefs.current.filter(Boolean);
      const rightPanels = desktopRightRefs.current.filter(Boolean);
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
          .to(cL, { y: "-100vh", duration: 1, ease: "none", onUpdate: function() { if (this.progress() > 0.5) { gsap.set([nL, nR], { zIndex: 20 }); gsap.set([cL, cR], { zIndex: 5 }); } } }, ">-0.4")
          .to(nL, { y: 0, duration: 1, ease: "none" }, "<")
          .to(cR, { y: "-100vh", duration: 1, ease: "none" }, ">-0.5");
      });
    });

    mm.add("(max-width: 767px)", () => {
      const cards = gsap.utils.toArray(".mobile-project-card") as HTMLElement[];
      cards.forEach((card, i) => {
        const inner = card.querySelector(".mobile-card-inner") as HTMLElement;
        const dimmer = card.querySelector(".mobile-card-dimmer") as HTMLElement;
        if (i > 0) {
          gsap.to(inner, { borderTopLeftRadius: 0, borderTopRightRadius: 0, force3D: true, ease: "none", scrollTrigger: { trigger: card, start: "top 20%", end: "top 0%", scrub: true } });
        } else {
          gsap.set(inner, { borderTopLeftRadius: 0, borderTopRightRadius: 0 });
        }
        if (i < cards.length - 1) {
          const nextCard = cards[i + 1];
          const exitTl = gsap.timeline({ scrollTrigger: { trigger: nextCard, start: "top bottom", end: "top top", scrub: true } });
          exitTl.to(inner, { scale: 0.96, force3D: true, ease: "none" }).to(dimmer, { opacity: isDark ? 0.6 : 0.4, ease: "none" }, 0);
        }
      });
    });

    return () => { mm.revert(); observer.disconnect(); };
  }, [isDark]);

  return (
    <section ref={containerRef} id="projects" className="relative bg-background">
      <div className="hidden md:block" style={{ height: `${projects.length * 200}vh` }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={`desktop-wrapper-${project.id}`} className="absolute inset-0 w-full h-full flex">
                <div ref={(el) => { desktopLeftRefs.current[index] = el; }} className="w-1/2 h-full absolute top-0 left-0 overflow-hidden bg-background">
                  {isEven ? <DesktopContent project={project} index={index} isDark={isDark} /> : <ProjectMedia project={project} />}
                </div>
                <div ref={(el) => { desktopRightRefs.current[index] = el; }} className="w-1/2 h-full absolute top-0 right-0 overflow-hidden bg-background border-l border-foreground/5">
                  {!isEven ? <DesktopContent project={project} index={index} isDark={isDark} /> : <ProjectMedia project={project} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="md:hidden flex flex-col">
        {projects.map((project, index) => (
          <div key={`mobile-wrapper-${project.id}`} className="mobile-project-card sticky top-0 h-screen w-full bg-transparent overflow-hidden" style={{ zIndex: index + 1 }}>
            <div className="mobile-card-dimmer absolute inset-0 bg-black pointer-events-none z-[100] opacity-0" />
            <div className="mobile-card-inner w-full h-full bg-background flex flex-col rounded-t-[36px] overflow-hidden border-t border-transparent dark:border-white/20 will-change-[transform,border-radius] [transform:translateZ(0)]">
              <div className="absolute inset-0 -top-[1px] -z-10 shadow-[0_-15px_40px_rgba(0,0,0,0.6),0_-2px_10px_rgba(255,255,255,0.05)] pointer-events-none" />
              <div className="flex-1 px-[14px] pt-24 pb-8 flex flex-col justify-center relative">
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-foreground/30 mb-4 block">Project {String(index + 1).padStart(2, '0')}</span>
                <h2 className="text-4xl font-black tracking-tighter uppercase leading-[1.15] mb-6">
                  <span className="px-2 py-0.5 decoration-clone" style={{ backgroundColor: isDark ? project.darkBg : project.lightBg }}>{project.title}</span>
                </h2>
                <p className="text-sm text-foreground/60 leading-relaxed mb-8 font-medium">{project.description}</p>
                <a href={project.link} className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] w-fit border-b border-foreground/20 pb-1">Explore <ArrowUpRight size={14} /></a>
              </div>
              <div className="h-[55vh] w-full relative">
                <ProjectMedia project={project} isMobile={true} />
                <div className="absolute top-6 right-6 flex flex-wrap gap-2 justify-end max-w-[260px]">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-3 py-1.5 text-[8px] font-bold uppercase tracking-wider bg-background/60 backdrop-blur-md border border-foreground/10 rounded-full text-foreground shadow-lg">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectMedia({ project, isMobile = false }: { project: Project; isMobile?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const magneticRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const magnetic = magneticRef.current;
      if (!container || !magnetic) return;

      const xTo = gsap.quickTo(magnetic, "x", { duration: 0.3, ease: "power3" });
      const yTo = gsap.quickTo(magnetic, "y", { duration: 0.3, ease: "power3" });

      const onMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        
        // Efecto magnético (0.3 de fuerza)
        xTo(dx * 0.3);
        yTo(dy * 0.3);

        // Detección de colisión para feedback visual
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 60) {
          gsap.to(magnetic, { backgroundColor: "#fff", color: "#000", scale: 1.15, duration: 0.3, overwrite: "auto" });
        } else {
          gsap.to(magnetic, { backgroundColor: "#000", color: "#fff", scale: 1, duration: 0.3, overwrite: "auto" });
        }
      };

      const onMouseEnter = () => {
        gsap.to(magnetic, { scale: 1, opacity: 1, duration: 0.4, ease: "expo.out" });
      };

      const onMouseLeave = () => {
        gsap.to(magnetic, { scale: 0, opacity: 0, x: 0, y: 0, duration: 0.4, ease: "expo.inOut" });
      };

      container.addEventListener("mousemove", onMouseMove);
      container.addEventListener("mouseenter", onMouseEnter);
      container.addEventListener("mouseleave", onMouseLeave);
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  const mediaContent = (
    <div 
      ref={containerRef}
      className={`w-full h-full relative overflow-hidden group ${isMobile ? '' : 'bg-background p-12 lg:p-24'}`}
    >
      <div className={`w-full h-full relative overflow-hidden ${isMobile ? '' : 'rounded-sm shadow-2xl'}`}>
        {project.video ? (
          <video src={project.video} autoPlay muted loop playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        )}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
      </div>

      {!isMobile && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div 
            ref={magneticRef}
            className="w-28 h-28 bg-black text-white rounded-full flex flex-col items-center justify-center origin-center scale-0 opacity-0 shadow-2xl"
          >
            <span className="text-[10px] font-black uppercase tracking-wider mb-1">Ver más</span>
            <ArrowUpRight size={16} />
          </div>
        </div>
      )}
    </div>
  );

  if (project.link && project.link !== "#") {
    return (
      <Link href={project.link} className="w-full h-full block">
        {mediaContent}
      </Link>
    );
  }

  return <div className="w-full h-full">{mediaContent}</div>;
}

function DesktopContent({ project, index, isDark }: { project: Project; index: number; isDark: boolean }) {
  return (
    <div className="w-full h-full flex flex-col justify-center px-12 lg:px-24">
      <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-foreground/30 mb-8 block">Project {String(index + 1).padStart(2, '0')}</span>
      <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[1.15] mb-10">
        <span className="px-4 py-1 decoration-clone" style={{ backgroundColor: isDark ? project.darkBg : project.lightBg }}>{project.title}</span>
      </h2>
      <p className="text-lg text-foreground/60 leading-relaxed mb-12 max-w-md font-medium">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-14">
        {project.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-[9px] font-mono border border-foreground/10 rounded-full">{tag}</span>
        ))}
      </div>
      <Link href={project.link || "#"} className="flex items-center gap-6 w-fit group">
        <div className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
          <ArrowUpRight size={20} />
        </div>
        <span className="text-xs font-bold uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity">Case_Study</span>
      </Link>
    </div>
  );
}
