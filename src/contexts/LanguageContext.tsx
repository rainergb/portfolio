'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hi, I am',
    'hero.name': 'Rainer Drummond',
    'hero.title': 'Developer for Business. Designer for People.',
    'hero.cta': 'View Services',
    'hero.contact': 'Get in Touch',
    
    // Language Selector
    'lang.english': 'English',
    'lang.portuguese': 'Português',
  },
  pt: {
    // Navbar
    'nav.home': 'Início',
    'nav.portfolio': 'Portfólio',
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.contact': 'Contato',
    
    // Hero Section
    'hero.greeting': 'Olá, eu sou',
    'hero.name': 'Rainer Drummond',
    'hero.title': 'Dev. para Negócios. Designer para Pessoas.',
    'hero.cta': 'Ver Serviços',
    'hero.contact': 'Entre em Contato',
    
    // Language Selector
    'lang.english': 'English',
    'lang.portuguese': 'Português',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
