"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Layers, PenTool, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    id: 1,
    number: "01",
    title: "Investigación",
    tag: "ANALYSIS",
    description: "Desglose de variables y mapeo de fricciones en el ecosistema digital.",
    icon: Search,
    color: "#00E5FF",
  },
  {
    id: 2,
    number: "02",
    title: "Estructura",
    tag: "SKELETON",
    description: "Definición de la columna vertebral lógica y flujos de datos complejos.",
    icon: Layers,
    color: "#A855F7",
  },
  {
    id: 3,
    number: "03",
    title: "Visual Core",
    tag: "INTERFACE",
    description: "Traducción de la estrategia en un sistema visual de alto impacto.",
    icon: PenTool,
    color: "#F97316",
  },
  {
    id: 4,
    number: "04",
    title: "Kinetics",
    tag: "EXECUTION",
    description: "Implementación de lógicas de movimiento y optimización técnica.",
    icon: Sparkles,
    color: "#22C55E",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const stripesRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.fromTo(titleRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
          }
        }
      );

      // Stripes Reveal
      stripesRef.current.forEach((stripe) => {
        if (!stripe) return;

        const content = stripe.querySelector(".stripe-content");
        const line = stripe.querySelector(".stripe-line");
        const number = stripe.querySelector(".stripe-number");

        gsap.set(content, { y: 40, opacity: 0 });
        gsap.set(line, { scaleX: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stripe,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        });

        tl.to(line, { scaleX: 1, duration: 1, ease: "expo.inOut" })
          .to(content, { y: 0, opacity: 1, duration: 0.8, ease: "expo.out" }, "-=0.6")
          .to(number, { opacity: 1, duration: 0.8 }, "-=0.6");
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative w-full bg-background py-32 md:py-64 overflow-hidden"
    >
      <div className="px-frame max-w-[1400px] mx-auto relative z-10">
        {/* Header - Massive Title */}
        <div ref={titleRef} className="mb-32 md:mb-48 border-b border-foreground/10 pb-12">
          <h2 className="text-[12vw] md:text-[10rem] font-black tracking-[-0.06em] leading-none uppercase">
            MI <span className="text-outline">PROCESO</span>
          </h2>
          <div className="flex justify-between items-end mt-8">
            <span className="font-mono text-xs tracking-[0.4em] text-foreground/30 uppercase">
              [ WORKFLOW_STRATEGY_2026 ]
            </span>
            <span className="font-mono text-xs text-foreground/30">
              PHASE: 01-04
            </span>
          </div>
        </div>

        {/* Stripes Layout */}
        <div className="flex flex-col">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                ref={(el) => { stripesRef.current[index] = el; }}
                className="group relative w-full py-16 md:py-24"
              >
                {/* Horizontal Line */}
                <div className="stripe-line absolute bottom-0 left-0 w-full h-px bg-foreground/10 origin-left" />

                <div className="stripe-content flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16">
                  {/* Left: Number + Icon */}
                  <div className="flex items-center gap-12">
                    <span className="stripe-number font-mono text-6xl md:text-8xl font-black text-foreground/5 transition-colors duration-500 group-hover:text-foreground/10">
                      {step.number}
                    </span>
                    <div 
                      className="w-16 h-16 flex items-center justify-center border border-foreground/10 rounded-full transition-all duration-500 group-hover:scale-110"
                      style={{ color: step.color, borderColor: step.color + "33" }}
                    >
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Center: Title + Tag */}
                  <div className="flex-1 max-w-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/40">
                        {step.tag}
                      </span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
                      {step.title}
                    </h3>
                  </div>

                  {/* Right: Description */}
                  <div className="md:w-1/3">
                    <p className="text-foreground/50 text-xl font-medium leading-tight">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Hover Reveal (Desktop) */}
                <div className="absolute top-0 left-0 w-full h-full bg-foreground/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .text-outline {
          -webkit-text-stroke: 1.5px hsl(var(--foreground));
          color: transparent;
        }
      `}</style>
    </section>
  );
}