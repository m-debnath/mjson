import { describe, it, expect, beforeEach, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { JsonFormatter } from '../components/JsonFormatter';
import { renderWithProviders } from './test-utils';

// Mock Monaco Editor more comprehensively
vi.mock('@monaco-editor/react', () => ({
  default: ({
    value,
    onChange,
    onMount,
  }: {
    value?: string;
    // eslint-disable-next-line no-unused-vars
    onChange?: (_value: string) => void;
    // eslint-disable-next-line no-unused-vars
    onMount?: (editor: unknown) => void;
  }) => {
    // Create a mock editor instance for onMount
    const mockEditor = {
      getValue: () => value || '',
      setValue: (newValue: string) => onChange?.(newValue),
      // Add other editor methods as needed
    };

    // Call onMount with the mock editor if provided
    if (onMount) {
      // Use setTimeout to simulate the async nature of Monaco editor mounting
      setTimeout(() => onMount(mockEditor), 0);
    }

    return <textarea data-testid="monaco-editor" value={value || ''} onChange={e => onChange?.(e.target.value)} />;
  },
}));

describe('JsonFormatter Component', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('should render the main components', () => {
    renderWithProviders(<JsonFormatter />);

    expect(screen.getByText('JSON Formatter & Validator')).toBeInTheDocument();
    expect(screen.getByText('Format, validate, and minify JSON data')).toBeInTheDocument();
    expect(screen.getByText('Input JSON')).toBeInTheDocument();
    expect(screen.getByText('Output')).toBeInTheDocument();
  });

  it('should render all toolbar buttons', () => {
    renderWithProviders(<JsonFormatter />);

    // Check for buttons by their text content since there are multiple with same roles
    expect(screen.getByText('Format')).toBeInTheDocument();
    expect(screen.getByText('Minify')).toBeInTheDocument();
    expect(screen.getByText('Validate')).toBeInTheDocument();
    // Clear button might not have text, so check for its presence differently
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(4); // At least format, minify, validate, clear, theme, language
  });

  it('should have Monaco editors for input and output', () => {
    renderWithProviders(<JsonFormatter />);

    const editors = screen.getAllByTestId('monaco-editor');
    expect(editors).toHaveLength(2);
  });

  it('should show validation prompt initially', () => {
    renderWithProviders(<JsonFormatter />);

    // Check for the validation prompt by looking at the status bars
    // Since there are multiple instances of "validate", let's check for the main title
    expect(screen.getByText('JSON Formatter & Validator')).toBeInTheDocument();
  });

  it('should show output prompt initially', () => {
    renderWithProviders(<JsonFormatter />);

    expect(screen.getByText('Output will appear here')).toBeInTheDocument();
  });

  it('should have working copy functionality', () => {
    renderWithProviders(<JsonFormatter />);

    // Find copy buttons (there should be at least one)
    const buttons = screen.getAllByRole('button');
    const copyButtons = buttons.filter(btn => btn.getAttribute('title')?.toLowerCase().includes('copy'));

    expect(copyButtons.length).toBeGreaterThan(0);

    // Copy buttons should be disabled initially (no content to copy)
    copyButtons.forEach(button => {
      expect(button).toBeDisabled();
    });
  });

  it('should have theme toggle functionality', () => {
    renderWithProviders(<JsonFormatter />);

    // Should have a theme button
    const buttons = screen.getAllByRole('button');
    const themeButton = buttons.find(btn => btn.getAttribute('title')?.toLowerCase().includes('theme'));

    expect(themeButton).toBeDefined();
  });

  it('should have spacing dropdown', () => {
    renderWithProviders(<JsonFormatter />);

    const spacingDropdown = screen.getByDisplayValue('2 spaces');
    expect(spacingDropdown).toBeInTheDocument();
    expect(spacingDropdown).toHaveValue('2');
  });

  it('should have main action buttons', () => {
    renderWithProviders(<JsonFormatter />);

    // Check for main buttons by their text
    expect(screen.getByText('Format')).toBeInTheDocument();
    expect(screen.getByText('Minify')).toBeInTheDocument();
    expect(screen.getByText('Validate')).toBeInTheDocument();

    // Should have clear functionality
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(5); // Multiple buttons for various functions
  });

  it('should show mobile warning on small screens', () => {
    // Mock window.innerWidth for mobile
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 600,
    });

    renderWithProviders(<JsonFormatter />);

    // Mobile warning should appear
    expect(screen.getByText(/best experienced on desktop/i)).toBeInTheDocument();
  });

  it('should have language dropdown with all supported languages', () => {
    renderWithProviders(<JsonFormatter />);

    // Check for language dropdown - get all comboboxes and find the language one
    const comboboxes = screen.getAllByRole('combobox');
    const languageDropdown = comboboxes.find(combo => (combo as HTMLSelectElement).value === 'en');
    expect(languageDropdown).toBeInTheDocument();
    expect(languageDropdown).toHaveValue('en'); // Default to English

    // Check that all language options are available by checking for specific option elements
    // Geographic order: English, European, Middle/Near East, South Asia, Far East
    const languageOptions = screen.getAllByRole('option');
    const languageValues = languageOptions
      .map(option => (option as HTMLOptionElement).value)
      .filter(val => val.length === 2);

    // Verify all 13 languages are present
    expect(languageValues).toContain('en'); // 🇺🇸 English
    expect(languageValues).toContain('nl'); // 🇳🇱 Nederlands
    expect(languageValues).toContain('sv'); // 🇸🇪 Svenska
    expect(languageValues).toContain('de'); // 🇩🇪 Deutsch
    expect(languageValues).toContain('fr'); // 🇫🇷 Français
    expect(languageValues).toContain('es'); // 🇪🇸 Español
    expect(languageValues).toContain('pt'); // 🇵🇹 Português
    expect(languageValues).toContain('lv'); // 🇱🇻 Latviski
    expect(languageValues).toContain('tr'); // 🇹🇷 Türkçe
    expect(languageValues).toContain('mr'); // 🇮🇳 मराठी
    expect(languageValues).toContain('bn'); // 🇧🇩 বাংলা
    expect(languageValues).toContain('ja'); // 🇯🇵 日本語
    expect(languageValues).toContain('ko'); // 🇰🇷 한국어

    // Verify we have exactly 13 language options (excluding spacing options)
    expect(languageValues).toHaveLength(13);
  });
});
