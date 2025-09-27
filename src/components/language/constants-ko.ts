import { hobbycodes_logo } from '../../assets';

// UI Text Constants - Korean
export const UI_TEXT = {
  // Header
  TITLE: 'JSON 포매터 & 검증기',
  SUBTITLE: 'JSON 데이터 포맷, 검증 및 압축',
  LOGO_ALT: 'HobbyCodes 로고',

  // Editor Headers
  INPUT_HEADER: 'JSON 입력',
  OUTPUT_HEADER: '출력',

  // Button Tooltips
  FORMAT_TOOLTIP: '적절한 들여쓰기로 JSON 포맷',
  MINIFY_TOOLTIP: '공백을 제거하여 JSON 압축',
  VALIDATE_TOOLTIP: 'JSON 문법 검증',
  SPACING_TOOLTIP: '들여쓰기 간격 선택',
  RESET_PANELS_TOOLTIP: '패널 너비를 50/50 분할로 재설정',
  COPY_OUTPUT_TOOLTIP: '포맷된 출력을 클립보드에 복사',
  CLEAR_TOOLTIP: '입력 및 출력 편집기 모두 지우기',

  // Button Labels
  FORMAT_LABEL: '포맷',
  MINIFY_LABEL: '압축',
  VALIDATE_LABEL: '검증',
  RESET_PANELS_LABEL: '재설정',

  // Editor Panel Button Tooltips
  FORMAT_PANEL_TOOLTIP: '적절한 들여쓰기로 JSON 포맷',
  COPY_PANEL_TOOLTIP: '포맷된 출력을 클립보드에 복사',

  // Theme Labels and Tooltips
  THEME_LIGHT: '라이트',
  THEME_DARK: '다크',
  THEME_SYSTEM: '시스템',
  THEME_TOOLTIP_PREFIX: '현재 테마: ',

  // Language Labels and Tooltips
  LANGUAGE_TOOLTIP_PREFIX: '언어: ',

  // Spacing Options
  SPACING_2: '2 스페이스',
  SPACING_4: '4 스페이스',

  // Status Messages
  VALID_JSON: '✅ 유효한 JSON',
  VALIDATION_PROMPT: '검증할 JSON을 입력하세요',
  ERROR_PREFIX: '❌ ',
  LINE_SUFFIX: ' 줄',
  OUTPUT_PROMPT: '여기에 출력이 표시됩니다',

  // Toast Messages
  COPY_SUCCESS: '클립보드에 복사되었습니다!',
  MOBILE_WARNING: '📱 이 웹사이트는 데스크탑이나 태블릿 기기에서 최적으로 작동합니다',

  // Footer
  FOOTER_COOKIES:
    '🍪 이 웹사이트는 언어 및 테마 기능을 위한 필수 쿠키만 사용합니다. 추적이나 분석 쿠키는 사용하지 않습니다. 이 사이트를 계속 사용함으로써 필수 쿠키의 최소한의 사용에 동의하는 것으로 간주됩니다.',
  FOOTER_LANGUAGES: '전 세계적으로 13개 언어 지원',
  FOOTER_COPYRIGHT: '© 2025 ',
  FOOTER_COMPANY: 'HobbyCodes.com',
  FOOTER_MADE_BY: ' - Mukul이 ❤️로 제작, AI도 도움을 주었습니다. 소스 코드는 여기에서 확인 가능: ',

  // Error Messages
  ERROR_INVALID_JSON: '유효하지 않은 JSON',
  ERROR_FORMAT_FAILED: 'JSON 포맷에 실패했습니다',
  ERROR_MINIFY_FAILED: 'JSON 압축에 실패했습니다',
} as const;

export const DEFAULT_JSON = `{
  "사용자": {
    "이름": "김민수",
    "나이": 30,
    "도시": "서울",
    "국가": "대한민국"
  },
  "설정": {
    "언어": "ko",
    "테마": "다크",
    "알림": true
  },
  "데이터": [1, 2, 3, 4, 5]
}`;

// Re-export shared constants from English version
export { STORAGE_KEYS, CONFIG } from './constants-en';

export const ASSETS = {
  LOGO: hobbycodes_logo,
  COMPANY_URL: 'https://hobbycodes.com',
  SOURCE_CODE_URL: 'https://github.com/m-debnath/mjson',
} as const;
