import React from 'react';
import { ArrowUp, ArrowUpRight, MapPin, Mail, ShieldCheck, Phone } from 'lucide-react';

interface ContactFooterProps {
  onOpenInquiry: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenInquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#17191C] border-t border-[#2A2D31] pt-28 pb-16 overflow-hidden">
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Editorial Invitation Header */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-6 h-[1.5px] bg-[#D9383A]" />
            <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
              PROFESSIONAL ENGAGEMENT
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#F2F2F0] leading-[1.08] uppercase tracking-tight">
            Let&apos;s create your dreams<br />
            <span className="text-[#D9383A]">to reality</span>
          </h2>

          <p className="mt-8 text-base sm:text-lg text-[#A5A7AA] font-normal max-w-2xl leading-relaxed">
            Available for master planning consultancies, statutory urban development advisory, institutional academic engagements, arbitration, and architectural commissions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenInquiry}
              className="px-8 py-4 bg-[#D9383A] hover:bg-[#E64A4D] text-[#F5F5F3] text-xs font-mono tracking-[0.2em] uppercase font-bold flex items-center gap-2 transition-all duration-300 group shadow-md"
            >
              <span>Initiate Consultation</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4-Column Architectural Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-y border-[#2A2D31] text-sm">
          {/* Col 1: Identity & Credentials */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#D9383A] tracking-widest uppercase block font-semibold">
              PROFESSIONAL PROFILE
            </span>
            <h3 className="font-serif text-lg font-bold text-[#F2F2F0]">
              Ar. Nenmeli Jayaraman
            </h3>
            <p className="text-xs text-[#A5A7AA] leading-relaxed">
              Architect • City Planner • Academician • Lawyer • Registered Valuer
            </p>
            <div className="pt-2 text-[11px] font-mono text-[#A5A7AA]">
              IIT Kharagpur (MCP &apos;99) • B.Arch • LLB<br />
              COA: CA / 98 / 24015 • ITPI • IIA
            </div>
          </div>

          {/* Col 2: Practice Locations */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#D9383A] tracking-widest uppercase block font-semibold">
              LOCATIONS &amp; PRACTICE
            </span>
            <div className="space-y-2 text-xs text-[#F2F2F0]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D9383A] shrink-0 mt-0.5" />
                <span>
                  <strong>Principal Practice:</strong><br />
                  No. 81 B, Rajaji Street, Chengalpattu - 603001, Tamil Nadu
                </span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#D9383A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F2F2F0] uppercase tracking-wider text-[11px] block">CONSULTANCY</strong>
                  <span className="block text-[#A5A7AA]">Architecture · Planning · Arbitration · Legal Profession</span>
                  <span className="block text-[#D9383A] text-[10px] tracking-widest uppercase font-semibold mt-0.5">ALL OVER INDIA &amp; ABROAD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Direct Index Navigation */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#D9383A] tracking-widest uppercase block font-semibold">
              PORTFOLIO INDEX
            </span>
            <ul className="space-y-2 text-xs font-mono text-[#A5A7AA]">
              <li>
                <a href="#hero" className="hover:text-[#D9383A] transition-colors">
                  OVERVIEW
                </a>
              </li>
              <li>
                <a href="#profile" className="hover:text-[#D9383A] transition-colors">
                  PROFILE
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-[#D9383A] transition-colors">
                  AREAS OF EXPERTISE
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#D9383A] transition-colors">
                  CAREER TIMELINE
                </a>
              </li>
              <li>
                <a href="#qualifications" className="hover:text-[#D9383A] transition-colors">
                  CREDENTIALS &amp; COA
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Institutional & Statutory Verification */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#D9383A] tracking-widest uppercase block font-semibold">
              COMPLIANCE &amp; STANDARDS
            </span>
            <div className="flex items-start gap-2 text-xs text-[#A5A7AA]">
              <ShieldCheck className="w-4 h-4 text-[#D9383A] shrink-0 mt-0.5" />
              <span>
                Statutory compliances adhering to Council of Architecture (COA) guidelines, Institute of Town Planners India (ITPI), and DTCP municipal building bylaws.
              </span>
            </div>
            <div className="pt-2 space-y-2">
              <a
                href="mailto:jesnenmeli@gmail.com"
                className="text-xs font-mono text-[#F2F2F0] hover:text-[#D9383A] flex items-center gap-1.5 transition-colors font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-[#D9383A]" />
                <span>jesnenmeli@gmail.com</span>
              </a>
              <div className="flex flex-col gap-1 font-mono text-[11px]">
                <a
                  href="tel:+919443226706"
                  className="text-[#A5A7AA] hover:text-[#D9383A] transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3 h-3 text-[#D9383A]" />
                  <span>+91 94432 26706</span>
                </a>
                <a
                  href="tel:+918610874516"
                  className="text-[#A5A7AA] hover:text-[#D9383A] transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3 h-3 text-[#D9383A]" />
                  <span>+91 86108 74516</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back-to-Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A5A7AA]">
          <div>
            &copy; {new Date().getFullYear()} Sri Janaki &amp; Associates — Ar. Nenmeli Jayaraman. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#F2F2F0] hover:text-[#D9383A] transition-colors group focus:outline-none font-semibold"
          >
            <span className="tracking-widest uppercase text-[11px]">BACK TO TOP</span>
            <div className="w-7 h-7 rounded-none border border-[#2A2D31] flex items-center justify-center group-hover:border-[#D9383A] bg-[#1E2025]">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
