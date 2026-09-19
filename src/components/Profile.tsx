import React from 'react';
import { Landmark, GraduationCap, Map, ShieldCheck } from 'lucide-react';

export const Profile: React.FC = () => {
  const pillars = [
    {
      icon: GraduationCap,
      title: 'IIT Kharagpur City Planning',
      detail: 'Postgraduate city planning foundation (1999) uniting regional spatial analytics, infrastructure frameworks, and demographic modeling.'
    },
    {
      icon: Map,
      title: 'Statutory Master Planning & GIS',
      detail: 'Lead planner for key regional projects including AMRUT 2.0 GIS Master Plans in Tamil Nadu and JNPA Master Plan DCPR preparations.'
    },
    {
      icon: Landmark,
      title: 'Academic & Institutional Governance',
      detail: 'Former Principal In-Charge & HOD with over two decades leading architecture institutions, COA accreditations, and studio curricula.'
    },
    {
      icon: ShieldCheck,
      title: 'Statutory Registered Professional',
      detail: 'Registered with Council of Architecture (COA New Delhi), ITPI, IIA, DTCP, and Registered Valuer (IIV Pune).'
    }
  ];

  return (
    <section id="profile" className="relative py-28 sm:py-36 bg-[#090A0D] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-[1px] bg-[#C2A87E]" />
            <span className="text-xs font-mono tracking-[0.25em] text-[#C2A87E] uppercase">PROFILE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F5F3] leading-[1.15] max-w-5xl uppercase">
            An Architectural Practice Rooted in Planning, Education &amp; Experience.
          </h2>
        </div>

        {/* Editorial 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative grounded in CV */}
          <div className="lg:col-span-7 space-y-6 text-[#CDD0D8] text-base sm:text-lg font-light leading-relaxed">
            <p>
              <strong className="font-medium text-[#F5F5F3]">Ar. Nenmeli Jayaraman</strong> is an architect, urban planner, and senior academician whose career spans over two decades across architectural practice, statutory master planning, and institutional leadership.
            </p>
            <p>
              Holding a Postgraduate Degree in City Planning from the <span className="text-[#F5F5F3] font-normal">Indian Institute of Technology (IIT) Kharagpur</span> and a Bachelor of Architecture from the <span className="text-[#F5F5F3] font-normal">University of Madras</span> (GATE qualified), his professional journey bridges technical rigor with contextual spatial planning.
            </p>
            <p>
              His consultancy portfolio includes serving as Senior Urban Planner &amp; Team Leader for the <span className="text-[#F5F5F3] font-normal">Jawaharlal Nehru Port Authority (JNPA) Master Plan</span> with Voyants Solutions, formulating GIS-based statutory master plans under the <span className="text-[#F5F5F3] font-normal">AMRUT 2.0 Sub-Scheme</span> for Tamil Nadu cities with Capital Engineering Consultancy, and early research at the <span className="text-[#F5F5F3] font-normal">Operations Research Group (ORG)</span>.
            </p>
            <p>
              In academia, he has served as Principal in-charge and Professor at <span className="text-[#F5F5F3] font-normal">MIDAS (Swarnabhoomi)</span>, Professor &amp; HOD at AMACE and Bharath University, Professor at <span className="text-[#F5F5F3] font-normal">Crescent School of Architecture</span>, and international faculty at <span className="text-[#F5F5F3] font-normal">Salalah College of Technology in the Sultanate of Oman</span>.
            </p>

            {/* Architectural Callout Quote */}
            <div className="pt-6 mt-8 border-l-2 border-[#C2A87E] pl-6 bg-[#111319]/40 py-4">
              <p className="font-serif italic text-[#F5F5F3] text-lg sm:text-xl">
                &ldquo;Master planning is the deliberate synthesis of statutory policy, spatial geography, and human habitat — ensuring cities evolve with structural clarity and sustainable purpose.&rdquo;
              </p>
              <span className="block mt-3 text-xs font-mono text-[#9AA0AC] uppercase tracking-widest">
                — Ar. Nenmeli Jayaraman, MCP (IIT-KGP)
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Image & Key Pillars */}
          <div className="lg:col-span-5 space-y-8">
            {/* Visual Material Accent */}
            <div className="relative border border-white/10 overflow-hidden bg-[#111319] group">
              <img
                src="/images/architectural-detail.jpg"
                alt="Architectural concrete materiality and light detail"
                className="w-full h-64 object-cover object-center grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#9AA0AC]">
                <span>CHENNAI &amp; CHENGALPATTU</span>
                <span>EST. PRACTICE</span>
              </div>
            </div>

            {/* 4 Architectural Highlight Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 bg-[#111319]/70 border border-white/8 hover:border-[#C2A87E]/40 transition-colors"
                  >
                    <div className="w-8 h-8 flex items-center justify-center bg-[#171A22] border border-white/10 text-[#C2A87E] mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-sm font-semibold text-[#F5F5F3] mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#9AA0AC] leading-relaxed">
                      {pillar.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
