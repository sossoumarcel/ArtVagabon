import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite'; // ✅ ← ICI l'import manquant

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    label: 'Disabled Button',
    isDisabled: true,
  },
};

export const LongLabel: Story = {
  args: {
    variant: 'primary',
    label: 'This is a Button with a very long label to check text wrapping',
  },
};
