"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Dock from "@/components/Dock";
import AISidebar from "@/components/AISidebar";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans flex flex-col justify-between selection:bg-white selection:text-black overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Act I: Hero */}
        <Hero />

        {/* Act II: About */}
        <About />

        {/* Act III: Experience */}
        <Experience />

        {/* Act IV: Projects */}
        <Projects />

        {/* Act V: Feedback */}
        <Feedback />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom Nav Dock */}
      <Dock onChatClick={() => setChatOpen(true)} />

      {/* Gemini AI Assistant sidebar overlay */}
      <AISidebar isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
}
