'use strict';
'use client';

import React from 'react';
import { useMusic } from './MusicContext';
import { BIRTHDAY_CONFIG } from '@/config/birthday.config';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Music2,
  Maximize2,
  Minimize2,
  Disc3,
} from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const {
    isPlaying,
    currentTrack,
    trackIndex,
    duration,
    currentTime,
    volume,
    isMuted,
    isPlayerExpanded,
    togglePlay,
    nextTrack,
    prevTrack,
    seek,
    setVolume,
    toggleMute,
    setIsPlayerExpanded,
  } = useMusic();

  const tracks = BIRTHDAY_CONFIG.music.tracks;

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <>
      {/* Floating Compact Floating Bar (Bottom-Right or Bottom-Center) */}
      <div
        className={`fixed z-50 transition-all duration-300 ${
          isPlayerExpanded
            ? 'inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4'
            : 'bottom-4 right-4 sm:bottom-6 sm:right-6'
        }`}
      >
        {!isPlayerExpanded ? (
          /* Compact Mini Player */
          <div className="glass-panel flex items-center gap-3 px-4 py-2.5 rounded-full shadow-2xl border border-pink-500/20 text-white hover:border-pink-500/40 transition-all">
            {/* Spinning Vinyl Album Art */}
            <div
              onClick={() => setIsPlayerExpanded(true)}
              className="relative w-10 h-10 rounded-full overflow-hidden cursor-pointer flex-shrink-0 group ring-2 ring-pink-400/30"
              title="Click to expand player"
            >
              {currentTrack.coverUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={currentTrack.coverUrl}
                  alt={currentTrack.title}
                  className={`w-full h-full object-cover ${isPlaying ? 'animate-spin' : ''}`}
                  style={{ animationDuration: '8s' }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                  <Disc3 className={`w-5 h-5 text-white ${isPlaying ? 'animate-spin' : ''}`} />
                </div>
              )}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <Maximize2 className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Track Info & Visualizer */}
            <div
              className="hidden sm:block cursor-pointer max-w-[150px] overflow-hidden"
              onClick={() => setIsPlayerExpanded(true)}
            >
              <p className="text-xs font-semibold text-pink-200 truncate">{currentTrack.title}</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[10px] text-gray-400 truncate">{currentTrack.artist}</span>
                {isPlaying && (
                  <span className="flex items-end gap-0.5 h-2.5">
                    <span className="w-0.5 h-full bg-pink-400 animate-pulse" />
                    <span className="w-0.5 h-1.5 bg-purple-400 animate-pulse delay-75" />
                    <span className="w-0.5 h-2 bg-pink-300 animate-pulse delay-150" />
                  </span>
                )}
              </div>
            </div>

            {/* Quick Controls */}
            <div className="flex items-center gap-1">
              <button
                onClick={prevTrack}
                aria-label="Previous track"
                className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause music' : 'Play music'}
                className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white flex items-center justify-center shadow-lg transition-transform active:scale-95"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
              </button>

              <button
                onClick={nextTrack}
                aria-label="Next track"
                className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
              >
                <SkipForward className="w-4 h-4" />
              </button>

              <button
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
                className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors ml-0.5"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setIsPlayerExpanded(true)}
                aria-label="Expand player"
                className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-pink-300 transition-colors hidden sm:block"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Full Screen / Modal Player Experience */
          <div className="glass-panel w-full max-w-md p-6 sm:p-8 rounded-3xl border border-pink-500/30 shadow-2xl relative text-white animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsPlayerExpanded(false)}
              aria-label="Close expanded player"
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all"
            >
              <Minimize2 className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 mb-6 text-pink-300 text-sm font-medium">
              <Music2 className="w-4 h-4" />
              <span>Birthday Serenade Player</span>
            </div>

            {/* Disc / Artwork Preview */}
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto my-4 rounded-full overflow-hidden shadow-2xl ring-4 ring-pink-500/30 flex items-center justify-center bg-gray-900 group">
              {currentTrack.coverUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={currentTrack.coverUrl}
                  alt={currentTrack.title}
                  className={`w-full h-full object-cover ${isPlaying ? 'animate-spin' : ''}`}
                  style={{ animationDuration: '10s' }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-tr from-pink-500/40 to-purple-600/40 flex items-center justify-center">
                  <Disc3 className="w-16 h-16 text-pink-300" />
                </div>
              )}
              {/* Vinyl center pin */}
              <div className="absolute w-8 h-8 rounded-full bg-black border-2 border-white/40 shadow-inner" />
            </div>

            {/* Song Meta */}
            <div className="text-center mt-6">
              <h3 className="text-lg sm:text-xl font-bold text-pink-100 truncate">{currentTrack.title}</h3>
              <p className="text-sm text-pink-300/80 mt-1">{currentTrack.artist}</p>
            </div>

            {/* Waveform / Visualizer Bar */}
            <div className="flex items-center justify-center gap-1 h-6 my-4">
              {[...Array(18)].map((_, i) => (
                <span
                  key={i}
                  className="w-1 rounded-full bg-gradient-to-t from-pink-500 to-purple-400 transition-all duration-150"
                  style={{
                    height: isPlaying ? `${Math.max(15, ((i * 7 + (currentTime * 10)) % 100))}%` : '20%',
                    opacity: isPlaying ? 0.9 : 0.3,
                  }}
                />
              ))}
            </div>

            {/* Progress Bar & Seek */}
            <div className="space-y-1 my-3">
              <input
                type="range"
                min="0"
                max={duration || 100}
                value={currentTime}
                onChange={(e) => seek(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-700/60 rounded-lg appearance-none cursor-pointer accent-pink-500"
              />
              <div className="flex justify-between text-xs text-gray-400 font-mono">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6 my-4">
              <button
                onClick={prevTrack}
                aria-label="Previous track"
                className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-all transform hover:scale-110 active:scale-95"
              >
                <SkipBack className="w-6 h-6" />
              </button>

              <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause' : 'Play'}
                className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white flex items-center justify-center shadow-lg shadow-pink-500/25 transition-all transform hover:scale-105 active:scale-95"
              >
                {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
              </button>

              <button
                onClick={nextTrack}
                aria-label="Next track"
                className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-all transform hover:scale-110 active:scale-95"
              >
                <SkipForward className="w-6 h-6" />
              </button>
            </div>

            {/* Volume & Playlist Selector */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <button onClick={toggleMute} aria-label={isMuted ? 'Unmute' : 'Mute'} className="text-gray-400 hover:text-white">
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-20 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-pink-400"
                />
              </div>

              {/* Playlist items indicator */}
              <div className="text-xs text-pink-300/80 font-medium">
                Track {trackIndex + 1} of {tracks.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
