import React from 'react';
import Home, { HomeTemplateProps } from 'templates/Home';

import BannersMock from 'components/BannerSlider/mock';
import GamesMock from 'components/GameCardSlider/mock';
import HighlightMock from 'components/Highlight/mock';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

// getStaticProps => Gera um Estático em Build Time.
// getServerSideProps => Gera via SSR a cada Request.
// getInitialProps => Gera via SSR a cada Request (Não utilizado).
export function getServerSideProps() {
  return {
    props: {
      banners: BannersMock,
      newGames: GamesMock,
      mostPopularHighlight: HighlightMock,
      mostPopularGames: GamesMock,
      upcomingGames: GamesMock,
      upcomingHighlight: HighlightMock,
      upcomingMoreGames: GamesMock,
      freeGames: GamesMock,
      freeHighlight: HighlightMock
    }
  };
}

// ATENÇÃO
// Os Métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES
