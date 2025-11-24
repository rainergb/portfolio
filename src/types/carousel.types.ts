export interface Skill {
  id: string;
  name: string;
  title: string;
  badges: string[];
  imageSrc: string;
  altText?: string;
}

export interface HardSkillsProps {
  skills: Skill[];
}

export interface SoftSkillsProps {
  skills: Skill[];
}

export interface CarouselProps {
  title?: string;
}
