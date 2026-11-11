import React, { useState } from 'react';
import { expertiseData } from '../data/expertiseData';
import { AiText } from './AiText';
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

export const Expertise: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'all' | 'Urban Planning' | 'Architecture' | 'Academic & Research'>('all');

  const filteredData = activeTab === 'all'
    ? expertiseData
    : expertiseData.filter((item) => item.category === activeTab);

  return (
    <section id="expertise" className="relative py-28 sm:py-36 bg-[#111214] border-t border-[#2A2D31]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1.5px] bg-[#D9383A]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">EXPERTISE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F2F2F0] leading-tight uppercase">
              Areas of Practice &amp; Academic Focus
            </h2>
            <p className="mt-4 text-[#A5A7AA] max-w-2xl text-sm sm:text-base font-normal">
              Disciplines documented across statutory master planning consultancy, private practice, and architectural teaching curricula.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'ALL DOMAINS (10)' },
              { id: 'Urban Planning', label: 'URBAN PLANNING & GIS' },
              { id: 'Architecture', label: 'ARCHITECTURE & TECH' },
              { id: 'Academic & Research', label: 'ACADEMIC & THEORY' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase transition-all duration-200 border ${
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

        {/* Master Planning Featured Banner */}
        <div className="relative mb-16 border border-[#2A2D31] bg-[#1E2025] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono text-[#D9383A] tracking-widest uppercase font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#D9383A]" />
                <span>CORE SPECIALIZATION</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F2F2F0]">
                GIS-Driven Regional &amp; City Master Plans
              </h3>
              <p className="text-sm sm:text-base text-[#A5A7AA] leading-relaxed">
                Integrating multi-layered spatial data, statutory land-use zoning, development control regulations (DCPR), and infrastructure frameworks for statutory urban authorities.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <span className="px-2.5 py-1 bg-[#111214] border border-[#2A2D31] text-xs font-mono text-[#F2F2F0]">
                  AMRUT 2.0 Sub-Scheme
                </span>
                <span className="px-2.5 py-1 bg-[#111214] border border-[#2A2D31] text-xs font-mono text-[#F2F2F0]">
                  JNPA Master Plan (Navi Mumbai)
                </span>
                <span className="px-2.5 py-1 bg-[#111214] border border-[#2A2D31] text-xs font-mono text-[#F2F2F0]">
                  DTCP &amp; Municipal Bylaws
                </span>
              </div>
            </div>
            <div className="lg:col-span-5 h-64 lg:h-full relative overflow-hidden">
              <img
                src="/images/urban-planning.jpg"
                alt="Urban planning diagram and GIS zoning schematic"
                className="w-full h-full object-cover object-center grayscale contrast-125 hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E2025] via-transparent to-transparent hidden lg:block" />
            </div>
          </div>
        </div>

        {/* 10 Disciplines Editorial Numbered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {filteredData.map((item, index) => {
            const Icon = iconMap[item.iconName] || Map;
            const isHovered = selectedDomain === index;

            return (
              <div
                key={item.number}
                onMouseEnter={() => setSelectedDomain(index)}
                className={`p-6 sm:p-8 border transition-all duration-300 relative group cursor-pointer ${
                  isHovered
                    ? 'bg-[#1E2025] border-[#D9383A] shadow-md'
                    : 'bg-[#1E2025]/90 border-[#2A2D31] hover:border-[#F2F2F0]/50'
                }`}
              >
                {/* Header Row: Number + Category Tag + Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#D9383A] tracking-widest font-semibold">
                      /{item.number}
                    </span>
                    <span className="text-[11px] font-mono tracking-widest text-[#A5A7AA] uppercase">
                      {item.category}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-none border border-[#2A2D31] bg-[#111214] flex items-center justify-center text-[#A5A7AA] group-hover:text-[#D9383A] group-hover:border-[#D9383A]/50 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-[#F2F2F0] mb-3 group-hover:text-[#D9383A] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#A5A7AA] leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Key Subtopics / Syllabus Topics */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-[#2A2D31]/60">
                  {item.keyTopics.map((topic, i) => {
                    const isAiTopic = topic.includes('AI IN') || topic.includes('AI in');
                    return (
                      <span
                        key={i}
                        className={`text-[11px] font-mono px-2 py-0.5 border ${
                          isAiTopic
                            ? 'bg-[#111214] text-[#F2F2F0] border-[#D9383A] font-semibold'
                            : 'bg-[#111214] text-[#A5A7AA] border-[#2A2D31]'
                        }`}
                      >
                        {isAiTopic ? <AiText text={topic} /> : topic}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
