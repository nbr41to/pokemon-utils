import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { CreateProductForm } from './CreateProduct';

export default {
  title: 'Example/CreateProductForm',
  component: CreateProductForm,
  argTypes: {},
} as ComponentMeta<typeof CreateProductForm>;

const Template: ComponentStory<typeof CreateProductForm> = (args) => (
  <CreateProductForm {...args} />
);

export const Default = Template.bind({});
Default.args = {};
