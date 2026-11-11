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
      <div className="min-h-screen bg-[#111214] pt-32 pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header: First Letter C in Red, NO FULL STOP */}
          <div className="flex flex-col mb-16 pb-8 border-b border-[#2A2D31]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-6 h-[1.5px] bg-[#D9383A]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#D9383A] uppercase font-semibold">
                CREDENTIALS &amp; GOVERNANCE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#F2F2F0] leading-[1.05] uppercase tracking-tight max-w-5xl"
              aria-label="Credentials"
            >
              <span className="text-[#D9383A] inline-block">C</span>
              <span>REDENTIALS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg lg:text-xl text-[#A5A7AA] max-w-3xl font-normal"
            >
              Verified degrees from premier national institutions, statutory council licensures, and pedagogical honors.
            </motion.p>
          </div>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Column 1: Academic Degrees */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#2A2D31]">
                <div className="w-8 h-8 flex items-center justify-center bg-[#1E2025] border border-[#2A2D31] text-[#D9383A]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h2 className="font-serif text-xl font-bold text-[#F2F2F0] uppercase tracking-wider">
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
                    className="p-6 bg-[#1E2025] border border-[#2A2D31] hover:border-[#D9383A]/60 transition-colors shadow-sm"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-[#D9383A] tracking-wider uppercase font-semibold">
                        {edu.year}
                      </span>
                      {edu.gradeScore && (
                        <span className="text-xs font-mono px-2 py-0.5 bg-[#111214] text-[#F2F2F0] border border-[#2A2D31] font-medium">
                          {edu.gradeScore}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#F2F2F0] mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-[#F2F2F0] font-medium mb-3">
                      {edu.institution}
                    </p>
                    {edu.details && (
                      <p className="text-xs text-[#A5A7AA] leading-relaxed">
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
                <div className="flex items-center gap-3 pb-4 border-b border-[#2A2D31]">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#1E2025] border border-[#2A2D31] text-[#D9383A]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h2 className="font-serif text-xl font-bold text-[#F2F2F0] uppercase tracking-wider">
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
                      className="p-4 sm:p-5 bg-[#1E2025] border border-[#2A2D31] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#D9383A]/50 transition-colors shadow-sm"
                    >
                      <div>
                        <h3 className="font-serif text-sm sm:text-base font-bold text-[#F2F2F0]">
                          {reg.organization}
                        </h3>
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
                            className="p-1.5 text-[#A5A7AA] hover:text-[#D9383A] transition-colors focus:outline-none"
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
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Honors & Recognition */}
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-3 pb-4 border-b border-[#2A2D31]">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#1E2025] border border-[#2A2D31] text-[#D9383A]">
                    <Award className="w-4 h-4" />
                  </div>
                  <h2 className="font-serif text-xl font-bold text-[#F2F2F0] uppercase tracking-wider">
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
                      className="p-5 bg-[#1E2025] border border-[#2A2D31] hover:border-[#D9383A]/50 transition-colors shadow-sm"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="font-serif text-base font-bold text-[#F2F2F0]">
                          {rec.title}
                        </h3>
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
