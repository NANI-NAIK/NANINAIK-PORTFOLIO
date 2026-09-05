import React, { useState } from 'react';
import { X, CheckCircle2, Box, Cpu, FileCheck2, Award, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [shearRate, setShearRate] = useState<number>(35); // For nano-fluid project
  const [cubeAngle, setCubeAngle] = useState<number>(45); // For 3D cube project

  if (!project) return null;

  return (
    <div
      id="project-case-study-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="relative p-6 sm:p-8 bg-slate-50 border-b border-slate-200">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider bg-sky-50 text-sky-700 border border-sky-200 rounded-md">
                  {project.category}
                </span>
                <span className={`px-2.5 py-1 text-[11px] font-mono font-bold rounded-md border ${
                  project.status === 'Patent Ongoing' 
                    ? 'bg-amber-50 text-amber-800 border-amber-300'
                    : 'bg-emerald-50 text-emerald-800 border-emerald-300'
                }`}>
                  ● {project.status}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-slate-600 max-w-2xl">
                {project.subtitle}
              </p>
            </div>

            <button
              id="close-project-modal-btn"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-950 hover:bg-slate-200/70 rounded-xl transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          {/* Key Metrics Row */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="text-[11px] font-mono text-slate-500 block uppercase font-semibold">
                    {m.label}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-sky-600 font-mono">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Full Engineering Description */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-sky-700 font-bold flex items-center gap-2">
              <FileCheck2 className="w-4 h-4" />
              Engineering Abstract & Technical Methodology
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Interactive Feature Sandbox depending on project */}
          {project.id === 'nano-fluid-speed-breaker' && (
            <div className="p-5 rounded-xl bg-slate-50 border border-emerald-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800 font-mono uppercase">
                  Interactive Non-Newtonian Shear Rheology Demo
                </span>
                <span className="text-xs font-mono text-slate-600">
                  Speed: <strong className="text-emerald-700">{shearRate} km/h</strong>
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="80"
                value={shearRate}
                onChange={(e) => setShearRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <span className="text-slate-500 block font-medium">Fluid Viscosity State:</span>
                  <span className={`font-mono font-bold text-sm ${shearRate > 30 ? 'text-amber-700' : 'text-emerald-700'}`}>
                    {shearRate > 30 ? 'Solidified / High Resistance (Dilatant Locking)' : 'Compliant / Soft Damping (Fluidic Passage)'}
                  </span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <span className="text-slate-500 block font-medium">Driver Sensation & Safety:</span>
                  <span className="font-mono text-sky-700 font-bold text-sm">
                    {shearRate > 30 ? 'Enforces Safe Deceleration' : 'Zero Chassis Shock / Gentle Transition'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {project.id === 'educational-3d-cube' && (
            <div className="p-5 rounded-xl bg-slate-50 border border-amber-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-800 font-mono uppercase">
                  Interactive 3D Kinematic Unfolding Preview
                </span>
                <span className="text-xs font-mono text-slate-600">
                  Rotation: <strong className="text-amber-700">{cubeAngle}°</strong>
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="360"
                value={cubeAngle}
                onChange={(e) => setCubeAngle(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <div className="h-36 flex items-center justify-center bg-white rounded-xl border border-slate-200 relative overflow-hidden">
                <div
                  className="w-20 h-20 border-2 border-amber-500 bg-amber-50 rounded-lg shadow-md flex items-center justify-center transition-transform duration-100"
                  style={{ transform: `rotate(${cubeAngle}deg) rotateX(25deg)` }}
                >
                  <div className="w-10 h-10 border border-dashed border-amber-400 rounded flex items-center justify-center text-[10px] font-mono text-amber-800 font-bold">
                    CAD-01
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 text-center">
                Patent Application officially in ongoing preparation for unique interlocking 6-degree mechanical geometry.
              </p>
            </div>
          )}

          {/* Key Engineering Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-sky-700 font-bold flex items-center gap-2">
              <Award className="w-4 h-4" />
              Key Technical Accomplishments
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyHighlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 leading-relaxed font-medium">{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Fabrication Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <span className="text-xs font-mono text-slate-500 uppercase flex items-center gap-1.5 font-semibold">
                <Box className="w-3.5 h-3.5 text-sky-600" />
                CAD & Slicing Suite
              </span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.cadTools.map((t, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs font-medium bg-white text-slate-800 border border-slate-200 rounded-md shadow-2xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <span className="text-xs font-mono text-slate-500 uppercase flex items-center gap-1.5 font-semibold">
                <Cpu className="w-3.5 h-3.5 text-indigo-600" />
                Manufacturing & Assembly
              </span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.fabricationMethods.map((m, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs font-medium bg-white text-slate-800 border border-slate-200 rounded-md shadow-2xs"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">
            Nani Naik Ramavathu • Mechanical Innovation Portfolio
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
