import 'match-media.mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import BannersMock from 'components/BannerSlider/mock';
import GamesMock from 'components/GameCardSlider/mock';
import HighlightMock from 'components/Highlight/mock';

import Home from '.';

const props = {
  banners: BannersMock,
  newGames: [GamesMock[0]],
  mostPopularHighlight: HighlightMock,
  mostPopularGames: [GamesMock[0]],
  upcomingGames: [GamesMock[0]],
  upcomingHighlight: HighlightMock,
  upcomingMoreGames: [GamesMock[0]],
  freeGames: [GamesMock[0]],
  freeHighlight: HighlightMock
};

describe('<Home />', () => {
  it('should render correctlygi', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /News/i })).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Most Popular/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Upcoming/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Free Games/i })
    ).toBeInTheDocument();

    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1);
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5);
    expect(screen.getAllByText(/red dead is back/i)).toHaveLength(3);
  });
});
