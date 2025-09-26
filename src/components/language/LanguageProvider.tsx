import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { UI_TEXT as EN_TEXT, DEFAULT_JSON as EN_DEFAULT_JSON, STORAGE_KEYS, CONFIG, ASSETS } from './constants-en';
import { UI_TEXT as NL_TEXT, DEFAULT_JSON as NL_DEFAULT_JSON } from './constants-nl';
import { UI_TEXT as ES_TEXT, DEFAULT_JSON as ES_DEFAULT_JSON } from './constants-es';
import { LanguageContext, type Language } from './LanguageContext';

interface LanguageConstants {
  UI_TEXT: typeof EN_TEXT | typeof NL_TEXT | typeof ES_TEXT;
  DEFAULT_JSON: string;
  STORAGE_KEYS: typeof STORAGE_KEYS;
  CONFIG: typeof CONFIG;
  ASSETS: typeof ASSETS;
}

const LANGUAGE_STORAGE_KEY = 'app-language';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return saved === 'en' || saved === 'nl' || saved === 'es' ? saved : 'en';
  });

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage);
  };

  const constants: LanguageConstants = {
    UI_TEXT: language === 'en' ? EN_TEXT : language === 'nl' ? NL_TEXT : ES_TEXT,
    DEFAULT_JSON: language === 'en' ? EN_DEFAULT_JSON : language === 'nl' ? NL_DEFAULT_JSON : ES_DEFAULT_JSON,
    STORAGE_KEYS,
    CONFIG,
    ASSETS,
  };

  const value = {
    language,
    setLanguage,
    constants,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
