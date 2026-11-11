import React, { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages, galleryCategories } from '../data/galleryData';
import type { GalleryCategory } from '../data/galleryData';
import { Lightbox } from '../components/Lightbox';
import { Eye, Layers, Sparkles } from 'lucide-react';

const getImageCropClass = (src: string): string => {
  if (src.includes('door.jpeg')) return 'object-cover object-[center_36%] scale-112';
  if (src.includes('IITPalakad_plan.jpeg')) return 'object-cover object-[center_85%] scale-130';
  if (src.includes('site1.jpeg') || src.includes('site2.jpeg')) return 'object-cover object-[center_15%] scale-135';
  if (src.includes('design.jpeg')) return 'object-cover object-[center_40%] scale-126';
  if (src.includes('17.28.47%20(3)') || src.includes('17.28.47 (3)')) return 'object-contain p-2';
  if (
    src.includes('17.28.45') ||
    src.includes('17.28.46') ||
    src.includes('17.28.47')
  ) {
    return 'object-cover object-[center_28%] scale-115';
  }
  return 'object-cover object-center';
};

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
      <div className="min-h-screen bg-[#111214] pt-32 pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Landing Screen: First letter G in Red, NO FULL STOP */}
          <div className="relative mb-16 pb-12 border-b border-[#2A2D31]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-6 h-[1.5px] bg-[#D9383A]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
                VISUAL ARCHIVE &amp; FIELD RECORDS
              </span>
            </motion.div>

            {/* Large Landing Heading: First Letter G in Red */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F2F2F0] uppercase leading-[1.05]"
              aria-label="Gallery"
            >
              <span className="text-[#D9383A] inline-block">G</span>
              <span>ALLERY</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg lg:text-xl text-[#A5A7AA] font-normal max-w-3xl leading-relaxed"
            >
              Visual portfolio records covering project execution, interior design, academic studio lectures, and on-site structural inspections.
            </motion.p>
          </div>

          {/* Editorial Category Filters Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#A5A7AA] uppercase tracking-wider font-medium">
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
                        ? 'bg-[#D9383A] text-[#F5F5F3] font-semibold border-[#D9383A] shadow-md shadow-[#D9383A]/20'
                        : 'bg-[#1E2025] text-[#A5A7AA] border-[#2A2D31] hover:text-[#F2F2F0] hover:border-[#F2F2F0]/50'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`text-[10px] ${isActive ? 'text-[#F5F5F3]/90' : 'text-[#72757C]'}`}>
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
                const cropClass = getImageCropClass(img.src);

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
                    <div className="relative overflow-hidden bg-[#1E2025] border border-[#2A2D31] group-hover:border-[#D9383A] transition-all duration-500 shadow-md flex flex-col h-full">
                      {/* Stable Aspect Ratio Container */}
                      <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#17191C] flex items-center justify-center">
                        <img
                          src={img.src}
                          alt={`${img.title} — ${img.categoryLabel}`}
                          loading="lazy"
                          className={`w-full h-full ${cropClass} group-hover:scale-104 transition-transform duration-700`}
                        />

                        {/* Subtle Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111214]/92 via-[#111214]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 pointer-events-none">
                          <div className="self-end">
                            <span className="p-2 bg-[#1E2025]/90 text-[#D9383A] border border-[#2A2D31] flex items-center justify-center">
                              <Eye className="w-4 h-4" />
                            </span>
                          </div>
                          <div>
                            <span className="text-[10px] font-mono tracking-widest text-[#F5F5F3]/90 uppercase block font-semibold">
                              {img.category}
                            </span>
                            <h4 className="font-serif text-base text-[#F5F5F3] font-medium mt-0.5">
                              {img.title}
                            </h4>
                          </div>
                        </div>
                      </div>

                      {/* Editorial Caption Strip - Clean & No Raw Filenames */}
                      <div className="p-4 bg-[#1E2025] border-t border-[#2A2D31] flex flex-col justify-between flex-grow">
                        <div className="flex items-center justify-between text-xs font-mono mb-1">
                          <span className="text-[#D9383A] text-[10px] tracking-widest uppercase font-semibold">
                            {img.categoryLabel}
                          </span>
                          <span className="text-[#A5A7AA] text-[10px] uppercase">
                            /{String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <h4 className="font-serif text-sm font-semibold text-[#F2F2F0] group-hover:text-[#D9383A] transition-colors">
                          {img.title}
                        </h4>
                        <p className="text-[11px] text-[#A5A7AA] mt-1 line-clamp-1">
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
          <div className="mt-12 pt-6 border-t border-[#2A2D31] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A5A7AA]">
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
