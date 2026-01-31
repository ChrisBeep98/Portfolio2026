"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Zap, Star, Circle, Hexagon, LucideIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ContentItem {
  type: "text" | "accent";
  content?: string;
  icon?: LucideIcon;
  className?: string;
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".about-word", { y: 80, opacity: 0 });
      gsap.set(".about-line-top", { scaleX: 0 });
      gsap.set(".about-line-bottom", { scaleX: 0 });
      gsap.set(".about-accent", { scale: 0, rotation: -180, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        }
      });

      tl.to(".about-line-top", { scaleX: 1, duration: 1.2, ease: "power4.inOut" }, 0)
        .to(".about-word", { y: 0, opacity: 1, duration: 1, stagger: 0.04, ease: "power3.out" }, 0.2)
        .to(".about-accent", { scale: 1, rotation: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.7)" }, 0.6)
        .to(".about-line-bottom", { scaleX: 1, duration: 1.2, ease: "power4.inOut" }, 0.8);

      gsap.to(".about-accent-float", {
        y: "-=10",
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.4 }
      });

      // Horizontal parallax on scroll
      if (textRef.current) {
        gsap.to(textRef.current, {
          x: -100,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          }
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const content: ContentItem[] = [
    { type: "text", content: "Soy" },
    { type: "text", content: "diseñador" },
    { type: "accent", icon: Sparkles, className: "text-orange-500" },
    { type: "text", content: "UX/UI" },
    { type: "text", content: "y" },
    { type: "text", content: "desarrollador" },
    { type: "text", content: "frontend." },
    { type: "text", content: "Transformo" },
    { type: "accent", icon: Zap, className: "text-purple-500" },
    { type: "text", content: "ideas" },
    { type: "text", content: "complejas" },
    { type: "text", content: "en" },
    { type: "text", content: "experiencias" },
    { type: "accent", icon: Star, className: "text-cyan-500" },
    { type: "text", content: "digitales" },
    { type: "text", content: "limpias," },
    { type: "text", content: "funcionales" },
    { type: "text", content: "y" },
    { type: "accent", icon: Circle, className: "text-pink-500" },
    { type: "text", content: "memorables." },
    { type: "text", content: "Mi" },
    { type: "text", content: "trabajo" },
    { type: "text", content: "habita" },
    { type: "text", content: "en" },
    { type: "text", content: "la" },
    { type: "text", content: "intersección" },
    { type: "accent", icon: Hexagon, className: "text-yellow-500" },
    { type: "text", content: "entre" },
    { type: "text", content: "estética" },
    { type: "text", content: "y" },
    { type: "text", content: "tecnología." },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen w-full flex items-center bg-[#F2F2F0] dark:bg-[#050505] transition-colors duration-700 py-32 px-[2em] lg:px-[4em] overflow-hidden"
    >
      <div className="about-line-top absolute top-0 left-0 w-full h-px bg-black/20 dark:bg-white/20 origin-left" />

      <div className="max-w-[1600px] mx-auto w-full relative z-10">
        <h2 ref={textRef} className="text-[7vw] md:text-[5.5vw] lg:text-[4.5vw] font-bold tracking-tighter leading-[1.15] text-black dark:text-white">
          {content.map((item, index) => {
            if (item.type === "text" && item.content) {
              const isSpecial = ["UX/UI", "estética", "tecnología."].includes(item.content);
              const isOrange = item.content === "UX/UI";
              return (
                <span
                  key={index}
                  className={`about-word inline-block mr-[0.25em] ${
                    isOrange ? "text-orange-600 dark:text-orange-400" : ""
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
                  className="about-accent about-accent-float inline-flex items-center justify-center mx-2"
                >
                  <Icon className={`w-[0.7em] h-[0.7em] ${item.className}`} strokeWidth={2} />
                </span>
              );
            }

            return null;
          })}
        </h2>
      </div>

      <div className="about-line-bottom absolute bottom-0 left-0 w-full h-px bg-black/20 dark:bg-white/20 origin-right" />
    </section>
  );
}
