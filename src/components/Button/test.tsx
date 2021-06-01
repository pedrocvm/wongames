import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

import Button from '.';

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the small size when size is passed', () => {
    renderWithTheme(<Button size="small">Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    });
  });

  it('should render the large size when size is passed', () => {
    renderWithTheme(<Button size="large">Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    });
  });

  it('should render a full width version', () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      width: '100%'
    });
  });

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
    );

    expect(screen.getByText(/buy now/i)).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Link
      </Button>
    );

    expect(screen.getByRole('link', { name: /link/i })).toHaveAttribute(
      'href',
      '/link'
    );
  });

  it('should render a minimal version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Buy now
      </Button>
    );

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      background: 'none',
      color: '#F231A5'
    });

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover'
      }
    );
  });
});
