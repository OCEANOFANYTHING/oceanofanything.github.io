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
      className={cn(
        `relative inline-block px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 group 
         bg-white/10 backdrop-blur-md border border-white/20
         shadow-[0_10px_20px_rgba(0,0,0,0.2)] overflow-hidden`,

        `before:absolute before:inset-0 before:rounded-xl before:bg-white/20 before:opacity-0
         before:transition-all before:duration-300 group-hover:before:opacity-10`,

        `after:absolute after:inset-0 after:rounded-xl after:border after:border-white/10
         after:transition-all after:duration-300 group-hover:after:scale-105`,

        `hover:scale-[1.03] active:scale-95`,
        className
      )}
    >
      <span className="relative z-10">{label}</span>
    </Link>
  );
};
