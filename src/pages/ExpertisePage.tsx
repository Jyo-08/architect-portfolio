import React, { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { expertiseData } from '../data/expertiseData';
import {
  Map,
  Building2,
  Layers,
  Home,
  Compass,
  Landmark,
  BookOpen,
  Wrench,
  PenTool,
  GraduationCap
} from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.ElementType> = {
  Map,
  Building2,
  Layers,
  Home,
  Compass,
  Landmark,
  BookOpen,
  Wrench,
  PenTool,
  GraduationCap
};

export const ExpertisePage: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'all' | 'City Planning' | 'Architecture' | 'Academic & Research'>('all');

  const filteredData = activeTab === 'all'
    ? expertiseData
    : expertiseData.filter((item) => item.category === activeTab);

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0B0D12] pt-32 pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Landing Header: First Letter E in Red */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 pb-8 border-b border-white/10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-4"
              >
                <span className="w-6 h-[1.5px] bg-[#D9383A]" />
                <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
                  CHAPTER 02 // EXPERTISE &amp; DISCIPLINES
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#F5F5F3] leading-[1.05] uppercase tracking-tight"
              >
                <span className="text-[#D9383A] inline-block">E</span>
                <span>XPERTISE.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-base sm:text-lg lg:text-xl text-[#CDD0D8] max-w-2xl font-light"
              >
                Documented fields across statutory city planning consultancy, GIS master planning, private practice, and architectural teaching curricula.
              </motion.p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'ALL DOMAINS (10)' },
                { id: 'City Planning', label: 'CITY PLANNING & GIS' },
                { id: 'Architecture', label: 'ARCHITECTURE & TECH' },
                { id: 'Academic & Research', label: 'ACADEMIC & THEORY' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`px-3.5 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-200 border ${
                    activeTab === tab.id
                      ? 'bg-[#D9383A] text-[#F5F5F3] font-semibold border-[#D9383A]'
                      : 'bg-[#111319]/80 text-[#9AA0AC] border-white/10 hover:text-[#F5F5F3] hover:border-white/25'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Master Planning Featured Banner */}
          <div className="relative mb-16 border border-white/10 bg-[#111319] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 p-8 sm:p-12 space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono text-[#D9383A] tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#D9383A]" />
                  <span>CORE SPECIALIZATION &amp; METHODOLOGY</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F5F3]">
                  GIS-Driven Regional &amp; City Master Plans
                </h2>
                <p className="text-sm sm:text-base text-[#CDD0D8] font-light leading-relaxed">
                  Integrating multi-layered spatial data, statutory land-use zoning, development control regulations (DCPR), and infrastructure frameworks for statutory urban authorities.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-[#1A1D26] border border-white/10 text-xs font-mono text-[#CDD0D8]">
                    AMRUT 2.0 Sub-Scheme
                  </span>
                  <span className="px-3 py-1 bg-[#1A1D26] border border-white/10 text-xs font-mono text-[#CDD0D8]">
                    JNPA Master Plan (Navi Mumbai)
                  </span>
                  <span className="px-3 py-1 bg-[#1A1D26] border border-white/10 text-xs font-mono text-[#CDD0D8]">
                    DTCP &amp; Municipal Bylaws
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5 h-64 lg:h-full relative overflow-hidden">
                <img
                  src="/images/urban-planning.jpg"
                  alt="City planning schematic and GIS zoning map"
                  className="w-full h-full object-cover object-center grayscale contrast-125 hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#111319] via-transparent to-transparent hidden lg:block" />
              </div>
            </div>
          </div>

          {/* 10 Disciplines Editorial Numbered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredData.map((item, index) => {
              const Icon = iconMap[item.iconName] || Map;
              const isHovered = selectedDomain === index;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => setSelectedDomain(index)}
                  className={`p-6 sm:p-8 border transition-all duration-300 relative group cursor-pointer ${
                    isHovered
                      ? 'bg-[#141720] border-[#D9383A]/60 shadow-2xl'
                      : 'bg-[#111319]/70 border-white/8 hover:border-white/20'
                  }`}
                >
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#D9383A] tracking-widest font-semibold">
                        /{item.number}
                      </span>
                      <span className="text-[11px] font-mono tracking-widest text-[#9AA0AC] uppercase">
                        {item.category}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-none border border-white/10 bg-[#1A1D26] flex items-center justify-center text-[#9AA0AC] group-hover:text-[#D9383A] group-hover:border-[#D9383A]/40 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-[#F5F5F3] mb-3 group-hover:text-[#D9383A] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#CDD0D8] font-light leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Key Subtopics */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-white/8">
                    {item.keyTopics.map((topic, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-2 py-0.5 bg-[#1A1D26] text-[#9AA0AC] border border-white/5"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
