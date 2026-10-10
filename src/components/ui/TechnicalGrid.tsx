import React from 'react';

interface TechnicalGridProps {
  className?: string;
  variant?: 'light' | 'dark';
  crosshairs?: boolean;
}

export const TechnicalGrid: React.FC<TechnicalGridProps> = ({
  className = '',
  variant = 'light',
  crosshairs = true,
}) => {
  const isDark = variant === 'dark';
  const lineColor = isDark ? '#ffffff08' : '#1749C706';
  const markColor = isDark ? 'text-white/20' : 'text-[#1749C7]/20';

  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, ${lineColor} 1px, transparent 1px), linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
        }}
      />

      {crosshairs && (
        <>
          <div className={`absolute top-6 left-6 font-mono text-[10px] ${markColor}`}>
            +
          </div>
          <div className={`absolute top-6 right-6 font-mono text-[10px] ${markColor}`}>
            +
          </div>
          <div className={`absolute bottom-6 left-6 font-mono text-[10px] ${markColor}`}>
            +
          </div>
          <div className={`absolute bottom-6 right-6 font-mono text-[10px] ${markColor}`}>
            +
          </div>
        </>
      )}
    </div>
  );
};
