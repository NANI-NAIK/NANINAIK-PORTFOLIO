import React from 'react';
import { Trophy, Award, Medal, Calendar, Sparkles, Star, CheckCircle2, ShieldAlert } from 'lucide-react';
import { ACHIEVEMENTS } from '../../data/portfolioData';

interface ResumeAchievementsProps {
  theme?: 'dark' | 'light';
}

export const ResumeAchievements: React.FC<ResumeAchievementsProps> = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  const majorSpotlights = [
    {
      title: 'Best Innovation Project Award',
      event: 'National IP Yatra (Two-Day National Program)',
      organizer: 'KL University & Ministry of MSME / IP Cell',
      date: '24th & 25th October 2025',
      badge: 'Gold Trophy 🏆',
      summary: 'Awarded top honors across national innovators for novel mechanical prototyping & patent strategy.',
      accent: 'border-amber-500/60 bg-gradient-to-r from-amber-500/10 via-slate-900/40 to-slate-900',
      badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    },
    {
      title: '2nd Prize – AICTE IDE Bootcamp',
      event: 'National Innovation, Design & Entrepreneurship Bootcamp',
      organizer: 'AICTE & Ministry of Education, JNNCE Shivamogga',
      date: '6th – 10th April 2026',
      badge: 'National 2nd 🥈',
      summary: 'Clinched 2nd place nationwide among collegiate innovators for validated product ideation & design thinking.',
      accent: 'border-cyan-500/60 bg-gradient-to-r from-cyan-500/10 via-slate-900/40 to-slate-900',
      badgeClass: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    },
    {
      title: '2nd Prize – RISE Fusion 2026',
      event: 'Multi Project Expo Event, National Level Fest',
      organizer: 'RISE Krishna Sai Prakasam Group of Institutions',
      date: '20th February 2026',
      badge: 'Silver Medal 🥈',
      summary: 'Demonstrated working physical engineering prototype evaluated by industry delegates.',
      accent: 'border-blue-500/60 bg-gradient-to-r from-blue-500/10 via-slate-900/40 to-slate-900',
      badgeClass: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    },
    {
      title: 'Multiple 1st Prizes in National Events',
      event: 'SAMKALP Fest, Mechmantra COLORIDO & NEC IIC Idea Contests',
      organizer: 'SAMKALP, Mechmantra & Institution’s Innovation Council',
      date: '2025 – 2026',
      badge: 'Triple 1st 🥇',
      summary: '1st Prize for Technical Paper Presentation, 1st Prize in Mechanical Symposium, and 1st Prize in Innovation Idea Contests.',
      accent: 'border-emerald-500/60 bg-gradient-to-r from-emerald-500/10 via-slate-900/40 to-slate-900',
      badgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    },
  ];

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between border-b pb-2 border-slate-800">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-amber-400" />
          <h3 className={`text-sm font-bold uppercase tracking-wider font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Major Honors & Competitive Distinctions
          </h3>
        </div>
        <span className="text-[11px] font-mono text-amber-400">
          7+ State & National Level Wins
        </span>
      </div>

      {/* Prominent Spotlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {majorSpotlights.map((item, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl border relative overflow-hidden transition-all duration-300 group ${item.accent}`}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold border ${item.badgeClass}`}>
                {item.badge}
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                {item.date}
              </span>
            </div>

            <h4 className="text-xs font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
              {item.title}
            </h4>

            <p className="text-[11px] font-mono text-slate-400 mt-0.5">
              {item.organizer}
            </p>

            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              {item.summary}
            </p>
          </div>
        ))}
      </div>

      {/* Full Timeline of All Achievements */}
      <div className="mt-4 pt-3 border-t border-slate-800/80">
        <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
          Complete Chronological Honors Record:
        </span>

        <div className="relative pl-5 space-y-3 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
          {ACHIEVEMENTS.map((ach) => (
            <div key={ach.id} className="relative group text-xs">
              <div className="absolute -left-5 top-1.5 w-3 h-3 rounded-full bg-slate-950 border border-cyan-400" />
              <div className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-200">{ach.title}</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-amber-300 border border-slate-700">
                      {ach.rank}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">{ach.date}</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  {ach.event} • <span className="text-slate-300">{ach.organizer}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
