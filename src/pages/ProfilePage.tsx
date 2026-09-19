import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { ProfileEditorial } from '../components/ProfileEditorial';
import { Landmark, GraduationCap, Map, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProfilePage: React.FC = () => {
  const pillars = [
    {
      icon: GraduationCap,
      title: 'IIT Kharagpur City Planning & Law',
      detail: 'MCP (IIT-KGP 1999, CGPA 7.99), B.Arch (Madras 1998, GATE), and Bachelor of Laws (LLB) providing technical and statutory governance expertise.'
    },
    {
      icon: Map,
      title: 'Statutory Master Planning & GIS',
      detail: 'Lead planner for AMRUT 2.0 GIS Master Plans in Tamil Nadu and JNPA Master Plan DCPR preparations in Navi Mumbai.'
    },
    {
      icon: Landmark,
      title: 'Academic Governance & Leadership',
      detail: 'Former Principal In-Charge & HOD with two decades leading architecture institutions and COA accreditations.'
    },
    {
      icon: ShieldCheck,
      title: 'Statutory Registered Professional',
      detail: 'Registered with Council of Architecture (CA/98/24015), ITPI, IIA, DTCP, and Registered Valuer (IIV Pune CAT-I-F-8356).'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#090A0D] pt-32 pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Landing Screen */}
          <div className="relative mb-12 pb-8 border-b border-white/10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-6 h-[1.5px] bg-[#D9383A]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
                CHAPTER 06 // MONOGRAPH PROFILE
              </span>
            </motion.div>

            {/* Large Landing Heading: First Letter P in Red */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F5F5F3] uppercase leading-[1.05]"
            >
              <span className="text-[#D9383A] inline-block">P</span>
              <span>ROFILE</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg lg:text-xl text-[#CDD0D8] font-light max-w-3xl leading-relaxed"
            >
              Ar. Nenmeli Jayaraman — Principal Architect, City Planner &amp; Academic Consultant.
            </motion.p>
          </div>

          {/* Editorial Feature Image: quotes.jpeg with "Design. Build. Sustain." */}
          <ProfileEditorial />

          {/* Editorial 2-Column Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
            {/* Left Column: Narrative grounded in CV & Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-[#CDD0D8] text-base sm:text-lg font-light leading-relaxed"
            >
              <p>
                <strong className="font-medium text-[#F5F5F3]">Ar. Nenmeli Jayaraman</strong> is an architect, city planner, and senior academician whose career spans over two decades across architectural practice, statutory city planning, and institutional leadership.
              </p>
              <p>
                Holding a Postgraduate Degree in City Planning from <span className="text-[#F5F5F3] font-normal">IIT Kharagpur</span> (1999, CGPA 7.99), a Bachelor of Architecture from the <span className="text-[#F5F5F3] font-normal">University of Madras</span> (GATE qualified), and a <span className="text-[#F5F5F3] font-normal">Bachelor of Laws (LLB)</span>, his professional journey unites spatial design with statutory legal rigor.
              </p>
              <p>
                As Proprietor &amp; Chief Architect of <span className="text-[#F5F5F3] font-normal">Sri Janaki &amp; Associates</span> (Chengalpattu), he directs the planning, municipal sanctions, and construction of residential schemes, institutional layouts, and commercial developments across Tamil Nadu.
              </p>
              <p>
                His regional consultancy includes serving as Senior Urban Planner for the <span className="text-[#F5F5F3] font-normal">JNPA Master Plan</span> (Navi Mumbai) with Voyants Solutions, formulating GIS master plans under <span className="text-[#F5F5F3] font-normal">AMRUT 2.0</span> for Tamil Nadu cities, and early research at <span className="text-[#F5F5F3] font-normal">ORG</span>.
              </p>
              <p>
                In academia, he has served as Principal In-Charge &amp; Professor at <span className="text-[#F5F5F3] font-normal">MIDAS</span>, Professor &amp; HOD at AMACE and Bharath University, Professor at <span className="text-[#F5F5F3] font-normal">Crescent School of Architecture</span>, and faculty at <span className="text-[#F5F5F3] font-normal">Salalah College of Technology (Oman)</span>.
              </p>

              {/* Verified Practice Card Identity */}
              <div className="pt-6 mt-8 border border-white/10 bg-[#111319] p-6 space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono text-[#D9383A] tracking-widest uppercase">
                    PRACTICE IDENTITY // SRI JANAKI &amp; ASSOCIATES
                  </span>
                  <span className="text-[11px] font-mono text-[#9AA0AC]">EST. CHENGALPATTU</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-[#CDD0D8]">
                  <div>
                    <span className="text-[#9AA0AC] block text-[10px] uppercase">Principal Architect &amp; Planner:</span>
                    <strong className="text-[#F5F5F3] text-sm font-serif">Ar. N. Jayaraman</strong>
                    <p className="text-[11px] text-[#9AA0AC] mt-0.5">B.Arch, A.I.I.A., M.C.P. (IIT-KGP), LLB, A.I.T.P.</p>
                  </div>
                  <div>
                    <span className="text-[#9AA0AC] block text-[10px] uppercase">Registered Office:</span>
                    <span className="text-[#F5F5F3]">No. 81 B, Rajaji Street, Chengalpattu, Tamil Nadu - 603001</span>
                  </div>
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
                      className="p-5 bg-[#111319]/80 border border-white/8 hover:border-[#D9383A]/40 transition-colors"
                    >
                      <div className="w-8 h-8 flex items-center justify-center bg-[#171A24] border border-white/10 text-[#D9383A] mb-3">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-serif text-sm font-semibold text-[#F5F5F3] mb-1.5">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-[#9AA0AC] leading-relaxed">
                        {pillar.detail}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Technical Drawing Document Record */}
              <div className="border border-white/10 bg-[#111319] p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#D9383A] uppercase tracking-widest">
                  <FileText className="w-4 h-4 text-[#D9383A]" />
                  <span>Technical Sanction Record</span>
                </div>
                <h4 className="font-serif text-base font-bold text-[#F5F5F3]">
                  Proposed Residential Building — Nenmeli Village
                </h4>
                <p className="text-xs text-[#9AA0AC] leading-relaxed">
                  Municipal sanctioned architectural drawings signed under Sri Janaki &amp; Associates by Ar. N. Jayaraman (Chengalpattu District).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/5 text-[11px] font-mono text-[#CDD0D8]">
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
    </PageTransition>
  );
};
