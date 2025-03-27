'use client';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { useProducts } from '@/hooks/useProducts';
import { Key, useEffect } from 'react';
import { Grid, Wrapper } from './styles';

export default function Page() {
  const { data, loading, error, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts({ page: 1, limit: 10 });
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
        {data?.data.map(
          (product: {
            id: Key | null | undefined;
            name: string;
            description: string;
            price: number;
          }) => (
            <Card
              key={product.id}
              title={product.name}
              description={product.description}
              price={product.price}
            />
          )
        )}
      </Grid>

      <div>
        <Button
          action={() => console.log('loading more products')}
          variant='secondary'
          size='sm'
        >
          Finalizar compra
        </Button>
      </div>
    </Wrapper>
  );
}
