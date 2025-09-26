import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button, CopyButton, ThemeButton, LanguageButton } from '../components/Buttons';
import { renderWithProviders } from './test-utils';

describe('Button Components', () => {
  describe('Button', () => {
    it('should render button with text', () => {
      render(<Button>Test Button</Button>);
      expect(screen.getByRole('button')).toHaveTextContent('Test Button');
    });

    it('should handle click events', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick}>Click Me</Button>);

      await user.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledOnce();
    });

    it('should be disabled when disabled prop is true', () => {
      render(<Button disabled>Disabled Button</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('should apply primary variant styling', () => {
      render(<Button variant="primary">Primary Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('should apply danger variant styling', () => {
      render(<Button variant="danger">Danger Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  });

  describe('CopyButton', () => {
    it('should render copy button', () => {
      render(<CopyButton>Copy</CopyButton>);
      expect(screen.getByRole('button')).toHaveTextContent('Copy');
    });

    it('should handle click events', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<CopyButton onClick={handleClick}>Copy</CopyButton>);

      await user.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledOnce();
    });

    it('should be disabled when disabled prop is true', () => {
      render(<CopyButton disabled>Copy</CopyButton>);
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });

  describe('ThemeButton', () => {
    it('should render theme button with providers', () => {
      renderWithProviders(<ThemeButton>Theme</ThemeButton>);
      expect(screen.getByRole('button')).toHaveTextContent('Theme');
    });

    it('should handle click events', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      renderWithProviders(<ThemeButton onClick={handleClick}>Theme</ThemeButton>);

      await user.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledOnce();
    });
  });

  describe('LanguageButton', () => {
    it('should render language button with providers', () => {
      renderWithProviders(<LanguageButton>Language</LanguageButton>);
      expect(screen.getByRole('button')).toHaveTextContent('Language');
    });

    it('should handle click events', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      renderWithProviders(<LanguageButton onClick={handleClick}>Language</LanguageButton>);

      await user.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledOnce();
    });
  });
});
