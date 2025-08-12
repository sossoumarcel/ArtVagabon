import React from 'react';

import type { Meta, StoryFn } from '@storybook/react-vite';
import MainLayout  from './MainLayout';

export default {
  title: 'Templates/MainLayout',
  component: MainLayout,
  argTypes: {
    header: {
      control: { type: 'text' },
      description: 'Content for the header slot',
    },
    footer: {
      control: { type: 'text' },
      description: 'Content for the footer slot',
    },
    children: {
      control: { type: 'text' },
      description: 'Content for the main page area',
    },
  },
} as Meta<typeof MainLayout>;

const Template: StoryFn<typeof MainLayout> = (args) => <MainLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  header: <div style={{ padding: '20px', background: '#f0f0f0', borderBottom: '1px solid #ccc' }}>Header Placeholder</div>,
  footer: <div style={{ padding: '20px', background: '#f0f0f0', borderTop: '1px solid #ccc' }}>Footer Placeholder</div>,
  children: <div style={{ padding: '50px', textAlign: 'center', minHeight: '300px', border: '1px dashed #999' }}>Page Content Placeholder</div>,
};