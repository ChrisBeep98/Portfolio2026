"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, LayoutGrid, PenTool, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    id: 1,
    number: "01",
    title: "Investigación",
    description: "Entender el problema antes de resolverlo. Análisis profundo de usuarios, competencia y contexto.",
    icon: Search,
  },
  {
    id: 2,
    number: "02",
    title: "Estructura",
    description: "Construir los cimientos. Wireframes, flujos de usuario y arquitectura de información sólida.",
    icon: LayoutGrid,
  },
  {
    id: 3,
    number: "03",
    title: "Storytelling",
    description: "Cada interfaz cuenta una historia. Diseño visual que comunica, emociona y conecta.",
    icon: PenTool,
  },
  {
    id: 4,
    number: "04",
    title: "Microinteracciones",
    description: "La magia está en los detalles. Animaciones y respuestas que hacen la experiencia memorable.",
    icon: Sparkles,
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation - Kinetic Entry
      gsap.set(titleRef.current, { y: 80, opacity: 0 });
      gsap.set(lineRef.current, { scaleX: 0 });

      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      headerTl
        .to(lineRef.current, { scaleX: 1, duration: 1.2, ease: "power4.out" })
        .to(titleRef.current, { y: 0, opacity: 1, duration: 1, ease: "power4.out" }, "-=0.8");

      // Steps staggered reveal with crossfire directionality
      stepsRef.current.forEach((step, index) => {
        if (!step) return;

        const isEven = index % 2 === 0;
        const xOffset = isEven ? -80 : 80;

        const icon = step.querySelector(".step-icon");
        const number = step.querySelector(".step-number");
        const title = step.querySelector(".step-title");
        const desc = step.querySelector(".step-desc");
        const hollowNum = step.querySelector(".hollow-number");

        gsap.set([icon, number, title, desc], { x: xOffset, opacity: 0 });
        gsap.set(hollowNum, { y: 40, opacity: 0 });

        const stepTl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        stepTl
          .to([icon, number, title, desc], { x: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: "power4.out" })
          .to(hollowNum, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6");
      });

      // Hover interactions - Hollow Effect
      stepsRef.current.forEach((step) => {
        if (!step) return;

        const icon = step.querySelector(".step-icon-inner");
        if (!card) return;

        const icon = card.querySelector(".card-icon");
        const glow = card.querySelector(".card-glow");

        card.addEventListener("mouseenter", () => {
          gsap.to(icon, { scale: 1.1, duration: 0.3, ease: "power2.out" });
          gsap.to(glow, { opacity: 0.15, scale: 1.1, duration: 0.3, ease: "power2.out" });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(icon, { scale: 1, duration: 0.3, ease: "power2.out" });
          gsap.to(glow, { opacity: 0, scale: 1, duration: 0.3, ease: "power2.out" });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative w-full bg-background py-32 md:py-40"
    >
      <div className="px-frame max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 md:mb-28">
          <div
            ref={lineRef}
            className="h-px bg-foreground/10 mb-8 origin-left"
          />
          <h2
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
          >
            Mi Proceso
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="group relative p-8 md:p-10 rounded-3xl bg-surface border border-foreground/5 
                           hover:border-foreground/10 transition-colors duration-500 cursor-pointer overflow-hidden"
              >
                {/* Glow effect */}
                <div
                  className="card-glow absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-0 transition-opacity"
                  style={{ backgroundColor: step.color }}
                />

                {/* Number badge */}
                <div
                  className="card-number absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center
                             text-xs font-mono font-bold"
                  style={{
                    backgroundColor: `${step.color}15`,
                    color: step.color,
                  }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div className="card-icon relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}20, ${step.color}05)`,
                    border: `1px solid ${step.color}30`,
                  }}
                >
                  <Icon
                    size={28}
                    style={{ color: step.color }}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <div className="card-content relative z-10">
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-foreground/50 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ease-out"
                  style={{ backgroundColor: step.color }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
