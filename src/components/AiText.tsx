import React from 'react';

interface AiTextProps {
  text: string;
  className?: string;
  redClassName?: string;
}

/**
 * AiText component
 * Specifically renders phrases like "AI IN ARCHITECTURE" and "AI IN PLANNING"
 * where ONLY the letters 'A' and 'I' in the 'AI' acronym are styled in architectural red (#D9383A),
 * and all remaining characters (including 'in', 'Architecture', 'Planning')
 * retain the normal typography styling.
 */
export const AiText: React.FC<AiTextProps> = ({
  text,
  className = '',
  redClassName = 'text-[#D9383A]'
}) => {
  // Split on the 'AI' or 'Ai' acronym as a word
  const parts = text.split(/\b(AI|Ai)\b/g);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part === 'AI' || part === 'Ai') {
          return (
            <span key={index} className="inline-block">
              <span className={redClassName}>A</span>
              <span className={redClassName}>I</span>
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
};

export default AiText;
