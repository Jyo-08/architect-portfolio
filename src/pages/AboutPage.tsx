import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Landmark, GraduationCap, Map, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProfessionalAssociates } from '../components/ProfessionalAssociates';

export const AboutPage: React.FC = () => {
  const pillars = [
    {
      icon: GraduationCap,
      title: 'IIT Kharagpur City Planning & Law',
      detail: 'MCP (IIT-KGP 1999, CGPA 7.99), B.Arch (Madras 1998, GATE), and Bachelor of Laws (LLB) providing technical and statutory legal governance expertise.'
    },
    {
      icon: Map,
      title: 'Statutory Master Planning & GIS',
      detail: 'Lead planner for AMRUT 2.0 GIS Master Plans in Tamil Nadu and JNPA Master Plan DCPR formulations in Navi Mumbai.'
    },
    {
      icon: Landmark,
      title: 'Academic Governance & Leadership',
      detail: 'Former Principal In-Charge & HOD with two decades directing architecture institutions and COA accreditations.'
    },
    {
      icon: ShieldCheck,
      title: 'Statutory Registrations & Practice',
      detail: 'Registered with Council of Architecture (CA/98/24015), ITPI, IIA, DTCP, and Registered Valuer (IIV Pune CAT-I-F-8356).'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#111214] pt-32 pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header: First Letter A in Red, NO FULL STOP */}
          <div className="flex flex-col mb-12 pb-8 border-b border-[#2A2D31]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-6 h-[1.5px] bg-[#D9383A]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
                CHAPTER 03 // ABOUT &amp; BIOGRAPHY
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#F2F2F0] leading-[1.05] uppercase tracking-tight"
              aria-label="About"
            >
              <span className="text-[#D9383A] inline-block">A</span>
              <span>BOUT</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg lg:text-xl text-[#D8DAD8] max-w-3xl font-light leading-relaxed"
            >
              An architectural and urban planning practice rooted in statutory rigor, academic leadership, and two decades of field execution.
            </motion.p>
          </div>

          {/* Editorial 2-Column Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
            {/* Left Column: Narrative grounded in CV & Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-[#D8DAD8] text-base sm:text-lg font-light leading-relaxed"
            >
              <p>
                <strong className="font-medium text-[#F2F2F0]">Ar. Nenmeli Jayaraman</strong> is a senior architect, city planner, academician, and lawyer whose practice spans over two decades across architectural commissions, statutory city master planning, arbitration, and institutional governance.
              </p>
              <p>
                He holds a Postgraduate Degree in City Planning from <span className="text-[#F2F2F0] font-normal">IIT Kharagpur</span> (1999, CGPA 7.99), a Bachelor of Architecture from the <span className="text-[#F2F2F0] font-normal">University of Madras</span> (GATE qualified), and a <span className="text-[#F2F2F0] font-normal">Bachelor of Laws (LLB)</span> degree uniting spatial design with statutory legal compliance and arbitration.
              </p>
              <p>
                As Proprietor &amp; Chief Architect of <span className="text-[#F2F2F0] font-normal">Sri Janaki &amp; Associates</span> (Chengalpattu), he directs residential schemes, institutional layouts, and commercial developments across Tamil Nadu.
              </p>
              <p>
                His regional consultancy includes serving as Senior Urban Planner for the <span className="text-[#F2F2F0] font-normal">JNPA Master Plan</span> (Navi Mumbai) with Voyants Solutions, formulating GIS master plans under <span className="text-[#F2F2F0] font-normal">AMRUT 2.0</span> for Tamil Nadu cities, and early research at <span className="text-[#F2F2F0] font-normal">ORG</span>.
              </p>
              <p>
                In academia, he has served as Principal In-Charge &amp; Professor at <span className="text-[#F2F2F0] font-normal">MIDAS</span>, Professor &amp; HOD at AMACE and Bharath University, Professor at <span className="text-[#F2F2F0] font-normal">Crescent School of Architecture</span>, and faculty at <span className="text-[#F2F2F0] font-normal">Salalah College of Technology (Oman)</span>.
              </p>

              {/* Verified Practice Identity Card */}
              <div className="pt-6 mt-8 border border-[#2A2D31] bg-[#17191C] p-6 space-y-3 shadow-lg">
                <div className="flex items-center justify-between pb-3 border-b border-[#2A2D31]">
                  <span className="text-xs font-mono text-[#D9383A] tracking-widest uppercase font-semibold">
                    PRACTICE IDENTITY // SRI JANAKI &amp; ASSOCIATES
                  </span>
                  <span className="text-[11px] font-mono text-[#A5A7AA]">EST. CHENGALPATTU</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-[#D8DAD8]">
                  <div>
                    <span className="text-[#A5A7AA] block text-[10px] uppercase">Principal Architect, Planner &amp; Lawyer:</span>
                    <strong className="text-[#F2F2F0] text-sm font-serif">Ar. N. Jayaraman</strong>
                    <p className="text-[11px] text-[#A5A7AA] mt-0.5">B.Arch, A.I.I.A., M.C.P. (IIT-KGP), LLB, A.I.T.P.</p>
                  </div>
                  <div>
                    <span className="text-[#A5A7AA] block text-[10px] uppercase">Registered Office:</span>
                    <span className="text-[#F2F2F0]">No. 81 B, Rajaji Street, Chengalpattu, Tamil Nadu - 603001</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#2A2D31] text-xs font-mono">
                  <strong className="text-[#F2F2F0] uppercase tracking-wider text-[11px] block">CONSULTANCY</strong>
                  <span className="block text-[#D8DAD8]">Architecture · Planning · Arbitration · Legal Profession</span>
                  <span className="block text-[#D9383A] text-[10px] tracking-widest uppercase font-semibold mt-0.5">ALL OVER INDIA &amp; ABROAD</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Key Pillars & Technical Drawing Case Study */}
            <div className="lg:col-span-5 space-y-8">
              {/* 4 Architectural Highlight Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                      className="p-5 bg-[#17191C] border border-[#2A2D31] hover:border-[#D9383A]/40 transition-colors shadow-md"
                    >
                      <div className="w-8 h-8 flex items-center justify-center bg-[#1E2025] border border-[#2A2D31] text-[#D9383A] mb-3">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-serif text-sm font-semibold text-[#F2F2F0] mb-1.5">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-[#A5A7AA] leading-relaxed">
                        {pillar.detail}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Technical Drawing Document Architecture: Nenmeli Residential Building */}
              <div className="border border-[#2A2D31] bg-[#17191C] p-6 space-y-4 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-mono text-[#D9383A] uppercase tracking-widest font-semibold">
                  <FileText className="w-4 h-4 text-[#D9383A]" />
                  <span>Technical Sanction Record</span>
                </div>
                <h4 className="font-serif text-base font-bold text-[#F2F2F0]">
                  Proposed Residential Building — Nenmeli Village
                </h4>
                <p className="text-xs text-[#A5A7AA] leading-relaxed">
                  Municipal sanctioned architectural drawings signed under Sri Janaki &amp; Associates by Ar. N. Jayaraman (Chengalpattu District).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-[#2A2D31]/60 text-[11px] font-mono text-[#D8DAD8]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D9383A]" />
                    <span>Ground &amp; First Floor Plans</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D9383A]" />
                    <span>Front Elevation &amp; Section</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D9383A]" />
                    <span>Site &amp; Layout Plan</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D9383A]" />
                    <span>Rainwater Harvesting Grid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dedicated Professional Associates Section */}
      <ProfessionalAssociates />
    </PageTransition>
  );
};
