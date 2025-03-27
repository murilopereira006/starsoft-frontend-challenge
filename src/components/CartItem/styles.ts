import { theme } from '@/styles/theme';
import { styled } from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 650px;
  height: 200px;

  background-color: ${theme.colors.gray};
  border-radius: ${theme.borders.radius.medium};

  padding: ${theme.spacing.medium} ${theme.spacing.large};
  gap: ${theme.spacing.medium};
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;
`;

export const ProductName = styled.h2`
  font-size: ${theme.typography.sizes.large};
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0%;

  color: ${theme.colors.text.primary};
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
  align-items: center;

  font-size: ${theme.typography.sizes.base};
  font-weight: 600;

  color: ${theme.colors.text.primary};

  margin: ${theme.spacing.base} 0;
  gap: ${theme.spacing.small};
`;

export const DeleteBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
