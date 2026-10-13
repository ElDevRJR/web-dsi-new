
import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface MotionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  lift?: number;
}

export const MotionCard: React.FC<MotionCardProps> = ({
  children,
  className = '',
  delay = 0,
  lift = 7,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      {...props}
      initial={{
        opacity: 0,
        y: 32,
        filter: 'blur(7px)',
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      whileHover={{
        y: -lift,
        scale: 1.008,
        boxShadow: '0 22px 55px -28px rgba(23, 73, 199, 0.28)',
      }}
      transition={{
        opacity: {
          duration: 0.8,
          delay,
          ease: [0.16, 1, 0.3, 1],
        },
        filter: {
          duration: 0.8,
          delay,
          ease: [0.16, 1, 0.3, 1],
        },
        y: {
          duration: 0.8,
          delay,
          ease: [0.16, 1, 0.3, 1],
        },
        scale: {
          duration: 0.28,
          ease: 'easeOut',
        },
        boxShadow: {
          duration: 0.28,
          ease: 'easeOut',
        },
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};
