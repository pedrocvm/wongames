import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import { useApollo } from 'utils/apollo';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Won Games</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#06092B" />
          <meta
            name="description"
            content="The best Game Store in the world!"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
