import Image from 'next/image';

import { useAppDispatch } from '@/hooks/useRedux';
import { removeItem } from '@/store/slices/cartSlice';

import EtheriumIcon from '@/../public/assets/etherium.png';
import {
  Card,
  DeleteBox,
  Description,
  Price,
  ProductName,
  TextContent,
} from './styles';

import { CartItemProps } from './types';

const CartItem = ({
  id,
  image,
  name,
  description,
  price,
  quant,
}: CartItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <Card>
      <Image
        src={image}
        alt={'Imagem do produto ' + name}
        width={160}
        height={160}
        style={{ borderRadius: '8px' }}
      />

      <TextContent>
        <div>
          <ProductName>{name}</ProductName>
          <Description>{description}</Description>

          <Price>
            <Image
              src={EtheriumIcon}
              alt='Etherium icon'
              width={30}
              height={30}
            />
            <span>{price} ETH</span>
          </Price>
        </div>

        <DeleteBox>
          <span>Quantidade: {quant}</span>
          <button onClick={() => dispatch(removeItem(id.toString()))}>
            Remover
          </button>
        </DeleteBox>
      </TextContent>
    </Card>
  );
};

export default CartItem;
