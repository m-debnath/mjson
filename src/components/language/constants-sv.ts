import { hobbycodes_logo } from '../../assets';

// UI Text Constants - Swedish
export const UI_TEXT = {
  // Language Name (in native script)
  LANGUAGE_NAME: 'Svenska',

  // Header
  TITLE: 'JSON Formaterare & Validator',
  SUBTITLE: 'Formatera, validera och minifiera JSON-data',
  LOGO_ALT: 'HobbyCodes Logotyp',

  // Editor Headers
  INPUT_HEADER: 'JSON Inmatning',
  OUTPUT_HEADER: 'Utmatning',

  // Button Tooltips
  FORMAT_TOOLTIP: 'Formatera JSON med korrekt indrag',
  MINIFY_TOOLTIP: 'Minifiera JSON genom att ta bort blanksteg',
  VALIDATE_TOOLTIP: 'Validera JSON-syntax',
  SPACING_TOOLTIP: 'Välj indragsavstånd',
  RESET_PANELS_TOOLTIP: 'Återställ panelbredd till 50/50 delning',
  COPY_OUTPUT_TOOLTIP: 'Kopiera formaterad utmatning till urklipp',
  CLEAR_TOOLTIP: 'Rensa båda redigerarna för inmatning och utmatning',

  // Button Labels
  FORMAT_LABEL: 'Formatera',
  MINIFY_LABEL: 'Minifiera',
  VALIDATE_LABEL: 'Validera',
  RESET_PANELS_LABEL: 'Återställ',

  // Editor Panel Button Tooltips
  FORMAT_PANEL_TOOLTIP: 'Formatera JSON med korrekt indrag',
  COPY_PANEL_TOOLTIP: 'Kopiera formaterad utmatning till urklipp',

  // Theme Labels and Tooltips
  THEME_LIGHT: 'Ljust',
  THEME_DARK: 'Mörkt',
  THEME_SYSTEM: 'System',
  THEME_TOOLTIP_PREFIX: 'Aktuellt tema: ',

  // Language Labels and Tooltips
  LANGUAGE_TOOLTIP_PREFIX: 'Språk: ',

  // Spacing Options
  SPACING_2: '2 mellanslag',
  SPACING_4: '4 mellanslag',

  // Status Messages
  VALID_JSON: '✅ Giltig JSON',
  VALIDATION_PROMPT: 'Ange JSON för validering',
  ERROR_PREFIX: '❌ ',
  LINE_SUFFIX: ' rader',
  OUTPUT_PROMPT: 'Utmatningen visas här',

  // Toast Messages
  COPY_SUCCESS: 'Kopierat till urklipp!',
  MOBILE_WARNING: '📱 Denna webbplats fungerar bäst på desktop- eller surfplatteenheter',

  // Footer
  FOOTER_COOKIES:
    '🍪 Denna webbplats använder endast nödvändiga cookies för språk- och temafunktionalitet. Inga spårnings- eller analyticookies används. Genom att fortsätta använda denna webbplats godkänner du vårt minimala användning av nödvändiga cookies.',
  FOOTER_LANGUAGES: 'Stöder 13 språk globalt',
  FOOTER_COPYRIGHT: '© 2025 ',
  FOOTER_COMPANY: 'HobbyCodes.com',
  FOOTER_MADE_BY: ' - Gjord med ❤️ av Mukul, AI hjälpte också till. Källkod tillgänglig på ',

  // Error Messages
  ERROR_INVALID_JSON: 'Ogiltig JSON',
  ERROR_FORMAT_FAILED: 'JSON-formatering misslyckades',
  ERROR_MINIFY_FAILED: 'JSON-minifiering misslyckades',
} as const;

export const DEFAULT_JSON = `{
  "användare": {
    "namn": "Anna Andersson",
    "ålder": 31,
    "stad": "Stockholm",
    "land": "Sverige"
  },
  "inställningar": {
    "språk": "sv",
    "tema": "ljust",
    "notifikationer": true
  },
  "data": [1, 2, 3, 4, 5]
}`;

// Re-export shared constants from English version
export { STORAGE_KEYS, CONFIG } from './constants-en';

export const ASSETS = {
  LOGO: hobbycodes_logo,
  COMPANY_URL: 'https://hobbycodes.com',
  SOURCE_CODE_URL: 'https://github.com/m-debnath/mjson',
} as const;
