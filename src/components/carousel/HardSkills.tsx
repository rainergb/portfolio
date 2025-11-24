'use client';
import TiltedCard from '@/components/TiltedCard';
import { HardSkillsProps } from '@/types/carousel.types';

export function HardSkills({ skills }: HardSkillsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill) => (
        <TiltedCard
          key={skill.id}
          imageSrc={skill.imageSrc}
          altText={skill.altText || skill.name}
          captionText={skill.name}
          containerHeight="200px"
          containerWidth="100%"
          imageHeight="200px"
          imageWidth="200px"
          scaleOnHover={1.05}
          rotateAmplitude={10}
          showMobileWarning={false}
          showTooltip={true}
        />
      ))}
    </div>
  );
}
