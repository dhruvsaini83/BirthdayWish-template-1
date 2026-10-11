'use strict';
'use client';

import React, { useState } from 'react';
import { BIRTHDAY_CONFIG } from '@/config/birthday.config';
import { Mail, Sparkles, Heart, Feather } from 'lucide-react';

export const BirthdayLetterSection: React.FC = () => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const letter = BIRTHDAY_CONFIG.birthdayLetter;

  return (
    <section id="birthday-letter" className="py-20 px-4 max-w-4xl mx-auto relative z-10">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-pink-500/20 text-pink-300 text-xs font-medium mb-3">
          <Mail className="w-3.5 h-3.5 text-pink-400" />
          <span>Personal Note</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {letter.heading}
        </h2>
      </div>

      {/* Parchment / Nostalgic Letter Card */}
      <div className="relative glass-panel rounded-3xl p-6 sm:p-12 border border-pink-400/20 shadow-2xl bg-gradient-to-b from-[#1c1833]/80 to-[#121424]/90 backdrop-blur-xl overflow-hidden">
        {/* Soft top-right stamp/wax seal emblem */}
        <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-pink-400/30 bg-pink-500/10 flex items-center justify-center text-pink-300 shadow-inner pointer-events-none">
          <Feather className="w-5 h-5 text-pink-400/70" />
        </div>

        {/* Salutation */}
        <p className="text-lg sm:text-xl font-serif text-pink-200 tracking-wide mb-6">
          {letter.salutation}
        </p>

        {/* Paragraphs with elegant typography */}
        <div className="space-y-4 text-slate-200 text-base sm:text-lg leading-relaxed font-light">
          {letter.paragraphs.map((p, idx) => (
            <p key={idx} className="tracking-wide">
              {p}
            </p>
          ))}
        </div>

        {/* Closing & Sign-off */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-pink-300 font-serif italic">{letter.closing}</p>
            <p className="text-base font-medium text-white mt-1 flex items-center gap-1.5">
              <span>{BIRTHDAY_CONFIG.sender.name}</span>
              <Heart className="w-4 h-4 text-pink-400 fill-pink-400 inline" />
            </p>
          </div>

          {letter.postscript && (
            <div className="text-xs sm:text-sm text-pink-200/80 bg-pink-900/20 border border-pink-500/20 rounded-2xl px-4 py-2.5 max-w-sm flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-yellow-300 flex-shrink-0 mt-0.5" />
              <span>{letter.postscript}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
