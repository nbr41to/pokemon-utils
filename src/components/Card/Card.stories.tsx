import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from './Card';

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  product: {
    id: '1',
    title: 'Product 1',
    description: 'Product 1 description',
    price: 100,
    thumbnail: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
  },
};
