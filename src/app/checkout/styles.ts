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
