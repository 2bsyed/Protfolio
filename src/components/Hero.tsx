"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // UseScroll to track scroll within the hero container
  const { scrollY } = useScroll();

  // Create transforms for parallax effect
  const imgY = useTransform(scrollY, [0, 800], [0, 180]);
  const imgScale = useTransform(scrollY, [0, 800], [1.05, 1.0]);
  const quoteOpacity = useTransform(scrollY, [0, 400], [0.8, 0]);
  const quoteY = useTransform(scrollY, [0, 400], [0, -50]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[120vh] flex flex-col items-center justify-center px-6 pt-32 pb-40 overflow-hidden"
      id="overview"
    >
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center relative z-10">
        
        {/* Quote Section */}
        <motion.div
          style={{ opacity: quoteOpacity, y: quoteY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
          className="text-center mb-32 max-w-2xl mt-[10vh]"
        >
          <p className="font-display text-2xl md:text-3xl text-zinc-100 italic leading-relaxed">
            "{personalInfo.quote.text}"
          </p>
          <p className="font-mono text-[10px] text-zinc-500 mt-6 uppercase tracking-[0.2em]">
            — {personalInfo.quote.author}
          </p>
        </motion.div>

        {/* Central Portrait Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.2, 0.8, 0.2, 1], delay: 0.5 }}
          className="w-full max-w-4xl relative mt-[5vh]"
        >
          <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-lg glass-panel relative group">
            {/* Dark gradient overlay on bottom of image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
            
            {/* Parallax Image */}
            <motion.img
              style={{ y: imgY, scale: imgScale }}
              alt="Syed Abrar Fiaz Portrait"
              className="w-full h-full object-cover grayscale opacity-60 mix-blend-luminosity transform transition-all duration-[2s]"
              src="/portrait.jpg"
            />
          </div>

          {/* Overlapping Text Label */}
          <div className="absolute -bottom-12 md:-bottom-20 left-0 md:left-12 z-20 w-full px-6 md:px-0">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1], delay: 0.8 }}
              className="font-display text-4xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] drop-shadow-3xl mb-4"
            >
              Syed Abrar
              <br />
              Fiaz.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 1.2, delay: 1.1 }}
              className="font-mono text-[10px] md:text-[11px] text-white/85 uppercase tracking-[0.2em] max-w-md"
            >
              {personalInfo.title} <span className="mx-2 opacity-50">|</span> {personalInfo.subtitle}
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Atmospheric bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-black to-transparent z-0 pointer-events-none"></div>
    </section>
  );
}
