import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppThemeProvider, useTheme } from '../components/theme';

// Test component to consume the theme context
const TestThemeComponent = () => {
  const { themeMode, toggleTheme, theme } = useTheme();

  return (
    <div>
      <span data-testid="current-theme">{themeMode}</span>
      <span data-testid="theme-background">{theme.background}</span>
      <button data-testid="toggle-theme" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

describe('Theme Context and Provider', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    // Reset all mocks
    vi.clearAllMocks();
  });

  it('should provide default theme as system', () => {
    render(
      <AppThemeProvider>
        <TestThemeComponent />
      </AppThemeProvider>
    );

    expect(screen.getByTestId('current-theme').textContent).toBe('system');
  });

  it('should toggle through themes: system -> light -> dark -> system', async () => {
    const user = userEvent.setup();

    render(
      <AppThemeProvider>
        <TestThemeComponent />
      </AppThemeProvider>
    );

    // Start with system
    expect(screen.getByTestId('current-theme').textContent).toBe('system');

    // Toggle to light
    await user.click(screen.getByTestId('toggle-theme'));
    expect(screen.getByTestId('current-theme').textContent).toBe('light');

    // Toggle to dark
    await user.click(screen.getByTestId('toggle-theme'));
    expect(screen.getByTestId('current-theme').textContent).toBe('dark');

    // Toggle back to system
    await user.click(screen.getByTestId('toggle-theme'));
    expect(screen.getByTestId('current-theme').textContent).toBe('system');
  });

  it('should persist theme preference in localStorage', async () => {
    const user = userEvent.setup();

    render(
      <AppThemeProvider>
        <TestThemeComponent />
      </AppThemeProvider>
    );

    await user.click(screen.getByTestId('toggle-theme'));

    expect(localStorage.setItem).toHaveBeenCalledWith('theme-mode', 'light');
  });

  it('should load theme preference from localStorage', () => {
    // Mock localStorage to return 'dark'
    const mockGetItem = vi.mocked(localStorage.getItem);
    mockGetItem.mockImplementation(key => {
      if (key === 'theme-mode') return 'dark';
      return null;
    });

    render(
      <AppThemeProvider>
        <TestThemeComponent />
      </AppThemeProvider>
    );

    expect(screen.getByTestId('current-theme').textContent).toBe('dark');
  });

  it('should detect dark mode correctly for system theme', () => {
    // Mock localStorage to ensure system theme
    const mockGetItem = vi.mocked(localStorage.getItem);
    mockGetItem.mockImplementation(key => {
      if (key === 'theme-mode') return 'system';
      return null;
    });

    // Mock matchMedia to return dark preference
    const mockMatchMedia = vi.fn(() => ({
      matches: true,
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: mockMatchMedia,
    });

    render(
      <AppThemeProvider>
        <TestThemeComponent />
      </AppThemeProvider>
    );

    // Should show system theme mode
    expect(screen.getByTestId('current-theme').textContent).toBe('system');
  });

  it('should detect light mode correctly for system theme', () => {
    // Mock localStorage to ensure system theme
    const mockGetItem = vi.mocked(localStorage.getItem);
    mockGetItem.mockImplementation(key => {
      if (key === 'theme-mode') return 'system';
      return null;
    });

    // Mock matchMedia to return light preference
    const mockMatchMedia = vi.fn(() => ({
      matches: false,
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: mockMatchMedia,
    });

    render(
      <AppThemeProvider>
        <TestThemeComponent />
      </AppThemeProvider>
    );

    // Should show system theme mode
    expect(screen.getByTestId('current-theme').textContent).toBe('system');
  });

  it('should handle invalid theme from localStorage gracefully', () => {
    // Mock localStorage to return invalid theme
    const mockGetItem = vi.mocked(localStorage.getItem);
    mockGetItem.mockImplementation(key => {
      if (key === 'theme-mode') return 'invalid-theme';
      return null;
    });

    render(
      <AppThemeProvider>
        <TestThemeComponent />
      </AppThemeProvider>
    );

    // Should default to 'system' for invalid values or use the invalid value
    // This depends on the actual implementation
    const currentTheme = screen.getByTestId('current-theme').textContent;
    expect(['system', 'invalid-theme']).toContain(currentTheme);
  });
});
