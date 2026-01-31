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

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const planetRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- 0. ESTADO INICIAL ---
      gsap.set(planetRef.current, { scale: 0, opacity: 0 });
      gsap.set(".orbit-ring", { scale: 0, opacity: 0 });
      gsap.set(".hero-detail", { y: 20, opacity: 0 });
      gsap.set([".reveal-left", ".reveal-right", ".reveal-center"], { opacity: 0 });

      // --- 1. INTRO TIMELINE ---
      const introTl = gsap.timeline({ defaults: { ease: "power4.out" } });

      introTl.to(".reveal-left", { xPercent: 0, opacity: 1, duration: 1.5, stagger: 0.1 })
        .to(".reveal-right", { xPercent: 0, opacity: 1, duration: 1.5, stagger: 0.1 }, "<")
        .to(".reveal-center", { xPercent: 0, opacity: 1, duration: 1.5 }, "<0.2")
        .to(".hero-detail", { y: 0, opacity: 1, stagger: 0.1, duration: 1 }, "-=1");

      introTl.to(planetRef.current, {
        scale: 0.3,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        onComplete: startHeartbeat
      }, "-=1.2");

      introTl.to(".orbit-ring", {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        stagger: 0.1,
        ease: "elastic.out(1, 0.75)"
      }, "-=0.8");

      function startHeartbeat() {
        gsap.to(planetRef.current, {
          scale: 0.7,
          duration: 2.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // --- 2. SCROLL ANIMATION ---
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        }
      });

      scrollTl
        .to(".reveal-left", { xPercent: -150, opacity: 0.5, ease: "none" }, 0)
        .to(".reveal-right", { xPercent: 150, opacity: 0.5, ease: "none" }, 0)
        .to(".reveal-center", { xPercent: -150, scale: 0.8, opacity: 0.5, ease: "none" }, 0)
        .to(planetRef.current, { yPercent: 40, scale: 1.6, ease: "none" }, 0)
        .to(".orbit-ring", { opacity: 0, scale: 1.2, stagger: 0.05, ease: "none" }, 0);

      // --- 3. ORBITS ---
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

  const Satellite = ({ icon: Icon, label, className, nodeClass }: any) => (
    <div className={`absolute ${className} ${nodeClass}`}>
      <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border shadow-lg bg-white border-black text-black dark:bg-white/5 dark:border-white/10 dark:text-white/90 dark:backdrop-blur-xl">
        <Icon className="w-4 h-4 opacity-80" />
        <span className="text-xs font-bold tracking-[0.15em] uppercase whitespace-nowrap opacity-90">{label}</span>
      </div>
    </div>
  );

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center bg-[#F2F2F0] dark:bg-[#050505] transition-colors duration-700"
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
        .reveal-left, .reveal-right, .reveal-center {
          will-change: transform, opacity;
        }
      `}</style>

      {/* --- BACKGROUNDS --- */}
      <div className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-30 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-700">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* --- KINETIC TYPOGRAPHY (Con Padding Recuperado) --- */}
      <div 
        ref={textRef} 
        className="relative z-10 flex flex-col w-full leading-[0.82] mix-blend-normal dark:mix-blend-screen pointer-events-none px-[2em] lg:px-[7em]"
      >
        <div className="w-full text-left">
          <div className="reveal-left inline-block">
            <h1 className={`${typographySize} font-black tracking-tighter uppercase text-black dark:text-transparent dark:[-webkit-text-stroke:2px_#06b6d4] opacity-100 dark:opacity-40 whitespace-nowrap`}>
              Christian
            </h1>
          </div>
        </div>
        <div className="w-full text-right relative">
          <div className="reveal-right inline-block relative">
            <h1 className={`${typographySize} font-black tracking-tighter uppercase relative z-10 text-black dark:text-transparent whitespace-nowrap`}>
              Sandoval
            </h1>
            <h1 className={`${typographySize} font-black tracking-tighter uppercase absolute top-0 right-0 -translate-x-[2px] -z-10 mix-blend-screen text-transparent dark:text-red-500 opacity-0 dark:opacity-90 transition-all duration-300 whitespace-nowrap`}>
              Sandoval
            </h1>
            <h1 className={`${typographySize} font-black tracking-tighter uppercase absolute top-0 right-0 translate-x-[2px] -z-10 mix-blend-screen text-transparent dark:text-blue-500 opacity-0 dark:opacity-90 transition-all duration-300 whitespace-nowrap`}>
              Sandoval
            </h1>
          </div>
        </div>
        <div className="w-full text-center">
          <div className="reveal-center inline-block">
            <h1 className={`${typographySize} font-black tracking-tighter uppercase text-orange-600 dark:text-transparent dark:[-webkit-text-stroke:2px_#ec4899] opacity-100 dark:opacity-40 whitespace-nowrap`}>
              UX-UI.DESIGNER
            </h1>
          </div>
        </div>
        <div className="w-full text-left relative">
           <div className="reveal-left inline-block relative">
            <h1 className={`${typographySize} font-black tracking-tighter uppercase relative z-10 text-black dark:text-transparent whitespace-nowrap`}>
              Frontend
            </h1>
            <h1 className={`${typographySize} font-black tracking-tighter uppercase absolute top-0 left-0 -translate-x-[2px] -z-10 mix-blend-screen text-transparent dark:text-cyan-500 opacity-0 dark:opacity-90 transition-all duration-300 whitespace-nowrap`}>
              Frontend
            </h1>
            <h1 className={`${typographySize} font-black tracking-tighter uppercase absolute top-0 left-0 translate-x-[2px] -z-10 mix-blend-screen text-transparent dark:text-purple-500 opacity-0 dark:opacity-90 transition-all duration-300 whitespace-nowrap`}>
              Frontend
            </h1>
          </div>
        </div>
        <div className="w-full text-right">
          <div className="reveal-right inline-block">
            <h1 className={`${typographySize} font-black tracking-tighter uppercase text-black dark:text-transparent dark:[-webkit-text-stroke:2px_#06b6d4] opacity-100 dark:opacity-20 whitespace-nowrap`}>
              Developer
            </h1>
          </div>
        </div>
      </div>

      {/* --- PLANETARY SYSTEM --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative w-[400px] h-[400px] flex items-center justify-center">
          <div ref={planetRef} className="absolute rounded-full z-10 planet-surface" style={{ width: "200px", height: "200px" }} />
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

      {/* Info Overlay */}
      <div className="absolute bottom-12 left-0 w-full flex justify-between px-[2em] lg:px-[7em] pointer-events-none mix-blend-difference z-30">
        <div className="hero-detail flex flex-col gap-1">
          <span className="bg-black dark:bg-white text-white dark:text-black px-2 py-1 text-sm font-bold uppercase tracking-wider">Role</span>
          <span className="text-black dark:text-white font-mono text-xs uppercase tracking-widest opacity-60">Full Stack</span>
        </div>
      </div>

    </section>
  );
}
