'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { HTMLAttributes } from 'react';

export function Reveal({
  children,
  className,
}: HTMLAttributes<HTMLDivElement>) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
