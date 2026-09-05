import React, { useEffect, useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Copy, Check, QrCode, ExternalLink, Award, Sparkles, ShieldCheck } from 'lucide-react';
import QRCode from 'qrcode';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ResumeHeaderProps {
  profilePhoto?: string;
  photoFocus?: string;
  theme?: 'dark' | 'light';
}

export const ResumeHeader: React.FC<ResumeHeaderProps> = ({
  profilePhoto,
  photoFocus = 'center 22%',
  theme = 'dark',
}) => {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');
  const [showQrModal, setShowQrModal] = useState<boolean>(false);

  useEffect(() => {
    QRCode.toDataURL(PERSONAL_INFO.linkedin, {
      width: 180,
      margin: 1,
      color: {
        dark: '#0f172a',
        light: '#ffffff',
      },
    })
      .then((url) => setQrCodeDataUrl(url))
      .catch((err) => console.error('Failed to generate QR code', err));
  }, []);

  const copyToClipboard = (text: string, field: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2200);
  };

  const isDark = theme === 'dark';

  return (
    <header className={`relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950 border-slate-800/90 shadow-2xl shadow-cyan-950/20' 
        : 'bg-white border-slate-200 shadow-lg'
    }`}>
      {/* Decorative Aerospace Corner Grid */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        
        {/* Left: Avatar + Identity */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left w-full lg:w-auto">
          {/* Larger Profile Image with Headshot Positioning */}
          <div className="relative group shrink-0">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-cyan-400 shadow-xl shadow-cyan-500/20 bg-slate-950">
              <img
                src={profilePhoto || PERSONAL_INFO.profilePhoto}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                style={{ objectPosition: photoFocus }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-slate-900" />
            </span>
          </div>

          {/* Name, Roles, Badges */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h1 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {PERSONAL_INFO.name}
              </h1>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <ShieldCheck className="w-3 h-3 text-cyan-400" />
                Verified Candidate
              </span>
            </div>

            <p className="text-sm font-medium text-cyan-400 font-mono">
              Mechanical Engineer • UAV Aerodynamics • CAD Specialist • Prototyper
            </p>

            {/* Target Roles Badge & CGPA Badge */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800/80 text-slate-200 border border-slate-700/60 shadow-sm">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-bold text-amber-300">8.17 CGPA</span>
                <span className="text-slate-400">• Distinction (JNTUK)</span>
              </span>

              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20">
                <Sparkles className="w-3 h-3 text-blue-400" />
                <span>Targeting: Product Support | Mechanical Design | UAV | GET</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right: Interactive Contact Cards & QR Code Badge */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-stretch lg:items-end gap-2.5 w-full lg:w-auto font-mono text-xs">
          
          {/* Email Card */}
          <div 
            onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
            className={`flex items-center justify-between gap-3 px-3.5 py-2 rounded-xl border transition-all cursor-pointer w-full sm:w-auto lg:w-72 ${
              isDark 
                ? 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/60 text-slate-300' 
                : 'bg-slate-50 border-slate-200 hover:border-cyan-500 text-slate-700'
            }`}
            title="Click to copy email address"
          >
            <div className="flex items-center gap-2 truncate">
              <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="truncate">{PERSONAL_INFO.email}</span>
            </div>
            <button className="text-slate-400 hover:text-cyan-300 shrink-0">
              {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Phone Card */}
          <div 
            onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
            className={`flex items-center justify-between gap-3 px-3.5 py-2 rounded-xl border transition-all cursor-pointer w-full sm:w-auto lg:w-72 ${
              isDark 
                ? 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/60 text-slate-300' 
                : 'bg-slate-50 border-slate-200 hover:border-cyan-500 text-slate-700'
            }`}
            title="Click to copy mobile number"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{PERSONAL_INFO.phone}</span>
            </div>
            <button className="text-slate-400 hover:text-emerald-300 shrink-0">
              {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* LinkedIn & QR Code Quick Action */}
          <div className="flex items-center gap-2 w-full sm:w-auto lg:w-72">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-between px-3.5 py-2 rounded-xl border transition-all text-slate-300 ${
                isDark 
                  ? 'bg-slate-900/80 border-slate-800 hover:border-cyan-400 hover:text-white hover:bg-slate-800/60' 
                  : 'bg-slate-50 border-slate-200 hover:border-cyan-400 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center gap-2 truncate">
                <Linkedin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="truncate">LinkedIn Profile</span>
              </div>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            {/* QR Code Popover Trigger */}
            <button
              type="button"
              onClick={() => setShowQrModal(!showQrModal)}
              className="flex items-center gap-1 px-3 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-colors cursor-pointer shrink-0"
              title="Scan LinkedIn QR Code on mobile"
            >
              <QrCode className="w-4 h-4" />
              <span className="text-[11px] font-semibold hidden sm:inline">QR</span>
            </button>
          </div>

          {/* Location Badge */}
          <div className="flex items-center justify-center lg:justify-end gap-1.5 text-slate-400 text-[11px] pt-0.5">
            <MapPin className="w-3 h-3 text-rose-400" />
            <span>{PERSONAL_INFO.location}</span>
          </div>

        </div>

      </div>

      {/* QR Code Lightbox Popover */}
      {showQrModal && (
        <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-3">
            {qrCodeDataUrl ? (
              <div className="p-1.5 bg-white rounded-lg shadow-md shrink-0">
                <img src={qrCodeDataUrl} alt="LinkedIn QR Code" className="w-20 h-20" />
              </div>
            ) : (
              <div className="w-20 h-20 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 font-mono text-xs">
                Generating...
              </div>
            )}
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5 font-mono">
                <QrCode className="w-3.5 h-3.5 text-cyan-400" />
                <span>Recruiter Instant Scan</span>
              </h4>
              <p className="text-[11px] text-slate-300">
                Scan with your phone camera to view and connect with Nani Naik on LinkedIn directly.
              </p>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-cyan-400 hover:underline flex items-center gap-1 font-mono"
              >
                <span>{PERSONAL_INFO.linkedinHandle}</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowQrModal(false)}
            className="px-3 py-1 text-xs text-slate-400 hover:text-white bg-slate-800 rounded-lg border border-slate-700 cursor-pointer shrink-0"
          >
            Dismiss
          </button>
        </div>
      )}
    </header>
  );
};
