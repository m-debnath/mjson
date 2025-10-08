import { hobbycodes_logo } from '../../assets';

// UI Text Constants - Latvian
export const UI_TEXT = {
  // Language Name (in native script)
  LANGUAGE_NAME: 'Latviski',

  // Header
  TITLE: 'JSON Formatētājs un Validātors',
  SUBTITLE: 'Formatēt, validēt un saspiest JSON datus',
  LOGO_ALT: 'HobbyCodes Logo',

  // Editor Headers
  INPUT_HEADER: 'JSON Ievade',
  OUTPUT_HEADER: 'Izvade',

  // Button Tooltips
  FORMAT_TOOLTIP: 'Formatēt JSON ar pareizu atkāpi',
  MINIFY_TOOLTIP: 'Saspiest JSON, noņemot atstarpes',
  VALIDATE_TOOLTIP: 'Validēt JSON sintaksi',
  SPACING_TOOLTIP: 'Izvēlēties atkāpes atstarpju skaitu',
  RESET_PANELS_TOOLTIP: 'Atiestatīt paneļu platumu uz 50/50 sadalījumu',
  COPY_OUTPUT_TOOLTIP: 'Kopēt formatēto izvadi starpliktuvē',
  CLEAR_TOOLTIP: 'Notīrīt gan ievades, gan izvades redaktorus',

  // Button Labels
  FORMAT_LABEL: 'Formatēt',
  MINIFY_LABEL: 'Saspiest',
  VALIDATE_LABEL: 'Validēt',
  RESET_PANELS_LABEL: 'Atiestatīt',

  // Editor Panel Button Tooltips
  FORMAT_PANEL_TOOLTIP: 'Formatēt JSON ar pareizu atkāpi',
  COPY_PANEL_TOOLTIP: 'Kopēt formatēto izvadi starpliktuvē',

  // Theme Labels and Tooltips
  THEME_LIGHT: 'Gaišs',
  THEME_DARK: 'Tumšs',
  THEME_SYSTEM: 'Sistēma',
  THEME_TOOLTIP_PREFIX: 'Pašreizējā tēma: ',

  // Language Labels and Tooltips
  LANGUAGE_TOOLTIP_PREFIX: 'Valoda: ',

  // Spacing Options
  SPACING_2: '2 atstarpes',
  SPACING_4: '4 atstarpes',

  // Status Messages
  VALID_JSON: '✅ Derīgs JSON',
  VALIDATION_PROMPT: 'Ievadiet JSON, lai validētu',
  ERROR_PREFIX: '❌ ',
  LINE_SUFFIX: ' rindas',
  OUTPUT_PROMPT: 'Izvade parādīsies šeit',

  // Toast Messages
  COPY_SUCCESS: 'Nokopēts starpliktuvē!',
  MOBILE_WARNING: '📱 Šī vietne vislabāk darbojas darbvirsmas vai planšetdatoru ierīcēs',

  // Footer
  FOOTER_COOKIES:
    '🍪 Šī vietne izmanto tikai būtiskos sīkfailus valodas un tēmas funkcionalitātei. Netiek izmantoti izsekošanas vai analītikas sīkfaili. Turpinot izmantot šo vietni, jūs piekrītat mūsu minimālajai būtisko sīkfailu izmantošanai.',
  FOOTER_LANGUAGES: 'Atbalsta 13 valodas globāli',
  FOOTER_COPYRIGHT: '© 2025 ',
  FOOTER_COMPANY: 'HobbyCodes.com',
  FOOTER_MADE_BY: ' - Izveidojis Mukul ar ❤️, AI arī palīdzēja. Pirmkods pieejams: ',

  // Error Messages
  ERROR_INVALID_JSON: 'Nederīgs JSON',
  ERROR_FORMAT_FAILED: 'JSON formatēšana neizdevās',
  ERROR_MINIFY_FAILED: 'JSON saspiedenšana neizdevās',
} as const;

export const DEFAULT_JSON = `{
  "lietotajs": {
    "vards": "Jānis Bērziņš",
    "vecums": 32,
    "pilseta": "Rīga",
    "valsts": "Latvija"
  },
  "preferences": {
    "valoda": "lv",
    "tema": "tumsa",
    "pazinojumi": true
  },
  "dati": [1, 2, 3, 4, 5]
}`;

// Re-export shared constants from English version
export { STORAGE_KEYS, CONFIG } from './constants-en';

export const ASSETS = {
  LOGO: hobbycodes_logo,
  COMPANY_URL: 'https://hobbycodes.com',
  SOURCE_CODE_URL: 'https://github.com/m-debnath/mjson',
} as const;
