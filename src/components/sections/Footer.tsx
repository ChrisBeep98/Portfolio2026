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
        className="fixed bottom-0 left-0 w-full h-screen bg-black dark:bg-[#F2F2F0] text-white dark:text-black flex flex-col justify-between px-frame py-12 md:py-20 z-0 overflow-hidden"
      >
        {/* Massive Background Title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none">
          <h1 className="text-[18vw] font-black leading-none tracking-[-0.05em] text-white/[0.03] dark:text-black/[0.02]">
            MOTIONFLOW
          </h1>
        </div>

        {/* Top Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
          <div className="lg:col-span-8 space-y-12">
            <span className="font-mono text-[0.6em] uppercase tracking-[0.4em] text-white/30 dark:text-black/30 font-bold block">
              {t.footer.title}
            </span>
            
            <h2 className="text-[10vw] lg:text-[6vw] font-black uppercase leading-[0.9] tracking-tighter max-w-4xl">
              {t.footer.subtitle}
            </h2>

            {/* SOCIAL BUTTONS (Relocated Here) */}
            <div className="flex flex-wrap gap-4 pt-4">
              {[
                { icon: Mail, label: t.footer.links.email, href: `mailto:${t.footer.email}`, color: "orange" },
                { icon: Instagram, label: t.footer.links.instagram, href: t.footer.links.instagramUrl, color: "pink" },
                { icon: MessageCircle, label: t.footer.links.whatsapp, href: `https://wa.me/${t.footer.links.phone.replace(/[^0-9]/g, '')}`, color: "green" }
              ].map((item, i) => (
                <a 
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-6 py-4 rounded-full border border-white/10 dark:border-black/10 hover:border-foreground/50 transition-all duration-500"
                >
                  <item.icon size={18} className={`text-${item.color}-500 group-hover:scale-110 transition-transform`} />
                  <span className="text-[0.65em] font-bold uppercase tracking-[0.3em]">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col lg:items-end justify-start pt-12 lg:pt-20">
             <a 
              href={`mailto:${t.footer.email}`}
              className="text-2xl md:text-3xl font-light underline underline-offset-[0.5em] decoration-1 hover:opacity-50 transition-opacity break-all"
            >
              {t.footer.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-end md:items-center gap-8 border-t border-white/10 dark:border-black/10 pt-8 mt-auto w-full">
          <div className="flex flex-col gap-1">
            <p className="font-mono text-[0.55em] font-bold tracking-[0.5em] text-white/30 dark:text-black/30 uppercase leading-none">
              ALL RIGHTS RESERVED — 2026
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-end md:items-center gap-4 md:gap-12">
            <p className="font-mono text-[0.55em] font-bold tracking-[0.3em] text-white/40 dark:text-black/40">
              {t.footer.links.phone}
            </p>
            <p className="font-mono text-[0.55em] font-bold tracking-[0.3em] text-white/20 dark:text-black/20 uppercase">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}