"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  Award, 
  Terminal, 
  Cpu, 
  Layers, 
  Database,
  Wifi,
  WifiOff
} from '@/components/ui/Icons';
import { useLanguage } from '@/context/LanguageContext';
import { FloatingBrandElements } from '@/components/brand/FloatingBrandElements';
import { CtaSection } from '@/components/home/CtaSection';

export default function ProjectsPage() {
  const { lang, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'Working Prototype' | 'In Development' | 'Completed'>('all');

  const projects = t.projects.items;

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.status === activeFilter);

  return (
    <div className="pt-24 bg-brand-forest min-h-screen text-white">
      {/* Projects Hero Header */}
      <section className="relative py-20 bg-brand-forest overflow-hidden border-b border-brand-border/40">
        <FloatingBrandElements opacity={0.5} />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-lime bg-white/5 border border-brand-border px-3.5 py-1.5 rounded-full mb-4">
            {lang === 'en' ? 'Portfolio & Systems' : 'প্রজেক্ট ও সিস্টেমস'}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {lang === 'en' ? (
              <>
                Real systems.{' '}
                <span className="text-brand-lime">Measurable outcomes.</span>
              </>
            ) : (
              <>
                বাস্তব সিস্টেম।{' '}
                <span className="text-brand-lime">প্রমাণযোগ্য ফলাফল।</span>
              </>
            )}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-brand-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t.projects.subtitle}
          </p>

          {/* Interactive Status Filter Tabs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeFilter === 'all'
                  ? 'bg-brand-lime text-brand-forest shadow-lime-glow'
                  : 'bg-brand-surface/80 border border-brand-border text-brand-gray-300 hover:text-white'
              }`}
            >
              {lang === 'en' ? 'All Platforms' : 'সকল প্ল্যাটফর্ম'}
            </button>
            <button
              onClick={() => setActiveFilter('Working Prototype')}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                activeFilter === 'Working Prototype'
                  ? 'bg-brand-lime text-brand-forest shadow-lime-glow'
                  : 'bg-brand-surface/80 border border-brand-border text-brand-gray-300 hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-brand-lime" />
              <span>{lang === 'en' ? 'Working Prototype' : 'ওয়ার্কিং প্রোটোটাইপ'}</span>
            </button>
            <button
              onClick={() => setActiveFilter('In Development')}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                activeFilter === 'In Development'
                  ? 'bg-emerald-400 text-brand-forest shadow-sm'
                  : 'bg-brand-surface/80 border border-brand-border text-brand-gray-300 hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{lang === 'en' ? 'In Development' : 'ডেভেলপমেন্টাধীন'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Projects Deep Dive Section */}
      <section className="py-24 bg-brand-offwhite text-brand-forest">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredProjects.map((project) => (
            <div
              id={project.slug}
              key={project.id}
              className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-surface/10 shadow-sm hover:shadow-md transition-all duration-300 scroll-mt-28"
            >
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-brand-surface/10">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-brand-forest bg-brand-lightgreen px-3 py-1 rounded-full border border-brand-surface/15">
                    {project.category}
                  </span>
                  
                  <span className={`text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 ${
                    project.status === 'Working Prototype'
                      ? 'bg-brand-forest text-brand-lime'
                      : 'bg-emerald-800 text-emerald-200'
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    <span>{project.statusLabel}</span>
                  </span>
                </div>

                <div className="text-xs font-mono text-brand-surface/70">
                  {project.slug === 'haat-bazaar' && (
                    <span className="inline-flex items-center gap-1 text-brand-forest font-semibold">
                      <Award className="w-4 h-4 text-amber-500" />
                      <span>Presented at DIU SQAT Hackathon</span>
                    </span>
                  )}
                  {project.slug === 'niramoy' && (
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Sector 001 Primary Healthcare</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-6">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-2">
                  {project.title}
                </h2>
                <p className="text-base sm:text-lg font-semibold text-brand-surface/90">
                  {project.subtitle}
                </p>
              </div>

              {/* Detailed Problem & Solution Narrative */}
              <div className="space-y-4 text-sm sm:text-base text-brand-surface/85 leading-relaxed mb-8">
                <p>{project.description}</p>
              </div>

              {/* Architecture & Features Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                
                {/* Features Box */}
                <div className="bg-brand-lightgreen/40 border border-brand-surface/10 rounded-2xl p-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brand-forest mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-forest" />
                    <span>{lang === 'en' ? 'Engineered Capabilities:' : 'কারিগরি সুবিধাসমূহ:'}</span>
                  </h3>
                  <ul className="space-y-2.5">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-brand-surface/90">
                        <span className="text-brand-forest font-bold">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact & Validation Box */}
                <div className="bg-brand-lightgreen/40 border border-brand-surface/10 rounded-2xl p-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brand-forest mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-forest" />
                    <span>{lang === 'en' ? 'Standards & Social Impact:' : 'মানদণ্ড ও সামাজিক প্রভাব:'}</span>
                  </h3>
                  <ul className="space-y-2.5">
                    {project.impactPoints.map((imp, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2 text-xs sm:text-sm text-brand-surface/90">
                        <span className="text-emerald-700 font-bold">✓</span>
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Tech Stack List */}
              <div className="pt-6 border-t border-brand-surface/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-bold text-brand-surface mr-2">
                    {lang === 'en' ? 'Verified Stack:' : 'টেক স্ট্যাক:'}
                  </span>
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-brand-lightgreen text-brand-forest border border-brand-surface/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-forest hover:text-brand-surface"
                >
                  <span>{lang === 'en' ? 'Discuss Similar Project' : 'অনুরূপ প্রজেক্ট নিয়ে আলোচনা করুন'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
