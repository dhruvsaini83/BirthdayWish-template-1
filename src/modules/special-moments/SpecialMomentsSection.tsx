'use strict';
'use client';

import React, { useState } from 'react';
import { BIRTHDAY_CONFIG } from '@/config/birthday.config';
import { Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export const SpecialMomentsSection: React.FC = () => {
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});
  const reasonsData = BIRTHDAY_CONFIG.reasonsSpecial;

  const toggleReveal = (id: string) => {
    setRevealedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleRevealAll = () => {
    const all: Record<string, boolean> = {};
    reasonsData.reasons.forEach((r) => (all[r.id] = true));
    setRevealedIds(all);
  };

  return (
    <section id="special-moments" className="py-20 px-4 max-w-5xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-pink-500/20 text-pink-300 text-xs font-medium mb-3">
          <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
          <span>Little Treasures</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {reasonsData.heading}
        </h2>
        <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-light">
          {reasonsData.subtitle}
        </p>

        <button
          onClick={handleRevealAll}
          className="mt-5 text-xs text-pink-300 hover:text-pink-100 font-medium underline underline-offset-4 cursor-pointer transition-colors"
        >
          Tap to reveal all reasons at once ✨
        </button>
      </div>

      {/* Grid of Reasons Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasonsData.reasons.map((item) => {
          const isRevealed = !!revealedIds[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleReveal(item.id)}
              className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 relative border ${
                isRevealed
                  ? 'bg-gradient-to-br from-pink-950/40 via-purple-950/30 to-slate-900/60 border-pink-400/40 shadow-xl shadow-pink-500/10'
                  : 'glass-card border-white/10 hover:border-pink-500/30 hover:-translate-y-1'
              }`}
            >
              {/* Number Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black text-pink-400/40 font-mono tracking-tighter">
                  {item.number}
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-pink-200">
                  {isRevealed ? 'Revealed' : 'Tap to reveal'}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                {item.title}
              </h3>

              {/* Secret description */}
              {isRevealed ? (
                <p className="text-slate-300 text-sm leading-relaxed font-light animate-in fade-in duration-300">
                  {item.description}
                </p>
              ) : (
                <div className="h-16 flex items-center justify-center text-xs text-pink-300/60 italic border border-dashed border-pink-400/20 rounded-xl bg-pink-500/5">
                  Click to open this appreciation note ✨
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
