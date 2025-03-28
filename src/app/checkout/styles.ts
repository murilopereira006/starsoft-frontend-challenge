import { theme } from '@/styles/theme';
import { styled } from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: calc(
    100vh - ${theme.layout.headerHeight} - ${theme.layout.footerHeight}
  );
`;

export const BoxContent = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100%;

  padding: ${theme.spacing.large};
`;

export const BoxItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.base};

  margin-bottom: ${theme.spacing.large};
`;

export const NotFound = styled.span`
  font-size: ${theme.typography.sizes.large};
  margin-top: ${theme.spacing.large};
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: ${theme.typography.sizes.base};
  font-weight: 600;

  color: ${theme.colors.text.primary};
`;

export const ETHPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: ${theme.spacing.base} 0;
  gap: ${theme.spacing.small};
`;
