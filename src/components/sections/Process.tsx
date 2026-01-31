"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Layout, PenTool, Sparkles, Terminal, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    id: 1,
    number: "01",
    title: "Investigación",
    subtitle: "Discovery Phase",
    description: "Sumergiéndome en el problema. Entiendo el contexto, investigo a los usuarios y descubro insights ocultos que guiarán cada decisión de diseño.",
    icon: Search,
    color: "#a855f7",
    accent: "from-purple-500/20 to-transparent",
    stats: [
      { label: "User Interviews", value: "10-15" },
      { label: "Analysis", value: "Deep" },
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Estructura",
    subtitle: "Architecture",
    description: "Construyendo los cimientos digitales. Wireframes que respiran, flujos que guían intuitivamente, y sistemas de diseño escalables.",
    icon: Layout,
    color: "#06b6d4",
    accent: "from-cyan-500/20 to-transparent",
    stats: [
      { label: "Wireframes", value: "20+" },
      { label: "Flows", value: "5-8" },
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Storytelling",
    subtitle: "Visual Narrative",
    description: "Cada pixel cuenta una historia. El diseño visual no decora: comunica, emociona y crea conexiones inolvidables entre usuario y producto.",
    icon: PenTool,
    color: "#ec4899",
    accent: "from-pink-500/20 to-transparent",
    stats: [
      { label: "Visual Impact", value: "High" },
      { label: "Emotion", value: "Core" },
    ],
  },
  {
    id: 4,
    number: "04",
    title: "Microinteracciones",
    subtitle: "Living Details",
    description: "La magia está en lo invisible. Cada hover, transición y respuesta hace que la interfaz cobre vida y se sienta verdaderamente premium.",
    icon: Sparkles,
    color: "#f59e0b",
    accent: "from-amber-500/20 to-transparent",
    stats: [
      { label: "Animations", value: "60fps" },
      { label: " Polish", value: "100%" },
    ],
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const viewport = viewportRef.current;
      if (!track || !viewport) return;

      // Calculate total scroll distance
      const totalWidth = track.scrollWidth - viewport.offsetWidth;

      // Horizontal scroll animation
      const scrollTween = gsap.to(track, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            setProgress(self.progress * 100);
            const newStep = Math.min(
              Math.floor(self.progress * steps.length),
              steps.length - 1
            );
            setActiveStep(newStep);
          },
        },
      });

      // Individual step reveals with 3D effect
      stepsRef.current.forEach((step, i) => {
        if (!step) return;

        gsap.set(step, {
          opacity: 0,
          z: -200,
          rotateY: i % 2 === 0 ? 25 : -25,
        });

        gsap.to(step, {
          opacity: 1,
          z: 0,
          rotateY: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            containerAnimation: scrollTween,
            start: "left 80%",
            end: "left 50%",
            scrub: 1,
          },
        });
      });

      // Background particles animation
      gsap.to(".process-particle", {
        y: "random(-100, 100)",
        x: "random(-50, 50)",
        opacity: "random(0.1, 0.4)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.3,
          from: "random",
        },
      });

      // Stat counter animation
      gsap.from(".stat-value", {
        textContent: 0,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative w-full h-screen bg-background overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* Background Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--surface),transparent_70%)]" />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="process-particle absolute w-1 h-1 rounded-full bg-foreground/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Diegetic UI - Progress Indicator */}
      <div className="absolute top-8 left-8 z-50 flex items-center gap-4">
        <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-foreground/40">
          <Terminal size={14} />
          <span>PROCESS_PROTOCOL</span>
        </div>
        <div className="h-px w-16 bg-foreground/10" />
        <div className="font-mono text-xs text-foreground/60">
          STEP_0{activeStep + 1}/04
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-foreground/5 z-50">
        <div
          className="h-full transition-all duration-100 ease-out"
          style={{
            width: `${progress}%`,
            background: `linear-gradient(90deg, ${steps[activeStep]?.color || "#a855f7"}, transparent)`,
          }}
        />
      </div>

      {/* Step Indicators */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {steps.map((step, i) => (
          <div
            key={step.id}
            className={`w-2 h-8 rounded-full transition-all duration-500 ${
              i === activeStep
                ? "bg-foreground"
                : i < activeStep
                ? "bg-foreground/40"
                : "bg-foreground/10"
            }`}
          />
        ))}
      </div>

      {/* Horizontal Scroll Viewport */}
      <div ref={viewportRef} className="relative w-full h-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-center h-full"
          style={{ 
            width: "fit-content",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Section Title Card */}
          <div className="w-screen h-full flex flex-col justify-center px-[8vw] flex-shrink-0">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-foreground/20 to-transparent" />
                <span className="font-mono text-xs tracking-[0.3em] text-foreground/40 uppercase">
                  Methodology
                </span>
              </div>
              
              <h2 className="text-[10vw] md:text-[8vw] font-bold tracking-tighter leading-[0.85] mb-8">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
                  Mi
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-foreground/80 to-foreground/30">
                  Proceso
                </span>
              </h2>

              <p className="text-lg md:text-xl text-foreground/50 max-w-md font-light leading-relaxed">
                Un viaje de cuatro actos. De la investigación profunda a las microinteracciones perfectas.
              </p>

              <div className="mt-12 flex items-center gap-4 text-foreground/30">
                <ArrowRight size={20} className="animate-pulse" />
                <span className="font-mono text-xs tracking-widest uppercase">
                  Scroll para explorar
                </span>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeStep;
            
            return (
              <div
                key={step.id}
                ref={(el) => { stepsRef.current[index] = el; }}
                className="w-[85vw] md:w-[70vw] lg:w-[60vw] h-[70vh] flex-shrink-0 mx-[5vw]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className={`relative h-full rounded-3xl overflow-hidden border border-foreground/5 
                    transition-all duration-700 ${isActive ? "border-foreground/20" : ""}`}
                  style={{
                    background: `linear-gradient(135deg, ${step.color}05 0%, transparent 50%)`,
                  }}
                >
                  {/* Glow Effect */}
                  <div
                    className={`absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[120px] 
                      transition-opacity duration-700 ${isActive ? "opacity-30" : "opacity-10"}`}
                    style={{ backgroundColor: step.color }}
                  />

                  {/* Step Number - Large Background */}
                  <div className="absolute top-4 right-8 text-[20vw] font-bold leading-none text-foreground/[0.03] select-none pointer-events-none">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="relative h-full p-8 md:p-12 lg:p-16 flex flex-col justify-between">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500"
                          style={{ 
                            backgroundColor: `${step.color}15`,
                            transform: isActive ? "scale(1.1)" : "scale(1)",
                          }}
                        >
                          <Icon size={32} style={{ color: step.color }} strokeWidth={1.5} />
                        </div>
                        
                        <div>
                          <span className="font-mono text-xs tracking-[0.3em] uppercase text-foreground/40 block mb-1">
                            {step.subtitle}
                          </span>
                          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <div className="w-24 h-px bg-gradient-to-r from-foreground/20 to-transparent mb-8" />

                      <p className="text-lg md:text-xl text-foreground/60 leading-relaxed max-w-lg">
                        {step.description}
                      </p>
                    </div>

                    {/* Stats & Footer */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                      <div className="flex gap-12">
                        {step.stats.map((stat, i) => (
                          <div key={i}>
                            <span className="stat-value block text-3xl md:text-4xl font-bold text-foreground mb-1">
                              {stat.value}
                            </span>
                            <span className="font-mono text-xs tracking-wider text-foreground/40 uppercase">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Step progress mini-bar */}
                      <div className="flex items-center gap-3">
                        <div className="w-32 h-1 bg-foreground/10 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-300"
                            style={{
                              width: isActive ? "100%" : "0%",
                              backgroundColor: step.color,
                            }}
                          />
                        </div>
                        <span className="font-mono text-xs text-foreground/30">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Corner Accents */}
                  <div 
                    className="absolute top-0 left-0 w-24 h-24 opacity-50"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}10 0%, transparent 50%)`,
                    }}
                  />
                  <div 
                    className="absolute bottom-0 right-0 w-32 h-32 opacity-30"
                    style={{
                      background: `linear-gradient(315deg, ${step.color}15 0%, transparent 50%)`,
                    }}
                  />
                </div>
              </div>
            );
          })}

          {/* End Card */}
          <div className="w-screen h-full flex items-center justify-center flex-shrink-0 px-[8vw]">
            <div className="text-center max-w-2xl">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full border border-foreground/10 flex items-center justify-center">
                <Sparkles size={32} className="text-foreground/40" />
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                El resultado habla
              </h3>
              
              <p className="text-lg text-foreground/50 mb-12">
                Experiencias digitales que conectan, emocionan y perduran.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-foreground/20 
                  hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300 group"
              >
                <span className="font-medium tracking-wide">Iniciar un proyecto</span>
                <ArrowRight 
                  size={18} 
                  className="transition-transform duration-300 group-hover:translate-x-1" 
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Data Ticker */}
      <div className="absolute bottom-8 left-8 right-8 z-50">
        <div className="flex items-center justify-between font-mono text-xs text-foreground/30">
          <div className="flex items-center gap-6">
            <span>SCROLL_VELOCITY: {Math.round(progress * 10) / 10}%</span>
            <span className="hidden md:inline">ACTIVE_MODULE: {steps[activeStep]?.title.toUpperCase()}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: steps[activeStep]?.color }} />
            <span>SYSTEM_ACTIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
