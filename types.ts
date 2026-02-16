export interface Project {
  id: string;
  year: string;
  title: string;
  description: string;
  tags?: string[];
  links: {
    label: string;
    url: string;
    type?: 'github' | 'demo' | 'paper';
  }[];
  type: string; // e.g., "Independent Research Project", "Course Project"
}

export interface NewsItem {
  id: string;
  date: string;
  content: string;
  link?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: 'mail' | 'github' | 'linkedin' | 'file-text';
}