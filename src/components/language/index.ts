// Language system barrel exports
export { LanguageProvider } from './LanguageProvider';
export { useLanguage } from './useLanguage';
export { LanguageContext } from './LanguageContext';
export type { Language, LanguageContextType } from './LanguageContext';

// Export language constants for external use if needed
export * from './constants-en';
export { UI_TEXT as UI_TEXT_NL, DEFAULT_JSON as DEFAULT_JSON_NL } from './constants-nl';
