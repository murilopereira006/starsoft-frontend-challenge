import type { Meta, StoryObj } from '@storybook/react';

import Card from './index';

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    name: 'Product name',
    description: 'Product description',
    price: 12,
    image:
      'https://images.pexels.com/photos/29799615/pexels-photo-29799615/free-photo-of-reflexao-da-cerveja-perfeita.jpeg',
  },
};
