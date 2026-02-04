"use client";

import React, { useRef, useEffect } from "react";
import Header from "@/components/sections/Header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. THE SLAM ENTRY (Clean & Direct)
      tl.fromTo(".tech-grid-line", 
        { scaleY: 0 }, 
        { scaleY: 1, duration: 1.2, stagger: 0.03, transformOrigin: "top" }
      )
      .fromTo(".slam-left",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, stagger: 0.1 },
        "-=0.8"
      )
      .fromTo(".slam-right",
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5 },
        "-=1.2"
      );

      // 2. ARCHITECTURAL DEPTH (Straight Parallax Only)
      gsap.to(".parallax-monolith", {
        y: -120,
        scale: 1.05,
        scrollTrigger: {
          trigger: ".parallax-monolith",
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.to(".parallax-insight", {
        y: -220,
        scrollTrigger: {
          trigger: ".parallax-insight",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });

      gsap.to(".vertical-text", {
        y: -60,
        scrollTrigger: {
          trigger: ".parallax-monolith",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8
        }
      });

      // Technical Footer: Slides up to meet the content with slightly more inertia
      gsap.to(".tech-specs", {
        y: -100,
        scrollTrigger: {
          trigger: ".parallax-monolith",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-[#F2F2F0] dark:bg-[#050505] text-foreground min-h-screen font-sans selection:bg-orange-500 selection:text-white transition-colors duration-1000 overflow-x-hidden">
      <Header />
      
      {/* GRID ESTRUCTURAL (12 Cols en Desktop, 4 en Mobile) */}
      <div className="fixed inset-0 pointer-events-none z-0 px-frame">
        <div className="grid grid-cols-4 lg:grid-cols-12 h-full w-full gap-0">
          <div className="tech-grid-line w-px h-full bg-foreground/[0.03] dark:bg-white/[0.03] relative" />
          <div className="tech-grid-line w-px h-full bg-foreground/[0.03] dark:bg-white/[0.03] relative" />
          <div className="tech-grid-line w-px h-full bg-foreground/[0.03] dark:bg-white/[0.03] relative" />
          <div className="tech-grid-line w-px h-full bg-foreground/[0.03] dark:bg-white/[0.03] relative" />
          {[...Array(9)].map((_, i) => (
            <div key={i} className="tech-grid-line hidden lg:block w-px h-full bg-foreground/[0.03] dark:bg-white/[0.03] relative" />
          ))}
        </div>
      </div>

      <section className="relative pt-[8em] lg:pt-[14em] pb-[10em] px-frame z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">
          
          {/* TEXT CONTENT */}
          <div className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-20">
            <div className="slam-left mb-12">
              <span className="font-mono text-[0.6em] uppercase tracking-[0.5em] text-orange-500 font-bold flex items-center gap-4">
                <span className="w-8 h-px bg-orange-500" />
                <span className="italic">{t.about.profile}</span>
              </span>
            </div>

            <div className="space-y-4 mb-16">
              <h1 className="slam-left text-5xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter leading-[0.85] uppercase text-black dark:text-white">Christian</h1>
              <h1 className="slam-left text-5xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter leading-[0.85] uppercase text-black dark:text-white">Sandoval</h1>
              <h1 className="slam-left text-5xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter leading-[0.85] uppercase text-black dark:text-white">Moná</h1>
            </div>

            <div className="slam-left max-w-xl border-l-0 lg:border-l-2 border-orange-500 pl-0 lg:pl-8 space-y-8">
              <p className="text-2xl md:text-3xl font-light leading-snug text-foreground/70">
                Me dedico a diseñar experiencias digitales que ponen a las personas en el centro. Mi enfoque combina <span className="text-foreground font-bold">investigación</span>, <span className="text-foreground font-bold">estructura</span> y <span className="text-foreground font-bold">creatividad</span>.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {["UX / UI", "Webflow Dev", "Bilingual"].map((tag) => (
                  <span key={tag} className="px-4 py-1 border border-foreground/10 rounded-full font-mono text-[0.55em] uppercase tracking-widest opacity-40">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* VISUAL EXHIBITION */}
          <div className="lg:col-span-5 relative mt-16 lg:mt-0">
            
            {/* Main Monolith */}
            <div className="slam-right parallax-monolith relative w-full aspect-[3/4.2] bg-neutral-200 dark:bg-neutral-900 shadow-2xl overflow-hidden group rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                alt="Portrait" 
                className="w-full h-full object-cover grayscale brightness-110 contrast-110 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay opacity-0 dark:opacity-100 transition-opacity" />
              <div className="absolute top-6 right-6 font-mono text-[0.45em] tracking-[0.4em] text-white mix-blend-difference vertical-text">CS_REF_001</div>
            </div>

            {/* Insight Image (Printed Photo Aesthetic - Responsive Padding) */}
            <div className="slam-left parallax-insight absolute -bottom-24 lg:-bottom-16 right-0 lg:right-auto lg:-left-24 w-[55%] aspect-[1/1.2] z-20 p-[6px] lg:p-4 pb-12 lg:pb-12 bg-[#F2F2F0] dark:bg-[#050505] shadow-2xl border border-foreground/5 rounded-sm overflow-hidden">
              <div className="w-full aspect-square overflow-hidden mb-6 lg:mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop" 
                  alt="Detail" 
                  className="w-full h-full object-cover opacity-80 grayscale"
                />
              </div>
              <div className="flex justify-between items-center px-2 lg:px-0 opacity-40 font-mono text-[0.5rem] tracking-[0.3em] uppercase">
                <span>[ DETAIL_VIEW ]</span>
                <span>RAW_DATA</span>
              </div>
            </div>

            {/* Technical Specs */}
            <div className="mt-32 md:mt-20 text-left lg:text-right slam-right tech-specs">
              <div className="flex flex-col lg:flex-row lg:justify-end items-start lg:items-center gap-4 mt-2">
                <div className="h-px w-12 bg-orange-500 hidden lg:block" />
                <p className="font-mono text-[0.65em] uppercase tracking-[0.3em] opacity-40 leading-loose">
                  <span className="block lg:inline">27 Años</span>
                  <span className="hidden lg:inline ml-2">/</span>
                  <span className="block lg:inline lg:ml-2">Salento, COL</span>
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <div className="fixed bottom-12 left-12 mix-blend-difference z-40 hidden lg:block opacity-20 pointer-events-none">
        <p className="font-mono text-[0.5em] tracking-[1em] uppercase rotate-[-90deg] origin-left">ART_DIRECTION_2026</p>
      </div>
    </main>
  );
}
