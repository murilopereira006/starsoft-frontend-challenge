import type { Meta, StoryObj } from '@storybook/react';

import NumericSelector from './index';

const meta: Meta<typeof NumericSelector> = {
  component: NumericSelector,
};

export default meta;
type Story = StoryObj<typeof NumericSelector>;

export const Primary: Story = {
  args: {
    value: 2,
    updateValue: () => console.log('Update value of value'),
  },
};
