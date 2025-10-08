import { describe, it, expect } from 'vitest';
import { getLanguageName } from '../components/language';
import type { Language } from '../components/language';

describe('getLanguageName function', () => {
  it('should return correct language names in native scripts', () => {
    // Test all supported languages
    const expectedNames: Record<Language, string> = {
      en: 'English',
      nl: 'Nederlands',
      es: 'Español',
      pt: 'Português',
      de: 'Deutsch',
      mr: 'मराठी',
      bn: 'বাংলা',
      tr: 'Türkçe',
      lv: 'Latviski',
      ja: '日本語',
      ko: '한국어',
      sv: 'Svenska',
      fr: 'Français',
    };

    // Test each language
    Object.entries(expectedNames).forEach(([lang, expectedName]) => {
      const result = getLanguageName(lang as Language);
      expect(result).toBe(expectedName);
    });
  });

  it('should return English as default for invalid language code', () => {
    // @ts-expect-error Testing invalid language code
    const result = getLanguageName('invalid');
    expect(result).toBe('English');
  });

  it('should handle all Latin script languages correctly', () => {
    const latinLanguages: Language[] = ['en', 'nl', 'es', 'pt', 'de', 'tr', 'lv', 'sv', 'fr'];

    latinLanguages.forEach(lang => {
      const result = getLanguageName(lang);
      expect(result).toBeTruthy();
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });
  });

  it('should handle Devanagari script (Marathi) correctly', () => {
    const result = getLanguageName('mr');
    expect(result).toBe('मराठी');
    // Verify it contains Devanagari characters
    expect(/[\u0900-\u097F]/.test(result)).toBe(true);
  });

  it('should handle Bengali script correctly', () => {
    const result = getLanguageName('bn');
    expect(result).toBe('বাংলা');
    // Verify it contains Bengali characters
    expect(/[\u0980-\u09FF]/.test(result)).toBe(true);
  });

  it('should handle Japanese script correctly', () => {
    const result = getLanguageName('ja');
    expect(result).toBe('日本語');
    // Verify it contains Japanese characters (Hiragana/Katakana/Kanji)
    expect(/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(result)).toBe(true);
  });

  it('should handle Korean script correctly', () => {
    const result = getLanguageName('ko');
    expect(result).toBe('한국어');
    // Verify it contains Korean characters (Hangul)
    expect(/[\uAC00-\uD7AF]/.test(result)).toBe(true);
  });

  it('should return consistent results for multiple calls', () => {
    const languages: Language[] = ['en', 'ja', 'mr', 'bn', 'es'];

    languages.forEach(lang => {
      const result1 = getLanguageName(lang);
      const result2 = getLanguageName(lang);
      expect(result1).toBe(result2);
    });
  });

  it('should have unique names for all languages', () => {
    const allLanguages: Language[] = ['en', 'nl', 'es', 'pt', 'de', 'mr', 'bn', 'tr', 'lv', 'ja', 'ko', 'sv', 'fr'];
    const names = allLanguages.map(lang => getLanguageName(lang));
    const uniqueNames = new Set(names);

    expect(uniqueNames.size).toBe(allLanguages.length);
  });
});
