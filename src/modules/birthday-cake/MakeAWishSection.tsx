'use strict';
'use client';

import React, { useState } from 'react';
import { BIRTHDAY_CONFIG } from '@/config/birthday.config';
import { triggerStarBurst } from '@/components/animations/confetti';
import { Sparkles, Star, Send, Check } from 'lucide-react';

interface WishStar {
  id: string;
  text: string;
}

export const MakeAWishSection: React.FC = () => {
  const wishConfig = BIRTHDAY_CONFIG.makeAWish;
  const [customWish, setCustomWish] = useState('');
  const [wishes, setWishes] = useState<WishStar[]>(
    wishConfig.prefilledWishes.map((w, i) => ({ id: `wish-${i}`, text: w }))
  );
  const [isSent, setIsSent] = useState(false);

  const handleAddWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customWish.trim()) return;

    const newStar: WishStar = {
      id: `wish-${Date.now()}`,
      text: `✨ ${customWish.trim()}`,
    };
    setWishes((prev) => [newStar, ...prev]);
    setCustomWish('');
    setIsSent(true);
    triggerStarBurst();

    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <section id="make-a-wish" className="py-20 px-4 max-w-4xl mx-auto text-center relative z-10">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-pink-500/20 text-pink-300 text-xs font-medium mb-3">
          <Star className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
          <span>Starry Constellation</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {wishConfig.heading}
        </h2>
        <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-light">
          {wishConfig.subtitle}
        </p>
      </div>

      {/* Wish submission input */}
      <form onSubmit={handleAddWish} className="max-w-xl mx-auto mb-10">
        <div className="relative flex items-center">
          <input
            type="text"
            value={customWish}
            onChange={(e) => setCustomWish(e.target.value)}
            placeholder="Type a special wish or blessing for this year..."
            className="w-full pl-5 pr-28 py-3.5 rounded-full bg-slate-900/70 border border-pink-500/30 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-500/20 shadow-lg"
          />
          <button
            type="submit"
            className="absolute right-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md active:scale-95"
          >
            {isSent ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
            <span>{isSent ? 'Sent!' : 'Cast Wish'}</span>
          </button>
        </div>
      </form>

      {/* Wish Stars Constellation Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {wishes.map((item) => (
          <div
            key={item.id}
            className="glass-card rounded-2xl p-4 text-left border border-white/10 hover:border-pink-400/40 transition-all flex items-center gap-3 animate-in fade-in"
          >
            <div className="w-8 h-8 rounded-full bg-pink-500/10 flex items-center justify-center flex-shrink-0 text-yellow-300">
              <Star className="w-4 h-4 fill-yellow-300/30" />
            </div>
            <p className="text-sm text-slate-200 font-light">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
