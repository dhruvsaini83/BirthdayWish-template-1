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
      id: 'Tum Ho Toh',
      title: 'Tum Ho Toh',
      artist: 'Joji',
      url: '/music/pipi-song.mp3',
      coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoLEUiqKSMZvbsUxRt3g2BnbePHAZ5yLpRmJ1edQmYo5cUOVuoe-3KEws&s',
    }, {
      id: 'HAPPY BIRTHDAY TO YOU',
      title: 'HAPPY BIRTHDAY TO YOU',
      artist: 'Dreamscape Ensemble',
      url: '/music/HAPPY BIRTHDAY TO YOU.mp3',
      coverUrl: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?auto=format&fit=crop&w=400&q=80',
    }, {
      id: 'Count on Me',
      title: 'Count on Me',
      artist: 'Bruno Mars',
      url: '/music/Count on Me.mp3',
      coverUrl: 'https://www.poppiano.org/pic/1uyf3l2d4XYwiEqAb7t7fX.jpg',
    },
  ],
};
