"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import gsap from "gsap";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Header({ hideLogo = false }: { hideLogo?: boolean }) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [".header-logo", ".header-right"],
        { y: -15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out", delay: 0.2 }
      );
    }, headerRef);

    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY.current;

      const tolerance = 5;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (Math.abs(difference) > tolerance) {
        setIsVisible(difference < 0);
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", controlHeader, { passive: true });
    return () => {
      window.removeEventListener("scroll", controlHeader);
      ctx.revert();
    };
  }, []);

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-[100] flex justify-center pointer-events-none transition-[transform,opacity] duration-500 ease-in-out mix-blend-difference ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="w-full pl-[2em] lg:pl-[7em] pr-[1.5em] lg:pr-[6.4em] py-8 flex justify-between items-center pointer-events-auto bg-transparent">
        {/* Logo */}
        {!hideLogo ? (
          <Link href="/" className="header-logo group flex items-center opacity-0">
            <span className="font-display font-black tracking-tighter text-2xl text-white">
              CS.
            </span>
          </Link>
        ) : (
          <div className="w-10" /> // Spacer to maintain layout
        )}

        {/* Right Group: Nav Links + Menu Icon + Theme Toggle */}
        <div className="header-right flex items-center gap-3 md:gap-10 opacity-0">
          
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
            className="flex md:hidden items-center justify-center text-white transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95"
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