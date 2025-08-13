import React from 'react';
import { StoryFn, Meta } from '@storybook/react-vite';
import EmptyState from './EmptyState';
import { EmptyStateProps } from './types';

export default {
  title: 'Atoms/EmptyState',
  component: EmptyState,
} as Meta;

const Template: StoryFn<EmptyStateProps> = (args) => <EmptyState {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'Aucune donnée disponible.',
};

