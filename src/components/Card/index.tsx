'use client';

import Image from 'next/image';

import Button from '../Button';
import { CardProps } from './types';

import { Box, Description, Price, ProductName } from './styles';

const Card = ({ name, description, price, image = '' }: Partial<CardProps>) => {
  return (
    <Box>
      <Image src={image} alt='Product image' width={295} height={258} />
      <ProductName>{name}</ProductName>
      <Description>{description}</Description>

      <Price>
        <span>Price:</span>
        <span>{price}</span>
      </Price>

      <Button action={() => console.log('comprar')}>COMPRAR</Button>
    </Box>
  );
};

export default Card;
