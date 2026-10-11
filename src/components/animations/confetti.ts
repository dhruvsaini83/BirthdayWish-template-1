import confetti from 'canvas-confetti';

export const triggerBirthdayConfetti = () => {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 9999,
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  // Multi-stage celebratory burst
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    colors: ['#f472b6', '#c084fc', '#fbbf24', '#ffffff'],
  });
  fire(0.2, {
    spread: 60,
    colors: ['#f43f5e', '#ec4899', '#a855f7'],
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
    colors: ['#fde047', '#f472b6', '#38bdf8'],
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

export const triggerStarBurst = (x = 0.5, y = 0.5) => {
  confetti({
    particleCount: 40,
    spread: 70,
    origin: { x, y },
    shapes: ['star', 'circle'],
    colors: ['#fbbf24', '#f472b6', '#ffffff'],
    zIndex: 9999,
  });
};
