import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { GalleryImage } from '../data/galleryData';

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const getLightboxCropClass = (src: string): string => {
  if (src.includes('door.jpeg')) return 'object-cover object-[center_36%] scale-112';
  if (src.includes('IITPalakad_plan.jpeg')) return 'object-cover object-[center_85%] scale-130';
  if (src.includes('site1.jpeg') || src.includes('site2.jpeg')) return 'object-cover object-[center_15%] scale-135';
  if (src.includes('design.jpeg')) return 'object-cover object-[center_40%] scale-126';
  if (src.includes('17.28.47%20(3)') || src.includes('17.28.47 (3)')) return 'object-contain p-4';
  if (
    src.includes('17.28.45') ||
    src.includes('17.28.46') ||
    src.includes('17.28.47')
  ) {
    return 'object-cover object-[center_28%] scale-115';
  }
  return 'object-contain';
};

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < images.length;
  const currentImage = isOpen ? images[currentIndex] : null;

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIndex = (currentIndex + 1) % images.length;
    onNavigate(nextIndex);
  }, [currentIndex, images.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    onNavigate(prevIndex);
  }, [currentIndex, images.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !currentImage) return null;

  const cropClass = getLightboxCropClass(currentImage.src);
  const isCustomCropped = cropClass !== 'object-contain';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 bg-[#111214]/98 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 select-none"
        onClick={onClose}
      >
        {/* Top Header Bar */}
        <div
          className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between pb-4 border-b border-[#2A2D31]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 rounded-full bg-[#D9383A] animate-pulse" />
            <div className="flex flex-col">
              <span className="text-xs font-mono text-[#D9383A] tracking-[0.2em] uppercase font-semibold">
                {currentImage.categoryLabel}
              </span>
              <span className="text-sm font-serif text-[#F2F2F0] font-medium">
                {currentImage.title}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-[#D8DAD8] tracking-widest">
              {String((currentIndex ?? 0) + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>

            <button
              onClick={onClose}
              className="p-2 border border-[#2A2D31] text-[#A5A7AA] hover:text-[#F2F2F0] hover:border-white/40 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D9383A] bg-[#17191C]"
              aria-label="Close fullscreen lightbox (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Main Image Stage */}
        <div
          className="relative flex-1 flex items-center justify-center my-auto py-4 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 z-20 p-3 sm:p-4 bg-[#17191C]/90 border border-[#2A2D31] text-[#D8DAD8] hover:text-[#F2F2F0] hover:border-[#D9383A] hover:bg-[#1E2025] transition-all rounded-none focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D9383A]"
            aria-label="Previous image (Left Arrow)"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Active Image with Clean Cropping Container */}
          <motion.div
            key={currentImage.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`relative max-w-full max-h-[78vh] flex items-center justify-center overflow-hidden border border-[#2A2D31] shadow-2xl bg-[#17191C] ${
              isCustomCropped ? 'w-[90vw] md:w-[75vw] aspect-[16/10] max-h-[74vh]' : ''
            }`}
          >
            <img
              src={currentImage.src}
              alt={`${currentImage.title} - ${currentImage.categoryLabel}`}
              className={
                isCustomCropped
                  ? `w-full h-full ${cropClass}`
                  : 'max-h-[76vh] max-w-[92vw] md:max-w-[85vw] object-contain'
              }
            />
          </motion.div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 z-20 p-3 sm:p-4 bg-[#17191C]/90 border border-[#2A2D31] text-[#D8DAD8] hover:text-[#F2F2F0] hover:border-[#D9383A] hover:bg-[#1E2025] transition-all rounded-none focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D9383A]"
            aria-label="Next image (Right Arrow)"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Bottom Status Bar */}
        <div
          className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between pt-4 border-t border-[#2A2D31] text-[11px] font-mono text-[#72757C]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-2">
            <Maximize2 className="w-3.5 h-3.5 text-[#D9383A]" />
            <span>EDITORIAL MONOGRAPH FULLSCREEN VIEWER</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span>[← / →] Navigate</span>
            <span>•</span>
            <span>[ESC] Close</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
