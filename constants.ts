import { Certificate, EducationItem, Project, SectionType, SkillCategory, SectionData } from './types';

export const SECTIONS = [
  SectionType.ABOUT,
  SectionType.EDUCATION,
  SectionType.PROJECTS,
  SectionType.SKILLS,
  SectionType.CERTIFICATES,
  SectionType.CONTACT
];

// Aesthetic: Cyberpunk / Luxury Dark Mode
export const SECTION_DATA: SectionData[] = [
  {
    id: SectionType.ABOUT,
    title: 'Identity',
    subtitle: 'The Human Element',
    iconName: 'User',
    gradient: 'from-slate-700 to-slate-900'
  },
  {
    id: SectionType.EDUCATION,
    title: 'Academia',
    subtitle: 'Knowledge Acquisition',
    iconName: 'GraduationCap',
    gradient: 'from-blue-900 to-slate-900'
  },
  {
    id: SectionType.PROJECTS,
    title: 'Creations',
    subtitle: 'System Deployments',
    iconName: 'Code2',
    gradient: 'from-emerald-900 to-slate-900'
  },
  {
    id: SectionType.SKILLS,
    title: 'Arsenal',
    subtitle: 'Technical Capacities',
    iconName: 'Cpu',
    gradient: 'from-purple-900 to-slate-900'
  },
  {
    id: SectionType.CERTIFICATES,
    title: 'Accolades',
    subtitle: 'Verified Achievements',
    iconName: 'FileBadge',
    gradient: 'from-amber-900 to-slate-900'
  },
  {
    id: SectionType.CONTACT,
    title: 'Connect',
    subtitle: 'Initiate Handshake',
    iconName: 'Mail',
    gradient: 'from-cyan-900 to-slate-900'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI Pathfinding Visualizer',
    description: 'An interactive web application visualizing various pathfinding algorithms like A*, Dijkstra, and BFS in real-time. Built with React and TypeScript.',
    tags: ['React', 'TypeScript', 'Algorithms'],
    imageUrl: 'https://picsum.photos/600/400?random=1',
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com'
  },
  {
    id: '2',
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive dashboard for managing products, orders, and analytics. Features dark mode, charts, and real-time data updates.',
    tags: ['Next.js', 'Tailwind', 'Recharts'],
    imageUrl: 'https://picsum.photos/600/400?random=2',
    githubUrl: 'https://github.com'
  },
  {
    id: '3',
    title: 'Neural Network from Scratch',
    description: 'A deep learning library implemented in Python using only NumPy. achieved 98% accuracy on MNIST dataset.',
    tags: ['Python', 'NumPy', 'Math'],
    imageUrl: 'https://picsum.photos/600/400?random=3',
    githubUrl: 'https://github.com'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: '1',
    school: 'University of Technology',
    degree: 'B.S. Computer Science',
    year: '2021 - Present',
    achievements: [
      'Dean\'s List 2022, 2023',
      'President of Coding Club',
      'GPA: 3.9/4.0'
    ]
  },
  {
    id: '2',
    school: 'Tech High School',
    degree: 'High School Diploma',
    year: '2017 - 2021',
    achievements: [
      'Valedictorian',
      'National Math Olympiad Finalist'
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'C++', 'SQL']
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Redux', 'HTML5/CSS3']
  },
  {
    category: 'Backend & Tools',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'Git', 'Docker', 'AWS']
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: '1',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Aug 2023',
    imageUrl: 'https://picsum.photos/100/100?random=10'
  },
  {
    id: '2',
    name: 'Meta Front-End Developer',
    issuer: 'Coursera',
    date: 'Jan 2023',
    imageUrl: 'https://picsum.photos/100/100?random=11'
  },
  {
    id: '3',
    name: 'Advanced Python',
    issuer: 'Udemy',
    date: 'Dec 2022',
    imageUrl: 'https://picsum.photos/100/100?random=12'
  }
];
