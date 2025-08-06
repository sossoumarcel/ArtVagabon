import { ReactNode } from 'react';

export const HEADING_VARIANTS = ['primary', 'secondary'] as const;
export const HEADING_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

export type HeadingVariant = typeof HEADING_VARIANTS[number];
export type HeadingTag = typeof HEADING_TAGS[number];

export interface HeadingProps {
  as?: HeadingTag;
  variant?: HeadingVariant;
  children: ReactNode;
  className?: string;
}
