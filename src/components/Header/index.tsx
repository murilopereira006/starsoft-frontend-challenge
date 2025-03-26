'use client'; // styled-components use React.createContext, which is not available in the serve-side

import Logo from '@/../public/logo.png';
import Link from 'next/link';
import { LogoImg, Wrapper } from './styles';

const Header = () => {
  return (
    <header>
      <Wrapper>
        <LogoImg src={Logo.src} alt='Starsoft logo' />
        <div>
          <Link href='/'>Home</Link>
          <Link href='/checkout'>Checkout</Link>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
