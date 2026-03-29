export interface Project {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  category: string[];
  starred?: boolean; 
  shortDesc: string;
  fullContent: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: string;
}