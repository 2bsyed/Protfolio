"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { projectsList } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

const GithubIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-40 relative overflow-hidden" id="projects">
      {/* Title */}
      <div className="px-6 max-w-7xl w-full mx-auto mb-16">
        <h2 className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.25em]">
          03. Artifacts
        </h2>
      </div>

      {/* Horizontal Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-8 px-6 md:px-[calc((100vw-1200px)/2+24px)] overflow-x-auto no-scrollbar pb-16 w-full snap-x snap-mandatory scroll-smooth"
      >
        {projectsList.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="min-w-[85vw] sm:min-w-[450px] md:min-w-[500px] max-w-[550px] flex-shrink-0 snap-center glass-panel rounded-xl overflow-hidden relative group cursor-pointer border border-white/5 bg-zinc-950/40"
          >
            {/* Project Cover Image */}
            <div className="aspect-[16/10] w-full overflow-hidden relative border-b border-white/5">
              <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/10 transition-colors duration-500" />
              
              {/* Grayscale cinematic image with hover zoom */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-60 mix-blend-luminosity transform scale-100 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700 ease-out"
              />

              {/* Github link overlay */}
              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 hover:border-white/40 text-white transition-all flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <GithubIcon size={16} />
                </a>
              </div>
            </div>

            {/* Project details */}
            <div className="p-8 flex flex-col justify-between min-h-[300px]">
              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[9px] text-zinc-400 border border-white/5 bg-zinc-950 px-2.5 py-1 rounded-full uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-2xl font-semibold text-white mb-4 tracking-tight">
                  {project.title}
                </h3>
                
                <p className="font-sans text-sm text-zinc-400 leading-relaxed line-clamp-3 group-hover:text-zinc-300 transition-colors duration-300">
                  {project.description}
                </p>
              </div>

              {/* Action link */}
              <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group/btn font-mono text-[10px] text-white uppercase tracking-wider font-medium"
                >
                  <span>View Repository</span>
                  <ArrowUpRight size={14} className="text-zinc-500 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
