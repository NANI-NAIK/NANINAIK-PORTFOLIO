import React from 'react';
import { ArrowUp, Heart, Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          {/* Left Brand info */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-slate-950 text-sm tracking-tight font-mono">
                {PERSONAL_INFO.name}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-sky-50 text-sky-700 border border-sky-200 uppercase tracking-wider">
                B.Tech ME '27
              </span>
            </div>
            <p className="text-slate-600 text-xs">
              Narasaraopeta Engineering College (Autonomous) • JNTUK
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <a href="#projects" className="hover:text-sky-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-sky-600 transition-colors">CAD & Skills</a>
            <a href="#achievements" className="hover:text-sky-600 transition-colors">Awards</a>
            <a href="#certifications" className="hover:text-sky-600 transition-colors">Certifications</a>
            <a href="#education" className="hover:text-sky-600 transition-colors">Education</a>
            <a href="#contact" className="hover:text-sky-600 transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            id="footer-back-to-top"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200 shadow-xs transition-colors cursor-pointer text-xs font-semibold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-600" />
          </button>
        </div>

        {/* Bottom copyright and authentication notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} Nani Naik Ramavathu. All academic records, patents, and contest certifications authenticated.
          </p>
          <div className="flex items-center gap-3">
            <span>Andhra Pradesh, India</span>
            <span>•</span>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-sky-600 transition-colors">
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
