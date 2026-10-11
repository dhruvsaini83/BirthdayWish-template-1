'use strict';
'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Track } from '@/config/music.config';
import { BIRTHDAY_CONFIG } from '@/config/birthday.config';

interface MusicContextType {
  isPlaying: boolean;
  currentTrack: Track;
  trackIndex: number;
  duration: number;
  currentTime: number;
  volume: number;
  isMuted: boolean;
  isPlayerExpanded: boolean;
  togglePlay: () => void;
  play: () => void;
  pause: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  seek: (time: number) => void;
  setVolume: (val: number) => void;
  toggleMute: () => void;
  setIsPlayerExpanded: (val: boolean) => void;
}

const MusicContext = createContext<MusicContextType | null>(null);

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const tracks = BIRTHDAY_CONFIG.music.tracks;
  const [trackIndex, setTrackIndex] = useState(BIRTHDAY_CONFIG.music.defaultTrackIndex || 0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(24);
  const [volume, setVolumeState] = useState(0.75);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlayerExpanded, setIsPlayerExpanded] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentTrack = tracks[trackIndex] || tracks[0];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const audio = new Audio();
    audio.preload = 'auto';
    audio.src = currentTrack.url;
    audio.volume = 0.75;
    audioRef.current = audio;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration) && audio.duration !== Infinity) {
        setDuration(audio.duration);
      }
    };
    const onEnded = () => {
      setTrackIndex((prev) => (prev + 1) % tracks.length);
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);

    // 1. Attempt immediate autoplay on page load
    const attemptAutoplay = () => {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // 2. If modern browser autoplay policy blocks unprompted audio,
          // attach a one-time gesture listener on the entire window (any click, scroll, touch, or key)
          const unlockAudio = () => {
            audio
              .play()
              .then(() => {
                setIsPlaying(true);
                cleanupListeners();
              })
              .catch(() => {});
          };

          const cleanupListeners = () => {
            window.removeEventListener('click', unlockAudio);
            window.removeEventListener('touchstart', unlockAudio);
            window.removeEventListener('keydown', unlockAudio);
            window.removeEventListener('scroll', unlockAudio);
          };

          window.addEventListener('click', unlockAudio, { once: true });
          window.addEventListener('touchstart', unlockAudio, { once: true });
          window.addEventListener('keydown', unlockAudio, { once: true });
          window.addEventListener('scroll', unlockAudio, { once: true });
        });
    };

    // Slight timeout to let DOM mount smoothly
    const timer = setTimeout(attemptAutoplay, 150);

    return () => {
      clearTimeout(timer);
      audio.pause();
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
    };
  }, [tracks.length, currentTrack.url]);

  // Handle track switches and volume adjustments
  useEffect(() => {
    if (!audioRef.current || !currentTrack) return;
    const audio = audioRef.current;

    if (!audio.src.endsWith(currentTrack.url)) {
      audio.src = currentTrack.url;
      audio.load();
    }

    audio.volume = isMuted ? 0 : volume;

    if (isPlaying) {
      audio.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [trackIndex, currentTrack, isMuted, volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      if (!audio.src || audio.src === window.location.href) {
        audio.src = currentTrack.url;
        audio.load();
      }
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const play = () => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    if (!audio.src || audio.src === window.location.href) {
      audio.src = currentTrack.url;
      audio.load();
    }

    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  };

  const pause = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const nextTrack = () => {
    setTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  const prevTrack = () => {
    setTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  const seek = (time: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const setVolume = (val: number) => {
    setVolumeState(val);
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : val;
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      if (audioRef.current) {
        audioRef.current.volume = next ? 0 : volume;
      }
      return next;
    });
  };

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        currentTrack,
        trackIndex,
        duration,
        currentTime,
        volume,
        isMuted,
        isPlayerExpanded,
        togglePlay,
        play,
        pause,
        nextTrack,
        prevTrack,
        seek,
        setVolume,
        toggleMute,
        setIsPlayerExpanded,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};
