"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Header from "@/components/sections/Header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useLanguage } from "@/context/LanguageContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

const STYLING = {
  section: "grid grid-cols-1 lg:grid-cols-[35%_65%] content-gap px-frame section-gap border-b border-foreground/5",
  label: "font-sans text-[1.25rem] uppercase tracking-tighter text-foreground/30 font-bold block mb-1 ml-[6px]"
};

export default function VankProject() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = React.useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. HERO TEXT REVEAL (Mask Effect)
      gsap.fromTo(".hero-title-mask", 
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "power4.out", delay: 0.5 }
      );
      
      gsap.fromTo(".hero-title-text", 
        { y: "100%" },
        { y: "0%", duration: 1.5, ease: "power4.out", delay: 0.5 }
      );

      gsap.from(".hero-subtitle", {
        y: 40, opacity: 0, duration: 1.2, delay: 0.9, ease: "power3.out"
      });

      // 2. METADATA STAGGER
      gsap.from(".meta-reveal", {
        y: 20, opacity: 0, duration: 0.8, stagger: 0.05, delay: 0.4, ease: "power2.out"
      });

      // 3. CINEMATIC IMAGES REVEAL
      const imageContainers = gsap.utils.toArray(".hero-img-container") as HTMLElement[];
      imageContainers.forEach((container) => {
        gsap.fromTo(container, 
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1.2, ease: "power3.out", force3D: true,
            scrollTrigger: {
              trigger: container, start: "top 92%", toggleActions: "play none none reverse", fastScrollEnd: true
            }
          }
        );
      });

      // 4. ACTO 01 REVEAL
      const acto01Tl = gsap.timeline({
        scrollTrigger: { trigger: "#contexto", start: "top 80%", toggleActions: "play none none reverse" }
      });

      acto01Tl.fromTo(".acto01-title-mask", 
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, stagger: 0.1, ease: "power4.out" }
      )
      .fromTo(".acto01-title-text", 
        { y: "100%" },
        { y: "0%", duration: 1.2, stagger: 0.1, ease: "power4.out" }, "<"
      )
      .from(".acto01-desc", {
        y: 40, opacity: 0, duration: 1, ease: "power3.out"
      }, "-=0.8");

      // 5. ACTO 02 REVEAL (Individual Triggers)
      const acto02TitleTl = gsap.timeline({
        scrollTrigger: { trigger: "#acto02", start: "top 80%", toggleActions: "play none none reverse" }
      });

      acto02TitleTl.fromTo(".acto02-title-mask", 
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, stagger: 0.1, ease: "power4.out" }
      )
      .fromTo(".acto02-title-text", 
        { y: "100%" },
        { y: "0%", duration: 1.2, stagger: 0.1, ease: "power4.out" }, "<"
      );

      const acto02DescElements = gsap.utils.toArray(".acto02-desc") as HTMLElement[];
      acto02DescElements.forEach((el) => {
        gsap.from(el, {
          y: 40, opacity: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 92%", toggleActions: "play none none reverse" }
        });
      });

      // 6. ACTO 03 REVEAL (Solution)
      const acto03TitleTl = gsap.timeline({
        scrollTrigger: { trigger: "#solucion", start: "top 80%", toggleActions: "play none none reverse" }
      });

      acto03TitleTl.fromTo(".acto03-title-mask", 
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, stagger: 0.1, ease: "power4.out" }
      )
      .fromTo(".acto03-title-text", 
        { y: "100%" },
        { y: "0%", duration: 1.2, stagger: 0.1, ease: "power4.out" }, "<"
      );

      const acto03DescElements = gsap.utils.toArray(".acto03-desc") as HTMLElement[];
      acto03DescElements.forEach((el) => {
        gsap.from(el, {
          y: 40, opacity: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 92%", toggleActions: "play none none reverse" }
        });
      });

      // 7. SCROLL SPY
      const sections = ["hero", "contexto", "acto02", "solucion", "resultado", "impacto"];
      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: `#${section}`,
          start: "top center", end: "bottom center",
          onEnter: () => setActiveSection(index),
          onEnterBack: () => setActiveSection(index)
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    gsap.to(window, {
      duration: 1.5, scrollTo: { y: `#${id}`, autoKill: false }, ease: "power4.inOut"
    });
  };

  return (
    <main ref={containerRef} className="bg-background text-foreground min-h-screen font-sans selection:bg-foreground selection:text-background overflow-x-hidden">
      
      <Header hideLogo={true} />
      
      {/* 1. BACK BUTTON */}
      <div className="fixed top-8 left-6 md:left-12 lg:left-20 z-[110] mix-blend-difference pointer-events-none">
        <Link href="/#projects" className="pointer-events-auto group flex items-center gap-[0.75em] text-white">
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
            <ArrowLeft size={18} />
          </div>
          <span className="hidden font-bold text-[0.65em] uppercase tracking-[0.3em]">{t.vank.intro.back}</span>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row relative">
        
        {/* SIDEBAR NAVIGATION */}
        <aside className="hidden lg:flex flex-col w-[15%] h-screen fixed top-0 left-0 pt-48 pl-12 justify-start z-40 pointer-events-none">
          <div className="space-y-3 relative pointer-events-auto">
            <div 
              className="absolute left-[-1rem] w-[2px] h-4 bg-black dark:bg-white transition-all duration-500 ease-out"
              style={{ top: `${activeSection * 1.75 + 0.25}rem` }}
            />
            {[
              { id: "hero", label: "Intro" },
              { id: "contexto", label: t.vank.intro.contextLabel.split(' ')[0] },
              { id: "acto02", label: t.vank.intro.back === "Projects" ? "Challenge" : "Desafío" },
              { id: "solucion", label: t.vank.intro.back === "Projects" ? "Solution" : "Solución" },
              { id: "resultado", label: t.vank.intro.back === "Projects" ? "Result" : "Resultado" },
              { id: "impacto", label: t.vank.intro.back === "Projects" ? "Impact" : "Impacto" }
            ].map((item, index) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)}
                className={`text-left text-[12px] italic font-bold tracking-tight transition-opacity duration-300 block w-full pl-6 ${
                  activeSection === index ? "opacity-100 text-foreground" : "opacity-30 hover:opacity-60 text-foreground"
                }`}
                style={{ height: "1.5rem", lineHeight: "1.5rem" }}
              >
                <span className="font-mono text-[0.8em] mr-2 opacity-50 not-italic">0{index}</span>
                {item.label}
              </button>
            ))}
          </div>
        </aside>

        <div className="w-full lg:ml-[15%] lg:w-[85%]">
          
          {/* HERO HEADER */}
          <header id="hero" className="px-0 md:px-[6em] lg:pl-0 lg:pr-[8em] pt-[8em] md:pt-[8em] pb-0">
            <div className="flex flex-col mb-0 pb-[1.5em] md:mb-0 md:pb-[4em] px-[14px] md:px-0">
              <div className="hero-title-mask overflow-hidden pb-4 -mb-4">
                <h1 className="hero-title-text text-5xl md:text-7xl lg:text-[5.5em] font-black tracking-[-0.08em] leading-[0.7] uppercase will-change-transform">
                  {t.vank.intro.title}<span className="text-yellow-300 ml-[0.05em]">.</span>
                </h1>
              </div>
              <p className="hero-subtitle text-[5vw] lg:text-[2rem] font-medium tracking-normal mt-[0.8em] md:mt-[0.6em] text-foreground/80 leading-[1.1] max-w-4xl will-change-transform">
                {t.vank.intro.tagline}
              </p>
            </div>

            <div className="md:hidden w-full pb-[3em]">
              <div className="hero-img-container overflow-hidden bg-surface shadow-sm h-auto relative flex items-center justify-center">
                <img src="https://cdn.prod.website-files.com/684d06174bbd508a8dcbc859/68acd98ffcf18c76db9ce92b_MacBook%20Air%20M4%20-%20Sky%20Blue-2.jpg" 
                  alt="Vank" className="w-full h-full object-cover relative" loading="lazy" decoding="async" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 md:gap-20 pt-[1.5em] md:pt-[4em] border-t border-foreground/10 pb-[3em] md:pb-[4em] px-[14px] md:px-0">
              <div className="flex flex-col gap-[1.5em]">
                <span className="font-sans text-[0.85em] italic opacity-40 block mb-[0.25em] md:mb-[1.5em] meta-reveal">{t.vank.intro.contextLabel}</span>
                <p className="text-xl md:text-2xl font-light leading-snug tracking-normal max-w-2xl opacity-80 will-change-transform meta-reveal">{t.vank.intro.contextDesc}</p>
              </div>
              <div className="grid grid-cols-2 gap-y-[2.5em] gap-x-[2em]">
                {[
                  { l: t.vank.intro.meta.services, v: "UX / UI Strategy" },
                  { l: t.vank.intro.meta.date, v: "2023 - 2024" },
                  { l: t.vank.intro.meta.deliverables, v: "MVP, UI Kit" },
                  { l: t.vank.intro.meta.ecosystem, v: "Fintech" }
                ].map((item, i) => (
                  <div key={i} className="meta-reveal space-y-[0.5em] will-change-transform">
                    <h5 className="font-sans text-[0.85em] italic opacity-40 block">{item.l}</h5>
                    <p className="text-sm font-bold uppercase tracking-tight text-foreground/80">{item.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </header>

          {/* 3. HERO MACBOOK (Desktop Only) */}
          <section className="hidden md:block w-full px-0 md:px-[6em] lg:pl-0 lg:pr-[8em] py-[1em]">
            <div className="hero-img-container md:rounded-[2em] overflow-hidden bg-surface md:shadow-sm will-change-transform aspect-square md:aspect-auto md:h-[90vh] relative flex items-center justify-center will-change-[opacity] translate-z-0">
              <img src="https://cdn.prod.website-files.com/684d06174bbd508a8dcbc859/68acd98ffcf18c76db9ce92b_MacBook%20Air%20M4%20-%20Sky%20Blue-2.jpg" 
                alt="MacBook" className="w-full h-full object-cover relative" loading="lazy" decoding="async" />
            </div>
          </section>

          {/* 3.1 HERO IPAD */}
          <section className="w-full px-0 md:px-[6em] lg:pl-0 lg:pr-[8em] py-[1em]">
            <div className="hero-img-container md:rounded-[2em] overflow-hidden bg-surface md:shadow-sm will-change-transform aspect-square md:aspect-auto md:h-[90vh] relative flex items-center justify-center will-change-[opacity] translate-z-0">
              <img src="https://cdn.prod.website-files.com/684d06174bbd508a8dcbc859/68acd98c8b356cc505bff059_iPad%20Mockup%20Light-2.jpg" 
                alt="iPad" className="w-full h-full object-cover relative" loading="lazy" decoding="async" />
            </div>
          </section>

          {/* ACTO 01 */}
          <section id="contexto" className="grid grid-cols-1 lg:grid-cols-[40%_60%] content-gap lg:pl-0 lg:pr-[8em] px-[14px] md:px-[6em] section-gap overflow-hidden">
            <div className="lg:pr-10">
              <span className="font-sans text-[1.25rem] uppercase tracking-tighter text-foreground/30 font-bold block mb-1 ml-[6px]">{t.vank.acto01.label}</span>
              <div className="space-y-2">
                <div className="lg:hidden space-y-2">
                  {t.vank.acto01.titleMobile.map((line, i) => (
                    <div key={i} className="acto01-title-mask overflow-hidden">
                      <h2 className="acto01-title-text text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.85] will-change-transform">{line}</h2>
                    </div>
                  ))}
                </div>
                <div className="hidden lg:block space-y-2">
                  {t.vank.acto01.title.map((line, i) => (
                    <div key={i} className="acto01-title-mask overflow-hidden">
                      <h2 className="acto01-title-text lg:text-[5.5em] font-bold uppercase tracking-tighter leading-[0.85] will-change-transform">{line}</h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-[4em] md:pt-[18em]">
              <p className="acto01-desc text-xl md:text-2xl font-light leading-snug tracking-normal max-w-3xl opacity-80 will-change-transform">{t.vank.acto01.description}</p>
            </div>
          </section>

          {/* IMAGE 4.5: LAYOUT DETAIL */}
          <section className="w-full px-0 md:px-[6em] lg:pl-0 lg:pr-[8em] py-[1em]">
            <div className="hero-img-container md:rounded-[2em] overflow-hidden bg-surface md:shadow-sm will-change-transform aspect-square md:aspect-auto md:h-[90vh] relative flex items-center justify-center will-change-[opacity] translate-z-0">
              <img src="https://cdn.prod.website-files.com/684d06174bbd508a8dcbc859/68acd98d47f23eece986b74c_Layout%205.jpg" 
                alt="Layout Detail" className="w-full h-full object-cover relative" loading="lazy" decoding="async" />
            </div>
          </section>

          {/* IMAGE 4.6: UI SYSTEM */}
          <section className="w-full px-0 md:px-[6em] lg:pl-0 lg:pr-[8em] py-[1em]">
            <div className="hero-img-container md:rounded-[2em] overflow-hidden bg-surface md:shadow-sm will-change-transform aspect-square md:aspect-auto md:h-[90vh] relative flex items-center justify-center will-change-[opacity] translate-z-0">
              <img src="https://cdn.prod.website-files.com/684d06174bbd508a8dcbc859/68acd98de492f2b844c5bf3a_Frame%201171275577.jpg" 
                alt="UI System" className="w-full h-full object-cover relative" loading="lazy" decoding="async" />
            </div>
          </section>

          {/* ACTO 02 */}
          <section id="acto02" className="grid grid-cols-1 lg:grid-cols-[40%_60%] content-gap lg:pl-0 lg:pr-[8em] px-[14px] md:px-[6em] section-gap overflow-hidden">
            <div className="lg:pr-10">
              <span className="font-sans text-[1.25rem] uppercase tracking-tighter text-foreground/30 font-bold block mb-1 ml-[6px]">{t.vank.acto02.label}</span>
              <div className="space-y-2">
                <div className="lg:hidden space-y-2">
                  {t.vank.acto02.titleMobile.map((line, i) => (
                    <div key={i} className="acto02-title-mask overflow-hidden">
                      <h2 className="acto02-title-text text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.85] will-change-transform">{line}</h2>
                    </div>
                  ))}
                </div>
                <div className="hidden lg:block space-y-2">
                  {t.vank.acto02.title.map((line, i) => (
                    <div key={i} className="acto02-title-mask overflow-hidden">
                      <h2 className="acto02-title-text lg:text-[5.5em] font-bold uppercase tracking-tighter leading-[0.85] will-change-transform">{line}</h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-[4em] md:pt-[18em] space-y-[4em]">
              <div className="space-y-[1.5em]">
                <h3 className="acto02-desc text-xl md:text-2xl font-semibold tracking-tight text-foreground will-change-transform">{t.vank.acto02.contextLabel}</h3>
                <p className="acto02-desc text-xl md:text-2xl font-light leading-snug tracking-normal max-w-3xl opacity-80 will-change-transform">{t.vank.acto02.contextDesc}</p>
              </div>
              <div className="space-y-[2em]">
                <h3 className="acto02-desc text-xl md:text-2xl font-semibold tracking-tight text-foreground will-change-transform">{t.vank.acto02.problemsLabel}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {t.vank.acto02.problemsList.map((text, i) => (
                    <div key={i} className="acto02-desc flex items-start gap-[0.75em] will-change-transform">
                      <div className="w-[5px] h-[5px] rounded-full bg-foreground/30 mt-[0.6em] flex-shrink-0" />
                      <p className="text-lg md:text-xl font-light leading-snug opacity-80">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-[4em] md:pt-[6em] pb-[2em] flex justify-center text-center px-0 lg:-ml-[66.6%] lg:w-[166.6%] pointer-events-none">
                <p className="acto02-desc text-3xl md:text-5xl font-medium tracking-tighter leading-tight max-w-4xl text-foreground italic opacity-90 will-change-transform pointer-events-auto">{t.vank.acto02.insightMessage}</p>
              </div>
              <div className="space-y-[2.5em] pt-[4em] lg:-ml-[66.6%] lg:w-full">
                <h3 className="acto02-desc text-xl md:text-2xl font-semibold tracking-tight text-foreground will-change-transform">{t.vank.acto02.insightsLabel}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {t.vank.acto02.insightsList.map((text, i) => (
                    <div key={i} className="acto02-desc flex items-start gap-[0.75em] will-change-transform">
                      <div className="w-[5px] h-[5px] rounded-full bg-foreground/30 mt-[0.6em] flex-shrink-0" />
                      <p className="text-lg md:text-xl font-light leading-snug opacity-80">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FINAL GALLERY */}
          <section className="w-full px-0 md:px-[6em] lg:pl-0 lg:pr-[8em] py-[1em]">
            <div className="hero-img-container md:rounded-[2em] overflow-hidden bg-surface md:shadow-sm will-change-transform aspect-square md:aspect-auto md:h-[90vh] relative flex items-center justify-center translate-z-0">
              <img src="https://cdn.prod.website-files.com/684d06174bbd508a8dcbc859/68acd98fac1c6a1592b34c6c_MacBook%20Air%20M4%20-%20Sky%20Blue-1.jpg" 
                alt="Interface 1" className="w-full h-full object-cover relative" loading="lazy" decoding="async" />
            </div>
          </section>

          <section className="w-full px-0 md:px-[6em] lg:pl-0 lg:pr-[8em] py-[1em]">
            <div className="hero-img-container md:rounded-[2em] overflow-hidden bg-surface md:shadow-sm will-change-transform aspect-square md:aspect-auto md:h-[90vh] relative flex items-center justify-center translate-z-0">
              <img src="https://cdn.prod.website-files.com/684d06174bbd508a8dcbc859/68acd98e7d50442728168c29_MacBook%20Air%20M4%20-%20Sky%20Blue.jpg" 
                alt="Interface 2" className="w-full h-full object-cover relative" loading="lazy" decoding="async" />
            </div>
          </section>

          {/* OBJECTIVES BRIDGE */}
          <section className="px-frame py-[6em] md:py-[10em] flex justify-center text-center">
            <p className="acto02-desc text-3xl md:text-5xl font-medium tracking-tighter leading-tight max-w-4xl text-foreground italic opacity-90 will-change-transform">
              {t.vank.acto02.objectivesBridge}
            </p>
          </section>

          {/* PROJECT OBJECTIVES LIST (2x2 LEFT ALIGNED) */}
          <section className="px-frame lg:pl-0 lg:pr-[8em] px-[14px] md:px-[6em] pb-[4em] mt-[2em] md:mt-[4em] overflow-hidden text-left">
            <div className="max-w-5xl flex flex-col items-start space-y-[1.5em]">
              <h3 className="acto02-desc text-xl md:text-2xl font-semibold tracking-tight text-foreground will-change-transform text-left">
                {t.vank.acto02.objectivesLabel}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 w-full">
                {t.vank.acto02.objectivesList.map((text, i) => (
                  <div key={i} className="acto02-desc flex items-start gap-[0.75em] will-change-transform text-left">
                    <div className="w-[5px] h-[5px] rounded-full bg-foreground/30 mt-[0.6em] flex-shrink-0" />
                    <p className="text-lg md:text-xl font-light leading-snug opacity-80 text-left">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="w-full px-0 md:px-[6em] lg:pl-0 lg:pr-[8em] py-[1em]">
            <div className="hero-img-container md:rounded-[2em] overflow-hidden bg-surface md:shadow-sm will-change-transform aspect-square md:aspect-auto md:h-[90vh] relative flex items-center justify-center translate-z-0">
              <img src="https://cdn.prod.website-files.com/684d06174bbd508a8dcbc859/68acd98f4cacb189e2e1ce90_iPad%20Mockup%20Light.jpg" 
                alt="iPad Process" className="w-full h-full object-cover relative" loading="lazy" decoding="async" />
            </div>
          </section>

          {/* ACTO 03: CÓMO LO RESOLVIMOS */}
          <section id="solucion" className="grid grid-cols-1 lg:grid-cols-[40%_60%] content-gap lg:pl-0 lg:pr-[8em] px-[14px] md:px-[6em] section-gap overflow-hidden">
            <div className="lg:pr-10">
              <span className={STYLING.label}>{t.vank.acto03.label}</span>
              <div className="space-y-2">
                {/* Mobile & Desktop Titles */}
                <div className="space-y-2">
                  {t.vank.acto03.title.map((line, i) => (
                    <div key={i} className="acto03-title-mask overflow-hidden">
                      <h2 className="acto03-title-text text-5xl md:text-7xl lg:text-[5.5em] font-bold uppercase tracking-tighter leading-[0.85] will-change-transform">
                        {line}
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-[4em] md:pt-[18em] space-y-[4em]">
              <p className="acto03-desc text-xl md:text-2xl font-light leading-snug tracking-normal max-w-3xl opacity-80 will-change-transform">
                {t.vank.acto03.description}
              </p>
              
              <div className="grid grid-cols-1 gap-y-10">
                {t.vank.acto03.list.map((text, i) => (
                  <div key={i} className="acto03-desc flex items-start gap-[1.5em] will-change-transform border-l border-foreground/10 pl-8">
                    <p className="text-lg md:text-xl font-light leading-snug opacity-80">
                      <span className="font-bold text-foreground opacity-100 block mb-2">
                        {text.split(":")[0]}
                      </span>
                      {text.split(":")[1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PROCESS IMAGES - WIREFRAME */}
          <section className="w-full px-0 md:px-[6em] lg:pl-0 lg:pr-[8em] py-[1em]">
            <div className="hero-img-container md:rounded-[2em] overflow-hidden bg-surface md:shadow-sm will-change-transform aspect-video relative flex items-center justify-center translate-z-0">
              <img src="https://cdn.prod.website-files.com/684d06174bbd508a8dcbc859/6897f7d682665ced3cd4a2cb_Wireframe%20-%201.png" 
                alt="Wireframes" className="w-full h-full object-contain relative" loading="lazy" decoding="async" />
            </div>
          </section>

          {/* PROCESS IMAGES - GRID */}
          <section className="w-full px-0 md:px-[6em] lg:pl-0 lg:pr-[8em] py-[1em] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="hero-img-container md:rounded-[2em] overflow-hidden bg-surface md:shadow-sm will-change-transform aspect-square md:aspect-auto md:h-[60vh] relative flex items-center justify-center translate-z-0">
              <img src="https://cdn.prod.website-files.com/684d06174bbd508a8dcbc859/68983095c959083bd0f24696_Frame%201000004217.jpg" 
                alt="Design System Detail" className="w-full h-full object-cover relative" loading="lazy" decoding="async" />
            </div>
            <div className="hero-img-container md:rounded-[2em] overflow-hidden bg-surface md:shadow-sm will-change-transform aspect-square md:aspect-auto md:h-[60vh] relative flex items-center justify-center translate-z-0">
              <img src="https://cdn.prod.website-files.com/684d06174bbd508a8dcbc859/6898309237fee820de12d95b_fasfdasdf.png" 
                alt="Process Detail" className="w-full h-full object-cover relative" loading="lazy" decoding="async" />
            </div>
          </section>

          {/* FOOTER */}
          <footer className="px-frame py-[10em] grid grid-cols-1 lg:grid-cols-[50%_50%] gap-[5em] border-t border-foreground/5">
            <div className="space-y-[4em]">
              <h1 className="text-display-lg font-black uppercase leading-[0.8] tracking-tighter">
                {t.vank.footer.title} <br /> <span className="opacity-20 italic">{t.vank.footer.subtitle}</span>
              </h1>
              <p className="text-display-xs font-light underline underline-offset-[1em] decoration-1 opacity-60">{t.vank.footer.email}</p>
            </div>
            <div className="flex flex-col justify-end items-start lg:items-end gap-[4em]">
              <div className="flex gap-[2.5em]">
                {["LinkedIn", "Instagram", "WhatsApp"].map((link) => (
                  <a key={link} href="#" className="font-bold text-[0.65em] uppercase tracking-[0.3em] hover:opacity-50 transition-opacity">{link}</a>
                ))}
              </div>
              <p className="font-mono text-[0.55em] font-bold opacity-20 tracking-[0.3em]">{t.vank.footer.copyright}</p>
            </div>
          </footer>

        </div>
      </div>
    </main>
  );
}
