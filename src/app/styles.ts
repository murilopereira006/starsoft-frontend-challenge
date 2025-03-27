import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: calc(
    100vh - ${theme.layout.headerHeight} - ${theme.layout.footerHeight}
  );
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 80%;

  gap: 1.5rem;
  margin: ${theme.spacing.large} 0;
`;
