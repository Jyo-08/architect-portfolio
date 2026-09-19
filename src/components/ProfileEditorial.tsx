import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export const ProfileEditorial: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const quoteWords = ['Design.', 'Build.', 'Sustain.'];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.4
      }
    }
  };

  const lineVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="relative w-full overflow-hidden border border-white/10 bg-[#090A0D] mb-16 shadow-2xl">
      {/* Editorial Spread Container */}
      <div className="relative w-full min-h-[580px] sm:min-h-[660px] lg:min-h-[740px] flex items-center">
        
        {/* Background Editorial Architectural Photograph (quotes.jpeg) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: imgLoaded ? 1 : 1.06, opacity: imgLoaded ? 0.92 : 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            src="/assets/portfolio/quotes.jpeg"
            alt="Ar. Nenmeli Jayaraman seated inside architectural interior showroom space"
            className="w-full h-full object-cover object-[70%_25%] sm:object-[75%_30%] lg:object-[80%_35%]"
            onLoad={() => setImgLoaded(true)}
          />

          {/* Intentionally engineered gentle gradient: creates 35-45% negative text-safe zone on LEFT while preserving the person on the RIGHT */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#090A0D]/95 via-[#090A0D]/80 sm:via-[#090A0D]/65 to-transparent lg:w-[65%]" />
          
          {/* Subtle top/bottom architectural vignettes for seamless blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D] via-transparent to-[#090A0D]/50" />
          
          {/* Subtle architectural scanline overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
        </div>

        {/* Foreground Content: Text-Safe Editorial Zone (occupying ~38-45% width on Left) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-16 sm:py-20">
          <div className="max-w-xl lg:max-w-2xl">
            
            {/* Monograph Chapter Marker */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="w-6 h-[1.5px] bg-[#D9383A]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
                PROFILE // EDITORIAL MONOGRAPH
              </span>
            </motion.div>

            {/* Oversized Refined Typography: Ar. Nenmeli Jayaraman */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-1 mb-8"
            >
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F3] leading-[1.08] uppercase">
                <span className="block">Ar. Nenmeli</span>
                <span className="block text-[#D9383A]">Jayaraman</span>
              </h2>
              
              <p className="font-mono text-xs sm:text-sm tracking-[0.25em] text-[#9AA0AC] uppercase pt-2">
                Architecture &amp; City Planning
              </p>
            </motion.div>

            {/* V4 Exact Editorial Quote: "Design. Build. Sustain." */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="pt-6 mt-6 border-t border-white/15 max-w-lg"
            >
              <div className="bg-[#111319]/85 backdrop-blur-md p-6 sm:p-7 border-l-2 border-[#D9383A] border-y border-r border-white/8 shadow-2xl">
                <span className="text-[10px] font-mono text-[#D9383A] tracking-[0.25em] uppercase block mb-3 font-semibold">
                  CORE DESIGN ETHOS
                </span>
                
                {/* Line-by-Line Staggered Reveal of "Design. Build. Sustain." */}
                <div className="space-y-1 my-2">
                  {quoteWords.map((word, wIdx) => (
                    <motion.div
                      key={word}
                      variants={lineVariants}
                      className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F5F5F3]"
                    >
                      {wIdx === 0 ? (
                        <span>&ldquo;{word}</span>
                      ) : wIdx === quoteWords.length - 1 ? (
                        <span>{word}&rdquo;</span>
                      ) : (
                        <span>{word}</span>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#CDD0D8]">Ar. Nenmeli Jayaraman</span>
                  <span className="text-[#626776] text-[10px] uppercase">Principal Architect</span>
                </div>
              </div>

              {/* Architectural Credentials Badge Pill */}
              <div className="mt-5 flex flex-wrap items-center gap-2.5 text-[11px] font-mono text-[#9AA0AC]">
                <span className="px-2.5 py-1 bg-[#171A24]/90 border border-white/10 text-[#F5F5F3]">
                  IIT Kharagpur (MCP &apos;99)
                </span>
                <span className="px-2.5 py-1 bg-[#171A24]/90 border border-white/10 text-[#F5F5F3]">
                  B.Arch • LLB
                </span>
                <span className="px-2.5 py-1 bg-[#171A24]/90 border border-white/10 text-[#F5F5F3]">
                  COA: CA / 98 / 24015
                </span>
                <span className="px-2.5 py-1 bg-[#171A24]/90 border border-white/10 text-[#F5F5F3]">
                  Sri Janaki &amp; Associates
                </span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Ambient Bottom Right Spatial Identifier */}
        <div className="absolute bottom-4 right-6 hidden md:flex items-center gap-3 text-[10px] font-mono text-white/50 tracking-widest uppercase z-10 pointer-events-none">
          <span>PORTRAIT // SHOWROOM &amp; STUDIO ENVIRONMENT</span>
          <span>•</span>
          <span>CHENNAI</span>
        </div>

      </div>
    </div>
  );
};
