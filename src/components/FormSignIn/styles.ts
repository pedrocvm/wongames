import styled, { css } from 'styled-components';

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-decoration: none;
    text-align: right;
    transition: ${theme.transition.fast};

    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`;
