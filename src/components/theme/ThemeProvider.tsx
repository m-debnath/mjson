import React, { useEffect, useState } from 'react';
import { STORAGE_KEYS } from '../../assets';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import { ThemeContext } from './themeContext';
import { lightTheme, darkTheme } from './themes';
import type { ThemeMode, AppTheme } from './themes';

// styled-components theme augmentation
declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

const useThemeState = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.THEME_MODE) as ThemeMode | null;
    return saved || 'system';
  });

  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setSystemTheme(e.matches ? 'dark' : 'light');
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.THEME_MODE, themeMode);
  }, [themeMode]);

  const actualThemeMode = themeMode === 'system' ? systemTheme : themeMode;
  const theme = actualThemeMode === 'dark' ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setThemeMode((prev: ThemeMode) => (prev === 'light' ? 'dark' : prev === 'dark' ? 'system' : 'light'));
  };

  return { theme, themeMode, toggleTheme };
};

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const themeState = useThemeState();
  return (
    <StyledThemeProvider theme={themeState.theme}>
      <GlobalStyle />
      <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
    </StyledThemeProvider>
  );
};
