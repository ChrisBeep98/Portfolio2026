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
    color: "#8b5cf6",
    gradient: "from-violet-500/20 to-purple-500/5",
  },
  {
    id: 2,
    number: "02",
    title: "Estructura",
    description: "Construir los cimientos. Wireframes, flujos de usuario y arquitectura de información sólida.",
    icon: Layout,
    color: "#06b6d4",
    gradient: "from-cyan-500/20 to-blue-500/5",
  },
  {
    id: 3,
    number: "03",
    title: "Storytelling",
    description: "Cada interfaz cuenta una historia. Diseño visual que comunica, emociona y conecta.",
    icon: PenTool,
    color: "#ec4899",
    gradient: "from-pink-500/20 to-rose-500/5",
  },
  {
    id: 4,
    number: "04",
    title: "Microinteracciones",
    description: "La magia está en los detalles. Animaciones y respuestas que hacen la experiencia memorable.",
    icon: Sparkles,
    color: "#f59e0b",
    gradient: "from-amber-500/20 to-orange-500/5",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      // Scale pulse animation on scroll into view
      iconsRef.current.forEach((iconContainer, index) => {
        if (!iconContainer) return;

        const icon = iconContainer.querySelector(".icon-inner");
        
        // Entry animation
        gsap.fromTo(iconContainer,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: iconContainer,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.1,
          }
        );
      });

      // Hover interaction
      iconsRef.current.forEach((iconContainer) => {
        if (!iconContainer) return;
        
        const icon = iconContainer.querySelector(".icon-inner");
        
        iconContainer.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
        
        iconContainer.addEventListener("mouseleave", () => {
          gsap.to(icon, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative w-full bg-background py-32 md:py-40 overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="px-frame max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20 md:mb-28">
          <h2
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter md:-translate-x-64 lg:-translate-x-80 mb-8"
          >
            Mi Proceso
          </h2>
          <div
            ref={lineRef}
            className="h-px bg-foreground/10 origin-left w-[calc(100%+16rem)] md:w-[calc(100%+20rem)] lg:w-[calc(100%+25rem)] -ml-64 md:-ml-80 lg:-mr-80 md:-mr-64"
          />
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
                  <span className="step-number block font-mono text-sm mb-3 tracking-widest" style={{ color: step.color }}>
                    {step.number}
                  </span>
                  <h3 className="step-title text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                    {step.title}
                  </h3>
                  <p className="step-desc text-foreground/50 text-base md:text-lg leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>

                {/* Icon with hover animation */}
                <div
                  className="step-icon flex-shrink-0 relative cursor-pointer"
                  ref={(el) => { iconsRef.current[index] = el; }}
                >
                  {/* Subtle glow */}
                  <div
                    className="absolute inset-0 rounded-2xl blur-2xl opacity-10"
                    style={{ backgroundColor: step.color }}
                  />
                  
                  {/* Inner icon container */}
                  <div
                    className="icon-inner relative w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center transition-colors duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}10, transparent)`,
                      border: `1px solid ${step.color}25`,
                    }}
                  >
                    <Icon
                      size={32}
                      style={{ color: step.color }}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
