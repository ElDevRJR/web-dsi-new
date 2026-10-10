import React from 'react';

interface HexagonMotifProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: number;
}

export const HexagonMotif: React.FC<HexagonMotifProps> = ({
  className = '',
  variant = 'light',
  size = 140,
}) => {
  const isDark = variant === 'dark';
  const strokeColor = isDark ? '#3B82F6' : '#1749C7';
  const strokeOpacity = isDark ? '0.25' : '0.18';
  const dotColor = isDark ? '#60A5FA' : '#1749C7';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <path
        d="M50 8L86 28V68L50 88L14 68V38"
        stroke={strokeColor}
        strokeOpacity={strokeOpacity}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeDasharray="4 2"
      />

      <path
        d="M50 8L50 50L86 68"
        stroke={strokeColor}
        strokeOpacity={strokeOpacity}
        strokeWidth="1.25"
      />
      <path
        d="M50 50L14 68"
        stroke={strokeColor}
        strokeOpacity={strokeOpacity}
        strokeWidth="1.25"
      />

      <circle cx="50" cy="50" r="2.5" fill={dotColor} fillOpacity="0.4" />
      <circle cx="50" cy="8" r="2" fill={dotColor} fillOpacity="0.5" />
      <circle cx="86" cy="28" r="2" fill={dotColor} fillOpacity="0.3" />
      <circle cx="14" cy="68" r="2" fill={dotColor} fillOpacity="0.3" />
    </svg>
  );
};
