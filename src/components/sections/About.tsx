"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Zap, Star, Triangle, Diamond, LucideIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ContentItem {
  type: "text" | "accent";
  content?: string;
  icon?: LucideIcon;
  className?: string;
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".about-word", { y: 80, opacity: 0 });
      gsap.set(".about-line-top", { scaleX: 0 });
      gsap.set(".about-line-bottom", { scaleX: 0 });
      gsap.set(".about-accent", { scale: 0, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        }
      });

      tl.to(".about-line-top", { scaleX: 1, duration: 1.2, ease: "power4.inOut" }, 0)
        .to(".about-word", { y: 0, opacity: 1, duration: 1, stagger: 0.04, ease: "power3.out" }, 0.2)
        .to(".about-accent", { scale: 1, opacity: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.7)" }, 0.6)
        .to(".about-line-bottom", { scaleX: 1, duration: 1.2, ease: "power4.inOut" }, 0.8);

      // Continuous rotation animation for accents
      gsap.to(".about-accent-rotate", {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: "none",
        stagger: { each: 1.5 }
      });

      // Float animation
      gsap.to(".about-accent-pulse", {
        y: -8,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.5 }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const content: ContentItem[] = [
    { type: "text", content: "Soy" },
    { type: "text", content: "diseñador" },
    { type: "accent", icon: Sparkles, className: "text-orange-500 about-accent-rotate" },
    { type: "text", content: "UX/UI" },
    { type: "text", content: "y" },
    { type: "text", content: "desarrollador" },
    { type: "accent", icon: Zap, className: "text-purple-500 about-accent-pulse" },
    { type: "text", content: "frontend." },
    { type: "text", content: "Transformo" },
    { type: "text", content: "ideas" },
    { type: "accent", icon: Star, className: "text-cyan-500 about-accent-rotate" },
    { type: "text", content: "complejas" },
    { type: "text", content: "en" },
    { type: "text", content: "experiencias" },
    { type: "accent", icon: Triangle, className: "text-pink-500 about-accent-rotate" },
    { type: "text", content: "digitales" },
    { type: "text", content: "limpias," },
    { type: "text", content: "funcionales" },
    { type: "text", content: "y" },
    { type: "text", content: "memorables." },
    { type: "text", content: "Mi" },
    { type: "text", content: "trabajo" },
    { type: "text", content: "habita" },
    { type: "text", content: "en" },
    { type: "text", content: "la" },
    { type: "text", content: "intersección" },
    { type: "accent", icon: Diamond, className: "text-yellow-500 about-accent-pulse" },
    { type: "text", content: "entre" },
    { type: "text", content: "estética" },
    { type: "text", content: "y" },
    { type: "text", content: "tecnología." },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full bg-[#F2F2F0] dark:bg-[#050505] transition-colors duration-700"
    >
      <div
        ref={containerRef}
        className="relative min-h-[70vh] sm:min-h-screen w-full flex items-center bg-[#050505] dark:bg-[#F2F2F0] rounded-[36px] transition-colors duration-700 py-24 sm:py-32 px-3.5 sm:px-[2em] lg:px-[4em] overflow-hidden will-change-transform"
      >
        <div className="about-line-top absolute top-0 left-0 w-full h-px bg-white/20 dark:bg-black/20 origin-left" />

        <div className="max-w-[1600px] mx-auto w-full relative z-10">
          <h2 className="text-[8.5vw] sm:text-[7.5vw] md:text-[6vw] lg:text-[4vw] lg:font-medium font-bold tracking-tighter leading-[1.25] sm:leading-[1.15] text-white dark:text-black">
            {content.map((item, index) => {
              if (item.type === "text" && item.content) {
                const isSpecial = ["UX/UI", "estética", "tecnología."].includes(item.content);
                const isOrange = item.content === "UX/UI";
                return (
                  <span
                    key={index}
                    className={`about-word inline-block mr-[0.25em] ${
                      isOrange ? "text-orange-400 dark:text-orange-600" : ""
                    } ${isSpecial && !isOrange ? "italic font-light" : ""}`}
                  >
                    {item.content}
                  </span>
                );
              }

              if (item.type === "accent" && item.icon) {
                const Icon = item.icon;
                return (
                  <span
                    key={index}
                    className={`about-accent inline-flex items-center justify-center mx-[0.25em] ${item.className}`}
                  >
                    <Icon className="w-[0.7em] h-[0.7em]" strokeWidth={2} />
                  </span>
                );
              }

              return null;
            })}
          </h2>
        </div>

        <div className="about-line-bottom absolute bottom-0 left-0 w-full h-px bg-white/20 dark:bg-black/20 origin-right" />
      </div>
    </section>
  );
}
