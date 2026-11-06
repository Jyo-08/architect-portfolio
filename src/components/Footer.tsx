import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight, MapPin, Mail, Phone, ShieldCheck, Building } from 'lucide-react';

interface FooterProps {
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#111214] border-t border-[#2A2D31] pt-24 pb-16 overflow-hidden">
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Editorial Invitation Header: Exact CTA "Let's create your dreams to reality" */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-6 h-[1.5px] bg-[#D9383A]" />
            <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
              PROFESSIONAL ENGAGEMENT
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#F2F2F0] leading-[1.1] uppercase tracking-tight">
            Let&apos;s create your dreams<br />
            <span className="text-[#D9383A]">to reality</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#D8DAD8] font-light max-w-2xl leading-relaxed">
            Available for statutory city master planning consultancies, port development advisory, institutional academic engagements, arbitration, and architectural commissions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenInquiry}
              className="px-8 py-4 bg-[#D9383A] hover:bg-[#E64A4D] text-[#F2F2F0] text-xs font-mono tracking-[0.2em] uppercase font-bold flex items-center gap-2 transition-all duration-300 group shadow-lg shadow-[#D9383A]/20"
            >
              <span>Initiate Consultation</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <Link
              to="/contact"
              className="px-6 py-4 border border-[#2A2D31] hover:border-white/40 text-[#F2F2F0] text-xs font-mono tracking-[0.2em] uppercase transition-colors bg-[#17191C]"
            >
              Contact Directory
            </Link>
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
            <div className="pt-2 text-[11px] font-mono text-[#72757C]">
              IIT Kharagpur (MCP &apos;99) • B.Arch • LLB<br />
              COA: CA / 98 / 24015 • ITPI • IIA
            </div>
          </div>

          {/* Col 2: Practice Locations & Consultancy */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#D9383A] tracking-widest uppercase block font-semibold">
              SRI JANAKI &amp; ASSOCIATES
            </span>
            <div className="space-y-2 text-xs text-[#D8DAD8]">
              <div className="flex items-start gap-2">
                <Building className="w-3.5 h-3.5 text-[#D9383A] shrink-0 mt-0.5" />
                <span>
                  <strong>Office Address:</strong><br />
                  No. 81 B, Rajaji Street, Chengalpattu - 603001, Tamil Nadu
                </span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#D9383A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F2F2F0] uppercase tracking-wider text-[11px] block">CONSULTANCY</strong>
                  <span className="block text-[#D8DAD8]">Architecture · Planning · Arbitration · Legal Profession</span>
                  <span className="block text-[#D9383A] text-[10px] tracking-widest uppercase font-semibold mt-0.5">ALL OVER INDIA &amp; ABROAD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Direct Multi-Page Route Index */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#D9383A] tracking-widest uppercase block font-semibold">
              MONOGRAPH DIRECTORY
            </span>
            <ul className="space-y-2 text-xs font-mono text-[#A5A7AA]">
              <li>
                <Link to="/" className="hover:text-[#F2F2F0] transition-colors">
                  01 // HOME / OVERVIEW
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-[#F2F2F0] transition-colors">
                  02 // SELECTED WORK &amp; TIMELINE
                </Link>
              </li>
              <li>
                <Link to="/expertise" className="hover:text-[#F2F2F0] transition-colors">
                  03 // EXPERTISE DOMAINS
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F2F2F0] transition-colors">
                  04 // ABOUT &amp; BIOGRAPHY
                </Link>
              </li>
              <li>
                <Link to="/credentials" className="hover:text-[#F2F2F0] transition-colors">
                  05 // CREDENTIALS &amp; COA
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#F2F2F0] transition-colors">
                  06 // DEDICATED GALLERY
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-[#F2F2F0] transition-colors">
                  07 // PROFILE &amp; MONOGRAPH
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F2F2F0] transition-colors">
                  08 // CONTACT &amp; ENQUIRY
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Channels & Compliance */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#D9383A] tracking-widest uppercase block font-semibold">
              DIRECT CONTACT
            </span>
            <div className="space-y-2 text-xs text-[#D8DAD8]">
              <div>
                <a
                  href="mailto:jesnenmeli@gmail.com"
                  className="text-xs font-mono text-[#F2F2F0] hover:text-[#D9383A] transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D9383A]" />
                  <span>jesnenmeli@gmail.com</span>
                </a>
              </div>
              <div className="pt-1 flex flex-col gap-1 font-mono text-[11px]">
                <a
                  href="tel:+919443226706"
                  className="text-[#A5A7AA] hover:text-[#F2F2F0] transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3 h-3 text-[#D9383A]" />
                  <span>+91 94432 26706</span>
                </a>
                <a
                  href="tel:+918610874516"
                  className="text-[#A5A7AA] hover:text-[#F2F2F0] transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3 h-3 text-[#D9383A]" />
                  <span>+91 86108 74516</span>
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-[#2A2D31] flex items-start gap-2 text-xs text-[#A5A7AA]">
              <ShieldCheck className="w-4 h-4 text-[#D9383A] shrink-0 mt-0.5" />
              <span>
                Statutory compliances adhering to Council of Architecture (COA) guidelines, ITPI, and DTCP bylaws.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back-to-Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#72757C]">
          <div>
            &copy; {new Date().getFullYear()} Ar. Nenmeli Jayaraman. All rights reserved. Architecture, Planning, Arbitration &amp; Legal Monograph.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#A5A7AA] hover:text-[#D9383A] transition-colors group focus:outline-none"
          >
            <span className="tracking-widest uppercase text-[11px]">TOP OF MONOGRAPH</span>
            <div className="w-7 h-7 rounded-none border border-[#2A2D31] flex items-center justify-center group-hover:border-[#D9383A] bg-[#17191C]">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
