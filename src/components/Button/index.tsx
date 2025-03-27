import { ButtonStyled, Text } from './styles';
import { ButtonProps } from './types';

const Button = ({
  variant = 'primary',
  size = 'full',
  disabled = false,
  children,
  action,
}: ButtonProps) => {
  return (
    <ButtonStyled
      onClick={action}
      disabled={disabled}
      variant={variant}
      size={size}
    >
      <Text>{children}</Text>
    </ButtonStyled>
  );
};

export default Button;
