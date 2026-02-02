"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  if (!mounted) return <div className="w-8 h-5" />;

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center justify-center w-12 h-8 overflow-hidden group cursor-pointer"
      aria-label="Switch Language"
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* EN Text */}
        <span 
          className={`absolute font-mono text-sm font-bold tracking-wider text-white transition-all duration-500 ease-out ${
            language === 'en' 
              ? "translate-y-0 opacity-100" 
              : "-translate-y-8 opacity-0"
          }`}
        >
          EN
        </span>

        {/* ES Text */}
        <span 
          className={`absolute font-mono text-sm font-bold tracking-wider text-white transition-all duration-500 ease-out ${
            language === 'es' 
              ? "translate-y-0 opacity-100" 
              : "translate-y-8 opacity-0"
          }`}
        >
          ES
        </span>
        
        {/* Hover underline effect */}
        <div className="absolute bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-2/3" />
      </div>
    </button>
  );
}
