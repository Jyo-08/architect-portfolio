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
      className="relative min-h-screen w-full flex flex-col justify-between bg-[#111214] overflow-hidden pt-24 pb-12 px-6 sm:px-8 lg:px-12"
    >
      {/* Background Architectural Photography with Soft Cement Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-architecture.jpg"
          alt="Architectural pavilion facade with concrete geometry and reflection pool"
          className={`w-full h-full object-cover object-center transition-opacity duration-1000 scale-105 ${
            imgLoaded ? 'opacity-40' : 'opacity-0'
          }`}
          onLoad={() => setImgLoaded(true)}
        />
        {/* Subtle grid pattern background fallback */}
        <div className="absolute inset-0 bg-grid-pattern opacity-45 pointer-events-none" />
        
        {/* Vignette & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111214] via-[#111214]/75 to-[#111214]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111214]/90 via-transparent to-[#111214]/80" />
      </div>

      {/* Top Architectural Coordinate Tag */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 flex items-center justify-between text-[#A5A7AA] text-xs font-mono tracking-[0.25em] uppercase font-medium">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-[#D9383A] rounded-full animate-pulse" />
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
          <div className="inline-flex items-center gap-3 px-3 py-1.5 mb-6 border border-[#2A2D31] bg-[#1E2025]/90 backdrop-blur-sm">
            <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
              ARCHITECT / CITY PLANNER / ACADEMICIAN / LAWYER
            </span>
          </div>

          {/* Primary Organisation Identity */}
          <h1 className="font-serif tracking-tight leading-[1.15] uppercase space-y-2">
            <span className="block font-bold text-xl sm:text-4xl md:text-5xl text-[#D9383A]">SRI JANAKI &amp; ASSOCIATES</span>
            <span className="block font-semibold text-base sm:text-2xl md:text-3xl text-[#F2F2F0]">SRI JANAKI ENGINEERING SERVICES</span>
            <span className="block font-semibold text-sm sm:text-xl md:text-2xl text-[#F2F2F0]">SRI JANAKI CONSTRUCTIONS</span>
          </h1>

          <p className="mt-4 font-serif text-xs sm:text-base md:text-lg font-bold tracking-[0.14em] uppercase">
            <span className="text-[#D9383A]">ARCHITECTURE</span>{' '}
            <span className="text-[#A5A7AA]">&amp; CITY PLANNING</span>
          </p>

          {/* Supporting Statement */}
          <div className="mt-8 pt-6 border-t border-[#2A2D31] max-w-2xl">
            <p className="text-base sm:text-lg lg:text-xl text-[#F2F2F0] font-normal leading-relaxed">
              Architecture, statutory city planning, arbitration, and education shaped by two decades of professional practice.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-mono text-[#A5A7AA]">
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#D9383A]" />
                Master Planning &amp; GIS
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#D9383A]" />
                Academic Leadership &amp; Pedagogy
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D9383A]" />
                Tamil Nadu &amp; National Projects
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Bar & Scroll Guidance */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 border-t border-[#2A2D31] flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div className="flex flex-col">
          <span className="text-[11px] font-mono tracking-[0.2em] text-[#D9383A] uppercase font-semibold">
            PRACTICE &amp; CONSULTANCY
          </span>
          <span className="text-sm font-serif text-[#F2F2F0] font-medium tracking-wide">
            Ar. N. Jayaraman, MCP (IIT-KGP), B.Arch, LLB, COA, ITPI, IIA
          </span>
        </div>

        {/* Scroll prompt button */}
        <button
          onClick={onExploreClick}
          className="group flex items-center gap-3 text-xs font-mono text-[#A5A7AA] hover:text-[#F2F2F0] transition-colors focus:outline-none"
        >
          <span className="tracking-[0.2em] uppercase text-[11px]">SCROLL TO EXPLORE</span>
          <div className="w-8 h-8 rounded-none border border-[#2A2D31] flex items-center justify-center group-hover:border-[#D9383A] group-hover:text-[#D9383A] transition-all bg-[#1E2025]">
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </section>
  );
};
