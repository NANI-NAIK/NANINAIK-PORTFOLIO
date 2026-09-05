import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  profilePhoto?: string;
  photoFocus?: string;
  onOpenPhotoModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenResume, 
  profilePhoto, 
  photoFocus = 'center 22%',
  onOpenPhotoModal 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'projects', 'skills', 'achievements', 'certifications', 'leadership', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Overview', href: '#home', id: 'home' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills & CAD', href: '#skills', id: 'skills' },
    { label: 'Awards', href: '#achievements', id: 'achievements' },
    { label: 'Certs & Training', href: '#certifications', id: 'certifications' },
    { label: 'Leadership', href: '#leadership', id: 'leadership' },
    { label: 'Education', href: '#education', id: 'education' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100/80 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between">
        {/* Brand / Logo with Photo */}
        <a
          href="#home"
          id="brand-logo-btn"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-sky-500/50 shadow-sm bg-slate-100 group-hover:scale-105 transition-transform shrink-0">
            <img
              src={profilePhoto || PERSONAL_INFO.profilePhoto}
              alt={PERSONAL_INFO.name}
              referrerPolicy="no-referrer"
              style={{ objectPosition: photoFocus }}
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 border border-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
              NANI <span className="text-sky-600">NAIK</span>
            </span>
            <span className="text-[10px] font-mono text-slate-500 tracking-wider uppercase">
              Mechanical & UAV Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.href)}
                className={`transition-colors cursor-pointer text-xs font-medium ${
                  isActive
                    ? 'text-slate-950 border-b-2 border-sky-600 pb-1 font-bold'
                    : 'text-slate-600 hover:text-sky-600 pb-1'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            id="view-resume-nav-btn"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 border border-slate-200/80 rounded-full transition-all cursor-pointer shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-sky-600" />
            <span>Formal CV</span>
          </button>

          <a
            id="contact-nav-btn"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="bg-sky-600 hover:bg-sky-500 text-white px-5 py-2 rounded-full text-xs font-semibold transition-all shadow-sm shadow-sky-500/20 hover:shadow-md cursor-pointer flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="mobile-resume-trigger"
            onClick={onOpenResume}
            className="p-2 text-xs font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded-full"
            title="View Resume"
          >
            <FileText className="w-4 h-4 text-sky-600" />
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="lg:hidden px-5 pt-3 pb-6 bg-white/98 backdrop-blur-xl border-b border-slate-200 mt-2 space-y-3 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.href)}
                className={`text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-sky-50 text-sky-700 font-bold border border-sky-200'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-full"
            >
              <FileText className="w-4 h-4 text-sky-600" />
              View Formal Resume
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-full shadow-sm shadow-sky-500/20"
            >
              <Send className="w-4 h-4" />
              Connect with Nani
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
