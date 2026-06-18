'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      question: 'Are you open to relocation or remote/hybrid positions?',
      answer: 'Yes! I am fully open to relocating for full-time software engineering roles. I am comfortable with onsite, hybrid, or remote working environments.'
    },
    {
      question: 'What is your current availability and notice period?',
      answer: 'As a final-year B.Tech student graduating in 2026, I am ready to join immediately for full-time roles or internships, subject to university examination schedules.'
    },
    {
      question: 'What is your primary tech stack?',
      answer: 'My primary stack is the MERN Stack (MongoDB, Express, React, Node.js) with TypeScript. I also build apps using Next.js 15, PostgreSQL, Supabase, and integrate Generative AI capabilities.'
    },
    {
      question: 'Do you have experience with databases and deployment?',
      answer: 'Yes, I write SQL schemas in PostgreSQL and document structures in MongoDB. I deploy frontend services on Vercel and leverage Supabase or Node instances for server execution.'
    },
    {
      question: 'How do you approach application security in your projects?',
      answer: 'I secure routes using JSON Web Tokens (JWT), encrypt sensitive user assets with AES-256 standard encryption (as built in DocElex), hash password keys with bcrypt, and manage credentials using environment variables.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-background/40 border-t border-glass-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            Recruiter FAQs
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold mt-4 tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-text-muted mt-2">
            Quick answers to queries regarding relocation, tech stacks, and career alignment.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl glass border border-glass-border overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left text-xs sm:text-sm font-bold text-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle size={16} className="text-primary shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} className="text-text-muted" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-text-muted leading-relaxed border-t border-glass-border/30 pl-[44px]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
