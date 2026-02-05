"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import { Instagram, Mail, MessageCircle, ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const { t } = useLanguage();
  const footerRef = useRef<HTMLElement>(null);
  const bulbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bulbRef.current) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to("#bulb-stop-1", { attr: { "stop-color": "#FFD700" }, duration: 2, ease: "sine.inOut" })
        .to("#bulb-stop-2", { attr: { "stop-color": "#FFA500" }, duration: 2, ease: "sine.inOut" }, "<");
    }
  }, []);

  return (
    <>
      <div className="h-screen pointer-events-none" />
      
      <footer 
        ref={footerRef}
        className="fixed bottom-0 left-0 w-full h-screen bg-[#0A0A0A] dark:bg-[#FAF9F6] text-white dark:text-black flex flex-col justify-between px-frame py-16 md:py-24 z-0 overflow-hidden"
      >
        {/* SVG Gradient Definition */}
        <svg width="0" height="0" className="absolute">
          <linearGradient id="bulb-grad" x1="0" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
            <stop id="bulb-stop-1" offset="0%" stopColor="#FFFACD" />
            <stop id="bulb-stop-2" offset="100%" stopColor="#FFD700" />
          </linearGradient>
        </svg>

        {/* 1. TOP INDICATOR */}
        <div className="relative z-10 w-full flex items-center gap-4">
          <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
          <span className="font-mono text-[0.55em] md:text-[0.6em] uppercase tracking-[0.4em] text-white/30 dark:text-black/30 font-bold">
            {t.footer.title}
          </span>
        </div>

        {/* 2. CENTRAL TITLE */}
        <div className="relative z-10 w-full">
          <h2 className="text-[13vw] lg:text-[7.5vw] font-black uppercase leading-[0.95] lg:leading-[0.85] tracking-tighter max-w-6xl">
            {t.footer.subtitle}
            <span ref={bulbRef} className="inline-flex items-center justify-center -ml-2 -translate-y-1.5 lg:-ml-4 lg:mb-[10px] lg:-translate-y-2 opacity-90 align-middle h-[1em] w-[1em]">
              <span className="relative flex items-center justify-center w-full h-full">
                {/* Custom Architectural Bulb SVG */}
                <svg viewBox="0 0 24 24" className="w-[0.85em] h-[0.8em]" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Glass Bulb Body */}
                  <path d="M9 18h6" stroke="url(#bulb-grad)" />
                  <path d="M10 22h4" stroke="url(#bulb-grad)" />
                  <path d="M15.5 12.5c1.1-1 1.8-2.4 1.8-4a5.3 5.3 0 1 0-10.6 0c0 1.6.7 3 1.8 4 .8.8 1.5 1.8 1.5 3.5h4c0-1.7.7-2.7 1.5-3.5z" stroke="url(#bulb-grad)" />
                  {/* Internal Filament */}
                  <path d="M11 8l1 2 1-2" stroke="url(#bulb-grad)" strokeWidth="1" opacity="0.6" />
                </svg>
                <div className="absolute inset-0 bg-yellow-400/10 blur-3xl rounded-full pointer-events-none" />
              </span>
            </span>
          </h2>
        </div>

        {/* 3. ACTIONS (Social + Email) */}
        <div className="relative z-10 w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-12 mb-8">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-auto">
            {[
              { id: "mail", label: "Email", href: `mailto:${t.footer.email}`, gradient: ["#FF4D00", "#FF9000"] },
              { id: "ig", label: "Instagram", href: t.footer.links.instagramUrl, gradient: ["#833AB4", "#FD1D1D", "#FCB045"] },
              { id: "wa", label: "Whatsapp", href: `https://wa.me/${t.footer.links.phone.replace(/[^0-9]/g, '')}`, gradient: ["#25D366", "#128C7E"] }
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                className="group relative flex items-center justify-between gap-4 px-6 h-[44px] md:h-[48px] md:px-8 border border-white/20 dark:border-black/20 rounded-[12px] transition-all duration-500 hover:-translate-y-1 bg-transparent overflow-hidden w-full max-w-[280px] md:max-w-none md:w-auto"
              >
                <span className="text-[0.85em] font-medium tracking-tight text-white/80 dark:text-black/80 group-hover:text-white dark:group-hover:text-black transition-colors duration-500">{item.label}</span>
                <ArrowUpRight size={14} className="text-white/30 dark:text-black/30 group-hover:text-white dark:group-hover:text-black transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
          <a href={`mailto:${t.footer.email}`} className="text-xl md:text-2xl font-light underline underline-offset-[0.5em] decoration-1 hover:opacity-50 transition-opacity break-all">
            {t.footer.email}
          </a>
        </div>

        {/* 4. BOTTOM BAR */}
        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t border-white/10 dark:border-black/10 pt-8">
          <p className="font-mono text-[0.55em] font-bold tracking-[0.2em] text-white/30 dark:text-black/30 uppercase">
            ALL RIGHTS RESERVED — 2026
          </p>
          <div className="hidden md:flex flex-row items-center gap-4 md:gap-12 w-full md:w-auto justify-between md:justify-end">
            <p className="font-mono text-[0.55em] font-bold tracking-[0.1em] text-white/40 dark:text-black/40">{t.footer.links.phone}</p>
            <p className="font-mono text-[0.55em] font-bold tracking-[0.1em] text-white/20 dark:text-black/20 uppercase whitespace-nowrap">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
