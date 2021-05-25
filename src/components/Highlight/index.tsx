import * as S from './styles';
import Heading from 'components/Heading';

export type AlignmentTypes = 'left' | 'right';

export type HighlightProps = {
  backgroundImg: string;
  floatImg: string;
  align?: AlignmentTypes;
};

const Highlight = ({
  backgroundImg,
  floatImg,
  align = 'left'
}: HighlightProps) => (
  <S.Wrapper>
    <Heading lineLeft lineColor="secondary">
      Most Popular
    </Heading>

    <S.Banner align={align}>
      <S.Background src={backgroundImg} />
      <S.Float src={floatImg} />
    </S.Banner>
  </S.Wrapper>
);

export default Highlight;
