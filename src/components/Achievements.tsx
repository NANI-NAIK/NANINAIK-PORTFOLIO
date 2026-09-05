import React, { useState } from 'react';
import { Award, Trophy, Medal, Calendar, Building, ChevronRight, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const [filter, setFilter] = useState<'all' | '1st' | 'innovation'>('all');

  const filteredAchievements = ACHIEVEMENTS.filter((item) => {
    if (filter === '1st') return item.rank === '1st Prize';
    if (filter === 'innovation') return item.rank === 'Best Innovation';
    return true;
  });

  return (
    <section id="achievements" className="py-20 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-widest w-fit">
              <Trophy className="w-3.5 h-3.5" />
              <span>Honors & Recognition</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Awards & Competitive Achievements
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Recognized with top honors across national research symposiums, government bootcamps, and technical innovation expos.
            </p>
          </div>

          {/* Quick Filter tabs in Sleek Interface pill style */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-full self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-sky-600 text-white font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/70'
              }`}
            >
              All Wins ({ACHIEVEMENTS.length})
            </button>
            <button
              onClick={() => setFilter('1st')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer ${
                filter === '1st'
                  ? 'bg-sky-600 text-white font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/70'
              }`}
            >
              1st Prizes Only
            </button>
            <button
              onClick={() => setFilter('innovation')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer ${
                filter === 'innovation'
                  ? 'bg-sky-600 text-white font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/70'
              }`}
            >
              National IP Yatra
            </button>
          </div>
        </div>

        {/* Highlight Banner: National IP Yatra & AICTE IDE Bootcamp */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Best Innovation Award card */}
          <div className="relative bg-white border border-slate-200 hover:border-amber-400 transition-all rounded-2xl p-6 sm:p-7 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center">
                <Trophy className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-50 text-amber-800 border border-amber-300 uppercase tracking-wider">
                ★ BEST INNOVATION
              </span>
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="text-xl font-bold text-slate-950 tracking-tight">
                Best Innovation Project Award – National IP Yatra
              </h3>
              <p className="text-xs text-amber-700 font-mono flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5" />
                KL University & Ministry of MSME / IP Cell
              </p>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                Conferred the flagship innovation trophy at the two-day National Intellectual Property Yatra summit on 24th & 25th October 2025 for novel mechanical ingenuity.
              </p>
            </div>
          </div>

          {/* AICTE IDE Bootcamp 2nd Prize */}
          <div className="relative bg-white border border-slate-200 hover:border-sky-500 transition-all rounded-2xl p-6 sm:p-7 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center">
                <Medal className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-50 text-sky-800 border border-sky-300 uppercase tracking-wider">
                ★ 2ND PRIZE NATIONWIDE
              </span>
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="text-xl font-bold text-slate-950 tracking-tight">
                AICTE & MoE Innovation, Design & Entrepreneurship (IDE) Bootcamp
              </h3>
              <p className="text-xs text-sky-700 font-mono flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5" />
                All India Council for Technical Education (April 2026)
              </p>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                Selected and awarded 2nd prize among top collegiate innovators nationwide at Jawaharlal Nehru New College of Engineering, Shivamogga, validated by central mentors.
              </p>
            </div>
          </div>
        </div>

        {/* Full Awards Grid with Sleek Interface card styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredAchievements.map((ach) => (
            <div
              key={ach.id}
              id={`achievement-${ach.id}`}
              className="bg-white border border-slate-200 hover:border-sky-500/80 rounded-2xl p-5 flex flex-col justify-between transition-all hover:shadow-md space-y-4 shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-0.5 text-xs font-mono font-bold rounded-full border uppercase tracking-wider ${
                    ach.rank === '1st Prize'
                      ? 'bg-amber-50 text-amber-800 border-amber-300'
                      : ach.rank === 'Best Innovation'
                      ? 'bg-amber-100 text-amber-900 border-amber-400'
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    {ach.rank}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-sky-600" />
                    {ach.date}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-950 group-hover:text-sky-600">
                    {ach.title}
                  </h4>
                  <p className="text-xs text-sky-600 font-mono mt-0.5">
                    {ach.event}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {ach.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                <Building className="w-3 h-3 text-slate-400" />
                <span className="truncate">{ach.organizer}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
