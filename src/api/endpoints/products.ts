import apiClient from '../client';
import { ProductListResponse } from '../types';

export const ProductsAPI = {
  async getAll(params?: {
    category?: string;
    page?: number;
    limit?: number;
    sort?: 'asc' | 'desc';
  }) {
    return apiClient.get<ProductListResponse>('/products', { params });
  },

  async getById(id: string) {
    return apiClient.get(`/v1/products/${id}`);
  },
};
