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
    description: "Inmersión profunda en el ecosistema del usuario para extraer insights accionables.",
    icon: Search,
    coord: "40.7128° N",
  },
  {
    id: 2,
    number: "02",
    title: "Estructura",
    description: "Arquitectura lógica que sostiene la experiencia sobre cimientos invisibles pero sólidos.",
    icon: Layers,
    coord: "74.0060° W",
  },
  {
    id: 3,
    number: "03",
    title: "Storytelling",
    description: "Narrativa visual donde cada píxel tiene un propósito y cada color cuenta una historia.",
    icon: PenTool,
    coord: "34.0522° N",
  },
  {
    id: 4,
    number: "04",
    title: "Kinetics",
    description: "El arte del movimiento. Microinteracciones que dan vida y alma al producto digital.",
    icon: Sparkles,
    coord: "118.2437° W",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Reveal - Sophisticated Masking
      gsap.fromTo(titleRef.current, 
        { y: 100, opacity: 0, skewY: 5 },
        { 
          y: 0, 
          opacity: 1, 
          skewY: 0,
          duration: 1.5, 
          ease: "expo.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
          }
        }
      );

      // Cards Fluid Entry
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const content = card.querySelector(".card-inner");
        const glass = card.querySelector(".card-glass");
        const number = card.querySelector(".card-number");

        gsap.set(card, { y: 150, opacity: 0, scale: 0.9 });
        gsap.set(number, { opacity: 0, x: -20 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        });

        tl.to(card, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.2)",
          delay: index * 0.1
        })
        .to(number, {
          opacity: 0.1,
          x: 0,
          duration: 1,
          ease: "expo.out"
        }, "-=0.6")
        .to(glass, {
          backgroundColor: "rgba(var(--foreground-rgb), 0.03)",
          duration: 1,
        }, "-=1");

        // Advanced Mouse Interaction (3D Tilt with quickTo)
        const xTo = gsap.quickTo(card, "rotateY", { duration: 0.4, ease: "power3" });
        const yTo = gsap.quickTo(card, "rotateX", { duration: 0.4, ease: "power3" });

        const handleMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          
          xTo(x * 15);
          yTo(-y * 15);
        };

        const handleMouseLeave = () => {
          xTo(0);
          yTo(0);
        };

        card.addEventListener("mousemove", handleMouseMove as EventListener);
        card.addEventListener("mouseleave", handleMouseLeave);
      });

      // Ambient Atmosphere Particles
      gsap.to(".ambient-glow", {
        opacity: 0.4,
        scale: 1.2,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative w-full bg-background py-32 md:py-56 overflow-hidden"
      style={{ perspective: "2000px" }}
    >
      {/* Cinematic Atmosphere */}
      <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px] ambient-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-foreground/5 rounded-full blur-[100px] ambient-glow pointer-events-none" />

      <div className="px-frame max-w-7xl mx-auto relative z-10">
        {/* Sophisticated Header */}
        <div className="mb-32 md:mb-44 flex flex-col items-center text-center">
          <div className="mb-6 overflow-hidden">
            <span className="inline-block font-mono text-xs tracking-[0.5em] uppercase text-foreground/40 translate-y-full animate-reveal">
              Workflow Sequence
            </span>
          </div>
          <h2
            ref={titleRef}
            className="text-7xl md:text-9xl font-extralight tracking-tight uppercase"
          >
            Mi <span className="font-black italic">Proceso</span>
          </h2>
        </div>

        {/* Floating Glass Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="group relative h-[450px] cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Large Background Number - Elegant Watermark */}
                <span className="card-number absolute -top-10 -left-6 text-[18rem] font-black leading-none select-none pointer-events-none text-foreground opacity-0">
                  {step.number}
                </span>

                {/* Glass Layer */}
                <div className="card-glass absolute inset-0 rounded-[2rem] border border-foreground/10 backdrop-blur-3xl transition-colors duration-500 overflow-hidden">
                  {/* Subtle Gradient Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-8 right-8 flex flex-col items-end gap-1">
                    <div className="w-12 h-[1px] bg-foreground/20" />
                    <span className="font-mono text-[10px] text-foreground/30 uppercase tracking-widest">
                      {step.coord}
                    </span>
                  </div>

                  <div className="card-inner relative z-10 p-12 h-full flex flex-col justify-end">
                    <div className="mb-8 w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center border border-foreground/10 group-hover:border-primary/50 transition-colors duration-500">
                      <Icon size={24} className="text-foreground/60 group-hover:text-primary transition-colors" />
                    </div>

                    <h3 className="text-4xl font-bold uppercase tracking-tighter mb-4 translate-z-20">
                      {step.title}
                    </h3>
                    <p className="text-foreground/50 text-lg leading-relaxed max-w-[320px] font-light">
                      {step.description}
                    </p>

                    {/* Progress Bar Detail */}
                    <div className="mt-10 w-full h-[2px] bg-foreground/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-foreground/20 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-expo" />
                    </div>
                  </div>
                </div>

                {/* HUD Data Overlay */}
                <div className="absolute -bottom-4 -right-4 font-mono text-[8px] text-foreground/20 uppercase tracking-[0.3em] group-hover:text-foreground/40 transition-colors">
                  [ System_Scan_Ready // {step.id * 25}% ]
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes reveal {
          to { transform: translateY(0); }
        }
        .animate-reveal {
          animation: reveal 1s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }
      `}</style>
    </section>
  );
}