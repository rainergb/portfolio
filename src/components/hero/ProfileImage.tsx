'use client';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ProfileImageProps } from '@/types/hero.types';

export function ProfileImage({ src, alt, size = 80 }: ProfileImageProps) {
  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: 0
      }}
    >
      <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-foreground/10">
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-transparent group-hover:bg-[#02a0ff]/30 transition-all duration-300 rounded-full" />
      </div>
    </motion.div>
  );
}
