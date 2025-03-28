'use client'; // styled-components use React.createContext, which is not available in the serve-side

import Logo from '@/../public/logo.png';
import { useAppSelector } from '@/hooks/useRedux';
import { theme } from '@/styles/theme';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { LogoImg, Wrapper } from './styles';

const Header = () => {
  const cartItemsCount = useAppSelector((state) => state.cart.items.length);

  return (
    <header>
      <Wrapper>
        <Link href='/'>
          <LogoImg src={Logo.src} alt='Starsoft logo' />
        </Link>
        <Link
          href='/checkout'
          style={{
            width: '50px',
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
          }}
        >
          <ShoppingBagIcon style={{ color: theme.colors.primary }} />
          <span
            style={{ color: theme.colors.text.primary, textDecoration: 'none' }}
          >
            {cartItemsCount}
          </span>
        </Link>
      </Wrapper>
    </header>
  );
};

export default Header;
