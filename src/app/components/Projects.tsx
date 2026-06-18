'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink, Github, FileText, Database, ShieldAlert, Cpu, Award, X, Check } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  techStack: string[];
  features: string[];
  links: {
    demo: string;
    github: string;
  };
  caseStudy: {
    problem: string;
    solution: string;
    challenges: string;
    learnings: string;
    architecture: string[];
    schema: {
      table: string;
      columns: { name: string; type: string; key?: boolean }[];
    }[];
  };
}

const projectsData: Project[] = [
  {
    id: 'docelex',
    title: 'DocElex',
    subtitle: 'Student Document Management System',
    category: 'MERN Stack',
    description: 'A secure academic vault for document uploads, AES-256 encryption, custom audit logs, and analytics.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'JWT'],
    features: ['Secure document vault', 'JWT Authentication', 'Cloudinary Integration', 'Analytics Dashboard', 'PDF & Excel Export', 'Audit Logs'],
    links: {
      demo: 'https://docelex.vercel.app/',
      github: 'https://github.com/neel040205-np/docelex'
    },
    caseStudy: {
      problem: 'Institutions struggle with physical paper collections, security concerns regarding transcript storage, and lack of verified audit logs for tracking administrator views.',
      solution: 'Developed an automated full-stack academic document vault utilizing React for the interface, backed by Node.js streams. Document storage is segmented and logged using cryptographically secured tokens.',
      challenges: 'Encrypting large binary files on-the-fly and uploading them to Cloudinary without locking the single-threaded Node.js event-loop or causing memory overflows.',
      learnings: 'Implemented Stream piping inside Express.js, utilizing memory buffers efficiently and managing secure API gateways with role-based JWT access keys.',
      architecture: ['React.js Client', 'Node.js API Gateway', 'AES Encryption Pipeline', 'MongoDB (Metadata)', 'Cloudinary (Vault Storage)'],
      schema: [
        {
          table: 'users',
          columns: [
            { name: 'id', type: 'UUID', key: true },
            { name: 'email', type: 'VARCHAR(255)' },
            { name: 'role', type: 'ENUM("STUDENT", "ADMIN")' },
            { name: 'created_at', type: 'TIMESTAMP' }
          ]
        },
        {
          table: 'documents',
          columns: [
            { name: 'id', type: 'UUID', key: true },
            { name: 'student_id', type: 'UUID' },
            { name: 'vault_url', type: 'TEXT' },
            { name: 'checksum', type: 'VARCHAR(64)' },
            { name: 'uploaded_at', type: 'TIMESTAMP' }
          ]
        },
        {
          table: 'audit_logs',
          columns: [
            { name: 'id', type: 'UUID', key: true },
            { name: 'user_id', type: 'UUID' },
            { name: 'action', type: 'VARCHAR(100)' },
            { name: 'ip_address', type: 'VARCHAR(45)' },
            { name: 'timestamp', type: 'TIMESTAMP' }
          ]
        }
      ]
    }
  },
  {
    id: 'ohrm',
    title: 'OHRM',
    subtitle: 'Online HR Management System',
    category: 'MERN Stack',
    description: 'Fully integrated payroll and attendance tracking system with dashboard controls and password recovery.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Nodemailer'],
    features: ['Payroll Management', 'Attendance Tracking', 'Leave Management', 'Password Recovery', 'Employee Dashboard', 'Payslip PDF Dispatch'],
    links: {
      demo: 'https://onlinehrmanagement.vercel.app/',
      github: 'https://github.com/neel040205-np/OHRM_OnlineHRManagement'
    },
    caseStudy: {
      problem: 'Organizations face discrepancies in attendance syncing, manual errors in calculating salary payouts, and delays in transmitting payslips to staff.',
      solution: 'Created OHRM, an HR pipeline that links clock-ins to a payroll engine, auto-calculates bonuses/deductions, and emails password recovery and monthly payroll invoices.',
      challenges: 'Handling real-time attendance logs and calculating correct base salaries while accounting for mid-month leaves and unpaid time off.',
      learnings: 'Designed cron-scheduling routines for payroll run tasks and implemented transactional database lock systems to prevent payment computation bugs.',
      architecture: ['React.js Dashboard', 'Express.js Payroll Engine', 'Nodemailer SMTP Client', 'MongoDB Database'],
      schema: [
        {
          table: 'employees',
          columns: [
            { name: 'id', type: 'UUID', key: true },
            { name: 'name', type: 'VARCHAR(100)' },
            { name: 'base_salary', type: 'DECIMAL(10,2)' },
            { name: 'joining_date', type: 'DATE' }
          ]
        },
        {
          table: 'attendance',
          columns: [
            { name: 'id', type: 'UUID', key: true },
            { name: 'employee_id', type: 'UUID' },
            { name: 'clock_in', type: 'TIMESTAMP' },
            { name: 'clock_out', type: 'TIMESTAMP' }
          ]
        },
        {
          table: 'payroll',
          columns: [
            { name: 'id', type: 'UUID', key: true },
            { name: 'employee_id', type: 'UUID' },
            { name: 'net_salary', type: 'DECIMAL(10,2)' },
            { name: 'transaction_id', type: 'VARCHAR(100)' }
          ]
        }
      ]
    }
  },
  {
    id: 'dental-clinic',
    title: 'Dental Clinic CRM',
    subtitle: 'Clinic Management Platform',
    category: 'NextJS / Supabase',
    description: 'High-performance clinic bookings featuring automated Twilio queues and QR-code tickets.',
    techStack: ['React', 'Supabase', 'PostgreSQL', 'Twilio', 'Vercel'],
    features: ['Appointment Booking', 'WhatsApp Notifications', 'SMS Alerts', 'QR Ticket Generation', 'Payment Verification', 'Staff Dashboard'],
    links: {
      demo: 'https://dentalhouselunawada.vercel.app/',
      github: 'https://github.com/neel040205-np/dentalclinic'
    },
    caseStudy: {
      problem: 'Clinic operations suffer from patient check-in bottlenecks, missed appointment notifications, and queue scheduling conflicts.',
      solution: 'Developed a CRM booking service that automatically assigns queue numbers, generates QR tickets, and sends reminders using Twilio API triggers.',
      challenges: 'Managing booking slot concurrency during peak hours to ensure two patients do not schedule the exact same dentist block.',
      learnings: 'Utilized PostgreSQL row-level locks (`SELECT FOR UPDATE`) within transaction blocks and configured real-time subscriptions for immediate queue display.',
      architecture: ['Next.js App Router', 'Supabase DB Client', 'PostgreSQL Triggers', 'Twilio Messaging Webhook'],
      schema: [
        {
          table: 'patients',
          columns: [
            { name: 'id', type: 'UUID', key: true },
            { name: 'name', type: 'VARCHAR(100)' },
            { name: 'phone', type: 'VARCHAR(20)' }
          ]
        },
        {
          table: 'appointments',
          columns: [
            { name: 'id', type: 'UUID', key: true },
            { name: 'patient_id', type: 'UUID' },
            { name: 'dentist_name', type: 'VARCHAR(100)' },
            { name: 'timeslot', type: 'TIMESTAMP' }
          ]
        },
        {
          table: 'qr_tickets',
          columns: [
            { name: 'id', type: 'UUID', key: true },
            { name: 'appointment_id', type: 'UUID' },
            { name: 'queue_number', type: 'INTEGER' },
            { name: 'checked_in', type: 'BOOLEAN' }
          ]
        }
      ]
    }
  }
];

export default function Projects() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'MERN Stack', 'NextJS / Supabase'];

  const filteredProjects = projectsData.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                          p.subtitle.toLowerCase().includes(search.toLowerCase()) ||
                          p.techStack.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchesTab = activeTab === 'All' || p.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <section id="projects" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              Technical Showcases
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-4 tracking-tight">
              Production-Grade Applications
            </h2>
            <p className="text-sm text-text-muted mt-2">
              SaaS solutions solving actual administration, HR coordination, and clinic automation problems.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto items-stretch sm:items-center">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" size={15} />
              <input
                type="text"
                placeholder="Search projects or tech..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2 text-xs rounded-xl glass border border-glass-border focus:border-primary/50 outline-none w-full sm:w-64 text-foreground bg-transparent placeholder-text-muted/60"
              />
            </div>
            {/* Tab Filters */}
            <div className="flex gap-1 bg-background/50 border border-glass-border p-1 rounded-xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === cat
                      ? 'bg-primary text-white shadow-md shadow-primary/20'
                      : 'text-text-muted hover:text-foreground'
                  }`}
                >
                  {cat.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="rounded-2xl glass border border-glass-border overflow-hidden flex flex-col justify-between hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
            >
              {/* Card Header & Body */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[9px] font-extrabold tracking-widest text-primary uppercase bg-primary/10 border border-primary/20 px-2 py-1 rounded">
                    {p.category}
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-primary transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={p.links.demo}
                      className="text-text-muted hover:text-primary transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <h3 className="text-base font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-[11px] font-medium text-text-muted mt-0.5">{p.subtitle}</p>

                <p className="text-xs text-text-muted mt-4 leading-relaxed line-clamp-3">
                  {p.description}
                </p>

                {/* Features list */}
                <div className="mt-4 space-y-1">
                  {p.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-1.5 text-[10px] text-text-muted">
                      <Check size={11} className="text-primary shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                  {p.features.length > 3 && (
                    <div className="text-[9px] text-primary font-bold pl-4">+{p.features.length - 3} more features</div>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-glass-border/30 bg-background/20 flex flex-col gap-4">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1">
                  {p.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] font-mono text-text-muted bg-background/50 border border-glass-border px-1.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Case Study Trigger */}
                <button
                  onClick={() => setSelectedProject(p)}
                  className="w-full py-2 bg-background/40 hover:bg-primary border border-glass-border hover:border-primary text-text-muted hover:text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <FileText size={13} />
                  <span>View Case Study</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl glass-premium border border-glass-border shadow-2xl p-6 sm:p-8 flex flex-col gap-6 text-left z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg border border-glass-border hover:bg-glass hover:text-primary transition-all cursor-pointer"
                aria-label="Close Case Study"
              >
                <X size={16} />
              </button>

              {/* Title Header */}
              <div>
                <span className="text-[9px] font-extrabold tracking-widest text-primary uppercase bg-primary/10 border border-primary/20 px-2.5 py-1 rounded">
                  Case Study
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold mt-3 tracking-tight text-foreground">
                  {selectedProject.title}
                </h2>
                <p className="text-xs text-text-muted mt-0.5">{selectedProject.subtitle}</p>
              </div>

              {/* Problem & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-glass-border/40 pb-6">
                <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider mb-2">
                    <ShieldAlert size={14} />
                    <span>The Problem</span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {selectedProject.caseStudy.problem}
                  </p>
                </div>

                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-2">
                    <Award size={14} />
                    <span>The Solution</span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {selectedProject.caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Architecture & DB Design Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-glass-border/40 pb-6">
                {/* Visual Architecture flowchart */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4 flex items-center gap-1.5">
                    <Cpu size={14} className="text-primary" />
                    <span>System Architecture</span>
                  </h3>
                  <div className="space-y-2 font-mono text-[10px] text-text-muted">
                    {selectedProject.caseStudy.architecture.map((node, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <div className="w-full bg-background/50 border border-glass-border p-2.5 rounded-lg text-center flex items-center justify-center gap-2 hover:border-primary/20 transition-colors">
                          <span className="text-primary font-bold">{idx + 1}.</span>
                          <span>{node}</span>
                        </div>
                        {idx < selectedProject.caseStudy.architecture.length - 1 && (
                          <div className="h-4 w-[1px] bg-primary/40 my-1 animate-pulse" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Database schema layout */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4 flex items-center gap-1.5">
                    <Database size={14} className="text-primary" />
                    <span>Database Schema Design</span>
                  </h3>
                  <div className="space-y-4 max-h-[300px] overflow-y-auto terminal-scrollbar pr-2">
                    {selectedProject.caseStudy.schema.map((sch, sIdx) => (
                      <div key={sIdx} className="rounded-xl border border-glass-border/60 bg-background/30 overflow-hidden text-[10px] font-mono">
                        <div className="bg-background/80 px-3 py-1.5 border-b border-glass-border flex justify-between">
                          <span className="font-bold text-primary">table: {sch.table}</span>
                          <span className="text-[8px] text-text-muted uppercase">SQL Model</span>
                        </div>
                        <div className="p-2 space-y-1">
                          {sch.columns.map((col, cIdx) => (
                            <div key={cIdx} className="flex justify-between px-1.5 py-0.5 rounded hover:bg-glass">
                              <span className={col.key ? 'text-blue-400 font-bold' : 'text-foreground'}>
                                {col.name} {col.key && '(PK)'}
                              </span>
                              <span className="text-text-muted/70">{col.type}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Challenges & Learnings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-2">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">Technical Challenges</h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {selectedProject.caseStudy.challenges}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">Key Learnings</h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {selectedProject.caseStudy.learnings}
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-glass-border/40">
                <a
                  href={selectedProject.links.demo}
                  className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-lg shadow-primary/20 cursor-pointer"
                >
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                </a>

                <a
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-background/50 hover:bg-glass border border-glass-border hover:border-primary/20 text-foreground rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Github size={14} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
