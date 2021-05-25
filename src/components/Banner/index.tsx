import * as S from './styles';
import Button from 'components/Button';
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon';

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  hasRibbon?: boolean;
  ribbonText?: string;
  ribbonSize?: RibbonSizes;
  ribbonColor?: RibbonColors;
};

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  hasRibbon = false,
  ribbonText,
  ribbonSize,
  ribbonColor
}: BannerProps) => (
  <S.Wrapper>
    {hasRibbon && (
      <Ribbon size={ribbonSize} color={ribbonColor}>
        {ribbonText}
      </Ribbon>
    )}
    <S.Image src={img} role="img" aria-label={title} />

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
);

export default Banner;
