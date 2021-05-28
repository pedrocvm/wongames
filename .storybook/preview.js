import { addDecorator } from '@storybook/react';
import { withNextRouter } from 'storybook-addon-next-router';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

addDecorator(withNextRouter());

export const parameters = {
  backgrounds: {
    default: 'Won Light',
    values: [
      {
        name: 'Won Light',
        value: theme.colors.white
      },
      {
        name: 'Won Dark',
        value: theme.colors.mainBg
      }
    ]
  }
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
];
