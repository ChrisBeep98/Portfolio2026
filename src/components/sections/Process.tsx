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
    title: "Discovery",
    label: "01",
    desc: "Uncovering the narrative through deep research and empathy.",
    icon: Search,
    color: "#a855f7"
  },
  {
    id: 2,
    title: "Blueprint",
    label: "02",
    desc: "Defining the digital architecture with surgical precision.",
    icon: Layers,
    color: "#06b6d4"
  },
  {
    id: 3,
    title: "Sculpting",
    label: "03",
    desc: "Transforming structure into a breathtaking visual reality.",
    icon: PenTool,
    color: "#ec4899"
  },
  {
    id: 4,
    title: "Breathing",
    label: "04",
    desc: "Injecting motion to make the interface come alive.",
    icon: Sparkles,
    color: "#f97316"
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stepItems = gsap.utils.toArray(".process-slide") as HTMLElement[];

      stepItems.forEach((slide, i) => {
        const content = slide.querySelector(".slide-content");
        const number = slide.querySelector(".slide-number");
        const bgText = slide.querySelector(".slide-bg-text");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: slide,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          }
        });

        tl.fromTo(number, 
          { y: 100, opacity: 0, rotate: -45 }, 
          { y: 0, opacity: 1, rotate: 0, duration: 1, ease: "power4.out" }
        )
        .fromTo(content, 
          { x: -50, opacity: 0, skewX: -10 }, 
          { x: 0, opacity: 1, skewX: 0, duration: 1.2, ease: "expo.out" }, 
          "-=0.8"
        );

        // Background Text Parallax
        gsap.to(bgText, {
          x: i % 2 === 0 ? "10%" : "-10%",
          ease: "none",
          scrollTrigger: {
            trigger: slide,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      // Liquid Circle Rotation
      gsap.to(".liquid-circle", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="process"
      className="relative bg-background py-32 md:py-64 overflow-hidden transition-colors duration-700"
    >
      {/* UNIQUE DECORATIVE ELEMENT: The Liquid Compass */}
      <div className="liquid-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] border-[1px] border-primary/5 rounded-full pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-primary/20" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-primary/20" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-px bg-primary/20" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-px bg-primary/20" />
      </div>

      <div className="px-frame max-w-[1400px] mx-auto relative z-10">
        
        {/* Cinematic Header */}
        <div className="mb-40 md:mb-60">
          <span className="font-mono text-xs uppercase tracking-[0.6em] text-primary block mb-8">Process</span>
          <h2 className="text-6xl md:text-[10vw] font-black uppercase tracking-tighter leading-[0.8] mix-blend-difference">
            How It <br /> <span className="italic font-light opacity-50">Feels.</span>
          </h2>
        </div>

        {/* Unique Slide Stack */}
        <div className="flex flex-col gap-40 md:gap-80">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div 
                key={step.id} 
                className={`process-slide relative flex flex-col ${isEven ? "items-start" : "items-end"} w-full`}
              >
                {/* Background Large Text (Unique Layer) */}
                <h2 className="slide-bg-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black uppercase opacity-[0.03] pointer-events-none select-none whitespace-nowrap">
                  {step.title}
                </h2>

                <div className={`slide-content relative z-10 flex flex-col ${isEven ? "items-start" : "items-end"} max-w-2xl`}>
                  <div className="flex items-center gap-8 mb-12">
                    <span className="slide-number text-6xl md:text-9xl font-black text-transparent [-webkit-text-stroke:1px_var(--color-foreground)] opacity-20">
                      {step.label}
                    </span>
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center glass-engine border-none">
                      <Icon size={32} style={{ color: step.color }} />
                    </div>
                  </div>

                  <h3 className={`text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-8 ${isEven ? "text-left" : "text-right"}`}>
                    {step.title}
                  </h3>
                  
                  <p className={`text-xl md:text-3xl text-foreground/40 font-medium leading-tight max-w-lg ${isEven ? "text-left" : "text-right"}`}>
                    {step.desc}
                  </p>

                  {/* Flow Indicator */}
                  <div className={`mt-16 flex items-center gap-4 ${isEven ? "flex-row" : "flex-row-reverse"}`}>
                    <div className="w-12 h-px bg-primary" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary">Next_Stage</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final CTA Portal */}
        <div className="mt-60 md:mt-96 flex justify-center">
          <a 
            href="#contact" 
            className="group relative flex flex-col items-center"
          >
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-primary/20 flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:border-primary">
              <div className="w-full h-full absolute inset-0 bg-primary opacity-0 blur-3xl group-hover:opacity-10 transition-opacity" />
              <h2 className="text-xl font-black uppercase tracking-widest text-primary animate-pulse">Go.</h2>
            </div>
            <span className="mt-12 text-sm font-bold uppercase tracking-[0.5em] opacity-30 group-hover:opacity-100 transition-all">Start_The_Engine</span>
          </a>
        </div>

      </div>
    </section>
  );
}
