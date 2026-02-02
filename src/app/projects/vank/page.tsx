"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ChevronRight, Activity, Command } from "lucide-react";
import Header from "@/components/sections/Header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

const STYLING = {
  section: "grid grid-cols-1 lg:grid-cols-[35%_65%] content-gap px-frame section-gap border-b border-foreground/5",
  title: "text-display-xl font-black tracking-tighter uppercase leading-[0.9]",
  subtitle: "text-display-sm font-bold tracking-tight text-foreground mb-[1em]",
  body: "text-body-lg text-foreground/60 leading-relaxed font-medium max-w-forge",
  label: "font-mono text-[0.6em] uppercase tracking-[0.4em] text-foreground/30 font-bold block mb-[2em]"
};

export default function VankProject() {
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
        y: 40,
        opacity: 0,
        duration: 1.2,
        delay: 0.9,
        ease: "power3.out"
      });

      // 2. METADATA STAGGER
      gsap.from(".meta-reveal", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        delay: 0.4,
        ease: "power2.out"
      });

      // 3. CINEMATIC IMAGES REVEAL (Premium Slide In)
      const imageContainers = gsap.utils.toArray(".hero-img-container") as HTMLElement[];
      imageContainers.forEach((container) => {
        gsap.fromTo(container, 
          { 
            y: 40, 
            opacity: 0 
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            force3D: true,
            scrollTrigger: {
              trigger: container,
              start: "top 92%",
              toggleActions: "play none none reverse",
              fastScrollEnd: true
            }
          }
        );
      });

      // 4. ACTO 01 REVEAL
      const acto01Tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#contexto",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
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
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8");

      // 5. ACTO 02 REVEAL (Individual Triggers)
      const acto02TitleTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#acto02",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      acto02TitleTl.fromTo(".acto02-title-mask", 
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, stagger: 0.1, ease: "power4.out" }
      )
      .fromTo(".acto02-title-text", 
        { y: "100%" },
        { y: "0%", duration: 1.2, stagger: 0.1, ease: "power4.out" }, "<"
      );

      // Individual description and list elements
      const acto02DescElements = gsap.utils.toArray(".acto02-desc") as HTMLElement[];
      acto02DescElements.forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // 6. SCROLL SPY FOR SIDEBAR
      const sections = ["hero", "contexto", "acto02", "solucion", "resultado", "impacto"];
      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: `#${section}`,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveSection(index),
          onEnterBack: () => setActiveSection(index)
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: `#${id}`, autoKill: false },
      ease: "power4.inOut"
    });
  };

  return (
    <main ref={containerRef} className="bg-background text-foreground min-h-screen font-sans selection:bg-foreground selection:text-background overflow-x-hidden">
      
      <Header hideLogo={true} />
      <div className="fixed top-8 left-6 md:left-12 lg:left-20 z-[110] mix-blend-difference pointer-events-none">
        <Link href="/#projects" className="pointer-events-auto group flex items-center gap-[0.75em] text-white">
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
            <ArrowLeft size={18} />
          </div>
          <span className="hidden font-bold text-[0.65em] uppercase tracking-[0.3em]">Proyectos</span>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row relative">
        
        <aside className="hidden lg:flex flex-col w-[15%] h-screen fixed top-0 left-0 pt-48 pl-12 justify-start z-40 pointer-events-none">
          <div className="space-y-3 relative pointer-events-auto">
            <div 
              className="absolute left-[-1rem] w-[2px] h-4 bg-black dark:bg-white transition-all duration-500 ease-out"
              style={{ top: `${activeSection * 1.75 + 0.25}rem` }}
            />
            {[
              { id: "hero", label: "Intro" },
              { id: "contexto", label: "Contexto" },
              { id: "acto02", label: "Desafío" },
              { id: "solucion", label: "Solución" },
              { id: "resultado", label: "Resultado" },
              { id: "impacto", label: "Impacto" }
            ].map((item, index) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
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
          
          <header id="hero" className="px-0 md:px-[6em] lg:pl-0 lg:pr-[8em] pt-[8em] md:pt-[8em] pb-0">
            {/* Title & Subtitle - Padding restored here */}
            <div className="flex flex-col mb-0 pb-[1.5em] md:mb-0 md:pb-[4em] px-[14px] md:px-0">
              <div className="hero-title-mask overflow-hidden pb-4 -mb-4">
                <h1 className="hero-title-text text-5xl md:text-7xl lg:text-[5.5em] font-black tracking-[-0.08em] leading-[0.7] uppercase will-change-transform">
                  VANK<span className="text-yellow-300 ml-[0.05em]">.</span>
                </h1>
              </div>
              <p className="hero-subtitle text-[5vw] lg:text-[2rem] font-medium tracking-normal mt-[0.8em] md:mt-[0.6em] text-foreground/80 leading-[1.1] max-w-4xl will-change-transform">
                Una plataforma fintech lista para crecer.
              </p>
            </div>

            {/* Mobile Hero Image Placement - Truly Edge-to-Edge */}
            <div className="md:hidden w-full pb-[3em]">
              <div className="hero-img-container overflow-hidden bg-surface shadow-sm will-change-transform h-auto relative flex items-center justify-center">
                <img 
                  src="https://cdn.prod.website-files.com/684d06174bbd508a8dcbc859/68acd98ffcf18c76db9ce92b_MacBook%20Air%20M4%20-%20Sky%20Blue-2.jpg" 
                  alt="Vank Dashboard" 
                  className="w-full h-auto object-contain will-change-transform relative"
                />
              </div>
            </div>

            {/* Technical Grid - Padding restored here */}
            <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 md:gap-20 pt-[1.5em] md:pt-[4em] border-t border-foreground/10 pb-[3em] md:pb-[4em] px-[14px] md:px-0">
              <div className="flex flex-col gap-[1.5em]">
                <span className="font-sans text-[0.85em] italic opacity-40 block mb-[0.25em] md:mb-[1.5em] meta-reveal">Contexto del proyecto</span>
                <p className="text-xl md:text-2xl font-light leading-snug tracking-normal max-w-2xl opacity-80 will-change-transform meta-reveal">
                  Una experiencia financiera construida desde cero, con procesos claros y un sistema de diseño escalable.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-y-[2.5em] gap-x-[2em]">
                {[
                  { l: "Servicios", v: "UX / UI Strategy" },
                  { l: "Fecha", v: "2023 - 2024" },
                  { l: "Entregables", v: "MVP, UI Kit" },
                  { l: "Ecosistema", v: "Fintech" }
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
            <div className="hero-img-container md:rounded-[2em] overflow-hidden bg-surface md:shadow-sm aspect-square md:aspect-auto md:h-[90vh] relative flex items-center justify-center will-change-[opacity] translate-z-0">
              <img 
                src="https://cdn.prod.website-files.com/684d06174bbd508a8dcbc859/68acd98ffcf18c76db9ce92b_MacBook%20Air%20M4%20-%20Sky%20Blue-2.jpg" 
                alt="Vank MacBook Detail" 
                className="w-full h-full object-cover relative"
                loading="lazy"
                decoding="async"
              />
            </div>
          </section>

          {/* 3.1 HERO IPAD */}
          <section className="w-full px-0 md:px-[6em] lg:pl-0 lg:pr-[8em] py-[1em]">
            <div className="hero-img-container md:rounded-[2em] overflow-hidden bg-surface md:shadow-sm aspect-square md:aspect-auto md:h-[90vh] relative flex items-center justify-center will-change-[opacity] translate-z-0">
              <img 
                src="https://cdn.prod.website-files.com/684d06174bbd508a8dcbc859/68acd98c8b356cc505bff059_iPad%20Mockup%20Light-2.jpg" 
                alt="Vank iPad Dashboard" 
                className="w-full h-full object-cover relative"
                loading="lazy"
                decoding="async"
              />
            </div>
          </section>

          <section id="contexto" className="grid grid-cols-1 lg:grid-cols-[40%_60%] content-gap lg:pl-0 lg:pr-[8em] px-[14px] md:px-[6em] section-gap overflow-hidden">
            <div className="lg:pr-10">
              <span className="font-sans text-[1.25rem] uppercase tracking-tighter text-foreground/30 font-bold block mb-1 ml-[6px]">01</span>
              <div className="space-y-2">
                {/* Mobile: 2 lines, Desktop: 3 lines */}
                <div className="lg:hidden space-y-2">
                  {["El origen", "del reto"].map((line, i) => (
                    <div key={i} className="acto01-title-mask overflow-hidden">
                      <h2 className="acto01-title-text text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.85] will-change-transform">
                        {line}
                      </h2>
                    </div>
                  ))}
                </div>
                <div className="hidden lg:block space-y-2">
                  {["El", "origen", "del reto"].map((line, i) => (
                    <div key={i} className="acto01-title-mask overflow-hidden">
                      <h2 className="acto01-title-text lg:text-[5.5em] font-bold uppercase tracking-tighter leading-[0.85] will-change-transform">
                        {line}
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-[4em] md:pt-[18em]">
              <p className="acto01-desc text-xl md:text-2xl font-light leading-snug tracking-normal max-w-3xl opacity-80 will-change-transform">
                Cuando llegamos al proyecto, no había un producto definido. Había un par de archivos de Figma sueltos, pantallas desconectadas, sin UI kit y sin flujos completos. Nuestra misión fue tomar ese caos y convertirlo en una experiencia funcional, coherente y lista para que el equipo de desarrollo pudiera construir sobre ella —y todo en plazos muy ajustados.
              </p>
            </div>
          </section>

          <section className="w-full px-0 md:px-[6em] lg:pl-0 lg:pr-[8em] py-[1em]">
            <div className="hero-img-container md:rounded-[2em] overflow-hidden bg-surface md:shadow-sm aspect-square md:aspect-auto md:h-[90vh] relative flex items-center justify-center will-change-[opacity] translate-z-0">
              <img 
                src="https://cdn.prod.website-files.com/684d06174bbd508a8dcbc859/68acd98d47f23eece986b74c_Layout%205.jpg" 
                alt="Vank Layout Detail" 
                className="w-full h-full object-cover relative"
                loading="lazy"
                decoding="async"
              />
            </div>
          </section>

          <section className="w-full px-0 md:px-[6em] lg:pl-0 lg:pr-[8em] py-[1em]">
            <div className="hero-img-container md:rounded-[2em] overflow-hidden bg-surface md:shadow-sm aspect-square md:aspect-auto md:h-[90vh] relative flex items-center justify-center will-change-[opacity] translate-z-0">
              <img 
                src="https://cdn.prod.website-files.com/684d06174bbd508a8dcbc859/68acd98de492f2b844c5bf3a_Frame%201171275577.jpg" 
                alt="Vank UI System" 
                className="w-full h-full object-cover relative"
                loading="lazy"
                decoding="async"
              />
            </div>
          </section>

          {/* 5. ACTO 02: REPLICATED STRUCTURE */}
          <section id="acto02" className="grid grid-cols-1 lg:grid-cols-[40%_60%] content-gap lg:pl-0 lg:pr-[8em] px-[14px] md:px-[6em] section-gap overflow-hidden">
            <div className="lg:pr-10">
              <span className="font-sans text-[1.25rem] uppercase tracking-tighter text-foreground/30 font-bold block mb-1 ml-[6px]">02</span>
              <div className="space-y-2">
                {/* Mobile: 2 lines, Desktop: 3 lines */}
                <div className="lg:hidden space-y-2">
                  {["El Problema", "El Desafío"].map((line, i) => (
                    <div key={i} className="acto02-title-mask overflow-hidden">
                      <h2 className="acto02-title-text text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.85] will-change-transform">
                        {line}
                      </h2>
                    </div>
                  ))}
                </div>
                <div className="hidden lg:block space-y-2">
                  {["El", "Problema", "El Desafío"].map((line, i) => (
                    <div key={i} className="acto02-title-mask overflow-hidden">
                      <h2 className="acto02-title-text lg:text-[5.5em] font-bold uppercase tracking-tighter leading-[0.85] will-change-transform">
                        {line}
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-[4em] md:pt-[18em] space-y-[4em]">
              <div className="space-y-[1.5em]">
                <h3 className="acto02-desc text-xl md:text-2xl font-semibold tracking-tight text-foreground will-change-transform">Contexto inicial</h3>
                <p className="acto02-desc text-xl md:text-2xl font-light leading-snug tracking-normal max-w-3xl opacity-80 will-change-transform">
                  El modelo de negocio de Vank existente presentaba desafíos significativos que generaban frustración entre sus usuarios. Las problemáticas principales giraban en torno a la eficiencia, la transparencia y la facilidad de uso en un sector tan sensible como el financiero y de criptomonedas.
                </p>
              </div>

              <div className="space-y-[2em]">
                <h3 className="acto02-desc text-xl md:text-2xl font-semibold tracking-tight text-foreground will-change-transform">Problemas identificados</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {[
                    "Pantallas sueltas sin conexión entre sí.",
                    "Ausencia total de un sistema de diseño o UI kit.",
                    "Flujos incompletos desconectados de la experiencia real.",
                    "Procesos clave (transferencias, recargas) sin definición de punta a punta."
                  ].map((text, i) => (
                    <div key={i} className="acto02-desc flex items-start gap-[0.75em] will-change-transform">
                      <div className="w-[5px] h-[5px] rounded-full bg-foreground/30 mt-[0.6em] flex-shrink-0" />
                      <p className="text-lg md:text-xl font-light leading-snug opacity-80">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Integrated Insight Message */}
              <div className="pt-[4em] md:pt-[6em] pb-[2em] flex justify-center text-center px-0 lg:-ml-[66.6%] lg:w-[166.6%] pointer-events-none">
                <p className="acto02-desc text-3xl md:text-5xl font-medium tracking-tighter leading-tight max-w-4xl text-foreground italic opacity-90 will-change-transform pointer-events-auto">
                  &quot;Para comprender estos problemas, se realizó una investigación exhaustiva que reveló los siguientes insights.&quot;
                </p>
              </div>

              {/* Left-Aligned Insights Block */}
              <div className="space-y-[2.5em] pt-[4em] lg:-ml-[66.6%] lg:w-full">
                <h3 className="acto02-desc text-xl md:text-2xl font-semibold tracking-tight text-foreground will-change-transform">Insights clave de la investigación</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {[
                    "Los usuarios demandaban rapidez, transparencia y claridad total en los flujos.",
                    "La plataforma requería una arquitectura escalable lista para el crecimiento global.",
                    "Un sistema visual consistente era imperativo para acelerar los ciclos de desarrollo."
                  ].map((text, i) => (
                    <div key={i} className="acto02-desc flex items-start gap-[0.75em] will-change-transform">
                      <div className="w-[5px] h-[5px] rounded-full bg-foreground/30 mt-[0.6em] flex-shrink-0" />
                      <p className="text-lg md:text-xl font-light leading-snug opacity-80">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 5.1 GALLERY BREAK - MACBOOK 1 */}
          <section className="w-full px-0 md:px-[6em] lg:pl-0 lg:pr-[8em] py-[1em]">
            <div className="hero-img-container md:rounded-[2em] overflow-hidden bg-surface md:shadow-sm aspect-square md:aspect-auto md:h-[90vh] relative flex items-center justify-center will-change-[opacity] translate-z-0">
              <img 
                src="https://cdn.prod.website-files.com/684d06174bbd508a8dcbc859/68acd98fac1c6a1592b34c6c_MacBook%20Air%20M4%20-%20Sky%20Blue-1.jpg" 
                alt="Vank Interface Detail 1" 
                className="w-full h-full object-cover relative"
                loading="lazy"
                decoding="async"
              />
            </div>
          </section>

          {/* 5.2 GALLERY BREAK - MACBOOK 2 */}
          <section className="w-full px-0 md:px-[6em] lg:pl-0 lg:pr-[8em] py-[1em]">
            <div className="hero-img-container md:rounded-[2em] overflow-hidden bg-surface md:shadow-sm aspect-square md:aspect-auto md:h-[90vh] relative flex items-center justify-center will-change-[opacity] translate-z-0">
              <img 
                src="https://cdn.prod.website-files.com/684d06174bbd508a8dcbc859/68acd98e7d50442728168c29_MacBook%20Air%20M4%20-%20Sky%20Blue.jpg" 
                alt="Vank Interface Detail 2" 
                className="w-full h-full object-cover relative"
                loading="lazy"
                decoding="async"
              />
            </div>
          </section>

          <footer className="px-frame py-[10em] grid grid-cols-1 lg:grid-cols-[50%_50%] gap-[5em] border-t border-foreground/5">
            <div className="space-y-[4em]">
              <h1 className="text-display-lg font-black uppercase leading-[0.8] tracking-tighter">
                DISPONIBLE <br /> <span className="opacity-20 italic">PARA CREAR</span>
              </h1>
              <p className="text-display-xs font-light underline underline-offset-[1em] decoration-1 opacity-60">hello@csandoval.design</p>
            </div>
            <div className="flex flex-col justify-end items-start lg:items-end gap-[4em]">
              <div className="flex gap-[2.5em]">
                {["LinkedIn", "Instagram", "WhatsApp"].map((link) => (
                  <a key={link} href="#" className="font-bold text-[0.65em] uppercase tracking-[0.3em] hover:opacity-50 transition-opacity">{link}</a>
                ))}
              </div>
              <p className="font-mono text-[0.55em] font-bold opacity-20 tracking-[0.3em]">© 2026 CHRISTIAN SANDOVAL</p>
            </div>
          </footer>

        </div>
      </div>
    </main>
  );
}
