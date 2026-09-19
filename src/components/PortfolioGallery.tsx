import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages, galleryCategories } from '../data/galleryData';
import type { GalleryCategory } from '../data/galleryData';
import { Lightbox } from './Lightbox';
import { Eye, Layers } from 'lucide-react';

export const PortfolioGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = activeCategory === 'ALL'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const getCategoryCount = (catId: GalleryCategory) => {
    if (catId === 'ALL') return galleryImages.length;
    return galleryImages.filter((img) => img.category === catId).length;
  };

  return (
    <section className="mt-20 pt-16 border-t border-white/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#D9383A]" />
            <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
              PORTFOLIO GALLERY // PHOTOGRAPHIC ARCHIVE
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F3] uppercase tracking-tight">
            Visual Archive &amp; Field Records
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9AA0AC] max-w-2xl font-light">
            Documented photographs and technical architectural drawings spanning project execution, bespoke interior design, academic studio lectures, and on-site engineering supervision.
          </p>
        </div>

        {/* Editorial Category Filters */}
        <div className="flex flex-wrap gap-2">
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = getCategoryCount(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-300 border flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#D9383A] text-[#F5F5F3] font-semibold border-[#D9383A] shadow-lg shadow-[#D9383A]/20'
                    : 'bg-[#111319]/80 text-[#9AA0AC] border-white/10 hover:text-[#F5F5F3] hover:border-white/25'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] ${isActive ? 'text-[#F5F5F3]' : 'text-[#626776]'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3 Columns Layout Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start"
      >
        <AnimatePresence mode="popLayout">
          {filteredImages.map((img, index) => {
            return (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="group cursor-pointer flex flex-col"
                onClick={() => setLightboxIndex(index)}
              >
                <div className="relative overflow-hidden bg-[#111319] border border-white/10 group-hover:border-[#D9383A]/70 transition-all duration-500 shadow-xl flex flex-col h-full">
                  {/* Stable Aspect Ratio Container */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#090A0D] flex items-center justify-center">
                    <img
                      src={img.src}
                      alt={`${img.title} — ${img.categoryLabel}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 brightness-95 group-hover:brightness-105"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                      <div className="self-end">
                        <span className="p-2 bg-[#090A0D]/80 text-[#D9383A] border border-white/15 flex items-center justify-center">
                          <Eye className="w-4 h-4" />
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-[#D9383A] uppercase block">
                          {img.category}
                        </span>
                        <h4 className="font-serif text-base text-[#F5F5F3] font-medium mt-0.5">
                          {img.title}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Caption Strip */}
                  <div className="p-4 bg-[#111319]/95 border-t border-white/5 flex flex-col justify-between flex-grow">
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className="text-[#D9383A] text-[10px] tracking-widest uppercase font-semibold">
                        {img.categoryLabel}
                      </span>
                      <span className="text-[#626776] text-[10px] uppercase">
                        /{String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h4 className="font-serif text-sm font-semibold text-[#F5F5F3] group-hover:text-[#D9383A] transition-colors">
                      {img.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Gallery Count Status */}
      <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#626776]">
        <div className="flex items-center gap-2">
          <Layers className="w-3.5 h-3.5 text-[#D9383A]" />
          <span>DISPLAYING {filteredImages.length} OF {galleryImages.length} PORTFOLIO ARCHIVES</span>
        </div>
        <span>CLICK ANY IMAGE FOR FULLSCREEN LIGHTBOX</span>
      </div>

      {/* Fullscreen Lightbox Viewer */}
      <Lightbox
        images={filteredImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
};
