/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { SkillsSection } from './components/SkillsSection';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { Leadership } from './components/Leadership';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { PhotoUploadModal } from './components/PhotoUploadModal';
import { Footer } from './components/Footer';
import { Project } from './types';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState<boolean>(false);
  const [profilePhoto, setProfilePhoto] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('nani_custom_profile_photo') || PERSONAL_INFO.profilePhoto;
    }
    return PERSONAL_INFO.profilePhoto;
  });
  const [photoFocus, setPhotoFocus] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('nani_photo_focus') || 'center 22%';
    }
    return 'center 22%';
  });

  const handleSavePhoto = (newPhotoUrl: string, focusAlign?: string) => {
    setProfilePhoto(newPhotoUrl);
    if (focusAlign) {
      setPhotoFocus(focusAlign);
    }
    try {
      localStorage.setItem('nani_custom_profile_photo', newPhotoUrl);
      if (focusAlign) {
        localStorage.setItem('nani_photo_focus', focusAlign);
      }
    } catch (err) {
      console.error('Failed to cache profile photo', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-slate-900 selection:bg-sky-500/20 selection:text-sky-800 relative overflow-x-hidden font-sans">
      {/* Sleek Interface Ambient Light Orbs for Clean Light Background */}
      <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-400/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-400/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)} 
        profilePhoto={profilePhoto}
        photoFocus={photoFocus}
        onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
      />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
          profilePhoto={profilePhoto}
          photoFocus={photoFocus}
          onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
        />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <SkillsSection />
        <Achievements />
        <Certifications />
        <Leadership />
        <Education />
        <Contact 
          profilePhoto={profilePhoto}
          photoFocus={photoFocus}
          onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profilePhoto={profilePhoto}
        photoFocus={photoFocus}
      />

      <PhotoUploadModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        currentPhoto={profilePhoto}
        currentFocus={photoFocus}
        onSavePhoto={handleSavePhoto}
      />
    </div>
  );
}

