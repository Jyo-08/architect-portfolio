import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavigationProps {
  onOpenInquiry: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 60);

      const sections = ['hero', 'profile', 'expertise', 'work', 'qualifications', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'PROFILE', href: '#profile', id: 'profile' },
    { label: 'EXPERTISE', href: '#expertise', id: 'expertise' },
    { label: 'EXPERIENCE', href: '#work', id: 'work' },
    { label: 'CREDENTIALS', href: '#qualifications', id: 'qualifications' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090A0D]/95 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl'
            : 'bg-gradient-to-b from-[#090A0D]/80 via-[#090A0D]/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="group flex flex-col focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
          >
            <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.2em] text-[#F5F5F3] group-hover:text-[#C2A87E] transition-colors">
              AR. N. JAYARAMAN
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#9AA0AC] uppercase font-mono mt-0.5">
              Architect & Urban Planner
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-xs font-mono tracking-[0.2em] uppercase transition-all relative py-1 ${
                    isActive
                      ? 'text-[#F5F5F3] font-semibold'
                      : 'text-[#9AA0AC] hover:text-[#F5F5F3]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C2A87E]" />
                  )}
                </a>
              );
            })}

            {/* Quick Inquire Action */}
            <button
              onClick={onOpenInquiry}
              className="ml-4 px-4 py-2 border border-[#C2A87E]/50 text-[#C2A87E] hover:bg-[#C2A87E] hover:text-[#090A0D] text-xs font-mono tracking-[0.15em] uppercase transition-all duration-200 flex items-center gap-1.5"
            >
              <span>INQUIRE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenInquiry}
              className="px-3 py-1.5 border border-[#C2A87E]/60 text-[#C2A87E] text-[11px] font-mono tracking-widest uppercase"
            >
              INQUIRE
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F5F3] hover:text-[#C2A87E] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#090A0D]/98 backdrop-blur-xl pt-24 px-8 flex flex-col md:hidden animate-fade-in">
          <div className="border-b border-white/10 pb-4 mb-8">
            <span className="text-xs font-mono text-[#C2A87E] tracking-[0.25em] uppercase">Navigation Index</span>
          </div>
          <div className="flex flex-col space-y-6">
            {navLinks.map((link, idx) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="flex items-center justify-between text-2xl font-serif tracking-wider text-[#F5F5F3] hover:text-[#C2A87E] transition-colors py-2 border-b border-white/5"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#626776]">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="mt-auto pb-12 pt-8">
            <p className="text-xs font-mono text-[#9AA0AC] mb-4">
              Ar. Nenmeli Jayaraman<br />
              IIT Kharagpur (MCP) • COA Registered
            </p>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3.5 bg-[#C2A87E] text-[#090A0D] font-mono text-xs tracking-[0.2em] uppercase font-semibold text-center flex items-center justify-center gap-2"
            >
              <span>Initiate Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
