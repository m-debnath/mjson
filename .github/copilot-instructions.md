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
- [x] **Responsive Layout**: Dual-pane editor layout with flexible sizing
- [x] **Custom Favicon**: Uses favicon.png from assets instead of default Vite logo
- [x] **Branded Title**: "JSON Formatter by Mukul - hobbycodes.com" in browser tab
- [x] **Iconified Buttons**: SVG icons added to all toolbar buttons for better UX
- [x] **GDPR Footer**: System theme compliant footer with essential cookies disclosure

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
- [x] **Context API**: Theme management with React Context
- [x] **Custom Hooks**: useTheme hook for theme state management
- [x] **Local Storage**: Theme preference persistence
- [x] **Media Query Detection**: System theme detection and response

### Deployment & Infrastructure
- [x] **Docker Support**: Multi-stage build with Nginx
- [x] **Traefik Integration**: Reverse proxy configuration with automatic SSL
- [x] **Authentik OIDC Integration**: Authentication and authorization via Authentik OIDC provider
- [x] **Security Headers**: Comprehensive security headers in Nginx configuration
- [x] **Health Checks**: Docker health check implementation
- [x] **Production Build**: Optimized Vite build configuration

### Component Structure
- [x] **JsonFormatter**: Main component with ThemeProvider wrapper
- [x] **JsonFormatterContent**: Core functionality component
- [x] **Styled Components**: All UI elements themed and responsive
- [x] **Icon Components**: Custom SVG icons for theme switching and toolbar actions
  - FormatIcon: Document formatting icon for Format button
  - MinifyIcon: Compress/minimize icon for Minify button
  - ValidateIcon: Checkmark validation icon for Validate button
  - CopyOutputIcon: Copy/clipboard icon for Copy Output button
  - ClearIcon: Trash/delete icon for Clear button
  - SpacingIcon: Settings/configuration icon for Spacing dropdown
  - SunIcon, MoonIcon, SystemIcon: Theme switching icons
  - WarningIcon: Triangle warning icon for mobile device warnings
- [x] **HeaderToolbar**: Integrated toolbar component with flexbox layout
- [x] **Toast System**: Success feedback for copy operations with auto-dismiss
- [x] **Mobile Warning Toast**: Orange warning toast for mobile devices smaller than tablets
- [x] **GDPR Footer**: Compliant footer component with authentication and essential cookies disclosure

### Layout & Styling Enhancements
- [x] **Header Restructuring**: Moved toolbar into header with integrated layout
- [x] **Toolbar Alignment**: Toolbar buttons tight-aligned before theme button at far right
- [x] **Button Enhancement**: All buttons now include icons with proper spacing and alignment
- [x] **Icon-Only Toolbar**: Large icon buttons with text converted to helpful tooltips
- [x] **Flexbox Layout**: Professional button layout with consistent gaps and sizing
- [x] **Uniform Button Design**: All toolbar buttons including theme button have consistent 44x44px sizing
- [x] **Icon Integration**: 20x20px SVG icons with currentColor inheritance for theme compatibility
- [x] **Tooltip System**: Informative tooltips replace button text for cleaner interface
- [x] **Space Optimization**: Efficient use of header space with integrated toolbar design

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
- **State Management**: React hooks with Context API for theme management
- **Client-Side Only**: No server-side processing or data storage
- **Responsive Design**: Works on desktop and mobile devices
- **Accessibility**: Proper ARIA labels and keyboard navigation support
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