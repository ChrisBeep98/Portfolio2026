"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check local storage or system preference
    const storedTheme = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Default to dark if no storage found, or respect storage
    const shouldBeDark = storedTheme === "dark" || (!storedTheme && true); // Defaulting to Dark for this portfolio aesthetic

    setIsDark(shouldBeDark);
    
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <button
      onClick={toggleTheme}
      className="fixed z-[100] top-8 right-8 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ease-out shadow-xl bg-white/80 dark:bg-white/10 border border-black/10 dark:border-white/20 backdrop-blur-md hover:scale-110 active:scale-95 cursor-pointer"
      aria-label="Toggle Theme"
    >
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Sun Icon (Show in Light Mode - hidden in Dark) */}
        <div className={`absolute transition-all duration-500 transform ${isDark ? "translate-y-10 rotate-90 opacity-0" : "translate-y-0 rotate-0 opacity-100"}`}>
          <Sun size={20} className="text-black" strokeWidth={2} />
        </div>

        {/* Moon Icon (Show in Dark Mode - hidden in Light) */}
        <div className={`absolute transition-all duration-500 transform ${isDark ? "translate-y-0 rotate-0 opacity-100" : "-translate-y-10 -rotate-90 opacity-0"}`}>
          <Moon size={20} className="text-white" strokeWidth={2} />
        </div>
      </div>
    </button>
  );
}