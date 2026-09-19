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
                Documented specializations spanning statutory master planning, private practice, and architectural studio pedagogy.
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

          {/* 10 Disciplines Editorial Numbered Grid with Linked Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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
                  className={`p-6 sm:p-8 border transition-all duration-300 relative group flex flex-col justify-between ${
                    isHovered
                      ? 'bg-[#141720] border-[#D9383A]/60 shadow-2xl'
                      : 'bg-[#111319]/70 border-white/8 hover:border-white/20'
                  }`}
                >
                  <div>
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
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F5F3] mb-2.5 group-hover:text-[#D9383A] transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#CDD0D8] font-light leading-relaxed mb-5">
                      {item.description}
                    </p>

                    {/* Relevant Photo Attachment (Rendered ONLY when non-null) */}
                    {item.image && (
                      <div className="mb-5 overflow-hidden border border-white/10 bg-[#090A0D] relative group/img">
                        <img
                          src={item.image}
                          alt={item.imageAlt || item.title}
                          loading="lazy"
                          className="w-full h-44 sm:h-48 object-cover object-center group-hover/img:scale-103 transition-transform duration-500 brightness-95 group-hover/img:brightness-105"
                        />
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#090A0D]/90 via-[#090A0D]/40 to-transparent p-3 flex items-center justify-between">
                          <span className="text-[10px] font-mono tracking-wider text-[#CDD0D8] uppercase">
                            {item.title} Field Record
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D9383A]" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Key Subtopics */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/8">
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
