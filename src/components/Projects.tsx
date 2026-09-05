import React, { useState } from 'react';
import { 
  Box, 
  Cpu, 
  ArrowUpRight, 
  Layers, 
  CheckCircle2, 
  Plane, 
  ShieldAlert, 
  Sparkles,
  SlidersHorizontal
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { DroneSimulator } from './DroneSimulator';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [showFlightSandbox, setShowFlightSandbox] = useState<boolean>(true);

  const categories = ['All', 'UAV & Aerospace', 'Advanced Mechanics', 'Product Design & Patent'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-widest w-fit">
              <Layers className="w-3.5 h-3.5" />
              <span>Practical Engineering & Innovation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Physical fabrications, aerodynamic testing, fluid damping kinetics, and patent-pending mechanical architectures.
            </p>
          </div>

          {/* Filter Pills with rounded-full Sleek Interface styling */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-full">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-project-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-sky-600 text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid with Sleek Interface card styling */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const iconBg = idx === 0 
              ? 'bg-sky-100 text-sky-600' 
              : idx === 1 
              ? 'bg-indigo-100 text-indigo-600' 
              : 'bg-emerald-100 text-emerald-600';

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => onSelectProject(project)}
                className="group bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-sky-500/80 transition-all cursor-pointer shadow-sm hover:shadow-xl"
              >
                {/* Card Top Details */}
                <div>
                  {/* Category icon badge + status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg}`}>
                      {idx === 0 ? <Plane className="w-5 h-5" /> : idx === 1 ? <Cpu className="w-5 h-5" /> : <Box className="w-5 h-5" />}
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider ${
                      project.status === 'Patent Ongoing'
                        ? 'bg-amber-50 text-amber-800 border-amber-300'
                        : 'bg-sky-50 text-sky-700 border-sky-200'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-slate-950 mb-1 group-hover:text-sky-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-sky-600 font-medium mb-3">
                    {project.subtitle}
                  </p>

                  {/* Summary */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {/* Metrics pill strip */}
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-2 py-3 mb-4 border-y border-slate-100 text-center">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="bg-slate-50 border border-slate-100 rounded-lg p-2">
                          <span className="text-[10px] text-slate-500 block uppercase font-mono tracking-wider">{m.label}</span>
                          <span className="text-xs font-bold text-slate-900 font-mono mt-0.5 block">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CAD & Fabrication tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.cadTools.slice(0, 3).map((tool, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[10px] font-mono bg-slate-100 text-slate-700 border border-slate-200 rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.fabricationMethods.slice(0, 1).map((fab, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[10px] font-mono bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-md"
                      >
                        {fab}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom Case Study Link in Sleek Interface style */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-tighter group-hover:text-sky-700 flex items-center gap-1 transition-colors">
                    Case Study →
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-sky-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Interactive Drone & Aerodynamics Simulator Widget */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center">
                <Plane className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 tracking-tight">
                Live Interactive UAV Aerodynamics & Avionics Workbench
              </h3>
            </div>
            <button
              onClick={() => setShowFlightSandbox(!showFlightSandbox)}
              className="text-xs text-sky-600 hover:text-sky-700 font-semibold uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              {showFlightSandbox ? 'Hide Sandbox' : 'Show Sandbox'}
            </button>
          </div>

          {showFlightSandbox && <DroneSimulator />}
        </div>

      </div>
    </section>
  );
};
