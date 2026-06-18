'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, User } from 'lucide-react';

export default function Testimonials() {
  const recommendations = [
    {
      text: "Neel has an exceptional grasp of system architectures. During our database projects, he was the go-to engineer for resolving concurrency locks and setting up JWT gateways.",
      author: "Project Partner",
      role: "B.Tech Computer Engineering Peer",
      rating: 5
    },
    {
      text: "Neel demonstrated great initiative in building the DocElex document management vault. He combined practical cryptographical knowledge with Node.js to create a highly secure product.",
      author: "Academic Mentor",
      role: "Dharmsinh Desai University Faculty",
      rating: 5
    },
    {
      text: "Neel understands the SaaS lifecycle and does not just write raw code. He focuses on fast load speeds, clean API contracts, and automatic user notifications.",
      author: "Technical Advisor",
      role: "Industry Full Stack Consultant",
      rating: 5
    }
  ];

  return (
    <section className="py-24 relative bg-background/20 border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            Endorsements
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold mt-4 tracking-tight text-foreground">
            Peer & Mentor Recommendations
          </h2>
          <p className="text-sm text-text-muted mt-2">
            Feedback and observations from project peers, university mentors, and advisors.
          </p>
        </div>

        {/* Grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendations.map((rec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl glass border border-glass-border flex flex-col justify-between hover:border-primary/20 transition-all duration-300 group"
            >
              <div>
                <Quote size={24} className="text-primary/20 mb-4 group-hover:text-primary/40 transition-colors" />
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed italic">
                  &ldquo;{rec.text}&rdquo;
                </p>
              </div>

              <div className="mt-8 border-t border-glass-border/30 pt-4 flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-background/50 border border-glass-border flex items-center justify-center text-primary">
                  <User size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground">{rec.author}</h4>
                  <p className="text-[10px] text-text-muted mt-0.5">{rec.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
