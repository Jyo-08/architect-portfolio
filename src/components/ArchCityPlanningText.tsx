import React from 'react';

interface ArchCityPlanningTextProps {
  className?: string;
  isStacked?: boolean;
}

export const ArchCityPlanningText: React.FC<ArchCityPlanningTextProps> = ({
  className = '',
  isStacked = false,
}) => {
  if (isStacked) {
    return (
      <span className={`block ${className}`} aria-label="Architecture & City Planning">
        <span className="block">
          <span className="text-[#D9383A] inline-block">A</span>
          <span className="text-[#F2F2F0]">RCHITECTURE</span>
        </span>
        <span className="block text-[#A5A7AA]">&amp;</span>
        <span className="block">
          <span className="text-[#F2F2F0]">CIT</span>
          <span className="text-[#D9383A] inline-block">Y </span>
          <span className="text-[#D9383A] inline-block">P</span>
          <span className="text-[#F2F2F0]">LANNING</span>
        </span>
      </span>
    );
  }

  return (
    <span className={className} aria-label="Architecture & City Planning">
      <span className="text-[#D9383A]">A</span>
      <span className="text-[#F2F2F0]">rchitecture </span>
      <span className="text-[#A5A7AA]">&amp; </span>
      <span className="text-[#F2F2F0]">Cit</span>
      <span className="text-[#D9383A]">y</span>{' '}
      <span className="text-[#D9383A]">P</span>
      <span className="text-[#F2F2F0]">lanning</span>
    </span>
  );
};
