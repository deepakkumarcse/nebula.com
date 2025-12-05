export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  benefits: string[];
  technologies: string[];
  idealFor: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
  rating: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  image: string;
}

export interface TechItem {
  id: string;
  name: string;
  category: string;
  icon: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export interface ContactFormInputs {
  name: string;
  email: string;
  company: string;
  budget: string;
  projectType: string[];
  message: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}