import { hobbycodes_logo } from '../../assets';

// UI Text Constants - French
export const UI_TEXT = {
  // Language Name (in native script)
  LANGUAGE_NAME: 'Français',

  // Header
  TITLE: 'Formateur et Validateur JSON',
  SUBTITLE: 'Formater, valider et minifier les données JSON',
  LOGO_ALT: 'Logo HobbyCodes',

  // Editor Headers
  INPUT_HEADER: 'Entrée JSON',
  OUTPUT_HEADER: 'Sortie',

  // Button Tooltips
  FORMAT_TOOLTIP: 'Formater le JSON avec une indentation appropriée',
  MINIFY_TOOLTIP: 'Minifier le JSON en supprimant les espaces',
  VALIDATE_TOOLTIP: 'Valider la syntaxe JSON',
  SPACING_TOOLTIP: "Choisir l'espacement d'indentation",
  RESET_PANELS_TOOLTIP: 'Réinitialiser la largeur des panneaux à 50/50',
  COPY_OUTPUT_TOOLTIP: 'Copier la sortie formatée dans le presse-papier',
  CLEAR_TOOLTIP: "Effacer les deux éditeurs d'entrée et de sortie",

  // Button Labels
  FORMAT_LABEL: 'Formater',
  MINIFY_LABEL: 'Minifier',
  VALIDATE_LABEL: 'Valider',
  RESET_PANELS_LABEL: 'Réinitialiser',

  // Editor Panel Button Tooltips
  FORMAT_PANEL_TOOLTIP: 'Formater le JSON avec une indentation appropriée',
  COPY_PANEL_TOOLTIP: 'Copier la sortie formatée dans le presse-papier',

  // Theme Labels and Tooltips
  THEME_LIGHT: 'Clair',
  THEME_DARK: 'Sombre',
  THEME_SYSTEM: 'Système',
  THEME_TOOLTIP_PREFIX: 'Thème actuel: ',

  // Language Labels and Tooltips
  LANGUAGE_TOOLTIP_PREFIX: 'Langue: ',

  // Spacing Options
  SPACING_2: '2 espaces',
  SPACING_4: '4 espaces',

  // Status Messages
  VALID_JSON: '✅ JSON Valide',
  VALIDATION_PROMPT: 'Saisir du JSON à valider',
  ERROR_PREFIX: '❌ ',
  LINE_SUFFIX: ' lignes',
  OUTPUT_PROMPT: 'La sortie apparaîtra ici',

  // Toast Messages
  COPY_SUCCESS: 'Copié dans le presse-papier !',
  MOBILE_WARNING: '📱 Ce site web fonctionne mieux sur les appareils de bureau ou tablette',

  // Footer
  FOOTER_COOKIES:
    "🍪 Ce site web utilise uniquement des cookies essentiels pour la fonctionnalité de langue et de thème. Aucun cookie de suivi ou d'analyse n'est utilisé. En continuant à utiliser ce site, vous acceptez notre utilisation minimale de cookies essentiels.",
  FOOTER_LANGUAGES: 'Supporte 13 langues mondialement',
  FOOTER_COPYRIGHT: '© 2025 ',
  FOOTER_COMPANY: 'HobbyCodes.com',
  FOOTER_MADE_BY: " - Fait avec ❤️ par Mukul, l'IA a aussi aidé. Code source disponible sur ",

  // Error Messages
  ERROR_INVALID_JSON: 'JSON Invalide',
  ERROR_FORMAT_FAILED: 'Échec du formatage JSON',
  ERROR_MINIFY_FAILED: 'Échec de la minification JSON',
} as const;

export const DEFAULT_JSON = `{
  "utilisateur": {
    "nom": "Marie Dubois",
    "âge": 29,
    "ville": "Paris",
    "pays": "France"
  },
  "paramètres": {
    "langue": "fr",
    "thème": "sombre",
    "notifications": true
  },
  "données": [1, 2, 3, 4, 5]
}`;

// Re-export shared constants from English version
export { STORAGE_KEYS, CONFIG } from './constants-en';

export const ASSETS = {
  LOGO: hobbycodes_logo,
  COMPANY_URL: 'https://hobbycodes.com',
  SOURCE_CODE_URL: 'https://github.com/m-debnath/mjson',
} as const;
