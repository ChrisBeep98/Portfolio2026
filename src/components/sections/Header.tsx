"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Siempre visible en el tope
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down -> Ocultar
        setIsVisible(false);
      } else {
        // Scrolling up -> Mostrar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-[100] flex justify-center pointer-events-none transition-transform duration-500 ease-in-out mix-blend-difference ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ willChange: "transform", transform: isVisible ? "translateY(0)" : "translateY(-100%)" }}
    >
      <div className="w-full pl-[2em] lg:pl-[7em] pr-[1.5em] lg:pr-[6.4em] py-8 flex justify-between items-center pointer-events-auto bg-transparent">
        {/* Logo */}
        <Link href="/" className="group flex items-center">
          <span className="font-display font-black tracking-tighter text-2xl text-white">
            CS.
          </span>
        </Link>

        {/* Right Group: Nav Links + Menu Icon + Theme Toggle */}
        <div className="flex items-center gap-10">
          
          {/* Technical Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {["Work", "About", "Contact"].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="relative group py-1"
              >
                <span className="font-mono uppercase tracking-[0.3em] text-white font-bold text-[11px]">
                  {item}
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Interaction Node (Menu Button) */}
          <button 
            className="flex items-center justify-center text-white transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95"
            aria-label="Menu"
          >
            <Menu size={24} strokeWidth={3} />
          </button>

          {/* Theme Mode Switch */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}