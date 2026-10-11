'use strict';
'use client';

import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  type: 'star' | 'dust' | 'heart';
}

export const DreamParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate gentle starry dream particles
    const items: Particle[] = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.7 + 0.2,
      type: i % 7 === 0 ? 'heart' : i % 3 === 0 ? 'star' : 'dust',
    }));
    setParticles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Dynamic twilight gradients */}
      <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-pink-500/10 blur-[130px]" />
      <div className="absolute top-[40%] -right-[15%] w-[50vw] h-[50vw] rounded-full bg-purple-600/15 blur-[140px]" />
      <div className="absolute -bottom-[20%] left-[20%] w-[55vw] h-[55vw] rounded-full bg-blue-600/10 blur-[150px]" />

      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute text-pink-200/80 transition-opacity"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size * 5}px`,
            opacity: p.opacity,
            animation: `starlightShimmer ${p.duration}s infinite ease-in-out ${p.delay}s`,
          }}
        >
          {p.type === 'heart' ? '♥' : p.type === 'star' ? '✦' : '•'}
        </span>
      ))}
    </div>
  );
};
