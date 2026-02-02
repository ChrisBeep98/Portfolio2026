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
}: {
  icon: React.ElementType;
  color: string;
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
        yoyo: true,
        force3D: true,
      });

      // Subtle rotation
      gsap.to(iconRef.current, {
        rotation: 5,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        force3D: true,
      });

      // Pulsing rings
      if (ring1Ref.current && ring2Ref.current) {
        gsap.to([ring1Ref.current, ring2Ref.current], {
          scale: 1.5,
          opacity: 0,
          duration: 2,
          stagger: 0.5,
          repeat: -1,
          ease: "power2.out",
          force3D: true,
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
    iconColor: "var(--color-primary)",
  },
  {
    id: 2,
    title: "Estructura",
    subtitle: "Architecture",
    description: "Arquitectura de información. Flujos claros, navegación intuitiva.",
    icon: Layers,
    iconColor: "#06b6d4",
  },
  {
    id: 3,
    title: "Storytelling",
    subtitle: "Narrative",
    description: "Cada interfaz cuenta una historia. Diseño emocional intencional.",
    icon: MessageCircle,
    iconColor: "#ec4899",
  },
  {
    id: 4,
    title: "Microinteracciones",
    subtitle: "Details",
    description: "Los detalles invisibles. Cada hover calibrado para deleitar.",
    icon: Sparkles,
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
      // Title animation - Character by character reveal
      const titleChars = titleRef.current?.querySelectorAll(".title-char");
      if (titleChars) {
        gsap.fromTo(
          titleChars,
          { y: 100, opacity: 0, rotateX: -90 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: "power4.out",
            force3D: true,
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

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: phase,
            start: "top 80%",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
          },
        });

        tl.fromTo(
          number,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", force3D: true }
        )
          .fromTo(
            title,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", force3D: true },
            "-=0.5"
          )
          .fromTo(
            desc,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", force3D: true },
            "-=0.4"
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split title into characters for animation
  const titleText = "Mi Proceso";
  const titleChars = titleText.split("").map((char, i) => (
    <span key={i} className="title-char inline-block" style={{ perspective: "1000px" }}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative bg-background section-gap"
    >
      {/* Header - Fixed to left corner with right text on desktop */}
      <div ref={titleRef} className="absolute top-[var(--section-gap)] left-[var(--px-frame)] right-[var(--px-frame)] z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-[var(--content-gap)]">
          <h2 className="text-display-xl overflow-hidden">
            {titleChars}
          </h2>
          <div className="flex items-center gap-[var(--content-gap)] md:text-right">
            <div className="w-2 h-2 rounded-full bg-foreground/30 animate-pulse" />
            <span className="text-sm text-foreground/50 font-mono uppercase tracking-[0.2em]">
              04 Fases
            </span>
          </div>
        </div>
        <div className="w-full h-px bg-foreground/10 mt-[var(--block-gap)] origin-left" />
      </div>

      <div className="max-w-forge mx-auto px-frame pt-[calc(var(--section-gap)*2)]">

        {/* Timeline */}
        <div className="relative">
          {/* Animated Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px hidden md:block overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-transparent via-foreground/20 to-transparent animate-line-flow" />
          </div>

          {/* Phases */}
          <div className="space-y-[var(--section-gap)]">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={phase.id}
                  ref={(el) => {
                    if (el) phasesRef.current[index] = el;
                  }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-[var(--block-gap)] md:gap-[var(--section-gap)] ${
                    isEven ? "" : "md:text-right"
                  }`}
                >
                  {/* Number & Icon */}
                  <div
                    className={`flex items-start gap-[var(--content-gap)] ${
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
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${isEven ? "md:order-2" : ""}`}>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 block mb-[var(--content-gap)] font-mono">
                      {phase.subtitle}
                    </span>

                    <h3 className="phase-title text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-[var(--content-gap)]">
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

        {/* Footer Spacing */}
        <div className="mt-[var(--section-gap)]" />
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
