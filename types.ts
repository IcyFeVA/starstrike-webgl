import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
  span?: string; // col-span class
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface Plan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  ctaText: string;
}
