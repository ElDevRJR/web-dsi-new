import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  aspectRatio?: string;
  delay?: number;
  duration?: number;
  overlayScrim?: boolean;
  children?: React.ReactNode;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  className = '',
  direction = 'up',
  delay = 0.1,
  duration = 0.85,
  overlayScrim = false,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {overlayScrim && (
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
        )}
        {children}
      </div>
    );
  }

  const getVariants = () => {
    switch (direction) {
      case 'left':
        return {
          hidden: { clipPath: 'inset(0% 100% 0% 0%)', scale: 1.06 },
          visible: { clipPath: 'inset(0% 0% 0% 0%)', scale: 1 },
        };
      case 'right':
        return {
          hidden: { clipPath: 'inset(0% 0% 0% 100%)', scale: 1.06 },
          visible: { clipPath: 'inset(0% 0% 0% 0%)', scale: 1 },
        };
      case 'down':
        return {
          hidden: { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.06 },
          visible: { clipPath: 'inset(0% 0% 0% 0%)', scale: 1 },
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 1.1 },
          visible: { opacity: 1, scale: 1 },
        };
      case 'up':
      default:
        return {
          hidden: { clipPath: 'inset(0% 0% 100% 0%)', scale: 1.08 },
          visible: { clipPath: 'inset(0% 0% 0% 0%)', scale: 1 },
        };
    }
  };

  const variants = getVariants();

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="w-full h-full"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {overlayScrim && (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent pointer-events-none" />
      )}

      {children}
    </div>
  );
};
