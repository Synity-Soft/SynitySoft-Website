"use client";

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-lime via-white to-brand-lime origin-left z-[9999] pointer-events-none shadow-[0_0_12px_#C7FF00]"
      style={{ scaleX }}
    />
  );
};
