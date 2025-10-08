import { hobbycodes_logo } from '../../assets';

// UI Text Constants - Turkish
export const UI_TEXT = {
  // Language Name (in native script)
  LANGUAGE_NAME: 'Türkçe',

  // Header
  TITLE: 'JSON Formatlayıcı ve Doğrulayıcı',
  SUBTITLE: 'JSON verilerini biçimlendir, doğrula ve küçült',
  LOGO_ALT: 'HobbyCodes Logo',

  // Editor Headers
  INPUT_HEADER: 'JSON Girişi',
  OUTPUT_HEADER: 'Çıktı',

  // Button Tooltips
  FORMAT_TOOLTIP: "JSON'u uygun girintiyle biçimlendir",
  MINIFY_TOOLTIP: "Boşlukları kaldırarak JSON'u küçült",
  VALIDATE_TOOLTIP: 'JSON söz dizimini doğrula',
  SPACING_TOOLTIP: 'Girinti aralığını seç',
  RESET_PANELS_TOOLTIP: 'Panel genişliklerini 50/50 bölünmeye sıfırla',
  COPY_OUTPUT_TOOLTIP: 'Biçimlendirilmiş çıktıyı panoya kopyala',
  CLEAR_TOOLTIP: 'Hem girdi hem de çıktı editörlerini temizle',

  // Button Labels
  FORMAT_LABEL: 'Biçimlendir',
  MINIFY_LABEL: 'Küçült',
  VALIDATE_LABEL: 'Doğrula',
  RESET_PANELS_LABEL: 'Sıfırla',

  // Editor Panel Button Tooltips
  FORMAT_PANEL_TOOLTIP: "JSON'u uygun girintiyle biçimlendir",
  COPY_PANEL_TOOLTIP: 'Biçimlendirilmiş çıktıyı panoya kopyala',

  // Theme Labels and Tooltips
  THEME_LIGHT: 'Açık',
  THEME_DARK: 'Koyu',
  THEME_SYSTEM: 'Sistem',
  THEME_TOOLTIP_PREFIX: 'Mevcut tema: ',

  // Language Labels and Tooltips
  LANGUAGE_TOOLTIP_PREFIX: 'Dil: ',

  // Spacing Options
  SPACING_2: '2 boşluk',
  SPACING_4: '4 boşluk',

  // Status Messages
  VALID_JSON: '✅ Geçerli JSON',
  VALIDATION_PROMPT: 'Doğrulamak için JSON girin',
  ERROR_PREFIX: '❌ ',
  LINE_SUFFIX: ' satır',
  OUTPUT_PROMPT: 'Çıktı burada görünecek',

  // Toast Messages
  COPY_SUCCESS: 'Panoya kopyalandı!',
  MOBILE_WARNING: '📱 Bu web sitesi en iyi masaüstü veya tablet cihazlarda deneyimlenir',

  // Footer
  FOOTER_COOKIES:
    '🍪 Bu web sitesi yalnızca dil ve tema işlevselliği için temel çerezler kullanır. Takip veya analitik çerezi kullanılmaz. Bu siteyi kullanmaya devam ederek, temel çerezlerin minimum kullanımına onay vermiş olursunuz.',
  FOOTER_LANGUAGES: 'Küresel olarak 13 dili destekler',
  FOOTER_COPYRIGHT: '© 2025 ',
  FOOTER_COMPANY: 'HobbyCodes.com',
  FOOTER_MADE_BY: ' - Mukul tarafından ❤️ ile yapıldı, AI de yardım etti. Kaynak kod şurada mevcut: ',

  // Error Messages
  ERROR_INVALID_JSON: 'Geçersiz JSON',
  ERROR_FORMAT_FAILED: 'JSON biçimlendirme başarısız oldu',
  ERROR_MINIFY_FAILED: 'JSON küçültme başarısız oldu',
} as const;

export const DEFAULT_JSON = `{
  "kullanici": {
    "ad": "Ahmet Yılmaz",
    "yas": 28,
    "sehir": "İstanbul",
    "ulke": "Türkiye"
  },
  "tercihler": {
    "dil": "tr",
    "tema": "koyu",
    "bildirimler": true
  },
  "veriler": [1, 2, 3, 4, 5]
}`;

// Re-export shared constants from English version
export { STORAGE_KEYS, CONFIG } from './constants-en';

export const ASSETS = {
  LOGO: hobbycodes_logo,
  COMPANY_URL: 'https://hobbycodes.com',
  SOURCE_CODE_URL: 'https://github.com/m-debnath/mjson',
} as const;
