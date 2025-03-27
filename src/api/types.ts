export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  createdAt: string;
};

export type ProductListResponse = {
  data: Product[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
};
