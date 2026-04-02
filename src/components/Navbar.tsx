import { useState, useEffect } from 'react';
import sattvaLogo from '@/assets/sattva-logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500">
      <div
        className={`flex items-center gap-2 md:gap-6 px-4 md:px-8 py-2.5 rounded-full transition-all duration-500 ${
          scrolled
            ? 'bg-foreground/80 backdrop-blur-xl shadow-2xl'
            : 'bg-foreground/60 backdrop-blur-lg shadow-lg'
        }`}
      >
        <img src={sattvaLogo} alt="Sattva" className="w-8 h-8 rounded-full object-cover" />
        <span className="font-serif text-sm md:text-base text-primary-foreground font-medium tracking-wide">
          Sattva
        </span>
        <div className="hidden sm:flex items-center gap-4 ml-2">
          <a href="#symptoms" className="text-xs md:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Journey</a>
          <a href="#discovery" className="text-xs md:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Product</a>
          <a href="#ayurveda" className="text-xs md:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Ayurveda</a>
        </div>
        <a
          href="#cta"
          className="ml-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-primary text-primary-foreground hover:scale-105 transition-transform"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
