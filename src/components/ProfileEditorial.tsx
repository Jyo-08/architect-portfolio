import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const ProfileEditorial: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const ethosSteps = [
    { title: 'DESIGN', subtitle: 'Spatial Hierarchy & Synthesis' },
    { title: 'BUILD', subtitle: 'Structural Rigor & Materiality' },
    { title: 'SUSTAIN', subtitle: 'Environmental Longevity & GIS' }
  ];

  return (
    <div className="relative w-full overflow-hidden border border-[#2A2D31] bg-[#1E2025] mb-16 shadow-xl">
      {/* Editorial Spread Container */}
      <div className="relative w-full min-h-[580px] sm:min-h-[660px] lg:min-h-[740px] flex items-center">
        
        {/* Background Editorial Architectural Photograph (quotes.jpeg) - NOT cropped aggressively */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#17191C]">
          <motion.img
            initial={{ scale: 1.04, opacity: 0 }}
            animate={{ scale: imgLoaded ? 1 : 1.04, opacity: imgLoaded ? 0.94 : 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            src="/assets/portfolio/quotes.jpeg"
            alt="Ar. N. Jayaraman seated inside architectural interior showroom space"
            className="w-full h-full object-cover object-[70%_25%] sm:object-[75%_30%] lg:object-[80%_35%]"
            onLoad={() => setImgLoaded(true)}
          />

          {/* Text-safe gentle gradient in cement grey theme */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111214]/95 via-[#111214]/82 sm:via-[#111214]/65 to-transparent lg:w-[68%]" />
          
          {/* Subtle top/bottom architectural vignettes */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111214]/90 via-transparent to-[#111214]/45" />
          
          {/* Subtle architectural scanline overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        </div>

        {/* Foreground Content: Text-Safe Editorial Zone */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-16 sm:py-20">
          <div className="max-w-xl lg:max-w-2xl">
            
            {/* Monograph Header Marker */}
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

            {/* Profile Display Typography: Exactly 50% scale of Gallery H1 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-3 mb-8"
            >
              <h2 className="font-serif text-[18px] sm:text-[30px] md:text-[36px] lg:text-[48px] font-bold tracking-tight leading-[1.12] uppercase mt-2 mb-3">
                <span className="text-[#F2F2F0]">AR. N. </span>
                <span className="text-[#D9383A]">JAYARAMAN</span>
              </h2>
              
              <p className="font-mono text-xs sm:text-sm tracking-[0.22em] text-[#A5A7AA] uppercase pt-1 font-semibold">
                Architect • City Planner • Academician • Lawyer
              </p>
            </motion.div>

            {/* Core Design Ethos: Vertical Sequence DESIGN ↓ BUILD ↓ SUSTAIN */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pt-6 mt-6 border-t border-[#2A2D31] max-w-lg"
            >
              <div className="bg-[#1E2025]/92 backdrop-blur-md p-6 sm:p-7 border-l-2 border-[#D9383A] border-y border-r border-[#2A2D31] shadow-xl">
                <span className="text-[10px] font-mono text-[#D9383A] tracking-[0.25em] uppercase block mb-4 font-semibold">
                  CORE DESIGN ETHOS
                </span>
                
                {/* Vertical Sequential Step-wise Presentation */}
                <div className="space-y-2 my-2">
                  {ethosSteps.map((step, sIdx) => (
                    <React.Fragment key={step.title}>
                      <div className="flex items-center justify-between py-1">
                        <div>
                          <span className="font-serif text-2xl sm:text-3xl font-bold text-[#F2F2F0] tracking-wide block">
                            {step.title}
                          </span>
                          <span className="text-[10px] font-mono text-[#A5A7AA] uppercase tracking-wider font-medium">
                            {step.subtitle}
                          </span>
                        </div>
                      </div>

                      {sIdx < ethosSteps.length - 1 && (
                        <div className="flex items-center gap-2 text-[#D9383A] py-0.5">
                          <ArrowDown className="w-3.5 h-3.5" />
                          <span className="h-[1px] flex-grow bg-[#2A2D31]" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <div className="pt-4 mt-4 border-t border-[#2A2D31] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#F2F2F0] font-semibold">Ar. N. Jayaraman</span>
                  <span className="text-[#A5A7AA] text-[10px] uppercase font-medium">Principal Practitioner</span>
                </div>
              </div>

              {/* Architectural Credentials Badge Pill */}
              <div className="mt-5 flex flex-wrap items-center gap-2.5 text-[11px] font-mono text-[#F2F2F0]">
                <span className="px-2.5 py-1 bg-[#1E2025]/95 border border-[#2A2D31] text-[#F2F2F0] font-medium">
                  IIT Kharagpur (MCP &apos;99)
                </span>
                <span className="px-2.5 py-1 bg-[#1E2025]/95 border border-[#2A2D31] text-[#F2F2F0] font-medium">
                  B.Arch • LLB
                </span>
                <span className="px-2.5 py-1 bg-[#1E2025]/95 border border-[#2A2D31] text-[#F2F2F0] font-medium">
                  COA: CA / 98 / 24015
                </span>
                <span className="px-2.5 py-1 bg-[#1E2025]/95 border border-[#2A2D31] text-[#F2F2F0] font-medium">
                  Sri Janaki &amp; Associates
                </span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Ambient Bottom Right Spatial Identifier */}
        <div className="absolute bottom-4 right-6 hidden md:flex items-center gap-3 px-2.5 py-1 bg-[#111214]/85 backdrop-blur-sm border border-[#2A2D31]/70 text-[10px] font-mono text-[#F2F2F0] tracking-widest uppercase z-10 pointer-events-none">
          <span>PORTRAIT // SHOWROOM &amp; STUDIO ENVIRONMENT</span>
          <span>•</span>
          <span>CHENNAI</span>
        </div>

      </div>
    </div>
  );
};
