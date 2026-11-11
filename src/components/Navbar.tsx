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
            ? 'bg-[#111214]/95 backdrop-blur-md border-b border-[#2A2D31] py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#111214]/90 via-[#111214]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo with Official Identity Logo (Preserved Exactly) */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="group flex items-center gap-2 sm:gap-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D9383A] shrink-0 min-w-0"
          >
            <img
              src="/images/official_logo.png"
              alt="Ar. Nenmeli Jayaraman Official Practice Logo — Creator of Your Dreams"
              className="w-7 h-7 sm:w-9 sm:h-9 object-contain group-hover:scale-105 transition-transform duration-300 shrink-0"
            />
            <div className="flex flex-col min-w-0">
              <span className="font-serif text-[13px] sm:text-lg lg:text-xl font-bold tracking-[0.1em] sm:tracking-[0.18em] text-[#F2F2F0] group-hover:text-[#F2F2F0] transition-colors flex items-center whitespace-nowrap">
                <span className="text-[#D9383A] inline-block mr-1">AR.</span> N. JAYARAMAN
              </span>
              <span className="text-[8px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.22em] text-[#A5A7AA] uppercase font-mono group-hover:text-[#D8DAD8] transition-colors whitespace-nowrap">
                Sri Janaki &amp; Associates
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-xs font-mono tracking-[0.14em] xl:tracking-[0.2em] uppercase transition-all relative py-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D9383A] whitespace-nowrap ${
                    isActive
                      ? 'text-[#F2F2F0] font-semibold'
                      : 'text-[#A5A7AA] hover:text-[#F2F2F0]'
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
              className="group ml-2 px-4 py-2 border border-[#D9383A]/60 text-[#F2F2F0] hover:bg-[#E64A4D] hover:text-[#F2F2F0] text-xs font-mono tracking-[0.15em] uppercase transition-all duration-200 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9383A] bg-[#17191C]/60 font-medium whitespace-nowrap"
            >
              <span>INQUIRE</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D9383A] group-hover:text-[#F2F2F0] transition-colors" />
            </button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-1.5 shrink-0">
            <button
              onClick={onOpenInquiry}
              className="px-2.5 py-1.5 border border-[#D9383A]/60 text-[#F2F2F0] text-[10px] font-mono tracking-widest uppercase bg-[#17191C]/80 font-medium"
            >
              INQUIRE
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F2F2F0] hover:text-[#D9383A] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D9383A]"
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
            className="fixed inset-0 z-30 bg-[#111214]/98 backdrop-blur-2xl pt-28 px-8 flex flex-col md:hidden overflow-y-auto"
          >
            <div className="border-b border-[#2A2D31] pb-4 mb-8 flex items-center justify-between">
              <span className="text-xs font-mono text-[#D9383A] tracking-[0.25em] uppercase font-semibold">
                NAVIGATION DIRECTORY
              </span>
              <span className="text-[10px] font-mono text-[#A5A7AA]">ESC TO CLOSE</span>
            </div>

            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between text-2xl font-serif tracking-wider py-3 border-b border-[#2A2D31]/70 transition-colors ${
                  location.pathname === '/' ? 'text-[#D9383A] font-bold' : 'text-[#F2F2F0] hover:text-[#D9383A]'
                }`}
              >
                <span>HOME / OVERVIEW</span>
                <ArrowUpRight className="w-4 h-4 text-[#D9383A]" />
              </Link>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between text-2xl font-serif tracking-wider py-3 border-b border-[#2A2D31]/70 transition-colors ${
                      isActive ? 'text-[#D9383A] font-bold' : 'text-[#F2F2F0] hover:text-[#D9383A]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#A5A7AA]" />
                  </Link>
                );
              })}
            </div>

            <div className="mt-auto pb-12 pt-8">
              <p className="text-xs font-mono text-[#A5A7AA] mb-4">
                Sri Janaki &amp; Associates — Ar. N. Jayaraman<br />
                IIT Kharagpur (MCP &apos;99) • B.Arch • LLB • COA Architect
              </p>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-4 bg-[#D9383A] hover:bg-[#E64A4D] text-[#F5F5F3] font-mono text-xs tracking-[0.2em] uppercase font-bold text-center flex items-center justify-center gap-2 transition-colors shadow-md"
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
