'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Cpu, Database, Server } from 'lucide-react';

export default function About() {
  const stats = [
    {
      title: '4+ Full Stack Projects',
      desc: 'DocElex, OHRM, Dental CRM, and custom micro-automation applications.',
      icon: <Code2 className="text-blue-400" size={18} />
    },
    {
      title: 'MERN Stack Developer',
      desc: 'Expertise in building scalable systems with React, Node.js, Express, and MongoDB.',
      icon: <Server className="text-purple-400" size={18} />
    },
    {
      title: 'AI & NLP Enthusiast',
      desc: 'Integrating GenAI and building intelligent agents directly within SaaS frameworks.',
      icon: <Cpu className="text-emerald-400" size={18} />
    },
    {
      title: 'Database & Cloud',
      desc: 'Designing schema models in MongoDB and PostgreSQL, deploying securely with Supabase & Vercel.',
      icon: <Database className="text-amber-400" size={18} />
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-background/40 border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Bio) */}
          <div className="lg:col-span-6 text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              About Me
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-4 tracking-tight">
              Engineering Modern SaaS & AI Systems
            </h2>
            
            <p className="text-sm text-text-muted mt-6 leading-relaxed">
              I am a final-year <strong>Computer Engineering</strong> student at <strong>Dharmsinh Desai University</strong>. I specialize in building complete, production-ready web applications that resolve complex business problems, streamline administration, and deliver seamless user experiences.
            </p>

            <p className="text-sm text-text-muted mt-4 leading-relaxed">
              My core passion lies in the intersection of full-stack engineering, automation pipelines, and intelligent AI models. I look at code not just as instructions, but as a system designed to scale, load fast, and remain highly secure.
            </p>

            <div className="mt-8 flex items-center gap-3 bg-primary/5 border border-primary/20 p-4 rounded-2xl max-w-lg">
              <GraduationCap className="text-primary shrink-0" size={24} />
              <div className="text-xs">
                <p className="font-bold text-foreground">B.Tech in Computer Engineering</p>
                <p className="text-text-muted mt-0.5">Dharmsinh Desai University (DDU), Nadiad</p>
              </div>
            </div>
          </div>

          {/* Right Column (Stats Grid) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="p-5 rounded-2xl glass-premium border border-glass-border hover:border-primary/20 transition-all flex flex-col justify-between hover:-translate-y-1 group"
              >
                <div className="h-10 w-10 rounded-xl bg-background/50 border border-glass-border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {stat.title}
                  </h3>
                  <p className="text-xs text-text-muted mt-1.5 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
