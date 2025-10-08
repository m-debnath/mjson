import { hobbycodes_logo } from '../../assets';

// UI Text Constants - Bengali
export const UI_TEXT = {
  // Language Name (in native script)
  LANGUAGE_NAME: 'বাংলা',

  // Header
  TITLE: 'JSON ফরম্যাটার ও ভ্যালিডেটর',
  SUBTITLE: 'JSON ডেটা ফরম্যাট, ভ্যালিডেট ও মিনিফাই করুন',
  LOGO_ALT: 'HobbyCodes লোগো',

  // Editor Headers
  INPUT_HEADER: 'JSON ইনপুট',
  OUTPUT_HEADER: 'আউটপুট',

  // Button Tooltips
  FORMAT_TOOLTIP: 'সঠিক ইন্ডেন্টেশন সহ JSON ফরম্যাট করুন',
  MINIFY_TOOLTIP: 'হোয়াইটস্পেস সরিয়ে JSON মিনিফাই করুন',
  VALIDATE_TOOLTIP: 'JSON সিনট্যাক্স যাচাই করুন',
  SPACING_TOOLTIP: 'ইন্ডেন্টেশন স্পেসিং নির্বাচন করুন',
  RESET_PANELS_TOOLTIP: 'প্যানেল প্রস্থ 50/50 বিভাগে রিসেট করুন',
  COPY_OUTPUT_TOOLTIP: 'ফরম্যাট করা আউটপুট ক্লিপবোর্ডে কপি করুন',
  CLEAR_TOOLTIP: 'ইনপুট এবং আউটপুট উভয় এডিটর পরিষ্কার করুন',

  // Button Labels
  FORMAT_LABEL: 'ফরম্যাট',
  MINIFY_LABEL: 'মিনিফাই',
  VALIDATE_LABEL: 'যাচাই',
  RESET_PANELS_LABEL: 'রিসেট',

  // Editor Panel Button Tooltips
  FORMAT_PANEL_TOOLTIP: 'সঠিক ইন্ডেন্টেশন সহ JSON ফরম্যাট করুন',
  COPY_PANEL_TOOLTIP: 'ফরম্যাট করা আউটপুট ক্লিপবোর্ডে কপি করুন',

  // Theme Labels and Tooltips
  THEME_LIGHT: 'হালকা',
  THEME_DARK: 'অন্ধকার',
  THEME_SYSTEM: 'সিস্টেম',
  THEME_TOOLTIP_PREFIX: 'বর্তমান থিম: ',

  // Language Labels and Tooltips
  LANGUAGE_TOOLTIP_PREFIX: 'ভাষা: ',

  // Spacing Options
  SPACING_2: '২ স্পেস',
  SPACING_4: '৪ স্পেস',

  // Status Messages
  VALID_JSON: '✅ বৈধ JSON',
  VALIDATION_PROMPT: 'যাচাই করার জন্য JSON লিখুন',
  ERROR_PREFIX: '❌ ',
  LINE_SUFFIX: ' লাইন',
  OUTPUT_PROMPT: 'আউটপুট এখানে দেখা যাবে',

  // Toast Messages
  COPY_SUCCESS: 'ক্লিপবোর্ডে কপি করা হয়েছে!',
  MOBILE_WARNING: '📱 এই ওয়েবসাইট ডেস্কটপ বা ট্যাবলেট ডিভাইসে ভালো কাজ করে',

  // Footer
  FOOTER_COOKIES:
    '🍪 এই ওয়েবসাইট শুধুমাত্র ভাষা এবং থিম কার্যকারিতার জন্য প্রয়োজনীয় কুকিজ ব্যবহার করে। কোন ট্র্যাকিং বা বিশ্লেষণ কুকিজ ব্যবহার করা হয় না। এই সাইট ব্যবহার অব্যাহত রেখে, আপনি আমাদের প্রয়োজনীয় কুকিজের ন্যূনতম ব্যবহারে সম্মতি দিচ্ছেন।',
  FOOTER_LANGUAGES: 'বিশ্বব্যাপী ১৩টি ভাষা সমর্থন করে',
  FOOTER_COPYRIGHT: '© ২০২৫ ',
  FOOTER_COMPANY: 'HobbyCodes.com',
  FOOTER_MADE_BY: ' - মুকুল ❤️ দিয়ে তৈরি করেছেন, AI ও সাহায্য করেছে। সোর্স কোড পাওয়া যাবে ',

  // Error Messages
  ERROR_INVALID_JSON: 'অবৈধ JSON',
  ERROR_FORMAT_FAILED: 'JSON ফরম্যাট করতে ব্যর্থ',
  ERROR_MINIFY_FAILED: 'JSON মিনিফাই করতে ব্যর্থ',
} as const;

// Default JSON Sample
export const DEFAULT_JSON = `{
  "ব্যবহারকারী": {
    "নাম": "সুমিত্রা বন্দ্যোপাধ্যায়",
    "বয়স": 26,
    "শহর": "ঢাকা",
    "দেশ": "বাংলাদেশ"
  },
  "সেটিংস": {
    "ভাষা": "bn",
    "থিম": "হালকা",
    "বিজ্ঞপ্তি": true
  },
  "ডেটা": [1, 2, 3, 4, 5]
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
