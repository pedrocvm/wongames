import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;

    ${media.greaterThan('medium')`
      flex-direction: column;
      border: 0;

      a:not(:last-child) {
        border-bottom: 0.1rem solid ${theme.colors.lightGray};
      }
    `}
  `}
`;

const linkModifiers = {
  default: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
  `,

  active: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  `
};

export const Link = styled.a<{ isActive?: boolean }>`
  ${({ theme, isActive }) => css`
    text-decoration: none;
    display: flex;
    gap: ${theme.spacings.xsmall};
    align-items: center;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    transition: background, color, ${theme.transition.fast};

    &:hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    ${media.lessThan('medium')`
      justify-content: center;
      flex: 1;

      > span {
        display: none;
      }
    `}

    ${isActive ? linkModifiers.active(theme) : linkModifiers.default(theme)}
  `}
`;

export const Label = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`;
