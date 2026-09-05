import React from 'react';
import { GraduationCap, Calendar, Award, Building, CheckCircle2 } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-widest w-fit">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Educational Background
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Comprehensive formal qualifications in mechanical engineering, technical polytechnic training, and foundational sciences.
          </p>
        </div>

        {/* Education Timeline Cards in Sleek Interface card styling */}
        <div className="space-y-6">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              id={`education-card-${idx}`}
              className="bg-white border border-slate-200 hover:border-sky-500/80 rounded-2xl p-6 sm:p-7 transition-all hover:shadow-md shadow-xs"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                
                {/* Degree & Institution */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-sky-50 text-sky-700 border border-sky-200 uppercase tracking-wider">
                      {edu.score}
                    </span>
                    <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-sky-600" />
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
                    {edu.degree}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-600">
                    <Building className="w-4 h-4 text-sky-600 shrink-0" />
                    <span className="font-semibold text-slate-800">{edu.institution}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-sky-700 font-mono font-medium">Affiliation: {edu.board}</span>
                  </div>
                </div>

                {/* Score Pill Right */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center min-w-[140px] shrink-0">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-semibold">
                    Cumulative Score
                  </span>
                  <span className="text-xl font-extrabold text-slate-950 font-mono">
                    {edu.score}
                  </span>
                </div>

              </div>

              {/* Highlights */}
              <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                {edu.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
