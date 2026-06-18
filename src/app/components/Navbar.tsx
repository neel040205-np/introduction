'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, ArrowUpRight, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = el.offsetTop - 80;
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 border-b border-glass-border backdrop-blur-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div 
        className="absolute top-0 left-0 h-[2px] bg-primary transition-all duration-100" 
        style={{ width: `${scrollProgress}%` }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
            <Cpu size={18} className="group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <span className="font-sans font-bold text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">
            Neel<span className="text-primary">.dev</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors hover:text-foreground ${
                activeSection === link.id ? 'text-primary' : 'text-text-muted'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.span
                  layoutId="navbar-active"
                  className="absolute bottom-0 left-4 right-4 h-[2px] bg-primary rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-glass-border hover:bg-glass hover:text-primary transition-all duration-200 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="relative px-4 py-2 text-xs font-semibold tracking-wider uppercase border border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-300 flex items-center gap-1.5 overflow-hidden group"
          >
            <span className="relative z-10">Hire Me</span>
            <ArrowUpRight size={14} className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-glass-border hover:bg-glass hover:text-primary transition-all duration-200 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg border border-glass-border hover:bg-glass hover:text-primary transition-all duration-200 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-glass-border bg-background/95 backdrop-blur-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    activeSection === link.id 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-text-muted hover:bg-glass hover:text-foreground'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="w-full justify-center px-4 py-3 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-300 flex items-center gap-2 font-medium"
                >
                  Hire Me <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
