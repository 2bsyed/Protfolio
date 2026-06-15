"use client";

import React from "react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="w-full py-24 border-t border-white/5 bg-zinc-950/20" id="connect">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 max-w-7xl mx-auto">
        {/* Name and Copy */}
        <div className="col-span-1 md:col-span-2">
          <div className="font-mono text-[11px] text-white mb-4 tracking-[0.2em] uppercase font-semibold">
            {personalInfo.name}
          </div>
          <p className="font-sans text-[11px] text-zinc-500 max-w-xs leading-relaxed uppercase">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.<br />
            Architect of Shadows.
          </p>
        </div>

        {/* Connect Links */}
        <div className="col-span-1 flex flex-col gap-3 font-sans text-xs text-zinc-500">
          <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 mb-2">Connect</span>
          <a
            className="hover:text-white transition-colors uppercase font-medium tracking-wide"
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="hover:text-white transition-colors uppercase font-medium tracking-wide"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-white transition-colors uppercase font-medium tracking-wide"
            href={`mailto:${personalInfo.email}`}
          >
            Email
          </a>
        </div>

        {/* System Details */}
        <div className="col-span-1 flex flex-col gap-3 font-sans text-xs text-zinc-500">
          <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 mb-2">System</span>
          <span className="hover:text-white transition-colors cursor-default uppercase font-medium tracking-wide">
            Region: Global
          </span>
          <span className="hover:text-white transition-colors cursor-default uppercase font-medium tracking-wide">
            OS: MacOS
          </span>
          <span className="hover:text-white transition-colors mt-4 opacity-50 font-mono text-[9px] tracking-widest uppercase">
            Changelog v3.5.0
          </span>
        </div>
      </div>
    </footer>
  );
}
