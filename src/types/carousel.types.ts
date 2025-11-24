export interface Skill {
  id: string;
  name: string;
  title: string;
  softSkills: string[];
  hardSkills: string[];
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

export interface CarouselControlsProps {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev: () => void;
  onNext: () => void;
}

export interface ProjectInfoProps {
  title: string;
  name: string;
  softSkills: string[];
  hardSkills: string[];
}

export interface BadgeProps {
  label: string;
  variant: "soft" | "hard";
}
