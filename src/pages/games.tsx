import Games, { GamesProps } from 'templates/Games';
import filtersMock from 'components/ExploreSidebar/mock';
import gamesMock from 'components/GameCardSlider/mock';

export default function GamesPage(props: GamesProps) {
  return <Games {...props} />;
}

export async function getServerSideProps() {
  return {
    props: {
      games: gamesMock,
      filterItems: filtersMock
    }
  };
}
