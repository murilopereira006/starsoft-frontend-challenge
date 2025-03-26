import { theme } from '@/styles/theme';
import { styled } from 'styled-components';
import { ButtonProps } from './types';

const crossSizeButton = {
  full: '100%',
  sm: '290px',
  md: '400px',
  lg: '620px',
};

export const ButtonStyled = styled.button<Partial<ButtonProps>>`
  width: ${(props) => crossSizeButton[props.size || 'full']};
  height: 65px;

  border-radius: ${theme.borders.radius.medium};
  background-color: ${(props) =>
    props.variant === 'primary' ? theme.colors.primary : theme.colors.gray};
  color: ${theme.colors.text.secondary};

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.75 : 1)};
  border: none;
`;

export const Text = styled.span`
  font-size: ${theme.typography.sizes.base};
  font-weight: 600;

  color: ${theme.colors.text.primary};
`;
