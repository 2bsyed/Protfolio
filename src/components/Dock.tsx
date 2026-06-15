"use client";

import React from "react";
import { Home, Terminal, Bot, FileText, Code } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

interface DockProps {
  onChatClick: () => void;
}

export default function Dock({ onChatClick }: DockProps) {
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 rounded-full px-6 py-3 bg-zinc-900/40 backdrop-blur-2xl z-50 flex items-center gap-6 md:gap-8 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
      {/* Home / Overview */}
      <a
        className="text-zinc-400 hover:text-white hover:scale-110 transition-all duration-200 flex flex-col items-center"
        href="#overview"
        title="Overview"
      >
        <Home size={20} strokeWidth={1.5} />
      </a>

      {/* Experience / Operational History */}
      <a
        className="text-zinc-400 hover:text-white hover:scale-110 transition-all duration-200 flex flex-col items-center"
        href="#experience"
        title="Experience"
      >
        <Terminal size={20} strokeWidth={1.5} />
      </a>

      {/* Gemini AI Bot */}
      <button
        onClick={onChatClick}
        className="text-zinc-400 hover:text-white hover:scale-110 transition-all duration-200 flex flex-col items-center focus:outline-none cursor-pointer"
        title="AI Assistant"
      >
        <Bot size={20} strokeWidth={1.5} />
      </button>

      {/* Resume */}
      <a
        className="text-zinc-400 hover:text-white hover:scale-110 transition-all duration-200 flex flex-col items-center"
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        title="Resume"
      >
        <FileText size={20} strokeWidth={1.5} />
      </a>

      {/* GitHub */}
      <a
        className="text-zinc-400 hover:text-white hover:scale-110 transition-all duration-200 flex flex-col items-center"
        href={personalInfo.github}
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <Code size={20} strokeWidth={1.5} />
      </a>
    </nav>
  );
}
