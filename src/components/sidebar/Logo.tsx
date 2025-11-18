'use client';

interface LogoProps {
  src: string;
  alt: string;
  isScrolled: boolean;
}

export function Logo({ src, alt, isScrolled }: LogoProps) {
  return (
    <div
      className={`transition-all duration-300 ${
        isScrolled ? 'w-8 h-8' : 'w-10 h-10'
      }`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
