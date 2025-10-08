import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { JsonFormatter } from '../components/JsonFormatter';
import { getLanguageName } from '../components/language';
import type { Language } from '../components/language';

// Mock Monaco Editor
vi.mock('@monaco-editor/react', () => ({
  default: vi.fn(({ value, onChange }) => (
    <textarea data-testid="monaco-editor" value={value} onChange={e => onChange?.(e.target.value)} />
  )),
}));

describe('Language Dropdown with Native Names', () => {
  it('should render language dropdown with flags and native names', () => {
    render(<JsonFormatter />);

    const languageDropdown = screen
      .getAllByRole('combobox')
      .find(select =>
        Array.from((select as HTMLSelectElement).options).some(option => option.value === 'en')
      ) as HTMLSelectElement;
    expect(languageDropdown).toBeInTheDocument();

    // Verify the dropdown contains the select element
    expect(languageDropdown.tagName).toBe('SELECT');
  });

  it('should have options with correct flag and language name format', () => {
    render(<JsonFormatter />);

    const languageDropdown = screen
      .getAllByRole('combobox')
      .find(select =>
        Array.from((select as HTMLSelectElement).options).some(option => option.value === 'en')
      ) as HTMLSelectElement;
    const options = Array.from(languageDropdown.options);

    // Test a few key languages
    const testCases = [
      { value: 'en', expectedText: '🇺🇸 English', flag: '🇺🇸' },
      { value: 'es', expectedText: '🇪🇸 Español', flag: '🇪🇸' },
      { value: 'mr', expectedText: '🇮🇳 मराठी', flag: '🇮🇳' },
      { value: 'ja', expectedText: '🇯🇵 日本語', flag: '🇯🇵' },
      { value: 'bn', expectedText: '🇧🇩 বাংলা', flag: '🇧🇩' },
    ];

    testCases.forEach(({ value, expectedText, flag }) => {
      const option = options.find(opt => opt.value === value);
      expect(option).toBeDefined();
      expect(option?.textContent).toBe(expectedText);
      expect(option?.textContent).toContain(flag);
      expect(option?.textContent).toContain(getLanguageName(value as Language));
    });
  });

  it('should display all supported languages in dropdown', () => {
    render(<JsonFormatter />);

    const languageDropdown = screen
      .getAllByRole('combobox')
      .find(select =>
        Array.from((select as HTMLSelectElement).options).some(option => option.value === 'en')
      ) as HTMLSelectElement;
    const options = Array.from(languageDropdown.options);

    const expectedLanguages: Language[] = [
      'en',
      'nl',
      'sv',
      'de',
      'fr',
      'es',
      'pt',
      'lv',
      'tr',
      'mr',
      'bn',
      'ja',
      'ko',
    ];

    expectedLanguages.forEach(lang => {
      const option = options.find(opt => opt.value === lang);
      expect(option).toBeDefined();
      expect(option?.textContent).toContain(getLanguageName(lang));
    });
  });

  it('should change language when option is selected', () => {
    render(<JsonFormatter />);

    const languageDropdown = screen
      .getAllByRole('combobox')
      .find(select =>
        Array.from((select as HTMLSelectElement).options).some(option => option.value === 'en')
      ) as HTMLSelectElement;

    // Change to Spanish
    fireEvent.change(languageDropdown, { target: { value: 'es' } });
    expect(languageDropdown.value).toBe('es');

    // Change to Japanese
    fireEvent.change(languageDropdown, { target: { value: 'ja' } });
    expect(languageDropdown.value).toBe('ja');

    // Change to Marathi
    fireEvent.change(languageDropdown, { target: { value: 'mr' } });
    expect(languageDropdown.value).toBe('mr');
  });

  it('should have proper flag emojis for each language', () => {
    render(<JsonFormatter />);

    const languageDropdown = screen
      .getAllByRole('combobox')
      .find(select =>
        Array.from((select as HTMLSelectElement).options).some(option => option.value === 'en')
      ) as HTMLSelectElement;
    const options = Array.from(languageDropdown.options);

    const flagMappings = [
      { code: 'en', flag: '🇺🇸' },
      { code: 'nl', flag: '🇳🇱' },
      { code: 'sv', flag: '🇸🇪' },
      { code: 'de', flag: '🇩🇪' },
      { code: 'fr', flag: '🇫🇷' },
      { code: 'es', flag: '🇪🇸' },
      { code: 'pt', flag: '🇵🇹' },
      { code: 'lv', flag: '🇱🇻' },
      { code: 'tr', flag: '🇹🇷' },
      { code: 'mr', flag: '🇮🇳' },
      { code: 'bn', flag: '🇧🇩' },
      { code: 'ja', flag: '🇯🇵' },
      { code: 'ko', flag: '🇰🇷' },
    ];

    flagMappings.forEach(({ code, flag }) => {
      const option = options.find(opt => opt.value === code);
      expect(option?.textContent).toContain(flag);
    });
  });

  it('should have tooltip showing current language in native script', () => {
    render(<JsonFormatter />);

    // Find the select element for language options
    const languageSelect = screen
      .getAllByRole('combobox')
      .find(select =>
        Array.from((select as HTMLSelectElement).options).some(option => option.value === 'en')
      ) as HTMLSelectElement;

    // Find the parent label which contains the tooltip
    const languageDropdown = languageSelect.parentElement as HTMLLabelElement;

    // Default should be English
    expect(languageDropdown.title).toContain('English');

    // Change to Spanish and check tooltip updates
    fireEvent.change(languageSelect, { target: { value: 'es' } });

    // The tooltip should now contain Spanish
    expect(languageDropdown.title).toContain('Español');
  });

  it('should maintain option order as specified', () => {
    render(<JsonFormatter />);

    const languageDropdown = screen
      .getAllByRole('combobox')
      .find(select =>
        Array.from((select as HTMLSelectElement).options).some(option => option.value === 'en')
      ) as HTMLSelectElement;
    const options = Array.from(languageDropdown.options);
    const values = options.map(opt => opt.value);

    // Verify the order matches the expected grouping
    const expectedOrder = [
      'en', // English
      'nl',
      'sv',
      'de',
      'fr',
      'es',
      'pt',
      'lv', // European
      'tr', // Middle/Near East
      'mr',
      'bn', // South Asia
      'ja',
      'ko', // Far East
    ];

    expect(values).toEqual(expectedOrder);
  });

  it('should display correct Unicode characters for non-Latin scripts', () => {
    render(<JsonFormatter />);

    const languageDropdown = screen
      .getAllByRole('combobox')
      .find(select =>
        Array.from((select as HTMLSelectElement).options).some(option => option.value === 'en')
      ) as HTMLSelectElement;
    const options = Array.from(languageDropdown.options);

    // Check Marathi (Devanagari)
    const marathiOption = options.find(opt => opt.value === 'mr');
    expect(marathiOption?.textContent).toMatch(/[\u0900-\u097F]/); // Devanagari range

    // Check Bengali
    const bengaliOption = options.find(opt => opt.value === 'bn');
    expect(bengaliOption?.textContent).toMatch(/[\u0980-\u09FF]/); // Bengali range

    // Check Japanese
    const japaneseOption = options.find(opt => opt.value === 'ja');
    expect(japaneseOption?.textContent).toMatch(/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/); // Hiragana/Katakana/Kanji

    // Check Korean
    const koreanOption = options.find(opt => opt.value === 'ko');
    expect(koreanOption?.textContent).toMatch(/[\uAC00-\uD7AF]/); // Hangul
  });
});
