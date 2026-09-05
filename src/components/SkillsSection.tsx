import React, { useState } from 'react';
import { 
  Box, 
  Wrench, 
  Cpu, 
  Award, 
  CheckCircle2, 
  Sliders, 
  Compass, 
  Printer, 
  Code,
  Sparkles
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

  const iconsMap: Record<string, React.ReactNode> = {
    Box: <Box className="w-5 h-5 text-sky-400" />,
    Wrench: <Wrench className="w-5 h-5 text-indigo-400" />,
    Cpu: <Cpu className="w-5 h-5 text-emerald-400" />,
    Award: <Award className="w-5 h-5 text-amber-400" />,
  };

  const currentCategory = SKILL_CATEGORIES[selectedCategoryIndex];

  return (
    <section id="skills" className="py-20 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-widest w-fit">
            <Sliders className="w-3.5 h-3.5" />
            <span>Technical Proficiencies & Toolbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            CAD, Fabrication & Engineering Competencies
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Mastery in industry-standard mechanical design suites, additive manufacturing slicers, aerodynamic craft, and embedded IoT frameworks.
          </p>
        </div>

        {/* Category Selection Tabs with Sleek Interface card styling */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isSelected = selectedCategoryIndex === idx;
            return (
              <button
                key={idx}
                id={`skill-category-tab-${idx}`}
                onClick={() => setSelectedCategoryIndex(idx)}
                className={`p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center gap-3.5 ${
                  isSelected
                    ? 'bg-white border-sky-500 shadow-md ring-2 ring-sky-500/10'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-xs'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  isSelected ? 'bg-sky-50 border border-sky-200 text-sky-600' : 'bg-slate-100 border border-slate-200 text-slate-600'
                }`}>
                  {iconsMap[cat.iconName]}
                </div>
                <div>
                  <h3 className={`text-xs sm:text-sm font-bold tracking-tight ${
                    isSelected ? 'text-slate-950' : 'text-slate-700'
                  }`}>
                    {cat.categoryName}
                  </h3>
                  <span className="text-[10px] font-mono text-slate-500 block mt-0.5">
                    {cat.skills.length} Competencies
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Deep Dive Panel in Sleek Interface style */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100">
            <div>
              <h3 className="text-xl font-bold text-slate-950 flex items-center gap-2">
                {currentCategory.categoryName}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                {currentCategory.description}
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-sky-700 bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200 self-start sm:self-auto uppercase tracking-wider">
              Category {selectedCategoryIndex + 1} of {SKILL_CATEGORIES.length}
            </span>
          </div>

          {/* Skill Progress & Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            {currentCategory.skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 space-y-3 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900">{skill.name}</span>
                    {skill.tag && (
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 bg-sky-50 text-sky-700 rounded border border-sky-200">
                        {skill.tag}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-sky-600 font-bold">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar in Sleek Interface sky-to-indigo gradient */}
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sky-500 to-indigo-600 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {skill.experience}
                </p>
              </div>
            ))}
          </div>

          {/* Core Soft Competencies Bar */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-3 font-semibold">
              Professional Work Ethic & Soft Competencies
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Analytical Problem Solving',
                'Technical Leadership & Mentorship',
                'Effective Communication',
                'Time Management Under Pressure'
              ].map((comp, i) => (
                <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="font-semibold">{comp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
