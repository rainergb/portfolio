export interface ProfileImageProps {
  src: string;
  alt: string;
  size?: number;
}

export interface IntroTextProps {
  greeting: string;
  name: string;
}

export interface HeroTitleProps {
  title: string;
}

export interface CTAButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
}

export interface HeroSectionProps {
  profileImage: {
    src: string;
    alt: string;
  };
  greeting: string;
  name: string;
  title: string;
  ctaText: string;
  ctaHref?: string;
}
