"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, ShieldCheck, Code2 } from '@/components/ui/Icons';
import { useLanguage } from '@/context/LanguageContext';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/Reveal';

export const TeamSection: React.FC = () => {
  const { lang, t } = useLanguage();

  const leadershipMembers = t.team.members.filter(m => m.roleType === 'leadership');
  const engineeringMembers = t.team.members.filter(m => m.roleType === 'engineering');

  return (
    <section className="py-24 bg-brand-surface text-white relative overflow-hidden border-t border-brand-border/40">
      {/* Background soft glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-brand-lime/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-lime bg-white/5 border border-brand-border px-3.5 py-1.5 rounded-full mb-3">
            {t.team.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.team.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-gray-300">
            {t.team.subtitle}
          </p>
        </Reveal>

        {/* Founding Directors Section */}
        <div className="mb-16">
          <Reveal direction="up" className="text-xl font-bold text-brand-lime uppercase tracking-wider text-center mb-8 flex items-center justify-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-lime" />
            <span>{t.team.foundersTitle}</span>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadershipMembers.map((member, idx) => (
              <Reveal key={idx} direction={idx === 0 ? "left" : "right"} delay={0.1}>
                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                  className="bg-brand-forest/90 border border-brand-border/80 rounded-3xl p-8 hover:border-brand-lime/50 transition-all duration-300 flex flex-col justify-between h-full group"
                >
                  <div>
                    {member.image && (
                      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-brand-border/50 bg-brand-surface mb-5">
                        <Image
                          src={member.image}
                          alt={`${member.name} - ${member.designation}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 390px"
                          className="object-cover object-[50%_22%]"
                        />
                      </div>
                    )}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-white group-hover:text-brand-lime transition-colors">
                          {member.name}
                        </h4>
                        <p className="text-xs font-mono font-semibold text-brand-lime mt-1 uppercase tracking-wider">
                          {member.designation}
                        </p>
                      </div>

                      <div className="w-10 h-10 rounded-full bg-brand-surface border border-brand-border text-brand-lime flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                    </div>

                    <p className="text-sm text-brand-gray-300 leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    {/* Expertise Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {member.expertise.map((exp, eIdx) => (
                        <span
                          key={eIdx}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-brand-gray-300"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Action */}
                  <div className="pt-4 border-t border-brand-border/40 flex items-center justify-between">
                    <span className="text-[11px] text-brand-gray-400">
                      {lang === 'en' ? 'Board of Directors' : 'পরিচালনা পর্ষদ'}
                    </span>
                    {member.links.email && (
                      <a
                        href={member.links.email}
                        className="text-xs text-brand-lime hover:underline inline-flex items-center gap-1"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>{lang === 'en' ? 'Direct Contact' : 'ইমেইল করুন'}</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Engineering Trainees Grid */}
        <div className="mb-16">
          <Reveal direction="up" className="text-lg font-bold text-white uppercase tracking-wider text-center mb-8 flex items-center justify-center gap-2">
            <Code2 className="w-5 h-5 text-brand-lime" />
            <span>{t.team.traineesTitle}</span>
          </Reveal>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {engineeringMembers.map((member, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-brand-forest/60 border border-brand-border/60 rounded-2xl p-6 hover:border-brand-border transition-all h-full"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <h4 className="text-lg font-bold text-white">{member.name}</h4>
                    <span className="text-xs font-mono text-brand-lime">{member.designation}</span>
                  </div>
                  <p className="text-xs text-brand-gray-300 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.expertise.map((exp, eIdx) => (
                      <span
                        key={eIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-brand-gray-300"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Team Culture Banner */}
        <Reveal direction="up" scale className="max-w-3xl mx-auto bg-brand-forest border border-brand-border/60 rounded-2xl p-6 text-center">
          <h4 className="text-sm font-bold text-brand-lime mb-2 uppercase tracking-wider">
            {t.team.cultureTitle}
          </h4>
          <p className="text-xs sm:text-sm text-brand-gray-300 leading-relaxed">
            {t.team.cultureDesc}
          </p>
        </Reveal>

      </div>
    </section>
  );
};
