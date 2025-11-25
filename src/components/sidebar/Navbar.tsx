'use client';

import { useState, useEffect } from 'react';
import { NavbarProps } from '@/types/navbar.types';
import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { LanguageSelector } from './LanguageSelector';
import { ThemeToggle } from './ThemeToggle';
import { useLanguage } from '@/contexts/LanguageContext';

export function Navbar({ logo, languageSelector = true }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink] = useState('Home');
  const { t } = useLanguage();

  const links = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.portfolio'), href: '#portfolio' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.contact'), href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 pt-8">
      <div
        className={`mx-auto rounded-2xl transition-all duration-700 ease-in-out ${
          isScrolled
            ? "bg-gray-900/40 backdrop-blur-lg border border-border/50 py-4 px-4 shadow-lg max-w-[1050px]"
            : "bg-transparent py-6 px-16 max-w-[2000px] -mt-5"
        }`}
      >
        <div
          className={`flex items-center transition-all duration-900 ease-in-out ${
            isScrolled ? "justify-center gap-32" : "justify-between"
          }`}
        >
          <div className="shrink-0">
            <Logo src={logo.src} alt={logo.alt} isScrolled={isScrolled} />
          </div>

          <div className="flex items-center gap-12">
            {links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={activeLink === link.label}
              />
            ))}
          </div>

          {languageSelector && (
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
