import { Project, Achievement, Certification, SkillCategory, EducationItem, ResponsibilityItem } from '../types';

export const PERSONAL_INFO = {
  name: 'NANI NAIK RAMAVATHU',
  shortName: 'Nani Naik',
  title: 'Mechanical Engineer & Innovation Specialist',
  tagline: 'Specializing in UAV Aerodynamics, 3D Prototyping, CAD Modelling & Smart Mechanics',
  email: 'naninayak925@gmail.com',
  phone: '+91 9391364385',
  linkedin: 'https://linkedin.com/in/nani-nayak-560822320',
  linkedinHandle: 'linkedin.com/in/nani-nayak-560822320',
  location: 'Andhra Pradesh, India',
  permanentAddress: 'Bangaramma Gutta Village, Darsi, Prakasam District, Andhra Pradesh – 523247',
  careerObjective:
    'Driven Mechanical Engineering student eager to apply technical knowledge, innovation, and problem-solving skills in a dynamic organization while contributing to its growth and success and gaining valuable industry experience.',
  aboutBio:
    'Aspiring mechanical engineer currently pursuing B.Tech at Narasaraopeta Engineering College (JNTUK) with an 8.17 CGPA. Proven track record across 7+ state and national-level technical awards, including the prestigious Best Innovation Project Award at National IP Yatra and 2nd Prize at the AICTE IDE Bootcamp. Experienced in custom RC plane & micro-drone fabrication, smart non-Newtonian nano-fluid safety systems, and patent-pending interactive educational mechanisms.',
  languages: ['English', 'Telugu', 'Hindi'],
  stats: [
    { label: 'Academic CGPA', value: '8.17', sub: 'B.Tech Mechanical (JNTUK)' },
    { label: 'Awards & Honors', value: '7+', sub: 'National & State Level Wins' },
    { label: 'Workshops & Certs', value: '10+', sub: 'NPTEL, CITD, AICTE, IARE' },
    { label: 'Active Patent', value: '1', sub: 'Educational 3D Cube' },
  ],
  profilePhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
};

export const PROJECTS: Project[] = [
  {
    id: 'rc-plane-drone',
    title: 'Fabrication of RC Plane & Micro Drone',
    subtitle: 'Aerodynamic prototyping, flight avionics & autonomous fabrication',
    category: 'UAV & Aerospace',
    status: 'Completed',
    summary:
      'Engineered, built, and flight-tested fixed-wing RC aircraft and micro quadcopters, focusing on lift-to-drag optimization, lightweight composite airframes, and responsive radio telemetry.',
    description:
      'Designed and fabricated a custom RC fixed-wing plane and micro drone from scratch. Gained deep hands-on expertise in aerodynamic airfoil selection, thrust-to-weight ratio calculations, brushless motor pairing, Electronic Speed Controller (ESC) calibration, LiPo power delivery, and flight stabilization troubleshooting. Conducted extensive flight tests and served as certified drone trainer for fellow engineers at JNTUK workshops.',
    keyHighlights: [
      'Custom aerofoil selection & balance analysis for fixed-wing stability at low stall speeds',
      'Micro-drone quadcopter frame fabrication utilizing lightweight 3D printed components and carbon mounts',
      'Avionics integration: 2.4GHz transmitter/receiver, 30A ESCs, and multi-axis gyroscope tuning',
      'Trainer certified by JNTUK for leading Drone & RC Aircraft workshops'
    ],
    cadTools: ['CATIA V5', 'Fusion 360', 'CURA 5.9.1'],
    fabricationMethods: ['FDM 3D Printing', 'Composite Layup & Foam Cutting', 'Soldering & Electronic Avionics'],
    metrics: [
      { label: 'Thrust Ratio', value: '2.1 : 1' },
      { label: 'Flight Stability', value: '99.4%' },
      { label: 'Airframe Weight', value: '380g' },
    ],
    accentColor: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'nano-fluid-speed-breaker',
    title: 'Nano Fluid-Based Smart Speed Breakers',
    subtitle: 'Shear-thickening fluid kinetic damping for intelligent road safety',
    category: 'Advanced Mechanics',
    status: 'Completed',
    summary:
      'Innovative smart speed breaker concept leveraging shear-thickening non-Newtonian nano-fluids to dynamically modulate resistance based on approaching vehicle velocity.',
    description:
      'Developed a revolutionary concept for road safety infrastructure utilizing dilatant nano-fluids. Unlike rigid speed breakers that damage vehicles travelling at lawful speeds, this smart barrier remains soft and compliant for low-speed vehicles, allowing gentle passage. At excessive impact velocities, the nano-particles instantly lock together via shear thickening, providing robust resistance to enforce speed limits and absorb impact energy safely.',
    keyHighlights: [
      'Engineered non-Newtonian dilatant fluid behavior under varying strain and shear rates',
      'Significant reduction in vehicle chassis stress and suspension shock for emergency vehicles & law-abiding drivers',
      'Kinetic energy dissipation analysis to improve urban and highway traffic safety',
      'Presented and awarded at regional and national research expos'
    ],
    cadTools: ['SolidWorks', 'Fusion 360', 'Fluid Rheology Simulation'],
    fabricationMethods: ['Hydraulic Chamber Prototyping', 'Elastomeric Seal Encapsulation', 'Nano-particle Dispersion'],
    metrics: [
      { label: 'Speed Sensitivity', value: 'Dynamic' },
      { label: 'Impact Absorption', value: '+45%' },
      { label: 'Chassis Wear Reduction', value: '~60%' },
    ],
    accentColor: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'educational-3d-cube',
    title: 'Educational 3D Cube Project',
    subtitle: 'Multi-degree-of-freedom interactive spatial learning mechanism',
    category: 'Product Design & Patent',
    status: 'Patent Ongoing',
    summary:
      'Currently in official patent application preparation. A patented mechanical design for interactive 3D spatial geometry learning, tactile STEM education, and kinematic visualization.',
    description:
      'Invented an educational 3D cube model engineered for interactive learning and spatial transformation. Designed fully in CAD software with high-tolerance interlocking hinges, compliant mechanisms, and internal lock-step gears. The physical prototypes were iteratively sliced and produced using CURA 5.9.1 and high-precision 3D printing. The patent application is officially under preparation.',
    keyHighlights: [
      'Official Patent Application currently under preparation / ongoing filing',
      'Precision interlocking mechanical tolerances designed within ±0.15mm',
      'Facilitates intuitive 3D spatial thinking, geometry decomposition, and kinesthetic learning',
      'Engineered for cost-effective mass additive manufacturing and modular expansion'
    ],
    cadTools: ['Fusion 360', 'CATIA V5', 'TINKERCAD', 'CURA 5.9.1'],
    fabricationMethods: ['FDM Rapid Prototyping', 'Compliant Mechanism Geometry', 'Print-in-Place Assembly'],
    metrics: [
      { label: 'Patent Status', value: 'Under Prep' },
      { label: 'Tolerance', value: '±0.15 mm' },
      { label: 'Interlocking Faces', value: '6-Axis' },
    ],
    accentColor: 'from-amber-500 to-orange-600',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Best Innovation Project Award',
    event: 'National IP Yatra (Two-Day National Program)',
    organizer: 'KL University & Ministry of MSME / IP Cell',
    date: '24th & 25th October 2025',
    rank: 'Best Innovation',
    description:
      'Awarded the coveted Best Innovation Project Award for presenting breakthrough engineering innovation at the National Intellectual Property (IP) Yatra summit.',
    badgeType: 'gold',
  },
  {
    id: 'ach-2',
    title: '2nd Prize in Innovation, Design & Entrepreneurship (IDE) Bootcamp',
    event: 'National IDE Bootcamp',
    organizer: 'All India Council for Technical Education (AICTE) & Ministry of Education',
    date: '6th – 10th April 2026',
    rank: '2nd Prize',
    description:
      'Secured 2nd position among nationwide collegiate innovators at Jawaharlal Nehru New College of Engineering, Shivamogga, showcasing validated product ideation, design thinking, and engineering feasibility.',
    badgeType: 'silver',
  },
  {
    id: 'ach-3',
    title: '1st Prize – Innovative Idea Contest',
    event: 'Institution’s Innovation Council Idea Contest',
    organizer: 'Narasaraopeta Engineering College (Autonomous)',
    date: '15th February 2025',
    rank: '1st Prize',
    description:
      'Won top honors for pioneering concept engineering and novel mechanical design solutions.',
    badgeType: 'gold',
  },
  {
    id: 'ach-4',
    title: '1st Prize – Paper Presentation Event',
    event: 'SAMKALP National Level Techno-Management Fest',
    organizer: 'SAMKALP Technical Committee',
    date: '28th March 2025',
    rank: '1st Prize',
    description:
      'Won 1st Prize for technical paper presentation addressing cutting-edge mechanical engineering advancements.',
    badgeType: 'gold',
  },
  {
    id: 'ach-5',
    title: '1st Prize – Mechmantra Event COLORIDO 2025',
    event: 'National Level Technical, Cultural & Sports Fest',
    organizer: 'Mechmantra 2k25',
    date: '21st March 2025',
    rank: '1st Prize',
    description:
      'Clinched 1st place in the flagship competitive mechanical symposium contest against collegiate engineering teams.',
    badgeType: 'gold',
  },
  {
    id: 'ach-6',
    title: '2nd Prize – Multi Project Expo Event',
    event: 'RISE FUSION 2026 National Level Fest',
    organizer: 'RISE Krishna Sai Prakasam Group of Institutions',
    date: '20th February 2026',
    rank: '2nd Prize',
    description:
      'Earned 2nd Prize for physical working prototype demonstration in the Multi Project Expo category.',
    badgeType: 'silver',
  },
  {
    id: 'ach-7',
    title: '1st Prize – Innovation IDEA Contest',
    event: 'Institution’s Innovation Council Annual Exhibition',
    organizer: 'Narasaraopeta Engineering College (Autonomous)',
    date: '11th October 2025',
    rank: '1st Prize',
    description:
      'Awarded first place for original technology invention and commercial application blueprint.',
    badgeType: 'gold',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    categoryName: 'CAD, Modelling & Slicing',
    iconName: 'Box',
    description: 'Precision parametric modeling, 3D assembly, kinematic tolerance design, and CNC/slicing simulation.',
    skills: [
      { name: 'CATIA V5', level: 90, experience: 'Part modeling, wireframe, surface drafting', tag: 'Advanced' },
      { name: 'Autodesk Fusion 360', level: 92, experience: 'Parametric CAD, generative shapes, rendering', tag: 'Expert' },
      { name: 'SolidWorks', level: 88, experience: '8-week certified internship, assemblies & motion study', tag: 'Certified' },
      { name: 'CURA 5.9.1 Software', level: 94, experience: 'Infill algorithms, layer adhesion, slicing presets', tag: 'Specialist' },
      { name: 'TINKERCAD', level: 95, experience: 'Rapid modular ideation, 3D geometry prototyping', tag: 'Proficient' },
    ],
  },
  {
    categoryName: 'Mechanical & Manufacturing',
    iconName: 'Wrench',
    description: 'Practical fabrication, UAV avionics assembly, additive manufacturing, and workshop testing.',
    skills: [
      { name: '3D Printing (FDM & SLA)', level: 95, experience: 'Bed leveling, filament tuning, post-processing', tag: 'Core Strength' },
      { name: 'RC Aircraft & Drone Fabrication', level: 94, experience: 'Airfoil crafting, ESC calibration, brushless motors', tag: 'Trainer Certified' },
      { name: 'Aerodynamics & Flight Mechanics', level: 86, experience: 'Lift, drag, CG balance, flight control tuning', tag: 'Advanced' },
      { name: 'Tool Design & CITD Manufacturing', level: 84, experience: 'Central Institute of Tool Design trained', tag: 'Certified' },
      { name: 'Hands-on Prototyping & Soldering', level: 90, experience: 'Electronic avionics, harness wiring, telemetry', tag: 'Skilled' },
    ],
  },
  {
    categoryName: 'Programming & Emerging Tech',
    iconName: 'Cpu',
    description: 'Software programming, IoT connected sensors, humanoid systems, and scientific computing.',
    skills: [
      { name: 'Python Programming', level: 82, experience: 'Algorithms, automation scripts, engineering math', tag: 'Proficient' },
      { name: 'Internet of Things (IoT)', level: 86, experience: 'NPTEL certified (Funded by MoE, Govt of India)', tag: 'Govt Certified' },
      { name: 'Robotics: BOT S1 & A2 Systems', level: 85, experience: 'Sensors, actuators, AI applications & kinematics', tag: 'Trained' },
      { name: 'Quantum Computing Fundamentals', level: 75, experience: 'Workshop at AICTE/MoE affiliated centers', tag: 'Workshop' },
    ],
  },
  {
    categoryName: 'Engineering Tools & Leadership',
    iconName: 'Award',
    description: 'Analytical documentation, presentation, data synthesis, and multidisciplinary team coordination.',
    skills: [
      { name: 'Microsoft Excel (Data Analytics)', level: 88, experience: 'Formulas, charts, experimental data analysis', tag: 'Advanced' },
      { name: 'Technical Paper Presentation', level: 92, experience: '1st Prize SAMKALP national presentation', tag: 'Awarded' },
      { name: 'MS Word & PowerPoint', level: 90, experience: 'Project documentation, patent dossiers, decks', tag: 'Skilled' },
      { name: 'Team Leadership & Mentorship', level: 92, experience: 'Drone Club Coordinator, IIC Student Coordinator', tag: 'Lead' },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    title: 'Drone & RC Plane Training Workshop – Trainer Certificate',
    issuer: 'Jawaharlal Nehru Technological University Kakinada (JNTUK)',
    date: 'Trainer Certificate',
    type: 'Certification',
    highlight: 'Authorized Trainer Certificate for instructing RC plane and drone aerodynamics',
  },
  {
    id: 'cert-2',
    title: 'SolidWorks Online Internship (8 Weeks)',
    issuer: 'Professional CAD Engineering Academy',
    date: '04/05/2026 – 27/06/2026',
    type: 'Internship',
    highlight: 'Comprehensive industrial training in complex part modelling, sheet metal, and assemblies',
  },
  {
    id: 'cert-3',
    title: 'Entrepreneurship-Cum-Skill Development Program (CITD)',
    issuer: 'Central Institute of Tool Design (CITD)',
    date: '19th February 2025 – 24th March 2025',
    type: 'Certification',
    highlight: 'Government recognized specialized skill development in modern tool engineering',
  },
  {
    id: 'cert-4',
    title: 'NPTEL - Internet of Things (IoT)',
    issuer: 'Funded by the MoE, Govt. of India',
    date: 'July – October 2025',
    type: 'Certification',
    highlight: 'National certification in embedded sensors, IoT protocols, and cloud telemetry',
  },
  {
    id: 'cert-5',
    title: 'RC & Drone Technology Internship (1 Week)',
    issuer: 'Institute of Aeronautical Engineering (IARE)',
    date: 'Specialized Internship',
    type: 'Internship',
    highlight: 'Rigorous intensive training in UAV flight dynamics, RC assembly, and telemetry testing',
  },
  {
    id: 'cert-6',
    title: 'Innovation, Design and Entrepreneurship (IDE) Bootcamp',
    issuer: 'AICTE & Ministry of Education, JNNCE Shivamogga',
    date: 'April 2026',
    type: 'Workshop',
    highlight: 'Selected for intensive national ideation, design thinking, and startup validation bootcamp',
  },
  {
    id: 'cert-7',
    title: 'National Startup Day – UDYAMOTSAV 2025',
    issuer: 'Ministry of MSME / Startup India',
    date: 'Participation Certificate 2025',
    type: 'Workshop',
    highlight: 'Honored participation in national entrepreneurial showcase',
  },
  {
    id: 'cert-8',
    title: 'National Level Vibe Coding Hackathon',
    issuer: 'National Technical Hackathon Committee',
    date: 'January 5 & 6th 2026',
    type: 'Certification',
    highlight: 'Fast-paced collaborative engineering and computational problem solving',
  },
  {
    id: 'cert-9',
    title: 'Introducing BOT S1 and A2 Humanoid Robot Workshop',
    issuer: 'Advanced Robotics Research Lab',
    date: 'Workshop Certificate',
    type: 'Workshop',
    highlight: 'Exposure to humanoid robot architecture, smart actuators, sensor feedback, and AI controls',
  },
  {
    id: 'cert-10',
    title: 'Introduction to Quantum Computing & Applications',
    issuer: 'Academic Research Forum',
    date: '24th June 2026',
    type: 'Workshop',
    highlight: 'Theoretical foundations of quantum circuits, qubits, and computational breakthroughs',
  },
  {
    id: 'cert-11',
    title: 'Community Services Project – Organic Farming in Rural Areas',
    issuer: 'Rural Development & Social Outreach Wing',
    date: '09/06/2025 – 02/08/2025',
    type: 'Social Impact',
    highlight: 'Hands-on community field program promoting sustainable agro-mechanisms and organic soil enrichment',
  },
  {
    id: 'cert-12',
    title: 'National IP Yatra Participation Certificate',
    issuer: 'KL University & Ministry of MSME',
    date: 'October 24th & 25th 2025',
    type: 'Workshop',
    highlight: 'Two-day national-level programme on intellectual property rights and patent strategy',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'B.Tech in Mechanical Engineering',
    field: 'Mechanical & Automation Engineering',
    institution: 'Narasaraopeta Engineering College (Autonomous)',
    board: 'JNTUK (Jawaharlal Nehru Technological University, Kakinada)',
    period: '2023 – 2027 (Expected)',
    score: '8.17 CGPA',
    highlights: [
      'Ranked among top academic performers with consistent distinction in core mechanics & CAD',
      'Student Coordinator for IIC, Drone Club, and Robotics & 3D Printing Club',
      'Led teams to multiple 1st Prize awards across national tech symposia',
    ],
  },
  {
    degree: 'Diploma in Mechanical Engineering',
    field: 'Mechanical Engineering',
    institution: 'RISE Krishna Sai Polytechnic',
    board: 'State Board of Technical Education and Training (SBTET)',
    period: '2020 – 2023',
    score: '73%',
    highlights: [
      'Comprehensive foundation in workshop practice, machine drawing, thermal engineering, and mechanics',
      'Active participant in regional engineering design contests and project exhibitions',
    ],
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    field: 'High School General Sciences & Mathematics',
    institution: 'Sri Vani High School',
    board: 'Board of Secondary Education (SSC AP)',
    period: '2018',
    score: '7.0 GPA',
    highlights: [
      'Solid mathematical and physical science grounding with keen interest in aeronautical models',
    ],
  },
];

export const RESPONSIBILITIES: ResponsibilityItem[] = [
  {
    role: 'Student Coordinator',
    organization: "Institution's Innovation Council (IIC)",
    type: 'Campus Leadership & Entrepreneurship',
    responsibilities: [
      'Spearheading innovation competitions, patent literacy workshops, and startup pitching contests',
      'Liaising with faculty, incubation cells, and external industry delegates',
      'Promoting student invention pipelines resulting in institutional recognition and awards',
    ],
  },
  {
    role: 'Student Coordinator',
    organization: 'Drone & RC Plane Club, Robotics & 3D Printing Club',
    type: 'Technical & Fabrication Leadership',
    responsibilities: [
      'Conducting hands-on workshops on RC plane construction, airfoil dynamics, and flight controls',
      'Training and mentoring junior students in FDM 3D printing, slicer calibration, and CAD modeling',
      'Managing laboratory 3D printers, drone electronics, safety protocols, and testing sessions',
    ],
  },
  {
    role: 'Member & Hardware Lead',
    organization: 'ClonoFusion Startup Team',
    type: 'College Startup Venture',
    responsibilities: [
      'Collaborating on hardware rapid prototyping, mechanical design iterations, and market validation',
      'Contributing to multi-disciplinary product testing and pitch deck preparation for investors',
    ],
  },
];
