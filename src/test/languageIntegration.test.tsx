import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { JsonFormatter } from '../components/JsonFormatter';
import { getLanguageName } from '../components/language';
import type { Language } from '../components/language';

// Mock Monaco Editor
vi.mock('@monaco-editor/react', () => ({
  default: vi.fn(({ value, onChange }) => (
    <textarea data-testid="monaco-editor" value={value} onChange={e => onChange?.(e.target.value)} />
  )),
}));

describe('Language Integration Tests', () => {
  it('should integrate getLanguageName with language dropdown correctly', () => {
    render(<JsonFormatter />);

    // Find the language dropdown by looking for the select with language options
    const languageDropdown = screen
      .getAllByRole('combobox')
      .find(select =>
        Array.from((select as HTMLSelectElement).options).some(option => option.value === 'en')
      ) as HTMLSelectElement;

    expect(languageDropdown).toBeDefined();

    // Test that each option in the dropdown matches what getLanguageName returns
    const options = Array.from(languageDropdown.options);

    options.forEach(option => {
      const languageCode = option.value as Language;
      const expectedName = getLanguageName(languageCode);

      // Option text should contain the language name from getLanguageName
      expect(option.textContent).toContain(expectedName);

      // Option text should also contain a flag emoji (starts with flag)
      expect(option.textContent).toMatch(/^🇧🇩|^🇩🇪|^🇪🇸|^🇫🇷|^🇮🇳|^🇯🇵|^🇰🇷|^🇱🇻|^🇳🇱|^🇵🇹|^🇸🇪|^🇹🇷|^🇺🇸/);
    });
  });

  it('should update tooltip when language changes using getLanguageName', async () => {
    render(<JsonFormatter />);

    // Find the language select element
    let languageSelect = screen
      .getAllByRole('combobox')
      .find(select =>
        Array.from((select as HTMLSelectElement).options).some(option => option.value === 'en')
      ) as HTMLSelectElement;

    // Find the parent label which contains the tooltip
    let languageDropdown = languageSelect.parentElement as HTMLLabelElement;

    expect(languageDropdown).toBeDefined();
    expect(languageDropdown.title).toContain('English');

    // Change to German
    fireEvent.change(languageSelect, { target: { value: 'de' } });

    // Wait for tooltip to update
    await waitFor(() => {
      languageSelect = screen
        .getAllByRole('combobox')
        .find(select =>
          Array.from((select as HTMLSelectElement).options).some(option => option.value === 'en')
        ) as HTMLSelectElement;
      languageDropdown = languageSelect.parentElement as HTMLLabelElement;
      expect(languageDropdown.title).toContain(getLanguageName('de'));
      expect(languageDropdown.title).toContain('Deutsch');
    });

    // Change to Japanese
    fireEvent.change(languageSelect, { target: { value: 'ja' } });

    await waitFor(() => {
      languageSelect = screen
        .getAllByRole('combobox')
        .find(select =>
          Array.from((select as HTMLSelectElement).options).some(option => option.value === 'en')
        ) as HTMLSelectElement;
      languageDropdown = languageSelect.parentElement as HTMLLabelElement;
      expect(languageDropdown.title).toContain(getLanguageName('ja'));
      expect(languageDropdown.title).toContain('日本語');
    });
  });

  it('should handle language changes with complex Unicode characters', async () => {
    render(<JsonFormatter />);

    let languageSelect = screen
      .getAllByRole('combobox')
      .find(select =>
        Array.from((select as HTMLSelectElement).options).some(option => option.value === 'en')
      ) as HTMLSelectElement;

    let languageDropdown = languageSelect.parentElement as HTMLLabelElement;

    // Test languages with complex Unicode
    const complexLanguages = [
      { code: 'mr', name: 'मराठी' }, // Devanagari script
      { code: 'bn', name: 'বাংলা' }, // Bengali script
      { code: 'ja', name: '日本語' }, // Japanese (Kanji/Hiragana)
      { code: 'ko', name: '한국어' }, // Korean (Hangul)
    ];

    for (const { code, name } of complexLanguages) {
      fireEvent.change(languageSelect, { target: { value: code } });

      await waitFor(() => {
        languageSelect = screen
          .getAllByRole('combobox')
          .find(select =>
            Array.from((select as HTMLSelectElement).options).some(option => option.value === 'en')
          ) as HTMLSelectElement;
        languageDropdown = languageSelect.parentElement as HTMLLabelElement;
        const option = Array.from(languageSelect.options).find(opt => opt.value === code);
        expect(option?.textContent).toContain(name);

        // Check that tooltip contains the language name
        expect(languageDropdown.title).toContain(name);
      });
    }
  });

  it('should maintain language selection state correctly', async () => {
    render(<JsonFormatter />);

    let languageSelect = screen
      .getAllByRole('combobox')
      .find(select =>
        Array.from((select as HTMLSelectElement).options).some(option => option.value === 'en')
      ) as HTMLSelectElement;

    let languageDropdown = languageSelect.parentElement as HTMLLabelElement;

    // Change to German
    fireEvent.change(languageSelect, { target: { value: 'de' } });
    expect(languageSelect.value).toBe('de');

    await waitFor(() => {
      languageSelect = screen
        .getAllByRole('combobox')
        .find(select =>
          Array.from((select as HTMLSelectElement).options).some(option => option.value === 'en')
        ) as HTMLSelectElement;
      languageDropdown = languageSelect.parentElement as HTMLLabelElement;
      expect(languageDropdown.title).toContain('Deutsch');
    });

    // Verify the selected option has the correct text
    const selectedOption = languageSelect.selectedOptions[0];
    expect(selectedOption.textContent).toBe('🇩🇪 Deutsch');
    expect(selectedOption.textContent).toContain(getLanguageName('de'));
  });

  it('should have consistent flag-name pairing across all options', () => {
    render(<JsonFormatter />);

    const languageLabel = screen.getByTitle(/Language:/) as HTMLLabelElement;
    const languageDropdown = languageLabel.querySelector('select') as HTMLSelectElement;
    const options = Array.from(languageDropdown.options);

    const expectedPairings = [
      { value: 'en', flag: '🇺🇸', name: 'English' },
      { value: 'nl', flag: '🇳🇱', name: 'Nederlands' },
      { value: 'sv', flag: '🇸🇪', name: 'Svenska' },
      { value: 'de', flag: '🇩🇪', name: 'Deutsch' },
      { value: 'fr', flag: '🇫🇷', name: 'Français' },
      { value: 'es', flag: '🇪🇸', name: 'Español' },
      { value: 'pt', flag: '🇵🇹', name: 'Português' },
      { value: 'lv', flag: '🇱🇻', name: 'Latviski' },
      { value: 'tr', flag: '🇹🇷', name: 'Türkçe' },
      { value: 'mr', flag: '🇮🇳', name: 'मराठी' },
      { value: 'bn', flag: '🇧🇩', name: 'বাংলা' },
      { value: 'ja', flag: '🇯🇵', name: '日本語' },
      { value: 'ko', flag: '🇰🇷', name: '한국어' },
    ];

    expectedPairings.forEach(({ value, flag, name }) => {
      const option = options.find(opt => opt.value === value);
      expect(option).toBeDefined();
      expect(option?.textContent).toBe(`${flag} ${name}`);
      expect(getLanguageName(value as Language)).toBe(name);
    });
  });

  it('should handle rapid language switching correctly', async () => {
    render(<JsonFormatter />);

    let languageDropdown = screen
      .getAllByRole('combobox')
      .find(select =>
        Array.from((select as HTMLSelectElement).options).some(option => option.value === 'en')
      ) as HTMLSelectElement;

    // Rapidly switch between languages
    const languages = ['es', 'ja', 'mr', 'de', 'en'];

    for (const lang of languages) {
      fireEvent.change(languageDropdown, { target: { value: lang } });
      languageDropdown = screen
        .getAllByRole('combobox')
        .find(select =>
          Array.from((select as HTMLSelectElement).options).some(option => option.value === 'en')
        ) as HTMLSelectElement;
      expect(languageDropdown.value).toBe(lang);

      // Verify the option text is correct
      const selectedOption = languageDropdown.selectedOptions[0];
      expect(selectedOption.textContent).toContain(getLanguageName(lang as Language));
    }
  });

  it('should maintain accessibility with complex Unicode text', () => {
    render(<JsonFormatter />);

    const languageSelect = screen
      .getAllByRole('combobox')
      .find(select =>
        Array.from((select as HTMLSelectElement).options).some(option => option.value === 'en')
      ) as HTMLSelectElement;

    const languageDropdown = languageSelect.parentElement as HTMLLabelElement;

    // Verify accessibility attributes are maintained
    expect(languageDropdown).toHaveAttribute('title');

    // Test that Unicode text doesn't break accessibility
    const options = Array.from(languageSelect.options);
    options.forEach(option => {
      expect(option.value).toBeTruthy();
      expect(option.textContent).toBeTruthy();

      // Verify Unicode characters are properly rendered (not broken or corrupted)
      const text = option.textContent || '';
      expect(text.length).toBeGreaterThan(2); // At least flag + space + 1 character name
    });
  });
});
