'use client';

import Image from 'next/image';

import Button from '../Button';
import { CardProps } from './types';

import { Box, Description, Price, ProductName } from './styles';

const Card = ({ title, description, price }: CardProps) => {
  return (
    <Box>
      <Image src={''} alt='Product image' width={295} />
      <ProductName>{title}</ProductName>
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
