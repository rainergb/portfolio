import { ProfileImage } from '@/components/ProfileImage';
import { IntroText } from '@/components/IntroText';
import { HeroTitle } from '@/components/HeroTitle';
import { AnimatedButton } from '@/components/AnimatedButton';
import DotGrid from '@/components/dot-bg';
import { HeroSectionProps } from '@/types/hero.types';
import { FiArrowRight } from 'react-icons/fi';

export function HeroSection({
  profileImage,
  greeting,
  name,
  title,
  ctaText,
  ctaHref = '#services'
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6 py-20">
      <DotGrid
        dotSize={4}
        gap={32}
        baseColor="#333333"
        activeColor="#5227FF"
        proximity={150}
        speedTrigger={100}
        shockRadius={250}
        shockStrength={5}
        className="opacity-50"
      />
      <div className="relative z-10 max-w-7xl w-full flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 mb-4">
          <ProfileImage src={profileImage.src} alt={profileImage.alt} />
          <IntroText greeting={greeting} name={name} />
        </div>
        
        <div className="mb-12">
          <HeroTitle title={title} />
        </div>
        
        <AnimatedButton 
          text={ctaText} 
          href={ctaHref}
          icon={<FiArrowRight />}
          variant="outline"
          delay={0.75}
          className='font-(--font-aldrich)' 
        />
      </div>
    </section>
  );
}
