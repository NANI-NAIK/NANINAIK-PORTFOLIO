import React from 'react';
import { GraduationCap, Award, Calendar, Building, BookOpen, CheckCircle2 } from 'lucide-react';
import { EDUCATION } from '../../data/portfolioData';

interface ResumeEducationProps {
  theme?: 'dark' | 'light';
}

export const ResumeEducation: React.FC<ResumeEducationProps> = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between border-b pb-2 border-slate-800">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-cyan-400" />
          <h3 className={`text-sm font-bold uppercase tracking-wider font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Timeline-Based Academic Qualifications
          </h3>
        </div>
        <span className="text-[11px] font-mono text-emerald-400">
          8.17 CGPA • First Class with Distinction
        </span>
      </div>

      <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
        {EDUCATION.map((edu, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Node Dot */}
            <div className="absolute -left-6 top-1.5 w-5 h-5 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            </div>

            {/* Education Card */}
            <div
              className={`p-4 rounded-xl border transition-all ${
                isDark 
                  ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80' 
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <div>
                  <h4 className={`text-sm font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {edu.degree}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mt-0.5">
                    <Building className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.institution}</span>
                    <span>•</span>
                    <span className="text-slate-500">Board: {edu.board}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="px-2.5 py-0.5 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold">
                    {edu.score}
                  </span>
                  <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                    {edu.period}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-1 text-xs text-slate-300 mt-2">
                {edu.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
