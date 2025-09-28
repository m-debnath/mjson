# Changelog

All notable changes to the JSON Formatter project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.6] - 2025-09-28

### Fixed

- Update Open Graph and Twitter image URLs to correct screenshots path
- Fix social media preview images for proper Open Graph and Twitter Card display

### Documentation

- Add screenshots section to README showcasing multilingual interfaces
- Include visual examples in English, Dutch (Nederlands), and Bengali (বাংলা)

## [0.1.5] - 2025-09-28

### Optimizations

- Optimize Docker build by setting user before copying files and improving .dockerignore
- Significant Docker build performance improvements (eliminated 48.8s chown operation)
- Enhanced .dockerignore with .git/, .github/, and package-lock.json exclusions

## [0.1.4] - 2025-09-28

### Fixed

- Move screenshot assets to public folder to ensure they are published in build
- Screenshots now properly included in production builds and accessible via URLs

## [0.1.3] - 2025-09-28

### Fixed

- Replace npm ci with npm install in all workflows to work without package-lock.json
- Resolve CI/CD pipeline failures due to missing package-lock.json dependency
- Fix npm optional dependency conflicts with platform-specific packages (@rollup/rollup-linux-x64-gnu)

### Optimizations

- Remove npm cache from workflows to fix package-lock.json dependency issues
- Add comprehensive dependency management documentation section
- Remove package-lock.json from repository to prevent npm optional dependency conflicts
- Enhanced release workflow with better error handling and tag existence checking

### Infrastructure

- Improve CI/CD pipeline reliability with npm install strategy
- Remove dependency on package-lock.json for reproducible builds
- Enhanced workflow error handling and version conflict resolution

### Documentation

- Add dependency management section explaining package-lock.json exclusion strategy
- Include troubleshooting steps for local development dependency issues

## [0.1.2] - 2025-09-28

### Optimizations

- Refresh and optimize package-lock.json handling
- Optimize release pipeline with improved version synchronization
- Add automated release status checking functionality

## [0.1.1] - 2025-09-28

### Optimizations

- Initial release pipeline optimizations and branding enhancements

## [0.1.0] - 2025-09-28

### Added

- Initial release of JSON Formatter by Mukul - HobbyCodes.com
- Professional JSON validation and formatting capabilities
- Multi-language support (English, Nederlands, Español, Português, Deutsch, मराठी, বাংলা)
- Comprehensive theme system (Light/Dark/System themes)
- Monaco Editor integration with syntax highlighting
- Real-time JSON validation with detailed error reporting
- JSON formatting with customizable indentation (2 or 4 spaces)
- JSON minification functionality
- Copy to clipboard with toast notifications
- Clear all functionality
- Mobile device warning system
- GDPR-compliant footer with authentication disclosure
- Docker deployment support with multi-stage builds
- Traefik reverse proxy integration
- Authentik OIDC authentication and authorization
- Comprehensive security headers and CSP policies
- Automated testing with Vitest and coverage reporting
- ESLint security rules and code quality checks
- Responsive design for desktop and mobile devices
- Professional HobbyCodes branding and favicon

### Security

- Comprehensive security headers implementation
- Docker security with non-root containers
- Dependency scanning with npm audit and Dependabot
- Code security analysis with ESLint security plugin
- Build security with Terser minification
- CI/CD security workflows with GitHub Actions

### Infrastructure

- GitHub Actions workflows for CI/CD
- Docker containerization with Nginx
- Production deployment automation
- Health checks and monitoring
- Coverage reporting with Codecov
- Automated security scanning

---

## Release Process

This project uses automated releases based on commit message prefixes:

- **BREAK:** - Major version increment (breaking changes)
- **NEW:** - Minor version increment (new features)
- **OPT:** - Patch version increment (optimizations)
- **FIX:** - Patch version increment (bug fixes)

### Manual Release Commands

```bash
# Analyze latest commit and create appropriate release
npm run release

# Force specific version increments
npm run release:major
npm run release:minor
npm run release:patch

# Get help
npm run release -- --help
```

### Deployment

All releases are automatically deployed to production via GitHub Actions when:

1. A commit with a valid prefix is pushed to `main`
2. Tests pass successfully
3. Security checks pass
4. A new release tag is created

The deployment pipeline includes:

- Automated testing and security validation
- Docker image building and publishing
- VPS deployment via SSH and Docker Compose
- Health checks and verification
