import styled, { css } from 'styled-components';
import media, { DefaultBreakpoints } from 'styled-media-query';

type breakpoint = keyof DefaultBreakpoints;

export type MediaMatchProps = {
  greaterThan?: breakpoint;
  lessThan?: breakpoint;
};

const mediaMatchModifies = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)` display: block`}
  `,

  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)` display: block`}
  `
};

export default styled.div<MediaMatchProps>`
  ${({ greaterThan, lessThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifies.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifies.greaterThan(greaterThan)}
  `}
`;
