"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, MessageSquare } from '@/components/ui/Icons';
import { useLanguage } from '@/context/LanguageContext';

export const CtaSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-brand-forest text-white relative overflow-hidden border-t border-brand-border/40">
      {/* Background glow and decorative circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-lime/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-brand-border text-brand-lime mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.brand.tagline}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          {t.ctaSection.headline}
        </h2>

        <p className="mt-6 text-base sm:text-lg text-brand-gray-300 max-w-2xl mx-auto leading-relaxed">
          {t.ctaSection.supporting}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider bg-brand-lime text-brand-forest hover:bg-brand-lime-hover shadow-lime-glow hover:shadow-lime-glow-lg transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t.ctaSection.primaryBtn}</span>
          </Link>

          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wide bg-brand-surface/80 hover:bg-brand-surface border border-brand-border text-white hover:border-brand-lime/50 transition-all duration-200"
          >
            <span>{t.ctaSection.secondaryBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
