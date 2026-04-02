import { useScrollScene } from '@/hooks/useScrollScene';
import { ReactNode } from 'react';

interface SceneProps {
  children: ReactNode;
  className?: string;
  parallaxSpeed?: number;
}

export function Scene({ children, className = '', parallaxSpeed = 0.3 }: SceneProps) {
  const { ref, isVisible, progress } = useScrollScene(0.15);

  const parallaxY = (progress - 0.5) * 100 * parallaxSpeed;

  return (
    <section
      ref={ref}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 ${className}`}
    >
      <div
        className={`w-full max-w-6xl mx-auto transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
        style={{ transform: isVisible ? `translateY(${parallaxY}px)` : 'translateY(64px)' }}
      >
        {children}
      </div>
    </section>
  );
}
