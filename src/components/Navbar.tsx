import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'WORK', href: '/work' },
    { label: 'EXPERTISE', href: '/expertise' },
    { label: 'ABOUT', href: '/about' },
    { label: 'CREDENTIALS', href: '/credentials' },
    { label: 'GALLERY', href: '/gallery' },
    { label: 'PROFILE', href: '/profile' },
    { label: 'CONTACT', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090A0D]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#090A0D]/90 via-[#090A0D]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo with Official Identity Logo */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D9383A]"
          >
            <img
              src="/images/official_logo.png"
              alt="Ar. Nenmeli Jayaraman Official Practice Logo — Creator of Your Dreams"
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain group-hover:scale-105 transition-transform duration-300 shrink-0"
            />
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg lg:text-xl font-bold tracking-[0.18em] text-[#F5F5F3] group-hover:text-[#F5F5F3] transition-colors flex items-center">
                <span className="text-[#D9383A] inline-block mr-0.5">AR.</span> N. JAYARAMAN
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.22em] text-[#9AA0AC] uppercase font-mono group-hover:text-[#CDD0D8] transition-colors">
                Architect &amp; City Planner
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-xs font-mono tracking-[0.2em] uppercase transition-all relative py-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D9383A] ${
                    isActive
                      ? 'text-[#F5F5F3] font-semibold'
                      : 'text-[#9AA0AC] hover:text-[#F5F5F3]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D9383A]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Quick Inquire Action Button */}
            <button
              onClick={onOpenInquiry}
              className="ml-2 px-4 py-2 border border-[#D9383A]/60 text-[#F5F5F3] hover:bg-[#D9383A] hover:text-[#F5F5F3] text-xs font-mono tracking-[0.15em] uppercase transition-all duration-200 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9383A]"
            >
              <span>INQUIRE</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D9383A] group-hover:text-[#F5F5F3]" />
            </button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenInquiry}
              className="px-3 py-1.5 border border-[#D9383A]/60 text-[#F5F5F3] text-[11px] font-mono tracking-widest uppercase"
            >
              INQUIRE
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F5F3] hover:text-[#D9383A] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D9383A]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[#090A0D]/98 backdrop-blur-2xl pt-28 px-8 flex flex-col md:hidden overflow-y-auto"
          >
            <div className="border-b border-white/10 pb-4 mb-8 flex items-center justify-between">
              <span className="text-xs font-mono text-[#D9383A] tracking-[0.25em] uppercase">
                MONOGRAPH DIRECTORY
              </span>
              <span className="text-[10px] font-mono text-[#626776]">ESC TO CLOSE</span>
            </div>

            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between text-2xl font-serif tracking-wider py-3 border-b border-white/5 transition-colors ${
                  location.pathname === '/' ? 'text-[#D9383A]' : 'text-[#F5F5F3] hover:text-[#D9383A]'
                }`}
              >
                <span>HOME / OVERVIEW</span>
                <span className="text-xs font-mono text-[#626776]">00</span>
              </Link>
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between text-2xl font-serif tracking-wider py-3 border-b border-white/5 transition-colors ${
                      isActive ? 'text-[#D9383A]' : 'text-[#F5F5F3] hover:text-[#D9383A]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono text-[#626776]">0{idx + 1}</span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-auto pb-12 pt-8">
              <p className="text-xs font-mono text-[#9AA0AC] mb-4">
                Ar. Nenmeli Jayaraman<br />
                IIT Kharagpur (MCP &apos;99) • COA Registered Architect
              </p>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-4 bg-[#D9383A] hover:bg-[#E64A4D] text-[#F5F5F3] font-mono text-xs tracking-[0.2em] uppercase font-bold text-center flex items-center justify-center gap-2 transition-colors"
              >
                <span>Initiate Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
