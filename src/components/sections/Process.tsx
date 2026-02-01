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
    description: "Entender el problema antes de resolverlo. Análisis profundo de usuarios, competencia y contexto.",
    icon: Search,
  },
  {
    id: 2,
    number: "02",
    title: "Estructura",
    description: "Construir los cimientos. Wireframes, flujos de usuario y arquitectura de información sólida.",
    icon: Layers,
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
  const monolithRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.set(titleRef.current, { y: 60, opacity: 0 });

      // Monolith floating animation
      gsap.to(monolithRef.current, {
        y: -20,
        rotation: 2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      headerTl.to(titleRef.current, { y: 0, opacity: 1, duration: 1, ease: "power4.out" });

      // Steps 3D reveal
      stepsRef.current.forEach((step, index) => {
        if (!step) return;

        const isEven = index % 2 === 0;
        const rotateY = isEven ? 45 : -45;
        const xOffset = isEven ? -100 : 100;

        const content = step.querySelector(".step-content");
        const number = step.querySelector(".step-number");
        const iconContainer = step.querySelector(".step-icon-container");

        gsap.set(step, { 
          opacity: 0,
          x: xOffset,
          rotateY: rotateY,
        });

        gsap.set(number, { scale: 0, opacity: 0 });
        gsap.set(iconContainer, { scale: 0, rotation: -180 });

        const stepTl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        stepTl
          .to(step, { 
            opacity: 1, 
            x: 0, 
            rotateY: 0, 
            duration: 1.2, 
            ease: "power4.out" 
          })
          .to(number, { scale: 1, opacity: 0.05, duration: 0.6, ease: "back.out(1.7)" }, "-=0.8")
          .to(iconContainer, { scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.6");
      });

      // Hover tilt effect
      stepsRef.current.forEach((step) => {
        if (!step) return;

        const handleMouseMove = (e: MouseEvent) => {
          const rect = step.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;

          gsap.to(step, {
            rotateY: x * 10,
            rotateX: -y * 10,
            duration: 0.5,
            ease: "power2.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(step, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        };

        step.addEventListener("mousemove", handleMouseMove as EventListener);
        step.addEventListener("mouseleave", handleMouseLeave);
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative w-full bg-background py-32 md:py-48 overflow-hidden"
      style={{ perspective: "1500px" }}
    >
      {/* The Monolith - Cinematic Background element */}
      <div 
        ref={monolithRef}
        className="absolute right-[-5%] top-1/4 w-[40vw] h-[60vh] hidden lg:block pointer-events-none opacity-20"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 border border-foreground/20 rotate-45" />
          <div className="absolute w-72 h-72 border border-foreground/10 rotate-12" />
          <div className="absolute w-48 h-48 bg-gradient-to-br from-foreground/10 to-transparent blur-2xl" 
               style={{ transform: "translateZ(100px)" }} />
        </div>
      </div>

      <div className="px-frame max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-24 md:mb-32">
          <h2
            ref={titleRef}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase"
          >
            Proceso
          </h2>
        </div>

        {/* Steps - 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12" style={{ transformStyle: "preserve-3d" }}>
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                ref={(el) => { stepsRef.current[index] = el; }}
                className="group relative p-10 md:p-12 rounded-2xl bg-foreground/[0.02] dark:bg-white/[0.02] border border-foreground/5 
                           hover:border-foreground/10 transition-all duration-500 cursor-pointer overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Large background number */}
                <span className="step-number absolute top-[-10%] right-[-5%] text-[15rem] font-black leading-none pointer-events-none opacity-0 select-none">
                  {step.number}
                </span>

                <div className="relative z-10">
                  <div className="step-icon-container w-16 h-16 rounded-full bg-foreground/5 dark:bg-white/5 flex items-center justify-center mb-8 relative">
                    <Icon size={28} className="text-foreground/60" strokeWidth={1.5} />
                    <div className="absolute inset-0 rounded-full border border-foreground/10 scale-110 opacity-0 
                                    group-hover:scale-125 group-hover:opacity-100 transition-all duration-500" />
                  </div>

                  <div className="step-content">
                    <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-4">
                      {step.title}
                    </h3>
                    <p className="text-foreground/50 leading-relaxed max-w-[280px]">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Technical HUD element */}
                <div className="absolute bottom-6 right-8 font-mono text-[8px] uppercase tracking-[0.4em] opacity-20">
                  Phase_0{step.id}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}