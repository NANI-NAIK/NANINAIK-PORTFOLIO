import React from 'react';
import { 
  Plane, 
  ShieldAlert, 
  Box, 
  Layers, 
  Cpu, 
  Wrench, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight,
  FileCheck
} from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';

interface ResumeProjectsProps {
  theme?: 'dark' | 'light';
}

export const ResumeProjects: React.FC<ResumeProjectsProps> = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'rc-plane-drone':
        return Plane;
      case 'nano-fluid-speed-breaker':
        return ShieldAlert;
      case 'educational-3d-cube':
        return Box;
      default:
        return Layers;
    }
  };

  const getStatusBadge = (status: string) => {
    if (status.includes('Patent')) {
      return {
        label: 'Patent Ongoing / Under Prep',
        style: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
      };
    }
    return {
      label: 'Flight-Tested & Awarded',
      style: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    };
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between border-b pb-2 border-slate-800">
        <div className="flex items-center gap-2">
          <Wrench className="w-4 h-4 text-cyan-400" />
          <h3 className={`text-sm font-bold uppercase tracking-wider font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Featured Engineering Projects & Hardware Prototyping
          </h3>
        </div>
        <span className="text-[11px] font-mono text-cyan-400">
          Kinematics • UAV Avionics • Rheology
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {PROJECTS.map((project) => {
          const Icon = getProjectIcon(project.id);
          const status = getStatusBadge(project.status);

          return (
            <div
              key={project.id}
              className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${
                isDark
                  ? 'bg-slate-900/70 border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/95 shadow-lg'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="space-y-3">
                {/* Header with Project Icon, Title & Category */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${isDark ? 'bg-slate-800 text-cyan-400' : 'bg-slate-100 text-cyan-600'} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 block">
                        {project.category}
                      </span>
                      <h4 className={`text-sm font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {project.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border font-semibold ${status.style}`}>
                    {status.label}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {project.subtitle}
                  </span>
                </div>

                {/* Project Summary */}
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {project.summary}
                </p>

                {/* Measurable Impact Metrics Grid */}
                <div className="grid grid-cols-3 gap-1.5 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center font-mono">
                      <span className="text-[9px] text-slate-400 block uppercase truncate">
                        {metric.label}
                      </span>
                      <span className="text-xs font-bold text-cyan-300">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Key Outcomes & Highlights */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    Key Engineering Highlights:
                  </span>
                  <ul className="space-y-1 text-[11px] text-slate-300">
                    {project.keyHighlights.slice(0, 3).map((hl, i) => (
                      <li key={i} className="flex items-start gap-1.5 leading-tight">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies Used Footer */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 space-y-2">
                <div className="flex flex-wrap gap-1">
                  {project.cadTools.concat(project.fabricationMethods.slice(0, 1)).map((tool, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/50"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
