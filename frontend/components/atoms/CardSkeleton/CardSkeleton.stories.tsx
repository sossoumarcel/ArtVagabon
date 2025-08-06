
import React from 'react';
import { Story, Meta } from '@storybook/react';
import CardSkeleton from './CardSkeleton';
import { CardSkeletonProps } from './types';

export default {
  title: 'Atoms/CardSkeleton',
  component: CardSkeleton,
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    imageHeight: { control: 'text' },
  },
} as Meta;

const Template: Story<CardSkeletonProps> = (args) => <CardSkeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '300px',
  height: 'auto',
  imageHeight: '150px',
};

export const Grid = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
    <CardSkeleton width="100%" imageHeight="120px" />
    <CardSkeleton width="100%" imageHeight="120px" />
    <CardSkeleton width="100%" imageHeight="120px" />
  </div>
);
