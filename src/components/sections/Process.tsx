"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Process() {
  const { t } = useLanguage();
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-24 md:py-32 px-frame bg-[#F2F2F0] dark:bg-[#050505] text-black dark:text-white border-t border-black/5 dark:border-white/5">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
        
        {/* Left Side: Title & Subtitle */}
        <div className="lg:w-1/3">
          <h2 className="text-[12vw] lg:text-[5vw] font-black uppercase leading-[0.85] tracking-tighter mb-8">
            {t.process.title}
          </h2>
          <p className="text-xl lg:text-2xl font-light opacity-60 leading-relaxed max-w-md">
            {t.process.subtitle}
          </p>
        </div>

        {/* Right Side: Accordion Blocks */}
        <div className="lg:w-2/3 flex flex-col border-t border-black/10 dark:border-white/10">
          {t.process.items.map((item: any) => (
            <div 
              key={item.id} 
              className="border-b border-black/10 dark:border-white/10 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full py-8 lg:py-12 flex items-center justify-between group transition-colors hover:bg-black/[0.02] dark:hover:bg-white/[0.02] text-left"
              >
                <div className="flex items-baseline gap-6 lg:gap-12">
                  <span className="font-mono text-[0.6em] font-bold opacity-30 group-hover:opacity-100 transition-opacity">
                    {item.id}
                  </span>
                  <h3 className="text-2xl lg:text-5xl font-bold uppercase tracking-tighter transition-transform duration-500 group-hover:translate-x-2">
                    {item.title}
                  </h3>
                </div>
                
                <div className={`p-3 rounded-full border border-black/10 dark:border-white/10 transition-transform duration-500 ${openItem === item.id ? 'rotate-45' : ''}`}>
                  <Plus size={24} strokeWidth={1.5} />
                </div>
              </button>

              <AnimatePresence>
                {openItem === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                  >
                    <div className="pb-12 lg:pb-16 pl-[calc(0.6em+1.5rem)] lg:pl-[calc(0.6em+3rem)] pr-12">
                      <p className="text-lg lg:text-2xl font-light leading-relaxed opacity-70 max-w-2xl">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
