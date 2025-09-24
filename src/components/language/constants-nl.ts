// UI Text Constants - Dutch
export const UI_TEXT = {
  // Header
  TITLE: 'JSON Formatter & Validator',
  SUBTITLE: 'Format, validate, and minify JSON data',
  LOGO_ALT: 'HobbyCodes Logo',

  // Editor Headers
  INPUT_HEADER: 'Invoer JSON',
  OUTPUT_HEADER: 'Uitvoer',

  // Button Tooltips
  FORMAT_TOOLTIP: 'JSON formatteren met juiste inspringing',
  MINIFY_TOOLTIP: 'JSON minimaliseren door witruimte te verwijderen',
  VALIDATE_TOOLTIP: 'JSON-syntaxis valideren',
  SPACING_TOOLTIP: 'Kies inspringingafstand',
  COPY_OUTPUT_TOOLTIP: 'Geformatteerde uitvoer naar klembord kopiëren',
  CLEAR_TOOLTIP: 'Beide editors leegmaken',

  // Button Labels
  FORMAT_LABEL: 'Formatteren',
  MINIFY_LABEL: 'Minimaliseren',
  VALIDATE_LABEL: 'Valideren',

  // Editor Panel Button Tooltips
  FORMAT_PANEL_TOOLTIP: 'JSON formatteren met juiste inspringing',
  COPY_PANEL_TOOLTIP: 'Geformatteerde uitvoer naar klembord kopiëren',

  // Theme Labels and Tooltips
  THEME_LIGHT: 'Licht',
  THEME_DARK: 'Donker',
  THEME_SYSTEM: 'Systeem',
  THEME_TOOLTIP_PREFIX: 'Huidig thema: ',

  // Language Labels and Tooltips
  LANGUAGE_TOOLTIP_PREFIX: 'Taal: ',

  // Spacing Options
  SPACING_2: '2 spaties',
  SPACING_4: '4 spaties',

  // Status Messages
  VALID_JSON: '✅ Geldige JSON',
  VALIDATION_PROMPT: 'Voer JSON in om te valideren',
  ERROR_PREFIX: '❌ ',
  LINE_SUFFIX: ' regels',
  OUTPUT_PROMPT: 'Uitvoer verschijnt hier',

  // Toast Messages
  COPY_SUCCESS: 'Gekopieerd naar klembord!',
  MOBILE_WARNING: '📱 Deze website werkt het best op desktop- of tabletapparaten',

  // Footer
  FOOTER_COOKIES:
    '🍪 Deze website gebruikt alleen essentiële cookies voor authenticatie, autorisatie en applicatiefunctionaliteit. Er worden geen tracking- of analytische cookies gebruikt. Door deze site te blijven gebruiken, stemt u in met ons minimale gebruik van essentiële cookies.',
  FOOTER_COPYRIGHT: '© 2025 ',
  FOOTER_COMPANY: 'HobbyCodes.com',
  FOOTER_MADE_BY: ' - Gemaakt met ❤️ door Mukul, AI heeft ook geholpen.',

  // Error Messages
  ERROR_INVALID_JSON: 'Ongeldige JSON',
  ERROR_FORMAT_FAILED: 'JSON formatteren mislukt',
  ERROR_MINIFY_FAILED: 'JSON minimaliseren mislukt',
} as const;

// Default JSON Sample
export const DEFAULT_JSON = `{
  "naam": "Jan Jansen",
  "leeftijd": 30,
  "stad": "Amsterdam"
}`;

// Local Storage Keys
export const STORAGE_KEYS = {
  THEME_MODE: 'theme-mode',
  MOBILE_WARNING: 'mobile-warning-shown',
} as const;

// Configuration Constants
export const CONFIG = {
  TOAST_DURATION: 2000,
  MOBILE_WARNING_DURATION: 5000,
  MOBILE_BREAKPOINT: 768,
  DEFAULT_TAB_SPACING: 2,
} as const;

// Asset Paths
export const ASSETS = {
  LOGO: '/src/assets/hobbycodes_logo.svg',
  COMPANY_URL: 'https://hobbycodes.com',
} as const;
