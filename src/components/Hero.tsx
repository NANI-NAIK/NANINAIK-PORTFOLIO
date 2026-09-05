import React, { useState } from 'react';
import { 
  Award, 
  Layers, 
  Plane, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  FileText, 
  ChevronRight, 
  Copy, 
  Check, 
  Sparkles,
  ExternalLink,
  Camera,
  Maximize2,
  X
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  profilePhoto: string;
  photoFocus?: string;
  onOpenPhotoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenResume, 
  profilePhoto, 
  photoFocus = 'center 22%', 
  onOpenPhotoModal 
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isFullPortraitOpen, setIsFullPortraitOpen] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Bio & Core Pitch */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Academic badge in Sleek Interface style */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span>B.Tech Mechanical Engineering '27 • JNTUK • 8.17 CGPA</span>
            </div>

            {/* Main Headline with Sleek Interface tracking and gradients */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter text-slate-950">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
                {PERSONAL_INFO.tagline}
              </p>
            </div>

            {/* Summary text */}
            <p className="text-base text-slate-600 max-w-xl leading-relaxed">
              {PERSONAL_INFO.aboutBio}
            </p>

            {/* Key Accomplishment Stat Counters in Sleek Interface divider style */}
            <div className="flex items-center gap-2 sm:gap-4 pt-2 flex-wrap">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col py-1">
                    <span className="text-2xl font-black text-slate-900 font-mono">
                      {stat.value}
                    </span>
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                      {stat.label}
                    </span>
                  </div>
                  {idx < PERSONAL_INFO.stats.length - 1 && (
                    <div className="hidden sm:block w-px h-10 bg-slate-200 mx-2" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Action Buttons in Sleek Interface rounded-full style */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#projects"
                id="hero-explore-projects-btn"
                className="bg-sky-600 hover:bg-sky-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm shadow-sky-500/25 hover:shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Technical Projects</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <button
                id="hero-open-resume-btn"
                onClick={onOpenResume}
                className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-sky-600" />
                <span>View Full Resume</span>
              </button>

              <a
                href="#contact"
                id="hero-contact-btn"
                className="text-slate-600 hover:text-slate-950 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Direct Contact →</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-Tech Engineering Identity Card in Sleek Interface styling */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 hover:border-sky-500/50 transition-all shadow-xl space-y-6">
              
              {/* Engineer Card Header with Photo */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  {/* Photo Frame with Hover Overlay */}
                  <div className="relative group cursor-pointer shrink-0" onClick={() => setIsFullPortraitOpen(true)}>
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-sky-500/80 shadow-md shadow-sky-500/15 bg-slate-100 transition-transform group-hover:scale-105">
                      <img
                        src={profilePhoto}
                        alt={PERSONAL_INFO.name}
                        referrerPolicy="no-referrer"
                        style={{ objectPosition: photoFocus }}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Hover edit camera icon badge */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenPhotoModal();
                      }}
                      title="Update profile photo"
                      className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-sky-600 hover:bg-sky-500 text-white flex items-center justify-center shadow-md shadow-sky-500/30 transition-all cursor-pointer"
                    >
                      <Camera className="w-3 h-3" />
                    </button>
                    {/* Active presence status dot */}
                    <span className="absolute -top-1 -left-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-950 tracking-tight leading-snug">
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="text-xs text-sky-600 font-mono font-medium">
                      Mechanical Innovator & CAD Lead
                    </p>
                    <div className="flex items-center gap-3 pt-0.5">
                      <button
                        type="button"
                        onClick={onOpenPhotoModal}
                        className="text-[11px] text-slate-500 hover:text-sky-600 font-mono flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Camera className="w-3 h-3 text-sky-600" />
                        <span>Update Photo</span>
                      </button>
                      <span className="text-slate-300">•</span>
                      <button
                        type="button"
                        onClick={() => setIsFullPortraitOpen(true)}
                        className="text-[11px] text-sky-600 hover:text-sky-700 font-mono flex items-center gap-1 transition-colors cursor-pointer font-medium"
                      >
                        <Maximize2 className="w-3 h-3" />
                        <span>View Portrait</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Status chip */}
                <span className="px-3 py-1 text-[10px] font-mono font-bold text-sky-700 bg-sky-50 border border-sky-200 rounded-full uppercase tracking-wider self-start sm:self-auto">
                  AVAILABLE
                </span>
              </div>

              {/* Core Profile Coordinates */}
              <div className="space-y-3 text-xs">
                {/* Email with copy button */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <div className="w-7 h-7 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-slate-800 truncate font-mono">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                  <button
                    id="copy-email-btn"
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                    className="p-1.5 text-slate-500 hover:text-sky-600 transition-colors cursor-pointer"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone with copy button */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-slate-800 font-mono">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                  <button
                    id="copy-phone-btn"
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                    className="p-1.5 text-slate-500 hover:text-sky-600 transition-colors cursor-pointer"
                    title="Copy phone"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <div className="w-7 h-7 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                      <Linkedin className="w-3.5 h-3.5" />
                    </div>
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-800 hover:text-sky-600 font-mono truncate transition-colors flex items-center gap-1 font-medium"
                    >
                      {PERSONAL_INFO.linkedinHandle}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-800">
                  <div className="w-7 h-7 rounded-lg bg-rose-100 flex items-center justify-center text-rose-600 shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-mono text-slate-700">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Badges / Key Skill Chips */}
              <div className="pt-2">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2 font-semibold">
                  Core Specializations
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['RC Planes & UAVs', '3D Printing & CURA', 'Fusion 360', 'CATIA V5', 'SolidWorks', 'Python IoT'].map((item, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-mono bg-slate-100 text-slate-700 border border-slate-200 rounded-lg hover:border-sky-500/50 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Full Portrait Lightbox Modal */}
      {isFullPortraitOpen && (
        <div 
          id="full-portrait-lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsFullPortraitOpen(false)}
        >
          <div 
            className="relative max-w-lg w-full max-h-[92vh] flex flex-col items-center bg-[#0b0f19] border border-slate-700/60 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="w-full px-5 py-3.5 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight">{PERSONAL_INFO.name}</h4>
                <p className="text-[11px] text-sky-400 font-mono">Executive Stance • Mechanical Engineering Innovator</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsFullPortraitOpen(false);
                    onOpenPhotoModal();
                  }}
                  className="px-2.5 py-1 rounded-lg bg-sky-500/20 text-sky-300 hover:bg-sky-500/30 text-xs font-mono flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Camera className="w-3 h-3" />
                  <span>Change</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsFullPortraitOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Portrait Image Container */}
            <div className="relative w-full overflow-y-auto p-4 flex justify-center bg-slate-950/80">
              <img
                src={profilePhoto}
                alt={`${PERSONAL_INFO.name} Full Portrait`}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto rounded-xl object-contain shadow-2xl border border-slate-800"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
