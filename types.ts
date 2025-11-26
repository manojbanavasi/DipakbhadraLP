import React from 'react';

export interface FeaturePoint {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export interface Blocker {
  id: number;
  title: string;
  problem: string;
  solution: string;
}