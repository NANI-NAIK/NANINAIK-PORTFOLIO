import React from 'react';
import { Calendar, Award, Rocket, CheckCircle2, ChevronRight, Sparkles, FileText, Cpu } from 'lucide-react';

interface ResumeJourneyProps {
  theme?: 'dark' | 'light';
}

export const ResumeJourney: React.FC<ResumeJourneyProps> = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  const milestones = [
    {
      year: '2025',
      tag: 'National Awards & Foundation',
      status: 'Completed',
      color: 'border-amber-500/80 text-amber-400 bg-amber-500/10',
      dotColor: 'bg-amber-400',
      highlights: [
        {
          title: 'Best Innovation Project Award – National IP Yatra',
          detail: 'Won coveted top award at 2-day national IP summit by KL University & Ministry of MSME.',
          badge: 'Winner 🏆',
        },
        {
          title: 'Triple 1st Prizes in National Technical Fests',
          detail: '1st Prize at SAMKALP Paper Presentation, 1st Prize at COLORIDO Mechmantra, and 1st Prize in NEC Idea Contest.',
          badge: '1st Prize × 3',
        },
        {
          title: 'CITD & NPTEL IoT Certifications',
          detail: 'Completed Tool Design at Central Institute of Tool Design & NPTEL IoT funded by Ministry of Education.',
          badge: 'Govt Certified',
        },
      ],
    },
    {
      year: '2026',
      tag: 'Prototyping, Patent & Bootcamps',
      status: 'Active / Proven',
      color: 'border-cyan-500/80 text-cyan-400 bg-cyan-500/10',
      dotColor: 'bg-cyan-400',
      highlights: [
        {
          title: 'AICTE & MoE National IDE Bootcamp – 2nd Prize',
          detail: 'Clinched 2nd place nationwide at JNNCE Shivamogga for validated engineering design and product ideation.',
          badge: 'National 2nd 🥈',
        },
        {
          title: 'Educational 3D Cube Patent Application',
          detail: 'Finalized mechanical kinematic CAD tolerances (±0.15mm) with official patent application under active preparation.',
          badge: 'Patent Ongoing',
        },
        {
          title: 'RISE Fusion Multi Project Expo – 2nd Prize',
          detail: 'Fabricated working functional prototype awarded 2nd Prize among inter-collegiate tech projects.',
          badge: 'Expo Winner',
        },
        {
          title: 'SolidWorks Certified 8-Week Internship & Drone Trainer',
          detail: 'Completed intensive CAD assemblies internship + certified as Trainer for JNTUK drone fabrication workshops.',
          badge: 'Trainer & CAD',
        },
      ],
    },
    {
      year: '2027',
      tag: 'Graduation & Engineering Deployment',
      status: 'Target Trajectory',
      color: 'border-emerald-500/80 text-emerald-400 bg-emerald-500/10',
      dotColor: 'bg-emerald-400',
      highlights: [
        {
          title: 'B.Tech in Mechanical Engineering (8.17 CGPA)',
          detail: 'Graduating with Distinction from Narasaraopeta Engineering College (Autonomous / JNTUK).',
          badge: '8.17 CGPA',
        },
        {
          title: 'Targeted Professional Roles',
          detail: 'Product Support Engineer • Mechanical Design Engineer • UAV Prototyping Engineer • Graduate Engineer Trainee (GET).',
          badge: 'Immediate Hire',
        },
        {
          title: 'Innovation & Startup Incubation',
          detail: 'Scaling hardware prototypes (Educational 3D Cube & UAV platforms) through incubator pipelines.',
          badge: 'Commercialization',
        },
      ],
    },
  ];

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between border-b pb-2 border-slate-800">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <h3 className={`text-sm font-bold uppercase tracking-wider font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Innovation Journey Timeline (2025 → 2026 → 2027)
          </h3>
        </div>
        <span className="text-[11px] font-mono text-cyan-400 hidden sm:inline">
          Competitions • Awards • Patents • Career Milestones
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {milestones.map((item) => (
          <div
            key={item.year}
            className={`p-4 rounded-xl border relative flex flex-col justify-between transition-all duration-300 ${
              isDark 
                ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90' 
                : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
            }`}
          >
            {/* Header with Year & Status */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${item.dotColor} shadow-sm`} />
                  <span className={`text-lg font-black font-mono tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {item.year}
                  </span>
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold border ${item.color}`}>
                  {item.status}
                </span>
              </div>

              <div className="text-[11px] font-mono font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                {item.tag}
              </div>

              {/* List of highlights */}
              <div className="space-y-2.5 text-xs">
                {item.highlights.map((hl, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 space-y-1">
                    <div className="flex items-center justify-between gap-1.5">
                      <span className="font-semibold text-slate-200 tracking-tight text-[11px]">
                        {hl.title}
                      </span>
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-cyan-300 border border-slate-700 shrink-0 font-bold">
                        {hl.badge}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 leading-relaxed font-sans">
                      {hl.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>Stage Phase</span>
              <span className="text-cyan-400 font-semibold">{item.year} Trajectory</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
