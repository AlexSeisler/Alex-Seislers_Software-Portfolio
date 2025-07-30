export interface ProjectType {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  imageUrl: string;
  images: string[];
  tags: string[];
  duration: string;
  skills: string[];
  challenges: string[];
  outcomes: string[];
  liveUrl?: string; // Optional live website URL
  githubUrl?: string; // Optional GitHub repository URL
}