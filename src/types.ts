export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'UAV & Aerospace' | 'Advanced Mechanics' | 'Product Design & Patent' | 'Robotics';
  status: 'Completed' | 'Patent Ongoing' | 'In Development';
  summary: string;
  description: string;
  keyHighlights: string[];
  cadTools: string[];
  fabricationMethods: string[];
  metrics?: { label: string; value: string }[];
  accentColor: string;
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  organizer: string;
  date: string;
  rank: '1st Prize' | '2nd Prize' | 'Best Innovation' | 'Winner';
  description?: string;
  badgeType: 'gold' | 'silver' | 'special';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: 'Certification' | 'Internship' | 'Workshop' | 'Social Impact';
  highlight?: string;
}

export interface SkillCategory {
  categoryName: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: number; // 1-100
    experience: string;
    tag?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  board: string;
  period: string;
  score: string;
  highlights: string[];
}

export interface ResponsibilityItem {
  role: string;
  organization: string;
  type: string;
  responsibilities: string[];
}
