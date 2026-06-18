'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Code2, Users, Database } from 'lucide-react';

export default function Experience() {
  const timeline = [
    {
      year: '2025',
      title: 'Initiated MERN Stack Path',
      subtitle: 'Self-directed engineering specialization',
      description: 'Mastered standard web paradigms, client-side React architectures, Node.js event loops, asynchronous flow engines, and MongoDB schema definitions.',
      icon: <Code2 size={15} className="text-blue-400" />
    },
    {
      year: '2025',
      title: 'Engineered OHRM (HRMS Platform)',
      subtitle: 'Online HR Management System',
      description: 'Designed an integrated payroll execution module with clock-in tracking, automated tax/bonus logic, and PDF payslip automation over secure Nodemailer SMTP channels.',
      icon: <Users size={15} className="text-purple-400" />
    },
    {
      year: '2026',
      title: 'Architected DocElex Vault',
      subtitle: 'Student Document Management System',
      description: 'Created a highly protected document repository. Implemented role-based JWT gateway controls, audit trails logging admin checks, and buffered stream pipelines.',
      icon: <Calendar size={15} className="text-emerald-400" />
    },
    {
      year: '2026',
      title: 'Built Dental Clinic CRM',
      subtitle: 'Automated CRM & Check-in Platform',
      description: 'Constructed a high-concurrency booking engine. Used Supabase serverless structures, Twilio alert webhook pipelines, QR queuing tickets, and database locks to prevent race conditions.',
      icon: <Database size={15} className="text-amber-400" />
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-background/20 border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            Journey Timeline
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold mt-4 tracking-tight">
            Engineering Milestones
          </h2>
          <p className="text-sm text-text-muted mt-2">
            Chronological growth showcasing technical depth and project complexity.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-glass-border max-w-3xl ml-4 sm:ml-6 md:ml-8 space-y-12">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-4 top-1 h-8 w-8 rounded-xl bg-background border border-glass-border flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
                {item.icon}
              </div>

              {/* Time Indicator */}
              <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                {item.year}
              </span>

              {/* Card details */}
              <div className="mt-4 p-5 rounded-2xl glass border border-glass-border group-hover:border-primary/20 transition-colors">
                <h3 className="text-sm font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-[10px] font-medium text-text-muted mt-0.5">{item.subtitle}</p>
                <p className="text-xs text-text-muted mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
