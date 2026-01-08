"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // OPTIMIZED GPU TIMELINE
      const tl = gsap.timeline({ 
        defaults: { 
          ease: "power4.out",
          force3D: true
        } 
      });

      tl.from(".reveal-left", {
        xPercent: -120,
        opacity: 0,
        duration: 1.8,
        stagger: 0.1,
      }, 0);

      tl.from(".reveal-right", {
        xPercent: 120,
        opacity: 0,
        duration: 1.8,
        stagger: 0.1,
      }, 0.1);

      tl.from(".reveal-center", {
        xPercent: -120,
        opacity: 0,
        duration: 1.8,
      }, 0.2);

      tl.from(".hero-detail", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
      }, "-=1.2");

      // GPU ACCELERATED BACKGROUND ANIMATION
      // Moving the background position creates the infinite floor effect
      gsap.to(".neon-grid", {
        backgroundPosition: "0px 100px",
        ease: "none",
        repeat: -1,
        duration: 2, // Faster for more energy
        force3D: true
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const typographySize = "text-[12em]";
  const gpuClass = "will-change-[transform,opacity]";

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center px-[2em] lg:px-[7em] transition-colors duration-700 bg-[#F2F2F0] dark:bg-[#050505] text-black dark:text-white"
    >
      <ThemeToggle />

      {/* --- BACKGROUNDS (REFACTORED) --- */}
      
      {/* 1. DARK MODE: CYBER GRID (Robust 3D Setup) */}
      <div className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-30 transition-opacity duration-700 overflow-hidden">
        {/* 3D Container Wrapper */}
        <div className="absolute inset-0 [perspective:1000px]">
          {/* The Infinite Floor: Oversized & Rotated */}
          <div 
            className="neon-grid absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vh] bg-[size:50px_50px] origin-center [transform:rotateX(60deg)] will-change-transform"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `
            }}
          />
        </div>
        {/* Vignette/Fade to blend into black at the top */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] pointer-events-none" />
      </div>

      {/* 2. LIGHT MODE: SWISS GRID */}
      <div className="absolute inset-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-700">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute top-0 left-12 w-[1px] h-full bg-black/10" />
        <div className="absolute top-12 left-0 w-full h-[1px] bg-black/10" />
      </div>

      {/* --- KINETIC TYPOGRAPHY --- */}
      <div className="relative z-10 flex flex-col w-full max-w-[75vw] mx-auto leading-[0.82] mix-blend-normal dark:mix-blend-screen transition-all duration-700">
        
        <div className="slice-text w-full text-left overflow-hidden">
          <div className={`reveal-left inline-block ${gpuClass}`}>
            <h1 className={`${typographySize} font-black tracking-tighter uppercase transition-all duration-700 text-black dark:text-transparent dark:[-webkit-text-stroke:2px_#06b6d4] opacity-100 dark:opacity-40`}>
              Christian
            </h1>
          </div>
        </div>

        <div className="slice-text w-full text-right overflow-hidden relative">
          <div className={`reveal-right inline-block relative ${gpuClass}`}>
            <h1 className={`${typographySize} font-black tracking-tighter uppercase relative z-10 transition-colors duration-700 text-black dark:text-transparent`}>
              Sandoval
            </h1>
            <h1 className={`${typographySize} font-black tracking-tighter uppercase absolute top-0 right-0 -translate-x-[2px] -z-10 mix-blend-screen text-transparent dark:text-red-500 opacity-0 dark:opacity-90 transition-all duration-300`}>
              Sandoval
            </h1>
            <h1 className={`${typographySize} font-black tracking-tighter uppercase absolute top-0 right-0 translate-x-[2px] -z-10 mix-blend-screen text-transparent dark:text-blue-500 opacity-0 dark:opacity-90 transition-all duration-300`}>
              Sandoval
            </h1>
          </div>
        </div>

        <div className="slice-text w-full text-center overflow-hidden">
          <div className={`reveal-center inline-block ${gpuClass}`}>
            <h1 className={`${typographySize} font-black tracking-tighter uppercase transition-all duration-700 text-orange-600 dark:text-transparent dark:[-webkit-text-stroke:2px_#ec4899] opacity-100 dark:opacity-40`}>
              UX-UI.DESIGNER
            </h1>
          </div>
        </div>

        <div className="slice-text w-full text-left overflow-hidden relative">
           <div className={`reveal-left inline-block relative ${gpuClass}`}>
            <h1 className={`${typographySize} font-black tracking-tighter uppercase relative z-10 transition-colors duration-700 text-black dark:text-transparent`}>
              Frontend
            </h1>
            <h1 className={`${typographySize} font-black tracking-tighter uppercase absolute top-0 left-0 -translate-x-[2px] -z-10 mix-blend-screen text-transparent dark:text-cyan-500 opacity-0 dark:opacity-90 transition-all duration-300`}>
              Frontend
            </h1>
            <h1 className={`${typographySize} font-black tracking-tighter uppercase absolute top-0 left-0 translate-x-[2px] -z-10 mix-blend-screen text-transparent dark:text-purple-500 opacity-0 dark:opacity-90 transition-all duration-300`}>
              Frontend
            </h1>
          </div>
        </div>

        <div className="slice-text w-full text-right overflow-hidden">
          <div className={`reveal-right inline-block ${gpuClass}`}>
            <h1 className={`${typographySize} font-black tracking-tighter uppercase transition-all duration-700 text-black dark:text-transparent dark:[-webkit-text-stroke:2px_#06b6d4] opacity-100 dark:opacity-20`}>
              Developer
            </h1>
          </div>
        </div>

      </div>

      {/* --- INFO OVERLAY --- */}
      <div className="absolute top-1/2 left-0 w-full flex justify-between px-[2em] lg:px-[7em] pointer-events-none mix-blend-difference z-20">
        <div className="hero-detail flex flex-col gap-1">
          <span className="bg-black dark:bg-white text-white dark:text-black px-2 py-1 text-sm font-bold uppercase tracking-wider transition-colors duration-700">Role</span>
          <span className="text-black dark:text-white font-mono text-xs uppercase tracking-widest opacity-60">Full Stack</span>
        </div>
        <div className="hero-detail flex flex-col gap-1 text-right">
          <span className="bg-black dark:bg-white text-white dark:text-black px-2 py-1 text-sm font-bold uppercase tracking-wider transition-colors duration-700">Mode</span>
          <span className="text-black dark:text-white font-mono text-xs uppercase tracking-widest opacity-60">
            <span className="hidden dark:inline">Cyber</span>
            <span className="inline dark:hidden">Swiss</span>
          </span>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <div className="absolute bottom-12 text-center w-full max-w-lg mx-auto hero-detail px-[2em] lg:px-[7em] mix-blend-difference">
        <p className="text-black/80 dark:text-white/80 font-medium text-lg leading-relaxed mix-blend-normal dark:mix-blend-overlay transition-colors duration-700">
          Con <span className="text-black dark:text-white font-black uppercase italic text-2xl">ALMA</span>.
        </p>
      </div>
    </section>
  );
}