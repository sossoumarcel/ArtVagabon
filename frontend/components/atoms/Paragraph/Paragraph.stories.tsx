import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import Paragraph from './Paragraph';

const meta: Meta<typeof Paragraph> = {
  title: 'Atoms/Paragraph',
  component: Paragraph,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['medium', 'small'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'This is a medium paragraph. It is used for standard body text.',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'This is a small paragraph. It is used for less important text.',
  },
};
