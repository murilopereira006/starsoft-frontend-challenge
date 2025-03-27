'use client';

import Button from '@/components/Button';
import CartItem from '@/components/CartItem';

import { BoxContent, Wrapper } from './styles';

import { CartItemProps } from '@/components/CartItem/types';

import { useAppSelector } from '@/hooks/useRedux';

export default function Checkout() {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <Wrapper>
      <BoxContent>
        <h1>Checkout</h1>

        {cartItems ? (
          cartItems.map((item: CartItemProps) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              quant={item.quant}
              image={item.image}
            />
          ))
        ) : (
          <p>Nenhum item no carrinho</p>
        )}

        <h1>Total</h1>

        <Button action={() => console.log('finalizar compra')}>
          FINALIZAR COMPRA
        </Button>
      </BoxContent>
    </Wrapper>
  );
}
