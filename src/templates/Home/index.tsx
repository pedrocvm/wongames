import * as S from './styles';

import { Container } from 'components/Container';
import Showcase from 'components/Showcase';
import Base from 'templates/Base';
import BannerSlider from 'components/BannerSlider';

import { BannerProps } from 'components/Banner';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  newGamesTitle: string;
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  mostPopularGamesTitle: string;
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  upcomingGamesTitle: string;
  freeGames: GameCardProps[];
  freeGamesHighlight: HighlightProps;
  freeGamesTitle: string;
};

const Home = ({
  banners,
  newGames,
  newGamesTitle,
  mostPopularHighlight,
  mostPopularGames,
  mostPopularGamesTitle,
  upcomingGames,
  upcomingHighlight,
  upcomingGamesTitle,
  freeGames,
  freeGamesHighlight,
  freeGamesTitle
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title={newGamesTitle} games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title={mostPopularGamesTitle}
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <Showcase
      title={upcomingGamesTitle}
      games={upcomingGames}
      highlight={upcomingHighlight}
    />

    <Showcase
      title={freeGamesTitle}
      highlight={freeGamesHighlight}
      games={freeGames}
    />
  </Base>
);

export default Home;
