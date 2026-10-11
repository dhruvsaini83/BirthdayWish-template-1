export interface Track {
  id: string;
  title: string;
  artist: string;
  url: string; // audio source file or stream
  coverUrl?: string;
  duration?: number;
}

export interface MusicPlayerConfig {
  defaultTrackIndex: number;
  autoPlayOnReveal: boolean;
  tracks: Track[];
}

export const MUSIC_CONFIG: MusicPlayerConfig = {
  defaultTrackIndex: 0,
  autoPlayOnReveal: true,
  tracks: [
    {
      id: 'sparkle-chimes',
      title: 'Sparkle - Celestial Chimes & Music Box',
      artist: 'Nostalgic Studio Melodies',
      url: '/music/sparkle-chimes.wav',
      coverUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'warm-memories',
      title: 'Warm Memories & Soft Piano',
      artist: 'Acoustic Serenade',
      url: '/music/warm-memories.wav',
      coverUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'starlight-theme',
      title: 'Midnight Starlight Theme',
      artist: 'Dreamscape Ensemble',
      url: '/music/starlight-theme.wav',
      coverUrl: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?auto=format&fit=crop&w=400&q=80',
    },
  ],
};
