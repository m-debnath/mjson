import { hobbycodes_logo } from '../../assets';

// UI Text Constants - Spanish
export const UI_TEXT = {
  // Language Name (in native script)
  LANGUAGE_NAME: 'Español',

  // Header
  TITLE: 'Formateador y Validador JSON',
  SUBTITLE: 'Formatear, validar y minificar datos JSON',
  LOGO_ALT: 'Logo de HobbyCodes',

  // Editor Headers
  INPUT_HEADER: 'JSON de Entrada',
  OUTPUT_HEADER: 'Salida',

  // Button Tooltips
  FORMAT_TOOLTIP: 'Formatear JSON con sangría adecuada',
  MINIFY_TOOLTIP: 'Minificar JSON eliminando espacios en blanco',
  VALIDATE_TOOLTIP: 'Validar sintaxis JSON',
  SPACING_TOOLTIP: 'Elegir espaciado de sangría',
  RESET_PANELS_TOOLTIP: 'Restablecer ancho de paneles a división 50/50',
  COPY_OUTPUT_TOOLTIP: 'Copiar salida formateada al portapapeles',
  CLEAR_TOOLTIP: 'Limpiar ambos editores de entrada y salida',

  // Button Labels
  FORMAT_LABEL: 'Formatear',
  MINIFY_LABEL: 'Minificar',
  VALIDATE_LABEL: 'Validar',
  RESET_PANELS_LABEL: 'Restablecer',

  // Editor Panel Button Tooltips
  FORMAT_PANEL_TOOLTIP: 'Formatear JSON con sangría adecuada',
  COPY_PANEL_TOOLTIP: 'Copiar salida formateada al portapapeles',

  // Theme Labels and Tooltips
  THEME_LIGHT: 'Claro',
  THEME_DARK: 'Oscuro',
  THEME_SYSTEM: 'Sistema',
  THEME_TOOLTIP_PREFIX: 'Tema actual: ',

  // Language Labels and Tooltips
  LANGUAGE_TOOLTIP_PREFIX: 'Idioma: ',

  // Spacing Options
  SPACING_2: '2 espacios',
  SPACING_4: '4 espacios',

  // Status Messages
  VALID_JSON: '✅ JSON Válido',
  VALIDATION_PROMPT: 'Ingrese JSON para validar',
  ERROR_PREFIX: '❌ ',
  LINE_SUFFIX: ' líneas',
  OUTPUT_PROMPT: 'La salida aparecerá aquí',

  // Toast Messages
  COPY_SUCCESS: '¡Copiado al portapapeles!',
  MOBILE_WARNING: '📱 Este sitio web funciona mejor en dispositivos de escritorio o tableta',

  // Footer
  FOOTER_COOKIES:
    '🍪 Este sitio web utiliza únicamente cookies esenciales para funcionalidad de idioma y tema. No se utilizan cookies de seguimiento o análisis. Al continuar usando este sitio, acepta nuestro uso mínimo de cookies esenciales.',
  FOOTER_LANGUAGES: 'Apoyando 13 idiomas globalmente',
  FOOTER_COPYRIGHT: '© 2025 ',
  FOOTER_COMPANY: 'HobbyCodes.com',
  FOOTER_MADE_BY: ' - Hecho con ❤️ por Mukul, la IA también ayudó. Código fuente disponible en ',

  // Error Messages
  ERROR_INVALID_JSON: 'JSON Inválido',
  ERROR_FORMAT_FAILED: 'Falló el formateo de JSON',
  ERROR_MINIFY_FAILED: 'Falló la minificación de JSON',
} as const;

export const DEFAULT_JSON = `{
  "usuario": {
    "nombre": "Carlos García",
    "edad": 32,
    "ciudad": "Barcelona",
    "país": "España"
  },
  "configuración": {
    "idioma": "es",
    "tema": "oscuro",
    "notificaciones": true
  },
  "datos": [1, 2, 3, 4, 5]
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
