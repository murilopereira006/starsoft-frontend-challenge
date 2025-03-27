'use client';

import Button from '@/components/Button';
import CartItem from '@/components/CartItem';

import { BoxContent, Wrapper } from './styles';

import { CartItemProps } from '@/components/CartItem/types';
import { mockCart } from './mock';

export default function Checkout() {
  return (
    <Wrapper>
      <BoxContent>
        <h1>Checkout</h1>

        {mockCart.map((item: Partial<CartItemProps>) => (
          <CartItem
            key={'cart item ' + item.id}
            name={item.name ?? ''}
            description={item.description ?? ''}
            price={item.price ?? 0}
            quant={item.quant}
            image={''}
          />
        ))}

        <h1>Total</h1>

        <Button action={() => console.log('finalizar compra')}>
          FINALIZAR COMPRA
        </Button>
      </BoxContent>
    </Wrapper>
  );
}
