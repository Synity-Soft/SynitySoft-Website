"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Cpu, 
  Globe, 
  Sparkles, 
  WifiOff, 
  Workflow, 
  Compass, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers
} from '@/components/ui/Icons';
import { useLanguage } from '@/context/LanguageContext';
import { FloatingBrandElements } from '@/components/brand/FloatingBrandElements';
import { CtaSection } from '@/components/home/CtaSection';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
  Sparkles: <Sparkles className="w-8 h-8" />,
  WifiOff: <WifiOff className="w-8 h-8" />,
  Workflow: <Workflow className="w-8 h-8" />,
  Compass: <Compass className="w-8 h-8" />,
};

export default function ServicesPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="pt-24 bg-brand-forest min-h-screen text-white">
      {/* Services Hero Header */}
      <section className="relative py-20 bg-brand-forest overflow-hidden border-b border-brand-border/40">
        <FloatingBrandElements opacity={0.5} />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-lime bg-white/5 border border-brand-border px-3.5 py-1.5 rounded-full mb-4">
            {lang === 'en' ? 'Engineering Services' : 'ইঞ্জিনিয়ারিং সেবাসমূহ'}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {lang === 'en' ? (
              <>
                Engineered for resilience.{' '}
                <span className="text-brand-lime">Built around real needs.</span>
              </>
            ) : (
              <>
                বাস্তব কার্যকারিতার জন্য নির্মিত।{' '}
                <span className="text-brand-lime">প্রয়োজনের ভিত্তিতে সেবা।</span>
              </>
            )}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-brand-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-24 bg-brand-offwhite text-brand-forest">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {t.services.items.map((service, index) => {
            const icon = iconMap[service.iconName] || <Cpu className="w-8 h-8" />;
            const isEven = index % 2 === 1;

            return (
              <div
                id={service.id}
                key={service.id}
                className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-surface/10 shadow-sm hover:shadow-md transition-all duration-300 scroll-mt-28"
              >
                <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
                  
                  {/* Left Column: Icon & Descriptions */}
                  <div className="lg:max-w-xl space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-brand-forest text-brand-lime flex items-center justify-center shadow-sm">
                      {icon}
                    </div>

                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-3">
                        {service.title}
                      </h2>
                      <p className="text-base text-brand-surface font-medium leading-relaxed mb-4">
                        {service.shortDesc}
                      </p>
                      <p className="text-sm text-brand-surface/80 leading-relaxed">
                        {service.fullDesc}
                      </p>
                    </div>

                    {/* Ideal For Box */}
                    <div className="bg-brand-lightgreen/50 border border-brand-surface/15 rounded-2xl p-5">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-surface block mb-1">
                        {lang === 'en' ? 'Ideal Application Context:' : 'যাদের জন্য সর্বোত্তম:'}
                      </span>
                      <p className="text-xs sm:text-sm text-brand-surface/90">
                        {service.idealFor}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Deliverables & CTA */}
                  <div className="w-full lg:w-80 bg-brand-lightgreen/30 border border-brand-surface/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-brand-surface mb-4">
                        {lang === 'en' ? 'Standard Deliverables:' : 'স্ট্যান্ডার্ড ডেলিভারেবল:'}
                      </h3>
                      <ul className="space-y-3 mb-8">
                        {service.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-surface/90">
                            <CheckCircle2 className="w-4 h-4 text-brand-forest flex-shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={`/contact?service=${encodeURIComponent(service.id)}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-forest text-brand-lime hover:bg-brand-surface transition-colors"
                    >
                      <span>{lang === 'en' ? 'Request Consultation' : 'পরামর্শের জন্য লিখুন'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Engineering Principles Guarantee */}
      <section className="py-20 bg-brand-surface text-white border-t border-brand-border/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {lang === 'en' ? 'The SynitySoft Engineering Commitment' : 'আমাদের ইঞ্জিনিয়ারিং দায়বদ্ধতা'}
            </h2>
            <p className="text-xs sm:text-sm text-brand-gray-300 mt-2">
              {lang === 'en'
                ? 'We do not sell bloated packages or unneeded complexity. Every project adheres to strict governance.'
                : 'আমরা অপ্রয়োজনীয় সফটওয়্যার জটিলতা চাপিয়ে দিই না। প্রতিটি প্রজেক্টে স্বচ্ছতা ও কার্যকর উপযোগিতাই নিশ্চিত করি।'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-brand-forest p-6 rounded-2xl border border-brand-border/60">
              <Zap className="w-5 h-5 text-brand-lime mb-3" />
              <h3 className="text-base font-bold text-white mb-2">
                {lang === 'en' ? 'High Performance & Clean Code' : 'উচ্চ গতি ও পরিচ্ছন্ন কোড'}
              </h3>
              <p className="text-xs text-brand-gray-300 leading-relaxed">
                {lang === 'en'
                  ? 'Lightweight bundles, strict TypeScript types, fast API response times, and optimized assets.'
                  : 'অপ্রয়োজনীয় কোড বর্জন, কঠোর টাইপস্ক্রিপ্ট ফ্রেমওয়ার্ক এবং দ্রুততম পেজ লোডিং নিশ্চিতকরণ।'}
              </p>
            </div>

            <div className="bg-brand-forest p-6 rounded-2xl border border-brand-border/60">
              <ShieldCheck className="w-5 h-5 text-brand-lime mb-3" />
              <h3 className="text-base font-bold text-white mb-2">
                {lang === 'en' ? 'Zero-Fluff Honesty' : 'শতভাগ স্বচ্ছতা'}
              </h3>
              <p className="text-xs text-brand-gray-300 leading-relaxed">
                {lang === 'en'
                  ? 'We communicate realistically about technical feasibility, timelines, and maintenance requirements.'
                  : 'কাজের সম্ভাব্যতা, সময়সীমা এবং ভবিষ্যৎ রক্ষণাবেক্ষণ নিয়ে শতভাগ বাস্তবসম্মত আলোচনা।'}
              </p>
            </div>

            <div className="bg-brand-forest p-6 rounded-2xl border border-brand-border/60">
              <Layers className="w-5 h-5 text-brand-lime mb-3" />
              <h3 className="text-base font-bold text-white mb-2">
                {lang === 'en' ? 'Extensible Foundations' : 'ভবিষ্যৎ-উপযোগী ভিত্তি'}
              </h3>
              <p className="text-xs text-brand-gray-300 leading-relaxed">
                {lang === 'en'
                  ? 'Architected so portals, internal CRMs, and complex automation can be added seamlessly later.'
                  : 'পরবর্তীতে নতুন মডিউল বা পোর্টাল যুক্ত করার সুবিধার্থে মডুলার আর্কিটেকচার।'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
