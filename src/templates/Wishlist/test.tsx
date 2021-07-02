import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

import Wishlist from '.';

const props = {
  games: gamesMock,
  recommendedGames: gamesMock.slice(0, 5),
  recommendedHighlight: highlightMock
};

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>;
    }
  };
});

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Wishlist {...props} />);

    expect(screen.getByRole('heading', { name: /wishlist/i }));

    expect(screen.getAllByText(/population zero/i)).toHaveLength(6);
    expect(screen.getAllByTestId('Mock Showcase'));
  });

  it('should render empty when there are no games', () => {
    renderWithTheme(<Wishlist {...props} games={[]} />);

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument();
  });
});
