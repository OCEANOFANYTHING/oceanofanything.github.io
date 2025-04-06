'use client';

import { useEffect } from 'react';
import { BackgroundGradientAnimation } from '@/components/ui/GradientBg';
import { Button } from '@/components/ui/Button';

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(0,0,0)"
      gradientBackgroundEnd="rgb(20,0,40)"
      blendingValue="screen"
      size="120%"
    >
      <div className="flex items-center justify-center min-h-screen px-4 py-8">
        <div className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-2xl max-w-md w-full text-center border border-white/20">
          <h1 className="text-5xl font-bold text-white drop-shadow mb-4">Oops! 😵</h1>
          <p className="text-white/80 text-lg mb-6">
            Something went wrong. But hey, at least the background looks cool!
          </p>
          <Button href="/" label="🏠 Go Home" className="mt-4" />
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
