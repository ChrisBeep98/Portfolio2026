"use client";

import React, { useRef, useEffect } from "react";
import Header from "@/components/sections/Header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import { Figma, Globe, Box, Sparkles, Cpu, Move } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const getToolIcon = (name: string) => {
    const iconClass = "transition-all duration-700 ease-out";
    switch (name) {
      case "FIGMA": return <Figma strokeWidth={1} size={42} className={`${iconClass} text-[#F24E1E] group-hover:animate-pulse`} />;
      case "WEBFLOW": return <Globe strokeWidth={1} size={42} className={`${iconClass} text-[#146EF5] animate-[spin_8s_linear_infinite]`} />;
      case "SPLINE": return <Box strokeWidth={1} size={42} className={`${iconClass} text-[#FF3366] animate-[bounce_4s_ease-in-out_infinite]`} />;
      case "A.I.": return <Sparkles strokeWidth={1} size={42} className={`${iconClass} text-[#7000FF] animate-pulse`} />;
      case "GSAP": return <Move strokeWidth={1} size={42} className={`${iconClass} text-[#88CE02] group-hover:translate-x-2 transition-transform`} />;
      default: return <Cpu strokeWidth={1} size={42} className={`${iconClass} text-orange-500`} />;
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. ENTRY ANIMATIONS
      gsap.fromTo(".tech-grid-line", 
        { scaleY: 0 }, 
        { scaleY: 1, duration: 1.2, stagger: 0.03, transformOrigin: "top" }
      );

      // 2. PARALLAX EFFECTS
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

      gsap.to(".tech-specs-specs", {
        y: -100,
        scrollTrigger: {
          trigger: ".parallax-monolith",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2
        }
      });

      // 3. STORY ANIMATION
      gsap.from(".story-reveal-item", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".story-section",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

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
          <div className="lg:col-span-7 flex flex-col pr-0 lg:pr-20">
            <div className="mb-12">
              <span className="font-mono text-[0.6em] uppercase tracking-[0.5em] text-orange-500 font-bold flex items-center gap-4">
                <span className="w-8 h-px bg-orange-500" />
                <span className="italic">{t.about.profile}</span>
              </span>
            </div>
            <div className="space-y-4 mb-16">
              <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tighter leading-[0.85] uppercase text-black dark:text-white">Christian</h1>
              <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tighter leading-[0.85] uppercase text-black dark:text-white">Sandoval</h1>
              <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tighter leading-[0.85] uppercase text-black dark:text-white">Moná</h1>
            </div>
            <div className="max-w-xl border-l-0 lg:border-l-2 border-orange-500 pl-0 lg:pl-8 space-y-8 text-2xl md:text-3xl font-light leading-snug text-foreground/70">
              <p>Me dedico a diseñar experiencias digitales que ponen a las personas en el centro. Mi enfoque combina <span className="text-foreground font-bold">investigación</span>, <span className="text-foreground font-bold">estructura</span> y <span className="text-foreground font-bold">creatividad</span>.</p>
              <div className="flex flex-wrap gap-4 pt-4">
                {["UX / UI", "Webflow Dev", "Bilingual"].map((tag) => (
                  <span key={tag} className="px-4 py-1 border border-foreground/10 rounded-full font-mono text-[0.55em] uppercase tracking-widest opacity-40">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-16 lg:mt-0">
            <div className="parallax-monolith relative w-full aspect-[3/4.2] bg-neutral-200 dark:bg-neutral-900 shadow-2xl overflow-hidden rounded-sm">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" alt="Portrait" className="w-full h-full object-cover grayscale brightness-110 contrast-110" />
            </div>
            <div className="absolute -bottom-24 lg:-bottom-16 right-0 lg:right-auto lg:-left-24 w-[55%] aspect-[1/1.2] z-20 p-4 pb-12 bg-background shadow-2xl border border-foreground/5 rounded-sm overflow-hidden">
              <div className="w-full aspect-square overflow-hidden mb-6 grayscale"><img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop" alt="Detail" className="w-full h-full object-cover opacity-80" /></div>
              <div className="flex justify-between items-center opacity-40 font-mono text-[0.5rem] tracking-[0.3em] uppercase"><span>[ DETAIL_VIEW ]</span><span>RAW_DATA</span></div>
            </div>
            <div className="mt-32 md:mt-20 text-left lg:text-right tech-specs-specs">
              <p className="font-mono text-[0.65em] uppercase tracking-[0.3em] opacity-40 leading-loose">27 Años / Salento, COL</p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="story-section relative py-[6em] lg:pt-[8em] lg:pb-[10em] px-frame border-t border-foreground/5 z-10 bg-background">
        <div className="mb-16 story-reveal-item">
          <span className="font-mono text-[0.6em] uppercase tracking-[0.5em] text-orange-500 font-bold block mb-4">02 / Historia</span>
          <h3 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter leading-none text-foreground">{t.story.title}</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[3em] lg:gap-[5em] items-start">
          <div className="space-y-6 story-reveal-item"><span className="font-mono text-[0.6em] uppercase tracking-[0.3em] text-foreground/20 font-bold block">[ THE_ORIGIN ]</span><p className="text-xl font-light leading-relaxed text-foreground/70">{t.story.p1}</p></div>
          <div className="space-y-6 story-reveal-item"><span className="font-mono text-[0.6em] uppercase tracking-[0.3em] text-foreground/20 font-bold block">[ THE_EVOLUTION ]</span><p className="text-xl font-light leading-relaxed text-foreground/70">{t.story.p2}</p></div>
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

      {/* TOOLS SECTION (Technical CSS Refactor) */}
      <section className="tools-section relative py-[6em] lg:py-[10em] px-frame border-t border-foreground/5 z-10 bg-background overflow-visible">
        <div className="flex flex-col lg:flex-row items-start">
          
          {/* LADO IZQUIERDO: Sticky Nativo */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32 mb-20 lg:mb-0">
            <div className="lg:pr-24">
              <h3 className="text-5xl lg:text-8xl font-extrabold uppercase tracking-tighter leading-[0.85] text-foreground mb-8">{t.tools.title}</h3>
              <p className="text-xl font-light leading-relaxed text-foreground/60 max-w-sm">{t.tools.description}</p>
            </div>
          </div>

          {/* LADO DERECHO: Technical Checkerboard */}
          <div className="w-full lg:w-7/12 flex justify-end">
            <div className="grid grid-cols-2 w-full max-w-2xl bg-transparent">
              {t.tools.items.map((tool, i) => {
                const isEven = i % 2 === 0;
                return (
                  <React.Fragment key={i}>
                    {isEven ? (
                      <>
                        <div className="group relative aspect-square bg-white dark:bg-[#0A0A0A] border border-foreground/[0.06] dark:border-white/[0.04] rounded-[3px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:shadow-orange-500/10 hover:border-orange-500/40 hover:z-20 transition-all duration-700 flex flex-col items-start justify-between text-left p-8">
                          <div className="w-full flex justify-between items-start">
                            <div className="group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700">{getToolIcon(tool.name)}</div>
                            <div className="w-2 h-2 bg-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                          </div>
                          <div>
                            <span className="font-black text-2xl lg:text-3xl tracking-tighter text-foreground block mb-2">{tool.name}</span>
                            <p className="text-[0.8em] lg:text-[0.9em] leading-relaxed text-foreground/70 group-hover:text-foreground transition-colors duration-500 font-medium">{tool.desc}</p>
                          </div>
                        </div>
                        <div className="aspect-square" />
                      </>
                    ) : (
                      <>
                        <div className="aspect-square" />
                        <div className="group relative aspect-square bg-white dark:bg-[#0A0A0A] border border-foreground/[0.06] dark:border-white/[0.04] rounded-[3px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:shadow-orange-500/10 hover:border-orange-500/40 hover:z-20 transition-all duration-700 flex flex-col items-start justify-between text-left p-8">
                          <div className="w-full flex justify-between items-start">
                            <div className="group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700">{getToolIcon(tool.name)}</div>
                            <div className="w-2 h-2 bg-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                          </div>
                          <div>
                            <span className="font-black text-2xl lg:text-3xl tracking-tighter text-foreground block mb-2">{tool.name}</span>
                            <p className="text-[0.8em] lg:text-[0.9em] leading-relaxed text-foreground/70 group-hover:text-foreground transition-colors duration-500 font-medium">{tool.desc}</p>
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
