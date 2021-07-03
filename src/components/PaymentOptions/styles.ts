import { tint } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components';

import * as ButtonStyles from 'components/Button/styles';
import media from 'styled-media-query';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    max-height: 45rem;
    min-height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    background: ${tint(0.2, theme.colors.lightGray)};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;

    ${ButtonStyles.Wrapper} {
      padding-left: ${theme.spacings.xxsmall};
      padding-right: ${theme.spacings.xxsmall};
      outline: 0;
    }

    ${media.lessThan('large')`
      flex-direction: column;
    `}
  `}
`;

export const CardsList = styled.div`
  ${({ theme }) => css`
    max-height: 20rem;
    overflow: auto;
    margin-bottom: ${theme.spacings.small};

    ::-webkit-scrollbar-track {
      background-color: ${theme.colors.lightGray};
    }
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${tint(0.2, theme.colors.gray)};
      border-radius: ${theme.border.radius};
    }
  `}
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardInfo = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xsmall};

    img {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`;

const ItemStyles = (theme: DefaultTheme) => css`
  background: ${theme.colors.lightGray};
  border-radius: 0.2rem;
  color: ${theme.colors.black};
  padding: 0 ${theme.spacings.xxsmall};
  height: 5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const CardItem = styled.label`
  ${({ theme }) => css`
    ${ItemStyles(theme)};
    justify-content: space-between;
    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`;

export const AddCard = styled.div`
  ${({ theme }) => css`
    ${ItemStyles(theme)};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xsmall};

    svg {
      margin-left: ${theme.spacings.xxsmall};
      margin-right: ${theme.spacings.xsmall};
      width: 2.4rem;
    }
  `}
`;
