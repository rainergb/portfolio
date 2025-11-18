import { IntroTextProps } from '@/types/hero.types';
import BlurText from '../ui/text-blur';

export function IntroText({ greeting, name }: IntroTextProps) {
  return (
    <div className="text-foreground/90 uppercase tracking-wide text-sm md:text-base text-left">
      <BlurText 
        text={greeting}
        textAlign="left"
        fontFamily='Aldrich'
        delay={50} 
        stepDuration={0.25}
        className="font-light"
      />
      <BlurText 
        text={name} 
        delay={100} 
        fontFamily='Aldrich'
        stepDuration={0.3}
        className="font-semibold"
      />
    </div>
  );
}
