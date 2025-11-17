import { ReactNode } from 'react';

export interface AnimatedButtonProps {
  text?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  delay?: number;
}
