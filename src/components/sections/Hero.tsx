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
  const systemRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      // 1. ESTADO INICIAL
      const allTargets = ".reveal-left, .reveal-right, .reveal-center, .hero-detail, .image-inner-container";
      gsap.set(".reveal-left", { opacity: 0, xPercent: -100 });
      gsap.set(".reveal-right", { opacity: 0, xPercent: 100 });
      gsap.set(".reveal-center", { opacity: 0, y: 30 });
      gsap.set(planetRef.current, { scale: 0, opacity: 0 });
      gsap.set(".orbit-ring", { scale: 0, opacity: 0 });
      gsap.set(imageWrapperRef.current, { y: 100, opacity: 0, scale: 1.1 });
      gsap.set(".hero-detail", { y: 20, opacity: 0 });

      // 2. TIMELINE DE ENTRADA (Intro) - Sin delay global para poder matarla siempre
      const introTl = gsap.timeline({ 
        defaults: { ease: "power4.out" }
      });

      // Añadimos el delay como un espacio vacío al inicio
      introTl.to({}, { duration: 0.5 }) 
        .to(".reveal-left", { opacity: 1, xPercent: 0, duration: 1.5, stagger: 0.1 })
        .to(".reveal-right", { opacity: 1, xPercent: 0, duration: 1.5, stagger: 0.1 }, "<")
        .to(".reveal-center", { opacity: 1, y: 0, duration: 1.5 }, "<0.2")
        .to(imageWrapperRef.current, { y: 0, opacity: 1, scale: 1, duration: 1.5 }, "-=1")
        .to(".hero-detail", { y: 0, opacity: 1, stagger: 0.1, duration: 1 }, "-=1");

      // 3. TIMELINE DE SCROLL (ACTO 2) - Garantía de Visibilidad con fromTo
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onEnter: () => {
            // Matamos la intro agresivamente si se inicia scroll
            if (introTl.isActive() || introTl.progress() < 1) {
              introTl.progress(1).kill();
            }
          }
        }
      });

      // Usamos fromTo con immediateRender: false para forzar visibilidad al inicio del scroll
      scrollTl
        .fromTo(".reveal-left", { xPercent: 0, opacity: 1 }, { xPercent: -150, opacity: 0, ease: "none", immediateRender: false }, 0)
        .fromTo(".reveal-right", { xPercent: 0, opacity: 1 }, { xPercent: 150, opacity: 0, ease: "none", immediateRender: false }, 0)
        .fromTo(".reveal-center", { xPercent: 0, opacity: 1 }, { xPercent: -150, opacity: 0, ease: "none", immediateRender: false }, 0)
        
        .fromTo(imageWrapperRef.current, 
          { 
            left: isMobile ? "14px" : "7em", 
            bottom: isMobile ? "14vh" : "10vh", 
            width: isMobile ? "60vw" : "16vw", 
            height: isMobile ? "28vh" : "30vh", 
            opacity: 1, scale: 1, y: 0, x: 0 
          },
          { 
            left: 0, bottom: 0, top: isMobile ? "auto" : 0, x: 0, y: isMobile ? 100 : 0,
            height: isMobile ? "25vh" : "100vh",
            width: isMobile ? "100vw" : "40vw",
            borderRadius: "0px",
            opacity: isMobile ? 0 : 1, 
            ease: "power2.inOut",
            immediateRender: false,
            zIndex: 40
          }, 0)
        
        .fromTo(systemRef.current, { x: 0, opacity: 0 }, { 
          x: isMobile ? 0 : "20vw", 
          opacity: 1,
          ease: "power2.inOut",
          immediateRender: false
        }, 0)
        .fromTo(planetRef.current, { scale: 0, opacity: 0 }, { 
          scale: isMobile ? 0.7 : 1.15,
          opacity: 1,
          ease: "power2.inOut",
          immediateRender: false
        }, 0.1) 
        .fromTo(".orbit-ring", { scale: 0, opacity: 0 }, { 
          scale: isMobile ? 0.6 : 1,
          opacity: 0.6, 
          stagger: 0.05, 
          ease: "power2.inOut",
          immediateRender: false,
          force3D: true
        }, 0.1)
        .fromTo(".hero-detail", { opacity: 1, y: 0 }, { opacity: 0, y: 50, immediateRender: false, force3D: true }, 0);

      // 4. BUCLE DE ÓRBITAS OPTIMIZADO
      [1, 2, 3].forEach(i => {
        gsap.to(`.orbit-${i}`, { 
          rotation: i % 2 === 0 ? -360 : 360, 
          duration: 20 + (i * 10), 
          repeat: -1, 
          ease: "none",
          force3D: true
        });
        gsap.to(`.node-${i}`, { 
          rotation: i % 2 === 0 ? 360 : -360, 
          duration: 20 + (i * 10), 
          repeat: -1, 
          ease: "none",
          force3D: true
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const typographySize = "text-[clamp(2.8rem,12vw,12rem)]";

  const Satellite = ({ icon: Icon, label, className, nodeClass }: any) => (
    <div className={`absolute ${className} will-change-transform`}>
      <div className={`node flex items-center gap-3 px-4 md:px-5 py-2 md:py-2.5 rounded-full border bg-white border-black text-black dark:bg-white/5 dark:border-white/10 dark:text-white/90 dark:backdrop-blur-xl ${nodeClass}`}>
        <Icon className="w-3 h-3 md:w-4 md:h-4 opacity-80" />
        <span className="text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase whitespace-nowrap opacity-90">{label}</span>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="relative w-full h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col bg-[#F2F2F0] dark:bg-[#050505]">
        
        {/* --- KINETIC TYPOGRAPHY --- */}
        <div className="relative z-10 flex flex-col justify-center gap-2 md:gap-0 w-full leading-[0.82] pointer-events-none px-[14px] md:px-[7em] h-[60vh] md:h-screen pt-10 md:pt-0 will-change-[transform,opacity]">
          <div className="w-full text-left"><div className="reveal-left opacity-0 inline-block"><h1 className={`${typographySize} font-black tracking-tighter uppercase text-black dark:text-transparent dark:[-webkit-text-stroke:2px_#06b6d4] opacity-100 dark:opacity-40 whitespace-nowrap`}>Christian</h1></div></div>
          <div className="w-full text-right relative">
            <div className="reveal-right opacity-0 inline-block relative">
              <h1 className={`${typographySize} font-black tracking-tighter uppercase relative z-10 text-black dark:text-transparent whitespace-nowrap`}>Sandoval</h1>
              <h1 className={`${typographySize} font-black tracking-tighter uppercase absolute top-0 right-0 -translate-x-[2px] -z-10 mix-blend-screen text-transparent dark:text-red-500 opacity-0 dark:opacity-90 transition-all duration-300 whitespace-nowrap`}>Sandoval</h1>
            </div>
          </div>
          <div className="w-full text-center"><div className="reveal-center opacity-0 inline-block"><h1 className={`${typographySize} font-black tracking-tighter uppercase text-orange-600 dark:text-transparent dark:[-webkit-text-stroke:2px_#ec4899] opacity-100 dark:opacity-40 whitespace-nowrap`}>UX-UI.DESIGNER</h1></div></div>
          {/* FRONTEND */}
          <div className="w-full flex justify-start relative md:pl-[20vw]">
             <div className="reveal-left opacity-0 inline-block relative">
              <h1 className={`${typographySize} font-black tracking-tighter uppercase relative z-10 text-black dark:text-transparent whitespace-nowrap`}>& Frontend</h1>
            </div>
          </div>
          <div className="w-full text-right"><div className="reveal-right opacity-0 inline-block"><h1 className={`${typographySize} font-black tracking-tighter uppercase text-black dark:text-transparent dark:[-webkit-text-stroke:2px_#06b6d4] opacity-100 dark:opacity-20 whitespace-nowrap`}>Developer</h1></div></div>
        </div>

        {/* --- IMAGE WRAPPER --- */}
        <div 
          ref={imageWrapperRef}
          className="absolute left-[14px] md:left-[7em] bottom-[14vh] md:bottom-[10vh] w-[60vw] md:w-[16vw] h-[28vh] md:h-[30vh] z-20 pointer-events-auto will-change-transform opacity-0"
        >
          <div className="image-inner-container w-full h-full glass-engine overflow-hidden rounded-sm border border-black/10 dark:border-white/10 relative shadow-2xl bg-black/5 dark:bg-white/5">
            <img 
              src="https://cdn.prod.website-files.com/684d06174bbd508a8dcbc859/68b22e2584f095b8afb03eec_Generated%20Image%20August%2029%2C%202025%20-%203_03PM.jpeg" 
              alt="Portrait" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="hero-detail mt-2 md:mt-4 flex items-center gap-3 opacity-0">
            <Camera size={14} className="text-black dark:text-white" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black dark:text-white opacity-70">
              Visual Storyteller / 2026
            </span>
          </div>
        </div>

        {/* --- PLANETARY SYSTEM --- */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 will-change-transform">
          <div ref={systemRef} className="relative w-[300px] md:w-[400px] h-[300px] md:h-[400px] flex items-center justify-center translate-z-0">
            <div 
              ref={planetRef} 
              className="absolute rounded-full z-10 
                bg-black dark:bg-white
                shadow-2xl will-change-transform opacity-0" 
              style={{ width: "120px", height: "120px" }} 
            />
            
            {/* Anillo 1 */}
            <div className="orbit-ring orbit-1 opacity-0 absolute w-[280px] md:w-[420px] h-[280px] md:h-[420px] rounded-full border border-foreground/10">
              <Satellite icon={Code} label="React" className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" nodeClass="node-1" />
              <Satellite icon={Cpu} label="Next.js" className="bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" nodeClass="node-1" />
            </div>
            {/* Anillo 2 */}
            <div className="orbit-ring orbit-2 opacity-0 absolute w-[450px] md:w-[580px] h-[450px] md:h-[580px] rounded-full border border-foreground/10">
              <Satellite icon={Palette} label="Design" className="left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" nodeClass="node-2" />
              <Satellite icon={Layers} label="UI/UX" className="right-0 top-1/2 translate-x-1/2 -translate-y-1/2" nodeClass="node-2" />
            </div>
            {/* Anillo 3 (Ahora visible en mobile también) */}
            <div className="orbit-ring orbit-3 opacity-0 absolute w-[620px] md:w-[750px] h-[620px] md:h-[750px] rounded-full border border-foreground/10">
              <Satellite icon={Sparkles} label="Motion" className="top-[15%] right-[15%]" nodeClass="node-3" />
              <Satellite icon={Terminal} label="Backend" className="bottom-[15%] left-[15%]" nodeClass="node-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
