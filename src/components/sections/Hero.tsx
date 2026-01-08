"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // INTRO ANIMATION
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from(".slice-text", {
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
      })
      .from(".hero-detail", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
      }, "-=1.0");

      // BACKGROUND MOTION
      gsap.to(".neon-grid", {
        backgroundPosition: "0px 100px",
        ease: "none",
        repeat: -1,
        duration: 4,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const typographySize = "text-[12em]";

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center px-[2em] lg:px-[7em] transition-colors duration-700 bg-[#F2F2F0] dark:bg-[#050505] text-black dark:text-white"
    >
      <ThemeToggle />

      {/* --- BACKGROUNDS --- */}
      <div className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-20 transition-opacity duration-700">
        <div className="neon-grid absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [perspective:500px] [transform:rotateX(60deg)_scale(2)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-700">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute top-0 left-12 w-[1px] h-full bg-black/10" />
        <div className="absolute top-12 left-0 w-full h-[1px] bg-black/10" />
      </div>

      {/* --- KINETIC TYPOGRAPHY --- */}
      <div className="relative z-10 flex flex-col w-full max-w-[75vw] mx-auto leading-[0.82] mix-blend-normal dark:mix-blend-screen transition-all duration-700">
        
        {/* L1: CHRISTIAN -> LEFT */}
        <div className="slice-text w-full text-left overflow-hidden">
          <h1 className={`${typographySize} font-black tracking-tighter uppercase transition-all duration-700 text-black dark:text-transparent dark:[-webkit-text-stroke:2px_#06b6d4] opacity-100 dark:opacity-40`}>
            Christian
          </h1>
        </div>

        {/* L2: SANDOVAL -> RIGHT */}
        <div className="slice-text w-full text-right overflow-hidden relative">
          <div className="inline-block relative">
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

        {/* L3: UX-UI.DESIGNER -> CENTER */}
        <div className="slice-text w-full text-center overflow-hidden">
          <h1 className={`${typographySize} font-black tracking-tighter uppercase transition-all duration-700 text-orange-600 dark:text-transparent dark:[-webkit-text-stroke:2px_#ec4899] opacity-100 dark:opacity-40`}>
            UX-UI.DESIGNER
          </h1>
        </div>

        {/* L4: FRONTEND -> LEFT */}
        <div className="slice-text w-full text-left overflow-hidden relative">
           <div className="inline-block relative">
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

        {/* L5: DEVELOPER -> RIGHT */}
        <div className="slice-text w-full text-right overflow-hidden">
          <h1 className={`${typographySize} font-black tracking-tighter uppercase transition-all duration-700 text-black dark:text-transparent dark:[-webkit-text-stroke:2px_#06b6d4] opacity-100 dark:opacity-20`}>
            Developer
          </h1>
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