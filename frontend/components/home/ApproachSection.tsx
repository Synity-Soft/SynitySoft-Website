"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/Reveal';

export const ApproachSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-brand-offwhite text-brand-forest relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up" className="max-w-3xl mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-surface bg-brand-lightgreen px-3.5 py-1.5 rounded-full mb-3 border border-brand-surface/20">
            {t.approach.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
            {t.approach.title}
          </h2>
        </Reveal>

        {/* 4 Steps Timeline / Cards */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.approach.steps.map((step, idx) => (
            <StaggerItem key={idx}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white rounded-3xl p-8 border border-brand-surface/10 hover:border-brand-surface/30 shadow-sm hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between h-full"
              >
                <div>
                  <span className="text-4xl font-extrabold font-mono text-brand-surface/30 group-hover:text-brand-forest transition-colors block mb-4">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-bold text-brand-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brand-surface/80 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="w-8 h-1 bg-brand-surface/20 rounded-full mt-6 group-hover:w-16 group-hover:bg-brand-forest transition-all duration-300" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};
