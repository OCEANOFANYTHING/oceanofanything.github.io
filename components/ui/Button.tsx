'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
};

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-6 py-2 rounded-lg font-medium text-sm transition-all duration-200 focus:outline-none';

  const variants = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 active:scale-95 focus:ring-2 focus:ring-blue-400',
    secondary:
      'bg-gray-100 text-gray-800 hover:bg-gray-200 active:scale-95 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700',
    ghost: 'bg-transparent text-blue-600 hover:underline dark:text-blue-400',
  };

  const finalClass = clsx(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={finalClass}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={finalClass}>
      {children}
    </button>
  );
}
