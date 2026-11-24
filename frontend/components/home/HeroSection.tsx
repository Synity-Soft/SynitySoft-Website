"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles } from '@/components/ui/Icons';
import { FloatingBrandElements } from '@/components/brand/FloatingBrandElements';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

export const HeroSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const { resolvedMode } = useTheme();
  const isDarkMode = resolvedMode === "dark";
  const shouldReduceMotion = useReducedMotion();

  // Animation variants for choreographed reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const symbolRevealVariants = {
    hidden: { opacity: 0, scale: 0.8, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-brand-forest pt-28 pb-20 overflow-hidden text-white">
      {/* Dynamic Floating Brand Elements & Particle Grid */}
      <FloatingBrandElements opacity={0.65} interactive={true} />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Step 1 & 2: Center Official Logo Symbol Ambient Reveal */}
          <motion.div 
            variants={symbolRevealVariants}
            className="mb-6 relative flex items-center justify-center"
          >
            {/* Soft pulsing lime backlight glow */}
            <div className={`absolute w-24 h-48 rounded-full blur-2xl animate-pulse-glow ${
              isDarkMode ? 'bg-brand-lime/20' : 'bg-brand-surface/30'
            }`} />
            
            <div className="relative w-12 h-30 sm:w-16 sm:h-40">
              <Image
                src={isDarkMode ? "/brand/symbol-lime.png" : "/brand/symbol-dark.png"}
                alt="SynitySoft Official Emblem"
                fill
                sizes="(max-width: 640px) 48px, 64px"
                className={`object-contain filter ${
                  isDarkMode 
                    ? 'drop-shadow-[0_0_20px_rgba(199,255,0,0.4)]' 
                    : 'drop-shadow-[0_0_15px_rgba(15,36,17,0.2)]'
                }`}
                priority
              />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide bg-brand-surface/80 border border-brand-border text-brand-lime shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-lime" />
              <span>{t.hero.badge}</span>
              <span className="opacity-40">•</span>
              <span className="opacity-90">{t.brand.tagline}</span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl text-white leading-[1.12]"
          >
            {lang === 'en' ? (
              <>
                Technology built around the way the{' '}
                <span className={isDarkMode ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-brand-strong to-brand-lime animate-pulse-glow" : "text-brand-forest underline decoration-brand-border decoration-wavy decoration-2"}>
                  world needs it.
                </span>
              </>
            ) : (
              <>
                বিশ্বের বাস্তব প্রয়োজনের আঙ্গিকে{' '}
                <span className={isDarkMode ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-brand-strong to-brand-lime" : "text-brand-forest underline decoration-brand-border decoration-wavy decoration-2"}>
                  নির্মিত আধুনিক প্রযুক্তি।
                </span>
              </>
            )}
          </motion.h1>

          {/* Supporting Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg md:text-xl text-brand-gray-300 max-w-2xl font-normal leading-relaxed"
          >
            {t.hero.supporting}
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider bg-brand-lime text-brand-forest hover:bg-brand-lime-hover shadow-lime-glow hover:shadow-lime-glow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide bg-brand-surface/70 hover:bg-brand-surface border border-brand-border text-white hover:border-brand-lime/60 transition-all duration-200"
            >
              <span>{t.hero.ctaSecondary}</span>
            </Link>
          </motion.div>

          {/* Key Value Stats Bar */}
          <motion.div 
            variants={itemVariants}
            className="mt-14 pt-8 border-t border-brand-border/40 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 w-full max-w-3xl"
          >
            {t.hero.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-bold text-brand-lime font-mono">
                  {stat.value}
                </span>
                <span className="text-xs text-brand-gray-400 mt-1 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* Subtle bottom transition curve to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-brand-offwhite to-transparent pointer-events-none" />
    </section>
  );
};
