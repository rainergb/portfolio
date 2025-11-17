'use client';
import Link from 'next/link';
import { motion } from 'motion/react';
import { AnimatedButtonProps } from '@/types/animated-button.types';

export function AnimatedButton({
  text = 'Click me',
  onClick,
  href,
  className = '',
  icon,
  variant = 'primary',
  delay = 0
}: AnimatedButtonProps) {
  const baseClasses = 'relative px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm transition-all duration-300 flex items-center gap-2 overflow-hidden group';
  
  const variantClasses = {
    primary: 'bg-white text-black border-2 border-white hover:bg-transparent hover:text-white',
    secondary: 'bg-[#5227FF] text-white border-2 border-[#5227FF] hover:bg-transparent hover:text-[#5227FF]',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-black'
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
        {text}
      </span>
      {icon && (
        <motion.span
          className="relative z-10"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.span>
      )}
      <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
    </>
  );

  if (href) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href={href} className={buttonClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonClasses}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  );
}
