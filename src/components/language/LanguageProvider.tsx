import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { UI_TEXT as EN_TEXT, DEFAULT_JSON as EN_DEFAULT_JSON, STORAGE_KEYS, CONFIG, ASSETS } from './constants-en';
import { UI_TEXT as NL_TEXT, DEFAULT_JSON as NL_DEFAULT_JSON } from './constants-nl';
import { UI_TEXT as ES_TEXT, DEFAULT_JSON as ES_DEFAULT_JSON } from './constants-es';
import { UI_TEXT as PT_TEXT, DEFAULT_JSON as PT_DEFAULT_JSON } from './constants-pt';
import { UI_TEXT as DE_TEXT, DEFAULT_JSON as DE_DEFAULT_JSON } from './constants-de';
import { UI_TEXT as MR_TEXT, DEFAULT_JSON as MR_DEFAULT_JSON } from './constants-mr';
import { UI_TEXT as BN_TEXT, DEFAULT_JSON as BN_DEFAULT_JSON } from './constants-bn';
import { UI_TEXT as TR_TEXT, DEFAULT_JSON as TR_DEFAULT_JSON } from './constants-tr';
import { UI_TEXT as LV_TEXT, DEFAULT_JSON as LV_DEFAULT_JSON } from './constants-lv';
import { UI_TEXT as JA_TEXT, DEFAULT_JSON as JA_DEFAULT_JSON } from './constants-ja';
import { UI_TEXT as KO_TEXT, DEFAULT_JSON as KO_DEFAULT_JSON } from './constants-ko';
import { UI_TEXT as SV_TEXT, DEFAULT_JSON as SV_DEFAULT_JSON } from './constants-sv';
import { UI_TEXT as FR_TEXT, DEFAULT_JSON as FR_DEFAULT_JSON } from './constants-fr';
import { LanguageContext, type Language } from './LanguageContext';

interface LanguageConstants {
  UI_TEXT:
    | typeof EN_TEXT
    | typeof NL_TEXT
    | typeof ES_TEXT
    | typeof PT_TEXT
    | typeof DE_TEXT
    | typeof MR_TEXT
    | typeof BN_TEXT
    | typeof TR_TEXT
    | typeof LV_TEXT
    | typeof JA_TEXT
    | typeof KO_TEXT
    | typeof SV_TEXT
    | typeof FR_TEXT;
  DEFAULT_JSON: string;
  STORAGE_KEYS: typeof STORAGE_KEYS;
  CONFIG: typeof CONFIG;
  ASSETS: typeof ASSETS;
}

const LANGUAGE_STORAGE_KEY = 'app-language';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return saved === 'en' ||
      saved === 'nl' ||
      saved === 'es' ||
      saved === 'pt' ||
      saved === 'de' ||
      saved === 'mr' ||
      saved === 'bn' ||
      saved === 'tr' ||
      saved === 'lv' ||
      saved === 'ja' ||
      saved === 'ko' ||
      saved === 'sv' ||
      saved === 'fr'
      ? saved
      : 'en';
  });

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage);
  };

  const constants: LanguageConstants = {
    UI_TEXT:
      language === 'en'
        ? EN_TEXT
        : language === 'nl'
          ? NL_TEXT
          : language === 'es'
            ? ES_TEXT
            : language === 'pt'
              ? PT_TEXT
              : language === 'de'
                ? DE_TEXT
                : language === 'mr'
                  ? MR_TEXT
                  : language === 'bn'
                    ? BN_TEXT
                    : language === 'tr'
                      ? TR_TEXT
                      : language === 'lv'
                        ? LV_TEXT
                        : language === 'ja'
                          ? JA_TEXT
                          : language === 'ko'
                            ? KO_TEXT
                            : language === 'sv'
                              ? SV_TEXT
                              : FR_TEXT,
    DEFAULT_JSON:
      language === 'en'
        ? EN_DEFAULT_JSON
        : language === 'nl'
          ? NL_DEFAULT_JSON
          : language === 'es'
            ? ES_DEFAULT_JSON
            : language === 'pt'
              ? PT_DEFAULT_JSON
              : language === 'de'
                ? DE_DEFAULT_JSON
                : language === 'mr'
                  ? MR_DEFAULT_JSON
                  : language === 'bn'
                    ? BN_DEFAULT_JSON
                    : language === 'tr'
                      ? TR_DEFAULT_JSON
                      : language === 'lv'
                        ? LV_DEFAULT_JSON
                        : language === 'ja'
                          ? JA_DEFAULT_JSON
                          : language === 'ko'
                            ? KO_DEFAULT_JSON
                            : language === 'sv'
                              ? SV_DEFAULT_JSON
                              : FR_DEFAULT_JSON,
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
