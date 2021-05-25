import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Ribbon from '.';

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    const { debug, container } = renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    debug(container); // Dá um console.log no componente

    expect(screen.getByText(/best seller/i)).toBeInTheDocument();
  });

  it('should render with the primary color by default', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    });
  });

  it('should render with the secondary color', () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>);

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    });
  });

  it('should render with the normal size by default', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    });
  });

  it('should render with the small size', () => {
    renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>);

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    });
  });
});
