import { theme } from '@/styles/theme';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 4rem;
  height: 1.8rem;

  background-color: ${theme.colors.background};
  border-radius: ${theme.borders.radius.medium};

  padding: 0 10px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.text.primary};
  background-color: transparent;
  border: none;

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;
