"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = wrapperRef.current;
      const panels = panelsRef.current.filter(Boolean) as HTMLDivElement[];
      
      if (!wrapper || panels.length < 2) return;

      // Set initial z-index: odd panels (0, 2, 4...) start with z-index 10, even with 20
      panels.forEach((panel, index) => {
        gsap.set(panel, { 
          zIndex: index % 2 === 0 ? 10 : 20,
          y: index === 0 ? 0 : "100vh" // First panel visible, others below
        });
      });

      const totalProjects = projects.length;
      const transitions = totalProjects - 1; // Number of transitions between projects
      
      // Master Timeline
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: viewportRef.current,
          pinSpacing: false,
          snap: {
            snapTo: 1 / transitions,
            duration: { min: 0.2, max: 0.4 },
            ease: "power2.inOut"
          },
          onUpdate: (self) => {
            const progress = self.progress;
            
            // For each transition, check if we're at the 50% mark
            for (let i = 0; i < transitions; i++) {
              const phaseStart = i / transitions;
              const phaseEnd = (i + 1) / transitions;
              const phaseProgress = (progress - phaseStart) / (phaseEnd - phaseStart);
              
              // At 50% of each transition, swap z-index
              if (phaseProgress >= 0.48 && phaseProgress <= 0.52) {
                const currentPanel = panels[i];
                const nextPanel = panels[i + 1];
                
                if (currentPanel && nextPanel) {
                  const currentZ = gsap.getProperty(currentPanel, "zIndex") as number;
                  const nextZ = gsap.getProperty(nextPanel, "zIndex") as number;
                  
                  // Only swap if they haven't been swapped yet
                  if (currentZ < nextZ) {
                    gsap.set(currentPanel, { zIndex: 20 });
                    gsap.set(nextPanel, { zIndex: 10 });
                  }
                }
              }
            }
          },
          onLeaveBack: () => {
            // Reset z-index when scrolling back to top
            panels.forEach((panel, index) => {
              gsap.set(panel, { 
                zIndex: index % 2 === 0 ? 10 : 20,
                y: index === 0 ? 0 : "100vh"
              });
            });
          }
        }
      });

      // Build timeline with all transitions
      // Each transition has 3 phases: next enters (0-33%), swap (33-66%), current exits (66-100%)
      
      for (let i = 0; i < transitions; i++) {
        const currentPanel = panels[i];
        const nextPanel = panels[i + 1];
        const phaseStart = i / transitions;
        const phaseMid = (i + 0.5) / transitions;
        const phaseEnd = (i + 1) / transitions;
        
        // Phase 1: Next panel enters from bottom (0-33% of this transition)
        masterTl.fromTo(nextPanel,
          { y: "100vh" },
          { y: 0, ease: "none" },
          phaseStart
        );
        
        // Phase 2: Current panel exits to top (33-100% of this transition)
        // Actually, the swap happens at 50%, so:
        // - 33-50%: Current starts moving up, next is pinned
        // - 50%: z-index swap
        // - 50-66%: Current continues up, next stays pinned
        // - 66-100%: Next can scroll if needed, but for now we keep it simple
        masterTl.to(currentPanel,
          { y: "-100vh", ease: "none" },
          phaseStart + (phaseEnd - phaseStart) * 0.33
        );
      }

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  // Calculate wrapper height: 100vh per project
  const wrapperHeight = `${projects.length * 100}vh`;

  return (
    <section className="relative">
      {/* Wrapper exterior - Track de scroll */}
      <div 
        ref={wrapperRef}
        className="relative"
        style={{ height: wrapperHeight }}
      >
        {/* Viewport sticky */}
        <div 
          ref={viewportRef}
          className="sticky top-0 h-screen w-full overflow-hidden"
        >
          {/* All project panels */}
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => { panelsRef.current[index] = el; }}
              className="absolute inset-0 w-full h-full bg-background"
              style={{ willChange: "transform" }}
            >
              <ProjectPanel project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectPanel({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <div className="h-full w-full flex">
      {/* Content side */}
      <div className={`flex-1 flex flex-col justify-center px-frame py-20 ${isEven ? 'order-1' : 'order-2'}`}>
        <div className="max-w-xl">
          {/* Project number */}
          <span className="text-sm font-mono uppercase tracking-widest text-foreground/40 mb-4 block">
            Project {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
          
          <span 
            className="inline-block text-sm font-mono uppercase tracking-widest mb-6"
            style={{ color: project.color }}
          >
            {project.category}
          </span>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            {project.title}
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-8">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-3 mb-10">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                    style={{ backgroundColor: `${project.color}15` }}
                  >
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectPanel({ project, isAlternate }: { project: Project; isAlternate: boolean }) {
  return (
    <div className="h-full w-full flex">
      {/* Split layout */}
      <div className={`flex-1 flex flex-col justify-center px-frame py-20 ${isAlternate ? 'order-2' : 'order-1'}`}>
        <div className="max-w-xl">
          <span 
            className="inline-block text-sm font-mono uppercase tracking-widest mb-6"
            style={{ color: project.color }}
          >
            {project.category}
          </span>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
            {project.title}
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed mb-8">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-4 py-2 text-sm font-mono uppercase tracking-wider bg-surface rounded-full border border-foreground/10"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {project.link && (
              <a 
                href={project.link}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:scale-105 transition-transform"
              >
                View Project
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            )}
            {project.github && (
              <a 
                href={project.github}
                className="inline-flex items-center gap-2 px-8 py-4 border border-foreground/20 rounded-full font-medium hover:bg-foreground/5 transition-colors"
              >
                <Github className="w-5 h-5" />
                Source
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Image side */}
      <div className={`flex-1 relative ${isAlternate ? 'order-1' : 'order-2'}`}>
        <div 
          className="absolute inset-0 m-8 rounded-3xl overflow-hidden"
          style={{ backgroundColor: `${project.color}10` }}
        >
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div 
            className={`absolute inset-0 bg-gradient-to-${isAlternate ? 'r' : 'l'} from-background/80 via-transparent to-transparent`}
          />
        </div>
      </div>
    </div>
  );
}
