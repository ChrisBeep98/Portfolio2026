"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { 
  Code, 
  Palette, 
  Cpu, 
  Layers, 
  Sparkles, 
  Terminal 
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const planetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 0. RESET STATE (Hidden & Small)
      gsap.set(planetRef.current, { scale: 0.2, opacity: 0, y: 100 }); 
      gsap.set(".orbit-ring", { scale: 0.5, opacity: 0 });

      // 1. INTRO ANIMATION (Genesis)
      const loadTl = gsap.timeline({ defaults: { ease: "power4.out" } });
      
      loadTl.from(".reveal-left", { xPercent: -120, opacity: 0, duration: 1.8, stagger: 0.1 }, 0);
      loadTl.from(".reveal-right", { xPercent: 120, opacity: 0, duration: 1.8, stagger: 0.1 }, 0);
      loadTl.from(".reveal-center", { scale: 0, opacity: 0, duration: 1.8 }, 0.2);
      loadTl.from(".hero-detail", { y: 20, opacity: 0, stagger: 0.1, duration: 1 }, "-=1.2");

      loadTl.to(planetRef.current, {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "elastic.out(1, 0.6)"
      }, "-=1.5");

      loadTl.to(".orbit-ring", {
        scale: 1,
        opacity: 1,
        duration: 1.8,
        stagger: 0.1,
        ease: "back.out(1.2)"
      }, "-=1.8");

      // 2. IDLE ANIMATION (Flat 2D Orbits + Counter-Rotation)
      // Orbit 1: Fast
      gsap.to(".orbit-1", { rotationZ: 360, duration: 20, repeat: -1, ease: "none" });
      gsap.to(".node-1", { rotationZ: -360, duration: 20, repeat: -1, ease: "none" });

      // Orbit 2: Medium
      gsap.to(".orbit-2", { rotationZ: -360, duration: 30, repeat: -1, ease: "none" });
      gsap.to(".node-2", { rotationZ: 360, duration: 30, repeat: -1, ease: "none" });

      // Orbit 3: Slow
      gsap.to(".orbit-3", { rotationZ: 360, duration: 40, repeat: -1, ease: "none" });
      gsap.to(".node-3", { rotationZ: -360, duration: 40, repeat: -1, ease: "none" });

      // 3. SCROLL INTERACTION
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
        },
        defaults: { ease: "none" }
      });

      scrollTl.to(".slice-text:has(.reveal-left)", { xPercent: -160, opacity: 0 }, 0);
      scrollTl.to(".slice-text:has(.reveal-right)", { xPercent: 160, opacity: 0 }, 0);
      scrollTl.to(".slice-text:has(.reveal-center)", { scale: 0.8, opacity: 0 }, 0);

      scrollTl.to(planetRef.current, { scale: 1.2, duration: 1 }, 0);
      scrollTl.to(".orbit-ring", {
        scale: 2.5, // Fly towards camera
        opacity: 0,
        duration: 1
      }, 0);

      gsap.to(".neon-grid", {
        backgroundPosition: "0px 200px",
        ease: "none",
        scrollTrigger: { trigger: containerRef.current, start: "top top", end: "+=150%", scrub: true }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const typographySize = "text-[12em]";
  const gpuClass = "will-change-[transform,opacity]";

  // --- SATELLITE COMPONENT ---
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
    <div className={`absolute ${className}`}>
      <div 
        className={`flex items-center gap-3 px-4 py-2 rounded-full border-2 shadow-xl ${nodeClass}`}
        style={{
          backgroundColor: "var(--satellite-bg)",
          borderColor: "var(--satellite-border)",
          color: "var(--satellite-text)",
        }}
      >
        <Icon className="w-5 h-5" />
        <span className="text-sm font-black tracking-wider uppercase whitespace-nowrap">{label}</span>
      </div>
    </div>
  );

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex flex-col justify-center px-[2em] lg:px-[7em] bg-[#EAEAEA] dark:bg-[#050505] transition-colors duration-700"
    >
      <ThemeToggle />

      <style jsx>{`
        section {
          --planet-bg: radial-gradient(circle at 30% 30%, #ffffff, #d1d1d1);
          --planet-shadow: 0 30px 60px rgba(0,0,0,0.2);
          --satellite-bg: #ffffff;
          --satellite-border: #000000;
          --satellite-text: #000000;
        }
        .dark section {
          --planet-bg: radial-gradient(circle at 30% 30%, #333, #000);
          --planet-shadow: 0 0 80px rgba(0,0,0,0.8);
          --satellite-bg: #000000;
          --satellite-border: #ffffff;
          --satellite-text: #ffffff;
        }
      `}</style>

      {/* --- BACKGROUNDS --- */}
      <div className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-30 transition-opacity duration-700 overflow-hidden">
        <div className="absolute inset-0 [perspective:1000px]">
          <div 
            className="neon-grid absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vh] bg-[size:50px_50px] origin-center [transform:rotateX(60deg)] will-change-transform"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-700">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* --- KINETIC TYPOGRAPHY --- */}
      <div className="relative z-10 flex flex-col w-full max-w-[75vw] mx-auto leading-[0.82] mix-blend-normal dark:mix-blend-screen transition-all duration-700 pointer-events-none">
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

      {/* --- THE 2D PLANETARY SYSTEM --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <div className="relative w-[400px] h-[400px] flex items-center justify-center">
          
          {/* THE PLANET */}
          <div 
            ref={planetRef}
            className="absolute rounded-full z-10"
            style={{
              width: "220px",
              height: "220px",
              background: "var(--planet-bg)",
              boxShadow: "var(--planet-shadow)",
            }}
          />

          {/* ORBIT 1: TECHNICAL */}
          <div className="orbit-ring orbit-1 absolute w-[450px] h-[450px] rounded-full border border-black/5 dark:border-white/10">
            <Satellite icon={Code} label="React" className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" nodeClass="node-1" />
            <Satellite icon={Cpu} label="Next.js" className="bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" nodeClass="node-1" />
          </div>

          {/* ORBIT 2: DESIGN */}
          <div className="orbit-ring orbit-2 absolute w-[620px] h-[620px] rounded-full border border-black/5 dark:border-white/10">
            <Satellite icon={Palette} label="Design" className="left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" nodeClass="node-2" />
            <Satellite icon={Layers} label="UI/UX" className="right-0 top-1/2 translate-x-1/2 -translate-y-1/2" nodeClass="node-2" />
          </div>

          {/* ORBIT 3: CREATIVE */}
          <div className="orbit-ring orbit-3 absolute w-[800px] h-[800px] rounded-full border border-black/5 dark:border-white/10">
            <Satellite icon={Sparkles} label="Motion" className="top-[15%] right-[15%]" nodeClass="node-3" />
            <Satellite icon={Terminal} label="Backend" className="bottom-[15%] left-[15%]" nodeClass="node-3" />
          </div>

        </div>
      </div>

      {/* --- INFO OVERLAY --- */}
      <div className="absolute bottom-12 left-0 w-full flex justify-between px-[2em] lg:px-[7em] pointer-events-none mix-blend-difference z-30">
        <div className="hero-detail flex flex-col gap-1">
          <span className="text-black dark:text-white font-mono text-xs uppercase tracking-widest opacity-60">
            System.Core
          </span>
        </div>
      </div>

    </section>
  );
}
