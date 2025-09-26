import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { Footer } from '../components/Footer';
import { renderWithProviders } from './test-utils';

describe('Footer Component', () => {
  it('should render footer with copyright information', () => {
    renderWithProviders(<Footer />);

    expect(screen.getByText(/© 2025/)).toBeInTheDocument();
    expect(screen.getByText(/HobbyCodes.com/)).toBeInTheDocument();
    expect(screen.getByText(/Made with ❤️ by Mukul/)).toBeInTheDocument();
  });

  it('should render cookies notice', () => {
    renderWithProviders(<Footer />);

    expect(screen.getByText(/🍪 This website uses only essential cookies/)).toBeInTheDocument();
  });

  it('should contain all required legal information', () => {
    renderWithProviders(<Footer />);

    // Check for essential cookies disclosure
    expect(screen.getByText(/essential cookies for authentication/)).toBeInTheDocument();
    expect(screen.getByText(/No tracking or analytics cookies/)).toBeInTheDocument();
  });

  it('should have proper structure and styling', () => {
    const { container } = renderWithProviders(<Footer />);

    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });

  it('should display AI acknowledgment', () => {
    renderWithProviders(<Footer />);

    expect(screen.getByText(/AI also helped/)).toBeInTheDocument();
  });
});
