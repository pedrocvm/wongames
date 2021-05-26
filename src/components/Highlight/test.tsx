import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Highlight from '.';
import * as S from './styles';

const props = {
  title: 'Red Dead Redemption',
  subtitle: 'Come see John’s new adventures',
  buttonLabel: 'Buy Now',
  buttonLink: '/rdr2',
  backgroundImage: '/img/red-dead-img.jpg',
  floatImage: '/img/red-dead-float.png'
};

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    renderWithTheme(<Highlight {...props} />);

    expect(
      screen.getByRole('heading', { name: /Red Dead Redemption/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Come see John’s new adventures/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /Buy Now/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Buy Now/i })).toHaveAttribute(
      'href',
      '/rdr2'
    );
  });

  it('should render a background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    });
  });

  it('should render a float image', () => {
    renderWithTheme(<Highlight {...props} />);

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.floatImage
    );
  });

  it('should render align normal by default', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatImage content'"
    );

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    });
  });

  it('should render align reverse', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} alignment="reverse" />
    );

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatImage'"
    );

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    });
  });
});
