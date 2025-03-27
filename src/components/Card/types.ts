export type CardProps = {
  id?: number;
  name: string;
  description: string;
  price: number;
  image: string;
  action: () => void;
  createdAt?: string;
};
