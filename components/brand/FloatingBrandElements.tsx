"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

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

  // Scroll parallax
  const { scrollY } = useScroll();
  const yParallaxSlow = useTransform(scrollY, [0, 1000], [0, -80]);
  const yParallaxMedium = useTransform(scrollY, [0, 1000], [0, -140]);
  const yParallaxFast = useTransform(scrollY, [0, 1000], [0, -200]);

  useEffect(() => {
    if (!interactive || shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive, shouldReduceMotion]);

  // Floating symbols using the official SynitySoft symbol
  const symbols = [
    { id: 1, top: '10%', left: '7%', size: 48, duration: 16, delay: 0, depth: 15, rot: 15, opacity: 0.18, parallax: yParallaxSlow },
    { id: 2, top: '60%', left: '5%', size: 75, duration: 22, delay: 2, depth: 25, rot: -18, opacity: 0.12, parallax: yParallaxFast },
    { id: 3, top: '18%', right: '9%', size: 65, duration: 18, delay: 1, depth: 20, rot: 22, opacity: 0.2, parallax: yParallaxMedium },
    { id: 4, top: '72%', right: '6%', size: 95, duration: 26, delay: 3, depth: 30, rot: -12, opacity: 0.1, parallax: yParallaxSlow },
    { id: 5, top: '42%', right: '20%', size: 38, duration: 15, delay: 1.5, depth: 12, rot: 30, opacity: 0.15, parallax: yParallaxFast },
    { id: 6, top: '82%', left: '28%', size: 42, duration: 20, delay: 4, depth: 18, rot: -25, opacity: 0.14, parallax: yParallaxMedium },
  ];

  // Glowing particles
  const particles = [
    { id: 'p1', top: '14%', left: '22%', size: 6, color: '#C7FF00', duration: 7, delay: 0 },
    { id: 'p2', top: '32%', left: '14%', size: 4, color: '#C7FF00', duration: 9, delay: 1.2 },
    { id: 'p3', top: '26%', right: '28%', size: 5, color: '#EAF0E5', duration: 8, delay: 2 },
    { id: 'p4', top: '58%', right: '14%', size: 7, color: '#C7FF00', duration: 10, delay: 0.8 },
    { id: 'p5', top: '82%', left: '16%', size: 5, color: '#C7FF00', duration: 11, delay: 1.7 },
    { id: 'p6', top: '48%', left: '46%', size: 3, color: '#EAF0E5', duration: 6, delay: 2.5 },
    { id: 'p7', top: '68%', right: '32%', size: 4, color: '#C7FF00', duration: 8.5, delay: 3 },
  ];

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Soft atmospheric gradient halos */}
      <motion.div 
        style={shouldReduceMotion ? undefined : { y: yParallaxSlow }}
        className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full bg-brand-lime/5 blur-[120px] pointer-events-none" 
      />
      <motion.div 
        style={shouldReduceMotion ? undefined : { y: yParallaxMedium }}
        className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] rounded-full bg-brand-surface-light/40 blur-[140px] pointer-events-none" 
      />

      {/* Floating SynitySoft symbols with mouse & scroll parallax */}
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
              height: item.size * 2.5,
              opacity: item.opacity,
              y: shouldReduceMotion ? 0 : item.parallax,
            }}
          >
            <motion.div
              className="w-full h-full relative"
              animate={shouldReduceMotion ? undefined : {
                x: [xOffset, xOffset + 14, xOffset - 14, xOffset],
                y: [yOffset, yOffset - 18, yOffset + 12, yOffset],
                rotate: [item.rot, item.rot + 8, item.rot - 8, item.rot],
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
                className="object-contain filter drop-shadow-[0_0_14px_rgba(199,255,0,0.3)]"
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Glowing particles */}
      {particles.map((p) => (
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
            y: [0, -16, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      {/* Delicate grid pattern */}
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
