'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  label: string;
  className?: string;
}

export const Button = ({ href, label, className, ...props }: ButtonProps) => {
  return (
    <Link
      href={href}
      {...props}
      role="button"
      tabIndex={0}
      aria-label={label}
      className={cn(
        `inline-block px-6 py-3 rounded-xl text-white font-semibold text-center focus:outline-none focus:ring-2 
         focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300`,

        // Glassmorphism
        `bg-white/10 backdrop-blur-md border border-white/20 shadow-lg`,

        // Hover and click feedback
        `hover:bg-white/20 hover:shadow-xl active:scale-95`,

        // Extra visual flair
        `relative z-10 overflow-hidden`,
        className
      )}
    >
      {label}
    </Link>
  );
};
