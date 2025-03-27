import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 345px;
  height: 555px;

  padding: ${theme.spacing.medium};
  background-color: ${theme.colors.foreground};
  border-radius: ${theme.borders.radius.medium};
`;

export const ProductName = styled.h2`
  font-size: ${theme.typography.sizes.large};
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0%;

  color: ${theme.colors.text.primary};

  margin-top: ${theme.spacing.large};
`;

export const Description = styled.h6`
  font-size: ${theme.typography.sizes.small};
  font-weight: 500;

  color: ${theme.colors.text.secondary};
  margin: ${theme.spacing.small} 0;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Price = styled.div`
  display: flex;
  justify-content: flex-start;

  font-size: ${theme.typography.sizes.large};
  font-weight: 500;

  color: ${theme.colors.text.primary};

  margin: ${theme.spacing.large} 0;
  gap: ${theme.spacing.small};
`;
