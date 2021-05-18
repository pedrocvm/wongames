import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import GlobalStyles from '../styles/global';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
};

export default App;
