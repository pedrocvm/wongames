import Button from 'components/Button';
import Heading from 'components/Heading';
import Radio from 'components/Radio';
import Link from 'next/link';
import { useState } from 'react';
import { Add, ShoppingCart } from 'styled-icons/material-outlined';
import * as S from './styles';

export type PaymentOptionsProps = {
  cards?: PaymentCard[];
  handlePayment: () => void;
};

export type PaymentCard = {
  number: string;
  flag: string;
  img: string;
};

const PaymentOptions = ({ cards = [], handlePayment }: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" lineBottom size="small">
          Payment
        </Heading>

        <S.CardsWrapper>
          {!!cards.length && (
            <S.CardsList>
              {cards?.map((card) => (
                <S.CardItem key={card.number}>
                  <S.CardInfo>
                    <img src={card.img} alt={card.flag} />
                    {card.number}
                  </S.CardInfo>
                  <Radio
                    name="credit-card"
                    id={card.number}
                    value={card.number}
                    onCheck={() => {
                      setChecked(true);
                    }}
                  />
                </S.CardItem>
              ))}
            </S.CardsList>
          )}

          <S.AddCard role="button">
            <Add size={14} /> Add a new credit card
          </S.AddCard>
        </S.CardsWrapper>
      </S.Body>

      <S.Footer>
        <Link href="/">
          <Button as="a" fullWidth minimal>
            Continue shopping
          </Button>
        </Link>
        <Button
          fullWidth
          icon={<ShoppingCart />}
          onClick={() => handlePayment()}
          disabled={!checked}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  );
};

export default PaymentOptions;
