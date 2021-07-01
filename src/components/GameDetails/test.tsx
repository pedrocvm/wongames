import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameDetails, { GameDetailsProps } from '.';

const props: GameDetailsProps = {
  developer: 'Different Tales',
  publisher: 'Walktrough',
  platforms: ['windows', 'mac', 'linux'],
  releaseDate: '2022-11-21T23:00:00',
  rating: 'BR0',
  genres: ['Role-playing', 'Narrative']
};

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByRole('heading', { name: /developer/i }));

    expect(screen.getByRole('heading', { name: /release date/i }));

    expect(screen.getByRole('heading', { name: /platforms/i }));

    expect(screen.getByRole('heading', { name: /publisher/i }));

    expect(screen.getByRole('heading', { name: /rating/i }));

    expect(screen.getByRole('heading', { name: /genres/i }));
  });

  it('should render platform icons', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByRole('img', { name: /linux/i }));
    expect(screen.getByRole('img', { name: /windows/i }));
    expect(screen.getByRole('img', { name: /mac/i }));
  });

  it('should render the formated date', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText('Nov 21, 2022'));
  });

  it('should render free rating when BR0', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText(/free/i));
  });

  it('should render 18+ rating when BR18', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />);

    expect(screen.getByText(/18\+/i));
  });

  it('should render the publisher', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText(/Walktrough/i));
  });

  it('should render the developer', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText(/Different Tales/i));
  });

  it('should render a list of genres', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />);

    expect(screen.getByText('Role-playing / Narrative'));
  });
});
