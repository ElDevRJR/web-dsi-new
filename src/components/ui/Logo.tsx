
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  className = '',
  showSubtitle = true,
}) => {
  const isDark = variant === 'dark';

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1749C7] rounded-sm ${className}`}
      aria-label="DSISAC - Inicio"
    >
      <img
        src="/images/dsisac-logo.png"
        alt="DSISAC"
        className="block h-10 w-auto max-w-[180px] object-contain shrink-0"
      />
    </Link>
  );
};