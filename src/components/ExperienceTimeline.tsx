import React, { useState } from 'react';
import { experienceData } from '../data/experienceData';
import type { ExperienceCategory } from '../types/portfolio';
import {
  Briefcase,
  GraduationCap,
  Compass,
  Calendar,
  MapPin,
  CheckCircle2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ExperienceCategory>('all');
  const [expandedId, setExpandedId] = useState<string | null>(experienceData[0].id);

  const filteredExperiences = activeFilter === 'all'
    ? experienceData
    : experienceData.filter((item) => item.category === activeFilter);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'planning':
        return {
          label: 'Master Planning / Consultancy',
          icon: Compass,
          color: 'text-[#D9383A] border-[#D9383A]/35 bg-[#D9383A]/10'
        };
      case 'academic':
        return {
          label: 'Academic Leadership / Teaching',
          icon: GraduationCap,
          color: 'text-[#F2F2F0] border-[#2A2D31] bg-[#17191C]'
        };
      case 'practice':
        return {
          label: 'Architectural Practice',
          icon: Briefcase,
          color: 'text-[#F2F2F0] border-[#2A2D31] bg-[#111214]'
        };
      default:
        return {
          label: 'Professional Work',
          icon: Briefcase,
          color: 'text-[#A5A7AA] border-[#2A2D31] bg-[#111214]'
        };
    }
  };

  return (
    <section id="work" className="relative py-28 sm:py-36 bg-[#111214] border-t border-[#2A2D31]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header & Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1.5px] bg-[#D9383A]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">CAREER RECORD</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F2F2F0] leading-tight uppercase">
              Selected Professional Experience
            </h2>
            <p className="mt-4 text-[#A5A7AA] max-w-2xl text-sm sm:text-base font-normal">
              Comprehensive chronological timeline of senior urban planning consultancies, institutional leadership roles, and architectural practice tenures.
            </p>
          </div>

          {/* Timeline Category Filters */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'ALL ROLES (10)' },
              { id: 'planning', label: 'URBAN PLANNING & CONSULTANCY' },
              { id: 'academic', label: 'ACADEMIC & INSTITUTIONAL' },
              { id: 'practice', label: 'ARCHITECTURAL PRACTICE' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as ExperienceCategory)}
                className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-200 border ${
                  activeFilter === filter.id
                    ? 'bg-[#D9383A] text-[#F5F5F3] font-semibold border-[#D9383A]'
                    : 'bg-[#1E2025] text-[#A5A7AA] border-[#2A2D31] hover:text-[#F2F2F0] hover:border-[#F2F2F0]/50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Items List */}
        <div className="relative border-l border-[#2A2D31] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-8">
          {filteredExperiences.map((item) => {
            const isExpanded = expandedId === item.id;
            const badge = getCategoryBadge(item.category);
            const BadgeIcon = badge.icon;

            return (
              <div
                key={item.id}
                className="relative group transition-all"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-3 h-3 rounded-full bg-[#111214] border-2 border-[#D9383A] group-hover:bg-[#D9383A] transition-colors" />

                {/* Experience Card */}
                <div
                  className={`p-6 sm:p-8 border transition-all duration-300 ${
                    isExpanded
                      ? 'bg-[#1E2025] border-[#D9383A] shadow-md'
                      : 'bg-[#1E2025]/90 border-[#2A2D31] hover:border-[#D9383A]/50 hover:bg-[#1E2025]'
                  }`}
                >
                  {/* Top Metadata Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-none text-[11px] font-mono uppercase tracking-wider border ${badge.color}`}>
                        <BadgeIcon className="w-3 h-3" />
                        {badge.label}
                      </span>
                      {item.highlightBadge && (
                        <span className="text-[11px] font-mono px-2.5 py-1 bg-[#111214] text-[#F2F2F0] border border-[#2A2D31] uppercase font-medium">
                          {item.highlightBadge}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-[#D9383A] font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Main Role & Institution */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 cursor-pointer" onClick={() => toggleExpand(item.id)}>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F2F2F0] group-hover:text-[#D9383A] transition-colors">
                        {item.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-sm sm:text-base text-[#A5A7AA]">
                        <span className="font-medium text-[#F2F2F0]">{item.institution}</span>
                        {item.consultancyOrAffiliation && (
                          <span className="text-xs font-mono text-[#A5A7AA]">
                            ({item.consultancyOrAffiliation})
                          </span>
                        )}
                        {item.location && (
                          <span className="flex items-center gap-1 text-xs font-mono text-[#A5A7AA]">
                            <MapPin className="w-3 h-3 text-[#D9383A]" />
                            {item.location}
                          </span>
                        )}
                      </div>

                      {item.additionalResponsibility && (
                        <div className="mt-2 text-xs font-mono text-[#D9383A] bg-[#D9383A]/10 border border-[#D9383A]/25 px-3 py-1 inline-block font-medium">
                          ★ {item.additionalResponsibility}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(item.id);
                      }}
                      className="self-start p-2 border border-[#2A2D31] bg-[#111214] text-[#A5A7AA] hover:text-[#F2F2F0] hover:border-[#F2F2F0]/50 transition-colors focus:outline-none"
                      aria-label="Toggle details"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Expandable Key Responsibilities & Focus */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-[#2A2D31] space-y-4 animate-fade-in">
                      <h4 className="text-xs font-mono tracking-[0.2em] text-[#A5A7AA] uppercase font-semibold">
                        Scope of Work &amp; Project Deliverables:
                      </h4>
                      <ul className="space-y-2.5">
                        {item.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-[#F2F2F0] leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-[#D9383A] shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {item.subjectsOrFocus && item.subjectsOrFocus.length > 0 && (
                        <div className="pt-4 mt-4 border-t border-[#2A2D31]/60 flex flex-wrap items-center gap-2">
                          <span className="text-xs font-mono text-[#A5A7AA]">Key Focus:</span>
                          {item.subjectsOrFocus.map((subject, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[11px] font-mono px-2 py-0.5 bg-[#111214] text-[#F2F2F0] border border-[#2A2D31]"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
