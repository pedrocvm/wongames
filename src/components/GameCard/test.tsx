import { fireEvent, screen } from '@testing-library/react';
import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/helpers';

import GameCard from '.';

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
};

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    );

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
  });

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />);

    expect(screen.getByText(props.price)).not.toHaveStyle({
      textDecoration: 'line-through'
    });

    expect(screen.getByText(props.price)).toHaveStyle({
      'background-color': theme.colors.secondary
    });
  });

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 200,00" />);

    expect(screen.getByText(props.price)).toHaveStyle({
      textDecoration: 'line-through'
    });

    expect(screen.getByText('R$ 200,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    });
  });

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />);

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn();
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />);

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(onFav).toBeCalled();
  });

  it('should be render a ribbon with default values', () => {
    renderWithTheme(<GameCard {...props} hasRibbon ribbonText="20% OFF" />);

    const ribbon = screen.getByText(/20% OFF/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({
      backgroundColor: theme.colors.primary
    });
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    });
  });

  it('should be render a ribbon with normal size and secondary color', () => {
    renderWithTheme(
      <GameCard
        {...props}
        hasRibbon
        ribbonText="20% OFF"
        ribbonColor="secondary"
        ribbonSize="normal"
      />
    );

    const ribbon = screen.getByText(/20% OFF/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({
      backgroundColor: theme.colors.secondary
    });
    expect(ribbon).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    });
  });
});
