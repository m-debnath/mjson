import { hobbycodes_logo } from '../../assets';

// UI Text Constants - German
export const UI_TEXT = {
  // Header
  TITLE: 'JSON Formatierer & Validator',
  SUBTITLE: 'JSON-Daten formatieren, validieren und minimieren',
  LOGO_ALT: 'HobbyCodes Logo',

  // Editor Headers
  INPUT_HEADER: 'JSON Eingabe',
  OUTPUT_HEADER: 'Ausgabe',

  // Button Tooltips
  FORMAT_TOOLTIP: 'JSON mit ordnungsgemäßer Einrückung formatieren',
  MINIFY_TOOLTIP: 'JSON durch Entfernen von Leerzeichen minimieren',
  VALIDATE_TOOLTIP: 'JSON-Syntax validieren',
  SPACING_TOOLTIP: 'Einrückungsabstand wählen',
  RESET_PANELS_TOOLTIP: 'Panelbreiten auf 50/50 Aufteilung zurücksetzen',
  COPY_OUTPUT_TOOLTIP: 'Formatierte Ausgabe in Zwischenablage kopieren',
  CLEAR_TOOLTIP: 'Beide Eingabe- und Ausgabeeditoren löschen',

  // Button Labels
  FORMAT_LABEL: 'Formatieren',
  MINIFY_LABEL: 'Minimieren',
  VALIDATE_LABEL: 'Validieren',
  RESET_PANELS_LABEL: 'Zurücksetzen',

  // Editor Panel Button Tooltips
  FORMAT_PANEL_TOOLTIP: 'JSON mit ordnungsgemäßer Einrückung formatieren',
  COPY_PANEL_TOOLTIP: 'Formatierte Ausgabe in Zwischenablage kopieren',

  // Theme Labels and Tooltips
  THEME_LIGHT: 'Hell',
  THEME_DARK: 'Dunkel',
  THEME_SYSTEM: 'System',
  THEME_TOOLTIP_PREFIX: 'Aktuelles Thema: ',

  // Language Labels and Tooltips
  LANGUAGE_TOOLTIP_PREFIX: 'Sprache: ',

  // Spacing Options
  SPACING_2: '2 Leerzeichen',
  SPACING_4: '4 Leerzeichen',

  // Status Messages
  VALID_JSON: '✅ Gültiges JSON',
  VALIDATION_PROMPT: 'JSON zur Validierung eingeben',
  ERROR_PREFIX: '❌ ',
  LINE_SUFFIX: ' Zeilen',
  OUTPUT_PROMPT: 'Ausgabe wird hier erscheinen',

  // Toast Messages
  COPY_SUCCESS: 'In Zwischenablage kopiert!',
  MOBILE_WARNING: '📱 Diese Website funktioniert am besten auf Desktop- oder Tablet-Geräten',

  // Footer
  FOOTER_COOKIES:
    '🍪 Diese Website verwendet nur essentielle Cookies für Sprach- und Themenfunktionalität. Es werden keine Tracking- oder Analyse-Cookies verwendet. Durch die weitere Nutzung dieser Website stimmen Sie unserem minimalen Einsatz essentieller Cookies zu.',
  FOOTER_LANGUAGES: 'Unterstützt 13 Sprachen weltweit',
  FOOTER_COPYRIGHT: '© 2025 ',
  FOOTER_COMPANY: 'HobbyCodes.com',
  FOOTER_MADE_BY: ' - Mit ❤️ von Mukul erstellt, KI hat auch geholfen. Quellcode verfügbar auf ',

  // Error Messages
  ERROR_INVALID_JSON: 'Ungültiges JSON',
  ERROR_FORMAT_FAILED: 'JSON-Formatierung fehlgeschlagen',
  ERROR_MINIFY_FAILED: 'JSON-Minimierung fehlgeschlagen',
} as const;

// Default JSON Sample
export const DEFAULT_JSON = `{
  "benutzer": {
    "name": "Klaus Weber",
    "alter": 35,
    "stadt": "München",
    "land": "Deutschland"
  },
  "einstellungen": {
    "sprache": "de",
    "thema": "dunkel",
    "benachrichtigungen": true
  },
  "daten": [1, 2, 3, 4, 5]
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
