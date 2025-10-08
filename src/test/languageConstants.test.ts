import { describe, it, expect } from 'vitest';
import { UI_TEXT as UI_TEXT_EN } from '../components/language/constants-en';
import { UI_TEXT as UI_TEXT_NL } from '../components/language/constants-nl';
import { UI_TEXT as UI_TEXT_ES } from '../components/language/constants-es';
import { UI_TEXT as UI_TEXT_PT } from '../components/language/constants-pt';
import { UI_TEXT as UI_TEXT_DE } from '../components/language/constants-de';
import { UI_TEXT as UI_TEXT_MR } from '../components/language/constants-mr';
import { UI_TEXT as UI_TEXT_BN } from '../components/language/constants-bn';
import { UI_TEXT as UI_TEXT_TR } from '../components/language/constants-tr';
import { UI_TEXT as UI_TEXT_LV } from '../components/language/constants-lv';
import { UI_TEXT as UI_TEXT_JA } from '../components/language/constants-ja';
import { UI_TEXT as UI_TEXT_KO } from '../components/language/constants-ko';
import { UI_TEXT as UI_TEXT_SV } from '../components/language/constants-sv';
import { UI_TEXT as UI_TEXT_FR } from '../components/language/constants-fr';

describe('Language Constants - LANGUAGE_NAME property', () => {
  it('should have LANGUAGE_NAME property in all language constants', () => {
    const languageConstants = [
      { name: 'English', constants: UI_TEXT_EN },
      { name: 'Dutch', constants: UI_TEXT_NL },
      { name: 'Spanish', constants: UI_TEXT_ES },
      { name: 'Portuguese', constants: UI_TEXT_PT },
      { name: 'German', constants: UI_TEXT_DE },
      { name: 'Marathi', constants: UI_TEXT_MR },
      { name: 'Bengali', constants: UI_TEXT_BN },
      { name: 'Turkish', constants: UI_TEXT_TR },
      { name: 'Latvian', constants: UI_TEXT_LV },
      { name: 'Japanese', constants: UI_TEXT_JA },
      { name: 'Korean', constants: UI_TEXT_KO },
      { name: 'Swedish', constants: UI_TEXT_SV },
      { name: 'French', constants: UI_TEXT_FR },
    ];

    languageConstants.forEach(({ constants }) => {
      expect(constants).toHaveProperty('LANGUAGE_NAME');
      expect(typeof constants.LANGUAGE_NAME).toBe('string');
      expect(constants.LANGUAGE_NAME.length).toBeGreaterThan(0);
    });
  });

  it('should have correct LANGUAGE_NAME values for each language', () => {
    expect(UI_TEXT_EN.LANGUAGE_NAME).toBe('English');
    expect(UI_TEXT_NL.LANGUAGE_NAME).toBe('Nederlands');
    expect(UI_TEXT_ES.LANGUAGE_NAME).toBe('Español');
    expect(UI_TEXT_PT.LANGUAGE_NAME).toBe('Português');
    expect(UI_TEXT_DE.LANGUAGE_NAME).toBe('Deutsch');
    expect(UI_TEXT_MR.LANGUAGE_NAME).toBe('मराठी');
    expect(UI_TEXT_BN.LANGUAGE_NAME).toBe('বাংলা');
    expect(UI_TEXT_TR.LANGUAGE_NAME).toBe('Türkçe');
    expect(UI_TEXT_LV.LANGUAGE_NAME).toBe('Latviski');
    expect(UI_TEXT_JA.LANGUAGE_NAME).toBe('日本語');
    expect(UI_TEXT_KO.LANGUAGE_NAME).toBe('한국어');
    expect(UI_TEXT_SV.LANGUAGE_NAME).toBe('Svenska');
    expect(UI_TEXT_FR.LANGUAGE_NAME).toBe('Français');
  });

  it('should have language names in their respective native scripts', () => {
    // Latin script languages
    const latinScriptNames = [
      UI_TEXT_EN.LANGUAGE_NAME, // English
      UI_TEXT_NL.LANGUAGE_NAME, // Nederlands
      UI_TEXT_ES.LANGUAGE_NAME, // Español
      UI_TEXT_PT.LANGUAGE_NAME, // Português
      UI_TEXT_DE.LANGUAGE_NAME, // Deutsch
      UI_TEXT_TR.LANGUAGE_NAME, // Türkçe
      UI_TEXT_LV.LANGUAGE_NAME, // Latviski
      UI_TEXT_SV.LANGUAGE_NAME, // Svenska
      UI_TEXT_FR.LANGUAGE_NAME, // Français
    ];

    latinScriptNames.forEach(name => {
      // Check that it contains mostly Latin characters (allowing for accents and special characters)
      expect(/^[\u0020-\u024F\u1E00-\u1EFF]+$/.test(name)).toBe(true);
    });

    // Devanagari script (Marathi)
    expect(/[\u0900-\u097F]/.test(UI_TEXT_MR.LANGUAGE_NAME)).toBe(true);

    // Bengali script
    expect(/[\u0980-\u09FF]/.test(UI_TEXT_BN.LANGUAGE_NAME)).toBe(true);

    // Japanese script (contains Hiragana, Katakana, or Kanji)
    expect(/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(UI_TEXT_JA.LANGUAGE_NAME)).toBe(true);

    // Korean script (Hangul)
    expect(/[\uAC00-\uD7AF]/.test(UI_TEXT_KO.LANGUAGE_NAME)).toBe(true);
  });

  it('should have unique LANGUAGE_NAME values across all languages', () => {
    const allLanguageNames = [
      UI_TEXT_EN.LANGUAGE_NAME,
      UI_TEXT_NL.LANGUAGE_NAME,
      UI_TEXT_ES.LANGUAGE_NAME,
      UI_TEXT_PT.LANGUAGE_NAME,
      UI_TEXT_DE.LANGUAGE_NAME,
      UI_TEXT_MR.LANGUAGE_NAME,
      UI_TEXT_BN.LANGUAGE_NAME,
      UI_TEXT_TR.LANGUAGE_NAME,
      UI_TEXT_LV.LANGUAGE_NAME,
      UI_TEXT_JA.LANGUAGE_NAME,
      UI_TEXT_KO.LANGUAGE_NAME,
      UI_TEXT_SV.LANGUAGE_NAME,
      UI_TEXT_FR.LANGUAGE_NAME,
    ];

    const uniqueNames = new Set(allLanguageNames);
    expect(uniqueNames.size).toBe(allLanguageNames.length);
  });

  it('should maintain all existing UI_TEXT properties', () => {
    const requiredProperties = [
      'LANGUAGE_NAME',
      'TITLE',
      'SUBTITLE',
      'LOGO_ALT',
      'INPUT_HEADER',
      'OUTPUT_HEADER',
      'FORMAT_TOOLTIP',
      'MINIFY_TOOLTIP',
      'VALIDATE_TOOLTIP',
      'THEME_LIGHT',
      'THEME_DARK',
      'THEME_SYSTEM',
      'LANGUAGE_TOOLTIP_PREFIX',
      'VALID_JSON',
      'COPY_SUCCESS',
      'FOOTER_COOKIES',
    ];

    const languageConstants = [
      UI_TEXT_EN,
      UI_TEXT_NL,
      UI_TEXT_ES,
      UI_TEXT_PT,
      UI_TEXT_DE,
      UI_TEXT_MR,
      UI_TEXT_BN,
      UI_TEXT_TR,
      UI_TEXT_LV,
      UI_TEXT_JA,
      UI_TEXT_KO,
      UI_TEXT_SV,
      UI_TEXT_FR,
    ];

    languageConstants.forEach(constants => {
      requiredProperties.forEach(prop => {
        expect(constants).toHaveProperty(prop);
        expect(typeof constants[prop as keyof typeof constants]).toBe('string');
      });
    });
  });

  it('should have consistent structure across all language files', () => {
    const languageConstants = [
      UI_TEXT_EN,
      UI_TEXT_NL,
      UI_TEXT_ES,
      UI_TEXT_PT,
      UI_TEXT_DE,
      UI_TEXT_MR,
      UI_TEXT_BN,
      UI_TEXT_TR,
      UI_TEXT_LV,
      UI_TEXT_JA,
      UI_TEXT_KO,
      UI_TEXT_SV,
      UI_TEXT_FR,
    ];

    const baseKeys = Object.keys(UI_TEXT_EN);

    languageConstants.forEach(constants => {
      const keys = Object.keys(constants);

      // Each language should have the same keys as English (the base)
      expect(keys.sort()).toEqual(baseKeys.sort());
    });
  });
});
