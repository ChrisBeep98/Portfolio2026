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
  const imageGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      // 1. ENTRADA DE SEDA (Silk Entry)
      tl.fromTo(".fade-up", 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 2.5, stagger: 0.15, delay: 0.2 }
      )
      .fromTo(".image-slide", 
        { x: 50, opacity: 0, scale: 1.05 },
        { x: 0, opacity: 1, scale: 1, duration: 3, ease: "power4.out" },
        "-=2"
      );

      // 2. PARALLAX ORGÁNICO
      gsap.to(".parallax-bg", {
        y: -100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5
        }
      });

      gsap.to(".parallax-fg", {
        y: -180,
        rotate: -2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-[#FAF9F6] dark:bg-[#0a0a0a] text-[#1A1A1A] dark:text-[#EAEAEA] min-h-screen font-sans selection:bg-[#1A1A1A] selection:text-white overflow-x-hidden transition-colors duration-1000">
      <Header />
      
      {/* BACKGROUND TEXTURE (Abstracción de Galería) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] dark:opacity-[0.05] z-0 flex items-center justify-center overflow-hidden">
        <h1 className="text-[40vw] font-black tracking-tighter leading-none select-none">ABOUT</h1>
      </div>

      <section className="relative pt-[18em] pb-[15em] px-frame z-10">
        
        <div className="flex flex-col lg:flex-row items-start justify-between gap-24">
          
          {/* INFO SIDE (Estilo Editorial) */}
          <div className="w-full lg:w-[45%] flex flex-col pt-10">
            <div className="fade-up mb-16">
              <p className="font-mono text-[0.6em] uppercase tracking-[0.6em] opacity-40 mb-4">Profile_Exhibit_2026</p>
              <div className="h-px w-16 bg-current opacity-20" />
            </div>

            <h1 className="fade-up text-5xl md:text-7xl lg:text-[5rem] font-light tracking-tighter leading-[1.05] mb-12 italic">
              <span className="font-bold not-italic">{t.about.w2}</span> <br/>
              UX / UI & <br/>
              <span className="opacity-30">Webflow Dev</span>
            </h1>

            <div className="fade-up max-w-lg lg:ml-8">
              <p className="text-xl md:text-2xl font-light leading-[1.6] opacity-70">
                Me dedico a diseñar experiencias digitales que ponen a las personas en el centro. Mi enfoque combina <span className="font-medium opacity-100">investigación</span>, <span className="font-medium opacity-100">estructura</span> y <span className="font-medium opacity-100">creatividad</span>.
              </p>
              <div className="mt-12 flex items-center gap-6 opacity-30 font-mono text-[0.65em] uppercase tracking-[0.3em]">
                <span>Bilingual Creative</span>
                <span className="w-1 h-1 bg-current rounded-full" />
                <span>Medellín, COL</span>
              </div>
            </div>
          </div>

          {/* VISUAL SIDE (Estilo Exposición) */}
          <div ref={imageGroupRef} className="w-full lg:w-[50%] relative aspect-[4/5] lg:aspect-auto lg:h-[85vh]">
            
            {/* Imagen Grande (The Monolith) */}
            <div className="image-slide parallax-bg relative w-full lg:w-[90%] h-full lg:h-[90%] bg-neutral-100 dark:bg-neutral-900 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                alt="Portrait" 
                className="w-full h-full object-cover grayscale brightness-105 transition-all duration-1000 hover:grayscale-0"
              />
              
              {/* Caption Minimalista */}
              <div className="absolute bottom-10 right-10 text-right mix-blend-difference text-white">
                <p className="font-bold text-xl uppercase tracking-tighter">Christian Sandoval Moná</p>
                <p className="font-mono text-[0.6em] uppercase tracking-[0.2em] opacity-60 mt-1">27 Años — Digital Architect</p>
              </div>
            </div>

            {/* Imagen Pequeña (The Floating Detail) */}
            <div className="image-slide parallax-fg absolute -bottom-16 -left-12 lg:-left-24 w-[50%] aspect-square z-20">
              <div className="w-full h-full p-3 bg-white dark:bg-[#111] shadow-[0_50px_100px_-15px_rgba(0,0,0,0.2)] rotate-3">
                <div className="w-full h-full overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop" 
                    alt="Detail" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 border border-black/5 pointer-events-none" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ELEMENTO DE CIERRE (Ficha de Galería) */}
      <div className="fixed bottom-12 right-12 fade-up pointer-events-none hidden lg:block">
        <div className="text-right">
          <p className="font-mono text-[0.5em] tracking-[0.5em] opacity-20 uppercase">Personal Exhibition / Ver. 2.6</p>
        </div>
      </div>

    </main>
  );
}