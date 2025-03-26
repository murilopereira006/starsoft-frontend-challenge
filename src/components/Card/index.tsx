'use client';

import Image from 'next/image';

import Button from '../Button';
import { Box, Description, Price, ProductName } from './styles';

const Card = () => {
  return (
    <Box>
      <Image src={''} alt='Product image' width={295} />
      <ProductName>Lorem Ipsum</ProductName>
      <Description>Redesigned from scratch and completely revised.</Description>

      <Price>
        <span>Price:</span>
        <span>$ 1.000,00</span>
      </Price>

      <Button>COMPRAR</Button>
    </Box>
  );
};

export default Card;
