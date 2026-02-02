"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Layers, MessageCircle, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Animated Icon Component with Motion Graphics
function AnimatedIcon({
  icon: Icon,
  color,
  isVisible
}: {
  icon: React.ElementType;
  color: string;
  isVisible: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const ring1Ref = useRef<HTMLDivElement>(null);
  const ring2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !iconRef.current) return;

    const ctx = gsap.context(() => {
      // Continuous floating animation
      gsap.to(iconRef.current, {
        y: -4,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });

      // Subtle rotation
      gsap.to(iconRef.current, {
        rotation: 5,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });

      // Pulsing rings
      if (ring1Ref.current && ring2Ref.current) {
        gsap.to([ring1Ref.current, ring2Ref.current], {
          scale: 1.5,
          opacity: 0,
          duration: 2,
          stagger: 0.5,
          repeat: -1,
          ease: "power2.out"
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
      {/* Pulsing rings */}
      <div
        ref={ring1Ref}
        className="absolute inset-0 rounded-full border-2 opacity-30"
        style={{ borderColor: color }}
      />
      <div
        ref={ring2Ref}
        className="absolute inset-0 rounded-full border opacity-20"
        style={{ borderColor: color }}
      />
      
      {/* Icon with glow */}
      <div
        ref={iconRef}
        className="relative z-10"
        style={{
          filter: `drop-shadow(0 0 8px ${color}60)`
        }}
      >
        <Icon
          size={24}
          strokeWidth={1.5}
          style={{ color }}
          className="md:w-7 md:h-7"
        />
      </div>
    </div>
  );
}

const phases = [
  {
    id: 1,
    title: "Investigación",
    subtitle: "Discovery",
    description: "Análisis profundo del usuario y contexto. Datos antes de intuición.",
    icon: Search,
    gradient: "from-violet-500 to-purple-600",
    iconColor: "#8b5cf6",
  },
  {
    id: 2,
    title: "Estructura",
    subtitle: "Architecture",
    description: "Arquitectura de información. Flujos claros, navegación intuitiva.",
    icon: Layers,
    gradient: "from-cyan-500 to-blue-600",
    iconColor: "#06b6d4",
  },
  {
    id: 3,
    title: "Storytelling",
    subtitle: "Narrative",
    description: "Cada interfaz cuenta una historia. Diseño emocional intencional.",
    icon: MessageCircle,
    gradient: "from-pink-500 to-rose-600",
    iconColor: "#ec4899",
  },
  {
    id: 4,
    title: "Microinteracciones",
    subtitle: "Details",
    description: "Los detalles invisibles. Cada hover calibrado para deleitar.",
    icon: Sparkles,
    gradient: "from-orange-500 to-red-600",
    iconColor: "#f97316",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const phasesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title animation
      const titleWords = titleRef.current?.querySelectorAll(".title-word");
      if (titleWords) {
        gsap.fromTo(
          titleWords,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Phases animation
      phasesRef.current.forEach((phase, index) => {
        if (!phase) return;

        const number = phase.querySelector(".phase-number");
        const title = phase.querySelector(".phase-title");
        const desc = phase.querySelector(".phase-desc");
        const divider = phase.querySelector(".phase-divider");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: phase,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          number,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
        )
          .fromTo(
            divider,
            { scaleX: 0 },
            { scaleX: 1, duration: 0.6, ease: "power2.out" },
            "-=0.4"
          )
          .fromTo(
            title,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
            "-=0.3"
          )
          .fromTo(
            desc,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
            "-=0.4"
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative bg-[#E8E8E6] dark:bg-[#0d0d0d] py-32 md:py-48"
    >
      {/* Header - Fixed to left corner with right text on desktop */}
      <div ref={titleRef} className="absolute top-32 left-[2em] md:left-[5em] right-[5em] z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="title-word text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            Mi Proceso
          </h2>
          <div className="title-word flex items-center gap-3 md:text-right">
            <div className="w-2 h-2 rounded-full bg-foreground/30 animate-pulse" />
            <span className="text-sm text-foreground/50">
              04 Fases
            </span>
          </div>
        </div>
        <div className="title-word w-full h-px bg-foreground/10 mt-6 origin-left" />
      </div>

      <div className="max-w-5xl mx-auto px-8 md:px-16 pt-48 md:pt-64">

        {/* Timeline */}
        <div className="relative">
          {/* Animated Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px hidden md:block overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-transparent via-foreground/20 to-transparent animate-line-flow" />
          </div>

          {/* Phases */}
          <div className="space-y-24 md:space-y-32">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={phase.id}
                  ref={(el) => {
                    if (el) phasesRef.current[index] = el;
                  }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 ${
                    isEven ? "" : "md:text-right"
                  }`}
                >
                  {/* Number & Icon */}
                  <div
                    className={`flex items-start gap-6 ${
                      isEven ? "md:justify-end" : "md:order-2"
                    }`}
                  >
                    <div className="phase-number flex-shrink-0">
                      <span className="text-7xl md:text-8xl font-extralight text-foreground/20">
                        0{phase.id}
                      </span>
                    </div>

                    <div
                      className="mt-4 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                      style={{
                        background: `linear-gradient(135deg, ${phase.iconColor}20, ${phase.iconColor}10)`,
                        border: `2px solid ${phase.iconColor}40`,
                        boxShadow: `0 4px 20px ${phase.iconColor}20`
                      }}
                    >
                      <AnimatedIcon
                        icon={Icon}
                        color={phase.iconColor}
                        isVisible={true}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${isEven ? "md:order-2" : ""}`}>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 block mb-3">
                      {phase.subtitle}
                    </span>

                    <h3 className="phase-title text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
                      {phase.title}
                    </h3>

                    <p className="phase-desc text-base text-foreground/50 leading-relaxed max-w-md">
                      {phase.description}
                    </p>
                  </div>

                  {/* Animated Timeline dot */}
                  <div
                    className={`hidden md:block absolute top-0 ${
                      isEven ? "left-1/2" : "left-1/2"
                    } -translate-x-1/2`}
                  >
                    <div
                      className="w-3 h-3 rounded-full animate-pulse-glow"
                      style={{
                        backgroundColor: phase.iconColor,
                        boxShadow: `0 0 10px ${phase.iconColor}, 0 0 20px ${phase.iconColor}50`
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-32 md:mt-48 pt-16 border-t border-foreground/10">
          <blockquote className="text-center">
            <p className="text-2xl md:text-3xl font-light text-foreground/30 leading-relaxed max-w-2xl mx-auto">
              &ldquo;El diseño no es solo cómo se ve.
              <br />
              <span className="text-foreground/60">Es cómo funciona.&rdquo;</span>
            </p>
            <cite className="mt-6 block text-xs uppercase tracking-[0.3em] text-foreground/30 not-italic">
              — Dieter Rams
            </cite>
          </blockquote>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes line-flow {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        
        .animate-line-flow {
          animation: line-flow 3s linear infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.7;
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
