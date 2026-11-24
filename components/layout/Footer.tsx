"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone, ArrowUpRight, Heart, ShieldCheck } from '@/components/ui/Icons';
import { SynityLogo } from '@/components/brand/SynityLogo';
import { useLanguage } from '@/context/LanguageContext';

export const Footer: React.FC = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <footer className="bg-brand-dark border-t border-brand-border/60 text-brand-gray-300 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-lime/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-forest/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Column 1 & 2: Brand Identity & About */}
          <div className="lg:col-span-2 space-y-5">
            <SynityLogo variant="light" size="lg" />
            <p className="text-sm text-brand-gray-300 max-w-sm leading-relaxed">
              {t.footer.brandDesc}
            </p>
            
            <div className="flex items-center gap-2 text-xs text-brand-lime bg-brand-surface/60 border border-brand-border/50 px-3 py-1.5 rounded-full w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>{t.brand.tagline}</span>
              <span className="text-white/40">•</span>
              <span className="text-white/70">{t.brand.internalMotto}</span>
            </div>

            {/* Language Selection */}
            <div className="pt-2">
              <span className="text-xs text-brand-gray-400 block mb-2">
                {lang === 'en' ? 'Select Language / ভাষা পরিবর্তন:' : 'ভাষা নির্বাচন / Select Language:'}
              </span>
              <div className="inline-flex items-center bg-brand-surface border border-brand-border/80 rounded-full p-1 text-xs">
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 rounded-full font-medium transition-colors ${
                    lang === 'en' ? 'bg-brand-lime text-brand-forest font-bold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLang('bn')}
                  className={`px-3 py-1 rounded-full font-medium transition-colors ${
                    lang === 'bn' ? 'bg-brand-lime text-brand-forest font-bold font-bangla' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  বাংলা
                </button>
              </div>
            </div>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {t.nav.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="hover:text-brand-lime transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-lime" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Core Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {t.services.items.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="hover:text-brand-lime transition-colors text-brand-gray-300/90 text-xs sm:text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Direct Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.legalTitle}
            </h4>
            <div className="space-y-3 text-xs leading-relaxed text-brand-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-lime flex-shrink-0 mt-0.5" />
                <span>{t.contact.directInfo.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-lime flex-shrink-0" />
                <a href={`mailto:${t.contact.directInfo.businessEmail}`} className="hover:text-brand-lime transition-colors">
                  {t.contact.directInfo.businessEmail}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-lime flex-shrink-0" />
                <span>{t.contact.directInfo.phone1}</span>
              </div>
              <div className="pt-2 text-brand-gray-400 text-[11px]">
                {t.contact.directInfo.availability}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-brand-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-gray-400">
          <p>
            © {new Date().getFullYear()} SynitySoft. {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-brand-lime/80 font-mono text-[11px]">
              {t.footer.registeredMotto}
            </span>
            <span>•</span>
            <span>{t.footer.operatingFrom}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
