import React, { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { Mail, MapPin, Send, Check, Copy, ShieldCheck, Clock, Phone, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProfessionalAssociates } from '../components/ProfessionalAssociates';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: 'City Planning / Master Plan',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio Consultation] ${formData.inquiryType} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization}\nInquiry Nature: ${formData.inquiryType}\n\nProject Scope / Inquiry Details:\n${formData.message}`
    );
    window.location.href = `mailto:jesnenmeli@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jesnenmeli@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+919443226706');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#111214] pt-32 pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header: First Letter C in Red, NO FULL STOP */}
          <div className="max-w-4xl mb-16 pb-8 border-b border-[#2A2D31]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-6 h-[1.5px] bg-[#D9383A]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
                CHAPTER 07 // CONTACT &amp; CONSULTATION
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#F2F2F0] leading-[1.05] uppercase tracking-tight"
              aria-label="Contact"
            >
              <span className="text-[#D9383A] inline-block">C</span>
              <span>ONTACT</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg lg:text-xl text-[#D8DAD8] font-light leading-relaxed max-w-3xl"
            >
              Available for statutory city master planning advisory, port development consultancy, architectural commissions, academic lectures, arbitration, and property valuation.
            </motion.p>
          </div>

          {/* 2-Column Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Interactive Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 bg-[#17191C] border border-[#2A2D31] p-8 sm:p-10 relative shadow-2xl"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#2A2D31]">
                <h2 className="font-serif text-xl font-bold text-[#F2F2F0] uppercase tracking-wider">
                  Consultation Enquiry
                </h2>
                <span className="text-[11px] font-mono text-[#D9383A] font-semibold">DIRECT CHANNEL</span>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto bg-[#D9383A]/20 text-[#D9383A] border border-[#D9383A]/40 flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#F2F2F0]">
                    Inquiry Draft Formatted
                  </h3>
                  <p className="text-sm text-[#D8DAD8] max-w-md mx-auto font-light leading-relaxed">
                    Your default email application has opened with your inquiry details. You may also directly write to the email address below.
                  </p>
                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href="mailto:jesnenmeli@gmail.com"
                      className="px-4 py-2 bg-[#1E2025] border border-[#2A2D31] text-xs font-mono text-[#F2F2F0] flex items-center gap-2 hover:border-[#D9383A]"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#D9383A]" />
                      <span>jesnenmeli@gmail.com</span>
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="px-3 py-2 bg-[#1E2025] border border-[#2A2D31] text-xs font-mono text-[#A5A7AA] hover:text-[#F2F2F0] flex items-center gap-1.5"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                    </button>
                    <a
                      href="tel:+919443226706"
                      className="px-4 py-2 bg-[#1E2025] border border-[#2A2D31] text-xs font-mono text-[#F2F2F0] flex items-center gap-2 hover:border-[#D9383A]"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#D9383A]" />
                      <span>+91 94432 26706</span>
                    </a>
                  </div>
                  <div className="pt-6">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-transparent border border-[#2A2D31] text-[#D8DAD8] hover:text-[#F2F2F0] hover:border-white/40 text-xs font-mono tracking-widest uppercase"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A5A7AA] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Rajesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#111214] border border-[#2A2D31] text-sm text-[#F2F2F0] placeholder-[#72757C] focus:outline-none focus:border-[#D9383A] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A5A7AA] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@organization.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#111214] border border-[#2A2D31] text-sm text-[#F2F2F0] placeholder-[#72757C] focus:outline-none focus:border-[#D9383A] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A5A7AA] mb-2">
                        Organization / Authority
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Planning Authority / Studio"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-4 py-3 bg-[#111214] border border-[#2A2D31] text-sm text-[#F2F2F0] placeholder-[#72757C] focus:outline-none focus:border-[#D9383A] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A5A7AA] mb-2">
                        Inquiry Nature
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 bg-[#111214] border border-[#2A2D31] text-sm text-[#F2F2F0] focus:outline-none focus:border-[#D9383A] transition-colors"
                      >
                        <option value="City Planning / Master Plan">Statutory City Planning / GIS</option>
                        <option value="Architectural Design Project">Architectural Practice &amp; Design</option>
                        <option value="Arbitration & Legal Practice">Arbitration &amp; Legal Advisory</option>
                        <option value="Academic Advisory & Lecture">Academic Leadership &amp; Lecture</option>
                        <option value="Property Valuation">Immovable Property Valuation</option>
                        <option value="General Professional Inquiry">General Professional Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A5A7AA] mb-2">
                      Project Scope / Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Detail project location, timeline, statutory jurisdiction, or academic scope..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#111214] border border-[#2A2D31] text-sm text-[#F2F2F0] placeholder-[#72757C] focus:outline-none focus:border-[#D9383A] transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="text-xs font-mono text-[#A5A7AA] hover:text-[#D9383A] flex items-center gap-1.5"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#D9383A]" />
                        <span>Copy jesnenmeli@gmail.com</span>
                        {copiedEmail && <span className="text-emerald-400 text-[10px]">(Copied!)</span>}
                      </button>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-[#D9383A] hover:bg-[#E64A4D] text-[#F2F2F0] text-xs font-mono tracking-[0.2em] uppercase font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#D9383A]/20"
                    >
                      <span>Send via Mail Client</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Right Column: Practice Details & Direct Contact Channels */}
            <div className="lg:col-span-5 space-y-6">
              {/* Practice Identity Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="p-6 bg-[#17191C] border border-[#2A2D31] space-y-4 shadow-lg"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-[#D9383A] uppercase tracking-widest font-semibold">
                  <Building className="w-4 h-4 text-[#D9383A]" />
                  <span>Sri Janaki &amp; Associates</span>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-[#D8DAD8]">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#D9383A] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#F2F2F0] block mb-0.5">Principal Practice &amp; Office:</strong>
                      <span>No. 81 B, Rajaji Street, Chengalpattu, Chengalpattu District - 603001, Tamil Nadu</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-[#2A2D31] flex items-start gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#D9383A] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#F2F2F0] block mb-0.5">Professional Email:</strong>
                      <a href="mailto:jesnenmeli@gmail.com" className="text-[#E2C799] hover:underline font-mono">
                        jesnenmeli@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-[#2A2D31] flex items-start gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#D9383A] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#F2F2F0] block mb-0.5">Direct Phone Contact:</strong>
                      <div className="flex flex-wrap items-center gap-3 font-mono">
                        <a href="tel:+919443226706" className="text-[#F2F2F0] hover:text-[#D9383A] transition-colors underline decoration-[#2A2D31] underline-offset-2">
                          +91 94432 26706
                        </a>
                        <span className="text-[#72757C]">/</span>
                        <a href="tel:+918610874516" className="text-[#F2F2F0] hover:text-[#D9383A] transition-colors underline decoration-[#2A2D31] underline-offset-2">
                          +91 86108 74516
                        </a>
                        <button
                          type="button"
                          onClick={handleCopyPhone}
                          className="text-[11px] text-[#A5A7AA] hover:text-[#D9383A] flex items-center gap-1 ml-1"
                        >
                          <Copy className="w-3 h-3" />
                          <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-[#2A2D31] text-xs font-mono">
                    <strong className="text-[#F2F2F0] uppercase tracking-wider text-[11px] block">CONSULTANCY</strong>
                    <span className="block text-[#D8DAD8]">Architecture · Planning · Arbitration · Legal Profession</span>
                    <span className="block text-[#D9383A] text-[10px] tracking-widest uppercase font-semibold mt-0.5">ALL OVER INDIA &amp; ABROAD</span>
                  </div>
                </div>
              </motion.div>

              {/* Statutory Advisory Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="p-6 bg-[#17191C] border border-[#2A2D31] space-y-4 shadow-lg"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-[#D9383A] uppercase tracking-widest font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#D9383A]" />
                  <span>Statutory Registrations</span>
                </div>
                <p className="text-xs text-[#A5A7AA] leading-relaxed">
                  Council of Architecture (COA New Delhi CA/98/24015) • Institute of Town Planners India (ITPI 2001-086/AITP) • Indian Institute of Architects (IIA A13017) • Registered Valuer (IIV Pune CAT-I-F-8356).
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#72757C]">
                  <Clock className="w-3.5 h-3.5 text-[#D9383A]" />
                  <span>Typical response time within 24–48 business hours</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Dedicated Professional Associates Section */}
      <ProfessionalAssociates />
    </PageTransition>
  );
};
