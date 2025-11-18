import { HeroTitleProps } from '@/types/hero.types';
import BlurText from '../ui/text-blur';

export function HeroTitle({ title }: HeroTitleProps) {
  return (
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight text-center font-host-grotesk">
      <BlurText text={title} delay={150} stepDuration={0.35} />
    </h1>
  );
}
