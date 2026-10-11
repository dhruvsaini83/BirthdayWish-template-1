'use strict';
'use client';

import React from 'react';
import { BIRTHDAY_CONFIG } from '@/config/birthday.config';
import { Sparkles, Music, Coffee, Heart, Gift, Star } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const timeline = BIRTHDAY_CONFIG.timeline;

  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'sparkles':
        return <Sparkles className="w-4 h-4 text-yellow-300" />;
      case 'music':
        return <Music className="w-4 h-4 text-purple-300" />;
      case 'coffee':
        return <Coffee className="w-4 h-4 text-amber-300" />;
      case 'heart':
        return <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />;
      case 'gift':
        return <Gift className="w-4 h-4 text-emerald-300" />;
      default:
        return <Star className="w-4 h-4 text-pink-300" />;
    }
  };

  return (
    <section id="timeline" className="py-20 px-4 max-w-4xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-pink-500/20 text-pink-300 text-xs font-medium mb-3">
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
          <span>Cherished Milestones</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {timeline.heading}
        </h2>
        <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-light">
          {timeline.subtitle}
        </p>
      </div>

      {/* Timeline Vertical Track */}
      <div className="relative border-l-2 border-pink-500/20 ml-4 sm:ml-32 space-y-12">
        {timeline.milestones.map((item, idx) => (
          <div key={item.id} className="relative pl-8 sm:pl-10 group">
            {/* Timeline node badge with glowing ring */}
            <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-slate-900 border-2 border-pink-400 flex items-center justify-center shadow-lg group-hover:border-pink-300 group-hover:scale-110 transition-all duration-300">
              {getIcon(item.icon)}
            </div>

            {/* Left Year Label for Desktop */}
            <div className="hidden sm:block absolute -left-32 top-1 text-right w-24 pr-4">
              <span className="text-xs font-mono font-semibold tracking-wider text-pink-300/80 bg-pink-500/10 px-2 py-0.5 rounded-md border border-pink-500/20">
                {item.year}
              </span>
            </div>

            {/* Content Card */}
            <div className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6 text-left border border-white/10 group-hover:border-pink-500/30 transition-all">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="sm:hidden text-xs font-mono font-semibold text-pink-300 bg-pink-500/10 px-2 py-0.5 rounded border border-pink-500/20">
                  {item.year}
                </span>
                {item.tag && (
                  <span className="text-[11px] font-medium text-pink-200/80 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                    {item.tag}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-pink-200 transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
