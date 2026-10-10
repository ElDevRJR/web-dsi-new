import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface BlurTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  className?: string;
  wordByWord?: boolean;
  delay?: number;
  duration?: number;
}

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  as = 'h2',
  className = '',
  wordByWord = false,
  delay = 0,
  duration = 0.75,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Component = as;
    return <Component className={className}>{text}</Component>;
  }

  const Component = motion[as] as typeof motion.h2;

  if (!wordByWord) {
    return (
      <Component
        initial={{ opacity: 0, filter: 'blur(8px)', y: 14 }}
        whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={className}
      >
        {text}
      </Component>
    );
  }

  const words = text.split(' ');

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={`inline-flex flex-wrap gap-x-[0.28em] ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={{
            hidden: { opacity: 0, filter: 'blur(8px)', y: 12 },
            visible: {
              opacity: 1,
              filter: 'blur(0px)',
              y: 0,
              transition: {
                duration: 0.65,
                delay: delay + index * 0.045,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
};
