import React from 'react';
import { BlurText } from './BlurText';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  isDark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  description,
  align = 'left',
  className = '',
  isDark = false,
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col max-w-3xl ${alignClass} ${className}`}>
      {kicker && (
        <span
          className={`text-xs font-semibold tracking-wider uppercase mb-2.5 ${
            isDark ? 'text-blue-400' : 'text-[#1749C7]'
          }`}
        >
          {kicker}
        </span>
      )}
      <BlurText
        text={title}
        as="h2"
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance ${
          isDark ? 'text-white' : 'text-[#10274D]'
        }`}
      />
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed text-pretty ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
