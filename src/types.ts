export type NavigationPage = 
  | 'home'
  | 'about'
  | 'executive-advisory'
  | 'coaching'
  | 'speaking'
  | 'contact';

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  organization: string;
  sector: 'Healthcare' | 'Technology' | 'Education' | 'Institutional Governance';
  location: string;
  highlight: string;
}

export interface KeynoteTopic {
  id: string;
  title: string;
  tagline: string;
  description: string;
  outcomes: string[];
  targetAudience: string;
  durationOptions: string[];
  themeCategory: 'Complexity & Strategy' | 'Resilience & Wellbeing' | 'Human-Centered Leadership' | 'Organizational Transformation';
}

export interface AdvisoryOffering {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  challengesAddressed: string[];
  strategicOutcomes: string[];
  engagementModel: string;
}

export interface CoachingPillar {
  id: string;
  title: string;
  coreFocus: string;
  description: string;
  benefits: string[];
  iconName: string;
}

export interface SectorExperience {
  sector: string;
  iconName: string;
  headline: string;
  description: string;
  typicalMandates: string[];
  representativeImpact: string;
}

export interface AssessmentQuestion {
  id: number;
  question: string;
  category: 'Clarity' | 'Resilience' | 'Governance' | 'Energy';
  options: {
    label: string;
    score: number;
    description: string;
  }[];
}

export interface ContactFormData {
  name: string;
  organization: string;
  email: string;
  phone: string;
  reason: 'executive-advisory' | 'leadership-coaching' | 'keynote-speaking' | 'event-masterclass' | 'general-inquiry';
  timeline: string;
  message: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}
