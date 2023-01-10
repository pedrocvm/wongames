import Games, { GamesProps } from 'templates/Games';
import filtersMock from 'components/ExploreSidebar/mock';
import { initializeApollo } from 'utils/apollo';
import { QUERY_GAMES } from 'graphql/queries/games';

export default function GamesPage(props: GamesProps) {
  return <Games {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: QUERY_GAMES,
    variables: {
      limit: 9
    }
  });

  return {
    props: {
      revalidate: 60,
      games: data.games.map((game) => ({
        title: game.name,
        developer: game.developers[0].name,
        img: game.cover && game.cover.url,
        price: game.price
          ? new Intl.NumberFormat('en', {
              style: 'currency',
              currency: 'USD'
            }).format(game.price)
          : 'FREE TO PLAY'
      })),
      filterItems: filtersMock
    }
  };
}
