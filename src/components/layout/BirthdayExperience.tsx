'use strict';
'use client';

import React, { useState } from 'react';
import { BIRTHDAY_CONFIG } from '@/config/birthday.config';
import { DreamParticles } from '@/components/animations/DreamParticles';
import { MusicPlayer } from '@/components/music-player/MusicPlayer';
import { HeroSection } from '@/modules/hero/HeroSection';
import { BirthdayLetterSection } from '@/modules/birthday-letter/BirthdayLetterSection';
import { MemoryGallerySection } from '@/modules/memory-gallery/MemoryGallerySection';
import { TimelineSection } from '@/modules/timeline/TimelineSection';
import { SpecialMomentsSection } from '@/modules/special-moments/SpecialMomentsSection';
import { BirthdayCakeSection } from '@/modules/birthday-cake/BirthdayCakeSection';
import { MakeAWishSection } from '@/modules/birthday-cake/MakeAWishSection';
import { SurpriseRevealSection } from '@/modules/surprise-reveal/SurpriseRevealSection';
import { FinalWishSection } from '@/modules/final-wish/FinalWishSection';

export const BirthdayExperience: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const sections = BIRTHDAY_CONFIG.sections;

  const handleReveal = () => {
    setIsRevealed(true);
    // Smooth scroll down to letter or next section
    setTimeout(() => {
      const target = document.getElementById('birthday-letter') || document.getElementById('memory-gallery');
      target?.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  return (
    <div className="relative min-h-screen text-slate-100 bg-[#0d0f1d] selection:bg-pink-500 selection:text-white">
      {/* Background Starry Particles & Dream Ambient Glow */}
      <DreamParticles />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {sections.hero && (
          <HeroSection onReveal={handleReveal} isRevealed={isRevealed} />
        )}

        {sections.birthdayLetter && <BirthdayLetterSection />}

        {sections.memoryGallery && <MemoryGallerySection />}

        {sections.timeline && <TimelineSection />}

        {sections.reasonsSpecial && <SpecialMomentsSection />}

        {sections.birthdayCake && <BirthdayCakeSection />}

        {sections.makeAWish && <MakeAWishSection />}

        {sections.surpriseReveal && <SurpriseRevealSection />}

        {sections.finalWish && <FinalWishSection />}
      </main>

      {/* Persistent HTML5 Music Serenade Player */}
      <MusicPlayer />
    </div>
  );
};
