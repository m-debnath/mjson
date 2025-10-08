import { hobbycodes_logo } from '../../assets';

// UI Text Constants
export const UI_TEXT = {
  // Language Name (in native script)
  LANGUAGE_NAME: 'English',

  // Header
  TITLE: 'JSON Formatter & Validator',
  SUBTITLE: 'Format, validate, and minify JSON data',
  LOGO_ALT: 'HobbyCodes Logo',

  // Editor Headers
  INPUT_HEADER: 'Input JSON',
  OUTPUT_HEADER: 'Output',

  // Button Tooltips
  FORMAT_TOOLTIP: 'Format JSON with proper indentation',
  MINIFY_TOOLTIP: 'Minify JSON by removing whitespace',
  VALIDATE_TOOLTIP: 'Validate JSON syntax',
  SPACING_TOOLTIP: 'Choose indentation spacing',
  RESET_PANELS_TOOLTIP: 'Reset panel widths to 50/50 split',
  COPY_OUTPUT_TOOLTIP: 'Copy formatted output to clipboard',
  CLEAR_TOOLTIP: 'Clear both input and output editors',

  // Button Labels
  FORMAT_LABEL: 'Format',
  MINIFY_LABEL: 'Minify',
  VALIDATE_LABEL: 'Validate',
  RESET_PANELS_LABEL: 'Reset',

  // Editor Panel Button Tooltips
  FORMAT_PANEL_TOOLTIP: 'Format JSON with proper indentation',
  COPY_PANEL_TOOLTIP: 'Copy formatted output to clipboard',

  // Theme Labels and Tooltips
  THEME_LIGHT: 'Light',
  THEME_DARK: 'Dark',
  THEME_SYSTEM: 'System',
  THEME_TOOLTIP_PREFIX: 'Current theme: ',

  // Language Labels and Tooltips
  LANGUAGE_TOOLTIP_PREFIX: 'Language: ',

  // Spacing Options
  SPACING_2: '2 spaces',
  SPACING_4: '4 spaces',

  // Status Messages
  VALID_JSON: '✅ Valid JSON',
  VALIDATION_PROMPT: 'Enter JSON to validate',
  ERROR_PREFIX: '❌ ',
  LINE_SUFFIX: ' lines',
  OUTPUT_PROMPT: 'Output will appear here',

  // Toast Messages
  COPY_SUCCESS: 'Copied to clipboard!',
  MOBILE_WARNING: '📱 This website is best experienced on desktop or tablet devices',

  // Footer
  FOOTER_COOKIES:
    '🍪 This website uses only essential cookies for language and theme functionality. No tracking or analytics cookies are used. By continuing to use this site, you consent to our minimal use of essential cookies.',
  FOOTER_LANGUAGES: 'Supporting 13 languages globally',
  FOOTER_COPYRIGHT: '© 2025 ',
  FOOTER_COMPANY: 'HobbyCodes.com',
  FOOTER_MADE_BY: ' - Made with ❤️ by Mukul, AI also helped. Source code is available on ',

  // Error Messages
  ERROR_INVALID_JSON: 'Invalid JSON',
  ERROR_FORMAT_FAILED: 'Failed to format JSON',
  ERROR_MINIFY_FAILED: 'Failed to minify JSON',
} as const;

// Default JSON Sample
export const DEFAULT_JSON = `{
  "user": {
    "name": "John Smith",
    "age": 30,
    "city": "New York",
    "country": "United States"
  },
  "settings": {
    "language": "en",
    "theme": "dark",
    "notifications": true
  },
  "data": [1, 2, 3, 4, 5]
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
  LOGO: hobbycodes_logo,
  COMPANY_URL: 'https://hobbycodes.com',
  SOURCE_CODE_URL: 'https://github.com/m-debnath/mjson',
} as const;
