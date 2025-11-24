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
    "nav.home": "Home",
    "nav.portfolio": "Portfolio",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Hi, I am",
    "hero.name": "Rainer Drummond",
    "hero.title": "Developer for Business. Designer for People.",
    "hero.cta": "View Services",
    "hero.contact": "Get in Touch",

    // Carousel Section
    "carousel.title": "LATEST WORKS",
    "carousel.project1.title":
      "SaaS for beauty and wellness business management",
    "carousel.project1.name": "LYNDUS",
    "carousel.project1.badges":
      "UX/UI,WEB APPLICATION,WEB RESPONSIVE,SAAS,STARTUP",
    "carousel.project2.title": "Project 2 Title",
    "carousel.project2.name": "PROJECT 2",
    "carousel.project2.badges": "TAG1,TAG2,TAG3",
    "carousel.project3.title": "Project 3 Title",
    "carousel.project3.name": "PROJECT 3",
    "carousel.project3.badges": "TAG1,TAG2,TAG3",
    "carousel.project4.title": "Project 4 Title",
    "carousel.project4.name": "PROJECT 4",
    "carousel.project4.badges": "TAG1,TAG2,TAG3",
    "carousel.project5.title": "Project 5 Title",
    "carousel.project5.name": "PROJECT 5",
    "carousel.project5.badges": "TAG1,TAG2,TAG3",

    // Language Selector
    "lang.english": "English",
    "lang.portuguese": "Português"
  },
  pt: {
    // Navbar
    "nav.home": "Início",
    "nav.portfolio": "Portfólio",
    "nav.about": "Sobre",
    "nav.services": "Serviços",
    "nav.contact": "Contato",

    // Hero Section
    "hero.greeting": "Olá, eu sou",
    "hero.name": "Rainer Drummond",
    "hero.title": "Dev. para Negócios. Designer para Pessoas.",
    "hero.cta": "Ver Serviços",
    "hero.contact": "Entre em Contato",

    // Carousel Section
    "carousel.title": "ÚLTIMOS TRABALHOS",
    "carousel.project1.title":
      "SaaS para gestão e crescimento de negócios de beleza e bem-estar",
    "carousel.project1.name": "LYNDUS",
    "carousel.project1.badges":
      "UX/UI,WEB APPLICATION,WEB RESPONSIVE,SAAS,STARTUP",
    "carousel.project2.title": "Título do Projeto 2",
    "carousel.project2.name": "PROJETO 2",
    "carousel.project2.badges": "TAG1,TAG2,TAG3",
    "carousel.project3.title": "Título do Projeto 3",
    "carousel.project3.name": "PROJETO 3",
    "carousel.project3.badges": "TAG1,TAG2,TAG3",
    "carousel.project4.title": "Título do Projeto 4",
    "carousel.project4.name": "PROJETO 4",
    "carousel.project4.badges": "TAG1,TAG2,TAG3",
    "carousel.project5.title": "Título do Projeto 5",
    "carousel.project5.name": "PROJETO 5",
    "carousel.project5.badges": "TAG1,TAG2,TAG3",

    // Language Selector
    "lang.english": "English",
    "lang.portuguese": "Português"
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
