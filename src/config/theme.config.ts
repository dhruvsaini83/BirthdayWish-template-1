export interface ThemeConfig {
  id: 'dreamy-anime' | 'romantic-blush' | 'midnight-starlight' | 'warm-sunshine';
  name: string;
  palette: {
    primary: string; // e.g. soft rose / lavender
    secondary: string; // e.g. peach / sky blue
    accent: string; // gold / star highlight
    background: string; // main backdrop
    cardBg: string; // soft card backdrop
    textPrimary: string;
    textSecondary: string;
    glow: string;
  };
}

export const THEMES: Record<string, ThemeConfig> = {
  'dreamy-anime': {
    id: 'dreamy-anime',
    name: 'Dreamy Anime Sunset',
    palette: {
      primary: '#f472b6', // pastel pink
      secondary: '#c084fc', // soft lavender
      accent: '#fbbf24', // soft warm gold
      background: '#0d0f1d', // deep twilight midnight
      cardBg: 'rgba(23, 27, 49, 0.75)',
      textPrimary: '#fdf4ff',
      textSecondary: '#cbd5e1',
      glow: 'rgba(244, 114, 182, 0.25)',
    },
  },
  'romantic-blush': {
    id: 'romantic-blush',
    name: 'Romantic Blush & Rose',
    palette: {
      primary: '#fb7185',
      secondary: '#f43f5e',
      accent: '#fde047',
      background: '#160b14',
      cardBg: 'rgba(39, 18, 33, 0.75)',
      textPrimary: '#fff1f2',
      textSecondary: '#e2e8f0',
      glow: 'rgba(251, 113, 133, 0.3)',
    },
  },
  'midnight-starlight': {
    id: 'midnight-starlight',
    name: 'Midnight Starlight Galaxy',
    palette: {
      primary: '#818cf8',
      secondary: '#38bdf8',
      accent: '#facc15',
      background: '#070a14',
      cardBg: 'rgba(15, 23, 42, 0.75)',
      textPrimary: '#f8fafc',
      textSecondary: '#94a3b8',
      glow: 'rgba(56, 189, 248, 0.25)',
    },
  },
};
