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
  Terminal,
  Camera
} from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const planetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. ESTADO INICIAL
      gsap.set([".reveal-left", ".reveal-right", ".reveal-center"], { opacity: 0, xPercent: 0 });
      gsap.set(planetRef.current, { scale: 0, opacity: 0 });
      gsap.set(".orbit-ring", { scale: 0, opacity: 0 });
      gsap.set(".reveal-image", { y: 100, opacity: 0, scale: 1.1 });
      gsap.set(".hero-detail", { y: 20, opacity: 0 });

      // 2. TIMELINE DE ENTRADA (Intro)
      const introTl = gsap.timeline({ defaults: { ease: "power4.out" } });

      introTl
        .to(".reveal-left", { opacity: 1, duration: 1.2, stagger: 0.1 })
        .to(".reveal-right", { opacity: 1, duration: 1.2, stagger: 0.1 }, "<")
        .to(".reveal-center", { opacity: 1, duration: 1.2 }, "<0.2")
        .to(planetRef.current, { scale: 0.3, opacity: 1, duration: 1.5, ease: "back.out(1.5)" }, "-=1")
        .to(".reveal-image", { y: 0, opacity: 1, scale: 1, duration: 1.5 }, "-=1.2")
        .to(".orbit-ring", { scale: 1, opacity: 1, duration: 1.2, stagger: 0.1 }, "-=1")
        .to(".hero-detail", { y: 0, opacity: 1, stagger: 0.1, duration: 1 }, "-=1");

      // 3. TIMELINE DE SCROLL (ACTO 2)
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        }
      });

      scrollTl
        .to(".reveal-left", { xPercent: -150, opacity: 0, ease: "none" }, 0)
        .to(".reveal-right", { xPercent: 150, opacity: 0, ease: "none" }, 0)
        .to(".reveal-center", { xPercent: -150, opacity: 0, ease: "none" }, 0)
        .to(".reveal-image", { yPercent: -120, xPercent: -30, scale: 1.2, opacity: 0, ease: "none" }, 0)
        .to(planetRef.current, { 
          scale: 6, 
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut" 
        }, 0.1)
        .to(".orbit-ring", { 
          scale: 3, 
          opacity: 0, 
          stagger: 0.05, 
          ease: "power2.inOut" 
        }, 0.1)
        .to(".hero-detail", { opacity: 0, y: 50 }, 0);

      // 4. BUCLE DE ÓRBITAS
      gsap.to(".orbit-1", { rotation: 360, duration: 25, repeat: -1, ease: "none" });
      gsap.to(".orbit-2", { rotation: -360, duration: 35, repeat: -1, ease: "none" });
      gsap.to(".orbit-3", { rotation: 360, duration: 45, repeat: -1, ease: "none" });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const typographySize = "text-[clamp(4rem,12vw,12rem)]";

  const Satellite = ({ icon: Icon, label, className }: any) => (
    <div className={`absolute ${className}`}>
      <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border shadow-lg bg-white border-black text-black dark:bg-white/5 dark:border-white/10 dark:text-white/90 dark:backdrop-blur-xl">
        <Icon className="w-4 h-4 opacity-80" />
        <span className="text-xs font-bold tracking-[0.15em] uppercase whitespace-nowrap opacity-90">{label}</span>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="relative w-full h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center bg-[#F2F2F0] dark:bg-[#050505] transition-colors duration-700">
        <ThemeToggle />

        {/* --- KINETIC TYPOGRAPHY --- */}
        <div className="relative z-10 flex flex-col w-full leading-[0.82] pointer-events-none px-[2em] lg:px-[7em]">
          
          {/* CHRISTIAN */}
          <div className="w-full text-left">
            <div className="reveal-left inline-block">
              <h1 className={`${typographySize} font-black tracking-tighter uppercase text-black dark:text-transparent dark:[-webkit-text-stroke:2px_#06b6d4] opacity-100 dark:opacity-40 whitespace-nowrap`}>
                Christian
              </h1>
            </div>
          </div>

          {/* SANDOVAL (Glitch Layered) */}
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

          {/* UX-UI.DESIGNER */}
          <div className="w-full text-center">
            <div className="reveal-center inline-block">
              <h1 className={`${typographySize} font-black tracking-tighter uppercase text-orange-600 dark:text-transparent dark:[-webkit-text-stroke:2px_#ec4899] opacity-100 dark:opacity-40 whitespace-nowrap`}>
                UX-UI.DESIGNER
              </h1>
            </div>
          </div>

          {/* FRONTEND (Glitch Layered) */}
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

          {/* DEVELOPER */}
          <div className="w-full text-right">
            <div className="reveal-right inline-block">
              <h1 className={`${typographySize} font-black tracking-tighter uppercase text-black dark:text-transparent dark:[-webkit-text-stroke:2px_#06b6d4] opacity-100 dark:opacity-20 whitespace-nowrap`}>
                Developer
              </h1>
            </div>
          </div>
        </div>

        {/* --- IMAGE LAYER (z-20 Over Words) --- */}
        <div className="absolute inset-0 px-[2em] lg:px-[7em] py-[5em] grid grid-cols-12 grid-rows-6 gap-[1em] pointer-events-none z-20">
          <div className="col-start-2 row-start-4 col-span-12 md:col-span-2 row-span-3 relative group pointer-events-auto reveal-image opacity-0">
            <div className="w-full h-full glass-engine overflow-hidden rounded-sm border border-black/10 dark:border-white/10 relative shadow-2xl bg-black/5 dark:bg-white/5">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                alt="Portrait" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
              />
            </div>
            <div className="mt-3 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] opacity-40">
              <Camera size={10} />
              <span>Identity_Ref</span>
            </div>
          </div>
        </div>

        {/* --- PLANETARY SYSTEM (z-0 Background) --- */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="relative w-[400px] h-[400px] flex items-center justify-center">
            <div 
              ref={planetRef} 
              className="absolute rounded-full z-10 
                bg-[radial-gradient(circle_at_35%_35%,#ffffff,#e0e0e0)] 
                dark:bg-[radial-gradient(circle_at_35%_35%,#333333,#000000)]
                shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.1),0_20px_40px_rgba(0,0,0,0.2)]
                dark:border dark:border-white/5" 
              style={{ width: "200px", height: "200px" }} 
            />
            
            <div className="orbit-ring orbit-1 absolute w-[420px] h-[420px] rounded-full border border-foreground/5" />
            <div className="orbit-ring orbit-2 absolute w-[580px] h-[580px] rounded-full border border-foreground/5" />
            <div className="orbit-ring orbit-3 absolute w-[750px] h-[750px] rounded-full border border-foreground/5" />
            
            <Satellite icon={Code} label="React" className="orbit-1 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <Satellite icon={Cpu} label="Next.js" className="orbit-2 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            <Satellite icon={Sparkles} label="Motion" className="orbit-3 top-[15%] right-[15%]" />
          </div>
        </div>

        {/* Hero Detail */}
        <div className="absolute bottom-12 left-0 w-full flex justify-between px-[2em] lg:px-[7em] pointer-events-none mix-blend-difference z-30">
          <div className="hero-detail flex flex-col gap-1">
            <span className="bg-black dark:bg-white text-white dark:text-black px-2 py-1 text-sm font-bold uppercase tracking-wider">Role</span>
            <span className="text-black dark:text-white font-mono text-xs uppercase tracking-widest opacity-60">Full Stack</span>
          </div>
        </div>
      </div>
    </div>
  );
}