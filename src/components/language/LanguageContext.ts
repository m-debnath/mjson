import { createContext } from 'react';
import type { UI_TEXT as EN_TEXT, STORAGE_KEYS, CONFIG, ASSETS } from './constants-en';

export type Language = 'en' | 'nl' | 'es' | 'pt' | 'de' | 'mr' | 'bn' | 'tr' | 'lv' | 'ja' | 'ko' | 'sv' | 'fr';

interface LanguageConstants {
  UI_TEXT:
    | typeof EN_TEXT
    | typeof import('./constants-nl').UI_TEXT
    | typeof import('./constants-es').UI_TEXT
    | typeof import('./constants-pt').UI_TEXT
    | typeof import('./constants-de').UI_TEXT
    | typeof import('./constants-mr').UI_TEXT
    | typeof import('./constants-bn').UI_TEXT
    | typeof import('./constants-tr').UI_TEXT
    | typeof import('./constants-lv').UI_TEXT
    | typeof import('./constants-ja').UI_TEXT
    | typeof import('./constants-ko').UI_TEXT
    | typeof import('./constants-sv').UI_TEXT
    | typeof import('./constants-fr').UI_TEXT;
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
