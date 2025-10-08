import { hobbycodes_logo } from '../../assets';

// UI Text Constants - Portuguese
export const UI_TEXT = {
  // Language Name (in native script)
  LANGUAGE_NAME: 'Português',

  // Header
  TITLE: 'Formatador e Validador JSON',
  SUBTITLE: 'Formatar, validar e minificar dados JSON',
  LOGO_ALT: 'Logo HobbyCodes',

  // Editor Headers
  INPUT_HEADER: 'JSON de Entrada',
  OUTPUT_HEADER: 'Saída',

  // Button Tooltips
  FORMAT_TOOLTIP: 'Formatar JSON com indentação adequada',
  MINIFY_TOOLTIP: 'Minificar JSON removendo espaços em branco',
  VALIDATE_TOOLTIP: 'Validar sintaxe JSON',
  SPACING_TOOLTIP: 'Escolher espaçamento de indentação',
  RESET_PANELS_TOOLTIP: 'Redefinir largura dos painéis para divisão 50/50',
  COPY_OUTPUT_TOOLTIP: 'Copiar saída formatada para área de transferência',
  CLEAR_TOOLTIP: 'Limpar ambos os editores de entrada e saída',

  // Button Labels
  FORMAT_LABEL: 'Formatar',
  MINIFY_LABEL: 'Minificar',
  VALIDATE_LABEL: 'Validar',
  RESET_PANELS_LABEL: 'Redefinir',

  // Editor Panel Button Tooltips
  FORMAT_PANEL_TOOLTIP: 'Formatar JSON com indentação adequada',
  COPY_PANEL_TOOLTIP: 'Copiar saída formatada para área de transferência',

  // Theme Labels and Tooltips
  THEME_LIGHT: 'Claro',
  THEME_DARK: 'Escuro',
  THEME_SYSTEM: 'Sistema',
  THEME_TOOLTIP_PREFIX: 'Tema atual: ',

  // Language Labels and Tooltips
  LANGUAGE_TOOLTIP_PREFIX: 'Idioma: ',

  // Spacing Options
  SPACING_2: '2 espaços',
  SPACING_4: '4 espaços',

  // Status Messages
  VALID_JSON: '✅ JSON Válido',
  VALIDATION_PROMPT: 'Digite JSON para validar',
  ERROR_PREFIX: '❌ ',
  LINE_SUFFIX: ' linhas',
  OUTPUT_PROMPT: 'A saída aparecerá aqui',

  // Toast Messages
  COPY_SUCCESS: 'Copiado para área de transferência!',
  MOBILE_WARNING: '📱 Este site funciona melhor em dispositivos desktop ou tablet',

  // Footer
  FOOTER_COOKIES:
    '🍪 Este site usa apenas cookies essenciais para funcionalidade de idioma e tema. Nenhum cookie de rastreamento ou análise é usado. Ao continuar a usar este site, você consente com nosso uso mínimo de cookies essenciais.',
  FOOTER_LANGUAGES: 'Apoiando 13 idiomas globalmente',
  FOOTER_COPYRIGHT: '© 2025 ',
  FOOTER_COMPANY: 'HobbyCodes.com',
  FOOTER_MADE_BY: ' - Feito com ❤️ por Mukul, IA também ajudou. Código fonte disponível em ',

  // Error Messages
  ERROR_INVALID_JSON: 'JSON Inválido',
  ERROR_FORMAT_FAILED: 'Falha ao formatar JSON',
  ERROR_MINIFY_FAILED: 'Falha ao minificar JSON',
} as const;

// Default JSON Sample
export const DEFAULT_JSON = `{
  "usuário": {
    "nome": "Ana Santos",
    "idade": 29,
    "cidade": "Rio de Janeiro",
    "país": "Brasil"
  },
  "configurações": {
    "idioma": "pt",
    "tema": "claro",
    "notificações": true
  },
  "dados": [1, 2, 3, 4, 5]
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
