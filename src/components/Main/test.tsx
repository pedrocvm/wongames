import { render, screen } from '@testing-library/react';
import Main from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', {
        name: /React Boilerplate/i
      })
    ).toBeInTheDocument;

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({
      backgroundColor: '#06092b'
    });
  });
});
