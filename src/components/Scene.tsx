import { useScrollScene } from '@/hooks/useScrollScene';
import { ReactNode } from 'react';

interface SceneProps {
  children: ReactNode;
  className?: string;
  parallaxSpeed?: number;
  minHeight?: string;
}

export function Scene({ children, className = '', parallaxSpeed = 0.3, minHeight = 'min-h-screen' }: SceneProps) {
  const { ref, isVisible, progress } = useScrollScene(0.1);

  const parallaxY = (progress - 0.5) * 80 * parallaxSpeed;

  return (
    <section
      ref={ref}
      className={`relative ${minHeight} flex items-center justify-center overflow-hidden px-6 md:px-12 py-20 md:py-28 ${className}`}
    >
      <div
        className={`w-full max-w-6xl mx-auto transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
        style={{ transform: isVisible ? `translateY(${parallaxY}px)` : 'translateY(48px)' }}
      >
        {children}
      </div>
    </section>
  );
}
