'use strict';
'use client';

import React from 'react';
import { BIRTHDAY_CONFIG } from '@/config/birthday.config';
import { useMusic } from '@/components/music-player/MusicContext';
import { triggerBirthdayConfetti } from '@/components/animations/confetti';
import { Heart, Sparkles, Music, ArrowDown } from 'lucide-react';

interface HeroProps {
  onReveal: () => void;
  isRevealed: boolean;
}

export const HeroSection: React.FC<HeroProps> = ({ onReveal, isRevealed }) => {
  const { play } = useMusic();
  const config = BIRTHDAY_CONFIG;

  const handleOpenSurprise = () => {
    triggerBirthdayConfetti();
    play(); // Start background birthday serenade
    onReveal();
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-12 pb-20 overflow-hidden">
      {/* Decorative Aura / Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] rounded-full bg-gradient-to-tr from-pink-500/20 via-purple-500/15 to-amber-300/10 blur-[100px] pointer-events-none" />

      {/* Floating Badges */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-pink-400/30 text-pink-200 text-xs sm:text-sm font-medium tracking-wide shadow-lg mb-6 animate-float">
        <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-spin" style={{ animationDuration: '6s' }} />
        <span>{config.hero.eyebrow}</span>
        <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
      </div>

      {/* Hero Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-pink-400 to-purple-300 max-w-4xl leading-tight sm:leading-snug drop-shadow-md">
        {config.hero.title}
      </h1>

      {/* Recipient Ribbon */}
      <div className="mt-3 flex items-center justify-center gap-2 text-xs sm:text-sm text-pink-300/90 font-medium">
        <span className="w-8 h-[1px] bg-pink-400/40" />
        <span>{config.celebrationDate} • For our beloved {config.recipient.relationship}</span>
        <span className="w-8 h-[1px] bg-pink-400/40" />
      </div>

      {/* Subtitle / Emotional Message */}
      <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed px-4">
        {config.hero.subtitle}
      </p>

      {/* Call to Action Button */}
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 z-10">
        <button
          onClick={handleOpenSurprise}
          className="group relative px-8 py-4 rounded-full font-semibold text-white text-base sm:text-lg bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 shadow-xl shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3"
        >
          <span>{config.hero.revealButtonText}</span>
          <span className="transform group-hover:translate-x-1 transition-transform">✨</span>
          <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping opacity-20 pointer-events-none" />
        </button>

        <button
          onClick={() => {
            play();
            const elem = document.getElementById('birthday-letter');
            elem?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-6 py-3.5 rounded-full glass-panel hover:bg-white/10 text-pink-200 text-sm font-medium border border-pink-400/20 hover:border-pink-400/40 transition-all flex items-center gap-2"
        >
          <Music className="w-4 h-4 text-pink-400" />
          <span>Begin With Music</span>
        </button>
      </div>

      {/* Down Scroll Indicator (visible once revealed or if scrolled) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-pink-300/60 pointer-events-none animate-bounce">
        <span>Scroll to explore the memories</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
};
