import React from 'react';
import { Users, CheckCircle2, Flag, Rocket, Sparkles } from 'lucide-react';
import { RESPONSIBILITIES } from '../data/portfolioData';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-20 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-widest w-fit">
            <Users className="w-3.5 h-3.5" />
            <span>Campus Initiatives & Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Positions of Responsibility
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Leading engineering clubs, training student cohorts in drone fabrication, and driving innovation council programs.
          </p>
        </div>

        {/* Roles Grid with Sleek Interface card styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESPONSIBILITIES.map((item, idx) => (
            <div
              key={idx}
              id={`responsibility-card-${idx}`}
              className="bg-white border border-slate-200 hover:border-sky-500/80 rounded-2xl p-6 flex flex-col justify-between transition-all hover:shadow-md space-y-5 shadow-xs"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center">
                    {idx === 0 ? <Flag className="w-5 h-5" /> : idx === 1 ? <Users className="w-5 h-5" /> : <Rocket className="w-5 h-5" />}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 uppercase tracking-wider">
                    {item.type}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-950">
                    {item.role}
                  </h3>
                  <p className="text-xs text-sky-600 font-mono font-medium mt-0.5">
                    {item.organization}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {item.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                Narasaraopeta Engineering College Campus
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
