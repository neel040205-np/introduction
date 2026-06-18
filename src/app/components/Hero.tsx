'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ArrowRight, Download, ChevronRight } from 'lucide-react';
import CodeCanvas from './CodeCanvas';

export default function Hero() {
  const roles = ['Full Stack Developer', 'MERN Stack Developer', 'AI Enthusiast', 'SaaS Builder'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = el.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Neel_Patel_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-background">
      <div className="bg-grid-mesh animate-grid-move" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="h-[1px] w-8 bg-primary" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Final Year Computer Engineering Student</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            Neel Patel
          </motion.h1>

          {/* Rotating Role Text */}
          <div className="h-10 sm:h-12 overflow-hidden mt-2 mb-4 flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-text-muted leading-relaxed max-w-xl"
          >
            Building scalable web applications, automation systems, and AI-powered solutions using React, Node.js, MongoDB, PostgreSQL, and modern cloud technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="flex items-center gap-2 px-5 py-3 bg-primary hover:bg-primary-hover text-white rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/35 transition-all text-xs font-semibold uppercase tracking-wider group cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-5 py-3 bg-background/50 hover:bg-glass text-foreground border border-glass-border hover:border-primary/35 rounded-xl transition-all text-xs font-semibold uppercase tracking-wider group cursor-pointer"
            >
              <span>Download CV</span>
              <Download size={14} className="group-hover:translate-y-0.5 transition-transform text-primary" />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="flex items-center gap-2 px-5 py-3 bg-background/30 hover:bg-glass text-text-muted hover:text-foreground rounded-xl transition-all text-xs font-semibold uppercase tracking-wider cursor-pointer"
            >
              <span>Contact Me</span>
              <ChevronRight size={14} />
            </button>
          </motion.div>

          {/* Recruiter fast indicators */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-glass-border/40 text-text-muted"
          >
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/neel040205-np"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary hover:scale-110 transition-all"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/neel-patel-182643415/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary hover:scale-110 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            </div>

            <span className="hidden sm:inline h-4 w-[1px] bg-glass-border" />

            <div className="flex flex-wrap gap-4 text-xs font-mono">
              <a href="mailto:neelpatelnp.0402@gmail.com" className="hover:text-primary transition-colors flex items-center gap-1.5">
                <Mail size={14} className="text-primary" />
                <span>neelpatelnp.0402@gmail.com</span>
              </a>
              <a href="tel:+917859941319" className="hover:text-primary transition-colors flex items-center gap-1.5">
                <Phone size={14} className="text-primary" />
                <span>+91 78599 41319</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Code Canvas) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <CodeCanvas />
        </motion.div>
      </div>
    </section>
  );
}
