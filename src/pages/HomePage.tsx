import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import {
  Compass,
  MapPin,
  Award,
  ArrowRight,
  ArrowDown,
  Layers,
  Briefcase,
  ShieldCheck,
  Building2,
  Image
} from 'lucide-react';
import { motion } from 'framer-motion';

interface HomePageProps {
  onOpenInquiry?: () => void;
}

export const HomePage: React.FC<HomePageProps> = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const previewCards = [
    {
      num: '01',
      title: 'Selected Work & Timeline',
      subtitle: '10 Career Positions & Statutory Port/AMRUT Projects',
      path: '/work',
      icon: Briefcase,
      badge: 'Master Planning & Practice'
    },
    {
      num: '02',
      title: 'Expertise Domains',
      subtitle: 'City Planning, GIS, Heritage Conservation, Tech',
      path: '/expertise',
      icon: Layers,
      badge: '10 Core Disciplines'
    },
    {
      num: '03',
      title: 'About & Biography',
      subtitle: 'IIT Kharagpur (MCP) Heritage & Leadership',
      path: '/about',
      icon: Building2,
      badge: 'Academic & Governance'
    },
    {
      num: '04',
      title: 'Credentials & COA',
      subtitle: 'Council of Architecture, ITPI, IIA, Registered Valuer',
      path: '/credentials',
      icon: ShieldCheck,
      badge: 'Statutory Verification'
    },
    {
      num: '05',
      title: 'Dedicated Gallery',
      subtitle: 'Visual Archive & Technical Drawings',
      path: '/gallery',
      icon: Image,
      badge: 'Photographic Archive'
    },
    {
      num: '06',
      title: 'Profile & Ethos',
      subtitle: '"Design. Build. Sustain." & Practice Monograph',
      path: '/profile',
      icon: Building2,
      badge: 'Editorial Portrait'
    }
  ];

  return (
    <PageTransition>
      {/* Full Viewport Cinematic Hero */}
      <section className="relative min-h-screen w-full flex flex-col justify-between bg-[#090A0D] overflow-hidden pt-28 pb-12 px-6 sm:px-8 lg:px-12">
        {/* Background Architectural Photography with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-architecture.jpg"
            alt="Monolithic architectural concrete pavilion with evening lighting and reflection pool"
            className={`w-full h-full object-cover object-center transition-opacity duration-1000 scale-105 ${imgLoaded ? 'opacity-35' : 'opacity-0'
              }`}
            onLoad={() => setImgLoaded(true)}
          />
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

          {/* Cinematic Vignette & Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D] via-[#090A0D]/70 to-[#090A0D]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#090A0D]/90 via-transparent to-[#090A0D]/80" />
        </div>

        {/* Top Coordinate Bar */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 flex items-center justify-between text-[#9AA0AC] text-xs font-mono tracking-[0.25em] uppercase">
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
        <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8 sm:py-12">
          <div className="max-w-5xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-3 px-3 py-1.5 mb-6 border border-white/10 bg-[#111319]/80 backdrop-blur-sm"
            >
              <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
                ARCHITECTURE / CITY PLANNING / EDUCATION
              </span>
            </motion.div>            {/* Oversized Editorial Headline:
                A in ARCHITECTURE = RED
                Y in CITY = RED
                P in PLANNING = RED
                All remaining letters = Normal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F5F5F3] leading-[1.05] uppercase"
              aria-label="Architecture & City Planning."
            >
              <span className="block">
                <span className="text-[#D9383A] inline-block hover:scale-105 transition-transform duration-300">A</span>
                <span className="text-[#F5F5F3]">RCHITECTURE</span>
              </span>
              <span className="block">
                <span className="text-[#9AA0AC] mr-2 sm:mr-3">&amp;</span>
                <span className="text-[#F5F5F3]">CIT</span>
                <span className="text-[#D9383A] inline-block">Y</span>
              </span>
              <span className="block">
                <span className="text-[#D9383A] inline-block">P</span>
                <span className="text-[#F5F5F3]">LANNING</span>
              </span>
            </motion.h1>

            {/* Supporting Statement - Minimal & Punchy */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 pt-6 border-t border-white/15 max-w-2xl"
            >
              <p className="text-base sm:text-lg lg:text-xl text-[#CDD0D8] font-light leading-relaxed">
                Architecture, statutory city planning, and education shaped by two decades of professional practice.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-mono text-[#9AA0AC]">
                <span className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#D9383A]" />
                  Statutory City Master Planning &amp; GIS
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#D9383A]" />
                  IIT Kharagpur (MCP &apos;99)
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D9383A]" />
                  Sri Janaki &amp; Associates
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Editorial Bar */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="flex flex-col">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#D9383A] uppercase">
              PRACTICE &amp; CONSULTANCY
            </span>
            <span className="text-sm font-serif text-[#F5F5F3] font-medium tracking-wide">
              Ar. Nenmeli Jayaraman, MCP (IIT-KGP), B.Arch, LLB, COA, ITPI, IIA
            </span>
          </div>

          <a
            href="#monograph-directory"
            className="group flex items-center gap-3 text-xs font-mono text-[#9AA0AC] hover:text-[#F5F5F3] transition-colors focus:outline-none"
          >
            <span className="tracking-[0.2em] uppercase text-[11px]">EXPLORE PORTFOLIO</span>
            <div className="w-8 h-8 rounded-none border border-white/20 flex items-center justify-center group-hover:border-[#D9383A] group-hover:text-[#D9383A] transition-all">
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </section>

      {/* Monograph Section Index & Direct Previews */}
      <section id="monograph-directory" className="relative py-24 bg-[#0B0D12] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-[1.5px] bg-[#D9383A]" />
                <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase">
                  MONOGRAPH CHAPTERS
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F3] uppercase">
                Explore The Practice
              </h2>
            </div>
            <p className="text-sm text-[#9AA0AC] max-w-md font-light">
              Visual portfolio chapters detailing statutory planning, architectural design, academic research, and verified credentials.
            </p>
          </div>

          {/* 6 Architectural Route Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.path}
                  to={card.path}
                  className="group relative p-8 bg-[#111319]/80 border border-white/8 hover:border-[#D9383A]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#D9383A]/5 rounded-bl-full group-hover:bg-[#D9383A]/10 transition-colors" />

                  <div>
                    {/* Top Tag Row */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs text-[#D9383A] font-semibold tracking-widest">
                        /{card.num}
                      </span>
                      <span className="text-[10px] font-mono px-2.5 py-1 bg-[#1A1D27] text-[#9AA0AC] border border-white/5 uppercase">
                        {card.badge}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-none bg-[#171A24] border border-white/10 flex items-center justify-center text-[#CDD0D8] group-hover:text-[#D9383A] group-hover:border-[#D9383A]/40 transition-colors mb-5">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#F5F5F3] group-hover:text-[#D9383A] transition-colors mb-2">
                      {card.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#9AA0AC] font-light leading-relaxed">
                      {card.subtitle}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#9AA0AC] group-hover:text-[#F5F5F3] transition-colors">
                    <span className="tracking-wider uppercase text-[11px]">VIEW CHAPTER</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#D9383A]" />
                  </div>
                </Link>
              );
            })}

            {/* Direct Contact & Consultation Card */}
            <Link
              to="/contact"
              className="group p-8 bg-[#161822] border border-[#D9383A]/40 hover:border-[#D9383A] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-[#D9383A] font-semibold tracking-widest block mb-4">
                  /07
                </span>
                <h3 className="font-serif text-xl font-bold text-[#F5F5F3] mb-2">
                  Contact &amp; Consultation
                </h3>
                <p className="text-xs sm:text-sm text-[#CDD0D8] font-light leading-relaxed">
                  Engage Ar. Nenmeli Jayaraman for master planning advisory, architectural design, academic lectures, or valuation.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#D9383A] font-semibold">
                <span className="tracking-wider uppercase text-[11px]">OPEN CONTACT PAGE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
