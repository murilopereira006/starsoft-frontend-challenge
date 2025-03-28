'use client';

import { useEffect } from 'react';

import { useProducts } from '@/hooks/useProducts';
import { useAppDispatch } from '@/hooks/useRedux';

import Button from '@/components/Button';
import Card from '@/components/Card';

import { Product } from '@/api/types';
import { addItem } from '@/store/slices/cartSlice';
import { Grid, Wrapper } from './styles';

export default function Page() {
  const dispatch = useAppDispatch();
  const { data, loading, error, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts({ page: 1, limit: 4 });
  }, [fetchProducts]);

  if (loading) {
    return <Wrapper>Carregando produtos...</Wrapper>;
  }

  if (error) {
    return <Wrapper>Erro: {error}</Wrapper>;
  }

  return (
    <Wrapper>
      <Grid>
        {data?.data.map((product: Product) => (
          <Card
            key={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
            action={() => dispatch(addItem(product))}
            // action={() => console.log('adicionando ao carr', product)}
          />
        ))}
      </Grid>

      <div>
        <Button
          action={() => console.log('loading more products')}
          variant='secondary'
          size='sm'
        >
          Carregar mais
        </Button>
      </div>
    </Wrapper>
  );
}
