import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Rocket, 
  FileText, 
  Check, 
  Share2, 
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Award,
  Terminal,
  ChevronRight,
  Briefcase
} from 'lucide-react';
import { ResumeHeader } from './resume/ResumeHeader';
import { ResumeStats } from './resume/ResumeStats';
import { ResumeJourney } from './resume/ResumeJourney';
import { ResumeSkills } from './resume/ResumeSkills';
import { ResumeProjects } from './resume/ResumeProjects';
import { ResumeEducation } from './resume/ResumeEducation';
import { ResumeAchievements } from './resume/ResumeAchievements';
import { AtsResumeSheet } from './resume/AtsResumeSheet';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profilePhoto?: string;
  photoFocus?: string;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ 
  isOpen, 
  onClose, 
  profilePhoto,
  photoFocus = 'center 22%'
}) => {
  const [activeTab, setActiveTab] = useState<'aerospace' | 'ats'>('aerospace');
  const [copiedLink, setCopiedLink] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.linkedin);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div
      id="formal-resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        ref={containerRef}
        className="relative w-full max-w-5xl bg-[#070b14] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-4 sm:my-6 flex flex-col max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Cockpit Command Bar */}
        <div className="no-print flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 sm:p-4 bg-slate-950/95 border-b border-slate-800 shrink-0">
          
          {/* Left: Candidate Identification & Telemetry Status */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
              </span>
              <div>
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[10px] font-mono text-cyan-400">
                  Engineering Portfolio Dossier • JNTUK
                </span>
              </div>
            </div>

            {/* View Switcher Tabs */}
            <div className="flex items-center p-0.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono">
              <button
                type="button"
                onClick={() => setActiveTab('aerospace')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  activeTab === 'aerospace'
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Rocket className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">SpaceX/Tesla Dossier</span>
                <span className="sm:hidden">Cockpit</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('ats')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  activeTab === 'ats'
                    ? 'bg-slate-200 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Clean ATS Paper</span>
                <span className="sm:hidden">ATS Paper</span>
              </button>
            </div>
          </div>

          {/* Right: Actions (Print / PDF / Copy / Close) */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={handleCopyLink}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-mono text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors cursor-pointer"
              title="Copy candidate LinkedIn URL"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-slate-400" />}
              <span className="hidden md:inline">{copiedLink ? 'Copied' : 'Share'}</span>
            </button>

            <button
              id="print-resume-btn"
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-lg transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
              title="Print directly or save as A4 PDF document"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              id="close-resume-modal-btn"
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Close CV preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content View */}
        <div className="overflow-y-auto p-3 sm:p-6 md:p-8 bg-[#040812] space-y-6">
          
          {/* TAB 1: Aerospace Cockpit (Tesla / SpaceX Dossier Mode) */}
          {activeTab === 'aerospace' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              {/* Header with Large Profile Image, Verified Badge, CGPA & QR Code */}
              <ResumeHeader 
                profilePhoto={profilePhoto} 
                photoFocus={photoFocus}
                theme="dark"
              />

              {/* Professional Summary Card */}
              <section className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800 shadow-xl space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
                      Targeted Roles & Executive Engineering Summary
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    Ready for Industry Deployment
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans text-justify">
                  Driven Mechanical Engineering candidate from Narasaraopeta Engineering College (JNTUK) with an outstanding <strong>8.17 CGPA</strong>. Awarded the prestigious <strong>Best Innovation Project Award</strong> at National IP Yatra and <strong>2nd Prize</strong> at the national AICTE IDE Bootcamp. Experienced in fixed-wing RC aircraft aerodynamics, precision FDM slicing algorithms (CURA 5.9.1), non-Newtonian nano-fluid safety systems, and patent-pending kinematic mechanisms. Seeking opportunities to apply technical problem-solving, rapid prototyping, and CAD modeling within high-impact engineering environments.
                </p>

                {/* Targeted Engineering Tracks */}
                <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="text-slate-400 text-[11px]">Primary Target Roles:</span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-cyan-300 border border-slate-700 font-semibold">
                    Product Support Engineer
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-blue-300 border border-slate-700 font-semibold">
                    Mechanical Design Engineer
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-emerald-300 border border-slate-700 font-semibold">
                    UAV Prototyping Engineer
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-purple-300 border border-slate-700 font-semibold">
                    Graduate Engineer Trainee (GET)
                  </span>
                </div>
              </section>

              {/* Professional Statistics Section */}
              <ResumeStats theme="dark" />

              {/* Innovation Journey Timeline: 2025 → 2026 → 2027 */}
              <ResumeJourney theme="dark" />

              {/* Categorized Technical Skills Cards & Progress Bars */}
              <ResumeSkills theme="dark" />

              {/* Enhanced Engineering Projects Section */}
              <ResumeProjects theme="dark" />

              {/* Major Achievements Section */}
              <ResumeAchievements theme="dark" />

              {/* Timeline Education Section */}
              <ResumeEducation theme="dark" />

              {/* Candidate Declaration & Quick Download Bar */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Curriculum Vitae verified for immediate recruiter evaluation.</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab('ats')}
                    className="text-cyan-400 hover:underline cursor-pointer"
                  >
                    View Classic ATS Paper Format →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Clean ATS Paper View (Direct Printable Sheet View) */}
          {activeTab === 'ats' && (
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="no-print p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-xs font-mono text-slate-300">
                <span>📄 Viewing 100% ATS-Compliant Document View (Exact A4 Print Replica)</span>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-3 py-1 bg-cyan-400 text-slate-950 rounded font-bold hover:bg-cyan-300 transition-colors cursor-pointer"
                >
                  Print / Download PDF
                </button>
              </div>

              {/* ATS Printable Sheet */}
              <AtsResumeSheet 
                profilePhoto={profilePhoto} 
                photoFocus={photoFocus} 
              />
            </div>
          )}

          {/* Hidden Offscreen ATS Sheet for Print when in Aerospace Tab */}
          {activeTab !== 'ats' && (
            <div className="hidden print:block">
              <AtsResumeSheet 
                profilePhoto={profilePhoto} 
                photoFocus={photoFocus} 
              />
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="no-print p-3.5 sm:p-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Open for Immediate Employment & Internship Opportunities</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={handlePrint}
              className="flex-1 sm:flex-initial px-4 py-1.5 text-xs font-mono font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-mono text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
