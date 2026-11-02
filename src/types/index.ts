export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  keyFeatures: string[];
  problemStatement: string;
  solutionHighlight: string;
  liveUrl?: string;
  githubUrl?: string;
  status: 'completed' | 'in-development' | 'planned';
  year: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Array<{
    name: string;
    level?: string;
    icon?: string;
    highlight?: boolean;
  }>;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  scoreLabel: string;
  scoreValue: string;
  boardOrDetails?: string;
  highlightCoursework?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialNote?: string;
  badge?: string;
}

export interface PhilosophyItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}
