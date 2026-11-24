"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  CheckCircle2, 
  Layers, 
  Infinity as InfinityIcon, 
  Code, 
  ArrowRight,
  Sparkles,
  BookOpen
} from '@/components/ui/Icons';
import { useLanguage } from '@/context/LanguageContext';
import { FloatingBrandElements } from '@/components/brand/FloatingBrandElements';
import { CtaSection } from '@/components/home/CtaSection';

export default function AboutPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="pt-24 bg-brand-forest min-h-screen text-white">
      {/* Page Header Hero */}
      <section className="relative py-20 bg-brand-forest overflow-hidden border-b border-brand-border/40">
        <FloatingBrandElements opacity={0.5} />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-lime bg-white/5 border border-brand-border px-3.5 py-1.5 rounded-full mb-4">
            {lang === 'en' ? 'About SynitySoft' : 'সিনিটিসফট সম্পর্কে'}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {lang === 'en' ? (
              <>
                Engineered with purpose.{' '}
                <span className="text-brand-lime">Built around need.</span>
              </>
            ) : (
              <>
                উদ্দেশ্যমুখী ইঞ্জিনিয়ারিং।{' '}
                <span className="text-brand-lime">প্রয়োজনেই সৃষ্টি।</span>
              </>
            )}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-brand-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t.whoWeAre.p1}
          </p>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="py-20 bg-brand-offwhite text-brand-forest">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-8">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-surface bg-brand-lightgreen px-3.5 py-1.5 rounded-full border border-brand-surface/20">
              {lang === 'en' ? 'Our Story & Foundation' : 'আমাদের প্রতিষ্ঠা ও দর্শন'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              {lang === 'en' ? 'Why SynitySoft Exists' : 'সিনিটিসফট প্রতিষ্ঠার পটভূমি'}
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-brand-surface/90 leading-relaxed">
              <p>
                {lang === 'en' 
                  ? 'In modern software engineering, complexity is frequently celebrated over practical utility. Far too many digital products are designed around generic templates that break when exposed to real-world friction—unstable mobile internet, local language barriers, or rigid enterprise bureaucracy.'
                  : 'বর্তমান প্রযুক্তি জগতে প্রায়শই বাস্তব উপযোগিতার চেয়ে অপ্রয়োজনীয় জটিলতা বেশি প্রাধান্য পায়। বহু সফটওয়্যার তৈরি হয় এমন টেমপ্লেটের উপর যা বাস্তব সংকটে—যেমন দুর্বল ইন্টারনেট সংযোগ, ভাষার দেয়াল কিংবা প্রাতিষ্ঠানিক ধকলের মুখে অচল হয়ে পড়ে।'}
              </p>
              <p>
                {lang === 'en'
                  ? 'SynitySoft was founded to take a fundamentally different path: grounding technology strictly in real necessity. Every platform we build is engineered from the ground up to solve verified human, retail, clinical, and operational problems without making false claims or relying on unverified hype.'
                  : 'সিনিটিসফটের সূচনা এই বৃত্ত ভাঙার প্রত্যয় নিয়ে। প্রযুক্তির একমাত্র সার্থকতা বাস্তব সমস্যার টেকসই সমাধান দেওয়া। আমরা কোনো কাল্পনিক দাবি না করে বাস্তব প্রয়োজনের নিরিখে সফটওয়্যার আর্কিটেকচার গড়ে তুলি।'}
              </p>
            </div>
          </div>

          {/* Meaning of the Name */}
          <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-brand-surface/15 shadow-sm">
            <h3 className="text-2xl font-bold text-brand-dark mb-4">
              {lang === 'en' ? 'The Etymology of "SynitySoft"' : '"সিনিটিসফট" নামের উৎপত্তি ও তাৎপর্য'}
            </h3>
            <p className="text-sm sm:text-base text-brand-surface/80 leading-relaxed mb-8">
              {t.brand.etymology.synthesis}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-brand-lightgreen/50 border border-brand-surface/10">
                <div className="w-10 h-10 rounded-xl bg-brand-forest text-brand-lime flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-brand-forest mb-2">{t.brand.etymology.sy.title}</h4>
                <p className="text-xs sm:text-sm text-brand-surface/80 leading-relaxed">{t.brand.etymology.sy.desc}</p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-lightgreen/50 border border-brand-surface/10">
                <div className="w-10 h-10 rounded-xl bg-brand-forest text-brand-lime flex items-center justify-center mb-4">
                  <InfinityIcon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-brand-forest mb-2">{t.brand.etymology.nity.title}</h4>
                <p className="text-xs sm:text-sm text-brand-surface/80 leading-relaxed">{t.brand.etymology.nity.desc}</p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-lightgreen/50 border border-brand-surface/10">
                <div className="w-10 h-10 rounded-xl bg-brand-forest text-brand-lime flex items-center justify-center mb-4">
                  <Code className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-brand-forest mb-2">{t.brand.etymology.soft.title}</h4>
                <p className="text-xs sm:text-sm text-brand-surface/80 leading-relaxed">{t.brand.etymology.soft.desc}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission, Vision & Long-Term Ecosystem */}
      <section className="py-20 bg-brand-surface text-white border-t border-brand-border/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-lime bg-white/5 border border-brand-border px-3.5 py-1.5 rounded-full mb-3">
              {lang === 'en' ? 'Strategic Horizon' : 'কৌশলগত রূপকল্প'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              {lang === 'en' ? 'Our Mission & Future Ecosystem' : 'আমাদের মিশন ও ভবিষ্যৎ ইকোসিস্টেম'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-brand-forest p-8 rounded-3xl border border-brand-border/80">
              <div className="w-10 h-10 rounded-xl bg-brand-lime/10 border border-brand-lime/30 text-brand-lime flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t.missionVision.mission.title}</h3>
              <p className="text-sm text-brand-gray-300 leading-relaxed">{t.missionVision.mission.desc}</p>
            </div>

            <div className="bg-brand-forest p-8 rounded-3xl border border-brand-border/80">
              <div className="w-10 h-10 rounded-xl bg-brand-lime/10 border border-brand-lime/30 text-brand-lime flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t.missionVision.vision.title}</h3>
              <p className="text-sm text-brand-gray-300 leading-relaxed">{t.missionVision.vision.desc}</p>
            </div>
          </div>

          {/* 4 Ecosystem Verticals */}
          <div className="bg-brand-forest/60 border border-brand-border/60 rounded-3xl p-8 sm:p-10">
            <div className="max-w-xl mb-8">
              <h3 className="text-xl font-bold text-white mb-2">
                {lang === 'en' ? 'The SynitySoft Ecosystem Architecture' : 'সিনিটিসফট ইকোসিস্টেম আর্কিটেকচার'}
              </h3>
              <p className="text-xs sm:text-sm text-brand-gray-400">
                {lang === 'en'
                  ? 'A multi-disciplinary structure engineered to scale across distinct technology domains.'
                  : 'পৃথক প্রযুক্তি খাতে দায়িত্বশীলভাবে সম্প্রসারণের সুনির্দিষ্ট প্রাতিষ্ঠানিক রূপরেখা।'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.missionVision.ecosystem.map((eco, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-brand-surface/80 border border-brand-border/50">
                  <span className="text-[11px] font-mono font-bold text-brand-lime block mb-1 uppercase tracking-wider">{eco.role}</span>
                  <h4 className="text-base font-bold text-white mb-2">{eco.name}</h4>
                  <p className="text-xs text-brand-gray-300 leading-relaxed">{eco.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Core Operating Values */}
      <section className="py-20 bg-brand-offwhite text-brand-forest">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-surface bg-brand-lightgreen px-3.5 py-1.5 rounded-full mb-3 border border-brand-surface/20">
              {lang === 'en' ? 'Core Principles' : 'মূলনীতি'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
              {t.missionVision.valuesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.missionVision.values.map((v, i) => (
              <div key={i} className="bg-white p-7 rounded-2xl border border-brand-surface/10 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-brand-forest">
                  <CheckCircle2 className="w-4 h-4 text-brand-forest flex-shrink-0" />
                  <h3 className="text-base font-bold text-brand-dark">{v.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-brand-surface/80 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Milestones & Journey */}
      <section className="py-20 bg-brand-forest text-white border-t border-brand-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-lime bg-white/5 border border-brand-border px-3.5 py-1.5 rounded-full mb-3">
              {t.milestones.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              {t.milestones.title}
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-brand-border/60">
            {t.milestones.items.map((m, idx) => (
              <div key={idx} className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 group">
                <div className="sm:w-1/2 sm:text-right pr-6 pl-10 sm:pl-0">
                  <span className="text-xs font-mono font-bold text-brand-lime uppercase tracking-wider block mb-1">{m.tag}</span>
                  <h3 className="text-lg font-bold text-white mb-1">{m.title}</h3>
                  <p className="text-xs sm:text-sm text-brand-gray-300 leading-relaxed">{m.description}</p>
                </div>

                <div className="absolute left-1.5 sm:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-brand-lime border-4 border-brand-forest shadow-lime-glow z-10" />

                <div className="sm:w-1/2 pl-10 sm:pl-6">
                  <span className="text-2xl font-extrabold font-mono text-brand-lime">
                    {m.year}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <CtaSection />
    </div>
  );
}
