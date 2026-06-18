'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, FileText, X, Briefcase, GraduationCap, Mail, Phone, MapPin, Download } from 'lucide-react';

export default function ResumeView() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const ResumeContent = () => (
    <div className="bg-white text-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200 font-sans text-left max-w-3xl mx-auto relative select-text">
      {/* Header */}
      <div className="border-b-2 border-primary/20 pb-4 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">Neel Patel</h2>
        <p className="text-xs text-primary font-bold uppercase tracking-wider mt-1">Full Stack Developer | B.Tech Computer Engineering Student</p>
        
        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-[10px] sm:text-xs text-gray-600 font-mono">
          <span className="flex items-center gap-1"><Mail size={12} className="text-primary" /> neelpatelnp.0402@gmail.com</span>
          <span className="flex items-center gap-1"><Phone size={12} className="text-primary" /> +91 78599 41319</span>
          <span className="flex items-center gap-1"><MapPin size={12} className="text-primary" /> Nadiad, Gujarat, India</span>
        </div>
      </div>

      {/* Education */}
      <div className="mb-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-gray-100 pb-1 mb-3 flex items-center gap-1.5">
          <GraduationCap size={14} />
          <span>Education</span>
        </h3>
        <div>
          <div className="flex justify-between items-start text-xs sm:text-sm font-bold text-gray-900">
            <span>B.Tech in Computer Engineering</span>
            <span className="text-gray-500 font-normal font-mono text-[10px]">2022 - 2026</span>
          </div>
          <p className="text-xs text-gray-700 mt-0.5">Dharmsinh Desai University (DDU), Nadiad</p>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-gray-100 pb-1 mb-3 flex items-center gap-1.5">
          <Briefcase size={14} />
          <span>Core Competencies</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-xs text-gray-700 leading-normal">
          <div><strong className="text-gray-900 font-bold">Languages:</strong> TypeScript, JavaScript, Python, SQL, C++, C</div>
          <div><strong className="text-gray-900 font-bold">Frontend:</strong> React.js, Next.js 15, Tailwind CSS, Ant Design</div>
          <div><strong className="text-gray-900 font-bold">Backend:</strong> Node.js, Express.js, REST APIs, JWT Auth</div>
          <div><strong className="text-gray-900 font-bold">Databases:</strong> MongoDB, PostgreSQL, Supabase</div>
        </div>
      </div>

      {/* Projects */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-gray-100 pb-1 mb-3 flex items-center gap-1.5">
          <FileText size={14} />
          <span>Featured Projects</span>
        </h3>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-start text-xs sm:text-sm font-bold text-gray-900">
              <span>DocElex — Student Document System</span>
              <span className="text-gray-500 font-normal font-mono text-[10px]">MERN Stack</span>
            </div>
            <p className="text-[11px] text-gray-600 mt-0.5">Secure academic repository featuring AES encryption, role-based JWT guards, audit logs, and dashboard exports.</p>
          </div>

          <div>
            <div className="flex justify-between items-start text-xs sm:text-sm font-bold text-gray-900">
              <span>OHRM — Online HR Management System</span>
              <span className="text-gray-500 font-normal font-mono text-[10px]">MERN Stack</span>
            </div>
            <p className="text-[11px] text-gray-600 mt-0.5">HR coordinating system processing attendance patterns, calculating net salary components, and sending payslip PDF invoices.</p>
          </div>

          <div>
            <div className="flex justify-between items-start text-xs sm:text-sm font-bold text-gray-900">
              <span>Dental Clinic CRM</span>
              <span className="text-gray-500 font-normal font-mono text-[10px]">Next.js / Supabase</span>
            </div>
            <p className="text-[11px] text-gray-600 mt-0.5">High-performance clinic CRM with Supabase row locks, QR-code ticket entries, and Twilio WhatsApp alert webhooks.</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="resume" className="py-24 relative bg-background/40 border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              Credentials
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-4 tracking-tight text-foreground">
              Professional Resume
            </h2>
            <p className="text-sm text-text-muted mt-2">
              Review my qualifications, skills inventory, and academic projects in an interactive format.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              download="Neel_Patel_Resume.pdf"
              className="px-4 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-lg shadow-primary/20 cursor-pointer"
            >
              <Download size={14} />
              <span>Download Resume PDF</span>
            </a>

            <button
              onClick={() => setIsFullscreen(true)}
              className="px-4 py-2.5 bg-background/50 hover:bg-glass border border-glass-border hover:border-primary/20 text-foreground rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Eye size={14} />
              <span>Interactive Preview</span>
            </button>
          </div>
        </div>

        {/* Embedded sheet display */}
        <div className="bg-background/20 rounded-3xl border border-glass-border p-6 sm:p-10">
          <ResumeContent />
        </div>

      </div>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {isFullscreen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFullscreen(false)}
              className="absolute inset-0 bg-background/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto z-10"
            >
              <button
                onClick={() => setIsFullscreen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-900 sm:text-white border border-gray-200 sm:border-white/15 transition-all cursor-pointer z-20"
                aria-label="Close Preview"
              >
                <X size={15} />
              </button>
              <div className="p-1">
                <ResumeContent />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
