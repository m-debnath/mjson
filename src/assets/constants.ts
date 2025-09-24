// UI Text Constants
export const UI_TEXT = {
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
  COPY_OUTPUT_TOOLTIP: 'Copy formatted output to clipboard',
  CLEAR_TOOLTIP: 'Clear both input and output editors',

  // Editor Panel Button Tooltips
  FORMAT_PANEL_TOOLTIP: 'Format JSON with proper indentation',
  COPY_PANEL_TOOLTIP: 'Copy formatted output to clipboard',

  // Theme Labels and Tooltips
  THEME_LIGHT: 'Light',
  THEME_DARK: 'Dark',
  THEME_SYSTEM: 'System',
  THEME_TOOLTIP_PREFIX: 'Current theme: ',

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
    '🍪 This website uses only essential cookies for authentication, authorization, and application functionality. No tracking or analytics cookies are used. Authentication is managed by our secure OIDC provider. By continuing to use this site, you consent to our minimal use of essential cookies.',
  FOOTER_COPYRIGHT: '© 2025 ',
  FOOTER_COMPANY: 'HobbyCodes.com',
  FOOTER_MADE_BY: ' - Made with ❤️ by Mukul, AI also helped.',

  // Error Messages
  ERROR_INVALID_JSON: 'Invalid JSON',
  ERROR_FORMAT_FAILED: 'Failed to format JSON',
  ERROR_MINIFY_FAILED: 'Failed to minify JSON',
} as const;

// Default JSON Sample
export const DEFAULT_JSON = `{
  "name": "John Doe",
  "age": 30,
  "city": "New York"
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
