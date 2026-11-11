import React, { useState } from 'react';
import { educationData, registrationsData, recognitionsData } from '../data/credentialsData';
import { GraduationCap, ShieldCheck, Award, Copy, Check } from 'lucide-react';

export const Qualifications: React.FC = () => {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedNumber(text);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  return (
    <section id="qualifications" className="relative py-28 sm:py-36 bg-[#111214] border-t border-[#2A2D31]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-[1.5px] bg-[#D9383A]" />
            <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">CREDENTIALS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F2F2F0] leading-tight max-w-4xl uppercase">
            Academic Qualifications &amp; Professional Registrations
          </h2>
          <p className="mt-4 text-[#A5A7AA] max-w-2xl text-sm sm:text-base font-normal">
            Verified academic degrees from premier national institutes and statutory council registrations.
          </p>
        </div>

        {/* 3-Column Structured Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Academic Degrees (IIT KGP, B.Arch, GATE) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[#2A2D31]">
              <div className="w-8 h-8 flex items-center justify-center bg-[#1E2025] border border-[#2A2D31] text-[#D9383A]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#F2F2F0] uppercase tracking-wider">
                Academic Degrees
              </h3>
            </div>

            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#1E2025] border border-[#2A2D31] hover:border-[#D9383A]/60 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-[#D9383A] tracking-wider uppercase font-semibold">
                      {edu.year}
                    </span>
                    {edu.gradeScore && (
                      <span className="text-xs font-mono px-2 py-0.5 bg-[#111214] text-[#F2F2F0] border border-[#2A2D31]">
                        {edu.gradeScore}
                      </span>
                    )}
                  </div>

                  <h4 className="font-serif text-lg font-bold text-[#F2F2F0] mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-[#F2F2F0] font-medium mb-3">
                    {edu.institution}
                  </p>
                  {edu.details && (
                    <p className="text-xs text-[#A5A7AA] leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Professional Council Registrations & Honors */}
          <div className="lg:col-span-6 space-y-8">
            {/* Registrations Block */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#2A2D31]">
                <div className="w-8 h-8 flex items-center justify-center bg-[#1E2025] border border-[#2A2D31] text-[#D9383A]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#F2F2F0] uppercase tracking-wider">
                  Council &amp; Statutory Registrations
                </h3>
              </div>

              <div className="space-y-3">
                {registrationsData.map((reg, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 bg-[#1E2025] border border-[#2A2D31] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <h4 className="font-serif text-sm sm:text-base font-bold text-[#F2F2F0]">
                        {reg.organization}
                      </h4>
                      <p className="text-xs text-[#A5A7AA] mt-0.5">
                        {reg.designationOrType} • {reg.location}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                      <span className="text-xs font-mono px-3 py-1.5 bg-[#111214] text-[#D9383A] border border-[#2A2D31] tracking-wider font-semibold">
                        {reg.registrationNumber}
                      </span>
                      {reg.registrationNumber.includes('/') && (
                        <button
                          onClick={() => handleCopy(reg.registrationNumber)}
                          className="p-1.5 text-[#A5A7AA] hover:text-[#D9383A] transition-colors"
                          title="Copy registration number"
                          aria-label={`Copy ${reg.registrationNumber}`}
                        >
                          {copiedNumber === reg.registrationNumber ? (
                            <Check className="w-3.5 h-3.5 text-[#D9383A]" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recognition & Honors Block */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-3 pb-4 border-b border-[#2A2D31]">
                <div className="w-8 h-8 flex items-center justify-center bg-[#1E2025] border border-[#2A2D31] text-[#D9383A]">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#F2F2F0] uppercase tracking-wider">
                  Honors &amp; Recognition
                </h3>
              </div>

              <div className="space-y-3">
                {recognitionsData.map((rec, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-[#1E2025] border border-[#2A2D31] hover:border-[#D9383A]/50 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-serif text-base font-bold text-[#F2F2F0]">
                        {rec.title}
                      </h4>
                      {rec.year && (
                        <span className="text-xs font-mono text-[#D9383A] font-semibold">{rec.year}</span>
                      )}
                    </div>
                    <p className="text-xs font-mono text-[#A5A7AA] mb-2">
                      Conferred by {rec.conferringBody}
                    </p>
                    <p className="text-xs text-[#F2F2F0] leading-relaxed">
                      {rec.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
