import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Users, Compass, Layers } from 'lucide-react';

interface Associate {
  name: string;
  designation: string;
  email: string;
  mobile: string;
  telHref: string;
  discipline: string;
  accentVariant: 'red' | 'sky';
  icon: React.ElementType;
}

const associates: Associate[] = [
  {
    name: 'Er. Dinesh Palani',
    designation: 'Structural Consultant',
    email: 'engdineshpalani@gmail.com',
    mobile: '81445 58889',
    telHref: 'tel:+918144558889',
    discipline: 'Structural Engineering & Analysis',
    accentVariant: 'red',
    icon: Compass
  },
  {
    name: 'Ar. Abu Thalha',
    designation: 'Architect & Interior Designer',
    email: 'intdesignerat@gmail.com',
    mobile: '9344868080',
    telHref: 'tel:+919344868080',
    discipline: 'Architecture & Interior Spatial Design',
    accentVariant: 'sky',
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
    <section className="relative py-16 sm:py-20 bg-[#17191C] border-t border-[#2A2D31]">
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

          <p className="mt-4 text-sm sm:text-base text-[#A5A7AA] font-normal leading-relaxed">
            Collaborating professional consultants engaged across structural engineering analysis and bespoke interior architectural design to deliver integrated project execution.
          </p>
        </div>

        {/* Associates Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {associates.map((associate) => {
            const Icon = associate.icon;
            const isCopied = copiedEmail === associate.email;
            const isRed = associate.accentVariant === 'red';
            const nameColorClass = isRed ? 'text-[#D9383A]' : 'text-[#F2F2F0]';
            const accentColorClass = isRed ? 'text-[#D9383A]' : 'text-[#F2F2F0]';
            const topRuleClass = isRed ? 'border-t-[3px] border-t-[#D9383A]' : 'border-t-[3px] border-t-[#F2F2F0]';

            return (
              <div
                key={associate.email}
                className={`p-8 sm:p-10 bg-[#1E2025] border border-[#2A2D31] ${topRuleClass} hover:shadow-md transition-all duration-300 shadow-sm flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#2A2D31]">
                    <span className={`text-[10px] font-mono tracking-[0.22em] ${accentColorClass} uppercase font-semibold`}>
                      {associate.discipline}
                    </span>
                    <div className={`w-9 h-9 border border-[#2A2D31] bg-[#111214] flex items-center justify-center ${accentColorClass} transition-colors`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Name Prominently Displayed with Distinct Accent Color */}
                  <h3 className={`font-serif text-2xl sm:text-3xl font-bold ${nameColorClass} tracking-tight`}>
                    {associate.name}
                  </h3>

                  {/* Designation Beneath Name */}
                  <p className="mt-2 text-sm sm:text-base font-mono text-[#F2F2F0] font-medium tracking-wide">
                    {associate.designation}
                  </p>
                </div>

                {/* Email & Mobile Action Bar */}
                <div className="pt-6 mt-8 border-t border-[#2A2D31] space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={`mailto:${associate.email}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#F2F2F0] hover:text-[#D9383A] transition-colors group/link"
                    >
                      <Mail className={`w-4 h-4 ${accentColorClass} shrink-0`} />
                      <span className="underline decoration-[#2A2D31] group-hover/link:decoration-[#D9383A] underline-offset-4 break-all">
                        {associate.email}
                      </span>
                    </a>

                    <button
                      type="button"
                      onClick={() => handleCopy(associate.email)}
                      className="px-3 py-1.5 bg-[#111214] hover:bg-[#17191C] border border-[#2A2D31] text-[11px] font-mono text-[#F2F2F0] transition-all flex items-center gap-1.5 focus:outline-none shrink-0"
                      title={`Copy ${associate.email}`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#D9383A]" />
                          <span className="text-[#F2F2F0] font-semibold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div>
                    <a
                      href={associate.telHref}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#F2F2F0] hover:text-[#D9383A] transition-colors group/tel"
                    >
                      <Phone className={`w-4 h-4 ${accentColorClass} shrink-0`} />
                      <span className="font-semibold tracking-wide underline decoration-[#2A2D31] group-hover/tel:decoration-[#D9383A] underline-offset-4">
                        {associate.mobile}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Association Footnote */}
        <div className="mt-8 pt-4 border-t border-[#2A2D31] flex items-center gap-2 text-xs font-mono text-[#A5A7AA]">
          <Users className="w-3.5 h-3.5 text-[#D9383A] shrink-0" />
          <span>Independent professional consulting network for specialized project mandates</span>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalAssociates;

