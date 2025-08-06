
import React from 'react';
import { Story, Meta } from '@storybook/react';
import CardSkeleton from './CardSkeleton';

export default {
  title: 'Atoms/CardSkeleton',
  component: CardSkeleton,
} as Meta;

const Template: Story = (args) => <CardSkeleton {...args} />;

export const Default = Template.bind({});

export const Grid = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
  </div>
);
