import Link from 'next/link';
import {
  Favorite,
  FavoriteBorder,
  AddShoppingCart
} from '@styled-icons/material-outlined';
import * as S from './styles';
import Button from 'components/Button';
import Ribbon from 'components/Ribbon';
import { RibbonColors, RibbonSizes } from 'components/Ribbon';
import formatPrice from 'utils/formatPrice';

export type GameCardProps = {
  title: string;
  slug: string;
  developer: string;
  img: string;
  price: number;
  promotionalPrice?: number;
  favorite?: boolean;
  onFav?: () => void;
  hasRibbon?: boolean;
  ribbonText?: string;
  ribbonSize?: RibbonSizes;
  ribbonColor?: RibbonColors;
};

const GameCard = ({
  title,
  slug,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  onFav,
  hasRibbon = false,
  ribbonText,
  ribbonSize = 'small',
  ribbonColor = 'primary'
}: GameCardProps) => (
  <S.Wrapper>
    {hasRibbon && (
      <Ribbon size={ribbonSize} color={ribbonColor}>
        {ribbonText}
      </Ribbon>
    )}
    <Link href={`game/${slug}`} passHref>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
    </Link>

    <S.Content>
      <Link href={`game/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </Link>

      <S.FavButton role="button" onClick={onFav}>
        {favorite ? (
          <Favorite aria-label="Remove from Wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </S.FavButton>

      <S.BuyBox>
        {!!promotionalPrice && (
          <S.Price isPromotional>{formatPrice(price)}</S.Price>
        )}
        <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
        <Button icon={<AddShoppingCart />} size="small"></Button>
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
);

export default GameCard;
