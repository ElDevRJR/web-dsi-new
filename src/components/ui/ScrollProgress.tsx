import React from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react';

export const ScrollProgress: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#1749C7] origin-left z-[60] pointer-events-none"
      aria-hidden="true"
    />
  );
};
