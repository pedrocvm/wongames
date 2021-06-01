import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

export type wrapperProps = {
  hasIcon: boolean;
} & Omit<ButtonProps, 'children'>;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,

  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,

  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,

  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};

    &:hover {
      filter: brightness(80%);
    }
  `
};

export const Wrapper = styled.button<wrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: ${theme.font.family};
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};
    border: none;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    transition: all 0.1s ease-in-out;

    &:hover {
      background: ${minimal
        ? 'none'
        : 'linear-gradient(180deg, #e35565 0%, #d058a6)'};
    }

    ${!!size && wrapperModifiers[size!](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${!!minimal && wrapperModifiers.minimal(theme)};
  `}
`;
