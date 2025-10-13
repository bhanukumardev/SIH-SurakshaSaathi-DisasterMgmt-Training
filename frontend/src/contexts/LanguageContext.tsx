import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    appName: 'Suraksha Saathi',
    tagline: 'Disaster Management Training Platform',
    login: 'Login',
    signup: 'Sign Up',
    email: 'Email',
    password: 'Password',
    dashboard: 'Dashboard',
    trainings: 'Trainings',
    analytics: 'Analytics',
    partners: 'Training Partners',
    dataEntry: 'Data Entry',
    map: 'Map View',
    users: 'User Management',
    logout: 'Logout',
    welcome: 'Welcome to Suraksha Saathi',
    poweredBy: 'Powered by Ministry of Home Affairs',
    ndma: 'National Disaster Management Authority',
  },
  hi: {
    appName: 'सुरक्षा साथी',
    tagline: 'आपदा प्रबंधन प्रशिक्षण मंच',
    login: 'लॉगिन',
    signup: 'साइन अप',
    email: 'ईमेल',
    password: 'पासवर्ड',
    dashboard: 'डैशबोर्ड',
    trainings: 'प्रशिक्षण',
    analytics: 'विश्लेषण',
    partners: 'प्रशिक्षण भागीदार',
    dataEntry: 'डेटा प्रविष्टि',
    map: 'मानचित्र दृश्य',
    users: 'उपयोगकर्ता प्रबंधन',
    logout: 'लॉगआउट',
    welcome: 'सुरक्षा साथी में आपका स्वागत है',
    poweredBy: 'गृह मंत्रालय द्वारा संचालित',
    ndma: 'राष्ट्रीय आपदा प्रबंधन प्राधिकरण',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
