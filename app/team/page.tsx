"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Mail, 
  Code2, 
  BookOpen, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  Users 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { FloatingBrandElements } from '@/components/brand/FloatingBrandElements';
import { CtaSection } from '@/components/home/CtaSection';

export default function TeamPage() {
  const { lang, t } = useLanguage();

  const leadershipMembers = t.team.members.filter(m => m.roleType === 'leadership');
  const engineeringMembers = t.team.members.filter(m => m.roleType === 'engineering');

  return (
    <div className="pt-24 bg-brand-forest min-h-screen text-white">
      {/* Team Hero Header */}
      <section className="relative py-20 bg-brand-forest overflow-hidden border-b border-brand-border/40">
        <FloatingBrandElements opacity={0.5} />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-lime bg-white/5 border border-brand-border px-3.5 py-1.5 rounded-full mb-4">
            {lang === 'en' ? 'Leadership & Engineering' : 'টিম ও নেতৃত্ব'}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {lang === 'en' ? (
              <>
                The minds behind{' '}
                <span className="text-brand-lime">SynitySoft.</span>
              </>
            ) : (
              <>
                সিনিটিসফটের পেছনের{' '}
                <span className="text-brand-lime">কারিগর ও নেতৃত্ব।</span>
              </>
            )}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-brand-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t.team.subtitle}
          </p>
        </div>
      </section>

      {/* Leadership & Board of Directors */}
      <section className="py-24 bg-brand-offwhite text-brand-forest">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-surface bg-brand-lightgreen px-3.5 py-1.5 rounded-full mb-3 border border-brand-surface/20">
              {lang === 'en' ? 'Executive Governance' : 'পরিচালনা পর্ষদ'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
              {t.team.foundersTitle}
            </h2>
            <p className="mt-3 text-sm text-brand-surface/80">
              {lang === 'en'
                ? 'Equal founding partners establishing the core strategic and technical direction of SynitySoft.'
                : 'সমান ৫০% ভোটিং ক্ষমতার ভিত্তিতে প্রতিষ্ঠিত পরিচালনা পর্ষদ যারা কোম্পানির কৌশল ও প্রযুক্তি নেতৃত্ব প্রদান করেন।'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {leadershipMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-surface/15 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
                        {member.name}
                      </h3>
                      <p className="text-xs font-mono font-bold text-brand-forest mt-1 uppercase tracking-wider">
                        {member.designation}
                      </p>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-brand-forest text-brand-lime flex items-center justify-center flex-shrink-0 shadow-sm">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-brand-surface/85 leading-relaxed mb-8">
                    {member.bio}
                  </p>

                  {/* Expertise */}
                  <div className="mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-surface/70 block mb-2">
                      {lang === 'en' ? 'Core Domains:' : 'দক্ষতার ক্ষেত্রসমূহ:'}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((exp, eIdx) => (
                        <span
                          key={eIdx}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-brand-lightgreen text-brand-forest border border-brand-surface/15"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-6 border-t border-brand-surface/10 flex items-center justify-between">
                  <span className="text-xs text-brand-surface/70">
                    {lang === 'en' ? 'Board Director' : 'পরিচালক'}
                  </span>
                  {member.links.email && (
                    <a
                      href={member.links.email}
                      className="text-xs font-bold text-brand-forest hover:text-brand-surface inline-flex items-center gap-1.5"
                    >
                      <Mail className="w-4 h-4 text-brand-forest" />
                      <span>{lang === 'en' ? 'Official Inquiries' : 'অফিসিয়াল যোগাযোগ'}</span>
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Engineering Trainees */}
      <section className="py-20 bg-brand-surface text-white border-t border-brand-border/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-lime bg-white/5 border border-brand-border px-3.5 py-1.5 rounded-full mb-3">
              {lang === 'en' ? 'Technical Talent' : 'ইঞ্জিনিয়ারিং টিম'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              {t.team.traineesTitle}
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-brand-gray-300">
              {lang === 'en'
                ? 'Developers engaged in SynitySoft’s intensive software engineering and practical implementation roadmaps.'
                : 'সিনিটিসফটের নিবিড় সফটওয়্যার ইঞ্জিনিয়ারিং রোডম্যাপ ও বাস্তবিক প্রকল্প চর্চায় নিয়োজিত ডেভেলপারবৃন্দ।'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engineeringMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-brand-forest border border-brand-border/80 rounded-3xl p-8 hover:border-brand-lime/40 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <span className="text-xs font-mono text-brand-lime uppercase tracking-wider">{member.designation}</span>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-brand-lime flex items-center justify-center">
                    <Code2 className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-brand-gray-300 leading-relaxed mb-6">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((exp, eIdx) => (
                    <span
                      key={eIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-brand-gray-300"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Engineering Culture Deep Dive */}
      <section className="py-20 bg-brand-offwhite text-brand-forest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-surface/15 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-forest text-brand-lime flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-brand-dark">
                {t.team.cultureTitle}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-brand-surface/90 leading-relaxed">
              {t.team.cultureDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-brand-surface/10">
              <div className="p-4 rounded-xl bg-brand-lightgreen/40">
                <span className="text-xs font-mono font-bold text-brand-forest uppercase tracking-wider block mb-1">Phase 1</span>
                <span className="text-xs font-semibold text-brand-dark">3-Month Technical & Python Deepening</span>
              </div>
              <div className="p-4 rounded-xl bg-brand-lightgreen/40">
                <span className="text-xs font-mono font-bold text-brand-forest uppercase tracking-wider block mb-1">Phase 2</span>
                <span className="text-xs font-semibold text-brand-dark">3-Month Practical Platform Implementation</span>
              </div>
              <div className="p-4 rounded-xl bg-brand-lightgreen/40">
                <span className="text-xs font-mono font-bold text-brand-forest uppercase tracking-wider block mb-1">Continuous</span>
                <span className="text-xs font-semibold text-brand-dark">Weekly Progress Reports & CTO Review</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <CtaSection />
    </div>
  );
}
