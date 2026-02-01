"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Layout, PenTool, Sparkles } from "lucide-react";

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
    icon: Layout,
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
      // Title animation
      gsap.set(titleRef.current, { y: 60, opacity: 0 });
      gsap.set(lineRef.current, { scaleX: 0 });

      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      headerTl
        .to(lineRef.current, { scaleX: 1, duration: 1.2, ease: "power3.out" })
        .to(titleRef.current, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.8");

      // Steps staggered reveal
      stepsRef.current.forEach((step, index) => {
        if (!step) return;

        const icon = step.querySelector(".step-icon");
        const number = step.querySelector(".step-number");
        const title = step.querySelector(".step-title");
        const desc = step.querySelector(".step-desc");

        gsap.set([icon, number, title, desc], { y: 40, opacity: 0 });

        const stepTl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        stepTl
          .to(icon, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" })
          .to(number, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .to(title, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .to(desc, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");
      });

      // Subtle floating animation for icons
      gsap.to(".step-icon-inner", {
        y: -6,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
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
      <div className="px-frame max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20 md:mb-28">
          <div
            ref={lineRef}
            className="h-px bg-foreground/10 mb-8 origin-left"
          />
          <h2
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter md:-translate-x-24 lg:-translate-x-32"
          >
            Mi Proceso
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-16 md:space-y-0">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={step.id}
                ref={(el) => { stepsRef.current[index] = el; }}
                className={`flex flex-col md:flex-row md:items-center gap-8 md:gap-16 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                  <span className="step-number block font-mono text-sm text-foreground/30 mb-3 tracking-widest">
                    {step.number}
                  </span>
                  <h3 className="step-title text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                    {step.title}
                  </h3>
                  <p className="step-desc text-foreground/50 text-base md:text-lg leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>

                {/* Icon */}
                <div className="step-icon flex-shrink-0">
                  <div className="step-icon-inner w-20 h-20 md:w-24 md:h-24 rounded-full border border-foreground/10 flex items-center justify-center bg-surface">
                    <Icon size={28} className="text-foreground/60" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            );
          })}
        </div>

        {/* Connecting Line - Vertical for mobile, hidden for desktop alternating */}
        <div className="absolute left-1/2 top-[280px] bottom-32 w-px bg-foreground/5 hidden lg:block" />
      </div>
    </section>
  );
}
