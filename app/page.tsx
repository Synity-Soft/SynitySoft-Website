"use client";

import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { WhoWeAreSection } from '@/components/home/WhoWeAreSection';
import { MissionVisionSection } from '@/components/home/MissionVisionSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { FeaturedProjectsSection } from '@/components/home/FeaturedProjectsSection';
import { ApproachSection } from '@/components/home/ApproachSection';
import { TeamSection } from '@/components/home/TeamSection';
import { CtaSection } from '@/components/home/CtaSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <MissionVisionSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <ApproachSection />
      <TeamSection />
      <CtaSection />
    </>
  );
}
