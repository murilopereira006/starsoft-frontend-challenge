import { useCallback, useState } from 'react';

import { ProductsAPI } from '@/api/endpoints/products';
import { ProductListResponse } from '@/api/types';

export const useProducts = () => {
  const [data, setData] = useState<ProductListResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(
    async (params?: Record<string, string | number>) => {
      setLoading(true);
      try {
        const response = await ProductsAPI.getAll(params);
        setData(response.data);
        return response.data;
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
        return null;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { data, loading, error, fetchProducts };
};
