# Changelog

All notable changes to the JSON Formatter project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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