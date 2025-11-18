'use client';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ProfileImageProps } from '@/types/hero.types';

export function ProfileImage({ src, alt, size = 80 }: ProfileImageProps) {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        delay: 0
      }}
    >
      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-foreground/10">
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}
