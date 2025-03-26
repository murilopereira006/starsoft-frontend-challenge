'use client';

import Link from 'next/link';
import { StyledH1 } from './styles';

const Header = () => {
  return (
    <header>
      <StyledH1>Starsoft</StyledH1>
      <Link href='/'>Home</Link>
      <Link href='/checkout'>Checkout</Link>
    </header>
  );
};

export default Header;
