"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Layers, Infinity as InfinityIcon, Code } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const WhoWeAreSection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-24 bg-brand-offwhite text-brand-forest relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-surface bg-brand-lightgreen px-3.5 py-1.5 rounded-full mb-3 border border-brand-surface/20">
            {t.whoWeAre.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
            {t.whoWeAre.title}
          </h2>
          <div className="mt-6 space-y-4 text-base sm:text-lg text-brand-surface/90 leading-relaxed">
            <p>{t.whoWeAre.p1}</p>
            <p>{t.whoWeAre.p2}</p>
          </div>
        </div>

        {/* Brand Name Etymology Card: Synergy + Infinity + Software */}
        <div className="mb-20 bg-white rounded-3xl p-6 sm:p-10 border border-brand-surface/15 shadow-sm">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-forest">
              {lang === 'en' ? 'The Meaning Behind the Identity: "SynitySoft"' : '"সিনিটিসফট" নামের গভীর অর্থ ও দর্শন'}
            </h3>
            <p className="text-sm text-brand-surface/80 mt-2">
              {t.brand.etymology.synthesis}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Synergy */}
            <div className="bg-brand-lightgreen/60 rounded-2xl p-6 border border-brand-surface/10 hover:border-brand-surface/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-brand-surface text-brand-lime flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-brand-forest mb-2">
                {t.brand.etymology.sy.title}
              </h4>
              <p className="text-sm text-brand-surface/80 leading-relaxed">
                {t.brand.etymology.sy.desc}
              </p>
            </div>

            {/* Infinity */}
            <div className="bg-brand-lightgreen/60 rounded-2xl p-6 border border-brand-surface/10 hover:border-brand-surface/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-brand-surface text-brand-lime flex items-center justify-center mb-4">
                <InfinityIcon className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-brand-forest mb-2">
                {t.brand.etymology.nity.title}
              </h4>
              <p className="text-sm text-brand-surface/80 leading-relaxed">
                {t.brand.etymology.nity.desc}
              </p>
            </div>

            {/* Software */}
            <div className="bg-brand-lightgreen/60 rounded-2xl p-6 border border-brand-surface/10 hover:border-brand-surface/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-brand-surface text-brand-lime flex items-center justify-center mb-4">
                <Code className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-brand-forest mb-2">
                {t.brand.etymology.soft.title}
              </h4>
              <p className="text-sm text-brand-surface/80 leading-relaxed">
                {t.brand.etymology.soft.desc}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core Highlight Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.whoWeAre.highlights.map((item, idx) => (
            <div 
              key={idx}
              className="bg-brand-lightgreen/40 border border-brand-surface/10 rounded-2xl p-7 hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-brand-forest" />
                <h4 className="text-lg font-bold text-brand-forest">{item.title}</h4>
              </div>
              <p className="text-sm text-brand-surface/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Learn More link */}
        <div className="mt-12 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-forest hover:text-brand-surface underline underline-offset-4 transition-colors"
          >
            <span>{lang === 'en' ? 'Read our complete company story and governance framework' : 'আমাদের সম্পূর্ণ প্রাতিষ্ঠানিক গল্প ও সুশাসন রূপরেখা পড়ুন'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
