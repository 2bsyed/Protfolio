"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Mail, CheckCircle2, MessageSquare } from "lucide-react";

interface Review {
  email: string;
  rating: number;
  comment: string;
}

export default function Feedback() {
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Initial mock review data
  const [reviews, setReviews] = useState<Review[]>([
    {
      email: "recruiter@hightech.co",
      rating: 5,
      comment: "Absolutely outstanding architecture. The AI mentor chatbot is brilliant!",
    },
    {
      email: "johndoe@developer.net",
      rating: 5,
      comment: "The Autoencoder network anomaly detection has incredibly low latency. Very clean code.",
    },
    {
      email: "sarah_k@designcorp.io",
      rating: 4,
      comment: "Amazing Noir theme aesthetics. Premium feels all around.",
    },
    {
      email: "engineer_lead@faang.com",
      rating: 5,
      comment: "Solid Python/FastAPI integration. Production grade work.",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !rating || !comment) return;

    // Simulate review submission
    const newReview: Review = {
      email,
      rating,
      comment,
    };

    setSubmitted(true);
    
    // Add new review to marquee (local state update for live feedback)
    setTimeout(() => {
      setReviews((prev) => [newReview, ...prev]);
      setEmail("");
      setRating(0);
      setComment("");
      setSubmitted(false);
    }, 3000);
  };

  // Helper to render glowing stars
  const renderStars = (count: number, interactive = false) => {
    return (
      <div className="flex gap-1.5">
        {[1, 2, 3, 4, 5].map((star) => {
          const isActive = star <= (interactive ? hoverRating || rating : count);
          return (
            <Star
              key={star}
              size={interactive ? 24 : 14}
              className={`transition-all duration-200 ${
                isActive
                  ? "fill-white text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                  : "text-zinc-700 fill-transparent"
              } ${interactive ? "cursor-pointer hover:scale-110 active:scale-95" : ""}`}
              onMouseEnter={() => interactive && setHoverRating(star)}
              onMouseLeave={() => interactive && setHoverRating(0)}
              onClick={() => interactive && setRating(star)}
            />
          );
        })}
      </div>
    );
  };

  // Double the reviews to create a seamless looping effect in marquee
  const marqueeReviews = [...reviews, ...reviews];

  return (
    <section className="py-32 relative border-t border-zinc-900/50" id="feedback">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.25em] mb-4">
            04. User Feedback
          </h2>
          <p className="font-display text-2xl font-bold text-white tracking-tight">
            Log System Performance Reviews
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-xl mx-auto glass-panel p-8 rounded-xl border border-white/5 relative bg-zinc-950/20 mb-20 min-h-[350px] flex flex-col justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Email Input */}
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                    <Mail size={12} /> Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="user@organization.com"
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-all font-sans"
                  />
                </div>

                {/* Rating Input */}
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block">
                    Telemetry Rating
                  </label>
                  <div className="py-2">{renderStars(rating, true)}</div>
                </div>

                {/* Feedback Input */}
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                    <MessageSquare size={12} /> System Review
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Provide performance feedback or project inquiries..."
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-all font-sans resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 rounded bg-white text-black font-mono text-[11px] font-semibold uppercase tracking-widest hover:bg-zinc-200 active:scale-[0.99] transition-all cursor-pointer"
                >
                  Submit Review
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="flex flex-col items-center justify-center text-center space-y-4 py-8"
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", damping: 15, delay: 0.2 }}
                  className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                >
                  <CheckCircle2 size={48} strokeWidth={1} />
                </motion.div>
                <h3 className="font-display text-xl font-semibold text-white tracking-tight">
                  Transmission Successful
                </h3>
                <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest max-w-[280px]">
                  Feedback has been logged into the marquee dashboard registry.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Infinitely Scrolling Marquee */}
        <div className="w-full overflow-hidden py-4 border-y border-white/5 bg-zinc-950/20 relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          
          <div className="animate-marquee gap-6">
            {marqueeReviews.map((rev, idx) => (
              <div
                key={idx}
                className="w-[280px] md:w-[320px] flex-shrink-0 glass-panel p-5 rounded-lg border border-white/5 bg-zinc-900/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono text-[9px] text-zinc-400">
                      {rev.email.replace(/(.{3})(.*)(@.*)/, "$1***$3")}
                    </span>
                    {renderStars(rev.rating)}
                  </div>
                  <p className="font-sans text-[11px] text-zinc-300 leading-relaxed italic line-clamp-2">
                    "{rev.comment}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
