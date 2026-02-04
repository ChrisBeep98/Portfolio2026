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
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[60%_40%] gap-[4em] items-start">
          <div className="space-y-[2em]">
            <span className="font-mono text-[0.6em] uppercase tracking-[0.4em] text-white/30 dark:text-black/30 font-bold block">
              {t.footer.title}
            </span>
            <h2 className="text-display-lg font-black uppercase leading-[0.85] tracking-tighter max-w-[12em]">
              {t.footer.subtitle.split(' ').map((word, i) => (
                <span key={i} className="inline-block mr-[0.2em]">{word}</span>
              ))}
            </h2>
          </div>

          <div className="flex flex-col lg:items-end justify-start gap-[4em]">
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
          
          {/* Social Links */}
          <div className="flex flex-wrap gap-x-[3em] gap-y-[1.5em]">
            <a 
              href={`mailto:${t.footer.email}`}
              className="group flex items-center gap-3 text-[0.65em] font-bold uppercase tracking-[0.3em] hover:text-orange-500 transition-colors"
            >
              <Mail size={16} className="opacity-50 group-hover:opacity-100" />
              {t.footer.links.email}
            </a>
            <a 
              href={t.footer.links.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-[0.65em] font-bold uppercase tracking-[0.3em] hover:text-pink-500 transition-colors"
            >
              <Instagram size={16} className="opacity-50 group-hover:opacity-100" />
              {t.footer.links.instagram}
            </a>
            <a 
              href={`https://wa.me/${t.footer.links.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-[0.65em] font-bold uppercase tracking-[0.3em] hover:text-green-500 transition-colors"
            >
              <MessageCircle size={16} className="opacity-50 group-hover:opacity-100" />
              {t.footer.links.whatsapp}
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
