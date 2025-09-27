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
      <button data-testid="switch-to-pt" onClick={() => setLanguage('pt')}>
        Switch to Portuguese
      </button>
      <button data-testid="switch-to-de" onClick={() => setLanguage('de')}>
        Switch to German
      </button>
      <button data-testid="switch-to-mr" onClick={() => setLanguage('mr')}>
        Switch to Marathi
      </button>
      <button data-testid="switch-to-bn" onClick={() => setLanguage('bn')}>
        Switch to Bengali
      </button>
      <button data-testid="switch-to-tr" onClick={() => setLanguage('tr')}>
        Switch to Turkish
      </button>
      <button data-testid="switch-to-lv" onClick={() => setLanguage('lv')}>
        Switch to Latvian
      </button>
      <button data-testid="switch-to-ja" onClick={() => setLanguage('ja')}>
        Switch to Japanese
      </button>
      <button data-testid="switch-to-ko" onClick={() => setLanguage('ko')}>
        Switch to Korean
      </button>
      <button data-testid="switch-to-sv" onClick={() => setLanguage('sv')}>
        Switch to Swedish
      </button>
      <button data-testid="switch-to-fr" onClick={() => setLanguage('fr')}>
        Switch to French
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
    expect(screen.getByTestId('title').textContent).toBe('Formateador y Validador JSON');
  });

  it('should switch to Turkish language', async () => {
    const user = userEvent.setup();

    render(
      <LanguageProvider>
        <TestLanguageComponent />
      </LanguageProvider>
    );

    await user.click(screen.getByTestId('switch-to-tr'));

    expect(screen.getByTestId('current-language').textContent).toBe('tr');
    expect(screen.getByTestId('title').textContent).toBe('JSON Formatlayıcı ve Doğrulayıcı');
  });

  it('should switch to Latvian language', async () => {
    const user = userEvent.setup();

    render(
      <LanguageProvider>
        <TestLanguageComponent />
      </LanguageProvider>
    );

    await user.click(screen.getByTestId('switch-to-lv'));

    expect(screen.getByTestId('current-language').textContent).toBe('lv');
    expect(screen.getByTestId('title').textContent).toBe('JSON Formatētājs un Validātors');
  });

  it('should switch to Japanese language', async () => {
    const user = userEvent.setup();

    render(
      <LanguageProvider>
        <TestLanguageComponent />
      </LanguageProvider>
    );

    await user.click(screen.getByTestId('switch-to-ja'));

    expect(screen.getByTestId('current-language').textContent).toBe('ja');
    expect(screen.getByTestId('title').textContent).toBe('JSONフォーマッター＆バリデーター');
  });

  it('should switch to Korean language', async () => {
    const user = userEvent.setup();

    render(
      <LanguageProvider>
        <TestLanguageComponent />
      </LanguageProvider>
    );

    await user.click(screen.getByTestId('switch-to-ko'));

    expect(screen.getByTestId('current-language').textContent).toBe('ko');
    expect(screen.getByTestId('title').textContent).toBe('JSON 포매터 & 검증기');
  });

  it('should switch to Swedish language', async () => {
    const user = userEvent.setup();

    render(
      <LanguageProvider>
        <TestLanguageComponent />
      </LanguageProvider>
    );

    await user.click(screen.getByTestId('switch-to-sv'));

    expect(screen.getByTestId('current-language').textContent).toBe('sv');
    expect(screen.getByTestId('title').textContent).toBe('JSON Formaterare & Validator');
  });

  it('should switch to French language', async () => {
    const user = userEvent.setup();

    render(
      <LanguageProvider>
        <TestLanguageComponent />
      </LanguageProvider>
    );

    await user.click(screen.getByTestId('switch-to-fr'));

    expect(screen.getByTestId('current-language').textContent).toBe('fr');
    expect(screen.getByTestId('title').textContent).toBe('Formateur et Validateur JSON');
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

  it('should support multiple languages via provider', () => {
    // This test is for the language provider itself
    // JsonFormatter component tests handle the UI dropdown testing
    const TestComponent = () => {
      const { language, constants } = useLanguage();
      return (
        <div data-testid="language-display">
          {constants.UI_TEXT.TITLE} - {language}
        </div>
      );
    };

    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );

    expect(screen.getByTestId('language-display')).toBeInTheDocument();
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
    expect(screen.getByTestId('title').textContent).toBe('Formateador y Validador JSON');

    // Switch to Portuguese and test
    await user.click(screen.getByTestId('switch-to-pt'));
    expect(screen.getByTestId('title').textContent).toBe('Formatador e Validador JSON');

    // Switch to German and test
    await user.click(screen.getByTestId('switch-to-de'));
    expect(screen.getByTestId('title').textContent).toBe('JSON Formatierer & Validator');

    // Switch to Marathi and test
    await user.click(screen.getByTestId('switch-to-mr'));
    expect(screen.getByTestId('title').textContent).toBe('JSON फॉर्मेटर आणि व्हॅलिडेटर');

    // Switch to Bengali and test
    await user.click(screen.getByTestId('switch-to-bn'));
    expect(screen.getByTestId('title').textContent).toBe('JSON ফরম্যাটার ও ভ্যালিডেটর');

    // Switch to Turkish and test
    await user.click(screen.getByTestId('switch-to-tr'));
    expect(screen.getByTestId('title').textContent).toBe('JSON Formatlayıcı ve Doğrulayıcı');

    // Switch to Latvian and test
    await user.click(screen.getByTestId('switch-to-lv'));
    expect(screen.getByTestId('title').textContent).toBe('JSON Formatētājs un Validātors');

    // Switch to Japanese and test
    await user.click(screen.getByTestId('switch-to-ja'));
    expect(screen.getByTestId('title').textContent).toBe('JSONフォーマッター＆バリデーター');

    // Switch to Korean and test
    await user.click(screen.getByTestId('switch-to-ko'));
    expect(screen.getByTestId('title').textContent).toBe('JSON 포매터 & 검증기');

    // Switch to Swedish and test
    await user.click(screen.getByTestId('switch-to-sv'));
    expect(screen.getByTestId('title').textContent).toBe('JSON Formaterare & Validator');

    // Switch to French and test
    await user.click(screen.getByTestId('switch-to-fr'));
    expect(screen.getByTestId('title').textContent).toBe('Formateur et Validateur JSON');
  });
});
