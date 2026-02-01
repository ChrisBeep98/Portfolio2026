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
    description: "Análisis profundo de variables para encontrar la esencia del problema.",
    icon: Search,
  },
  {
    id: 2,
    number: "02",
    title: "Estructura",
    description: "Construcción de cimientos lógicos que garantizan una experiencia sólida.",
    icon: Layers,
  },
  {
    id: 3,
    number: "03",
    title: "Diseño Visual",
    description: "Creación de un lenguaje estético que comunica sin necesidad de palabras.",
    icon: PenTool,
  },
  {
    id: 4,
    number: "04",
    title: "Kinetics",
    description: "El arte del movimiento aplicado para dar vida y alma a la interfaz.",
    icon: Sparkles,
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleLettersRef = useRef<HTMLSpanElement[]>([]);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. TITLE REVEAL (Kinetic Typography)
      const titleChars = titleLettersRef.current.filter(Boolean);
      const titleTrigger = document.getElementById("process-title");

      if (titleChars.length && titleTrigger) {
        gsap.fromTo(titleChars, 
          { y: 150, opacity: 0, rotateX: -90 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.5,
            stagger: 0.05,
            ease: "expo.out",
            scrollTrigger: {
              trigger: titleTrigger,
              start: "top 90%",
            }
          }
        );
      }

      // 2. STEPS COREOGRAPHY
      stepsRef.current.forEach((step) => {
        if (!step) return;

        const iconBox = step.querySelector(".icon-box");
        const icon = step.querySelector(".icon-svg");
        const number = step.querySelector(".step-number");
        const title = step.querySelector(".step-title");
        const desc = step.querySelector(".step-desc");
        const line = step.querySelector(".step-line");

        // Initial States
        gsap.set([iconBox, icon], { scale: 0, rotate: -45 });
        gsap.set(line, { scaleX: 0 });
        gsap.set([title, desc, number], { y: 30, opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        });

        tl.to(iconBox, { scale: 1, rotate: 0, duration: 0.8, ease: "back.out(1.7)" })
          .to(icon, { scale: 1, rotate: 0, duration: 0.6, ease: "power3.out" }, "-=0.6")
          .to(line, { scaleX: 1, duration: 1, ease: "expo.inOut" }, "-=0.4")
          .to(number, { y: 0, opacity: 0.1, duration: 0.8 }, "-=0.8")
          .to([title, desc], { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" }, "-=0.6");
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
      <div ref={containerRef} className="px-frame max-w-7xl mx-auto">
        
        {/* MASSIVE KINETIC TITLE */}
        <div id="process-title" className="mb-48 md:mb-72 flex flex-wrap gap-x-[0.2em] overflow-visible">
          {"MI PROCESO".split("").map((char, i) => (
            <span 
              key={i} 
              ref={(el) => { if (el) titleLettersRef.current[i] = el; }}
              className={`inline-block text-7xl md:text-9xl lg:text-[12rem] font-black tracking-tighter uppercase leading-none ${char === " " ? "w-[0.2em]" : ""}`}
              style={{ perspective: "1000px" }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* MOTION GRAPHICS STEPS */}
        <div className="flex flex-col gap-32 md:gap-56">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                ref={(el) => { stepsRef.current[index] = el; }}
                className="relative flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-24 group"
              >
                {/* Number Watermark */}
                <span className="step-number absolute -top-12 -left-8 text-8xl md:text-[15rem] font-black pointer-events-none select-none opacity-0">
                  {step.number}
                </span>

                {/* Animated Icon Node */}
                <div className="relative flex-shrink-0">
                  <div className="icon-box w-20 h-20 md:w-24 md:h-24 border border-foreground/10 flex items-center justify-center bg-background relative z-10">
                    <div className="icon-svg text-foreground/60 group-hover:text-foreground transition-colors duration-500">
                      <Icon size={32} strokeWidth={1.2} />
                    </div>
                  </div>
                  {/* Decorative corner accents */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-foreground/40" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-foreground/40" />
                </div>

                {/* Content Block */}
                <div className="flex-1 relative">
                  <div className="step-line absolute -top-4 left-0 w-full h-px bg-foreground/10 origin-left" />
                  
                  <h3 className="step-title text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">
                    {step.title}
                  </h3>
                  <p className="step-desc text-foreground/50 text-xl md:text-2xl font-medium leading-tight max-w-3xl">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}