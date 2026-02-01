"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Layers, MessageCircle, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const phases = [
  {
    id: 1,
    title: "INVESTIGACIÓN",
    subtitle: "DISCOVERY",
    description: "Análisis profundo del usuario y contexto. Datos antes de intuición.",
    icon: Search,
    color: "#06b6d4",
    accent: "#67e8f9"
  },
  {
    id: 2,
    title: "ESTRUCTURA",
    subtitle: "ARCHITECTURE",
    description: "Arquitectura de información. Flujos claros, navegación intuitiva.",
    icon: Layers,
    color: "#3b82f6",
    accent: "#93c5fd"
  },
  {
    id: 3,
    title: "STORYTELLING",
    subtitle: "NARRATIVE",
    description: "Cada interfaz cuenta una historia. Diseño emocional intencional.",
    icon: MessageCircle,
    color: "#ec4899",
    accent: "#f9a8d4"
  },
  {
    id: 4,
    title: "MICRO",
    subtitle: "DETAILS",
    description: "Los detalles invisibles. Cada hover calibrado para deleitar.",
    icon: Sparkles,
    color: "#ef4444",
    accent: "#fca5a5"
  }
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const phasesRef = useRef<HTMLDivElement[]>([]);
  const orbsRef = useRef<HTMLDivElement[]>([]);
  const linesRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // TITLE: Dramatic 3D Reveal
      const titleLines = titleRef.current?.querySelectorAll(".title-line");
      if (titleLines) {
        gsap.fromTo(titleLines,
          { 
            rotateX: 90, 
            opacity: 0,
            y: 100,
            transformOrigin: "center bottom"
          },
          {
            rotateX: 0,
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power4.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // ORBS: Floating Animation
      orbsRef.current.forEach((orb, i) => {
        if (!orb) return;
        
        gsap.to(orb, {
          y: "random(-30, 30)",
          x: "random(-20, 20)",
          duration: "random(3, 5)",
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 0.5
        });

        gsap.to(orb, {
          scale: "random(0.9, 1.1)",
          duration: "random(4, 6)",
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 0.3
        });
      });

      // PHASES: Complex Entrance
      phasesRef.current.forEach((phase, index) => {
        if (!phase) return;

        const isEven = index % 2 === 0;
        const content = phase.querySelector(".phase-content");
        const visual = phase.querySelector(".phase-visual");
        const number = phase.querySelector(".phase-number");

        // Master timeline for each phase
        const phaseTl = gsap.timeline({
          scrollTrigger: {
            trigger: phase,
            start: "top 80%",
            end: "center center",
            toggleActions: "play none none reverse"
          }
        });

        // Number: Scale from 0 with rotation
        phaseTl.fromTo(number,
          { scale: 0, rotation: -180, opacity: 0 },
          { scale: 1, rotation: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
          0
        );

        // Visual: Slide from side
        phaseTl.fromTo(visual,
          { x: isEven ? -100 : 100, opacity: 0, rotateZ: isEven ? -10 : 10 },
          { x: 0, opacity: 1, rotateZ: 0, duration: 1, ease: "power3.out" },
          0.2
        );

        // Content: Staggered reveal
        const contentItems = content?.querySelectorAll(".content-item");
        if (contentItems) {
          phaseTl.fromTo(contentItems,
            { y: 50, opacity: 0, rotateX: -45 },
            { y: 0, opacity: 1, rotateX: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
            0.4
          );
        }

        // Continuous parallax
        gsap.to(phase, {
          y: isEven ? -50 : 50,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5
          }
        });
      });

      // SVG LINES: Draw on scroll
      if (linesRef.current) {
        const paths = linesRef.current.querySelectorAll("path");
        paths.forEach((path) => {
          const length = path.getTotalLength();
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
          
          gsap.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              end: "bottom center",
              scrub: 2
            }
          });
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative bg-[#F2F2F0] dark:bg-[#050505] py-32 md:py-48 overflow-hidden transition-colors duration-700"
    >
      {/* BACKGROUND EFFECTS */}
      
      {/* Swiss: Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "100px 100px"
        }}
      />

      {/* Cyber: Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {phases.map((phase, i) => (
          <div
            key={i}
            ref={(el) => { if (el) orbsRef.current[i] = el; }}
            className="absolute w-[500px] h-[500px] rounded-full opacity-20 dark:opacity-30"
            style={{
              background: `radial-gradient(circle, ${phase.color} 0%, transparent 70%)`,
              filter: "blur(80px)",
              left: `${10 + i * 20}%`,
              top: `${20 + (i % 2) * 40}%`
            }}
          />
        ))}
      </div>

      {/* Connecting Lines SVG */}
      <svg
        ref={linesRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30 dark:opacity-50"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="lineGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
        <path d="M 200 400 Q 400 300 600 500" stroke="url(#lineGrad1)" fill="none" strokeWidth="1" />
        <path d="M 600 500 Q 800 700 1000 600" stroke="url(#lineGrad2)" fill="none" strokeWidth="1" />
        <path d="M 1000 600 Q 1200 400 1400 700" stroke="url(#lineGrad3)" fill="none" strokeWidth="1" />
      </svg>

      <div ref={containerRef} className="relative z-10 px-[2em] md:px-[7em] max-w-[1600px] mx-auto">
        
        {/* HEADER */}
        <div ref={titleRef} className="mb-32 md:mb-48" style={{ perspective: "1000px" }}>
          <div className="title-line overflow-hidden">
            <span className="text-mono text-[0.7em] uppercase tracking-[0.4em] text-foreground/40 block mb-4">
              Mi Metodología
            </span>
          </div>
          
          <div className="title-line overflow-hidden">
            <h2 className="text-[18vw] md:text-[14rem] font-black tracking-tighter leading-[0.8] text-foreground">
              MI
            </h2>
          </div>
          
          <div className="title-line overflow-hidden flex justify-end">
            <h2 className="text-[18vw] md:text-[14rem] font-black tracking-tighter leading-[0.8] text-foreground relative">
              PROCESO
              {/* Cyber RGB Split */}
              <span className="absolute inset-0 dark:block hidden"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2px #ef4444",
                  transform: "translateX(-6px)",
                  opacity: 0.6
                }}
              >
                PROCESO
              </span>
              <span className="absolute inset-0 dark:block hidden"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2px #06b6d4",
                  transform: "translateX(6px)",
                  opacity: 0.6
                }}
              >
                PROCESO
              </span>
            </h2>
          </div>
        </div>

        {/* PHASES */}
        <div className="space-y-32 md:space-y-48 relative">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={phase.id}
                ref={(el) => { if (el) phasesRef.current[index] = el; }}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center ${
                  isEven ? "" : "md:text-right"
                }`}
              >
                {/* Visual Side */}
                <div className={`phase-visual md:col-span-5 ${isEven ? "md:col-start-1" : "md:col-start-8"}`}>
                  <div className="relative group cursor-pointer">
                    {/* Giant Number with Stroke */}
                    <div className="phase-number relative">
                      <span 
                        className="text-[10rem] md:text-[16rem] font-black leading-none block select-none transition-all duration-500 group-hover:scale-105"
                        style={{
                          color: "transparent",
                          WebkitTextStroke: `3px ${phase.color}`,
                          textShadow: `0 0 60px ${phase.color}30`
                        }}
                      >
                        0{phase.id}
                      </span>
                      
                      {/* Pulsing Glow Behind Number */}
                      <div 
                        className="absolute inset-0 blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"
                        style={{ backgroundColor: phase.color }}
                      />
                    </div>

                    {/* Icon - Floating */}
                    <div 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                      style={{
                        background: `linear-gradient(135deg, ${phase.color}20, ${phase.color}05)`,
                        border: `2px solid ${phase.color}`,
                        boxShadow: `0 0 40px ${phase.color}40, inset 0 0 40px ${phase.color}10`
                      }}
                    >
                      <Icon 
                        size={40} 
                        style={{ color: phase.color }}
                        strokeWidth={1.5}
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Orbiting Particles */}
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          backgroundColor: phase.color,
                          top: "50%",
                          left: "50%",
                          animation: `orbit${i} 3s linear infinite`,
                          animationDelay: `${i * 0.75}s`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Content Side */}
                <div className={`phase-content md:col-span-6 ${isEven ? "md:col-start-7" : "md:col-start-1"}`} style={{ perspective: "800px" }}>
                  <div className="content-item">
                    <span 
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[0.65em] font-mono uppercase tracking-[0.3em] mb-6"
                      style={{ 
                        color: phase.color,
                        backgroundColor: `${phase.color}15`,
                        border: `1px solid ${phase.color}30`
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: phase.color }} />
                      {phase.subtitle}
                    </span>
                  </div>
                  
                  <div className="content-item">
                    <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-foreground transition-transform duration-500 hover:translate-x-2">
                      {phase.title}
                    </h3>
                  </div>
                  
                  <div className="content-item">
                    <p className="text-lg md:text-xl text-foreground/60 leading-relaxed max-w-lg">
                      {phase.description}
                    </p>
                  </div>

                  {/* Animated Line */}
                  <div className="content-item mt-8 h-1 bg-foreground/10 rounded-full overflow-hidden max-w-xs">
                    <div 
                      className="h-full rounded-full origin-left transition-transform duration-1000 ease-out scale-x-0 group-hover:scale-x-100"
                      style={{ backgroundColor: phase.color }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="mt-48 md:mt-64 text-center">
          <p className="text-2xl md:text-4xl font-light italic text-foreground/40 mb-12 max-w-2xl mx-auto leading-relaxed">
            "El diseño es inteligencia
            <span className="block font-bold not-italic text-foreground">hecha visible"</span>
          </p>
          
          <a
            href="#contact"
            className="inline-flex items-center gap-4 px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Iniciar Proyecto</span>
            <span className="absolute inset-0 bg-foreground transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes orbit0 {
          from { transform: rotate(0deg) translateX(80px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
        }
        @keyframes orbit1 {
          from { transform: rotate(90deg) translateX(90px) rotate(-90deg); }
          to { transform: rotate(450deg) translateX(90px) rotate(-450deg); }
        }
        @keyframes orbit2 {
          from { transform: rotate(180deg) translateX(100px) rotate(-180deg); }
          to { transform: rotate(540deg) translateX(100px) rotate(-540deg); }
        }
        @keyframes orbit3 {
          from { transform: rotate(270deg) translateX(110px) rotate(-270deg); }
          to { transform: rotate(630deg) translateX(110px) rotate(-630deg); }
        }
      `}</style>
    </section>
  );
}
