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
  background: '#aad1e5',
  surface: '#c3e6cb',
  surfaceSecondary: '#f8f9fa',
  editorHeader: '#63b9e8',
  border: '#e9ecef',
  text: '#343a40',
  textSecondary: '#6c757d',
  primary: '#007bff',
  success: '#28a745',
  error: '#dc3545',
  warning: '#ffc107',
};
export const darkTheme: AppTheme = {
  background: '#1a1a1a',
  surface: '#2d2d2d',
  surfaceSecondary: '#1e1e1e',
  editorHeader: '#1e1e1e',
  border: '#404040',
  text: '#ffffff',
  textSecondary: '#b0b0b0',
  primary: '#0d6efd',
  success: '#198754',
  error: '#dc3545',
  warning: '#ffc107',
};
