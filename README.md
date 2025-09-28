# JSON Formatter & Validator by Mukul - HobbyCodes.com

A professional, self-hosted JSON formatter and validator web application built with React TypeScript, featuring comprehensive theming, multilingual support, Monaco Editor integration, and secure Docker deployment.

## ✨ Features

### 🔧 Core JSON Processing

- **JSON Formatting**: Pretty-print JSON with customizable indentation (2 or 4 spaces)
- **JSON Minification**: Compress JSON by removing unnecessary whitespace
- **Real-time Validation**: Live JSON syntax validation with detailed error reporting
- **Syntax Highlighting**: Professional Monaco Editor (VS Code editor) with JSON syntax highlighting
- **Error Detection**: Precise line-by-line error reporting with position information
- **Copy to Clipboard**: One-click copying with success toast notifications

### 🎨 User Interface & Experience

- **Professional Design**: Clean, modern interface with HobbyCodes branding
- **Theme System**: Complete light/dark/system theme switching with smooth transitions
- **Multilingual Support**: Full internationalization with 13 languages (English, Dutch, Swedish, German, French, Spanish, Portuguese, Latvian, Turkish, Marathi, Bengali, Japanese, Korean)
- **Flag-Based Language Selection**: Intuitive flag icons for easy language switching
- **Responsive Layout**: Dual-pane editor layout optimized for desktop and tablet devices
- **Mobile Device Warning**: Toast notification advising desktop use for optimal experience
- **Enhanced Button Design**: SVG icons with descriptive text labels for better accessibility

### 🛠️ Editor Features

- **Monaco Editor Integration**: Full-featured code editor with VS Code capabilities
- **Automatic Theme Synchronization**: Editor themes dynamically sync with application theme
- **Real-time Feedback**: Live validation status with visual indicators
- **Individual Copy Buttons**: Separate copy functionality for input and output panels
- **Configurable Spacing**: Dropdown selection for 2 or 4 space indentation
- **Status Indicators**: Visual status bars showing validation state and line counts
- **Professional Tooltips**: Multilingual tooltips for all interactive elements

### 🌐 Internationalization

- **Complete Language Support**: All UI text, tooltips, messages, and footer content translated across 13 languages
- **Supported Languages**:
  - 🇺🇸 English (en)
  - 🇳🇱 Nederlands (nl)
  - 🇸🇪 Svenska (sv)
  - 🇩🇪 Deutsch (de)
  - 🇫🇷 Français (fr)
  - 🇪🇸 Español (es)
  - 🇵🇹 Português (pt)
  - 🇱🇻 Latviski (lv)
  - 🇹🇷 Türkçe (tr)
  - 🇮🇳 मराठी (mr)
  - 🇧🇩 বাংলা (bn)
  - 🇯🇵 日本語 (ja)
  - 🇰🇷 한국어 (ko)
- **Real-time Language Switching**: Instant language changes without page reload
- **Language Persistence**: User language preference saved in localStorage
- **Localized Content**: Different JSON samples and examples for each language with cultural adaptations
- **Script Support**: Proper rendering for Latin, Devanagari, Bengali, and East Asian scripts (Japanese Kanji, Korean Hangul)
- **GDPR Compliance**: Multilingual footer with essential cookies disclosure

## Quick Start

### Development

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:5173`

### Docker Deployment

#### Option 1: Standalone with included Traefik

```bash
# Start the application with Traefik
docker-compose up -d

# Access the application
open http://json-formatter.localhost
```

#### Option 2: Production with external Traefik

1. **Update domain in docker-compose.prod.yml:**

   ```yaml
   - 'traefik.http.routers.json-formatter.rule=Host(`your-domain.com`)'
   - 'traefik.http.routers.json-formatter-secure.rule=Host(`your-domain.com`)'
   ```

2. **Deploy:**
   ```bash
   docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
   ```

## Configuration

### Traefik Labels

The application includes comprehensive Traefik labels for:

- **HTTP to HTTPS redirect**
- **Automatic SSL certificate generation** (Let's Encrypt)
- **Health checks**
- **Load balancing**

### Docker Configuration

- **Port**: 80 (internal)
- **Health Check**: `/health` endpoint
- **Security**: Includes security headers and CSP
- **Compression**: Gzip enabled for static assets
- **Caching**: 1-year cache for static assets

## 🛡️ Security & Compliance

### Security Features

- **Comprehensive Security Headers**: HSTS, CSP, X-Frame-Options, X-Content-Type-Options, XSS Protection
- **Client-Side Processing**: No server-side data storage or processing for maximum privacy
- **Docker Security**: Non-root containers, minimal base images, regular security updates
- **Dependency Scanning**: Automated vulnerability scanning with npm audit and Dependabot
- **Code Security Analysis**: ESLint security rules, CodeQL analysis, Trivy container scanning
- **CI/CD Security**: GitHub Actions security workflows with SARIF reporting

### Authentication & Privacy

- **GDPR Compliance**: Privacy-compliant footer with clear cookie usage disclosure
- **Essential Cookies Only**: Uses only authentication and functionality cookies, no tracking
- **Privacy Transparency**: Clear disclosure of authentication and authorization cookie usage

## 🚀 Technology Stack

### Frontend

- **Framework**: React 18 + TypeScript with strict typing
- **Editor**: Monaco Editor (full VS Code editor experience)
- **Styling**: Styled Components with comprehensive theming system
- **State Management**: React Context API with custom hooks
- **Build Tool**: Vite with optimized production builds
- **Internationalization**: - **Complete multilingual architecture supporting 13 languages (EN/NL/SV/DE/FR/ES/PT/LV/TR/MR/BN/JA/KO)**

### Infrastructure

- **Web Server**: Nginx (Alpine Linux) with security headers
- **Reverse Proxy**: Traefik v3 with automatic SSL certificates
- **Containerization**: Multi-stage Docker builds with security optimization
- **CI/CD**: GitHub Actions with security workflows and dependency scanning

## 📋 Project Architecture

### Component Structure

- **JsonFormatter**: Main application component with dual provider architecture
- **Language System**: Modular internationalization with React Context (`src/components/language/`)
- **Theme System**: Complete theming architecture with light/dark/system modes (`src/components/theme/`)
- **Icon Library**: Custom SVG icon components for all interface elements (`src/components/Icons.tsx`)
- **Styled Components**: Theme-aware component library with proper DOM prop filtering
- **Toast System**: Success notifications and mobile device warnings

### Development Standards

- **TypeScript Strict Mode**: Full type safety with strict compiler settings
- **ESLint Security Rules**: Comprehensive linting with security-focused rules
- **Prettier Code Formatting**: Consistent code formatting across the project
- **Modular Architecture**: Clean separation of concerns with barrel exports
- **Context-Based State**: Theme and language management via React Context
- **Accessibility First**: ARIA labels, keyboard navigation, and semantic HTML
- **Security-First Development**: Security considerations in every development decision

### Build & Deployment

- **Multi-Stage Docker**: Optimized builds with separate build and production stages
- **Nginx Configuration**: Production-ready web server with security headers and compression
- **Traefik Integration**: Automatic SSL certificates and reverse proxy configuration
- **Health Checks**: Docker health monitoring with `/health` endpoint
- **Asset Optimization**: Gzip compression and long-term caching for static assets

## 🔍 Development & Testing

### Scripts Available

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Testing
npm run test         # Run tests in watch mode
npm run test:run     # Run tests once and exit
npm run test:ui      # Run tests with Vitest UI interface
npm run test:coverage # Run tests with coverage report

# Code Quality
npm run lint         # ESLint security and code quality checks
npm run format       # Format code with Prettier
npm run format:check # Check code formatting

# Security
npm run audit        # Security audit of dependencies
npm run security:check # Comprehensive security checks
```

### Security Workflows

- **Automated Security Scanning**: Daily security audits via GitHub Actions
- **Dependency Review**: Automated review of dependency changes in pull requests
- **Docker Security Scanning**: Trivy vulnerability scanning of container images
- **CodeQL Analysis**: Advanced security analysis for JavaScript/TypeScript
- **SARIF Reporting**: Security findings integrated into GitHub Security tab

## 🩺 Health Monitoring

The application includes comprehensive health monitoring:

### Health Endpoint

```bash
curl http://localhost/health
# Returns: healthy
```

### Docker Health Checks

- **Interval**: 30 seconds
- **Timeout**: 10 seconds
- **Retries**: 3 attempts
- **Start Period**: 30 seconds grace period

### Monitoring Integration

- Compatible with monitoring systems like Prometheus, Grafana, or Uptime Kuma
- Health status available for load balancer health checks
- Container orchestration health integration (Docker Compose, Kubernetes)

## � Release Process

This project uses automated semantic versioning based on commit message prefixes:

### Commit Prefixes

- **BREAK:** - Major version increment (breaking changes)
- **NEW:** - Minor version increment (new features)  
- **OPT:** - Patch version increment (optimizations)
- **FIX:** - Patch version increment (bug fixes)

### Examples

```bash
git commit -m "NEW: Add multi-language support"
git commit -m "FIX: Resolve JSON parsing edge case"  
git commit -m "BREAK: Change API structure"
git commit -m "OPT: Improve performance of validation"
```

### Manual Release Commands

```bash
# Analyze latest commit and create appropriate release
npm run release

# Force specific version increments  
npm run release:major   # Force major version bump
npm run release:minor   # Force minor version bump
npm run release:patch   # Force patch version bump

# Get help and see all options
npm run release -- --help
```

### Automated Release Pipeline

When you push a commit with a valid prefix to the `main` branch:

1. **Version Analysis**: GitHub Actions analyzes the commit message
2. **Testing**: Comprehensive test suite runs with coverage reporting
3. **Security Checks**: ESLint security rules and dependency audit
4. **Version Bump**: Automatically updates package.json version
5. **Git Tag**: Creates a new git tag (e.g., v0.1.0)
6. **GitHub Release**: Creates a GitHub release with changelog
7. **Build Artifacts**: Generates and uploads build artifacts
8. **Deployment**: Automatically deploys to production VPS
9. **Verification**: Verifies successful deployment

### Release Features

- **Automatic Changelog Generation**: Based on commits since last release
- **Build Artifacts**: Compressed release packages for download
- **Security Validation**: All releases pass security checks
- **Zero-Downtime Deployment**: Docker Compose rolling updates
- **Rollback Support**: Tagged releases allow easy rollback if needed

## �📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ by Mukul at [HobbyCodes.com](https://hobbycodes.com)
- AI assistance provided in development process
- Monaco Editor by Microsoft for the excellent code editing experience
- React team for the fantastic framework

---

**Note**: This application is designed for self-hosting and includes comprehensive security measures. For production deployment, ensure proper SSL certificates, authentication, and security configurations are in place.
