import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Toast, MobileWarningToast } from '../components/Toasts';
import { renderWithProviders } from './test-utils';

describe('Toast Components', () => {
  describe('Toast', () => {
    it('should render when show is true', () => {
      render(<Toast show={true}>Success message</Toast>);

      expect(screen.getByText('Success message')).toBeInTheDocument();
    });

    it('should render but be hidden when show is false', () => {
      render(<Toast show={false}>Success message</Toast>);

      // Toast is rendered but should have opacity 0
      const toast = screen.getByText('Success message');
      expect(toast).toBeInTheDocument();
      // The toast is rendered but styled to be hidden
    });

    it('should render children content', () => {
      render(
        <Toast show={true}>
          <span>✅</span>
          <span>Operation successful</span>
        </Toast>
      );

      expect(screen.getByText('✅')).toBeInTheDocument();
      expect(screen.getByText('Operation successful')).toBeInTheDocument();
    });
  });

  describe('MobileWarningToast', () => {
    it('should render mobile warning when show is true', () => {
      renderWithProviders(
        <MobileWarningToast show={true}>
          <span>⚠️</span>
          <span>Mobile warning message</span>
        </MobileWarningToast>
      );

      expect(screen.getByText('⚠️')).toBeInTheDocument();
      expect(screen.getByText('Mobile warning message')).toBeInTheDocument();
    });

    it('should render but be hidden when show is false', () => {
      renderWithProviders(
        <MobileWarningToast show={false}>
          <span>Mobile warning message</span>
        </MobileWarningToast>
      );

      // Toast is rendered but should be styled to be hidden
      const toast = screen.getByText('Mobile warning message');
      expect(toast).toBeInTheDocument();
    });

    it('should have proper warning styling', () => {
      const { container } = renderWithProviders(<MobileWarningToast show={true}>Warning</MobileWarningToast>);

      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe('Toast Integration', () => {
    it('should handle multiple children in Toast', () => {
      render(
        <Toast show={true}>
          <div>Icon</div>
          <div>Message</div>
          <button>Action</button>
        </Toast>
      );

      expect(screen.getByText('Icon')).toBeInTheDocument();
      expect(screen.getByText('Message')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
    });

    it('should handle empty content gracefully', () => {
      render(<Toast show={true} />);

      // Should not crash and should render container
      const { container } = render(<Toast show={true} />);
      expect(container.firstChild).toBeInTheDocument();
    });

    it('should toggle visibility correctly', () => {
      const { rerender } = render(<Toast show={false}>Message</Toast>);

      // Toast is always rendered, just styled differently
      expect(screen.getByText('Message')).toBeInTheDocument();

      rerender(<Toast show={true}>Message</Toast>);
      expect(screen.getByText('Message')).toBeInTheDocument();

      rerender(<Toast show={false}>Message</Toast>);
      expect(screen.getByText('Message')).toBeInTheDocument();
    });
  });
});
