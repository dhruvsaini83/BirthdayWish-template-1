'use strict';
'use client';

import React, { useState } from 'react';
import { BIRTHDAY_CONFIG, GalleryItem } from '@/config/birthday.config';
import { Camera, Calendar, Tag, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export const MemoryGallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const gallery = BIRTHDAY_CONFIG.memoryGallery;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedPhoto) return;
    const currentIndex = gallery.items.findIndex((item) => item.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % gallery.items.length;
    setSelectedPhoto(gallery.items[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedPhoto) return;
    const currentIndex = gallery.items.findIndex((item) => item.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + gallery.items.length) % gallery.items.length;
    setSelectedPhoto(gallery.items[prevIndex]);
  };

  return (
    <section id="memory-gallery" className="py-20 px-4 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-pink-500/20 text-pink-300 text-xs font-medium mb-3">
          <Camera className="w-3.5 h-3.5 text-pink-400" />
          <span>Memories In Motion</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {gallery.heading}
        </h2>
        <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-light">
          {gallery.subtitle}
        </p>
      </div>

      {/* Scrapbook Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {gallery.items.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedPhoto(item)}
            className="group relative cursor-pointer rounded-3xl overflow-hidden glass-card glass-card-hover p-3 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/10"
          >
            {/* Image Container with Film-Border effect */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900/60">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.url}
                alt={item.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                onError={(e) => {
                  // Fallback if custom user photo url fails to load
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Top tag badge */}
              {item.tag && (
                <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md border border-white/20 text-[11px] font-medium text-pink-200 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Tag className="w-3 h-3 text-pink-400" />
                  <span>{item.tag}</span>
                </div>
              )}

              {/* Hover zoom icon */}
              <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>

            {/* Caption & Metadata */}
            <div className="p-3 text-left">
              <p className="text-white text-sm font-medium line-clamp-2 group-hover:text-pink-300 transition-colors">
                {item.caption}
              </p>
              {item.date && (
                <div className="flex items-center gap-1.5 mt-2 text-[11px] text-pink-300/70">
                  <Calendar className="w-3 h-3" />
                  <span>{item.date}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full glass-panel rounded-3xl overflow-hidden border border-pink-500/30 shadow-2xl animate-in zoom-in-95 duration-200"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close photo preview"
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev / Next Buttons */}
            <button
              onClick={handlePrev}
              aria-label="Previous photo"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next photo"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Full Image */}
            <div className="max-h-[70vh] flex items-center justify-center bg-black/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.caption}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Caption in lightbox */}
            <div className="p-6 bg-slate-950/80 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <p className="text-white text-base font-medium">{selectedPhoto.caption}</p>
                {selectedPhoto.date && (
                  <p className="text-xs text-pink-300/80 mt-1">{selectedPhoto.date}</p>
                )}
              </div>
              {selectedPhoto.tag && (
                <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-medium border border-pink-500/30">
                  {selectedPhoto.tag}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
