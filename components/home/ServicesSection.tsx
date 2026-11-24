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
  ArrowRight, 
  CheckCircle 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  WifiOff: <WifiOff className="w-6 h-6" />,
  Workflow: <Workflow className="w-6 h-6" />,
  Compass: <Compass className="w-6 h-6" />,
};

export const ServicesSection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-24 bg-brand-offwhite text-brand-forest relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-surface bg-brand-lightgreen px-3.5 py-1.5 rounded-full mb-3 border border-brand-surface/20">
              {t.services.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
              {t.services.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-surface/80">
              {t.services.subtitle}
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-forest hover:text-brand-surface group flex-shrink-0"
          >
            <span>{lang === 'en' ? 'View all service specifications' : 'সকল সেবার বিস্তারিত দেখুন'}</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service) => {
            const icon = iconMap[service.iconName] || <Cpu className="w-6 h-6" />;

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-8 border border-brand-surface/10 hover:border-brand-surface/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-2xl bg-brand-forest text-brand-lime flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200 shadow-sm">
                    {icon}
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-brand-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brand-surface/80 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables tags */}
                  <div className="space-y-2 pt-4 border-t border-brand-surface/10">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-surface/60 block">
                      {lang === 'en' ? 'Key Deliverables:' : 'মূল আউটপুট:'}
                    </span>
                    <ul className="space-y-1.5">
                      {service.deliverables.slice(0, 3).map((d, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-brand-surface/90">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-forest flex-shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer link in card */}
                <div className="pt-6 mt-6 border-t border-brand-surface/10">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-forest group-hover:text-brand-surface"
                  >
                    <span>{lang === 'en' ? 'Consult regarding this service' : 'এই সেবার পরামর্শ নিন'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
