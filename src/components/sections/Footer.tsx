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
      {/* Spacer to push content up and reveal footer */}
      <div className="h-screen pointer-events-none" />
      
      <footer 
        ref={footerRef}
        className="fixed bottom-0 left-0 w-full h-screen bg-black dark:bg-[#F2F2F0] text-white dark:text-black flex flex-col justify-between px-frame py-[10vh] z-0 overflow-hidden"
      >
        {/* Massive Background Title (Cyber/Simulation Style in Dark) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none">
          <h1 className="text-[20vw] font-black leading-none opacity-5 select-none tracking-tighter">
            DESIGN
          </h1>
        </div>

        {/* Top Section */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[70%_30%] gap-[4em] items-start">
          <div className="space-y-[3em]">
            <span className="font-mono text-[0.6em] uppercase tracking-[0.4em] text-white/30 dark:text-black/30 font-bold block">
              {t.footer.title}
            </span>
            <h2 className="text-[10vw] lg:text-[7vw] font-black uppercase leading-[0.8] tracking-tighter max-w-[15em]">
              {t.footer.subtitle.split(' ').map((word, i) => (
                <span key={i} className="inline-block mr-[0.2em]">{word}</span>
              ))}
            </h2>
          </div>

          <div className="flex flex-col lg:items-end justify-start h-full pt-[4em]">
             <a 
              href={`mailto:${t.footer.email}`}
              className="text-display-xs font-light underline underline-offset-[0.5em] decoration-1 hover:opacity-50 transition-opacity break-all"
            >
              {t.footer.email}
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-end gap-[4em] border-t border-white/10 dark:border-black/10 pt-[4em]">
          
          {/* Social Buttons Outlined */}
          <div className="flex flex-wrap gap-4">
            <a 
              href={`mailto:${t.footer.email}`}
              className="group flex items-center gap-4 px-6 py-4 rounded-full border border-white/10 dark:border-black/10 hover:border-orange-500/50 transition-all duration-500"
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <Mail size={20} className="text-orange-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <span className="text-[0.65em] font-bold uppercase tracking-[0.3em]">{t.footer.links.email}</span>
            </a>

            <a 
              href={t.footer.links.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-6 py-4 rounded-full border border-white/10 dark:border-black/10 hover:border-pink-500/50 transition-all duration-500"
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <Instagram size={20} className="text-pink-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <span className="text-[0.65em] font-bold uppercase tracking-[0.3em]">{t.footer.links.instagram}</span>
            </a>

            <a 
              href={`https://wa.me/${t.footer.links.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-6 py-4 rounded-full border border-white/10 dark:border-black/10 hover:border-green-500/50 transition-all duration-500"
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <MessageCircle size={20} className="text-green-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <span className="text-[0.65em] font-bold uppercase tracking-[0.3em]">{t.footer.links.whatsapp}</span>
            </a>
          </div>

          {/* Copyright & Info */}
          <div className="flex flex-col items-end gap-2 text-right">
            <p className="font-mono text-[0.55em] font-bold tracking-[0.3em] text-white/40 dark:text-black/40">
              {t.footer.links.phone}
            </p>
            <p className="font-mono text-[0.55em] font-bold tracking-[0.3em] text-white/20 dark:text-black/20">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
