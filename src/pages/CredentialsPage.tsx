import React, { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { educationData, registrationsData, recognitionsData } from '../data/credentialsData';
import { GraduationCap, ShieldCheck, Award, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const CredentialsPage: React.FC = () => {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedNumber(text);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0B0D12] pt-32 pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1.5px] bg-[#D9383A]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase">
                CHAPTER 04 // CREDENTIALS &amp; GOVERNANCE
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#F5F5F3] leading-tight max-w-4xl uppercase">
              Academic Qualifications &amp; Statutory Registrations
            </h1>
            <p className="mt-4 text-[#9AA0AC] max-w-2xl text-base sm:text-lg font-light">
              Verified degrees from premier national institutions, statutory council licensures, and pedagogical honors.
            </p>
          </div>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Column 1: Academic Degrees */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/15">
                <div className="w-8 h-8 flex items-center justify-center bg-[#171A24] border border-white/10 text-[#D9383A]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h2 className="font-serif text-xl font-bold text-[#F5F5F3] uppercase tracking-wider">
                  Academic Degrees
                </h2>
              </div>

              <div className="space-y-4">
                {educationData.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-6 bg-[#111319]/80 border border-white/8 hover:border-[#D9383A]/40 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-[#D9383A] tracking-wider uppercase font-semibold">
                        {edu.year}
                      </span>
                      {edu.gradeScore && (
                        <span className="text-xs font-mono px-2 py-0.5 bg-[#171A24] text-[#F5F5F3] border border-white/10">
                          {edu.gradeScore}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#F5F5F3] mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-[#CDD0D8] font-medium mb-3">
                      {edu.institution}
                    </p>
                    {edu.details && (
                      <p className="text-xs text-[#9AA0AC] font-light leading-relaxed">
                        {edu.details}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Column 2: Registrations & Recognition */}
            <div className="lg:col-span-6 space-y-10">
              {/* Statutory Registrations */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-white/15">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#171A24] border border-white/10 text-[#D9383A]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h2 className="font-serif text-xl font-bold text-[#F5F5F3] uppercase tracking-wider">
                    Council &amp; Statutory Registrations
                  </h2>
                </div>

                <div className="space-y-3">
                  {registrationsData.map((reg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                      className="p-4 sm:p-5 bg-[#111319]/80 border border-white/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#D9383A]/30 transition-colors"
                    >
                      <div>
                        <h3 className="font-serif text-sm sm:text-base font-bold text-[#F5F5F3]">
                          {reg.organization}
                        </h3>
                        <p className="text-xs text-[#9AA0AC] mt-0.5">
                          {reg.designationOrType} • {reg.location}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                        <span className="text-xs font-mono px-3 py-1.5 bg-[#181C26] text-[#E2C799] border border-white/10 tracking-wider font-medium">
                          {reg.registrationNumber}
                        </span>
                        {reg.registrationNumber.includes('/') && (
                          <button
                            onClick={() => handleCopy(reg.registrationNumber)}
                            className="p-1.5 text-[#9AA0AC] hover:text-[#D9383A] transition-colors focus:outline-none"
                            title="Copy registration number"
                            aria-label={`Copy ${reg.registrationNumber}`}
                          >
                            {copiedNumber === reg.registrationNumber ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Honors & Recognition */}
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-3 pb-4 border-b border-white/15">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#171A24] border border-white/10 text-[#D9383A]">
                    <Award className="w-4 h-4" />
                  </div>
                  <h2 className="font-serif text-xl font-bold text-[#F5F5F3] uppercase tracking-wider">
                    Honors &amp; Recognition
                  </h2>
                </div>

                <div className="space-y-3">
                  {recognitionsData.map((rec, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                      className="p-5 bg-[#111319]/80 border border-white/8 hover:border-[#D9383A]/30 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="font-serif text-base font-bold text-[#F5F5F3]">
                          {rec.title}
                        </h3>
                        {rec.year && (
                          <span className="text-xs font-mono text-[#D9383A]">{rec.year}</span>
                        )}
                      </div>
                      <p className="text-xs font-mono text-[#9AA0AC] mb-2">
                        Conferred by {rec.conferringBody}
                      </p>
                      <p className="text-xs text-[#CDD0D8] font-light leading-relaxed">
                        {rec.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
