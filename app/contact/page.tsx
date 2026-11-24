"use client";

import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  ShieldCheck
} from '@/components/ui/Icons';
import { useLanguage } from '@/context/LanguageContext';
import { FloatingBrandElements } from '@/components/brand/FloatingBrandElements';

export default function ContactPage() {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    serviceType: t.contact.form.serviceOptions[0],
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage(t.contact.form.requiredWarning);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage(lang === 'en' ? 'Please provide a valid email address.' : 'দয়া করে একটি সঠিক ইমেইল ঠিকানা প্রদান করুন।');
      return;
    }

    setStatus('submitting');

    // Simulate reliable API transmission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        serviceType: t.contact.form.serviceOptions[0],
        message: '',
      });
    }, 900);
  };

  return (
    <div className="pt-24 bg-brand-forest min-h-screen text-white">
      {/* Header */}
      <section className="relative py-20 bg-brand-forest overflow-hidden border-b border-brand-border/40">
        <FloatingBrandElements opacity={0.5} />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-lime bg-white/5 border border-brand-border px-3.5 py-1.5 rounded-full mb-4">
            {t.contact.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {t.contact.title}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-brand-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Main Form & Information Section */}
      <section className="py-24 bg-brand-offwhite text-brand-forest">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left 5 Cols: Official Direct Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-surface/15 shadow-sm space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-2">
                    {t.contact.directInfo.title}
                  </h2>
                  <p className="text-sm text-brand-surface/80 leading-relaxed">
                    {t.contact.directInfo.desc}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-brand-surface/10">
                  {/* Business Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-lightgreen text-brand-forest flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-surface/60 block">
                        {lang === 'en' ? 'Business & Inquiries:' : 'ব্যবসায়িক যোগাযোগ:'}
                      </span>
                      <a 
                        href={`mailto:${t.contact.directInfo.businessEmail}`}
                        className="text-sm font-bold text-brand-dark hover:text-brand-surface transition-colors"
                      >
                        {t.contact.directInfo.businessEmail}
                      </a>
                    </div>
                  </div>

                  {/* Careers Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-lightgreen text-brand-forest flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-surface/60 block">
                        {lang === 'en' ? 'Careers & HR:' : 'ক্যারিয়ার ও এইচআর:'}
                      </span>
                      <a 
                        href={`mailto:${t.contact.directInfo.hrEmail}`}
                        className="text-sm font-bold text-brand-dark hover:text-brand-surface transition-colors"
                      >
                        {t.contact.directInfo.hrEmail}
                      </a>
                    </div>
                  </div>

                  {/* Phone Contacts */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-lightgreen text-brand-forest flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-surface/60 block">
                        {lang === 'en' ? 'Direct Hotline:' : 'সরাসরি হটলাইন:'}
                      </span>
                      <div className="text-sm font-bold text-brand-dark space-y-0.5">
                        <p>{t.contact.directInfo.phone1}</p>
                        <p>{t.contact.directInfo.phone2}</p>
                      </div>
                    </div>
                  </div>

                  {/* Operating Location */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-lightgreen text-brand-forest flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-surface/60 block">
                        {lang === 'en' ? 'Operating Base:' : 'অফিসিয়াল ঠিকানা:'}
                      </span>
                      <p className="text-sm font-semibold text-brand-dark leading-snug">
                        {t.contact.directInfo.location}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-lightgreen text-brand-forest flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-surface/60 block">
                        {lang === 'en' ? 'Working Hours:' : 'কার্যকালীন সময়:'}
                      </span>
                      <p className="text-xs text-brand-surface/90">
                        {t.contact.directInfo.availability}
                      </p>
                    </div>
                  </div>

                </div>

                <div className="pt-4 border-t border-brand-surface/10 text-xs text-brand-surface/70 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>
                    {lang === 'en'
                      ? 'Inquiries are treated under strict corporate confidentiality.'
                      : 'সকল তথ্য ও আলোচনা শতভাগ গোপনীয়তার সাথে সংরক্ষণ করা হয়।'}
                  </span>
                </div>

              </div>
            </div>

            {/* Right 7 Cols: Interactive Collaboration Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-surface/15 shadow-sm">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-brand-dark mb-2">
                    {lang === 'en' ? 'Send a Collaboration Inquiry' : 'প্রজেক্ট বা যৌথ কাজের বার্তা পাঠান'}
                  </h2>
                  <p className="text-sm text-brand-surface/80">
                    {lang === 'en'
                      ? 'Fill out the form below. Our founding leadership typically replies within 24–48 hours.'
                      : 'নিচের ফর্মটি পূরণ করুন। আমাদের পরিচালনা পর্ষদ ২৪–৪৮ ঘণ্টার মধ্যে যোগাযোগ করবে।'}
                  </p>
                </div>

                {/* Success Alert */}
                {status === 'success' && (
                  <div className="mb-6 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3 animate-in fade-in duration-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm leading-relaxed">
                      {t.contact.form.successMsg}
                    </div>
                  </div>
                )}

                {/* Error Alert */}
                {status === 'error' && (
                  <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-900 flex items-start gap-3 animate-in fade-in duration-200">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm font-medium">
                      {errorMessage || t.contact.form.errorMsg}
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-brand-surface mb-2">
                        {t.contact.form.nameLabel} <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t.contact.form.namePlaceholder}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-brand-surface/20 bg-brand-lightgreen/20 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-forest focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-brand-surface mb-2">
                        {t.contact.form.emailLabel} <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.contact.form.emailPlaceholder}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-brand-surface/20 bg-brand-lightgreen/20 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-forest focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Category & Subject Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="serviceType" className="block text-xs font-bold uppercase tracking-wider text-brand-surface mb-2">
                        {t.contact.form.serviceTypeLabel}
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-brand-surface/20 bg-brand-lightgreen/20 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-forest focus:bg-white transition-all"
                      >
                        {t.contact.form.serviceOptions.map((opt, i) => (
                          <option key={i} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-brand-surface mb-2">
                        {t.contact.form.subjectLabel}
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={t.contact.form.subjectPlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-brand-surface/20 bg-brand-lightgreen/20 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-forest focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Message Area */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-brand-surface mb-2">
                      {t.contact.form.messageLabel} <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.form.messagePlaceholder}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-brand-surface/20 bg-brand-lightgreen/20 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-forest focus:bg-white transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 ${
                      status === 'submitting'
                        ? 'bg-brand-surface text-brand-gray-300 cursor-not-allowed'
                        : 'bg-brand-forest text-brand-lime hover:bg-brand-surface shadow-md active:scale-[0.99]'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === 'submitting' ? t.contact.form.submittingBtn : t.contact.form.submitBtn}</span>
                  </button>

                </form>

              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
