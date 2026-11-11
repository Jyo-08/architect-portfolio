import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { galleryImages } from '../data/galleryData';

interface MarqueeItem {
  id: string;
  src: string;
  title: string;
  categoryLabel: string;
  cropClass?: string;
}

const marqueeItems: MarqueeItem[] = [
  {
    id: 'm-iit-palakkad',
    src: '/assets/portfolio/projects/IITPalakad_plan.jpeg',
    title: 'IIT Palakkad Master Plan',
    categoryLabel: 'Institutional Master Plan',
    cropClass: 'object-cover object-[center_85%] scale-130'
  },
  {
    id: 'm-master-suite',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.40.jpeg',
    title: 'Executive Master Bedroom Suite',
    categoryLabel: 'Residential Architecture',
    cropClass: 'object-cover object-center'
  },
  {
    id: 'm-living-salon',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.41%20(3).jpeg',
    title: 'Contemporary Living Lounge Salon',
    categoryLabel: 'Residential Architecture',
    cropClass: 'object-cover object-center'
  },
  {
    id: 'm-heritage-door',
    src: '/assets/portfolio/projects/door.jpeg',
    title: 'Architectural Joinery Detail',
    categoryLabel: 'Heritage & Conservation',
    cropClass: 'object-cover object-[center_36%] scale-112'
  },
  {
    id: 'm-corporate-reception',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.46%20(1).jpeg',
    title: 'Corporate Reception & Waiting Lounge',
    categoryLabel: 'Commercial Architecture',
    cropClass: 'object-cover object-[center_28%] scale-115'
  },
  {
    id: 'm-nenmeli-residence',
    src: '/assets/portfolio/projects/nenmeli.jpeg',
    title: 'Nenmeli Residential Scheme',
    categoryLabel: 'Residential Architecture',
    cropClass: 'object-cover object-center'
  },
  {
    id: 'm-interior-design',
    src: '/assets/portfolio/interiors/design.jpeg',
    title: 'Bespoke Interior Environment',
    categoryLabel: 'Interior Architecture',
    cropClass: 'object-cover object-[center_40%] scale-126'
  },
  {
    id: 'm-office-workstation',
    src: '/assets/portfolio/projects/WhatsApp%20Image%202026-11-02%20at%2017.28.47.jpeg',
    title: 'Integrated Workstation Array',
    categoryLabel: 'Commercial Architecture',
    cropClass: 'object-cover object-[center_28%] scale-115'
  },
  {
    id: 'm-academic-lecture',
    src: '/assets/portfolio/college/prof_talk.jpeg',
    title: 'Department Academic Lecture',
    categoryLabel: 'Academic Leadership',
    cropClass: 'object-cover object-center'
  },
  {
    id: 'm-site-inspection',
    src: '/assets/portfolio/site_inspection/site1.jpeg',
    title: 'Structural Site Inspection',
    categoryLabel: 'Field Engineering',
    cropClass: 'object-cover object-[center_15%] scale-135'
  },
  {
    id: 'm-residential-drawings',
    src: '/assets/portfolio/projects/resedential_house.png',
    title: 'Residential Working Drawings',
    categoryLabel: 'Technical Sanction Plan',
    cropClass: 'object-cover object-center'
  },
  {
    id: 'm-field-visit',
    src: '/assets/portfolio/college/field_visit.jpeg',
    title: 'Student Architectural Field Visit',
    categoryLabel: 'Studio Pedagogy',
    cropClass: 'object-cover object-center'
  }
];

const renderMarqueeCard = (item: MarqueeItem, keyPrefix: string) => (
  <Link
    key={`${keyPrefix}-${item.id}`}
    to="/gallery"
    className="w-[220px] sm:w-[250px] lg:w-[270px] shrink-0 bg-[#1E2025] border border-[#2A2D31] hover:border-[#D9383A] overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
  >
    {/* Image Container with Clean Natural Aspect Framing */}
    <div className="w-full aspect-[16/10] overflow-hidden bg-[#17191C]">
      <img
        src={item.src}
        alt={`${item.title} — ${item.categoryLabel}`}
        loading="eager"
        className={`w-full h-full ${item.cropClass || 'object-cover object-center'} group-hover:scale-105 transition-transform duration-700`}
      />
    </div>

    {/* Editorial Caption Footer (No "PROJECTS" label) */}
    <div className="p-3 bg-[#1E2025] border-t border-[#2A2D31]">
      <span className="text-[10px] font-mono tracking-wider text-[#D9383A] uppercase font-semibold block mb-0.5 truncate">
        {item.categoryLabel}
      </span>
      <h3 className="font-serif text-xs sm:text-sm font-bold text-[#F2F2F0] group-hover:text-[#D9383A] transition-colors leading-snug line-clamp-1">
        {item.title}
      </h3>
    </div>
  </Link>
);

export const ContinuousImageMarquee: React.FC = () => {
  return (
    <section
      id="visual-motion"
      className="relative py-12 sm:py-16 bg-[#17191C] border-t border-[#2A2D31] overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Balanced 50/50 Editorial + Half-Width Visual Motion Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left 50%: Practice Focus Statement & Archive CTA */}
          <div className="md:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D9383A] animate-pulse" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
                PORTFOLIO ARCHIVE IN MOTION
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F2F2F0] uppercase tracking-tight leading-tight">
              Visual Monograph &amp; Built Environments
            </h2>

            <p className="text-sm sm:text-base text-[#A5A7AA] font-normal leading-relaxed max-w-xl">
              Selected architectural commissions, interior spaces, master planning layouts, studio pedagogy, and on-site engineering inspections curated across our active consultancy record.
            </p>

            <div className="pt-2">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#1E2025] border border-[#2A2D31] hover:border-[#D9383A] text-xs font-mono tracking-[0.16em] text-[#F2F2F0] hover:text-[#D9383A] uppercase font-semibold transition-all group shadow-sm"
              >
                <span>Explore Full Archive ({galleryImages.length} Works)</span>
                <ArrowRight className="w-4 h-4 text-[#D9383A] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right 50%: Half-Width Framed Continuous Left-to-Right Marquee */}
          <div className="md:col-span-6 w-full">
            <div
              data-testid="marquee-viewport"
              className="relative w-full overflow-hidden border border-[#2A2D31] bg-[#111214] py-3 sm:py-4 shadow-md"
            >
              {/* Soft Left & Right Cement-Grey Fade Edges */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-4 sm:w-6 bg-gradient-to-r from-[#111214]/90 via-[#111214]/45 to-transparent z-20" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-4 sm:w-6 bg-gradient-to-l from-[#111214]/90 via-[#111214]/45 to-transparent z-20" />

              {/* Continuous Left-to-Right Moving Track (Exact Equal Halves, Begins at First Image) */}
              <div className="animate-marquee-ltr py-1">
                <div className="flex items-stretch shrink-0 gap-4 pr-4">
                  {marqueeItems.map((item) => renderMarqueeCard(item, 'set-a'))}
                </div>
                <div className="flex items-stretch shrink-0 gap-4 pr-4" aria-hidden="true">
                  {marqueeItems.map((item) => renderMarqueeCard(item, 'set-b'))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContinuousImageMarquee;
