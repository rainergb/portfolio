'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = [
    { code: 'en' as const, flag: '/usa.jpg' },
    { code: 'pt' as const, flag: '/br.jpg' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.15em] text-foreground transition-colors duration-300 hover:text-[#02a0ff] font-aldrich"
      >
        <Image 
          src={currentLanguage?.flag || '/usa.jpg'} 
          alt={language === 'en' ? 'USA Flag' : 'Brazil Flag'}
          width={20}
          height={14}
          className="object-cover rounded-sm"
        />
        <span>{language.toUpperCase()}</span>
        <svg
          width="10"
          height="6"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path
            d="M1 1L6 6L11 1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-background border border-[#02a0ff]/20 rounded-lg overflow-hidden shadow-lg shadow-[#02a0ff]/10 min-w-[150px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors duration-200 ${
                language === lang.code
                  ? 'bg-[#02a0ff]/10 text-[#02a0ff]'
                  : 'text-foreground hover:bg-[#02a0ff]/5 hover:text-[#02a0ff]'
              }`}
            >
              <Image 
                src={lang.flag} 
                alt={lang.code === 'en' ? 'USA Flag' : 'Brazil Flag'}
                width={20}
                height={14}
                className="object-cover rounded-sm"
              />
              <span className="font-host-grotesk">
                {lang.code === 'en' ? t('lang.english') : t('lang.portuguese')}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
