"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import { Instagram, Mail, MessageCircle } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const { t } = useLanguage();
  const footerRef = useRef<HTMLElement>(null);

  return (
    <>
      <div className="h-screen pointer-events-none" />
      
      <footer 
        ref={footerRef}
        className="fixed bottom-0 left-0 w-full h-screen bg-[#0A0A0A] dark:bg-[#FAF9F6] text-white dark:text-black flex flex-col px-frame py-12 md:py-20 z-0 overflow-hidden"
      >
        {/* Massive Background Title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none">
          <h1 className="text-[18vw] font-black leading-none tracking-[-0.05em] text-white/[0.03] dark:text-black/[0.02]">
            MOTIONFLOW
          </h1>
        </div>

        {/* Top Label (Static at top) */}
        <div className="relative z-10 w-full mb-12">
          <span className="font-mono text-[0.6em] uppercase tracking-[0.4em] text-white/30 dark:text-black/30 font-bold">
            {t.footer.title}
          </span>
        </div>

        {/* Main Central Block (Pushed Down & Centered) */}
        <div className="relative z-10 flex-grow flex flex-col justify-end lg:justify-center items-start w-full pb-[10vh] lg:pb-0">
          <div className="max-w-6xl w-full space-y-16">
            <h2 className="text-[10vw] lg:text-[7.5vw] font-black uppercase leading-[0.85] tracking-tighter">
              {t.footer.subtitle}
            </h2>

            {/* Redesigned Social Buttons */}
            <div className="flex flex-wrap gap-6">
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
          </div>
        </div>

        {/* Email & Info Section (Aligned Bottom) */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-12 border-t border-white/10 dark:border-black/10 pt-8 mt-auto w-full">
          <div className="flex flex-col gap-2">
             <a 
              href={`mailto:${t.footer.email}`}
              className="text-2xl md:text-3xl font-light underline underline-offset-[0.5em] decoration-1 hover:opacity-50 transition-opacity break-all"
            >
              {t.footer.email}
            </a>
            <p className="font-mono text-[0.55em] font-bold tracking-[0.5em] text-white/20 dark:text-black/20 uppercase mt-4">
              ALL RIGHTS RESERVED — 2026
            </p>
          </div>

          <div className="flex flex-col items-end gap-4">
            <p className="font-mono text-[0.55em] font-bold tracking-[0.3em] text-white/40 dark:text-black/40">{t.footer.links.phone}</p>
            <p className="font-mono text-[0.55em] font-bold tracking-[0.3em] text-white/20 dark:text-black/20 uppercase">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </>
  );
}