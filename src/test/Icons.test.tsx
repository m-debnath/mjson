import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import {
  CopyIcon,
  FormatIcon,
  MinifyIcon,
  ValidateIcon,
  ClearIcon,
  SunIcon,
  MoonIcon,
  MonitorIcon,
  USFlagIcon,
  DutchFlagIcon,
  SpanishFlagIcon,
  WarningIcon,
  ResetIcon,
  CheckIcon,
  SpacingIcon,
} from '../components/Icons';

describe('Icon Components', () => {
  it('should render CopyIcon', () => {
    const { container } = render(<CopyIcon />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render FormatIcon', () => {
    const { container } = render(<FormatIcon />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render MinifyIcon', () => {
    const { container } = render(<MinifyIcon />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render ValidateIcon', () => {
    const { container } = render(<ValidateIcon />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render ClearIcon', () => {
    const { container } = render(<ClearIcon />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render SunIcon', () => {
    const { container } = render(<SunIcon />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render MoonIcon', () => {
    const { container } = render(<MoonIcon />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render MonitorIcon', () => {
    const { container } = render(<MonitorIcon />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render USFlagIcon', () => {
    const { container } = render(<USFlagIcon />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render DutchFlagIcon', () => {
    const { container } = render(<DutchFlagIcon />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render SpanishFlagIcon', () => {
    const { container } = render(<SpanishFlagIcon />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render WarningIcon', () => {
    const { container } = render(<WarningIcon />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render ResetIcon', () => {
    const { container } = render(<ResetIcon />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render CheckIcon', () => {
    const { container } = render(<CheckIcon />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render SpacingIcon', () => {
    const { container } = render(<SpacingIcon />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render icons with proper SVG attributes', () => {
    const { container } = render(<CopyIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    // Not all icons may have width/height attributes, but they should have viewBox
    expect(svg).toHaveAttribute('viewBox');
  });
});
