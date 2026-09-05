import React from 'react';
import { Trophy, Rocket, GraduationCap, Users, FileCheck, CheckCircle2 } from 'lucide-react';

interface ResumeStatsProps {
  theme?: 'dark' | 'light';
}

export const ResumeStats: React.FC<ResumeStatsProps> = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  const stats = [
    {
      id: 'awards',
      label: 'Awards & Honors',
      value: '7+',
      sub: 'Best Innovation & 1st Prizes',
      icon: Trophy,
      accent: 'text-amber-400',
      border: 'hover:border-amber-500/50',
      badge: 'National Winners',
    },
    {
      id: 'projects',
      label: 'Key Projects',
      value: '8+',
      sub: 'UAVs, 3D Prototyping & Nanotech',
      icon: Rocket,
      accent: 'text-cyan-400',
      border: 'hover:border-cyan-500/50',
      badge: 'Patent Ongoing',
    },
    {
      id: 'certs',
      label: 'Certifications & Programs',
      value: '12+',
      sub: 'NPTEL, CITD, AICTE & JNTUK',
      icon: FileCheck,
      accent: 'text-emerald-400',
      border: 'hover:border-emerald-500/50',
      badge: 'Govt Recognized',
    },
    {
      id: 'leadership',
      label: 'Leadership Roles',
      value: '4+',
      sub: 'IIC, Drone Club & Startup Team',
      icon: Users,
      accent: 'text-purple-400',
      border: 'hover:border-purple-500/50',
      badge: 'Lead Coordinator',
    },
    {
      id: 'cgpa',
      label: 'Academic Performance',
      value: '8.17',
      sub: 'B.Tech Mechanical (JNTUK)',
      icon: GraduationCap,
      accent: 'text-blue-400',
      border: 'hover:border-blue-500/50',
      badge: 'Top 5% Distinction',
    },
  ];

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <h3 className={`text-xs font-mono font-bold uppercase tracking-wider ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            Professional Statistics & Impact Telemetry
          </h3>
        </div>
        <span className={`text-[11px] font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
          Verified Credentials • 2023–2027
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.id}
              className={`p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between group ${
                isDark 
                  ? `bg-slate-900/70 border-slate-800 ${stat.border} hover:bg-slate-800/80` 
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-slate-100'} ${stat.accent}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50">
                  {stat.badge}
                </span>
              </div>

              <div>
                <div className={`text-2xl font-black tracking-tight font-mono ${isDark ? 'text-white' : 'text-slate-900'} group-hover:scale-105 transition-transform`}>
                  {stat.value}
                </div>
                <div className={`text-xs font-bold mt-0.5 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                  {stat.label}
                </div>
                <div className={`text-[10px] font-mono mt-0.5 leading-tight ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {stat.sub}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
