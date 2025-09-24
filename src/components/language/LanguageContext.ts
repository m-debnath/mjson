import { createContext } from 'react';
import type { UI_TEXT as EN_TEXT, STORAGE_KEYS, CONFIG, ASSETS } from './constants-en';

export type Language = 'en' | 'nl';

interface LanguageConstants {
  UI_TEXT: typeof EN_TEXT | typeof import('./constants-nl').UI_TEXT;
  DEFAULT_JSON: string;
  STORAGE_KEYS: typeof STORAGE_KEYS;
  CONFIG: typeof CONFIG;
  ASSETS: typeof ASSETS;
}

export interface LanguageContextType {
  language: Language;
  // eslint-disable-next-line no-unused-vars
  setLanguage: (language: Language) => void;
  constants: LanguageConstants;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
