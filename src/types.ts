export interface SkillItem {
  id: string;
  name: string;
  percentage: number;
  icon: string;
  tagline: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  fullDetails: string;
  image: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  hardwareOrComponents?: string[];
  demoOrCodeLink?: string;
}

export interface ContactLink {
  platform: string;
  username: string;
  url: string;
  icon: string;
  description: string;
  isPrimary?: boolean;
}

export interface MetricItem {
  value: string;
  label: string;
  subtext: string;
}
