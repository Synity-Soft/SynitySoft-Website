"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe, ArrowUpRight, Sun, Moon } from '@/components/ui/Icons';
import { SynityLogo } from '@/components/brand/SynityLogo';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';


export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, toggleLang, t } = useLanguage();
  const { mode, toggleMode } = useTheme();
  const isDarkMode =
    mode === "dark" ||
    (mode === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-forest/90 backdrop-blur-md border-b border-brand-border/60 py-3 shadow-lg' 
          : 'bg-brand-forest/60 backdrop-blur-sm py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* SynitySoft Logo */}
          <SynityLogo variant={isDarkMode ? "light" : "dark"} size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {t.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 relative ${
                    isActive 
                      ? 'text-brand-lime bg-white/10 shadow-sm' 
                      : 'text-brand-gray-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-brand-lime rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Language Switcher & Contact Button */}
          <div className="hidden sm:flex items-center gap-3">
  <button
    type="button"
    onClick={toggleMode}
    className="p-2 rounded-full text-brand-gray-200 hover:text-white hover:bg-white/10 transition-colors"
    aria-label="Toggle theme"
  >
    {mode === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
  </button>
            {/* Bilingual Switcher Pill */}
            <div className="flex items-center bg-brand-surface/80 border border-brand-border/80 rounded-full p-1 text-xs">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-full font-semibold transition-all ${
                  lang === 'en'
                    ? 'bg-brand-lime text-brand-forest shadow-sm'
                    : 'text-brand-gray-300 hover:text-white'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('bn')}
                className={`px-2.5 py-1 rounded-full font-semibold transition-all ${
                  lang === 'bn'
                    ? 'bg-brand-lime text-brand-forest shadow-sm'
                    : 'text-brand-gray-300 hover:text-white font-bangla'
                }`}
                aria-label="বাংলা ভাষায় পরিবর্তন করুন"
              >
                বাংলা
              </button>
            </div>

            {/* Quick Contact CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-lime text-brand-forest hover:bg-brand-lime-hover transition-all duration-200 shadow-lime-glow hover:shadow-lime-glow-lg active:scale-95"
            >
              <span>{lang === 'en' ? "Let's Talk" : "কথা বলুন"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleMode}
              className="p-2 rounded-lg text-brand-gray-200 hover:text-white hover:bg-white/10 transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            {/* Compact Lang Switcher for Mobile */}
            <button
              onClick={toggleLang}
              className="px-2.5 py-1 bg-brand-surface border border-brand-border rounded-full text-xs font-semibold text-brand-lime flex items-center gap-1"
              aria-label="Toggle language"
            >
              <Globe className="w-3 h-3" />
              <span>{lang === 'en' ? 'বাংলা' : 'EN'}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brand-gray-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-lime"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-forest border-b border-brand-border/80 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {t.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-brand-surface text-brand-lime font-semibold' 
                      : 'text-brand-gray-200 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between">
            <div className="flex items-center gap-1 text-xs text-brand-gray-400">
              <Globe className="w-4 h-4 text-brand-lime" />
              <span>{lang === 'en' ? 'Language:' : 'ভাষা:'}</span>
              <button 
                onClick={() => setLang('en')} 
                className={`ml-1 px-2 py-0.5 rounded ${lang === 'en' ? 'text-brand-lime font-bold' : 'text-gray-400'}`}
              >
                English
              </button>
              <span>|</span>
              <button 
                onClick={() => setLang('bn')} 
                className={`px-2 py-0.5 rounded ${lang === 'bn' ? 'text-brand-lime font-bold' : 'text-gray-400'}`}
              >
                বাংলা
              </button>
            </div>

            <Link
              href="/contact"
              className="px-4 py-2 rounded-full text-xs font-semibold bg-brand-lime text-brand-forest hover:bg-brand-lime-hover"
            >
              {lang === 'en' ? "Contact Us" : "যোগাযোগ"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
