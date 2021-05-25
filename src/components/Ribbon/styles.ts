import styled, { css, DefaultTheme } from 'styled-components';
import { RibbonProps, RibbonColors, RibbonSizes } from '.';

type RibbonType = Omit<RibbonProps, 'children'>;

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};

    &::before {
      border-left-color: ${theme.colors[color]};
      border-top-color: ${theme.colors[color]};
      filter: brightness(80%);
    }
  `,

  size: (theme: DefaultTheme, size: RibbonSizes) => css`
    height: ${size == 'normal' ? '3.6rem' : '2.6rem'};

    font-size: ${size == 'normal'
      ? theme.font.sizes.small
      : theme.font.sizes.xsmall};

    padding: ${size == 'normal'
      ? `0 ${theme.spacings.small}`
      : `0 ${theme.spacings.xsmall}`};

    right: ${size == 'normal' ? '-2rem' : '-1.5rem'};

    &::before {
      top: ${size == 'normal' ? '3.6rem' : '2.6rem'};
      border-top-width: ${size == 'normal' ? '1rem' : '0.7rem'};
      border-right-width: ${size == 'normal' ? '2rem' : '1.5rem'};
    }
  `
};

export const Wrapper = styled.div<RibbonType>`
  ${({ theme, color, size }) => css`
    position: absolute;
    top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    &::before {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
      border-left-width: 0;
      border-right-color: transparent;
    }

    ${!!color && wrapperModifiers.color(theme, color)}
    ${!!color && wrapperModifiers.size(theme, size!)}
  `}
`;
