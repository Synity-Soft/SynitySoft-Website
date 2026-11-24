"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Award, ExternalLink, ShieldCheck } from '@/components/ui/Icons';
import { useLanguage } from '@/context/LanguageContext';
import { Reveal } from '@/components/ui/Reveal';

export const FeaturedProjectsSection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-24 bg-brand-forest text-white relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-lime/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-surface-light/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-lime bg-white/5 border border-brand-border px-3.5 py-1.5 rounded-full mb-3">
              {t.projects.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {t.projects.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-gray-300">
              {t.projects.subtitle}
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-lime hover:text-white group flex-shrink-0"
          >
            <span>{lang === 'en' ? 'Explore detailed architecture of all projects' : 'সকল প্রজেক্টের বিস্তারিত আর্কিটেকচার দেখুন'}</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>

        {/* Project Cards Stack */}
        <div className="space-y-12">
          {t.projects.items.slice(0, 2).map((project, idx) => (
            <Reveal key={project.id} direction="up" delay={idx * 0.15} scale>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="bg-brand-surface/70 border border-brand-border/80 rounded-3xl p-8 sm:p-12 hover:border-brand-lime/50 transition-all duration-300 relative overflow-hidden shadow-lg hover:shadow-lime-glow/20"
              >
                {/* Top Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-brand-border/40">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-brand-lime bg-brand-forest px-3 py-1 rounded-full border border-brand-border">
                      {project.category}
                    </span>
                    
                    {/* Status Tag */}
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 ${
                      project.status === 'Working Prototype'
                        ? 'bg-brand-lime/15 text-brand-lime border border-brand-lime/40'
                        : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/40'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      <span>{project.statusLabel}</span>
                    </span>
                  </div>

                  <span className="text-xs text-brand-gray-400 font-mono">
                    {lang === 'en' ? 'SynitySoft Official Portfolio' : 'সিনিটিসফট অফিসিয়াল পোর্টফোলিও'}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="max-w-3xl mb-6">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-brand-gray-300">
                    {project.subtitle}
                  </p>
                </div>

                {/* Summary Paragraph */}
                <p className="text-sm sm:text-base text-brand-gray-300/90 leading-relaxed max-w-4xl mb-8">
                  {project.description}
                </p>

                {/* Key Features Grid */}
                <div className="mb-8 bg-brand-forest/60 rounded-2xl p-6 border border-brand-border/60">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-lime mb-4">
                    {lang === 'en' ? 'Core Platform Capabilities:' : 'প্ল্যাটফর্মের মূল বৈশিষ্ট্যসমূহ:'}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-gray-200">
                        <CheckCircle2 className="w-4 h-4 text-brand-lime flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Chips & Action Link */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-brand-gray-400 mr-2">
                      {lang === 'en' ? 'Technologies:' : 'টেকনোলজি:'}
                    </span>
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-brand-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects#${project.slug}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-lime hover:text-white transition-colors"
                  >
                    <span>{lang === 'en' ? 'View Technical Architecture' : 'টেকনিক্যাল আর্কিটেকচার দেখুন'}</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>

              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* View All Projects Button */}
        <Reveal direction="up" delay={0.2} className="mt-14 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider bg-brand-lime text-brand-forest hover:bg-brand-lime-hover shadow-lime-glow hover:shadow-lime-glow-lg transition-all"
          >
            <span>{lang === 'en' ? 'View Full Project Case Studies' : 'সকল প্রজেক্টের পূর্ণাঙ্গ কেস স্টাডি দেখুন'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>

      </div>
    </section>
  );
};
