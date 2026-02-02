"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Layers, MessageCircle, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Stacking Card Component - Alternating Layout
function ProcessCard({
  phase,
  index,
  totalCards,
}: {
  phase: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    icon: React.ElementType<any>;
    iconColor: string;
  };
  index: number;
  totalCards: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<HTMLDivElement>(null);

  // Determine if card is on left or right side
  const isLeft = index % 2 === 0;

  useEffect(() => {
    if (!cardRef.current || !iconRef.current) return;

    const ctx = gsap.context(() => {
      // Icon floating animation
      gsap.to(iconRef.current, {
        y: -8,
        rotation: isLeft ? 5 : -5,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        force3D: true,
      });

      // Ring pulse animation
      if (ringsRef.current) {
        const rings = ringsRef.current.children;
        gsap.to(rings, {
          scale: 1.5,
          opacity: 0,
          duration: 2,
          stagger: 0.6,
          repeat: -1,
          ease: "power2.out",
          force3D: true,
        });
      }
    }, cardRef);

    return () => ctx.revert();
  }, [isLeft]);

  const Icon = phase.icon as any;

  return (
    <div
      ref={cardRef}
      className={`process-card w-full flex ${isLeft ? 'justify-start' : 'justify-end'}`}
      style={{ zIndex: index + 1 }}
      data-index={index}
    >
      <div
        className={`relative flex flex-col md:flex-row gap-6 md:gap-10 p-6 md:p-10 rounded-3xl backdrop-blur-xl transition-all duration-500 w-full md:w-[85%] lg:w-[75%] ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
        style={{
          background: `linear-gradient(135deg, ${phase.iconColor}10 0%, rgba(242,242,240,0.8) 50%, rgba(255,255,255,0.4) 100%)`,
          border: `1px solid ${phase.iconColor}30`,
          boxShadow: `0 25px 80px -20px ${phase.iconColor}20, 0 0 0 1px rgba(255,255,255,0.5) inset`,
        }}
      >
        {/* Large Icon Section */}
        <div className="relative flex-shrink-0 flex items-center justify-center w-full md:w-48 lg:w-56">
          {/* Animated rings behind icon */}
          <div ref={ringsRef} className="absolute inset-0 flex items-center justify-center">
            <div
              className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full border-2 opacity-40"
              style={{ borderColor: phase.iconColor }}
            />
            <div
              className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full border opacity-30"
              style={{ borderColor: phase.iconColor }}
            />
            <div
              className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full border opacity-20"
              style={{ borderColor: phase.iconColor, borderStyle: "dashed" }}
            />
          </div>

          {/* Icon container */}
          <div
            ref={iconRef}
            className="relative z-10 w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-2xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${phase.iconColor}20, ${phase.iconColor}05)`,
              boxShadow: `0 0 40px ${phase.iconColor}30, inset 0 1px 0 rgba(255,255,255,0.3)`,
            }}
          >
            <Icon
              size={48}
              strokeWidth={1.2}
              style={{ color: phase.iconColor }}
              className="md:w-14 md:h-14 lg:w-16 lg:h-16 drop-shadow-lg"
            />
          </div>

          {/* Phase number badge */}
          <div
            className={`absolute -top-2 ${isLeft ? '-left-2 md:left-0' : '-right-2 md:right-0'} md:top-0 px-3 py-1.5 rounded-full text-xs font-mono font-bold`}
            style={{
              background: phase.iconColor,
              color: "#fff",
              boxShadow: `0 4px 15px ${phase.iconColor}50`,
            }}
          >
            0{phase.id}
          </div>
        </div>

        {/* Content Section */}
        <div className={`flex-1 flex flex-col justify-center ${isLeft ? 'md:text-left' : 'md:text-right md:items-end'}`}>
          {/* Subtitle */}
          <span
            className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-mono mb-2"
            style={{ color: phase.iconColor }}
          >
            {phase.subtitle}
          </span>

          {/* Title with gradient text */}
          <h3
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            style={{
              background: `linear-gradient(135deg, #050505 0%, ${phase.iconColor} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {phase.title}
          </h3>

          {/* Description */}
          <p className="text-sm md:text-base text-foreground/60 leading-relaxed max-w-xl">
            {phase.description}
          </p>

          {/* Progress bar */}
          <div className={`mt-6 flex items-center gap-3 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
            <div className="flex-1 h-1 bg-foreground/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: `${((index + 1) / totalCards) * 100}%`,
                  background: `linear-gradient(90deg, ${phase.iconColor}, ${phase.iconColor}80)`,
                }}
              />
            </div>
            <span className="text-xs font-mono text-foreground/40">
              {index + 1}/{totalCards}
            </span>
          </div>
        </div>

        {/* Decorative corner */}
        <div
          className={`absolute bottom-0 ${isLeft ? 'right-0' : 'left-0'} w-32 h-32 opacity-10 pointer-events-none`}
          style={{
            background: `radial-gradient(circle at ${isLeft ? 'bottom right' : 'bottom left'}, ${phase.iconColor} 0%, transparent 70%)`,
          }}
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
    description:
      "Análisis profundo del usuario y contexto. Datos antes de intuición. Investigación de mercado, entrevistas y análisis competitivo para construir una base sólida.",
    icon: Search,
    iconColor: "#a855f7",
  },
  {
    id: 2,
    title: "Estructura",
    subtitle: "Architecture",
    description:
      "Arquitectura de información clara. Flujos de usuario optimizados, wireframes de alta fidelidad y prototipos interactivos que definen la experiencia.",
    icon: Layers,
    iconColor: "#06b6d4",
  },
  {
    id: 3,
    title: "Storytelling",
    subtitle: "Narrative",
    description:
      "Cada interfaz cuenta una historia. Diseño emocional intencional que conecta con los usuarios y crea experiencias memorables y significativas.",
    icon: MessageCircle,
    iconColor: "#ec4899",
  },
  {
    id: 4,
    title: "Microinteracciones",
    subtitle: "Details",
    description:
      "Los detalles invisibles que hacen la diferencia. Cada hover, transición y animación calibrada para deleitar y guiar al usuario naturalmente.",
    icon: Sparkles,
    iconColor: "#f97316",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title animation
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

      // Cards entrance animation - alternating from sides
      const cards = gsap.utils.toArray<HTMLElement>(".process-card");
      cards.forEach((card, i) => {
        const isLeft = i % 2 === 0;
        gsap.fromTo(
          card,
          { 
            x: isLeft ? -100 : 100, 
            opacity: 0,
            scale: 0.95
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            force3D: true,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            delay: i * 0.1,
          }
        );
      });

      // Progress bar animation
      if (progressRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.3,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split title into characters
  const titleText = "Mi Proceso";
  const titleChars = titleText.split("").map((char, i) => (
    <span
      key={i}
      className="title-char inline-block"
      style={{ perspective: "1000px" }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative bg-background"
    >
      {/* Fixed Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-foreground/5 z-50">
        <div
          ref={progressRef}
          className="h-full origin-left"
          style={{
            background:
              "linear-gradient(90deg, #a855f7, #06b6d4, #ec4899, #f97316)",
          }}
        />
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-pink-500/5 blur-3xl" />
      </div>

      <div className="px-frame relative z-10">
        {/* Header - Sticky */}
        <div
          ref={titleRef}
          className="sticky top-0 pt-[var(--section-gap)] pb-8 bg-background/95 backdrop-blur-md z-30 border-b border-foreground/5"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-[var(--content-gap)]">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight overflow-hidden">
              {titleChars}
            </h2>
            <div className="flex items-center gap-[var(--content-gap)]">
              <div className="w-2 h-2 rounded-full bg-foreground/30 animate-pulse" />
              <span className="text-sm text-foreground/50 font-mono uppercase tracking-[0.2em]">
                Scroll to explore
              </span>
            </div>
          </div>
        </div>

        {/* Cards Container - Alternating zigzag layout */}
        <div
          ref={cardsContainerRef}
          className="relative py-[var(--block-gap)]"
        >
          <div className="flex flex-col gap-12 md:gap-16">
            {phases.map((phase, index) => (
              <ProcessCard
                key={phase.id}
                phase={phase}
                index={index}
                totalCards={phases.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
