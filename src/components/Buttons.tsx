import styled from 'styled-components';

// Theme toggle button
export const ThemeButton = styled.button`
  background-color: #6c757d;
  border: none;
  color: white;
  padding: 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  flex-shrink: 0;
  min-width: 44px;
  min-height: 44px;

  &:hover {
    background-color: #5a6268;
    transform: scale(1.05);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

// Generic toolbar button with variants
export const Button = styled.button.withConfig({
  shouldForwardProp: prop => prop !== 'variant',
})<{ variant?: 'primary' | 'secondary' | 'danger' }>`
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;

  ${({ variant = 'secondary' }) => {
    switch (variant) {
      case 'primary':
        return `background-color: #007bff; color: white; &:hover { background-color: #0056b3; transform: scale(1.05); }`;
      case 'danger':
        return `background-color: #dc3545; color: white; &:hover { background-color: #c82333; transform: scale(1.05); }`;
      default:
        return `background-color: #6c757d; color: white; &:hover { background-color: #5a6268; transform: scale(1.05); }`;
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    &:hover {
      transform: none;
    }
  }

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;

// Spacing dropdown wrapper label and select
export const SpacingLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #6c757d;
  color: white;
  padding: 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 44px;
  min-height: 44px;
  &:hover {
    background-color: #5a6268;
    transform: scale(1.05);
  }
  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;

export const SpacingDropdown = styled.select`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.75rem;
  min-width: 60px;
  text-align: center;
  &:focus {
    outline: none;
  }
  option {
    background-color: #6c757d;
    color: white;
  }
`;

// Copy button for panel header
export const CopyButton = styled.button.withConfig({
  shouldForwardProp: prop => prop !== 'hasContent',
})<{ hasContent?: boolean }>`
  background: transparent;
  border: 1px solid #6c757d;
  color: ${props => (props.hasContent ? '#007bff' : '#6c757d')};
  padding: 0.375rem 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  &:hover:not(:disabled) {
    background-color: ${props => (props.hasContent ? '#e3f2fd' : '#e9ecef')};
    color: ${props => (props.hasContent ? '#0056b3' : '#495057')};
    transform: ${props => (props.hasContent ? 'scale(1.1)' : 'none')};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  svg {
    width: 14px;
    height: 14px;
  }
`;

// Small inline format button
export const FormatButton = styled.button`
  background: transparent;
  border: 1px solid #6c757d;
  cursor: pointer;
  padding: 0.375rem 0.75rem;
  border-radius: 4px;
  color: #007bff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  &:hover:not(:disabled) {
    background-color: #e3f2fd;
    color: #0056b3;
    transform: scale(1.1);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    color: #6c757d;
  }
  svg {
    width: 14px;
    height: 14px;
  }
`;

export default {
  ThemeButton,
  Button,
  SpacingLabel,
  SpacingDropdown,
  CopyButton,
  FormatButton,
};
