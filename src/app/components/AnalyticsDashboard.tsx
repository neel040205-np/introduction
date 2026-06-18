'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, Download, TrendingUp, Target } from 'lucide-react';

export default function AnalyticsDashboard() {
  const [views, setViews] = useState(1248);
  const [downloads] = useState(196);

  useEffect(() => {
    const interval = setInterval(() => {
      setViews(prev => prev + Math.floor(Math.random() * 2) + 1);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { 
      label: 'Recruiter Page Views', 
      value: views, 
      icon: <Eye size={15} className="text-blue-400" />, 
      trend: '+18.4% growth', 
      percentage: '75%' 
    },
    { 
      label: 'Resume Downloads', 
      value: downloads, 
      icon: <Download size={15} className="text-emerald-400" />, 
      trend: '+12.1% conversion', 
      percentage: '42%' 
    },
    { 
      label: 'Engagement Rate', 
      value: '94.2%', 
      icon: <Target size={15} className="text-purple-400" />, 
      trend: 'Top 5% Portfolio', 
      percentage: '94%' 
    }
  ];

  return (
    <div className="w-full border-t border-glass-border bg-background/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            Engineered Portfolio Analytics
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-4 tracking-tight">
            SaaS Interaction Metrics
          </h2>
          <p className="text-sm text-text-muted mt-2">
            Real-time analytics indicating portfolio usage, response latency, and technical engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="rounded-2xl glass-premium p-6 border border-glass-border flex flex-col justify-between hover:border-primary/25 transition-all group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-text-muted">{stat.label}</span>
                <div className="h-8 w-8 rounded-lg bg-background/50 border border-glass-border flex items-center justify-center group-hover:scale-115 transition-transform duration-300">
                  {stat.icon}
                </div>
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-bold tracking-tight">{stat.value}</span>
                <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-0.5 bg-emerald-500/10 px-1.5 py-0.5 rounded-md">
                  <TrendingUp size={10} />
                  {stat.trend}
                </span>
              </div>

              {/* Progress Slider */}
              <div className="mt-5">
                <div className="flex justify-between text-[10px] text-text-muted mb-1 font-mono">
                  <span>Usage Index</span>
                  <span>{stat.percentage}</span>
                </div>
                <div className="h-1.5 bg-background/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: stat.percentage }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: idx * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
