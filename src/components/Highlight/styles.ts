import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { HighlightProps } from '.';

type WrapperProps = Pick<HighlightProps, 'backgroundImage' | 'alignment'>;

const wrapperModifiers = {
  right: () => css`
    grid-template-areas: 'floatImage content';
    grid-template-columns: 1.3fr 2fr;

    ${Content} {
      text-align: right;
    }
  `,

  left: () => css`
    grid-template-areas: 'content floatImage';
    grid-template-columns: 2fr 1.3fr;

    ${Content} {
      text-align: left;
    }

    ${FloatImage} {
      justify-self: end;
    }
  `
};

export const Wrapper = styled.section<WrapperProps>`
  ${({ backgroundImage, alignment }) => css`
    position: relative;
    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;
    height: 23rem;
    display: grid;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}

    ${!!alignment && wrapperModifiers[alignment]}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};

    padding: ${theme.spacings.xsmall};
    grid-area: content;

    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.large};
    `}
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.large};
    `}
  `}
`;

export const FloatImage = styled.img`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    max-height: 23rem;
    max-width: 100%;
    grid-area: floatImage;
    align-self: end;

    ${media.greaterThan('medium')`
      max-height: 32rem;
    `}
  `}
`;
