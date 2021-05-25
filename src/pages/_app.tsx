import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import GlobalStyles from '../styles/global';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
