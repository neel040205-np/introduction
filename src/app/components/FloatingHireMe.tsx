'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Download, Mail, Phone, ExternalLink, X, ClipboardCheck, Clipboard } from 'lucide-react';

export default function FloatingHireMe() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('neelpatelnp.0402@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text', err);
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Neel_Patel_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const actions = [
    { 
      label: 'Download CV', 
      icon: <Download size={15} />, 
      action: handleDownloadCV,
      highlight: true 
    },
    { 
      label: 'Copy Email', 
      icon: copied ? <ClipboardCheck size={15} /> : <Clipboard size={15} />, 
      action: handleCopyEmail, 
      subText: 'neelpatelnp.0402@gmail.com' 
    },
    { 
      label: 'Call Neel', 
      icon: <Phone size={15} />, 
      action: () => window.open('tel:+917859941319', '_self') 
    },
    { 
      label: 'Open Contact Form', 
      icon: <Mail size={15} />, 
      action: () => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      } 
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-45 flex flex-col items-end">
      {/* Quick Actions Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="mb-4 w-72 rounded-2xl glass-premium p-4 shadow-2xl border border-glass-border overflow-hidden"
          >
            <div className="flex items-center justify-between pb-3 border-b border-glass-border mb-3">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">Recruiter Fast-Track</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-text-muted hover:text-foreground transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-2">
              {actions.map((act, index) => (
                <button
                  key={index}
                  onClick={act.action}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs font-medium transition-all ${
                    act.highlight
                      ? 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20'
                      : 'bg-background/40 hover:bg-glass border border-glass-border hover:border-primary/30 text-foreground'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={act.highlight ? 'text-white' : 'text-primary'}>{act.icon}</span>
                    <div className="flex flex-col">
                      <span>{act.label}</span>
                      {act.subText && <span className="text-[10px] text-text-muted font-normal mt-0.5">{act.subText}</span>}
                    </div>
                  </div>
                  <ExternalLink size={12} className="opacity-40" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Floating Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-4 py-3 rounded-full bg-primary hover:bg-primary-hover text-white shadow-xl shadow-primary/30 hover:shadow-primary/40 transition-all border border-primary/20 hover:scale-105 active:scale-95 group cursor-pointer"
          >
            <motion.div
              animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={18} /> : <Briefcase size={18} className="group-hover:animate-bounce" />}
            </motion.div>
            <span className="text-xs font-bold uppercase tracking-wider">
              {isOpen ? 'Close' : 'Hire Me'}
            </span>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
