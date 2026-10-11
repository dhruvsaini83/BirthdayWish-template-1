'use strict';
'use client';

import React, { useState } from 'react';
import { BIRTHDAY_CONFIG } from '@/config/birthday.config';
import { triggerBirthdayConfetti, triggerStarBurst } from '@/components/animations/confetti';
import { Sparkles, Flame, Check, RotateCcw } from 'lucide-react';

export const BirthdayCakeSection: React.FC = () => {
  const cakeConfig = BIRTHDAY_CONFIG.birthdayCake;
  const candleCount = cakeConfig.candleCount || 3;

  // Track flame state for each candle
  const [candlesLit, setCandlesLit] = useState<boolean[]>(
    Array(candleCount).fill(true)
  );

  const allCandlesBlown = candlesLit.every((lit) => !lit);

  const handleBlowCandle = (index: number) => {
    if (!candlesLit[index]) return;
    const next = [...candlesLit];
    next[index] = false;
    setCandlesLit(next);
    triggerStarBurst(0.5, 0.4);

    if (next.every((lit) => !lit)) {
      triggerBirthdayConfetti();
    }
  };

  const handleBlowAll = () => {
    setCandlesLit(Array(candleCount).fill(false));
    triggerBirthdayConfetti();
  };

  const handleRelight = () => {
    setCandlesLit(Array(candleCount).fill(true));
  };

  return (
    <section id="birthday-cake" className="py-20 px-4 max-w-4xl mx-auto text-center relative z-10">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-pink-500/20 text-pink-300 text-xs font-medium mb-3">
          <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          <span>Interactive Cake Ritual</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {cakeConfig.heading}
        </h2>
        <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-light">
          {cakeConfig.subtitle}
        </p>
      </div>

      {/* Interactive Birthday Cake Illustration / Stage */}
      <div className="relative glass-panel rounded-3xl p-8 sm:p-14 border border-pink-400/20 shadow-2xl max-w-lg mx-auto flex flex-col items-center justify-center">
        {/* Cake Candles Stage */}
        <div className="flex items-end justify-center gap-6 sm:gap-8 mb-4 h-24">
          {candlesLit.map((isLit, idx) => (
            <div
              key={idx}
              onClick={() => handleBlowCandle(idx)}
              className="flex flex-col items-center cursor-pointer group"
              title={isLit ? 'Click or tap flame to blow out' : 'Candle blown out'}
            >
              {/* Flame or smoke */}
              {isLit ? (
                <div className="relative mb-1 flex items-center justify-center animate-flicker">
                  <div className="w-4 h-7 rounded-full bg-gradient-to-t from-orange-500 via-amber-400 to-yellow-200 shadow-[0_0_15px_rgba(251,191,36,0.9)] animate-pulse" />
                  <div className="absolute w-2 h-4 rounded-full bg-white opacity-80" />
                </div>
              ) : (
                <div className="mb-2 h-7 flex flex-col items-center justify-end">
                  <div className="w-1.5 h-3 rounded-full bg-slate-500/60 blur-[1px] animate-fade-out" />
                  <span className="text-[10px] text-pink-300/60 font-mono">💨</span>
                </div>
              )}

              {/* Candle Stick */}
              <div
                className={`w-3 sm:w-3.5 h-14 rounded-t-sm transition-all ${
                  idx % 2 === 0
                    ? 'bg-gradient-to-b from-pink-300 to-rose-400'
                    : 'bg-gradient-to-b from-purple-300 to-indigo-400'
                } border border-white/30 shadow-md group-hover:scale-105`}
              />
            </div>
          ))}
        </div>

        {/* Multi-layered Cake Graphic */}
        <div className="w-full flex flex-col items-center">
          {/* Top Layer */}
          <div className="w-44 sm:w-52 h-14 rounded-t-2xl bg-gradient-to-r from-rose-200 via-pink-100 to-rose-200 border-b-4 border-pink-300 relative shadow-inner flex items-center justify-around px-4">
            <span className="text-xs">🍓</span>
            <span className="text-xs">✨</span>
            <span className="text-xs">🍓</span>
            <span className="text-xs">✨</span>
            <span className="text-xs">🍓</span>
          </div>

          {/* Middle Frosting Ribbon */}
          <div className="w-56 sm:w-64 h-12 bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400 border-b-4 border-pink-500/40 relative shadow-md flex items-center justify-center">
            <span className="text-xs font-semibold text-white tracking-widest uppercase">
              {BIRTHDAY_CONFIG.recipient.name}
            </span>
          </div>

          {/* Bottom Cake Base */}
          <div className="w-68 sm:w-76 h-16 rounded-b-3xl bg-gradient-to-r from-rose-300 via-pink-200 to-rose-300 shadow-xl border-t-2 border-pink-200/50 flex items-center justify-center relative">
            <div className="absolute inset-x-0 bottom-0 h-3 bg-pink-400/20 rounded-b-3xl" />
            <span className="text-xs text-pink-900/60 font-medium">
              {cakeConfig.cakeFlavor}
            </span>
          </div>

          {/* Cake Stand / Plate */}
          <div className="w-76 sm:w-88 h-4 rounded-full bg-gradient-to-r from-slate-700 via-slate-400 to-slate-700 shadow-2xl mt-1 border border-white/20" />
        </div>

        {/* Status Message */}
        <div className="mt-8">
          {allCandlesBlown ? (
            <div className="space-y-3 animate-in zoom-in duration-300">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 text-pink-200 text-sm sm:text-base font-medium">
                {cakeConfig.blownMessage}
              </div>
              <button
                onClick={handleRelight}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel hover:bg-white/10 text-xs text-slate-300 hover:text-white transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5 text-pink-400" />
                <span>Light the candles again</span>
              </button>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleBlowAll}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white text-sm font-semibold shadow-lg shadow-pink-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <Flame className="w-4 h-4 text-amber-300" />
                <span>Blow out all candles at once</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
