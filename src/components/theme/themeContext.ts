import { createContext } from 'react';
import type { AppTheme, ThemeMode } from './themes';
import { lightTheme } from './themes';

export interface ThemeContextValue {
  theme: AppTheme;
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: lightTheme,
  themeMode: 'system',
  toggleTheme: () => {},
});
