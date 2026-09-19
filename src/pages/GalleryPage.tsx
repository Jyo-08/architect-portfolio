import React, { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages, galleryCategories } from '../data/galleryData';
import type { GalleryCategory } from '../data/galleryData';
import { Lightbox } from '../components/Lightbox';
import { Eye, Layers, Sparkles } from 'lucide-react';

export const GalleryPage: React.FC = () => {
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
    <PageTransition>
      <div className="min-h-screen bg-[#090A0D] pt-32 pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Landing Screen */}
          <div className="relative mb-16 pb-12 border-b border-white/10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-6 h-[1.5px] bg-[#D9383A]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
                CHAPTER 05 // VISUAL ARCHIVE &amp; FIELD RECORDS
              </span>
            </motion.div>

            {/* Large Landing Heading: First Letter G in Red */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F5F5F3] uppercase leading-[1.05]"
            >
              <span className="text-[#D9383A] inline-block">G</span>
              <span>ALLERY</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg lg:text-xl text-[#CDD0D8] font-light max-w-3xl leading-relaxed"
            >
              Visual portfolio records covering project execution, interior design, academic studio lectures, and on-site structural inspections.
            </motion.p>
          </div>

          {/* Editorial Category Filters Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#9AA0AC] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D9383A]" />
              <span>Filter Photographic Archives:</span>
            </div>

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

          {/* Exactly 3 Images Per Row on Desktop Grid */}
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

                        {/* Subtle Dark Hover Overlay */}
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

                      {/* Editorial Caption Strip - Clean & No Raw Filenames */}
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
                        <p className="text-[11px] text-[#9AA0AC] font-light mt-1 line-clamp-1">
                          {img.caption}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Gallery Status Bar */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#626776]">
            <div className="flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#D9383A]" />
              <span>DISPLAYING {filteredImages.length} OF {galleryImages.length} PORTFOLIO ARCHIVES</span>
            </div>
            <span>CLICK ANY IMAGE TO OPEN FULLSCREEN VIEWER</span>
          </div>

          {/* Fullscreen Lightbox Viewer */}
          <Lightbox
            images={filteredImages}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={(idx) => setLightboxIndex(idx)}
          />
        </div>
      </div>
    </PageTransition>
  );
};
