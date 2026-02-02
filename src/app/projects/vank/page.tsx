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

      // 3. HERO IMAGE REVEAL (Slide In)
      gsap.from(".hero-img-container", {
        y: 80,
        opacity: 0,
        scale: 0.98,
        duration: 1.5,
        delay: 0.4,
        ease: "power3.out",
        clearProps: "all"
      });

      // 4. HERO IMAGE ZOOM (Cinematic)
      gsap.fromTo(".hero-parallax-img", 
        { scale: 1.0 },
        { 
          scale: 1.2,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-img-container",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5 
          } 
        }
      );

      // 5. SCROLL SPY FOR SIDEBAR
      const sections = ["hero", "contexto", "desafio", "solucion", "resultado", "impacto"];
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
      
      {/* 1. GLOBAL HEADER & BACK BUTTON */}
      <Header hideLogo={true} />
      <div className="fixed top-8 left-6 md:left-12 lg:left-20 z-[110] mix-blend-difference pointer-events-none">
        <Link href="/#projects" className="pointer-events-auto group flex items-center gap-[0.75em] text-white">
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
            <ArrowLeft size={14} />
          </div>
          <span className="hidden font-bold text-[0.65em] uppercase tracking-[0.3em]">Proyectos</span>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row relative">
        
        {/* SIDEBAR NAVIGATION (Desktop Only) */}
        <aside className="hidden lg:flex flex-col w-[15%] h-screen fixed top-0 left-0 pt-48 pl-12 justify-start z-40 pointer-events-none">
          <div className="space-y-3 relative pointer-events-auto">
            {/* Active Indicator Line */}
            <div 
              className="absolute left-[-1rem] w-[2px] h-4 bg-black dark:bg-white transition-all duration-500 ease-out"
              style={{ top: `${activeSection * 1.75 + 0.25}rem` }}
            />
            
            {[
              { id: "hero", label: "Intro" },
              { id: "contexto", label: "Contexto" },
              { id: "desafio", label: "Desafío" },
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

        {/* MAIN CONTENT */}
        <div className="w-full lg:ml-[15%] lg:w-[85%]">
          
                                    <header id="hero" className="px-[14px] md:px-[6em] lg:pl-0 lg:pr-[8em] pt-[8em] md:pt-[8em] pb-0">
          
                                      <div className="flex flex-col mb-0 pb-[1.5em] md:mb-[4em] md:pb-0">
          
                                        <div className="hero-title-mask overflow-hidden pb-4 -mb-4">
          
                                          <h1 className="hero-title-text text-[12vw] lg:text-[5em] font-black tracking-[-0.08em] leading-[0.7] uppercase will-change-transform">
          
                                            VANK<span className="text-yellow-300 ml-[0.05em]">.</span>
          
                                          </h1>
          
                                        </div>
          
                                        <p className="hero-subtitle text-[5vw] lg:text-[2rem] font-medium tracking-normal mt-[0.8em] md:mt-[0.6em] text-foreground/80 leading-[1.1] max-w-4xl will-change-transform">
          
                                          Una plataforma fintech lista para crecer.
          
                                        </p>
          
                                      </div>
          
                          
          
                                      <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 md:gap-20 pt-[1.5em] md:pt-[3em] border-t border-foreground/10 pb-[3em] md:pb-[4em]">              <div className="flex flex-col gap-[1.5em]">
                <span className="font-sans text-[0.85em] italic opacity-40 block mb-[0.25em] md:mb-[1.5em] meta-reveal">Contexto del proyecto</span>
                <p className="text-xl md:text-2xl font-light leading-tight tracking-tight max-w-2xl opacity-80 will-change-transform meta-reveal">
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

          {/* 3. HERO IMAGE */}
          <section className="w-full px-0 md:px-[6em] lg:pl-0 lg:pr-[8em] py-[1em]">
            <div className="hero-img-container md:rounded-[2em] overflow-hidden bg-surface shadow-sm will-change-transform h-[55vh] md:h-[90vh] relative">
              <img 
                src="https://cdn.prod.website-files.com/684d06174bbd508a8dcbc859/68acd98ffcf18c76db9ce92b_MacBook%20Air%20M4%20-%20Sky%20Blue-2.jpg" 
                alt="Vank Dashboard" 
                className="hero-parallax-img w-full h-full object-cover absolute top-0 left-0"
              />
            </div>
          </section>

          <section id="contexto" className={STYLING.section}>
            <div>
              <span className={STYLING.label}>Acto_01</span>
              <h2 className={STYLING.title}>El punto <br /> de partida</h2>
            </div>
            <div>
              <p className={STYLING.body}>
                Vank nació de la necesidad de democratizar el acceso a herramientas financieras complejas. El reto principal fue crear una interfaz que no solo fuera funcional, sino que también educara al usuario en su camino hacia la inversión inteligente.
              </p>
            </div>
          </section>

          <section id="desafio" className={STYLING.section}>
            <div>
              <span className={STYLING.label}>Acto_02</span>
              <h2 className={STYLING.title}>El problema <br /> y el desafío</h2>
            </div>
            <div className="space-y-[5em]">
              <div className="space-y-[1.5em]">
                <h3 className={STYLING.subtitle}>Contexto inicial</h3>
                <p className={STYLING.body}>
                  El ecosistema existente presentaba una fragmentación profunda. No existía un lenguaje común entre módulos, lo que generaba desconfianza en transacciones críticas.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 content-gap">
                {[
                  "Arquitectura de información atomizada.",
                  "Ausencia de un sistema de diseño UI Kit.",
                  "Flujos incompletos con alta fricción.",
                  "Falta de transparencia en rendimientos."
                ].map((text, i) => (
                  <div key={i} className="flex gap-[1em]">
                    <span className="font-mono text-[0.7em] opacity-20 mt-[0.25em]">0{i+1}</span>
                    <p className="text-[1.1em] font-bold uppercase tracking-tighter opacity-80 leading-tight">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-[3em] py-[1em]">
            <div className="w-full px-frame">
              <div className="md:rounded-[2em] overflow-hidden shadow-xl">
                <img src="https://cdn.prod.website-files.com/684d06174bbd508a8dcbc859/68acd98fac1c6a1592b34c6c_MacBook%20Air%20M4%20-%20Sky%20Blue-1.jpg" alt="View 1" className="w-full h-auto" />
              </div>
            </div>
            <div className="w-full px-frame">
              <div className="md:rounded-[2em] overflow-hidden shadow-xl">
                <img src="https://cdn.prod.website-files.com/684d06174bbd508a8dcbc859/68acd98e7d50442728168c29_MacBook%20Air%20M4%20-%20Sky%20Blue.jpg" alt="View 2" className="w-full h-auto" />
              </div>
            </div>
          </section>

          <section id="solucion" className={STYLING.section}>
            <div>
              <span className={STYLING.label}>Acto_03</span>
              <h2 className={STYLING.title}>Cómo lo <br /> resolvimos</h2>
            </div>
            <div className="space-y-[6em]">
              <p className="text-display-md font-light tracking-tighter leading-tight max-w-forge opacity-80">
                Trabajamos en un entorno de <span className="italic font-normal">validación constante</span> donde la factibilidad técnica fue el motor principal del diseño.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 content-gap gap-y-[5em]">
                {[
                  { t: "Investigación", d: "Auditoría de flujos y benchmark profundo de fintechs." },
                  { t: "Definición", d: "Mapeo de user journeys para validar la arquitectura." },
                  { t: "Diseño Atómico", d: "Construcción de Vank Atoms: Un sistema escalable." },
                  { t: "Metodología", d: "Ciclos de feedback semanales con stakeholders." }
                ].map((step, i) => (
                  <div key={i} className="space-y-[1em]">
                    <span className="font-mono text-[0.6em] font-bold text-foreground border-b border-foreground pb-[0.25em] uppercase tracking-widest">Step_0{i+1}</span>
                    <h4 className="text-display-sm font-black uppercase tracking-tight pt-[1em]">{step.t}</h4>
                    <p className="text-body-md opacity-50 font-medium leading-snug">{step.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="resultado" className={STYLING.section}>
            <div>
              <span className={STYLING.label}>Acto_04</span>
              <h2 className={STYLING.title}>El resultado <br /> final</h2>
            </div>
            <div className="space-y-[5em]">
              <p className="text-display-md font-black tracking-tighter leading-[0.9] max-w-forge">
                Un ecosistema robusto que garantiza la <span className="text-foreground/40 italic">coherencia funcional</span> en cada pixel.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 content-gap border-t border-foreground/10 pt-[4em]">
                {[
                  "Navegación unificada y clara.",
                  "Sistema de diseño documentado.",
                  "Visibilidad total de comisiones.",
                  "Transferencias en 3 pasos.",
                  "Código listo para implementación."
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-[1em]">
                    <div className="w-[0.4em] h-[0.4em] bg-foreground rounded-full" />
                    <span className="text-body-lg font-bold uppercase tracking-tight opacity-70">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="impacto" className={STYLING.section}>
            <div>
              <span className={STYLING.label}>Acto_05</span>
              <h2 className={STYLING.title}>Impacto y <br /> Aprendizajes</h2>
            </div>
            <div className="space-y-[5em]">
              <p className="text-body-lg text-foreground/60 leading-relaxed font-medium max-w-forge">
                El Diseño de la plataforma Vank no solo abordó los problemas iniciales, sino que también generó un impacto positivo medible en la experiencia del usuario y en la eficiencia operativa del negocio.
              </p>
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
