import { ThemeProvider } from 'styled-components';
import { render, RenderResult } from '@testing-library/react';
import theme from 'styles/theme';
import { ReactNode } from 'react';

export const renderWithTheme = (children: ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
