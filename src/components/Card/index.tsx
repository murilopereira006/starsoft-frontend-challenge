'use client';

import Image from 'next/image';

import Button from '../Button';
import { CardProps } from './types';

import EtheriumIcon from '@/../public/assets/etherium.png';

import { Box, Description, Price, ProductName } from './styles';

const Card = ({ name, description, price, image = '' }: CardProps) => {
  return (
    <Box>
      <Image
        src={image}
        alt={name}
        width={295}
        height={258}
        style={{ borderRadius: '8px' }}
      />

      <ProductName>{name}</ProductName>
      <Description>{description}</Description>

      <Price>
        <Image src={EtheriumIcon} alt='Etherium icon' width={30} height={30} />
        <span>{price} ETH</span>
      </Price>

      <Button action={() => console.log('comprar')}>COMPRAR</Button>
    </Box>
  );
};

export default Card;
