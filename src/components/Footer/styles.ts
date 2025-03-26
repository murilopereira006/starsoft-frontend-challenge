import styled from 'styled-components';
import { theme } from './../../styles/theme';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: ${theme.layout.footerHeight};

  position: fixed;
  bottom: 0;
  padding: 0 40px;
`;

export const RightsText = styled.p`
  font-size: ${theme.typography.sizes.small};

  color: ${theme.colors.text.primary};
  opacity: 0.44;
`;
