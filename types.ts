// Import React to resolve React.ReactNode namespace error
import React from 'react';

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  category: 'foundation' | 'growth' | 'innovation' | 'diversification';
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  description: string;
}

export interface Brand {
  name: string;
  tagline: string;
  description: string;
  sector: string;
  color: string;
}

export interface Value {
  title: string;
  description: string;
  icon: React.ReactNode;
}