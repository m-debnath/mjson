import React, { useState, useCallback, useRef, useEffect, createContext } from 'react';
import Editor from '@monaco-editor/react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

// Extend styled-components DefaultTheme
declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    surface: string;
    surfaceSecondary: string;
    border: string;
    text: string;
    textSecondary: string;
    primary: string;
    success: string;
    error: string;
    warning: string;
  }
}

type ThemeMode = 'light' | 'dark' | 'system';

interface Theme {
  background: string;
  surface: string;
  surfaceSecondary: string;
  border: string;
  text: string;
  textSecondary: string;
  primary: string;
  success: string;
  error: string;
  warning: string;
}

const lightTheme: Theme = {
  background: '#f8f9fa',
  surface: '#ffffff',
  surfaceSecondary: '#f8f9fa',
  border: '#e9ecef',
  text: '#343a40',
  textSecondary: '#6c757d',
  primary: '#007bff',
  success: '#28a745',
  error: '#dc3545',
  warning: '#ffc107',
};

const darkTheme: Theme = {
  background: '#1a1a1a',
  surface: '#2d2d2d',
  surfaceSecondary: '#1e1e1e',
  border: '#404040',
  text: '#ffffff',
  textSecondary: '#b0b0b0',
  primary: '#0d6efd',
  success: '#198754',
  error: '#dc3545',
  warning: '#ffc107',
};

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

const ThemeContext = createContext<{
  theme: Theme;
  themeMode: ThemeMode;
  toggleTheme: () => void;
}>({
  theme: lightTheme,
  themeMode: 'system',
  toggleTheme: () => {},
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${props => props.theme.background};
  transition: background-color 0.3s ease;
`;

const Header = styled.header`
  background-color: ${props => props.theme.surface};
  color: ${props => props.theme.text};
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid ${props => props.theme.border};
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
`;

const Logo = styled.img`
  height: 60px;
  width: auto;
  flex-shrink: 0;
`;

const HeaderContent = styled.div`
  text-align: left;
  flex-shrink: 0;
`;

const HeaderToolbar = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-right: 1rem;
`;

const ThemeButton = styled.button`
  background-color: #6c757d;
  border: none;
  color: white;
  padding: 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  flex-shrink: 0;
  min-width: 44px;
  min-height: 44px;

  &:hover {
    background-color: #5a6268;
    transform: scale(1.05);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
`;

const Subtitle = styled.p`
  margin: 0.5rem 0 0 0;
  opacity: 0.8;
  font-size: 0.9rem;
`;

const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'variant',
})<{ variant?: 'primary' | 'secondary' | 'danger' }>`
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;

  ${({ variant = 'secondary' }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: #007bff;
          color: white;
          &:hover { background-color: #0056b3; transform: scale(1.05); }
        `;
      case 'danger':
        return `
          background-color: #dc3545;
          color: white;
          &:hover { background-color: #c82333; transform: scale(1.05); }
        `;
      default:
        return `
          background-color: #6c757d;
          color: white;
          &:hover { background-color: #5a6268; transform: scale(1.05); }
        `;
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    &:hover {
      transform: none;
    }
  }

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;

const SpacingDropdown = styled.select`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.75rem;
  min-width: 60px;
  text-align: center;

  &:focus {
    outline: none;
  }

  option {
    background-color: #6c757d;
    color: white;
  }
`;

const SpacingLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #6c757d;
  color: white;
  padding: 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 44px;
  min-height: 44px;
  
  &:hover {
    background-color: #5a6268;
    transform: scale(1.05);
  }

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;

const EditorContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 1rem;
  padding: 1rem;
`;

const EditorWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.surface};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  min-height: 0; /* Allow flexbox to shrink */
  transition: background-color 0.3s ease;
`;

const EditorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: ${props => props.theme.surfaceSecondary};
  border-bottom: 1px solid ${props => props.theme.border};
  font-weight: 600;
  color: ${props => props.theme.text};
  flex-shrink: 0;
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
`;

const CopyButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'hasContent',
})<{ hasContent?: boolean }>`
  background: transparent;
  border: 1px solid #6c757d;
  color: ${props => props.hasContent ? '#007bff' : '#6c757d'};
  padding: 0.375rem 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover:not(:disabled) {
    background-color: ${props => props.hasContent ? '#e3f2fd' : '#e9ecef'};
    color: ${props => props.hasContent ? '#0056b3' : '#495057'};
    transform: ${props => props.hasContent ? 'scale(1.1)' : 'none'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

const FormatButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  color: #007bff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: #e3f2fd;
    color: #0056b3;
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    color: #6c757d;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const Toast = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'show',
})<{ show: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #28a745;
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transform: ${({ show }) => show ? 'translateY(0)' : 'translateY(100px)'};
  opacity: ${({ show }) => show ? 1 : 0};
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  svg {
    width: 16px;
    height: 16px;
  }
`;

const MobileWarningToast = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'show',
})<{ show: boolean }>`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%) ${({ show }) => show ? 'translateY(0)' : 'translateY(-100px)'};
  background-color: #ff9800;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  opacity: ${({ show }) => show ? 1 : 0};
  transition: all 0.3s ease;
  z-index: 1001;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-width: 90vw;
  text-align: center;
  font-weight: 500;

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;

const Footer = styled.footer`
  margin-top: auto;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.background};
  border-top: 1px solid ${({ theme }) => theme.border};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
  line-height: 1.5;
`;

const FooterLink = styled.a`
  color: #007bff;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const EditorContent = styled.div`
  flex: 1;
  min-height: 0; /* Allow flexbox to shrink */
`;

const StatusBar = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'type',
})<{ type?: 'success' | 'error' | 'info' }>`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  border-top: 1px solid #e9ecef;
  flex-shrink: 0;
  
  ${({ type }) => {
    switch (type) {
      case 'success':
        return 'background-color: #d4edda; color: #155724; border-color: #c3e6cb;';
      case 'error':
        return 'background-color: #f8d7da; color: #721c24; border-color: #f5c6cb;';
      default:
        return 'background-color: #f8f9fa; color: #6c757d;';
    }
  }}
`;

interface ValidationError {
  line?: number;
  column?: number;
  message: string;
}

const CopyIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const CheckIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20,6 9,17 4,12"></polyline>
  </svg>
);

const FormatIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14,2 14,8 20,8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10,9 9,9 8,9"></polyline>
  </svg>
);

const SunIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5"></circle>
    <path d="m12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42"></path>
  </svg>
);

const MoonIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const MonitorIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

// Icon components
const MinifyIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
    <line x1="9" y1="9" x2="15" y2="15"></line>
    <line x1="15" y1="9" x2="9" y2="15"></line>
  </svg>
);

const ValidateIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 12l2 2 4-4"></path>
    <path d="M21 12c-1.2 1.5-3.5 3-9 3s-7.8-1.5-9-3c1.2-1.5 3.5-3 9-3s7.8 1.5 9 3z"></path>
  </svg>
);

const CopyOutputIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="m5 15-1 0a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    <path d="M12 12l3 3-3 3"></path>
  </svg>
);

const ClearIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 6h18"></path>
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
);

const SpacingIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 8h18"></path>
    <path d="M3 12h18"></path>
    <path d="M3 16h18"></path>
  </svg>
);

const WarningIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z" />
  </svg>
);

const useTheme = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('theme-mode');
    return (saved as ThemeMode) || 'system';
  });

  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme-mode', themeMode);
  }, [themeMode]);

  const getActualTheme = (): 'light' | 'dark' => {
    return themeMode === 'system' ? systemTheme : themeMode;
  };

  const theme = getActualTheme() === 'dark' ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setThemeMode(prev => {
      switch (prev) {
        case 'light': return 'dark';
        case 'dark': return 'system';
        case 'system': return 'light';
      }
    });
  };

  return { theme, themeMode, toggleTheme };
};

const JsonFormatterContent: React.FC = () => {
  const [inputJson, setInputJson] = useState('{\n  "name": "John Doe",\n  "age": 30,\n  "city": "New York"\n}');
  const [outputJson, setOutputJson] = useState('');
  const [validationError, setValidationError] = useState<ValidationError | null>(null);
  const [isValid, setIsValid] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [showMobileWarning, setShowMobileWarning] = useState(false);
  const [tabSpacing, setTabSpacing] = useState<number>(2);
  const inputEditorRef = useRef<unknown>(null);
  const outputEditorRef = useRef<unknown>(null);
  
  const { themeMode, toggleTheme } = useTheme();

  // Mobile device detection
  useEffect(() => {
    const checkMobileDevice = () => {
      // iPad has width of 768px, so we'll use 768px as the threshold
      const isMobile = window.innerWidth < 768;
      if (isMobile && !localStorage.getItem('mobile-warning-shown')) {
        setShowMobileWarning(true);
        localStorage.setItem('mobile-warning-shown', 'true');
        
        // Hide the warning after 5 seconds
        setTimeout(() => {
          setShowMobileWarning(false);
        }, 5000);
      }
    };

    checkMobileDevice();
    window.addEventListener('resize', checkMobileDevice);
    
    return () => {
      window.removeEventListener('resize', checkMobileDevice);
    };
  }, []);

  const validateJson = useCallback((jsonString: string): ValidationError | null => {
    if (!jsonString.trim()) return null;
    
    try {
      JSON.parse(jsonString);
      return null;
    } catch (error) {
      if (error instanceof SyntaxError) {
        // Try to extract line and column information from error message
        const match = error.message.match(/at position (\d+)/);
        if (match) {
          const position = parseInt(match[1]);
          const lines = jsonString.substring(0, position).split('\n');
          return {
            line: lines.length,
            column: lines[lines.length - 1].length + 1,
            message: error.message
          };
        }
      }
      return { message: error instanceof Error ? error.message : 'Invalid JSON' };
    }
  }, []);

  const formatJson = useCallback(() => {
    const error = validateJson(inputJson);
    
    if (error) {
      setValidationError(error);
      setIsValid(false);
      return;
    }

    try {
      const parsed = JSON.parse(inputJson);
      const formatted = JSON.stringify(parsed, null, tabSpacing);
      setOutputJson(formatted);
      setValidationError(null);
      setIsValid(true);
    } catch (error) {
      setValidationError({ 
        message: error instanceof Error ? error.message : 'Failed to format JSON' 
      });
      setIsValid(false);
    }
  }, [inputJson, validateJson, tabSpacing]);

  const minifyJson = useCallback(() => {
    const error = validateJson(inputJson);
    
    if (error) {
      setValidationError(error);
      setIsValid(false);
      return;
    }

    try {
      const parsed = JSON.parse(inputJson);
      const minified = JSON.stringify(parsed);
      setOutputJson(minified);
      setValidationError(null);
      setIsValid(true);
    } catch (error) {
      setValidationError({ 
        message: error instanceof Error ? error.message : 'Failed to minify JSON' 
      });
      setIsValid(false);
    }
  }, [inputJson, validateJson]);

  const validateOnly = useCallback(() => {
    const error = validateJson(inputJson);
    
    if (error) {
      setValidationError(error);
      setIsValid(false);
    } else {
      setValidationError(null);
      setIsValid(true);
      setOutputJson('✅ Valid JSON');
    }
  }, [inputJson, validateJson]);

  const clearAll = useCallback(() => {
    setInputJson('');
    setOutputJson('');
    setValidationError(null);
    setIsValid(true);
  }, []);

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000); // Hide toast after 2 seconds
    } catch {
      // Fallback to older method if clipboard API fails
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
      } catch {
        // Silent fail - user will notice copy didn't work
        // In production, this could be logged to an error service
      }
    }
  }, []);

  const handleInputChange = useCallback((value: string | undefined) => {
    const newValue = value || '';
    setInputJson(newValue);
    
    // Real-time validation
    const error = validateJson(newValue);
    setValidationError(error);
    setIsValid(!error);
  }, [validateJson]);

  const getThemeIcon = () => {
    switch (themeMode) {
      case 'light': return <SunIcon />;
      case 'dark': return <MoonIcon />;
      case 'system': return <MonitorIcon />;
    }
  };

  const getThemeLabel = () => {
    switch (themeMode) {
      case 'light': return 'Light';
      case 'dark': return 'Dark';
      case 'system': return 'System';
    }
  };

  return (
    <Container>
      <Header>
        <Logo src="/src/assets/hobbycodes_logo.svg" alt="HobbyCodes Logo" />
        <HeaderContent>
          <Title>JSON Formatter & Validator</Title>
          <Subtitle>Format, validate, and minify JSON data</Subtitle>
        </HeaderContent>
        <HeaderToolbar>
          <Button 
            variant="primary" 
            onClick={formatJson} 
            disabled={!inputJson.trim()}
            title="Format JSON"
          >
            <FormatIcon />
          </Button>
          <Button 
            onClick={minifyJson} 
            disabled={!inputJson.trim()}
            title="Minify JSON by removing whitespace"
          >
            <MinifyIcon />
          </Button>
          <Button 
            onClick={validateOnly} 
            disabled={!inputJson.trim()}
            title="Validate JSON syntax"
          >
            <ValidateIcon />
          </Button>
          <SpacingLabel title="Choose indentation spacing">
            <SpacingIcon />
            <SpacingDropdown 
              value={tabSpacing} 
              onChange={(e) => setTabSpacing(Number(e.target.value))}
            >
              <option value={2}>2 spaces</option>
              <option value={4}>4 spaces</option>
            </SpacingDropdown>
          </SpacingLabel>
          <Button 
            onClick={() => copyToClipboard(outputJson)} 
            disabled={!outputJson}
            title="Copy output"
          >
            <CopyOutputIcon />
          </Button>
          <Button 
            variant="danger" 
            onClick={clearAll}
            title="Clear both input and output editors"
          >
            <ClearIcon />
          </Button>
        </HeaderToolbar>
        <ThemeButton onClick={toggleTheme} title={`Current theme: ${getThemeLabel()}`}>
          {getThemeIcon()}
        </ThemeButton>
      </Header>

      <EditorContainer>
        <EditorWrapper>
          <EditorHeader>
            <span>Input JSON</span>
            <FormatButton 
              onClick={formatJson} 
              disabled={!inputJson.trim()}
              title="Format JSON"
            >
              <FormatIcon />
            </FormatButton>
          </EditorHeader>
          <EditorContent>
            <Editor
              height="100%"
              defaultLanguage="json"
              value={inputJson}
              onChange={handleInputChange}
              onMount={(editor) => (inputEditorRef.current = editor)}
              theme={themeMode === 'dark' || (themeMode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'vs-dark' : 'vs'}
              options={{
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                fontSize: 14,
                lineNumbers: 'on',
                automaticLayout: true,
                wordWrap: 'on',
                formatOnPaste: true,
                formatOnType: true,
              }}
            />
          </EditorContent>
          <StatusBar type={validationError ? 'error' : 'success'}>
            {validationError 
              ? `❌ ${validationError.message}${validationError.line ? ` (Line ${validationError.line})` : ''}` 
              : isValid && inputJson.trim() 
                ? '✅ Valid JSON' 
                : 'Enter JSON to validate'
            }
          </StatusBar>
        </EditorWrapper>

        <EditorWrapper>
          <EditorHeader>
            <span>Output</span>
            <CopyButton 
              onClick={() => copyToClipboard(outputJson)} 
              disabled={!outputJson}
              hasContent={!!outputJson}
              title="Copy output"
            >
              <CopyIcon />
            </CopyButton>
          </EditorHeader>
          <EditorContent>
            <Editor
              height="100%"
              defaultLanguage="json"
              value={outputJson}
              onMount={(editor) => (outputEditorRef.current = editor)}
              theme={themeMode === 'dark' || (themeMode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'vs-dark' : 'vs'}
              options={{
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                fontSize: 14,
                lineNumbers: 'on',
                automaticLayout: true,
                wordWrap: 'on',
                readOnly: true,
              }}
            />
          </EditorContent>
          <StatusBar type="info">
            {outputJson ? `${outputJson.split('\n').length} lines` : 'Output will appear here'}
          </StatusBar>
        </EditorWrapper>
      </EditorContainer>

      <Toast show={showToast}>
        <CheckIcon />
        Copied to clipboard!
      </Toast>
      
      <MobileWarningToast show={showMobileWarning}>
        <WarningIcon />
        <span>📱 This website is best experienced on desktop or tablet devices</span>
      </MobileWarningToast>
      
      <Footer>
        <p>
          🍪 This website uses only essential cookies for authentication, authorization, and application functionality. 
          No tracking or analytics cookies are used. Authentication is managed by our secure OIDC provider. 
          By continuing to use this site, you consent to our minimal use of essential cookies.
        </p>
        <p>
          © 2025 <FooterLink href="https://hobbycodes.com" target="_blank" rel="noopener noreferrer">HobbyCodes.com</FooterLink> - 
          Made with ❤️ by Mukul
        </p>
      </Footer>
    </Container>
  );
};

export const JsonFormatter: React.FC = () => {
  const themeState = useTheme();
  
  return (
    <ThemeProvider theme={themeState.theme}>
      <GlobalStyle theme={themeState.theme} />
      <ThemeContext.Provider value={themeState}>
        <JsonFormatterContent />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};