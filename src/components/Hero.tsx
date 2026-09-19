import React, { useState } from 'react';
import { ArrowDown, Compass, MapPin, Award } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between bg-[#090A0D] overflow-hidden pt-24 pb-12 px-6 sm:px-8 lg:px-12"
    >
      {/* Background Architectural Photography with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-architecture.jpg"
          alt="Architectural pavilion facade with concrete geometry and reflection pool"
          className={`w-full h-full object-cover object-center transition-opacity duration-1000 scale-105 ${
            imgLoaded ? 'opacity-35' : 'opacity-0'
          }`}
          onLoad={() => setImgLoaded(true)}
        />
        {/* Subtle grid pattern background fallback */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        
        {/* Cinematic Vignette & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D] via-[#090A0D]/70 to-[#090A0D]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090A0D]/90 via-transparent to-[#090A0D]/80" />
      </div>

      {/* Top Architectural Coordinate Tag */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 flex items-center justify-between text-[#9AA0AC] text-xs font-mono tracking-[0.25em] uppercase">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-[#C2A87E] rounded-full animate-pulse" />
          <span>PORTFOLIO MONOGRAPH</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-[11px]">
          <span>IIT KHARAGPUR (MCP &apos;99)</span>
          <span>•</span>
          <span>COA / ITPI / IIA</span>
        </div>
      </div>

      {/* Center Main Editorial Typography */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 px-3 py-1.5 mb-6 border border-white/10 bg-[#111319]/70 backdrop-blur-sm">
            <span className="text-xs font-mono tracking-[0.25em] text-[#C2A87E] uppercase font-medium">
              ARCHITECTURE / URBAN PLANNING / EDUCATION
            </span>
          </div>

          {/* Oversized Editorial Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F5F5F3] leading-[1.05] uppercase">
            <span className="block hover:text-[#C2A87E] transition-colors duration-300">ARCHITECTURE</span>
            <span className="block text-[#9AA0AC]">&amp; URBAN</span>
            <span className="block text-[#F5F5F3]">PLANNING.</span>
          </h1>

          {/* Supporting Statement */}
          <div className="mt-8 pt-6 border-t border-white/15 max-w-2xl">
            <p className="text-base sm:text-lg lg:text-xl text-[#CDD0D8] font-light leading-relaxed">
              Architecture, urban planning, and education shaped by experience, research, and a commitment to the built environment.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-mono text-[#9AA0AC]">
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#C2A87E]" />
                Master Planning &amp; GIS
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#C2A87E]" />
                Academic Leadership &amp; Pedagogy
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C2A87E]" />
                Tamil Nadu &amp; National Projects
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Bar & Scroll Guidance */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div className="flex flex-col">
          <span className="text-[11px] font-mono tracking-[0.2em] text-[#C2A87E] uppercase">
            PRACTICE &amp; CONSULTANCY
          </span>
          <span className="text-sm font-serif text-[#F5F5F3] font-medium tracking-wide">
            Ar. Nenmeli Jayaraman, MCP (IIT-KGP), B.Arch, COA, ITPI, IIA
          </span>
        </div>

        {/* Scroll prompt button */}
        <button
          onClick={onExploreClick}
          className="group flex items-center gap-3 text-xs font-mono text-[#9AA0AC] hover:text-[#F5F5F3] transition-colors focus:outline-none"
        >
          <span className="tracking-[0.2em] uppercase text-[11px]">SCROLL TO EXPLORE</span>
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C2A87E] group-hover:text-[#C2A87E] transition-all">
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </section>
  );
};
