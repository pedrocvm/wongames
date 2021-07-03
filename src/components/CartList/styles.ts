import { tint } from 'polished';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import * as HeadingStyles from 'components/Heading/styles';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    max-height: 45rem;
    min-height: 30rem;
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: start;

    ${HeadingStyles.Wrapper} {
      margin: ${theme.spacings.small};
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    overflow: auto;

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

export const Footer = styled.div`
  ${({ theme }) => css`
    background: ${tint(0.2, theme.colors.lightGray)};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};

    display: flex;
    justify-content: space-between;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
      padding: ${theme.spacings.small};
    `};

    ${media.lessThan('large')`
      padding: ${theme.spacings.large} 2rem;
      align-items: center;
      font-size: ${theme.font.sizes.large};
    `}

    ${media.lessThan('medium')`
      padding: 2rem;
    `}
  `}
`;

export const Total = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;
