import GameItem, { GameItemProps } from 'components/GameItem';
import Heading from 'components/Heading';
import * as S from './styles';

export type CartListProps = {
  items: GameItemProps[];
  total: string;
};

const CartList = ({ items, total }: CartListProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom size="small">
      Items
    </Heading>
    <S.Content>
      {items.map((item) => (
        <GameItem key={item.title} {...item} />
      ))}
    </S.Content>

    <S.Footer>
      Total: <S.Total>{total}</S.Total>
    </S.Footer>
  </S.Wrapper>
);

export default CartList;
