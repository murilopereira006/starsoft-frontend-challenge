'use client'; // styled-components use React.createContext, which is not available in the serve-side

import Button from '@/components/Button';
import Card from '@/components/Card';
import { Grid, Wrapper } from './styles';

export default function Page() {
  return (
    <Wrapper>
      <Grid>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
      <div>
        <Button
          action={() => console.log('loading products')}
          variant='secondary'
          size='sm'
        >
          Finalizar compra
        </Button>
      </div>
    </Wrapper>
  );
}
