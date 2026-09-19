export type ExperienceCategory = 'all' | 'planning' | 'academic' | 'practice';

export interface ExperienceItem {
  id: string;
  institution: string;
  role: string;
  period: string;
  category: 'planning' | 'academic' | 'practice';
  location?: string;
  consultancyOrAffiliation?: string;
  responsibilities: string[];
  subjectsOrFocus?: string[];
  additionalResponsibility?: string;
  highlightBadge?: string;
}

export interface ExpertiseItem {
  number: string;
  title: string;
  category: 'City Planning' | 'Architecture' | 'Academic & Research';
  description: string;
  keyTopics: string[];
  iconName: string;
  image?: string | null;
  imageAlt?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  gradeScore?: string;
  details?: string;
}

export interface RegistrationItem {
  organization: string;
  shortName: string;
  location: string;
  registrationNumber: string;
  designationOrType?: string;
}

export interface RecognitionItem {
  title: string;
  conferringBody: string;
  year?: string;
  description: string;
}
