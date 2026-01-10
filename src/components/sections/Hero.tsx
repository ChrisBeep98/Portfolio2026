"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { 
  Code, 
  Palette, 
  Cpu, 
  Layers, 
  Sparkles, 
  Terminal 
} from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const planetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 0. INITIAL STATE
      gsap.set(planetRef.current, { scale: 0, opacity: 0 });
      gsap.set(".orbit-ring", { scale: 0, opacity: 0 });
      gsap.set(".hero-detail", { y: 20, opacity: 0 });
      gsap.set([".reveal-left", ".reveal-right", ".reveal-center"], { opacity: 0 }); // Ensure text is hidden initially

      // 1. MASTER TIMELINE
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // -- TEXT REVEAL SEQUENCE --
      tl.to(".reveal-left", { xPercent: 0, opacity: 1, duration: 1.5, stagger: 0.1 })
        .to(".reveal-right", { xPercent: 0, opacity: 1, duration: 1.5, stagger: 0.1 }, "<")
        .to(".reveal-center", { xPercent: 0, opacity: 1, duration: 1.5 }, "<0.2")
        .to(".hero-detail", { y: 0, opacity: 1, stagger: 0.1, duration: 1 }, "-=1");

      // -- PLANET INTRO --
      // Grows to 0.3 (Starting state) and STAYS there initially
      tl.to(planetRef.current, {
        scale: 0.3,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        onComplete: startHeartbeat // <--- TRIGGER LOOP ONLY AFTER INTRO
      }, "-=1.2");

      // -- RINGS INTRO --
      tl.to(".orbit-ring", {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        stagger: 0.1,
        ease: "elastic.out(1, 0.75)"
      }, "-=0.8");

      // 2. THE HEARTBEAT FUNCTION (Clean & Isolated)
      function startHeartbeat() {
        // Explicitly animate from current state (0.3) to 0.7 and back
        gsap.to(planetRef.current, {
          scale: 0.7,
          duration: 2.6, // Slower, cinematic breathing pace
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut", // Smooth transition
        });
      }

      // 3. ORBIT ROTATIONS (Standard background loop)
      const orbits = [
        { ring: ".orbit-1", sat: ".node-1", dur: 25 },
        { ring: ".orbit-2", sat: ".node-2", dur: 35 },
        { ring: ".orbit-3", sat: ".node-3", dur: 45 }
      ];

      orbits.forEach(({ ring, sat, dur }) => {
        gsap.to(ring, { rotation: 360, duration: dur, repeat: -1, ease: "none" });
        gsap.to(sat, { rotation: -360, duration: dur, repeat: -1, ease: "none" });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const typographySize = "text-[12em]";

  const Satellite = ({ 
    icon: Icon, 
    label, 
    className,
    nodeClass 
  }: { 
    icon: any, 
    label: string, 
    className: string,
    nodeClass: string
  }) => (
    <div className={`absolute ${className} ${nodeClass}`}>
      <div className="
        flex items-center gap-3 px-5 py-2.5 rounded-full border shadow-lg transition-all duration-700
        bg-white border-black text-black
        dark:bg-white/5 dark:border-white/10 dark:text-white/90 dark:backdrop-blur-xl
      ">
        <Icon className="w-4 h-4 opacity-80" />
        <span className="text-xs font-bold tracking-[0.15em] uppercase whitespace-nowrap opacity-90">{label}</span>
      </div>
    </div>
  );

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center px-[2em] lg:px-[7em] bg-[#F2F2F0] dark:bg-[#050505] transition-colors duration-700"
    >
      <ThemeToggle />

      <style jsx>{`
        .planet-surface {
          background: radial-gradient(circle at 35% 35%, #ffffff, #e0e0e0);
          box-shadow: inset -10px -10px 20px rgba(0,0,0,0.05), 0 20px 40px rgba(0,0,0,0.1);
        }
        :global(.dark) .planet-surface {
          background: radial-gradient(circle at 35% 35%, #333333, #000000);
          box-shadow: inset 0 0 20px rgba(255,255,255,0.05), 0 0 60px rgba(0,0,0,0.8);
          border: 1px solid rgba(255,255,255,0.05);
        }
      `}</style>

      {/* --- BACKGROUNDS --- */}
      <div className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-30 transition-opacity duration-700 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-700">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* --- KINETIC TYPOGRAPHY --- */}
      <div className="relative z-10 flex flex-col w-full max-w-[75vw] mx-auto leading-[0.82] mix-blend-normal dark:mix-blend-screen transition-all duration-700 pointer-events-none">
        <div className="slice-text w-full text-left overflow-hidden">
          <div className="reveal-left inline-block">
            <h1 className={`${typographySize} font-black tracking-tighter uppercase transition-all duration-700 text-black dark:text-transparent dark:[-webkit-text-stroke:2px_#06b6d4] opacity-100 dark:opacity-40`}>
              Christian
            </h1>
          </div>
        </div>
        <div className="slice-text w-full text-right overflow-hidden relative">
          <div className="reveal-right inline-block relative">
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
          <div className="reveal-center inline-block">
            <h1 className={`${typographySize} font-black tracking-tighter uppercase transition-all duration-700 text-orange-600 dark:text-transparent dark:[-webkit-text-stroke:2px_#ec4899] opacity-100 dark:opacity-40`}>
              UX-UI.DESIGNER
            </h1>
          </div>
        </div>
        <div className="slice-text w-full text-left overflow-hidden relative">
           <div className="reveal-left inline-block relative">
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
          <div className="reveal-right inline-block">
            <h1 className={`${typographySize} font-black tracking-tighter uppercase transition-all duration-700 text-black dark:text-transparent dark:[-webkit-text-stroke:2px_#06b6d4] opacity-100 dark:opacity-20`}>
              Developer
            </h1>
          </div>
        </div>
      </div>

      {/* --- THE PLANETARY SYSTEM (2D PURE) --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <div className="relative w-[400px] h-[400px] flex items-center justify-center">
          
          <div ref={planetRef} className="absolute rounded-full z-10 planet-surface" style={{ width: "200px", height: "200px" }} />

          {/* ORBIT RINGS (Flat Layout) */}
          <div className="orbit-ring orbit-1 absolute w-[420px] h-[420px]">
            <Satellite icon={Code} label="React" className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" nodeClass="node-1" />
            <Satellite icon={Cpu} label="Next.js" className="bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" nodeClass="node-1" />
          </div>

          <div className="orbit-ring orbit-2 absolute w-[580px] h-[580px]">
            <Satellite icon={Palette} label="Design" className="left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" nodeClass="node-2" />
            <Satellite icon={Layers} label="UI/UX" className="right-0 top-1/2 translate-x-1/2 -translate-y-1/2" nodeClass="node-2" />
          </div>

          <div className="orbit-ring orbit-3 absolute w-[750px] h-[750px]">
            <Satellite icon={Sparkles} label="Motion" className="top-[15%] right-[15%]" nodeClass="node-3" />
            <Satellite icon={Terminal} label="Backend" className="bottom-[15%] left-[15%]" nodeClass="node-3" />
          </div>

        </div>
      </div>

      {/* --- INFO OVERLAY --- */}
      <div className="absolute bottom-12 left-0 w-full flex justify-between px-[2em] lg:px-[7em] pointer-events-none mix-blend-difference z-30">
        <div className="hero-detail flex flex-col gap-1">
          <span className="bg-black dark:bg-white text-white dark:text-black px-2 py-1 text-sm font-bold uppercase tracking-wider transition-colors duration-700">Role</span>
          <span className="text-black dark:text-white font-mono text-xs uppercase tracking-widest opacity-60">Full Stack</span>
        </div>
      </div>

    </section>
  );
}