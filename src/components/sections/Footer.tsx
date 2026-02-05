"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import { Instagram, Mail, MessageCircle, Lightbulb } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const { t } = useLanguage();
  const footerRef = useRef<HTMLElement>(null);
  const bulbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bulbRef.current) {
      // Subtle flicker animation
      gsap.to(bulbRef.current, {
        opacity: 0.4,
        duration: 0.1,
        repeat: -1,
        yoyo: true,
        repeatDelay: Math.random() * 2,
        ease: "rough({ strength: 2, template: none, points: 10, taper: 'none', randomize: true, clamp: false })"
      });
    }
  }, []);

  return (
    <>
      <div className="h-screen pointer-events-none" />
      
      <footer 
        ref={footerRef}
        className="fixed bottom-0 left-0 w-full h-screen bg-[#0A0A0A] dark:bg-[#FAF9F6] text-white dark:text-black flex flex-col justify-between px-frame py-16 md:py-24 z-0 overflow-hidden"
      >
        {/* Massive Background Title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none">
          <h1 className="text-[18vw] font-black leading-none tracking-[-0.05em] text-white/[0.03] dark:text-black/[0.02]">
            MOTIONFLOW
          </h1>
        </div>

        {/* SECTION 1 & 2: AVAILABILITY + MAIN TITLE (Grouped for closeness) */}
        <div className="relative z-10 w-full space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
            <span className="font-mono text-[0.6em] uppercase tracking-[0.4em] text-white/30 dark:text-black/30 font-bold block">
              {t.footer.title}
            </span>
          </div>
          
          <h2 className="text-[10vw] lg:text-[7vw] font-black uppercase leading-[0.85] tracking-tighter max-w-6xl">
            {t.footer.subtitle}
            
            {/* Integrated Lightbulb (Stuck to the last letter, visible on all devices) */}
            <span 
              ref={bulbRef}
              className="inline-flex items-center justify-center ml-2 lg:-ml-4 lg:mb-[6px] lg:-translate-y-1.5 opacity-80 group cursor-pointer transition-all duration-500 hover:opacity-100 hover:scale-110 align-middle h-[1em] w-[1em]"
            >
              <span className="relative flex items-center justify-center">
                <Lightbulb 
                  size="0.8em" 
                  strokeWidth={0.5}
                  className="text-white dark:text-black group-hover:text-yellow-400 transition-colors duration-500" 
                />
                <div className="absolute inset-0 bg-yellow-400 blur-3xl rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              </span>
            </span>
          </h2>
        </div>

        {/* SECTION 3: ACTIONS (SOCIAL & EMAIL) */}
        <div className="relative z-10 w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
          {/* Social Tags */}
          <div className="flex flex-wrap gap-4">
            {[
              { icon: Mail, label: t.footer.links.email, href: `mailto:${t.footer.email}`, color: "#FF4D00" },
              { icon: Instagram, label: t.footer.links.instagram, href: t.footer.links.instagramUrl, color: "#FD1D1D" },
              { icon: MessageCircle, label: t.footer.links.whatsapp, href: `https://wa.me/${t.footer.links.phone.replace(/[^0-9]/g, '')}`, color: "#25D366" }
            ].map((item, i) => (
              <a 
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 px-8 py-5 border rounded-[8px] transition-all duration-500 hover:-translate-y-1 bg-[#141414] dark:bg-white shadow-sm"
                style={{ borderColor: `${item.color}40` }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = item.color}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = `${item.color}40`}
              >
                <item.icon 
                  size={20} 
                  style={{ color: item.color }} 
                  className="transition-transform duration-500 group-hover:scale-110" 
                />
                <span className="text-[0.7em] font-black uppercase tracking-[0.2em] text-white/70 dark:text-black/70 group-hover:text-white dark:group-hover:text-black transition-colors duration-500">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          {/* Large Email Link */}
          <a 
            href={`mailto:${t.footer.email}`}
            className="text-2xl md:text-4xl font-light underline underline-offset-[0.5em] decoration-1 hover:opacity-50 transition-opacity break-all"
          >
            {t.footer.email}
          </a>
        </div>

        {/* SECTION 4: BOTTOM BAR */}
        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-end md:items-center gap-8 border-t border-white/10 dark:border-black/10 pt-8">
          <p className="font-mono text-[0.55em] font-bold tracking-[0.5em] text-white/20 dark:text-black/20 uppercase">
            ALL RIGHTS RESERVED — 2026
          </p>
          
          <div className="flex flex-col md:flex-row items-end md:items-center gap-4 md:gap-12">
            <p className="font-mono text-[0.55em] font-bold tracking-[0.3em] text-white/40 dark:text-black/40">{t.footer.links.phone}</p>
            <p className="font-mono text-[0.55em] font-bold tracking-[0.3em] text-white/20 dark:text-black/20 uppercase">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
