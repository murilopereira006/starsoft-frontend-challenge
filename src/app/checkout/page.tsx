'use client';

import Image from 'next/image';

import Button from '@/components/Button';
import CartItem from '@/components/CartItem';
import { CartItemProps } from '@/components/CartItem/types';
import { useAppSelector } from '@/hooks/useRedux';

import EtheriumIcon from '@/../public/assets/etherium.png';
import {
  BoxContent,
  BoxItems,
  ETHPrice,
  NotFound,
  Price,
  Wrapper,
} from './styles';

export default function Checkout() {
  const cartItems = useAppSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (!cartItems.length)
    return (
      <Wrapper>
        <NotFound>Nenhum produto encontrado no carrinho de compras</NotFound>
      </Wrapper>
    );

  return (
    <Wrapper>
      <BoxContent>
        <BoxItems>
          {cartItems.map((item: CartItemProps) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              quantity={item.quantity}
              image={item.image}
            />
          ))}
        </BoxItems>

        <Price>
          <span>TOTAL</span>
          <ETHPrice>
            <Image
              src={EtheriumIcon}
              alt='Etherium icon'
              width={30}
              height={30}
            />
            <span>{total} ETH</span>
          </ETHPrice>
        </Price>

        <Button action={() => console.log('finalizar compra')}>
          FINALIZAR COMPRA
        </Button>
      </BoxContent>
    </Wrapper>
  );
}
