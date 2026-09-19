import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight, MapPin, Mail, ShieldCheck, Building } from 'lucide-react';

interface FooterProps {
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#07080A] border-t border-white/10 pt-24 pb-16 overflow-hidden">
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Editorial Invitation Header */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-6 h-[1.5px] bg-[#D9383A]" />
            <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase">
              PROFESSIONAL ENGAGEMENT
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#F5F5F3] leading-[1.1] uppercase tracking-tight">
            Let&apos;s Discuss<br />
            <span className="text-[#9AA0AC]">Architecture,</span><br />
            City Planning &amp; Possibilities.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#CDD0D8] font-light max-w-2xl leading-relaxed">
            Available for statutory city master planning consultancies, port development advisory, institutional academic engagements, and architectural commissions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenInquiry}
              className="px-8 py-4 bg-[#D9383A] hover:bg-[#E64A4D] text-[#F5F5F3] text-xs font-mono tracking-[0.2em] uppercase font-bold flex items-center gap-2 transition-all duration-300 group shadow-lg shadow-[#D9383A]/20"
            >
              <span>Initiate Consultation</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <Link
              to="/contact"
              className="px-6 py-4 border border-white/15 hover:border-white/40 text-[#F5F5F3] text-xs font-mono tracking-[0.2em] uppercase transition-colors"
            >
              Contact Directory
            </Link>
          </div>
        </div>

        {/* 4-Column Architectural Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-y border-white/10 text-sm">
          {/* Col 1: Identity & Credentials */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#D9383A] tracking-widest uppercase block">
              PROFESSIONAL PROFILE
            </span>
            <h3 className="font-serif text-lg font-bold text-[#F5F5F3]">
              Ar. Nenmeli Jayaraman
            </h3>
            <p className="text-xs text-[#9AA0AC] leading-relaxed">
              Architect • City Planner • Educator • Registered Valuer
            </p>
            <div className="pt-2 text-[11px] font-mono text-[#626776]">
              IIT Kharagpur (MCP &apos;99)<br />
              COA: CA / 98 / 24015
            </div>
          </div>

          {/* Col 2: Practice Locations (From card.jpeg) */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#D9383A] tracking-widest uppercase block">
              SRI JANAKI &amp; ASSOCIATES
            </span>
            <div className="space-y-2 text-xs text-[#CDD0D8]">
              <div className="flex items-start gap-2">
                <Building className="w-3.5 h-3.5 text-[#D9383A] shrink-0 mt-0.5" />
                <span>
                  <strong>Office Address:</strong><br />
                  No. 81 B, Rajaji Street, Chengalpattu - 603001, Tamil Nadu
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

          {/* Col 3: Direct Multi-Page Route Index */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#D9383A] tracking-widest uppercase block">
              MONOGRAPH DIRECTORY
            </span>
            <ul className="space-y-2 text-xs font-mono text-[#9AA0AC]">
              <li>
                <Link to="/" className="hover:text-[#F5F5F3] transition-colors">
                  01 // HOME / OVERVIEW
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-[#F5F5F3] transition-colors">
                  02 // SELECTED WORK &amp; TIMELINE
                </Link>
              </li>
              <li>
                <Link to="/expertise" className="hover:text-[#F5F5F3] transition-colors">
                  03 // EXPERTISE DOMAINS
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F5F5F3] transition-colors">
                  04 // ABOUT &amp; BIOGRAPHY
                </Link>
              </li>
              <li>
                <Link to="/credentials" className="hover:text-[#F5F5F3] transition-colors">
                  05 // CREDENTIALS &amp; COA
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#F5F5F3] transition-colors">
                  06 // DEDICATED GALLERY
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-[#F5F5F3] transition-colors">
                  07 // PROFILE &amp; MONOGRAPH
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F5F5F3] transition-colors">
                  08 // CONTACT &amp; ENQUIRY
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Institutional & Statutory Verification */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#D9383A] tracking-widest uppercase block">
              COMPLIANCE &amp; STANDARDS
            </span>
            <div className="flex items-start gap-2 text-xs text-[#CDD0D8]">
              <ShieldCheck className="w-4 h-4 text-[#D9383A] shrink-0 mt-0.5" />
              <span>
                Statutory compliances adhering to Council of Architecture (COA) guidelines, Institute of Town Planners India (ITPI), and DTCP municipal bylaws.
              </span>
            </div>
            <div className="pt-2">
              <a
                href="mailto:jnmidas@gmail.com"
                className="text-xs font-mono text-[#F5F5F3] hover:text-[#D9383A] transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#D9383A]" />
                <span>jnmidas@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back-to-Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#626776]">
          <div>
            &copy; {new Date().getFullYear()} Ar. Nenmeli Jayaraman. All rights reserved. Architecture &amp; City Planning Monograph.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#9AA0AC] hover:text-[#D9383A] transition-colors group focus:outline-none"
          >
            <span className="tracking-widest uppercase text-[11px]">TOP OF MONOGRAPH</span>
            <div className="w-7 h-7 rounded-none border border-white/10 flex items-center justify-center group-hover:border-[#D9383A]">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
