import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar';
import GameCard, { GameCardProps } from 'components/GameCard';
import { Grid } from 'components/Grid';
import Base from 'templates/Base';
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown';

import * as S from './styles';

export type GamesProps = {
  games?: GameCardProps[];
  filterItems: ItemProps[];
};

const Games = ({ games = [], filterItems }: GamesProps) => {
  const handleFilter = () => {
    return;
  };

  const handleShowMore = () => {
    return;
  };

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          items={filterItems}
          initialValues={{ windows: true, sort_by: 'low-to-high' }}
          onFilter={handleFilter}
        />

        <section>
          <Grid>
            {games.map((game) => (
              <GameCard key={game.title} {...game} />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <ArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  );
};

export default Games;
