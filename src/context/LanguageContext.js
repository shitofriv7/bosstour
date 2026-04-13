"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../app/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('tr');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('boss_tour_lang');
    if (savedLang && translations[savedLang]) {
      setLang(savedLang);
    }
  }, []);

  // Save language to localStorage when changed
  const updateLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('boss_tour_lang', newLang);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang: updateLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
