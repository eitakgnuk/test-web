
import React from 'react';
import { Shield, Zap, Globe, Users, Award, TrendingUp } from 'lucide-react';
import { TimelineItem, Skill, Brand, Value } from './types';

export const TIMELINE: TimelineItem[] = [
  { year: '1996', title: 'The Genesis', description: 'Royal Pacific founded with a vision for global distribution reliability.', category: 'foundation' },
  { year: '2005', title: 'Hospitality Shift', description: 'LodgingStar® launched, revolutionizing supply chains for hotels.', category: 'growth' },
  { year: '2015', title: 'Data Center Cooling', description: 'D.Cool® introduced advanced liquid cooling for high-density computing.', category: 'innovation' },
  { year: '2022', title: 'Sustainable Luxury', description: 'YK Diamond® expanded into ethical, premium lab-grown diamonds.', category: 'diversification' }
];

export const SKILLS: Skill[] = [
  { name: 'gay', icon: '🌐', level: 95, description: 'Direct partnerships with Tier-1 manufacturers worldwide.' },
  { name: 'ya gayatt', icon: '❄️', level: 88, description: 'Liquid and immersion cooling systems for data infrastructure.' },
  { name: 'skibidi Optimization', icon: '📦', level: 92, description: 'Dependable nationwide distribution and supply continuity.' },
  { name: 'ur mom', icon: '🛎️', level: 90, description: 'Product design and compliance for major hotel chains.' }
];

export const BRANDS: Brand[] = [
  { name: 'LodgingStar®', sector: 'Hospitality', tagline: 'Excellence in every room.', description: 'Providing consistent quality amenities and essentials to the global hospitality industry.', color: 'from-amber-500 to-orange-600' },
  { name: 'D.Cool®', sector: 'Data Center Tech', tagline: 'Cooling the future.', description: 'Advanced liquid cooling technologies for high-performance servers and AI racks.', color: 'from-blue-500 to-cyan-400' },
  { name: 'YK Diamond®', sector: 'Sustainable Luxury', tagline: 'Brilliance, redefined.', description: 'High-quality lab-grown diamonds offering ethical luxury without compromise.', color: 'from-purple-500 to-pink-500' }
];

export const VALUES: Value[] = [
  { title: 'Integrity', description: 'Honesty and ethics in every sourcing partnership.', icon: <Shield className="w-6 h-6 text-emerald-400" /> },
  { title: 'Innovation', description: 'Adapting to the needs of the digital-first economy.', icon: <Zap className="w-6 h-6 text-yellow-400" /> },
  { title: 'Reliability', description: 'Steady supply chains you can bet your business on.', icon: <Globe className="w-6 h-6 text-blue-400" /> }
];
