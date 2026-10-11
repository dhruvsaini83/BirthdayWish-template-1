'use strict';
'use client';

import React from 'react';
import { BIRTHDAY_CONFIG } from '@/config/birthday.config';
import { triggerBirthdayConfetti } from '@/components/animations/confetti';
import { Heart, Sparkles, Share2, ArrowUp } from 'lucide-react';

export const FinalWishSection: React.FC = () => {
  const finalWish = BIRTHDAY_CONFIG.finalWish;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = () => {
    triggerBirthdayConfetti();
    if (navigator.share) {
      navigator.share({
        title: BIRTHDAY_CONFIG.meta.title,
        text: `Happy Birthday ${BIRTHDAY_CONFIG.recipient.name}! ✨`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard! Share the love ✨');
    }
  };

  return (
    <footer id="final-wish" className="py-24 px-4 max-w-4xl mx-auto text-center relative z-10">
      {/* Decorative Final Crest */}
      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-tr from-pink-500 via-rose-400 to-amber-300 p-0.5 shadow-2xl flex items-center justify-center animate-glow">
        <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
          <Heart className="w-7 h-7 text-pink-400 fill-pink-400" />
        </div>
      </div>

      <h2 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-300 to-purple-200 tracking-tight max-w-2xl mx-auto leading-tight">
        {finalWish.heading}
      </h2>

      {/* Quote */}
      <blockquote className="mt-8 text-lg sm:text-2xl font-serif italic text-pink-200/90 max-w-2xl mx-auto font-light leading-relaxed">
        {finalWish.closingQuote}
      </blockquote>

      {/* Author Sign-off */}
      <p className="mt-6 text-sm sm:text-base font-medium text-slate-300 tracking-wide">
        {finalWish.authorSignOff}
      </p>

      {/* Interactive Actions */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={handleShare}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white text-sm font-semibold shadow-lg shadow-pink-500/25 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
        >
          <Share2 className="w-4 h-4" />
          <span>Share This Memory</span>
        </button>

        <button
          onClick={scrollToTop}
          className="px-6 py-3 rounded-full glass-panel hover:bg-white/10 text-pink-200 text-sm font-medium border border-pink-400/20 hover:border-pink-400/40 flex items-center gap-2 transition-all"
        >
          <ArrowUp className="w-4 h-4 text-pink-400" />
          <span>Back to Top</span>
        </button>
      </div>

      {/* Footer copyright note */}
      <div className="mt-16 pt-8 border-t border-white/10 text-xs text-slate-400 font-light">
        <p>Crafted with love & heartfelt memories • Designed for seamless Vercel deployment</p>
      </div>
    </footer>
  );
};
