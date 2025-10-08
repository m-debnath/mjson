import { hobbycodes_logo } from '../../assets';

// UI Text Constants - Japanese
export const UI_TEXT = {
  // Language Name (in native script)
  LANGUAGE_NAME: '日本語',

  // Header
  TITLE: 'JSONフォーマッター＆バリデーター',
  SUBTITLE: 'JSONデータのフォーマット、検証、および圧縮',
  LOGO_ALT: 'HobbyCodesロゴ',

  // Editor Headers
  INPUT_HEADER: 'JSON入力',
  OUTPUT_HEADER: '出力',

  // Button Tooltips
  FORMAT_TOOLTIP: '適切なインデントでJSONをフォーマット',
  MINIFY_TOOLTIP: '空白を削除してJSONを圧縮',
  VALIDATE_TOOLTIP: 'JSON構文を検証',
  SPACING_TOOLTIP: 'インデントのスペース数を選択',
  RESET_PANELS_TOOLTIP: 'パネル幅を50/50分割にリセット',
  COPY_OUTPUT_TOOLTIP: 'フォーマット済み出力をクリップボードにコピー',
  CLEAR_TOOLTIP: '入力と出力の両方のエディタをクリア',

  // Button Labels
  FORMAT_LABEL: 'フォーマット',
  MINIFY_LABEL: '圧縮',
  VALIDATE_LABEL: '検証',
  RESET_PANELS_LABEL: 'リセット',

  // Editor Panel Button Tooltips
  FORMAT_PANEL_TOOLTIP: '適切なインデントでJSONをフォーマット',
  COPY_PANEL_TOOLTIP: 'フォーマット済み出力をクリップボードにコピー',

  // Theme Labels and Tooltips
  THEME_LIGHT: 'ライト',
  THEME_DARK: 'ダーク',
  THEME_SYSTEM: 'システム',
  THEME_TOOLTIP_PREFIX: '現在のテーマ: ',

  // Language Labels and Tooltips
  LANGUAGE_TOOLTIP_PREFIX: '言語: ',

  // Spacing Options
  SPACING_2: '2スペース',
  SPACING_4: '4スペース',

  // Status Messages
  VALID_JSON: '✅ 有効なJSON',
  VALIDATION_PROMPT: '検証するJSONを入力してください',
  ERROR_PREFIX: '❌ ',
  LINE_SUFFIX: ' 行',
  OUTPUT_PROMPT: 'ここに出力が表示されます',

  // Toast Messages
  COPY_SUCCESS: 'クリップボードにコピーしました！',
  MOBILE_WARNING: '📱 このウェブサイトはデスクトップまたはタブレットデバイスで最適に動作します',

  // Footer
  FOOTER_COOKIES:
    '🍪 このウェブサイトは言語とテーマ機能のために必要最小限のクッキーのみを使用します。トラッキングや分析クッキーは使用していません。このサイトを引き続き使用することで、必要最小限のクッキーの使用に同意したものとみなされます。',
  FOOTER_LANGUAGES: 'グローバルに13言語をサポート',
  FOOTER_COPYRIGHT: '© 2025 ',
  FOOTER_COMPANY: 'HobbyCodes.com',
  FOOTER_MADE_BY: ' - Mukulによって❤️で作成、AIも支援しました。ソースコードは以下で入手可能: ',

  // Error Messages
  ERROR_INVALID_JSON: '無効なJSON',
  ERROR_FORMAT_FAILED: 'JSONフォーマットに失敗しました',
  ERROR_MINIFY_FAILED: 'JSON圧縮に失敗しました',
} as const;

export const DEFAULT_JSON = `{
  "ユーザー": {
    "名前": "田中太郎",
    "年齢": 25,
    "都市": "東京",
    "国": "日本"
  },
  "設定": {
    "言語": "ja",
    "テーマ": "ダーク",
    "通知": true
  },
  "データ": [1, 2, 3, 4, 5]
}`;

// Re-export shared constants from English version
export { STORAGE_KEYS, CONFIG } from './constants-en';

export const ASSETS = {
  LOGO: hobbycodes_logo,
  COMPANY_URL: 'https://hobbycodes.com',
  SOURCE_CODE_URL: 'https://github.com/m-debnath/mjson',
} as const;
