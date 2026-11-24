export type Language = 'en' | 'bn';

export interface NavItem {
  key: string;
  label: string;
  href: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  status: 'Completed' | 'Working Prototype' | 'In Development' | 'Concept';
  statusLabel: string;
  summary: string;
  description: string;
  technologies: string[];
  features: string[];
  impactPoints: string[];
  accentColor: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  idealFor: string;
}

export interface TeamMember {
  name: string;
  designation: string;
  roleType: 'leadership' | 'engineering';
  bio: string;
  expertise: string[];
  image?: string;
  links: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
  tag: string;
}
