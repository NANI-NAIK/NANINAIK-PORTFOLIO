import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, Check, Copy, MessageSquare, Clock, ShieldCheck, Camera } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  profilePhoto?: string;
  photoFocus?: string;
  onOpenPhotoModal?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ 
  profilePhoto, 
  photoFocus = 'center 22%',
  onOpenPhotoModal 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Internship Opportunity',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Create mailto link as practical fallback
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry - ${formData.subject}] from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Nani,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-widest w-fit">
            <Mail className="w-3.5 h-3.5" />
            <span>Communication & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Connect with Nani Naik
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Open for Mechanical Engineering internships, UAV & Drone R&D projects, CAD design consults, and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Coordinates & Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Engineer Identity & Photo Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div 
                  className="relative group cursor-pointer shrink-0"
                  onClick={onOpenPhotoModal}
                  title="Click to view or change photo"
                >
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-sky-500 shadow-sm bg-slate-100 transition-transform group-hover:scale-105">
                    <img
                      src={profilePhoto || PERSONAL_INFO.profilePhoto}
                      alt={PERSONAL_INFO.name}
                      referrerPolicy="no-referrer"
                      style={{ objectPosition: photoFocus }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">{PERSONAL_INFO.name}</h4>
                  <p className="text-xs text-sky-700 font-mono font-medium">B.Tech ME '27 • UAV Specialist</p>
                  <span className="text-[11px] text-emerald-700 font-mono flex items-center gap-1 mt-0.5 font-medium">
                    ● Available for Immediate Placement
                  </span>
                </div>
              </div>
              {onOpenPhotoModal && (
                <button
                  type="button"
                  onClick={onOpenPhotoModal}
                  className="px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 hover:border-sky-400 text-xs font-mono text-slate-700 hover:text-slate-950 transition-colors cursor-pointer shrink-0 flex items-center gap-1.5"
                >
                  <Camera className="w-3 h-3 text-sky-600" />
                  <span>Photo</span>
                </button>
              )}
            </div>

            {/* Direct Email Card */}
            <div className="bg-white border border-slate-200 hover:border-sky-500/80 rounded-2xl p-5 space-y-3 transition-all shadow-xs hover:shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block font-semibold">Email Address</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-bold text-slate-900 hover:text-sky-600 font-mono transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  id="contact-copy-email"
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-2 text-slate-500 hover:text-sky-600 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="bg-white border border-slate-200 hover:border-indigo-500/80 rounded-2xl p-5 space-y-3 transition-all shadow-xs hover:shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block font-semibold">Phone / WhatsApp</span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-sm font-bold text-slate-900 hover:text-indigo-600 font-mono transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  id="contact-copy-phone"
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 text-slate-500 hover:text-sky-600 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors cursor-pointer"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* LinkedIn Profile Card */}
            <div className="bg-white border border-slate-200 hover:border-sky-500/80 rounded-2xl p-5 transition-all shadow-xs hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block font-semibold">LinkedIn Network</span>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-sky-600 hover:text-sky-700 font-mono transition-colors block"
                  >
                    {PERSONAL_INFO.linkedinHandle}
                  </a>
                </div>
              </div>
            </div>

            {/* Permanent Residence Address */}
            <div className="bg-white border border-slate-200 hover:border-rose-400/80 rounded-2xl p-5 transition-all shadow-xs hover:shadow-md">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-xs">
                  <span className="font-mono text-slate-500 uppercase tracking-wider block font-semibold">Permanent Address</span>
                  <p className="text-slate-700 font-medium leading-relaxed">
                    {PERSONAL_INFO.permanentAddress}
                  </p>
                  <span className="text-[11px] text-sky-700 font-mono block pt-0.5 font-medium">
                    Campus: Narasaraopeta Engineering College, Guntur / Palnadu, AP
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-slate-950 mb-2 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-sky-600" />
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-600 mb-6 leading-relaxed">
              Inquiring about an internship, research project, or drone workshop? Fill out the details below.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-950">
                  Message Prepared & Dispatched!
                </h4>
                <p className="text-xs text-slate-700 max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name}. If your default email client did not automatically trigger, you can reach Nani directly at{' '}
                  <strong className="text-sky-700 font-mono">{PERSONAL_INFO.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-full transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-[11px] font-mono text-slate-600 uppercase tracking-wider mb-1.5 font-semibold">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Dr. Ramesh Kumar / Recruiter"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-[11px] font-mono text-slate-600 uppercase tracking-wider mb-1.5 font-semibold">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-[11px] font-mono text-slate-600 uppercase tracking-wider mb-1.5 font-semibold">
                    Inquiry Category
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors cursor-pointer"
                  >
                    <option value="Internship Opportunity">Mechanical / R&D Internship Offer</option>
                    <option value="Drone & UAV Fabrication">Drone & RC Plane Workshop / Fabrication</option>
                    <option value="CAD Prototyping">3D CAD Modeling & Slicing Consultation</option>
                    <option value="Patent Collaboration">Educational 3D Cube / Patent Inquiry</option>
                    <option value="General Conversation">General Professional Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[11px] font-mono text-slate-600 uppercase tracking-wider mb-1.5 font-semibold">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Describe your role, company, or technical project requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors resize-none"
                  />
                </div>

                <button
                  id="submit-contact-btn"
                  type="submit"
                  className="w-full bg-sky-600 hover:bg-sky-500 text-white py-3 px-6 rounded-full text-sm font-semibold shadow-md shadow-sky-600/20 hover:shadow-sky-600/35 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message Directly</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
