export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
  bestFor: string;
  timeline: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export enum FormStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}