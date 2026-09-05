import React, { useState, useRef, useEffect } from 'react';
import { X, Upload, Camera, Check, RotateCcw, Link as LinkIcon, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string;
  onSavePhoto: (photoUrl: string, focusAlign?: string) => void;
  currentFocus?: string;
}

const PRESET_PHOTOS = [
  {
    name: 'Young Engineer (Studio)',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Smart Innovator',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  },
];

export const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  onSavePhoto,
  currentFocus = 'center 22%',
}) => {
  const [previewPhoto, setPreviewPhoto] = useState<string>(currentPhoto);
  const [focusAlign, setFocusAlign] = useState<string>(currentFocus);
  const [urlInput, setUrlInput] = useState<string>('');
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPreviewPhoto(currentPhoto);
    setFocusAlign(currentFocus);
  }, [currentPhoto, currentFocus, isOpen]);

  // Support clipboard paste (Ctrl+V / Cmd+V)
  useEffect(() => {
    if (!isOpen) return;
    const handlePaste = (e: ClipboardEvent) => {
      if (e.clipboardData && e.clipboardData.files.length > 0) {
        const file = e.clipboardData.files[0];
        if (file.type.startsWith('image/')) {
          handleFile(file);
        }
      }
    };
    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please select a valid image file (PNG, JPG, JPEG, WEBP)');
      return;
    }
    setErrorMsg(null);
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setPreviewPhoto(e.target.result as string);
        // Default to headshot framing for portrait photos
        setFocusAlign('center 22%');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;
    setPreviewPhoto(urlInput.trim());
    setUrlInput('');
  };

  const handleSave = () => {
    onSavePhoto(previewPhoto, focusAlign);
    onClose();
  };

  const handleResetDefault = () => {
    setPreviewPhoto(PERSONAL_INFO.profilePhoto);
    setFocusAlign('center 22%');
  };

  return (
    <div
      id="photo-upload-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 space-y-6 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-950 tracking-tight">
                Update Profile Photo
              </h3>
              <p className="text-xs text-slate-500">
                Personalize your portfolio portrait across all sections
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-950 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current / Live Preview with Framing Options */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <div className="relative group shrink-0">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-sky-500 shadow-sm bg-slate-100">
                <img
                  src={previewPhoto}
                  alt="Profile Preview"
                  referrerPolicy="no-referrer"
                  style={{ objectPosition: focusAlign }}
                  className="w-full h-full object-cover transition-all duration-200"
                />
              </div>
              <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" />
            </div>

            <div className="space-y-1 text-center sm:text-left flex-1">
              <div className="flex items-center justify-center sm:justify-between gap-2">
                <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider block">
                  Live Photo Preview
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200 font-semibold">
                  Framing: {focusAlign === 'center 22%' ? 'Face & Suit' : focusAlign === 'center 38%' ? 'Upper Body' : 'Centered'}
                </span>
              </div>
              <p className="text-xs text-slate-600">
                Appears in Hero Section, Navbar, Resume header, and Contact card.
              </p>
            </div>
          </div>

          {/* Framing / Focus Controls */}
          <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2">
            <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1 font-semibold">
              <Sparkles className="w-3 h-3 text-sky-600" />
              <span>Portrait Focus:</span>
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setFocusAlign('center 22%')}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                  focusAlign === 'center 22%'
                    ? 'bg-sky-600 text-white font-semibold shadow-2xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-950'
                }`}
              >
                Face & Suit
              </button>
              <button
                type="button"
                onClick={() => setFocusAlign('center 38%')}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                  focusAlign === 'center 38%'
                    ? 'bg-sky-600 text-white font-semibold shadow-2xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-950'
                }`}
              >
                Upper Body
              </button>
              <button
                type="button"
                onClick={() => setFocusAlign('center center')}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                  focusAlign === 'center center'
                    ? 'bg-sky-600 text-white font-semibold shadow-2xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-950'
                }`}
              >
                Center
              </button>
            </div>
          </div>
        </div>

        {/* Drag & Drop File Upload Area */}
        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFile(e.target.files[0]);
              }
            }}
          />

          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
              dragActive
                ? 'border-sky-500 bg-sky-50/70 scale-[1.01]'
                : 'border-slate-300 hover:border-sky-500 bg-slate-50/60 hover:bg-slate-50'
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-sky-50 text-sky-600 border border-sky-200 flex items-center justify-center mx-auto mb-2">
              <Upload className="w-5 h-5" />
            </div>
            <p className="text-xs font-bold text-slate-950">
              Click to select photo or drag and drop here
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              Drop <strong className="text-sky-700 font-mono">WhatsApp Image</strong> or any photo • Or press <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-300 font-mono text-[10px] text-slate-700">Ctrl+V</kbd> to paste
            </p>
          </div>
          {errorMsg && (
            <p className="text-xs text-rose-600 mt-1.5 font-medium">{errorMsg}</p>
          )}
        </div>

        {/* Web URL Input Alternative */}
        <form onSubmit={handleUrlSubmit} className="space-y-2">
          <label className="text-[11px] font-mono text-slate-600 uppercase tracking-wider block font-semibold">
            Or Paste Online Image URL
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <LinkIcon className="w-3.5 h-3.5" />
              </div>
              <input
                type="url"
                placeholder="https://example.com/my-photo.jpg"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
              />
            </div>
            <button
              type="submit"
              className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 transition-colors shrink-0 cursor-pointer"
            >
              Load URL
            </button>
          </div>
        </form>

        {/* Presets */}
        <div className="space-y-2">
          <span className="text-[11px] font-mono text-slate-600 uppercase tracking-wider block font-semibold">
            Sample Presets
          </span>
          <div className="flex items-center gap-2">
            {PRESET_PHOTOS.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setPreviewPhoto(preset.url)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 hover:border-sky-400 text-xs text-slate-700 hover:text-slate-950 transition-all cursor-pointer"
              >
                <img
                  src={preset.url}
                  alt={preset.name}
                  referrerPolicy="no-referrer"
                  className="w-4 h-4 rounded-full object-cover"
                />
                <span className="truncate max-w-[110px]">{preset.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleResetDefault}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-950 transition-colors cursor-pointer font-medium"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Default</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-full transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              id="save-profile-photo-btn"
              onClick={handleSave}
              className="flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-full shadow-md shadow-sky-600/20 hover:shadow-sky-600/35 transition-all cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Apply Photo</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
