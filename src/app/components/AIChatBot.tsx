'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

interface Message {
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

const KNOWLEDGE_BASE = [
  {
    keywords: ['skills', 'tech', 'stack', 'languages', 'frameworks', 'know'],
    answer: "Neel is highly proficient in full-stack web engineering. Languages: TypeScript, JavaScript, Python, SQL, C++, C. Frontend: React.js, Next.js 15, Tailwind CSS, Ant Design. Backend: Node.js, Express.js, REST APIs, JWT. Databases: MongoDB, PostgreSQL, Supabase. AI/ML: NLP, Generative AI integration, Prompt Engineering."
  },
  {
    keywords: ['project', 'docelex', 'ohrm', 'dental', 'build', 'create'],
    answer: "Neel has engineered three major systems: 1. DocElex (Academic Vault with AES encryption and audit logs), 2. OHRM (HR platform with automated payroll, attendance, and PDF invoices), 3. Dental Clinic CRM (Serverless check-in queuing with Supabase and Twilio WhatsApp notifications)."
  },
  {
    keywords: ['education', 'college', 'university', 'study', 'degree', 'gpa', 'btech'],
    answer: "Neel is pursuing a B.Tech in Computer Engineering at Dharmsinh Desai University (DDU) in Nadiad. He is in his final year and maintains solid academic standing in core computer science, software engineering, and database systems."
  },
  {
    keywords: ['contact', 'email', 'phone', 'call', 'linkedin', 'github', 'reach'],
    answer: "You can reach Neel via Email at neelpatelnp.0402@gmail.com, call him at +91 78599 41319, or check out his profile on LinkedIn (linkedin.com/in/neel-patel-182643415) and GitHub (github.com/neel040205-np)."
  },
  {
    keywords: ['job', 'hire', 'relocate', 'open', 'work', 'location', 'joining', 'intern'],
    answer: "Yes, Neel is actively seeking full-time Software Developer / Full Stack opportunities. He is based in Nadiad, Gujarat and is fully open to Remote, WFH, or relocation structures, available to join immediately."
  }
];

const DEFAULT_ANSWER = "I'm Neel's AI Assistant. I can tell you about his B.Tech, core skills (TypeScript, React, Node, MongoDB, Supabase), featured projects (DocElex, OHRM), or direct contact information. Try asking: 'What are his skills?' or 'Is he open to relocation?'";

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial welcome message
    setMessages([
      {
        sender: 'bot',
        text: "Hi there! I am Neel's AI Agent. Ask me anything about Neel's technical skills, academic projects, or availability!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const findBestResponse = (query: string): string => {
    const cleanQuery = query.toLowerCase();
    
    for (const item of KNOWLEDGE_BASE) {
      if (item.keywords.some(kw => cleanQuery.includes(kw))) {
        return item.answer;
      }
    }
    return DEFAULT_ANSWER;
  };

  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const responseText = findBestResponse(textToSend);
      const botMsg: Message = {
        sender: 'bot',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const suggestions = [
    'What are Neel\'s skills?',
    'Tell me about DocElex',
    'Open to relocation?',
    'Contact information'
  ];

  return (
    <div className="fixed bottom-6 left-6 z-45 flex flex-col items-start font-sans">
      {/* Expandable Chat Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="mb-4 w-[340px] sm:w-[380px] h-[480px] rounded-3xl glass-premium shadow-2xl border border-glass-border overflow-hidden flex flex-col"
          >
            {/* Chat Header */}
            <div className="bg-background/80 border-b border-glass-border px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="text-xs font-bold tracking-tight text-foreground">Neel&apos;s Portfolio Agent</h3>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] text-text-muted font-semibold uppercase tracking-wider">Online & Ready</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg border border-glass-border hover:bg-glass hover:text-primary transition-colors cursor-pointer"
              >
                <X size={15} />
              </button>
            </div>

            {/* Chat Log */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 terminal-scrollbar bg-background/10">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
                >
                  <div className={`h-7 w-7 rounded-lg flex items-center justify-center shrink-0 border ${
                    msg.sender === 'user' 
                      ? 'bg-primary/10 border-primary/20 text-primary' 
                      : 'bg-background/80 border-glass-border text-foreground'
                  }`}>
                    {msg.sender === 'user' ? <User size={13} /> : <Bot size={13} />}
                  </div>
                  <div className={`rounded-2xl px-3.5 py-2 text-xs leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-primary text-white font-medium rounded-tr-none' 
                      : 'bg-background/50 border border-glass-border text-foreground rounded-tl-none'
                  }`}>
                    <p>{msg.text}</p>
                    <span className="block text-[8px] text-text-muted/60 text-right mt-1 font-mono">{msg.timestamp}</span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3 max-w-[80%] mr-auto">
                  <div className="h-7 w-7 rounded-lg bg-background/80 border border-glass-border flex items-center justify-center text-foreground">
                    <Bot size={13} />
                  </div>
                  <div className="rounded-2xl rounded-tl-none px-3.5 py-2.5 bg-background/50 border border-glass-border flex gap-1 items-center">
                    <span className="h-1.5 w-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 bg-primary rounded-full animate-bounce" />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Chips Suggestion */}
            <div className="px-4 py-2 flex flex-wrap gap-1.5 border-t border-glass-border/30 bg-background/10">
              {suggestions.map((sug, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => handleSend(sug)}
                  className="px-2.5 py-1 rounded-full border border-glass-border hover:border-primary/40 hover:bg-glass text-[9px] text-text-muted hover:text-foreground transition-all cursor-pointer font-medium"
                >
                  {sug}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-4 bg-background/40 border-t border-glass-border flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, projects, contact..."
                className="flex-1 px-4 py-2 rounded-xl text-xs bg-background/50 border border-glass-border focus:border-primary/50 outline-none text-foreground placeholder-text-muted/60"
              />
              <button
                type="submit"
                className="p-2 bg-primary hover:bg-primary-hover text-white rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center cursor-pointer"
                aria-label="Send message"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-background border border-glass-border hover:border-primary/40 text-foreground shadow-xl hover:shadow-primary/5 hover:scale-105 active:scale-95 transition-all group cursor-pointer"
      >
        <div className="h-5 w-5 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <MessageSquare size={12} className="group-hover:rotate-12 transition-transform" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-text-muted group-hover:text-foreground transition-colors">
          {isOpen ? 'Close Agent' : 'Ask Agent'}
        </span>
      </motion.button>
    </div>
  );
}
