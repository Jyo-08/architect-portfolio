import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { experienceData } from '../data/experienceData';
import { ongoingProjectsData } from '../data/ongoingProjectsData';
import type { ExperienceCategory } from '../types/portfolio';
import {
  Briefcase,
  GraduationCap,
  Compass,
  Calendar,
  MapPin,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  FileText,
  ArrowRight,
  Image as ImageIcon
} from 'lucide-react';
import { motion } from 'framer-motion';

export const WorkPage: React.FC = () => {
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
          label: 'City Planning & Consultancy',
          icon: Compass,
          color: 'text-[#D9383A] border-[#D9383A]/40 bg-[#D9383A]/10'
        };
      case 'academic':
        return {
          label: 'Academic Leadership & Pedagogy',
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
    <PageTransition>
      <div className="min-h-screen bg-[#111214] pt-32 pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Page Eyebrow & Main Editorial Heading */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 pb-8 border-b border-[#2A2D31]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-4"
              >
                <span className="w-6 h-[1.5px] bg-[#D9383A]" />
                <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
                  SELECTED WORK &amp; TIMELINE
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#F2F2F0] leading-[1.05] uppercase tracking-tight"
                aria-label="Work"
              >
                <span className="text-[#F2F2F0]">W</span>
                <span className="text-[#D9383A]">O</span>
                <span className="text-[#F2F2F0]">R</span>
                <span className="text-[#D9383A]">K</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-base sm:text-lg lg:text-xl text-[#A5A7AA] max-w-2xl font-normal"
              >
                Two decades of documented leadership spanning statutory city master planning, institutional governance, and architectural practice.
              </motion.p>
            </div>

            {/* Timeline Category Filters */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'ALL ROLES (10)' },
                { id: 'planning', label: 'CITY PLANNING & CONSULTANCY' },
                { id: 'academic', label: 'ACADEMIC LEADERSHIP' },
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

          {/* Featured Key Project Banner: JNPA & AMRUT 2.0 */}
          <div className="mb-16 p-8 sm:p-10 bg-[#1E2025] border border-[#2A2D31] relative overflow-hidden shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D9383A] tracking-widest uppercase font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#D9383A]" />
                  <span>STATUTORY MASTER PLANNING INITIATIVES</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F2F2F0]">
                  GIS-Based City Master Plans &amp; Port Infrastructure
                </h2>
                <p className="text-sm sm:text-base text-[#A5A7AA] font-normal leading-relaxed">
                  Key advisory and leadership contributions include the Jawaharlal Nehru Port Authority (JNPA) Master Plan support team (DCPR preparation) and AMRUT 2.0 GIS-based Master Plans for identified cities in Tamil Nadu.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-[#111214] border border-[#2A2D31] text-xs font-mono text-[#F2F2F0] font-medium">
                    JNPA Navi Mumbai (Voyants)
                  </span>
                  <span className="px-3 py-1 bg-[#111214] border border-[#2A2D31] text-xs font-mono text-[#F2F2F0] font-medium">
                    AMRUT 2.0 Sub-Scheme Packages 1 &amp; 5
                  </span>
                  <span className="px-3 py-1 bg-[#111214] border border-[#2A2D31] text-xs font-mono text-[#F2F2F0] font-medium">
                    MIDAS Principal In-Charge
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#2A2D31] pt-6 lg:pt-0 lg:pl-8 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#F2F2F0] uppercase font-semibold">
                  <FileText className="w-4 h-4 text-[#D9383A]" />
                  <span>Statutory Standards</span>
                </div>
                <p className="text-xs text-[#A5A7AA] leading-relaxed">
                  All master plans integrate spatial zoning, cadastral overlays, traffic and transit capacity modeling, and statutory Development Control &amp; Promotion Regulations (DCPR).
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Items List */}
          <div className="relative border-l border-[#2A2D31] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-8">
            {filteredExperiences.map((item, idx) => {
              const isExpanded = expandedId === item.id;
              const badge = getCategoryBadge(item.category);
              const BadgeIcon = badge.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="relative group transition-all"
                >
                  {/* Timeline Dot Indicator */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-3 h-3 rounded-full bg-[#111214] border-2 border-[#D9383A] group-hover:bg-[#D9383A] transition-colors" />

                  {/* Experience Card */}
                  <div
                    className={`p-6 sm:p-8 border transition-all duration-300 ${
                      isExpanded
                        ? 'bg-[#1E2025] border-[#D9383A] shadow-md'
                        : 'bg-[#1E2025]/90 border-[#2A2D31] hover:border-[#D9383A]/60 hover:bg-[#1E2025]'
                    }`}
                  >
                    {/* Top Metadata Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider border font-medium ${badge.color}`}>
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
                    <div
                      className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 cursor-pointer"
                      onClick={() => toggleExpand(item.id)}
                    >
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
                          {item.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-3 text-sm text-[#F2F2F0] leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-[#D9383A] shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>

                        {item.subjectsOrFocus && item.subjectsOrFocus.length > 0 && (
                          <div className="pt-4 mt-4 border-t border-[#2A2D31]/60 flex flex-wrap items-center gap-2">
                            <span className="text-xs font-mono text-[#A5A7AA]">Core Subject Areas:</span>
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
                </motion.div>
              );
            })}
          </div>

          {/* Ongoing Projects Section: Heading NO full stop */}
          <div className="mt-24 pt-16 border-t border-[#2A2D31]">
            <div className="max-w-4xl mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-[1.5px] bg-[#D9383A]" />
                <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
                  ACTIVE COMMISSIONS // PRACTICE PIPELINE
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F2F2F0] uppercase tracking-tight">
                <span className="text-[#D9383A] inline-block">O</span>
                <span>NGOING PROJECTS</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#A5A7AA] font-normal max-w-2xl leading-relaxed">
                Active architectural commissions, land development layouts, and infrastructure proposals currently in progress.
              </p>
            </div>

            {/* 6 Ongoing Projects Editorial Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ongoingProjectsData.map((project, index) => (
                <motion.div
                  key={project.number}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group p-6 sm:p-8 bg-[#1E2025] border border-[#2A2D31] hover:border-[#D9383A]/60 transition-all duration-300 flex flex-col justify-between relative overflow-hidden shadow-sm"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#D9383A]/5 rounded-bl-full group-hover:bg-[#D9383A]/10 transition-colors" />

                  <div>
                    {/* Index & Status Row */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-xs text-[#D9383A] tracking-widest font-semibold">
                        /{project.number}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-[#111214] text-[#A5A7AA] border border-[#2A2D31] uppercase font-medium">
                        {project.tag}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F2F2F0] group-hover:text-[#D9383A] transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  {/* Bottom Indicator */}
                  <div className="mt-6 pt-4 border-t border-[#2A2D31] flex items-center justify-between text-xs font-mono text-[#A5A7AA]">
                    <span className="text-[11px] tracking-wider uppercase text-[#A5A7AA]">Current Practice</span>
                    <span className="text-[#D9383A] group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Link to Dedicated Gallery Page */}
          <div className="mt-20 p-8 border border-[#2A2D31] bg-[#1E2025] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#111214] border border-[#2A2D31] flex items-center justify-center text-[#D9383A]">
                <ImageIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#D9383A] tracking-widest uppercase block font-semibold">
                  PHOTOGRAPHIC ARCHIVE
                </span>
                <h3 className="font-serif text-xl font-bold text-[#F2F2F0]">
                  Explore Dedicated Visual Gallery
                </h3>
              </div>
            </div>

            <Link
              to="/gallery"
              className="px-6 py-3.5 bg-[#D9383A] hover:bg-[#E64A4D] text-[#F5F5F3] font-mono text-xs tracking-widest uppercase font-semibold flex items-center gap-2 transition-colors shadow-md shadow-[#D9383A]/20"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};
