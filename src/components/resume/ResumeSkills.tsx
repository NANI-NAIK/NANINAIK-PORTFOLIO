import React from 'react';
import { 
  Code2, 
  Box, 
  Cpu, 
  Wrench, 
  FileSpreadsheet, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Terminal, 
  Compass, 
  Printer, 
  ShieldCheck 
} from 'lucide-react';

interface ResumeSkillsProps {
  theme?: 'dark' | 'light';
}

interface SkillItem {
  name: string;
  level: number;
  badge: string;
  experience: string;
}

interface SkillCategoryData {
  id: string;
  category: string;
  icon: React.ElementType;
  accent: string;
  borderAccent: string;
  summary: string;
  skills: SkillItem[];
}

export const ResumeSkills: React.FC<ResumeSkillsProps> = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  const skillCategories: SkillCategoryData[] = [
    {
      id: 'cad-design',
      category: 'CAD Design & Slicing',
      icon: Box,
      accent: 'text-cyan-400',
      borderAccent: 'group-hover:border-cyan-500/50',
      summary: 'High-tolerance parametric drafting, surface modeling, kinematic assemblies, and slicing algorithms.',
      skills: [
        { name: 'Autodesk Fusion 360', level: 92, badge: 'Expert', experience: 'Generative CAD, kinematic joints, rendering' },
        { name: 'CATIA V5', level: 90, badge: 'Advanced', experience: 'Part design, wireframe, aerospace surface drafting' },
        { name: 'CURA 5.9.1 Slicing', level: 94, badge: 'Specialist', experience: 'Infill architectures, layer adhesion, custom print profiles' },
        { name: 'SolidWorks', level: 88, badge: 'Certified', experience: '8-week industrial internship, assemblies, motion simulation' },
        { name: 'TINKERCAD', level: 95, badge: 'Master', experience: 'Rapid modular STEM ideation & 3D geometry prototyping' },
      ],
    },
    {
      id: 'manufacturing',
      category: 'Manufacturing & Prototyping',
      icon: Wrench,
      accent: 'text-amber-400',
      borderAccent: 'group-hover:border-amber-500/50',
      summary: 'Hands-on additive manufacturing, composite layup, aerodynamic airframe fabrication, and workshop tooling.',
      skills: [
        { name: '3D Printing (FDM & SLA)', level: 95, badge: 'Core Strength', experience: 'Thermal tuning, bed leveling, mechanical post-processing' },
        { name: 'RC Aircraft & Drone Fabrication', level: 94, badge: 'Trainer Cert', experience: 'Airfoil crafting, CG balancing, brushless motor mounts' },
        { name: 'Aerodynamics & Flight Dynamics', level: 88, badge: 'Advanced', experience: 'Lift-to-drag optimization, stall stabilization, telemetry' },
        { name: 'CITD Tool Engineering', level: 84, badge: 'Govt Certified', experience: 'Tool design program at Central Institute of Tool Design' },
        { name: 'Mechanical Prototyping & Soldering', level: 90, badge: 'Hands-on', experience: 'Harness routing, ESC calibration, sensor mounting' },
      ],
    },
    {
      id: 'robotics-drones',
      category: 'Robotics & UAV Avionics',
      icon: Cpu,
      accent: 'text-emerald-400',
      borderAccent: 'group-hover:border-emerald-500/50',
      summary: 'Flight controllers, radio telemetry, electronic speed controllers, and humanoid kinematics.',
      skills: [
        { name: 'UAV Avionics & Radio Telemetry', level: 92, badge: 'Expert', experience: '2.4GHz RF, transmitter/receiver pairing, fail-safe logic' },
        { name: 'ESC Calibration & LiPo Systems', level: 90, badge: 'Mastered', experience: '30A ESC timing, brushless motor synchronisation, power' },
        { name: 'BOT S1 & A2 Humanoid Systems', level: 85, badge: 'Trained', experience: 'Actuator control loops, sensor feedback, bipedal frames' },
        { name: 'IoT Sensors & Embedded Telemetry', level: 86, badge: 'NPTEL Cert', experience: 'Microcontroller inputs, environmental telemetry, MoE funded' },
      ],
    },
    {
      id: 'programming',
      category: 'Programming & Logic',
      icon: Code2,
      accent: 'text-blue-400',
      borderAccent: 'group-hover:border-blue-500/50',
      summary: 'Algorithmic computing, test automation scripts, and numerical data processing for engineering models.',
      skills: [
        { name: 'Python Programming', level: 82, badge: 'Proficient', experience: 'Engineering algorithms, file automation, scientific computing' },
        { name: 'C & Embedded Concepts', level: 78, badge: 'Intermediate', experience: 'Microcontroller firmware loops, sensor interrupts' },
        { name: 'Numerical Simulation & Math', level: 80, badge: 'Applied', experience: 'Fluid rheology calculations, kinematics matrices' },
      ],
    },
    {
      id: 'productivity-tools',
      category: 'Productivity & Engineering Tools',
      icon: FileSpreadsheet,
      accent: 'text-purple-400',
      borderAccent: 'group-hover:border-purple-500/50',
      summary: 'Technical reporting, experimental analytics, patent dossiers, version control, and multi-team leadership.',
      skills: [
        { name: 'MS Excel (Data & Formulas)', level: 88, badge: 'Advanced', experience: 'Data modeling, test validation matrices, experimental regression' },
        { name: 'Technical Paper Presentation', level: 92, badge: '1st Prize Winner', experience: 'Award-winning communication at national conferences' },
        { name: 'Engineering Documentation & Decks', level: 90, badge: 'Specialist', experience: 'Patent filings, technical drafting, stakeholder reviews' },
        { name: 'Git & Version Management', level: 80, badge: 'Proficient', experience: 'Code repository management, documentation commits' },
      ],
    },
  ];

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between border-b pb-2 border-slate-800">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-cyan-400" />
          <h3 className={`text-sm font-bold uppercase tracking-wider font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Categorized Technical Skills & Proficiency Index
          </h3>
        </div>
        <span className="text-[11px] font-mono text-slate-400">
          Evaluated via Industry Internships & Competitions
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.id}
              className={`p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between group ${
                isDark 
                  ? `bg-slate-900/60 border-slate-800/80 ${cat.borderAccent} hover:bg-slate-900/90` 
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-2">
                  <div className={`p-2 rounded-lg bg-slate-800/80 ${cat.accent}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`text-xs font-bold tracking-tight font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {cat.category}
                    </h4>
                    <span className="text-[10px] text-slate-400 font-mono block">
                      {cat.skills.length} Core Competencies
                    </span>
                  </div>
                </div>

                <p className="text-[10px] text-slate-400 mb-3 leading-relaxed">
                  {cat.summary}
                </p>

                {/* Skill List with Progress Bars */}
                <div className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className={`font-semibold text-[11px] ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-1.5 font-mono text-[10px]">
                          <span className="px-1.5 py-0.2 rounded bg-slate-800 text-cyan-300 border border-slate-700 font-semibold">
                            {skill.badge}
                          </span>
                          <span className={`font-bold ${cat.accent}`}>{skill.level}%</span>
                        </div>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            cat.id === 'cad-design' ? 'bg-gradient-to-r from-cyan-500 to-blue-500' :
                            cat.id === 'manufacturing' ? 'bg-gradient-to-r from-amber-500 to-orange-500' :
                            cat.id === 'robotics-drones' ? 'bg-gradient-to-r from-emerald-500 to-teal-500' :
                            cat.id === 'programming' ? 'bg-gradient-to-r from-blue-500 to-indigo-500' :
                            'bg-gradient-to-r from-purple-500 to-pink-500'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      <p className="text-[9px] font-mono text-slate-400 truncate">
                        {skill.experience}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Tested in Action</span>
                </span>
                <span className="text-slate-400 font-semibold">Verified</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
