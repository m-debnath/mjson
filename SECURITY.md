# Security Policy

## Supported Versions

We support security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of our JSON formatter application seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### How to Report a Security Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to security@hobbycodes.com with the following information:

- Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit the issue

### What to Expect

- We will acknowledge receipt of your vulnerability report within 48 hours.
- We will provide a detailed response within 72 hours indicating the next steps in handling your submission.
- We will keep you informed of the progress being made towards a fix and full announcement.
- We may ask for additional information or guidance surrounding the reported issue.

## Security Measures

### Application Security

- **Content Security Policy (CSP)**: Strict CSP headers prevent XSS attacks
- **Security Headers**: HSTS, X-Frame-Options, X-Content-Type-Options, and other security headers
- **Input Validation**: All JSON input is validated and sanitized
- **No Server-Side Processing**: Client-side only application reduces attack surface
- **Dependency Scanning**: Regular automated dependency vulnerability scanning
- **Code Analysis**: Static code analysis with CodeQL and ESLint security rules

### Infrastructure Security

- **Docker Security**: Non-root user containers, minimal base images, regular updates
- **HTTPS Only**: All connections encrypted with TLS
- **Regular Updates**: Automated dependency updates via Dependabot
- **Security Monitoring**: Continuous security monitoring and alerting

### Development Security

- **Secure Development**: Security-first development practices
- **Code Reviews**: All changes require security-focused code reviews
- **Automated Testing**: Comprehensive security testing in CI/CD pipeline
- **Vulnerability Scanning**: Regular vulnerability scans and penetration testing

## Security Best Practices for Users

- Keep your browser updated to the latest version
- Use HTTPS when accessing the application
- Be cautious when pasting sensitive data into any online tool
- Consider using the application offline for sensitive JSON data

## Contact

For general security questions or concerns, please contact security@hobbycodes.com.

---

*This security policy is subject to change. Please check this page regularly for updates.*