'use client';

import React from 'react';
import { Cpu } from 'lucide-react';

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = el.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-glass-border py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
        
        {/* Left logo */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
            <Cpu size={16} />
          </div>
          <span className="font-sans font-bold text-sm tracking-tight text-foreground">
            Neel<span className="text-primary">.dev</span>
          </span>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-text-muted">
          <button onClick={() => handleScrollTo('home')} className="hover:text-primary transition-colors cursor-pointer">Home</button>
          <button onClick={() => handleScrollTo('about')} className="hover:text-primary transition-colors cursor-pointer">About</button>
          <button onClick={() => handleScrollTo('skills')} className="hover:text-primary transition-colors cursor-pointer">Skills</button>
          <button onClick={() => handleScrollTo('projects')} className="hover:text-primary transition-colors cursor-pointer">Projects</button>
          <button onClick={() => handleScrollTo('experience')} className="hover:text-primary transition-colors cursor-pointer">Experience</button>
          <button onClick={() => handleScrollTo('contact')} className="hover:text-primary transition-colors cursor-pointer">Contact</button>
        </div>

        {/* Right Info */}
        <div className="text-center md:text-right text-[10px] text-text-muted font-mono space-y-1">
          <p>© {new Date().getFullYear()} Neel Patel. All rights reserved.</p>
          <p className="opacity-60">Designed & Engineered as a Premium SaaS System.</p>
        </div>

      </div>
    </footer>
  );
}
