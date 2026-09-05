import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Award, CheckCircle2, QrCode } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, ACHIEVEMENTS, EDUCATION, CERTIFICATIONS, RESPONSIBILITIES } from '../../data/portfolioData';

interface AtsResumeSheetProps {
  profilePhoto?: string;
  photoFocus?: string;
}

export const AtsResumeSheet: React.FC<AtsResumeSheetProps> = ({
  profilePhoto,
  photoFocus = 'center 22%',
}) => {
  return (
    <div
      id="printable-resume-sheet"
      className="bg-white text-slate-900 font-sans p-6 sm:p-10 max-w-4xl mx-auto rounded-xl shadow-2xl border border-slate-300 space-y-6 text-sm leading-relaxed"
    >
      {/* 1. Candidate Header */}
      <div className="border-b-2 border-slate-900 pb-5">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-5">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 border-slate-900 bg-slate-100 shrink-0 shadow-md">
              <img
                src={profilePhoto || PERSONAL_INFO.profilePhoto}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                style={{ objectPosition: photoFocus }}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 uppercase">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-bold text-slate-800 mt-0.5">
                Mechanical Design Engineer • UAV Prototyping Specialist • CAD Innovator
              </p>
              <p className="text-xs text-slate-600 mt-0.5 font-medium">
                Targeting: Product Support Engineer | Mechanical Design Engineer | UAV Engineer | GET
              </p>
              <div className="mt-1.5 inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-slate-100 border border-slate-300 text-xs font-mono font-bold text-slate-900">
                <span>Academic Distinction:</span>
                <span className="text-blue-700">8.17 CGPA</span>
                <span className="text-slate-500">• B.Tech Mechanical (JNTUK)</span>
              </div>
            </div>
          </div>

          {/* Contact Coordinates */}
          <div className="text-xs text-slate-700 space-y-1 font-mono shrink-0 text-center sm:text-right">
            <p><strong>Mobile:</strong> {PERSONAL_INFO.phone}</p>
            <p><strong>Email:</strong> {PERSONAL_INFO.email}</p>
            <p><strong>LinkedIn:</strong> {PERSONAL_INFO.linkedinHandle}</p>
            <p><strong>Location:</strong> {PERSONAL_INFO.location}</p>
            <p className="text-[11px] text-slate-500 font-sans">Citizenship: Indian • Ready to Relocate</p>
          </div>
        </div>
      </div>

      {/* 2. Professional Summary */}
      <section className="space-y-1.5 page-break-avoid">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b-2 border-slate-900 pb-0.5 flex items-center justify-between">
          <span>Professional Summary</span>
          <span className="text-[10px] font-mono text-slate-500 font-normal">Core Mechanical & Systems Engineering</span>
        </h2>
        <p className="text-xs text-slate-800 leading-relaxed text-justify">
          High-achieving Mechanical Engineering graduate (8.17 CGPA, JNTUK) with demonstrated expertise in UAV aerodynamics, precision CAD design, kinematic mechanism invention, and additive manufacturing. Winner of the prestigious <strong>Best Innovation Project Award</strong> at National IP Yatra and <strong>2nd Prize</strong> at the AICTE IDE Bootcamp. Proven track record in rapid prototyping with CURA 5.9.1, SolidWorks, CATIA V5, and Fusion 360. Inventor of patent-pending educational kinematic mechanism and dilatant non-Newtonian nano-fluid safety systems. Experienced student coordinator leading collegiate innovation councils and drone workshops.
        </p>
      </section>

      {/* 3. Education Table */}
      <section className="space-y-2 page-break-avoid">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b-2 border-slate-900 pb-0.5">
          Academic Qualifications
        </h2>
        <table className="w-full text-xs text-left border border-slate-400">
          <thead className="bg-slate-100 font-bold border-b border-slate-400">
            <tr>
              <th className="p-2 border-r border-slate-400">Qualification</th>
              <th className="p-2 border-r border-slate-400">Year</th>
              <th className="p-2 border-r border-slate-400">Institution</th>
              <th className="p-2 border-r border-slate-400">Board / University</th>
              <th className="p-2">Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-300">
            <tr>
              <td className="p-2 border-r border-slate-300 font-semibold">B.Tech in Mechanical Engineering</td>
              <td className="p-2 border-r border-slate-300">2023 – 2027</td>
              <td className="p-2 border-r border-slate-300">Narasaraopeta Engineering College (Autonomous)</td>
              <td className="p-2 border-r border-slate-300">JNTUK</td>
              <td className="p-2 font-bold text-slate-950">8.17 CGPA (Distinction)</td>
            </tr>
            <tr>
              <td className="p-2 border-r border-slate-300 font-semibold">Diploma in Mechanical Engineering</td>
              <td className="p-2 border-r border-slate-300">2020 – 2023</td>
              <td className="p-2 border-r border-slate-300">RISE Krishna Sai Polytechnic</td>
              <td className="p-2 border-r border-slate-300">SBTET</td>
              <td className="p-2 font-bold text-slate-950">73.0%</td>
            </tr>
            <tr>
              <td className="p-2 border-r border-slate-300 font-semibold">Secondary School Certificate (SSC)</td>
              <td className="p-2 border-r border-slate-300">2018</td>
              <td className="p-2 border-r border-slate-300">Sri Vani High School</td>
              <td className="p-2 border-r border-slate-300">SSC AP</td>
              <td className="p-2 font-bold text-slate-950">7.0 GPA</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 4. Categorized Technical Skills */}
      <section className="space-y-1.5 page-break-avoid">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b-2 border-slate-900 pb-0.5">
          Technical Skills & Engineering Competencies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-800">
          <p>
            <strong>CAD & Modeling:</strong> Autodesk Fusion 360, CATIA V5, SolidWorks (Certified), TINKERCAD
          </p>
          <p>
            <strong>Manufacturing & Prototyping:</strong> 3D Printing (FDM/SLA), CURA 5.9.1 Slicing, CITD Tool Engineering
          </p>
          <p>
            <strong>UAV & Avionics:</strong> RC Plane & Drone Fabrication, ESC Calibration, Radio Telemetry, Airfoil Design
          </p>
          <p>
            <strong>Programming & IoT:</strong> Python, C / Embedded Logic, IoT Sensors (NPTEL Govt Certified)
          </p>
          <p>
            <strong>Engineering Tools:</strong> MS Excel (Engineering Regression & Models), Technical Documentation, Git
          </p>
          <p>
            <strong>Kinematics & Mechanics:</strong> Non-Newtonian Fluid Rheology, Mechanical Tolerancing (±0.15mm)
          </p>
        </div>
      </section>

      {/* 5. Key Engineering Projects */}
      <section className="space-y-2 page-break-avoid">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b-2 border-slate-900 pb-0.5">
          Key Engineering Projects & Research Prototypes
        </h2>
        <div className="space-y-3 text-xs text-slate-800">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-950">
                1. Fabrication of RC Plane & Micro Drone (UAV & Avionics)
              </h3>
              <span className="font-mono text-[11px] text-slate-600 font-semibold">Completed & Flight-Tested</span>
            </div>
            <p className="text-slate-700 mt-0.5 leading-relaxed pl-3">
              Engineered and flight-tested fixed-wing RC plane and multi-rotor micro drone from raw airframe materials. Optimized lift-to-drag ratio through custom aerofoil geometry and lightweight composite reinforcement. Tuned 2.4GHz avionics, 30A brushless ESCs, LiPo power systems, and multi-axis gyroscope stability (Thrust Ratio: 2.1:1, Flight Stability: 99.4%). Served as certified JNTUK drone trainer.
            </p>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-950">
                2. Nano Fluid-Based Smart Speed Breakers (Advanced Dynamics)
              </h3>
              <span className="font-mono text-[11px] text-slate-600 font-semibold">Research Expo Winner</span>
            </div>
            <p className="text-slate-700 mt-0.5 leading-relaxed pl-3">
              Formulated shear-thickening non-Newtonian dilatant fluid dampers that dynamically yield under low vehicle speeds while hardening on high-velocity impact. Resulted in 45% shock absorption enhancement, mitigating vehicle chassis fatigue by ~60% and improving emergency vehicle transit safety. Modeled in SolidWorks & Fusion 360.
            </p>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-950">
                3. Educational 3D Cube Mechanism (Kinematics & Spatial Design)
              </h3>
              <span className="font-mono text-[11px] text-amber-700 font-bold">Patent Application Under Preparation</span>
            </div>
            <p className="text-slate-700 mt-0.5 leading-relaxed pl-3">
              Invented multi-degree-of-freedom transformational kinematic cube for spatial STEM learning. Engineered custom interlocking compliant hinges with ±0.15mm tolerance limits. Prototyped using CURA 5.9.1 slicing algorithms and high-precision FDM additive manufacturing. Official patent application actively being filed.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Achievements & Honors */}
      <section className="space-y-1.5 page-break-avoid">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b-2 border-slate-900 pb-0.5">
          Major Awards & Distinctions
        </h2>
        <ul className="text-xs text-slate-800 space-y-1 list-disc pl-4">
          <li>
            <strong>Best Innovation Project Award:</strong> National IP Yatra summit, organized by KL University & Ministry of MSME / IP Cell (Oct 2025).
          </li>
          <li>
            <strong>2nd Prize – National IDE Bootcamp:</strong> All India Council for Technical Education (AICTE) & Ministry of Education, JNNCE Shivamogga (Apr 2026).
          </li>
          <li>
            <strong>2nd Prize – Multi Project Expo:</strong> RISE FUSION 2026 National Level Technical Fest (Feb 2026).
          </li>
          <li>
            <strong>1st Prize – Technical Paper Presentation:</strong> SAMKALP National Level Techno-Management Fest (Mar 2025).
          </li>
          <li>
            <strong>1st Prize – Mechmantra Event COLORIDO 2025:</strong> National Level Mechanical Engineering Symposium (Mar 2025).
          </li>
          <li>
            <strong>1st Prize – Innovative Idea Contest:</strong> Institution’s Innovation Council, NEC Autonomous (Feb 2025 & Oct 2025).
          </li>
        </ul>
      </section>

      {/* 7. Leadership Roles & Certifications */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 page-break-avoid">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b-2 border-slate-900 pb-0.5 mb-1.5">
            Positions of Responsibility
          </h2>
          <ul className="text-xs text-slate-800 space-y-1 list-disc pl-4">
            <li><strong>Student Coordinator:</strong> Institution's Innovation Council (IIC)</li>
            <li><strong>Student Coordinator & Trainer:</strong> Drone Club, Robotics & 3D Printing Club</li>
            <li><strong>Hardware Lead:</strong> ClonoFusion Startup Team (College Incubation)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b-2 border-slate-900 pb-0.5 mb-1.5">
            Key Certifications & Internships
          </h2>
          <ul className="text-xs text-slate-800 space-y-1 list-disc pl-4">
            <li><strong>Drone Trainer Certificate:</strong> JNTUK Authorized Trainer</li>
            <li><strong>SolidWorks Internship (8 Weeks):</strong> Professional CAD Academy</li>
            <li><strong>CITD Tool Design:</strong> Central Institute of Tool Design</li>
            <li><strong>NPTEL IoT Certification:</strong> Funded by MoE, Govt. of India</li>
            <li><strong>UAV & Drone Internship:</strong> Institute of Aeronautical Eng (IARE)</li>
          </ul>
        </div>
      </section>

      {/* 8. Personal Details & Formal Declaration */}
      <section className="pt-2 border-t border-slate-300 space-y-2 text-xs text-slate-700 page-break-avoid">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
          <p><strong>Father's Name:</strong> (Late) Srinu Naik Ramavathu</p>
          <p><strong>Date of Birth:</strong> 15-08-2002</p>
          <p><strong>Languages Known:</strong> English, Telugu, Hindi</p>
          <p><strong>Permanent Address:</strong> Bangaramma Gutta Village, Darsi, Prakasam District, AP – 523247</p>
        </div>

        <div className="pt-3 flex items-end justify-between text-[11px] text-slate-600 font-mono">
          <div>
            <p>Place: Narasaraopet</p>
            <p>Date: {new Date().toLocaleDateString('en-GB')}</p>
          </div>
          <div className="text-right">
            <span className="font-serif italic font-bold text-slate-900 block text-sm">
              R. Nani Naik
            </span>
            <span>(Signature of Candidate)</span>
          </div>
        </div>
      </section>
    </div>
  );
};
