"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolio";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-outline/10 bg-black/40 backdrop-blur-xl"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Name Title */}
        <a 
          href="#overview"
          className="font-display text-lg md:text-2xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity"
        >
          {personalInfo.name.toUpperCase()}
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-8 items-center font-mono text-[11px] tracking-widest">
          <a
            className="text-white hover:text-white transition-colors border-b border-white pb-1"
            href="#overview"
          >
            OVERVIEW
          </a>
          <a
            className="text-on-surface-variant hover:text-white transition-colors pb-1"
            href="#experience"
          >
            EXPERIENCE
          </a>
          <a
            className="text-on-surface-variant hover:text-white transition-colors pb-1"
            href="#projects"
          >
            PROJECTS
          </a>
          <a
            className="text-on-surface-variant hover:text-white transition-colors pb-1"
            href="#connect"
          >
            CONNECT
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-widest border border-outline/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors"
          >
            RESUME
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer (Mobile navigation) */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-outline/10 flex flex-col px-6 py-8 gap-6 font-mono text-xs tracking-wider z-40">
          <a
            className="text-white hover:text-white"
            href="#overview"
            onClick={() => setMobileMenuOpen(false)}
          >
            OVERVIEW
          </a>
          <a
            className="text-on-surface-variant hover:text-white"
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
          >
            EXPERIENCE
          </a>
          <a
            className="text-on-surface-variant hover:text-white"
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
          >
            PROJECTS
          </a>
          <a
            className="text-on-surface-variant hover:text-white"
            href="#connect"
            onClick={() => setMobileMenuOpen(false)}
          >
            CONNECT
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="border border-outline/30 px-6 py-2 rounded-full text-center hover:bg-white hover:text-black transition-colors"
          >
            RESUME
          </a>
        </div>
      )}
    </header>
  );
}
