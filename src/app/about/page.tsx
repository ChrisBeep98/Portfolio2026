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
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. INITIAL LOAD ANIMATION (Grow & Reveal)
      tl.fromTo(".tech-grid-line", 
        { scaleY: 0 }, 
        { scaleY: 1, duration: 1.5, stagger: 0.05, transformOrigin: "top" }
      )
      .fromTo(".hero-text-reveal",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1 },
        "-=1.0"
      )
      // Name Mask Reveal
      .fromTo(".name-title-mask", 
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "power4.out" },
        "-=1.2"
      )
      .fromTo(".name-title-text", 
        { y: "100%" },
        { y: "0%", duration: 1.5, ease: "power4.out" },
        "<"
      )
      // Optimized Image Reveal (GPU Accelerated)
      .fromTo(".reveal-monolith", 
        { scale: 1.1, opacity: 0, filter: "blur(10px)" },
        { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.8, ease: "expo.out", force3D: true },
        "-=1.2"
      )
      .fromTo(".reveal-insight",
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 1.5, ease: "elastic.out(1, 0.75)", force3D: true },
        "-=1.4"
      );

      // 2. PARALLAX SCROLL (Optimized Scrub)
      gsap.to(".parallax-monolith-layer", {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-monolith-layer",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5 // Smoother scrubbing
        }
      });

      gsap.to(".parallax-insight-layer", {
        y: -250, // Faster movement for depth
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-insight-layer",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8
        }
      });

      gsap.to(".vertical-text", {
        y: -80,
        scrollTrigger: {
          trigger: ".parallax-monolith-layer",
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      // 3. STORY ANIMATION
      const storyTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".story-section",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      storyTl.fromTo(".story-title-mask", 
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power4.out" }
      )
      .fromTo(".story-title-text", 
        { y: "100%" },
        { y: "0%", duration: 1.2, ease: "power4.out" }, "<"
      )
      .from(".story-reveal-item", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8");

      // 4. TOOLS MASTER PINNING & REVEAL
      const toolsTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".tools-section",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      toolsTl.fromTo(".tools-title-mask", 
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power4.out" }
      )
      .fromTo(".tools-title-text", 
        { y: "100%" },
        { y: "0%", duration: 1.2, ease: "power4.out" }, "<"
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-background text-foreground min-h-screen font-sans transition-colors duration-1000">
      <Header />
      
      {/* GRID ESTRUCTURAL */}
      <div className="fixed inset-0 pointer-events-none z-0 px-frame">
        <div className="grid grid-cols-4 lg:grid-cols-12 h-full w-full gap-0">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`tech-grid-line w-px h-full bg-foreground/[0.03] dark:bg-white/[0.03] relative ${i > 3 ? 'hidden lg:block' : ''}`} />
          ))}
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-[8em] lg:pt-[12em] pb-[2em] px-frame z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">
          
          {/* TEXT CONTENT */}
          <div className="lg:col-span-7 flex flex-col pr-0 lg:pr-20">
            <div className="mb-6 lg:mb-12">
              <span className="font-mono text-[0.6em] uppercase tracking-[0.5em] text-orange-500 font-bold flex items-center gap-4">
                <span className="w-8 h-px bg-orange-500" />
                <span className="italic">{t.about.profile}</span>
              </span>
            </div>
            <div className="mb-8 lg:mb-16 max-w-4xl">
              <div className="name-title-mask overflow-hidden">
                <h1 className="name-title-text text-4xl md:text-7xl lg:text-[4.5rem] font-bold tracking-tighter leading-[1.1] uppercase text-black dark:text-white">
                  Christian Sandoval Moná
                </h1>
              </div>
            </div>
            <div className="hero-text-reveal max-w-xl border-l-0 lg:border-l-2 border-orange-500 pl-0 lg:pl-8 space-y-8 text-xl md:text-2xl font-light leading-snug text-foreground/70">
              <p>{t.about.intro}</p>
              <div className="flex flex-wrap gap-4 pt-4">
                {["UX / UI", "Webflow Dev", "Bilingual"].map((tag) => (
                  <span key={tag} className="px-4 py-1 border border-foreground/10 rounded-full font-mono text-[0.55em] uppercase tracking-widest opacity-40">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* VISUAL EXHIBITION (Refactored) */}
          <div className="lg:col-span-5 relative mt-16 lg:mt-0">
            
            {/* Main Monolith */}
            <div className="reveal-monolith parallax-monolith-layer relative w-full aspect-[3/4.2] bg-neutral-200 dark:bg-neutral-900 shadow-2xl overflow-hidden rounded-sm will-change-transform">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" alt="Portrait" className="w-full h-full object-cover grayscale brightness-110 contrast-110" />
              <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay opacity-0 dark:opacity-100 transition-opacity" />
              <div className="absolute top-6 right-6 font-mono text-[0.45em] tracking-[0.4em] text-white mix-blend-difference vertical-text">CS_REF_001</div>
            </div>

            {/* Insight Image (Elevated Position & Optimized) */}
            <div className="reveal-insight parallax-insight-layer absolute -bottom-12 lg:-bottom-8 right-0 lg:right-auto lg:-left-24 w-[55%] aspect-[1/1.2] z-20 p-[0.35em] lg:p-4 pb-12 bg-background shadow-2xl border border-foreground/5 rounded-sm overflow-hidden will-change-transform">
              <div className="w-full aspect-square overflow-hidden mb-6 grayscale">
                <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop" alt="Detail" className="w-full h-full object-cover opacity-80" />
              </div>
              <div className="flex justify-between items-center px-2 lg:px-0 opacity-40 font-mono text-[0.5rem] tracking-[0.3em] uppercase"><span>[ DETAIL_VIEW ]</span><span>RAW_DATA</span></div>
            </div>

            {/* Tech Specs */}
            <div className="mt-32 md:mt-20 text-left lg:text-right hero-text-reveal">
              <p className="font-mono text-[0.65em] uppercase tracking-[0.3em] opacity-40 leading-loose">27 Años / Salento, COL</p>
            </div>
          </div>

        </div>
      </section>

      {/* STORY SECTION */}
      <section className="story-section relative py-[6em] lg:pt-[8em] lg:pb-[10em] px-frame border-t border-foreground/5 z-10 bg-background">
        <div className="mb-16">
          <span className="font-mono text-[0.6em] uppercase tracking-[0.5em] text-orange-500 font-bold block mb-4 story-reveal-item">02 / Historia</span>
          <div className="story-title-mask overflow-hidden">
            <h3 className="story-title-text text-[2.5rem] md:text-7xl lg:text-[4.5rem] font-bold uppercase tracking-tighter leading-none text-foreground">
              {t.story.title}
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[3em] lg:gap-[5em] items-start">
          <div className="story-reveal-item"><p className="text-xl font-light leading-relaxed text-foreground/70">{t.story.p1}</p></div>
          <div className="story-reveal-item"><p className="text-xl font-light leading-relaxed text-foreground/70">{t.story.p2}</p></div>
          <div className="relative group story-reveal-item">
            <span className="font-mono text-[0.6em] uppercase tracking-[0.3em] text-foreground/20 font-bold block mb-8">[ {t.story.disciplinesTitle} ]</span>
            <div className="space-y-2">
              {t.story.disciplinesList.map((item, i) => (
                <div key={i} className="flex items-center gap-6 py-4 px-6 rounded-xl border border-transparent hover:border-foreground/5 hover:bg-foreground/[0.01] transition-all duration-500 group/item">
                  <span className="font-mono text-[0.6em] text-orange-500/40 group-hover/item:text-orange-500 transition-colors">0{i + 1}</span>
                  <span className="text-lg font-bold uppercase tracking-tight text-foreground/80 group-hover/item:text-foreground transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS SECTION (Refactored & Stable) */}
      <section className="tools-section relative py-[6em] lg:py-[10em] px-frame border-t border-foreground/5 z-10 bg-background overflow-visible">
        <div className="flex flex-col lg:flex-row items-start">
          
          {/* LADO IZQUIERDO: Sticky Nativo */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32 mb-20 lg:mb-0">
            <div className="lg:pr-24">
              <div className="tools-title-mask overflow-hidden">
                <h3 className="tools-title-text text-[2.5rem] md:text-7xl lg:text-[4.5rem] font-bold uppercase tracking-tighter leading-[0.85] text-foreground mb-8">
                  {t.tools.title}
                </h3>
              </div>
              <p className="text-xl font-light leading-relaxed text-foreground/60 max-w-sm">{t.tools.description}</p>
            </div>
          </div>

          {/* LADO DERECHO: Checkerboard Real */}
          <div className="w-full lg:w-7/12 flex justify-end">
            <div className="grid grid-cols-2 w-full max-w-3xl bg-transparent">
              {t.tools.items.map((tool, i) => {
                const isEven = i % 2 === 0;
                return (
                  <React.Fragment key={i}>
                    {isEven ? (
                      <>
                        <div className="group relative aspect-square lg:aspect-[1.3/1] bg-white dark:bg-[#0A0A0A] border border-foreground/[0.06] dark:border-white/[0.04] rounded-[3px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:shadow-orange-500/10 hover:border-orange-500/40 hover:z-20 transition-all duration-700 flex flex-col items-start justify-between text-left p-8">
                          <div className="w-full flex justify-between items-start">
                            <div className="group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700 ease-out">
                              {/* @ts-ignore */}
                              <img src={tool.img} alt={tool.name} className="w-10 h-10 object-contain transition-all duration-500" />
                            </div>
                            <div className="w-2 h-2 bg-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                          </div>
                          <div>
                            <span className="font-bold text-xl lg:text-2xl tracking-tighter text-foreground block mb-2">{tool.name}</span>
                            <p className="text-[0.8em] lg:text-[0.9em] leading-relaxed text-foreground/70 group-hover:text-foreground transition-colors duration-500 font-light">{tool.desc}</p>
                          </div>
                        </div>
                        <div className="aspect-square lg:aspect-[1.3/1]" />
                      </>
                    ) : (
                      <>
                        <div className="aspect-square lg:aspect-[1.3/1]" />
                        <div className="group relative aspect-square lg:aspect-[1.3/1] bg-white dark:bg-[#0A0A0A] border border-foreground/[0.06] dark:border-white/[0.04] rounded-[3px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:shadow-orange-500/10 hover:border-orange-500/40 hover:z-20 transition-all duration-700 flex flex-col items-start justify-between text-left p-8">
                          <div className="w-full flex justify-between items-start">
                            <div className="group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700 ease-out">
                              {/* @ts-ignore */}
                              <img src={tool.img} alt={tool.name} className="w-10 h-10 object-contain transition-all duration-500" />
                            </div>
                            <div className="w-2 h-2 bg-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                          </div>
                          <div>
                            <span className="font-bold text-xl lg:text-2xl tracking-tighter text-foreground block mb-2">{tool.name}</span>
                            <p className="text-[0.8em] lg:text-[0.9em] leading-relaxed text-foreground/70 group-hover:text-foreground transition-colors duration-500 font-light">{tool.desc}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </React.Fragment>
                );
              })}
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
