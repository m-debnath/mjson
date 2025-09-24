export type ThemeMode = 'light' | 'dark' | 'system';
export interface AppTheme {
  background: string;
  surface: string;
  surfaceSecondary: string;
  editorHeader: string;
  border: string;
  text: string;
  textSecondary: string;
  primary: string;
  success: string;
  error: string;
  warning: string;
}
export const lightTheme: AppTheme = {
  background: '#f5fafc',
  surface: '#ffffff',
  surfaceSecondary: '#eaf2fb',
  editorHeader: '#63b9e8',
  border: '#cbd6e2',
  text: '#273140',
  textSecondary: '#57718e',
  primary: '#ea5a3d',
  success: '#23b56d',
  error: '#d8434c',
  warning: '#ffb904',
};
export const darkTheme: AppTheme = {
  background: '#171a1e',
  surface: '#23272f',
  surfaceSecondary: '#1d2026',
  editorHeader: '#25314a',
  border: '#384050',
  text: '#f4f6fb',
  textSecondary: '#a9b7c6',
  primary: '#ea5a3d',
  success: '#43c886',
  error: '#e35c70',
  warning: '#ffd77a',
};
