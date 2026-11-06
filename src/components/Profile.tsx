import React from 'react';
import { Landmark, GraduationCap, Map, ShieldCheck } from 'lucide-react';

export const Profile: React.FC = () => {
  const pillars = [
    {
      icon: GraduationCap,
      title: 'IIT Kharagpur City Planning & Law',
      detail: 'Postgraduate city planning foundation (1999) and LLB uniting regional spatial analytics, statutory bylaws, and legal compliance.'
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
    <section id="profile" className="relative py-28 sm:py-36 bg-[#111214] border-t border-[#2A2D31] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-[1.5px] bg-[#D9383A]" />
            <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">PROFILE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F2F2F0] leading-[1.15] max-w-5xl uppercase">
            An Architectural Practice Rooted in Planning, Education &amp; Experience
          </h2>
        </div>

        {/* Editorial 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative grounded in CV */}
          <div className="lg:col-span-7 space-y-6 text-[#D8DAD8] text-base sm:text-lg font-light leading-relaxed">
            <p>
              <strong className="font-medium text-[#F2F2F0]">Ar. Nenmeli Jayaraman</strong> is an architect, city planner, academician, and lawyer whose career spans over two decades across architectural practice, statutory master planning, and institutional leadership.
            </p>
            <p>
              Holding a Postgraduate Degree in City Planning from the <span className="text-[#F2F2F0] font-normal">Indian Institute of Technology (IIT) Kharagpur</span>, a Bachelor of Architecture from the <span className="text-[#F2F2F0] font-normal">University of Madras</span> (GATE qualified), and a <span className="text-[#F2F2F0] font-normal">Bachelor of Laws (LLB)</span>, his professional journey bridges technical rigor with contextual spatial planning and legal arbitration.
            </p>
            <p>
              His consultancy portfolio includes serving as Senior Urban Planner &amp; Team Leader for the <span className="text-[#F2F2F0] font-normal">Jawaharlal Nehru Port Authority (JNPA) Master Plan</span> with Voyants Solutions, formulating GIS-based statutory master plans under the <span className="text-[#F2F2F0] font-normal">AMRUT 2.0 Sub-Scheme</span> for Tamil Nadu cities with Capital Engineering Consultancy, and early research at the <span className="text-[#F2F2F0] font-normal">Operations Research Group (ORG)</span>.
            </p>
            <p>
              In academia, he has served as Principal in-charge and Professor at <span className="text-[#F2F2F0] font-normal">MIDAS (Swarnabhoomi)</span>, Professor &amp; HOD at AMACE and Bharath University, Professor at <span className="text-[#F2F2F0] font-normal">Crescent School of Architecture</span>, and international faculty at <span className="text-[#F2F2F0] font-normal">Salalah College of Technology in the Sultanate of Oman</span>.
            </p>

            {/* Architectural Callout Quote */}
            <div className="pt-6 mt-8 border-l-2 border-[#D9383A] pl-6 bg-[#17191C] py-4 border-y border-r border-[#2A2D31]">
              <p className="font-serif italic text-[#F2F2F0] text-lg sm:text-xl">
                &ldquo;Master planning is the deliberate synthesis of statutory policy, spatial geography, and human habitat — ensuring cities evolve with structural clarity and sustainable purpose.&rdquo;
              </p>
              <span className="block mt-3 text-xs font-mono text-[#A5A7AA] uppercase tracking-widest">
                — Ar. Nenmeli Jayaraman, MCP (IIT-KGP)
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Image & Key Pillars */}
          <div className="lg:col-span-5 space-y-8">
            {/* Visual Material Accent */}
            <div className="relative border border-[#2A2D31] overflow-hidden bg-[#17191C] group">
              <img
                src="/images/architectural-detail.jpg"
                alt="Architectural concrete materiality and light detail"
                className="w-full h-64 object-cover object-center grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111214] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#A5A7AA]">
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
                    className="p-5 bg-[#17191C] border border-[#2A2D31] hover:border-[#D9383A]/40 transition-colors"
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
