import styled, { css, DefaultTheme } from 'styled-components';
import { TextFieldProps } from '.';

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>;

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean };

const wrapperModifier = {
  disabled: (theme: DefaultTheme) => css`
    cursor: not-allowed;

    ${Input}, ${Label}, ${Icon} {
      color: ${theme.colors.gray};
      filter: brightness(120%);

      cursor: not-allowed;
      &::placeholder {
        color: ${theme.colors.gray};
        filter: brightness(120%);
      }
    }
  `,

  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }

    ${Label}, ${Icon} {
      color: ${theme.colors.red};
    }
  `
};

export const InputWrapper = styled.div<IconPositionProps>`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`;

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    cursor: pointer;
  `}
`;

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    color: ${theme.colors.gray};
    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 2.2rem;
      height: 100%;
    }
  `}
`;

export const Error = styled.div`
  color: red;
`;

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, error }) => css`
    ${disabled && wrapperModifier.disabled(theme)};
    ${!!error && !disabled && wrapperModifier.error(theme)};
  `}
`;
