import React, { useState, useCallback, useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import styled from 'styled-components';
import {
  Footer,
  Toast,
  MobileWarningToast,
  ThemeButton,
  LanguageButton,
  Button,
  SpacingLabel,
  SpacingDropdown,
  CopyButton,
  FormatButton,
  CopyIcon,
  CheckIcon,
  FormatIcon,
  SunIcon,
  MoonIcon,
  MonitorIcon,
  MinifyIcon,
  ValidateIcon,
  ClearIcon,
  SpacingIcon,
  WarningIcon,
  USFlagIcon,
  DutchFlagIcon,
  LanguageProvider,
  useLanguage,
} from '.';
import { AppThemeProvider, useTheme } from './theme';

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
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease;
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
  background-color: ${props => props.theme.editorHeader};
  border-bottom: 1px solid ${props => props.theme.border};
  font-weight: 600;
  color: ${props => props.theme.text};
  flex-shrink: 0;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease;
`;

const EditorContent = styled.div`
  flex: 1;
  min-height: 0; /* Allow flexbox to shrink */
`;

const StatusBar = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'type',
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

// Icon components moved to Icons.tsx

const JsonFormatterContent: React.FC = () => {
  const { language, setLanguage, constants } = useLanguage();
  const { UI_TEXT, DEFAULT_JSON, STORAGE_KEYS, CONFIG, ASSETS } = constants;

  const [inputJson, setInputJson] = useState(DEFAULT_JSON);
  const [outputJson, setOutputJson] = useState('');
  const [validationError, setValidationError] = useState<ValidationError | null>(null);
  const [isValid, setIsValid] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [showMobileWarning, setShowMobileWarning] = useState(false);
  const [tabSpacing, setTabSpacing] = useState<number>(CONFIG.DEFAULT_TAB_SPACING);
  const inputEditorRef = useRef<unknown>(null);
  const outputEditorRef = useRef<unknown>(null);

  const { themeMode, toggleTheme } = useTheme();

  // Mobile device detection
  useEffect(() => {
    const checkMobileDevice = () => {
      // iPad has width of 768px, so we'll use 768px as the threshold
      const isMobile = window.innerWidth < CONFIG.MOBILE_BREAKPOINT;
      if (isMobile && !localStorage.getItem(STORAGE_KEYS.MOBILE_WARNING)) {
        setShowMobileWarning(true);
        localStorage.setItem(STORAGE_KEYS.MOBILE_WARNING, 'true');

        // Hide the warning after 5 seconds
        setTimeout(() => {
          setShowMobileWarning(false);
        }, CONFIG.MOBILE_WARNING_DURATION);
      }
    };

    checkMobileDevice();
    window.addEventListener('resize', checkMobileDevice);

    return () => {
      window.removeEventListener('resize', checkMobileDevice);
    };
  }, [CONFIG.MOBILE_BREAKPOINT, CONFIG.MOBILE_WARNING_DURATION, STORAGE_KEYS.MOBILE_WARNING]);

  const validateJson = useCallback(
    (jsonString: string): ValidationError | null => {
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
              message: error.message,
            };
          }
        }
        return {
          message: error instanceof Error ? error.message : UI_TEXT.ERROR_INVALID_JSON,
        };
      }
    },
    [UI_TEXT.ERROR_INVALID_JSON]
  );

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
        message: error instanceof Error ? error.message : UI_TEXT.ERROR_FORMAT_FAILED,
      });
      setIsValid(false);
    }
  }, [inputJson, validateJson, tabSpacing, UI_TEXT.ERROR_FORMAT_FAILED]);

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
        message: error instanceof Error ? error.message : UI_TEXT.ERROR_MINIFY_FAILED,
      });
      setIsValid(false);
    }
  }, [inputJson, validateJson, UI_TEXT.ERROR_MINIFY_FAILED]);

  const validateOnly = useCallback(() => {
    const error = validateJson(inputJson);

    if (error) {
      setValidationError(error);
      setIsValid(false);
    } else {
      setValidationError(null);
      setIsValid(true);
      setOutputJson(UI_TEXT.VALID_JSON);
    }
  }, [inputJson, validateJson, UI_TEXT.VALID_JSON]);

  const clearAll = useCallback(() => {
    setInputJson('');
    setOutputJson('');
    setValidationError(null);
    setIsValid(true);
  }, []);

  const copyToClipboard = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setShowToast(true);
        setTimeout(() => setShowToast(false), CONFIG.TOAST_DURATION); // Hide toast after 2 seconds
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
          setTimeout(() => setShowToast(false), CONFIG.TOAST_DURATION);
        } catch {
          // Silent fail - user will notice copy didn't work
          // In production, this could be logged to an error service
        }
      }
    },
    [CONFIG.TOAST_DURATION]
  );

  const handleInputChange = useCallback(
    (value: string | undefined) => {
      const newValue = value || '';
      setInputJson(newValue);

      // Real-time validation
      const error = validateJson(newValue);
      setValidationError(error);
      setIsValid(!error);
    },
    [validateJson]
  );

  const getThemeIcon = () => {
    switch (themeMode) {
      case 'light':
        return <SunIcon />;
      case 'dark':
        return <MoonIcon />;
      case 'system':
        return <MonitorIcon />;
    }
  };

  const getThemeLabel = () => {
    switch (themeMode) {
      case 'light':
        return UI_TEXT.THEME_LIGHT;
      case 'dark':
        return UI_TEXT.THEME_DARK;
      case 'system':
        return UI_TEXT.THEME_SYSTEM;
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'nl' : 'en');
  };

  const getLanguageIcon = () => {
    return language === 'en' ? <USFlagIcon /> : <DutchFlagIcon />;
  };

  return (
    <Container>
      <Header>
        <Logo src={ASSETS.LOGO} alt={UI_TEXT.LOGO_ALT} />
        <HeaderContent>
          <Title>{UI_TEXT.TITLE}</Title>
          <Subtitle>{UI_TEXT.SUBTITLE}</Subtitle>
        </HeaderContent>
        <HeaderToolbar>
          <Button variant="primary" onClick={formatJson} disabled={!inputJson.trim()} title={UI_TEXT.FORMAT_TOOLTIP}>
            <FormatIcon />
            <span>{UI_TEXT.FORMAT_LABEL}</span>
          </Button>
          <Button onClick={minifyJson} disabled={!inputJson.trim()} title={UI_TEXT.MINIFY_TOOLTIP}>
            <MinifyIcon />
            <span>{UI_TEXT.MINIFY_LABEL}</span>
          </Button>
          <Button onClick={validateOnly} disabled={!inputJson.trim()} title={UI_TEXT.VALIDATE_TOOLTIP}>
            <ValidateIcon />
            <span>{UI_TEXT.VALIDATE_LABEL}</span>
          </Button>
          <SpacingLabel title={UI_TEXT.SPACING_TOOLTIP}>
            <SpacingIcon />
            <SpacingDropdown value={tabSpacing} onChange={e => setTabSpacing(Number(e.target.value))}>
              <option value={2}>{UI_TEXT.SPACING_2}</option>
              <option value={4}>{UI_TEXT.SPACING_4}</option>
            </SpacingDropdown>
          </SpacingLabel>
          <Button
            onClick={() => copyToClipboard(outputJson)}
            disabled={!outputJson}
            title={UI_TEXT.COPY_OUTPUT_TOOLTIP}
          >
            <CopyIcon />
          </Button>
          <Button variant="danger" onClick={clearAll} title={UI_TEXT.CLEAR_TOOLTIP}>
            <ClearIcon />
          </Button>
        </HeaderToolbar>
        <LanguageButton onClick={toggleLanguage} title={`${UI_TEXT.LANGUAGE_TOOLTIP_PREFIX}${language.toUpperCase()}`}>
          {getLanguageIcon()}
        </LanguageButton>
        <ThemeButton onClick={toggleTheme} title={`${UI_TEXT.THEME_TOOLTIP_PREFIX}${getThemeLabel()}`}>
          {getThemeIcon()}
        </ThemeButton>
      </Header>

      <EditorContainer>
        <EditorWrapper>
          <EditorHeader>
            <span>{UI_TEXT.INPUT_HEADER}</span>
            <FormatButton onClick={formatJson} disabled={!inputJson.trim()} title={UI_TEXT.FORMAT_PANEL_TOOLTIP}>
              <FormatIcon />
            </FormatButton>
          </EditorHeader>
          <EditorContent>
            <Editor
              height="100%"
              defaultLanguage="json"
              value={inputJson}
              onChange={handleInputChange}
              onMount={editor => (inputEditorRef.current = editor)}
              theme={
                themeMode === 'dark' ||
                (themeMode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
                  ? 'vs-dark'
                  : 'vs'
              }
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
              ? `${UI_TEXT.ERROR_PREFIX}${validationError.message}${validationError.line ? ` (Line ${validationError.line})` : ''}`
              : isValid && inputJson.trim()
                ? UI_TEXT.VALID_JSON
                : UI_TEXT.VALIDATION_PROMPT}
          </StatusBar>
        </EditorWrapper>

        <EditorWrapper>
          <EditorHeader>
            <span>{UI_TEXT.OUTPUT_HEADER}</span>
            <CopyButton
              onClick={() => copyToClipboard(outputJson)}
              disabled={!outputJson}
              hasContent={!!outputJson}
              title={UI_TEXT.COPY_PANEL_TOOLTIP}
            >
              <CopyIcon />
            </CopyButton>
          </EditorHeader>
          <EditorContent>
            <Editor
              height="100%"
              defaultLanguage="json"
              value={outputJson}
              onMount={editor => (outputEditorRef.current = editor)}
              theme={
                themeMode === 'dark' ||
                (themeMode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
                  ? 'vs-dark'
                  : 'vs'
              }
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
            {outputJson ? `${outputJson.split('\n').length}${UI_TEXT.LINE_SUFFIX}` : UI_TEXT.OUTPUT_PROMPT}
          </StatusBar>
        </EditorWrapper>
      </EditorContainer>

      <Toast show={showToast}>
        <CheckIcon />
        {UI_TEXT.COPY_SUCCESS}
      </Toast>

      <MobileWarningToast show={showMobileWarning}>
        <WarningIcon />
        <span>{UI_TEXT.MOBILE_WARNING}</span>
      </MobileWarningToast>

      <Footer />
    </Container>
  );
};

export const JsonFormatter: React.FC = () => (
  <LanguageProvider>
    <AppThemeProvider>
      <JsonFormatterContent />
    </AppThemeProvider>
  </LanguageProvider>
);
