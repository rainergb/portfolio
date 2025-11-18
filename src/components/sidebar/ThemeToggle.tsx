'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { useState } from 'react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Use layoutEffect to set mounted after first render
  if (typeof window !== 'undefined' && !mounted) {
    setMounted(true);
  }

  if (!mounted) {
    return (
      <button
        className="relative w-8 h-8 flex items-center justify-center text-foreground transition-colors duration-300"
        aria-label="Toggle theme"
        disabled
      >
        <div className="relative w-5 h-5">
          <svg
            className="absolute inset-0 w-5 h-5 opacity-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
          </svg>
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-8 h-8 flex items-center justify-center text-foreground hover:text-[#02a0ff] transition-colors duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        {/* Sun icon */}
        <svg
          className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${
            theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-180 scale-0'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
        </svg>
        
        {/* Moon icon */}
        <svg
          className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-180 scale-0'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </div>
    </button>
  );
}
