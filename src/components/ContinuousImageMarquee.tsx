import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface MarqueeItem {
  id: string;
  src: string;
  title: string;
  category: 'PROJECTS' | 'INTERIORS' | 'COLLEGE' | 'SITE INSPECTION';
  categoryLabel: string;
  cropClass?: string;
}

const marqueeItems: MarqueeItem[] = [
  {
    id: 'm-iit-palakkad',
    src: '/assets/portfolio/projects/IITPalakad_plan.jpeg',
    title: 'IIT Palakkad Master Plan',
    category: 'PROJECTS',
    categoryLabel: 'Institutional Master Plan',
    cropClass: 'object-cover object-[center_85%] scale-130'
  },
  {
    id: 'm-master-suite',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.40.jpeg',
    title: 'Executive Master Bedroom Suite',
    category: 'PROJECTS',
    categoryLabel: 'Residential Architecture',
    cropClass: 'object-cover object-center'
  },
  {
    id: 'm-living-salon',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.41%20(3).jpeg',
    title: 'Contemporary Living Lounge Salon',
    category: 'PROJECTS',
    categoryLabel: 'Residential Architecture',
    cropClass: 'object-cover object-center'
  },
  {
    id: 'm-heritage-door',
    src: '/assets/portfolio/projects/door.jpeg',
    title: 'Architectural Joinery Detail',
    category: 'PROJECTS',
    categoryLabel: 'Heritage & Conservation',
    cropClass: 'object-cover object-[center_36%] scale-112'
  },
  {
    id: 'm-corporate-reception',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.46%20(1).jpeg',
    title: 'Corporate Reception & Waiting Lounge',
    category: 'PROJECTS',
    categoryLabel: 'Commercial Architecture',
    cropClass: 'object-cover object-[center_28%] scale-115'
  },
  {
    id: 'm-nenmeli-residence',
    src: '/assets/portfolio/projects/nenmeli.jpeg',
    title: 'Nenmeli Residential Scheme',
    category: 'PROJECTS',
    categoryLabel: 'Residential Architecture',
    cropClass: 'object-cover object-center'
  },
  {
    id: 'm-interior-design',
    src: '/assets/portfolio/interiors/design.jpeg',
    title: 'Bespoke Interior Environment',
    category: 'INTERIORS',
    categoryLabel: 'Interior Architecture',
    cropClass: 'object-cover object-[center_40%] scale-126'
  },
  {
    id: 'm-office-workstation',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.47.jpeg',
    title: 'Integrated Workstation Array',
    category: 'PROJECTS',
    categoryLabel: 'Commercial Architecture',
    cropClass: 'object-cover object-[center_28%] scale-115'
  },
  {
    id: 'm-academic-lecture',
    src: '/assets/portfolio/college/prof_talk.jpeg',
    title: 'Department Academic Lecture',
    category: 'COLLEGE',
    categoryLabel: 'Academic Leadership',
    cropClass: 'object-cover object-center'
  },
  {
    id: 'm-site-inspection',
    src: '/assets/portfolio/site_inspection/site1.jpeg',
    title: 'Structural Site Inspection',
    category: 'SITE INSPECTION',
    categoryLabel: 'Field Engineering',
    cropClass: 'object-cover object-[center_15%] scale-135'
  },
  {
    id: 'm-residential-drawings',
    src: '/assets/portfolio/projects/resedential_house.png',
    title: 'Residential Working Drawings',
    category: 'PROJECTS',
    categoryLabel: 'Technical Sanction Plan',
    cropClass: 'object-cover object-center'
  },
  {
    id: 'm-field-visit',
    src: '/assets/portfolio/college/field_visit.jpeg',
    title: 'Student Architectural Field Visit',
    category: 'COLLEGE',
    categoryLabel: 'Studio Pedagogy',
    cropClass: 'object-cover object-center'
  }
];

// Duplicate sequence to make loop 100% mathematically seamless
const repeatedSequence = [...marqueeItems, ...marqueeItems];

export const ContinuousImageMarquee: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-16 bg-[#111214] border-t border-[#2A2D31] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D9383A] animate-pulse" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
                CONTINUOUS ARCHITECTURAL STREAM // LEFT → RIGHT
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F2F2F0] uppercase tracking-tight">
              Visual Monograph In Motion
            </h2>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#A5A7AA] hover:text-[#D9383A] uppercase transition-colors group"
          >
            <span>View Full Archive (32 Works)</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Marquee Viewport with Left/Right Edge Fade Mask */}
      <div className="relative w-full overflow-hidden">
        {/* Left Cinematic Fade Edge */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-[#111214] via-[#111214]/80 to-transparent z-20" />
        
        {/* Right Cinematic Fade Edge */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-[#111214] via-[#111214]/80 to-transparent z-20" />

        {/* Continuous Left-to-Right Moving Track */}
        <div className="animate-marquee-ltr flex items-center gap-5 sm:gap-6 py-2">
          {repeatedSequence.map((item, idx) => {
            return (
              <Link
                key={`${item.id}-${idx}`}
                to="/gallery"
                className="w-[280px] sm:w-[330px] md:w-[380px] aspect-[16/10] shrink-0 relative bg-[#17191C] border border-[#2A2D31] hover:border-[#D9383A]/70 overflow-hidden group shadow-xl transition-all duration-300 block"
              >
                {/* Image Container with Custom Cropping to hide bottom presentation labels */}
                <div className="w-full h-full overflow-hidden bg-[#111214]">
                  <img
                    src={item.src}
                    alt={`${item.title} — ${item.categoryLabel}`}
                    loading="lazy"
                    className={`w-full h-full ${item.cropClass || 'object-cover object-center'} group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-105`}
                  />
                </div>

                {/* Permanent Bottom Gradient & Editorial Text Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111214]/95 via-[#111214]/40 to-transparent flex flex-col justify-between p-4 sm:p-5 pointer-events-none">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] sm:text-[10px] font-mono tracking-widest px-2 py-0.5 bg-[#111214]/85 border border-[#2A2D31] text-[#D9383A] uppercase font-semibold">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#A5A7AA] opacity-0 group-hover:opacity-100 transition-opacity">
                      EXPLORE
                    </span>
                  </div>

                  {/* Bottom Captions (No technical filenames) */}
                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-[#A5A7AA] uppercase block mb-0.5">
                      {item.categoryLabel}
                    </span>
                    <h3 className="font-serif text-sm sm:text-base font-semibold text-[#F2F2F0] group-hover:text-[#D9383A] transition-colors leading-snug line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContinuousImageMarquee;
