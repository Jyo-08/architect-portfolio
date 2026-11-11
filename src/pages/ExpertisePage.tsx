import React, { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { expertiseData } from '../data/expertiseData';
import { AiText } from '../components/AiText';
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

// Image crop helper for precise visual framing
const getImageCropClass = (imageSrc: string | null | undefined): string => {
  if (!imageSrc) return 'object-cover object-center';
  if (imageSrc.includes('door.jpeg')) return 'object-cover object-[center_36%] scale-110';
  if (imageSrc.includes('IITPalakad_plan.jpeg')) return 'object-cover object-[center_85%] scale-130';
  if (imageSrc.includes('site1.jpeg') || imageSrc.includes('site2.jpeg')) return 'object-cover object-[center_15%] scale-135';
  if (imageSrc.includes('design.jpeg')) return 'object-cover object-[center_40%] scale-125';
  return 'object-cover object-center';
};

export const ExpertisePage: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'all' | 'City Planning' | 'Architecture' | 'Academic & Research'>('all');

  const filteredData = activeTab === 'all'
    ? expertiseData
    : expertiseData.filter((item) => item.category === activeTab);

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#111214] pt-32 pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Landing Header: First Letter E in Red, NO FULL STOP */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 pb-8 border-b border-[#2A2D31]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-4"
              >
                <span className="w-6 h-[1.5px] bg-[#D9383A]" />
                <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
                  EXPERTISE &amp; DISCIPLINES
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#F2F2F0] leading-[1.05] uppercase tracking-tight"
                aria-label="Expertise"
              >
                <span className="text-[#D9383A] inline-block">E</span>
                <span>XPERTISE</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-base sm:text-lg lg:text-xl text-[#A5A7AA] max-w-2xl font-normal"
              >
                Documented specializations spanning statutory master planning, private practice, AI technology, and architectural studio pedagogy.
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
                      : 'bg-[#1E2025] text-[#A5A7AA] border-[#2A2D31] hover:text-[#F2F2F0] hover:border-[#F2F2F0]/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 10 Disciplines Editorial Numbered Grid with Linked Cropped Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredData.map((item, index) => {
              const Icon = iconMap[item.iconName] || Map;
              const isHovered = selectedDomain === index;
              const cropClass = getImageCropClass(item.image);

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => setSelectedDomain(index)}
                  className={`p-6 sm:p-8 border transition-all duration-300 relative group flex flex-col justify-between shadow-sm ${
                    isHovered
                      ? 'bg-[#1E2025] border-[#D9383A] shadow-md'
                      : 'bg-[#1E2025]/90 border-[#2A2D31] hover:border-[#F2F2F0]/45'
                  }`}
                >
                  <div>
                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#D9383A] tracking-widest font-semibold">
                          /{item.number}
                        </span>
                        <span className="text-[11px] font-mono tracking-widest text-[#A5A7AA] uppercase font-medium">
                          {item.category}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-none border border-[#2A2D31] bg-[#111214] flex items-center justify-center text-[#A5A7AA] group-hover:text-[#D9383A] group-hover:border-[#D9383A]/50 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F2F2F0] mb-2.5 group-hover:text-[#D9383A] transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#A5A7AA] leading-relaxed mb-5">
                      {item.description}
                    </p>

                    {/* Relevant Photo Attachment (Rendered ONLY when non-null with precise crop) */}
                    {item.image && (
                      <div className="mb-5 overflow-hidden border border-[#2A2D31] bg-[#17191C] relative group/img aspect-[16/9]">
                        <img
                          src={item.image}
                          alt={item.imageAlt || item.title}
                          loading="lazy"
                          className={`w-full h-full ${cropClass} group-hover/img:scale-103 transition-transform duration-500`}
                        />
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#111214]/90 via-[#111214]/35 to-transparent p-3 flex items-center justify-between pointer-events-none">
                          <span className="text-[10px] font-mono tracking-wider text-[#F5F5F3] uppercase">
                            {item.title} Field Record
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D9383A]" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Key Subtopics with AI Highlighting */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#2A2D31]/60">
                    {item.keyTopics.map((topic, i) => {
                      const isAiTopic = topic.includes('AI IN');
                      return (
                        <span
                          key={i}
                          className={`text-[11px] font-mono px-2 py-0.5 border ${
                            isAiTopic
                              ? 'bg-[#111214] border-[#D9383A] text-[#F2F2F0] font-semibold'
                              : 'bg-[#111214] text-[#A5A7AA] border-[#2A2D31]'
                          }`}
                        >
                          {isAiTopic ? <AiText text={topic} /> : topic}
                        </span>
                      );
                    })}
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
