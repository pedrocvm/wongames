import Games, { GamesProps } from 'templates/Games';
import { QUERY_GAMES } from 'graphql/queries/games';
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames';
import { initializeApollo } from 'utils/apollo';
import filtersMock from 'components/ExploreSidebar/mock';

export default function GamesPage(props: GamesProps) {
  return <Games {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 9
    }
  });

  console.log(data.games.filter((game) => !game.cover));

  return {
    props: {
      revalidate: 60,
      games: data.games.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: game.cover
          ? game.cover.url
          : 'https://bitsofco.de/content/images/2018/12/broken-1.png',
        price: game.price
      })),
      filterItems: filtersMock
    }
  };
}
