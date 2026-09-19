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
          <span>RCHITECTURE</span>
        </span>
        <span className="block text-[#9AA0AC]">&amp;</span>
        <span className="block">
          <span>CI</span>
          <span className="text-[#D9383A] inline-block">T</span>
          <span>Y </span>
          <span className="text-[#D9383A] inline-block">P</span>
          <span>LANNING.</span>
        </span>
      </span>
    );
  }

  return (
    <span className={className} aria-label="Architecture & City Planning">
      <span className="text-[#D9383A]">A</span>rchitecture &amp; CI
      <span className="text-[#D9383A]">T</span>Y{' '}
      <span className="text-[#D9383A]">P</span>lanning
    </span>
  );
};
