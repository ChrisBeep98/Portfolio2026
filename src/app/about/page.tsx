"use client";

import React, { useRef, useEffect } from "react";
import Header from "@/components/sections/Header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrada animada
      gsap.from(".reveal-text", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2
      });

      gsap.from(".reveal-img", {
        y: 60,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.4
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-background text-foreground min-h-screen font-sans selection:bg-foreground selection:text-background overflow-x-hidden">
      <Header />
      
      <section className="pt-[12em] pb-[6em] px-frame grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-20">
        
        {/* COLUMNA IZQUIERDA: TEXTO */}
        <div className="flex flex-col justify-start pt-4 lg:pt-12">
          <span className="reveal-text font-mono text-[0.75em] uppercase tracking-[0.2em] text-foreground/40 font-bold block mb-[2em]">
            Perfil
          </span>
          
          <h1 className="reveal-text text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] mb-[1em]">
            Diseñador UX/UI<br/>
            <span className="text-foreground/60">Desarrollador Webflow</span><br/>
            y Creativo Bilingüe
          </h1>

          <p className="reveal-text text-lg md:text-xl font-medium leading-relaxed text-foreground/70 max-w-xl">
            Me dedico a diseñar experiencias digitales que ponen a las personas en el centro. Mi enfoque combina investigación, estructura y creatividad para construir productos que no solo funcionan, sino que se sienten vivos.
          </p>
        </div>

        {/* COLUMNA DERECHA: IMÁGENES */}
        <div className="relative h-full min-h-[60vh] lg:min-h-[auto]">
          {/* Imagen Grande */}
          <div className="reveal-img relative w-[85%] aspect-[3/4] bg-surface rounded-[2px] overflow-hidden shadow-lg ml-auto z-10">
            <img 
              src="https://cdn.prod.website-files.com/684d06174bbd508a8dcbc859/68b22e2584f095b8afb03eec_Generated%20Image%20August%2029%2C%202025%20-%203_03PM.jpeg" 
              alt="Christian Sandoval Portrait" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Imagen Pequeña (Superpuesta o Adyacente) */}
          <div className="reveal-img absolute bottom-[10%] left-0 w-[35%] aspect-square bg-surface rounded-[2px] overflow-hidden shadow-xl z-20 border-[4px] border-background">
            <img 
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop" 
              alt="Detail" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Caption */}
          <div className="reveal-img absolute -bottom-8 right-0 text-right">
            <p className="font-mono text-[0.65em] uppercase tracking-[0.1em] text-foreground/40 font-bold">
              Christian Sandoval Moná <span className="mx-2">/</span> 27 Años
            </p>
          </div>
        </div>

      </section>

    </main>
  );
}
