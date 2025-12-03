export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl?: string;
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  year: string;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  imageUrl: string;
}

export enum SectionType {
  ABOUT = 'About',
  EDUCATION = 'Education',
  PROJECTS = 'Projects',
  SKILLS = 'Skills',
  CERTIFICATES = 'Certificates',
  CONTACT = 'Contact'
}

export interface SectionData {
  id: SectionType;
  title: string;
  subtitle: string;
  iconName: 'User' | 'GraduationCap' | 'Code2' | 'Cpu' | 'FileBadge' | 'Mail';
  gradient: string;
}