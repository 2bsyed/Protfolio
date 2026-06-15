"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo, skills } from "@/data/portfolio";

export default function About() {
  return (
    <section className="min-h-[90vh] relative py-40 px-6 flex items-center border-t border-zinc-900/50">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Editorial Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="lg:col-span-6 lg:col-start-2 flex flex-col justify-center"
        >
          <h2 className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.25em] mb-12">
            01. Initialization
          </h2>
          <div className="font-sans text-base text-zinc-300 space-y-8 max-w-xl leading-relaxed">
            <p className="text-xl md:text-2xl text-white font-medium tracking-tight">
              {personalInfo.bio[0]}
            </p>
            <p className="opacity-80">
              {personalInfo.bio[1]}
            </p>
            <p className="opacity-80">
              {personalInfo.bio[2]}
            </p>
          </div>
        </motion.div>

        {/* Right Side: Skill Tags Grid (Noir Styled) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
          className="lg:col-span-4 lg:col-start-9 flex flex-col justify-center"
        >
          <div className="space-y-8">
            <h3 className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.25em]">
              Tech Matrix
            </h3>
            <div className="space-y-6">
              {skills.map((cat, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                    {cat.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-[10px] text-white/70 border border-white/5 bg-zinc-950 px-3 py-1.5 rounded-full hover:border-white/30 hover:text-white transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
