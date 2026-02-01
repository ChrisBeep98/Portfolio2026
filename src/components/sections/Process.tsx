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
        const title = step.querySelector(".step-title");
        const hollowNum = step.querySelector(".hollow-number");

        step.addEventListener("mouseenter", () => {
          gsap.to(icon, { scale: 1.1, rotation: 5, duration: 0.4, ease: "power2.out" });
          gsap.to(title, { x: isEven(step) ? 10 : -10, duration: 0.3, ease: "power2.out" });
          gsap.to(hollowNum, { opacity: 0.15, scale: 1.05, duration: 0.4, ease: "power2.out" });
        });

        step.addEventListener("mouseleave", () => {
          gsap.to(icon, { scale: 1, rotation: 0, duration: 0.4, ease: "power2.out" });
          gsap.to(title, { x: 0, duration: 0.3, ease: "power2.out" });
          gsap.to(hollowNum, { opacity: 0.05, scale: 1, duration: 0.4, ease: "power2.out" });
        });
      });

      function isEven(element: Element) {
        const index = stepsRef.current.findIndex(ref => ref?.contains(element));
        return index % 2 === 0;
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative w-full bg-background py-32 md:py-40 overflow-hidden"
    >
      {/* Hollow outline decoration - Massive typography */}
      <div className="absolute top-10 right-0 text-[25vw] font-bold tracking-tighter text-transparent 
                      [-webkit-text-stroke:1px_hsl(0_0%_50%/0.08)] pointer-events-none select-none leading-none">
        04
      </div>

      <div className="px-frame max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20 md:mb-32">
          <div
            ref={lineRef}
            className="h-px bg-foreground/10 mb-8 origin-left"
          />
          <h2
            ref={titleRef}
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
          >
            Mi Proceso
          </h2>
        </div>

        {/* Steps - Asymmetric Layout with Hollow Numbers */}
        <div className="space-y-20 md:space-y-32">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={step.id}
                ref={(el) => { stepsRef.current[index] = el; }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start cursor-pointer group ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Hollow Number Background */}
                <div 
                  className={`hollow-number absolute ${isEven ? "-left-4 md:-left-12" : "-right-4 md:-right-12"} 
                            top-1/2 -translate-y-1/2 text-[15vw] md:text-[10vw] font-bold tracking-tighter 
                            text-transparent [-webkit-text-stroke:1px_hsl(0_0%_50%/0.1)] 
                            pointer-events-none select-none opacity-5`}
                >
                  {step.number}
                </div>

                {/* Content */}
                <div className={`relative z-10 flex-1 ${isEven ? "md:text-left md:pr-20" : "md:text-right md:pl-20"}`}>
                  <span className="step-number block font-mono text-xs text-foreground/30 mb-3 tracking-[0.3em] uppercase">
                    Step {step.number}
                  </span>
                  <h3 className="step-title text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 
                                 group-hover:text-foreground/90 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="step-desc text-foreground/50 text-base md:text-lg leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>

                {/* Icon - Hollow Ring */}
                <div className="step-icon relative flex-shrink-0 z-10">
                  <div className="step-icon-inner w-20 h-20 md:w-24 md:h-24 rounded-full 
                                  border border-foreground/20 flex items-center justify-center bg-background
                                  group-hover:border-foreground/40 transition-colors duration-500">
                    <Icon size={28} className="text-foreground/60" strokeWidth={1.5} />
                  </div>
                  {/* Animated ring on hover */}
                  <div className="absolute inset-0 rounded-full border border-foreground/10 scale-110 opacity-0 
                                  group-hover:scale-125 group-hover:opacity-100 transition-all duration-500" />
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
