import Home, { HomeTemplateProps } from 'templates/Home';
import { initializeApollo } from 'utils/apollo';
import { QueryHome } from 'graphql/generated/QueryHome';
import { QUERY_HOME } from 'graphql/queries/home';
import { bannersMapper, gamesMapper, highlightsMapper } from 'utils/mappers';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

// ATENÇÃO:
// os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES

// getStaticProps => gerar estático em build time (gatsby)
// getServerSideProps => gerar via ssr a cada request (nunca vai para o bundle do client)
// getInitialProps => gerar via ssr a cada request (vai para o client, faz hydrate do lado do client depois do 1 req)
export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME });

  return {
    props: {
      revalidate: 10,
      banners: bannersMapper(banners),
      newGames: gamesMapper(newGames),
      newGamesTitle: sections?.newGames?.title,
      mostPopularHighlight: highlightsMapper(sections?.popularGames?.highlight),
      mostPopularGames: gamesMapper(sections!.popularGames!.games),
      mostPopularGamesTitle: sections?.popularGames?.title,
      upcomingGames: gamesMapper(upcomingGames),
      upcomingHighlight: highlightsMapper(sections?.upcomingGames?.highlight),
      upcomingGamesTitle: sections?.upcomingGames?.title,
      freeGames: gamesMapper(freeGames),
      freeGamesHighlight: highlightsMapper(sections?.freeGames?.highlight),
      freeGamesTitle: sections?.freeGames?.title
    }
  };
}
