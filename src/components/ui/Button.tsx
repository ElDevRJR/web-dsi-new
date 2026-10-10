import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  isExternal,
  children,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium tracking-tight whitespace-nowrap shrink-0 transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5',
  }[size];

  const variantStyles = {
    primary:
      'bg-[#1749C7] text-white hover:bg-[#123BA5] active:bg-[#0E2E83] focus-visible:ring-[#1749C7] shadow-sm shadow-[#1749C7]/20',
    secondary:
      'bg-[#EFF6FF] text-[#1749C7] hover:bg-[#DBEAFE] active:bg-[#BFDBFE] focus-visible:ring-[#1749C7]',
    navy:
      'bg-[#10274D] text-white hover:bg-[#0C1E3C] active:bg-[#08152B] focus-visible:ring-[#10274D]',
    outline:
      'border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-400 active:bg-slate-100 focus-visible:ring-[#1749C7]',
    ghost:
      'text-slate-700 hover:text-[#1749C7] hover:bg-slate-100/70 active:bg-slate-200 focus-visible:ring-[#1749C7]',
  }[variant];

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedClasses}`}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={`group ${combinedClasses}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={`group ${combinedClasses}`} {...props}>
      {content}
    </button>
  );
};
