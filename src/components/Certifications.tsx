import React, { useState } from 'react';
import { Award, BookOpen, Briefcase, Calendar, CheckCircle2, HeartHandshake, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [activeType, setActiveType] = useState<string>('All');

  const types = ['All', 'Certification', 'Internship', 'Workshop', 'Social Impact'];

  const filteredCerts = activeType === 'All'
    ? CERTIFICATIONS
    : CERTIFICATIONS.filter(c => c.type === activeType);

  const typeIcons: Record<string, React.ReactNode> = {
    Certification: <ShieldCheck className="w-4 h-4 text-sky-400" />,
    Internship: <Briefcase className="w-4 h-4 text-emerald-400" />,
    Workshop: <BookOpen className="w-4 h-4 text-indigo-400" />,
    'Social Impact': <HeartHandshake className="w-4 h-4 text-rose-400" />,
  };

  return (
    <section id="certifications" className="py-20 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-widest w-fit">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Accreditations & Field Training</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Certifications, Internships & Workshops
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Comprehensive government certifications, aeronautical internships, tool design programs, and robotics training.
            </p>
          </div>

          {/* Filter Tabs in Sleek Interface pill style */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-full">
            {types.map((type) => (
              <button
                key={type}
                id={`filter-cert-${type.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveType(type)}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer ${
                  activeType === type
                    ? 'bg-sky-600 text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/70'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid with Sleek Interface card styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              id={`cert-item-${cert.id}`}
              className="bg-white border border-slate-200 hover:border-sky-500/80 rounded-2xl p-5 flex flex-col justify-between transition-all hover:shadow-md space-y-4 shadow-xs"
            >
              <div className="space-y-3">
                {/* Header tag and date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono">
                    {typeIcons[cert.type]}
                    <span className="text-slate-700 font-medium">{cert.type}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-sky-600" />
                    {cert.date}
                  </span>
                </div>

                {/* Title and Issuer */}
                <div>
                  <h3 className="text-sm font-bold text-slate-950 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-sky-600 font-mono mt-1">
                    {cert.issuer}
                  </p>
                </div>

                {/* Highlight */}
                {cert.highlight && (
                  <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
                    {cert.highlight}
                  </p>
                )}
              </div>

              {/* Bottom verified badge */}
              <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Govt / Academic Authorized Credential</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
