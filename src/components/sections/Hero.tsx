"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // INTRO: SLAM ANIMATION (Heavy)
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from(".slice-text", {
        xPercent: -100,
        opacity: 0,
        stagger: 0.08,
        duration: 1.8,
      })
      .from(".hero-detail", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
      }, "-=1.2");

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

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#050505] text-white overflow-hidden flex flex-col justify-center items-center px-[4em]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="neon-grid absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [perspective:500px] [transform:rotateX(60deg)_scale(2)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* KINETIC TYPOGRAPHY (5 Lines - Full Volume) */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full mix-blend-screen leading-[0.85]">
        
        {/* L1 */}
        <div className="slice-text w-full text-center overflow-hidden">
          <h1 className="text-[11vw] font-black tracking-tighter uppercase text-transparent text-stroke-cyan opacity-40">
            Christian
          </h1>
        </div>

        {/* L2 (Solid) */}
        <div className="slice-text w-full text-center overflow-hidden relative">
          <h1 className="text-[11vw] font-black tracking-tighter uppercase text-white relative z-10">
            Sandoval
          </h1>
          <h1 className="text-[11vw] font-black tracking-tighter uppercase text-red-500 absolute top-0 left-1 -z-10 mix-blend-screen opacity-70">
            Sandoval
          </h1>
          <h1 className="text-[11vw] font-black tracking-tighter uppercase text-blue-500 absolute top-0 -left-1 -z-10 mix-blend-screen opacity-70">
            Sandoval
          </h1>
        </div>

        {/* L3 */}
        <div className="slice-text w-full text-center overflow-hidden">
          <h1 className="text-[11vw] font-black tracking-tighter uppercase text-transparent text-stroke-pink opacity-40">
            UX-UI.DESIGNER
          </h1>
        </div>

        {/* L4 (Solid) */}
        <div className="slice-text w-full text-center overflow-hidden relative">
          <h1 className="text-[11vw] font-black tracking-tighter uppercase text-white relative z-10">
            Frontend
          </h1>
           <h1 className="text-[11vw] font-black tracking-tighter uppercase text-cyan-500 absolute top-0 left-1 -z-10 mix-blend-screen opacity-70">
            Frontend
          </h1>
          <h1 className="text-[11vw] font-black tracking-tighter uppercase text-purple-500 absolute top-0 -left-1 -z-10 mix-blend-screen opacity-70">
            Frontend
          </h1>
        </div>

        {/* L5 */}
        <div className="slice-text w-full text-center overflow-hidden">
          <h1 className="text-[11vw] font-black tracking-tighter uppercase text-transparent text-stroke-cyan opacity-20">
            Developer
          </h1>
        </div>

      </div>

      {/* INFO */}
      <div className="absolute top-1/2 left-0 w-full flex justify-between px-[4em] pointer-events-none mix-blend-difference z-20">
        <div className="hero-detail flex flex-col gap-1">
          <span className="bg-white text-black px-2 py-1 text-sm font-bold uppercase tracking-wider">Role</span>
          <span className="text-white font-mono text-xs uppercase tracking-widest opacity-60">Full Stack</span>
        </div>
        <div className="hero-detail flex flex-col gap-1 text-right">
          <span className="bg-white text-black px-2 py-1 text-sm font-bold uppercase tracking-wider">Mode</span>
          <span className="text-white font-mono text-xs uppercase tracking-widest opacity-60">Creative</span>
        </div>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-12 text-center w-full max-w-lg mx-auto hero-detail px-[4em]">
        <p className="text-white/80 font-medium text-lg leading-relaxed mix-blend-overlay">
          Con <span className="text-white font-black uppercase italic text-2xl">ALMA</span>.
        </p>
      </div>

      <style jsx>{`
        .text-stroke-cyan {
          -webkit-text-stroke: 2px #06b6d4;
        }
        .text-stroke-pink {
          -webkit-text-stroke: 2px #ec4899;
        }
      `}</style>
    </section>
  );
}
