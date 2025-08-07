import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Heading from './Heading';
import { HEADING_TAGS, HEADING_VARIANTS } from './types';

const meta: Meta<typeof Heading> = {
  title: 'Atoms/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: { type: 'select' },
      options: HEADING_TAGS,
    },
    variant: {
      control: { type: 'select' },
      options: HEADING_VARIANTS,
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    as: 'h1',
    variant: 'primary',
    children: 'This is a Primary Heading',
  },
};

export const Secondary: Story = {
  args: {
    as: 'h1',
    variant: 'secondary',
    children: 'This is a Secondary Heading',
  },
};

export const SemanticLevels: Story = {
  render: (args) => (
    <div>
      {HEADING_TAGS.map((tag) => (
        <div key={tag} style={{ marginBottom: '1rem' }}>
          <Heading {...args} as={tag}>
            This is a &lt;{tag}&gt; tag
          </Heading>
        </div>
      ))}
    </div>
  ),
  args: {
    variant: 'primary',
  },
  name: 'All Semantic Levels (Primary)',
};

export const SemanticLevelsSecondary: Story = {
  ...SemanticLevels,
  args: {
    variant: 'secondary',
  },
  name: 'All Semantic Levels (Secondary)',
};
