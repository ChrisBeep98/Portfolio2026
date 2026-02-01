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
    title: "Investigación",
    subtitle: "Discovery",
    description: "Análisis profundo del usuario y contexto. Datos antes de intuición.",
    icon: Search,
  },
  {
    id: 2,
    title: "Estructura",
    subtitle: "Architecture",
    description: "Arquitectura de información. Flujos claros, navegación intuitiva.",
    icon: Layers,
  },
  {
    id: 3,
    title: "Storytelling",
    subtitle: "Narrative",
    description: "Cada interfaz cuenta una historia. Diseño emocional intencional.",
    icon: MessageCircle,
  },
  {
    id: 4,
    title: "Microinteracciones",
    subtitle: "Details",
    description: "Los detalles invisibles. Cada hover calibrado para deleitar.",
    icon: Sparkles,
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
      className="relative bg-[#F2F2F0] dark:bg-[#0a0a0a] py-32 md:py-48"
    >
      <div className="max-w-5xl mx-auto px-8 md:px-16">
        {/* Header */}
        <div ref={titleRef} className="mb-32 md:mb-40">
          <h2 className="title-word text-5xl md:text-7xl font-light tracking-tight text-foreground leading-[1.1]">
            Mi Proceso
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-foreground/10 origin-top hidden md:block" />

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

                    <div className="mt-4 w-16 h-16 md:w-20 md:h-20 border border-foreground/20 rounded-full flex items-center justify-center transition-all duration-300 hover:border-foreground/40 hover:scale-110">
                      <Icon
                        size={24}
                        strokeWidth={1}
                        className="text-foreground/60 md:w-7 md:h-7"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${isEven ? "md:order-2" : ""}`}>
                    <div className="phase-divider h-px bg-foreground/10 mb-6 origin-left" />

                    <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 block mb-3">
                      {phase.subtitle}
                    </span>

                    <h3 className="phase-title text-3xl md:text-4xl font-light tracking-tight text-foreground mb-4">
                      {phase.title}
                    </h3>

                    <p className="phase-desc text-base text-foreground/50 leading-relaxed max-w-md">
                      {phase.description}
                    </p>
                  </div>

                  {/* Timeline dot */}
                  <div
                    className={`hidden md:block absolute top-0 ${
                      isEven ? "left-1/2" : "left-1/2"
                    } -translate-x-1/2`}
                  >
                    <div className="w-2 h-2 rounded-full bg-foreground/30" />
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
    </section>
  );
}
