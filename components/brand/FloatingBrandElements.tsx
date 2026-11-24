"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

interface FloatingBrandElementsProps {
  density?: 'low' | 'normal' | 'high';
  opacity?: number;
  interactive?: boolean;
}

export const FloatingBrandElements: React.FC<FloatingBrandElementsProps> = ({
  density = 'normal',
  opacity = 0.6,
  interactive = true,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!interactive || shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive, shouldReduceMotion]);

  // Floating symbols using the official SynitySoft symbol image
  const symbols = [
    { id: 1, top: '12%', left: '8%', size: 45, duration: 18, delay: 0, depth: 15, rot: 15, opacity: 0.18 },
    { id: 2, top: '65%', left: '4%', size: 70, duration: 24, delay: 2, depth: 25, rot: -20, opacity: 0.12 },
    { id: 3, top: '20%', right: '10%', size: 60, duration: 20, delay: 1, depth: 20, rot: 25, opacity: 0.2 },
    { id: 4, top: '75%', right: '7%', size: 90, duration: 28, delay: 3, depth: 30, rot: -10, opacity: 0.1 },
    { id: 5, top: '45%', right: '22%', size: 35, duration: 16, delay: 1.5, depth: 12, rot: 35, opacity: 0.15 },
    { id: 6, top: '80%', left: '30%', size: 40, duration: 22, delay: 4, depth: 18, rot: -30, opacity: 0.14 },
  ];

  // Geometric glowing particles
  const particles = [
    { id: 'p1', top: '15%', left: '25%', size: 6, color: '#C7FF00', duration: 7, delay: 0 },
    { id: 'p2', top: '35%', left: '15%', size: 4, color: '#C7FF00', duration: 9, delay: 1.2 },
    { id: 'p3', top: '28%', right: '30%', size: 5, color: '#EAF0E5', duration: 8, delay: 2 },
    { id: 'p4', top: '60%', right: '15%', size: 7, color: '#C7FF00', duration: 10, delay: 0.8 },
    { id: 'p5', top: '85%', left: '18%', size: 5, color: '#C7FF00', duration: 11, delay: 1.7 },
    { id: 'p6', top: '50%', left: '48%', size: 3, color: '#EAF0E5', duration: 6, delay: 2.5 },
    { id: 'p7', top: '70%', right: '35%', size: 4, color: '#C7FF00', duration: 8.5, delay: 3 },
  ];

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Soft atmospheric gradient halos */}
      <div 
        className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full bg-brand-lime/5 blur-[120px] pointer-events-none" 
      />
      <div 
        className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] rounded-full bg-brand-surface-light/40 blur-[140px] pointer-events-none" 
      />

      {/* Actual floating SynitySoft symbols */}
      {symbols.map((item) => {
        const xOffset = shouldReduceMotion ? 0 : mousePos.x * item.depth;
        const yOffset = shouldReduceMotion ? 0 : mousePos.y * item.depth;

        return (
          <motion.div
            key={item.id}
            className="absolute"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              width: item.size,
              height: item.size * 2.5, // Natural ratio of the symbol
              opacity: item.opacity,
            }}
            animate={shouldReduceMotion ? undefined : {
              x: [xOffset, xOffset + 12, xOffset - 12, xOffset],
              y: [yOffset, yOffset - 16, yOffset + 10, yOffset],
              rotate: [item.rot, item.rot + 6, item.rot - 6, item.rot],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            <Image
              src="/brand/symbol-lime.png"
              alt=""
              fill
              sizes={`${item.size * 2}px`}
              className="object-contain filter drop-shadow-[0_0_12px_rgba(199,255,0,0.25)]"
            />
          </motion.div>
        );
      })}

      {/* Subtle glowing geometric particles */}
      {particles.map((p) => {
        return (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              top: p.top,
              left: p.left,
              right: p.right,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              boxShadow: `0 0 12px ${p.color}`,
            }}
            animate={shouldReduceMotion ? undefined : {
              scale: [1, 1.4, 0.9, 1],
              opacity: [0.3, 0.8, 0.4, 0.3],
              y: [0, -14, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        );
      })}

      {/* Delicate geometric line matrix */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#C7FF00" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  );
};
