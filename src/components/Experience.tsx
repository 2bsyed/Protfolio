"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section className="py-40 px-6 relative" id="experience">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.25em] mb-24 text-center">
          02. Operational History
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-y-32">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent z-0 pointer-events-none" />

          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="relative md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6 w-full"
              >
                {/* Timeline Node Dot */}
                <div className="hidden md:block absolute top-[28px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white timeline-node z-10" />

                {/* Left Side Column */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
                  className={`col-span-12 md:col-span-5 ${
                    isEven
                      ? "md:col-start-1 md:text-right"
                      : "md:col-start-8 md:text-left"
                  }`}
                >
                  <p className="font-mono text-[10px] text-zinc-400 mb-2 uppercase tracking-widest">
                    {exp.period}
                  </p>
                  <h3 className="font-display text-2xl font-semibold text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="font-sans text-sm text-zinc-300 mb-6 font-medium tracking-tight">
                    {exp.company} <span className="text-zinc-500 font-mono text-xs mx-1">·</span> {exp.location}
                  </p>
                  
                  <ul className={`font-sans text-xs text-zinc-400 space-y-3 opacity-90 leading-relaxed ${
                    isEven ? "md:items-end md:text-right" : "md:items-start md:text-left"
                  }`}>
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="relative pl-4 md:pl-0">
                        {/* Bullet point indicator for mobile */}
                        <span className="md:hidden absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-white/40" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
