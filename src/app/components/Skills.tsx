'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Database, Wrench, Brain } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="text-blue-400" size={18} />,
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'SQL', level: 85 },
        { name: 'C++', level: 75 },
        { name: 'C', level: 70 },
      ]
    },
    {
      title: 'Frontend Development',
      icon: <Layout className="text-purple-400" size={18} />,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js 15', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Ant Design', level: 80 },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server className="text-emerald-400" size={18} />,
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 92 },
        { name: 'JWT Authentication', level: 90 },
      ]
    },
    {
      title: 'Databases',
      icon: <Database className="text-amber-400" size={18} />,
      skills: [
        { name: 'MongoDB', level: 88 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'Supabase', level: 85 },
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="text-red-400" size={18} />,
      skills: [
        { name: 'NLP', level: 75 },
        { name: 'Generative AI', level: 80 },
        { name: 'Prompt Engineering', level: 90 },
        { name: 'ML Fundamentals', level: 70 },
      ]
    },
    {
      title: 'Cloud & Tools',
      icon: <Wrench className="text-pink-400" size={18} />,
      skills: [
        { name: 'Git & GitHub', level: 88 },
        { name: 'Postman', level: 90 },
        { name: 'Cloudinary', level: 85 },
        { name: 'Vercel', level: 90 },
        { name: 'Linux', level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-background/20 border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            Skills Inventory
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold mt-4 tracking-tight">
            Technical Stack & Expertise
          </h2>
          <p className="text-sm text-text-muted mt-2">
            Structured display of my proficiency in modern full-stack development, database schema modeling, and AI modules.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="p-6 rounded-2xl glass border border-glass-border flex flex-col justify-between hover:border-primary/20 transition-all duration-300 group"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-glass-border/40 mb-4">
                  <div className="h-9 w-9 rounded-lg bg-background/50 border border-glass-border flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                    {cat.icon}
                  </div>
                  <h3 className="text-sm font-bold tracking-tight text-foreground">{cat.title}</h3>
                </div>

                {/* Skill Bars */}
                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-foreground">{skill.name}</span>
                        <span className="text-text-muted font-mono">{skill.level}%</span>
                      </div>
                      {/* Progress Bar */}
                      <div className="h-1 bg-background/60 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.0, ease: 'easeOut', delay: sIdx * 0.05 }}
                          className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
