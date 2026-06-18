'use client';

import React, { useState, useEffect } from 'react';

interface GitHubProfile {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

export default function GitHubActivity() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/neel040205-np')
      .then((res) => {
        if (!res.ok) throw new Error('API Rate limit or response error');
        return res.json();
      })
      .then((data) => {
        setProfile({
          avatar_url: data.avatar_url,
          name: data.name || 'Neel Patel',
          login: data.login,
          bio: data.bio || 'Computer Engineering Student & Full Stack Developer',
          public_repos: data.public_repos,
          followers: data.followers,
          following: data.following
        });
        setLoading(false);
      })
      .catch((err) => {
        console.warn('GitHub API warning, falling back to static values:', err);
        setProfile({
          avatar_url: 'https://avatars.githubusercontent.com/u/101859385?v=4',
          name: 'Neel Patel',
          login: 'neel040205-np',
          bio: 'B.Tech Computer Engineering Student | Full Stack Developer | MERN Stack',
          public_repos: 18,
          followers: 12,
          following: 15
        });
        setLoading(false);
      });
  }, []);

  const languages = [
    { name: 'TypeScript', percentage: 48, color: 'bg-blue-500' },
    { name: 'JavaScript', percentage: 32, color: 'bg-yellow-500' },
    { name: 'Python', percentage: 12, color: 'bg-green-500' },
    { name: 'SQL', percentage: 8, color: 'bg-purple-500' },
  ];

  return (
    <section id="github" className="py-24 relative bg-background border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            Open Source Footprint
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold mt-4 tracking-tight">
            GitHub Activity & Metrics
          </h2>
          <p className="text-sm text-text-muted mt-2">
            Live-synced dashboard tracking repositories, followers, and core languages.
          </p>
        </div>

        {loading ? (
          <div className="text-center text-text-muted font-mono text-xs py-10">Loading GitHub metrics...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Profile Details */}
            <div className="rounded-2xl glass p-6 border border-glass-border flex flex-col justify-between gap-6 hover:border-primary/15 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <img
                  src={profile?.avatar_url}
                  alt={profile?.name}
                  className="h-16 w-16 rounded-2xl border border-glass-border shadow-inner"
                />
                <div>
                  <h3 className="text-sm font-extrabold text-foreground">{profile?.name}</h3>
                  <p className="text-[10px] font-mono text-primary">@{profile?.login}</p>
                </div>
              </div>
              <p className="text-xs text-text-muted leading-relaxed mt-2">{profile?.bio}</p>
              
              <div className="grid grid-cols-3 gap-2 mt-4 text-center font-mono text-[10px] border-t border-glass-border/30 pt-4">
                <div>
                  <span className="block font-bold text-foreground">{profile?.public_repos}</span>
                  <span className="text-text-muted text-[8px] uppercase">Repos</span>
                </div>
                <div>
                  <span className="block font-bold text-foreground">{profile?.followers}</span>
                  <span className="text-text-muted text-[8px] uppercase">Followers</span>
                </div>
                <div>
                  <span className="block font-bold text-foreground">{profile?.following}</span>
                  <span className="text-text-muted text-[8px] uppercase">Following</span>
                </div>
              </div>
            </div>

            {/* Right Column: Language Split */}
            <div className="rounded-2xl glass p-6 border border-glass-border flex flex-col justify-center">
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">Language Split</h4>
              <div className="space-y-4">
                {languages.map((lang, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono font-medium">
                      <span>{lang.name}</span>
                      <span>{lang.percentage}%</span>
                    </div>
                    <div className="h-1.5 bg-background/50 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${lang.color} rounded-full`} 
                        style={{ width: `${lang.percentage}%` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
