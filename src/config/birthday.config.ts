import { THEMES } from './theme.config';
import { MUSIC_CONFIG, MusicPlayerConfig } from './music.config';

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  date?: string;
  tag?: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  tag?: string;
  icon?: 'heart' | 'star' | 'coffee' | 'sparkles' | 'gift' | 'music';
}

export interface ReasonItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon?: string;
}

export interface SectionVisibility {
  hero: boolean;
  birthdayLetter: boolean;
  memoryGallery: boolean;
  timeline: boolean;
  reasonsSpecial: boolean;
  birthdayCake: boolean;
  makeAWish: boolean;
  surpriseReveal: boolean;
  finalWish: boolean;
}

export interface BirthdayConfig {
  meta: {
    title: string;
    description: string;
    ogImage?: string;
  };
  recipient: {
    name: string;
    nickname?: string;
    age?: number;
    relationship: string; // e.g. "Best Friend", "Partner", "Sister", "Soulmate"
  };
  sender: {
    name: string;
    relationshipToRecipient: string;
  };
  celebrationDate: string; // e.g. "October 11th"
  themeId: 'dreamy-anime' | 'romantic-blush' | 'midnight-starlight';

  // Sections configuration
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    revealButtonText: string;
  };

  birthdayLetter: {
    heading: string;
    salutation: string;
    paragraphs: string[];
    closing: string;
    postscript?: string;
  };

  memoryGallery: {
    heading: string;
    subtitle: string;
    items: GalleryItem[];
  };

  timeline: {
    heading: string;
    subtitle: string;
    milestones: TimelineItem[];
  };

  reasonsSpecial: {
    heading: string;
    subtitle: string;
    reasons: ReasonItem[];
  };

  birthdayCake: {
    heading: string;
    subtitle: string;
    cakeFlavor: string;
    candleCount: number;
    blownMessage: string;
  };

  makeAWish: {
    heading: string;
    subtitle: string;
    promptText: string;
    prefilledWishes: string[];
  };

  surpriseReveal: {
    heading: string;
    subtitle: string;
    giftBoxHint: string;
    unlockedMessage: {
      title: string;
      body: string;
      bonusSecret: string;
    };
  };

  finalWish: {
    heading: string;
    closingQuote: string;
    authorSignOff: string;
  };

  sections: SectionVisibility;
  music: MusicPlayerConfig;
}

export const BIRTHDAY_CONFIG: BirthdayConfig = {
  meta: {
    title: "Happy Birthday! ✨ A Special Surprise Just For You",
    description: "An interactive, nostalgic, and heartwarming birthday surprise filled with memories, wishes, and love.",
  },
  recipient: {
    name: "[RECIPIENT_NAME]",
    nickname: "Starlight",
    age: 24, // Optional: change or set to undefined
    relationship: "[RELATIONSHIP — Best Friend / Partner / Sister]",
  },
  sender: {
    name: "[SENDER_NAME]",
    relationshipToRecipient: "Always in your corner",
  },
  celebrationDate: "October 11",
  themeId: "dreamy-anime",

  sections: {
    hero: true,
    birthdayLetter: true,
    memoryGallery: true,
    timeline: true,
    reasonsSpecial: true,
    birthdayCake: true,
    makeAWish: true,
    surpriseReveal: true,
    finalWish: true,
  },

  hero: {
    eyebrow: "A Little Surprise Just For You",
    title: "Happy Birthday, [RECIPIENT_NAME]!",
    subtitle: "Today is all about celebrating the incredible light, joy, and warmth you bring into this world.",
    revealButtonText: "Open Your Surprise 🎁",
  },

  birthdayLetter: {
    heading: "A Letter From The Heart",
    salutation: "Dearest [RECIPIENT_NAME],",
    paragraphs: [
      "As another year unfolds its petals, I found myself thinking about all the quiet, beautiful ways you make life so much brighter. In a world that often rushes by too fast, your laughter, your kindness, and your spirit feel like coming home after a long journey under the stars.",
      "Thank you for being someone who listens with patience, dreams without fear, and loves with a pure, gentle heart. Every conversation with you leaves the world feeling a little softer and full of wonder.",
      "May this new chapter bring you the courage to chase whatever sets your soul on fire, the peace that eases every heavy thought, and endless days painted in warm golden sunshine.",
    ],
    closing: "With all my fondness and warmest love,",
    postscript: "P.S. Make sure you blow out the candles below and make your deepest wish! ✨",
  },

  memoryGallery: {
    heading: "Moments Frozen In Time",
    subtitle: "A digital scrapbook of small adventures, sunny afternoons, and unforgettable smiles.",
    items: [
      {
        id: "photo-1",
        url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
        caption: "Golden hour glow and spontaneous cafe adventures",
        date: "Spring Memories",
        tag: "Little Joys",
      },
      {
        id: "photo-2",
        url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
        caption: "That genuine laugh that brightens up any room instantly",
        date: "Summer Smiles",
        tag: "Pure Happiness",
      },
      {
        id: "photo-3",
        url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
        caption: "Sunset walks that felt like scenes straight out of a Studio Ghibli movie",
        date: "Golden Horizon",
        tag: "Adventures",
      },
      {
        id: "photo-4",
        url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
        caption: "Late night talks listening to favorite melodies together",
        date: "Midnight Vibe",
        tag: "Soundtracks",
      },
      {
        id: "photo-5",
        url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
        caption: "Unstoppable energy and dreams that reach past the horizon",
        date: "Dreaming Big",
        tag: "Milestone",
      },
      {
        id: "photo-6",
        url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
        caption: "Celebrating another milestone with sweetest memories",
        date: "Forever Friends",
        tag: "Celebration",
      },
    ],
  },

  timeline: {
    heading: "Our Journey & Milestones",
    subtitle: "Every step of the road has been sweeter with you by my side.",
    milestones: [
      {
        id: "m-1",
        year: "Chapter 1",
        title: "The First Chapter Begins",
        description: "The day we first met. We had no idea back then how many stories, late-night laughs, and memories we would share together.",
        tag: "The Beginning",
        icon: "sparkles",
      },
      {
        id: "m-2",
        year: "Chapter 2",
        title: "The Unforgettable Road Trip",
        description: "Getting lost on purpose, singing off-key to retro songs with the car windows rolled down under the twilight sky.",
        tag: "Adventure",
        icon: "music",
      },
      {
        id: "m-3",
        year: "Chapter 3",
        title: "Late Night Coffee & Dreams",
        description: "Sitting together during times that tested us, reminding each other that everything was going to be alright.",
        tag: "Comfort",
        icon: "coffee",
      },
      {
        id: "m-4",
        year: "Chapter 4",
        title: "Another Milestone Reached",
        description: "Watching you grow into the strongest, most compassionate version of yourself. So endlessly proud of you.",
        tag: "Pride",
        icon: "heart",
      },
      {
        id: "m-5",
        year: "Today",
        title: "Celebrating YOU!",
        description: "Stepping into this brand-new year with open arms, ready for even grander dreams and radiant days.",
        tag: "Happy Birthday",
        icon: "gift",
      },
    ],
  },

  reasonsSpecial: {
    heading: "Reasons Why You're One in a Million",
    subtitle: "Just a few of the countless qualities that make you unforgettable.",
    reasons: [
      {
        id: "r-1",
        number: "01",
        title: "Your Radiance & Warmth",
        description: "You have an innate superpower to walk into a room and instantly make people feel safe, valued, and genuinely happy.",
      },
      {
        id: "r-2",
        number: "02",
        title: "Unmatched Kindness",
        description: "Even when life gets hectic, your compassion never wavers. You treat everyone around you with gentle empathy.",
      },
      {
        id: "r-3",
        number: "03",
        title: "That Infectious Laughter",
        description: "Your laugh is practically therapeutic. One giggly moment with you can turn around an entire stressful week.",
      },
      {
        id: "r-4",
        number: "04",
        title: "Fierce Resilience",
        description: "No storm has ever managed to dim your fire. You meet challenges with quiet poise and blossom under pressure.",
      },
      {
        id: "r-5",
        number: "05",
        title: "An Authentic Soul",
        description: "You are unapologetically yourself—creative, passionate, quirky, and honest. Never let anyone dim that spark.",
      },
      {
        id: "r-6",
        number: "06",
        title: "The Best Companion Ever",
        description: "Whether it is exploring new cities or sitting in comfortable silence, being with you is always pure peace.",
      },
    ],
  },

  birthdayCake: {
    heading: "Make a Wish & Blow the Candles!",
    subtitle: "Click or tap on the flames to blow them out, or click the blow-out button below.",
    cakeFlavor: "Strawberry Dream & Vanilla Bean",
    candleCount: 3,
    blownMessage: "✨ All candles are blown out! May your deepest, most cherished dream come true! ✨",
  },

  makeAWish: {
    heading: "Whisper Your Birthday Wish",
    subtitle: "Send a glowing wish star into the cosmic night sky.",
    promptText: "What do your stars hold for this coming year?",
    prefilledWishes: [
      "🌟 Abundant health, joy, and peace of mind",
      "✈️ Exciting travels to dreamy faraway destinations",
      "🎨 Courage to launch creative projects and thrive",
      "💖 Boundless love, warm friendships, and laughter",
    ],
  },

  surpriseReveal: {
    heading: "A Secret Surprise Gift Box",
    subtitle: "Tap the ribbon to untie the gift and uncover what's waiting inside...",
    giftBoxHint: "Click the glowing gift box to open",
    unlockedMessage: {
      title: "🎉 You Unlocked the Birthday Surprise!",
      body: "Beyond this screen, your real gift, boundless celebration, and favorite treats are waiting for you! But more than anything, know that you are deeply loved and treasured every single day of the year.",
      bonusSecret: "🎁 Bonus Voucher: Unlimited free hugs, late-night food deliveries, and road trips anytime you call!",
    },
  },

  finalWish: {
    heading: "Here's to Your Most Magical Year Yet ✨",
    closingQuote: "“May your year be filled with starry skies, quiet joys, brave beginnings, and all the love your heart can hold.”",
    authorSignOff: "Lovingly created with all my heart by [SENDER_NAME]",
  },

  music: MUSIC_CONFIG,
};
