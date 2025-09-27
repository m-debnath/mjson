<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# JSON Formatter by Mukul - HobbyCodes.com

## Project Overview

A professional JSON formatter and validator web application built with React TypeScript, featuring comprehensive theming, Monaco Editor integration, and Docker deployment support.

## Completed Features & Requirements

### Core Functionality

- [x] **JSON Validation**: Real-time JSON syntax validation with detailed error reporting including line numbers
- [x] **JSON Formatting**: Format JSON with customizable indentation (2 or 4 spaces)
- [x] **JSON Minification**: Compress JSON by removing unnecessary whitespace
- [x] **Copy to Clipboard**: One-click copying of formatted output with toast notifications
- [x] **Clear All**: Reset both input and output editors

### User Interface & Design

- [x] **Professional Header**: HobbyCodes logo integration with left-aligned title
- [x] **Integrated Toolbar**: Toolbar buttons integrated into header bar with tight alignment
- [x] **Theme System**: Complete light/dark/system theme switching with smooth transitions
  - Light theme for daytime use
  - Dark theme for low-light conditions
  - System theme that follows OS preference
  - Theme persistence in localStorage
  - Theme button positioned at far right of header
- [x] **Language System**: Complete multilingual support with 7 languages
  - 🇺🇸 English (en), 🇳🇱 Nederlands (nl), 🇪🇸 Español (es), 🇵🇹 Português (pt), 🇩🇪 Deutsch (de), 🇮🇳 मराठी (mr), 🇧🇩 বাংলা (bn)
  - Flag emojis for intuitive language selection
  - Real-time language switching without page reload
  - Language preference persistence in localStorage
  - All UI text, tooltips, messages, and footer fully translated across all languages
  - Script support for Latin, Devanagari, and Bengali characters
  - Language button positioned between toolbar and theme button
- [x] **Responsive Layout**: Dual-pane editor layout with flexible sizing
- [x] **Custom Favicon**: Uses favicon.png from assets instead of default Vite logo
- [x] **Branded Title**: "JSON Formatter by Mukul - hobbycodes.com" in browser tab
- [x] **Enhanced Button Design**: SVG icons with text labels for better UX and accessibility
- [x] **GDPR Footer**: System theme compliant footer with essential cookies disclosure and multilingual support

### Editor Features

- [x] **Monaco Editor Integration**: Professional code editor with syntax highlighting
- [x] **Automatic Theme Switching**: Editor themes (vs/vs-dark) sync with app theme
- [x] **Real-time Validation**: Live feedback on JSON validity with detailed error messages
- [x] **Status Indicators**: Visual status bars showing validation state and line counts
- [x] **Copy Buttons**: Individual copy buttons for both input and output editors
- [x] **Configurable Spacing**: Dropdown to choose between 2 or 4 space indentation
- [x] **Blue Copy Button**: Output panel copy button styled with primary blue color
- [x] **Toast Notifications**: Success feedback for copy operations with temporary messages
- [x] **Mobile Device Warning**: Toast warning for devices smaller than iPad tablets advising desktop use

### Technical Implementation

- [x] **React TypeScript**: Fully typed React application
- [x] **Styled Components**: Theme-aware styling with CSS-in-JS
- [x] **Context API**: Theme and language management with React Context
- [x] **Custom Hooks**: useTheme and useLanguage hooks for state management
- [x] **Local Storage**: Theme and language preference persistence
- [x] **Media Query Detection**: System theme detection and response
- [x] **Modular Architecture**: Organized language system in dedicated folder structure
- [x] **Barrel Exports**: Clean import/export patterns for better maintainability

### Deployment & Infrastructure

- [x] **Docker Support**: Multi-stage build with Nginx
- [x] **Traefik Integration**: Reverse proxy configuration with automatic SSL
- [x] **Authentik OIDC Integration**: Authentication and authorization via Authentik OIDC provider
- [x] **Security Headers**: Comprehensive security headers in Nginx configuration
- [x] **Health Checks**: Docker health check implementation
- [x] **Production Build**: Optimized Vite build configuration

### Component Structure

- [x] **JsonFormatter**: Main component with LanguageProvider and ThemeProvider wrappers
- [x] **JsonFormatterContent**: Core functionality component with language context integration
- [x] **Styled Components**: All UI elements themed and responsive
- [x] **Icon Components**: Custom SVG icons for all interface elements
  - FormatIcon: Document formatting icon for Format button
  - MinifyIcon: Compress/minimize icon for Minify button
  - ValidateIcon: Curly braces syntax icon for JSON validation
  - CopyIcon: Copy/clipboard icon for Copy Output button
  - ClearIcon: Trash/delete icon for Clear button
  - SpacingIcon: Settings/configuration icon for Spacing dropdown
  - SunIcon, MoonIcon, MonitorIcon: Theme switching icons
  - USFlagIcon, DutchFlagIcon: Language selection flag icons
  - WarningIcon: Triangle warning icon for mobile device warnings
- [x] **Language System Components**: Organized in `src/components/language/`
  - LanguageProvider: Context provider for language state management
  - LanguageContext: Context definition with TypeScript types
  - useLanguage: Custom hook for accessing language functionality
  - constants-en.ts: English language translations and configuration
  - constants-nl.ts: Dutch language translations and configuration
  - constants-es.ts: Spanish language translations and configuration
  - constants-pt.ts: Portuguese language translations and configuration
  - constants-de.ts: German language translations and configuration
  - constants-mr.ts: Marathi language translations and configuration (Devanagari script)
  - constants-bn.ts: Bengali language translations and configuration (Bengali script)
  - index.ts: Barrel exports for clean imports
- [x] **HeaderToolbar**: Integrated toolbar component with flexbox layout
- [x] **Toast System**: Success feedback for copy operations with auto-dismiss
- [x] **Mobile Warning Toast**: Orange warning toast for mobile devices smaller than tablets
- [x] **GDPR Footer**: Compliant footer component with multilingual support and authentication cookies disclosure

### Layout & Styling Enhancements

- [x] **Header Restructuring**: Moved toolbar into header with integrated layout
- [x] **Toolbar Alignment**: Toolbar buttons tight-aligned with language and theme buttons at far right
- [x] **Button Enhancement**: All buttons now include icons with text labels for better accessibility
- [x] **Icon + Text Design**: Primary buttons (Format, Minify, Validate) show both icons and descriptive text
- [x] **Flexbox Layout**: Professional button layout with consistent gaps and sizing
- [x] **Uniform Button Design**: All toolbar buttons have consistent sizing and spacing
- [x] **Icon Integration**: 20x20px SVG icons with currentColor inheritance for theme compatibility
- [x] **Tooltip System**: Comprehensive multilingual tooltips for all interactive elements
- [x] **Space Optimization**: Efficient use of header space with integrated toolbar design
- [x] **Language Button Integration**: Flag-based language selector positioned between toolbar and theme controls

### Language System Features

- [x] **Multilingual Architecture**: Complete internationalization system supporting 7 languages
- [x] **Dynamic Language Switching**: Real-time language changes without page reload
- [x] **Language Context Provider**: Centralized language state management with React Context
- [x] **Translation Constants**: Separate constant files for each language in `src/components/language/` (constants-en.ts, constants-nl.ts, constants-es.ts, constants-pt.ts, constants-de.ts, constants-mr.ts, constants-bn.ts)
- [x] **Flag-Based UI**: Flag emojis for intuitive language selection (🇺🇸🇳🇱🇪🇸🇵🇹🇩🇪🇮🇳🇧🇩)
- [x] **Script Support**: Proper rendering for Latin, Devanagari (मराठी), and Bengali (বাংলা) scripts
- [x] **Persistent Language Choice**: User language preference saved in localStorage
- [x] **Comprehensive Translation Coverage**:
  - All UI text and labels
  - Button tooltips and descriptions
  - Status messages and validation text
  - Footer content and legal notices
  - Toast notifications and warnings
  - Theme and language selection tooltips
- [x] **Localized Content Examples**: Different JSON samples for each language with cultural adaptations
- [x] **Cultural Adaptations**: Appropriate names and locations for each language/region
- [x] **Footer Integration**: GDPR compliance text fully translated across all languages
- [x] **Modular Organization**: Language system with constants organized in dedicated `src/components/language/` folder

### Removed Features

- [x] **Load Sample Button**: Removed to streamline the interface
- [x] **Default Vite/React Assets**: Removed unused vite.svg and react.svg files from template
  - No references found in codebase - files were completely unused
  - Cleaned up from both `/src/assets/` and `/public/` directories
  - Only essential assets remain: favicon.png and hobbycodes_logo.svg
- [x] **Template CSS**: Cleaned up unused App.css styles from Vite template

## Project Guidelines

- **Framework**: React 18 with TypeScript and Vite
- **Styling**: Styled Components with comprehensive theming
- **Editor**: Monaco Editor for professional code editing experience
- **State Management**: React hooks with Context API for theme and language management
- **Internationalization**: Complete multilingual support (EN/NL/ES/PT/DE/MR/BN) with real-time switching
- **Client-Side Only**: No server-side processing or data storage
- **Responsive Design**: Works on desktop and mobile devices
- **Accessibility**: Proper ARIA labels, keyboard navigation support, and descriptive button text
- **Performance**: Optimized builds with code splitting and lazy loading
- **Security**: Comprehensive security headers and CSP policies
- **Privacy Compliance**: GDPR-compliant footer with authentication and essential cookies disclosure
- **Authentication**: Secured behind Authentik OIDC provider for user authentication and authorization

## Security Features

- [x] **Comprehensive Security Headers**: HSTS, CSP, X-Frame-Options, X-Content-Type-Options, XSS Protection
- [x] **Docker Security**: Non-root containers, minimal base images, regular security updates
- [x] **Dependency Scanning**: Automated vulnerability scanning with npm audit and Dependabot
- [x] **Code Security Analysis**: ESLint security rules, CodeQL analysis, Trivy container scanning
- [x] **Build Security**: Terser minification, source map exclusion, secure build pipeline
- [x] **CI/CD Security**: GitHub Actions security workflows, dependency review, SARIF reporting
- [x] **Security Policy**: Comprehensive security policy and vulnerability reporting process

## Authentication & Authorization

- [x] **Authentik OIDC Provider**: Application secured behind Authentik for user authentication
- [x] **OIDC Compliance**: Standard OpenID Connect authentication flow
- [x] **Session Management**: Secure session handling via authentication provider
- [x] **Authorization Cookies**: Essential cookies used for maintaining authenticated sessions
- [x] **Privacy Transparency**: GDPR footer clearly discloses authentication cookie usage

## Development Standards

- TypeScript strict mode enabled
- ESLint configuration with security rules
- Styled Components for CSS-in-JS with theme support
- React hooks best practices with proper prop handling
- Component composition over inheritance
- Semantic HTML structure
- Accessible design patterns
- Security-first development practices
- Automated security testing in CI/CD pipeline
- Proper DOM prop filtering using shouldForwardProp for styled components
- Modular architecture with barrel exports for clean imports
- Internationalization best practices with centralized translation management
- Context-based state management for theme and language functionality
- Consistent icon and button design patterns throughout the application
