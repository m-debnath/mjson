// Language system barrel exports
export { LanguageProvider } from './LanguageProvider';
export { useLanguage } from './useLanguage';
export { LanguageContext } from './LanguageContext';
export type { Language, LanguageContextType } from './LanguageContext';

// Export language constants for external use if needed
export * from './constants-en';
export { UI_TEXT as UI_TEXT_NL, DEFAULT_JSON as DEFAULT_JSON_NL } from './constants-nl';
export { UI_TEXT as UI_TEXT_ES, DEFAULT_JSON as DEFAULT_JSON_ES } from './constants-es';
export { UI_TEXT as UI_TEXT_PT, DEFAULT_JSON as DEFAULT_JSON_PT } from './constants-pt';
export { UI_TEXT as UI_TEXT_DE, DEFAULT_JSON as DEFAULT_JSON_DE } from './constants-de';
export { UI_TEXT as UI_TEXT_MR, DEFAULT_JSON as DEFAULT_JSON_MR } from './constants-mr';
export { UI_TEXT as UI_TEXT_BN, DEFAULT_JSON as DEFAULT_JSON_BN } from './constants-bn';
export { UI_TEXT as UI_TEXT_TR, DEFAULT_JSON as DEFAULT_JSON_TR } from './constants-tr';
export { UI_TEXT as UI_TEXT_LV, DEFAULT_JSON as DEFAULT_JSON_LV } from './constants-lv';
export { UI_TEXT as UI_TEXT_JA, DEFAULT_JSON as DEFAULT_JSON_JA } from './constants-ja';
export { UI_TEXT as UI_TEXT_KO, DEFAULT_JSON as DEFAULT_JSON_KO } from './constants-ko';
export { UI_TEXT as UI_TEXT_SV, DEFAULT_JSON as DEFAULT_JSON_SV } from './constants-sv';
export { UI_TEXT as UI_TEXT_FR, DEFAULT_JSON as DEFAULT_JSON_FR } from './constants-fr';

// Import types and constants for the helper function
import type { Language } from './LanguageContext';
import { UI_TEXT } from './constants-en';
import { UI_TEXT as UI_TEXT_NL_IMPORT } from './constants-nl';
import { UI_TEXT as UI_TEXT_ES_IMPORT } from './constants-es';
import { UI_TEXT as UI_TEXT_PT_IMPORT } from './constants-pt';
import { UI_TEXT as UI_TEXT_DE_IMPORT } from './constants-de';
import { UI_TEXT as UI_TEXT_MR_IMPORT } from './constants-mr';
import { UI_TEXT as UI_TEXT_BN_IMPORT } from './constants-bn';
import { UI_TEXT as UI_TEXT_TR_IMPORT } from './constants-tr';
import { UI_TEXT as UI_TEXT_LV_IMPORT } from './constants-lv';
import { UI_TEXT as UI_TEXT_JA_IMPORT } from './constants-ja';
import { UI_TEXT as UI_TEXT_KO_IMPORT } from './constants-ko';
import { UI_TEXT as UI_TEXT_SV_IMPORT } from './constants-sv';
import { UI_TEXT as UI_TEXT_FR_IMPORT } from './constants-fr';

// Language name mapping function
export const getLanguageName = (language: Language): string => {
  switch (language) {
    case 'en':
      return UI_TEXT.LANGUAGE_NAME;
    case 'nl':
      return UI_TEXT_NL_IMPORT.LANGUAGE_NAME;
    case 'es':
      return UI_TEXT_ES_IMPORT.LANGUAGE_NAME;
    case 'pt':
      return UI_TEXT_PT_IMPORT.LANGUAGE_NAME;
    case 'de':
      return UI_TEXT_DE_IMPORT.LANGUAGE_NAME;
    case 'mr':
      return UI_TEXT_MR_IMPORT.LANGUAGE_NAME;
    case 'bn':
      return UI_TEXT_BN_IMPORT.LANGUAGE_NAME;
    case 'tr':
      return UI_TEXT_TR_IMPORT.LANGUAGE_NAME;
    case 'lv':
      return UI_TEXT_LV_IMPORT.LANGUAGE_NAME;
    case 'ja':
      return UI_TEXT_JA_IMPORT.LANGUAGE_NAME;
    case 'ko':
      return UI_TEXT_KO_IMPORT.LANGUAGE_NAME;
    case 'sv':
      return UI_TEXT_SV_IMPORT.LANGUAGE_NAME;
    case 'fr':
      return UI_TEXT_FR_IMPORT.LANGUAGE_NAME;
    default:
      return 'English';
  }
};
