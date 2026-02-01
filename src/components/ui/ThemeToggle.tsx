"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme");
    const shouldBeDark = storedTheme === "dark" || (!storedTheme && true);
    setIsDark(shouldBeDark);
    if (shouldBeDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
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

  if (!mounted) return <div className="w-10 h-10" />;

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 transition-all duration-300 ease-out text-white cursor-pointer hover:scale-110 active:scale-95 group"
      aria-label="Toggle Theme"
    >
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <div className={`absolute transition-all duration-500 transform ${isDark ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100"}`}>
          <Sun size={20} strokeWidth={2.5} className="group-hover:text-primary group-active:text-primary transition-colors" />
        </div>
        <div className={`absolute transition-all duration-500 transform ${isDark ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
          <Moon size={20} strokeWidth={2.5} className="group-hover:text-primary group-active:text-primary transition-colors" />
        </div>
      </div>
    </button>
  );
}