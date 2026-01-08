"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 w-full z-50 flex justify-center pointer-events-none">
      <div 
        className={`pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled 
            ? "w-[90%] max-w-[400px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20 rounded-full px-6 py-3" 
            : "w-[95%] max-w-[1200px] bg-transparent border-transparent px-0 py-4"
        } flex justify-between items-center`}
      >
        {/* Logo - Pure & Minimal */}
        <Link href="/" className="group relative overflow-hidden">
          <span className={`font-display font-bold tracking-tight transition-colors duration-500 ${scrolled ? "text-lg" : "text-xl text-white mix-blend-difference"}`}>
            CS<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Navigation - Hidden on scroll transformation */}
        <nav className={`hidden md:flex items-center gap-8 transition-opacity duration-300 ${scrolled ? "opacity-0 hidden" : "opacity-100"}`}>
          {["Work", "About", "Contact"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors tracking-wide"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Menu Toggle - Always visible/functional */}
        <button 
          className={`group flex items-center justify-center w-10 h-10 rounded-full transition-all ${
            scrolled ? "bg-white/10 hover:bg-white/20" : "bg-transparent hover:bg-white/10"
          }`}
        >
          <Menu size={20} className="text-white" />
        </button>
      </div>
    </header>
  );
}
