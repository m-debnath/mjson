import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageProvider, useLanguage } from '../components/language';

// Test component to consume the language context
const TestLanguageComponent = () => {
  const { language, setLanguage, constants } = useLanguage();

  return (
    <div>
      <span data-testid="current-language">{language}</span>
      <span data-testid="title">{constants.UI_TEXT.TITLE}</span>
      <button data-testid="switch-to-en" onClick={() => setLanguage('en')}>
        Switch to English
      </button>
      <button data-testid="switch-to-nl" onClick={() => setLanguage('nl')}>
        Switch to Dutch
      </button>
      <button data-testid="switch-to-es" onClick={() => setLanguage('es')}>
        Switch to Spanish
      </button>
    </div>
  );
};

describe('Language Context and Provider', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it('should provide default language as English', () => {
    render(
      <LanguageProvider>
        <TestLanguageComponent />
      </LanguageProvider>
    );

    expect(screen.getByTestId('current-language').textContent).toBe('en');
    expect(screen.getByTestId('title').textContent).toBe('JSON Formatter & Validator');
  });

  it('should switch to Dutch language', async () => {
    const user = userEvent.setup();

    render(
      <LanguageProvider>
        <TestLanguageComponent />
      </LanguageProvider>
    );

    await user.click(screen.getByTestId('switch-to-nl'));

    expect(screen.getByTestId('current-language').textContent).toBe('nl');
    expect(screen.getByTestId('title').textContent).toBe('JSON Formatter & Validator');
  });

  it('should switch to Spanish language', async () => {
    const user = userEvent.setup();

    render(
      <LanguageProvider>
        <TestLanguageComponent />
      </LanguageProvider>
    );

    await user.click(screen.getByTestId('switch-to-es'));

    expect(screen.getByTestId('current-language').textContent).toBe('es');
    expect(screen.getByTestId('title').textContent).toBe('JSON Formatter & Validator');
  });

  it('should persist language preference in localStorage', async () => {
    const user = userEvent.setup();

    render(
      <LanguageProvider>
        <TestLanguageComponent />
      </LanguageProvider>
    );

    await user.click(screen.getByTestId('switch-to-nl'));

    expect(localStorage.setItem).toHaveBeenCalledWith('app-language', 'nl');
  });

  it('should load language preference from localStorage', () => {
    // Mock localStorage to return 'nl'
    const mockGetItem = vi.mocked(localStorage.getItem);
    mockGetItem.mockImplementation(key => {
      if (key === 'app-language') return 'nl';
      return null;
    });

    render(
      <LanguageProvider>
        <TestLanguageComponent />
      </LanguageProvider>
    );

    expect(screen.getByTestId('current-language').textContent).toBe('nl');
  });

  it('should cycle through languages correctly', async () => {
    const user = userEvent.setup();

    // Mock localStorage to start clean
    const mockGetItem = vi.mocked(localStorage.getItem);
    mockGetItem.mockReturnValue(null);

    render(
      <LanguageProvider>
        <TestLanguageComponent />
      </LanguageProvider>
    );

    // Start with English (default)
    expect(screen.getByTestId('current-language').textContent).toBe('en');

    // Switch to Dutch
    await user.click(screen.getByTestId('switch-to-nl'));
    expect(screen.getByTestId('current-language').textContent).toBe('nl');

    // Switch to Spanish
    await user.click(screen.getByTestId('switch-to-es'));
    expect(screen.getByTestId('current-language').textContent).toBe('es');

    // Switch back to English
    await user.click(screen.getByTestId('switch-to-en'));
    expect(screen.getByTestId('current-language').textContent).toBe('en');
  });

  it('should provide correct constants for each language', async () => {
    const user = userEvent.setup();

    render(
      <LanguageProvider>
        <TestLanguageComponent />
      </LanguageProvider>
    );

    // Test English constants
    expect(screen.getByTestId('title').textContent).toBe('JSON Formatter & Validator');

    // Switch to Dutch and test
    await user.click(screen.getByTestId('switch-to-nl'));
    expect(screen.getByTestId('title').textContent).toBe('JSON Formatter & Validator');

    // Switch to Spanish and test
    await user.click(screen.getByTestId('switch-to-es'));
    expect(screen.getByTestId('title').textContent).toBe('JSON Formatter & Validator');
  });
});
