import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: ${theme.layout.headerHeight};

  padding: 0 40px;
  border-bottom: 1px solid var(--foreground);
`;

export const LogoImg = styled.img`
  width: auto;
  height: 50px;
`;
