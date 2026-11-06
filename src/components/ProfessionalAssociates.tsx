import React, { useState } from 'react';
import { Mail, Copy, Check, Users, Compass, Layers } from 'lucide-react';

interface Associate {
  name: string;
  designation: string;
  email: string;
  discipline: string;
  icon: React.ElementType;
}

const associates: Associate[] = [
  {
    name: 'Er. Dinesh Palani',
    designation: 'Structural Consultant',
    email: 'engdineshpalani@gmail.com',
    discipline: 'Structural Engineering & Analysis',
    icon: Compass
  },
  {
    name: 'Ar. Abu Thalha',
    designation: 'Architect & Interior Designer',
    email: 'intdesignerat@gmail.com',
    discipline: 'Architecture & Interior Spatial Design',
    icon: Layers
  }
];

export const ProfessionalAssociates: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <section className="relative py-16 sm:py-20 bg-[#141619] border-t border-[#2A2D31]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#D9383A]" />
            <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
              ALLIED DISCIPLINES &amp; COLLABORATION
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F2F2F0] uppercase tracking-tight">
            PROFESSIONAL ASSOCIATES
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#A5A7AA] font-light leading-relaxed">
            Collaborating professional consultants engaged across structural engineering analysis and bespoke interior architectural design to deliver integrated project execution.
          </p>
        </div>

        {/* Associates Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {associates.map((associate) => {
            const Icon = associate.icon;
            const isCopied = copiedEmail === associate.email;

            return (
              <div
                key={associate.email}
                className="p-8 sm:p-10 bg-[#17191C] border border-[#2A2D31] hover:border-[#D9383A]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#2A2D31]">
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
                      {associate.discipline}
                    </span>
                    <div className="w-9 h-9 border border-[#2A2D31] bg-[#1E2025] flex items-center justify-center text-[#A5A7AA] group-hover:text-[#D9383A] group-hover:border-[#D9383A]/40 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Name Prominently Displayed */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F2F2F0] tracking-tight group-hover:text-white transition-colors">
                    {associate.name}
                  </h3>

                  {/* Designation */}
                  <p className="mt-2 text-sm sm:text-base font-mono text-[#D8DAD8] font-medium tracking-wide">
                    {associate.designation}
                  </p>
                </div>

                {/* Email Action Bar */}
                <div className="pt-8 mt-8 border-t border-[#2A2D31] flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={`mailto:${associate.email}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#F2F2F0] hover:text-[#D9383A] transition-colors group/link"
                  >
                    <Mail className="w-4 h-4 text-[#D9383A] shrink-0" />
                    <span className="underline decoration-[#2A2D31] group-hover/link:decoration-[#D9383A] underline-offset-4">
                      {associate.email}
                    </span>
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopy(associate.email)}
                    className="px-3 py-1.5 bg-[#1E2025] hover:bg-[#26292F] border border-[#2A2D31] hover:border-white/30 text-[11px] font-mono text-[#A5A7AA] hover:text-[#F2F2F0] transition-all flex items-center gap-1.5 focus:outline-none"
                    title={`Copy ${associate.email}`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Association Footnote */}
        <div className="mt-8 pt-4 border-t border-[#2A2D31]/60 flex items-center gap-2 text-xs font-mono text-[#72757C]">
          <Users className="w-3.5 h-3.5 text-[#D9383A] shrink-0" />
          <span>Independent professional consulting network for specialized project mandates</span>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalAssociates;

