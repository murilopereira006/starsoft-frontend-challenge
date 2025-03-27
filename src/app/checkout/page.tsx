'use client';

import Button from '@/components/Button';
import CartItem from '@/components/CartItem';

import { BoxContent, BoxItems, NotFound, Wrapper } from './styles';

import { CartItemProps } from '@/components/CartItem/types';

import { useAppSelector } from '@/hooks/useRedux';

export default function Checkout() {
  const cartItems = useAppSelector((state) => state.cart.items);

  if (!cartItems.length)
    return (
      <Wrapper>
        <NotFound>Nenhum produto encontrado no carrinho de compras</NotFound>
      </Wrapper>
    );

  return (
    <Wrapper>
      <BoxContent>
        <h1>Checkout</h1>

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

        <h1>Total</h1>

        <Button action={() => console.log('finalizar compra')}>
          FINALIZAR COMPRA
        </Button>
      </BoxContent>
    </Wrapper>
  );
}
