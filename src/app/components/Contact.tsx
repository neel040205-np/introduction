'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      setErrorMessage('Please fill in all the required fields.');
      return;
    }

    if (!validateEmail(form.email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Server SMTP request failed');
      }
      
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      
      confetti({
        particleCount: 140,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#3B82F6', '#60A5FA', '#10B981']
      });

    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage('Failed to deliver message. Please contact neelpatelnp.0402@gmail.com directly.');
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold mt-4 tracking-tight text-foreground">
            Initiate Contact
          </h2>
          <p className="text-sm text-text-muted mt-2">
            Interested in hiring or discussing a project? Send an inquiry directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column (Details) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-6">
              <div className="rounded-2xl glass p-6 border border-glass-border flex gap-4 hover:border-primary/20 transition-all">
                <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground">Email Address</h4>
                  <a href="mailto:neelpatelnp.0402@gmail.com" className="text-xs text-text-muted mt-1 hover:text-primary transition-colors block">
                    neelpatelnp.0402@gmail.com
                  </a>
                </div>
              </div>

              <div className="rounded-2xl glass p-6 border border-glass-border flex gap-4 hover:border-primary/20 transition-all">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground">Phone / Call</h4>
                  <a href="tel:+917859941319" className="text-xs text-text-muted mt-1 hover:text-primary transition-colors block">
                    +91 78599 41319
                  </a>
                </div>
              </div>

              <div className="rounded-2xl glass p-6 border border-glass-border flex gap-4 hover:border-primary/20 transition-all">
                <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground">Location</h4>
                  <span className="text-xs text-text-muted mt-1 block">
                    Nadiad, Gujarat (Open to Remote / WFH / Relocation)
                  </span>
                </div>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="flex gap-4 items-center">
              <a
                href="https://github.com/neel040205-np"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-xl bg-background/50 border border-glass-border hover:border-primary/45 flex items-center justify-center text-text-muted hover:text-primary transition-colors cursor-pointer"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/neel-patel-182643415/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-xl bg-background/50 border border-glass-border hover:border-primary/45 flex items-center justify-center text-text-muted hover:text-primary transition-colors cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-premium p-6 sm:p-8 border border-glass-border shadow-2xl relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-wider text-text-muted mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl text-xs bg-background/50 border border-glass-border focus:border-primary/50 outline-none text-foreground placeholder-text-muted/60"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-wider text-text-muted mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl text-xs bg-background/50 border border-glass-border focus:border-primary/50 outline-none text-foreground placeholder-text-muted/60"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-wider text-text-muted mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your project, hiring plans, or questions..."
                    className="w-full px-4 py-3 rounded-xl text-xs bg-background/50 border border-glass-border focus:border-primary/50 outline-none text-foreground placeholder-text-muted/60 resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-xs text-red-400 bg-red-500/10 border border-red-500/20 p-3 rounded-xl">
                    <AlertCircle size={15} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {status === 'success' && (
                  <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl">
                    <CheckCircle size={15} />
                    <span>Inquiry sent successfully! Thank you for reaching out.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 bg-primary hover:bg-primary-hover disabled:bg-primary/50 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-primary/25"
                >
                  {status === 'sending' ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send size={13} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
