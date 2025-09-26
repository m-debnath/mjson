# Testing Guide for JSON Formatter

This project uses **Vitest** for unit testing with comprehensive coverage of React components, utilities, and context providers.

## Test Setup

### Dependencies

- **Vitest**: Modern testing framework
- **@testing-library/react**: React component testing utilities
- **@testing-library/jest-dom**: Custom matchers for DOM testing
- **@testing-library/user-event**: User interaction simulation
- **@vitest/coverage-v8**: Code coverage reporting
- **jsdom**: DOM environment for testing

### Configuration

- **vitest.config.ts**: Main Vitest configuration
- **src/test/setup.ts**: Global test setup and mocks
- **src/test/test-utils.tsx**: Custom render utilities with providers

## Running Tests

```bash
# Run tests in watch mode
npm run test

# Run tests with UI
npm run test:ui

# Run tests once
npm run test:run

# Run tests with coverage
npm run test:coverage
```

## Test Structure

### Core Components

- **JsonFormatter.test.tsx**: Main application component tests
- **Buttons.test.tsx**: Button component functionality
- **Icons.test.tsx**: SVG icon rendering tests
- **Footer.test.tsx**: Footer component and GDPR compliance
- **Toasts.test.tsx**: Toast notification components

### Context & Providers

- **language.test.tsx**: Language switching and internationalization
- **theme.test.tsx**: Theme management and system detection

### Utilities

- **json-utils.test.ts**: JSON validation, formatting, and minification logic

## Test Coverage

Current coverage: **85.56%** overall

- Statements: 85.56%
- Branches: 82.48%
- Functions: 83.33%
- Lines: 85.56%

### Coverage by Component

- **Language System**: 99.08% - Excellent coverage of multilingual features
- **Theme System**: 97.64% - Comprehensive theme switching tests
- **Utility Functions**: 100% - Complete JSON processing coverage
- **UI Components**: 81.71% - Good coverage of interactive elements

## Test Features

### Mocking

- **Monaco Editor**: Mocked with textarea for testing
- **localStorage**: Mocked for persistence testing
- **Clipboard API**: Mocked for copy functionality
- **matchMedia**: Mocked for theme detection

### Provider Testing

- **Custom renderWithProviders**: Wraps components with all necessary providers
- **Language Context**: Tests language switching and persistence
- **Theme Context**: Tests theme modes and system detection

### User Interactions

- **Button Clicks**: Simulated user interactions
- **Form Inputs**: Dropdown selections and text input
- **Copy Operations**: Clipboard functionality testing

### Edge Cases

- **Invalid JSON**: Error handling and validation
- **Empty States**: Initial component states
- **Mobile Detection**: Responsive behavior testing
- **Invalid Settings**: Graceful fallback handling

## Accessibility Testing

Tests include accessibility considerations:

- **ARIA Labels**: Button and form labeling
- **Screen Reader Text**: Meaningful text content
- **Keyboard Navigation**: Interactive element accessibility
- **Visual Indicators**: Status messages and validation feedback

## Performance Considerations

- **Lazy Loading**: Component rendering optimization
- **Mock Efficiency**: Minimal mock implementations
- **Test Isolation**: Each test runs independently
- **Fast Execution**: Average test suite runs in ~1.5 seconds

## Continuous Integration

Tests are configured to run in CI/CD pipelines with:

- **Threshold Enforcement**: Minimum 70% coverage required
- **Security Scanning**: ESLint security rules
- **Type Safety**: TypeScript strict mode
- **Cross-Platform**: Compatible with different environments

## Writing New Tests

### Component Tests

```typescript
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../test-utils';
import { YourComponent } from '../YourComponent';

describe('YourComponent', () => {
  it('should render correctly', () => {
    renderWithProviders(<YourComponent />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

### Utility Tests

```typescript
import { describe, it, expect } from 'vitest';

describe('Utility Function', () => {
  it('should handle valid input', () => {
    expect(yourUtility('valid input')).toBe('expected output');
  });

  it('should handle edge cases', () => {
    expect(() => yourUtility(null)).toThrow('Expected error');
  });
});
```

## Best Practices

1. **Test Behavior, Not Implementation**: Focus on what the component does, not how
2. **Use Descriptive Names**: Test names should clearly describe the scenario
3. **Arrange-Act-Assert**: Structure tests with clear setup, action, and verification
4. **Mock External Dependencies**: Keep tests isolated and deterministic
5. **Test Edge Cases**: Include error conditions and boundary values
6. **Maintain Coverage**: Aim for high coverage while ensuring meaningful tests

## Debugging Tests

### Common Issues

- **Mock Problems**: Ensure mocks match actual API interfaces
- **Async Issues**: Use proper async/await or waitFor utilities
- **Provider Context**: Wrap components with necessary providers
- **DOM Queries**: Use appropriate queries (getBy, queryBy, findBy)

### Debug Tools

```bash
# Run specific test file
npm test -- Icons.test.tsx

# Run with verbose output
npm test -- --reporter=verbose

# Debug mode with breakpoints
npm test -- --inspect-brk
```

This comprehensive test suite ensures the JSON Formatter application is reliable, maintainable, and user-friendly across all supported features and languages.
