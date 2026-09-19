import React from 'react';
import { ArrowUp, ArrowUpRight, MapPin, Mail, ShieldCheck } from 'lucide-react';

interface ContactFooterProps {
  onOpenInquiry: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenInquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#07080A] border-t border-white/10 pt-28 pb-16 overflow-hidden">
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Editorial Invitation Header */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-6 h-[1px] bg-[#C2A87E]" />
            <span className="text-xs font-mono tracking-[0.25em] text-[#C2A87E] uppercase">
              PROFESSIONAL ENGAGEMENT
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#F5F5F3] leading-[1.08] uppercase tracking-tight">
            Let&apos;s Discuss<br />
            <span className="text-[#9AA0AC]">Architecture,</span><br />
            Planning &amp; Possibilities.
          </h2>

          <p className="mt-8 text-base sm:text-lg text-[#CDD0D8] font-light max-w-2xl leading-relaxed">
            Available for master planning consultancies, statutory urban development advisory, institutional academic engagements, and architectural commissions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenInquiry}
              className="px-8 py-4 bg-[#C2A87E] hover:bg-[#D8BF96] text-[#090A0D] text-xs font-mono tracking-[0.2em] uppercase font-bold flex items-center gap-2 transition-all duration-300 group shadow-lg shadow-[#C2A87E]/10"
            >
              <span>Initiate Consultation</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4-Column Architectural Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-y border-white/10 text-sm">
          {/* Col 1: Identity & Credentials */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#C2A87E] tracking-widest uppercase block">
              PROFESSIONAL PROFILE
            </span>
            <h3 className="font-serif text-lg font-bold text-[#F5F5F3]">
              Ar. Nenmeli Jayaraman
            </h3>
            <p className="text-xs text-[#9AA0AC] leading-relaxed">
              Architect • Urban Planner • Educator • Registered Valuer
            </p>
            <div className="pt-2 text-[11px] font-mono text-[#626776]">
              IIT Kharagpur (MCP &apos;99)<br />
              COA: CA / 98 / 24015
            </div>
          </div>

          {/* Col 2: Practice Locations */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#C2A87E] tracking-widest uppercase block">
              LOCATIONS &amp; PRACTICE
            </span>
            <div className="space-y-2 text-xs text-[#CDD0D8]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C2A87E] shrink-0 mt-0.5" />
                <span>
                  <strong>Principal Practice:</strong><br />
                  Chengalpattu &amp; Chennai, Tamil Nadu, India
                </span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#9AA0AC] shrink-0 mt-0.5" />
                <span>
                  <strong>Consultancy Projects:</strong><br />
                  Navi Mumbai (JNPA) • Tamil Nadu (AMRUT 2.0)
                </span>
              </div>
            </div>
          </div>

          {/* Col 3: Direct Index Navigation */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#C2A87E] tracking-widest uppercase block">
              PORTFOLIO INDEX
            </span>
            <ul className="space-y-2 text-xs font-mono text-[#9AA0AC]">
              <li>
                <a href="#hero" className="hover:text-[#F5F5F3] transition-colors">
                  01 // OVERVIEW
                </a>
              </li>
              <li>
                <a href="#profile" className="hover:text-[#F5F5F3] transition-colors">
                  02 // PROFILE
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-[#F5F5F3] transition-colors">
                  03 // AREAS OF EXPERTISE
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#F5F5F3] transition-colors">
                  04 // CAREER TIMELINE
                </a>
              </li>
              <li>
                <a href="#qualifications" className="hover:text-[#F5F5F3] transition-colors">
                  05 // CREDENTIALS &amp; COA
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Institutional & Statutory Verification */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#C2A87E] tracking-widest uppercase block">
              COMPLIANCE &amp; STANDARDS
            </span>
            <div className="flex items-start gap-2 text-xs text-[#CDD0D8]">
              <ShieldCheck className="w-4 h-4 text-[#C2A87E] shrink-0 mt-0.5" />
              <span>
                Statutory compliances adhering to Council of Architecture (COA) guidelines, Institute of Town Planners India (ITPI), and DTCP municipal building bylaws.
              </span>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenInquiry}
                className="text-xs font-mono text-[#E2C799] hover:underline flex items-center gap-1"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Direct consultation channel</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back-to-Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#626776]">
          <div>
            &copy; {new Date().getFullYear()} Ar. Nenmeli Jayaraman. All rights reserved. Architectural &amp; Urban Planning Monograph.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#9AA0AC] hover:text-[#C2A87E] transition-colors group focus:outline-none"
          >
            <span className="tracking-widest uppercase text-[11px]">TOP OF MONOGRAPH</span>
            <div className="w-7 h-7 rounded-none border border-white/10 flex items-center justify-center group-hover:border-[#C2A87E]">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
