import React from 'react';

interface PracticeLogoProps {
  className?: string;
  size?: number;
}

export const PracticeLogo: React.FC<PracticeLogoProps> = ({
  className = '',
  size = 36,
}) => {
  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        {/* Outer Diamond Rhombus */}
        <polygon
          points="50,4 96,50 50,96 4,50"
          stroke="#22C55E"
          strokeWidth="3.5"
          fill="#0B0D12"
          className="transition-colors duration-300"
        />

        {/* Inner Precision Offset Diamond Guideline */}
        <polygon
          points="50,12 88,50 50,88 12,50"
          stroke="#22C55E"
          strokeWidth="1"
          strokeDasharray="2 2"
          opacity="0.4"
        />

        {/* Foundation Horizontal Base Beam (Green) */}
        <rect
          x="28"
          y="66"
          width="44"
          height="12"
          rx="1"
          fill="#0D1117"
          stroke="#22C55E"
          strokeWidth="2.5"
        />

        {/* Vertical Architectural Column / Pillar Core (Red Accent) */}
        <rect
          x="44"
          y="20"
          width="12"
          height="48"
          fill="#D9383A"
          stroke="#22C55E"
          strokeWidth="2"
        />

        {/* Central Vertical Plumb Line */}
        <line
          x1="50"
          y1="22"
          x2="50"
          y2="66"
          stroke="#F5F5F3"
          strokeWidth="1.5"
          opacity="0.85"
        />

        {/* Capital / Header Beam */}
        <rect
          x="38"
          y="18"
          width="24"
          height="5"
          rx="1"
          fill="#D9383A"
          stroke="#22C55E"
          strokeWidth="1.5"
        />

        {/* Quadrant Accent Dots */}
        <circle cx="28" cy="46" r="1.5" fill="#22C55E" />
        <circle cx="72" cy="46" r="1.5" fill="#22C55E" />
      </svg>
    </div>
  );
};
