import React from 'react';
import { LanguageProvider } from '../components/language';
import { AppThemeProvider } from '../components/theme';

export const TestProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <LanguageProvider>
      <AppThemeProvider>{children}</AppThemeProvider>
    </LanguageProvider>
  );
};
