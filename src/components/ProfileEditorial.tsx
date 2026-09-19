import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ProfileEditorialProps {
  quotePlaceholder?: string;
  attribution?: string;
}

export const ProfileEditorial: React.FC<ProfileEditorialProps> = ({
  quotePlaceholder = '[PROFILE QUOTE WILL BE ADDED]',
  attribution = 'Ar. Nenmeli Jayaraman — Principal & Educator'
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="relative w-full overflow-hidden border border-white/10 bg-[#090A0D] mb-16 shadow-2xl">
      {/* Editorial Spread Container */}
      <div className="relative w-full min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] flex items-center">
        
        {/* Background Editorial Architectural Photograph (quotes.jpeg) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/assets/portfolio/quotes.jpeg"
            alt="Ar. Nenmeli Jayaraman seated inside architectural interior exhibition space"
            className={`w-full h-full object-cover object-[70%_25%] sm:object-[75%_30%] lg:object-[80%_35%] transition-all duration-1000 ${
              imgLoaded ? 'opacity-90 scale-100' : 'opacity-0 scale-105'
            }`}
            onLoad={() => setImgLoaded(true)}
          />

          {/* Intentionally engineered gentle gradient: creates 35-45% negative text-safe zone on LEFT while preserving the person on the RIGHT */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#090A0D]/95 via-[#090A0D]/75 sm:via-[#090A0D]/60 to-transparent lg:w-[65%]" />
          
          {/* Subtle top/bottom architectural vignettes for seamless blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D] via-transparent to-[#090A0D]/50" />
          
          {/* Subtle architectural scanline overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
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
                EDITORIAL MONOGRAPH // PROFILE
              </span>
            </motion.div>

            {/* Oversized Refined Typography: Ar. Nenmeli Jayaraman */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1 mb-6"
            >
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F3] leading-[1.1] uppercase">
                <span className="block">Ar. Nenmeli</span>
                <span className="block text-[#D9383A]">Jayaraman</span>
              </h2>
              
              <p className="font-mono text-xs sm:text-sm tracking-[0.25em] text-[#9AA0AC] uppercase pt-2">
                Architecture &amp; City Planning
              </p>
            </motion.div>

            {/* Future Text / Quote Safe Area */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-6 mt-6 border-t border-white/15 max-w-lg"
            >
              {/* Future Quote Placeholder Container */}
              <div className="bg-[#111319]/80 backdrop-blur-sm p-5 sm:p-6 border-l-2 border-[#D9383A] border-y border-r border-white/5">
                <span className="text-[10px] font-mono text-[#D9383A] tracking-widest uppercase block mb-2">
                  FUTURE EDITORIAL TEXT SAFE ZONE (35–45% SPREAD)
                </span>
                
                <p className="font-serif italic text-sm sm:text-base text-[#CDD0D8] font-light leading-relaxed">
                  &ldquo;{quotePlaceholder}&rdquo;
                </p>

                <span className="block mt-3 text-[11px] font-mono text-[#9AA0AC] tracking-wider uppercase">
                  — {attribution}
                </span>
              </div>

              {/* Architectural Credentials Badge Pill */}
              <div className="mt-4 flex flex-wrap items-center gap-3 text-[11px] font-mono text-[#9AA0AC]">
                <span className="px-2.5 py-1 bg-[#171A24]/90 border border-white/10 text-[#F5F5F3]">
                  IIT Kharagpur (MCP &apos;99)
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
          <span>PORTRAIT // ARCHITECTURAL SHOWROOM ENVIRONMENT</span>
          <span>•</span>
          <span>CHENNAI</span>
        </div>

      </div>
    </div>
  );
};
