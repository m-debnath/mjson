import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import type { ReactElement } from 'react';
import { TestProviders } from './TestProviders';

export const renderWithProviders = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: TestProviders, ...options });

// Mock data for tests
export const mockValidJson = '{"name":"Test User","age":25,"active":true}';

export const mockInvalidJson = '{"name":"Test User","age":25,"active":true';

export const mockMinifiedJson = '{"name":"Test User","age":25,"active":true}';

export const mockFormattedJson = '{\n  "name": "Test User",\n  "age": 25,\n  "active": true\n}';
