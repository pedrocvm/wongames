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
  freeGames: [GamesMock[0]],
  freeGamesHighlight: HighlightMock
};

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>;
    }
  };
});

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Banner Slider"></div>;
    }
  };
});

describe('<Home />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByTestId('Mock Banner Slider')).toBeInTheDocument();
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(4);
  });
});
