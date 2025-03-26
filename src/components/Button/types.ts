export type ButtonProps = {
  action: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'full' | 'sm' | 'md' | 'lg';
  disabled?: boolean;
};
