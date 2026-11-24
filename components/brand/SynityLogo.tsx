"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SynityLogoProps {
  variant?: 'light' | 'dark'; // 'light' for dark background (shows neon lime & white text); 'dark' for light background
  size?: 'sm' | 'md' | 'lg';
  showSymbolOnly?: boolean;
  className?: string;
  href?: string;
}

export const SynityLogo: React.FC<SynityLogoProps> = ({
  variant = 'light',
  size = 'md',
  showSymbolOnly = false,
  className = '',
  href = '/',
}) => {
  const isLight = variant === 'light'; // on dark bg

  // Dimensions
  const symbolDimensions = {
    sm: { width: 20, height: 50 },
    md: { width: 26, height: 65 },
    lg: { width: 38, height: 95 },
  }[size];

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  }[size];

  const symbolSrc = isLight ? '/brand/symbol-lime.png' : '/brand/symbol-dark.png';

  const content = (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {/* Official Symbol */}
      <div 
        className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ width: symbolDimensions.width, height: symbolDimensions.height }}
      >
        <Image
          src={symbolSrc}
          alt="SynitySoft Symbol"
          fill
          sizes={`${symbolDimensions.width * 2}px`}
          className="object-contain"
          priority
        />
      </div>

      {/* Official Typography: "synity" bold + "soft" light */}
      {!showSymbolOnly && (
        <div className="flex flex-col leading-none">
          <div className={`font-sans tracking-tight ${textSizes} ${isLight ? 'text-white' : 'text-brand-forest'}`}>
            <span className="font-extrabold tracking-tight">synity</span>
            <span className={`font-light ${isLight ? 'text-brand-lime' : 'text-brand-surface'}`}>soft</span>
          </div>
          <span className={`text-[9px] tracking-widest uppercase font-medium mt-1 ${isLight ? 'text-brand-gray-400' : 'text-brand-surface/70'}`}>
            Built Around Need
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block focus:outline-none focus:ring-2 focus:ring-brand-lime rounded-md" aria-label="SynitySoft Homepage">
        {content}
      </Link>
    );
  }

  return content;
};
