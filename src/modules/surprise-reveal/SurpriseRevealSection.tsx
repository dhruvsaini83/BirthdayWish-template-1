'use strict';
'use client';

import React, { useState } from 'react';
import { BIRTHDAY_CONFIG } from '@/config/birthday.config';
import { triggerBirthdayConfetti } from '@/components/animations/confetti';
import { Gift, Sparkles, Heart, Unlock, Check } from 'lucide-react';

export const SurpriseRevealSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const surprise = BIRTHDAY_CONFIG.surpriseReveal;

  const handleOpenGift = () => {
    if (!isOpen) {
      setIsOpen(true);
      triggerBirthdayConfetti();
    }
  };

  return (
    <section id="surprise-reveal" className="py-20 px-4 max-w-4xl mx-auto text-center relative z-10">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-pink-500/20 text-pink-300 text-xs font-medium mb-3">
          <Gift className="w-3.5 h-3.5 text-pink-400" />
          <span>Mystery Box</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {surprise.heading}
        </h2>
        <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-light">
          {surprise.subtitle}
        </p>
      </div>

      {/* Interactive Gift Box / Mystery Present */}
      <div className="max-w-md mx-auto">
        {!isOpen ? (
          <div
            onClick={handleOpenGift}
            className="cursor-pointer group glass-panel rounded-3xl p-10 sm:p-12 border-2 border-dashed border-pink-400/40 hover:border-pink-400 shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-pink-500/20 flex flex-col items-center justify-center"
          >
            {/* Glowing 3D-Style Gift Box Graphic */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-6 group-hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-2xl shadow-xl flex items-center justify-center border-2 border-white/20">
                {/* Gift Ribbon cross */}
                <div className="absolute inset-x-0 h-4 bg-amber-300 shadow-sm" />
                <div className="absolute inset-y-0 w-4 bg-amber-300 shadow-sm" />

                {/* Bow on top */}
                <div className="absolute -top-3 w-8 h-8 rounded-full bg-amber-400 border border-amber-200 shadow-md flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            <p className="text-sm font-semibold text-pink-200 group-hover:text-white transition-colors flex items-center gap-2">
              <Unlock className="w-4 h-4 text-pink-400" />
              <span>{surprise.giftBoxHint}</span>
            </p>
          </div>
        ) : (
          /* Unlocked Message Container */
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-pink-400/40 shadow-2xl bg-gradient-to-br from-pink-950/60 via-purple-950/40 to-slate-900/80 animate-in zoom-in duration-300 text-left">
            <div className="w-12 h-12 rounded-2xl bg-pink-500/20 border border-pink-400/30 flex items-center justify-center text-pink-300 mb-4 shadow-md">
              <Gift className="w-6 h-6 text-pink-300" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              {surprise.unlockedMessage.title}
            </h3>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light mb-6">
              {surprise.unlockedMessage.body}
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-pink-400/30 text-xs sm:text-sm text-pink-200 font-medium flex items-start gap-3">
              <Heart className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5 fill-pink-400" />
              <span>{surprise.unlockedMessage.bonusSecret}</span>
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs text-pink-400/80 hover:text-pink-200 underline transition-colors"
              >
                Wrap the gift back up
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
