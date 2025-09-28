import { hobbycodes_logo } from '../../assets';

// UI Text Constants - Marathi
export const UI_TEXT = {
  // Header
  TITLE: 'JSON फॉर्मेटर आणि व्हॅलिडेटर',
  SUBTITLE: 'JSON डेटा फॉर्मेट, व्हॅलिडेट आणि मिनिफाय करा',
  LOGO_ALT: 'HobbyCodes लोगो',

  // Editor Headers
  INPUT_HEADER: 'JSON इनपुट',
  OUTPUT_HEADER: 'आउटपुट',

  // Button Tooltips
  FORMAT_TOOLTIP: 'योग्य इंडेंटेशनसह JSON फॉर्मेट करा',
  MINIFY_TOOLTIP: 'व्हाइटस्पेस काढून JSON मिनिफाय करा',
  VALIDATE_TOOLTIP: 'JSON सिंटॅक्स व्हॅलिडेट करा',
  SPACING_TOOLTIP: 'इंडेंटेशन स्पेसिंग निवडा',
  RESET_PANELS_TOOLTIP: 'पॅनेल रुंदी 50/50 विभाजनावर रीसेट करा',
  COPY_OUTPUT_TOOLTIP: 'फॉर्मेट केलेला आउटपुट क्लिपबोर्डमध्ये कॉपी करा',
  CLEAR_TOOLTIP: 'इनपुट आणि आउटपुट दोन्ही एडिटर साफ करा',

  // Button Labels
  FORMAT_LABEL: 'फॉर्मेट',
  MINIFY_LABEL: 'मिनिफाय',
  VALIDATE_LABEL: 'व्हॅलिडेट',
  RESET_PANELS_LABEL: 'रीसेट',

  // Editor Panel Button Tooltips
  FORMAT_PANEL_TOOLTIP: 'योग्य इंडेंटेशनसह JSON फॉर्मेट करा',
  COPY_PANEL_TOOLTIP: 'फॉर्मेट केलेला आउटपुट क्लिपबोर्डमध्ये कॉपी करा',

  // Theme Labels and Tooltips
  THEME_LIGHT: 'उजळ',
  THEME_DARK: 'गडद',
  THEME_SYSTEM: 'सिस्टम',
  THEME_TOOLTIP_PREFIX: 'सध्याची थीम: ',

  // Language Labels and Tooltips
  LANGUAGE_TOOLTIP_PREFIX: 'भाषा: ',

  // Spacing Options
  SPACING_2: '२ स्पेसेस',
  SPACING_4: '४ स्पेसेस',

  // Status Messages
  VALID_JSON: '✅ वैध JSON',
  VALIDATION_PROMPT: 'व्हॅलिडेट करण्यासाठी JSON प्रविष्ट करा',
  ERROR_PREFIX: '❌ ',
  LINE_SUFFIX: ' ओळी',
  OUTPUT_PROMPT: 'आउटपुट येथे दिसेल',

  // Toast Messages
  COPY_SUCCESS: 'क्लिपबोर्डमध्ये कॉपी केले!',
  MOBILE_WARNING: '📱 ही वेबसाइट डेस्कटॉप किंवा टॅबलेट डिव्हाइसेसवर चांगली काम करते',

  // Footer
  FOOTER_COOKIES:
    '🍪 ही वेबसाइट फक्त भाषा आणि थीम कार्यक्षमतेसाठी आवश्यक कुकीज वापरते. कोणत्याही ट्रॅकिंग किंवा विश्लेषण कुकीजचा वापर केला जात नाही. या साइटचा वापर सुरू ठेवून, तुम्ही आमच्या आवश्यक कुकीजच्या किमान वापरास संमती देता.',
  FOOTER_LANGUAGES: 'जागतिक स्तरावर 13 भाषांना समर्थन',
  FOOTER_COPYRIGHT: '© 2025 ',
  FOOTER_COMPANY: 'HobbyCodes.com',
  FOOTER_MADE_BY: ' - मुकुलने ❤️ सह बनवले, AI ने देखील मदत केली. सोर्स कोड उपलब्ध आहे ',

  // Error Messages
  ERROR_INVALID_JSON: 'अवैध JSON',
  ERROR_FORMAT_FAILED: 'JSON फॉर्मेट करण्यात अयशस्वी',
  ERROR_MINIFY_FAILED: 'JSON मिनिफाय करण्यात अयशस्वी',
} as const;

// Default JSON Sample
export const DEFAULT_JSON = `{
  "वापरकर्ता": {
    "नाव": "प्रिया पाटील",
    "वय": 27,
    "शहर": "पुणे",
    "देश": "भारत"
  },
  "सेटिंग्ज": {
    "भाषा": "mr",
    "थीम": "गडद",
    "सूचना": true
  },
  "डेटा": [1, 2, 3, 4, 5]
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
