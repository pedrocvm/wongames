import React from 'react';
import Head from 'next/head';
import Main from 'components/Main';
const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Starter Next</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>

      <main>
        <Main />
      </main>
    </div>
  );
};

export default Home;
