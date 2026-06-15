"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, User, Award, ExternalLink, Activity } from "lucide-react";
import { projectsList, experiences } from "@/data/portfolio";

interface AISidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AISidebar({ isOpen, onClose }: AISidebarProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Welcome. I am a digital projection of Syed's engineering intelligence. I can detail my backend expertise, ML projects, or operational history. Ask me anything about my capabilities.",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMessage }],
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch response");

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "System connection interrupted. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Custom skills widget rendering competency rings
  const SkillsWidget = () => {
    const featuredSkills = [
      { name: "Python", val: 95, color: "stroke-white" },
      { name: "FastAPI", val: 90, color: "stroke-white/80" },
      { name: "ML / RAG", val: 85, color: "stroke-white/60" },
      { name: "Next.js", val: 80, color: "stroke-white/40" },
    ];

    return (
      <div className="my-4 p-4 rounded-lg bg-white/5 border border-white/10 space-y-4">
        <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
          <Activity size={10} className="animate-pulse" /> Core Competency Matrix
        </p>
        <div className="grid grid-cols-2 gap-4">
          {featuredSkills.map((sk, idx) => {
            const radius = 24;
            const stroke = 3;
            const normalizedRadius = radius - stroke * 2;
            const circumference = normalizedRadius * 2 * Math.PI;
            const strokeDashoffset = circumference - (sk.val / 100) * circumference;

            return (
              <div key={idx} className="flex items-center gap-3 bg-black/40 p-2.5 rounded border border-white/5">
                <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
                  <circle
                    stroke="rgba(255,255,255,0.05)"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                  />
                  <motion.circle
                    className={sk.color}
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={circumference + " " + circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                  />
                </svg>
                <div>
                  <h4 className="font-sans text-[11px] font-medium text-white leading-none mb-1">{sk.name}</h4>
                  <span className="font-mono text-[9px] text-zinc-400">{sk.val}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Curated project links widget
  const ProjectsWidget = () => {
    return (
      <div className="my-4 space-y-3">
        {projectsList.slice(0, 3).map((proj, idx) => (
          <div key={idx} className="p-3.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-sans text-xs font-semibold text-white">{proj.title}</h4>
              <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <ExternalLink size={12} />
              </a>
            </div>
            <p className="font-sans text-[10px] text-zinc-400 leading-relaxed line-clamp-2 mb-2">{proj.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {proj.technologies.slice(0, 3).map((tech, tIdx) => (
                <span key={tIdx} className="font-mono text-[8px] text-white/50 border border-white/5 px-2 py-0.5 rounded bg-black/40">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Mini timeline widget
  const ExperienceWidget = () => {
    return (
      <div className="my-4 p-4 rounded-lg bg-white/5 border border-white/10 space-y-4">
        <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
          <Award size={10} /> Experience Outline
        </p>
        <div className="space-y-4 relative pl-3 border-l border-white/10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative space-y-1">
              <span className="absolute -left-[16.5px] top-1.5 w-1.5 h-1.5 rounded-full bg-white border border-black" />
              <div className="flex justify-between items-baseline">
                <h4 className="font-sans text-[11px] font-semibold text-white">{exp.company}</h4>
                <span className="font-mono text-[8px] text-zinc-500">{exp.period}</span>
              </div>
              <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider leading-none">{exp.role}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderContent = (content: string) => {
    const parts = content.split(/(\[SKILLS_WIDGET\]|\[PROJECTS_WIDGET\]|\[EXPERIENCE_WIDGET\])/g);

    return parts.map((part, index) => {
      if (part === "[SKILLS_WIDGET]") return <SkillsWidget key={index} />;
      if (part === "[PROJECTS_WIDGET]") return <ProjectsWidget key={index} />;
      if (part === "[EXPERIENCE_WIDGET]") return <ExperienceWidget key={index} />;
      
      // Formatting list items and links in markdown format
      return (
        <div key={index} className="whitespace-pre-line leading-relaxed font-sans text-xs">
          {part.split("\n").map((line, lIdx) => {
            if (line.startsWith("* ")) {
              return (
                <div key={lIdx} className="flex gap-2 pl-2 my-1.5">
                  <span className="text-white/60">•</span>
                  <span>{line.substring(2)}</span>
                </div>
              );
            }
            return <p key={lIdx} className="my-1">{line}</p>;
          })}
        </div>
      );
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Sidebar Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[450px] lg:w-[480px] z-50 glass-sidebar flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <Bot size={16} />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-semibold tracking-tight text-white leading-none">
                    Gemini Co-Pilot
                  </h3>
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Online
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full border border-white/5 hover:border-white/20 text-zinc-400 hover:text-white transition-colors focus:outline-none"
              >
                <X size={16} />
              </button>
            </div>

            {/* Message Feed */}
            <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
              {messages.map((msg, index) => {
                const isUser = msg.role === "user";
                return (
                  <div
                    key={index}
                    className={`flex gap-3 max-w-[85%] ${
                      isUser ? "ml-auto flex-row-reverse" : "mr-auto"
                    }`}
                  >
                    {/* Icon Bubble */}
                    <div
                      className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center border ${
                        isUser
                          ? "bg-white text-black border-white"
                          : "bg-white/5 text-white border-white/10"
                      }`}
                    >
                      {isUser ? <User size={12} /> : <Bot size={12} />}
                    </div>

                    {/* Chat Bubble */}
                    <div
                      className={`p-4 rounded-xl text-zinc-200 ${
                        isUser
                          ? "bg-white/10 rounded-tr-none border border-white/15"
                          : "bg-white/5 rounded-tl-none border border-white/5"
                      }`}
                    >
                      {renderContent(msg.content)}
                    </div>
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex gap-3 max-w-[80%] mr-auto items-center">
                  <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white flex-shrink-0">
                    <Bot size={12} />
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 rounded-tl-none flex gap-1 items-center py-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-6 border-t border-white/10 bg-black/20">
              <div className="flex gap-3 items-center relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about my projects, experience, or skills..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full py-3 pl-5 pr-14 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all font-sans"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="absolute right-1.5 p-2 rounded-full bg-white text-black hover:bg-zinc-200 disabled:bg-zinc-800 disabled:text-zinc-500 transition-colors flex items-center justify-center focus:outline-none cursor-pointer"
                >
                  <Send size={12} />
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
