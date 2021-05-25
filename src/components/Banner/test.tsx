import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Banner from '.';

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy Death',
  subtitle: '<p>Play the new <strong>Crashlands</strong> season</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
};

describe('<Banner />', () => {
  it('should render all informations', () => {
    const { container } = renderWithTheme(<Banner {...props} />);

    expect(
      screen.getByRole('img', { name: /Defy Death/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: /Defy Death/i })).toHaveAttribute(
      'src',
      'https://source.unsplash.com/user/willianjusten/1042x580'
    );

    expect(
      screen.getByRole('heading', {
        name: /Play the new Crashlands season/i
      })
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /Buy now/i })).toHaveAttribute(
      'href',
      '/games/defy-death'
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be render a ribbon with default values', () => {
    renderWithTheme(<Banner {...props} hasRibbon ribbonText="Best Seller" />);

    const ribbon = screen.getByText(/Best Seller/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({
      backgroundColor: '#F231A5'
    });
    expect(ribbon).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    });
  });

  it('should be render a ribbon with small size and secondary color', () => {
    renderWithTheme(
      <Banner
        {...props}
        hasRibbon
        ribbonText="Best Seller"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    );

    const ribbon = screen.getByText(/Best Seller/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({
      backgroundColor: '#3CD3C1'
    });
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    });
  });
});
