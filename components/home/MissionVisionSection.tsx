"use client";

import React from 'react';
import { Target, Compass, Sparkles, Shield, Award, Users, BookOpen, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const MissionVisionSection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-24 bg-brand-surface text-white relative overflow-hidden border-t border-brand-border/40">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-lime/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-forest rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-lime bg-white/5 border border-brand-border px-3.5 py-1.5 rounded-full mb-3">
            {t.missionVision.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.missionVision.title}
          </h2>
        </div>

        {/* Mission & Vision Twin Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          
          {/* Mission Card */}
          <div className="bg-brand-forest/90 border border-brand-border/80 rounded-3xl p-8 sm:p-10 relative overflow-hidden group hover:border-brand-lime/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-brand-lime/10 border border-brand-lime/30 text-brand-lime flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {t.missionVision.mission.title}
            </h3>
            <p className="text-base text-brand-gray-300 leading-relaxed">
              {t.missionVision.mission.desc}
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-brand-forest/90 border border-brand-border/80 rounded-3xl p-8 sm:p-10 relative overflow-hidden group hover:border-brand-lime/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-brand-lime/10 border border-brand-lime/30 text-brand-lime flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {t.missionVision.vision.title}
            </h3>
            <p className="text-base text-brand-gray-300 leading-relaxed">
              {t.missionVision.vision.desc}
            </p>
          </div>

        </div>

        {/* Future Ecosystem Sub-Ventures Roadmap */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {lang === 'en' ? 'Long-Term Technology Ecosystem' : 'ভবিষ্যৎ প্রযুক্তি ইকোসিস্টেম'}
            </h3>
            <p className="text-xs sm:text-sm text-brand-gray-400 mt-2">
              {lang === 'en' 
                ? 'Structured ventures planned to operate under the SynitySoft umbrella as capacity evolves.'
                : 'সিনিটিসফটের সুদূরপ্রসারী রূপকল্পে পরিকল্পিত প্রযুক্তিগত শাখা ও প্ল্যাটফর্মসমূহ।'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.missionVision.ecosystem.map((eco, idx) => (
              <div 
                key={idx}
                className="bg-brand-forest/60 border border-brand-border/60 rounded-2xl p-6 hover:bg-brand-forest transition-colors duration-200"
              >
                <div className="text-brand-lime text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  {eco.role}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{eco.name}</h4>
                <p className="text-xs text-brand-gray-300/80 leading-relaxed">{eco.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values 6-Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center text-white mb-10">
            {t.missionVision.valuesTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.missionVision.values.map((val, idx) => (
              <div
                key={idx}
                className="bg-brand-forest/50 border border-brand-border/40 rounded-2xl p-6 hover:border-brand-lime/30 transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-2 text-brand-lime">
                  <Check className="w-4 h-4 text-brand-lime flex-shrink-0" />
                  <h4 className="text-base font-bold text-white">{val.title}</h4>
                </div>
                <p className="text-xs text-brand-gray-300 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
