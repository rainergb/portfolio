'use client';

import Image from "next/image";

interface LogoProps {
  src: string;
  alt: string;
  isScrolled: boolean;
}

export function Logo({ src, alt, isScrolled }: LogoProps) {
  return (
    <div
      className={`transition-all duration-300 ${
        isScrolled ? "w-8 h-8" : "w-10 h-10"
      }`}
    >
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
