import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { AiText } from '../components/AiText';
import { ContinuousImageMarquee } from '../components/ContinuousImageMarquee';
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
  Image,
  Cpu,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

interface HomePageProps {
  onOpenInquiry?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenInquiry }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const previewCards = [
    {
      title: 'Selected Work & Timeline',
      subtitle: '10 Career Positions & Statutory Port/AMRUT Projects',
      path: '/work',
      icon: Briefcase,
      badge: 'Master Planning & Practice'
    },
    {
      title: 'Expertise Domains',
      subtitle: 'City Planning, GIS, Heritage Conservation, AI Tech',
      path: '/expertise',
      icon: Layers,
      badge: '10 Core Disciplines'
    },
    {
      title: 'About & Biography',
      subtitle: 'IIT Kharagpur (MCP) Heritage & Legal Synthesis',
      path: '/about',
      icon: Building2,
      badge: 'Academic & Governance'
    },
    {
      title: 'Credentials & COA',
      subtitle: 'Council of Architecture, ITPI, IIA, Registered Valuer',
      path: '/credentials',
      icon: ShieldCheck,
      badge: 'Statutory Verification'
    },
    {
      title: 'Dedicated Gallery',
      subtitle: 'Visual Archive & Technical Drawings',
      path: '/gallery',
      icon: Image,
      badge: 'Photographic Archive'
    },
    {
      title: 'Profile & Ethos',
      subtitle: '"Design. Build. Sustain." & Practice Monograph',
      path: '/profile',
      icon: Building2,
      badge: 'Editorial Portrait'
    }
  ];

  const ethosSteps = [
    { phase: 'CONCEPT & CONTEXT', title: 'DESIGN', desc: 'Synthesizing climate, spatial hierarchy, statutory bylaws, and human-centric living.' },
    { phase: 'EXECUTION & STRUCTURE', title: 'BUILD', desc: 'Precision structural execution, engineering standards, material integrity, and on-site rigor.' },
    { phase: 'RESILIENCE & LONGEVITY', title: 'SUSTAIN', desc: 'Resilient urban ecosystems, GIS-driven city master plans, and environmental longevity.' }
  ];

  return (
    <PageTransition>
      {/* Full Viewport Cinematic Hero with Exact Dark Theme & Warm Pavilion Depth */}
      <section className="relative min-h-screen w-full flex flex-col justify-between bg-[#111214] overflow-hidden pt-28 pb-12 px-6 sm:px-8 lg:px-12">
        {/* Background Architectural Photography */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: imgLoaded ? 1.02 : 1.08, opacity: imgLoaded ? 0.4 : 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            src="/images/hero-architecture.jpg"
            alt="Monolithic architectural concrete pavilion with evening lighting and reflection pool"
            className="w-full h-full object-cover object-center"
            onLoad={() => setImgLoaded(true)}
          />
          {/* Subtle architectural drafting grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

          {/* Cinematic Vignette & Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111214] via-[#111214]/75 to-[#111214]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111214]/90 via-transparent to-[#111214]/80" />
        </div>

        {/* Top Coordinate Bar */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 flex items-center justify-between text-[#A5A7AA] text-xs font-mono tracking-[0.25em] uppercase">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-[#D9383A] rounded-full animate-pulse" />
            <span>ARCHITECTURAL &amp; PLANNING CONSULTANCY</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-[11px]">
            <span>IIT KHARAGPUR (MCP &apos;99)</span>
            <span>•</span>
            <span>COA / ITPI / IIA</span>
          </div>
        </div>

        {/* Center Main Editorial Typography */}
        <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8 sm:py-12">
          <div className="w-full">
            {/* Eyebrow with Professional Positioning */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-3 px-3 py-1.5 mb-6 border border-[#2A2D31] bg-[#17191C]/85 backdrop-blur-sm"
            >
              <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
                ARCHITECT / CITY PLANNER / ACADEMICIAN / LAWYER
              </span>
            </motion.div>

            {/* Primary Identity: Descending Visual Staircase Hierarchy */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-serif tracking-tight uppercase leading-[1.15] space-y-2 sm:space-y-2.5"
              aria-label="Sri Janaki & Associates, Sri Janaki Engineering Services, Sri Janaki Constructions"
            >
              <span className="block font-bold text-[1.14rem] sm:text-[1.8rem] md:text-[2.25rem] lg:text-[2.8rem] xl:text-[3.2rem]">
                <span className="text-[#D9383A]">S</span>
                <span className="text-[#F2F2F0]">RI JANAKI &amp; ASSOCIATES</span>
              </span>
              <span className="block font-semibold text-[0.9rem] sm:text-[1.35rem] md:text-[1.68rem] lg:text-[2.0rem] xl:text-[2.15rem]">
                <span className="text-[#D9383A]">S</span>
                <span className="text-[#F2F2F0]">RI JANAKI ENGINEERING SERVICES</span>
              </span>
              <span className="block font-semibold text-[0.78rem] sm:text-[1.1rem] md:text-[1.32rem] lg:text-[1.52rem] xl:text-[1.7rem]">
                <span className="text-[#D9383A]">S</span>
                <span className="text-[#F2F2F0]">RI JANAKI CONSTRUCTIONS</span>
              </span>
            </motion.h1>

            {/* Specialization Subtitle Immediately Below Organisation Names (Clean Descending Hierarchy, No Red Box) */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28 }}
              className="mt-3 font-serif font-semibold tracking-[0.16em] sm:tracking-[0.2em] text-[#D9383A] uppercase text-[0.62rem] sm:text-[0.75rem] md:text-[0.85rem] lg:text-[0.95rem] xl:text-[1.02rem]"
            >
              ARCHITECTURE &amp; CITY PLANNING
            </motion.p>

            {/* Supporting Statement */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 pt-6 border-t border-[#2A2D31] max-w-2xl"
            >
              <p className="text-base sm:text-lg lg:text-xl text-[#D8DAD8] font-light leading-relaxed">
                Architecture, statutory city planning, arbitration, and academic leadership shaped by two decades of professional practice.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-mono text-[#A5A7AA]">
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
                  Chengalpattu &amp; Pan-India Practice
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Editorial Bar */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 border-t border-[#2A2D31] flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="flex flex-col">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#D9383A] uppercase font-semibold">
              PRINCIPAL ARCHITECT &amp; CITY PLANNER
            </span>
            <span className="text-sm font-serif text-[#F2F2F0] font-medium tracking-wide">
              Ar. Nenmeli Jayaraman, MCP (IIT-KGP), B.Arch, LLB, COA, ITPI, IIA
            </span>
          </div>

          <a
            href="#design-ethos"
            className="group flex items-center gap-3 text-xs font-mono text-[#A5A7AA] hover:text-[#F2F2F0] transition-colors focus:outline-none"
          >
            <span className="tracking-[0.2em] uppercase text-[11px]">EXPLORE PORTFOLIO</span>
            <div className="w-8 h-8 rounded-none border border-[#2A2D31] flex items-center justify-center group-hover:border-[#D9383A] group-hover:text-[#D9383A] transition-all bg-[#17191C]/60">
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </section>

      {/* HALF-WIDTH CONTINUOUS LEFT-TO-RIGHT VISUAL MOTION SECTION */}
      <ContinuousImageMarquee />

      {/* CORE DESIGN ETHOS (DESIGN ↓ BUILD ↓ SUSTAIN) */}
      <section id="design-ethos" className="relative py-24 bg-[#111214] border-t border-[#2A2D31] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Vertical Sequential Design Ethos */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-6 h-[1.5px] bg-[#D9383A]" />
                  <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
                    CORE DESIGN ETHOS
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F2F2F0] uppercase tracking-tight">
                  Design Philosophy Sequence
                </h2>
              </div>

              {/* Step-wise Vertical Concept: DESIGN ↓ BUILD ↓ SUSTAIN */}
              <div className="space-y-4 pt-2">
                {ethosSteps.map((item, idx) => (
                  <React.Fragment key={item.title}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5, delay: idx * 0.15 }}
                      className="p-6 bg-[#1E2025] border border-[#2A2D31] hover:border-[#D9383A] transition-all duration-300 group shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-[#D9383A] font-semibold">
                          {item.phase}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-[#D9383A]" />
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F2F2F0] group-hover:text-[#D9383A] transition-colors tracking-wide">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-[#A5A7AA] font-normal leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>

                    {/* Architectural Downward Transition Arrow */}
                    {idx < ethosSteps.length - 1 && (
                      <div className="flex items-center justify-center py-1">
                        <div className="w-8 h-8 flex items-center justify-center border border-[#2A2D31] bg-[#1E2025] text-[#D9383A]">
                          <ArrowDown className="w-4 h-4 animate-bounce" />
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Right Column: Architectural Visual Reveal on Scroll */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden border border-[#2A2D31] bg-[#1E2025] shadow-lg group"
              >
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#17191C]">
                  <img
                    src="/images/architectural-detail.jpg"
                    alt="Monolithic architectural volume geometry and shadow articulation"
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 bg-[#1E2025] border-t border-[#2A2D31] flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#D9383A] uppercase block font-semibold">
                      ARCHITECTURAL FORM
                    </span>
                    <h4 className="font-serif text-base font-bold text-[#F2F2F0] mt-0.5">
                      Spatial Proportion &amp; Climatic Envelope
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-[#F2F2F0] border border-[#2A2D31] px-3 py-1 bg-[#111214] shrink-0">
                    EST. PRACTICE
                  </span>
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </section>

      {/* AI IN ARCHITECTURE / AI IN PLANNING SHOWCASE */}
      <section className="relative py-24 bg-[#17191C] border-t border-[#2A2D31] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Image with Clean Framing */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7 }}
                className="relative overflow-hidden border border-[#2A2D31] bg-[#1E2025] shadow-lg"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#111214]">
                  <img
                    src="/images/nenmeli-aerial.jpg"
                    alt="Aerial satellite planning view of Nenmeli Agraharam and residential layout"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-5 bg-[#1E2025] border-t border-[#2A2D31] flex items-center justify-between gap-2 text-xs font-mono">
                  <span className="text-[#F2F2F0] tracking-widest uppercase font-semibold">
                    <AiText text="AI IN ARCHITECTURE & PLANNING" />
                  </span>
                  <span className="text-[#A5A7AA] text-[10px]">COMPUTATIONAL SYNTHESIS</span>
                </div>
              </motion.div>
            </div>

            {/* AI Highlight Text Presentation */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#D9383A]" />
                <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
                  INTELLIGENT COMPUTATIONAL PRACTICE
                </span>
              </div>

              {/* Exact prominent AI phrases with Red A and I letters */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F2F2F0] leading-tight uppercase">
                <span className="block mb-2">
                  <AiText text="AI IN ARCHITECTURE" />
                </span>
                <span className="block text-[#A5A7AA]">
                  &amp; <AiText text="AI IN PLANNING" />
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#F2F2F0] font-normal leading-relaxed">
                Leveraging artificial intelligence, GIS spatial computing, algorithmic zoning simulations, and parametric modeling to elevate urban settlement blueprints and architectural performance.
              </p>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#1E2025] border border-[#2A2D31]">
                  <div className="flex items-center gap-2 mb-1.5 text-xs font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-[#D9383A]" />
                    <strong className="text-[#F2F2F0] tracking-wider uppercase font-serif">
                      <AiText text="AI IN ARCHITECTURE" />
                    </strong>
                  </div>
                  <p className="text-xs text-[#A5A7AA] font-normal leading-relaxed">
                    Optimizing building energy envelopes, generative layouts, daylight modeling, and structural efficiency.
                  </p>
                </div>

                <div className="p-4 bg-[#1E2025] border border-[#2A2D31]">
                  <div className="flex items-center gap-2 mb-1.5 text-xs font-mono">
                    <Compass className="w-3.5 h-3.5 text-[#D9383A]" />
                    <strong className="text-[#F2F2F0] tracking-wider uppercase font-serif">
                      <AiText text="AI IN PLANNING" />
                    </strong>
                  </div>
                  <p className="text-xs text-[#A5A7AA] font-normal leading-relaxed">
                    Demographic predictive modeling, spatial GIS cadastral analytics, traffic flow simulation, and statutory zoning.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* PRACTICE DIRECTORY (6 CARDS + CONTACT) */}
      <section id="practice-directory" className="relative py-24 bg-[#111214] border-t border-[#2A2D31]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-[1.5px] bg-[#D9383A]" />
                <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
                  PRACTICE DIRECTORY
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F2F2F0] uppercase tracking-tight">
                Explore The Practice
              </h2>
            </div>
            <p className="text-sm text-[#A5A7AA] max-w-md font-normal">
              Portfolio sections detailing statutory planning, architectural design, academic research, and verified credentials.
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
                  className="group relative p-8 bg-[#1E2025] border border-[#2A2D31] hover:border-[#D9383A] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#D9383A]/5 rounded-bl-full group-hover:bg-[#D9383A]/10 transition-colors" />

                  <div>
                    {/* Top Category Tag & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 rounded-none bg-[#111214] border border-[#2A2D31] flex items-center justify-center text-[#F2F2F0] group-hover:text-[#D9383A] group-hover:border-[#D9383A]/50 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 bg-[#111214] text-[#A5A7AA] border border-[#2A2D31] uppercase font-medium">
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#F2F2F0] group-hover:text-[#D9383A] transition-colors mb-2">
                      {card.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#A5A7AA] font-normal leading-relaxed">
                      {card.subtitle}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#2A2D31] flex items-center justify-between text-xs font-mono text-[#A5A7AA] group-hover:text-[#F2F2F0] transition-colors">
                    <span className="tracking-wider uppercase text-[11px] font-semibold">EXPLORE</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#D9383A]" />
                  </div>
                </Link>
              );
            })}

            {/* Direct Contact & Consultation Card */}
            <Link
              to="/contact"
              className="group p-8 bg-[#1E2025] border-2 border-[#D9383A]/70 hover:border-[#D9383A] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                <span className="text-[10px] font-mono px-2.5 py-1 bg-[#D9383A] text-[#F5F5F3] uppercase font-semibold inline-block mb-6">
                  Direct Advisory Channel
                </span>
                <h3 className="font-serif text-xl font-bold text-[#F2F2F0] group-hover:text-[#D9383A] transition-colors mb-2">
                  Contact &amp; Consultation
                </h3>
                <p className="text-xs sm:text-sm text-[#A5A7AA] font-normal leading-relaxed">
                  Engage Ar. Nenmeli Jayaraman for master planning advisory, architectural design, academic lectures, arbitration, or valuation.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#2A2D31] flex items-center justify-between text-xs font-mono text-[#D9383A] font-semibold">
                <span className="tracking-wider uppercase text-[11px]">OPEN CONTACT PAGE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* EXACT CALL TO ACTION "Let's create your dreams to reality" */}
      <section className="relative py-20 bg-[#17191C] border-t border-[#2A2D31]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#D9383A]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
                START A PROJECT
              </span>
              <span className="w-6 h-[1.5px] bg-[#D9383A]" />
            </div>

            {/* Exact Required CTA Text: "Let's create your dreams to reality" */}
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#F2F2F0] uppercase tracking-tight leading-tight">
              Let&apos;s create your dreams to reality
            </h2>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              {onOpenInquiry && (
                <button
                  onClick={onOpenInquiry}
                  className="px-8 py-4 bg-[#D9383A] hover:bg-[#E64A4D] text-[#F5F5F3] text-xs font-mono tracking-[0.2em] uppercase font-bold flex items-center gap-2 transition-all shadow-md"
                >
                  <span>Initiate Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
              <Link
                to="/contact"
                className="px-8 py-4 border border-[#2A2D31] hover:border-[#D9383A] text-[#F2F2F0] text-xs font-mono tracking-[0.2em] uppercase transition-colors bg-[#1E2025] font-semibold"
              >
                Contact Details
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};
