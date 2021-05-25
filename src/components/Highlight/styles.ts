import styled from 'styled-components';
import { HighlightProps } from '.';

export type BannerProps = Pick<HighlightProps, 'align'>;

export const Wrapper = styled.div``;

export const Banner = styled.div<BannerProps>``;

export const Background = styled.img``;

export const Float = styled.img``;
