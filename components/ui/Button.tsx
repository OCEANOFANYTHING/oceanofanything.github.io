'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  href,
  onClick,
  className = '',
}: ButtonProps) {
  const buttonClasses = clsx(
    `group relative inline-flex items-center justify-center px-6 py-3 text-white font-bold rounded-lg transition-transform duration-200 ease-in-out
    bg-gradient-to-r from-blue-600 to-purple-600 shadow-[0_5px_0px_#1e3a8a]
    hover:translate-y-1 hover:shadow-[0_2px_0px_#1e3a8a]
    active:translate-y-[2px] active:shadow-[0_0px_0px_#1e3a8a]
    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2`,
    className
  );

  const content = (
    <span className="relative z-10 group-hover:scale-105 group-active:scale-100 transition-transform duration-150">
      {children}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {content}
    </button>
  );
}
